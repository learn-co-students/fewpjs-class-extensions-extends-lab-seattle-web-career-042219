function sum(a,b){
  return a+b;
}

class Polygon{
  constructor(sides){
    this.sides = sides;
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce(sum)
  }
}

class Triangle extends Polygon{
  get isValid(){
    return this.countSides === 3 &&
           this.sides[0] + this.sides[1] > this.sides[2] &&
           this.sides[1] + this.sides[2] > this.sides[0] &&
           this.sides[0] + this.sides[2] > this.sides[1]
  }
}

class Square extends Polygon{

  get area(){
    return this.sides[0] ** 2
  }

  get isValid(){
    return this.countSides === 4 &&
           this.sides[0] === this.sides[1] &&
           this.sides[1] === this.sides[2] &&
           this.sides[2] === this.sides[3]

  }
}
