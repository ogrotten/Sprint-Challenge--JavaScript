// ==== Callbacks ====

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */

function clg(x) {
	console.log(x);
}

/* 
-----------------------------
*/

function mash(x, y) {
	return `${x} and ${y}`;
}
function consume(a, b, cb) {
	return cb(a, b);
}
clg(consume("Penn", "Teller", mash));

/* Step 2: Create several functions to callback with consume();
* Create a function named add that returns the sum of two numbers
* Create a function named multiply that returns the product of two numbers
* Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(x, y) {
	return x + y;
}
function mult(x, y) {
	return x * y;
}
function greet(x, y) {
	return `Yo ${x} ${y} what is it that is up?`;
}

clg(consume(23, 58, add));
clg(consume(23, 58, mult));
clg(consume("Penn", "Teller", greet));


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, mult)); // 160
console.log(consume("Mary", "Poppins", greet)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation:
/* 
	`nestedFunction` is within the scope of the Higher Order Function `myFunction` and therefore has access to all of it's properties
*/

const external = "I'm outside the function";

function myFunction() {
	console.log(external);
	const internal = "Hello! I'm inside myFunction!";

	function nestedFunction() {
		console.log(internal);
	}
	nestedFunction();
}
myFunction();
