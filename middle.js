const middle = arr => {

  const result = [];

  let i = arr.length - 1;

  if (i !== 0 && i !== 1) {
      
    if (i % 2 === 0) {
      i /= 2;
      result.push(arr[i]);
    
    } else {
      
      i = Math.floor(i / 2);
      result.push(arr[i], arr[i + 1]);
    }
  }
  return result;
};


module.exports = middle;