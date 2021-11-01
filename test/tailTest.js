const assertEqual = require('../assertEqual');
const tail = require('../tail.js');


const result = tail(['Hello', 'Lighthouse', 'Labs']);

assertEqual(result, ['Lighthouse', 'Labs']); // will always fail!
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], 'Labs');



const words = ["Yo Yo", "Lighthouse", "Labs"];

tail(words);
assertEqual(words.length, 3);
assertEqual(tail(words).length, 2);
assertEqual(tail(words)[0], 'Lighthouse');
assertEqual(tail(words)[1], 'Labs');
assertEqual(tail(words)[2], undefined);


//An array with only one element should yield an empty array for its tail
const myName = ['Hyunsu'];
assertEqual(tail(myName), '[]');


// An empty array should yield an empty array for its tail
const empty = [];
assertEqual(tail(empty), '[]');