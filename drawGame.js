var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

// the speed in which the ball will move
var x = canvas.width/2;
var y = canvas.height-30;
var dx=-2;
var dy=-2;

// ball radius for edge detection
var ballRadius=10;


function drawRect() {
    ctx.beginPath();
    xVar=Math.floor(Math.random()*1000);
    yVar=Math.floor(Math.random()*1000)
    ctx.rect(xVar, yVar, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

function drawCircle(){
    ctx.beginPath();
    ctx.arc(x,y,ballRadius,0,Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
}

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawCircle();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

setInterval(draw,10)