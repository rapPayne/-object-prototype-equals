# How to use
Running index.js will add equals() to the prototype of Object. So ...

```javascript
// Create two objects that are the same
const obj1 = {foo: "bar", baz:"qux", };
const obj2 = {foo: "bar", baz:"qux", };
// Add to Object.prototype
index.js
// Run some tests
console.assert( obj1.equals(obj2) );  // true
console.assert( obj2.equals(obj1) );  // true

// Note that two objects are never truly equal according to JavaScript unless they point to the same object in memory:
console.assert( (obj1 == obj2) === false);  
console.assert( (obj1 === obj2) === false);
// This is why we might want to have this prototype method. 

```