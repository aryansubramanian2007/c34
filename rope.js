class rope {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.rope=Constraint.create(options)
    }
    display(){
        var pointA=this.rope.body.position
        var pointB=this.pointB
    }
}