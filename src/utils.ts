
export const getPort = (url: string): number => {
  if (url.startsWith("https")) {
    return 443;
  }

  if (url.startsWith("http")) {
    const a = url.split(":") as string[];

    // @ts-ignore
    const p = a.at(-1).split("/")[0];

    return Number.isNaN(p) ?  80 : Number.parseInt(p);
  }

  return 80;
}
