(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/background.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/background.css ***!
  \*************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `body {
  min-height: 100vh;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    var(--background-gradient-1) 0%,
    var(--background-gradient-2) 46%,
    var(--background-gradient-3) 100%
  );
}
`, "",{"version":3,"sources":["webpack://./src/styles/background.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,yBAAyB;EACzB;;;;;GAKC;AACH","sourcesContent":["body {\n  min-height: 100vh;\n  background-color: #4158d0;\n  background-image: linear-gradient(\n    43deg,\n    var(--background-gradient-1) 0%,\n    var(--background-gradient-2) 46%,\n    var(--background-gradient-3) 100%\n  );\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/display.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/display.css ***!
  \**********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `body {
  display: flex;
  justify-content: center;
  align-items: center;
}

header > div {
  display: flex;
}

main {
  display: grid;
  grid-template: 80px 1fr / 330px 1fr;
  grid-template-areas:
    "header header"
    "aside  article";
}

header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  grid-area: aside;
  gap: var(--generic-spacing);
  overflow: scroll;
}

aside > div {
  display: flex;
  justify-content: space-between;
}

#project-names {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#project-names > div {
  display: flex;
  justify-content: space-between;
}

aside > div > p {
  display: inline-block;
}

article {
  grid-area: article;
}

.dates {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.dates p {
  display: inline-block;
}
.dates div {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 800px) {
  header img[src].menu {
    display: inline-block;
  }
  .main-closed-aside {
    grid-template-areas:
      "header header"
      "article article";
  }
  .aside-closed-aside {
    display: none;
  }

  .main-open-aside {
    grid-template-areas:
      "header header"
      "aside aside";
  }
  .aside-open-aside {
    height: 100%;
    width: 100%;
  }
  .body-open-aside {
    display: none;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/display.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC;;oBAEkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAC3B,gBAAgB;EAChB,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;AACA;EACE,qBAAqB;AACvB;AACA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE;IACE,qBAAqB;EACvB;EACA;IACE;;uBAEmB;EACrB;EACA;IACE,aAAa;EACf;;EAEA;IACE;;mBAEe;EACjB;EACA;IACE,YAAY;IACZ,WAAW;EACb;EACA;IACE,aAAa;EACf;AACF","sourcesContent":["body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nheader > div {\n  display: flex;\n}\n\nmain {\n  display: grid;\n  grid-template: 80px 1fr / 330px 1fr;\n  grid-template-areas:\n    \"header header\"\n    \"aside  article\";\n}\n\nheader {\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\naside {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  grid-area: aside;\n  gap: var(--generic-spacing);\n  overflow: scroll;\n}\n\naside > div {\n  display: flex;\n  justify-content: space-between;\n}\n\n#project-names {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n#project-names > div {\n  display: flex;\n  justify-content: space-between;\n}\n\naside > div > p {\n  display: inline-block;\n}\n\narticle {\n  grid-area: article;\n}\n\n.dates {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.dates p {\n  display: inline-block;\n}\n.dates div {\n  display: flex;\n  justify-content: space-between;\n}\n\n@media only screen and (max-width: 800px) {\n  header img[src].menu {\n    display: inline-block;\n  }\n  .main-closed-aside {\n    grid-template-areas:\n      \"header header\"\n      \"article article\";\n  }\n  .aside-closed-aside {\n    display: none;\n  }\n\n  .main-open-aside {\n    grid-template-areas:\n      \"header header\"\n      \"aside aside\";\n  }\n  .aside-open-aside {\n    height: 100%;\n    width: 100%;\n  }\n  .body-open-aside {\n    display: none;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/hover.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/hover.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `#theme {
  filter: invert(99%) sepia(84%) saturate(44%) hue-rotate(208deg)
    brightness(118%) contrast(100%) drop-shadow(0px 4px 5px #00000029);
}

/* .add-todo-button {
  transition: all 1s ease-in-out;
} */

.add-todo-button:hover {
  /* font-size: 4.5rem; */
  /* color: white; */
  border: 2px solid white;
}

.delete:hover,
.favorite:hover,
.edit:hover,
.menu:hover,
#theme:hover,
.add-todo-button:hover,
.check:hover {
  cursor: pointer;
}

.delete:hover {
  filter: invert(22%) sepia(87%) saturate(7389%) hue-rotate(357deg)
    brightness(102%) contrast(117%);
}

.favorite:hover,
.edit:hover,
.project-name > button:hover,
.add-project:hover,
.dates > div > button:hover,
.check:hover {
  filter: invert(71%) sepia(24%) saturate(6897%) hue-rotate(2deg)
    brightness(105%) contrast(104%);
}

.menu:hover {
  filter: invert(48%) sepia(100%) saturate(3948%) hue-rotate(230deg)
    brightness(85%) contrast(86%);
}
`, "",{"version":3,"sources":["webpack://./src/styles/hover.css"],"names":[],"mappings":"AAAA;EACE;sEACoE;AACtE;;AAEA;;GAEG;;AAEH;EACE,uBAAuB;EACvB,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;;;;;;;EAOE,eAAe;AACjB;;AAEA;EACE;mCACiC;AACnC;;AAEA;;;;;;EAME;mCACiC;AACnC;;AAEA;EACE;iCAC+B;AACjC","sourcesContent":["#theme {\n  filter: invert(99%) sepia(84%) saturate(44%) hue-rotate(208deg)\n    brightness(118%) contrast(100%) drop-shadow(0px 4px 5px #00000029);\n}\n\n/* .add-todo-button {\n  transition: all 1s ease-in-out;\n} */\n\n.add-todo-button:hover {\n  /* font-size: 4.5rem; */\n  /* color: white; */\n  border: 2px solid white;\n}\n\n.delete:hover,\n.favorite:hover,\n.edit:hover,\n.menu:hover,\n#theme:hover,\n.add-todo-button:hover,\n.check:hover {\n  cursor: pointer;\n}\n\n.delete:hover {\n  filter: invert(22%) sepia(87%) saturate(7389%) hue-rotate(357deg)\n    brightness(102%) contrast(117%);\n}\n\n.favorite:hover,\n.edit:hover,\n.project-name > button:hover,\n.add-project:hover,\n.dates > div > button:hover,\n.check:hover {\n  filter: invert(71%) sepia(24%) saturate(6897%) hue-rotate(2deg)\n    brightness(105%) contrast(104%);\n}\n\n.menu:hover {\n  filter: invert(48%) sepia(100%) saturate(3948%) hue-rotate(230deg)\n    brightness(85%) contrast(86%);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/priority.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/priority.css ***!
  \***********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.Low-priority {
  border-left: 10px groove var(--priority-low);
}

.Mid-priority {
  border-left: 10px groove var(--priority-mid);
}

.High-priority {
  border-left: 10px groove var(--priority-high);
}
`, "",{"version":3,"sources":["webpack://./src/styles/priority.css"],"names":[],"mappings":"AAAA;EACE,4CAA4C;AAC9C;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,6CAA6C;AAC/C","sourcesContent":[".Low-priority {\n  border-left: 10px groove var(--priority-low);\n}\n\n.Mid-priority {\n  border-left: 10px groove var(--priority-mid);\n}\n\n.High-priority {\n  border-left: 10px groove var(--priority-high);\n}\n"],"sourceRoot":""}]);
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
`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,+BAA+B;EAC/B,SAAS;AACX;;AAEA;EACE,2BAA2B;EAC3B,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;;AAEA;;;;EAIE,aAAa;AACf;;AAEA;;;;;;;EAOE,yBAAyB;AAC3B;;AAEA;;EAEE,kBAAkB;AACpB","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  line-height: calc(1em + 0.5rem);\n  margin: 0;\n}\n\nhtml {\n  -moz-text-size-adjust: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n\nbody {\n  -webkit-font-smoothing: antialiased;\n  min-height: 100vh;\n}\n\ntextarea:not([rows]) {\n  min-height: 10em;\n}\n\n:target {\n  scroll-margin-block: 5ex;\n}\n\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --generic-spacing: 20px;
}

.red-text {
  background-color: rgb(255, 0, 0);
  border-radius: 16px;
  padding: 4px;
}

#small-text {
  font-size: 2rem;
  color: rgb(255, 0, 0);
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.468);
}

::placeholder {
  color: rgb(235, 235, 235);
}

input {
  border: none;
  background-color: rgba(0, 0, 0, 0);
  color: white;
}

body {
  font-family: "Single Day", sans-serif;
  font-size: 2rem;
  color: white;
}

img {
  filter: invert(100);
}

header .menu {
  display: none;
  height: 40px;
  width: auto;
  margin-right: 50px;
}

.checked {
  text-decoration: line-through;
  color: rgb(210, 210, 210);
}

.checked-todo {
  border: none;
}

header #theme {
  height: 40px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 50px;
}

header {
  border-bottom: var(--border-style);
}

aside {
  border-right: var(--border-style);
}

aside > div:nth-child(1) {
  margin-top: var(--generic-spacing);
}

aside > div {
  width: 80%;
  background-color: var(--shade);
  border-radius: var(--generic-spacing);
  padding: 0 var(--generic-spacing);
}

h1 {
  margin-left: 50px;
  font-size: 60px;
}

.add-project {
  width: 100%;
  padding: 10px;
}

#project-names > div {
  width: 100%;
}

aside button {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: white;
}

main {
  height: 1000px;
  width: 1320px;
  background: var(--main-background);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: var(--border-style);
}

@media only screen and (max-width: 1400px) {
  main {
    height: 100vh;
    width: 100vw;
    border-radius: 0;
    background: rgba(64, 64, 64, 0.2);
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;AACzB;;AAEA;EACE,gCAAgC;EAChC,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,6CAA6C;AAC/C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,qCAAqC;EACrC,eAAe;EACf,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,yBAAyB;AAC3B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,UAAU;EACV,8BAA8B;EAC9B,qCAAqC;EACrC,iCAAiC;AACnC;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,cAAc;EACd,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,yCAAyC;EACzC,0BAA0B;EAC1B,kCAAkC;EAClC,2BAA2B;AAC7B;;AAEA;EACE;IACE,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,iCAAiC;EACnC;AACF","sourcesContent":[":root {\n  --generic-spacing: 20px;\n}\n\n.red-text {\n  background-color: rgb(255, 0, 0);\n  border-radius: 16px;\n  padding: 4px;\n}\n\n#small-text {\n  font-size: 2rem;\n  color: rgb(255, 0, 0);\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.468);\n}\n\n::placeholder {\n  color: rgb(235, 235, 235);\n}\n\ninput {\n  border: none;\n  background-color: rgba(0, 0, 0, 0);\n  color: white;\n}\n\nbody {\n  font-family: \"Single Day\", sans-serif;\n  font-size: 2rem;\n  color: white;\n}\n\nimg {\n  filter: invert(100);\n}\n\nheader .menu {\n  display: none;\n  height: 40px;\n  width: auto;\n  margin-right: 50px;\n}\n\n.checked {\n  text-decoration: line-through;\n  color: rgb(210, 210, 210);\n}\n\n.checked-todo {\n  border: none;\n}\n\nheader #theme {\n  height: 40px;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: 50px;\n}\n\nheader {\n  border-bottom: var(--border-style);\n}\n\naside {\n  border-right: var(--border-style);\n}\n\naside > div:nth-child(1) {\n  margin-top: var(--generic-spacing);\n}\n\naside > div {\n  width: 80%;\n  background-color: var(--shade);\n  border-radius: var(--generic-spacing);\n  padding: 0 var(--generic-spacing);\n}\n\nh1 {\n  margin-left: 50px;\n  font-size: 60px;\n}\n\n.add-project {\n  width: 100%;\n  padding: 10px;\n}\n\n#project-names > div {\n  width: 100%;\n}\n\naside button {\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  color: white;\n}\n\nmain {\n  height: 1000px;\n  width: 1320px;\n  background: var(--main-background);\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px);\n  border: var(--border-style);\n}\n\n@media only screen and (max-width: 1400px) {\n  main {\n    height: 100vh;\n    width: 100vw;\n    border-radius: 0;\n    background: rgba(64, 64, 64, 0.2);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/theme.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/theme.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.dark-theme {
  --background-gradient-1: #2a0061;
  --background-gradient-2: #0003be;
  --background-gradient-3: #0030a9;
  --shade: rgba(0, 0, 0, 0.46);
  --border-style: 4px solid rgba(6, 0, 112, 0.563);
  --main-background: rgba(0, 0, 0, 0.303);
  --priority-low: rgb(0, 84, 0);
  --priority-mid: rgb(78, 72, 0);
  --priority-high: rgb(40, 0, 0);
}

.light-theme {
  --background-gradient-1: #7188ff;
  --background-gradient-2: #c850c0;
  --background-gradient-3: #ffcc70;
  --shade: rgba(0, 0, 0, 0.127);
  --border-style: 4px solid rgba(255, 255, 255, 0.3);
  --main-background: rgba(255, 255, 255, 0.2);
  --priority-low: rgba(0, 255, 0, 0.665);
  --priority-mid: rgba(255, 234, 0, 0.831);
  --priority-high: rgba(255, 0, 0, 0.774);
}
`, "",{"version":3,"sources":["webpack://./src/styles/theme.css"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,4BAA4B;EAC5B,gDAAgD;EAChD,uCAAuC;EACvC,6BAA6B;EAC7B,8BAA8B;EAC9B,8BAA8B;AAChC;;AAEA;EACE,gCAAgC;EAChC,gCAAgC;EAChC,gCAAgC;EAChC,6BAA6B;EAC7B,kDAAkD;EAClD,2CAA2C;EAC3C,sCAAsC;EACtC,wCAAwC;EACxC,uCAAuC;AACzC","sourcesContent":[".dark-theme {\n  --background-gradient-1: #2a0061;\n  --background-gradient-2: #0003be;\n  --background-gradient-3: #0030a9;\n  --shade: rgba(0, 0, 0, 0.46);\n  --border-style: 4px solid rgba(6, 0, 112, 0.563);\n  --main-background: rgba(0, 0, 0, 0.303);\n  --priority-low: rgb(0, 84, 0);\n  --priority-mid: rgb(78, 72, 0);\n  --priority-high: rgb(40, 0, 0);\n}\n\n.light-theme {\n  --background-gradient-1: #7188ff;\n  --background-gradient-2: #c850c0;\n  --background-gradient-3: #ffcc70;\n  --shade: rgba(0, 0, 0, 0.127);\n  --border-style: 4px solid rgba(255, 255, 255, 0.3);\n  --main-background: rgba(255, 255, 255, 0.2);\n  --priority-low: rgba(0, 255, 0, 0.665);\n  --priority-mid: rgba(255, 234, 0, 0.831);\n  --priority-high: rgba(255, 0, 0, 0.774);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/todo.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/todo.css ***!
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `article {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: 250px;
  overflow: scroll;
  gap: var(--generic-spacing);
  margin: var(--generic-spacing);
}

.delete-project {
  height: 100%;
  width: 100%;
  background-color: var(--shade);
  border: var(--border-style);
  color: white;
}

.todo {
  background-color: var(--shade);
  font-size: 1.4rem;
  border-radius: 40px;
  padding: 15px 25px;
  display: grid;
  grid-template: 40px 1fr 1fr 20px / 1fr 50px;
  grid-template-areas:
    "title       delete"
    "description edit"
    "description check"
    "date        favorite";
}

div[class="todo"] {
  grid-template-areas:
    "title       delete"
    "description edit"
    "date        date";
}

input[class="title"] {
  font-size: 2.1rem;
  font-weight: bold;
}

#test {
  grid-area: delete;
}

.priority-div {
  display: grid;
  height: 60%;
  grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  grid-area: edit;
  font-size: 1.2rem;
  justify-items: start;
  align-items: center;
  align-self: center;
}

input[type="date"] {
  color-scheme: dark;
}

.priority-div > input {
  height: 18px;
}

.add-todo-button {
  background-color: var(--shade);
  border: none;
  border-radius: 40px;
  color: white;
  font-size: 4rem;
  /* display: grid;
  grid-template: 50px 1fr 50px 50px / 1fr repeat(4, 50px);
  grid-template-areas:
    "title title title title title"
    "description description description description description"
    "date priority-1 priority-2 priority-3 important"
    "create create create create create"; */
}

.add-todo-button .input-title {
  grid-area: title;
}
.add-todo-button .input-description {
  grid-area: description;
}
.add-todo-button .input-create-button {
  grid-area: create;
}
.add-todo-button .priority-1 {
  outline: 2px solid green;
  grid-area: priority-1;
  color: green;
}
.add-todo-button .priority-2 {
  outline: 2px solid orange;
  grid-area: priority-2;
  color: orange;
}
.add-todo-button .priority-3 {
  outline: 2px solid red;
  grid-area: priority-3;
  color: red;
}

.todo .title {
  grid-area: title;
}

.todo .description {
  grid-area: description;
  align-self: center;
}

.todo .edit {
  grid-area: edit;
  justify-self: end;
  align-self: center;
}

.todo .date {
  grid-area: date;
}

.todo .delete {
  grid-area: delete;
  justify-self: end;
  align-self: center;
}

.todo .favorite {
  grid-area: favorite;
  justify-self: end;
  align-self: center;
}

.check {
  grid-area: check;
  justify-self: end;
  align-self: center;
}
`, "",{"version":3,"sources":["webpack://./src/styles/todo.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,2DAA2D;EAC3D,qBAAqB;EACrB,gBAAgB;EAChB,2BAA2B;EAC3B,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,8BAA8B;EAC9B,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,8BAA8B;EAC9B,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,2CAA2C;EAC3C;;;;0BAIwB;AAC1B;;AAEA;EACE;;;sBAGoB;AACtB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,8CAA8C;EAC9C,eAAe;EACf,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,eAAe;EACf;;;;;;2CAMyC;AAC3C;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,qBAAqB;EACrB,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB","sourcesContent":["article {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  grid-auto-rows: 250px;\n  overflow: scroll;\n  gap: var(--generic-spacing);\n  margin: var(--generic-spacing);\n}\n\n.delete-project {\n  height: 100%;\n  width: 100%;\n  background-color: var(--shade);\n  border: var(--border-style);\n  color: white;\n}\n\n.todo {\n  background-color: var(--shade);\n  font-size: 1.4rem;\n  border-radius: 40px;\n  padding: 15px 25px;\n  display: grid;\n  grid-template: 40px 1fr 1fr 20px / 1fr 50px;\n  grid-template-areas:\n    \"title       delete\"\n    \"description edit\"\n    \"description check\"\n    \"date        favorite\";\n}\n\ndiv[class=\"todo\"] {\n  grid-template-areas:\n    \"title       delete\"\n    \"description edit\"\n    \"date        date\";\n}\n\ninput[class=\"title\"] {\n  font-size: 2.1rem;\n  font-weight: bold;\n}\n\n#test {\n  grid-area: delete;\n}\n\n.priority-div {\n  display: grid;\n  height: 60%;\n  grid-template: repeat(3, 1fr) / repeat(2, 1fr);\n  grid-area: edit;\n  font-size: 1.2rem;\n  justify-items: start;\n  align-items: center;\n  align-self: center;\n}\n\ninput[type=\"date\"] {\n  color-scheme: dark;\n}\n\n.priority-div > input {\n  height: 18px;\n}\n\n.add-todo-button {\n  background-color: var(--shade);\n  border: none;\n  border-radius: 40px;\n  color: white;\n  font-size: 4rem;\n  /* display: grid;\n  grid-template: 50px 1fr 50px 50px / 1fr repeat(4, 50px);\n  grid-template-areas:\n    \"title title title title title\"\n    \"description description description description description\"\n    \"date priority-1 priority-2 priority-3 important\"\n    \"create create create create create\"; */\n}\n\n.add-todo-button .input-title {\n  grid-area: title;\n}\n.add-todo-button .input-description {\n  grid-area: description;\n}\n.add-todo-button .input-create-button {\n  grid-area: create;\n}\n.add-todo-button .priority-1 {\n  outline: 2px solid green;\n  grid-area: priority-1;\n  color: green;\n}\n.add-todo-button .priority-2 {\n  outline: 2px solid orange;\n  grid-area: priority-2;\n  color: orange;\n}\n.add-todo-button .priority-3 {\n  outline: 2px solid red;\n  grid-area: priority-3;\n  color: red;\n}\n\n.todo .title {\n  grid-area: title;\n}\n\n.todo .description {\n  grid-area: description;\n  align-self: center;\n}\n\n.todo .edit {\n  grid-area: edit;\n  justify-self: end;\n  align-self: center;\n}\n\n.todo .date {\n  grid-area: date;\n}\n\n.todo .delete {\n  grid-area: delete;\n  justify-self: end;\n  align-self: center;\n}\n\n.todo .favorite {\n  grid-area: favorite;\n  justify-self: end;\n  align-self: center;\n}\n\n.check {\n  grid-area: check;\n  justify-self: end;\n  align-self: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/utility.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/utility.css ***!
  \**********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.hidden {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/styles/utility.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf","sourcesContent":[".hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/background.css":
/*!***********************************!*\
  !*** ./src/styles/background.css ***!
  \***********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./background.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/background.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_background_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/display.css":
/*!********************************!*\
  !*** ./src/styles/display.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_display_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./display.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/display.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_display_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_display_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_display_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_display_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/hover.css":
/*!******************************!*\
  !*** ./src/styles/hover.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hover_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./hover.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/hover.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hover_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hover_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_hover_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_hover_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/priority.css":
/*!*********************************!*\
  !*** ./src/styles/priority.css ***!
  \*********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_priority_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./priority.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/priority.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_priority_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_priority_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_priority_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_priority_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/styles/theme.css":
/*!******************************!*\
  !*** ./src/styles/theme.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./theme.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/theme.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_theme_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/todo.css":
/*!*****************************!*\
  !*** ./src/styles/todo.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./todo.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/todo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/utility.css":
/*!********************************!*\
  !*** ./src/styles/utility.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_utility_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./utility.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/utility.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_utility_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_utility_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_utility_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_utility_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/img sync \\.(png%7Csvg%7Cjpe?g%7Cgif)$":
/*!************************************************************************!*\
  !*** ./src/assets/img/ sync nonrecursive \.(png%7Csvg%7Cjpe?g%7Cgif)$ ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./checkbox-checked.svg": "./src/assets/img/checkbox-checked.svg",
	"./checkbox-empty.svg": "./src/assets/img/checkbox-empty.svg",
	"./dark-theme.svg": "./src/assets/img/dark-theme.svg",
	"./delete.svg": "./src/assets/img/delete.svg",
	"./edit.svg": "./src/assets/img/edit.svg",
	"./finished.svg": "./src/assets/img/finished.svg",
	"./light-theme.svg": "./src/assets/img/light-theme.svg",
	"./menu.svg": "./src/assets/img/menu.svg",
	"./star-fill.svg": "./src/assets/img/star-fill.svg",
	"./star.svg": "./src/assets/img/star.svg"
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
webpackContext.id = "./src/assets/img sync \\.(png%7Csvg%7Cjpe?g%7Cgif)$";

/***/ }),

/***/ "./src/scripts/add-project.js":
/*!************************************!*\
  !*** ./src/scripts/add-project.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProject)
/* harmony export */ });
/* harmony import */ var _update_dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-dates */ "./src/scripts/update-dates.js");
/* harmony import */ var _update_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-project */ "./src/scripts/update-project.js");
/* harmony import */ var _update_projects_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-projects-list */ "./src/scripts/update-projects-list.js");




function addProject(projectName) {
  localStorage[projectName] = JSON.stringify([]);
  (0,_update_project__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName);
  (0,_update_projects_list__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_update_dates__WEBPACK_IMPORTED_MODULE_0__["default"])();
}


/***/ }),

/***/ "./src/scripts/add-projects-btn.js":
/*!*****************************************!*\
  !*** ./src/scripts/add-projects-btn.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addProjectsBtn)
/* harmony export */ });
/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project */ "./src/scripts/add-project.js");
/* harmony import */ var _toggle_aside_article_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle-aside-article-classes */ "./src/scripts/toggle-aside-article-classes.js");



function addProjectsBtn() {
  const addProjectsBtn = document.querySelector(".add-project");

  addProjectsBtn.addEventListener("click", () => {
    let userInput = prompt("What do you want to call the new project?");
    const projectsList = [];
    for (const key of Object.keys(localStorage)) {
      projectsList.push(key.toLowerCase());
    }
    if (userInput === null) userInput = "";
    if (projectsList.includes(userInput.toLowerCase())) {
      alert("You already have a project of the same name!");
    } else if (Boolean(userInput)) {
      (0,_add_project__WEBPACK_IMPORTED_MODULE_0__["default"])(userInput);
      (0,_toggle_aside_article_classes__WEBPACK_IMPORTED_MODULE_1__["default"])();
    } else {
      alert("Please enter a valid project name!");
    }
  });
}


/***/ }),

/***/ "./src/scripts/add-todo-button.js":
/*!****************************************!*\
  !*** ./src/scripts/add-todo-button.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTodoButton)
/* harmony export */ });
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ "./src/scripts/add-todo.js");
/* harmony import */ var _find_last_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-last-edit */ "./src/scripts/find-last-edit.js");
/* harmony import */ var _update_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-dates */ "./src/scripts/update-dates.js");
/* harmony import */ var _update_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-project */ "./src/scripts/update-project.js");
/* harmony import */ var _update_projects_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-projects-list */ "./src/scripts/update-projects-list.js");






function addTodoButton(parent, project) {
  const createButton = document.createElement("button");
  createButton.classList.add("add-todo-button");
  parent.prepend(createButton);
  createButton.textContent = "+";

  createButton.addEventListener("click", () => {
    try {
      if (Boolean(JSON.parse(localStorage[project]).at(-1)["title"])) {
        parent.removeChild(createButton);
        (0,_add_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(`${project}`, "", "", "", "", false, false);
        (0,_update_project__WEBPACK_IMPORTED_MODULE_3__["default"])(project);
        (0,_update_projects_list__WEBPACK_IMPORTED_MODULE_4__["default"])();
        (0,_update_dates__WEBPACK_IMPORTED_MODULE_2__["default"])();
        const lastEdit = (0,_find_last_edit__WEBPACK_IMPORTED_MODULE_1__["default"])();
        lastEdit.click();
      } else {
        createButton.textContent = "You already have a new todo open!";
        createButton.id = "small-text";
        setTimeout(function () {
          createButton.textContent = "+";
          createButton.id = "";
        }, 1000);
      }
    } catch {
      (0,_add_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(`${project}`, "", "", "", "", false, false);
      (0,_update_project__WEBPACK_IMPORTED_MODULE_3__["default"])(project);
      (0,_update_projects_list__WEBPACK_IMPORTED_MODULE_4__["default"])();
      (0,_update_dates__WEBPACK_IMPORTED_MODULE_2__["default"])();
      const lastEdit = (0,_find_last_edit__WEBPACK_IMPORTED_MODULE_1__["default"])();
      lastEdit.click();
    }
  });
}


/***/ }),

/***/ "./src/scripts/add-todo.js":
/*!*********************************!*\
  !*** ./src/scripts/add-todo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTodo)
/* harmony export */ });
function addTodo(
  projectName,
  todoTitle,
  todoDescription,
  todoDate,
  todoPriority,
  todoFavorite,
  todoChecked
) {
  if (localStorage[`${projectName}`] === undefined) {
    localStorage[`${projectName}`] = "[]";
  }
  const temp = JSON.parse(localStorage[`${projectName}`]); // current value of the project's todo list array
  temp.push({
    title: todoTitle,
    description: todoDescription,
    date: todoDate,
    priority: todoPriority,
    favorite: todoFavorite,
    checked: todoChecked,
  });
  localStorage[`${projectName}`] = JSON.stringify(temp);
}


/***/ }),

/***/ "./src/scripts/all-favorite.js":
/*!*************************************!*\
  !*** ./src/scripts/all-favorite.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ allFavorite)
/* harmony export */ });
function allFavorite() {
  const favoriteArray = [];
  for (const [key, value] of Object.entries(localStorage)) {
    const todos = JSON.parse(value);
    for (const todo of todos) {
      if (todo["favorite"]) {
        favoriteArray.push(todo);
      }
    }
  }
  return JSON.stringify(favoriteArray);
}


/***/ }),

/***/ "./src/scripts/all-today.js":
/*!**********************************!*\
  !*** ./src/scripts/all-today.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ allToday)
/* harmony export */ });
/* harmony import */ var _time_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-constants */ "./src/scripts/time-constants.js");


function allToday() {
  const todayArray = [];
  const weekArray = [];
  const monthArray = [];
  const yearArray = [];
  for (const [key, value] of Object.entries(localStorage)) {
    const todos = JSON.parse(value);
    for (const todo of todos) {
      const DATE_IN_MILLISECONDS = Math.abs(
        Date.now() - new Date(todo["date"])
      );
      switch (true) {
        case DATE_IN_MILLISECONDS < _time_constants__WEBPACK_IMPORTED_MODULE_0__.MS_IN_DAY:
          todayArray.push(todo);
        case DATE_IN_MILLISECONDS < _time_constants__WEBPACK_IMPORTED_MODULE_0__.MS_IN_WEEK:
          weekArray.push(todo);
        case DATE_IN_MILLISECONDS < _time_constants__WEBPACK_IMPORTED_MODULE_0__.MS_IN_MONTH:
          monthArray.push(todo);
        case DATE_IN_MILLISECONDS < _time_constants__WEBPACK_IMPORTED_MODULE_0__.MS_IN_YEAR:
          yearArray.push(todo);
      }
    }
  }
  return [todayArray, weekArray, monthArray, yearArray];
}


/***/ }),

/***/ "./src/scripts/clear-project.js":
/*!**************************************!*\
  !*** ./src/scripts/clear-project.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearProject)
/* harmony export */ });
function clearProject() {
  const article = document.querySelector("article");
  const main = document.querySelector("main");
  main.removeChild(article);
}


/***/ }),

/***/ "./src/scripts/create-projects-list.js":
/*!*********************************************!*\
  !*** ./src/scripts/create-projects-list.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectsList)
/* harmony export */ });
/* harmony import */ var _favorite_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-counter */ "./src/scripts/favorite-counter.js");
/* harmony import */ var _toggle_aside_article_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle-aside-article-classes */ "./src/scripts/toggle-aside-article-classes.js");
/* harmony import */ var _update_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-project */ "./src/scripts/update-project.js");
/* harmony import */ var _update_projects_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update-projects-list */ "./src/scripts/update-projects-list.js");
/* harmony import */ var _validate_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validate-todo */ "./src/scripts/validate-todo.js");






function createProjectsList() {
  const projectNames = document.querySelector("#project-names");
  (0,_favorite_counter__WEBPACK_IMPORTED_MODULE_0__["default"])();

  for (const key of Object.keys(localStorage)) {
    const div = document.createElement("div");
    div.classList.add("project-name");
    const button = document.createElement("button");
    const p = document.createElement("p");
    button.class = "project";
    p.class = `tasks-count-${key}`;
    projectNames.append(div);
    div.append(button, p);
    button.textContent = key;
    p.textContent = JSON.parse(localStorage[key]).length;

    button.addEventListener("click", () => {
      (0,_update_project__WEBPACK_IMPORTED_MODULE_2__["default"])(`${key}`);
      (0,_validate_todo__WEBPACK_IMPORTED_MODULE_4__["default"])();
      (0,_update_projects_list__WEBPACK_IMPORTED_MODULE_3__["default"])();
      (0,_toggle_aside_article_classes__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });
  }
}


/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   data: () => (/* binding */ data),
/* harmony export */   "default": () => (/* binding */ interpretData)
/* harmony export */ });
/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ "./src/scripts/add-todo.js");


const data = {
  events: [
    {
      title: "Birthday",
      description: "Happy birthday to me",
      date: "2024-08-14",
      priority: "Low",
      favorite: true,
      checked: false,
    },
    {
      title: "Physics Exam",
      description: "Final year A Level exam",
      date: "2024-05-25",
      priority: "High",
      favorite: false,
      checked: true,
    },
    {
      title: "Coding Workshop",
      description: "Participating in a JavaScript workshop",
      date: "2024-09-05",
      priority: "Mid",
      favorite: false,
      checked: false,
    },
    {
      title: "Hackathon",
      description: "Attending a local hackathon",
      date: "2024-11-11",
      priority: "Low",
      favorite: true,
      checked: false,
    },
    {
      title: "Project Deadline",
      description: "Submission deadline for personal project",
      date: "2024-11-30",
      priority: "Mid",
      favorite: false,
      checked: true,
    },
    {
      title: "Summer Barbecue Party",
      description: "Enjoying a summer barbecue with friends",
      date: "2024-07-20",
      priority: "Medium",
      favorite: false,
      checked: false,
    },
  ],
  learning: [
    {
      title: "Website Launch",
      description: "Launching my personal project website",
      date: "2024-06-30",
      priority: "Low",
      project: "Learning",
      favorite: true,
      checked: false,
    },
    {
      title: "Maths Tutorial",
      description: "Attending advanced calculus session",
      date: "2024-03-15",
      priority: "High",
      project: "Learning",
      favorite: false,
      checked: true,
    },
    {
      title: "JavaScript Course",
      description: "Starting an advanced JavaScript course",
      date: "2024-02-01",
      priority: "Low",
      project: "Learning",
      favorite: true,
      checked: false,
    },
    {
      title: "Physics Conference",
      description: "Presenting at a physics conference",
      date: "2024-08-22",
      priority: "Low",
      project: "Learning",
      favorite: false,
      checked: true,
    },
    {
      title: "Group Study",
      description: "Group study session for finals",
      date: "2024-06-03",
      priority: "Mid",
      project: "Learning",
      favorite: false,
      checked: true,
    },
    {
      title: "Online Webinar",
      description: "Attending a webinar on web development",
      date: "2024-10-18",
      priority: "Low",
      project: "Learning",
      favorite: true,
      checked: false,
    },
  ],
  leisure: [
    {
      title: "Science Fair",
      description: "Participating in regional science fair",
      date: "2024-04-20",
      priority: "Low",
      project: "Leisure",
      favorite: false,
      checked: true,
    },
    {
      title: "Family Trip",
      description: "Weekend getaway with family",
      date: "2024-07-10",
      priority: "Low",
      project: "Leisure",
      favorite: true,
      checked: false,
    },
    {
      title: "Movie Marathon",
      description: "Hosting a movie night with friends",
      date: "2024-12-24",
      priority: "Mid",
      project: "Leisure",
      favorite: true,
      checked: false,
    },
    {
      title: "Beach Day",
      description: "Day trip to the beach",
      date: "2024-08-15",
      priority: "Low",
      project: "Leisure",
      favorite: false,
      checked: false,
    },
    {
      title: "Book Club Meeting",
      description: "Monthly book club gathering",
      date: "2024-01-05",
      priority: "Mid",
      project: "Leisure",
      favorite: true,
      checked: true,
    },
    {
      title: "Gaming Tournament",
      description: "Participating in a local gaming event",
      date: "2024-03-17",
      priority: "Low",
      project: "Leisure",
      favorite: false,
      checked: false,
    },
  ],
  fitness: [
    {
      title: "Gym Membership",
      description: "Starting a new gym membership",
      date: "2024-01-02",
      priority: "Low",
      favorite: false,
      checked: true,
    },
    {
      title: "Half Marathon",
      description: "Running in a local half marathon",
      date: "2024-04-16",
      priority: "High",
      favorite: true,
      checked: false,
    },
    {
      title: "Yoga Workshop",
      description: "Attending a weekend yoga retreat",
      date: "2024-07-21",
      priority: "Low",
      favorite: false,
      checked: true,
    },
    {
      title: "Bike Race",
      description: "Competing in a charity bike race",
      date: "2024-09-03",
      priority: "High",
      favorite: true,
      checked: true,
    },
    {
      title: "Hiking Trip",
      description: "Hiking trip with friends",
      date: "2024-05-28",
      priority: "Low",
      favorite: false,
      checked: false,
    },
    {
      title: "Swimming Lessons",
      description: "Starting swimming lessons",
      date: "2024-08-12",
      priority: "Low",
      favorite: true,
      checked: true,
    },
  ],
  work: [
    {
      title: "Project Presentation",
      description: "Presenting a major project at work",
      date: "2024-02-10",
      priority: "Mid",
      favorite: true,
      checked: true,
    },
    {
      title: "Team Building",
      description: "Team building activity",
      date: "2024-05-26",
      priority: "Low",
      favorite: false,
      checked: true,
    },
    {
      title: "Client Meeting",
      description: "Meeting with an important client",
      date: "2024-07-15",
      priority: "Mid",
      favorite: true,
      checked: false,
    },
    {
      title: "Annual Review",
      description: "Annual performance review",
      date: "2024-10-20",
      priority: "High",
      favorite: false,
      checked: true,
    },
    {
      title: "Conference Attendance",
      description: "Attending an industry conference",
      date: "2024-03-11",
      priority: "Low",
      favorite: true,
      checked: false,
    },
    {
      title: "Deadline for Report",
      description: "Submission deadline for quarterly report",
      date: "2024-01-31",
      priority: "Low",
      favorite: false,
      checked: true,
    },
  ],
};

function interpretData(data) {
  for (const [key, value] of Object.entries(data)) {
    for (const todo of value) {
      (0,_add_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(
        `${key}`,
        todo["title"],
        todo["description"],
        todo["date"],
        todo["priority"],
        todo["favorite"],
        todo["checked"]
      );
    }
  }
}


/***/ }),

/***/ "./src/scripts/dom-dates-btns.js":
/*!***************************************!*\
  !*** ./src/scripts/dom-dates-btns.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ domDatesBtns)
/* harmony export */ });
/* harmony import */ var _all_today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-today */ "./src/scripts/all-today.js");
/* harmony import */ var _toggle_aside_article_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle-aside-article-classes */ "./src/scripts/toggle-aside-article-classes.js");
/* harmony import */ var _update_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-project */ "./src/scripts/update-project.js");




function domDatesBtns() {
  const datesBtnsArray = Array.from(document.querySelectorAll(".dates button"));

  for (let i = 0; i < 4; i++) {
    datesBtnsArray[i].addEventListener("click", () => {
      (0,_update_project__WEBPACK_IMPORTED_MODULE_2__["default"])(
        JSON.stringify((0,_all_today__WEBPACK_IMPORTED_MODULE_0__["default"])()[i]),
        datesBtnsArray[i].textContent
      );
      (0,_toggle_aside_article_classes__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });
  }
}


/***/ }),

/***/ "./src/scripts/dom-favorite-btn.js":
/*!*****************************************!*\
  !*** ./src/scripts/dom-favorite-btn.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ domFavoriteBtn)
/* harmony export */ });
/* harmony import */ var _all_favorite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-favorite */ "./src/scripts/all-favorite.js");
/* harmony import */ var _toggle_aside_article_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle-aside-article-classes */ "./src/scripts/toggle-aside-article-classes.js");
/* harmony import */ var _update_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-project */ "./src/scripts/update-project.js");




function domFavoriteBtn() {
  const favoriteBtn = document.querySelector(".favorite");
  favoriteBtn.addEventListener("click", () => {
    (0,_update_project__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_all_favorite__WEBPACK_IMPORTED_MODULE_0__["default"])(), "in favorite");
    (0,_toggle_aside_article_classes__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
}


/***/ }),

/***/ "./src/scripts/dom-todo-create.js":
/*!****************************************!*\
  !*** ./src/scripts/dom-todo-create.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/scripts/index.js");
/* harmony import */ var _remove_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-todo */ "./src/scripts/remove-todo.js");
/* harmony import */ var _update_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-project */ "./src/scripts/update-project.js");
/* harmony import */ var _toggle_important__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle-important */ "./src/scripts/toggle-important.js");
/* harmony import */ var _update_projects_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-projects-list */ "./src/scripts/update-projects-list.js");
/* harmony import */ var _update_todo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-todo */ "./src/scripts/update-todo.js");
/* harmony import */ var _update_dates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-dates */ "./src/scripts/update-dates.js");
/* harmony import */ var _toggle_checked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toggle-checked */ "./src/scripts/toggle-checked.js");









const domTodoCreate = (
  parent,
  todoTitle,
  todoDescription,
  todoDate,
  project,
  id,
  isNotProject,
  priority,
  checked
) => {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const pDescription = document.createElement("p");
  const pDate = document.createElement("p");
  const imgFavorite = document.createElement("img");
  const imgDelete = document.createElement("img");
  const imgEdit = document.createElement("img");
  const imgCheck = document.createElement("img");
  div.classList.add("todo");
  div.classList.add(`${priority}-priority`);
  h2.classList.add("title");
  pDescription.classList.add("description");
  pDate.classList.add("date");
  imgFavorite.classList.add("favorite");
  imgDelete.classList.add("delete");
  imgEdit.classList.add("edit");
  imgCheck.classList.add("check");

  imgFavorite.src = _index__WEBPACK_IMPORTED_MODULE_0__.images["star-fill.svg"];
  imgCheck.src = _index__WEBPACK_IMPORTED_MODULE_0__.images["checkbox-checked.svg"];

  try {
    if (JSON.parse(localStorage[`${project}`])[id]["favorite"] === false) {
      imgFavorite.src = _index__WEBPACK_IMPORTED_MODULE_0__.images["star.svg"];
    }
  } catch (err) {}
  try {
    if (JSON.parse(localStorage[`${project}`])[id]["checked"] === false) {
      imgCheck.src = _index__WEBPACK_IMPORTED_MODULE_0__.images["checkbox-empty.svg"];
    }
  } catch (err) {}

  imgEdit.src = _index__WEBPACK_IMPORTED_MODULE_0__.images["edit.svg"];

  imgDelete.src = _index__WEBPACK_IMPORTED_MODULE_0__.images["delete.svg"];

  h2.textContent = `${todoTitle}`;
  pDescription.textContent = `${todoDescription}`;
  pDate.textContent = `${todoDate}`;
  parent.prepend(div);

  if (isNotProject) {
    div.append(h2, pDescription, pDate);
  } else {
    if (checked) {
      h2.classList.add("checked");
      pDescription.classList.add("checked");
      pDate.classList.add("checked");
      div.classList.add("checked-todo");
      div.append(h2, pDescription, pDate, imgFavorite, imgCheck, imgDelete);
    } else {
      div.append(
        h2,
        pDescription,
        pDate,
        imgFavorite,
        imgCheck,
        imgEdit,
        imgDelete
      );
    }
  }

  imgDelete.addEventListener("click", () => {
    (0,_remove_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(`${project}`, id);
    (0,_update_projects_list__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_update_project__WEBPACK_IMPORTED_MODULE_2__["default"])(project);
    (0,_update_dates__WEBPACK_IMPORTED_MODULE_6__["default"])();
  });
  imgFavorite.addEventListener("click", () => {
    (0,_toggle_important__WEBPACK_IMPORTED_MODULE_3__["default"])(`${project}`, id);
    (0,_update_project__WEBPACK_IMPORTED_MODULE_2__["default"])(project);
    (0,_update_projects_list__WEBPACK_IMPORTED_MODULE_4__["default"])();
  });
  imgCheck.addEventListener("click", () => {
    (0,_toggle_checked__WEBPACK_IMPORTED_MODULE_7__["default"])(`${project}`, id);
    (0,_update_project__WEBPACK_IMPORTED_MODULE_2__["default"])(project);
    (0,_update_projects_list__WEBPACK_IMPORTED_MODULE_4__["default"])();
  });
  imgEdit.addEventListener("click", editState1);

  function editState1() {
    // reload page before state 2 is active

    const h2 = div.querySelector("h2");
    const pDescription = div.querySelector("p.description");
    const pDate = div.querySelector("p.date");
    const savedTitle = h2.textContent;
    const savedDescription = pDescription.textContent;
    const savedDate = pDate.textContent;

    div.removeChild(h2);
    div.removeChild(pDescription);
    div.removeChild(pDate);

    const inputPriority = document.createElement("div");
    const inputLow = document.createElement("input");
    const inputMid = document.createElement("input");
    const inputHigh = document.createElement("input");
    const inputLowLabel = document.createElement("p");
    const inputMidLabel = document.createElement("p");
    const inputHighLabel = document.createElement("p");

    imgEdit.id = "test";
    inputPriority.classList.add("priority-div");
    inputLow.name = "priority";
    inputMid.name = "priority";
    inputHigh.name = "priority";
    inputLow.type = "radio";
    inputMid.type = "radio";
    inputHigh.type = "radio";
    inputLow.value = "Low";
    inputMid.value = "Mid";
    inputHigh.value = "High";
    inputLowLabel.textContent = "Low";
    inputMidLabel.textContent = "Mid";
    inputHighLabel.textContent = "High";
    inputPriority.append(
      inputLow,
      inputLowLabel,
      inputMid,
      inputMidLabel,
      inputHigh,
      inputHighLabel
    );

    if (div.classList.contains("Mid-priority")) {
      inputMid.checked = true;
    } else if (div.classList.contains("High-priority")) {
      inputHigh.checked = true;
    } else {
      inputLow.checked = true;
    }

    if (div.classList.contains("Low-priority")) {
      div.classList.remove("Low-priority");
    }
    if (div.classList.contains("Mid-priority")) {
      div.classList.remove("Mid-priority");
    }
    if (div.classList.contains("High-priority")) {
      div.classList.remove("High-priority");
    }

    const inputTitle = document.createElement("input");
    const inputDescription = document.createElement("input");
    const inputDate = document.createElement("input");
    inputTitle.placeholder = "Please enter title";
    inputDescription.placeholder = "Enter description of your todo";
    inputDate.placeholder = "What was the date?";
    inputDate.type = "Date";
    inputTitle.type = "text";
    inputDescription.maxLength = "25";
    inputTitle.maxLength = "16";

    inputTitle.classList.add("title");
    inputDescription.classList.add("description");
    inputDate.classList.add("date");

    inputTitle.value = savedTitle;
    inputDescription.value = savedDescription;
    inputDate.value = savedDate;

    div.append(inputTitle, inputDescription, inputDate, inputPriority);
    imgDelete.classList.toggle("hidden");
    imgFavorite.classList.toggle("hidden");
    imgCheck.classList.toggle("hidden");

    // stays here
    imgEdit.removeEventListener("click", editState1);
    imgEdit.addEventListener("click", editState2);
    imgEdit.src = _index__WEBPACK_IMPORTED_MODULE_0__.images["finished.svg"];
  }

  function editState2() {
    imgEdit.id = "";
    const inputPriority = document.querySelector(".priority-div");

    const radioButtonsArray = Array.from(
      inputPriority.querySelectorAll("input")
    );

    let checkedInput;

    for (const radioButton in radioButtonsArray) {
      if (radioButtonsArray[radioButton].checked) {
        checkedInput = radioButtonsArray[radioButton].value;
      }
    }

    div.removeChild(inputPriority);

    const inputTitle = div.querySelector(".title");
    const inputDescription = div.querySelector(".description");
    const inputDate = div.querySelector(".date");
    div.classList.add(`${checkedInput}-priority`);

    if (inputTitle.value === "") {
      const temporary = inputDescription.value;
      inputDescription.value = "";
      inputDescription.placeholder = "Please enter a title";
      inputDescription.classList.toggle("red-text");
      setTimeout(() => {
        inputDescription.classList.toggle("red-text");
        inputDescription.value = temporary;
      }, 2000);
    } else if (inputDescription.value === "") {
      const temporary = inputDescription.value;
      inputDescription.value = "";
      inputDescription.placeholder = "Please enter a description";
      inputDescription.classList.toggle("red-text");
      setTimeout(() => {
        inputDescription.classList.toggle("red-text");
        inputDescription.value = temporary;
      }, 2000);
    } else if (inputDate.value === "") {
      const temporary = inputDescription.value;
      inputDescription.value = "";
      inputDescription.placeholder = "Please enter a date";
      inputDescription.classList.toggle("red-text");
      setTimeout(() => {
        inputDescription.classList.toggle("red-text");
        inputDescription.value = temporary;
      }, 2000);
    } else {
      (0,_update_todo__WEBPACK_IMPORTED_MODULE_5__["default"])(
        project,
        id,
        inputTitle.value,
        inputDescription.value,
        inputDate.value,
        checkedInput
      );

      const h2 = document.createElement("h2");
      const pDescription = document.createElement("p");
      const pDate = document.createElement("p");

      h2.textContent = inputTitle.value;
      pDescription.textContent = inputDescription.value;
      pDate.textContent = inputDate.value;

      h2.classList.add("title");
      pDescription.classList.add("description");
      pDate.classList.add("date");

      div.removeChild(inputTitle);
      div.removeChild(inputDescription);
      div.removeChild(inputDate);
      div.append(h2, pDescription, pDate);

      imgEdit.src = _index__WEBPACK_IMPORTED_MODULE_0__.images["edit.svg"];
      imgDelete.classList.toggle("hidden");
      imgFavorite.classList.toggle("hidden");
      imgCheck.classList.toggle("hidden");
      imgEdit.removeEventListener("click", editState2);
      imgEdit.addEventListener("click", editState1);
      (0,_update_dates__WEBPACK_IMPORTED_MODULE_6__["default"])();
    }
  }

  return imgEdit;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domTodoCreate);


/***/ }),

/***/ "./src/scripts/favorite-counter.js":
/*!*****************************************!*\
  !*** ./src/scripts/favorite-counter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFavoriteCounter)
/* harmony export */ });
/* harmony import */ var _all_favorite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-favorite */ "./src/scripts/all-favorite.js");


function createFavoriteCounter() {
  const favoriteCounter = document.createElement("p");
  favoriteCounter.classList.add("favorite-counter");
  const favoriteDiv = document.querySelector("#favorite-div");
  favoriteDiv.append(favoriteCounter);
  favoriteCounter.textContent = JSON.parse((0,_all_favorite__WEBPACK_IMPORTED_MODULE_0__["default"])()).length;
}


/***/ }),

/***/ "./src/scripts/find-last-edit.js":
/*!***************************************!*\
  !*** ./src/scripts/find-last-edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ findLastEdit)
/* harmony export */ });
function findLastEdit() {
  return document.querySelector("article > .todo:nth-child(2) > .edit");
}


/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   images: () => (/* binding */ images),
/* harmony export */   importAllImages: () => (/* binding */ importAllImages)
/* harmony export */ });
/* harmony import */ var _populate_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populate-project */ "./src/scripts/populate-project.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/scripts/data.js");
/* harmony import */ var _create_projects_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-projects-list */ "./src/scripts/create-projects-list.js");
/* harmony import */ var _all_favorite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-favorite */ "./src/scripts/all-favorite.js");
/* harmony import */ var _dom_favorite_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-favorite-btn */ "./src/scripts/dom-favorite-btn.js");
/* harmony import */ var _dom_dates_btns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom-dates-btns */ "./src/scripts/dom-dates-btns.js");
/* harmony import */ var _update_dates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-dates */ "./src/scripts/update-dates.js");
/* harmony import */ var _theme_switcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-switcher */ "./src/scripts/theme-switcher.js");
/* harmony import */ var _open_aside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./open-aside */ "./src/scripts/open-aside.js");
/* harmony import */ var _add_projects_btn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-projects-btn */ "./src/scripts/add-projects-btn.js");


function importAllCSS(r) {
  r.keys().forEach(r);
}
importAllCSS(__webpack_require__("./src/styles sync recursive \\.css$"));

function importAllImages(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAllImages(
  __webpack_require__("./src/assets/img sync \\.(png%7Csvg%7Cjpe?g%7Cgif)$")
);

// other stuff













const startup = (() => {
  if (localStorage.length === 0) {
    (0,_data__WEBPACK_IMPORTED_MODULE_1__["default"])(_data__WEBPACK_IMPORTED_MODULE_1__.data);
  }
  (0,_populate_project__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_all_favorite__WEBPACK_IMPORTED_MODULE_3__["default"])(), "in favorite");
  (0,_create_projects_list__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_add_projects_btn__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_dom_favorite_btn__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_dom_dates_btns__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_update_dates__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_theme_switcher__WEBPACK_IMPORTED_MODULE_7__.themeSwitcher)();
  (0,_open_aside__WEBPACK_IMPORTED_MODULE_8__["default"])();
})();


/***/ }),

/***/ "./src/scripts/open-aside.js":
/*!***********************************!*\
  !*** ./src/scripts/open-aside.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ openAside),
/* harmony export */   shouldBeOpen: () => (/* binding */ shouldBeOpen)
/* harmony export */ });
/* harmony import */ var _toggle_aside_article_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle-aside-article-classes */ "./src/scripts/toggle-aside-article-classes.js");


function shouldBeOpen() {
  return shouldAddClass;
}

function openAside() {
  const menuBtn = document.querySelector(".menu");
  menuBtn.addEventListener("click", _toggle_aside_article_classes__WEBPACK_IMPORTED_MODULE_0__["default"]);
}


/***/ }),

/***/ "./src/scripts/populate-project.js":
/*!*****************************************!*\
  !*** ./src/scripts/populate-project.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateDomProject)
/* harmony export */ });
/* harmony import */ var _add_todo_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo-button */ "./src/scripts/add-todo-button.js");
/* harmony import */ var _dom_todo_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-todo-create */ "./src/scripts/dom-todo-create.js");
/* harmony import */ var _update_projects_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-projects-list */ "./src/scripts/update-projects-list.js");




function populateDomProject(project, state) {
  const main = document.querySelector("main");
  const article = document.createElement("article");
  main.append(article);
  let myProj;
  let isNotProject = false;
  try {
    myProj = JSON.parse(localStorage[`${project}`]);
  } catch (err) {
    myProj = JSON.parse(project);
    isNotProject = true;
  }

  let i = 0;

  if (myProj.length === 0) {
    const main = document.querySelector("main");
    const article = document.querySelector("article");
    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add("delete-project");

    if (!isNotProject) {
      deleteProjectButton.textContent = "delete project";
      article.append(deleteProjectButton);
      deleteProjectButton.addEventListener("click", () => {
        localStorage.removeItem(project);
        (0,_update_projects_list__WEBPACK_IMPORTED_MODULE_2__["default"])();
        main.removeChild(article);
        populateDomProject("events");
      });
    } else {
      deleteProjectButton.textContent = `Looks like you have nothing set for ${state.toLowerCase()}!`;
      article.append(deleteProjectButton);
    }
  }

  for (const todo of myProj) {
    (0,_dom_todo_create__WEBPACK_IMPORTED_MODULE_1__["default"])(
      article,
      todo["title"],
      todo["description"],
      todo["date"],
      project,
      i,
      isNotProject,
      todo["priority"],
      todo["checked"]
    );

    i++;
  }
  if (!isNotProject) {
    (0,_add_todo_button__WEBPACK_IMPORTED_MODULE_0__["default"])(article, project);
  }
}


/***/ }),

/***/ "./src/scripts/remove-projects-list.js":
/*!*********************************************!*\
  !*** ./src/scripts/remove-projects-list.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeProjectsList)
/* harmony export */ });
function removeProjectsList() {
  const projectNames = document.querySelector("#project-names");
  const favoriteCounter = document.querySelector(".favorite-counter");
  const favoriteDiv = document.querySelector("#favorite-div");
  const projectNameArray = Array.from(
    document.querySelectorAll(".project-name")
  );
  for (const node of projectNameArray) {
    projectNames.removeChild(node);
  }
  favoriteDiv.removeChild(favoriteCounter);
}


/***/ }),

/***/ "./src/scripts/remove-todo.js":
/*!************************************!*\
  !*** ./src/scripts/remove-todo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeTodo)
/* harmony export */ });
function removeTodo(projectName, idToRemove) {
  const temp = JSON.parse(localStorage[`${projectName}`]);
  temp.splice(idToRemove, 1);
  localStorage[`${projectName}`] = JSON.stringify(temp);
}


/***/ }),

/***/ "./src/scripts/theme-switcher.js":
/*!***************************************!*\
  !*** ./src/scripts/theme-switcher.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   themeSwitcher: () => (/* binding */ themeSwitcher)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/scripts/index.js");


const themeSwitcher = () => {
  const themeIcon = document.querySelector("#theme");
  const body = document.querySelector("body");
  let theme = "light";

  try {
    if (sessionStorage["theme"] === "dark") {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      themeIcon.addEventListener("click", themeIconState2);
    }
    if (sessionStorage["theme"] === "light") {
      body.classList.add("light-theme");
      body.classList.remove("dark-theme");
      themeIcon.addEventListener("click", themeIconState1);
    }
  } catch {
    themeIcon.addEventListener("click", themeIconState1);
  }

  function themeIconState1() {
    themeIcon.removeEventListener("click", themeIconState1);
    themeIcon.addEventListener("click", themeIconState2);
    themeIcon.src = ___WEBPACK_IMPORTED_MODULE_0__.images["dark-theme.svg"];
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
    sessionStorage["theme"] = "dark";
  }

  function themeIconState2() {
    themeIcon.removeEventListener("click", themeIconState2);
    themeIcon.addEventListener("click", themeIconState1);
    themeIcon.src = ___WEBPACK_IMPORTED_MODULE_0__.images["light-theme.svg"];
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");
    sessionStorage["theme"] = "light";
  }

  return theme;
};




/***/ }),

/***/ "./src/scripts/time-constants.js":
/*!***************************************!*\
  !*** ./src/scripts/time-constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MS_IN_DAY: () => (/* binding */ MS_IN_DAY),
/* harmony export */   MS_IN_MONTH: () => (/* binding */ MS_IN_MONTH),
/* harmony export */   MS_IN_WEEK: () => (/* binding */ MS_IN_WEEK),
/* harmony export */   MS_IN_YEAR: () => (/* binding */ MS_IN_YEAR)
/* harmony export */ });


const MS_IN_DAY = 86400 * 1000;
const MS_IN_WEEK = MS_IN_DAY * 7;
const MS_IN_MONTH = MS_IN_WEEK * 4;
const MS_IN_YEAR = MS_IN_MONTH * 12;


/***/ }),

/***/ "./src/scripts/toggle-aside-article-classes.js":
/*!*****************************************************!*\
  !*** ./src/scripts/toggle-aside-article-classes.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleAsideArticleClasses)
/* harmony export */ });
function toggleAsideArticleClasses() {
  const menuBtn = document.querySelector(".menu");
  const aside = document.querySelector("aside");
  const main = document.querySelector("main");
  const article = document.querySelector("body article");

  main.classList.toggle("main-closed-aside");
  aside.classList.toggle("aside-closed-aside");
  main.classList.toggle("main-open-aside");
  aside.classList.toggle("aside-open-aside");
  article.classList.toggle("body-open-aside");

  if (main.classList.contains("main-closed-aside")) {
    article.classList.remove("body-open-aside");
  }
}


/***/ }),

/***/ "./src/scripts/toggle-checked.js":
/*!***************************************!*\
  !*** ./src/scripts/toggle-checked.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleChecked)
/* harmony export */ });
function toggleChecked(projectName, idToToggle) {
  const temp = JSON.parse(localStorage[`${projectName}`]);

  temp[idToToggle]["checked"] = !JSON.parse(temp[idToToggle]["checked"]);
  localStorage[projectName] = JSON.stringify(temp);
}


/***/ }),

/***/ "./src/scripts/toggle-important.js":
/*!*****************************************!*\
  !*** ./src/scripts/toggle-important.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleImportant)
/* harmony export */ });
function toggleImportant(projectName, idToToggle) {
  const temp = JSON.parse(localStorage[`${projectName}`]);

  temp[idToToggle]["favorite"] = !JSON.parse(temp[idToToggle]["favorite"]);

  localStorage[projectName] = JSON.stringify(temp);
}


/***/ }),

/***/ "./src/scripts/update-dates.js":
/*!*************************************!*\
  !*** ./src/scripts/update-dates.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateDates)
/* harmony export */ });
/* harmony import */ var _all_today__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-today */ "./src/scripts/all-today.js");


function updateDates() {
  const datesArray = Array.from(document.querySelectorAll(".dates > *"));

  const totalDates = (0,_all_today__WEBPACK_IMPORTED_MODULE_0__["default"])();
  // Removing each date p tracker
  for (const dates of datesArray) {
    const dateTracker = dates.querySelector("p");
    dates.removeChild(dateTracker);
  }

  // Adding each date p tracker
  for (let i = 0; i < datesArray.length; i++) {
    const domDate = document.createElement("p");
    datesArray[i].append(domDate);
    domDate.textContent = `${totalDates[i].length}`;
  }
}


/***/ }),

/***/ "./src/scripts/update-project.js":
/*!***************************************!*\
  !*** ./src/scripts/update-project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var _clear_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear-project */ "./src/scripts/clear-project.js");
/* harmony import */ var _populate_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populate-project */ "./src/scripts/populate-project.js");



function updateProject(proj, state) {
  (0,_clear_project__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_populate_project__WEBPACK_IMPORTED_MODULE_1__["default"])(proj, state);
}


/***/ }),

/***/ "./src/scripts/update-projects-list.js":
/*!*********************************************!*\
  !*** ./src/scripts/update-projects-list.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateProjectsList)
/* harmony export */ });
/* harmony import */ var _create_projects_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-projects-list */ "./src/scripts/create-projects-list.js");
/* harmony import */ var _remove_projects_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove-projects-list */ "./src/scripts/remove-projects-list.js");
/* harmony import */ var _update_dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-dates */ "./src/scripts/update-dates.js");




function updateProjectsList() {
  (0,_remove_projects_list__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_create_projects_list__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_update_dates__WEBPACK_IMPORTED_MODULE_2__["default"])();
}


/***/ }),

/***/ "./src/scripts/update-todo.js":
/*!************************************!*\
  !*** ./src/scripts/update-todo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateTodo)
/* harmony export */ });
function updateTodo(
  projectName,
  idToUpdate,
  title,
  description,
  date,
  priority
) {
  let temp;
  try {
    temp = JSON.parse(localStorage[`${projectName}`]);
  } catch (err) {
    temp = JSON.parse(project);
  }

  const newTodo = {
    title,
    description,
    date,
    priority,
    favorite: temp[idToUpdate]["favorite"],
    checked: temp[idToUpdate]["checked"],
  };

  temp[idToUpdate] = newTodo;

  localStorage[projectName] = JSON.stringify(temp);
}


/***/ }),

/***/ "./src/scripts/validate-todo.js":
/*!**************************************!*\
  !*** ./src/scripts/validate-todo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateTodos)
/* harmony export */ });
function validateTodos() {
  for (const [key, value] of Object.entries(localStorage)) {
    let todos = JSON.parse(value);
    const indexesToRemove = [];
    for (const todo of todos) {
      const myArray = Object.values(todo);
      const doesInclude = myArray.includes("");
      if (doesInclude) {
        const indexToRemove = todos.indexOf(todo);
        indexesToRemove.push(indexToRemove);
      }
    }
    indexesToRemove.reverse();
    for (const index of indexesToRemove) {
      todos.splice(index, 1);
    }
    localStorage[key] = JSON.stringify(todos);
  }
}


/***/ }),

/***/ "./src/styles sync recursive \\.css$":
/*!*********************************!*\
  !*** ./src/styles/ sync \.css$ ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./background.css": "./src/styles/background.css",
	"./display.css": "./src/styles/display.css",
	"./hover.css": "./src/styles/hover.css",
	"./priority.css": "./src/styles/priority.css",
	"./reset.css": "./src/styles/reset.css",
	"./scrollbar.css": "./src/styles/scrollbar.css",
	"./style.css": "./src/styles/style.css",
	"./theme.css": "./src/styles/theme.css",
	"./todo.css": "./src/styles/todo.css",
	"./utility.css": "./src/styles/utility.css"
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

/***/ "./src/assets/img/checkbox-checked.svg":
/*!*********************************************!*\
  !*** ./src/assets/img/checkbox-checked.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "beba269c226a4f325754.svg";

/***/ }),

/***/ "./src/assets/img/checkbox-empty.svg":
/*!*******************************************!*\
  !*** ./src/assets/img/checkbox-empty.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9711ffe92c6770efd75d.svg";

/***/ }),

/***/ "./src/assets/img/dark-theme.svg":
/*!***************************************!*\
  !*** ./src/assets/img/dark-theme.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5ec4b3ecc166c1671c76.svg";

/***/ }),

/***/ "./src/assets/img/delete.svg":
/*!***********************************!*\
  !*** ./src/assets/img/delete.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b93eba7df9af3a4440c8.svg";

/***/ }),

/***/ "./src/assets/img/edit.svg":
/*!*********************************!*\
  !*** ./src/assets/img/edit.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9c1d0dcf9918d4367d56.svg";

/***/ }),

/***/ "./src/assets/img/finished.svg":
/*!*************************************!*\
  !*** ./src/assets/img/finished.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f5849afc9f32f8f347c2.svg";

/***/ }),

/***/ "./src/assets/img/light-theme.svg":
/*!****************************************!*\
  !*** ./src/assets/img/light-theme.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3aaef1693239048427d5.svg";

/***/ }),

/***/ "./src/assets/img/menu.svg":
/*!*********************************!*\
  !*** ./src/assets/img/menu.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0d3c31af19b9c297e945.svg";

/***/ }),

/***/ "./src/assets/img/star-fill.svg":
/*!**************************************!*\
  !*** ./src/assets/img/star-fill.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6c627543f6a9a5280af4.svg";

/***/ }),

/***/ "./src/assets/img/star.svg":
/*!*********************************!*\
  !*** ./src/assets/img/star.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0317b43c823307c0a1e0.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDL0IsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCaUM7O0FBRTFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFD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QTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEIyQztBQUNPOztBQUVuQztBQUNmLEVBQUUsMERBQVk7QUFDZCxFQUFFLDZEQUFnQjtBQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ053RDtBQUNBO0FBQ2Y7O0FBRTFCO0FBQ2YsRUFBRSxpRUFBa0I7QUFDcEIsRUFBRSxpRUFBa0I7QUFDcEIsRUFBRSx5REFBVztBQUNiOzs7Ozs7Ozs7Ozs7Ozs7O0FDUmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsWUFBWTtBQUNsRCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvYmFja2dyb3VuZC5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvZGlzcGxheS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvaG92ZXIuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzL3ByaW9yaXR5LmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvc2Nyb2xsYmFyLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvdGhlbWUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzL3RvZG8uY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzL3V0aWxpdHkuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy9iYWNrZ3JvdW5kLmNzcz8zNjE1Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzL2Rpc3BsYXkuY3NzPzZmOTIiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvaG92ZXIuY3NzP2NkZTQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvcHJpb3JpdHkuY3NzP2RiODMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzRjZmIiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvc2Nyb2xsYmFyLmNzcz85ZDNiIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzL3RoZW1lLmNzcz85YjdjIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzL3RvZG8uY3NzPzU0ZWUiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZXMvdXRpbGl0eS5jc3M/YzNjMyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvYXNzZXRzL2ltZy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q3N2ZyU3Q2pwZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvYWRkLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2FkZC1wcm9qZWN0cy1idG4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2FkZC10b2RvLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvYWRkLXRvZG8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2FsbC1mYXZvcml0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvYWxsLXRvZGF5LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9jbGVhci1wcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9jcmVhdGUtcHJvamVjdHMtbGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZG9tLWRhdGVzLWJ0bnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2RvbS1mYXZvcml0ZS1idG4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2RvbS10b2RvLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZmF2b3JpdGUtY291bnRlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvZmluZC1sYXN0LWVkaXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9vcGVuLWFzaWRlLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9wb3B1bGF0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy9yZW1vdmUtcHJvamVjdHMtbGlzdC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvcmVtb3ZlLXRvZG8uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL3RoZW1lLXN3aXRjaGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy90aW1lLWNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvdG9nZ2xlLWFzaWRlLWFydGljbGUtY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvdG9nZ2xlLWNoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL3RvZ2dsZS1pbXBvcnRhbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL3VwZGF0ZS1kYXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvdXBkYXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zY3JpcHRzL3VwZGF0ZS1wcm9qZWN0cy1saXN0LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2NyaXB0cy91cGRhdGUtdG9kby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NjcmlwdHMvdmFsaWRhdGUtdG9kby5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy8gc3luYyBcXC5jc3MkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTU4ZDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICA0M2RlZyxcbiAgICB2YXIoLS1iYWNrZ3JvdW5kLWdyYWRpZW50LTEpIDAlLFxuICAgIHZhcigtLWJhY2tncm91bmQtZ3JhZGllbnQtMikgNDYlLFxuICAgIHZhcigtLWJhY2tncm91bmQtZ3JhZGllbnQtMykgMTAwJVxuICApO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JhY2tncm91bmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6Qjs7Ozs7R0FLQztBQUNIXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE1OGQwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICA0M2RlZyxcXG4gICAgdmFyKC0tYmFja2dyb3VuZC1ncmFkaWVudC0xKSAwJSxcXG4gICAgdmFyKC0tYmFja2dyb3VuZC1ncmFkaWVudC0yKSA0NiUsXFxuICAgIHZhcigtLWJhY2tncm91bmQtZ3JhZGllbnQtMykgMTAwJVxcbiAgKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmhlYWRlciA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiA4MHB4IDFmciAvIDMzMHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcImhlYWRlciBoZWFkZXJcIlxuICAgIFwiYXNpZGUgIGFydGljbGVcIjtcbn1cblxuaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuYXNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdyaWQtYXJlYTogYXNpZGU7XG4gIGdhcDogdmFyKC0tZ2VuZXJpYy1zcGFjaW5nKTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuYXNpZGUgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNwcm9qZWN0LW5hbWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbiNwcm9qZWN0LW5hbWVzID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5hc2lkZSA+IGRpdiA+IHAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmFydGljbGUge1xuICBncmlkLWFyZWE6IGFydGljbGU7XG59XG5cbi5kYXRlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5kYXRlcyBwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmRhdGVzIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICBoZWFkZXIgaW1nW3NyY10ubWVudSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5tYWluLWNsb3NlZC1hc2lkZSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgIFwiaGVhZGVyIGhlYWRlclwiXG4gICAgICBcImFydGljbGUgYXJ0aWNsZVwiO1xuICB9XG4gIC5hc2lkZS1jbG9zZWQtYXNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWFpbi1vcGVuLWFzaWRlIHtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgXCJoZWFkZXIgaGVhZGVyXCJcbiAgICAgIFwiYXNpZGUgYXNpZGVcIjtcbiAgfVxuICAuYXNpZGUtb3Blbi1hc2lkZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5ib2R5LW9wZW4tYXNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9kaXNwbGF5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztFQUNuQzs7b0JBRWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0U7O3VCQUVtQjtFQUNyQjtFQUNBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0U7O21CQUVlO0VBQ2pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiA4MHB4IDFmciAvIDMzMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwiYXNpZGUgIGFydGljbGVcXFwiO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYXNpZGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ3JpZC1hcmVhOiBhc2lkZTtcXG4gIGdhcDogdmFyKC0tZ2VuZXJpYy1zcGFjaW5nKTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbmFzaWRlID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNwcm9qZWN0LW5hbWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNwcm9qZWN0LW5hbWVzID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmFzaWRlID4gZGl2ID4gcCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmFydGljbGUge1xcbiAgZ3JpZC1hcmVhOiBhcnRpY2xlO1xcbn1cXG5cXG4uZGF0ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5kYXRlcyBwIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmRhdGVzIGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICBoZWFkZXIgaW1nW3NyY10ubWVudSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG4gIC5tYWluLWNsb3NlZC1hc2lkZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgXFxcImFydGljbGUgYXJ0aWNsZVxcXCI7XFxuICB9XFxuICAuYXNpZGUtY2xvc2VkLWFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5tYWluLW9wZW4tYXNpZGUge1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgIFxcXCJhc2lkZSBhc2lkZVxcXCI7XFxuICB9XFxuICAuYXNpZGUtb3Blbi1hc2lkZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuYm9keS1vcGVuLWFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjdGhlbWUge1xuICBmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDg0JSkgc2F0dXJhdGUoNDQlKSBodWUtcm90YXRlKDIwOGRlZylcbiAgICBicmlnaHRuZXNzKDExOCUpIGNvbnRyYXN0KDEwMCUpIGRyb3Atc2hhZG93KDBweCA0cHggNXB4ICMwMDAwMDAyOSk7XG59XG5cbi8qIC5hZGQtdG9kby1idXR0b24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG59ICovXG5cbi5hZGQtdG9kby1idXR0b246aG92ZXIge1xuICAvKiBmb250LXNpemU6IDQuNXJlbTsgKi9cbiAgLyogY29sb3I6IHdoaXRlOyAqL1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmRlbGV0ZTpob3Zlcixcbi5mYXZvcml0ZTpob3Zlcixcbi5lZGl0OmhvdmVyLFxuLm1lbnU6aG92ZXIsXG4jdGhlbWU6aG92ZXIsXG4uYWRkLXRvZG8tYnV0dG9uOmhvdmVyLFxuLmNoZWNrOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGVsZXRlOmhvdmVyIHtcbiAgZmlsdGVyOiBpbnZlcnQoMjIlKSBzZXBpYSg4NyUpIHNhdHVyYXRlKDczODklKSBodWUtcm90YXRlKDM1N2RlZylcbiAgICBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDExNyUpO1xufVxuXG4uZmF2b3JpdGU6aG92ZXIsXG4uZWRpdDpob3Zlcixcbi5wcm9qZWN0LW5hbWUgPiBidXR0b246aG92ZXIsXG4uYWRkLXByb2plY3Q6aG92ZXIsXG4uZGF0ZXMgPiBkaXYgPiBidXR0b246aG92ZXIsXG4uY2hlY2s6aG92ZXIge1xuICBmaWx0ZXI6IGludmVydCg3MSUpIHNlcGlhKDI0JSkgc2F0dXJhdGUoNjg5NyUpIGh1ZS1yb3RhdGUoMmRlZylcbiAgICBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwNCUpO1xufVxuXG4ubWVudTpob3ZlciB7XG4gIGZpbHRlcjogaW52ZXJ0KDQ4JSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMzk0OCUpIGh1ZS1yb3RhdGUoMjMwZGVnKVxuICAgIGJyaWdodG5lc3MoODUlKSBjb250cmFzdCg4NiUpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hvdmVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO3NFQUNvRTtBQUN0RTs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBOzs7Ozs7O0VBT0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO21DQUNpQztBQUNuQzs7QUFFQTs7Ozs7O0VBTUU7bUNBQ2lDO0FBQ25DOztBQUVBO0VBQ0U7aUNBQytCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiN0aGVtZSB7XFxuICBmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDg0JSkgc2F0dXJhdGUoNDQlKSBodWUtcm90YXRlKDIwOGRlZylcXG4gICAgYnJpZ2h0bmVzcygxMTglKSBjb250cmFzdCgxMDAlKSBkcm9wLXNoYWRvdygwcHggNHB4IDVweCAjMDAwMDAwMjkpO1xcbn1cXG5cXG4vKiAuYWRkLXRvZG8tYnV0dG9uIHtcXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcXG59ICovXFxuXFxuLmFkZC10b2RvLWJ1dHRvbjpob3ZlciB7XFxuICAvKiBmb250LXNpemU6IDQuNXJlbTsgKi9cXG4gIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uZGVsZXRlOmhvdmVyLFxcbi5mYXZvcml0ZTpob3ZlcixcXG4uZWRpdDpob3ZlcixcXG4ubWVudTpob3ZlcixcXG4jdGhlbWU6aG92ZXIsXFxuLmFkZC10b2RvLWJ1dHRvbjpob3ZlcixcXG4uY2hlY2s6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDIyJSkgc2VwaWEoODclKSBzYXR1cmF0ZSg3Mzg5JSkgaHVlLXJvdGF0ZSgzNTdkZWcpXFxuICAgIGJyaWdodG5lc3MoMTAyJSkgY29udHJhc3QoMTE3JSk7XFxufVxcblxcbi5mYXZvcml0ZTpob3ZlcixcXG4uZWRpdDpob3ZlcixcXG4ucHJvamVjdC1uYW1lID4gYnV0dG9uOmhvdmVyLFxcbi5hZGQtcHJvamVjdDpob3ZlcixcXG4uZGF0ZXMgPiBkaXYgPiBidXR0b246aG92ZXIsXFxuLmNoZWNrOmhvdmVyIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDcxJSkgc2VwaWEoMjQlKSBzYXR1cmF0ZSg2ODk3JSkgaHVlLXJvdGF0ZSgyZGVnKVxcbiAgICBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwNCUpO1xcbn1cXG5cXG4ubWVudTpob3ZlciB7XFxuICBmaWx0ZXI6IGludmVydCg0OCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDM5NDglKSBodWUtcm90YXRlKDIzMGRlZylcXG4gICAgYnJpZ2h0bmVzcyg4NSUpIGNvbnRyYXN0KDg2JSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLkxvdy1wcmlvcml0eSB7XG4gIGJvcmRlci1sZWZ0OiAxMHB4IGdyb292ZSB2YXIoLS1wcmlvcml0eS1sb3cpO1xufVxuXG4uTWlkLXByaW9yaXR5IHtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggZ3Jvb3ZlIHZhcigtLXByaW9yaXR5LW1pZCk7XG59XG5cbi5IaWdoLXByaW9yaXR5IHtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggZ3Jvb3ZlIHZhcigtLXByaW9yaXR5LWhpZ2gpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3ByaW9yaXR5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuTG93LXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IGdyb292ZSB2YXIoLS1wcmlvcml0eS1sb3cpO1xcbn1cXG5cXG4uTWlkLXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IGdyb292ZSB2YXIoLS1wcmlvcml0eS1taWQpO1xcbn1cXG5cXG4uSGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogMTBweCBncm9vdmUgdmFyKC0tcHJpb3JpdHktaGlnaCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKDFlbSArIDAuNXJlbSk7XG4gIG1hcmdpbjogMDtcbn1cblxuaHRtbCB7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xufVxuXG5ib2R5IHtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG50ZXh0YXJlYTpub3QoW3Jvd3NdKSB7XG4gIG1pbi1oZWlnaHQ6IDEwZW07XG59XG5cbjp0YXJnZXQge1xuICBzY3JvbGwtbWFyZ2luLWJsb2NrOiA1ZXg7XG59XG5cbmltZyxcbnBpY3R1cmUsXG52aWRlbyxcbmNhbnZhcyxcbnN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICBmb250OiBpbmhlcml0O1xufVxuXG5wLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbn1cblxuI3Jvb3QsXG4jX19uZXh0IHtcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQTs7Ozs7OztFQU9FLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBsaW5lLWhlaWdodDogY2FsYygxZW0gKyAwLjVyZW0pO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxudGV4dGFyZWE6bm90KFtyb3dzXSkge1xcbiAgbWluLWhlaWdodDogMTBlbTtcXG59XFxuXFxuOnRhcmdldCB7XFxuICBzY3JvbGwtbWFyZ2luLWJsb2NrOiA1ZXg7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItY29sb3I6ICNhYWFhYWEgI2ZmZmZmZjtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xufVxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMDA7XG59XG5cbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWFhYWE7XG59XG5cbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNzE3MTtcbn1cblxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNzE3MTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Njcm9sbGJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICBzY3JvbGxiYXItY29sb3I6ICNhYWFhYWEgI2ZmZmZmZjtcXG59XFxuXFxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcXG59XFxuXFxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xcbn1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhci10cmFjazphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xcbn1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhO1xcbn1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzE3MTcxO1xcbn1cXG5cXG4qOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcxNzE3MTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tZ2VuZXJpYy1zcGFjaW5nOiAyMHB4O1xufVxuXG4ucmVkLXRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4jc21hbGwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjQ2OCk7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiU2luZ2xlIERheVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW1nIHtcbiAgZmlsdGVyOiBpbnZlcnQoMTAwKTtcbn1cblxuaGVhZGVyIC5tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4uY2hlY2tlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xufVxuXG4uY2hlY2tlZC10b2RvIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5oZWFkZXIgI3RoZW1lIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG5cbmhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlci1zdHlsZSk7XG59XG5cbmFzaWRlIHtcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ib3JkZXItc3R5bGUpO1xufVxuXG5hc2lkZSA+IGRpdjpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1nZW5lcmljLXNwYWNpbmcpO1xufVxuXG5hc2lkZSA+IGRpdiB7XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRlKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZ2VuZXJpYy1zcGFjaW5nKTtcbiAgcGFkZGluZzogMCB2YXIoLS1nZW5lcmljLXNwYWNpbmcpO1xufVxuXG5oMSB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBmb250LXNpemU6IDYwcHg7XG59XG5cbi5hZGQtcHJvamVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jcHJvamVjdC1uYW1lcyA+IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hc2lkZSBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubWFpbiB7XG4gIGhlaWdodDogMTAwMHB4O1xuICB3aWR0aDogMTMyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJhY2tncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDRweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLXN0eWxlKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcbiAgbWFpbiB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDY0LCA2NCwgNjQsIDAuMik7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLHFDQUFxQztFQUNyQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlDQUFpQztFQUNuQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tZ2VuZXJpYy1zcGFjaW5nOiAyMHB4O1xcbn1cXG5cXG4ucmVkLXRleHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgcGFkZGluZzogNHB4O1xcbn1cXG5cXG4jc21hbGwtdGV4dCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjQ2OCk7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG59XFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlNpbmdsZSBEYXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5pbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTAwKTtcXG59XFxuXFxuaGVhZGVyIC5tZW51IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogNTBweDtcXG59XFxuXFxuLmNoZWNrZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xcbn1cXG5cXG4uY2hlY2tlZC10b2RvIHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaGVhZGVyICN0aGVtZSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogNTBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlci1zdHlsZSk7XFxufVxcblxcbmFzaWRlIHtcXG4gIGJvcmRlci1yaWdodDogdmFyKC0tYm9yZGVyLXN0eWxlKTtcXG59XFxuXFxuYXNpZGUgPiBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIG1hcmdpbi10b3A6IHZhcigtLWdlbmVyaWMtc3BhY2luZyk7XFxufVxcblxcbmFzaWRlID4gZGl2IHtcXG4gIHdpZHRoOiA4MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkZSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1nZW5lcmljLXNwYWNpbmcpO1xcbiAgcGFkZGluZzogMCB2YXIoLS1nZW5lcmljLXNwYWNpbmcpO1xcbn1cXG5cXG5oMSB7XFxuICBtYXJnaW4tbGVmdDogNTBweDtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI3Byb2plY3QtbmFtZXMgPiBkaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmFzaWRlIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5tYWluIHtcXG4gIGhlaWdodDogMTAwMHB4O1xcbiAgd2lkdGg6IDEzMjBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tYmFja2dyb3VuZCk7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlci1zdHlsZSk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XFxuICBtYWluIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDY0LCA2NCwgNjQsIDAuMik7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmRhcmstdGhlbWUge1xuICAtLWJhY2tncm91bmQtZ3JhZGllbnQtMTogIzJhMDA2MTtcbiAgLS1iYWNrZ3JvdW5kLWdyYWRpZW50LTI6ICMwMDAzYmU7XG4gIC0tYmFja2dyb3VuZC1ncmFkaWVudC0zOiAjMDAzMGE5O1xuICAtLXNoYWRlOiByZ2JhKDAsIDAsIDAsIDAuNDYpO1xuICAtLWJvcmRlci1zdHlsZTogNHB4IHNvbGlkIHJnYmEoNiwgMCwgMTEyLCAwLjU2Myk7XG4gIC0tbWFpbi1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzAzKTtcbiAgLS1wcmlvcml0eS1sb3c6IHJnYigwLCA4NCwgMCk7XG4gIC0tcHJpb3JpdHktbWlkOiByZ2IoNzgsIDcyLCAwKTtcbiAgLS1wcmlvcml0eS1oaWdoOiByZ2IoNDAsIDAsIDApO1xufVxuXG4ubGlnaHQtdGhlbWUge1xuICAtLWJhY2tncm91bmQtZ3JhZGllbnQtMTogIzcxODhmZjtcbiAgLS1iYWNrZ3JvdW5kLWdyYWRpZW50LTI6ICNjODUwYzA7XG4gIC0tYmFja2dyb3VuZC1ncmFkaWVudC0zOiAjZmZjYzcwO1xuICAtLXNoYWRlOiByZ2JhKDAsIDAsIDAsIDAuMTI3KTtcbiAgLS1ib3JkZXItc3R5bGU6IDRweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIC0tbWFpbi1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIC0tcHJpb3JpdHktbG93OiByZ2JhKDAsIDI1NSwgMCwgMC42NjUpO1xuICAtLXByaW9yaXR5LW1pZDogcmdiYSgyNTUsIDIzNCwgMCwgMC44MzEpO1xuICAtLXByaW9yaXR5LWhpZ2g6IHJnYmEoMjU1LCAwLCAwLCAwLjc3NCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGhlbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLGdEQUFnRDtFQUNoRCx1Q0FBdUM7RUFDdkMsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isa0RBQWtEO0VBQ2xELDJDQUEyQztFQUMzQyxzQ0FBc0M7RUFDdEMsd0NBQXdDO0VBQ3hDLHVDQUF1QztBQUN6Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZGFyay10aGVtZSB7XFxuICAtLWJhY2tncm91bmQtZ3JhZGllbnQtMTogIzJhMDA2MTtcXG4gIC0tYmFja2dyb3VuZC1ncmFkaWVudC0yOiAjMDAwM2JlO1xcbiAgLS1iYWNrZ3JvdW5kLWdyYWRpZW50LTM6ICMwMDMwYTk7XFxuICAtLXNoYWRlOiByZ2JhKDAsIDAsIDAsIDAuNDYpO1xcbiAgLS1ib3JkZXItc3R5bGU6IDRweCBzb2xpZCByZ2JhKDYsIDAsIDExMiwgMC41NjMpO1xcbiAgLS1tYWluLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMDMpO1xcbiAgLS1wcmlvcml0eS1sb3c6IHJnYigwLCA4NCwgMCk7XFxuICAtLXByaW9yaXR5LW1pZDogcmdiKDc4LCA3MiwgMCk7XFxuICAtLXByaW9yaXR5LWhpZ2g6IHJnYig0MCwgMCwgMCk7XFxufVxcblxcbi5saWdodC10aGVtZSB7XFxuICAtLWJhY2tncm91bmQtZ3JhZGllbnQtMTogIzcxODhmZjtcXG4gIC0tYmFja2dyb3VuZC1ncmFkaWVudC0yOiAjYzg1MGMwO1xcbiAgLS1iYWNrZ3JvdW5kLWdyYWRpZW50LTM6ICNmZmNjNzA7XFxuICAtLXNoYWRlOiByZ2JhKDAsIDAsIDAsIDAuMTI3KTtcXG4gIC0tYm9yZGVyLXN0eWxlOiA0cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgLS1tYWluLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIC0tcHJpb3JpdHktbG93OiByZ2JhKDAsIDI1NSwgMCwgMC42NjUpO1xcbiAgLS1wcmlvcml0eS1taWQ6IHJnYmEoMjU1LCAyMzQsIDAsIDAuODMxKTtcXG4gIC0tcHJpb3JpdHktaGlnaDogcmdiYSgyNTUsIDAsIDAsIDAuNzc0KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBhcnRpY2xlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XG4gIGdyaWQtYXV0by1yb3dzOiAyNTBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgZ2FwOiB2YXIoLS1nZW5lcmljLXNwYWNpbmcpO1xuICBtYXJnaW46IHZhcigtLWdlbmVyaWMtc3BhY2luZyk7XG59XG5cbi5kZWxldGUtcHJvamVjdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRlKTtcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXItc3R5bGUpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50b2RvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hhZGUpO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiA0MHB4IDFmciAxZnIgMjBweCAvIDFmciA1MHB4O1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwidGl0bGUgICAgICAgZGVsZXRlXCJcbiAgICBcImRlc2NyaXB0aW9uIGVkaXRcIlxuICAgIFwiZGVzY3JpcHRpb24gY2hlY2tcIlxuICAgIFwiZGF0ZSAgICAgICAgZmF2b3JpdGVcIjtcbn1cblxuZGl2W2NsYXNzPVwidG9kb1wiXSB7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJ0aXRsZSAgICAgICBkZWxldGVcIlxuICAgIFwiZGVzY3JpcHRpb24gZWRpdFwiXG4gICAgXCJkYXRlICAgICAgICBkYXRlXCI7XG59XG5cbmlucHV0W2NsYXNzPVwidGl0bGVcIl0ge1xuICBmb250LXNpemU6IDIuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiN0ZXN0IHtcbiAgZ3JpZC1hcmVhOiBkZWxldGU7XG59XG5cbi5wcmlvcml0eS1kaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDYwJTtcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIDFmcikgLyByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC1hcmVhOiBlZGl0O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xuICBjb2xvci1zY2hlbWU6IGRhcms7XG59XG5cbi5wcmlvcml0eS1kaXYgPiBpbnB1dCB7XG4gIGhlaWdodDogMThweDtcbn1cblxuLmFkZC10b2RvLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRlKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgLyogZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogNTBweCAxZnIgNTBweCA1MHB4IC8gMWZyIHJlcGVhdCg0LCA1MHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICBcInRpdGxlIHRpdGxlIHRpdGxlIHRpdGxlIHRpdGxlXCJcbiAgICBcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXCJcbiAgICBcImRhdGUgcHJpb3JpdHktMSBwcmlvcml0eS0yIHByaW9yaXR5LTMgaW1wb3J0YW50XCJcbiAgICBcImNyZWF0ZSBjcmVhdGUgY3JlYXRlIGNyZWF0ZSBjcmVhdGVcIjsgKi9cbn1cblxuLmFkZC10b2RvLWJ1dHRvbiAuaW5wdXQtdGl0bGUge1xuICBncmlkLWFyZWE6IHRpdGxlO1xufVxuLmFkZC10b2RvLWJ1dHRvbiAuaW5wdXQtZGVzY3JpcHRpb24ge1xuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xufVxuLmFkZC10b2RvLWJ1dHRvbiAuaW5wdXQtY3JlYXRlLWJ1dHRvbiB7XG4gIGdyaWQtYXJlYTogY3JlYXRlO1xufVxuLmFkZC10b2RvLWJ1dHRvbiAucHJpb3JpdHktMSB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCBncmVlbjtcbiAgZ3JpZC1hcmVhOiBwcmlvcml0eS0xO1xuICBjb2xvcjogZ3JlZW47XG59XG4uYWRkLXRvZG8tYnV0dG9uIC5wcmlvcml0eS0yIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIG9yYW5nZTtcbiAgZ3JpZC1hcmVhOiBwcmlvcml0eS0yO1xuICBjb2xvcjogb3JhbmdlO1xufVxuLmFkZC10b2RvLWJ1dHRvbiAucHJpb3JpdHktMyB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCByZWQ7XG4gIGdyaWQtYXJlYTogcHJpb3JpdHktMztcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRvZG8gLnRpdGxlIHtcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcbn1cblxuLnRvZG8gLmRlc2NyaXB0aW9uIHtcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udG9kbyAuZWRpdCB7XG4gIGdyaWQtYXJlYTogZWRpdDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRvZG8gLmRhdGUge1xuICBncmlkLWFyZWE6IGRhdGU7XG59XG5cbi50b2RvIC5kZWxldGUge1xuICBncmlkLWFyZWE6IGRlbGV0ZTtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRvZG8gLmZhdm9yaXRlIHtcbiAgZ3JpZC1hcmVhOiBmYXZvcml0ZTtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmNoZWNrIHtcbiAgZ3JpZC1hcmVhOiBjaGVjaztcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy90b2RvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDOzs7OzBCQUl3QjtBQUMxQjs7QUFFQTtFQUNFOzs7c0JBR29CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsOENBQThDO0VBQzlDLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmOzs7Ozs7MkNBTXlDO0FBQzNDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYXJ0aWNsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxuICBncmlkLWF1dG8tcm93czogMjUwcHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgZ2FwOiB2YXIoLS1nZW5lcmljLXNwYWNpbmcpO1xcbiAgbWFyZ2luOiB2YXIoLS1nZW5lcmljLXNwYWNpbmcpO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3Qge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGFkZSk7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlci1zdHlsZSk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRlKTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIHBhZGRpbmc6IDE1cHggMjVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiA0MHB4IDFmciAxZnIgMjBweCAvIDFmciA1MHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRpdGxlICAgICAgIGRlbGV0ZVxcXCJcXG4gICAgXFxcImRlc2NyaXB0aW9uIGVkaXRcXFwiXFxuICAgIFxcXCJkZXNjcmlwdGlvbiBjaGVja1xcXCJcXG4gICAgXFxcImRhdGUgICAgICAgIGZhdm9yaXRlXFxcIjtcXG59XFxuXFxuZGl2W2NsYXNzPVxcXCJ0b2RvXFxcIl0ge1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcInRpdGxlICAgICAgIGRlbGV0ZVxcXCJcXG4gICAgXFxcImRlc2NyaXB0aW9uIGVkaXRcXFwiXFxuICAgIFxcXCJkYXRlICAgICAgICBkYXRlXFxcIjtcXG59XFxuXFxuaW5wdXRbY2xhc3M9XFxcInRpdGxlXFxcIl0ge1xcbiAgZm9udC1zaXplOiAyLjFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3Rlc3Qge1xcbiAgZ3JpZC1hcmVhOiBkZWxldGU7XFxufVxcblxcbi5wcmlvcml0eS1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogNjAlO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIDFmcikgLyByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtYXJlYTogZWRpdDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xcbn1cXG5cXG4ucHJpb3JpdHktZGl2ID4gaW5wdXQge1xcbiAgaGVpZ2h0OiAxOHB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoYWRlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDRyZW07XFxuICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogNTBweCAxZnIgNTBweCA1MHB4IC8gMWZyIHJlcGVhdCg0LCA1MHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ0aXRsZSB0aXRsZSB0aXRsZSB0aXRsZSB0aXRsZVxcXCJcXG4gICAgXFxcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uXFxcIlxcbiAgICBcXFwiZGF0ZSBwcmlvcml0eS0xIHByaW9yaXR5LTIgcHJpb3JpdHktMyBpbXBvcnRhbnRcXFwiXFxuICAgIFxcXCJjcmVhdGUgY3JlYXRlIGNyZWF0ZSBjcmVhdGUgY3JlYXRlXFxcIjsgKi9cXG59XFxuXFxuLmFkZC10b2RvLWJ1dHRvbiAuaW5wdXQtdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG59XFxuLmFkZC10b2RvLWJ1dHRvbiAuaW5wdXQtZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG59XFxuLmFkZC10b2RvLWJ1dHRvbiAuaW5wdXQtY3JlYXRlLWJ1dHRvbiB7XFxuICBncmlkLWFyZWE6IGNyZWF0ZTtcXG59XFxuLmFkZC10b2RvLWJ1dHRvbiAucHJpb3JpdHktMSB7XFxuICBvdXRsaW5lOiAycHggc29saWQgZ3JlZW47XFxuICBncmlkLWFyZWE6IHByaW9yaXR5LTE7XFxuICBjb2xvcjogZ3JlZW47XFxufVxcbi5hZGQtdG9kby1idXR0b24gLnByaW9yaXR5LTIge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIG9yYW5nZTtcXG4gIGdyaWQtYXJlYTogcHJpb3JpdHktMjtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxufVxcbi5hZGQtdG9kby1idXR0b24gLnByaW9yaXR5LTMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcXG4gIGdyaWQtYXJlYTogcHJpb3JpdHktMztcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi50b2RvIC50aXRsZSB7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbn1cXG5cXG4udG9kbyAuZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gLmVkaXQge1xcbiAgZ3JpZC1hcmVhOiBlZGl0O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIC5kYXRlIHtcXG4gIGdyaWQtYXJlYTogZGF0ZTtcXG59XFxuXFxuLnRvZG8gLmRlbGV0ZSB7XFxuICBncmlkLWFyZWE6IGRlbGV0ZTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kbyAuZmF2b3JpdGUge1xcbiAgZ3JpZC1hcmVhOiBmYXZvcml0ZTtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2sge1xcbiAgZ3JpZC1hcmVhOiBjaGVjaztcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3V0aWxpdHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFja2dyb3VuZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JhY2tncm91bmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Rpc3BsYXkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaXNwbGF5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob3Zlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvdmVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcmlvcml0eS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ByaW9yaXR5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY3JvbGxiYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY3JvbGxiYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RoZW1lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGhlbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91dGlsaXR5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdXRpbGl0eS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jaGVja2JveC1jaGVja2VkLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvY2hlY2tib3gtY2hlY2tlZC5zdmdcIixcblx0XCIuL2NoZWNrYm94LWVtcHR5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvY2hlY2tib3gtZW1wdHkuc3ZnXCIsXG5cdFwiLi9kYXJrLXRoZW1lLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvZGFyay10aGVtZS5zdmdcIixcblx0XCIuL2RlbGV0ZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL2RlbGV0ZS5zdmdcIixcblx0XCIuL2VkaXQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9lZGl0LnN2Z1wiLFxuXHRcIi4vZmluaXNoZWQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9maW5pc2hlZC5zdmdcIixcblx0XCIuL2xpZ2h0LXRoZW1lLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvbGlnaHQtdGhlbWUuc3ZnXCIsXG5cdFwiLi9tZW51LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWcvbWVudS5zdmdcIixcblx0XCIuL3N0YXItZmlsbC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1nL3N0YXItZmlsbC5zdmdcIixcblx0XCIuL3N0YXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltZy9zdGFyLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1nIHN5bmMgXFxcXC4ocG5nJTdDc3ZnJTdDanBlP2clN0NnaWYpJFwiOyIsImltcG9ydCB1cGRhdGVEYXRlcyBmcm9tIFwiLi91cGRhdGUtZGF0ZXNcIjtcbmltcG9ydCB1cGRhdGVQcm9qZWN0IGZyb20gXCIuL3VwZGF0ZS1wcm9qZWN0XCI7XG5pbXBvcnQgdXBkYXRlUHJvamVjdHNMaXN0IGZyb20gXCIuL3VwZGF0ZS1wcm9qZWN0cy1saXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgbG9jYWxTdG9yYWdlW3Byb2plY3ROYW1lXSA9IEpTT04uc3RyaW5naWZ5KFtdKTtcbiAgdXBkYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gIHVwZGF0ZVByb2plY3RzTGlzdCgpO1xuICB1cGRhdGVEYXRlcygpO1xufVxuIiwiaW1wb3J0IGFkZFByb2plY3QgZnJvbSBcIi4vYWRkLXByb2plY3RcIjtcbmltcG9ydCB0b2dnbGVBc2lkZUFydGljbGVDbGFzc2VzIGZyb20gXCIuL3RvZ2dsZS1hc2lkZS1hcnRpY2xlLWNsYXNzZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdHNCdG4oKSB7XG4gIGNvbnN0IGFkZFByb2plY3RzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcblxuICBhZGRQcm9qZWN0c0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxldCB1c2VySW5wdXQgPSBwcm9tcHQoXCJXaGF0IGRvIHlvdSB3YW50IHRvIGNhbGwgdGhlIG5ldyBwcm9qZWN0P1wiKTtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpKSB7XG4gICAgICBwcm9qZWN0c0xpc3QucHVzaChrZXkudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIGlmICh1c2VySW5wdXQgPT09IG51bGwpIHVzZXJJbnB1dCA9IFwiXCI7XG4gICAgaWYgKHByb2plY3RzTGlzdC5pbmNsdWRlcyh1c2VySW5wdXQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgIGFsZXJ0KFwiWW91IGFscmVhZHkgaGF2ZSBhIHByb2plY3Qgb2YgdGhlIHNhbWUgbmFtZSFcIik7XG4gICAgfSBlbHNlIGlmIChCb29sZWFuKHVzZXJJbnB1dCkpIHtcbiAgICAgIGFkZFByb2plY3QodXNlcklucHV0KTtcbiAgICAgIHRvZ2dsZUFzaWRlQXJ0aWNsZUNsYXNzZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBwcm9qZWN0IG5hbWUhXCIpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJpbXBvcnQgYWRkVG9kbyBmcm9tIFwiLi9hZGQtdG9kb1wiO1xuaW1wb3J0IGZpbmRMYXN0RWRpdCBmcm9tIFwiLi9maW5kLWxhc3QtZWRpdFwiO1xuaW1wb3J0IHVwZGF0ZURhdGVzIGZyb20gXCIuL3VwZGF0ZS1kYXRlc1wiO1xuaW1wb3J0IHVwZGF0ZVByb2plY3QgZnJvbSBcIi4vdXBkYXRlLXByb2plY3RcIjtcbmltcG9ydCB1cGRhdGVQcm9qZWN0c0xpc3QgZnJvbSBcIi4vdXBkYXRlLXByb2plY3RzLWxpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9kb0J1dHRvbihwYXJlbnQsIHByb2plY3QpIHtcbiAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG9kby1idXR0b25cIik7XG4gIHBhcmVudC5wcmVwZW5kKGNyZWF0ZUJ1dHRvbik7XG4gIGNyZWF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xuXG4gIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoQm9vbGVhbihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtwcm9qZWN0XSkuYXQoLTEpW1widGl0bGVcIl0pKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChjcmVhdGVCdXR0b24pO1xuICAgICAgICBhZGRUb2RvKGAke3Byb2plY3R9YCwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgdXBkYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgdXBkYXRlUHJvamVjdHNMaXN0KCk7XG4gICAgICAgIHVwZGF0ZURhdGVzKCk7XG4gICAgICAgIGNvbnN0IGxhc3RFZGl0ID0gZmluZExhc3RFZGl0KCk7XG4gICAgICAgIGxhc3RFZGl0LmNsaWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIllvdSBhbHJlYWR5IGhhdmUgYSBuZXcgdG9kbyBvcGVuIVwiO1xuICAgICAgICBjcmVhdGVCdXR0b24uaWQgPSBcInNtYWxsLXRleHRcIjtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgICAgICAgY3JlYXRlQnV0dG9uLmlkID0gXCJcIjtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICBhZGRUb2RvKGAke3Byb2plY3R9YCwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgZmFsc2UsIGZhbHNlKTtcbiAgICAgIHVwZGF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICB1cGRhdGVQcm9qZWN0c0xpc3QoKTtcbiAgICAgIHVwZGF0ZURhdGVzKCk7XG4gICAgICBjb25zdCBsYXN0RWRpdCA9IGZpbmRMYXN0RWRpdCgpO1xuICAgICAgbGFzdEVkaXQuY2xpY2soKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9kbyhcbiAgcHJvamVjdE5hbWUsXG4gIHRvZG9UaXRsZSxcbiAgdG9kb0Rlc2NyaXB0aW9uLFxuICB0b2RvRGF0ZSxcbiAgdG9kb1ByaW9yaXR5LFxuICB0b2RvRmF2b3JpdGUsXG4gIHRvZG9DaGVja2VkXG4pIHtcbiAgaWYgKGxvY2FsU3RvcmFnZVtgJHtwcm9qZWN0TmFtZX1gXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbG9jYWxTdG9yYWdlW2Ake3Byb2plY3ROYW1lfWBdID0gXCJbXVwiO1xuICB9XG4gIGNvbnN0IHRlbXAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVtgJHtwcm9qZWN0TmFtZX1gXSk7IC8vIGN1cnJlbnQgdmFsdWUgb2YgdGhlIHByb2plY3QncyB0b2RvIGxpc3QgYXJyYXlcbiAgdGVtcC5wdXNoKHtcbiAgICB0aXRsZTogdG9kb1RpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiB0b2RvRGVzY3JpcHRpb24sXG4gICAgZGF0ZTogdG9kb0RhdGUsXG4gICAgcHJpb3JpdHk6IHRvZG9Qcmlvcml0eSxcbiAgICBmYXZvcml0ZTogdG9kb0Zhdm9yaXRlLFxuICAgIGNoZWNrZWQ6IHRvZG9DaGVja2VkLFxuICB9KTtcbiAgbG9jYWxTdG9yYWdlW2Ake3Byb2plY3ROYW1lfWBdID0gSlNPTi5zdHJpbmdpZnkodGVtcCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGxGYXZvcml0ZSgpIHtcbiAgY29uc3QgZmF2b3JpdGVBcnJheSA9IFtdO1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhsb2NhbFN0b3JhZ2UpKSB7XG4gICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICAgIGlmICh0b2RvW1wiZmF2b3JpdGVcIl0pIHtcbiAgICAgICAgZmF2b3JpdGVBcnJheS5wdXNoKHRvZG8pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmF2b3JpdGVBcnJheSk7XG59XG4iLCJpbXBvcnQge1xuICBNU19JTl9EQVksXG4gIE1TX0lOX1dFRUssXG4gIE1TX0lOX01PTlRILFxuICBNU19JTl9ZRUFSLFxufSBmcm9tIFwiLi90aW1lLWNvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbGxUb2RheSgpIHtcbiAgY29uc3QgdG9kYXlBcnJheSA9IFtdO1xuICBjb25zdCB3ZWVrQXJyYXkgPSBbXTtcbiAgY29uc3QgbW9udGhBcnJheSA9IFtdO1xuICBjb25zdCB5ZWFyQXJyYXkgPSBbXTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKSkge1xuICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICBjb25zdCBEQVRFX0lOX01JTExJU0VDT05EUyA9IE1hdGguYWJzKFxuICAgICAgICBEYXRlLm5vdygpIC0gbmV3IERhdGUodG9kb1tcImRhdGVcIl0pXG4gICAgICApO1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgREFURV9JTl9NSUxMSVNFQ09ORFMgPCBNU19JTl9EQVk6XG4gICAgICAgICAgdG9kYXlBcnJheS5wdXNoKHRvZG8pO1xuICAgICAgICBjYXNlIERBVEVfSU5fTUlMTElTRUNPTkRTIDwgTVNfSU5fV0VFSzpcbiAgICAgICAgICB3ZWVrQXJyYXkucHVzaCh0b2RvKTtcbiAgICAgICAgY2FzZSBEQVRFX0lOX01JTExJU0VDT05EUyA8IE1TX0lOX01PTlRIOlxuICAgICAgICAgIG1vbnRoQXJyYXkucHVzaCh0b2RvKTtcbiAgICAgICAgY2FzZSBEQVRFX0lOX01JTExJU0VDT05EUyA8IE1TX0lOX1lFQVI6XG4gICAgICAgICAgeWVhckFycmF5LnB1c2godG9kbyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBbdG9kYXlBcnJheSwgd2Vla0FycmF5LCBtb250aEFycmF5LCB5ZWFyQXJyYXldO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJQcm9qZWN0KCkge1xuICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFydGljbGVcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgbWFpbi5yZW1vdmVDaGlsZChhcnRpY2xlKTtcbn1cbiIsImltcG9ydCBmYXZvcml0ZUNvdW50ZXIgZnJvbSBcIi4vZmF2b3JpdGUtY291bnRlclwiO1xuaW1wb3J0IHRvZ2dsZUFzaWRlQXJ0aWNsZUNsYXNzZXMgZnJvbSBcIi4vdG9nZ2xlLWFzaWRlLWFydGljbGUtY2xhc3Nlc1wiO1xuaW1wb3J0IHVwZGF0ZVByb2plY3QgZnJvbSBcIi4vdXBkYXRlLXByb2plY3RcIjtcbmltcG9ydCB1cGRhdGVQcm9qZWN0c0xpc3QgZnJvbSBcIi4vdXBkYXRlLXByb2plY3RzLWxpc3RcIjtcbmltcG9ydCB2YWxpZGF0ZVRvZG9zIGZyb20gXCIuL3ZhbGlkYXRlLXRvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNMaXN0KCkge1xuICBjb25zdCBwcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZXNcIik7XG4gIGZhdm9yaXRlQ291bnRlcigpO1xuXG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lXCIpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJ1dHRvbi5jbGFzcyA9IFwicHJvamVjdFwiO1xuICAgIHAuY2xhc3MgPSBgdGFza3MtY291bnQtJHtrZXl9YDtcbiAgICBwcm9qZWN0TmFtZXMuYXBwZW5kKGRpdik7XG4gICAgZGl2LmFwcGVuZChidXR0b24sIHApO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGtleTtcbiAgICBwLnRleHRDb250ZW50ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2Vba2V5XSkubGVuZ3RoO1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB1cGRhdGVQcm9qZWN0KGAke2tleX1gKTtcbiAgICAgIHZhbGlkYXRlVG9kb3MoKTtcbiAgICAgIHVwZGF0ZVByb2plY3RzTGlzdCgpO1xuICAgICAgdG9nZ2xlQXNpZGVBcnRpY2xlQ2xhc3NlcygpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgYWRkVG9kbyBmcm9tIFwiLi9hZGQtdG9kb1wiO1xuXG5leHBvcnQgY29uc3QgZGF0YSA9IHtcbiAgZXZlbnRzOiBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiQmlydGhkYXlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkhhcHB5IGJpcnRoZGF5IHRvIG1lXCIsXG4gICAgICBkYXRlOiBcIjIwMjQtMDgtMTRcIixcbiAgICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICAgICAgZmF2b3JpdGU6IHRydWUsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlBoeXNpY3MgRXhhbVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiRmluYWwgeWVhciBBIExldmVsIGV4YW1cIixcbiAgICAgIGRhdGU6IFwiMjAyNC0wNS0yNVwiLFxuICAgICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNvZGluZyBXb3Jrc2hvcFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUGFydGljaXBhdGluZyBpbiBhIEphdmFTY3JpcHQgd29ya3Nob3BcIixcbiAgICAgIGRhdGU6IFwiMjAyNC0wOS0wNVwiLFxuICAgICAgcHJpb3JpdHk6IFwiTWlkXCIsXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhhY2thdGhvblwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQXR0ZW5kaW5nIGEgbG9jYWwgaGFja2F0aG9uXCIsXG4gICAgICBkYXRlOiBcIjIwMjQtMTEtMTFcIixcbiAgICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICAgICAgZmF2b3JpdGU6IHRydWUsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlByb2plY3QgRGVhZGxpbmVcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlN1Ym1pc3Npb24gZGVhZGxpbmUgZm9yIHBlcnNvbmFsIHByb2plY3RcIixcbiAgICAgIGRhdGU6IFwiMjAyNC0xMS0zMFwiLFxuICAgICAgcHJpb3JpdHk6IFwiTWlkXCIsXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgICBjaGVja2VkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiU3VtbWVyIEJhcmJlY3VlIFBhcnR5XCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJFbmpveWluZyBhIHN1bW1lciBiYXJiZWN1ZSB3aXRoIGZyaWVuZHNcIixcbiAgICAgIGRhdGU6IFwiMjAyNC0wNy0yMFwiLFxuICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICB9LFxuICBdLFxuICBsZWFybmluZzogW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIldlYnNpdGUgTGF1bmNoXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJMYXVuY2hpbmcgbXkgcGVyc29uYWwgcHJvamVjdCB3ZWJzaXRlXCIsXG4gICAgICBkYXRlOiBcIjIwMjQtMDYtMzBcIixcbiAgICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICAgICAgcHJvamVjdDogXCJMZWFybmluZ1wiLFxuICAgICAgZmF2b3JpdGU6IHRydWUsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIk1hdGhzIFR1dG9yaWFsXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBdHRlbmRpbmcgYWR2YW5jZWQgY2FsY3VsdXMgc2Vzc2lvblwiLFxuICAgICAgZGF0ZTogXCIyMDI0LTAzLTE1XCIsXG4gICAgICBwcmlvcml0eTogXCJIaWdoXCIsXG4gICAgICBwcm9qZWN0OiBcIkxlYXJuaW5nXCIsXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgICBjaGVja2VkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiSmF2YVNjcmlwdCBDb3Vyc2VcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlN0YXJ0aW5nIGFuIGFkdmFuY2VkIEphdmFTY3JpcHQgY291cnNlXCIsXG4gICAgICBkYXRlOiBcIjIwMjQtMDItMDFcIixcbiAgICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICAgICAgcHJvamVjdDogXCJMZWFybmluZ1wiLFxuICAgICAgZmF2b3JpdGU6IHRydWUsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlBoeXNpY3MgQ29uZmVyZW5jZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUHJlc2VudGluZyBhdCBhIHBoeXNpY3MgY29uZmVyZW5jZVwiLFxuICAgICAgZGF0ZTogXCIyMDI0LTA4LTIyXCIsXG4gICAgICBwcmlvcml0eTogXCJMb3dcIixcbiAgICAgIHByb2plY3Q6IFwiTGVhcm5pbmdcIixcbiAgICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJHcm91cCBTdHVkeVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiR3JvdXAgc3R1ZHkgc2Vzc2lvbiBmb3IgZmluYWxzXCIsXG4gICAgICBkYXRlOiBcIjIwMjQtMDYtMDNcIixcbiAgICAgIHByaW9yaXR5OiBcIk1pZFwiLFxuICAgICAgcHJvamVjdDogXCJMZWFybmluZ1wiLFxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIk9ubGluZSBXZWJpbmFyXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJBdHRlbmRpbmcgYSB3ZWJpbmFyIG9uIHdlYiBkZXZlbG9wbWVudFwiLFxuICAgICAgZGF0ZTogXCIyMDI0LTEwLTE4XCIsXG4gICAgICBwcmlvcml0eTogXCJMb3dcIixcbiAgICAgIHByb2plY3Q6IFwiTGVhcm5pbmdcIixcbiAgICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgfSxcbiAgXSxcbiAgbGVpc3VyZTogW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIlNjaWVuY2UgRmFpclwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUGFydGljaXBhdGluZyBpbiByZWdpb25hbCBzY2llbmNlIGZhaXJcIixcbiAgICAgIGRhdGU6IFwiMjAyNC0wNC0yMFwiLFxuICAgICAgcHJpb3JpdHk6IFwiTG93XCIsXG4gICAgICBwcm9qZWN0OiBcIkxlaXN1cmVcIixcbiAgICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJGYW1pbHkgVHJpcFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiV2Vla2VuZCBnZXRhd2F5IHdpdGggZmFtaWx5XCIsXG4gICAgICBkYXRlOiBcIjIwMjQtMDctMTBcIixcbiAgICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICAgICAgcHJvamVjdDogXCJMZWlzdXJlXCIsXG4gICAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiTW92aWUgTWFyYXRob25cIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkhvc3RpbmcgYSBtb3ZpZSBuaWdodCB3aXRoIGZyaWVuZHNcIixcbiAgICAgIGRhdGU6IFwiMjAyNC0xMi0yNFwiLFxuICAgICAgcHJpb3JpdHk6IFwiTWlkXCIsXG4gICAgICBwcm9qZWN0OiBcIkxlaXN1cmVcIixcbiAgICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJCZWFjaCBEYXlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRheSB0cmlwIHRvIHRoZSBiZWFjaFwiLFxuICAgICAgZGF0ZTogXCIyMDI0LTA4LTE1XCIsXG4gICAgICBwcmlvcml0eTogXCJMb3dcIixcbiAgICAgIHByb2plY3Q6IFwiTGVpc3VyZVwiLFxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJCb29rIENsdWIgTWVldGluZ1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiTW9udGhseSBib29rIGNsdWIgZ2F0aGVyaW5nXCIsXG4gICAgICBkYXRlOiBcIjIwMjQtMDEtMDVcIixcbiAgICAgIHByaW9yaXR5OiBcIk1pZFwiLFxuICAgICAgcHJvamVjdDogXCJMZWlzdXJlXCIsXG4gICAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJHYW1pbmcgVG91cm5hbWVudFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUGFydGljaXBhdGluZyBpbiBhIGxvY2FsIGdhbWluZyBldmVudFwiLFxuICAgICAgZGF0ZTogXCIyMDI0LTAzLTE3XCIsXG4gICAgICBwcmlvcml0eTogXCJMb3dcIixcbiAgICAgIHByb2plY3Q6IFwiTGVpc3VyZVwiLFxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgfSxcbiAgXSxcbiAgZml0bmVzczogW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkd5bSBNZW1iZXJzaGlwXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTdGFydGluZyBhIG5ldyBneW0gbWVtYmVyc2hpcFwiLFxuICAgICAgZGF0ZTogXCIyMDI0LTAxLTAyXCIsXG4gICAgICBwcmlvcml0eTogXCJMb3dcIixcbiAgICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJIYWxmIE1hcmF0aG9uXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJSdW5uaW5nIGluIGEgbG9jYWwgaGFsZiBtYXJhdGhvblwiLFxuICAgICAgZGF0ZTogXCIyMDI0LTA0LTE2XCIsXG4gICAgICBwcmlvcml0eTogXCJIaWdoXCIsXG4gICAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiWW9nYSBXb3Jrc2hvcFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQXR0ZW5kaW5nIGEgd2Vla2VuZCB5b2dhIHJldHJlYXRcIixcbiAgICAgIGRhdGU6IFwiMjAyNC0wNy0yMVwiLFxuICAgICAgcHJpb3JpdHk6IFwiTG93XCIsXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgICBjaGVja2VkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQmlrZSBSYWNlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJDb21wZXRpbmcgaW4gYSBjaGFyaXR5IGJpa2UgcmFjZVwiLFxuICAgICAgZGF0ZTogXCIyMDI0LTA5LTAzXCIsXG4gICAgICBwcmlvcml0eTogXCJIaWdoXCIsXG4gICAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJIaWtpbmcgVHJpcFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiSGlraW5nIHRyaXAgd2l0aCBmcmllbmRzXCIsXG4gICAgICBkYXRlOiBcIjIwMjQtMDUtMjhcIixcbiAgICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJTd2ltbWluZyBMZXNzb25zXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJTdGFydGluZyBzd2ltbWluZyBsZXNzb25zXCIsXG4gICAgICBkYXRlOiBcIjIwMjQtMDgtMTJcIixcbiAgICAgIHByaW9yaXR5OiBcIkxvd1wiLFxuICAgICAgZmF2b3JpdGU6IHRydWUsXG4gICAgICBjaGVja2VkOiB0cnVlLFxuICAgIH0sXG4gIF0sXG4gIHdvcms6IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJQcm9qZWN0IFByZXNlbnRhdGlvblwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiUHJlc2VudGluZyBhIG1ham9yIHByb2plY3QgYXQgd29ya1wiLFxuICAgICAgZGF0ZTogXCIyMDI0LTAyLTEwXCIsXG4gICAgICBwcmlvcml0eTogXCJNaWRcIixcbiAgICAgIGZhdm9yaXRlOiB0cnVlLFxuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlRlYW0gQnVpbGRpbmdcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRlYW0gYnVpbGRpbmcgYWN0aXZpdHlcIixcbiAgICAgIGRhdGU6IFwiMjAyNC0wNS0yNlwiLFxuICAgICAgcHJpb3JpdHk6IFwiTG93XCIsXG4gICAgICBmYXZvcml0ZTogZmFsc2UsXG4gICAgICBjaGVja2VkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ2xpZW50IE1lZXRpbmdcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1lZXRpbmcgd2l0aCBhbiBpbXBvcnRhbnQgY2xpZW50XCIsXG4gICAgICBkYXRlOiBcIjIwMjQtMDctMTVcIixcbiAgICAgIHByaW9yaXR5OiBcIk1pZFwiLFxuICAgICAgZmF2b3JpdGU6IHRydWUsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkFubnVhbCBSZXZpZXdcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFubnVhbCBwZXJmb3JtYW5jZSByZXZpZXdcIixcbiAgICAgIGRhdGU6IFwiMjAyNC0xMC0yMFwiLFxuICAgICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxuICAgICAgZmF2b3JpdGU6IGZhbHNlLFxuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNvbmZlcmVuY2UgQXR0ZW5kYW5jZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQXR0ZW5kaW5nIGFuIGluZHVzdHJ5IGNvbmZlcmVuY2VcIixcbiAgICAgIGRhdGU6IFwiMjAyNC0wMy0xMVwiLFxuICAgICAgcHJpb3JpdHk6IFwiTG93XCIsXG4gICAgICBmYXZvcml0ZTogdHJ1ZSxcbiAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiRGVhZGxpbmUgZm9yIFJlcG9ydFwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiU3VibWlzc2lvbiBkZWFkbGluZSBmb3IgcXVhcnRlcmx5IHJlcG9ydFwiLFxuICAgICAgZGF0ZTogXCIyMDI0LTAxLTMxXCIsXG4gICAgICBwcmlvcml0eTogXCJMb3dcIixcbiAgICAgIGZhdm9yaXRlOiBmYWxzZSxcbiAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGludGVycHJldERhdGEoZGF0YSkge1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xuICAgIGZvciAoY29uc3QgdG9kbyBvZiB2YWx1ZSkge1xuICAgICAgYWRkVG9kbyhcbiAgICAgICAgYCR7a2V5fWAsXG4gICAgICAgIHRvZG9bXCJ0aXRsZVwiXSxcbiAgICAgICAgdG9kb1tcImRlc2NyaXB0aW9uXCJdLFxuICAgICAgICB0b2RvW1wiZGF0ZVwiXSxcbiAgICAgICAgdG9kb1tcInByaW9yaXR5XCJdLFxuICAgICAgICB0b2RvW1wiZmF2b3JpdGVcIl0sXG4gICAgICAgIHRvZG9bXCJjaGVja2VkXCJdXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IGFsbFRvZGF5IGZyb20gXCIuL2FsbC10b2RheVwiO1xuaW1wb3J0IHRvZ2dsZUFzaWRlQXJ0aWNsZUNsYXNzZXMgZnJvbSBcIi4vdG9nZ2xlLWFzaWRlLWFydGljbGUtY2xhc3Nlc1wiO1xuaW1wb3J0IHVwZGF0ZVByb2plY3QgZnJvbSBcIi4vdXBkYXRlLXByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9tRGF0ZXNCdG5zKCkge1xuICBjb25zdCBkYXRlc0J0bnNBcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXRlcyBidXR0b25cIikpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgZGF0ZXNCdG5zQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHVwZGF0ZVByb2plY3QoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KGFsbFRvZGF5KClbaV0pLFxuICAgICAgICBkYXRlc0J0bnNBcnJheVtpXS50ZXh0Q29udGVudFxuICAgICAgKTtcbiAgICAgIHRvZ2dsZUFzaWRlQXJ0aWNsZUNsYXNzZXMoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IGFsbEZhdm9yaXRlIGZyb20gXCIuL2FsbC1mYXZvcml0ZVwiO1xuaW1wb3J0IHRvZ2dsZUFzaWRlQXJ0aWNsZUNsYXNzZXMgZnJvbSBcIi4vdG9nZ2xlLWFzaWRlLWFydGljbGUtY2xhc3Nlc1wiO1xuaW1wb3J0IHVwZGF0ZVByb2plY3QgZnJvbSBcIi4vdXBkYXRlLXByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9tRmF2b3JpdGVCdG4oKSB7XG4gIGNvbnN0IGZhdm9yaXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZVwiKTtcbiAgZmF2b3JpdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB1cGRhdGVQcm9qZWN0KGFsbEZhdm9yaXRlKCksIFwiaW4gZmF2b3JpdGVcIik7XG4gICAgdG9nZ2xlQXNpZGVBcnRpY2xlQ2xhc3NlcygpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IGltYWdlcyB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgcmVtb3ZlVG9kbyBmcm9tIFwiLi9yZW1vdmUtdG9kb1wiO1xuaW1wb3J0IHVwZGF0ZVByb2plY3QgZnJvbSBcIi4vdXBkYXRlLXByb2plY3RcIjtcbmltcG9ydCB0b2dnbGVJbXBvcnRhbnQgZnJvbSBcIi4vdG9nZ2xlLWltcG9ydGFudFwiO1xuaW1wb3J0IHVwZGF0ZVByb2plY3RzTGlzdCBmcm9tIFwiLi91cGRhdGUtcHJvamVjdHMtbGlzdFwiO1xuaW1wb3J0IHVwZGF0ZVRvZG8gZnJvbSBcIi4vdXBkYXRlLXRvZG9cIjtcbmltcG9ydCB1cGRhdGVEYXRlcyBmcm9tIFwiLi91cGRhdGUtZGF0ZXNcIjtcbmltcG9ydCB0b2dnbGVDaGVja2VkIGZyb20gXCIuL3RvZ2dsZS1jaGVja2VkXCI7XG5cbmNvbnN0IGRvbVRvZG9DcmVhdGUgPSAoXG4gIHBhcmVudCxcbiAgdG9kb1RpdGxlLFxuICB0b2RvRGVzY3JpcHRpb24sXG4gIHRvZG9EYXRlLFxuICBwcm9qZWN0LFxuICBpZCxcbiAgaXNOb3RQcm9qZWN0LFxuICBwcmlvcml0eSxcbiAgY2hlY2tlZFxuKSA9PiB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaW1nRmF2b3JpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBpbWdEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBpbWdFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgaW1nQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGAke3ByaW9yaXR5fS1wcmlvcml0eWApO1xuICBoMi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gIHBEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gIHBEYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICBpbWdGYXZvcml0ZS5jbGFzc0xpc3QuYWRkKFwiZmF2b3JpdGVcIik7XG4gIGltZ0RlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICBpbWdFZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICBpbWdDaGVjay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tcIik7XG5cbiAgaW1nRmF2b3JpdGUuc3JjID0gaW1hZ2VzW1wic3Rhci1maWxsLnN2Z1wiXTtcbiAgaW1nQ2hlY2suc3JjID0gaW1hZ2VzW1wiY2hlY2tib3gtY2hlY2tlZC5zdmdcIl07XG5cbiAgdHJ5IHtcbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbYCR7cHJvamVjdH1gXSlbaWRdW1wiZmF2b3JpdGVcIl0gPT09IGZhbHNlKSB7XG4gICAgICBpbWdGYXZvcml0ZS5zcmMgPSBpbWFnZXNbXCJzdGFyLnN2Z1wiXTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge31cbiAgdHJ5IHtcbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbYCR7cHJvamVjdH1gXSlbaWRdW1wiY2hlY2tlZFwiXSA9PT0gZmFsc2UpIHtcbiAgICAgIGltZ0NoZWNrLnNyYyA9IGltYWdlc1tcImNoZWNrYm94LWVtcHR5LnN2Z1wiXTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge31cblxuICBpbWdFZGl0LnNyYyA9IGltYWdlc1tcImVkaXQuc3ZnXCJdO1xuXG4gIGltZ0RlbGV0ZS5zcmMgPSBpbWFnZXNbXCJkZWxldGUuc3ZnXCJdO1xuXG4gIGgyLnRleHRDb250ZW50ID0gYCR7dG9kb1RpdGxlfWA7XG4gIHBEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3RvZG9EZXNjcmlwdGlvbn1gO1xuICBwRGF0ZS50ZXh0Q29udGVudCA9IGAke3RvZG9EYXRlfWA7XG4gIHBhcmVudC5wcmVwZW5kKGRpdik7XG5cbiAgaWYgKGlzTm90UHJvamVjdCkge1xuICAgIGRpdi5hcHBlbmQoaDIsIHBEZXNjcmlwdGlvbiwgcERhdGUpO1xuICB9IGVsc2Uge1xuICAgIGlmIChjaGVja2VkKSB7XG4gICAgICBoMi5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgIHBEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZFwiKTtcbiAgICAgIHBEYXRlLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkLXRvZG9cIik7XG4gICAgICBkaXYuYXBwZW5kKGgyLCBwRGVzY3JpcHRpb24sIHBEYXRlLCBpbWdGYXZvcml0ZSwgaW1nQ2hlY2ssIGltZ0RlbGV0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpdi5hcHBlbmQoXG4gICAgICAgIGgyLFxuICAgICAgICBwRGVzY3JpcHRpb24sXG4gICAgICAgIHBEYXRlLFxuICAgICAgICBpbWdGYXZvcml0ZSxcbiAgICAgICAgaW1nQ2hlY2ssXG4gICAgICAgIGltZ0VkaXQsXG4gICAgICAgIGltZ0RlbGV0ZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpbWdEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW1vdmVUb2RvKGAke3Byb2plY3R9YCwgaWQpO1xuICAgIHVwZGF0ZVByb2plY3RzTGlzdCgpO1xuICAgIHVwZGF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgdXBkYXRlRGF0ZXMoKTtcbiAgfSk7XG4gIGltZ0Zhdm9yaXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlSW1wb3J0YW50KGAke3Byb2plY3R9YCwgaWQpO1xuICAgIHVwZGF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgdXBkYXRlUHJvamVjdHNMaXN0KCk7XG4gIH0pO1xuICBpbWdDaGVjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZ2dsZUNoZWNrZWQoYCR7cHJvamVjdH1gLCBpZCk7XG4gICAgdXBkYXRlUHJvamVjdChwcm9qZWN0KTtcbiAgICB1cGRhdGVQcm9qZWN0c0xpc3QoKTtcbiAgfSk7XG4gIGltZ0VkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRTdGF0ZTEpO1xuXG4gIGZ1bmN0aW9uIGVkaXRTdGF0ZTEoKSB7XG4gICAgLy8gcmVsb2FkIHBhZ2UgYmVmb3JlIHN0YXRlIDIgaXMgYWN0aXZlXG5cbiAgICBjb25zdCBoMiA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiaDJcIik7XG4gICAgY29uc3QgcERlc2NyaXB0aW9uID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCJwLmRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IHBEYXRlID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCJwLmRhdGVcIik7XG4gICAgY29uc3Qgc2F2ZWRUaXRsZSA9IGgyLnRleHRDb250ZW50O1xuICAgIGNvbnN0IHNhdmVkRGVzY3JpcHRpb24gPSBwRGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XG4gICAgY29uc3Qgc2F2ZWREYXRlID0gcERhdGUudGV4dENvbnRlbnQ7XG5cbiAgICBkaXYucmVtb3ZlQ2hpbGQoaDIpO1xuICAgIGRpdi5yZW1vdmVDaGlsZChwRGVzY3JpcHRpb24pO1xuICAgIGRpdi5yZW1vdmVDaGlsZChwRGF0ZSk7XG5cbiAgICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbnB1dExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBpbnB1dE1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBpbnB1dEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgaW5wdXRMb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGlucHV0TWlkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBpbnB1dEhpZ2hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgaW1nRWRpdC5pZCA9IFwidGVzdFwiO1xuICAgIGlucHV0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWRpdlwiKTtcbiAgICBpbnB1dExvdy5uYW1lID0gXCJwcmlvcml0eVwiO1xuICAgIGlucHV0TWlkLm5hbWUgPSBcInByaW9yaXR5XCI7XG4gICAgaW5wdXRIaWdoLm5hbWUgPSBcInByaW9yaXR5XCI7XG4gICAgaW5wdXRMb3cudHlwZSA9IFwicmFkaW9cIjtcbiAgICBpbnB1dE1pZC50eXBlID0gXCJyYWRpb1wiO1xuICAgIGlucHV0SGlnaC50eXBlID0gXCJyYWRpb1wiO1xuICAgIGlucHV0TG93LnZhbHVlID0gXCJMb3dcIjtcbiAgICBpbnB1dE1pZC52YWx1ZSA9IFwiTWlkXCI7XG4gICAgaW5wdXRIaWdoLnZhbHVlID0gXCJIaWdoXCI7XG4gICAgaW5wdXRMb3dMYWJlbC50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgaW5wdXRNaWRMYWJlbC50ZXh0Q29udGVudCA9IFwiTWlkXCI7XG4gICAgaW5wdXRIaWdoTGFiZWwudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICBpbnB1dFByaW9yaXR5LmFwcGVuZChcbiAgICAgIGlucHV0TG93LFxuICAgICAgaW5wdXRMb3dMYWJlbCxcbiAgICAgIGlucHV0TWlkLFxuICAgICAgaW5wdXRNaWRMYWJlbCxcbiAgICAgIGlucHV0SGlnaCxcbiAgICAgIGlucHV0SGlnaExhYmVsXG4gICAgKTtcblxuICAgIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiTWlkLXByaW9yaXR5XCIpKSB7XG4gICAgICBpbnB1dE1pZC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJIaWdoLXByaW9yaXR5XCIpKSB7XG4gICAgICBpbnB1dEhpZ2guY2hlY2tlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0TG93LmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiTG93LXByaW9yaXR5XCIpKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcIkxvdy1wcmlvcml0eVwiKTtcbiAgICB9XG4gICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJNaWQtcHJpb3JpdHlcIikpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiTWlkLXByaW9yaXR5XCIpO1xuICAgIH1cbiAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcIkhpZ2gtcHJpb3JpdHlcIikpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiSGlnaC1wcmlvcml0eVwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0VGl0bGUucGxhY2Vob2xkZXIgPSBcIlBsZWFzZSBlbnRlciB0aXRsZVwiO1xuICAgIGlucHV0RGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcIkVudGVyIGRlc2NyaXB0aW9uIG9mIHlvdXIgdG9kb1wiO1xuICAgIGlucHV0RGF0ZS5wbGFjZWhvbGRlciA9IFwiV2hhdCB3YXMgdGhlIGRhdGU/XCI7XG4gICAgaW5wdXREYXRlLnR5cGUgPSBcIkRhdGVcIjtcbiAgICBpbnB1dFRpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dERlc2NyaXB0aW9uLm1heExlbmd0aCA9IFwiMjVcIjtcbiAgICBpbnB1dFRpdGxlLm1heExlbmd0aCA9IFwiMTZcIjtcblxuICAgIGlucHV0VGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIGlucHV0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgIGlucHV0RGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcblxuICAgIGlucHV0VGl0bGUudmFsdWUgPSBzYXZlZFRpdGxlO1xuICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUgPSBzYXZlZERlc2NyaXB0aW9uO1xuICAgIGlucHV0RGF0ZS52YWx1ZSA9IHNhdmVkRGF0ZTtcblxuICAgIGRpdi5hcHBlbmQoaW5wdXRUaXRsZSwgaW5wdXREZXNjcmlwdGlvbiwgaW5wdXREYXRlLCBpbnB1dFByaW9yaXR5KTtcbiAgICBpbWdEZWxldGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBpbWdGYXZvcml0ZS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIGltZ0NoZWNrLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG5cbiAgICAvLyBzdGF5cyBoZXJlXG4gICAgaW1nRWRpdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFN0YXRlMSk7XG4gICAgaW1nRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFN0YXRlMik7XG4gICAgaW1nRWRpdC5zcmMgPSBpbWFnZXNbXCJmaW5pc2hlZC5zdmdcIl07XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0U3RhdGUyKCkge1xuICAgIGltZ0VkaXQuaWQgPSBcIlwiO1xuICAgIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5LWRpdlwiKTtcblxuICAgIGNvbnN0IHJhZGlvQnV0dG9uc0FycmF5ID0gQXJyYXkuZnJvbShcbiAgICAgIGlucHV0UHJpb3JpdHkucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpXG4gICAgKTtcblxuICAgIGxldCBjaGVja2VkSW5wdXQ7XG5cbiAgICBmb3IgKGNvbnN0IHJhZGlvQnV0dG9uIGluIHJhZGlvQnV0dG9uc0FycmF5KSB7XG4gICAgICBpZiAocmFkaW9CdXR0b25zQXJyYXlbcmFkaW9CdXR0b25dLmNoZWNrZWQpIHtcbiAgICAgICAgY2hlY2tlZElucHV0ID0gcmFkaW9CdXR0b25zQXJyYXlbcmFkaW9CdXR0b25dLnZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRpdi5yZW1vdmVDaGlsZChpbnB1dFByaW9yaXR5KTtcblxuICAgIGNvbnN0IGlucHV0VGl0bGUgPSBkaXYucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbiAgICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIik7XG4gICAgY29uc3QgaW5wdXREYXRlID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZVwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHtjaGVja2VkSW5wdXR9LXByaW9yaXR5YCk7XG5cbiAgICBpZiAoaW5wdXRUaXRsZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgY29uc3QgdGVtcG9yYXJ5ID0gaW5wdXREZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgaW5wdXREZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiUGxlYXNlIGVudGVyIGEgdGl0bGVcIjtcbiAgICAgIGlucHV0RGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZShcInJlZC10ZXh0XCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlucHV0RGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZShcInJlZC10ZXh0XCIpO1xuICAgICAgICBpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gdGVtcG9yYXJ5O1xuICAgICAgfSwgMjAwMCk7XG4gICAgfSBlbHNlIGlmIChpbnB1dERlc2NyaXB0aW9uLnZhbHVlID09PSBcIlwiKSB7XG4gICAgICBjb25zdCB0ZW1wb3JhcnkgPSBpbnB1dERlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgICBpbnB1dERlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gXCJQbGVhc2UgZW50ZXIgYSBkZXNjcmlwdGlvblwiO1xuICAgICAgaW5wdXREZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwicmVkLXRleHRcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwicmVkLXRleHRcIik7XG4gICAgICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUgPSB0ZW1wb3Jhcnk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9IGVsc2UgaWYgKGlucHV0RGF0ZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgY29uc3QgdGVtcG9yYXJ5ID0gaW5wdXREZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgaW5wdXREZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiUGxlYXNlIGVudGVyIGEgZGF0ZVwiO1xuICAgICAgaW5wdXREZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwicmVkLXRleHRcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaW5wdXREZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwicmVkLXRleHRcIik7XG4gICAgICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUgPSB0ZW1wb3Jhcnk7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlVG9kbyhcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgaWQsXG4gICAgICAgIGlucHV0VGl0bGUudmFsdWUsXG4gICAgICAgIGlucHV0RGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgIGlucHV0RGF0ZS52YWx1ZSxcbiAgICAgICAgY2hlY2tlZElucHV0XG4gICAgICApO1xuXG4gICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIGNvbnN0IHBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgcERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgICAgaDIudGV4dENvbnRlbnQgPSBpbnB1dFRpdGxlLnZhbHVlO1xuICAgICAgcERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaW5wdXREZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgIHBEYXRlLnRleHRDb250ZW50ID0gaW5wdXREYXRlLnZhbHVlO1xuXG4gICAgICBoMi5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICBwRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgcERhdGUuY2xhc3NMaXN0LmFkZChcImRhdGVcIik7XG5cbiAgICAgIGRpdi5yZW1vdmVDaGlsZChpbnB1dFRpdGxlKTtcbiAgICAgIGRpdi5yZW1vdmVDaGlsZChpbnB1dERlc2NyaXB0aW9uKTtcbiAgICAgIGRpdi5yZW1vdmVDaGlsZChpbnB1dERhdGUpO1xuICAgICAgZGl2LmFwcGVuZChoMiwgcERlc2NyaXB0aW9uLCBwRGF0ZSk7XG5cbiAgICAgIGltZ0VkaXQuc3JjID0gaW1hZ2VzW1wiZWRpdC5zdmdcIl07XG4gICAgICBpbWdEZWxldGUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIGltZ0Zhdm9yaXRlLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICBpbWdDaGVjay5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgaW1nRWRpdC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFN0YXRlMik7XG4gICAgICBpbWdFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0U3RhdGUxKTtcbiAgICAgIHVwZGF0ZURhdGVzKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGltZ0VkaXQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21Ub2RvQ3JlYXRlO1xuIiwiaW1wb3J0IGFsbEZhdm9yaXRlIGZyb20gXCIuL2FsbC1mYXZvcml0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGYXZvcml0ZUNvdW50ZXIoKSB7XG4gIGNvbnN0IGZhdm9yaXRlQ291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmYXZvcml0ZUNvdW50ZXIuY2xhc3NMaXN0LmFkZChcImZhdm9yaXRlLWNvdW50ZXJcIik7XG4gIGNvbnN0IGZhdm9yaXRlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYXZvcml0ZS1kaXZcIik7XG4gIGZhdm9yaXRlRGl2LmFwcGVuZChmYXZvcml0ZUNvdW50ZXIpO1xuICBmYXZvcml0ZUNvdW50ZXIudGV4dENvbnRlbnQgPSBKU09OLnBhcnNlKGFsbEZhdm9yaXRlKCkpLmxlbmd0aDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRMYXN0RWRpdCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlID4gLnRvZG86bnRoLWNoaWxkKDIpID4gLmVkaXRcIik7XG59XG4iLCJleHBvcnQgeyBpbXBvcnRBbGxJbWFnZXMsIGltYWdlcyB9O1xuXG5mdW5jdGlvbiBpbXBvcnRBbGxDU1Mocikge1xuICByLmtleXMoKS5mb3JFYWNoKHIpO1xufVxuaW1wb3J0QWxsQ1NTKHJlcXVpcmUuY29udGV4dChcIi4uL3N0eWxlcy9cIiwgdHJ1ZSwgL1xcLmNzcyQvKSk7XG5cbmZ1bmN0aW9uIGltcG9ydEFsbEltYWdlcyhyKSB7XG4gIGxldCBpbWFnZXMgPSB7fTtcbiAgci5rZXlzKCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGltYWdlc1tpdGVtLnJlcGxhY2UoXCIuL1wiLCBcIlwiKV0gPSByKGl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIGltYWdlcztcbn1cbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcbiAgcmVxdWlyZS5jb250ZXh0KFwiLi4vYXNzZXRzL2ltZy9cIiwgZmFsc2UsIC9cXC4ocG5nfHN2Z3xqcGU/Z3xnaWYpJC8pXG4pO1xuXG4vLyBvdGhlciBzdHVmZlxuXG5pbXBvcnQgY3JlYXRlRG9tUHJvamVjdCBmcm9tIFwiLi9wb3B1bGF0ZS1wcm9qZWN0XCI7XG5pbXBvcnQgaW50ZXJwcmV0RGF0YSBmcm9tIFwiLi9kYXRhXCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4vZGF0YVwiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3RzTGlzdCBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdHMtbGlzdFwiO1xuaW1wb3J0IGFsbEZhdm9yaXRlIGZyb20gXCIuL2FsbC1mYXZvcml0ZVwiO1xuaW1wb3J0IGRvbUZhdm9yaXRlQnRuIGZyb20gXCIuL2RvbS1mYXZvcml0ZS1idG5cIjtcbmltcG9ydCBkb21EYXRlc0J0bnMgZnJvbSBcIi4vZG9tLWRhdGVzLWJ0bnNcIjtcbmltcG9ydCB1cGRhdGVEYXRlcyBmcm9tIFwiLi91cGRhdGUtZGF0ZXNcIjtcbmltcG9ydCB7IHRoZW1lU3dpdGNoZXIgfSBmcm9tIFwiLi90aGVtZS1zd2l0Y2hlclwiO1xuaW1wb3J0IG9wZW5Bc2lkZSBmcm9tIFwiLi9vcGVuLWFzaWRlXCI7XG5pbXBvcnQgYWRkUHJvamVjdHNCdG4gZnJvbSBcIi4vYWRkLXByb2plY3RzLWJ0blwiO1xuXG5jb25zdCBzdGFydHVwID0gKCgpID0+IHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDApIHtcbiAgICBpbnRlcnByZXREYXRhKGRhdGEpO1xuICB9XG4gIGNyZWF0ZURvbVByb2plY3QoYWxsRmF2b3JpdGUoKSwgXCJpbiBmYXZvcml0ZVwiKTtcbiAgY3JlYXRlUHJvamVjdHNMaXN0KCk7XG4gIGFkZFByb2plY3RzQnRuKCk7XG4gIGRvbUZhdm9yaXRlQnRuKCk7XG4gIGRvbURhdGVzQnRucygpO1xuICB1cGRhdGVEYXRlcygpO1xuICB0aGVtZVN3aXRjaGVyKCk7XG4gIG9wZW5Bc2lkZSgpO1xufSkoKTtcbiIsImltcG9ydCB0b2dnbGVBc2lkZUFydGljbGVDbGFzc2VzIGZyb20gXCIuL3RvZ2dsZS1hc2lkZS1hcnRpY2xlLWNsYXNzZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZEJlT3BlbigpIHtcbiAgcmV0dXJuIHNob3VsZEFkZENsYXNzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvcGVuQXNpZGUoKSB7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUFzaWRlQXJ0aWNsZUNsYXNzZXMpO1xufVxuIiwiaW1wb3J0IGFkZFRvZG9CdXR0b24gZnJvbSBcIi4vYWRkLXRvZG8tYnV0dG9uXCI7XG5pbXBvcnQgZG9tVG9kb0NyZWF0ZSBmcm9tIFwiLi9kb20tdG9kby1jcmVhdGVcIjtcbmltcG9ydCB1cGRhdGVQcm9qZWN0c0xpc3QgZnJvbSBcIi4vdXBkYXRlLXByb2plY3RzLWxpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVEb21Qcm9qZWN0KHByb2plY3QsIHN0YXRlKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICBtYWluLmFwcGVuZChhcnRpY2xlKTtcbiAgbGV0IG15UHJvajtcbiAgbGV0IGlzTm90UHJvamVjdCA9IGZhbHNlO1xuICB0cnkge1xuICAgIG15UHJvaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2Ake3Byb2plY3R9YF0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBteVByb2ogPSBKU09OLnBhcnNlKHByb2plY3QpO1xuICAgIGlzTm90UHJvamVjdCA9IHRydWU7XG4gIH1cblxuICBsZXQgaSA9IDA7XG5cbiAgaWYgKG15UHJvai5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhcnRpY2xlXCIpO1xuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpO1xuXG4gICAgaWYgKCFpc05vdFByb2plY3QpIHtcbiAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcImRlbGV0ZSBwcm9qZWN0XCI7XG4gICAgICBhcnRpY2xlLmFwcGVuZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdCk7XG4gICAgICAgIHVwZGF0ZVByb2plY3RzTGlzdCgpO1xuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKGFydGljbGUpO1xuICAgICAgICBwb3B1bGF0ZURvbVByb2plY3QoXCJldmVudHNcIik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IGBMb29rcyBsaWtlIHlvdSBoYXZlIG5vdGhpbmcgc2V0IGZvciAke3N0YXRlLnRvTG93ZXJDYXNlKCl9IWA7XG4gICAgICBhcnRpY2xlLmFwcGVuZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IHRvZG8gb2YgbXlQcm9qKSB7XG4gICAgZG9tVG9kb0NyZWF0ZShcbiAgICAgIGFydGljbGUsXG4gICAgICB0b2RvW1widGl0bGVcIl0sXG4gICAgICB0b2RvW1wiZGVzY3JpcHRpb25cIl0sXG4gICAgICB0b2RvW1wiZGF0ZVwiXSxcbiAgICAgIHByb2plY3QsXG4gICAgICBpLFxuICAgICAgaXNOb3RQcm9qZWN0LFxuICAgICAgdG9kb1tcInByaW9yaXR5XCJdLFxuICAgICAgdG9kb1tcImNoZWNrZWRcIl1cbiAgICApO1xuXG4gICAgaSsrO1xuICB9XG4gIGlmICghaXNOb3RQcm9qZWN0KSB7XG4gICAgYWRkVG9kb0J1dHRvbihhcnRpY2xlLCBwcm9qZWN0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdHNMaXN0KCkge1xuICBjb25zdCBwcm9qZWN0TmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZXNcIik7XG4gIGNvbnN0IGZhdm9yaXRlQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGUtY291bnRlclwiKTtcbiAgY29uc3QgZmF2b3JpdGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlLWRpdlwiKTtcbiAgY29uc3QgcHJvamVjdE5hbWVBcnJheSA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LW5hbWVcIilcbiAgKTtcbiAgZm9yIChjb25zdCBub2RlIG9mIHByb2plY3ROYW1lQXJyYXkpIHtcbiAgICBwcm9qZWN0TmFtZXMucmVtb3ZlQ2hpbGQobm9kZSk7XG4gIH1cbiAgZmF2b3JpdGVEaXYucmVtb3ZlQ2hpbGQoZmF2b3JpdGVDb3VudGVyKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZVRvZG8ocHJvamVjdE5hbWUsIGlkVG9SZW1vdmUpIHtcbiAgY29uc3QgdGVtcCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2Ake3Byb2plY3ROYW1lfWBdKTtcbiAgdGVtcC5zcGxpY2UoaWRUb1JlbW92ZSwgMSk7XG4gIGxvY2FsU3RvcmFnZVtgJHtwcm9qZWN0TmFtZX1gXSA9IEpTT04uc3RyaW5naWZ5KHRlbXApO1xufVxuIiwiaW1wb3J0IHsgaW1hZ2VzIH0gZnJvbSBcIi5cIjtcblxuY29uc3QgdGhlbWVTd2l0Y2hlciA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aGVtZVwiKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBsZXQgdGhlbWUgPSBcImxpZ2h0XCI7XG5cbiAgdHJ5IHtcbiAgICBpZiAoc2Vzc2lvblN0b3JhZ2VbXCJ0aGVtZVwiXSA9PT0gXCJkYXJrXCIpIHtcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0LXRoZW1lXCIpO1xuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwiZGFyay10aGVtZVwiKTtcbiAgICAgIHRoZW1lSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhlbWVJY29uU3RhdGUyKTtcbiAgICB9XG4gICAgaWYgKHNlc3Npb25TdG9yYWdlW1widGhlbWVcIl0gPT09IFwibGlnaHRcIikge1xuICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibGlnaHQtdGhlbWVcIik7XG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrLXRoZW1lXCIpO1xuICAgICAgdGhlbWVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGVtZUljb25TdGF0ZTEpO1xuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgdGhlbWVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGVtZUljb25TdGF0ZTEpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGhlbWVJY29uU3RhdGUxKCkge1xuICAgIHRoZW1lSWNvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhlbWVJY29uU3RhdGUxKTtcbiAgICB0aGVtZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoZW1lSWNvblN0YXRlMik7XG4gICAgdGhlbWVJY29uLnNyYyA9IGltYWdlc1tcImRhcmstdGhlbWUuc3ZnXCJdO1xuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImxpZ2h0LXRoZW1lXCIpO1xuICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmstdGhlbWVcIik7XG4gICAgc2Vzc2lvblN0b3JhZ2VbXCJ0aGVtZVwiXSA9IFwiZGFya1wiO1xuICB9XG5cbiAgZnVuY3Rpb24gdGhlbWVJY29uU3RhdGUyKCkge1xuICAgIHRoZW1lSWNvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhlbWVJY29uU3RhdGUyKTtcbiAgICB0aGVtZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoZW1lSWNvblN0YXRlMSk7XG4gICAgdGhlbWVJY29uLnNyYyA9IGltYWdlc1tcImxpZ2h0LXRoZW1lLnN2Z1wiXTtcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJsaWdodC10aGVtZVwiKTtcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrLXRoZW1lXCIpO1xuICAgIHNlc3Npb25TdG9yYWdlW1widGhlbWVcIl0gPSBcImxpZ2h0XCI7XG4gIH1cblxuICByZXR1cm4gdGhlbWU7XG59O1xuXG5leHBvcnQgeyB0aGVtZVN3aXRjaGVyIH07XG4iLCJleHBvcnQgeyBNU19JTl9EQVksIE1TX0lOX1dFRUssIE1TX0lOX01PTlRILCBNU19JTl9ZRUFSIH07XG5cbmNvbnN0IE1TX0lOX0RBWSA9IDg2NDAwICogMTAwMDtcbmNvbnN0IE1TX0lOX1dFRUsgPSBNU19JTl9EQVkgKiA3O1xuY29uc3QgTVNfSU5fTU9OVEggPSBNU19JTl9XRUVLICogNDtcbmNvbnN0IE1TX0lOX1lFQVIgPSBNU19JTl9NT05USCAqIDEyO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlQXNpZGVBcnRpY2xlQ2xhc3NlcygpIHtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGVcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgY29uc3QgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5IGFydGljbGVcIik7XG5cbiAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKFwibWFpbi1jbG9zZWQtYXNpZGVcIik7XG4gIGFzaWRlLmNsYXNzTGlzdC50b2dnbGUoXCJhc2lkZS1jbG9zZWQtYXNpZGVcIik7XG4gIG1haW4uY2xhc3NMaXN0LnRvZ2dsZShcIm1haW4tb3Blbi1hc2lkZVwiKTtcbiAgYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZShcImFzaWRlLW9wZW4tYXNpZGVcIik7XG4gIGFydGljbGUuY2xhc3NMaXN0LnRvZ2dsZShcImJvZHktb3Blbi1hc2lkZVwiKTtcblxuICBpZiAobWFpbi5jbGFzc0xpc3QuY29udGFpbnMoXCJtYWluLWNsb3NlZC1hc2lkZVwiKSkge1xuICAgIGFydGljbGUuY2xhc3NMaXN0LnJlbW92ZShcImJvZHktb3Blbi1hc2lkZVwiKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlQ2hlY2tlZChwcm9qZWN0TmFtZSwgaWRUb1RvZ2dsZSkge1xuICBjb25zdCB0ZW1wID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbYCR7cHJvamVjdE5hbWV9YF0pO1xuXG4gIHRlbXBbaWRUb1RvZ2dsZV1bXCJjaGVja2VkXCJdID0gIUpTT04ucGFyc2UodGVtcFtpZFRvVG9nZ2xlXVtcImNoZWNrZWRcIl0pO1xuICBsb2NhbFN0b3JhZ2VbcHJvamVjdE5hbWVdID0gSlNPTi5zdHJpbmdpZnkodGVtcCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVJbXBvcnRhbnQocHJvamVjdE5hbWUsIGlkVG9Ub2dnbGUpIHtcbiAgY29uc3QgdGVtcCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2Ake3Byb2plY3ROYW1lfWBdKTtcblxuICB0ZW1wW2lkVG9Ub2dnbGVdW1wiZmF2b3JpdGVcIl0gPSAhSlNPTi5wYXJzZSh0ZW1wW2lkVG9Ub2dnbGVdW1wiZmF2b3JpdGVcIl0pO1xuXG4gIGxvY2FsU3RvcmFnZVtwcm9qZWN0TmFtZV0gPSBKU09OLnN0cmluZ2lmeSh0ZW1wKTtcbn1cbiIsImltcG9ydCBhbGxUb2RheSBmcm9tIFwiLi9hbGwtdG9kYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlRGF0ZXMoKSB7XG4gIGNvbnN0IGRhdGVzQXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGF0ZXMgPiAqXCIpKTtcblxuICBjb25zdCB0b3RhbERhdGVzID0gYWxsVG9kYXkoKTtcbiAgLy8gUmVtb3ZpbmcgZWFjaCBkYXRlIHAgdHJhY2tlclxuICBmb3IgKGNvbnN0IGRhdGVzIG9mIGRhdGVzQXJyYXkpIHtcbiAgICBjb25zdCBkYXRlVHJhY2tlciA9IGRhdGVzLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuICAgIGRhdGVzLnJlbW92ZUNoaWxkKGRhdGVUcmFja2VyKTtcbiAgfVxuXG4gIC8vIEFkZGluZyBlYWNoIGRhdGUgcCB0cmFja2VyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0ZXNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRvbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkYXRlc0FycmF5W2ldLmFwcGVuZChkb21EYXRlKTtcbiAgICBkb21EYXRlLnRleHRDb250ZW50ID0gYCR7dG90YWxEYXRlc1tpXS5sZW5ndGh9YDtcbiAgfVxufVxuIiwiaW1wb3J0IGNsZWFyUHJvamVjdCBmcm9tIFwiLi9jbGVhci1wcm9qZWN0XCI7XG5pbXBvcnQgY3JlYXRlRG9tUHJvamVjdCBmcm9tIFwiLi9wb3B1bGF0ZS1wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3QocHJvaiwgc3RhdGUpIHtcbiAgY2xlYXJQcm9qZWN0KCk7XG4gIGNyZWF0ZURvbVByb2plY3QocHJvaiwgc3RhdGUpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZVByb2plY3RzTGlzdCBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdHMtbGlzdFwiO1xuaW1wb3J0IHJlbW92ZVByb2plY3RzTGlzdCBmcm9tIFwiLi9yZW1vdmUtcHJvamVjdHMtbGlzdFwiO1xuaW1wb3J0IHVwZGF0ZURhdGVzIGZyb20gXCIuL3VwZGF0ZS1kYXRlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0c0xpc3QoKSB7XG4gIHJlbW92ZVByb2plY3RzTGlzdCgpO1xuICBjcmVhdGVQcm9qZWN0c0xpc3QoKTtcbiAgdXBkYXRlRGF0ZXMoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVRvZG8oXG4gIHByb2plY3ROYW1lLFxuICBpZFRvVXBkYXRlLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGRhdGUsXG4gIHByaW9yaXR5XG4pIHtcbiAgbGV0IHRlbXA7XG4gIHRyeSB7XG4gICAgdGVtcCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlW2Ake3Byb2plY3ROYW1lfWBdKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGVtcCA9IEpTT04ucGFyc2UocHJvamVjdCk7XG4gIH1cblxuICBjb25zdCBuZXdUb2RvID0ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgZmF2b3JpdGU6IHRlbXBbaWRUb1VwZGF0ZV1bXCJmYXZvcml0ZVwiXSxcbiAgICBjaGVja2VkOiB0ZW1wW2lkVG9VcGRhdGVdW1wiY2hlY2tlZFwiXSxcbiAgfTtcblxuICB0ZW1wW2lkVG9VcGRhdGVdID0gbmV3VG9kbztcblxuICBsb2NhbFN0b3JhZ2VbcHJvamVjdE5hbWVdID0gSlNPTi5zdHJpbmdpZnkodGVtcCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZVRvZG9zKCkge1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhsb2NhbFN0b3JhZ2UpKSB7XG4gICAgbGV0IHRvZG9zID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgY29uc3QgaW5kZXhlc1RvUmVtb3ZlID0gW107XG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zKSB7XG4gICAgICBjb25zdCBteUFycmF5ID0gT2JqZWN0LnZhbHVlcyh0b2RvKTtcbiAgICAgIGNvbnN0IGRvZXNJbmNsdWRlID0gbXlBcnJheS5pbmNsdWRlcyhcIlwiKTtcbiAgICAgIGlmIChkb2VzSW5jbHVkZSkge1xuICAgICAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gdG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICAgICAgaW5kZXhlc1RvUmVtb3ZlLnB1c2goaW5kZXhUb1JlbW92ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGluZGV4ZXNUb1JlbW92ZS5yZXZlcnNlKCk7XG4gICAgZm9yIChjb25zdCBpbmRleCBvZiBpbmRleGVzVG9SZW1vdmUpIHtcbiAgICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZVtrZXldID0gSlNPTi5zdHJpbmdpZnkodG9kb3MpO1xuICB9XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYmFja2dyb3VuZC5jc3NcIjogXCIuL3NyYy9zdHlsZXMvYmFja2dyb3VuZC5jc3NcIixcblx0XCIuL2Rpc3BsYXkuY3NzXCI6IFwiLi9zcmMvc3R5bGVzL2Rpc3BsYXkuY3NzXCIsXG5cdFwiLi9ob3Zlci5jc3NcIjogXCIuL3NyYy9zdHlsZXMvaG92ZXIuY3NzXCIsXG5cdFwiLi9wcmlvcml0eS5jc3NcIjogXCIuL3NyYy9zdHlsZXMvcHJpb3JpdHkuY3NzXCIsXG5cdFwiLi9yZXNldC5jc3NcIjogXCIuL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCIsXG5cdFwiLi9zY3JvbGxiYXIuY3NzXCI6IFwiLi9zcmMvc3R5bGVzL3Njcm9sbGJhci5jc3NcIixcblx0XCIuL3N0eWxlLmNzc1wiOiBcIi4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIixcblx0XCIuL3RoZW1lLmNzc1wiOiBcIi4vc3JjL3N0eWxlcy90aGVtZS5jc3NcIixcblx0XCIuL3RvZG8uY3NzXCI6IFwiLi9zcmMvc3R5bGVzL3RvZG8uY3NzXCIsXG5cdFwiLi91dGlsaXR5LmNzc1wiOiBcIi4vc3JjL3N0eWxlcy91dGlsaXR5LmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9zdHlsZXMgc3luYyByZWN1cnNpdmUgXFxcXC5jc3MkXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9