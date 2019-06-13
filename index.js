// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    let i = 0
    let p = 0
    while (i < this.sides.length) {
      p += this.sides[i]
      i++
    }
    return p
  }
}

class Triangle extends Polygon {
  get isValid() {
    let a = this.sides[0]
    let b = this.sides[1]
    let c = this.sides[2]

    if (a+b>c && a+c>b && c+b>a){
      return true
    } else {
      return false
    }
  }

}

class Square extends Polygon {

  get isValid() {
    let a = this.sides[0]
    let b = this.sides[1]
    let c = this.sides[2]
    let d = this.sides[3]

    if (a===b && b===c && c===d) {
      return true
    } else {
      return false
    }
  }

  get area(){
    return this.sides[0]**2
  }

}
