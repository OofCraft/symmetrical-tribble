
class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visiblity = 255;
      
    }
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -105){
        score++;
      }
    }

    display(){
      //console.log(this.body.speed);
      if(this.body.speed < 5){
       super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }
      
     }
   
     
     
  
  }
