class Coach{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/coach.png")
      World.add(myWorld,this.body);
      Matter.Body.setMass(this.body,this.body.mass*5);
        }
    show()
    {
      var pos=this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height)
    }
  }
  