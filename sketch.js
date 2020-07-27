var ball;
var position,database;

function setup(){
    database = firebase.database();
    var ballPosition = database.ref("ball/position");
    ballPosition.on("value",read,error);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        write(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        write(1,0);
    }
    else if(keyDown(UP_ARROW)){
        write(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        write(0,+1);
    }
    drawSprites();
}

function write(x,y){
  database.ref("ball/position").set({
      x: position.x+x,
      y: position.y+y
  })
}

function read(data){
position = data.val();
ball.x = position.x;
ball.y = position.y;
}

function error(){

}
