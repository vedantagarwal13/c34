class Ball{
    constructor(x,y,r,angle){
        var options={
         density:0.04,
         friction:1,
        };
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push()
        //fill("brown")
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}