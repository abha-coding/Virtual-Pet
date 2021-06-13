//Create variables here
var dog,dogPhoto;
var happyDog,happyDogPhoto;
var database;
var foodS;
var foodStock;

function preload()
{
	//load images here
  dogPhoto=loadImage("dogImg.png");
  happyDogPhoto=loadImage("dogImg1.png");
}

function setup() {

  database = firebase.database();

	createCanvas(500, 500);

  dog = createSprite(250,250,20,20);
  dog.addImage(dogPhoto);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock, showError);
  
}


function draw() {  

  background(46,139,87);

  if(keyDown(UP_ARROW))
  {
    changeStock(-1);
  }
  
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(happyDogPhoto);
  }

  drawSprites();
  //add styles here

}


