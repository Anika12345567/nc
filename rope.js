class Rope{
    constructor(body1,body2,offsetx){
        var options={
            bodyA:body1,bodyB:body2, pointB:{x:offsetx,y:0},length:100,stiffness:1.2
        }
        this.pointB=offsetx
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
   
    
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
        stroke("white")
        line(pointA.x,pointA.y,pointB.x+this.pointB,pointB.y)
    }
}