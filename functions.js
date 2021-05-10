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
		return array[array.length-1];
	}
  if (n === 0){
    return []
  }

};

const each = function (collection, callback) {

};
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
