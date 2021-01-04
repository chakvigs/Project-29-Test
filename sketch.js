const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function preload() {
}

function setup(){
    createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(800, 400, 100, 20);
    Engine.run(engine);
}

function draw(){
    background(0);
    Engine.update(engine);
    stand.display();
    drawSprites();
}
