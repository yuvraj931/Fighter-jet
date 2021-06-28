var jet,ship;
var shipGroup,ship1Group,ship2Group,ship3Group,ship4Group,RoketGroup;
var score=0;
var life=100;
var gameState="play"
var blastSound
var backgroundImage

function preload(){
  jetImage=loadImage("jet.png");
  shipImage=loadImage("ship.png");
  ship1Image=loadImage("ship1.png");
  ship2Image=loadImage("ship2.png");
  ship3Image=loadImage("ship3.png");
  ship4Image=loadImage("ship4.png");
  RoketImage=loadImage("Roket.png");
  backgroundImage=loadImage("background.png");
  blastSound=loadSound("Sound/bomb.mp3");
}

function setup() {
	createCanvas(displayWidth-50, displayHeight-100);
 	 
 jet=createSprite(width/2,height-100);

 jet.addImage("jet",jetImage);
 jet.scale=0.4

 shipGroup=new Group
 RoketGroup=new Group
}

function draw() {
  
  background(backgroundImage);

if(gameState==="play"){

  //jet.x = World.mouseX;
  spawnShip()
  if (keyWentDown(32)){
    spawnRocket()
  }
if(keyDown(LEFT_ARROW)){

jet.x = jet.x - 6

}
if(keyDown(RIGHT_ARROW)){

  jet.x = jet.x + 6
  
  }



  if (RoketGroup.isTouching(shipGroup)){
    blastSound.play()
    shipGroup[0].destroy()
    RoketGroup[0].destroy()
    score=score+1 
    
    }

    if (shipGroup.isTouching(jet)){
      life=life-10
      gameState ="end"
      jet.visible = false
      shipGroup[0].destroy()
      shipGroup.setVelocityYEach(0)
      RoketGroup.setVelocityYEach(0)
    }

}
else if(gameState === "end"){


if(life >0){

if(keyDown("Space")){

  gameState = "play"
  jet.visible = true
  shipGroup.destroyEach()
  
  RoketGroup.destroyEach()
}

}
else {

text("GAME OVER", 300,300)

}


}
 
  drawSprites();
  textSize(30)
  fill('yellow')
  strokeWeight(5)
  text("Points: "+score,50,50)
  text("Life: "+life,width -170,50)
  
   
}
  


function spawnShip(){



  if (frameCount%50===0){
    ship=createSprite(400,-20)
    ship.velocityY=(5+ Math.round(score/10))
    ship.x=random(100,width-100)
   
    var num = Math.round(random(1,5))

    if(num===1){
      ship.addImage("ship",shipImage)
    }
    else if(num===2){
      ship.addImage("ship1",ship1Image)
        }
       else if(num===3){
       ship.addImage("ship2",ship2Image)
       }
       else if(num===4){
       ship.addImage("ship3",ship3Image)
       }
       else if(num===5){
        ship.addImage("ship4",ship4Image)
       }
    shipGroup.add(ship)
  }
}


function spawnRocket(){

  
  Rokect=createSprite(400,600)
  Rokect.velocityY=-8
  Rokect.x=jet.x
  Rokect.y = jet.y
  Rokect.addImage("Roket",RoketImage)
  Rokect.scale=0.1
  RoketGroup.add(Rokect)
  
  }

function mousePressed(){
  
}



