const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object,ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var option1={
        restitution:2.0
    }
   object= Bodies.rectangle(400,200,50,50,option1);
    World.add(world,object);

    var options={
        isStatic: true
    }

   ground= Bodies.rectangle(400,350,800,20,options);
    World.add(world,ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(CENTER);
    ellipse(object.position.x,object.position.y,50,50);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);


    drawSprites();
}
