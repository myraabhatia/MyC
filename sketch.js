var database;
var drawing = [];
var canvas;
function setup(){
  
    canvas = createCanvas(1060,500)
    canvas.parent('canvascontainer')
    database = firebase.database();
    background(26,242,73);

    var clearbutton = select('#clearbutton')
    
}
var db_drawing = [];
function mouseDragged(){
    var point = {
        x: mouseX,
        y: mouseY
    }
    drawing.push(point);
    var drawingRef = database.ref('drawing')
    drawingRef.set({
        "d": drawing
    })
}
function draw(){
readData();
beginShape();
stroke(255)
strokeWeight(4)
noFill();

for(var i = 0;i<db_drawing.length;i++){
vertex(db_drawing[i].x,db_drawing[i].y);
endShape();

}
}

function readData(){
   database.ref('drawing/').on('value',(data)=>{
       db_drawing = data.val().d
   })
}