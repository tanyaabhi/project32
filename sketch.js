
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1110,110,30);
	mango3=new mango(1140,120,30);
	mango4=new mango(1120,140,30);
	mango5=new mango(1145,105,30);
	mango6=new mango(1135,150,30);
	

	treeObj=new tree(1050,580);
	stoneobj=new Stone(400,300,20);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  
  stoneobj.display();
  groundObject.display();
}
function mouseDragged(){
	Matter.body.setPosition(stoneobj.body,{x:mouseX,y:mouseY});
}