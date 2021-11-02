const map = function(arr, callback) { // function returns an array
  
  const results = [];
  
  for (let word of arr) {
    
    results.push(callback(word)); // patameter changes to word
    
  }
  return results;
};

module.exports = map;