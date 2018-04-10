var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  // Place your solution here
  return array[0];
};

 // Returns the first n number of elements in an array.
_.take = function(array, n) {
  if (!n) {
    n = 1;
  }
	// Place your solution here
  return array.slice(0, n);
};

// Returns the last element of an array.
_.last = function(array) {
	// Place your solution here
  return array.pop();
};

// Returns the last n number of elements in an array.
_.takeRight = function(array, n = 1) {
	// Place your solution here
  if (!n) {
    n = 1;
  }
  return array.slice(array.length - n)
};

// Returns a new array with all falsey values removed.
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
	// Place your solution here
  var truthyArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i])) {
      truthyArray.push(array[i]);
    }
  }
  return truthyArray;
};

// Returns a new array of elements in the first argument, but
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
	// Place your solution here
  for (var i = 0; i < arrayOne.length; i++) {
    for (var j = 0; j < arrayTwo.length; j++) {
      if (arrayOne[i] === arrayTwo[j]) {
        arrayOne.splice(i, 1);
      }
    }
  }
  return arrayOne;
};

// Returns element with minimum
// value in an array.
_.min = function(array) {
	// Place your solution here
  let minElement = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minElement) {
      minElement = array[i];
    }
  }
  return minElement;
};

// Returns element with maximum
// value in an array.
_.max = function(array) {
	// Place your solution here
  let maxElement = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
};

// Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
	// Place your solution here
  for (let i = 0; i < array.length; i++) {
    if (array[i] === el) {
      return i;
    }
  }
  return -1;
};

// *************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
  let randomArray = [];
  let rolls = array.length;
  for (let i = 0; i < rolls; i++) {
    let randomIndex = Math.floor(Math.random() * array.length);
    randomArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return randomArray;
};



/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
	// Place your solution here
  if (typeof collection === 'object') {
    return Object.keys(collection).length;
  }
  return collection.length;
};

// Iterates on each element of a collection and
// then returns the original collection.
_.forEach = function(collection, callback) {
	// Place your solution here
  if (typeof collection === 'string' || typeof collection === 'array') {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else if (typeof collection === 'object') {
    for (key in collection) {
      callback(collection[key]);
    }
  }
};

// Iterates on each element of a collection and
// then returns a new array.
_.map = function(collection, callback) {
	// Place your solution here
  let newCollection = [];
  if (typeof collection === 'string' || typeof collection === 'array') {
    for (let i = 0; i < collection.length; i++) {
      newCollection.push(callback(collection[i]));
    }
  } else if (typeof collection === 'object') {
    for (key in collection) {
      newCollection.push(callback(collection[key]));
    }
  }
  return newCollection;
};

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
	// Place your solution here
  let newCollection = [];

  if (typeof collection === 'string' || typeof collection === 'array') {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        newCollection.push(collection[i]);
      }
    }
  } else if (typeof collection === 'object') {
    for (key in collection) {
      if (callback(collection[key])) {
        newCollection.push(collection[key]);
      }
    }
  }
  return newCollection;
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
	// Place your solution here
  let newCollection = [];

  if (typeof collection === 'string' || typeof collection === 'array') {
    for (let i = 0; i < collection.length; i++) {
      if (!callback(collection[i])) {
        newCollection.push(collection[i]);
      }
    }
  } else if (typeof collection === 'object') {
    for (key in collection) {
      if (!callback(collection[key])) {
        newCollection.push(collection[key]);
      }
    }
  }
  return newCollection;
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
	// Place your solution here

};

module.exports = _;
