const identity = function (value) {
	return value;
};

const first = function (array, n) {
	let newArr = [];
	if (n === undefined) {
		return array[0];
	} else {
		for (let i = 0; i < n; i++) {
			newArr.push(array[i]);
		}
		return newArr;
	}
};

const last = function (array, n) {
	let newArr = [];
	if (n === undefined) {
		return array[array.length - 1];
	}
	if (n === 0) {
		return [];
	}
	if (n >= array.length) {
		return array;
	} else {
		for (i = array.length - n; i < array.length; i++) {
			newArr.push(array[i]);
		}
		return newArr;
	}
};

const each = function (collection, callback) {
	if (collection instanceof Array) {
		for (i = 0; i < collection.length; i++) {
			callback (collection[i], i, collection)
		}
	} else {
    for ( let prop in collection) {
      callback(collection[prop], prop, collection)
    }
  }
};


const indexOf = function (array, target) {
  for (let i=0; i <array.length; i++){
    if (array[i] === target){
      return i
    }
  }
  return -1
};

const map = function (collection, callback) {
  let result = [];

  each(collection, function (item){
    result.push(callback(item))
  });
  return result
};

module.exports = {
	identity,
	first,
	last,
	each,
	indexOf,
	map,
};
