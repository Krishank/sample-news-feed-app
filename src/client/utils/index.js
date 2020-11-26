export const nthIndex = (str, pat, n) => {
  var L = str.length,
    i = -1;
  while (n-- && i++ < L) {
    i = str.indexOf(pat, i);
    if (i < 0) break;
  }
  return i;
};

export const getForMattedURL = (url) =>
  url && url.substring(0, nthIndex(url, "/", 3));

export const getBottomColor = (dataLength) =>
  dataLength % 2 == 0 ? "#e6e6df" : "#f6f6ef";
