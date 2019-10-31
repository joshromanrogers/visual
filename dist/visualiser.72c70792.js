parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var cos=Math.cos,sin=Math.sin,sqrt=Math.sqrt,abs=Math.abs,scene=new THREE.Scene,camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3);camera.position.z=15;var renderer=new THREE.WebGLRenderer;renderer.domElement.id="canvas",renderer.setSize(window.innerWidth/100*70,window.innerHeight/100*70),document.body.appendChild(renderer.domElement);var geometry=new THREE.DodecahedronGeometry(1,1,1),directionalLight=new THREE.DirectionalLight(16777215,1);directionalLight.position.x=1;var light=new THREE.AmbientLight(16777215);scene.add(directionalLight),scene.add(light);for(var boxes=[],numBoxes=5,x=-numBoxes;x<=numBoxes;x++)for(var y=-numBoxes;y<=numBoxes;y++){var material=new THREE.MeshBasicMaterial({color:16711680}),cube=new THREE.Mesh(geometry,material);cube.position.x=1.1*x,cube.position.y=1.1*y,boxes.push(cube),scene.add(cube)}var vector=new THREE.Vector3;camera.getWorldDirection(vector);var posZVal=1,scaleZVal=1,scaleXVal=1,scaleYVal=1,rotationZVal=0,rotationXVal=0,rotationYVal=0,colRVal=1,colGVal=1,colBVal=1,posZValIn=document.getElementById("posZInput"),posZBtn=document.getElementById("posZBtn");posZBtn.addEventListener("click",function(){posZVal=posZValIn.value});var scaleXValIn=document.getElementById("scaleXInput"),scaleXBtn=document.getElementById("scaleXBtn");scaleXBtn.addEventListener("click",function(){scaleXVal=scaleXValIn.value});var scaleYValIn=document.getElementById("scaleYInput"),scaleYBtn=document.getElementById("scaleYBtn");scaleYBtn.addEventListener("click",function(){scaleYVal=scaleYValIn.value});var scaleZValIn=document.getElementById("scaleZInput"),scaleZBtn=document.getElementById("scaleZBtn");scaleZBtn.addEventListener("click",function(){scaleZVal=scaleZValIn.value});var rotationXValIn=document.getElementById("rotationXInput"),rotationXBtn=document.getElementById("rotationXBtn");rotationXBtn.addEventListener("click",function(){rotationXVal=rotationXValIn.value});var rotationYValIn=document.getElementById("rotationYInput"),rotationYBtn=document.getElementById("rotationYBtn");rotationYBtn.addEventListener("click",function(){rotationYVal=rotationYValIn.value});var rotationZValIn=document.getElementById("rotationZInput"),rotationZBtn=document.getElementById("rotationZBtn");rotationZBtn.addEventListener("click",function(){rotationZVal=rotationZValIn.value});var colRValIn=document.getElementById("colRInput"),colRBtn=document.getElementById("colRBtn");colRBtn.addEventListener("click",function(){colRVal=colRValIn.value});var colGValIn=document.getElementById("colGInput"),colGBtn=document.getElementById("colGBtn");colGBtn.addEventListener("click",function(){colGVal=colGValIn.value});var colBValIn=document.getElementById("colBInput"),colBBtn=document.getElementById("colBBtn");function setBoxPosZ(box,step,posZVal){var value=posZVal,x=box.position.x,y=box.position.y,md=abs(x)+abs(y),d=sqrt(x*x+y*y),cos=Math.cos;box.position.z=eval(value)}function setBoxScaleZ(box,step,scaleZVal){var value=scaleZVal,x=box.position.x,y=box.position.y,md=abs(x)+abs(y),d=sqrt(x*x+y*y);box.scale.z=eval(scaleZVal)}function setBoxScaleX(box,step,scaleXVal){var value=scaleXVal,x=box.position.x,y=box.position.y,md=abs(x)+abs(y),d=sqrt(x*x+y*y);box.scale.x=eval(scaleXVal)}function setBoxScaleY(box,step,scaleYVal){var value=scaleYVal,x=box.position.x,y=box.position.y,md=abs(x)+abs(y),d=sqrt(x*x+y*y);box.scale.y=eval(scaleYVal)}function setBoxRotationZ(box,step,rotationZVal){var value=rotationZVal,x=box.position.x,y=box.position.y,md=abs(x)+abs(y),d=sqrt(x*x+y*y);box.rotation.z=eval(rotationZVal)}function setBoxRotationX(box,step,rotationXVal){var value=rotationXVal,x=box.position.x,y=box.position.y,md=abs(x)+abs(y),d=sqrt(x*x+y*y);box.rotation.x=eval(rotationXVal)}function setBoxRotationY(box,step,rotationYVal){var value=rotationYVal,x=box.position.x,y=box.position.y,md=abs(x)+abs(y),d=sqrt(x*x+y*y);box.rotation.y=eval(rotationYVal)}function setBoxColorR(box,step,colRVal){var value=colRVal,x=box.position.x,y=box.position.y,md=abs(x)+abs(y),d=sqrt(x*x+y*y);box.material.color.r=eval(value)}function setBoxColorG(box,step,colGVal){var valueG=colGVal,x=box.position.x,y=box.position.y,md=abs(x)+abs(y),d=sqrt(x*x+y*y);box.material.color.g=eval(valueG)}function setBoxColorB(box,step,colBVal){var valueB=colBVal,x=box.position.x,y=box.position.y,md=abs(x)+abs(y),d=sqrt(x*x+y*y);box.material.color.b=eval(valueB)}colBBtn.addEventListener("click",function(){colBVal=colBValIn.value});var shapeSelector=document.getElementById("shapeSelector");function setShape(){switch(shapeSelector.value){case"box":boxes.forEach(function(e){e.geometry.dispose(),geometry=new THREE.BoxGeometry(1,1,1),e.geometry=geometry.clone()});break;case"ring":boxes.forEach(function(e){e.geometry.dispose(),geometry=new THREE.RingGeometry(1,5,6),e.geometry=geometry.clone()});break;case"dodecahedron":boxes.forEach(function(e){e.geometry.dispose(),geometry=new THREE.DodecahedronGeometry(1,3),e.geometry=geometry.clone()});break;case"dodecahedron-large":boxes.forEach(function(e){e.geometry.dispose(),geometry=new THREE.DodecahedronGeometry(3,1),e.geometry=geometry.clone()});break;case"cylinder":boxes.forEach(function(e){e.geometry.dispose(),geometry=new THREE.CylinderGeometry(1,1,10,12),e.geometry=geometry.clone()});break;case"plane":boxes.forEach(function(e){e.geometry.dispose(),geometry=new THREE.PlaneGeometry(1,1,1),e.geometry=geometry.clone()});break;case"octahedron":boxes.forEach(function(e){e.geometry.dispose(),geometry=new THREE.OctahedronGeometry(1,0),e.geometry=geometry.clone()});break;case"octahedron-large":boxes.forEach(function(e){e.geometry.dispose(),geometry=new THREE.OctahedronGeometry(3,0),e.geometry=geometry.clone()})}}shapeSelector.addEventListener("change",function(){return setShape()});var cameraPosZslider=document.getElementById("cameraPosZRange"),cameraPosZoutput=document.getElementById("cameraPosZ");function updateBoxes(e){for(var o=0;o<boxes.length;o++)setBoxPosZ(boxes[o],e,posZVal),setBoxScaleZ(boxes[o],e,scaleZVal),setBoxScaleX(boxes[o],e,scaleXVal),setBoxScaleY(boxes[o],e,scaleYVal),setBoxRotationZ(boxes[o],e,rotationZVal),setBoxRotationX(boxes[o],e,rotationXVal),setBoxRotationY(boxes[o],e,rotationYVal),setBoxColorR(boxes[o],e,colRVal),setBoxColorG(boxes[o],e,colGVal),setBoxColorB(boxes[o],e,colBVal)}cameraPosZoutput.innerHTML=cameraPosZslider.value,cameraPosZslider.oninput=function(){cameraPosZoutput.innerHTML=this.value,camera.position.z=parseFloat(this.value)};var step=0,animate=function e(){requestAnimationFrame(e),updateBoxes(step+=.05),renderer.render(scene,camera)};animate();for(var info=document.getElementsByClassName("info")[0],modes=document.getElementsByClassName("mode"),sun=document.getElementById("sun"),moon=document.getElementById("moon"),inputs=document.getElementsByTagName("INPUT"),selects=document.getElementsByTagName("SELECT"),spans=document.getElementsByTagName("SPAN"),body=document.getElementsByTagName("BODY")[0],buttons=document.getElementsByTagName("BUTTON"),i=0,len=modes.length;i<len;i++)modes[i].addEventListener("click",function(){return toggleMode()});var lightMode=!0,toggleMode=function(){if(TweenMax.fromTo("#body",2,{opacity:0},{opacity:1}),lightMode){for(var e=0,o=buttons.length;e<o;e++)buttons[e].style.backgroundColor="#222",buttons[e].style.color="#f6f6f6";for(var t=0,n=inputs.length;t<n;t++)inputs[t].style.backgroundColor="#333",inputs[t].style.color="#f6f6f6";for(var a=0,l=selects.length;a<l;a++)selects[a].style.backgroundColor="#333",selects[a].style.color="#f6f6f6";for(var s=0,r=spans.length;s<r;s++)spans[s].style.color="#f6f6f6";body.style.backgroundColor="#111",info.style.color="#f6f6f6",lightMode=!1,moon.style.display="none",sun.style.display="initial"}else{for(var c=0,i=buttons.length;c<i;c++)buttons[c].style.backgroundColor="#fff",buttons[c].style.color="#000";for(var d=0,y=inputs.length;d<y;d++)inputs[d].style.backgroundColor="#fff",inputs[d].style.color="#000";for(var m=0,u=selects.length;m<u;m++)selects[m].style.backgroundColor="#fff",selects[m].style.color="#000";for(var x=0,b=spans.length;x<b;x++)spans[x].style.color="#000";body.style.backgroundColor="#f6f6f6",info.style.color="#000",lightMode=!0,sun.style.display="none",moon.style.display="initial"}},closeBtn=document.querySelector(".closebtn"),openBtn=document.querySelector(".info");function openNav(){document.getElementById("side-nav").style.width="100%",document.querySelectorAll(".side-nav-p").forEach(function(e){return e.style.width="700px"})}function closeNav(){document.getElementById("side-nav").style.width="0"}openBtn.addEventListener("click",function(){return openNav()}),closeBtn.addEventListener("click",function(){return closeNav()});
},{}]},{},["Focm"], null)
//# sourceMappingURL=visualiser.72c70792.js.map