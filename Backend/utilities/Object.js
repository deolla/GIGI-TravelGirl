const unflattenObject = function (obj) {
  return Object.keys(obj).reduce((acc, key) => {
    const keys = key.split(".");
    let temp = acc;
    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        temp[keys[i]] = JSON.parse(obj[key]);
      } else {
        temp[keys[i]] = temp[keys[i]] || {};
        temp = temp[keys[i]];
      }
    }
    return acc;
  }, {});
};

const flattenObject = function (obj, prefix = "") {
  return Object.keys(obj).reduce((acc, key) => {
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      Object.assign(acc, flattenObject(obj[key], prefixedKey));
    } else {
      acc[prefixedKey] = JSON.stringify(obj[key]);
    }
    return acc;
  }, {});
};

export default { unflattenObject, flattenObject };
//
