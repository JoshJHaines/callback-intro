const identity = function (value) {
  return value
};
const first = function (array, n) {
  let newArr=[]
    for (let i = 0;  i < n; i++){
      newArr.push(array[i])
    }
  return newArr
};

const last = function (array, n) {};

const each = function (collection, callback) {};
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