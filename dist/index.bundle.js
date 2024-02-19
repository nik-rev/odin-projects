(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/board.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/board.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/ship.jpg */ "./src/assets/img/ship.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/water.jpg */ "./src/assets/img/water.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#board,
.board {
  height: 1000px;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  background-color: #085ca7;
}

#ships {
  height: 1000px;
  width: 700px;
  background-color: rgb(184, 223, 230);
  display: grid;
  gap: 40px;
  padding: 40px;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-auto-rows: 100px;
  justify-content: space-evenly;
  align-content: center;
  overflow: scroll;
}

.ship {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  cursor: pointer;
}

.ship.ship-4 {
  grid-row: span 4 / auto;
  max-height: 400px;
}

.ship.ship-4.lay {
  grid-row: auto;
  grid-column: span 4 / auto;
  max-width: 400px;
}

.ship.ship-3 {
  grid-row: span 3 / auto;
  max-height: 300px;
}

.ship.ship-3.lay {
  grid-row: auto;
  grid-column: span 3 / auto;
  max-width: 300px;
}

.ship.ship-2 {
  grid-row: span 2 / auto;
  max-height: 200px;
}

.ship.ship-2.lay {
  grid-row: auto;
  grid-column: span 2 / auto;
  max-width: 200px;
}

.ship.ship-1 {
  grid-row: span 1 / auto;
}

.ship.ship-1.lay {
  grid-row: auto;
  grid-column: span 1 / auto;
}

#game-container {
  display: flex;
  gap: 50px;
}

.cell {
  width: 10%;
  height: 10%;
  position: relative;
}

[class="cell-alive cell"] {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  filter: blur(2px);
}

[class="cell-alive cell"]:nth-child(3n) {
  animation: shake 1s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  25% {
    transform: translate(-0.2px, 0.2px) rotate(-0.2deg);
  }
  75% {
    transform: translate(0.2px, -0.2px) rotate(0.2deg);
  }
  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }
}

/* .highlight {
} */

.highlight::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  box-shadow: 0px 0px 25px 17px rgba(0, 0, 0, 0.4);
}

.invalid-placement {
  background-color: rgb(246, 53, 53);
}

.cell.cell-segment {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.cell.cell-segment.cell-dead::before {
  pointer-events: none;
  content: "x";
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  color: rgb(255, 110, 110);
  font-size: 6rem;
  text-shadow: 0px 0px 5px black;
}

.cell.cell-dead::before {
  pointer-events: none;
  content: "x";
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  color: rgb(0, 4, 255);
  font-size: 6rem;
  text-shadow: 0px 0px 5px black;
}

#rotate {
  height: 100%;
  width: 100%;
}
`, "",{"version":3,"sources":["webpack://./src/styles/board.css"],"names":[],"mappings":"AAAA;;EAEE,cAAc;EACd,aAAa;EACb,aAAa;EACb,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,oCAAoC;EACpC,aAAa;EACb,SAAS;EACT,aAAa;EACb,+CAA+C;EAC/C,qBAAqB;EACrB,6BAA6B;EAC7B,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,yDAA6C;EAC7C,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,UAAU;EACV,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,yDAA8C;EAC9C,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA;EACE;IACE,2CAA2C;EAC7C;EACA;IACE,mDAAmD;EACrD;EACA;IACE,kDAAkD;EACpD;EACA;IACE,2CAA2C;EAC7C;AACF;;AAEA;GACG;;AAEH;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,UAAU;EACV,gDAAgD;AAClD;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,yDAA6C;AAC/C;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;EACP,yBAAyB;EACzB,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,MAAM;EACN,OAAO;EACP,qBAAqB;EACrB,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,WAAW;AACb","sourcesContent":["#board,\n.board {\n  height: 1000px;\n  width: 1000px;\n  display: flex;\n  flex-wrap: wrap;\n  background-color: #085ca7;\n}\n\n#ships {\n  height: 1000px;\n  width: 700px;\n  background-color: rgb(184, 223, 230);\n  display: grid;\n  gap: 40px;\n  padding: 40px;\n  grid-template-columns: repeat(auto-fill, 100px);\n  grid-auto-rows: 100px;\n  justify-content: space-evenly;\n  align-content: center;\n  overflow: scroll;\n}\n\n.ship {\n  background-image: url(../assets/img/ship.jpg);\n  cursor: pointer;\n}\n\n.ship.ship-4 {\n  grid-row: span 4 / auto;\n  max-height: 400px;\n}\n\n.ship.ship-4.lay {\n  grid-row: auto;\n  grid-column: span 4 / auto;\n  max-width: 400px;\n}\n\n.ship.ship-3 {\n  grid-row: span 3 / auto;\n  max-height: 300px;\n}\n\n.ship.ship-3.lay {\n  grid-row: auto;\n  grid-column: span 3 / auto;\n  max-width: 300px;\n}\n\n.ship.ship-2 {\n  grid-row: span 2 / auto;\n  max-height: 200px;\n}\n\n.ship.ship-2.lay {\n  grid-row: auto;\n  grid-column: span 2 / auto;\n  max-width: 200px;\n}\n\n.ship.ship-1 {\n  grid-row: span 1 / auto;\n}\n\n.ship.ship-1.lay {\n  grid-row: auto;\n  grid-column: span 1 / auto;\n}\n\n#game-container {\n  display: flex;\n  gap: 50px;\n}\n\n.cell {\n  width: 10%;\n  height: 10%;\n  position: relative;\n}\n\n[class=\"cell-alive cell\"] {\n  background-image: url(../assets/img/water.jpg);\n  filter: blur(2px);\n}\n\n[class=\"cell-alive cell\"]:nth-child(3n) {\n  animation: shake 1s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes shake {\n  0% {\n    transform: translate(0px, 0px) rotate(0deg);\n  }\n  25% {\n    transform: translate(-0.2px, 0.2px) rotate(-0.2deg);\n  }\n  75% {\n    transform: translate(0.2px, -0.2px) rotate(0.2deg);\n  }\n  100% {\n    transform: translate(0px, 0px) rotate(0deg);\n  }\n}\n\n/* .highlight {\n} */\n\n.highlight::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1;\n  box-shadow: 0px 0px 25px 17px rgba(0, 0, 0, 0.4);\n}\n\n.invalid-placement {\n  background-color: rgb(246, 53, 53);\n}\n\n.cell.cell-segment {\n  background-image: url(../assets/img/ship.jpg);\n}\n\n.cell.cell-segment.cell-dead::before {\n  pointer-events: none;\n  content: \"x\";\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  color: rgb(255, 110, 110);\n  font-size: 6rem;\n  text-shadow: 0px 0px 5px black;\n}\n\n.cell.cell-dead::before {\n  pointer-events: none;\n  content: \"x\";\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  color: rgb(0, 4, 255);\n  font-size: 6rem;\n  text-shadow: 0px 0px 5px black;\n}\n\n#rotate {\n  height: 100%;\n  width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/body.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/body.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/mystery-1599527_1280.jpg */ "./src/assets/img/mystery-1599527_1280.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 50px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

form {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.no-display,
#game-container.no-display {
  display: none;
}

h1 {
  color: white;
  font-size: 4rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

button,
input {
  width: 600px;
  height: 200px;
  font-size: 500px;
}
`, "",{"version":3,"sources":["webpack://./src/styles/body.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,6BAA6B;EAC7B,SAAS;EACT,yDAA6D;EAC7D,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,wEAAwE;AAC1E;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,gBAAgB;AAClB","sourcesContent":["body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-evenly;\n  gap: 50px;\n  background-image: url(../assets/img/mystery-1599527_1280.jpg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n.no-display,\n#game-container.no-display {\n  display: none;\n}\n\nh1 {\n  color: white;\n  font-size: 4rem;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n\nbutton,\ninput {\n  width: 600px;\n  height: 200px;\n  font-size: 500px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}
/* hello */
/* test */
/* test */
* {
  line-height: calc(1em + 0.5rem);
  margin: 0;
}

html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

body {
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}

textarea:not([rows]) {
  min-height: 10em;
}

:target {
  scroll-margin-block: 5ex;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root,
#__next {
  isolation: isolate;
}
`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;AACA,UAAU;AACV,SAAS;AACT,SAAS;AACT;EACE,+BAA+B;EAC/B,SAAS;AACX;;AAEA;EACE,2BAA2B;EAC3B,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;AACpB","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/* hello */\n/* test */\n/* test */\n* {\n  line-height: calc(1em + 0.5rem);\n  margin: 0;\n}\n\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  min-height: 100vh;\n}\n\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n:target {\n  scroll-margin-block: 5ex;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/scrollbar.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/scrollbar.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  scrollbar-width: thin;
  scrollbar-color: #aaaaaa #ffffff;
}

*::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #ffffff00;
}

*::-webkit-scrollbar-track:hover {
  background-color: #ffffff00;
}

*::-webkit-scrollbar-track:active {
  background-color: #ffffff00;
}

*::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: #aaaaaa;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #717171;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #717171;
}

::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0);
}
`, "",{"version":3,"sources":["webpack://./src/styles/scrollbar.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,4BAA4B;AAC9B","sourcesContent":["* {\n  scrollbar-width: thin;\n  scrollbar-color: #aaaaaa #ffffff;\n}\n\n*::-webkit-scrollbar {\n  height: 10px;\n  width: 10px;\n}\n*::-webkit-scrollbar-track {\n  border-radius: 5px;\n  background-color: #ffffff00;\n}\n\n*::-webkit-scrollbar-track:hover {\n  background-color: #ffffff00;\n}\n\n*::-webkit-scrollbar-track:active {\n  background-color: #ffffff00;\n}\n\n*::-webkit-scrollbar-thumb {\n  border-radius: 8px;\n  background-color: #aaaaaa;\n}\n\n*::-webkit-scrollbar-thumb:hover {\n  background-color: #717171;\n}\n\n*::-webkit-scrollbar-thumb:active {\n  background-color: #717171;\n}\n\n::-webkit-scrollbar-corner {\n  background: rgba(0, 0, 0, 0);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.low-opacity {
  opacity: 50%;
}

#status {
  font-size: 4rem;
  color: white;
  padding: 40px;
  background-color: black;
}

button {
  font-size: 3rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
}

input {
  font-size: 3rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

#ships > #rotate {
  font-size: 1rem;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf;sDACoD;EACpD,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf;sDACoD;AACtD;;AAEA;EACE,eAAe;AACjB","sourcesContent":[".low-opacity {\n  opacity: 50%;\n}\n\n#status {\n  font-size: 4rem;\n  color: white;\n  padding: 40px;\n  background-color: black;\n}\n\nbutton {\n  font-size: 3rem;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  font-weight: bold;\n}\n\ninput {\n  font-size: 3rem;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\",\n    \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n\n#ships > #rotate {\n  font-size: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/board.css":
/*!******************************!*\
  !*** ./src/styles/board.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./board.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/board.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/body.css":
/*!*****************************!*\
  !*** ./src/styles/body.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./body.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/body.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/scrollbar.css":
/*!**********************************!*\
  !*** ./src/styles/scrollbar.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_scrollbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./scrollbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/scrollbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_scrollbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_scrollbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_scrollbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_scrollbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/dom/dom-board-manager.js":
/*!**********************************************!*\
  !*** ./src/scripts/dom/dom-board-manager.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/ai */ "./src/scripts/logic/ai.js");
/* harmony import */ var _drag_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag-manager */ "./src/scripts/dom/drag-manager.js");
/* harmony import */ var _hit_event_listeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hit-event-listeners */ "./src/scripts/dom/hit-event-listeners.js");




function createDomBoard({ player, parent, setup, playerOne, playerTwo }) {
  const status = document.querySelector("#status");
  status.style.color = "white";
  if (setup) {
    status.textContent = `${player.name}'s turn to place ships!`;
  } else {
    status.textContent = `${playerOne.name}'s turn to strike!`;
  }
  for (let y = 10; y >= 1; y--) {
    for (let x = 1; x <= 10; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell-alive");
      cell.classList.add("cell");
      let focus;
      if (player instanceof _logic_ai__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        focus = player.showBoard().coords(x, y);
      } else {
        focus = player.board.coords(x, y);
      }
      if (!setup) {
        if (!(playerOne instanceof _logic_ai__WEBPACK_IMPORTED_MODULE_0__["default"]) && !(playerTwo instanceof _logic_ai__WEBPACK_IMPORTED_MODULE_0__["default"])) {
          if (playerOne.canHit) {
            status.textContent = `${playerOne.name}'s turn to strike!`;
            if (player === playerOne) {
              focus = player.board.coords(x, y);
            } else {
              focus = player.showBoard().coords(x, y);
              (0,_hit_event_listeners__WEBPACK_IMPORTED_MODULE_2__["default"])({
                cell,
                coordinates: [x, y],
                playerOne,
                playerTwo,
              });
            }
          } else if (playerTwo.canHit) {
            status.textContent = `${playerTwo.name}'s turn to strike!`;
            if (player === playerOne) {
              focus = player.showBoard().coords(x, y);
              (0,_hit_event_listeners__WEBPACK_IMPORTED_MODULE_2__["default"])({
                cell,
                coordinates: [x, y],
                playerOne,
                playerTwo,
              });
            } else {
              focus = player.board.coords(x, y);
            }
          }
        }
      }

      if (Object.hasOwn(focus, "segment")) {
        cell.classList.add("cell-segment");
      }
      if (!focus.isAlive) {
        cell.classList.remove("cell-alive");
        cell.classList.add("cell-dead");
      }
      if (setup) {
        (0,_drag_manager__WEBPACK_IMPORTED_MODULE_1__["default"])({
          cell,
          player,
          coords: [x, y],
          playerOne,
          playerTwo,
        });
      }
      if (player instanceof _logic_ai__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        (0,_hit_event_listeners__WEBPACK_IMPORTED_MODULE_2__["default"])({
          cell,
          coordinates: [x, y],
          playerOne,
          playerTwo,
        });
      }

      parent.append(cell);
    }
  }
}

function clearDomBoard({ parent }) {
  const domCells = [...parent.querySelectorAll(".cell")];
  domCells.forEach((domCell) => {
    parent.removeChild(domCell);
  });
}

function updateDomBoard({
  player,
  parent,
  setup = true,
  playerOne,
  playerTwo,
}) {
  clearDomBoard({ parent });
  createDomBoard({ player, parent, setup, playerOne, playerTwo });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateDomBoard);


/***/ }),

/***/ "./src/scripts/dom/dom-ship-manager.js":
/*!*********************************************!*\
  !*** ./src/scripts/dom/dom-ship-manager.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _drag_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag-manager */ "./src/scripts/dom/drag-manager.js");


function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
function createDomShips({ shipsArray, parent, lay, playerOne, playerTwo }) {
  const shuffledShipsArray = shuffle(shipsArray);
  shuffledShipsArray.forEach((ship) => {
    const domShip = document.createElement("div");
    domShip.classList.add("ship");
    domShip.classList.add(`ship-${ship}`);
    if (lay) {
      domShip.classList.add("lay");
    }
    domShip.setAttribute("draggable", "true");
    domShip.addEventListener("dragstart", (event) => {
      (0,_drag_manager__WEBPACK_IMPORTED_MODULE_0__.onDragStart)({ event, playerOne, playerTwo });
    });
    domShip.addEventListener("dragend", (event) => {
      (0,_drag_manager__WEBPACK_IMPORTED_MODULE_0__.onDragEnd)({ event, playerOne, playerTwo });
    });
    parent.append(domShip);
  });
}

function rotateAllShips() {
  document.querySelectorAll(".ship").forEach((ship) => {
    ship.classList.toggle("lay");
  });
  document.getElementById("ships").classList.toggle("lay");
}

function clearDomShips({ parent }) {
  const domShips = [...parent.querySelectorAll(".ship")];
  domShips.forEach((domShip) => {
    parent.removeChild(domShip);
  });
}

function updateDomShips({ shipsArray, parent, playerOne, playerTwo }) {
  const rotateButton = document.getElementById("rotate");
  rotateButton.addEventListener("click", rotateAllShips);
  const lay = document.querySelector("#ships").className.includes("lay");
  clearDomShips({ parent });
  createDomShips({ shipsArray, parent, lay, playerOne, playerTwo });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateDomShips);


/***/ }),

/***/ "./src/scripts/dom/drag-manager.js":
/*!*****************************************!*\
  !*** ./src/scripts/dom/drag-manager.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   onDragEnd: () => (/* binding */ onDragEnd),
/* harmony export */   onDragStart: () => (/* binding */ onDragStart)
/* harmony export */ });
/* harmony import */ var _logic_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/ai */ "./src/scripts/logic/ai.js");
/* harmony import */ var _dom_board_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-board-manager */ "./src/scripts/dom/dom-board-manager.js");
/* harmony import */ var _dom_ship_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-ship-manager */ "./src/scripts/dom/dom-ship-manager.js");
/* harmony import */ var _start_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start-game */ "./src/scripts/dom/start-game.js");





function ArrayIncludesArray(parentArray, subsetArray) {
  let counter = 0;
  parentArray.forEach((subarray) => {
    if (JSON.stringify(subarray) === JSON.stringify(subsetArray)) {
      counter += 1;
    }
  });
  return counter !== 0;
}

function clearHighlightFromAllCellsExceptInputCells(cells = []) {
  for (let y = 10; y >= 1; y--) {
    for (let x = 1; x <= 10; x++) {
      const coordinates = [x, y];
      if (
        !ArrayIncludesArray(cells, coordinates) &&
        document.getElementById("ships") !== null
      ) {
        const cell = document.getElementById(`${x}-${y}`);
        cell.classList.remove("highlight");
      }
    }
  }
}

function onDragStart({ event }) {
  const target = event.currentTarget;
  setTimeout(() => target.classList.add("low-opacity"));
  setTimeout(() => target.classList.add("draggable"));
}

function highlightCells(coordinates) {
  coordinates.forEach((coordinate) => {
    const highlight = document.getElementById(
      `${coordinate[0]}-${coordinate[1]}`
    );
    highlight.classList.add("highlight");
  });
}

function onDragEnter({ event, player }) {
  const [x, y] = event.target.id.split("-").map((str) => Number(str));
  const sizeOfShip = document
    .querySelector(".draggable")
    .className.match(/\d+/)
    .map((el) => Number(el))[0];
  const lay = document.querySelector(".draggable").className.includes("lay");
  try {
    const coords = player.placeShip(sizeOfShip, lay, [x, y], true);
    highlightCells(coords);
    clearHighlightFromAllCellsExceptInputCells(coords);
  } catch (error) {
    clearHighlightFromAllCellsExceptInputCells();
  }
}

function onDrop({ event, player, playerOne, playerTwo }) {
  const [x, y] = event.target.id.split("-").map((str) => Number(str));
  const sizeOfShip = document
    .querySelector(".draggable")
    .className.match(/\d+/)
    .map((el) => Number(el))[0];
  const lay = document.querySelector(".draggable").className.includes("lay");
  try {
    player.placeShip(sizeOfShip, lay, [x, y]);
    const board = document.getElementById("board");
    const ships = document.getElementById("ships");
    (0,_dom_board_manager__WEBPACK_IMPORTED_MODULE_1__["default"])({ player, parent: board, playerOne, playerTwo });
    (0,_dom_ship_manager__WEBPACK_IMPORTED_MODULE_2__["default"])({
      shipsArray: player.unplacedShips,
      parent: ships,
      playerOne,
      playerTwo,
    });
    if (player.canGameStart()) {
      if (!(playerTwo instanceof _logic_ai__WEBPACK_IMPORTED_MODULE_0__["default"])) {
        (0,_start_game__WEBPACK_IMPORTED_MODULE_3__.domShipManager2)({ player2: playerTwo, playerOne, playerTwo });
        if (playerTwo.canGameStart()) {
          (0,_start_game__WEBPACK_IMPORTED_MODULE_3__["default"])({ player1: playerOne, playerOne, playerTwo });
        }
      } else {
        (0,_start_game__WEBPACK_IMPORTED_MODULE_3__["default"])({ player1: player, playerOne, playerTwo });
      }
    }
  } catch (error) {
    clearHighlightFromAllCellsExceptInputCells();
  }
}

function onDragEnd({ event }) {
  const success = document.getElementById("ships");

  if (success !== null) {
    clearHighlightFromAllCellsExceptInputCells();
    const target = event.currentTarget;
    target.classList.remove("low-opacity");
    target.classList.remove("draggable");
  }
}

function setupDragEventListeners({
  cell,
  player,
  coords,
  playerOne,
  playerTwo,
}) {
  cell.addEventListener("dragenter", (event) => {
    onDragEnter({ event, player, playerOne, playerTwo });
  });
  cell.addEventListener("drop", (event) => {
    onDrop({ event, player, playerOne, playerTwo });
  });
  // Necessary to allow dropping
  cell.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  cell.setAttribute("id", `${coords[0]}-${coords[1]}`);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupDragEventListeners);



/***/ }),

/***/ "./src/scripts/dom/hit-event-listeners.js":
/*!************************************************!*\
  !*** ./src/scripts/dom/hit-event-listeners.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom_board_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-board-manager */ "./src/scripts/dom/dom-board-manager.js");
/* harmony import */ var _logic_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/ai */ "./src/scripts/logic/ai.js");



function setupHitEventListeners({ cell, coordinates, playerOne, playerTwo }) {
  const boards = [...document.querySelectorAll(".board")];
  const playerOneBoard = boards[0];
  const playerTwoBoard = boards[1];
  const status = document.querySelector("#status");
  cell.addEventListener("click", () => {
    let mistake = false;
    try {
      if (playerOne instanceof _logic_ai__WEBPACK_IMPORTED_MODULE_1__["default"] || playerTwo instanceof _logic_ai__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        playerOne.hitEnemy(...coordinates);
        playerTwo.randomHit();
      } else if (playerTwo.canHit) {
        playerTwo.hitEnemy(...coordinates);
      } else {
        playerOne.hitEnemy(...coordinates);
      }
    } catch {
      status.textContent = "You cannot hit there!";
      status.style.color = "red";
      mistake = true;
    }

    const winner = playerOne.winner || playerTwo.winner;

    if (winner) {
      document.body.removeChild(document.querySelector("#game-container"));
      document.querySelector("#game-over").classList.remove("no-display");
      if (playerOne.winner) {
        status.textContent = `${playerOne.name} has won!`;
      } else if (playerTwo.winner) {
        status.textContent = `${playerTwo.name} has won!`;
      }
    }

    if (!mistake && !winner) {
      if (playerOne instanceof _logic_ai__WEBPACK_IMPORTED_MODULE_1__["default"] || playerTwo instanceof _logic_ai__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        (0,_dom_board_manager__WEBPACK_IMPORTED_MODULE_0__["default"])({
          player: playerOne,
          parent: playerOneBoard,
          setup: false,
          playerOne,
          playerTwo,
        });
        (0,_dom_board_manager__WEBPACK_IMPORTED_MODULE_0__["default"])({
          player: playerTwo,
          parent: playerTwoBoard,
          setup: false,
          playerOne,
          playerTwo,
        });
      } else {
        let hittingPlayer;
        if (playerOne.canHit) {
          hittingPlayer = playerOne;
        } else {
          hittingPlayer = playerTwo;
        }
        [playerOneBoard.id, playerTwoBoard.id] = [
          playerTwoBoard.id,
          playerOneBoard.id,
        ];
        (0,_dom_board_manager__WEBPACK_IMPORTED_MODULE_0__["default"])({
          player: hittingPlayer,
          parent: playerOneBoard,
          setup: false,
          playerOne,
          playerTwo,
        });
        (0,_dom_board_manager__WEBPACK_IMPORTED_MODULE_0__["default"])({
          player: hittingPlayer.enemy,
          parent: playerTwoBoard,
          setup: false,
          playerOne,
          playerTwo,
        });
      }
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupHitEventListeners);


/***/ }),

/***/ "./src/scripts/dom/input-screen.js":
/*!*****************************************!*\
  !*** ./src/scripts/dom/input-screen.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/ai */ "./src/scripts/logic/ai.js");
/* harmony import */ var _logic_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/player */ "./src/scripts/logic/player.js");
/* harmony import */ var _dom_board_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-board-manager */ "./src/scripts/dom/dom-board-manager.js");
/* harmony import */ var _dom_ship_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-ship-manager */ "./src/scripts/dom/dom-ship-manager.js");





const playerVsPlayerButton = document.querySelector("#player-vs-player");
const playerVsAiButton = document.querySelector("#player-vs-ai");
const form = document.querySelector("form");
const playerTwoInput = document.querySelector("#player-2-name");
const playerOneInput = document.querySelector("#player-1-name");
const heading = document.querySelector("h1");
const domBoard = document.querySelector("#board");
const domShips = document.querySelector("#ships");
const gameContainer = document.querySelector("#game-container");
const status = document.querySelector("#status");
const restartGameButton = document.querySelector("#game-over");
restartGameButton.addEventListener("click", () => {
  // 😂
  location.reload();
});

function toggleOptionsMenu() {
  playerVsAiButton.classList.add("no-display");
  playerVsPlayerButton.classList.add("no-display");
  form.classList.remove("no-display");
}

function submitForm(event) {
  event.preventDefault();
  gameContainer.classList.remove("no-display");
  status.classList.remove("no-display");
  // if playerTwoInput doesn't have no-display that means we have selected the Player vs Player option
  const gamemodeIsPVP = !playerTwoInput.className.includes("no-display");
  heading.classList.add("no-display");
  form.classList.add("no-display");
  playerVsAiButton.classList.add("no-display");
  playerVsPlayerButton.classList.add("no-display");
  const playerOne = new _logic_player__WEBPACK_IMPORTED_MODULE_1__["default"](playerOneInput.value, null, true);
  let playerTwo;
  if (!gamemodeIsPVP) {
    playerTwo = new _logic_ai__WEBPACK_IMPORTED_MODULE_0__["default"]("The AI", playerOne, false);
  } else {
    playerTwo = new _logic_player__WEBPACK_IMPORTED_MODULE_1__["default"](playerTwoInput.value, playerOne, false);
  }
  playerOne.enemy = playerTwo;

  (0,_dom_board_manager__WEBPACK_IMPORTED_MODULE_2__["default"])({
    player: playerOne,
    parent: domBoard,
    playerOne,
    playerTwo,
  });
  (0,_dom_ship_manager__WEBPACK_IMPORTED_MODULE_3__["default"])({
    shipsArray: playerOne.unplacedShips,
    parent: domShips,
    playerOne,
    playerTwo,
  });
}

function setupInputScreenEventListeners() {
  playerVsPlayerButton.addEventListener("click", () => {
    toggleOptionsMenu();
    playerTwoInput.classList.remove("no-display");
  });
  playerVsAiButton.addEventListener("click", () => {
    toggleOptionsMenu();
  });
  form.addEventListener("submit", (event) => {
    submitForm(event);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupInputScreenEventListeners);


/***/ }),

/***/ "./src/scripts/dom/start-game.js":
/*!***************************************!*\
  !*** ./src/scripts/dom/start-game.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   domShipManager2: () => (/* binding */ domShipManager2)
/* harmony export */ });
/* harmony import */ var _dom_board_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-board-manager */ "./src/scripts/dom/dom-board-manager.js");
/* harmony import */ var _dom_ship_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-ship-manager */ "./src/scripts/dom/dom-ship-manager.js");



function cleanUpAfterShipPlacement() {
  const ships = document.getElementById("ships");
  const originalBoard = document.getElementById("board");
  const gameContainer = document.getElementById("game-container");
  gameContainer.removeChild(ships);
  gameContainer.removeChild(originalBoard);
}

function domShipManager2({ player2, playerOne, playerTwo }) {
  const gameContainer = document.getElementById("game-container");
  cleanUpAfterShipPlacement();
  const ships = document.createElement("div");
  const board = document.createElement("div");
  const rotateButton = document.createElement("button");
  rotateButton.id = "rotate";
  rotateButton.textContent = "Rotate Ships";
  ships.id = "ships";
  board.id = "board";
  ships.append(rotateButton);
  gameContainer.append(ships, board);
  (0,_dom_board_manager__WEBPACK_IMPORTED_MODULE_0__["default"])({ player: player2, parent: board, playerOne, playerTwo });
  (0,_dom_ship_manager__WEBPACK_IMPORTED_MODULE_1__["default"])({
    shipsArray: player2.unplacedShips,
    parent: ships,
    playerOne,
    playerTwo,
  });
}

function startGame({ player1, playerOne, playerTwo }) {
  const gameContainer = document.getElementById("game-container");
  cleanUpAfterShipPlacement();
  const playerOneBoard = document.createElement("div");
  const playerTwoBoard = document.createElement("div");
  gameContainer.append(playerOneBoard, playerTwoBoard);
  playerOneBoard.id = `board-${player1.name}`;
  playerTwoBoard.id = `board-${playerTwo.name}`;
  playerOneBoard.classList.add("board");
  playerTwoBoard.classList.add("board");
  (0,_dom_board_manager__WEBPACK_IMPORTED_MODULE_0__["default"])({
    player: playerTwo,
    parent: playerTwoBoard,
    setup: false,
    playerOne,
    playerTwo,
  });
  (0,_dom_board_manager__WEBPACK_IMPORTED_MODULE_0__["default"])({
    player: player1,
    parent: playerOneBoard,
    setup: false,
    playerOne,
    playerTwo,
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startGame);



/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_input_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/input-screen */ "./src/scripts/dom/input-screen.js");


function importAllCSS(require) {
  require.keys().forEach(require);
}
importAllCSS(__webpack_require__("./src/styles sync recursive \\.css$"));

(0,_dom_input_screen__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./src/scripts/logic/ai.js":
/*!*********************************!*\
  !*** ./src/scripts/logic/ai.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/scripts/logic/player.js");


class Bot extends _player__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);
    this.placeRandomShips();
  }

  randomHit() {
    let xCoord = Math.ceil(Math.random() * 10);
    let yCoord = Math.ceil(Math.random() * 10);

    while (!this.enemy.board.coords(xCoord, yCoord).isAlive) {
      xCoord = Math.ceil(Math.random() * 10);
      yCoord = Math.ceil(Math.random() * 10);
    }

    intelligentGuess: for (let x = 1; x <= 10; x++) {
      for (let y = 1; y <= 10; y++) {
        const current = this.enemy.showBoard().coords(x, y);
        const above = this.enemy.showBoard().coords(x, y + 1);
        const left = this.enemy.showBoard().coords(x - 1, y);
        const right = this.enemy.showBoard().coords(x + 1, y);
        const below = this.enemy.showBoard().coords(x, y - 1);
        const possibilities = [above, left, right, below].filter(
          (possibility) => Boolean(possibility)
        );
        if (Object.hasOwn(current, "segment")) {
          for (const possibility of possibilities) {
            if (possibility.isAlive) {
              xCoord = possibility.x;
              yCoord = possibility.y;
              break intelligentGuess;
            }
          }
        }
      }
    }
    this.hitEnemy(xCoord, yCoord);
  }

  placeRandomShips() {
    while (this.unplacedShips.length !== 0) {
      try {
        const randomX = Math.ceil(Math.random() * 10);
        const randomY = Math.ceil(Math.random() * 10);
        const randBool = Math.random() > 0.5;
        const size = this.unplacedShips[0];
        this.placeShip(size, randBool, [randomX, randomY]);
      } catch {
        //
      }
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bot);


/***/ }),

/***/ "./src/scripts/logic/cell.js":
/*!***********************************!*\
  !*** ./src/scripts/logic/cell.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _segment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segment */ "./src/scripts/logic/segment.js");


class Cell {
  constructor(x, y, board) {
    this.x = x;
    this.y = y;
    this.isAlive = true;
    this.board = board;
  }

  attach() {
    if (this.segment) {
      throw new Error("This cell is already occupied");
    }
    this.segment = new _segment__WEBPACK_IMPORTED_MODULE_0__["default"]();
    return this.segment;
  }

  getCoordinates() {
    return [this.x, this.y];
  }

  hit() {
    if (this.isAlive === true) {
      this.isAlive = false;
    } else {
      throw new Error("This cell has already been hit");
    }
    if (this.segment !== undefined) {
      if (this.board) {
        this.board.notifyBoardOfHit(this.x, this.y);
      }
      this.segment.kill();
      return "Hit";
    }
    if (this.board) {
      this.board.notifyBoardOfHit(this.x, this.y);
    }
    return "Miss";
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cell);


/***/ }),

/***/ "./src/scripts/logic/gameboard.js":
/*!****************************************!*\
  !*** ./src/scripts/logic/gameboard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/scripts/logic/cell.js");
/* harmony import */ var _is_within_bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-within-bounds */ "./src/scripts/logic/is-within-bounds.js");



function validatePlaceCoordinates(coords1, coords2) {
  const [cx1, cy1, cx2, cy2] = coords1.concat(coords2);
  const coords = [cx1, cy1, cx2, cy2];
  coords.forEach((coord) => {
    if (coord > 10 || coord < 1 || !Number.isInteger(coord)) {
      throw new Error("Invalid ship placement");
    }
  });

  const [shipWidth, shipHeight] = [
    Math.abs(coords2[0] - coords1[0]) + 1,
    Math.abs(coords2[1] - coords1[1]) + 1,
  ];
  if (shipWidth > 4 || shipHeight > 4 || shipWidth < 1 || shipHeight < 1) {
    throw new Error("Invalid ship size");
  }

  const vectors = [];
  if (coords1[1] === coords2[1]) {
    for (let i = coords1[0]; i <= coords2[0]; i++) {
      vectors.push([i, coords1[1]]);
    }
  } else if (coords1[0] === coords2[0]) {
    for (let i = coords1[1]; i <= coords2[1]; i++) {
      vectors.push([coords1[0], i]);
    }
  } else {
    throw new Error("Invalid ship size");
  }

  return vectors;
}

class GameBoard {
  constructor() {
    this.createBoard();
  }

  getAdjacent(x, y) {
    const vectors = [
      [0, 1],
      [1, 0],
      [1, 1],
      [-1, 0],
      [0, -1],
      [-1, -1],
      [1, -1],
      [-1, 1],
    ];
    const adjacentCells = vectors
      .map((vector) => [vector[0] + x, vector[1] + y])
      .map((vector) => {
        if ((0,_is_within_bounds__WEBPACK_IMPORTED_MODULE_1__["default"])(...vector)) {
          return this.coords(vector[0], vector[1]);
        }
        return null;
      });
    return adjacentCells;
  }

  placeShip(coords1, coords2, mock) {
    // coords2 needs to be 'bigger' than coords1
    const vectors =
      coords2[0] + coords2[1] < coords1[0] + coords1[1]
        ? validatePlaceCoordinates(coords2, coords1)
        : validatePlaceCoordinates(coords1, coords2);

    if (mock) {
      return vectors;
    }
    // Check that the area is empty and we are able to place a ship there
    vectors.forEach((vector) => {
      const target = this.coords(...vector);
      const area = [target, ...this.getAdjacent(target.x, target.y)].filter(
        (cell) => cell !== null
      );
      area.forEach((cell) => {
        if (cell.segment) {
          throw new Error("You cannot place your ship there");
        }
      });
    });
    vectors.forEach((vector) => {
      this.coords(...vector).attach();
    });
  }

  isShipDestroyed(x, y) {
    if (this.constructShip(x, y) === null) {
      return "No ship";
    }
    const ship = this.constructShip(x, y).filter(
      (segment) => segment.isAlive === true
    );
    return ship.length === 0;
  }

  createBoard() {
    this.board = Array(10);
    for (let i = 0; i < 10; i++) {
      this.board[i] = Array(10);
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = new _cell__WEBPACK_IMPORTED_MODULE_0__["default"](j + 1, i + 1, this);
      }
    }
    this.board = this.board.reverse("");
  }

  getCellNeighborsThatAreSegments(cell) {
    return this.getAdjacent(cell.x, cell.y)
      .filter((cellA) => cellA !== null)
      .filter((cellB) => cellB.segment);
  }

  constructShip(x, y) {
    const shipArray = [];
    const focusCell = this.coords(x, y);
    if (!Object.keys(focusCell).includes("segment")) {
      return null;
    }
    shipArray.push(focusCell);
    this.getCellNeighborsThatAreSegments(focusCell).forEach((cell) =>
      shipArray.push(cell)
    );
    shipArray.forEach((cell) => {
      const neighbors = this.getCellNeighborsThatAreSegments(cell);
      neighbors.forEach((neighbor) => {
        if (!shipArray.includes(neighbor)) {
          shipArray.push(neighbor);
        }
      });
    });
    shipArray.forEach((cell) => {
      const neighbors = this.getCellNeighborsThatAreSegments(cell);
      neighbors.forEach((neighbor) => {
        if (!shipArray.includes(neighbor)) {
          shipArray.push(neighbor);
        }
      });
    });
    shipArray.sort((a, b) => a.x - b.x).sort((a, b) => a.y - b.y);

    return shipArray;
  }

  coords(x, y) {
    if (x > 10 || x < 1 || y > 10 || y < 1) {
      return null;
    }
    return this.board[10 - y][x - 1];
  }

  getShipArea(x, y) {
    const ship = this.constructShip(x, y);
    let area = [];
    ship.forEach((segment) => {
      area = area.concat(this.getAdjacent(segment.x, segment.y));
    });
    area = [...new Set(area)];
    area = area.filter((cell) => cell !== null);
    if (ship.length === 1) {
      area.push(...ship);
    }
    return area;
  }

  isSegment(x, y) {
    if (x === null) {
      return false;
    }
    if (this.coords(x, y).segment) {
      return true;
    }
    return false;
  }

  notifyBoardOfHit(x, y) {
    const shipDestroyed = this.isShipDestroyed(x, y);
    if (shipDestroyed && this.constructShip(x, y) !== null) {
      let adjacentArray = [];
      const ship = this.constructShip(x, y);
      ship.forEach((segment) => {
        adjacentArray.push(this.getAdjacent(segment.x, segment.y));
      });
      adjacentArray = [...new Set(adjacentArray.flat())];
      adjacentArray = adjacentArray.filter((cell) => cell !== null);
      adjacentArray = adjacentArray.filter((cell) => !ship.includes(cell));
      adjacentArray = adjacentArray.filter((cell) => cell.isAlive);

      adjacentArray.forEach((cell) => {
        cell.hit();
      });
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);


/***/ }),

/***/ "./src/scripts/logic/is-within-bounds.js":
/*!***********************************************!*\
  !*** ./src/scripts/logic/is-within-bounds.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function isWithinBounds(x, y) {
  if (x <= 10 && x >= 1 && y <= 10 && y >= 1) {
    return true;
  }
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isWithinBounds);


/***/ }),

/***/ "./src/scripts/logic/player.js":
/*!*************************************!*\
  !*** ./src/scripts/logic/player.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/logic/gameboard.js");


class Player {
  constructor(name, enemy, canHit) {
    this.name = name;
    this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.enemy = enemy;
    this.unplacedShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    this.activeShips = [];
    this.canHit = canHit;
    this.winner = false;
  }

  isGameOver() {
    const isItOver =
      this.activeShips.length === 0 || this.enemy.activeShips.length === 0;
    if (isItOver && !this.winner && !this.enemy.winner) {
      this.winner = true;
    }
    return isItOver;
  }

  hitEnemy(x, y) {
    if (this.gameOver) {
      throw new Error("Game is over");
    }
    if (this.canHit) {
      this.enemy.board.coords(x, y).hit();

      if (
        this.enemy.board.constructShip(x, y) !== null &&
        this.enemy.board.isShipDestroyed(x, y) === true
      ) {
        const lengthOfShip = this.enemy.board.constructShip(x, y).length;
        this.placeShipArrayManager(lengthOfShip, false);
      }
      this.canHit = !this.canHit;
      this.enemy.canHit = !this.enemy.canHit;
    } else {
      throw new Error("Please wait for the other player to hit");
    }
    this.isGameOver();
  }

  seeEnemyBoard() {
    return this.enemy.showBoard();
  }

  showBoard() {
    const copiedBoard = this.board.board.map((row) =>
      row.map((cell) =>
        cell.isAlive
          ? Object.keys(cell).reduce((obj, key) => {
              if (key !== "segment") {
                obj[key] = cell[key];
              }
              return obj;
            }, {})
          : cell
      )
    );
    const showGameBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    showGameBoard.board = copiedBoard;
    return showGameBoard;
  }

  placeShip(size, lay, coords, mock = false) {
    // if mock is true it will just return the vectors where the ship would've been placed, wont actually place the ship there
    // its not recursive function, they just have the same name
    let vectors;
    if (lay) {
      vectors = this.board.placeShip(
        [...coords],
        [coords[0] + size - 1, coords[1]],
        mock
      );
    } else {
      vectors = this.board.placeShip(
        [...coords],
        [coords[0], coords[1] + size - 1],
        mock
      );
    }
    if (!mock) {
      this.placeShipArrayManager(size);
    }
    return vectors;
  }

  canGameStart() {
    return this.unplacedShips.length === 0;
  }

  placeShipArrayManager(size, place = true) {
    if (place) {
      const index = this.unplacedShips.indexOf(size);
      this.activeShips.push(...this.unplacedShips.splice(index, 1));
    } else {
      const index = this.activeShips.indexOf(size);
      this.unplacedShips.push(...this.activeShips.splice(index, 1));
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/scripts/logic/segment.js":
/*!**************************************!*\
  !*** ./src/scripts/logic/segment.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Segment {
  #state = true;

  kill() {
    if (this.#state) {
      this.#state = false;
    } else {
      throw new Error("This segment has already been hit");
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Segment);


/***/ }),

/***/ "./src/styles sync recursive \\.css$":
/*!*********************************!*\
  !*** ./src/styles/ sync \.css$ ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./board.css": "./src/styles/board.css",
	"./body.css": "./src/styles/body.css",
	"./reset.css": "./src/styles/reset.css",
	"./scrollbar.css": "./src/styles/scrollbar.css",
	"./style.css": "./src/styles/style.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/styles sync recursive \\.css$";

/***/ }),

/***/ "./src/assets/img/mystery-1599527_1280.jpg":
/*!*************************************************!*\
  !*** ./src/assets/img/mystery-1599527_1280.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bcee60f16ff4164819cb.jpg";

/***/ }),

/***/ "./src/assets/img/ship.jpg":
/*!*********************************!*\
  !*** ./src/assets/img/ship.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4c2f94c1fbded0e0c0db.jpg";

/***/ }),

/***/ "./src/assets/img/water.jpg":
/*!**********************************!*\
  !*** ./src/assets/img/water.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "09fb00c9fe8cc2294fec.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyx3SEFBeUM7QUFDckYsNENBQTRDLDBIQUEwQztBQUN0Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSwwQ0FBMEMsbUJBQW1CLGtCQUFrQixrQkFBa0Isb0JBQW9CLDhCQUE4QixHQUFHLFlBQVksbUJBQW1CLGlCQUFpQix5Q0FBeUMsa0JBQWtCLGNBQWMsa0JBQWtCLG9EQUFvRCwwQkFBMEIsa0NBQWtDLDBCQUEwQixxQkFBcUIsR0FBRyxXQUFXLGtEQUFrRCxvQkFBb0IsR0FBRyxrQkFBa0IsNEJBQTRCLHNCQUFzQixHQUFHLHNCQUFzQixtQkFBbUIsK0JBQStCLHFCQUFxQixHQUFHLGtCQUFrQiw0QkFBNEIsc0JBQXNCLEdBQUcsc0JBQXNCLG1CQUFtQiwrQkFBK0IscUJBQXFCLEdBQUcsa0JBQWtCLDRCQUE0QixzQkFBc0IsR0FBRyxzQkFBc0IsbUJBQW1CLCtCQUErQixxQkFBcUIsR0FBRyxrQkFBa0IsNEJBQTRCLEdBQUcsc0JBQXNCLG1CQUFtQiwrQkFBK0IsR0FBRyxxQkFBcUIsa0JBQWtCLGNBQWMsR0FBRyxXQUFXLGVBQWUsZ0JBQWdCLHVCQUF1QixHQUFHLGlDQUFpQyxtREFBbUQsc0JBQXNCLEdBQUcsK0NBQStDLHdCQUF3Qix3Q0FBd0MsR0FBRyxzQkFBc0IsUUFBUSxrREFBa0QsS0FBSyxTQUFTLDBEQUEwRCxLQUFLLFNBQVMseURBQXlELEtBQUssVUFBVSxrREFBa0QsS0FBSyxHQUFHLG1CQUFtQixJQUFJLDBCQUEwQixrQkFBa0IsbUJBQW1CLHVCQUF1QixXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQix5Q0FBeUMsZUFBZSxxREFBcUQsR0FBRyx3QkFBd0IsdUNBQXVDLEdBQUcsd0JBQXdCLGtEQUFrRCxHQUFHLDBDQUEwQyx5QkFBeUIsbUJBQW1CLGlCQUFpQixnQkFBZ0IsV0FBVyxZQUFZLDhCQUE4QixvQkFBb0IsbUNBQW1DLEdBQUcsNkJBQTZCLHlCQUF5QixtQkFBbUIsaUJBQWlCLGdCQUFnQixXQUFXLFlBQVksMEJBQTBCLG9CQUFvQixtQ0FBbUMsR0FBRyxhQUFhLGlCQUFpQixnQkFBZ0IsR0FBRyxxQkFBcUI7QUFDbDlIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxS3ZDO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHdKQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0ZBQXNGLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksZ0NBQWdDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDJCQUEyQixrQ0FBa0MsY0FBYyxrRUFBa0UsaUNBQWlDLGdDQUFnQywyQkFBMkIsR0FBRyxVQUFVLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLDhDQUE4QyxrQkFBa0IsR0FBRyxRQUFRLGlCQUFpQixvQkFBb0IsaUZBQWlGLEdBQUcsb0JBQW9CLGlCQUFpQixrQkFBa0IscUJBQXFCLEdBQUcscUJBQXFCO0FBQ3JqQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDdkM7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx5RkFBeUYsWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sU0FBUyxVQUFVLFVBQVUsT0FBTyxRQUFRLFVBQVUsTUFBTSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksb0RBQW9ELDJCQUEyQixHQUFHLDBDQUEwQyxvQ0FBb0MsY0FBYyxHQUFHLFVBQVUsZ0NBQWdDLG1DQUFtQywyQkFBMkIsR0FBRyxVQUFVLHdDQUF3QyxzQkFBc0IsR0FBRywwQkFBMEIscUJBQXFCLEdBQUcsYUFBYSw2QkFBNkIsR0FBRywwQ0FBMEMsbUJBQW1CLG9CQUFvQixHQUFHLHdDQUF3QyxrQkFBa0IsR0FBRyxxQ0FBcUMsOEJBQThCLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLHFCQUFxQjtBQUN0b0M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRXZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDJGQUEyRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksNkJBQTZCLDBCQUEwQixxQ0FBcUMsR0FBRywwQkFBMEIsaUJBQWlCLGdCQUFnQixHQUFHLDhCQUE4Qix1QkFBdUIsZ0NBQWdDLEdBQUcsc0NBQXNDLGdDQUFnQyxHQUFHLHVDQUF1QyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsdUJBQXVCLDhCQUE4QixHQUFHLHNDQUFzQyw4QkFBOEIsR0FBRyx1Q0FBdUMsOEJBQThCLEdBQUcsZ0NBQWdDLGlDQUFpQyxHQUFHLHFCQUFxQjtBQUNuaUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q3ZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxPQUFPLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLHdDQUF3QyxpQkFBaUIsR0FBRyxhQUFhLG9CQUFvQixpQkFBaUIsa0JBQWtCLDRCQUE0QixHQUFHLFlBQVksb0JBQW9CLHdJQUF3SSxzQkFBc0IsR0FBRyxXQUFXLG9CQUFvQix3SUFBd0ksR0FBRyxzQkFBc0Isb0JBQW9CLEdBQUcscUJBQXFCO0FBQ2gxQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNsQzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBcUc7QUFDckc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUkrQztBQUN2RSxPQUFPLGlFQUFlLHFGQUFPLElBQUkscUZBQU8sVUFBVSxxRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTBHO0FBQzFHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMEZBQU87Ozs7QUFJb0Q7QUFDNUUsT0FBTyxpRUFBZSwwRkFBTyxJQUFJLDBGQUFPLFVBQVUsMEZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjhCO0FBQ3VCO0FBQ007O0FBRTNELDBCQUEwQiw2Q0FBNkM7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEMsSUFBSTtBQUNKLDRCQUE0QixlQUFlO0FBQzNDO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0Isb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQUc7QUFDL0I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlEQUFHLDRCQUE0QixpREFBRztBQUNyRTtBQUNBLG9DQUFvQyxlQUFlO0FBQ25EO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjLGdFQUFzQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLFlBQVk7QUFDWixvQ0FBb0MsZUFBZTtBQUNuRDtBQUNBO0FBQ0EsY0FBYyxnRUFBc0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQXVCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0QkFBNEIsaURBQUc7QUFDL0IsUUFBUSxnRUFBc0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBa0IsUUFBUTtBQUMxQixtQkFBbUIsNkNBQTZDO0FBQ2hFOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RzBCOztBQUV4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQiwrQ0FBK0M7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsS0FBSztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwREFBVyxHQUFHLDZCQUE2QjtBQUNqRCxLQUFLO0FBQ0w7QUFDQSxNQUFNLHdEQUFTLEdBQUcsNkJBQTZCO0FBQy9DLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsMEJBQTBCLDBDQUEwQztBQUNwRTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQixtQkFBbUIsK0NBQStDO0FBQ2xFOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNtQjtBQUNEO0FBQ1U7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLFFBQVE7QUFDM0Isb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxFQUFFLEdBQUcsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsY0FBYyxHQUFHLGNBQWM7QUFDeEM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSx1QkFBdUIsZUFBZTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHFDQUFxQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQWMsR0FBRyw2Q0FBNkM7QUFDbEUsSUFBSSw2REFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlDQUFpQyxpREFBRztBQUNwQyxRQUFRLDREQUFlLEdBQUcsMENBQTBDO0FBQ3BFO0FBQ0EsVUFBVSx1REFBUyxHQUFHLDBDQUEwQztBQUNoRTtBQUNBLFFBQVE7QUFDUixRQUFRLHVEQUFTLEdBQUcsdUNBQXVDO0FBQzNEO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixPQUFPO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQsR0FBRztBQUNIO0FBQ0EsYUFBYSxxQ0FBcUM7QUFDbEQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw2QkFBNkIsVUFBVSxHQUFHLFVBQVU7QUFDcEQ7O0FBRUEsaUVBQWUsdUJBQXVCLEVBQUM7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUhlO0FBQ25COztBQUU5QixrQ0FBa0MseUNBQXlDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlEQUFHLHlCQUF5QixpREFBRztBQUM5RDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hELFFBQVE7QUFDUixnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsaURBQUcseUJBQXlCLGlEQUFHO0FBQzlELFFBQVEsOERBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRLDhEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUSw4REFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxzQkFBc0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRlI7QUFDTztBQUNZO0FBQ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscURBQU07QUFDOUI7QUFDQTtBQUNBLG9CQUFvQixpREFBRztBQUN2QixJQUFJO0FBQ0osb0JBQW9CLHFEQUFNO0FBQzFCO0FBQ0E7O0FBRUEsRUFBRSw4REFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLDZEQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSw4QkFBOEIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFRztBQUNEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsK0JBQStCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDhEQUFjLEdBQUcsc0RBQXNEO0FBQ3pFLEVBQUUsNkRBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGFBQWE7QUFDNUMsK0JBQStCLGVBQWU7QUFDOUM7QUFDQTtBQUNBLEVBQUUsOERBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLDhEQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsU0FBUyxFQUFDO0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0FDM0RxQzs7QUFFaEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwREFBNkM7O0FBRTFELDZEQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTs7QUFFOUIsa0JBQWtCLCtDQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsU0FBUztBQUMvQyxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RGE7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFPO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ007QUFDc0I7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLGlCQUFpQjtBQUM5QztBQUNBO0FBQ0EsSUFBSTtBQUNKLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QiwrQkFBK0IsNkNBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUE07O0FBRXBDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtEQUFTO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7OztBQ1p2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvYm9hcmQuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzL2JvZHkuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy9zY3JvbGxiYXIuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvYm9hcmQuY3NzP2E2MWUiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvYm9keS5jc3M/NTk5NCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy9zY3JvbGxiYXIuY3NzPzlkM2IiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZG9tL2RvbS1ib2FyZC1tYW5hZ2VyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9kb20vZG9tLXNoaXAtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZG9tL2RyYWctbWFuYWdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZG9tL2hpdC1ldmVudC1saXN0ZW5lcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2RvbS9pbnB1dC1zY3JlZW4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2RvbS9zdGFydC1nYW1lLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvbG9naWMvYWkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2xvZ2ljL2NlbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2xvZ2ljL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvbG9naWMvaXMtd2l0aGluLWJvdW5kcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvbG9naWMvcGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9sb2dpYy9zZWdtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzLyBzeW5jIFxcLmNzcyQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWcvc2hpcC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1nL3dhdGVyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNib2FyZCxcbi5ib2FyZCB7XG4gIGhlaWdodDogMTAwMHB4O1xuICB3aWR0aDogMTAwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODVjYTc7XG59XG5cbiNzaGlwcyB7XG4gIGhlaWdodDogMTAwMHB4O1xuICB3aWR0aDogNzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODQsIDIyMywgMjMwKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA0MHB4O1xuICBwYWRkaW5nOiA0MHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDEwMHB4KTtcbiAgZ3JpZC1hdXRvLXJvd3M6IDEwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uc2hpcCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2hpcC5zaGlwLTQge1xuICBncmlkLXJvdzogc3BhbiA0IC8gYXV0bztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG59XG5cbi5zaGlwLnNoaXAtNC5sYXkge1xuICBncmlkLXJvdzogYXV0bztcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNCAvIGF1dG87XG4gIG1heC13aWR0aDogNDAwcHg7XG59XG5cbi5zaGlwLnNoaXAtMyB7XG4gIGdyaWQtcm93OiBzcGFuIDMgLyBhdXRvO1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbn1cblxuLnNoaXAuc2hpcC0zLmxheSB7XG4gIGdyaWQtcm93OiBhdXRvO1xuICBncmlkLWNvbHVtbjogc3BhbiAzIC8gYXV0bztcbiAgbWF4LXdpZHRoOiAzMDBweDtcbn1cblxuLnNoaXAuc2hpcC0yIHtcbiAgZ3JpZC1yb3c6IHNwYW4gMiAvIGF1dG87XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uc2hpcC5zaGlwLTIubGF5IHtcbiAgZ3JpZC1yb3c6IGF1dG87XG4gIGdyaWQtY29sdW1uOiBzcGFuIDIgLyBhdXRvO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG4uc2hpcC5zaGlwLTEge1xuICBncmlkLXJvdzogc3BhbiAxIC8gYXV0bztcbn1cblxuLnNoaXAuc2hpcC0xLmxheSB7XG4gIGdyaWQtcm93OiBhdXRvO1xuICBncmlkLWNvbHVtbjogc3BhbiAxIC8gYXV0bztcbn1cblxuI2dhbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1MHB4O1xufVxuXG4uY2VsbCB7XG4gIHdpZHRoOiAxMCU7XG4gIGhlaWdodDogMTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbltjbGFzcz1cImNlbGwtYWxpdmUgY2VsbFwiXSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgZmlsdGVyOiBibHVyKDJweCk7XG59XG5cbltjbGFzcz1cImNlbGwtYWxpdmUgY2VsbFwiXTpudGgtY2hpbGQoM24pIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjJweCwgMC4ycHgpIHJvdGF0ZSgtMC4yZGVnKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMnB4LCAtMC4ycHgpIHJvdGF0ZSgwLjJkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoMGRlZyk7XG4gIH1cbn1cblxuLyogLmhpZ2hsaWdodCB7XG59ICovXG5cbi5oaWdobGlnaHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiAxO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5pbnZhbGlkLXBsYWNlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDUzLCA1Myk7XG59XG5cbi5jZWxsLmNlbGwtc2VnbWVudCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuLmNlbGwuY2VsbC1zZWdtZW50LmNlbGwtZGVhZDo6YmVmb3JlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbnRlbnQ6IFwieFwiO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiByZ2IoMjU1LCAxMTAsIDExMCk7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xufVxuXG4uY2VsbC5jZWxsLWRlYWQ6OmJlZm9yZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb250ZW50OiBcInhcIjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBjb2xvcjogcmdiKDAsIDQsIDI1NSk7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xufVxuXG4jcm90YXRlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9ib2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixTQUFTO0VBQ1QsYUFBYTtFQUNiLCtDQUErQztFQUMvQyxxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5REFBNkM7RUFDN0MsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5REFBOEM7RUFDOUMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFO0lBQ0UsMkNBQTJDO0VBQzdDO0VBQ0E7SUFDRSxtREFBbUQ7RUFDckQ7RUFDQTtJQUNFLGtEQUFrRDtFQUNwRDtFQUNBO0lBQ0UsMkNBQTJDO0VBQzdDO0FBQ0Y7O0FBRUE7R0FDRzs7QUFFSDtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsVUFBVTtFQUNWLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlEQUE2QztBQUMvQzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxNQUFNO0VBQ04sT0FBTztFQUNQLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0VBQ1AscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNib2FyZCxcXG4uYm9hcmQge1xcbiAgaGVpZ2h0OiAxMDAwcHg7XFxuICB3aWR0aDogMTAwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODVjYTc7XFxufVxcblxcbiNzaGlwcyB7XFxuICBoZWlnaHQ6IDEwMDBweDtcXG4gIHdpZHRoOiA3MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODQsIDIyMywgMjMwKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDQwcHg7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAxMDBweCk7XFxuICBncmlkLWF1dG8tcm93czogMTAwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1nL3NoaXAuanBnKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAuc2hpcC00IHtcXG4gIGdyaWQtcm93OiBzcGFuIDQgLyBhdXRvO1xcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxufVxcblxcbi5zaGlwLnNoaXAtNC5sYXkge1xcbiAgZ3JpZC1yb3c6IGF1dG87XFxuICBncmlkLWNvbHVtbjogc3BhbiA0IC8gYXV0bztcXG4gIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbi5zaGlwLnNoaXAtMyB7XFxuICBncmlkLXJvdzogc3BhbiAzIC8gYXV0bztcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4uc2hpcC5zaGlwLTMubGF5IHtcXG4gIGdyaWQtcm93OiBhdXRvO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMyAvIGF1dG87XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uc2hpcC5zaGlwLTIge1xcbiAgZ3JpZC1yb3c6IHNwYW4gMiAvIGF1dG87XFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuLnNoaXAuc2hpcC0yLmxheSB7XFxuICBncmlkLXJvdzogYXV0bztcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDIgLyBhdXRvO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnNoaXAuc2hpcC0xIHtcXG4gIGdyaWQtcm93OiBzcGFuIDEgLyBhdXRvO1xcbn1cXG5cXG4uc2hpcC5zaGlwLTEubGF5IHtcXG4gIGdyaWQtcm93OiBhdXRvO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMSAvIGF1dG87XFxufVxcblxcbiNnYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICB3aWR0aDogMTAlO1xcbiAgaGVpZ2h0OiAxMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbltjbGFzcz1cXFwiY2VsbC1hbGl2ZSBjZWxsXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWcvd2F0ZXIuanBnKTtcXG4gIGZpbHRlcjogYmx1cigycHgpO1xcbn1cXG5cXG5bY2xhc3M9XFxcImNlbGwtYWxpdmUgY2VsbFxcXCJdOm50aC1jaGlsZCgzbikge1xcbiAgYW5pbWF0aW9uOiBzaGFrZSAxcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpIHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0wLjJweCwgMC4ycHgpIHJvdGF0ZSgtMC4yZGVnKTtcXG4gIH1cXG4gIDc1JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMnB4LCAtMC4ycHgpIHJvdGF0ZSgwLjJkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoMGRlZyk7XFxuICB9XFxufVxcblxcbi8qIC5oaWdobGlnaHQge1xcbn0gKi9cXG5cXG4uaGlnaGxpZ2h0OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5pbnZhbGlkLXBsYWNlbWVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ2LCA1MywgNTMpO1xcbn1cXG5cXG4uY2VsbC5jZWxsLXNlZ21lbnQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWcvc2hpcC5qcGcpO1xcbn1cXG5cXG4uY2VsbC5jZWxsLXNlZ21lbnQuY2VsbC1kZWFkOjpiZWZvcmUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBjb250ZW50OiBcXFwieFxcXCI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBjb2xvcjogcmdiKDI1NSwgMTEwLCAxMTApO1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xcbn1cXG5cXG4uY2VsbC5jZWxsLWRlYWQ6OmJlZm9yZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGNvbnRlbnQ6IFxcXCJ4XFxcIjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGNvbG9yOiByZ2IoMCwgNCwgMjU1KTtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDVweCBibGFjaztcXG59XFxuXFxuI3JvdGF0ZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1nL215c3RlcnktMTU5OTUyN18xMjgwLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgZ2FwOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzBweDtcbn1cblxuLm5vLWRpc3BsYXksXG4jZ2FtZS1jb250YWluZXIubm8tZGlzcGxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmgxIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDRyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cIiwgXCJBcmlhbCBOYXJyb3dcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbixcbmlucHV0IHtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBmb250LXNpemU6IDUwMHB4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JvZHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1QseURBQTZEO0VBQzdELDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix3RUFBd0U7QUFDMUU7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgZ2FwOiA1MHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWcvbXlzdGVyeS0xNTk5NTI3XzEyODAuanBnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4ubm8tZGlzcGxheSxcXG4jZ2FtZS1jb250YWluZXIubm8tZGlzcGxheSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LWZhbWlseTogXFxcIkZyYW5rbGluIEdvdGhpYyBNZWRpdW1cXFwiLCBcXFwiQXJpYWwgTmFycm93XFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICB3aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgZm9udC1zaXplOiA1MDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLyogaGVsbG8gKi9cbi8qIHRlc3QgKi9cbi8qIHRlc3QgKi9cbioge1xuICBsaW5lLWhlaWdodDogY2FsYygxZW0gKyAwLjVyZW0pO1xuICBtYXJnaW46IDA7XG59XG5cbmh0bWwge1xuICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbn1cblxuYm9keSB7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxudGV4dGFyZWE6bm90KFtyb3dzXSkge1xuICBtaW4taGVpZ2h0OiAxMGVtO1xufVxuXG46dGFyZ2V0IHtcbiAgc2Nyb2xsLW1hcmdpbi1ibG9jazogNWV4O1xufVxuXG5pbWcsXG5waWN0dXJlLFxudmlkZW8sXG5jYW52YXMsXG5zdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxucCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbiNyb290LFxuI19fbmV4dCB7XG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFzQjtBQUN4QjtBQUNBLFVBQVU7QUFDVixTQUFTO0FBQ1QsU0FBUztBQUNUO0VBQ0UsK0JBQStCO0VBQy9CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQTs7Ozs7OztFQU9FLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLyogaGVsbG8gKi9cXG4vKiB0ZXN0ICovXFxuLyogdGVzdCAqL1xcbioge1xcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMWVtICsgMC41cmVtKTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbnRleHRhcmVhOm5vdChbcm93c10pIHtcXG4gIG1pbi1oZWlnaHQ6IDEwZW07XFxufVxcblxcbjp0YXJnZXQge1xcbiAgc2Nyb2xsLW1hcmdpbi1ibG9jazogNWV4O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjYWFhYWFhICNmZmZmZmY7XG59XG5cbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbn1cbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XG59XG5cbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhci10cmFjazphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XG59XG5cbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhO1xufVxuXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTcxNzE7XG59XG5cbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTcxNzE7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zY3JvbGxiYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjYWFhYWFhICNmZmZmZmY7XFxufVxcblxcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGhlaWdodDogMTBweDtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG4qOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XFxufVxcblxcbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcXG59XFxuXFxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcXG59XFxuXFxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcXG59XFxuXFxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNzE3MTtcXG59XFxuXFxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MTcxNzE7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmxvdy1vcGFjaXR5IHtcbiAgb3BhY2l0eTogNTAlO1xufVxuXG4jc3RhdHVzIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5idXR0b24ge1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcbiAgICBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW5wdXQge1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zXCIsIFwiTHVjaWRhIFNhbnMgUmVndWxhclwiLCBcIkx1Y2lkYSBHcmFuZGVcIixcbiAgICBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG4jc2hpcHMgPiAjcm90YXRlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZjtzREFDb0Q7RUFDcEQsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmO3NEQUNvRDtBQUN0RDs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvdy1vcGFjaXR5IHtcXG4gIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuI3N0YXR1cyB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFJlZ3VsYXJcXFwiLCBcXFwiTHVjaWRhIEdyYW5kZVxcXCIsXFxuICAgIFxcXCJMdWNpZGEgU2FucyBVbmljb2RlXFxcIiwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmlucHV0IHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgUmVndWxhclxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG4gICAgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNzaGlwcyA+ICNyb3RhdGUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ib2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYm9keS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvZHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njcm9sbGJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Njcm9sbGJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBCb3QgZnJvbSBcIi4uL2xvZ2ljL2FpXCI7XG5pbXBvcnQgc2V0dXBEcmFnRXZlbnRMaXN0ZW5lcnMgZnJvbSBcIi4vZHJhZy1tYW5hZ2VyXCI7XG5pbXBvcnQgc2V0dXBIaXRFdmVudExpc3RlbmVycyBmcm9tIFwiLi9oaXQtZXZlbnQtbGlzdGVuZXJzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZURvbUJvYXJkKHsgcGxheWVyLCBwYXJlbnQsIHNldHVwLCBwbGF5ZXJPbmUsIHBsYXllclR3byB9KSB7XG4gIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhdHVzXCIpO1xuICBzdGF0dXMuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gIGlmIChzZXR1cCkge1xuICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IGAke3BsYXllci5uYW1lfSdzIHR1cm4gdG8gcGxhY2Ugc2hpcHMhYDtcbiAgfSBlbHNlIHtcbiAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJPbmUubmFtZX0ncyB0dXJuIHRvIHN0cmlrZSFgO1xuICB9XG4gIGZvciAobGV0IHkgPSAxMDsgeSA+PSAxOyB5LS0pIHtcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSAxMDsgeCsrKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwtYWxpdmVcIik7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgbGV0IGZvY3VzO1xuICAgICAgaWYgKHBsYXllciBpbnN0YW5jZW9mIEJvdCkge1xuICAgICAgICBmb2N1cyA9IHBsYXllci5zaG93Qm9hcmQoKS5jb29yZHMoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb2N1cyA9IHBsYXllci5ib2FyZC5jb29yZHMoeCwgeSk7XG4gICAgICB9XG4gICAgICBpZiAoIXNldHVwKSB7XG4gICAgICAgIGlmICghKHBsYXllck9uZSBpbnN0YW5jZW9mIEJvdCkgJiYgIShwbGF5ZXJUd28gaW5zdGFuY2VvZiBCb3QpKSB7XG4gICAgICAgICAgaWYgKHBsYXllck9uZS5jYW5IaXQpIHtcbiAgICAgICAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IGAke3BsYXllck9uZS5uYW1lfSdzIHR1cm4gdG8gc3RyaWtlIWA7XG4gICAgICAgICAgICBpZiAocGxheWVyID09PSBwbGF5ZXJPbmUpIHtcbiAgICAgICAgICAgICAgZm9jdXMgPSBwbGF5ZXIuYm9hcmQuY29vcmRzKHgsIHkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZm9jdXMgPSBwbGF5ZXIuc2hvd0JvYXJkKCkuY29vcmRzKHgsIHkpO1xuICAgICAgICAgICAgICBzZXR1cEhpdEV2ZW50TGlzdGVuZXJzKHtcbiAgICAgICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbeCwgeV0sXG4gICAgICAgICAgICAgICAgcGxheWVyT25lLFxuICAgICAgICAgICAgICAgIHBsYXllclR3byxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXJUd28uY2FuSGl0KSB7XG4gICAgICAgICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJUd28ubmFtZX0ncyB0dXJuIHRvIHN0cmlrZSFgO1xuICAgICAgICAgICAgaWYgKHBsYXllciA9PT0gcGxheWVyT25lKSB7XG4gICAgICAgICAgICAgIGZvY3VzID0gcGxheWVyLnNob3dCb2FyZCgpLmNvb3Jkcyh4LCB5KTtcbiAgICAgICAgICAgICAgc2V0dXBIaXRFdmVudExpc3RlbmVycyh7XG4gICAgICAgICAgICAgICAgY2VsbCxcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogW3gsIHldLFxuICAgICAgICAgICAgICAgIHBsYXllck9uZSxcbiAgICAgICAgICAgICAgICBwbGF5ZXJUd28sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZm9jdXMgPSBwbGF5ZXIuYm9hcmQuY29vcmRzKHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoT2JqZWN0Lmhhc093bihmb2N1cywgXCJzZWdtZW50XCIpKSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwtc2VnbWVudFwiKTtcbiAgICAgIH1cbiAgICAgIGlmICghZm9jdXMuaXNBbGl2ZSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJjZWxsLWFsaXZlXCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLWRlYWRcIik7XG4gICAgICB9XG4gICAgICBpZiAoc2V0dXApIHtcbiAgICAgICAgc2V0dXBEcmFnRXZlbnRMaXN0ZW5lcnMoe1xuICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgcGxheWVyLFxuICAgICAgICAgIGNvb3JkczogW3gsIHldLFxuICAgICAgICAgIHBsYXllck9uZSxcbiAgICAgICAgICBwbGF5ZXJUd28sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllciBpbnN0YW5jZW9mIEJvdCkge1xuICAgICAgICBzZXR1cEhpdEV2ZW50TGlzdGVuZXJzKHtcbiAgICAgICAgICBjZWxsLFxuICAgICAgICAgIGNvb3JkaW5hdGVzOiBbeCwgeV0sXG4gICAgICAgICAgcGxheWVyT25lLFxuICAgICAgICAgIHBsYXllclR3byxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudC5hcHBlbmQoY2VsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyRG9tQm9hcmQoeyBwYXJlbnQgfSkge1xuICBjb25zdCBkb21DZWxscyA9IFsuLi5wYXJlbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpXTtcbiAgZG9tQ2VsbHMuZm9yRWFjaCgoZG9tQ2VsbCkgPT4ge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChkb21DZWxsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURvbUJvYXJkKHtcbiAgcGxheWVyLFxuICBwYXJlbnQsXG4gIHNldHVwID0gdHJ1ZSxcbiAgcGxheWVyT25lLFxuICBwbGF5ZXJUd28sXG59KSB7XG4gIGNsZWFyRG9tQm9hcmQoeyBwYXJlbnQgfSk7XG4gIGNyZWF0ZURvbUJvYXJkKHsgcGxheWVyLCBwYXJlbnQsIHNldHVwLCBwbGF5ZXJPbmUsIHBsYXllclR3byB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlRG9tQm9hcmQ7XG4iLCJpbXBvcnQgeyBvbkRyYWdTdGFydCwgb25EcmFnRW5kIH0gZnJvbSBcIi4vZHJhZy1tYW5hZ2VyXCI7XG5cbmZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcbiAgbGV0IGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aDtcbiAgbGV0IHJhbmRvbUluZGV4O1xuXG4gIHdoaWxlIChjdXJyZW50SW5kZXggPiAwKSB7XG4gICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgIGN1cnJlbnRJbmRleC0tO1xuXG4gICAgW2FycmF5W2N1cnJlbnRJbmRleF0sIGFycmF5W3JhbmRvbUluZGV4XV0gPSBbXG4gICAgICBhcnJheVtyYW5kb21JbmRleF0sXG4gICAgICBhcnJheVtjdXJyZW50SW5kZXhdLFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gYXJyYXk7XG59XG5mdW5jdGlvbiBjcmVhdGVEb21TaGlwcyh7IHNoaXBzQXJyYXksIHBhcmVudCwgbGF5LCBwbGF5ZXJPbmUsIHBsYXllclR3byB9KSB7XG4gIGNvbnN0IHNodWZmbGVkU2hpcHNBcnJheSA9IHNodWZmbGUoc2hpcHNBcnJheSk7XG4gIHNodWZmbGVkU2hpcHNBcnJheS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3QgZG9tU2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG9tU2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICBkb21TaGlwLmNsYXNzTGlzdC5hZGQoYHNoaXAtJHtzaGlwfWApO1xuICAgIGlmIChsYXkpIHtcbiAgICAgIGRvbVNoaXAuY2xhc3NMaXN0LmFkZChcImxheVwiKTtcbiAgICB9XG4gICAgZG9tU2hpcC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCIpO1xuICAgIGRvbVNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIG9uRHJhZ1N0YXJ0KHsgZXZlbnQsIHBsYXllck9uZSwgcGxheWVyVHdvIH0pO1xuICAgIH0pO1xuICAgIGRvbVNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdlbmRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBvbkRyYWdFbmQoeyBldmVudCwgcGxheWVyT25lLCBwbGF5ZXJUd28gfSk7XG4gICAgfSk7XG4gICAgcGFyZW50LmFwcGVuZChkb21TaGlwKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZUFsbFNoaXBzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIikuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcImxheVwiKTtcbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHNcIikuY2xhc3NMaXN0LnRvZ2dsZShcImxheVwiKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJEb21TaGlwcyh7IHBhcmVudCB9KSB7XG4gIGNvbnN0IGRvbVNoaXBzID0gWy4uLnBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIildO1xuICBkb21TaGlwcy5mb3JFYWNoKChkb21TaGlwKSA9PiB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGRvbVNoaXApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRG9tU2hpcHMoeyBzaGlwc0FycmF5LCBwYXJlbnQsIHBsYXllck9uZSwgcGxheWVyVHdvIH0pIHtcbiAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3RhdGVcIik7XG4gIHJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm90YXRlQWxsU2hpcHMpO1xuICBjb25zdCBsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NoaXBzXCIpLmNsYXNzTmFtZS5pbmNsdWRlcyhcImxheVwiKTtcbiAgY2xlYXJEb21TaGlwcyh7IHBhcmVudCB9KTtcbiAgY3JlYXRlRG9tU2hpcHMoeyBzaGlwc0FycmF5LCBwYXJlbnQsIGxheSwgcGxheWVyT25lLCBwbGF5ZXJUd28gfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZURvbVNoaXBzO1xuIiwiaW1wb3J0IEJvdCBmcm9tIFwiLi4vbG9naWMvYWlcIjtcbmltcG9ydCB1cGRhdGVEb21Cb2FyZCBmcm9tIFwiLi9kb20tYm9hcmQtbWFuYWdlclwiO1xuaW1wb3J0IHVwZGF0ZURvbVNoaXBzIGZyb20gXCIuL2RvbS1zaGlwLW1hbmFnZXJcIjtcbmltcG9ydCBzdGFydEdhbWUsIHsgZG9tU2hpcE1hbmFnZXIyIH0gZnJvbSBcIi4vc3RhcnQtZ2FtZVwiO1xuXG5mdW5jdGlvbiBBcnJheUluY2x1ZGVzQXJyYXkocGFyZW50QXJyYXksIHN1YnNldEFycmF5KSB7XG4gIGxldCBjb3VudGVyID0gMDtcbiAgcGFyZW50QXJyYXkuZm9yRWFjaCgoc3ViYXJyYXkpID0+IHtcbiAgICBpZiAoSlNPTi5zdHJpbmdpZnkoc3ViYXJyYXkpID09PSBKU09OLnN0cmluZ2lmeShzdWJzZXRBcnJheSkpIHtcbiAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY291bnRlciAhPT0gMDtcbn1cblxuZnVuY3Rpb24gY2xlYXJIaWdobGlnaHRGcm9tQWxsQ2VsbHNFeGNlcHRJbnB1dENlbGxzKGNlbGxzID0gW10pIHtcbiAgZm9yIChsZXQgeSA9IDEwOyB5ID49IDE7IHktLSkge1xuICAgIGZvciAobGV0IHggPSAxOyB4IDw9IDEwOyB4KyspIHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW3gsIHldO1xuICAgICAgaWYgKFxuICAgICAgICAhQXJyYXlJbmNsdWRlc0FycmF5KGNlbGxzLCBjb29yZGluYXRlcykgJiZcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaGlwc1wiKSAhPT0gbnVsbFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt4fS0ke3l9YCk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImhpZ2hsaWdodFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gb25EcmFnU3RhcnQoeyBldmVudCB9KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gIHNldFRpbWVvdXQoKCkgPT4gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJsb3ctb3BhY2l0eVwiKSk7XG4gIHNldFRpbWVvdXQoKCkgPT4gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJkcmFnZ2FibGVcIikpO1xufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRDZWxscyhjb29yZGluYXRlcykge1xuICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgY29uc3QgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBgJHtjb29yZGluYXRlWzBdfS0ke2Nvb3JkaW5hdGVbMV19YFxuICAgICk7XG4gICAgaGlnaGxpZ2h0LmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvbkRyYWdFbnRlcih7IGV2ZW50LCBwbGF5ZXIgfSkge1xuICBjb25zdCBbeCwgeV0gPSBldmVudC50YXJnZXQuaWQuc3BsaXQoXCItXCIpLm1hcCgoc3RyKSA9PiBOdW1iZXIoc3RyKSk7XG4gIGNvbnN0IHNpemVPZlNoaXAgPSBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmRyYWdnYWJsZVwiKVxuICAgIC5jbGFzc05hbWUubWF0Y2goL1xcZCsvKVxuICAgIC5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKVswXTtcbiAgY29uc3QgbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcmFnZ2FibGVcIikuY2xhc3NOYW1lLmluY2x1ZGVzKFwibGF5XCIpO1xuICB0cnkge1xuICAgIGNvbnN0IGNvb3JkcyA9IHBsYXllci5wbGFjZVNoaXAoc2l6ZU9mU2hpcCwgbGF5LCBbeCwgeV0sIHRydWUpO1xuICAgIGhpZ2hsaWdodENlbGxzKGNvb3Jkcyk7XG4gICAgY2xlYXJIaWdobGlnaHRGcm9tQWxsQ2VsbHNFeGNlcHRJbnB1dENlbGxzKGNvb3Jkcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY2xlYXJIaWdobGlnaHRGcm9tQWxsQ2VsbHNFeGNlcHRJbnB1dENlbGxzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25Ecm9wKHsgZXZlbnQsIHBsYXllciwgcGxheWVyT25lLCBwbGF5ZXJUd28gfSkge1xuICBjb25zdCBbeCwgeV0gPSBldmVudC50YXJnZXQuaWQuc3BsaXQoXCItXCIpLm1hcCgoc3RyKSA9PiBOdW1iZXIoc3RyKSk7XG4gIGNvbnN0IHNpemVPZlNoaXAgPSBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmRyYWdnYWJsZVwiKVxuICAgIC5jbGFzc05hbWUubWF0Y2goL1xcZCsvKVxuICAgIC5tYXAoKGVsKSA9PiBOdW1iZXIoZWwpKVswXTtcbiAgY29uc3QgbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcmFnZ2FibGVcIikuY2xhc3NOYW1lLmluY2x1ZGVzKFwibGF5XCIpO1xuICB0cnkge1xuICAgIHBsYXllci5wbGFjZVNoaXAoc2l6ZU9mU2hpcCwgbGF5LCBbeCwgeV0pO1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKTtcbiAgICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHNcIik7XG4gICAgdXBkYXRlRG9tQm9hcmQoeyBwbGF5ZXIsIHBhcmVudDogYm9hcmQsIHBsYXllck9uZSwgcGxheWVyVHdvIH0pO1xuICAgIHVwZGF0ZURvbVNoaXBzKHtcbiAgICAgIHNoaXBzQXJyYXk6IHBsYXllci51bnBsYWNlZFNoaXBzLFxuICAgICAgcGFyZW50OiBzaGlwcyxcbiAgICAgIHBsYXllck9uZSxcbiAgICAgIHBsYXllclR3byxcbiAgICB9KTtcbiAgICBpZiAocGxheWVyLmNhbkdhbWVTdGFydCgpKSB7XG4gICAgICBpZiAoIShwbGF5ZXJUd28gaW5zdGFuY2VvZiBCb3QpKSB7XG4gICAgICAgIGRvbVNoaXBNYW5hZ2VyMih7IHBsYXllcjI6IHBsYXllclR3bywgcGxheWVyT25lLCBwbGF5ZXJUd28gfSk7XG4gICAgICAgIGlmIChwbGF5ZXJUd28uY2FuR2FtZVN0YXJ0KCkpIHtcbiAgICAgICAgICBzdGFydEdhbWUoeyBwbGF5ZXIxOiBwbGF5ZXJPbmUsIHBsYXllck9uZSwgcGxheWVyVHdvIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFydEdhbWUoeyBwbGF5ZXIxOiBwbGF5ZXIsIHBsYXllck9uZSwgcGxheWVyVHdvIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjbGVhckhpZ2hsaWdodEZyb21BbGxDZWxsc0V4Y2VwdElucHV0Q2VsbHMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkRyYWdFbmQoeyBldmVudCB9KSB7XG4gIGNvbnN0IHN1Y2Nlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoaXBzXCIpO1xuXG4gIGlmIChzdWNjZXNzICE9PSBudWxsKSB7XG4gICAgY2xlYXJIaWdobGlnaHRGcm9tQWxsQ2VsbHNFeGNlcHRJbnB1dENlbGxzKCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImxvdy1vcGFjaXR5XCIpO1xuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ2dhYmxlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldHVwRHJhZ0V2ZW50TGlzdGVuZXJzKHtcbiAgY2VsbCxcbiAgcGxheWVyLFxuICBjb29yZHMsXG4gIHBsYXllck9uZSxcbiAgcGxheWVyVHdvLFxufSkge1xuICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgb25EcmFnRW50ZXIoeyBldmVudCwgcGxheWVyLCBwbGF5ZXJPbmUsIHBsYXllclR3byB9KTtcbiAgfSk7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGV2ZW50KSA9PiB7XG4gICAgb25Ecm9wKHsgZXZlbnQsIHBsYXllciwgcGxheWVyT25lLCBwbGF5ZXJUd28gfSk7XG4gIH0pO1xuICAvLyBOZWNlc3NhcnkgdG8gYWxsb3cgZHJvcHBpbmdcbiAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG4gIGNlbGwuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7Y29vcmRzWzBdfS0ke2Nvb3Jkc1sxXX1gKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0dXBEcmFnRXZlbnRMaXN0ZW5lcnM7XG5leHBvcnQgeyBvbkRyYWdTdGFydCwgb25EcmFnRW5kIH07XG4iLCJpbXBvcnQgdXBkYXRlRG9tQm9hcmQgZnJvbSBcIi4vZG9tLWJvYXJkLW1hbmFnZXJcIjtcbmltcG9ydCBCb3QgZnJvbSBcIi4uL2xvZ2ljL2FpXCI7XG5cbmZ1bmN0aW9uIHNldHVwSGl0RXZlbnRMaXN0ZW5lcnMoeyBjZWxsLCBjb29yZGluYXRlcywgcGxheWVyT25lLCBwbGF5ZXJUd28gfSkge1xuICBjb25zdCBib2FyZHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZFwiKV07XG4gIGNvbnN0IHBsYXllck9uZUJvYXJkID0gYm9hcmRzWzBdO1xuICBjb25zdCBwbGF5ZXJUd29Cb2FyZCA9IGJvYXJkc1sxXTtcbiAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGF0dXNcIik7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgbWlzdGFrZSA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBpZiAocGxheWVyT25lIGluc3RhbmNlb2YgQm90IHx8IHBsYXllclR3byBpbnN0YW5jZW9mIEJvdCkge1xuICAgICAgICBwbGF5ZXJPbmUuaGl0RW5lbXkoLi4uY29vcmRpbmF0ZXMpO1xuICAgICAgICBwbGF5ZXJUd28ucmFuZG9tSGl0KCk7XG4gICAgICB9IGVsc2UgaWYgKHBsYXllclR3by5jYW5IaXQpIHtcbiAgICAgICAgcGxheWVyVHdvLmhpdEVuZW15KC4uLmNvb3JkaW5hdGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllck9uZS5oaXRFbmVteSguLi5jb29yZGluYXRlcyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBcIllvdSBjYW5ub3QgaGl0IHRoZXJlIVwiO1xuICAgICAgc3RhdHVzLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgIG1pc3Rha2UgPSB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IHdpbm5lciA9IHBsYXllck9uZS53aW5uZXIgfHwgcGxheWVyVHdvLndpbm5lcjtcblxuICAgIGlmICh3aW5uZXIpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lLWNvbnRhaW5lclwiKSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWUtb3ZlclwiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcbiAgICAgIGlmIChwbGF5ZXJPbmUud2lubmVyKSB7XG4gICAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IGAke3BsYXllck9uZS5uYW1lfSBoYXMgd29uIWA7XG4gICAgICB9IGVsc2UgaWYgKHBsYXllclR3by53aW5uZXIpIHtcbiAgICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gYCR7cGxheWVyVHdvLm5hbWV9IGhhcyB3b24hYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW1pc3Rha2UgJiYgIXdpbm5lcikge1xuICAgICAgaWYgKHBsYXllck9uZSBpbnN0YW5jZW9mIEJvdCB8fCBwbGF5ZXJUd28gaW5zdGFuY2VvZiBCb3QpIHtcbiAgICAgICAgdXBkYXRlRG9tQm9hcmQoe1xuICAgICAgICAgIHBsYXllcjogcGxheWVyT25lLFxuICAgICAgICAgIHBhcmVudDogcGxheWVyT25lQm9hcmQsXG4gICAgICAgICAgc2V0dXA6IGZhbHNlLFxuICAgICAgICAgIHBsYXllck9uZSxcbiAgICAgICAgICBwbGF5ZXJUd28sXG4gICAgICAgIH0pO1xuICAgICAgICB1cGRhdGVEb21Cb2FyZCh7XG4gICAgICAgICAgcGxheWVyOiBwbGF5ZXJUd28sXG4gICAgICAgICAgcGFyZW50OiBwbGF5ZXJUd29Cb2FyZCxcbiAgICAgICAgICBzZXR1cDogZmFsc2UsXG4gICAgICAgICAgcGxheWVyT25lLFxuICAgICAgICAgIHBsYXllclR3byxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaGl0dGluZ1BsYXllcjtcbiAgICAgICAgaWYgKHBsYXllck9uZS5jYW5IaXQpIHtcbiAgICAgICAgICBoaXR0aW5nUGxheWVyID0gcGxheWVyT25lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhpdHRpbmdQbGF5ZXIgPSBwbGF5ZXJUd287XG4gICAgICAgIH1cbiAgICAgICAgW3BsYXllck9uZUJvYXJkLmlkLCBwbGF5ZXJUd29Cb2FyZC5pZF0gPSBbXG4gICAgICAgICAgcGxheWVyVHdvQm9hcmQuaWQsXG4gICAgICAgICAgcGxheWVyT25lQm9hcmQuaWQsXG4gICAgICAgIF07XG4gICAgICAgIHVwZGF0ZURvbUJvYXJkKHtcbiAgICAgICAgICBwbGF5ZXI6IGhpdHRpbmdQbGF5ZXIsXG4gICAgICAgICAgcGFyZW50OiBwbGF5ZXJPbmVCb2FyZCxcbiAgICAgICAgICBzZXR1cDogZmFsc2UsXG4gICAgICAgICAgcGxheWVyT25lLFxuICAgICAgICAgIHBsYXllclR3byxcbiAgICAgICAgfSk7XG4gICAgICAgIHVwZGF0ZURvbUJvYXJkKHtcbiAgICAgICAgICBwbGF5ZXI6IGhpdHRpbmdQbGF5ZXIuZW5lbXksXG4gICAgICAgICAgcGFyZW50OiBwbGF5ZXJUd29Cb2FyZCxcbiAgICAgICAgICBzZXR1cDogZmFsc2UsXG4gICAgICAgICAgcGxheWVyT25lLFxuICAgICAgICAgIHBsYXllclR3byxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbmV4cG9ydCBkZWZhdWx0IHNldHVwSGl0RXZlbnRMaXN0ZW5lcnM7XG4iLCJpbXBvcnQgQm90IGZyb20gXCIuLi9sb2dpYy9haVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vbG9naWMvcGxheWVyXCI7XG5pbXBvcnQgdXBkYXRlRG9tQm9hcmQgZnJvbSBcIi4vZG9tLWJvYXJkLW1hbmFnZXJcIjtcbmltcG9ydCB1cGRhdGVEb21TaGlwcyBmcm9tIFwiLi9kb20tc2hpcC1tYW5hZ2VyXCI7XG5cbmNvbnN0IHBsYXllclZzUGxheWVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXItdnMtcGxheWVyXCIpO1xuY29uc3QgcGxheWVyVnNBaUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyLXZzLWFpXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3QgcGxheWVyVHdvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYXllci0yLW5hbWVcIik7XG5jb25zdCBwbGF5ZXJPbmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyLTEtbmFtZVwiKTtcbmNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDFcIik7XG5jb25zdCBkb21Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmRcIik7XG5jb25zdCBkb21TaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hpcHNcIik7XG5jb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lLWNvbnRhaW5lclwiKTtcbmNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhdHVzXCIpO1xuY29uc3QgcmVzdGFydEdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dhbWUtb3ZlclwiKTtcbnJlc3RhcnRHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIPCfmIJcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59KTtcblxuZnVuY3Rpb24gdG9nZ2xlT3B0aW9uc01lbnUoKSB7XG4gIHBsYXllclZzQWlCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG4gIHBsYXllclZzUGxheWVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xuICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGdhbWVDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XG4gIHN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcbiAgLy8gaWYgcGxheWVyVHdvSW5wdXQgZG9lc24ndCBoYXZlIG5vLWRpc3BsYXkgdGhhdCBtZWFucyB3ZSBoYXZlIHNlbGVjdGVkIHRoZSBQbGF5ZXIgdnMgUGxheWVyIG9wdGlvblxuICBjb25zdCBnYW1lbW9kZUlzUFZQID0gIXBsYXllclR3b0lucHV0LmNsYXNzTmFtZS5pbmNsdWRlcyhcIm5vLWRpc3BsYXlcIik7XG4gIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG4gIHBsYXllclZzQWlCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG4gIHBsYXllclZzUGxheWVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xuICBjb25zdCBwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKHBsYXllck9uZUlucHV0LnZhbHVlLCBudWxsLCB0cnVlKTtcbiAgbGV0IHBsYXllclR3bztcbiAgaWYgKCFnYW1lbW9kZUlzUFZQKSB7XG4gICAgcGxheWVyVHdvID0gbmV3IEJvdChcIlRoZSBBSVwiLCBwbGF5ZXJPbmUsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXJUd28gPSBuZXcgUGxheWVyKHBsYXllclR3b0lucHV0LnZhbHVlLCBwbGF5ZXJPbmUsIGZhbHNlKTtcbiAgfVxuICBwbGF5ZXJPbmUuZW5lbXkgPSBwbGF5ZXJUd287XG5cbiAgdXBkYXRlRG9tQm9hcmQoe1xuICAgIHBsYXllcjogcGxheWVyT25lLFxuICAgIHBhcmVudDogZG9tQm9hcmQsXG4gICAgcGxheWVyT25lLFxuICAgIHBsYXllclR3byxcbiAgfSk7XG4gIHVwZGF0ZURvbVNoaXBzKHtcbiAgICBzaGlwc0FycmF5OiBwbGF5ZXJPbmUudW5wbGFjZWRTaGlwcyxcbiAgICBwYXJlbnQ6IGRvbVNoaXBzLFxuICAgIHBsYXllck9uZSxcbiAgICBwbGF5ZXJUd28sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXR1cElucHV0U2NyZWVuRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIHBsYXllclZzUGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlT3B0aW9uc01lbnUoKTtcbiAgICBwbGF5ZXJUd29JbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcbiAgfSk7XG4gIHBsYXllclZzQWlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2dnbGVPcHRpb25zTWVudSgpO1xuICB9KTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgIHN1Ym1pdEZvcm0oZXZlbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0dXBJbnB1dFNjcmVlbkV2ZW50TGlzdGVuZXJzO1xuIiwiaW1wb3J0IHVwZGF0ZURvbUJvYXJkIGZyb20gXCIuL2RvbS1ib2FyZC1tYW5hZ2VyXCI7XG5pbXBvcnQgdXBkYXRlRG9tU2hpcHMgZnJvbSBcIi4vZG9tLXNoaXAtbWFuYWdlclwiO1xuXG5mdW5jdGlvbiBjbGVhblVwQWZ0ZXJTaGlwUGxhY2VtZW50KCkge1xuICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hpcHNcIik7XG4gIGNvbnN0IG9yaWdpbmFsQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkXCIpO1xuICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNvbnRhaW5lclwiKTtcbiAgZ2FtZUNvbnRhaW5lci5yZW1vdmVDaGlsZChzaGlwcyk7XG4gIGdhbWVDb250YWluZXIucmVtb3ZlQ2hpbGQob3JpZ2luYWxCb2FyZCk7XG59XG5cbmZ1bmN0aW9uIGRvbVNoaXBNYW5hZ2VyMih7IHBsYXllcjIsIHBsYXllck9uZSwgcGxheWVyVHdvIH0pIHtcbiAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jb250YWluZXJcIik7XG4gIGNsZWFuVXBBZnRlclNoaXBQbGFjZW1lbnQoKTtcbiAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHJvdGF0ZUJ1dHRvbi5pZCA9IFwicm90YXRlXCI7XG4gIHJvdGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUm90YXRlIFNoaXBzXCI7XG4gIHNoaXBzLmlkID0gXCJzaGlwc1wiO1xuICBib2FyZC5pZCA9IFwiYm9hcmRcIjtcbiAgc2hpcHMuYXBwZW5kKHJvdGF0ZUJ1dHRvbik7XG4gIGdhbWVDb250YWluZXIuYXBwZW5kKHNoaXBzLCBib2FyZCk7XG4gIHVwZGF0ZURvbUJvYXJkKHsgcGxheWVyOiBwbGF5ZXIyLCBwYXJlbnQ6IGJvYXJkLCBwbGF5ZXJPbmUsIHBsYXllclR3byB9KTtcbiAgdXBkYXRlRG9tU2hpcHMoe1xuICAgIHNoaXBzQXJyYXk6IHBsYXllcjIudW5wbGFjZWRTaGlwcyxcbiAgICBwYXJlbnQ6IHNoaXBzLFxuICAgIHBsYXllck9uZSxcbiAgICBwbGF5ZXJUd28sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoeyBwbGF5ZXIxLCBwbGF5ZXJPbmUsIHBsYXllclR3byB9KSB7XG4gIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY29udGFpbmVyXCIpO1xuICBjbGVhblVwQWZ0ZXJTaGlwUGxhY2VtZW50KCk7XG4gIGNvbnN0IHBsYXllck9uZUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGxheWVyVHdvQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBnYW1lQ29udGFpbmVyLmFwcGVuZChwbGF5ZXJPbmVCb2FyZCwgcGxheWVyVHdvQm9hcmQpO1xuICBwbGF5ZXJPbmVCb2FyZC5pZCA9IGBib2FyZC0ke3BsYXllcjEubmFtZX1gO1xuICBwbGF5ZXJUd29Cb2FyZC5pZCA9IGBib2FyZC0ke3BsYXllclR3by5uYW1lfWA7XG4gIHBsYXllck9uZUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgcGxheWVyVHdvQm9hcmQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuICB1cGRhdGVEb21Cb2FyZCh7XG4gICAgcGxheWVyOiBwbGF5ZXJUd28sXG4gICAgcGFyZW50OiBwbGF5ZXJUd29Cb2FyZCxcbiAgICBzZXR1cDogZmFsc2UsXG4gICAgcGxheWVyT25lLFxuICAgIHBsYXllclR3byxcbiAgfSk7XG4gIHVwZGF0ZURvbUJvYXJkKHtcbiAgICBwbGF5ZXI6IHBsYXllcjEsXG4gICAgcGFyZW50OiBwbGF5ZXJPbmVCb2FyZCxcbiAgICBzZXR1cDogZmFsc2UsXG4gICAgcGxheWVyT25lLFxuICAgIHBsYXllclR3byxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXJ0R2FtZTtcbmV4cG9ydCB7IGRvbVNoaXBNYW5hZ2VyMiB9O1xuIiwiaW1wb3J0IHNldHVwSW5wdXRTY3JlZW5FdmVudExpc3RlbmVycyBmcm9tIFwiLi9kb20vaW5wdXQtc2NyZWVuXCI7XG5cbmZ1bmN0aW9uIGltcG9ydEFsbENTUyhyZXF1aXJlKSB7XG4gIHJlcXVpcmUua2V5cygpLmZvckVhY2gocmVxdWlyZSk7XG59XG5pbXBvcnRBbGxDU1MocmVxdWlyZS5jb250ZXh0KFwiLi4vc3R5bGVzL1wiLCB0cnVlLCAvXFwuY3NzJC8pKTtcblxuc2V0dXBJbnB1dFNjcmVlbkV2ZW50TGlzdGVuZXJzKCk7XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5jbGFzcyBCb3QgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5wbGFjZVJhbmRvbVNoaXBzKCk7XG4gIH1cblxuICByYW5kb21IaXQoKSB7XG4gICAgbGV0IHhDb29yZCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGxldCB5Q29vcmQgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgIHdoaWxlICghdGhpcy5lbmVteS5ib2FyZC5jb29yZHMoeENvb3JkLCB5Q29vcmQpLmlzQWxpdmUpIHtcbiAgICAgIHhDb29yZCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgeUNvb3JkID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfVxuXG4gICAgaW50ZWxsaWdlbnRHdWVzczogZm9yIChsZXQgeCA9IDE7IHggPD0gMTA7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDE7IHkgPD0gMTA7IHkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5lbmVteS5zaG93Qm9hcmQoKS5jb29yZHMoeCwgeSk7XG4gICAgICAgIGNvbnN0IGFib3ZlID0gdGhpcy5lbmVteS5zaG93Qm9hcmQoKS5jb29yZHMoeCwgeSArIDEpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gdGhpcy5lbmVteS5zaG93Qm9hcmQoKS5jb29yZHMoeCAtIDEsIHkpO1xuICAgICAgICBjb25zdCByaWdodCA9IHRoaXMuZW5lbXkuc2hvd0JvYXJkKCkuY29vcmRzKHggKyAxLCB5KTtcbiAgICAgICAgY29uc3QgYmVsb3cgPSB0aGlzLmVuZW15LnNob3dCb2FyZCgpLmNvb3Jkcyh4LCB5IC0gMSk7XG4gICAgICAgIGNvbnN0IHBvc3NpYmlsaXRpZXMgPSBbYWJvdmUsIGxlZnQsIHJpZ2h0LCBiZWxvd10uZmlsdGVyKFxuICAgICAgICAgIChwb3NzaWJpbGl0eSkgPT4gQm9vbGVhbihwb3NzaWJpbGl0eSlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKE9iamVjdC5oYXNPd24oY3VycmVudCwgXCJzZWdtZW50XCIpKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBwb3NzaWJpbGl0eSBvZiBwb3NzaWJpbGl0aWVzKSB7XG4gICAgICAgICAgICBpZiAocG9zc2liaWxpdHkuaXNBbGl2ZSkge1xuICAgICAgICAgICAgICB4Q29vcmQgPSBwb3NzaWJpbGl0eS54O1xuICAgICAgICAgICAgICB5Q29vcmQgPSBwb3NzaWJpbGl0eS55O1xuICAgICAgICAgICAgICBicmVhayBpbnRlbGxpZ2VudEd1ZXNzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmhpdEVuZW15KHhDb29yZCwgeUNvb3JkKTtcbiAgfVxuXG4gIHBsYWNlUmFuZG9tU2hpcHMoKSB7XG4gICAgd2hpbGUgKHRoaXMudW5wbGFjZWRTaGlwcy5sZW5ndGggIT09IDApIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbVggPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgY29uc3QgcmFuZG9tWSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjb25zdCByYW5kQm9vbCA9IE1hdGgucmFuZG9tKCkgPiAwLjU7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnVucGxhY2VkU2hpcHNbMF07XG4gICAgICAgIHRoaXMucGxhY2VTaGlwKHNpemUsIHJhbmRCb29sLCBbcmFuZG9tWCwgcmFuZG9tWV0pO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvdDtcbiIsImltcG9ydCBTZWdtZW50IGZyb20gXCIuL3NlZ21lbnRcIjtcblxuY2xhc3MgQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGJvYXJkKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaXNBbGl2ZSA9IHRydWU7XG4gICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIGlmICh0aGlzLnNlZ21lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgY2VsbCBpcyBhbHJlYWR5IG9jY3VwaWVkXCIpO1xuICAgIH1cbiAgICB0aGlzLnNlZ21lbnQgPSBuZXcgU2VnbWVudCgpO1xuICAgIHJldHVybiB0aGlzLnNlZ21lbnQ7XG4gIH1cblxuICBnZXRDb29yZGluYXRlcygpIHtcbiAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy5pc0FsaXZlID09PSB0cnVlKSB7XG4gICAgICB0aGlzLmlzQWxpdmUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBjZWxsIGhhcyBhbHJlYWR5IGJlZW4gaGl0XCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWdtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aGlzLmJvYXJkKSB7XG4gICAgICAgIHRoaXMuYm9hcmQubm90aWZ5Qm9hcmRPZkhpdCh0aGlzLngsIHRoaXMueSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNlZ21lbnQua2lsbCgpO1xuICAgICAgcmV0dXJuIFwiSGl0XCI7XG4gICAgfVxuICAgIGlmICh0aGlzLmJvYXJkKSB7XG4gICAgICB0aGlzLmJvYXJkLm5vdGlmeUJvYXJkT2ZIaXQodGhpcy54LCB0aGlzLnkpO1xuICAgIH1cbiAgICByZXR1cm4gXCJNaXNzXCI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2VsbDtcbiIsImltcG9ydCBDZWxsIGZyb20gXCIuL2NlbGxcIjtcbmltcG9ydCBpc1dpdGhpbkJvdW5kcyBmcm9tIFwiLi9pcy13aXRoaW4tYm91bmRzXCI7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGxhY2VDb29yZGluYXRlcyhjb29yZHMxLCBjb29yZHMyKSB7XG4gIGNvbnN0IFtjeDEsIGN5MSwgY3gyLCBjeTJdID0gY29vcmRzMS5jb25jYXQoY29vcmRzMik7XG4gIGNvbnN0IGNvb3JkcyA9IFtjeDEsIGN5MSwgY3gyLCBjeTJdO1xuICBjb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICBpZiAoY29vcmQgPiAxMCB8fCBjb29yZCA8IDEgfHwgIU51bWJlci5pc0ludGVnZXIoY29vcmQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNoaXAgcGxhY2VtZW50XCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgW3NoaXBXaWR0aCwgc2hpcEhlaWdodF0gPSBbXG4gICAgTWF0aC5hYnMoY29vcmRzMlswXSAtIGNvb3JkczFbMF0pICsgMSxcbiAgICBNYXRoLmFicyhjb29yZHMyWzFdIC0gY29vcmRzMVsxXSkgKyAxLFxuICBdO1xuICBpZiAoc2hpcFdpZHRoID4gNCB8fCBzaGlwSGVpZ2h0ID4gNCB8fCBzaGlwV2lkdGggPCAxIHx8IHNoaXBIZWlnaHQgPCAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzaGlwIHNpemVcIik7XG4gIH1cblxuICBjb25zdCB2ZWN0b3JzID0gW107XG4gIGlmIChjb29yZHMxWzFdID09PSBjb29yZHMyWzFdKSB7XG4gICAgZm9yIChsZXQgaSA9IGNvb3JkczFbMF07IGkgPD0gY29vcmRzMlswXTsgaSsrKSB7XG4gICAgICB2ZWN0b3JzLnB1c2goW2ksIGNvb3JkczFbMV1dKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoY29vcmRzMVswXSA9PT0gY29vcmRzMlswXSkge1xuICAgIGZvciAobGV0IGkgPSBjb29yZHMxWzFdOyBpIDw9IGNvb3JkczJbMV07IGkrKykge1xuICAgICAgdmVjdG9ycy5wdXNoKFtjb29yZHMxWzBdLCBpXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc2hpcCBzaXplXCIpO1xuICB9XG5cbiAgcmV0dXJuIHZlY3RvcnM7XG59XG5cbmNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgfVxuXG4gIGdldEFkamFjZW50KHgsIHkpIHtcbiAgICBjb25zdCB2ZWN0b3JzID0gW1xuICAgICAgWzAsIDFdLFxuICAgICAgWzEsIDBdLFxuICAgICAgWzEsIDFdLFxuICAgICAgWy0xLCAwXSxcbiAgICAgIFswLCAtMV0sXG4gICAgICBbLTEsIC0xXSxcbiAgICAgIFsxLCAtMV0sXG4gICAgICBbLTEsIDFdLFxuICAgIF07XG4gICAgY29uc3QgYWRqYWNlbnRDZWxscyA9IHZlY3RvcnNcbiAgICAgIC5tYXAoKHZlY3RvcikgPT4gW3ZlY3RvclswXSArIHgsIHZlY3RvclsxXSArIHldKVxuICAgICAgLm1hcCgodmVjdG9yKSA9PiB7XG4gICAgICAgIGlmIChpc1dpdGhpbkJvdW5kcyguLi52ZWN0b3IpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29vcmRzKHZlY3RvclswXSwgdmVjdG9yWzFdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pO1xuICAgIHJldHVybiBhZGphY2VudENlbGxzO1xuICB9XG5cbiAgcGxhY2VTaGlwKGNvb3JkczEsIGNvb3JkczIsIG1vY2spIHtcbiAgICAvLyBjb29yZHMyIG5lZWRzIHRvIGJlICdiaWdnZXInIHRoYW4gY29vcmRzMVxuICAgIGNvbnN0IHZlY3RvcnMgPVxuICAgICAgY29vcmRzMlswXSArIGNvb3JkczJbMV0gPCBjb29yZHMxWzBdICsgY29vcmRzMVsxXVxuICAgICAgICA/IHZhbGlkYXRlUGxhY2VDb29yZGluYXRlcyhjb29yZHMyLCBjb29yZHMxKVxuICAgICAgICA6IHZhbGlkYXRlUGxhY2VDb29yZGluYXRlcyhjb29yZHMxLCBjb29yZHMyKTtcblxuICAgIGlmIChtb2NrKSB7XG4gICAgICByZXR1cm4gdmVjdG9ycztcbiAgICB9XG4gICAgLy8gQ2hlY2sgdGhhdCB0aGUgYXJlYSBpcyBlbXB0eSBhbmQgd2UgYXJlIGFibGUgdG8gcGxhY2UgYSBzaGlwIHRoZXJlXG4gICAgdmVjdG9ycy5mb3JFYWNoKCh2ZWN0b3IpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuY29vcmRzKC4uLnZlY3Rvcik7XG4gICAgICBjb25zdCBhcmVhID0gW3RhcmdldCwgLi4udGhpcy5nZXRBZGphY2VudCh0YXJnZXQueCwgdGFyZ2V0LnkpXS5maWx0ZXIoXG4gICAgICAgIChjZWxsKSA9PiBjZWxsICE9PSBudWxsXG4gICAgICApO1xuICAgICAgYXJlYS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGlmIChjZWxsLnNlZ21lbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2Fubm90IHBsYWNlIHlvdXIgc2hpcCB0aGVyZVwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmVjdG9ycy5mb3JFYWNoKCh2ZWN0b3IpID0+IHtcbiAgICAgIHRoaXMuY29vcmRzKC4uLnZlY3RvcikuYXR0YWNoKCk7XG4gICAgfSk7XG4gIH1cblxuICBpc1NoaXBEZXN0cm95ZWQoeCwgeSkge1xuICAgIGlmICh0aGlzLmNvbnN0cnVjdFNoaXAoeCwgeSkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBcIk5vIHNoaXBcIjtcbiAgICB9XG4gICAgY29uc3Qgc2hpcCA9IHRoaXMuY29uc3RydWN0U2hpcCh4LCB5KS5maWx0ZXIoXG4gICAgICAoc2VnbWVudCkgPT4gc2VnbWVudC5pc0FsaXZlID09PSB0cnVlXG4gICAgKTtcbiAgICByZXR1cm4gc2hpcC5sZW5ndGggPT09IDA7XG4gIH1cblxuICBjcmVhdGVCb2FyZCgpIHtcbiAgICB0aGlzLmJvYXJkID0gQXJyYXkoMTApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgdGhpcy5ib2FyZFtpXSA9IEFycmF5KDEwKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gbmV3IENlbGwoaiArIDEsIGkgKyAxLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuYm9hcmQucmV2ZXJzZShcIlwiKTtcbiAgfVxuXG4gIGdldENlbGxOZWlnaGJvcnNUaGF0QXJlU2VnbWVudHMoY2VsbCkge1xuICAgIHJldHVybiB0aGlzLmdldEFkamFjZW50KGNlbGwueCwgY2VsbC55KVxuICAgICAgLmZpbHRlcigoY2VsbEEpID0+IGNlbGxBICE9PSBudWxsKVxuICAgICAgLmZpbHRlcigoY2VsbEIpID0+IGNlbGxCLnNlZ21lbnQpO1xuICB9XG5cbiAgY29uc3RydWN0U2hpcCh4LCB5KSB7XG4gICAgY29uc3Qgc2hpcEFycmF5ID0gW107XG4gICAgY29uc3QgZm9jdXNDZWxsID0gdGhpcy5jb29yZHMoeCwgeSk7XG4gICAgaWYgKCFPYmplY3Qua2V5cyhmb2N1c0NlbGwpLmluY2x1ZGVzKFwic2VnbWVudFwiKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHNoaXBBcnJheS5wdXNoKGZvY3VzQ2VsbCk7XG4gICAgdGhpcy5nZXRDZWxsTmVpZ2hib3JzVGhhdEFyZVNlZ21lbnRzKGZvY3VzQ2VsbCkuZm9yRWFjaCgoY2VsbCkgPT5cbiAgICAgIHNoaXBBcnJheS5wdXNoKGNlbGwpXG4gICAgKTtcbiAgICBzaGlwQXJyYXkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgbmVpZ2hib3JzID0gdGhpcy5nZXRDZWxsTmVpZ2hib3JzVGhhdEFyZVNlZ21lbnRzKGNlbGwpO1xuICAgICAgbmVpZ2hib3JzLmZvckVhY2goKG5laWdoYm9yKSA9PiB7XG4gICAgICAgIGlmICghc2hpcEFycmF5LmluY2x1ZGVzKG5laWdoYm9yKSkge1xuICAgICAgICAgIHNoaXBBcnJheS5wdXNoKG5laWdoYm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2hpcEFycmF5LmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IG5laWdoYm9ycyA9IHRoaXMuZ2V0Q2VsbE5laWdoYm9yc1RoYXRBcmVTZWdtZW50cyhjZWxsKTtcbiAgICAgIG5laWdoYm9ycy5mb3JFYWNoKChuZWlnaGJvcikgPT4ge1xuICAgICAgICBpZiAoIXNoaXBBcnJheS5pbmNsdWRlcyhuZWlnaGJvcikpIHtcbiAgICAgICAgICBzaGlwQXJyYXkucHVzaChuZWlnaGJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNoaXBBcnJheS5zb3J0KChhLCBiKSA9PiBhLnggLSBiLngpLnNvcnQoKGEsIGIpID0+IGEueSAtIGIueSk7XG5cbiAgICByZXR1cm4gc2hpcEFycmF5O1xuICB9XG5cbiAgY29vcmRzKHgsIHkpIHtcbiAgICBpZiAoeCA+IDEwIHx8IHggPCAxIHx8IHkgPiAxMCB8fCB5IDwgMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmJvYXJkWzEwIC0geV1beCAtIDFdO1xuICB9XG5cbiAgZ2V0U2hpcEFyZWEoeCwgeSkge1xuICAgIGNvbnN0IHNoaXAgPSB0aGlzLmNvbnN0cnVjdFNoaXAoeCwgeSk7XG4gICAgbGV0IGFyZWEgPSBbXTtcbiAgICBzaGlwLmZvckVhY2goKHNlZ21lbnQpID0+IHtcbiAgICAgIGFyZWEgPSBhcmVhLmNvbmNhdCh0aGlzLmdldEFkamFjZW50KHNlZ21lbnQueCwgc2VnbWVudC55KSk7XG4gICAgfSk7XG4gICAgYXJlYSA9IFsuLi5uZXcgU2V0KGFyZWEpXTtcbiAgICBhcmVhID0gYXJlYS5maWx0ZXIoKGNlbGwpID0+IGNlbGwgIT09IG51bGwpO1xuICAgIGlmIChzaGlwLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYXJlYS5wdXNoKC4uLnNoaXApO1xuICAgIH1cbiAgICByZXR1cm4gYXJlYTtcbiAgfVxuXG4gIGlzU2VnbWVudCh4LCB5KSB7XG4gICAgaWYgKHggPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29vcmRzKHgsIHkpLnNlZ21lbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBub3RpZnlCb2FyZE9mSGl0KHgsIHkpIHtcbiAgICBjb25zdCBzaGlwRGVzdHJveWVkID0gdGhpcy5pc1NoaXBEZXN0cm95ZWQoeCwgeSk7XG4gICAgaWYgKHNoaXBEZXN0cm95ZWQgJiYgdGhpcy5jb25zdHJ1Y3RTaGlwKHgsIHkpICE9PSBudWxsKSB7XG4gICAgICBsZXQgYWRqYWNlbnRBcnJheSA9IFtdO1xuICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuY29uc3RydWN0U2hpcCh4LCB5KTtcbiAgICAgIHNoaXAuZm9yRWFjaCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBhZGphY2VudEFycmF5LnB1c2godGhpcy5nZXRBZGphY2VudChzZWdtZW50LngsIHNlZ21lbnQueSkpO1xuICAgICAgfSk7XG4gICAgICBhZGphY2VudEFycmF5ID0gWy4uLm5ldyBTZXQoYWRqYWNlbnRBcnJheS5mbGF0KCkpXTtcbiAgICAgIGFkamFjZW50QXJyYXkgPSBhZGphY2VudEFycmF5LmZpbHRlcigoY2VsbCkgPT4gY2VsbCAhPT0gbnVsbCk7XG4gICAgICBhZGphY2VudEFycmF5ID0gYWRqYWNlbnRBcnJheS5maWx0ZXIoKGNlbGwpID0+ICFzaGlwLmluY2x1ZGVzKGNlbGwpKTtcbiAgICAgIGFkamFjZW50QXJyYXkgPSBhZGphY2VudEFycmF5LmZpbHRlcigoY2VsbCkgPT4gY2VsbC5pc0FsaXZlKTtcblxuICAgICAgYWRqYWNlbnRBcnJheS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwuaGl0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZUJvYXJkO1xuIiwiZnVuY3Rpb24gaXNXaXRoaW5Cb3VuZHMoeCwgeSkge1xuICBpZiAoeCA8PSAxMCAmJiB4ID49IDEgJiYgeSA8PSAxMCAmJiB5ID49IDEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzV2l0aGluQm91bmRzO1xuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZW5lbXksIGNhbkhpdCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICB0aGlzLmVuZW15ID0gZW5lbXk7XG4gICAgdGhpcy51bnBsYWNlZFNoaXBzID0gWzQsIDMsIDMsIDIsIDIsIDIsIDEsIDEsIDEsIDFdO1xuICAgIHRoaXMuYWN0aXZlU2hpcHMgPSBbXTtcbiAgICB0aGlzLmNhbkhpdCA9IGNhbkhpdDtcbiAgICB0aGlzLndpbm5lciA9IGZhbHNlO1xuICB9XG5cbiAgaXNHYW1lT3ZlcigpIHtcbiAgICBjb25zdCBpc0l0T3ZlciA9XG4gICAgICB0aGlzLmFjdGl2ZVNoaXBzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmVuZW15LmFjdGl2ZVNoaXBzLmxlbmd0aCA9PT0gMDtcbiAgICBpZiAoaXNJdE92ZXIgJiYgIXRoaXMud2lubmVyICYmICF0aGlzLmVuZW15Lndpbm5lcikge1xuICAgICAgdGhpcy53aW5uZXIgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gaXNJdE92ZXI7XG4gIH1cblxuICBoaXRFbmVteSh4LCB5KSB7XG4gICAgaWYgKHRoaXMuZ2FtZU92ZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkdhbWUgaXMgb3ZlclwiKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FuSGl0KSB7XG4gICAgICB0aGlzLmVuZW15LmJvYXJkLmNvb3Jkcyh4LCB5KS5oaXQoKTtcblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLmVuZW15LmJvYXJkLmNvbnN0cnVjdFNoaXAoeCwgeSkgIT09IG51bGwgJiZcbiAgICAgICAgdGhpcy5lbmVteS5ib2FyZC5pc1NoaXBEZXN0cm95ZWQoeCwgeSkgPT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBjb25zdCBsZW5ndGhPZlNoaXAgPSB0aGlzLmVuZW15LmJvYXJkLmNvbnN0cnVjdFNoaXAoeCwgeSkubGVuZ3RoO1xuICAgICAgICB0aGlzLnBsYWNlU2hpcEFycmF5TWFuYWdlcihsZW5ndGhPZlNoaXAsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2FuSGl0ID0gIXRoaXMuY2FuSGl0O1xuICAgICAgdGhpcy5lbmVteS5jYW5IaXQgPSAhdGhpcy5lbmVteS5jYW5IaXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSB3YWl0IGZvciB0aGUgb3RoZXIgcGxheWVyIHRvIGhpdFwiKTtcbiAgICB9XG4gICAgdGhpcy5pc0dhbWVPdmVyKCk7XG4gIH1cblxuICBzZWVFbmVteUJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLmVuZW15LnNob3dCb2FyZCgpO1xuICB9XG5cbiAgc2hvd0JvYXJkKCkge1xuICAgIGNvbnN0IGNvcGllZEJvYXJkID0gdGhpcy5ib2FyZC5ib2FyZC5tYXAoKHJvdykgPT5cbiAgICAgIHJvdy5tYXAoKGNlbGwpID0+XG4gICAgICAgIGNlbGwuaXNBbGl2ZVxuICAgICAgICAgID8gT2JqZWN0LmtleXMoY2VsbCkucmVkdWNlKChvYmosIGtleSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoa2V5ICE9PSBcInNlZ21lbnRcIikge1xuICAgICAgICAgICAgICAgIG9ialtrZXldID0gY2VsbFtrZXldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9LCB7fSlcbiAgICAgICAgICA6IGNlbGxcbiAgICAgIClcbiAgICApO1xuICAgIGNvbnN0IHNob3dHYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgc2hvd0dhbWVCb2FyZC5ib2FyZCA9IGNvcGllZEJvYXJkO1xuICAgIHJldHVybiBzaG93R2FtZUJvYXJkO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNpemUsIGxheSwgY29vcmRzLCBtb2NrID0gZmFsc2UpIHtcbiAgICAvLyBpZiBtb2NrIGlzIHRydWUgaXQgd2lsbCBqdXN0IHJldHVybiB0aGUgdmVjdG9ycyB3aGVyZSB0aGUgc2hpcCB3b3VsZCd2ZSBiZWVuIHBsYWNlZCwgd29udCBhY3R1YWxseSBwbGFjZSB0aGUgc2hpcCB0aGVyZVxuICAgIC8vIGl0cyBub3QgcmVjdXJzaXZlIGZ1bmN0aW9uLCB0aGV5IGp1c3QgaGF2ZSB0aGUgc2FtZSBuYW1lXG4gICAgbGV0IHZlY3RvcnM7XG4gICAgaWYgKGxheSkge1xuICAgICAgdmVjdG9ycyA9IHRoaXMuYm9hcmQucGxhY2VTaGlwKFxuICAgICAgICBbLi4uY29vcmRzXSxcbiAgICAgICAgW2Nvb3Jkc1swXSArIHNpemUgLSAxLCBjb29yZHNbMV1dLFxuICAgICAgICBtb2NrXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZWN0b3JzID0gdGhpcy5ib2FyZC5wbGFjZVNoaXAoXG4gICAgICAgIFsuLi5jb29yZHNdLFxuICAgICAgICBbY29vcmRzWzBdLCBjb29yZHNbMV0gKyBzaXplIC0gMV0sXG4gICAgICAgIG1vY2tcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICghbW9jaykge1xuICAgICAgdGhpcy5wbGFjZVNoaXBBcnJheU1hbmFnZXIoc2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiB2ZWN0b3JzO1xuICB9XG5cbiAgY2FuR2FtZVN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLnVucGxhY2VkU2hpcHMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgcGxhY2VTaGlwQXJyYXlNYW5hZ2VyKHNpemUsIHBsYWNlID0gdHJ1ZSkge1xuICAgIGlmIChwbGFjZSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnVucGxhY2VkU2hpcHMuaW5kZXhPZihzaXplKTtcbiAgICAgIHRoaXMuYWN0aXZlU2hpcHMucHVzaCguLi50aGlzLnVucGxhY2VkU2hpcHMuc3BsaWNlKGluZGV4LCAxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hY3RpdmVTaGlwcy5pbmRleE9mKHNpemUpO1xuICAgICAgdGhpcy51bnBsYWNlZFNoaXBzLnB1c2goLi4udGhpcy5hY3RpdmVTaGlwcy5zcGxpY2UoaW5kZXgsIDEpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgU2VnbWVudCB7XG4gICNzdGF0ZSA9IHRydWU7XG5cbiAga2lsbCgpIHtcbiAgICBpZiAodGhpcy4jc3RhdGUpIHtcbiAgICAgIHRoaXMuI3N0YXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2VnbWVudCBoYXMgYWxyZWFkeSBiZWVuIGhpdFwiKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VnbWVudDtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9ib2FyZC5jc3NcIjogXCIuL3NyYy9zdHlsZXMvYm9hcmQuY3NzXCIsXG5cdFwiLi9ib2R5LmNzc1wiOiBcIi4vc3JjL3N0eWxlcy9ib2R5LmNzc1wiLFxuXHRcIi4vcmVzZXQuY3NzXCI6IFwiLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiLFxuXHRcIi4vc2Nyb2xsYmFyLmNzc1wiOiBcIi4vc3JjL3N0eWxlcy9zY3JvbGxiYXIuY3NzXCIsXG5cdFwiLi9zdHlsZS5jc3NcIjogXCIuL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL3N0eWxlcyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLmNzcyRcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=