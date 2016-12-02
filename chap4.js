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

// Problem 4 Deep Comparison


