class Polygon{
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
    return this.sides.length
    }

    get perimeter(){
        let p = 0;
        this.sides.forEach(function(side){
        p = p+side;
        })
        return p
        }
}

class Triangle extends Polygon{
    get isValid(){


        if((this.sides[0]+this.sides[1]) > (this.sides[2])&&(this.sides[2]+this.sides[1]) > (this.sides[0])){
            return true
        }else{
            return false
        }
        }
    }


class Square extends Polygon{

    get isValid(){
        let i = 0
        let j = this.sides[0]
        this.sides.forEach(function(num){
        if (num == j){
            ++i
        }

        })
        if (i !==4){
        return false
        }else{
        return true
        }
    }

    get area(){
        return this.sides[0] * this.sides[0]
    }
    
}


triangle = new Triangle( [ 5, 5, 5 ] )
console.log(triangle.isValid)