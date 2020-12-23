const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand, slingshot, stoond;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var polygon,polygonPic;
var game=0
var score=0
function preload() {
    polygonPic=loadImage("polygon.png")
}

function setup(){
    createCanvas(1800,400);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(400,350,300,20);
    stoond = new Ground(1000,310,300,10)
    box1 = new Box(400,300,30,45);
    box2 = new Box(431,300,30,45);
    box3 = new Box(462,300,30,45);
    box4 = new Box(493,300,30,45);
    box5 = new Box(416,255,30,45);
    box6 = new Box(447,255,30,45);
    box7 = new Box(478,255,30,45);
    box8 = new Box(443,210,30,45);
    box9 = new Box(474,210,30,45);
    box10 = new Box(950,295,30,45);
    box11 = new Box(981,295,30,45);
    box12 = new Box(1012,295,30,45);
    box13 = new Box(1043,295,30,45);
    box14 = new Box(967,235,30,45);
    box15 = new Box(998,235,30,45);
    box16 = new Box(1029,235,30,45);
    box17 = new Box(983,170,30,45);
    box18 = new Box(1014,170,30,45);
    polygon = new Polygon(50,200,20,20);
    slingshot = new Slingshot(polygon.body,{x: 200, y:200});
    
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    text("Score: "+score,750,40)
    stand.display();
    stoond.display();
    box1.display();
    box1.score();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display()
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    polygon.display();
    slingshot.display();    
}

function mouseDragged(){
    if (game===0){
    Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
    }

}

function mouseReleased(){
    game=1
    slingshot.fly(bodyA=null);


}

function keyPressed(){

    if(keyCode===32){
        slingshot.attach(polygon.body);
        game=0;
    }



}
