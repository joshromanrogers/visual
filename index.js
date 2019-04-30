var cos = Math.cos;
var sin = Math.sin;
var sqrt = Math.sqrt;
var abs = Math.abs;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 40;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.DodecahedronGeometry(1, 3);

var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.x = 1;
scene.add( directionalLight );

var light = new THREE.AmbientLight( 0xffffff );
scene.add(light);

var angle = 0;
var radius = 45; 

var boxes = [];
var numBoxes = 5;

for (let x = -numBoxes; x <= numBoxes; x++) {
  for (let y = -numBoxes; y <= numBoxes; y++) {
    var material = new THREE.MeshStandardMaterial( );
    var cube = new THREE.Mesh( geometry, material );
    cube.position.x = x * 2;
    cube.position.y = y * 2;
    boxes.push(cube);
    scene.add(cube);
  }
}

// initial values
let posZVal = 1;
let scaleZVal = 1;
let scaleXVal = 1;
let scaleYVal = 1;
let rotationZVal = 1;
let rotationXVal = 1;
let rotationYVal = 1;
let colRVal = 1;
let colGVal = 1;
let colBVal = 1;

let posZValIn = document.getElementById('shapePosZInput');
let posZBtn = document.getElementById('shapePosZ');
posZBtn.addEventListener('click', function() {
  posZVal = posZValIn.value;
});

let scaleZValIn = document.getElementById('shapeScaleZInput');
let scaleZBtn = document.getElementById('shapeScaleZ');
scaleZBtn.addEventListener('click', function() {
  scaleZVal = scaleZValIn.value;
});

let scaleXValIn = document.getElementById('shapeScaleXInput');
let scaleXBtn = document.getElementById('shapeScaleX');
scaleXBtn.addEventListener('click', function() {
  scaleXVal = scaleXValIn.value;
});

let scaleYValIn = document.getElementById('shapeScaleYInput');
let scaleYBtn = document.getElementById('shapeScaleY');
scaleYBtn.addEventListener('click', function() {
  scaleYVal = scaleYValIn.value;
});

let rotationZValIn = document.getElementById('shapeRotationZInput');
let rotationZBtn = document.getElementById('shapeRotationZ');
rotationZBtn.addEventListener('click', function() {
  rotationZVal = rotationZValIn.value;
});

let rotationXValIn = document.getElementById('shapeRotationXInput');
let rotationXBtn = document.getElementById('shapeRotationX');
rotationXBtn.addEventListener('click', function() {
  rotationXVal = rotationXValIn.value;
});

let rotationYValIn = document.getElementById('shapeRotationYInput');
let rotationYBtn = document.getElementById('shapeRotationY');
rotationYBtn.addEventListener('click', function() {
  rotationYVal = rotationYValIn.value;
});

let colRValIn = document.getElementById('shapeColRInput');
let colRBtn = document.getElementById('shapeColR');
colRBtn.addEventListener('click', function() {
  colRVal = colRValIn.value;
});

let colGValIn = document.getElementById('shapeColGInput');
let colGBtn = document.getElementById('shapeColG');
colGBtn.addEventListener('click', function() {
  colGVal = colGValIn.value;
});

let colBValIn = document.getElementById('shapeColBInput');
let colBBtn = document.getElementById('shapeColB');
colBBtn.addEventListener('click', function() {
  colBVal = colBValIn.value;
});


function setBoxPosZ(box, step, posZVal) {
  
  let value = posZVal;
  let x = box.position.x;
  let y = box.position.y;
  let md = abs(x) + abs(y);
  let d = sqrt(x*x + y*y);
  let cos = Math.cos;
  
  box.position.z = eval(value);
  
}

function setBoxScaleZ(box, step, scaleZVal) {
  
  let value = scaleZVal;
  let x = box.position.x;
  let y = box.position.y;
  let md = abs(x) + abs(y);
  let d = sqrt(x*x + y*y);
  
  box.scale.z = eval(scaleZVal);
  
}

function setBoxScaleX(box, step, scaleXVal) {
  
  let value = scaleXVal;
  let x = box.position.x;
  let y = box.position.y;
  let md = abs(x) + abs(y);
  let d = sqrt(x*x + y*y);
  
  box.scale.x = eval(scaleXVal);
  
}

function setBoxScaleY(box, step, scaleYVal) {
  
  let value = scaleYVal;
  let x = box.position.x;
  let y = box.position.y;
  let md = abs(x) + abs(y);
  let d = sqrt(x*x + y*y);
  
  box.scale.y = eval(scaleYVal);
  
}

function setBoxRotationZ(box, step, rotationZVal) {
  
  let value = rotationZVal;
  let x = box.position.x;
  let y = box.position.y;
  let md = abs(x) + abs(y);
  let d = sqrt(x*x + y*y);
  
  box.rotation.z = eval(rotationZVal);
  
}

function setBoxRotationX(box, step, rotationXVal) {
  
  let value = rotationXVal;
  let x = box.position.x;
  let y = box.position.y;
  let md = abs(x) + abs(y);
  let d = sqrt(x*x + y*y);
  
  box.rotation.x = eval(rotationXVal);
  
}

function setBoxRotationY(box, step, rotationYVal) {
  
  let value = rotationYVal;
  let x = box.position.x;
  let y = box.position.y;
  let md = abs(x) + abs(y);
  let d = sqrt(x*x + y*y);
  
  box.rotation.y = eval(rotationYVal);
  
}


function setBoxColorR(box, step, colRVal) {
  
  let value = colRVal;
  let x = box.position.x;
  let y = box.position.y;
  let md = abs(x) + abs(y);
  let d = sqrt(x*x + y*y);
  
  box.material.color.r = eval(value);
}

function setBoxColorG(box, step, colGVal) {
  
  let valueG = colGVal;
  let x = box.position.x;
  let y = box.position.y;
  let md = abs(x) + abs(y);
  let d = sqrt(x*x + y*y);
  
  box.material.color.g = eval(valueG);
}

function setBoxColorB(box, step, colBVal) {
  
  let valueB = colBVal;
  let x = box.position.x;
  let y = box.position.y;
  let md = abs(x) + abs(y);
  let d = sqrt(x*x + y*y);
  
  box.material.color.b = eval(valueB);
}


let shapeSelector = document.getElementById('shapeSelector');
shapeSelector.addEventListener('change', () => setShape());

function setShape() {
  switch (shapeSelector.value) {
      
    case "box":
    boxes.forEach(cube => {
      cube.geometry.dispose();
      geometry = new THREE.BoxGeometry(1, 1, 1);
      cube.geometry = geometry.clone();
    });
    break;
      
    case "ring":
      boxes.forEach(cube => {
      cube.geometry.dispose();
      geometry = new THREE.RingGeometry( 1, 5, 6 );
      cube.geometry = geometry.clone();
    });
    break;
      
    case "dodecahedron":
      boxes.forEach(cube => {
      cube.geometry.dispose();
      geometry = new THREE.DodecahedronGeometry(1, 3);
      cube.geometry = geometry.clone();
    });
    break;
      
    case "dodecahedron-large":
      boxes.forEach(cube => {
      cube.geometry.dispose();
      geometry = new THREE.DodecahedronGeometry(3, 1);
      cube.geometry = geometry.clone();
    });
    break;
      
    case "cylinder":
      boxes.forEach(cube => {
      cube.geometry.dispose();
      geometry = new THREE.CylinderGeometry(1, 1, 10, 12);
      cube.geometry = geometry.clone();
    });
    break;
      
    case "plane":
      boxes.forEach(cube => {
      cube.geometry.dispose();
      geometry = new THREE.PlaneGeometry(1, 1, 1);
      cube.geometry = geometry.clone();
    });
    break;
    
    case "octahedron":
      boxes.forEach(cube => {
      cube.geometry.dispose();
      geometry = new THREE.OctahedronGeometry(1, 0);
      cube.geometry = geometry.clone();
    });
    break;
      
      case "octahedron-large":
      boxes.forEach(cube => {
      cube.geometry.dispose();
      geometry = new THREE.OctahedronGeometry(3, 0);
      cube.geometry = geometry.clone();
    });
    break;
  
}
}

// camera position slider
let cameraPosZslider = document.getElementById('cameraPosZRange');
let cameraPosZoutput = document.getElementById('cameraPosZ');
cameraPosZoutput.innerHTML = cameraPosZslider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
cameraPosZslider.oninput = function () {
  cameraPosZoutput.innerHTML = this.value;
  camera.position.z = parseFloat(this.value);
  
};


let rotation = false;

let rotationX = document.getElementById('rotateX');
rotationX.addEventListener('click', () => rotation = true);

function updateBoxes(step) {
  for (let i = 0; i < boxes.length; i++) {
    
    setBoxPosZ(boxes[i], step, posZVal);
    setBoxScaleZ(boxes[i], step, scaleZVal);
    setBoxScaleX(boxes[i], step, scaleXVal);
    setBoxScaleY(boxes[i], step, scaleYVal);
    setBoxRotationZ(boxes[i], step, rotationZVal);
    setBoxRotationX(boxes[i], step, rotationXVal);
    setBoxRotationY(boxes[i], step, rotationYVal);
    setBoxColorR(boxes[i], step, colRVal);
    setBoxColorG(boxes[i], step, colGVal);
    setBoxColorB(boxes[i], step, colBVal);

  }
}

let step = 5;

var animate = function () {
  
  requestAnimationFrame( animate );
  step += 0.01;
  updateBoxes (step);
  renderer.render( scene, camera );
  
  if(rotation) {
  // Use Math.cos and Math.sin to set camera X and Z values based on angle. 
camera.position.x = radius * Math.cos( angle ); 
camera.position.z = radius * Math.sin( angle );
camera.position.y = radius * Math.sin( angle );
  
angle += 0.005;
  }
};

animate();