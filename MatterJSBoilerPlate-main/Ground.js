class groundObj {
    constructor(x,y,width,hieght){
        var option={
         isStatic:true,
         'restitution':0,
         'friction':0,
         'density':1  
        } 
      this.body = Bodies.rectangle(x,y,width,hieght,options)
      this.width=width;
      this.height=height;

      World.add(world,this.body);
    }
    display(){
    rectMode(CENTER);

    fill(225);

    rect(this.body.position.x,this.body.position.x,this.width,this.hieght)
}
};