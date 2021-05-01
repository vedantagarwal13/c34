class Rope{
    constructor(bodyA,pointB){
        var options={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:2,
          length:300
        };
        this.rope = Constraint.create(options);
        this.bodyA=bodyA;
        this.pointB=pointB;
        World.add(world,this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}