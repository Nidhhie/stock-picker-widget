const EXPIRES_IN = 1000 * 60 * 60 * 24;

const getSearchFromLS = () => {
  let result = localStorage.getItem("search");
  if (!result) return { _total: 0 };
  return JSON.parse(result);
};

export const cacheSearchResults = (
  key: string,
  value: { [k in string]: any }
) => {
  const now = new Date();
  let obj = getSearchFromLS();
  if (Number(obj._total) >= 1000) {
    obj = { _total: 0 };
  }
  obj[key] = {
    data: value,
    expireseIn: now.getTime() + EXPIRES_IN
  };
  obj._total += 1;
  localStorage.setItem("search", JSON.stringify(obj));
};

export const getSearchResultsFromCache = (key: string) => {
  let result = localStorage.getItem("search");
  if (!result) return null;

  const obj = JSON.parse(result);
  if (!obj[key]) return null;
  const { expiresIn, data } = obj[key];
  const now = new Date();

  if (now.getTime() > expiresIn) {
    delete obj[key];
    localStorage.setItem("search", JSON.stringify(obj));
    return null;
  }
  return data;
};
