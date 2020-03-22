// Your code here
class Polygon {
  constructor(array) {
    this.array = array;
  }

  get countSides() {
    return this.array.length;
  }

  get perimeter() {
    let sum = 0;
    if (this.array.length === 0) {
      sum = 0;
      return sum;
    }
    for (let i=0; i<this.array.length; i++) {
      sum = sum + this.array[i];
    }
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    return (
        this.array[0] + this.array[1] > this.array[2] &&
        this.array[1] + this.array[2] > this.array[0] &&
        this.array[2] + this.array[0] > this.array[1]
      )
    }
}

class Square extends Polygon {
  get isValid() {
    return(
      this.array[0] === this.array[1] &&
      this.array[1] === this.array[2] &&
      this.array[2] === this.array[3]
    )
  }

  get area() {
    return this.array[0] * this.array[0]
  }
}
