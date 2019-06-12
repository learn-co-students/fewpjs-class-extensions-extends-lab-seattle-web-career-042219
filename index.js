// Your code here



class Polygon {
    constructor(args) {
       
         this.sides = args
         this.size = args.length
    }

    get countSides() {
        return this.size
    }

    get perimeter() {
        if (Array.isArray(this.sides)) {
            let total = 0
            for (let i = 0; i < this.size; i++) {
                total += this.sides[i]
            }
            return total
        }
    }
        

}


class Triangle extends Polygon {

    get isValid() {
        let a = this.sides[0], b = this.sides[1], c = this.sides[2]

        if (a + b > c && a + c > b && b + c > a) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {


    get isValid() {
        let valid = true
       for (let i = 0; i < this.sides.length - 1; i++) {
           if (this.sides[i] != this.sides[i + 1]) {
               valid = false
           }
       }
       return valid
    }

    get area() {
        if (this.isValid) {
            return this.sides[0]*this.sides[1]
        } else {
            return "This is not a valid square"
        }
    }
}