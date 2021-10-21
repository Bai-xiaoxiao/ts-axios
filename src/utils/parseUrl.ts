export const parseUrl = (url: string) => {
  const parser = document.createElement("a");
  parser.href = url;
  const { host, href, origin } = parser;
  return {
    host,
    href,
    origin,
  };
};

export const concatUrl = (url: string, baseURL?: string) => {
  if (baseURL) {
    return `${baseURL}${url}`;
  }
  return url;
};
