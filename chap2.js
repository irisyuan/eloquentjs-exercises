/* Chapter 2: Program Structure Problems


// Problem 1 - Print Triangle #
for (var line = "#"; line.length <8; line+="#")
  console.log(line);

// Problem 2 - FizzBuzz
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}


// Problem 3 - Chess Grid
var size = 8;
var output = "";

for (var i=1; i<=size; i++) {
	for (var j=1; j<=size; j++) {
		if ((i+j)%2 == 0)
			output += "O";			
		else
			output += "X";
	}
	output += "\n";
}

console.log(output + "\n");
*/





