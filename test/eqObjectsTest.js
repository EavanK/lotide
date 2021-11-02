const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe('#equal objets', () => {
  
  it('returns true if given objects are equal', () => {
    
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    
    assert.isTrue(eqObjects(ab, ba));
  });

  it('returns false if given objects are not equal', () => {
    
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    
    assert.isFalse(eqObjects(ab, abc));
  });

  it('returns true if given objects are equal', () => {
    
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    
    assert.isTrue(eqObjects(cd, dc));
  });

  it('returns false if given objects are not equal', () => {
    
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    
    assert.isFalse(eqObjects(cd, cd2));
  });

  it('returns true if given objects are equal', () => {
    
    const aa = { a: [1, 2, 3], b: [1, 3, 5] };
    const bb = { b: [1, 3, 5], a: [1, 2, 3] };
    
    assert.isTrue(eqObjects(aa, bb));
  });
});