//create all the variables
var merc, ven, ear, mar, jupi, sat, ura, sun;
var mercImg, venImg, earImg, marImg, jupiImg, satImg, uraImg;

function preload() {

  //load all the images
  earImg = loadImage('earth.png');

  jupiImg = loadImage('jupiter.png');

  mercImg = loadImage('mercury.png');

  marImg = loadImage('mars.png');


  satImg = loadImage('saturn.png');

  venImg = loadImage('venus.png');

  uraImg = loadImage('Uranus.png');














}


function setup() {

  //create the canvas
  createCanvas(1200, 1000);

  //create all the planets and sun
  sun = createSprite(600, 500, 100, 100);
  merc = createSprite(400, 300, 10, 10);
  ven = createSprite(570, 675, 20, 20);
  ear = createSprite(1100, 250, 25, 25);
  mar = createSprite(200, 355, 15, 15);
  jupi = createSprite(350, 900, 50, 50);
  sat = createSprite(250, 600, 45, 45);
  ura = createSprite(900, 600, 35, 35);


  //give colour to the sun
  sun.shapeColor = "orange";
  //merc.shapeColor = "grey";
  // ven.shapeColor = "orange";
  // ear.shapeColor = "lightgreen";
  // jupi.shapeColor = "brown";
  // sat.shapeColor = "yellow";
  // mar.shapeColor = "red";
  // ura.shapeColor = "blue";
  // nep.shapeColor = "darkblue";



}

function draw() {

  //clear the background
  background(0);

  //add all the images
  jupi.addImage("jupi", jupiImg);

  merc.addImage("merc", mercImg);

  sat.addImage("sat", satImg);

  ven.addImage("ven", venImg);

  ear.addImage("ear", earImg);

  mar.addImage("mar", marImg);


  ura.addImage("ura", uraImg);




















  //write the condition to make the sun's size increase against the frames
  if (frameCount % 5 === 0) {
    sun.width = sun.width + 5;
    sun.height = sun.height + 5;

  }

  //write the condition that if  each planet collides with the sun so that planet will destroy
  if (istouching(sun, merc)) {
    merc.destroy();

  }

  if (istouching(sun, ven)) {
    ven.destroy();

  }

  if (istouching(sun, ear)) {
    ear.destroy();

  }

  if (istouching(sun, mar)) {
    mar.destroy();

  }

  if (istouching(sun, jupi)) {
    jupi.destroy();

  }

  if (istouching(sun, sat)) {
    sat.destroy();

  }

  if (istouching(sun, ura)) {
    ura.destroy();

  }




  //create draw sprites
  drawSprites();


}


//write the algorithm for the is touching function
function istouching(object1, object2) {


  if (object1.x - object2.x < object1.width / 2 + object2.width / 2 &&
    object2.x - object1.x < object1.width / 2 + object2.width / 2 &&
    object1.y - object2.y < object2.height / 2 + object1.height / 2 &&
    object2.y - object1.y < object2.height / 2 + object1.height / 2)

  {

    return true;
  } else {
    return false;
  }
}