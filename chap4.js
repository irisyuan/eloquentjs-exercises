// Chapter 4 solutions

// Problem Sum of a range and range step
function range(start, end) {
	var arr = [];
	for (var i=start; i <= end; i++) {
		arr.push(i);
	}
	return arr;
}
//console.log(range(1,10));
function sum(array) {
	var sum = 0;
	for (var i=0; i < array.length;i++){
		sum += array[i];
	}
	return sum;
}
//console.log(sum(range(1,1)));
/* Modified range takes third arg to accept "step" of increment
function range(start, end, step) {
	if (step == null) step = 1;
	var arr = [];
	if (step > 0 && start < end) {
		for (var i=start; i <= end; i += step) {
			arr.push(i);
		}
	} else if (step < 0 && start > end) {
		for (var i=start; i >=end; i+=step) {
			arr.push(i);
		}
	} else {
		console.log("Starting value must be less than end if step is positive");
	}
	return arr;
}
console.log(range(1,10,-2));
*/


// Problem 2 Reversing an Array
function reverseArray(oldArray) {
	var newArr = [];
	for (var i=oldArray.length-1; i >= 0; i--){
		newArr.push(oldArray[i]);
	}
	return newArr;
}
//console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(oldArray){
	var iterations = Math.floor(oldArray.length/2);
	var counter = oldArray.length-1;
	for (var i=0; i< iterations; i++) {
		var temp = oldArray[i];
		oldArray[i] = oldArray[counter];
		oldArray[counter] = temp;
		counter--;
	}
	return oldArray;
}
console.log(reverseArrayInPlace(["A", "B", "C","D"]));

// Problem 3 A List
// Produce list from array
function arrayToList(array) {
	var list = null;
	for (var i = array.length-1; i>=0; i--) {
		list = { value: array[i], rest: list };
	}
	return list;
}
// Produce array from list
function listToArray(list){
	var array = [];
	for (var node = list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}
function prepend(value,list){
	return { value: value, rest: list };
}
// should be recursive
function nth(list,num){
	if (!list) 
		return undefined;
	else if (num == 0) 
		return list.value;
	else
		return nth(list.rest, num-1);
	// if num not in list return undefined
	// else return element at that position
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


// Problem 4 Deep Comparison
function deepEqual(a,b) {

	if (a === b) return true;

	// if both inputs are objects, call recursive deepEqual
	if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}

/*
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
*/