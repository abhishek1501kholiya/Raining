const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Drops = [];

function preload() {
  //  backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    for(var i = 0 ; i<100 ; i++){
        Drops.push(new Drop(random(200,400),random(300,600),5,5));
    }


    
    //ground = new Ground(600,height,1200,20);
    
}

function draw(){
//    background(backgroundImg);
    Engine.update(engine);
    for(var i = 0 ; i<Drops.length; i++){
        Drops[i].display();
    }
    //strokeWeight(4);
   
    //log6.display();
   
}
