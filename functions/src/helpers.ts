import { SupportedHostname } from "./types";

const supportedHostnames: SupportedHostname[] = ["damndelicious.net"];

export const isSupportedHostname = (
  hostname: any
): hostname is SupportedHostname => {
  return !!supportedHostnames.find(h => h === hostname);
};
