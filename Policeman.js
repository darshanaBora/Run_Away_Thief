class Policeman{
    constructor(x, y, width, height) {
        /*var options = {
            'isStatic': true,
            'density':1.0,
        }*/
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;

        this.image = loadImage("images/policeman.png");
        World.add(world, this.body);
        console.log(this.body)
      }
      display(){
        var angle = this.body.angle;
        this.body.velocityX = -2;
        this.body.velocityY = 0;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}