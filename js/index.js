var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var x = 1;
var y = 1;
var vx = Math.random()*5+1;
var vy = Math.random()*5+1;
function draw() {
 
  ctx.fillStyle="#"+((1<<24)*Math.random()|0).toString(16);
ctx.fillRect(x,y,Math.random()*25+1,Math.random()*25+1);
 
  if(x>=1000 || x<=0) {
   vx=-vx;
  }
  if(y>=700 || y<=0) {
    vy=-vy;
  }
   x+=vx
  y+=vy
  requestAnimationFrame(draw)
}
requestAnimationFrame(draw)