const without = (source, remove) => {

  let result = [];

  for (const element of source) {

    if (!remove.includes(element)) result.push(element);

  }
  return result;
};

module.exports = without;