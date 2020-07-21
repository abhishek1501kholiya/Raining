class Drop {
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.8,
             friction : 0.1,
             'density' : 1.0
        } 
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.body.position.x = x;
        this.body.position.y = y;
        this.width =  width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        push();
        fill("blue");
        rect(this.body.position.x , this.body.postion.y , this.width , this.height);
        pop();
    }
}