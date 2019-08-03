import * as functions from "firebase-functions";
import * as cheerio from "cheerio";
import fetch from "node-fetch";
import * as Url from "url-parse";
import { isSupportedHostname } from "./helpers";
import { Scraper, Ingredient, Meta } from "./types";
import * as timestring from "timestring";
import * as cors from "cors";

cors({ origin: true });

const parseDamnDelicious: Scraper = html => {
  const $ = cheerio.load(html);

  // Basic information
  const title = $("h2")
    .first()
    .text();
  const description = $(".summary > p")
    .first()
    .text();
  const pictureUrl = $(".photo2 > img").attr("src");

  // Ingredients
  const ingredients: Ingredient[] = [];
  $(".ingredients > ul")
    .children()
    .each(function(this: string) {
      const raw = $(this).text();
      const sanitized = raw.replace(/\([^)]*\)/, "");
      const matchArray = sanitized.match(/\d(?:[\d \/]*\d)?/);
      const measurement = matchArray ? matchArray[0] : "";
      let name = sanitized.replace(/\d(?:[\d \/]*\d)?/, "").trim();
      name = name[0].toUpperCase() + name.substring(1, name.length);
      ingredients.push({ measurement, name });
    });

  // Directions
  const directions: string[] = [];
  $(".instructions > ol")
    .children()
    .each(function(this: string) {
      directions.push($(this).text());
    });

  // Meta information
  const metaValues: number[] = [];
  $(".post-meta")
    .children()
    .each(function(this: string) {
      const raw = $(this)
        .find("span")
        .text();
      const shouldParse = !raw.toLowerCase().includes("servings");
      metaValues.push(shouldParse ? timestring(raw) : Number(raw.match(/\d*/)));
    });
  const meta: Meta = {
    yield: metaValues[0],
    prepTime: metaValues[1],
    cookTime: metaValues[2],
    totalTime: metaValues[3]
  };

  return { title, description, pictureUrl, ingredients, directions, meta };
};

export const scrapeUrl = functions.https.onRequest(async (req, res) => {
  const rawUrl = req.query.q;
  const url = new Url(rawUrl);
  const hostname = url.hostname;

  if (!isSupportedHostname(hostname)) {
    res
      .status(400)
      .send({ error: `The domain ${url.hostname} is not supported.` });
    return;
  }

  if (hostname === "damndelicious.net") {
    const paths = url.pathname.split("/").filter(p => p !== "");
    if (paths[paths.length - 1] !== "print") {
      paths.push("print");
    }
    paths.unshift("");
    url.set("pathname", paths.join("/"));
  }

  try {
    const html = await fetch(url.toString()).then(r => r.text());
    let data = {};

    switch (hostname) {
      case "damndelicious.net": {
        data = parseDamnDelicious(html);
        break;
      }
      default:
        break;
    }

    res.send({ url: rawUrl, ...data });
  } catch (err) {
    res
      .status(500)
      .send({
        error: "Something went wrong when scraping the url.",
        developerText: err.message
      });
  }
});
