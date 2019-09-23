export const encodeGetParams = obj =>
  `?${Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")}`;
