const flatten = arrays => {

  let result = [];

  for (const numbs of arrays) {

    if (Array.isArray(numbs)) {
      
      for (const num of numbs) {

        result.push(num);
      }
    } else result.push(numbs);
  }
  return result;
};

module.exports = flatten;