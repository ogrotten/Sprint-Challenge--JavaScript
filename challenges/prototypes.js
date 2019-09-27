/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
function CuboidMakerP(attr) {
	this.length = attr[0];
	this.width = attr[1];
	this.height = attr[2];
}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/
CuboidMakerP.prototype.volume = function() {
	return `CuboidP volume: ${this.length * this.width * this.height}`;
};

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/
CuboidMakerP.prototype.surface = function() {
	return `CuboidP surface area: ${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}\n----`
};

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

const cuboidP = new CuboidMakerP([1, 4, 9])

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidP.volume()); // 100
console.log(cuboidP.surface()); // 130
