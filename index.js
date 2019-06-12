// Your code here

class Polygon {
  constructor(integers){
    this.integers = integers;
  }

  get countSides(){
    return this.integers.length
  }

  get perimeter(){
    let i = 0;
    let length = 0;
    while(i < this.countSides) {
      length+=this.integers[i]
      i++
    }
    return length
  }
}

class Triangle extends Polygon {
  get isValid(){
    let side1 = this.integers[0]
    let side2 = this.integers[1]
    let side3 = this.integers[2]

    if (side1 + side2 < side3) {
      return false;
    } else if (side1 + side3 < side2) {
      return false;
    } else if (side2 + side3 < side1) {
      return false;
    } else {
      return true;
    }
  }
}

class Square extends Polygon {
  get isValid(){

    let side1 = this.integers[0]
    let side2 = this.integers[1]
    let side3 = this.integers[2]
    let side4 = this.integers[3]

    if (side1 === side2 && side1 === side3 &&  side1 === side4){
      return true
    } else {
      return false
    }
  }
  get area(){
    if (this.isValid){
      return (this.perimeter/4) * (this.perimeter/4)
    } else {
      return false
    }
  }
}
