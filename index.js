// Your code here
class Polygon {
	constructor(sidesArray) {
		this.sides = sidesArray;
	}

	get countSides() {
		return this.sides.length;
	}

	get perimeter() {
		return this.sides.reduce((all, each) => all+each);
	}
}

class Triangle extends Polygon {
	get isValid() {
		let sortedSides = this.sides.sort();
		return (this.countSides === 3 && sortedSides[0] + sortedSides[1] > sortedSides[2]) ? true : false;
	}
}

class Square extends Polygon {
	get area() {
		return this.isValid ? this.sides[0] * this.sides[0] : false
	}

	get isValid() {
		let sortedSides = this.sides.sort();
		return (this.countSides === 4 && sortedSides[0] === sortedSides[3]) ;
	}
}

