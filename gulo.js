objectDetector=""
img="";
objects=[];
status="";
function preload ()  {
img=loadImage("taladroo.jpg")
}
function setup () {
canvas=createCanvas(600,600);
canvas.center()
objectDetector=ml5.objectDetector("cocossd",lyur);
document.getElementById("licu").innerHTML="el objeto ya se detecto";
}

function lyur () {
console.log("ashhhh ya cargo");
status=true;
objectDetector.detect(img,koer)
}

function koer (error,tacos)  {
if (error) {
  console.log(error)
} else {
console.log(tacos)

objects=tacos;
}
}

function draw (){
image(img,0,0,600,600);
if (status!="") {
for (var i = 0; i < objects.length; i++) {

fill(255, 0, 0);
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
noFill();
stroke(255,0,0);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height); 
}

}
}