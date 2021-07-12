var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,300,50,50);
}

function draw() 
{
  background(30);
  if(keyDown(LEFT_ARROW)){
    box.x = box.x -4;
  }
  if(keyDown(RIGHT_ARROW)){
    box.x = box.x + 4;
  }
  if(keyDown(UP_ARROW)){
    box.y = box.y -4;
  }
  if(keyDown(DOWN_ARROW)){
    box.y = box.y + 4;
  }
drawSprites()
}




