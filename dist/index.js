// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
var cos = Math.cos;
var sin = Math.sin;
var sqrt = Math.sqrt;
var abs = Math.abs;
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 40;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var geometry = new THREE.DodecahedronGeometry(1, 3);
var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.x = 1;
scene.add(directionalLight);
var light = new THREE.AmbientLight(0xffffff);
scene.add(light);
var angle = 0;
var radius = 45;
var boxes = [];
var numBoxes = 5;

for (var x = -numBoxes; x <= numBoxes; x++) {
  for (var y = -numBoxes; y <= numBoxes; y++) {
    var material = new THREE.MeshStandardMaterial();
    var cube = new THREE.Mesh(geometry, material);
    cube.position.x = x * 2;
    cube.position.y = y * 2;
    boxes.push(cube);
    scene.add(cube);
  }
} // initial values


var posZVal = 1;
var scaleZVal = 1;
var scaleXVal = 1;
var scaleYVal = 1;
var rotationZVal = 1;
var rotationXVal = 1;
var rotationYVal = 1;
var colRVal = 1;
var colGVal = 1;
var colBVal = 1;
var posZValIn = document.getElementById('shapePosZInput');
var posZBtn = document.getElementById('shapePosZ');
posZBtn.addEventListener('click', function () {
  posZVal = posZValIn.value;
});
var scaleZValIn = document.getElementById('shapeScaleZInput');
var scaleZBtn = document.getElementById('shapeScaleZ');
scaleZBtn.addEventListener('click', function () {
  scaleZVal = scaleZValIn.value;
});
var scaleXValIn = document.getElementById('shapeScaleXInput');
var scaleXBtn = document.getElementById('shapeScaleX');
scaleXBtn.addEventListener('click', function () {
  scaleXVal = scaleXValIn.value;
});
var scaleYValIn = document.getElementById('shapeScaleYInput');
var scaleYBtn = document.getElementById('shapeScaleY');
scaleYBtn.addEventListener('click', function () {
  scaleYVal = scaleYValIn.value;
});
var rotationZValIn = document.getElementById('shapeRotationZInput');
var rotationZBtn = document.getElementById('shapeRotationZ');
rotationZBtn.addEventListener('click', function () {
  rotationZVal = rotationZValIn.value;
});
var rotationXValIn = document.getElementById('shapeRotationXInput');
var rotationXBtn = document.getElementById('shapeRotationX');
rotationXBtn.addEventListener('click', function () {
  rotationXVal = rotationXValIn.value;
});
var rotationYValIn = document.getElementById('shapeRotationYInput');
var rotationYBtn = document.getElementById('shapeRotationY');
rotationYBtn.addEventListener('click', function () {
  rotationYVal = rotationYValIn.value;
});
var colRValIn = document.getElementById('shapeColRInput');
var colRBtn = document.getElementById('shapeColR');
colRBtn.addEventListener('click', function () {
  colRVal = colRValIn.value;
});
var colGValIn = document.getElementById('shapeColGInput');
var colGBtn = document.getElementById('shapeColG');
colGBtn.addEventListener('click', function () {
  colGVal = colGValIn.value;
});
var colBValIn = document.getElementById('shapeColBInput');
var colBBtn = document.getElementById('shapeColB');
colBBtn.addEventListener('click', function () {
  colBVal = colBValIn.value;
});

function setBoxPosZ(box, step, posZVal) {
  var value = posZVal;
  var x = box.position.x;
  var y = box.position.y;
  var md = abs(x) + abs(y);
  var d = sqrt(x * x + y * y);
  var cos = Math.cos;
  box.position.z = eval(value);
}

function setBoxScaleZ(box, step, scaleZVal) {
  var value = scaleZVal;
  var x = box.position.x;
  var y = box.position.y;
  var md = abs(x) + abs(y);
  var d = sqrt(x * x + y * y);
  box.scale.z = eval(scaleZVal);
}

function setBoxScaleX(box, step, scaleXVal) {
  var value = scaleXVal;
  var x = box.position.x;
  var y = box.position.y;
  var md = abs(x) + abs(y);
  var d = sqrt(x * x + y * y);
  box.scale.x = eval(scaleXVal);
}

function setBoxScaleY(box, step, scaleYVal) {
  var value = scaleYVal;
  var x = box.position.x;
  var y = box.position.y;
  var md = abs(x) + abs(y);
  var d = sqrt(x * x + y * y);
  box.scale.y = eval(scaleYVal);
}

function setBoxRotationZ(box, step, rotationZVal) {
  var value = rotationZVal;
  var x = box.position.x;
  var y = box.position.y;
  var md = abs(x) + abs(y);
  var d = sqrt(x * x + y * y);
  box.rotation.z = eval(rotationZVal);
}

function setBoxRotationX(box, step, rotationXVal) {
  var value = rotationXVal;
  var x = box.position.x;
  var y = box.position.y;
  var md = abs(x) + abs(y);
  var d = sqrt(x * x + y * y);
  box.rotation.x = eval(rotationXVal);
}

function setBoxRotationY(box, step, rotationYVal) {
  var value = rotationYVal;
  var x = box.position.x;
  var y = box.position.y;
  var md = abs(x) + abs(y);
  var d = sqrt(x * x + y * y);
  box.rotation.y = eval(rotationYVal);
}

function setBoxColorR(box, step, colRVal) {
  var value = colRVal;
  var x = box.position.x;
  var y = box.position.y;
  var md = abs(x) + abs(y);
  var d = sqrt(x * x + y * y);
  box.material.color.r = eval(value);
}

function setBoxColorG(box, step, colGVal) {
  var valueG = colGVal;
  var x = box.position.x;
  var y = box.position.y;
  var md = abs(x) + abs(y);
  var d = sqrt(x * x + y * y);
  box.material.color.g = eval(valueG);
}

function setBoxColorB(box, step, colBVal) {
  var valueB = colBVal;
  var x = box.position.x;
  var y = box.position.y;
  var md = abs(x) + abs(y);
  var d = sqrt(x * x + y * y);
  box.material.color.b = eval(valueB);
}

var shapeSelector = document.getElementById('shapeSelector');
shapeSelector.addEventListener('change', function () {
  return setShape();
});

function setShape() {
  switch (shapeSelector.value) {
    case "box":
      boxes.forEach(function (cube) {
        cube.geometry.dispose();
        geometry = new THREE.BoxGeometry(1, 1, 1);
        cube.geometry = geometry.clone();
      });
      break;

    case "ring":
      boxes.forEach(function (cube) {
        cube.geometry.dispose();
        geometry = new THREE.RingGeometry(1, 5, 6);
        cube.geometry = geometry.clone();
      });
      break;

    case "dodecahedron":
      boxes.forEach(function (cube) {
        cube.geometry.dispose();
        geometry = new THREE.DodecahedronGeometry(1, 3);
        cube.geometry = geometry.clone();
      });
      break;

    case "dodecahedron-large":
      boxes.forEach(function (cube) {
        cube.geometry.dispose();
        geometry = new THREE.DodecahedronGeometry(3, 1);
        cube.geometry = geometry.clone();
      });
      break;

    case "cylinder":
      boxes.forEach(function (cube) {
        cube.geometry.dispose();
        geometry = new THREE.CylinderGeometry(1, 1, 10, 12);
        cube.geometry = geometry.clone();
      });
      break;

    case "plane":
      boxes.forEach(function (cube) {
        cube.geometry.dispose();
        geometry = new THREE.PlaneGeometry(1, 1, 1);
        cube.geometry = geometry.clone();
      });
      break;

    case "octahedron":
      boxes.forEach(function (cube) {
        cube.geometry.dispose();
        geometry = new THREE.OctahedronGeometry(1, 0);
        cube.geometry = geometry.clone();
      });
      break;

    case "octahedron-large":
      boxes.forEach(function (cube) {
        cube.geometry.dispose();
        geometry = new THREE.OctahedronGeometry(3, 0);
        cube.geometry = geometry.clone();
      });
      break;
  }
} // camera position slider


var cameraPosZslider = document.getElementById('cameraPosZRange');
var cameraPosZoutput = document.getElementById('cameraPosZ');
cameraPosZoutput.innerHTML = cameraPosZslider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)

cameraPosZslider.oninput = function () {
  cameraPosZoutput.innerHTML = this.value;
  camera.position.z = parseFloat(this.value);
};

var rotation = false;
var rotationX = document.getElementById('rotateX');
rotationX.addEventListener('click', function () {
  return rotation = true;
});

function updateBoxes(step) {
  for (var i = 0; i < boxes.length; i++) {
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

var step = 5;

var animate = function animate() {
  requestAnimationFrame(animate);
  step += 0.01;
  updateBoxes(step);
  renderer.render(scene, camera);

  if (rotation) {
    // Use Math.cos and Math.sin to set camera X and Z values based on angle. 
    camera.position.x = radius * Math.cos(angle);
    camera.position.z = radius * Math.sin(angle);
    camera.position.y = radius * Math.sin(angle);
    angle += 0.005;
  }
};

animate();
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61871" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/index.js.map