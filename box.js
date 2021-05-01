class Box{
    constructor(x,y,w,h,angle){
        var options={
         restitution:0.8,
         friction:1,
         density:0.04
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
    display(){
        push()
        
        stroke("red")
        fill("black");
        var angle = this.body.angle;
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}