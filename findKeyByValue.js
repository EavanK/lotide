const findKeyByValue = (obj, value) => {

  for (const keys in obj) {

    if (obj[keys] === value) return keys;
  }
};


module.exports = findKeyByValue;