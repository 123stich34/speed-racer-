 var game,player,form,bg,pc,db,gameState
 function preload(){
  bg=loadImage("background.png")
 }
function setup() {
  createCanvas(windowWidth,windowHeight );
  db=firebase.database()
  game=new Game()
  game.getstate()
  game.start()
}

function draw() 
{
  background(bg);
  if(pc==2){
    game.setstate(1)
  }
  if(gameState==1){
    console.log("play")
  }

}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}




