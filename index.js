
Object.prototype.equals = function(other) {

  if (typeof this !== typeof other)
    return false;
  if (Object.keys(this).length !== Object.keys(other).length)
    return false;
    
  for (let key of Object.keys(this)) {
    if (['object'].includes(typeof this[key]) ) {
      // recurse
      const thisInnerObject = this[key];
      const otherInnerObject = other[key];
      if (! thisInnerObject.equals(otherInnerObject))
        return false;
    } else {
      // make sure they're the same or exit with false
      if (this[key] !== other[key])
      return false;
    }
  }
  return true;
};
