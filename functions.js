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
  let newArr = []
  for (i=0; i < collection.length; i++){
    let tempArr = []
    tempArr.push(collection[i])
    tempArr.push(i)
    tempArr.push(collection)
    newArr.push(tempArr)
  }
  return newArr
};

var animals = ["ant", "bat", "cat"]
each(animals)
 let test1 = each(animals)
 test1



const indexOf = function (array, target) {};
const map = function (collection, iterator) {};

module.exports = {
	identity,
	first,
	last,
	each,
	indexOf,
	map,
};
