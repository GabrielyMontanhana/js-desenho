function setup() {
    createCanvas(500, 450);
    background("white");
  }
  
  function draw() {
    stroke("red");
    fill("black");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }