class Chain{
	constructor(body1,body2){
		var option={
			bodyA:body1,
			bodyB:body2,
			length:30,
			stiffness:0.4
		}
		this.chain=Constraint.create(option)
		World.add(world,this.chain)
	}
	display(){
	var pointA=this.chain.bodyA.position
	var pointB=this.chain.bodyB.position
	line(pointA.x,pointA.y,pointB.x,pointB.y)
	
	}
}