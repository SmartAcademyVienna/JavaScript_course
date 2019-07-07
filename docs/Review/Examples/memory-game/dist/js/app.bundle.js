/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// We started with some configuration before we write the main functions.\n\nlet game = document.getElementById(\"game-container\");\nlet gameHtml = \"\";\nlet pairs = [];\nlet cards;\nlet movesPlayed = 0;\nwindow.shuffledImages = null;\n\nfunction shuffle(array) {\n  var i = array.length - 1,\n    temp;\n  while (i >= 0) {\n    var rand = Math.floor(Math.random() * 24);\n    temp = array[i];\n    array[i] = array[rand];\n    array[rand] = temp;\n    --i;\n  }\n  return array;\n}\n\nlet memoryImages = [\n  \"assets/3d.png\",\n  \"assets/amber.png\",\n  \"assets/angular.png\",\n  \"assets/react.png\",\n  \"assets/graphql.png\",\n  \"assets/js.png\",\n  \"assets/nodejs.png\",\n  \"assets/rxjs.jpeg\",\n  \"assets/tensorflow.png\",\n  \"assets/view.jpg\",\n  \"assets/gulp.png\",\n  \"assets/chartjs.svg\",\n\n  \"assets/3d.png\",\n  \"assets/amber.png\",\n  \"assets/angular.png\",\n  \"assets/react.png\",\n  \"assets/graphql.png\",\n  \"assets/js.png\",\n  \"assets/nodejs.png\",\n  \"assets/rxjs.jpeg\",\n  \"assets/tensorflow.png\",\n  \"assets/view.jpg\",\n  \"assets/gulp.png\",\n  \"assets/chartjs.svg\"\n];\n\n/**\n * To start new game, set initial values, images shuffling and rendering rendering\n */\nfunction newGame() {\n  setMovePoints(true);\n  pairs = [];\n  gameHtml = '';\n  shuffledImages = shuffle(memoryImages);\n  for (let i = 0; i < shuffledImages.length; i++) {\n    gameHtml += `<div class=\"card\" onclick=\"window.flipCard(${i})\">\n                    <div class=\"front-face\">\n                      <img class=\"unique-src\" src=\"${shuffledImages[i]}\" />\n                    </div>\n                    <div class=\"back-face\">\n                      <img src=\"assets/texture.jpg\" />\n                    </div>\n                  </div>`;\n  }\n  cards = document.getElementsByClassName(\"card\");\n  game.innerHTML = gameHtml;\n}\n\n/**\n * check if those pairs has the same image source. If yes then add matched flag to the element in order preventing clicking on the element again\n * @param {number[]} pairs\n */\nfunction checkMathes(pairs) {\n  let p1 = cards[pairs[0]].getElementsByClassName(\"unique-src\")[0],\n    p2 = cards[pairs[1]].getElementsByClassName(\"unique-src\")[0],\n    hasMatch = p1.src === p2.src;\n  if (hasMatch) {\n    cards[pairs[0]].setAttribute(\"data-matched\", true);\n    cards[pairs[1]].setAttribute(\"data-matched\", true);\n  }\n  return hasMatch;\n}\n\n/**\n * To cards click event triggered then flip the card. Also it is caching clicked paris position to be used then for checking for matchings\n * @param {index} index\n */\nfunction flipCard(index) {\n  if (\n    !cards[index].getAttribute(\"data-matched\") &&\n    cards[index].className !== \"card flip\"\n  ) {\n    cards[index].className = \"card flip\";\n\n    if (pairs.length === 2) {\n      if (!checkMathes(pairs)) {\n        for (let i = 0; i < pairs.length; i++) {\n          cards[pairs[i]].className = \"card\";\n        }\n      }\n      pairs = [];\n    }\n    if (pairs[0] != index) {\n      pairs.push(index);\n    }\n    setMovePoints();\n  }\n  return false;\n}\n\n/**\n * To increase movesPlayed counter on each move, then show it to the html\n * @param {boolean} isNewGame\n */\nfunction setMovePoints(isNewGame) {\n  movesPlayed++;\n  if (isNewGame) {\n    movesPlayed = 0;\n  }\n  document.querySelector(\"#moves .points\").textContent = movesPlayed;\n}\nnewGame();\n\n/**\n * Thise two lines are used to solve webpack contexts issue which is not referring to window by default.\n */\nwindow.flipCard = flipCard;\nwindow.newGame = newGame;\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/index.js ./src/css/style.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/css/style.css */\"./src/css/style.css\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/css/style.css?");

/***/ })

/******/ });