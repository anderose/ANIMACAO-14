function setup() {
  createCanvas(windowWidth, windowWidth, WEBGL);
  angleMode(DEGREES)
}

function draw() {
  background(30);
  
  rotateX(60)
  
  noFill()
  stroke(255)
  
  for (var i = 0; i < 50; i++)  {
    
    

    beginShape()
    for (var j = 0; j < 360; j += 10) {
      var rad = i * 3
      var x = rad * cos(j)
      var y = rad * sin(j) 
      var z = sin(frameCount * 2 + i * 5) * 20
      
      vertex(x,y,z)
    } 
    endShape(CLOSE)
      
    
  }
  
  
}