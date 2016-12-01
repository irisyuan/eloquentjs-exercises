/* Chapter 3 Solutions */
// 1. Minimum

function min (a,b) {
	if (a<b) return a;
	else return b;
}
// test
console.log(min(0,10));
console.log(min(0,-10));


// 2. Recursion
function isEven(number) {
	if (number == 0)
		return true;
	if (number == 1 || number < 0)
		return false;
	else
		return isEven(number-2);
}
// test
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


// 3. Bean Counting
// Initial countB function
function countBs (text) {
	var countB = 0;
	for (var i=0; i<text.length; i++) {
		if (text.charAt(i) == "B") {
			countB++;
		}
	}
	return countB;
}
console.log(countBs("BBC"));

// New countB function
function countB(text) {
	return countChar(text,"B");
}

function countChar(text,character){
	var charSum = 0;
	var char = String(character);
	for (var i=0; i<text.length; i++) {
		if (text.charAt(i) == char) {
			charSum++;
		}
	}
	return charSum;
}

console.log(countChar("kakkerlak", "k"));

