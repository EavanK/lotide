const takeUntil = (array, callback) => {

  const result = [];

  for (const data of array) {

    if (callback(data)) {
      break;
    }
    result.push(data);
  }
  return result;
};


// as long as false, push. on first TRUE, return

module.exports = takeUntil;