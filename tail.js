const tail = (array) => {

  let result = '[]';

  if (array.length !== 0 && array.length !== 1)

    return array.slice(1);
  
  return result;
};


module.exports = tail;