
// trig functions, square root and absolute
var cos = Math.cos;
var sin = Math.sin;
var sqrt = Math.sqrt;
var abs = Math.abs;

// create new scene, camera + position it
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 15;

// render new canvas, set size + place in HTML
var renderer = new THREE.WebGLRenderer();
renderer.domElement.id = "canvas";
renderer.setSize( window.innerWidth/100*70, window.innerHeight/100*70 );
document.body.appendChild( renderer.domElement );

// intial shape to be built
var geometry = new THREE.DodecahedronGeometry(1, 1, 1);

// create lights + add to scene
var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.x = 1;
var light = new THREE.AmbientLight( 0xffffff );
scene.add( directionalLight );
scene.add(light);

// boxes array + number per line
var boxes = [];
var numBoxes = 5;

// build a square of cubes, add to array and then push to scene
for (let x = -numBoxes; x <= numBoxes; x++) {
	for (let y = -numBoxes; y <= numBoxes; y++) {
		var material = new THREE.MeshBasicMaterial( { color : 0xff0000 } );
		var cube = new THREE.Mesh( geometry, material );
		cube.position.x = x * 1.1;
		cube.position.y = y * 1.1;
		boxes.push(cube);
		scene.add(cube);
	}
}

var vector = new THREE.Vector3(); // create once and reuse it!
camera.getWorldDirection( vector );

// initial shape values
let posZVal = 1;
let scaleZVal = 1;
let scaleXVal = 1;
let scaleYVal = 1;
let rotationZVal = 0;
let rotationXVal = 0;
let rotationYVal = 0;
let colRVal = 1;
let colGVal = 1;
let colBVal = 1;

// add click listener to take value from posZ input and update value of posZ
let posZValIn = document.getElementById("posZInput");
let posZBtn = document.getElementById("posZBtn");
posZBtn.addEventListener("click", function() {
	posZVal = posZValIn.value;
});

// add click listener to take value from scaleX input and update value of scaleX
let scaleXValIn = document.getElementById("scaleXInput");
let scaleXBtn = document.getElementById("scaleXBtn");
scaleXBtn.addEventListener("click", function() {
	scaleXVal = scaleXValIn.value;
});

// add click listener to take value from scaleY input and update value of scaleY
let scaleYValIn = document.getElementById("scaleYInput");
let scaleYBtn = document.getElementById("scaleYBtn");
scaleYBtn.addEventListener("click", function() {
	scaleYVal = scaleYValIn.value;
});

// add click listener to take value from scaleZ input and update value of scaleZ
let scaleZValIn = document.getElementById("scaleZInput");
let scaleZBtn = document.getElementById("scaleZBtn");
scaleZBtn.addEventListener("click", function() {
	scaleZVal = scaleZValIn.value;
});

// add click listener to take value from rotX input and update value of rotX
let rotationXValIn = document.getElementById("rotationXInput");
let rotationXBtn = document.getElementById("rotationXBtn");
rotationXBtn.addEventListener("click", function() {
	rotationXVal = rotationXValIn.value;
});

// add click listener to take value from rotY input and update value of rotY
let rotationYValIn = document.getElementById("rotationYInput");
let rotationYBtn = document.getElementById("rotationYBtn");
rotationYBtn.addEventListener("click", function() {
	rotationYVal = rotationYValIn.value;
});

// add click listener to take value from rotZ input and update value of rotZ
let rotationZValIn = document.getElementById("rotationZInput");
let rotationZBtn = document.getElementById("rotationZBtn");
rotationZBtn.addEventListener("click", function() {
	rotationZVal = rotationZValIn.value;
});

// add click listener to take value from colR input and update value of colR
let colRValIn = document.getElementById("colRInput");
let colRBtn = document.getElementById("colRBtn");
colRBtn.addEventListener("click", function() {
	colRVal = colRValIn.value;
});

// add click listener to take value from colG input and update value of colG
let colGValIn = document.getElementById("colGInput");
let colGBtn = document.getElementById("colGBtn");
colGBtn.addEventListener("click", function() {
	colGVal = colGValIn.value;
});

// add click listener to take value from colB input and update value of colB
let colBValIn = document.getElementById("colBInput");
let colBBtn = document.getElementById("colBBtn");
colBBtn.addEventListener("click", function() {
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

// when user changes the value in the shape selector, run setShape function
let shapeSelector = document.getElementById("shapeSelector");
shapeSelector.addEventListener("change", () => setShape());

// 1. switch statement
// 2. dispose of every shape
// 3. create new geometry of chosen shape
// 4. clone the geometry
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
let cameraPosZslider = document.getElementById("cameraPosZRange");
let cameraPosZoutput = document.getElementById("cameraPosZ");
cameraPosZoutput.innerHTML = cameraPosZslider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
cameraPosZslider.oninput = function () {
	cameraPosZoutput.innerHTML = this.value;
	camera.position.z = parseFloat(this.value);
  
};

// updates all of the possible values of the shapes, if they have changed
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

// initialise step
let step = 0;

var animate = function () {
  
	requestAnimationFrame( animate );
	step += 0.05;
	updateBoxes (step);
	renderer.render( scene, camera );
  
};

animate();

let info = document.getElementsByClassName("info")[0];
let modes = document.getElementsByClassName("mode");

let sun = document.getElementById("sun");
let moon = document.getElementById("moon");

let inputs = document.getElementsByTagName("INPUT");
let selects = document.getElementsByTagName("SELECT");
let spans = document.getElementsByTagName("SPAN");

let body = document.getElementsByTagName("BODY")[0];
let buttons = document.getElementsByTagName("BUTTON");

for (let i = 0, len = modes.length; i < len; i++) {
	modes[i].addEventListener("click", () => toggleMode());
}

// tell which mode app is in
let lightMode = true;

// this function toggles through the two different modes [ day + night]
// and changes styling
let toggleMode = () => {

	// light -> dark mode
	if (lightMode) {

		for (let i = 0, len = buttons.length; i < len; i++) {
			buttons[i].style.backgroundColor = "#222";
			buttons[i].style.color = "#f6f6f6";
		}
	
		for (let i = 0, len = inputs.length; i < len; i++) {
			inputs[i].style.backgroundColor = "#333";
			inputs[i].style.color = "#f6f6f6";
		}
	
		for (let i = 0, len = selects.length; i < len; i++) {
			selects[i].style.backgroundColor = "#333";
			selects[i].style.color = "#f6f6f6";
		}
	
		for (let i = 0, len = spans.length; i < len; i++) {
			spans[i].style.color = "#f6f6f6";
		}
		
		body.style.backgroundColor = "#111";
		info.style.color = "#f6f6f6";

		lightMode = false;
		moon.style.display = "none";
		sun.style.display = "initial";

	// dark -> light mode
	} else {

		for (let i = 0, len = buttons.length; i < len; i++) {
			buttons[i].style.backgroundColor = "#fff";
			buttons[i].style.color = "#000";
		}
	
		for (let i = 0, len = inputs.length; i < len; i++) {
			inputs[i].style.backgroundColor = "#fff";
			inputs[i].style.color = "#000";
		}
	
		for (let i = 0, len = selects.length; i < len; i++) {
			selects[i].style.backgroundColor = "#fff";
			selects[i].style.color = "#000";
		}
	
		for (let i = 0, len = spans.length; i < len; i++) {
			spans[i].style.color = "#000";
		}
		
		body.style.backgroundColor = "#f6f6f6";
		info.style.color = "#000";

		lightMode = true;
		sun.style.display = "none";
		moon.style.display = "initial";

	}

};

let closeBtn = document.querySelector(".closebtn");
let openBtn = document.querySelector(".info");

// navigation bar open and close
openBtn.addEventListener("click", () => openNav());
closeBtn.addEventListener("click", () => closeNav());

// Navigation media queries
function openNav() {
	document.getElementById("side-nav").style.width = "100%";
	document.querySelectorAll(".side-nav-p").forEach(x => x.style.width = "700px");
}

// Set the width of the side navigation to 0 
function closeNav() {
	document.getElementById("side-nav").style.width = "0";
}