class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.image = loadImage("block.png");
      //this.Visiblity = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);

      if(this.body.speed<3){
        this.Visiblity = 255;
       }
    
       else{
        World.remove(world,this.body);
        push();
        this.Visiblity = this.Visiblity -5;
        tint(255,126,this.Visiblity); //what's happening here
        image(this.image, this.body.position.x-15,this.body.position.y-20);
        pop();
    
       }
    }
}