let l = 75
let k
let j
function setup(){
  createCanvas(600, 400) 
  angleMode(DEGREES)
}

function draw() {

  background(20)
  stroke(255,255,255)
  strokeWeight(1);
  line(300, 0, 300, 400)

  function logo(j){
    j=200
    for(let phi = 0; phi < 180; phi +=5){
      for(let theta = 0; theta < 360; theta +=5){
        let x = l * cos(phi) + 150;
        let y = l * sin(phi) * sin(theta) + j;
        point(x,y)
      }
    }
    beginShape(POINTS)
    strokeWeight(0.5)
    stroke('red')
    for(theta = 0; theta < 60; theta +=1){
      for(let phi = 0; phi < 360; phi +=2){
        let p = (70*pow(abs(sin(phi*8/2)),1)) * theta/60
        let x = p * cos(phi) + 150
        let y = p * sin(phi) + 200
        vertex(x,y)
      }
    }
    endShape()
    strokeWeight(1)
  } 
  console.log(logo())

  function move(j,k){
    r = random(100, 300);
    g = random(100, 300);
    b = random(100, 300);
    j = random(75, 325)
    k = random(375,525)
    for(let phi = 0; phi < 180; phi +=5){
      for(let theta = 0; theta < 360; theta +=5){
        var a = l * cos(phi) + k;
        var b = l * sin(phi) * sin(theta) + j;
        point(a,b)
        stroke(r, g, b)
      }
    }
    beginShape(POINTS)
    strokeWeight(0.5)
    stroke('blue')
    for(theta = 0; theta < 60; theta +=1){
      for(let phi = 0; phi < 360; phi +=2){
        let p = (70*pow(abs(sin(phi*8/2)),1)) * theta/60
        let x = p * cos(phi) + k
        let y = p * sin(phi) + j
        vertex(x,y)
        stroke(g, b, r)
      }
    }
    endShape()
    strokeWeight(1)
  }
  console.log(move())
}