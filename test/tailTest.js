const assert = require('chai').assert;
const tail = require('../tail.js');


describe('#tail', () => {

  
  it('returns [Labs] for [Hello, Lighthouse, Labs]', () => {

    const result = tail(['Hello', 'Lighthouse', 'Labs']);
    
    assert.deepEqual(tail(result), ['Labs']);

  });


  it('returns ["Labs"] for  ["Yo Yo", "Lighthouse", "Labs"]', () => {

    const words = ["Yo Yo", "Lighthouse", "Labs"];

    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });


  it('returns [] for  ["Hyunsu"]', () => {

    const myName = ['Hyunsu'];

    assert.deepEqual(tail(myName), []);
  });


  it('returns [] for  []', () => {

    const empty = [];

    assert.deepEqual(tail(empty), []);
  });

});