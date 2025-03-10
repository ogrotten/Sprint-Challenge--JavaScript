// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attr) {
// 	this.length = attr[0];
// 	this.width = attr[1];
// 	this.height = attr[2];
// }

class CuboidMaker {
	constructor(attr) {
		this.length = attr[0];
		this.width = attr[1];
		this.height = attr[2];
	}

	// CuboidMaker.prototype.volume = function() {
	// 	return `Cuboid volume: ${this.length * this.width * this.height}`;
	// };
	volume() {
		return `Cuboid volume: ${this.length * this.width * this.height}`;
	}

	// CuboidMaker.prototype.surface = function() {
	// 	return `Cuboid surface area: ${2 * (this.length * this.width + this.length * this.height + this.width * this.height)}`
	// };
	surface() {
		return `Cuboid surface area: ${2 *
			(this.length * this.width +
				this.length * this.height +
				this.width * this.height)}\n----`;
	}
}

const cuboid = new CuboidMaker([4, 9, 16]);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surface()); // 130

/* Stretch Task:

Extend the base class CuboidMaker with a sub class called CubeMaker.

Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.
Test your work by logging out your volume and surface area.
 */

class CUBEMaker extends CuboidMaker{
	constructor(attr){
		super(attr);
	}
}

const cuboidFromCUBEMaker = new CUBEMaker([9, 16, 25]);
console.log(cuboidFromCUBEMaker.volume()); // 100
console.log(cuboidFromCUBEMaker.surface()); // 130