const cheerio = require("cheerio");
const fetch = require("node-fetch");
const Url = require("url-parse");
const timestring = require("timestring");

const supportedHostnames = ["damndelicious.net"];

const isSupportedHostname = hostname => {
  return !!supportedHostnames.find(h => h === hostname);
};

const parseDamnDelicious = html => {
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
  const ingredients = [];
  $(".ingredients > ul")
    .children()
    .each(function() {
      const raw = $(this).text();
      const sanitized = raw.replace(/\([^)]*\)/, "");
      const matchArray = sanitized.match(/\d(?:[\d \/]*\d)?/);
      const measurement = matchArray ? matchArray[0] : "";
      let name = sanitized.replace(/\d(?:[\d \/]*\d)?/, "").trim();
      name = name[0].toUpperCase() + name.substring(1, name.length);
      ingredients.push({ measurement, name });
    });

  // Directions
  const directions = [];
  $(".instructions > ol")
    .children()
    .each(function() {
      directions.push($(this).text());
    });

  // Meta information
  const metaValues = [];
  $(".post-meta")
    .children()
    .each(function() {
      const raw = $(this)
        .find("span")
        .text();
      const shouldParse = !raw.toLowerCase().includes("servings");
      metaValues.push(shouldParse ? timestring(raw) : Number(raw.match(/\d*/)));
    });
  const meta = {
    yield: metaValues[0],
    prepTime: metaValues[1],
    cookTime: metaValues[2],
    totalTime: metaValues[3]
  };

  return { title, description, pictureUrl, ingredients, directions, meta };
};

module.exports.scrape = async event => {
  if (!event["queryStringParameters"]) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "You must provide a url to scrape."
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      }
    };
  }

  const rawUrl = event["queryStringParameters"]["q"];
  const url = new Url(rawUrl);
  const hostname = url.hostname;

  if (!isSupportedHostname(hostname)) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: `The domain ${url.hostname} is not supported.`
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      }
    };
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

    return {
      statusCode: 200,
      body: JSON.stringify({ url: rawUrl, ...data }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      }
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Something went wrong when scraping the url.",
        developerText: err.message
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      }
    };
  }
};
