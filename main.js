/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/dist/typed.module.js");
/* harmony import */ var _img_computer_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/computer.png */ "./src/img/computer.png");
/* harmony import */ var _img_hand_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/hand.svg */ "./src/img/hand.svg");
// eslint-disable-next-line import/no-extraneous-dependencies



function HomePage() {
  var mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  mainContainer.id = "home";
  var firstBlockHome = document.createElement("div");
  firstBlockHome.classList.add("first-block-home");
  var textContainer = document.createElement("div");
  textContainer.classList.add("text-container");
  var subTextContainer = document.createElement("div");
  subTextContainer.classList.add("sub-text-container");
  var firstTextContainer = document.createElement("div");
  firstTextContainer.classList.add("first-text-container");
  var firstText = document.createElement("h3");
  firstText.textContent = "Hi, There!";
  firstTextContainer.appendChild(firstText);
  var wave = document.createElement("img");
  wave.classList.add("wave");
  wave.src = _img_hand_svg__WEBPACK_IMPORTED_MODULE_2__;
  wave.alt = "Wave";
  firstTextContainer.appendChild(wave);
  var secondTextContainer = document.createElement("div");
  secondTextContainer.classList.add("second-text-container");
  var secondText = document.createElement("h5");
  secondText.textContent = "I'm ";
  var name = document.createElement("span");
  name.textContent = "Shahir Ahmed";
  name.classList.add("name");
  secondText.appendChild(name);
  secondTextContainer.appendChild(secondText);
  subTextContainer.appendChild(firstTextContainer);
  subTextContainer.appendChild(secondTextContainer);
  var typedTextContainer = document.createElement("div");
  typedTextContainer.classList.add("typed-text-container");
  var typedText = document.createElement("p");
  typedText.classList.add("typed-text");
  typedText.id = "typed-text";
  typedTextContainer.appendChild(typedText);
  textContainer.appendChild(subTextContainer);
  textContainer.appendChild(typedTextContainer);
  firstBlockHome.appendChild(textContainer);
  var imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  var image = document.createElement("img");
  image.src = _img_computer_png__WEBPACK_IMPORTED_MODULE_1__;
  image.alt = "Computer";
  image.classList.add("computer");
  imageContainer.appendChild(image);
  firstBlockHome.appendChild(imageContainer);
  mainContainer.appendChild(firstBlockHome);
  var content = document.querySelector("div#content");
  content.appendChild(mainContainer);
  dynamicText();
}
function dynamicText() {
  var typed = new typed_js__WEBPACK_IMPORTED_MODULE_0__["default"]("#typed-text", {
    // Strings to display
    strings: ["Full Stack Developer", "MERN Stack Developer", "Creative Coder"],
    // Speed settings
    typeSpeed: 50,
    backSpeed: 25,
    // Time before typing starts
    startDelay: 1000,
    // Time before erasing
    backDelay: 2000,
    // Loop the animation
    loop: true,
    // Show cursor
    showCursor: true,
    // Character for cursor
    cursorChar: "|",
    // Attribute to type (null == text)
    attr: null,
    // Whether to start typing automatically
    autoInsertCss: true,
    // Default content before typing
    contentType: "html"
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/icon.svg */ "./src/img/icon.svg");
/* harmony import */ var _img_home_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/home.svg */ "./src/img/home.svg");
/* harmony import */ var _img_about_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/about.svg */ "./src/img/about.svg");
/* harmony import */ var _img_code_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/code.svg */ "./src/img/code.svg");
/* harmony import */ var _img_doc_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/doc.svg */ "./src/img/doc.svg");





function createNavBar() {
  var bar = document.createElement("nav");
  bar.classList.add("nav-bar");
  var logContainer = document.createElement("div");
  logContainer.classList.add("log-container");
  var logoBox = document.createElement("div");
  logoBox.classList.add("logo-box");
  var logo = document.createElement("img");
  logo.src = _img_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
  logo.alt = "logo";
  var logoLink = document.createElement("a");
  logoLink.appendChild(logo);
  logoBox.appendChild(logoLink);
  var logoText = document.createElement("h1");
  logoText.textContent = "Shahir Ahmed";
  var logoLink2 = document.createElement("a");
  logoLink2.appendChild(logoText);
  logoBox.appendChild(logoLink2);
  logContainer.appendChild(logoBox);
  var navLinks = document.createElement("div");
  navLinks.classList.add("nav-links");
  var homeBox = document.createElement("div");
  homeBox.classList.add("nav-box");
  var homeLink = document.createElement("a");
  homeLink.href = "#";
  homeLink.textContent = "Home";
  homeBox.appendChild(homeLink);
  var homeIcon = document.createElement("img");
  homeIcon.src = _img_home_svg__WEBPACK_IMPORTED_MODULE_1__;
  homeIcon.alt = "home";
  homeBox.appendChild(homeIcon);
  navLinks.appendChild(homeBox);
  var menuLinkbox = document.createElement("div");
  menuLinkbox.classList.add("nav-box");
  var menuLink = document.createElement("a");
  menuLink.href = "#";
  menuLink.textContent = "About";
  menuLinkbox.appendChild(menuLink);
  var menuIcon = document.createElement("img");
  menuIcon.src = _img_about_svg__WEBPACK_IMPORTED_MODULE_2__;
  menuIcon.alt = "about";
  menuLinkbox.appendChild(menuIcon);
  navLinks.appendChild(menuLinkbox);
  var contactLinkbox = document.createElement("div");
  contactLinkbox.classList.add("nav-box");
  var contactLink = document.createElement("a");
  contactLink.href = "#";
  contactLink.textContent = "Projects";
  contactLinkbox.appendChild(contactLink);
  var contactIcon = document.createElement("img");
  contactIcon.src = _img_code_svg__WEBPACK_IMPORTED_MODULE_3__;
  contactIcon.alt = "projects";
  contactLinkbox.appendChild(contactIcon);
  navLinks.appendChild(contactLinkbox);
  var AboutLinkbox = document.createElement("div");
  AboutLinkbox.classList.add("nav-box");
  var AboutLink = document.createElement("a");
  AboutLink.href = "#";
  AboutLink.textContent = "Resume";
  AboutLinkbox.appendChild(AboutLink);
  var AboutIcon = document.createElement("img");
  AboutIcon.src = _img_doc_svg__WEBPACK_IMPORTED_MODULE_4__;
  AboutIcon.alt = "resume";
  AboutLinkbox.appendChild(AboutIcon);
  navLinks.appendChild(AboutLinkbox);
  bar.appendChild(logContainer);
  bar.appendChild(navLinks);
  var content = document.querySelector("div#content");
  content.appendChild(bar);
}
function setupPage() {
  createNavBar();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/background.jpg */ "./src/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
	color: #e0e0e0;
	background-color: #000000;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	background-size: contain !important;
	background-repeat: no-repeat !important;
	font-family: sans-serif;
}

div#content {
	min-height: 1000vh;
	display: flex;
	flex-direction: column;
}

.nav-bar {
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 3rem;
	transition: all 0.3s ease;
	z-index: 999;
}

.logo-box {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.logo-box img {
	width: 3rem;
	height: auto;
	cursor: pointer;
}

.log-container:hover {
	cursor: pointer;
}

.logo-box a {
	text-decoration: none;
}

.log-container:hover:after {
	width: 100%;
}

.log-container:hover .logo-box a h1 {
	color: #ffffffff;
}

.log-container:hover .logo-box img {
	filter: brightness(3);
}

.log-container:after {
	background: #4fd1c5;
	border-radius: 16px;
	bottom: 1px;
	content: "";
	display: block;
	height: 5px;
	left: 0;
	position: relative;
	transition: all 0.3s ease-out 0s;
	width: 0;
	z-index: -1;
}

.logo-box a h1 {
	font-size: 2rem;
	font-weight: 500;
	cursor: pointer;
	margin: 0;
}

.nav-links {
	display: flex;
	align-items: center;
	gap: 2rem;
}

.nav-links a {
	color: #e0e0e0;
	font-size: 1.5rem;
	font-weight: 100;
	text-decoration: none;
}

.nav-links a:hover {
	color: #ffffffff;
}

.nav-links .nav-box:hover {
	cursor: pointer;
}

.nav-links .nav-box:hover a {
	color: #ffffffff;
}

.nav-links .nav-box:hover img {
	filter: brightness(3);
}

.nav-links .nav-box:hover:after {
	width: 100%;
}

.nav-links .nav-box {
	position: relative;
}

.nav-links .nav-box:after {
	background: #4fd1c5;
	border-radius: 16px;
	bottom: -5px;
	content: "";
	display: block;
	height: 5px;
	left: 0;
	position: absolute;
	transition: all 0.3s ease-out 0s;
	width: 0;
	z-index: -1;
}

.main-container {
	display: flex;
	flex-direction: column;
}

.first-block-home {
	display: grid;
	justify-items: center;
	align-items: center;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	padding: 0 3rem;
	gap: 1rem;
}

.text-container {
	display: flex;
	flex-direction: column;
}

.sub-text-container {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.image-container {
	width: 75%;
}

.computer {
	width: 100%;
	height: auto;
}

.first-text-container {
	display: flex;
	flex-direction: row;
	gap: 1rem;
}

.typed-text-container {
	display: flex;
	align-items: center;
}

.nav-box {
	padding: 0.25rem 0rem;
}

.wave {
	width: 2rem;
	height: auto;
	animation-name: wave-animation;
	animation-duration: 2.5s;
	animation-iteration-count: infinite;
	transform-origin: 70% 70%;
	display: inline-block;
	filter: brightness(0.9);
}

@keyframes wave-animation {
	0% {
		transform: rotate(0deg);
	}
	10% {
		transform: rotate(-10deg);
	}
	20% {
		transform: rotate(12deg);
	}
	30% {
		transform: rotate(-10deg);
	}
	40% {
		transform: rotate(9deg);
	}
	50% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(0deg);
	}
}

.name {
	font-size: 3rem;
	font-weight: 700;
	color: #4fd1c5;
}

.nav-box {
	display: flex;
	flex-direction: row-reverse;
	gap: 0.5rem;
	align-items: center;
}

.nav-box img {
	width: 2rem;
	height: auto;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;CACC,cAAc;CACd,yBAAyB;CACzB,yDAA4C;CAC5C,mCAAmC;CACnC,uCAAuC;CACvC,uBAAuB;AACxB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,gBAAgB;CAChB,MAAM;CACN,OAAO;CACP,QAAQ;CACR,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;CACnB,oBAAoB;CACpB,yBAAyB;CACzB,YAAY;AACb;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,mBAAmB;CACnB,mBAAmB;CACnB,WAAW;CACX,WAAW;CACX,cAAc;CACd,WAAW;CACX,OAAO;CACP,kBAAkB;CAClB,gCAAgC;CAChC,QAAQ;CACR,WAAW;AACZ;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,eAAe;CACf,SAAS;AACV;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,cAAc;CACd,iBAAiB;CACjB,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;CACnB,mBAAmB;CACnB,YAAY;CACZ,WAAW;CACX,cAAc;CACd,WAAW;CACX,OAAO;CACP,kBAAkB;CAClB,gCAAgC;CAChC,QAAQ;CACR,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,qBAAqB;CACrB,mBAAmB;CACnB,2DAA2D;CAC3D,eAAe;CACf,SAAS;AACV;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;AACV;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,8BAA8B;CAC9B,wBAAwB;CACxB,mCAAmC;CACnC,yBAAyB;CACzB,qBAAqB;CACrB,uBAAuB;AACxB;;AAEA;CACC;EACC,uBAAuB;CACxB;CACA;EACC,yBAAyB;CAC1B;CACA;EACC,wBAAwB;CACzB;CACA;EACC,yBAAyB;CAC1B;CACA;EACC,uBAAuB;CACxB;CACA;EACC,uBAAuB;CACxB;CACA;EACC,uBAAuB;CACxB;AACD;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,cAAc;AACf;;AAEA;CACC,aAAa;CACb,2BAA2B;CAC3B,WAAW;CACX,mBAAmB;AACpB;;AAEA;CACC,WAAW;CACX,YAAY;AACb","sourcesContent":["body {\n\tcolor: #e0e0e0;\n\tbackground-color: #000000;\n\tbackground-image: url(../img/background.jpg);\n\tbackground-size: contain !important;\n\tbackground-repeat: no-repeat !important;\n\tfont-family: sans-serif;\n}\n\ndiv#content {\n\tmin-height: 1000vh;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.nav-bar {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1.5rem 3rem;\n\ttransition: all 0.3s ease;\n\tz-index: 999;\n}\n\n.logo-box {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.logo-box img {\n\twidth: 3rem;\n\theight: auto;\n\tcursor: pointer;\n}\n\n.log-container:hover {\n\tcursor: pointer;\n}\n\n.logo-box a {\n\ttext-decoration: none;\n}\n\n.log-container:hover:after {\n\twidth: 100%;\n}\n\n.log-container:hover .logo-box a h1 {\n\tcolor: #ffffffff;\n}\n\n.log-container:hover .logo-box img {\n\tfilter: brightness(3);\n}\n\n.log-container:after {\n\tbackground: #4fd1c5;\n\tborder-radius: 16px;\n\tbottom: 1px;\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 5px;\n\tleft: 0;\n\tposition: relative;\n\ttransition: all 0.3s ease-out 0s;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.logo-box a h1 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcursor: pointer;\n\tmargin: 0;\n}\n\n.nav-links {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 2rem;\n}\n\n.nav-links a {\n\tcolor: #e0e0e0;\n\tfont-size: 1.5rem;\n\tfont-weight: 100;\n\ttext-decoration: none;\n}\n\n.nav-links a:hover {\n\tcolor: #ffffffff;\n}\n\n.nav-links .nav-box:hover {\n\tcursor: pointer;\n}\n\n.nav-links .nav-box:hover a {\n\tcolor: #ffffffff;\n}\n\n.nav-links .nav-box:hover img {\n\tfilter: brightness(3);\n}\n\n.nav-links .nav-box:hover:after {\n\twidth: 100%;\n}\n\n.nav-links .nav-box {\n\tposition: relative;\n}\n\n.nav-links .nav-box:after {\n\tbackground: #4fd1c5;\n\tborder-radius: 16px;\n\tbottom: -5px;\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 5px;\n\tleft: 0;\n\tposition: absolute;\n\ttransition: all 0.3s ease-out 0s;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.main-container {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.first-block-home {\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tpadding: 0 3rem;\n\tgap: 1rem;\n}\n\n.text-container {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.sub-text-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.image-container {\n\twidth: 75%;\n}\n\n.computer {\n\twidth: 100%;\n\theight: auto;\n}\n\n.first-text-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 1rem;\n}\n\n.typed-text-container {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.nav-box {\n\tpadding: 0.25rem 0rem;\n}\n\n.wave {\n\twidth: 2rem;\n\theight: auto;\n\tanimation-name: wave-animation;\n\tanimation-duration: 2.5s;\n\tanimation-iteration-count: infinite;\n\ttransform-origin: 70% 70%;\n\tdisplay: inline-block;\n\tfilter: brightness(0.9);\n}\n\n@keyframes wave-animation {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t10% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t20% {\n\t\ttransform: rotate(12deg);\n\t}\n\t30% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t40% {\n\t\ttransform: rotate(9deg);\n\t}\n\t50% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(0deg);\n\t}\n}\n\n.name {\n\tfont-size: 3rem;\n\tfont-weight: 700;\n\tcolor: #4fd1c5;\n}\n\n.nav-box {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tgap: 0.5rem;\n\talign-items: center;\n}\n\n.nav-box img {\n\twidth: 2rem;\n\theight: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/img/about.svg":
/*!***************************!*\
  !*** ./src/img/about.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/about.svg";

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/background.jpg";

/***/ }),

/***/ "./src/img/code.svg":
/*!**************************!*\
  !*** ./src/img/code.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/code.svg";

/***/ }),

/***/ "./src/img/computer.png":
/*!******************************!*\
  !*** ./src/img/computer.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/computer.png";

/***/ }),

/***/ "./src/img/doc.svg":
/*!*************************!*\
  !*** ./src/img/doc.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/doc.svg";

/***/ }),

/***/ "./src/img/hand.svg":
/*!**************************!*\
  !*** ./src/img/hand.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/hand.svg";

/***/ }),

/***/ "./src/img/home.svg":
/*!**************************!*\
  !*** ./src/img/home.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/home.svg";

/***/ }),

/***/ "./src/img/icon.svg":
/*!**************************!*\
  !*** ./src/img/icon.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/icon.svg";

/***/ }),

/***/ "./node_modules/typed.js/dist/typed.module.js":
/*!****************************************************!*\
  !*** ./node_modules/typed.js/dist/typed.module.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i)
/* harmony export */ });
function t(){return t=Object.assign?Object.assign.bind():function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},t.apply(this,arguments)}var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:Infinity,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,s){},onStringTyped:function(t,s){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,s){},onTypingResumed:function(t,s){},onReset:function(t){},onStop:function(t,s){},onStart:function(t,s){},onDestroy:function(t){}},e=new(/*#__PURE__*/function(){function e(){}var n=e.prototype;return n.load=function(e,n,i){if(e.el="string"==typeof i?document.querySelector(i):i,e.options=t({},s,n),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map(function(t){return t.trim()}),e.stringsElement="string"==typeof e.options.stringsElement?document.querySelector(e.options.stringsElement):e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(e.stringsElement.children),o=r.length;if(o)for(var a=0;a<o;a+=1)e.strings.push(r[a].innerHTML.trim())}for(var u in e.strPos=0,e.currentElContent=this.getCurrentElContent(e),e.currentElContent&&e.currentElContent.length>0&&(e.strPos=e.currentElContent.length-1,e.strings.unshift(e.currentElContent)),e.sequence=[],e.strings)e.sequence[u]=u;e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.autoInsertCss=e.options.autoInsertCss,e.autoInsertCss&&(this.appendCursorAnimationCss(e),this.appendFadeOutAnimationCss(e))},n.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},n.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(e)}},n.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(e)}},e}()),n=new(/*#__PURE__*/function(){function t(){}var s=t.prototype;return s.typeHtmlChars=function(t,s,e){if("html"!==e.contentType)return s;var n=t.substring(s).charAt(0);if("<"===n||"&"===n){var i;for(i="<"===n?">":";";t.substring(s+1).charAt(0)!==i&&!(1+ ++s>t.length););s++}return s},s.backSpaceHtmlChars=function(t,s,e){if("html"!==e.contentType)return s;var n=t.substring(s).charAt(0);if(">"===n||";"===n){var i;for(i=">"===n?"<":"&";t.substring(s-1).charAt(0)!==i&&!(--s<0););s--}return s},t}()),i=/*#__PURE__*/function(){function t(t,s){e.load(this,s,t),this.begin()}var s=t.prototype;return s.toggle=function(){this.pause.status?this.start():this.stop()},s.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},s.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},s.destroy=function(){this.reset(!1),this.options.onDestroy(this)},s.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},s.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},s.typewrite=function(t,s){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout(function(){s=n.typeHtmlChars(t,s,e);var i=0,o=t.substring(s);if("^"===o.charAt(0)&&/^\^\d+/.test(o)){var a=1;a+=(o=/\d+/.exec(o)[0]).length,i=parseInt(o),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,s)+t.substring(s+a),e.toggleBlinking(!0)}if("`"===o.charAt(0)){for(;"`"!==t.substring(s+r).charAt(0)&&(r++,!(s+r>t.length)););var u=t.substring(0,s),p=t.substring(u.length+1,s+r),c=t.substring(s+r+1);t=u+p+c,r--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),s>=t.length?e.doneTyping(t,s):e.keepTyping(t,s,r),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},i)},i):this.setPauseStatus(t,s,!0)},s.keepTyping=function(t,s,e){0===s&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substring(0,s+=e);this.replaceText(n),this.typewrite(t,s)},s.doneTyping=function(t,s){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(t,s)},this.backDelay))},s.backspace=function(t,s){var e=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=n.backSpaceHtmlChars(t,s,e);var i=t.substring(0,s);if(e.replaceText(i),e.smartBackspace){var r=e.strings[e.arrayPos+1];e.stopNum=r&&i===r.substring(0,s)?s:0}s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},i)}else this.setPauseStatus(t,s,!1)},s.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},s.setPauseStatus=function(t,s,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=s},s.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},s.humanizer=function(t){return Math.round(Math.random()*t/2)+t},s.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},s.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},s.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},s.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop()}),this.el.addEventListener("blur",function(s){t.el.value&&0!==t.el.value.length||t.start()}))},s.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();
//# sourceMappingURL=typed.module.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ "./src/css/normalize.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");




console.log("Test build");
(0,_navbar__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_homepage__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxNQUFNLE9BQU8sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsc0JBQXNCLHFCQUFxQix1QkFBdUIscUJBQXFCLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLHNWQUFzVix1QkFBdUIsMkNBQTJDLFVBQVUsOEpBQThKLGNBQWMsR0FBRyx3RUFBd0UsbUJBQW1CLEdBQUcsc0pBQXNKLG1CQUFtQixxQkFBcUIsR0FBRyxvTkFBb04sNkJBQTZCLHNCQUFzQiw4QkFBOEIsVUFBVSx1SkFBdUosdUNBQXVDLDJCQUEyQixVQUFVLHlMQUF5TCxrQ0FBa0MsR0FBRywwSkFBMEoseUJBQXlCLHVDQUF1Qyw4Q0FBOEMsVUFBVSx5RkFBeUYsd0JBQXdCLEdBQUcscUtBQXFLLHVDQUF1QywyQkFBMkIsVUFBVSxzRUFBc0UsbUJBQW1CLEdBQUcsb0hBQW9ILG1CQUFtQixtQkFBbUIsdUJBQXVCLDZCQUE2QixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRyxxTEFBcUwsdUJBQXVCLEdBQUcsNFBBQTRQLDBCQUEwQiw0QkFBNEIsOEJBQThCLHNCQUFzQixVQUFVLGdHQUFnRyw2QkFBNkIsR0FBRyxxS0FBcUssZ0NBQWdDLEdBQUcseUpBQXlKLCtCQUErQixHQUFHLCtNQUErTSx1QkFBdUIsZUFBZSxHQUFHLHdNQUF3TSxtQ0FBbUMsR0FBRyw4REFBOEQsbUNBQW1DLEdBQUcsd1FBQXdRLDRCQUE0QiwyQkFBMkIsMkJBQTJCLDRCQUE0Qix1QkFBdUIsZ0NBQWdDLFVBQVUsZ0dBQWdHLDZCQUE2QixHQUFHLCtFQUErRSxtQkFBbUIsR0FBRyx3SUFBd0ksNEJBQTRCLHVCQUF1QixVQUFVLHdMQUF3TCxpQkFBaUIsR0FBRyx1SUFBdUksbUNBQW1DLGlDQUFpQyxVQUFVLDBIQUEwSCw2QkFBNkIsR0FBRyw2S0FBNkssZ0NBQWdDLDBCQUEwQixVQUFVLHNMQUFzTCxtQkFBbUIsR0FBRyxxRUFBcUUsdUJBQXVCLEdBQUcsOEpBQThKLGtCQUFrQixHQUFHLGdFQUFnRSxrQkFBa0IsR0FBRyxxQkFBcUI7QUFDbDJRO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BXdkM7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsc0hBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0ZBQW9GLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFB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QUFDQztBQUVsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0FBQ3pCRixtREFBUyxDQUFDLENBQUM7QUFDWGxFLHFEQUFRLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2Nzcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2Nzcy9ub3JtYWxpemUuY3NzPzZkNTQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdHlwZWQuanMvZGlzdC90eXBlZC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgVHlwZWQgZnJvbSBcInR5cGVkLmpzXCI7XG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSBcIi4vaW1nL2NvbXB1dGVyLnBuZ1wiO1xuaW1wb3J0IEhhbmQgZnJvbSBcIi4vaW1nL2hhbmQuc3ZnXCI7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXHRjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG5cdG1haW5Db250YWluZXIuaWQgPSBcImhvbWVcIjtcblxuXHRjb25zdCBmaXJzdEJsb2NrSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGZpcnN0QmxvY2tIb21lLmNsYXNzTGlzdC5hZGQoXCJmaXJzdC1ibG9jay1ob21lXCIpO1xuXG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBzdWJUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c3ViVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3ViLXRleHQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IGZpcnN0VGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGZpcnN0VGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmlyc3QtdGV4dC1jb250YWluZXJcIik7XG5cblx0Y29uc3QgZmlyc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRmaXJzdFRleHQudGV4dENvbnRlbnQgPSBcIkhpLCBUaGVyZSFcIjtcblx0Zmlyc3RUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0VGV4dCk7XG5cblx0Y29uc3Qgd2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdHdhdmUuY2xhc3NMaXN0LmFkZChcIndhdmVcIik7XG5cdHdhdmUuc3JjID0gSGFuZDtcblx0d2F2ZS5hbHQgPSBcIldhdmVcIjtcblx0Zmlyc3RUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHdhdmUpO1xuXG5cdGNvbnN0IHNlY29uZFRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzZWNvbmRUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtdGV4dC1jb250YWluZXJcIik7XG5cblx0Y29uc3Qgc2Vjb25kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcblx0c2Vjb25kVGV4dC50ZXh0Q29udGVudCA9IFwiSSdtIFwiO1xuXHRjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdG5hbWUudGV4dENvbnRlbnQgPSBcIlNoYWhpciBBaG1lZFwiO1xuXHRuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuXHRzZWNvbmRUZXh0LmFwcGVuZENoaWxkKG5hbWUpO1xuXHRzZWNvbmRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZFRleHQpO1xuXG5cdHN1YlRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RUZXh0Q29udGFpbmVyKTtcblx0c3ViVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRUZXh0Q29udGFpbmVyKTtcblxuXHRjb25zdCB0eXBlZFRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0eXBlZFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInR5cGVkLXRleHQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IHR5cGVkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHR0eXBlZFRleHQuY2xhc3NMaXN0LmFkZChcInR5cGVkLXRleHRcIik7XG5cdHR5cGVkVGV4dC5pZCA9IFwidHlwZWQtdGV4dFwiO1xuXG5cdHR5cGVkVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0eXBlZFRleHQpO1xuXG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViVGV4dENvbnRhaW5lcik7XG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodHlwZWRUZXh0Q29udGFpbmVyKTtcblxuXHRmaXJzdEJsb2NrSG9tZS5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblxuXHRjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1jb250YWluZXJcIik7XG5cblx0Y29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRpbWFnZS5zcmMgPSBDb21wdXRlcjtcblx0aW1hZ2UuYWx0ID0gXCJDb21wdXRlclwiO1xuXHRpbWFnZS5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXJcIik7XG5cdGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcblxuXHRmaXJzdEJsb2NrSG9tZS5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG5cblx0bWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdEJsb2NrSG9tZSk7XG5cblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblxuXHRkeW5hbWljVGV4dCgpO1xufVxuXG5mdW5jdGlvbiBkeW5hbWljVGV4dCgpIHtcblx0Y29uc3QgdHlwZWQgPSBuZXcgVHlwZWQoXCIjdHlwZWQtdGV4dFwiLCB7XG5cdFx0Ly8gU3RyaW5ncyB0byBkaXNwbGF5XG5cdFx0c3RyaW5nczogW1wiRnVsbCBTdGFjayBEZXZlbG9wZXJcIiwgXCJNRVJOIFN0YWNrIERldmVsb3BlclwiLCBcIkNyZWF0aXZlIENvZGVyXCJdLFxuXHRcdC8vIFNwZWVkIHNldHRpbmdzXG5cdFx0dHlwZVNwZWVkOiA1MCxcblx0XHRiYWNrU3BlZWQ6IDI1LFxuXHRcdC8vIFRpbWUgYmVmb3JlIHR5cGluZyBzdGFydHNcblx0XHRzdGFydERlbGF5OiAxMDAwLFxuXHRcdC8vIFRpbWUgYmVmb3JlIGVyYXNpbmdcblx0XHRiYWNrRGVsYXk6IDIwMDAsXG5cdFx0Ly8gTG9vcCB0aGUgYW5pbWF0aW9uXG5cdFx0bG9vcDogdHJ1ZSxcblx0XHQvLyBTaG93IGN1cnNvclxuXHRcdHNob3dDdXJzb3I6IHRydWUsXG5cdFx0Ly8gQ2hhcmFjdGVyIGZvciBjdXJzb3Jcblx0XHRjdXJzb3JDaGFyOiBcInxcIixcblx0XHQvLyBBdHRyaWJ1dGUgdG8gdHlwZSAobnVsbCA9PSB0ZXh0KVxuXHRcdGF0dHI6IG51bGwsXG5cdFx0Ly8gV2hldGhlciB0byBzdGFydCB0eXBpbmcgYXV0b21hdGljYWxseVxuXHRcdGF1dG9JbnNlcnRDc3M6IHRydWUsXG5cdFx0Ly8gRGVmYXVsdCBjb250ZW50IGJlZm9yZSB0eXBpbmdcblx0XHRjb250ZW50VHlwZTogXCJodG1sXCIsXG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiIsImltcG9ydCBJY29uIGZyb20gXCIuL2ltZy9pY29uLnN2Z1wiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaW1nL2hvbWUuc3ZnXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vaW1nL2Fib3V0LnN2Z1wiO1xuaW1wb3J0IENvZGUgZnJvbSBcIi4vaW1nL2NvZGUuc3ZnXCI7XG5pbXBvcnQgRG9jIGZyb20gXCIuL2ltZy9kb2Muc3ZnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcblx0Y29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblx0YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyXCIpO1xuXG5cdGNvbnN0IGxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGxvZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgbG9nb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGxvZ29Cb3guY2xhc3NMaXN0LmFkZChcImxvZ28tYm94XCIpO1xuXHRjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0bG9nby5zcmMgPSBJY29uO1xuXHRsb2dvLmFsdCA9IFwibG9nb1wiO1xuXHRjb25zdCBsb2dvTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRsb2dvTGluay5hcHBlbmRDaGlsZChsb2dvKTtcblx0bG9nb0JveC5hcHBlbmRDaGlsZChsb2dvTGluayk7XG5cdGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRsb2dvVGV4dC50ZXh0Q29udGVudCA9IFwiU2hhaGlyIEFobWVkXCI7XG5cdGNvbnN0IGxvZ29MaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRsb2dvTGluazIuYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuXHRsb2dvQm94LmFwcGVuZENoaWxkKGxvZ29MaW5rMik7XG5cdGxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvQm94KTtcblxuXHRjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG5hdkxpbmtzLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlua3NcIik7XG5cblx0Y29uc3QgaG9tZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGhvbWVCb3guY2xhc3NMaXN0LmFkZChcIm5hdi1ib3hcIik7XG5cdGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGhvbWVMaW5rLmhyZWYgPSBcIiNcIjtcblx0aG9tZUxpbmsudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblx0aG9tZUJveC5hcHBlbmRDaGlsZChob21lTGluayk7XG5cblx0Y29uc3QgaG9tZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRob21lSWNvbi5zcmMgPSBIb21lO1xuXHRob21lSWNvbi5hbHQgPSBcImhvbWVcIjtcblx0aG9tZUJveC5hcHBlbmRDaGlsZChob21lSWNvbik7XG5cblx0bmF2TGlua3MuYXBwZW5kQ2hpbGQoaG9tZUJveCk7XG5cblx0Y29uc3QgbWVudUxpbmtib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRtZW51TGlua2JveC5jbGFzc0xpc3QuYWRkKFwibmF2LWJveFwiKTtcblx0Y29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bWVudUxpbmsuaHJlZiA9IFwiI1wiO1xuXHRtZW51TGluay50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcblx0bWVudUxpbmtib3guYXBwZW5kQ2hpbGQobWVudUxpbmspO1xuXG5cdGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0bWVudUljb24uc3JjID0gQWJvdXQ7XG5cdG1lbnVJY29uLmFsdCA9IFwiYWJvdXRcIjtcblx0bWVudUxpbmtib3guYXBwZW5kQ2hpbGQobWVudUljb24pO1xuXHRuYXZMaW5rcy5hcHBlbmRDaGlsZChtZW51TGlua2JveCk7XG5cblx0Y29uc3QgY29udGFjdExpbmtib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb250YWN0TGlua2JveC5jbGFzc0xpc3QuYWRkKFwibmF2LWJveFwiKTtcblx0Y29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0Y29udGFjdExpbmsuaHJlZiA9IFwiI1wiO1xuXHRjb250YWN0TGluay50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcblx0Y29udGFjdExpbmtib3guYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xuXG5cdGNvbnN0IGNvbnRhY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Y29udGFjdEljb24uc3JjID0gQ29kZTtcblx0Y29udGFjdEljb24uYWx0ID0gXCJwcm9qZWN0c1wiO1xuXHRjb250YWN0TGlua2JveC5hcHBlbmRDaGlsZChjb250YWN0SWNvbik7XG5cdG5hdkxpbmtzLmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rYm94KTtcblxuXHRjb25zdCBBYm91dExpbmtib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRBYm91dExpbmtib3guY2xhc3NMaXN0LmFkZChcIm5hdi1ib3hcIik7XG5cblx0Y29uc3QgQWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdEFib3V0TGluay5ocmVmID0gXCIjXCI7XG5cdEFib3V0TGluay50ZXh0Q29udGVudCA9IFwiUmVzdW1lXCI7XG5cdEFib3V0TGlua2JveC5hcHBlbmRDaGlsZChBYm91dExpbmspO1xuXG5cdGNvbnN0IEFib3V0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdEFib3V0SWNvbi5zcmMgPSBEb2M7XG5cdEFib3V0SWNvbi5hbHQgPSBcInJlc3VtZVwiO1xuXHRBYm91dExpbmtib3guYXBwZW5kQ2hpbGQoQWJvdXRJY29uKTtcblx0bmF2TGlua3MuYXBwZW5kQ2hpbGQoQWJvdXRMaW5rYm94KTtcblxuXHRiYXIuYXBwZW5kQ2hpbGQobG9nQ29udGFpbmVyKTtcblx0YmFyLmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKGJhcik7XG59XG5cbmZ1bmN0aW9uIHNldHVwUGFnZSgpIHtcblx0Y3JlYXRlTmF2QmFyKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwUGFnZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBcXGBtYWluXFxgIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxuICovXG5cbm1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBcXGBoMVxcYCBlbGVtZW50cyB3aXRoaW4gXFxgc2VjdGlvblxcYCBhbmRcbiAqIFxcYGFydGljbGVcXGAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxuICovXG5cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC42N2VtIDA7XG59XG5cbi8qIEdyb3VwaW5nIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG5cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXG4gKi9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4gKiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyogRm9ybXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCB7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uLFxuc2VsZWN0IHsgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcblt0eXBlPVwiYnV0dG9uXCJdLFxuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gKi9cblxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmxlZ2VuZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAqL1xuXG5bdHlwZT1cImNoZWNrYm94XCJdLFxuW3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiAqL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXG4gKi9cblxuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qIE1pc2NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICovXG5cbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cbiAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuXHRjb2xvcjogI2UwZTBlMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuZGl2I2NvbnRlbnQge1xuXHRtaW4taGVpZ2h0OiAxMDAwdmg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uYXYtYmFyIHtcblx0cG9zaXRpb246IHN0aWNreTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nOiAxLjVyZW0gM3JlbTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblx0ei1pbmRleDogOTk5O1xufVxuXG4ubG9nby1ib3gge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDFyZW07XG59XG5cbi5sb2dvLWJveCBpbWcge1xuXHR3aWR0aDogM3JlbTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2ctY29udGFpbmVyOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nby1ib3ggYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxvZy1jb250YWluZXI6aG92ZXI6YWZ0ZXIge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmxvZy1jb250YWluZXI6aG92ZXIgLmxvZ28tYm94IGEgaDEge1xuXHRjb2xvcjogI2ZmZmZmZmZmO1xufVxuXG4ubG9nLWNvbnRhaW5lcjpob3ZlciAubG9nby1ib3ggaW1nIHtcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDMpO1xufVxuXG4ubG9nLWNvbnRhaW5lcjphZnRlciB7XG5cdGJhY2tncm91bmQ6ICM0ZmQxYzU7XG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdGJvdHRvbTogMXB4O1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiBibG9jaztcblx0aGVpZ2h0OiA1cHg7XG5cdGxlZnQ6IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG5cdHdpZHRoOiAwO1xuXHR6LWluZGV4OiAtMTtcbn1cblxuLmxvZ28tYm94IGEgaDEge1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0bWFyZ2luOiAwO1xufVxuXG4ubmF2LWxpbmtzIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAycmVtO1xufVxuXG4ubmF2LWxpbmtzIGEge1xuXHRjb2xvcjogI2UwZTBlMDtcblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdGZvbnQtd2VpZ2h0OiAxMDA7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5hdi1saW5rcyBhOmhvdmVyIHtcblx0Y29sb3I6ICNmZmZmZmZmZjtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciBhIHtcblx0Y29sb3I6ICNmZmZmZmZmZjtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciBpbWcge1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XG59XG5cbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXI6YWZ0ZXIge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveDphZnRlciB7XG5cdGJhY2tncm91bmQ6ICM0ZmQxYzU7XG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdGJvdHRvbTogLTVweDtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGhlaWdodDogNXB4O1xuXHRsZWZ0OiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xuXHR3aWR0aDogMDtcblx0ei1pbmRleDogLTE7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5maXJzdC1ibG9jay1ob21lIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcblx0cGFkZGluZzogMCAzcmVtO1xuXHRnYXA6IDFyZW07XG59XG5cbi50ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zdWItdGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDFyZW07XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuXHR3aWR0aDogNzUlO1xufVxuXG4uY29tcHV0ZXIge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4uZmlyc3QtdGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRnYXA6IDFyZW07XG59XG5cbi50eXBlZC10ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtYm94IHtcblx0cGFkZGluZzogMC4yNXJlbSAwcmVtO1xufVxuXG4ud2F2ZSB7XG5cdHdpZHRoOiAycmVtO1xuXHRoZWlnaHQ6IGF1dG87XG5cdGFuaW1hdGlvbi1uYW1lOiB3YXZlLWFuaW1hdGlvbjtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAyLjVzO1xuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0dHJhbnNmb3JtLW9yaWdpbjogNzAlIDcwJTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbn1cblxuQGtleWZyYW1lcyB3YXZlLWFuaW1hdGlvbiB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxuXHQxMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG5cdH1cblx0MjAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XG5cdH1cblx0MzAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuXHR9XG5cdDQwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoOWRlZyk7XG5cdH1cblx0NTAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxufVxuXG4ubmFtZSB7XG5cdGZvbnQtc2l6ZTogM3JlbTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Y29sb3I6ICM0ZmQxYzU7XG59XG5cbi5uYXYtYm94IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXHRnYXA6IDAuNXJlbTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdi1ib3ggaW1nIHtcblx0d2lkdGg6IDJyZW07XG5cdGhlaWdodDogYXV0bztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxjQUFjO0NBQ2QseUJBQXlCO0NBQ3pCLHlEQUE0QztDQUM1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b3VuZC1jb2xvcjogIzAwMDAwMDtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2JhY2tncm91bmQuanBnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmRpdiNjb250ZW50IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuXFx0cG9zaXRpb246IHN0aWNreTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRyaWdodDogMDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuXFx0ei1pbmRleDogOTk5O1xcbn1cXG5cXG4ubG9nby1ib3gge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5sb2dvLWJveCBpbWcge1xcblxcdHdpZHRoOiAzcmVtO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2ctY29udGFpbmVyOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2dvLWJveCBhIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5sb2ctY29udGFpbmVyOmhvdmVyOmFmdGVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxvZy1jb250YWluZXI6aG92ZXIgLmxvZ28tYm94IGEgaDEge1xcblxcdGNvbG9yOiAjZmZmZmZmZmY7XFxufVxcblxcbi5sb2ctY29udGFpbmVyOmhvdmVyIC5sb2dvLWJveCBpbWcge1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcygzKTtcXG59XFxuXFxuLmxvZy1jb250YWluZXI6YWZ0ZXIge1xcblxcdGJhY2tncm91bmQ6ICM0ZmQxYzU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTZweDtcXG5cXHRib3R0b206IDFweDtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRoZWlnaHQ6IDVweDtcXG5cXHRsZWZ0OiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcXG5cXHR3aWR0aDogMDtcXG5cXHR6LWluZGV4OiAtMTtcXG59XFxuXFxuLmxvZ28tYm94IGEgaDEge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5uYXYtbGlua3Mge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDJyZW07XFxufVxcblxcbi5uYXYtbGlua3MgYSB7XFxuXFx0Y29sb3I6ICNlMGUwZTA7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDEwMDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5uYXYtbGlua3MgYTpob3ZlciB7XFxuXFx0Y29sb3I6ICNmZmZmZmZmZjtcXG59XFxuXFxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyIGEge1xcblxcdGNvbG9yOiAjZmZmZmZmZmY7XFxufVxcblxcbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXIgaW1nIHtcXG5cXHRmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XFxufVxcblxcbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXI6YWZ0ZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXYtbGlua3MgLm5hdi1ib3g6YWZ0ZXIge1xcblxcdGJhY2tncm91bmQ6ICM0ZmQxYzU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTZweDtcXG5cXHRib3R0b206IC01cHg7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0aGVpZ2h0OiA1cHg7XFxuXFx0bGVmdDogMDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XFxuXFx0d2lkdGg6IDA7XFxuXFx0ei1pbmRleDogLTE7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZmlyc3QtYmxvY2staG9tZSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG5cXHRwYWRkaW5nOiAwIDNyZW07XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4udGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnN1Yi10ZXh0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDc1JTtcXG59XFxuXFxuLmNvbXB1dGVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5maXJzdC10ZXh0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLnR5cGVkLXRleHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYm94IHtcXG5cXHRwYWRkaW5nOiAwLjI1cmVtIDByZW07XFxufVxcblxcbi53YXZlIHtcXG5cXHR3aWR0aDogMnJlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0YW5pbWF0aW9uLW5hbWU6IHdhdmUtYW5pbWF0aW9uO1xcblxcdGFuaW1hdGlvbi1kdXJhdGlvbjogMi41cztcXG5cXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiA3MCUgNzAlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXG59XFxuXFxuQGtleWZyYW1lcyB3YXZlLWFuaW1hdGlvbiB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXHQxMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuXFx0fVxcblxcdDIwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xcblxcdH1cXG5cXHQzMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuXFx0fVxcblxcdDQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoOWRlZyk7XFxuXFx0fVxcblxcdDUwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG59XFxuXFxuLm5hbWUge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiAjNGZkMWM1O1xcbn1cXG5cXG4ubmF2LWJveCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuXFx0Z2FwOiAwLjVyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1ib3ggaW1nIHtcXG5cXHR3aWR0aDogMnJlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiB0KCl7cmV0dXJuIHQ9T2JqZWN0LmFzc2lnbj9PYmplY3QuYXNzaWduLmJpbmQoKTpmdW5jdGlvbih0KXtmb3IodmFyIHM9MTtzPGFyZ3VtZW50cy5sZW5ndGg7cysrKXt2YXIgZT1hcmd1bWVudHNbc107Zm9yKHZhciBuIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbikmJih0W25dPWVbbl0pfXJldHVybiB0fSx0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgcz17c3RyaW5nczpbXCJUaGVzZSBhcmUgdGhlIGRlZmF1bHQgdmFsdWVzLi4uXCIsXCJZb3Uga25vdyB3aGF0IHlvdSBzaG91bGQgZG8/XCIsXCJVc2UgeW91ciBvd24hXCIsXCJIYXZlIGEgZ3JlYXQgZGF5IVwiXSxzdHJpbmdzRWxlbWVudDpudWxsLHR5cGVTcGVlZDowLHN0YXJ0RGVsYXk6MCxiYWNrU3BlZWQ6MCxzbWFydEJhY2tzcGFjZTohMCxzaHVmZmxlOiExLGJhY2tEZWxheTo3MDAsZmFkZU91dDohMSxmYWRlT3V0Q2xhc3M6XCJ0eXBlZC1mYWRlLW91dFwiLGZhZGVPdXREZWxheTo1MDAsbG9vcDohMSxsb29wQ291bnQ6SW5maW5pdHksc2hvd0N1cnNvcjohMCxjdXJzb3JDaGFyOlwifFwiLGF1dG9JbnNlcnRDc3M6ITAsYXR0cjpudWxsLGJpbmRJbnB1dEZvY3VzRXZlbnRzOiExLGNvbnRlbnRUeXBlOlwiaHRtbFwiLG9uQmVnaW46ZnVuY3Rpb24odCl7fSxvbkNvbXBsZXRlOmZ1bmN0aW9uKHQpe30scHJlU3RyaW5nVHlwZWQ6ZnVuY3Rpb24odCxzKXt9LG9uU3RyaW5nVHlwZWQ6ZnVuY3Rpb24odCxzKXt9LG9uTGFzdFN0cmluZ0JhY2tzcGFjZWQ6ZnVuY3Rpb24odCl7fSxvblR5cGluZ1BhdXNlZDpmdW5jdGlvbih0LHMpe30sb25UeXBpbmdSZXN1bWVkOmZ1bmN0aW9uKHQscyl7fSxvblJlc2V0OmZ1bmN0aW9uKHQpe30sb25TdG9wOmZ1bmN0aW9uKHQscyl7fSxvblN0YXJ0OmZ1bmN0aW9uKHQscyl7fSxvbkRlc3Ryb3k6ZnVuY3Rpb24odCl7fX0sZT1uZXcoLyojX19QVVJFX18qL2Z1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe312YXIgbj1lLnByb3RvdHlwZTtyZXR1cm4gbi5sb2FkPWZ1bmN0aW9uKGUsbixpKXtpZihlLmVsPVwic3RyaW5nXCI9PXR5cGVvZiBpP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaSk6aSxlLm9wdGlvbnM9dCh7fSxzLG4pLGUuaXNJbnB1dD1cImlucHV0XCI9PT1lLmVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSxlLmF0dHI9ZS5vcHRpb25zLmF0dHIsZS5iaW5kSW5wdXRGb2N1c0V2ZW50cz1lLm9wdGlvbnMuYmluZElucHV0Rm9jdXNFdmVudHMsZS5zaG93Q3Vyc29yPSFlLmlzSW5wdXQmJmUub3B0aW9ucy5zaG93Q3Vyc29yLGUuY3Vyc29yQ2hhcj1lLm9wdGlvbnMuY3Vyc29yQ2hhcixlLmN1cnNvckJsaW5raW5nPSEwLGUuZWxDb250ZW50PWUuYXR0cj9lLmVsLmdldEF0dHJpYnV0ZShlLmF0dHIpOmUuZWwudGV4dENvbnRlbnQsZS5jb250ZW50VHlwZT1lLm9wdGlvbnMuY29udGVudFR5cGUsZS50eXBlU3BlZWQ9ZS5vcHRpb25zLnR5cGVTcGVlZCxlLnN0YXJ0RGVsYXk9ZS5vcHRpb25zLnN0YXJ0RGVsYXksZS5iYWNrU3BlZWQ9ZS5vcHRpb25zLmJhY2tTcGVlZCxlLnNtYXJ0QmFja3NwYWNlPWUub3B0aW9ucy5zbWFydEJhY2tzcGFjZSxlLmJhY2tEZWxheT1lLm9wdGlvbnMuYmFja0RlbGF5LGUuZmFkZU91dD1lLm9wdGlvbnMuZmFkZU91dCxlLmZhZGVPdXRDbGFzcz1lLm9wdGlvbnMuZmFkZU91dENsYXNzLGUuZmFkZU91dERlbGF5PWUub3B0aW9ucy5mYWRlT3V0RGVsYXksZS5pc1BhdXNlZD0hMSxlLnN0cmluZ3M9ZS5vcHRpb25zLnN0cmluZ3MubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0LnRyaW0oKX0pLGUuc3RyaW5nc0VsZW1lbnQ9XCJzdHJpbmdcIj09dHlwZW9mIGUub3B0aW9ucy5zdHJpbmdzRWxlbWVudD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUub3B0aW9ucy5zdHJpbmdzRWxlbWVudCk6ZS5vcHRpb25zLnN0cmluZ3NFbGVtZW50LGUuc3RyaW5nc0VsZW1lbnQpe2Uuc3RyaW5ncz1bXSxlLnN0cmluZ3NFbGVtZW50LnN0eWxlLmNzc1RleHQ9XCJjbGlwOiByZWN0KDAgMCAwIDApO2NsaXAtcGF0aDppbnNldCg1MCUpO2hlaWdodDoxcHg7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3doaXRlLXNwYWNlOm5vd3JhcDt3aWR0aDoxcHg7XCI7dmFyIHI9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGUuc3RyaW5nc0VsZW1lbnQuY2hpbGRyZW4pLG89ci5sZW5ndGg7aWYobylmb3IodmFyIGE9MDthPG87YSs9MSllLnN0cmluZ3MucHVzaChyW2FdLmlubmVySFRNTC50cmltKCkpfWZvcih2YXIgdSBpbiBlLnN0clBvcz0wLGUuY3VycmVudEVsQ29udGVudD10aGlzLmdldEN1cnJlbnRFbENvbnRlbnQoZSksZS5jdXJyZW50RWxDb250ZW50JiZlLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoPjAmJihlLnN0clBvcz1lLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoLTEsZS5zdHJpbmdzLnVuc2hpZnQoZS5jdXJyZW50RWxDb250ZW50KSksZS5zZXF1ZW5jZT1bXSxlLnN0cmluZ3MpZS5zZXF1ZW5jZVt1XT11O2UuYXJyYXlQb3M9MCxlLnN0b3BOdW09MCxlLmxvb3A9ZS5vcHRpb25zLmxvb3AsZS5sb29wQ291bnQ9ZS5vcHRpb25zLmxvb3BDb3VudCxlLmN1ckxvb3A9MCxlLnNodWZmbGU9ZS5vcHRpb25zLnNodWZmbGUsZS5wYXVzZT17c3RhdHVzOiExLHR5cGV3cml0ZTohMCxjdXJTdHJpbmc6XCJcIixjdXJTdHJQb3M6MH0sZS50eXBpbmdDb21wbGV0ZT0hMSxlLmF1dG9JbnNlcnRDc3M9ZS5vcHRpb25zLmF1dG9JbnNlcnRDc3MsZS5hdXRvSW5zZXJ0Q3NzJiYodGhpcy5hcHBlbmRDdXJzb3JBbmltYXRpb25Dc3MoZSksdGhpcy5hcHBlbmRGYWRlT3V0QW5pbWF0aW9uQ3NzKGUpKX0sbi5nZXRDdXJyZW50RWxDb250ZW50PWZ1bmN0aW9uKHQpe3JldHVybiB0LmF0dHI/dC5lbC5nZXRBdHRyaWJ1dGUodC5hdHRyKTp0LmlzSW5wdXQ/dC5lbC52YWx1ZTpcImh0bWxcIj09PXQuY29udGVudFR5cGU/dC5lbC5pbm5lckhUTUw6dC5lbC50ZXh0Q29udGVudH0sbi5hcHBlbmRDdXJzb3JBbmltYXRpb25Dc3M9ZnVuY3Rpb24odCl7dmFyIHM9XCJkYXRhLXR5cGVkLWpzLWN1cnNvci1jc3NcIjtpZih0LnNob3dDdXJzb3ImJiFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW1wiK3MrXCJdXCIpKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7ZS5zZXRBdHRyaWJ1dGUocyxcInRydWVcIiksZS5pbm5lckhUTUw9XCJcXG4gICAgICAgIC50eXBlZC1jdXJzb3J7XFxuICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgICAgICAudHlwZWQtY3Vyc29yLnR5cGVkLWN1cnNvci0tYmxpbmt7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgfVxcbiAgICAgICAgQGtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxcbiAgICAgICAgfVxcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHR5cGVkanNCbGlua3tcXG4gICAgICAgICAgMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxcbiAgICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgfVxcbiAgICAgIFwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZSl9fSxuLmFwcGVuZEZhZGVPdXRBbmltYXRpb25Dc3M9ZnVuY3Rpb24odCl7dmFyIHM9XCJkYXRhLXR5cGVkLWZhZGVvdXQtanMtY3NzXCI7aWYodC5mYWRlT3V0JiYhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltcIitzK1wiXVwiKSl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2Uuc2V0QXR0cmlidXRlKHMsXCJ0cnVlXCIpLGUuaW5uZXJIVE1MPVwiXFxuICAgICAgICAudHlwZWQtZmFkZS1vdXR7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cztcXG4gICAgICAgIH1cXG4gICAgICAgIC50eXBlZC1jdXJzb3IudHlwZWQtY3Vyc29yLS1ibGluay50eXBlZC1mYWRlLW91dHtcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDA7XFxuICAgICAgICAgIGFuaW1hdGlvbjogMDtcXG4gICAgICAgIH1cXG4gICAgICBcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpfX0sZX0oKSksbj1uZXcoLyojX19QVVJFX18qL2Z1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe312YXIgcz10LnByb3RvdHlwZTtyZXR1cm4gcy50eXBlSHRtbENoYXJzPWZ1bmN0aW9uKHQscyxlKXtpZihcImh0bWxcIiE9PWUuY29udGVudFR5cGUpcmV0dXJuIHM7dmFyIG49dC5zdWJzdHJpbmcocykuY2hhckF0KDApO2lmKFwiPFwiPT09bnx8XCImXCI9PT1uKXt2YXIgaTtmb3IoaT1cIjxcIj09PW4/XCI+XCI6XCI7XCI7dC5zdWJzdHJpbmcocysxKS5jaGFyQXQoMCkhPT1pJiYhKDErICsrcz50Lmxlbmd0aCk7KTtzKyt9cmV0dXJuIHN9LHMuYmFja1NwYWNlSHRtbENoYXJzPWZ1bmN0aW9uKHQscyxlKXtpZihcImh0bWxcIiE9PWUuY29udGVudFR5cGUpcmV0dXJuIHM7dmFyIG49dC5zdWJzdHJpbmcocykuY2hhckF0KDApO2lmKFwiPlwiPT09bnx8XCI7XCI9PT1uKXt2YXIgaTtmb3IoaT1cIj5cIj09PW4/XCI8XCI6XCImXCI7dC5zdWJzdHJpbmcocy0xKS5jaGFyQXQoMCkhPT1pJiYhKC0tczwwKTspO3MtLX1yZXR1cm4gc30sdH0oKSksaT0vKiNfX1BVUkVfXyovZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQscyl7ZS5sb2FkKHRoaXMscyx0KSx0aGlzLmJlZ2luKCl9dmFyIHM9dC5wcm90b3R5cGU7cmV0dXJuIHMudG9nZ2xlPWZ1bmN0aW9uKCl7dGhpcy5wYXVzZS5zdGF0dXM/dGhpcy5zdGFydCgpOnRoaXMuc3RvcCgpfSxzLnN0b3A9ZnVuY3Rpb24oKXt0aGlzLnR5cGluZ0NvbXBsZXRlfHx0aGlzLnBhdXNlLnN0YXR1c3x8KHRoaXMudG9nZ2xlQmxpbmtpbmcoITApLHRoaXMucGF1c2Uuc3RhdHVzPSEwLHRoaXMub3B0aW9ucy5vblN0b3AodGhpcy5hcnJheVBvcyx0aGlzKSl9LHMuc3RhcnQ9ZnVuY3Rpb24oKXt0aGlzLnR5cGluZ0NvbXBsZXRlfHx0aGlzLnBhdXNlLnN0YXR1cyYmKHRoaXMucGF1c2Uuc3RhdHVzPSExLHRoaXMucGF1c2UudHlwZXdyaXRlP3RoaXMudHlwZXdyaXRlKHRoaXMucGF1c2UuY3VyU3RyaW5nLHRoaXMucGF1c2UuY3VyU3RyUG9zKTp0aGlzLmJhY2tzcGFjZSh0aGlzLnBhdXNlLmN1clN0cmluZyx0aGlzLnBhdXNlLmN1clN0clBvcyksdGhpcy5vcHRpb25zLm9uU3RhcnQodGhpcy5hcnJheVBvcyx0aGlzKSl9LHMuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMucmVzZXQoITEpLHRoaXMub3B0aW9ucy5vbkRlc3Ryb3kodGhpcyl9LHMucmVzZXQ9ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9ITApLGNsZWFySW50ZXJ2YWwodGhpcy50aW1lb3V0KSx0aGlzLnJlcGxhY2VUZXh0KFwiXCIpLHRoaXMuY3Vyc29yJiZ0aGlzLmN1cnNvci5wYXJlbnROb2RlJiYodGhpcy5jdXJzb3IucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmN1cnNvciksdGhpcy5jdXJzb3I9bnVsbCksdGhpcy5zdHJQb3M9MCx0aGlzLmFycmF5UG9zPTAsdGhpcy5jdXJMb29wPTAsdCYmKHRoaXMuaW5zZXJ0Q3Vyc29yKCksdGhpcy5vcHRpb25zLm9uUmVzZXQodGhpcyksdGhpcy5iZWdpbigpKX0scy5iZWdpbj1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5vcHRpb25zLm9uQmVnaW4odGhpcyksdGhpcy50eXBpbmdDb21wbGV0ZT0hMSx0aGlzLnNodWZmbGVTdHJpbmdzSWZOZWVkZWQodGhpcyksdGhpcy5pbnNlcnRDdXJzb3IoKSx0aGlzLmJpbmRJbnB1dEZvY3VzRXZlbnRzJiZ0aGlzLmJpbmRGb2N1c0V2ZW50cygpLHRoaXMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7MD09PXQuc3RyUG9zP3QudHlwZXdyaXRlKHQuc3RyaW5nc1t0LnNlcXVlbmNlW3QuYXJyYXlQb3NdXSx0LnN0clBvcyk6dC5iYWNrc3BhY2UodC5zdHJpbmdzW3Quc2VxdWVuY2VbdC5hcnJheVBvc11dLHQuc3RyUG9zKX0sdGhpcy5zdGFydERlbGF5KX0scy50eXBld3JpdGU9ZnVuY3Rpb24odCxzKXt2YXIgZT10aGlzO3RoaXMuZmFkZU91dCYmdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5mYWRlT3V0Q2xhc3MpJiYodGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKSx0aGlzLmN1cnNvciYmdGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcykpO3ZhciBpPXRoaXMuaHVtYW5pemVyKHRoaXMudHlwZVNwZWVkKSxyPTE7ITAhPT10aGlzLnBhdXNlLnN0YXR1cz90aGlzLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3M9bi50eXBlSHRtbENoYXJzKHQscyxlKTt2YXIgaT0wLG89dC5zdWJzdHJpbmcocyk7aWYoXCJeXCI9PT1vLmNoYXJBdCgwKSYmL15cXF5cXGQrLy50ZXN0KG8pKXt2YXIgYT0xO2ErPShvPS9cXGQrLy5leGVjKG8pWzBdKS5sZW5ndGgsaT1wYXJzZUludChvKSxlLnRlbXBvcmFyeVBhdXNlPSEwLGUub3B0aW9ucy5vblR5cGluZ1BhdXNlZChlLmFycmF5UG9zLGUpLHQ9dC5zdWJzdHJpbmcoMCxzKSt0LnN1YnN0cmluZyhzK2EpLGUudG9nZ2xlQmxpbmtpbmcoITApfWlmKFwiYFwiPT09by5jaGFyQXQoMCkpe2Zvcig7XCJgXCIhPT10LnN1YnN0cmluZyhzK3IpLmNoYXJBdCgwKSYmKHIrKywhKHMrcj50Lmxlbmd0aCkpOyk7dmFyIHU9dC5zdWJzdHJpbmcoMCxzKSxwPXQuc3Vic3RyaW5nKHUubGVuZ3RoKzEscytyKSxjPXQuc3Vic3RyaW5nKHMrcisxKTt0PXUrcCtjLHItLX1lLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2UudG9nZ2xlQmxpbmtpbmcoITEpLHM+PXQubGVuZ3RoP2UuZG9uZVR5cGluZyh0LHMpOmUua2VlcFR5cGluZyh0LHMsciksZS50ZW1wb3JhcnlQYXVzZSYmKGUudGVtcG9yYXJ5UGF1c2U9ITEsZS5vcHRpb25zLm9uVHlwaW5nUmVzdW1lZChlLmFycmF5UG9zLGUpKX0saSl9LGkpOnRoaXMuc2V0UGF1c2VTdGF0dXModCxzLCEwKX0scy5rZWVwVHlwaW5nPWZ1bmN0aW9uKHQscyxlKXswPT09cyYmKHRoaXMudG9nZ2xlQmxpbmtpbmcoITEpLHRoaXMub3B0aW9ucy5wcmVTdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLHRoaXMpKTt2YXIgbj10LnN1YnN0cmluZygwLHMrPWUpO3RoaXMucmVwbGFjZVRleHQobiksdGhpcy50eXBld3JpdGUodCxzKX0scy5kb25lVHlwaW5nPWZ1bmN0aW9uKHQscyl7dmFyIGU9dGhpczt0aGlzLm9wdGlvbnMub25TdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLHRoaXMpLHRoaXMudG9nZ2xlQmxpbmtpbmcoITApLHRoaXMuYXJyYXlQb3M9PT10aGlzLnN0cmluZ3MubGVuZ3RoLTEmJih0aGlzLmNvbXBsZXRlKCksITE9PT10aGlzLmxvb3B8fHRoaXMuY3VyTG9vcD09PXRoaXMubG9vcENvdW50KXx8KHRoaXMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5iYWNrc3BhY2UodCxzKX0sdGhpcy5iYWNrRGVsYXkpKX0scy5iYWNrc3BhY2U9ZnVuY3Rpb24odCxzKXt2YXIgZT10aGlzO2lmKCEwIT09dGhpcy5wYXVzZS5zdGF0dXMpe2lmKHRoaXMuZmFkZU91dClyZXR1cm4gdGhpcy5pbml0RmFkZU91dCgpO3RoaXMudG9nZ2xlQmxpbmtpbmcoITEpO3ZhciBpPXRoaXMuaHVtYW5pemVyKHRoaXMuYmFja1NwZWVkKTt0aGlzLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3M9bi5iYWNrU3BhY2VIdG1sQ2hhcnModCxzLGUpO3ZhciBpPXQuc3Vic3RyaW5nKDAscyk7aWYoZS5yZXBsYWNlVGV4dChpKSxlLnNtYXJ0QmFja3NwYWNlKXt2YXIgcj1lLnN0cmluZ3NbZS5hcnJheVBvcysxXTtlLnN0b3BOdW09ciYmaT09PXIuc3Vic3RyaW5nKDAscyk/czowfXM+ZS5zdG9wTnVtPyhzLS0sZS5iYWNrc3BhY2UodCxzKSk6czw9ZS5zdG9wTnVtJiYoZS5hcnJheVBvcysrLGUuYXJyYXlQb3M9PT1lLnN0cmluZ3MubGVuZ3RoPyhlLmFycmF5UG9zPTAsZS5vcHRpb25zLm9uTGFzdFN0cmluZ0JhY2tzcGFjZWQoKSxlLnNodWZmbGVTdHJpbmdzSWZOZWVkZWQoKSxlLmJlZ2luKCkpOmUudHlwZXdyaXRlKGUuc3RyaW5nc1tlLnNlcXVlbmNlW2UuYXJyYXlQb3NdXSxzKSl9LGkpfWVsc2UgdGhpcy5zZXRQYXVzZVN0YXR1cyh0LHMsITEpfSxzLmNvbXBsZXRlPWZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLm9uQ29tcGxldGUodGhpcyksdGhpcy5sb29wP3RoaXMuY3VyTG9vcCsrOnRoaXMudHlwaW5nQ29tcGxldGU9ITB9LHMuc2V0UGF1c2VTdGF0dXM9ZnVuY3Rpb24odCxzLGUpe3RoaXMucGF1c2UudHlwZXdyaXRlPWUsdGhpcy5wYXVzZS5jdXJTdHJpbmc9dCx0aGlzLnBhdXNlLmN1clN0clBvcz1zfSxzLnRvZ2dsZUJsaW5raW5nPWZ1bmN0aW9uKHQpe3RoaXMuY3Vyc29yJiYodGhpcy5wYXVzZS5zdGF0dXN8fHRoaXMuY3Vyc29yQmxpbmtpbmchPT10JiYodGhpcy5jdXJzb3JCbGlua2luZz10LHQ/dGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZChcInR5cGVkLWN1cnNvci0tYmxpbmtcIik6dGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZShcInR5cGVkLWN1cnNvci0tYmxpbmtcIikpKX0scy5odW1hbml6ZXI9ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSp0LzIpK3R9LHMuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZD1mdW5jdGlvbigpe3RoaXMuc2h1ZmZsZSYmKHRoaXMuc2VxdWVuY2U9dGhpcy5zZXF1ZW5jZS5zb3J0KGZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgucmFuZG9tKCktLjV9KSl9LHMuaW5pdEZhZGVPdXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3JldHVybiB0aGlzLmVsLmNsYXNzTmFtZSs9XCIgXCIrdGhpcy5mYWRlT3V0Q2xhc3MsdGhpcy5jdXJzb3ImJih0aGlzLmN1cnNvci5jbGFzc05hbWUrPVwiIFwiK3RoaXMuZmFkZU91dENsYXNzKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5hcnJheVBvcysrLHQucmVwbGFjZVRleHQoXCJcIiksdC5zdHJpbmdzLmxlbmd0aD50LmFycmF5UG9zP3QudHlwZXdyaXRlKHQuc3RyaW5nc1t0LnNlcXVlbmNlW3QuYXJyYXlQb3NdXSwwKToodC50eXBld3JpdGUodC5zdHJpbmdzWzBdLDApLHQuYXJyYXlQb3M9MCl9LHRoaXMuZmFkZU91dERlbGF5KX0scy5yZXBsYWNlVGV4dD1mdW5jdGlvbih0KXt0aGlzLmF0dHI/dGhpcy5lbC5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyLHQpOnRoaXMuaXNJbnB1dD90aGlzLmVsLnZhbHVlPXQ6XCJodG1sXCI9PT10aGlzLmNvbnRlbnRUeXBlP3RoaXMuZWwuaW5uZXJIVE1MPXQ6dGhpcy5lbC50ZXh0Q29udGVudD10fSxzLmJpbmRGb2N1c0V2ZW50cz1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5pc0lucHV0JiYodGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIixmdW5jdGlvbihzKXt0LnN0b3AoKX0pLHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIixmdW5jdGlvbihzKXt0LmVsLnZhbHVlJiYwIT09dC5lbC52YWx1ZS5sZW5ndGh8fHQuc3RhcnQoKX0pKX0scy5pbnNlcnRDdXJzb3I9ZnVuY3Rpb24oKXt0aGlzLnNob3dDdXJzb3ImJih0aGlzLmN1cnNvcnx8KHRoaXMuY3Vyc29yPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLHRoaXMuY3Vyc29yLmNsYXNzTmFtZT1cInR5cGVkLWN1cnNvclwiLHRoaXMuY3Vyc29yLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsITApLHRoaXMuY3Vyc29yLmlubmVySFRNTD10aGlzLmN1cnNvckNoYXIsdGhpcy5lbC5wYXJlbnROb2RlJiZ0aGlzLmVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY3Vyc29yLHRoaXMuZWwubmV4dFNpYmxpbmcpKSl9LHR9KCk7ZXhwb3J0e2kgYXMgZGVmYXVsdH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlZC5tb2R1bGUuanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vY3NzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHNldHVwUGFnZSBmcm9tIFwiLi9uYXZiYXJcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuXG5jb25zb2xlLmxvZyhcIlRlc3QgYnVpbGRcIik7XG5zZXR1cFBhZ2UoKTtcbkhvbWVQYWdlKCk7XG4iXSwibmFtZXMiOlsiVHlwZWQiLCJDb21wdXRlciIsIkhhbmQiLCJIb21lUGFnZSIsIm1haW5Db250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpZCIsImZpcnN0QmxvY2tIb21lIiwidGV4dENvbnRhaW5lciIsInN1YlRleHRDb250YWluZXIiLCJmaXJzdFRleHRDb250YWluZXIiLCJmaXJzdFRleHQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwid2F2ZSIsInNyYyIsImFsdCIsInNlY29uZFRleHRDb250YWluZXIiLCJzZWNvbmRUZXh0IiwibmFtZSIsInR5cGVkVGV4dENvbnRhaW5lciIsInR5cGVkVGV4dCIsImltYWdlQ29udGFpbmVyIiwiaW1hZ2UiLCJjb250ZW50IiwicXVlcnlTZWxlY3RvciIsImR5bmFtaWNUZXh0IiwidHlwZWQiLCJzdHJpbmdzIiwidHlwZVNwZWVkIiwiYmFja1NwZWVkIiwic3RhcnREZWxheSIsImJhY2tEZWxheSIsImxvb3AiLCJzaG93Q3Vyc29yIiwiY3Vyc29yQ2hhciIsImF0dHIiLCJhdXRvSW5zZXJ0Q3NzIiwiY29udGVudFR5cGUiLCJJY29uIiwiSG9tZSIsIkFib3V0IiwiQ29kZSIsIkRvYyIsImNyZWF0ZU5hdkJhciIsImJhciIsImxvZ0NvbnRhaW5lciIsImxvZ29Cb3giLCJsb2dvIiwibG9nb0xpbmsiLCJsb2dvVGV4dCIsImxvZ29MaW5rMiIsIm5hdkxpbmtzIiwiaG9tZUJveCIsImhvbWVMaW5rIiwiaHJlZiIsImhvbWVJY29uIiwibWVudUxpbmtib3giLCJtZW51TGluayIsIm1lbnVJY29uIiwiY29udGFjdExpbmtib3giLCJjb250YWN0TGluayIsImNvbnRhY3RJY29uIiwiQWJvdXRMaW5rYm94IiwiQWJvdXRMaW5rIiwiQWJvdXRJY29uIiwic2V0dXBQYWdlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=