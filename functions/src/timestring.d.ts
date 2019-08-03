interface Timestring {
  (str: string): number;
}

declare var timestring: Timestring;

declare module "timestring" {
  export = timestring;
}
