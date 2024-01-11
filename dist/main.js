/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_shahir_PNG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/shahir.PNG */ "./src/img/shahir.PNG");
/* harmony import */ var _img_gitSocial_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/gitSocial.svg */ "./src/img/gitSocial.svg");
/* harmony import */ var _img_linked_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/linked.svg */ "./src/img/linked.svg");
/* harmony import */ var _img_docker_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/docker.svg */ "./src/img/docker.svg");
/* harmony import */ var _img_sql_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/sql.svg */ "./src/img/sql.svg");
/* harmony import */ var _img_eclipse_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/eclipse.svg */ "./src/img/eclipse.svg");
/* harmony import */ var _img_lua_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/lua.svg */ "./src/img/lua.svg");
/* harmony import */ var _img_vue_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/vue.svg */ "./src/img/vue.svg");
/* harmony import */ var _img_cypress_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/cypress.svg */ "./src/img/cypress.svg");
/* harmony import */ var _img_vscode_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/vscode.svg */ "./src/img/vscode.svg");
/* harmony import */ var _img_c_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/c.svg */ "./src/img/c.svg");
/* harmony import */ var _img_npm_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/npm.svg */ "./src/img/npm.svg");
/* harmony import */ var _img_babel_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./img/babel.svg */ "./src/img/babel.svg");
/* harmony import */ var _img_prettier_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img/prettier.svg */ "./src/img/prettier.svg");
/* harmony import */ var _img_eslint_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./img/eslint.svg */ "./src/img/eslint.svg");
/* harmony import */ var _img_webpack_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img/webpack.svg */ "./src/img/webpack.svg");
/* harmony import */ var _img_jest_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img/jest.svg */ "./src/img/jest.svg");
/* harmony import */ var _img_git_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./img/git.svg */ "./src/img/git.svg");
/* harmony import */ var _img_python_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./img/python.svg */ "./src/img/python.svg");
/* harmony import */ var _img_java_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./img/java.svg */ "./src/img/java.svg");
/* harmony import */ var _img_linux_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./img/linux.svg */ "./src/img/linux.svg");
/* harmony import */ var _img_html_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./img/html.svg */ "./src/img/html.svg");
/* harmony import */ var _img_css_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./img/css.svg */ "./src/img/css.svg");
/* harmony import */ var _img_js_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./img/js.svg */ "./src/img/js.svg");
























function createCarouselItem(image, title) {
  var carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");
  var carouselImage = document.createElement("img");
  carouselImage.src = image;
  carouselImage.alt = title;
  carouselImage.classList.add("carousel-image");
  var carouselTitle = document.createElement("p");
  carouselTitle.classList.add("carousel-title");
  carouselTitle.textContent = title;
  carouselItem.appendChild(carouselImage);
  carouselItem.appendChild(carouselTitle);
  return carouselItem;
}

// add buttons to the carousel and control the scrolling
function buttons() {
  var carousel = document.querySelector(".carousel");
  var backBtn = document.querySelector(".back-btn");
  var forwardBtn = document.querySelector(".forward-btn");
  var isScrolling = false; // This variable will be used to indicate scrolling status
  var scrollDirection = 0; // 0 for left, 1 for right
  var scrollStep = 8; // This value controls the smoothness of the scroll

  // smooth scroll animation
  var animateScroll = function animateScroll() {
    // if scrolling is still in progress, then continue scrolling
    if (!isScrolling) return;

    // scroll by the scrollStep
    var scrollDistance = scrollDirection === 0 ? -scrollStep : scrollStep;
    carousel.scrollLeft += scrollDistance;

    // if the scroll is not at the end, then continue scrolling
    if (scrollDirection === 0 && carousel.scrollLeft > 0 || scrollDirection === 1 && carousel.scrollLeft + carousel.offsetWidth < carousel.scrollWidth) {
      // animate the scroll at 60 frames per second
      requestAnimationFrame(animateScroll);
    } else {
      // otherwise, stop scrolling
      isScrolling = false;
    }
  };

  // scroll left when the back button is clicked
  var scrollLeft = function scrollLeft() {
    // if the scroll is not in progress, then start scrolling
    if (!isScrolling) {
      scrollDirection = 0; // 0 for left
      isScrolling = true; // the scroll is in progress
      animateScroll(); // start scrolling
    }
  };

  // scroll right when the next button is clicked
  var scrollRight = function scrollRight() {
    // if the scroll is not in progress, then start scrolling
    if (!isScrolling) {
      scrollDirection = 1; // 1 for right
      isScrolling = true; // the scroll is in progress
      animateScroll(); // start scrolling
    }
  };

  // stop scrolling when the mouse leaves the button
  var stopScroll = function stopScroll() {
    isScrolling = false; // the scroll is not in progress
  };
  backBtn.addEventListener("mousedown", scrollLeft);
  backBtn.addEventListener("mouseup", stopScroll);
  forwardBtn.addEventListener("mousedown", scrollRight);
  forwardBtn.addEventListener("mouseup", stopScroll);
  backBtn.addEventListener("touchstart", scrollLeft);
  backBtn.addEventListener("touchend", stopScroll);
  forwardBtn.addEventListener("touchstart", scrollRight);
  forwardBtn.addEventListener("touchend", stopScroll);
  backBtn.addEventListener("mouseleave", stopScroll);
  forwardBtn.addEventListener("mouseleave", stopScroll);
  backBtn.addEventListener("touchcancel", stopScroll);
  forwardBtn.addEventListener("touchcancel", stopScroll);

  // Event listeners for keyboard
  backBtn.addEventListener("keydown", function (e) {
    if (e.keyCode === 37) {
      // Left arrow key
      scrollLeft();
    }
  });
  backBtn.addEventListener("keyup", stopScroll);
  forwardBtn.addEventListener("keydown", function (e) {
    if (e.keyCode === 39) {
      // Right arrow key
      scrollRight();
    }
  });
  forwardBtn.addEventListener("keyup", stopScroll);
}

// create the about page
function about() {
  var aboutPage = document.createElement("div");
  aboutPage.classList.add("about-page");
  var aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");
  var aboutTextContainer = document.createElement("div");
  aboutTextContainer.classList.add("about-text-container");
  var aboutMe = document.createElement("h1");
  aboutMe.textContent = "About ";
  var aboutMeSpan = document.createElement("span");
  aboutMeSpan.textContent = "Me";
  aboutMe.appendChild(aboutMeSpan);
  aboutMe.classList.add("about-me");
  aboutTextContainer.appendChild(aboutMe);
  aboutContainer.appendChild(aboutTextContainer);
  var aboutMeDiv = document.createElement("div");
  aboutMeDiv.classList.add("about-me-div");
  var aboutMeTextDiv = document.createElement("div");
  aboutMeTextDiv.classList.add("about-me-text-div");
  var paragraph = document.createElement("div");
  paragraph.classList.add("paragraph");
  var aboutMeText = document.createElement("p");
  aboutMeText.classList.add("about-me-text");
  aboutMeText.textContent = "Hello, I'm Shahir, a dedicated Computer Science and Mathematics student at Dickinson College with a deep passion for web development. My academic and self-taught journey in programming has equipped me with the skills to craft efficient, scalable software solutions. I thrive on the challenges that come with developing clean, intuitive user interfaces and robust backend functionalities. My goal is to continuously expand my full-stack development expertise and contribute to meaningful projects in a dynamic team environment.";
  var aboutMeText2 = document.createElement("p");
  aboutMeText2.classList.add("about-me-text");
  aboutMeText2.textContent = "When I step away from the keyboard, you'll find me indulging in a variety of interests that keep me balanced and inspired. I'm an avid soccer fan, with Real Madrid's games punctuating the calendar of my personal life. In the world of mixed martial arts, I admire the strategic prowess of fighters like the retired Khabib Nurmagomedov. My taste in entertainment ranges from the captivating narratives of \"The Shawshank Redemption\" to the complex legal dramas of \"Better Call Saul.\" Gaming is another passion \u2014 immersing myself in rich, story-driven worlds like those of Red Dead Redemption 2, LA Noire, and Sleeping Dogs provides not just recreation, but creative inspiration.";
  var aboutMeText3 = document.createElement("p");
  aboutMeText3.classList.add("about-me-text");
  aboutMeText3.textContent = "In addition to my studies and hobbies, I serve as a Resident Advisor, a role that has refined my interpersonal skills and ability to foster community among diverse groups. It's a role that complements my technical aspirations by emphasizing empathy, leadership, and collaboration.";
  var aboutMeText4 = document.createElement("p");
  aboutMeText4.classList.add("about-me-text");
  aboutMeText4.textContent = "I'm excited to embark on the next stage of my career journey and am actively seeking internship opportunities that will leverage my technical skills and work ethic. If you're looking for someone who brings a combination of coding proficiency and a well-rounded perspective to your team, let's connect.";
  paragraph.appendChild(aboutMeText);
  paragraph.appendChild(aboutMeText2);
  paragraph.appendChild(aboutMeText3);
  paragraph.appendChild(aboutMeText4);
  aboutMeTextDiv.appendChild(paragraph);
  var socialIcons = document.createElement("div");
  socialIcons.classList.add("social-icons");
  var gitLink = document.createElement("a");
  gitLink.href = "https://github.com/Shahir-47";
  gitLink.target = "_blank";
  gitLink.rel = "noopener noreferrer";
  var gitSocial = document.createElement("img");
  gitSocial.src = _img_gitSocial_svg__WEBPACK_IMPORTED_MODULE_1__;
  gitSocial.alt = "GitHub";
  gitSocial.classList.add("social-icon");
  gitLink.appendChild(gitSocial);
  socialIcons.appendChild(gitLink);
  var linkedLink = document.createElement("a");
  linkedLink.href = "https://www.linkedin.com/in/shahir47/";
  linkedLink.target = "_blank";
  linkedLink.rel = "noopener noreferrer";
  var linked = document.createElement("img");
  linked.src = _img_linked_svg__WEBPACK_IMPORTED_MODULE_2__;
  linked.alt = "LinkedIn";
  linked.classList.add("social-icon");
  linkedLink.appendChild(linked);
  socialIcons.appendChild(linkedLink);
  aboutMeTextDiv.appendChild(socialIcons);
  aboutMeDiv.appendChild(aboutMeTextDiv);
  var picture = document.createElement("img");
  picture.src = _img_shahir_PNG__WEBPACK_IMPORTED_MODULE_0__;
  picture.alt = "Shahir";
  picture.classList.add("about-me-picture");
  aboutMeDiv.appendChild(picture);
  aboutContainer.appendChild(aboutMeDiv);
  aboutPage.appendChild(aboutContainer);
  var secondDiv = document.createElement("div");
  secondDiv.classList.add("second-div");
  var secondDivText = document.createElement("div");
  secondDivText.classList.add("second-div-text");
  var highlight = document.createElement("span");
  highlight.classList.add("highlight");
  highlight.textContent = "Tools";
  var and = document.createTextNode(" and");
  var highlightText = document.createElement("span");
  highlightText.textContent = " Technologies";
  highlightText.classList.add("highlight");
  var sentence = document.createTextNode(" I've worked with");
  var text = document.createElement("p");
  text.classList.add("text");
  text.appendChild(highlight);
  text.appendChild(and);
  text.appendChild(highlightText);
  text.appendChild(sentence);
  secondDivText.appendChild(text);
  secondDiv.appendChild(secondDivText);
  var carouselContainer = document.createElement("div");
  carouselContainer.classList.add("carousel-container");
  var carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel-div");
  var backBtn = document.createElement("button");
  backBtn.classList.add("back-btn");
  backBtn.textContent = "<";
  carouselDiv.appendChild(backBtn);
  var carousel = document.createElement("div");
  carousel.classList.add("carousel");
  var carouselItems = document.createElement("div");
  carouselItems.classList.add("carousel-items");
  var carouselItem1 = createCarouselItem(_img_html_svg__WEBPACK_IMPORTED_MODULE_21__, "HTML");
  var carouselItem2 = createCarouselItem(_img_css_svg__WEBPACK_IMPORTED_MODULE_22__, "CSS");
  var carouselItem3 = createCarouselItem(_img_js_svg__WEBPACK_IMPORTED_MODULE_23__, "JavaScript");
  var carouselItem4 = createCarouselItem(_img_git_svg__WEBPACK_IMPORTED_MODULE_17__, "Git");
  var carouselItem5 = createCarouselItem(_img_npm_svg__WEBPACK_IMPORTED_MODULE_11__, "NPM");
  var carouselItem6 = createCarouselItem(_img_vscode_svg__WEBPACK_IMPORTED_MODULE_9__, "VS Code");
  var carouselItem7 = createCarouselItem(_img_docker_svg__WEBPACK_IMPORTED_MODULE_3__, "Docker");
  var carouselItem8 = createCarouselItem(_img_linux_svg__WEBPACK_IMPORTED_MODULE_20__, "Linux");
  var carouselItem9 = createCarouselItem(_img_python_svg__WEBPACK_IMPORTED_MODULE_18__, "Python");
  var carouselItem10 = createCarouselItem(_img_java_svg__WEBPACK_IMPORTED_MODULE_19__, "Java");
  var carouselItem11 = createCarouselItem(_img_sql_svg__WEBPACK_IMPORTED_MODULE_4__, "SQL");
  var carouselItem12 = createCarouselItem(_img_webpack_svg__WEBPACK_IMPORTED_MODULE_15__, "Webpack");
  var carouselItem13 = createCarouselItem(_img_vue_svg__WEBPACK_IMPORTED_MODULE_7__, "Vue.js");
  var carouselItem14 = createCarouselItem(_img_babel_svg__WEBPACK_IMPORTED_MODULE_12__, "Babel");
  var carouselItem15 = createCarouselItem(_img_jest_svg__WEBPACK_IMPORTED_MODULE_16__, "Jest");
  var carouselItem16 = createCarouselItem(_img_prettier_svg__WEBPACK_IMPORTED_MODULE_13__, "Prettier");
  var carouselItem17 = createCarouselItem(_img_eslint_svg__WEBPACK_IMPORTED_MODULE_14__, "Eslint");
  var carouselItem18 = createCarouselItem(_img_cypress_svg__WEBPACK_IMPORTED_MODULE_8__, "Cypress");
  var carouselItem19 = createCarouselItem(_img_c_svg__WEBPACK_IMPORTED_MODULE_10__, "C++");
  var carouselItem20 = createCarouselItem(_img_lua_svg__WEBPACK_IMPORTED_MODULE_6__, "Lua");
  var carouselItem21 = createCarouselItem(_img_eclipse_svg__WEBPACK_IMPORTED_MODULE_5__, "Eclipse");
  carouselItems.appendChild(carouselItem1);
  carouselItems.appendChild(carouselItem2);
  carouselItems.appendChild(carouselItem3);
  carouselItems.appendChild(carouselItem4);
  carouselItems.appendChild(carouselItem5);
  carouselItems.appendChild(carouselItem6);
  carouselItems.appendChild(carouselItem7);
  carouselItems.appendChild(carouselItem8);
  carouselItems.appendChild(carouselItem9);
  carouselItems.appendChild(carouselItem10);
  carouselItems.appendChild(carouselItem11);
  carouselItems.appendChild(carouselItem12);
  carouselItems.appendChild(carouselItem13);
  carouselItems.appendChild(carouselItem14);
  carouselItems.appendChild(carouselItem15);
  carouselItems.appendChild(carouselItem16);
  carouselItems.appendChild(carouselItem17);
  carouselItems.appendChild(carouselItem18);
  carouselItems.appendChild(carouselItem19);
  carouselItems.appendChild(carouselItem20);
  carouselItems.appendChild(carouselItem21);
  carousel.appendChild(carouselItems);
  carouselDiv.appendChild(backBtn);
  carouselDiv.appendChild(carousel);
  var forwardBtn = document.createElement("button");
  forwardBtn.classList.add("forward-btn");
  forwardBtn.textContent = ">";
  carouselDiv.appendChild(forwardBtn);
  carouselContainer.appendChild(carouselDiv);
  secondDiv.appendChild(carouselContainer);
  aboutPage.appendChild(secondDiv);
  var main = document.querySelector(".main-container");
  main.innerHTML = "";
  main.appendChild(aboutPage);
  buttons(); // add buttons to the carousel and control the scrolling
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

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
/* harmony import */ var _img_hacker_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/hacker.svg */ "./src/img/hacker.svg");
/* harmony import */ var _img_gitSocial_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/gitSocial.svg */ "./src/img/gitSocial.svg");
/* harmony import */ var _img_linked_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/linked.svg */ "./src/img/linked.svg");
// eslint-disable-next-line import/no-extraneous-dependencies







// Type.js to write dynamically changing text
function dynamicText() {
  // eslint-disable-next-line no-unused-vars
  var typed = new typed_js__WEBPACK_IMPORTED_MODULE_0__["default"]("#typed-text", {
    // Strings to display
    strings: ["Full Stack Developer", "Creative Coder", "Computer Science Student", "Mathematics Student", "Aspiring Software Developer", "Emerging Full Stack Developer", "Programming Enthusiast", "Future Tech Professional", "Student of Software Engineering", "Coding Hobbyist", "Software Engineer in Training", "Software Engineer in the Making", "Software Engineer in the Works"],
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

// loads the home page
function HomePage() {
  var mainContainer = document.querySelector(".main-container");
  mainContainer.innerHTML = "";
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
  var secondBlockHome = document.createElement("div");
  secondBlockHome.classList.add("second-block-home");
  var secondBlockTextContainer = document.createElement("div");
  secondBlockTextContainer.classList.add("second-block-text-container");
  var textDiv = document.createElement("div");
  textDiv.classList.add("text-div");
  var text = document.createElement("h3");
  text.textContent = "If opportunity doesn't knock, ";
  var span = document.createElement("span");
  span.textContent = "build a door.";
  span.classList.add("span-door");
  text.appendChild(span);
  textDiv.appendChild(text);
  var subDiv = document.createElement("div");
  subDiv.classList.add("sub-div");
  var highlight = document.createElement("span");
  highlight.textContent = "Embracing challenges with innovation and determination, ";
  highlight.classList.add("highlight");
  var subTextAfterHighlight = document.createTextNode("I channel my passion for coding into crafting solutions where none existed before. In the ever-evolving world of web development, I'm committed to turning obstacles into stepping stones for growth and learning.");
  var subText = document.createElement("p");
  subText.classList.add("sub-text");
  subText.appendChild(highlight);
  subText.appendChild(subTextAfterHighlight);
  var subsubText = document.createElement("p");
  subsubText.textContent = "With every line of code, I aim to build web applications that are intuitive and efficient. My goal is to create tools that not only function smoothly but also enhance the user experience. It's about paving new pathways to success and ensuring they lead to meaningful results for both users and businesses";
  subsubText.classList.add("sub-text");
  subDiv.appendChild(subText);
  subDiv.appendChild(subsubText);
  textDiv.appendChild(subDiv);
  secondBlockTextContainer.appendChild(textDiv);
  var hacker = document.createElement("img");
  hacker.classList.add("hacker");
  hacker.src = _img_hacker_svg__WEBPACK_IMPORTED_MODULE_3__;
  hacker.alt = "Hacker";
  secondBlockTextContainer.appendChild(hacker);
  var socialBlock = document.createElement("div");
  socialBlock.classList.add("social-block");
  var socialTextDiv = document.createElement("div");
  socialTextDiv.classList.add("social-text-div");
  var socialText = document.createElement("h3");
  socialText.textContent = "FIND ME ON";
  var textBefore = document.createTextNode("Feel free to ");
  var textAfter = document.createTextNode(" with me");
  var spanContent = document.createElement("span");
  spanContent.textContent = "connect";
  var socialSubText = document.createElement("p");
  socialSubText.classList.add("social-sub-text");
  socialSubText.appendChild(textBefore);
  socialSubText.appendChild(spanContent);
  socialSubText.appendChild(textAfter);
  socialTextDiv.appendChild(socialText);
  socialTextDiv.appendChild(socialSubText);
  var socialIcons = document.createElement("div");
  socialIcons.classList.add("social-icons");
  var gitLink = document.createElement("a");
  gitLink.href = "https://github.com/Shahir-47";
  gitLink.target = "_blank";
  gitLink.rel = "noopener noreferrer";
  var gitSocial = document.createElement("img");
  gitSocial.src = _img_gitSocial_svg__WEBPACK_IMPORTED_MODULE_4__;
  gitSocial.alt = "GitHub";
  gitSocial.classList.add("social-icon");
  gitLink.appendChild(gitSocial);
  socialIcons.appendChild(gitLink);
  var linkedLink = document.createElement("a");
  linkedLink.href = "https://www.linkedin.com/in/shahir47/";
  linkedLink.target = "_blank";
  linkedLink.rel = "noopener noreferrer";
  var linked = document.createElement("img");
  linked.src = _img_linked_svg__WEBPACK_IMPORTED_MODULE_5__;
  linked.alt = "LinkedIn";
  linked.classList.add("social-icon");
  linkedLink.appendChild(linked);
  socialIcons.appendChild(linkedLink);
  socialBlock.appendChild(socialTextDiv);
  socialBlock.appendChild(socialIcons);
  secondBlockHome.appendChild(secondBlockTextContainer);
  secondBlockHome.appendChild(socialBlock);
  mainContainer.appendChild(secondBlockHome);
  dynamicText(); // Type.js
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_todo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/todo.png */ "./src/img/todo.png");
/* harmony import */ var _img_battleship_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/battleship.png */ "./src/img/battleship.png");
/* harmony import */ var _img_weather_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/weather.png */ "./src/img/weather.png");
/* harmony import */ var _img_tictac_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/tictac.png */ "./src/img/tictac.png");
/* harmony import */ var _img_calculator_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/calculator.png */ "./src/img/calculator.png");
/* harmony import */ var _img_restaurant_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/restaurant.png */ "./src/img/restaurant.png");
/* harmony import */ var _img_etch_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/etch.png */ "./src/img/etch.png");







function createProjectItem(image, title, description, liveDemo, sourceCode) {
  var projectItem = document.createElement("div");
  projectItem.classList.add("project-item");
  var projectImage = document.createElement("img");
  projectImage.src = image;
  projectImage.alt = title;
  projectItem.appendChild(projectImage);
  var projectItemDiv = document.createElement("div");
  projectItemDiv.classList.add("project-item-div");
  var projectTitle = document.createElement("h1");
  projectTitle.textContent = title;
  var projectDescription = document.createElement("p");
  projectDescription.textContent = description;
  var projectLinkDiv = document.createElement("div");
  projectLinkDiv.classList.add("project-link-div");
  var projectLiveDemo = document.createElement("a");
  projectLiveDemo.href = liveDemo;
  projectLiveDemo.textContent = "Live Demo";
  projectLinkDiv.appendChild(projectLiveDemo);
  var projectSourceCode = document.createElement("a");
  projectSourceCode.href = sourceCode;
  projectSourceCode.textContent = "Source Code";
  projectLinkDiv.appendChild(projectSourceCode);
  projectItemDiv.appendChild(projectTitle);
  projectItemDiv.appendChild(projectDescription);
  projectItemDiv.appendChild(projectLinkDiv);
  projectItem.appendChild(projectItemDiv);
  return projectItem;
}

// loads the project page
function project() {
  var projectDiv = document.createElement("div");
  projectDiv.classList.add("project-div");
  var projectTitle = document.createElement("h1");
  projectTitle.textContent = "Projects";
  projectDiv.appendChild(projectTitle);
  var projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  var todo = createProjectItem(_img_todo_png__WEBPACK_IMPORTED_MODULE_0__, "Todo List", "Todo List is a powerful task management application that helps you stay organized and productive. Manage tasks, projects, and notes effortlessly. Features include priority levels, due dates, search functionality, and dark/light theme. Get started and boost your productivity today!", "https://shahir-47.github.io/Todo-List/", "https://github.com/Shahir-47/Todo-List");
  var battleship = createProjectItem(_img_battleship_png__WEBPACK_IMPORTED_MODULE_1__, "Battleship", "A web-based Battleship game with a strategic AI. Players engage in classic naval warfare against a computer. Code is open for contributions and tests ensure robust gameplay.Play now!", "https://shahir-47.github.io/Battleship/", "https://github.com/Shahir-47/Battleship");
  var weather = createProjectItem(_img_weather_png__WEBPACK_IMPORTED_MODULE_2__, "Weather App", "Weather Whiz is a web app providing current weather, hourly & 2-day forecasts for different locations. Switch between imperial & metric units. Built with HTML, CSS, JS, Webpack, Babel, ESLint & Prettier. APIs: OpenWeather & Mapbox. Stay prepared with accurate weather data!", "https://shahir-47.github.io/Weather-Whiz/", "https://github.com/Shahir-47/Weather-Whiz");
  var tictac = createProjectItem(_img_tictac_png__WEBPACK_IMPORTED_MODULE_3__, "Tic Tac Toe", "Enjoy the classic Tic Tac Toe game with customizable markers, colors, and player names. Play against a friend or challenging AI. Responsive design, visually appealing interface. Source code for HTML, CSS, JavaScript implementation. Experience hours of interactive and addictive fun!", "https://shahir-47.github.io/Tic-Tac-Toe/", "https://github.com/Shahir-47/Tic-Tac-toe");
  var calculator = createProjectItem(_img_calculator_png__WEBPACK_IMPORTED_MODULE_4__, "Calculator", "This is a simple calculator application with keyboard support. It allows you to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also includes additional features like calculating the factorial and exponentiation.", "https://shahir-47.github.io/Calculator/", "https://github.com/Shahir-47/Calculator");
  var restaurant = createProjectItem(_img_restaurant_png__WEBPACK_IMPORTED_MODULE_5__, "Restaurant Page", "A web-based platform that provides information and features related to a fictional restaurant called the Galactic Cantina. The application allows users to explore various sections such as the home page, menu page, contact page, about us page, review page, and FAQ page.", "https://shahir-47.github.io/Restaurant-Page/", "https://github.com/Shahir-47/Restaurant-Page");
  var etch = createProjectItem(_img_etch_png__WEBPACK_IMPORTED_MODULE_6__, "Etch a Sketch", "Experience the classic Etch-a-Sketch fun online! Draw and create masterpieces with this simple web application. Built using HTML, CSS, and JavaScript.", "https://shahir-47.github.io/Etch-a-Sketch/", "https://github.com/Shahir-47/Etch-a-Sketch/");
  projectContainer.appendChild(todo);
  projectContainer.appendChild(battleship);
  projectContainer.appendChild(weather);
  projectContainer.appendChild(tictac);
  projectContainer.appendChild(calculator);
  projectContainer.appendChild(restaurant);
  projectContainer.appendChild(etch);
  projectDiv.appendChild(projectContainer);
  var main = document.querySelector(".main-container");
  main.innerHTML = "";
  main.appendChild(projectDiv);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);

/***/ }),

/***/ "./src/setup.js":
/*!**********************!*\
  !*** ./src/setup.js ***!
  \**********************/
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
/* harmony import */ var _img_gitSocial_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/gitSocial.svg */ "./src/img/gitSocial.svg");
/* harmony import */ var _img_hamburger_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/hamburger.svg */ "./src/img/hamburger.svg");







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

  // hamburger menu
  var hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  var hamburgerIcon = document.createElement("img");
  hamburgerIcon.src = _img_hamburger_svg__WEBPACK_IMPORTED_MODULE_6__;
  hamburgerIcon.alt = "hamburger";
  hamburger.appendChild(hamburgerIcon);
  var hamburgerMenu = document.createElement("div");
  hamburgerMenu.classList.add("hamburger-menu");
  var hamburgerMenuHome = document.createElement("a");
  hamburgerMenuHome.href = "#";
  hamburgerMenuHome.textContent = "Home";
  hamburgerMenu.appendChild(hamburgerMenuHome);
  var hamburgerMenuAbout = document.createElement("a");
  hamburgerMenuAbout.href = "#";
  hamburgerMenuAbout.textContent = "About";
  hamburgerMenu.appendChild(hamburgerMenuAbout);
  var hamburgerMenuProjects = document.createElement("a");
  hamburgerMenuProjects.href = "#";
  hamburgerMenuProjects.textContent = "Projects";
  hamburgerMenu.appendChild(hamburgerMenuProjects);
  var hamburgerMenuResume = document.createElement("a");
  hamburgerMenuResume.href = "#";
  hamburgerMenuResume.textContent = "Resume";
  hamburgerMenu.appendChild(hamburgerMenuResume);
  hamburger.appendChild(hamburgerMenu);
  navLinks.appendChild(hamburger);
  bar.appendChild(logContainer);
  bar.appendChild(navLinks);
  var content = document.querySelector("div#content");
  content.appendChild(bar);
}
function createFooter() {
  var footer = document.createElement("footer");
  footer.classList.add("footer");
  var gitHubProfile = document.createElement("a");
  gitHubProfile.href = "https://github.com/Shahir-47";
  var gitHubProfileImg = document.createElement("img");
  gitHubProfileImg.src = _img_gitSocial_svg__WEBPACK_IMPORTED_MODULE_5__;
  gitHubProfileImg.alt = "gitHub Logo";
  var gitHubProfileText = document.createElement("p");
  var atSymbol = document.createElement("span");
  atSymbol.classList.add("at-symbol");
  atSymbol.textContent = "@";
  var username = document.createElement("span");
  username.textContent = "Shahir-47";
  gitHubProfileText.appendChild(atSymbol);
  gitHubProfileText.appendChild(username);
  gitHubProfile.appendChild(gitHubProfileImg);
  gitHubProfile.appendChild(gitHubProfileText);
  var seperator = document.createElement("p");
  seperator.textContent = "|";
  var gitHubRepo = document.createElement("a");
  gitHubRepo.href = "https://github.com/Shahir-47/Portfolio-Website";
  gitHubRepo.textContent = "Source Code";
  footer.appendChild(gitHubProfile);
  footer.appendChild(seperator);
  footer.appendChild(gitHubRepo);
  document.querySelector("div#content").appendChild(footer);
}
function setupPage() {
  createNavBar(); // creates the nav bar
  // creates the main container
  var mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  document.querySelector("div#content").appendChild(mainContainer);
  createFooter(); // creates the footer
  // add background color to the nav bar when scrolled
  window.addEventListener("scroll", function () {
    var navBar = document.querySelector(".nav-bar");
    if (window.scrollY > 0) {
      navBar.classList.add("nav-bar-scrolled");
    } else {
      navBar.classList.remove("nav-bar-scrolled");
    }
  });

  // activate hamburger menu on smaller screens
  var hamburger = document.querySelector(".hamburger");
  var hamburgerMenu = document.querySelector(".hamburger-menu");
  hamburger.addEventListener("click", function () {
    if (hamburgerMenu.classList.contains("active")) {
      hamburgerMenu.classList.remove("active");
      hamburgerMenu.classList.add("inactive");
    } else if (hamburgerMenu.classList.contains("inactive")) {
      hamburgerMenu.classList.remove("inactive");
      hamburgerMenu.classList.add("active");
    } else {
      hamburgerMenu.classList.add("active");
    }
  });
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
input {
	/* 1 */
	overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select {
	/* 1 */
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
`, "",{"version":3,"sources":["webpack://./src/css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;CACC,iBAAiB,EAAE,MAAM;CACzB,8BAA8B,EAAE,MAAM;AACvC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;CACC,SAAS;AACV;;AAEA;;EAEE;;AAEF;CACC,cAAc;AACf;;AAEA;;;EAGE;;AAEF;CACC,cAAc;CACd,gBAAgB;AACjB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;CACC,uBAAuB,EAAE,MAAM;CAC/B,SAAS,EAAE,MAAM;CACjB,iBAAiB,EAAE,MAAM;AAC1B;;AAEA;;;EAGE;;AAEF;CACC,iCAAiC,EAAE,MAAM;CACzC,cAAc,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;CACC,6BAA6B;AAC9B;;AAEA;;;EAGE;;AAEF;CACC,mBAAmB,EAAE,MAAM;CAC3B,0BAA0B,EAAE,MAAM;CAClC,iCAAiC,EAAE,MAAM;AAC1C;;AAEA;;EAEE;;AAEF;;CAEC,mBAAmB;AACpB;;AAEA;;;EAGE;;AAEF;;;CAGC,iCAAiC,EAAE,MAAM;CACzC,cAAc,EAAE,MAAM;AACvB;;AAEA;;EAEE;;AAEF;CACC,cAAc;AACf;;AAEA;;;EAGE;;AAEF;;CAEC,cAAc;CACd,cAAc;CACd,kBAAkB;CAClB,wBAAwB;AACzB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;CACC,kBAAkB;AACnB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;CAKC,oBAAoB,EAAE,MAAM;CAC5B,eAAe,EAAE,MAAM;CACvB,iBAAiB,EAAE,MAAM;CACzB,SAAS,EAAE,MAAM;AAClB;;AAEA;;;EAGE;;AAEF;;CAEC,MAAM;CACN,iBAAiB;AAClB;;AAEA;;;EAGE;;AAEF;;CAEC,MAAM;CACN,oBAAoB;AACrB;;AAEA;;EAEE;;AAEF;;;;CAIC,0BAA0B;AAC3B;;AAEA;;EAEE;;AAEF;;;;CAIC,kBAAkB;CAClB,UAAU;AACX;;AAEA;;EAEE;;AAEF;;;;CAIC,8BAA8B;AAC/B;;AAEA;;EAEE;;AAEF;CACC,8BAA8B;AAC/B;;AAEA;;;;;EAKE;;AAEF;CACC,sBAAsB,EAAE,MAAM;CAC9B,cAAc,EAAE,MAAM;CACtB,cAAc,EAAE,MAAM;CACtB,eAAe,EAAE,MAAM;CACvB,UAAU,EAAE,MAAM;CAClB,mBAAmB,EAAE,MAAM;AAC5B;;AAEA;;EAEE;;AAEF;CACC,wBAAwB;AACzB;;AAEA;;EAEE;;AAEF;CACC,cAAc;AACf;;AAEA;;;EAGE;;AAEF;;CAEC,sBAAsB,EAAE,MAAM;CAC9B,UAAU,EAAE,MAAM;AACnB;;AAEA;;EAEE;;AAEF;;CAEC,YAAY;AACb;;AAEA;;;EAGE;;AAEF;CACC,6BAA6B,EAAE,MAAM;CACrC,oBAAoB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;CACC,wBAAwB;AACzB;;AAEA;;;EAGE;;AAEF;CACC,0BAA0B,EAAE,MAAM;CAClC,aAAa,EAAE,MAAM;AACtB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;CACC,cAAc;AACf;;AAEA;;EAEE;;AAEF;CACC,kBAAkB;AACnB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;CACC,aAAa;AACd;;AAEA;;EAEE;;AAEF;CACC,aAAa;AACd","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n\tmargin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n\tdisplay: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n\tfont-size: 2em;\n\tmargin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n\tbox-sizing: content-box; /* 1 */\n\theight: 0; /* 1 */\n\toverflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n\tbackground-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n\tborder-bottom: none; /* 1 */\n\ttext-decoration: underline; /* 2 */\n\ttext-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n\tborder-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n\t/* 1 */\n\toverflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n\t/* 1 */\n\ttext-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n\t-webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n\tpadding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n\tbox-sizing: border-box; /* 1 */\n\tcolor: inherit; /* 2 */\n\tdisplay: table; /* 1 */\n\tmax-width: 100%; /* 1 */\n\tpadding: 0; /* 3 */\n\twhite-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n\toverflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n\tbox-sizing: border-box; /* 1 */\n\tpadding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n\tdisplay: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n\tdisplay: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n\tdisplay: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n\tdisplay: none;\n}\n"],"sourceRoot":""}]);
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
	background-color: transparent; /* No background initially */
	backdrop-filter: blur(0); /* No blur initially */
	box-shadow:
		0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.nav-bar-scrolled {
	background-color: #0b4d44;
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
	gap: 7rem;
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
	font-size: 2rem;
}

#typed-text {
	font-size: 2rem;
	font-weight: 500;
	color: #4fd1c5;
}

.typed-cursor {
	font-size: 2rem;
	font-weight: 500;
	color: #4fd1c5;
	animation: blink 0.7s infinite;
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

.second-text-container h5 {
	margin: 0;
}

.first-text-container h3 {
	font-weight: 500;
	font-size: 2rem;
	margin: 0;
}

.second-text-container h5 {
	font-size: 2rem;
	font-weight: 500;
}

.second-block-home {
	display: flex;
	flex-direction: column;
	padding: 0 3rem;
	margin: 0 5rem;
	gap: 5rem;
}

.second-block-text-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	justify-items: center;
	align-items: center;
}

.hacker {
	width: 35%;
	height: auto;
}

.text-div {
	display: flex;
	flex-direction: column;
	gap: 3rem;
}

.text-div h3 {
	align-self: center;
	font-size: 1.9rem;
	margin: 0;
}

.highlight,
.text-div h3 span {
	color: #4fd1c5;
}

.sub-div {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.sub-text {
	font-weight: 600;
	margin: 0;
}

.social-icons img {
	width: 2.5rem;
	height: auto;
	cursor: pointer;
	transition: all 0.3s ease;
	border-radius: 50%;
}

.social-icons img:hover {
	filter: invert(1);
	box-shadow: 0 4px 8px 0 rgba(79, 209, 197, 0.5);
}

.social-text-div {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	align-items: center;
}

.social-text-div h3 {
	font-size: 2rem;
	font-weight: 500;
}

.social-text-div * {
	margin: 0;
}

.social-icons {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
}

.social-sub-text {
	font-size: 0.8rem;
	font-weight: 550;
}

.social-block {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.social-sub-text span {
	color: #4fd1c5;
}

/* --------------------------------------- Footer ------------------------------------------------------- */

footer {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin-top: 2rem;
	padding: 0.25rem 3rem;
	background-color: #4fd1c5;
}

footer a {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	text-decoration: none;
	font-size: 1.3rem;
	font-weight: 100;
	color: #fafafa;
	transition: all 0.3s ease;
}

footer p {
	margin: 0.5rem 0;
}

footer a:hover,
footer a:active {
	color: #b02e39;
}

footer a img {
	border-radius: 50%;
	transition: all 0.3s ease;
}

footer a:hover img,
footer a:active img {
	filter: invert(1);
	box-shadow: 0 4px 8px 0 rgba(79, 209, 197, 0.5);
}

.at-symbol {
	font-weight: 900;
}

footer img {
	width: 2rem;
	height: auto;
}

/* Styles the scrollbar track */
::-webkit-scrollbar-track {
	background-color: #2c3e50; /* A darker shade for contrast */
}

/* Styles the scrollbar handle */
::-webkit-scrollbar-thumb {
	background-color: #4fd1c5; /* The color you provided for the handle */
	border-radius: 10px; /* Rounded corners for the handle */
}

/* Styles the scrollbar itself (including the track) */
::-webkit-scrollbar {
	width: 12px; /* Adjust to the size you prefer */
}

/* Optional: styles the scrollbar handle on hover */
::-webkit-scrollbar-thumb:hover {
	background-color: #3a9d9b; /* A slightly darker shade of the handle color for hover */
}

/* Firefox */
html {
	scrollbar-color: #4fd1c5 #2c3e50;
	scrollbar-width: thin; /* You can use 'auto' or 'thin' */
}

.about-page {
	padding: 0rem 3rem;
	padding-bottom: 2rem;
	display: flex;
	flex-direction: column;
	gap: 5rem;
}

.about-container {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.about-text-container {
	display: flex;
	justify-content: center;
}

.about-me span {
	color: #4fd1c5;
}

.about-me-div {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	justify-items: center;
	gap: 2rem;
}

.about-me-picture {
	order: 1;
	width: 30%;
	height: auto;
}

.about-me-text-div {
	order: 2;
}

.about-me-text-div {
	font-size: 1.1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.about-me-text:nth-of-type(1) {
	margin-top: 0.5rem;
}

/* --------------------------------------- End of Footer styles ------------------------------------------------------- */

.carousel-item img {
	width: 3rem;
	height: auto;
}

.second-div {
	display: flex;
	flex-direction: column;
	gap: 3rem;
	padding: 0 3rem;
}

.second-div-text {
	display: flex;
	justify-content: center;
	gap: 1rem;
}

.second-div-text p {
	font-size: 2rem;
	margin: 0;
	font-weight: 900;
}

.carousel-div {
	display: flex;
	border: 3px solid #dddddd;
	border-radius: 10px;
}

.back-btn,
.forward-btn {
	font-size: 2.5rem;
	color: #15202b;
	font-weight: 900;
	background-color: #dddddd;
	border: none;
	cursor: pointer;
}

.back-btn:hover,
.forward-btn:hover {
	color: #4fd1c5;
	background-color: #ffffff;
}

.carousel {
	display: flex;
	overflow-x: auto;
	gap: 2rem;
	padding: 1rem;
	transform: rotateX(180deg);
	-ms-transform: rotateX(180deg);
	-webkit-transform: rotateX(180deg);
	margin-top: 0.2rem;
	margin-left: 1rem;
	margin-right: 1rem;
}

.carousel-item {
	min-width: 7rem;
	min-height: 10rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	transform: rotateX(180deg);
	-ms-transform: rotateX(180deg);
	-webkit-transform: rotateX(180deg);
	border: 1px solid #dddddd;
	border-radius: 15px;
	background-color: #ffffff17;
}

.carousel-item p {
	font-size: 1.5rem;
	margin: 0;
}

.carousel-items {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
}

/* Style the scrollbar */
.carousel::-webkit-scrollbar {
	width: 5px; /* Set the width of the scrollbar */
	height: 10px; /* Set the height of the scrollbar */
}

.carousel::-webkit-scrollbar-thumb {
	background-color: #4fd1c5; /* Color of the scrollbar thumb */
	border-radius: 5px; /* Rounded corners for the scrollbar thumb */
}

.carousel::-webkit-scrollbar-thumb:hover {
	background-color: #4fd1c5; /* Color of the scrollbar thumb on hover */
}

.carousel::-webkit-scrollbar-track {
	background-color: transparent; /* Color of the scrollbar track */
}

.carousel::-webkit-scrollbar-corner {
	background-color: transparent; /* Color of the scrollbar corner */
}

.project-div {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding: 0 3rem;
}

.project-div h1 {
	color: #4fd1c5;
}

.project-item img {
	width: 100%;
	height: auto;
}

.project-container {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	gap: 2rem;
}

.project-item {
	display: grid;
	grid-template-columns: 1fr 2fr;
	align-items: center;
	gap: 2rem;
	padding: 1rem;
	border-radius: 10px;
	background-color: #ffffff17;
	border: 1px solid #dddddd;
}

.project-link-div {
	display: flex;
	gap: 1rem;
}

.project-link-div a {
	text-decoration: none;
	color: #4fd1c5;
	font-size: 1.5rem;
	font-weight: 500;
	border: 1px solid #4fd1c5;
	border-radius: 10px;
	padding: 0.5rem 1rem;
	transition: all 0.3s ease;
}

.project-link-div a:hover {
	color: #e0e0e0;
	border: 1px solid #e0e0e0;
	background-color: #4fd1c5;
}

.project-item-div p {
	font-size: 1.1rem;
	font-weight: 600;
}

/* ...existing styles */

.hamburger-menu {
	display: none;
	transform-origin: top;
}

.hamburger {
	display: none;
}

@media (max-width: 320px) {
	.first-block-home {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}

	div.second-div-text p {
		font-size: 1.2rem;
	}

	div.about-me-div {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}
}

@media (max-width: 320px) {
	div.second-block-text-container {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}

	.about-me-div {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
	}
}

@media (max-width: 355px) {
	.about-me-div {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}
	div.sub-text-container div.first-text-container h3 {
		font-size: 1.2rem;
	}

	div.second-text-container h5 {
		font-size: 1.1rem;
	}

	div.second-text-container h5 span.name {
		font-size: 1.5rem;
	}

	img.wave {
		width: 1.5rem;
		height: auto;
	}

	div.logo-box img {
		width: 2.75rem;
		height: auto;
	}

	div.logo-box a h1 {
		font-size: 1.5rem;
	}

	div.text-div h3 {
		font-size: 1.3rem;
	}

	p.sub-text {
		font-size: 0.8rem;
	}

	.social-text-div h3 {
		font-size: 1.5rem;
	}

	footer {
		padding: 0.25rem 0.5rem;
	}

	footer.footer a {
		font-size: 1rem;
	}

	.nav-bar {
		padding: 1rem 1.5rem;
	}

	div.about-text-container h1 {
		font-size: 1.5rem;
	}

	.about-page {
		padding: 0rem 1.5rem;
	}

	.about-me-text {
		font-size: 1rem;
	}

	.project-div {
		gap: 0rem;
		padding: 0 1.5rem;
	}

	.project-div h1 {
		font-size: 1.5rem;
	}

	.project-item-div p {
		font-size: 1rem;
	}

	.project-link-div a {
		font-size: 1rem;
	}
}

@media (max-width: 390px) {
	div.about-me-div {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}

	.sub-text {
		font-size: 0.9rem;
	}

	.footer a {
		font-size: 1.1rem;
	}

	div.first-text-container h3 {
		font-size: 1.3rem;
	}

	.second-text-container h5 {
		font-size: 1.3rem;
	}

	span.name {
		font-size: 1.7rem;
	}

	#typed-text {
		font-size: 1.3rem;
	}

	.social-block {
		gap: 1rem;
	}

	.second-block-home {
		gap: 3rem;
	}

	.carousel {
		padding-left: 0;
	}

	.carousel-items {
		gap: 1rem;
	}

	.carousel-item {
		min-width: 4.5rem;
		min-height: 6rem;
	}

	.carousel-item img {
		width: 2rem;
		height: auto;
	}

	.carousel-item p {
		font-size: 1rem;
	}

	.first-block-home,
	.second-block-home {
		padding: 0 1.5rem;
	}

	span.typed-cursor,
	p#typed-text {
		font-size: 1.1rem;
	}

	.project-link-div a {
		text-align: center;
	}
}

@media (max-width: 500px) {
	.back-btn,
	.forward-btn {
		font-size: 1.1rem;
		padding: 0px 3px;
	}

	.about-me-div {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}

	.second-block-home {
		margin: 0;
	}

	.logo-box img {
		width: 2.5rem;
		height: auto;
	}

	.logo-box a h1 {
		font-size: 1.5rem;
	}

	div.hamburger-menu.inactive,
	div.hamburger-menu.active {
		margin-top: 1.2rem;
	}

	.main-container {
		gap: 1rem;
	}

	.text-div {
		gap: 1rem;
	}

	.text-div h3 {
		font-size: 1.25rem;
	}

	.about-container {
		gap: 0rem;
	}

	.about-me-div {
		gap: 1rem;
	}

	.second-div-text p {
		font-size: 1.5rem;
		text-align: center;
	}

	.second-div {
		padding: 0rem;
	}

	.project-item {
		grid-template-columns: 1fr;
		gap: 0rem;
	}

	.project-link-div {
		justify-content: center;
	}
}

@media (max-width: 870px) {
	.hamburger {
		display: block;
	}

	div.about-container {
		gap: 1rem;
	}

	div.about-me-div {
		gap: 2rem;
	}

	.about-me-picture {
		order: 1;
		width: 30%;
		height: auto;
	}

	div.about-me-text-div {
		order: 2;
	}

	.hamburger img {
		width: 2rem;
		height: auto;
	}

	.hamburger img:hover {
		filter: brightness(3);
	}

	.nav-box {
		display: none;
	}

	.log-container {
		display: flex;
		align-items: center;
		gap: 1rem;
		justify-content: space-between;
	}

	.hamburger-menu.active {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #4fd1c5;
		position: absolute;
		left: 0;
		right: 0;
		z-index: 999;
		animation: expand 500ms ease-in-out;
		margin-top: 2rem;
		gap: 1rem;
		padding-top: 1rem;
		/* display: flex;
		flex-direction: column;
		position: absolute;
		left: 0;
		right: 0;
		align-items: center;
		margin-top: 2.5rem;
		gap: 1rem; */
	}

	@keyframes expand {
		0% {
			transform: scaleY(0);
		}

		70% {
			transform: scaleY(1.1);
		}

		100% {
			transform: scaleY(1);
		}
	}

	.inactive {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #4fd1c5;
		position: absolute;
		left: 0;
		right: 0;
		z-index: 999;
		animation: collapse 0.5s forwards;
		margin-top: 2rem;
		gap: 1rem;
		padding-top: 1rem;
	}

	/* .inactive {
		opacity: 0;
		visibility: hidden;
		transform: scaleY(0);
		transition:
			transform 0.5s,
			opacity 0.5s,
			visibility 0s 0s;
	} */

	@keyframes collapse {
		0% {
			transform: scaleY(1);
		}
		70% {
			transform: scaleY(1.1);
		}
		100% {
			transform: scaleY(0);
			display: none;
		}
	}

	.hamburger-menu a {
		border-bottom: 1.5px solid #e0e0e0;
		text-align: center;
	}

	.hamburger-menu a:nth-of-type(4) {
		border-bottom: none;
	}

	.hamburger-menu a {
		font-size: 1.5rem;
		padding-bottom: 0.5rem;
	}

	.first-text-container h3 {
		font-size: 1.5rem;
	}

	.name {
		font-size: 2rem;
	}

	#typed-text {
		font-size: 1.5rem;
	}

	.second-block-text-container {
		gap: 3rem;
	}
}

@media (min-width: 2100px) {
	.subdiv {
		font-size: 1.3rem;
	}

	.about-me {
		font-size: 3rem;
	}

	.paragraph {
		font-size: 1.5rem;
	}

	p.social-sub-text {
		font-size: 1.1rem;
	}

	p.about-me-text {
		font-size: 1.5rem;
	}

	div.project-item-div p {
		font-size: 1.5rem;
	}

	.sub-div {
		font-size: 1.3rem;
	}
}

@media (min-width: 2500px) {
	div.paragraph {
		font-size: 2rem;
	}

	div.paragraph p.about-me-text {
		font-size: 2rem;
	}

	div.social-icons {
		gap: 4rem;
	}

	div.second-div-text p {
		font-size: 3rem;
	}

	.carousel-item {
		padding: 0rem 0.5rem;
	}

	div.logo-box img {
		width: 5rem;
		height: auto;
	}

	div.logo-box {
		gap: 2rem;
	}

	div.logo-box a h1 {
		font-size: 2.5rem;
	}

	div.nav-box img {
		width: 3rem;
		height: auto;
	}

	div.nav-box {
		gap: 1rem;
	}

	div.nav-links a {
		font-size: 2rem;
	}

	div.project-div h1 {
		font-size: 3rem;
	}

	div.project-item-div p {
		font-size: 2rem;
	}

	div.project-link-div a {
		font-size: 2rem;
		border: 2px solid #4fd1c5;
	}

	div.social-text-div h3,
	p#typed-text,
	span.typed-cursor,
	div.first-text-container h3 {
		font-size: 3rem;
	}

	img.wave {
		width: 3rem;
		height: auto;
	}

	div.second-text-container h5 {
		font-size: 2.5rem;
	}

	div.text-div h3 {
		font-size: 2.9rem;
	}

	div.sub-div {
		font-size: 1.7rem;
	}

	p.social-sub-text {
		font-size: 1.5rem;
	}

	div.social-icons img {
		width: 3.5rem;
		height: auto;
	}

	footer.footer {
		padding: 1rem 3rem;
	}

	footer.footer p,
	footer.footer a {
		font-size: 2rem;
	}

	footer.footer img {
		width: 3rem;
		height: auto;
	}
}

@media (min-width: 1128px) {
	img.about-me-picture {
		width: 100%;
		height: auto;
	}
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n\tcolor: #e0e0e0;\n\tbackground-color: #000000;\n\tbackground-image: url(../img/background.jpg);\n\tbackground-size: contain !important;\n\tbackground-repeat: no-repeat !important;\n\tfont-family: sans-serif;\n}\n\ndiv#content {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.nav-bar {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1.5rem 3rem;\n\ttransition: all 0.3s ease;\n\tz-index: 999;\n\tbackground-color: transparent; /* No background initially */\n\tbackdrop-filter: blur(0); /* No blur initially */\n\tbox-shadow:\n\t\t0 4px 6px -1px rgba(0, 0, 0, 0.1),\n\t\t0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.nav-bar-scrolled {\n\tbackground-color: #0b4d44;\n}\n\n.logo-box {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.logo-box img {\n\twidth: 3rem;\n\theight: auto;\n\tcursor: pointer;\n}\n\n.log-container:hover {\n\tcursor: pointer;\n}\n\n.logo-box a {\n\ttext-decoration: none;\n}\n\n.log-container:hover:after {\n\twidth: 100%;\n}\n\n.log-container:hover .logo-box a h1 {\n\tcolor: #ffffffff;\n}\n\n.log-container:hover .logo-box img {\n\tfilter: brightness(3);\n}\n\n.log-container:after {\n\tbackground: #4fd1c5;\n\tborder-radius: 16px;\n\tbottom: 1px;\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 5px;\n\tleft: 0;\n\tposition: relative;\n\ttransition: all 0.3s ease-out 0s;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.logo-box a h1 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcursor: pointer;\n\tmargin: 0;\n}\n\n.nav-links {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 2rem;\n}\n\n.nav-links a {\n\tcolor: #e0e0e0;\n\tfont-size: 1.5rem;\n\tfont-weight: 100;\n\ttext-decoration: none;\n}\n\n.nav-links a:hover {\n\tcolor: #ffffffff;\n}\n\n.nav-links .nav-box:hover {\n\tcursor: pointer;\n}\n\n.nav-links .nav-box:hover a {\n\tcolor: #ffffffff;\n}\n\n.nav-links .nav-box:hover img {\n\tfilter: brightness(3);\n}\n\n.nav-links .nav-box:hover:after {\n\twidth: 100%;\n}\n\n.nav-links .nav-box {\n\tposition: relative;\n}\n\n.nav-links .nav-box:after {\n\tbackground: #4fd1c5;\n\tborder-radius: 16px;\n\tbottom: -5px;\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 5px;\n\tleft: 0;\n\tposition: absolute;\n\ttransition: all 0.3s ease-out 0s;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.main-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 7rem;\n}\n\n.first-block-home {\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tpadding: 0 3rem;\n\tgap: 1rem;\n}\n\n.text-container {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.sub-text-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.image-container {\n\twidth: 75%;\n}\n\n.computer {\n\twidth: 100%;\n\theight: auto;\n}\n\n.first-text-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 1rem;\n}\n\n.typed-text-container {\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 2rem;\n}\n\n#typed-text {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcolor: #4fd1c5;\n}\n\n.typed-cursor {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcolor: #4fd1c5;\n\tanimation: blink 0.7s infinite;\n}\n\n.nav-box {\n\tpadding: 0.25rem 0rem;\n}\n\n.wave {\n\twidth: 2rem;\n\theight: auto;\n\tanimation-name: wave-animation;\n\tanimation-duration: 2.5s;\n\tanimation-iteration-count: infinite;\n\ttransform-origin: 70% 70%;\n\tdisplay: inline-block;\n\tfilter: brightness(0.9);\n}\n\n@keyframes wave-animation {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t10% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t20% {\n\t\ttransform: rotate(12deg);\n\t}\n\t30% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t40% {\n\t\ttransform: rotate(9deg);\n\t}\n\t50% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(0deg);\n\t}\n}\n\n.name {\n\tfont-size: 3rem;\n\tfont-weight: 700;\n\tcolor: #4fd1c5;\n}\n\n.nav-box {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tgap: 0.5rem;\n\talign-items: center;\n}\n\n.nav-box img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n.second-text-container h5 {\n\tmargin: 0;\n}\n\n.first-text-container h3 {\n\tfont-weight: 500;\n\tfont-size: 2rem;\n\tmargin: 0;\n}\n\n.second-text-container h5 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n}\n\n.second-block-home {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 0 3rem;\n\tmargin: 0 5rem;\n\tgap: 5rem;\n}\n\n.second-block-text-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tjustify-items: center;\n\talign-items: center;\n}\n\n.hacker {\n\twidth: 35%;\n\theight: auto;\n}\n\n.text-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 3rem;\n}\n\n.text-div h3 {\n\talign-self: center;\n\tfont-size: 1.9rem;\n\tmargin: 0;\n}\n\n.highlight,\n.text-div h3 span {\n\tcolor: #4fd1c5;\n}\n\n.sub-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.sub-text {\n\tfont-weight: 600;\n\tmargin: 0;\n}\n\n.social-icons img {\n\twidth: 2.5rem;\n\theight: auto;\n\tcursor: pointer;\n\ttransition: all 0.3s ease;\n\tborder-radius: 50%;\n}\n\n.social-icons img:hover {\n\tfilter: invert(1);\n\tbox-shadow: 0 4px 8px 0 rgba(79, 209, 197, 0.5);\n}\n\n.social-text-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n\talign-items: center;\n}\n\n.social-text-div h3 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n}\n\n.social-text-div * {\n\tmargin: 0;\n}\n\n.social-icons {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 2rem;\n}\n\n.social-sub-text {\n\tfont-size: 0.8rem;\n\tfont-weight: 550;\n}\n\n.social-block {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.social-sub-text span {\n\tcolor: #4fd1c5;\n}\n\n/* --------------------------------------- Footer ------------------------------------------------------- */\n\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n\tmargin-top: 2rem;\n\tpadding: 0.25rem 3rem;\n\tbackground-color: #4fd1c5;\n}\n\nfooter a {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\ttext-decoration: none;\n\tfont-size: 1.3rem;\n\tfont-weight: 100;\n\tcolor: #fafafa;\n\ttransition: all 0.3s ease;\n}\n\nfooter p {\n\tmargin: 0.5rem 0;\n}\n\nfooter a:hover,\nfooter a:active {\n\tcolor: #b02e39;\n}\n\nfooter a img {\n\tborder-radius: 50%;\n\ttransition: all 0.3s ease;\n}\n\nfooter a:hover img,\nfooter a:active img {\n\tfilter: invert(1);\n\tbox-shadow: 0 4px 8px 0 rgba(79, 209, 197, 0.5);\n}\n\n.at-symbol {\n\tfont-weight: 900;\n}\n\nfooter img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n/* Styles the scrollbar track */\n::-webkit-scrollbar-track {\n\tbackground-color: #2c3e50; /* A darker shade for contrast */\n}\n\n/* Styles the scrollbar handle */\n::-webkit-scrollbar-thumb {\n\tbackground-color: #4fd1c5; /* The color you provided for the handle */\n\tborder-radius: 10px; /* Rounded corners for the handle */\n}\n\n/* Styles the scrollbar itself (including the track) */\n::-webkit-scrollbar {\n\twidth: 12px; /* Adjust to the size you prefer */\n}\n\n/* Optional: styles the scrollbar handle on hover */\n::-webkit-scrollbar-thumb:hover {\n\tbackground-color: #3a9d9b; /* A slightly darker shade of the handle color for hover */\n}\n\n/* Firefox */\nhtml {\n\tscrollbar-color: #4fd1c5 #2c3e50;\n\tscrollbar-width: thin; /* You can use 'auto' or 'thin' */\n}\n\n.about-page {\n\tpadding: 0rem 3rem;\n\tpadding-bottom: 2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5rem;\n}\n\n.about-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.about-text-container {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.about-me span {\n\tcolor: #4fd1c5;\n}\n\n.about-me-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n\tjustify-items: center;\n\tgap: 2rem;\n}\n\n.about-me-picture {\n\torder: 1;\n\twidth: 30%;\n\theight: auto;\n}\n\n.about-me-text-div {\n\torder: 2;\n}\n\n.about-me-text-div {\n\tfont-size: 1.1rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.about-me-text:nth-of-type(1) {\n\tmargin-top: 0.5rem;\n}\n\n/* --------------------------------------- End of Footer styles ------------------------------------------------------- */\n\n.carousel-item img {\n\twidth: 3rem;\n\theight: auto;\n}\n\n.second-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 3rem;\n\tpadding: 0 3rem;\n}\n\n.second-div-text {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 1rem;\n}\n\n.second-div-text p {\n\tfont-size: 2rem;\n\tmargin: 0;\n\tfont-weight: 900;\n}\n\n.carousel-div {\n\tdisplay: flex;\n\tborder: 3px solid #dddddd;\n\tborder-radius: 10px;\n}\n\n.back-btn,\n.forward-btn {\n\tfont-size: 2.5rem;\n\tcolor: #15202b;\n\tfont-weight: 900;\n\tbackground-color: #dddddd;\n\tborder: none;\n\tcursor: pointer;\n}\n\n.back-btn:hover,\n.forward-btn:hover {\n\tcolor: #4fd1c5;\n\tbackground-color: #ffffff;\n}\n\n.carousel {\n\tdisplay: flex;\n\toverflow-x: auto;\n\tgap: 2rem;\n\tpadding: 1rem;\n\ttransform: rotateX(180deg);\n\t-ms-transform: rotateX(180deg);\n\t-webkit-transform: rotateX(180deg);\n\tmargin-top: 0.2rem;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n}\n\n.carousel-item {\n\tmin-width: 7rem;\n\tmin-height: 10rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 1rem;\n\ttransform: rotateX(180deg);\n\t-ms-transform: rotateX(180deg);\n\t-webkit-transform: rotateX(180deg);\n\tborder: 1px solid #dddddd;\n\tborder-radius: 15px;\n\tbackground-color: #ffffff17;\n}\n\n.carousel-item p {\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.carousel-items {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 2rem;\n}\n\n/* Style the scrollbar */\n.carousel::-webkit-scrollbar {\n\twidth: 5px; /* Set the width of the scrollbar */\n\theight: 10px; /* Set the height of the scrollbar */\n}\n\n.carousel::-webkit-scrollbar-thumb {\n\tbackground-color: #4fd1c5; /* Color of the scrollbar thumb */\n\tborder-radius: 5px; /* Rounded corners for the scrollbar thumb */\n}\n\n.carousel::-webkit-scrollbar-thumb:hover {\n\tbackground-color: #4fd1c5; /* Color of the scrollbar thumb on hover */\n}\n\n.carousel::-webkit-scrollbar-track {\n\tbackground-color: transparent; /* Color of the scrollbar track */\n}\n\n.carousel::-webkit-scrollbar-corner {\n\tbackground-color: transparent; /* Color of the scrollbar corner */\n}\n\n.project-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n\tpadding: 0 3rem;\n}\n\n.project-div h1 {\n\tcolor: #4fd1c5;\n}\n\n.project-item img {\n\twidth: 100%;\n\theight: auto;\n}\n\n.project-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tgap: 2rem;\n}\n\n.project-item {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 2fr;\n\talign-items: center;\n\tgap: 2rem;\n\tpadding: 1rem;\n\tborder-radius: 10px;\n\tbackground-color: #ffffff17;\n\tborder: 1px solid #dddddd;\n}\n\n.project-link-div {\n\tdisplay: flex;\n\tgap: 1rem;\n}\n\n.project-link-div a {\n\ttext-decoration: none;\n\tcolor: #4fd1c5;\n\tfont-size: 1.5rem;\n\tfont-weight: 500;\n\tborder: 1px solid #4fd1c5;\n\tborder-radius: 10px;\n\tpadding: 0.5rem 1rem;\n\ttransition: all 0.3s ease;\n}\n\n.project-link-div a:hover {\n\tcolor: #e0e0e0;\n\tborder: 1px solid #e0e0e0;\n\tbackground-color: #4fd1c5;\n}\n\n.project-item-div p {\n\tfont-size: 1.1rem;\n\tfont-weight: 600;\n}\n\n/* ...existing styles */\n\n.hamburger-menu {\n\tdisplay: none;\n\ttransform-origin: top;\n}\n\n.hamburger {\n\tdisplay: none;\n}\n\n@media (max-width: 320px) {\n\t.first-block-home {\n\t\tgrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\t}\n\n\tdiv.second-div-text p {\n\t\tfont-size: 1.2rem;\n\t}\n\n\tdiv.about-me-div {\n\t\tgrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\t\tgap: 1rem;\n\t}\n}\n\n@media (max-width: 320px) {\n\tdiv.second-block-text-container {\n\t\tgrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\t}\n\n\t.about-me-div {\n\t\tgrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\t\tgap: 2rem;\n\t}\n}\n\n@media (max-width: 355px) {\n\t.about-me-div {\n\t\tgrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\t\tgap: 1rem;\n\t}\n\tdiv.sub-text-container div.first-text-container h3 {\n\t\tfont-size: 1.2rem;\n\t}\n\n\tdiv.second-text-container h5 {\n\t\tfont-size: 1.1rem;\n\t}\n\n\tdiv.second-text-container h5 span.name {\n\t\tfont-size: 1.5rem;\n\t}\n\n\timg.wave {\n\t\twidth: 1.5rem;\n\t\theight: auto;\n\t}\n\n\tdiv.logo-box img {\n\t\twidth: 2.75rem;\n\t\theight: auto;\n\t}\n\n\tdiv.logo-box a h1 {\n\t\tfont-size: 1.5rem;\n\t}\n\n\tdiv.text-div h3 {\n\t\tfont-size: 1.3rem;\n\t}\n\n\tp.sub-text {\n\t\tfont-size: 0.8rem;\n\t}\n\n\t.social-text-div h3 {\n\t\tfont-size: 1.5rem;\n\t}\n\n\tfooter {\n\t\tpadding: 0.25rem 0.5rem;\n\t}\n\n\tfooter.footer a {\n\t\tfont-size: 1rem;\n\t}\n\n\t.nav-bar {\n\t\tpadding: 1rem 1.5rem;\n\t}\n\n\tdiv.about-text-container h1 {\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.about-page {\n\t\tpadding: 0rem 1.5rem;\n\t}\n\n\t.about-me-text {\n\t\tfont-size: 1rem;\n\t}\n\n\t.project-div {\n\t\tgap: 0rem;\n\t\tpadding: 0 1.5rem;\n\t}\n\n\t.project-div h1 {\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.project-item-div p {\n\t\tfont-size: 1rem;\n\t}\n\n\t.project-link-div a {\n\t\tfont-size: 1rem;\n\t}\n}\n\n@media (max-width: 390px) {\n\tdiv.about-me-div {\n\t\tgrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\t\tgap: 1rem;\n\t}\n\n\t.sub-text {\n\t\tfont-size: 0.9rem;\n\t}\n\n\t.footer a {\n\t\tfont-size: 1.1rem;\n\t}\n\n\tdiv.first-text-container h3 {\n\t\tfont-size: 1.3rem;\n\t}\n\n\t.second-text-container h5 {\n\t\tfont-size: 1.3rem;\n\t}\n\n\tspan.name {\n\t\tfont-size: 1.7rem;\n\t}\n\n\t#typed-text {\n\t\tfont-size: 1.3rem;\n\t}\n\n\t.social-block {\n\t\tgap: 1rem;\n\t}\n\n\t.second-block-home {\n\t\tgap: 3rem;\n\t}\n\n\t.carousel {\n\t\tpadding-left: 0;\n\t}\n\n\t.carousel-items {\n\t\tgap: 1rem;\n\t}\n\n\t.carousel-item {\n\t\tmin-width: 4.5rem;\n\t\tmin-height: 6rem;\n\t}\n\n\t.carousel-item img {\n\t\twidth: 2rem;\n\t\theight: auto;\n\t}\n\n\t.carousel-item p {\n\t\tfont-size: 1rem;\n\t}\n\n\t.first-block-home,\n\t.second-block-home {\n\t\tpadding: 0 1.5rem;\n\t}\n\n\tspan.typed-cursor,\n\tp#typed-text {\n\t\tfont-size: 1.1rem;\n\t}\n\n\t.project-link-div a {\n\t\ttext-align: center;\n\t}\n}\n\n@media (max-width: 500px) {\n\t.back-btn,\n\t.forward-btn {\n\t\tfont-size: 1.1rem;\n\t\tpadding: 0px 3px;\n\t}\n\n\t.about-me-div {\n\t\tgrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\t\tgap: 1rem;\n\t}\n\n\t.second-block-home {\n\t\tmargin: 0;\n\t}\n\n\t.logo-box img {\n\t\twidth: 2.5rem;\n\t\theight: auto;\n\t}\n\n\t.logo-box a h1 {\n\t\tfont-size: 1.5rem;\n\t}\n\n\tdiv.hamburger-menu.inactive,\n\tdiv.hamburger-menu.active {\n\t\tmargin-top: 1.2rem;\n\t}\n\n\t.main-container {\n\t\tgap: 1rem;\n\t}\n\n\t.text-div {\n\t\tgap: 1rem;\n\t}\n\n\t.text-div h3 {\n\t\tfont-size: 1.25rem;\n\t}\n\n\t.about-container {\n\t\tgap: 0rem;\n\t}\n\n\t.about-me-div {\n\t\tgap: 1rem;\n\t}\n\n\t.second-div-text p {\n\t\tfont-size: 1.5rem;\n\t\ttext-align: center;\n\t}\n\n\t.second-div {\n\t\tpadding: 0rem;\n\t}\n\n\t.project-item {\n\t\tgrid-template-columns: 1fr;\n\t\tgap: 0rem;\n\t}\n\n\t.project-link-div {\n\t\tjustify-content: center;\n\t}\n}\n\n@media (max-width: 870px) {\n\t.hamburger {\n\t\tdisplay: block;\n\t}\n\n\tdiv.about-container {\n\t\tgap: 1rem;\n\t}\n\n\tdiv.about-me-div {\n\t\tgap: 2rem;\n\t}\n\n\t.about-me-picture {\n\t\torder: 1;\n\t\twidth: 30%;\n\t\theight: auto;\n\t}\n\n\tdiv.about-me-text-div {\n\t\torder: 2;\n\t}\n\n\t.hamburger img {\n\t\twidth: 2rem;\n\t\theight: auto;\n\t}\n\n\t.hamburger img:hover {\n\t\tfilter: brightness(3);\n\t}\n\n\t.nav-box {\n\t\tdisplay: none;\n\t}\n\n\t.log-container {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 1rem;\n\t\tjustify-content: space-between;\n\t}\n\n\t.hamburger-menu.active {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\tbackground-color: #4fd1c5;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tz-index: 999;\n\t\tanimation: expand 500ms ease-in-out;\n\t\tmargin-top: 2rem;\n\t\tgap: 1rem;\n\t\tpadding-top: 1rem;\n\t\t/* display: flex;\n\t\tflex-direction: column;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\talign-items: center;\n\t\tmargin-top: 2.5rem;\n\t\tgap: 1rem; */\n\t}\n\n\t@keyframes expand {\n\t\t0% {\n\t\t\ttransform: scaleY(0);\n\t\t}\n\n\t\t70% {\n\t\t\ttransform: scaleY(1.1);\n\t\t}\n\n\t\t100% {\n\t\t\ttransform: scaleY(1);\n\t\t}\n\t}\n\n\t.inactive {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\tbackground-color: #4fd1c5;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tz-index: 999;\n\t\tanimation: collapse 0.5s forwards;\n\t\tmargin-top: 2rem;\n\t\tgap: 1rem;\n\t\tpadding-top: 1rem;\n\t}\n\n\t/* .inactive {\n\t\topacity: 0;\n\t\tvisibility: hidden;\n\t\ttransform: scaleY(0);\n\t\ttransition:\n\t\t\ttransform 0.5s,\n\t\t\topacity 0.5s,\n\t\t\tvisibility 0s 0s;\n\t} */\n\n\t@keyframes collapse {\n\t\t0% {\n\t\t\ttransform: scaleY(1);\n\t\t}\n\t\t70% {\n\t\t\ttransform: scaleY(1.1);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scaleY(0);\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t.hamburger-menu a {\n\t\tborder-bottom: 1.5px solid #e0e0e0;\n\t\ttext-align: center;\n\t}\n\n\t.hamburger-menu a:nth-of-type(4) {\n\t\tborder-bottom: none;\n\t}\n\n\t.hamburger-menu a {\n\t\tfont-size: 1.5rem;\n\t\tpadding-bottom: 0.5rem;\n\t}\n\n\t.first-text-container h3 {\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.name {\n\t\tfont-size: 2rem;\n\t}\n\n\t#typed-text {\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.second-block-text-container {\n\t\tgap: 3rem;\n\t}\n}\n\n@media (min-width: 2100px) {\n\t.subdiv {\n\t\tfont-size: 1.3rem;\n\t}\n\n\t.about-me {\n\t\tfont-size: 3rem;\n\t}\n\n\t.paragraph {\n\t\tfont-size: 1.5rem;\n\t}\n\n\tp.social-sub-text {\n\t\tfont-size: 1.1rem;\n\t}\n\n\tp.about-me-text {\n\t\tfont-size: 1.5rem;\n\t}\n\n\tdiv.project-item-div p {\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.sub-div {\n\t\tfont-size: 1.3rem;\n\t}\n}\n\n@media (min-width: 2500px) {\n\tdiv.paragraph {\n\t\tfont-size: 2rem;\n\t}\n\n\tdiv.paragraph p.about-me-text {\n\t\tfont-size: 2rem;\n\t}\n\n\tdiv.social-icons {\n\t\tgap: 4rem;\n\t}\n\n\tdiv.second-div-text p {\n\t\tfont-size: 3rem;\n\t}\n\n\t.carousel-item {\n\t\tpadding: 0rem 0.5rem;\n\t}\n\n\tdiv.logo-box img {\n\t\twidth: 5rem;\n\t\theight: auto;\n\t}\n\n\tdiv.logo-box {\n\t\tgap: 2rem;\n\t}\n\n\tdiv.logo-box a h1 {\n\t\tfont-size: 2.5rem;\n\t}\n\n\tdiv.nav-box img {\n\t\twidth: 3rem;\n\t\theight: auto;\n\t}\n\n\tdiv.nav-box {\n\t\tgap: 1rem;\n\t}\n\n\tdiv.nav-links a {\n\t\tfont-size: 2rem;\n\t}\n\n\tdiv.project-div h1 {\n\t\tfont-size: 3rem;\n\t}\n\n\tdiv.project-item-div p {\n\t\tfont-size: 2rem;\n\t}\n\n\tdiv.project-link-div a {\n\t\tfont-size: 2rem;\n\t\tborder: 2px solid #4fd1c5;\n\t}\n\n\tdiv.social-text-div h3,\n\tp#typed-text,\n\tspan.typed-cursor,\n\tdiv.first-text-container h3 {\n\t\tfont-size: 3rem;\n\t}\n\n\timg.wave {\n\t\twidth: 3rem;\n\t\theight: auto;\n\t}\n\n\tdiv.second-text-container h5 {\n\t\tfont-size: 2.5rem;\n\t}\n\n\tdiv.text-div h3 {\n\t\tfont-size: 2.9rem;\n\t}\n\n\tdiv.sub-div {\n\t\tfont-size: 1.7rem;\n\t}\n\n\tp.social-sub-text {\n\t\tfont-size: 1.5rem;\n\t}\n\n\tdiv.social-icons img {\n\t\twidth: 3.5rem;\n\t\theight: auto;\n\t}\n\n\tfooter.footer {\n\t\tpadding: 1rem 3rem;\n\t}\n\n\tfooter.footer p,\n\tfooter.footer a {\n\t\tfont-size: 2rem;\n\t}\n\n\tfooter.footer img {\n\t\twidth: 3rem;\n\t\theight: auto;\n\t}\n}\n\n@media (min-width: 1128px) {\n\timg.about-me-picture {\n\t\twidth: 100%;\n\t\theight: auto;\n\t}\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/img/babel.svg":
/*!***************************!*\
  !*** ./src/img/babel.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/babel.svg";

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/background.jpg";

/***/ }),

/***/ "./src/img/battleship.png":
/*!********************************!*\
  !*** ./src/img/battleship.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/battleship.png";

/***/ }),

/***/ "./src/img/c.svg":
/*!***********************!*\
  !*** ./src/img/c.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/c.svg";

/***/ }),

/***/ "./src/img/calculator.png":
/*!********************************!*\
  !*** ./src/img/calculator.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/calculator.png";

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

/***/ "./src/img/css.svg":
/*!*************************!*\
  !*** ./src/img/css.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/css.svg";

/***/ }),

/***/ "./src/img/cypress.svg":
/*!*****************************!*\
  !*** ./src/img/cypress.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/cypress.svg";

/***/ }),

/***/ "./src/img/doc.svg":
/*!*************************!*\
  !*** ./src/img/doc.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/doc.svg";

/***/ }),

/***/ "./src/img/docker.svg":
/*!****************************!*\
  !*** ./src/img/docker.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/docker.svg";

/***/ }),

/***/ "./src/img/eclipse.svg":
/*!*****************************!*\
  !*** ./src/img/eclipse.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/eclipse.svg";

/***/ }),

/***/ "./src/img/eslint.svg":
/*!****************************!*\
  !*** ./src/img/eslint.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/eslint.svg";

/***/ }),

/***/ "./src/img/etch.png":
/*!**************************!*\
  !*** ./src/img/etch.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/etch.png";

/***/ }),

/***/ "./src/img/git.svg":
/*!*************************!*\
  !*** ./src/img/git.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/git.svg";

/***/ }),

/***/ "./src/img/gitSocial.svg":
/*!*******************************!*\
  !*** ./src/img/gitSocial.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/gitSocial.svg";

/***/ }),

/***/ "./src/img/hacker.svg":
/*!****************************!*\
  !*** ./src/img/hacker.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/hacker.svg";

/***/ }),

/***/ "./src/img/hamburger.svg":
/*!*******************************!*\
  !*** ./src/img/hamburger.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/hamburger.svg";

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

/***/ "./src/img/html.svg":
/*!**************************!*\
  !*** ./src/img/html.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/html.svg";

/***/ }),

/***/ "./src/img/icon.svg":
/*!**************************!*\
  !*** ./src/img/icon.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/icon.svg";

/***/ }),

/***/ "./src/img/java.svg":
/*!**************************!*\
  !*** ./src/img/java.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/java.svg";

/***/ }),

/***/ "./src/img/jest.svg":
/*!**************************!*\
  !*** ./src/img/jest.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/jest.svg";

/***/ }),

/***/ "./src/img/js.svg":
/*!************************!*\
  !*** ./src/img/js.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/js.svg";

/***/ }),

/***/ "./src/img/linked.svg":
/*!****************************!*\
  !*** ./src/img/linked.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/linked.svg";

/***/ }),

/***/ "./src/img/linux.svg":
/*!***************************!*\
  !*** ./src/img/linux.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/linux.svg";

/***/ }),

/***/ "./src/img/lua.svg":
/*!*************************!*\
  !*** ./src/img/lua.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/lua.svg";

/***/ }),

/***/ "./src/img/npm.svg":
/*!*************************!*\
  !*** ./src/img/npm.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/npm.svg";

/***/ }),

/***/ "./src/img/prettier.svg":
/*!******************************!*\
  !*** ./src/img/prettier.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/prettier.svg";

/***/ }),

/***/ "./src/img/python.svg":
/*!****************************!*\
  !*** ./src/img/python.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/python.svg";

/***/ }),

/***/ "./src/img/restaurant.png":
/*!********************************!*\
  !*** ./src/img/restaurant.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/restaurant.png";

/***/ }),

/***/ "./src/img/shahir.PNG":
/*!****************************!*\
  !*** ./src/img/shahir.PNG ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/shahir.PNG";

/***/ }),

/***/ "./src/img/sql.svg":
/*!*************************!*\
  !*** ./src/img/sql.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sql.svg";

/***/ }),

/***/ "./src/img/tictac.png":
/*!****************************!*\
  !*** ./src/img/tictac.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/tictac.png";

/***/ }),

/***/ "./src/img/todo.png":
/*!**************************!*\
  !*** ./src/img/todo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/todo.png";

/***/ }),

/***/ "./src/img/vscode.svg":
/*!****************************!*\
  !*** ./src/img/vscode.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/vscode.svg";

/***/ }),

/***/ "./src/img/vue.svg":
/*!*************************!*\
  !*** ./src/img/vue.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/vue.svg";

/***/ }),

/***/ "./src/img/weather.png":
/*!*****************************!*\
  !*** ./src/img/weather.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/weather.png";

/***/ }),

/***/ "./src/img/webpack.svg":
/*!*****************************!*\
  !*** ./src/img/webpack.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/webpack.svg";

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
/* harmony import */ var _setup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup */ "./src/setup.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ "./src/project.js");







// sets up the header and footer and then loads the home page
(0,_setup__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_homepage__WEBPACK_IMPORTED_MODULE_3__["default"])();
var homeLink = document.querySelector(".nav-box:nth-of-type(1)");
var aboutLink = document.querySelector(".nav-box:nth-of-type(2)");
var projectsLink = document.querySelector(".nav-box:nth-of-type(3)");
var resumeLink = document.querySelector(".nav-box:nth-of-type(4)");

// links if navbar switches to hamburger menu
var mobileHomeLink = document.querySelector(".hamburger-menu > a:nth-of-type(1)");
var mobileAboutLink = document.querySelector(".hamburger-menu > a:nth-of-type(2)");
var mobileProjectsLink = document.querySelector(".hamburger-menu > a:nth-of-type(3)");
var mobileResumeLink = document.querySelector(".hamburger-menu > a:nth-of-type(4)");

// logo
var logo = document.querySelector(".logo-box");
homeLink.addEventListener("click", function () {
  (0,_homepage__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
mobileHomeLink.addEventListener("click", function () {
  (0,_homepage__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

// if clicked on logo, load home page
logo.addEventListener("click", function () {
  (0,_homepage__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
aboutLink.addEventListener("click", function () {
  (0,_about__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
mobileAboutLink.addEventListener("click", function () {
  (0,_about__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
projectsLink.addEventListener("click", function () {
  (0,_project__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
mobileProjectsLink.addEventListener("click", function () {
  (0,_project__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
resumeLink.addEventListener("click", function () {
  window.open("https://drive.google.com/file/d/1xCZSm4K3tc7_hqHhzIqQMs6E_Cz-6qUg/view?usp=sharing");
});
mobileResumeLink.addEventListener("click", function () {
  window.open("https://drive.google.com/file/d/1xCZSm4K3tc7_hqHhzIqQMs6E_Cz-6qUg/view?usp=sharing");
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSx5QkFBeUIsbUNBQW1DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsZUFBZTtBQUNmOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9GQUFvRixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLHdCQUF3Qix5QkFBeUIsT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLHdCQUF3QixPQUFPLFlBQVksTUFBTSx3QkFBd0IseUJBQXlCLE9BQU8sWUFBWSxNQUFNLHNCQUFzQixPQUFPLFlBQVksTUFBTSx3QkFBd0IsT0FBTyxVQUFVLEtBQUssWUFBWSx5QkFBeUIsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssd0JBQXdCLHlCQUF5QixPQUFPLEtBQUssd0JBQXdCLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxLQUFLLHdCQUF3QixPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxZQUFZLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUss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LENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQzs7QUFFRjtBQUNBdUUsSUFBSSxDQUFDbkosZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDcEM0RSxxREFBUSxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUM7QUFFRitHLFNBQVMsQ0FBQzNMLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3pDRyxrREFBSyxDQUFDLENBQUM7QUFDUixDQUFDLENBQUM7QUFFRjRMLGVBQWUsQ0FBQy9MLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQy9DRyxrREFBSyxDQUFDLENBQUM7QUFDUixDQUFDLENBQUM7QUFFRnlMLFlBQVksQ0FBQzVMLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQzVDOEgsb0RBQU8sQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBRUZrRSxrQkFBa0IsQ0FBQ2hNLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ2xEOEgsb0RBQU8sQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBRUYrRCxVQUFVLENBQUM3TCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUMxQ3NMLE1BQU0sQ0FBQ1ksSUFBSSxDQUNWLG9GQUNELENBQUM7QUFDRixDQUFDLENBQUM7QUFFRkQsZ0JBQWdCLENBQUNqTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUNoRHNMLE1BQU0sQ0FBQ1ksSUFBSSxDQUNWLG9GQUNELENBQUM7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvc2V0dXAuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvY3NzL25vcm1hbGl6ZS5jc3M/NmQ1NCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90eXBlZC5qcy9kaXN0L3R5cGVkLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGFoaXIgZnJvbSBcIi4vaW1nL3NoYWhpci5QTkdcIjtcbmltcG9ydCBHaXRTb2NpYWwgZnJvbSBcIi4vaW1nL2dpdFNvY2lhbC5zdmdcIjtcbmltcG9ydCBMaW5rZWQgZnJvbSBcIi4vaW1nL2xpbmtlZC5zdmdcIjtcbmltcG9ydCBEb2NrZXIgZnJvbSBcIi4vaW1nL2RvY2tlci5zdmdcIjtcbmltcG9ydCBTcWwgZnJvbSBcIi4vaW1nL3NxbC5zdmdcIjtcbmltcG9ydCBFY2xpcHNlIGZyb20gXCIuL2ltZy9lY2xpcHNlLnN2Z1wiO1xuaW1wb3J0IEx1YSBmcm9tIFwiLi9pbWcvbHVhLnN2Z1wiO1xuaW1wb3J0IFZ1ZSBmcm9tIFwiLi9pbWcvdnVlLnN2Z1wiO1xuaW1wb3J0IEN5cHJlc3MgZnJvbSBcIi4vaW1nL2N5cHJlc3Muc3ZnXCI7XG5pbXBvcnQgVnNjb2RlIGZyb20gXCIuL2ltZy92c2NvZGUuc3ZnXCI7XG5pbXBvcnQgQyBmcm9tIFwiLi9pbWcvYy5zdmdcIjtcbmltcG9ydCBOcG0gZnJvbSBcIi4vaW1nL25wbS5zdmdcIjtcbmltcG9ydCBCYWJlbCBmcm9tIFwiLi9pbWcvYmFiZWwuc3ZnXCI7XG5pbXBvcnQgUHJldHRpZXIgZnJvbSBcIi4vaW1nL3ByZXR0aWVyLnN2Z1wiO1xuaW1wb3J0IEVzbGludCBmcm9tIFwiLi9pbWcvZXNsaW50LnN2Z1wiO1xuaW1wb3J0IFdlYnBhY2sgZnJvbSBcIi4vaW1nL3dlYnBhY2suc3ZnXCI7XG5pbXBvcnQgSmVzdCBmcm9tIFwiLi9pbWcvamVzdC5zdmdcIjtcbmltcG9ydCBHaXQgZnJvbSBcIi4vaW1nL2dpdC5zdmdcIjtcbmltcG9ydCBQeXRob24gZnJvbSBcIi4vaW1nL3B5dGhvbi5zdmdcIjtcbmltcG9ydCBKYXZhIGZyb20gXCIuL2ltZy9qYXZhLnN2Z1wiO1xuaW1wb3J0IExpbnV4IGZyb20gXCIuL2ltZy9saW51eC5zdmdcIjtcbmltcG9ydCBIdG1sIGZyb20gXCIuL2ltZy9odG1sLnN2Z1wiO1xuaW1wb3J0IENzcyBmcm9tIFwiLi9pbWcvY3NzLnN2Z1wiO1xuaW1wb3J0IEpzIGZyb20gXCIuL2ltZy9qcy5zdmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWxJdGVtKGltYWdlLCB0aXRsZSkge1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjYXJvdXNlbEl0ZW0uY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWl0ZW1cIik7XG5cblx0Y29uc3QgY2Fyb3VzZWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGNhcm91c2VsSW1hZ2Uuc3JjID0gaW1hZ2U7XG5cdGNhcm91c2VsSW1hZ2UuYWx0ID0gdGl0bGU7XG5cdGNhcm91c2VsSW1hZ2UuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWltYWdlXCIpO1xuXG5cdGNvbnN0IGNhcm91c2VsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y2Fyb3VzZWxUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtdGl0bGVcIik7XG5cdGNhcm91c2VsVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuXHRjYXJvdXNlbEl0ZW0uYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJbWFnZSk7XG5cdGNhcm91c2VsSXRlbS5hcHBlbmRDaGlsZChjYXJvdXNlbFRpdGxlKTtcblxuXHRyZXR1cm4gY2Fyb3VzZWxJdGVtO1xufVxuXG4vLyBhZGQgYnV0dG9ucyB0byB0aGUgY2Fyb3VzZWwgYW5kIGNvbnRyb2wgdGhlIHNjcm9sbGluZ1xuZnVuY3Rpb24gYnV0dG9ucygpIHtcblx0Y29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsXCIpO1xuXHRjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrLWJ0blwiKTtcblx0Y29uc3QgZm9yd2FyZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yd2FyZC1idG5cIik7XG5cdGxldCBpc1Njcm9sbGluZyA9IGZhbHNlOyAvLyBUaGlzIHZhcmlhYmxlIHdpbGwgYmUgdXNlZCB0byBpbmRpY2F0ZSBzY3JvbGxpbmcgc3RhdHVzXG5cdGxldCBzY3JvbGxEaXJlY3Rpb24gPSAwOyAvLyAwIGZvciBsZWZ0LCAxIGZvciByaWdodFxuXHRjb25zdCBzY3JvbGxTdGVwID0gODsgLy8gVGhpcyB2YWx1ZSBjb250cm9scyB0aGUgc21vb3RobmVzcyBvZiB0aGUgc2Nyb2xsXG5cblx0Ly8gc21vb3RoIHNjcm9sbCBhbmltYXRpb25cblx0Y29uc3QgYW5pbWF0ZVNjcm9sbCA9ICgpID0+IHtcblx0XHQvLyBpZiBzY3JvbGxpbmcgaXMgc3RpbGwgaW4gcHJvZ3Jlc3MsIHRoZW4gY29udGludWUgc2Nyb2xsaW5nXG5cdFx0aWYgKCFpc1Njcm9sbGluZykgcmV0dXJuO1xuXG5cdFx0Ly8gc2Nyb2xsIGJ5IHRoZSBzY3JvbGxTdGVwXG5cdFx0Y29uc3Qgc2Nyb2xsRGlzdGFuY2UgPSBzY3JvbGxEaXJlY3Rpb24gPT09IDAgPyAtc2Nyb2xsU3RlcCA6IHNjcm9sbFN0ZXA7XG5cdFx0Y2Fyb3VzZWwuc2Nyb2xsTGVmdCArPSBzY3JvbGxEaXN0YW5jZTtcblxuXHRcdC8vIGlmIHRoZSBzY3JvbGwgaXMgbm90IGF0IHRoZSBlbmQsIHRoZW4gY29udGludWUgc2Nyb2xsaW5nXG5cdFx0aWYgKFxuXHRcdFx0KHNjcm9sbERpcmVjdGlvbiA9PT0gMCAmJiBjYXJvdXNlbC5zY3JvbGxMZWZ0ID4gMCkgfHxcblx0XHRcdChzY3JvbGxEaXJlY3Rpb24gPT09IDEgJiZcblx0XHRcdFx0Y2Fyb3VzZWwuc2Nyb2xsTGVmdCArIGNhcm91c2VsLm9mZnNldFdpZHRoIDwgY2Fyb3VzZWwuc2Nyb2xsV2lkdGgpXG5cdFx0KSB7XG5cdFx0XHQvLyBhbmltYXRlIHRoZSBzY3JvbGwgYXQgNjAgZnJhbWVzIHBlciBzZWNvbmRcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlU2Nyb2xsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gb3RoZXJ3aXNlLCBzdG9wIHNjcm9sbGluZ1xuXHRcdFx0aXNTY3JvbGxpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0Ly8gc2Nyb2xsIGxlZnQgd2hlbiB0aGUgYmFjayBidXR0b24gaXMgY2xpY2tlZFxuXHRjb25zdCBzY3JvbGxMZWZ0ID0gKCkgPT4ge1xuXHRcdC8vIGlmIHRoZSBzY3JvbGwgaXMgbm90IGluIHByb2dyZXNzLCB0aGVuIHN0YXJ0IHNjcm9sbGluZ1xuXHRcdGlmICghaXNTY3JvbGxpbmcpIHtcblx0XHRcdHNjcm9sbERpcmVjdGlvbiA9IDA7IC8vIDAgZm9yIGxlZnRcblx0XHRcdGlzU2Nyb2xsaW5nID0gdHJ1ZTsgLy8gdGhlIHNjcm9sbCBpcyBpbiBwcm9ncmVzc1xuXHRcdFx0YW5pbWF0ZVNjcm9sbCgpOyAvLyBzdGFydCBzY3JvbGxpbmdcblx0XHR9XG5cdH07XG5cblx0Ly8gc2Nyb2xsIHJpZ2h0IHdoZW4gdGhlIG5leHQgYnV0dG9uIGlzIGNsaWNrZWRcblx0Y29uc3Qgc2Nyb2xsUmlnaHQgPSAoKSA9PiB7XG5cdFx0Ly8gaWYgdGhlIHNjcm9sbCBpcyBub3QgaW4gcHJvZ3Jlc3MsIHRoZW4gc3RhcnQgc2Nyb2xsaW5nXG5cdFx0aWYgKCFpc1Njcm9sbGluZykge1xuXHRcdFx0c2Nyb2xsRGlyZWN0aW9uID0gMTsgLy8gMSBmb3IgcmlnaHRcblx0XHRcdGlzU2Nyb2xsaW5nID0gdHJ1ZTsgLy8gdGhlIHNjcm9sbCBpcyBpbiBwcm9ncmVzc1xuXHRcdFx0YW5pbWF0ZVNjcm9sbCgpOyAvLyBzdGFydCBzY3JvbGxpbmdcblx0XHR9XG5cdH07XG5cblx0Ly8gc3RvcCBzY3JvbGxpbmcgd2hlbiB0aGUgbW91c2UgbGVhdmVzIHRoZSBidXR0b25cblx0Y29uc3Qgc3RvcFNjcm9sbCA9ICgpID0+IHtcblx0XHRpc1Njcm9sbGluZyA9IGZhbHNlOyAvLyB0aGUgc2Nyb2xsIGlzIG5vdCBpbiBwcm9ncmVzc1xuXHR9O1xuXG5cdGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzY3JvbGxMZWZ0KTtcblx0YmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2Nyb2xsKTtcblx0Zm9yd2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHNjcm9sbFJpZ2h0KTtcblx0Zm9yd2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wU2Nyb2xsKTtcblxuXHRiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHNjcm9sbExlZnQpO1xuXHRiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBzdG9wU2Nyb2xsKTtcblx0Zm9yd2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBzY3JvbGxSaWdodCk7XG5cdGZvcndhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHN0b3BTY3JvbGwpO1xuXG5cdGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFNjcm9sbCk7XG5cdGZvcndhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFNjcm9sbCk7XG5cdGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsIHN0b3BTY3JvbGwpO1xuXHRmb3J3YXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCBzdG9wU2Nyb2xsKTtcblxuXHQvLyBFdmVudCBsaXN0ZW5lcnMgZm9yIGtleWJvYXJkXG5cdGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcblx0XHRpZiAoZS5rZXlDb2RlID09PSAzNykge1xuXHRcdFx0Ly8gTGVmdCBhcnJvdyBrZXlcblx0XHRcdHNjcm9sbExlZnQoKTtcblx0XHR9XG5cdH0pO1xuXHRiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBzdG9wU2Nyb2xsKTtcblxuXHRmb3J3YXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG5cdFx0aWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcblx0XHRcdC8vIFJpZ2h0IGFycm93IGtleVxuXHRcdFx0c2Nyb2xsUmlnaHQoKTtcblx0XHR9XG5cdH0pO1xuXHRmb3J3YXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBzdG9wU2Nyb2xsKTtcbn1cblxuLy8gY3JlYXRlIHRoZSBhYm91dCBwYWdlXG5mdW5jdGlvbiBhYm91dCgpIHtcblx0Y29uc3QgYWJvdXRQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0YWJvdXRQYWdlLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1wYWdlXCIpO1xuXG5cdGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0YWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBhYm91dFRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRhYm91dFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LXRleHQtY29udGFpbmVyXCIpO1xuXHRjb25zdCBhYm91dE1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRhYm91dE1lLnRleHRDb250ZW50ID0gXCJBYm91dCBcIjtcblx0Y29uc3QgYWJvdXRNZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0YWJvdXRNZVNwYW4udGV4dENvbnRlbnQgPSBcIk1lXCI7XG5cdGFib3V0TWUuYXBwZW5kQ2hpbGQoYWJvdXRNZVNwYW4pO1xuXHRhYm91dE1lLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZVwiKTtcblx0YWJvdXRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWUpO1xuXHRhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFRleHRDb250YWluZXIpO1xuXG5cdGNvbnN0IGFib3V0TWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRhYm91dE1lRGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZS1kaXZcIik7XG5cblx0Y29uc3QgYWJvdXRNZVRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRhYm91dE1lVGV4dERpdi5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbWUtdGV4dC1kaXZcIik7XG5cblx0Y29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoXCJwYXJhZ3JhcGhcIik7XG5cblx0Y29uc3QgYWJvdXRNZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0YWJvdXRNZVRleHQuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLXRleHRcIik7XG5cdGFib3V0TWVUZXh0LnRleHRDb250ZW50ID1cblx0XHRcIkhlbGxvLCBJJ20gU2hhaGlyLCBhIGRlZGljYXRlZCBDb21wdXRlciBTY2llbmNlIGFuZCBNYXRoZW1hdGljcyBzdHVkZW50IGF0IERpY2tpbnNvbiBDb2xsZWdlIHdpdGggYSBkZWVwIHBhc3Npb24gZm9yIHdlYiBkZXZlbG9wbWVudC4gTXkgYWNhZGVtaWMgYW5kIHNlbGYtdGF1Z2h0IGpvdXJuZXkgaW4gcHJvZ3JhbW1pbmcgaGFzIGVxdWlwcGVkIG1lIHdpdGggdGhlIHNraWxscyB0byBjcmFmdCBlZmZpY2llbnQsIHNjYWxhYmxlIHNvZnR3YXJlIHNvbHV0aW9ucy4gSSB0aHJpdmUgb24gdGhlIGNoYWxsZW5nZXMgdGhhdCBjb21lIHdpdGggZGV2ZWxvcGluZyBjbGVhbiwgaW50dWl0aXZlIHVzZXIgaW50ZXJmYWNlcyBhbmQgcm9idXN0IGJhY2tlbmQgZnVuY3Rpb25hbGl0aWVzLiBNeSBnb2FsIGlzIHRvIGNvbnRpbnVvdXNseSBleHBhbmQgbXkgZnVsbC1zdGFjayBkZXZlbG9wbWVudCBleHBlcnRpc2UgYW5kIGNvbnRyaWJ1dGUgdG8gbWVhbmluZ2Z1bCBwcm9qZWN0cyBpbiBhIGR5bmFtaWMgdGVhbSBlbnZpcm9ubWVudC5cIjtcblxuXHRjb25zdCBhYm91dE1lVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0YWJvdXRNZVRleHQyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZS10ZXh0XCIpO1xuXHRhYm91dE1lVGV4dDIudGV4dENvbnRlbnQgPSBgV2hlbiBJIHN0ZXAgYXdheSBmcm9tIHRoZSBrZXlib2FyZCwgeW91J2xsIGZpbmQgbWUgaW5kdWxnaW5nIGluIGEgdmFyaWV0eSBvZiBpbnRlcmVzdHMgdGhhdCBrZWVwIG1lIGJhbGFuY2VkIGFuZCBpbnNwaXJlZC4gSSdtIGFuIGF2aWQgc29jY2VyIGZhbiwgd2l0aCBSZWFsIE1hZHJpZCdzIGdhbWVzIHB1bmN0dWF0aW5nIHRoZSBjYWxlbmRhciBvZiBteSBwZXJzb25hbCBsaWZlLiBJbiB0aGUgd29ybGQgb2YgbWl4ZWQgbWFydGlhbCBhcnRzLCBJIGFkbWlyZSB0aGUgc3RyYXRlZ2ljIHByb3dlc3Mgb2YgZmlnaHRlcnMgbGlrZSB0aGUgcmV0aXJlZCBLaGFiaWIgTnVybWFnb21lZG92LiBNeSB0YXN0ZSBpbiBlbnRlcnRhaW5tZW50IHJhbmdlcyBmcm9tIHRoZSBjYXB0aXZhdGluZyBuYXJyYXRpdmVzIG9mIFwiVGhlIFNoYXdzaGFuayBSZWRlbXB0aW9uXCIgdG8gdGhlIGNvbXBsZXggbGVnYWwgZHJhbWFzIG9mIFwiQmV0dGVyIENhbGwgU2F1bC5cIiBHYW1pbmcgaXMgYW5vdGhlciBwYXNzaW9uIOKAlCBpbW1lcnNpbmcgbXlzZWxmIGluIHJpY2gsIHN0b3J5LWRyaXZlbiB3b3JsZHMgbGlrZSB0aG9zZSBvZiBSZWQgRGVhZCBSZWRlbXB0aW9uIDIsIExBIE5vaXJlLCBhbmQgU2xlZXBpbmcgRG9ncyBwcm92aWRlcyBub3QganVzdCByZWNyZWF0aW9uLCBidXQgY3JlYXRpdmUgaW5zcGlyYXRpb24uYDtcblxuXHRjb25zdCBhYm91dE1lVGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0YWJvdXRNZVRleHQzLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZS10ZXh0XCIpO1xuXHRhYm91dE1lVGV4dDMudGV4dENvbnRlbnQgPVxuXHRcdFwiSW4gYWRkaXRpb24gdG8gbXkgc3R1ZGllcyBhbmQgaG9iYmllcywgSSBzZXJ2ZSBhcyBhIFJlc2lkZW50IEFkdmlzb3IsIGEgcm9sZSB0aGF0IGhhcyByZWZpbmVkIG15IGludGVycGVyc29uYWwgc2tpbGxzIGFuZCBhYmlsaXR5IHRvIGZvc3RlciBjb21tdW5pdHkgYW1vbmcgZGl2ZXJzZSBncm91cHMuIEl0J3MgYSByb2xlIHRoYXQgY29tcGxlbWVudHMgbXkgdGVjaG5pY2FsIGFzcGlyYXRpb25zIGJ5IGVtcGhhc2l6aW5nIGVtcGF0aHksIGxlYWRlcnNoaXAsIGFuZCBjb2xsYWJvcmF0aW9uLlwiO1xuXG5cdGNvbnN0IGFib3V0TWVUZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRhYm91dE1lVGV4dDQuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLXRleHRcIik7XG5cdGFib3V0TWVUZXh0NC50ZXh0Q29udGVudCA9XG5cdFx0XCJJJ20gZXhjaXRlZCB0byBlbWJhcmsgb24gdGhlIG5leHQgc3RhZ2Ugb2YgbXkgY2FyZWVyIGpvdXJuZXkgYW5kIGFtIGFjdGl2ZWx5IHNlZWtpbmcgaW50ZXJuc2hpcCBvcHBvcnR1bml0aWVzIHRoYXQgd2lsbCBsZXZlcmFnZSBteSB0ZWNobmljYWwgc2tpbGxzIGFuZCB3b3JrIGV0aGljLiBJZiB5b3UncmUgbG9va2luZyBmb3Igc29tZW9uZSB3aG8gYnJpbmdzIGEgY29tYmluYXRpb24gb2YgY29kaW5nIHByb2ZpY2llbmN5IGFuZCBhIHdlbGwtcm91bmRlZCBwZXJzcGVjdGl2ZSB0byB5b3VyIHRlYW0sIGxldCdzIGNvbm5lY3QuXCI7XG5cblx0cGFyYWdyYXBoLmFwcGVuZENoaWxkKGFib3V0TWVUZXh0KTtcblx0cGFyYWdyYXBoLmFwcGVuZENoaWxkKGFib3V0TWVUZXh0Mik7XG5cdHBhcmFncmFwaC5hcHBlbmRDaGlsZChhYm91dE1lVGV4dDMpO1xuXHRwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoYWJvdXRNZVRleHQ0KTtcblx0YWJvdXRNZVRleHREaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuXHRjb25zdCBzb2NpYWxJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNvY2lhbEljb25zLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvbnNcIik7XG5cblx0Y29uc3QgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDdcIjtcblx0Z2l0TGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXHRnaXRMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuXHRjb25zdCBnaXRTb2NpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRnaXRTb2NpYWwuc3JjID0gR2l0U29jaWFsO1xuXHRnaXRTb2NpYWwuYWx0ID0gXCJHaXRIdWJcIjtcblx0Z2l0U29jaWFsLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvblwiKTtcblx0Z2l0TGluay5hcHBlbmRDaGlsZChnaXRTb2NpYWwpO1xuXHRzb2NpYWxJY29ucy5hcHBlbmRDaGlsZChnaXRMaW5rKTtcblxuXHRjb25zdCBsaW5rZWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGxpbmtlZExpbmsuaHJlZiA9IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NoYWhpcjQ3L1wiO1xuXHRsaW5rZWRMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cdGxpbmtlZExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5cdGNvbnN0IGxpbmtlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGxpbmtlZC5zcmMgPSBMaW5rZWQ7XG5cdGxpbmtlZC5hbHQgPSBcIkxpbmtlZEluXCI7XG5cdGxpbmtlZC5jbGFzc0xpc3QuYWRkKFwic29jaWFsLWljb25cIik7XG5cdGxpbmtlZExpbmsuYXBwZW5kQ2hpbGQobGlua2VkKTtcblx0c29jaWFsSWNvbnMuYXBwZW5kQ2hpbGQobGlua2VkTGluayk7XG5cblx0YWJvdXRNZVRleHREaXYuYXBwZW5kQ2hpbGQoc29jaWFsSWNvbnMpO1xuXHRhYm91dE1lRGl2LmFwcGVuZENoaWxkKGFib3V0TWVUZXh0RGl2KTtcblxuXHRjb25zdCBwaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0cGljdHVyZS5zcmMgPSBTaGFoaXI7XG5cdHBpY3R1cmUuYWx0ID0gXCJTaGFoaXJcIjtcblx0cGljdHVyZS5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbWUtcGljdHVyZVwiKTtcblx0YWJvdXRNZURpdi5hcHBlbmRDaGlsZChwaWN0dXJlKTtcblxuXHRhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dE1lRGl2KTtcblx0YWJvdXRQYWdlLmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcblxuXHRjb25zdCBzZWNvbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzZWNvbmREaXYuY2xhc3NMaXN0LmFkZChcInNlY29uZC1kaXZcIik7XG5cblx0Y29uc3Qgc2Vjb25kRGl2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNlY29uZERpdlRleHQuY2xhc3NMaXN0LmFkZChcInNlY29uZC1kaXYtdGV4dFwiKTtcblxuXHRjb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0aGlnaGxpZ2h0LmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG5cdGhpZ2hsaWdodC50ZXh0Q29udGVudCA9IFwiVG9vbHNcIjtcblxuXHRjb25zdCBhbmQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiBhbmRcIik7XG5cblx0Y29uc3QgaGlnaGxpZ2h0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRoaWdobGlnaHRUZXh0LnRleHRDb250ZW50ID0gXCIgVGVjaG5vbG9naWVzXCI7XG5cdGhpZ2hsaWdodFRleHQuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcblxuXHRjb25zdCBzZW50ZW5jZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIEkndmUgd29ya2VkIHdpdGhcIik7XG5cblx0Y29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHR0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuXHR0ZXh0LmFwcGVuZENoaWxkKGhpZ2hsaWdodCk7XG5cdHRleHQuYXBwZW5kQ2hpbGQoYW5kKTtcblx0dGV4dC5hcHBlbmRDaGlsZChoaWdobGlnaHRUZXh0KTtcblx0dGV4dC5hcHBlbmRDaGlsZChzZW50ZW5jZSk7XG5cdHNlY29uZERpdlRleHQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cdHNlY29uZERpdi5hcHBlbmRDaGlsZChzZWNvbmREaXZUZXh0KTtcblxuXHRjb25zdCBjYXJvdXNlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNhcm91c2VsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1jb250YWluZXJcIik7XG5cblx0Y29uc3QgY2Fyb3VzZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjYXJvdXNlbERpdi5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtZGl2XCIpO1xuXG5cdGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRiYWNrQnRuLmNsYXNzTGlzdC5hZGQoXCJiYWNrLWJ0blwiKTtcblx0YmFja0J0bi50ZXh0Q29udGVudCA9IFwiPFwiO1xuXHRjYXJvdXNlbERpdi5hcHBlbmRDaGlsZChiYWNrQnRuKTtcblxuXHRjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNhcm91c2VsLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbFwiKTtcblxuXHRjb25zdCBjYXJvdXNlbEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y2Fyb3VzZWxJdGVtcy5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtaXRlbXNcIik7XG5cblx0Y29uc3QgY2Fyb3VzZWxJdGVtMSA9IGNyZWF0ZUNhcm91c2VsSXRlbShIdG1sLCBcIkhUTUxcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTIgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oQ3NzLCBcIkNTU1wiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMyA9IGNyZWF0ZUNhcm91c2VsSXRlbShKcywgXCJKYXZhU2NyaXB0XCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW00ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEdpdCwgXCJHaXRcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTUgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oTnBtLCBcIk5QTVwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtNiA9IGNyZWF0ZUNhcm91c2VsSXRlbShWc2NvZGUsIFwiVlMgQ29kZVwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtNyA9IGNyZWF0ZUNhcm91c2VsSXRlbShEb2NrZXIsIFwiRG9ja2VyXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW04ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKExpbnV4LCBcIkxpbnV4XCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW05ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKFB5dGhvbiwgXCJQeXRob25cIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTEwID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEphdmEsIFwiSmF2YVwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTEgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oU3FsLCBcIlNRTFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTIgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oV2VicGFjaywgXCJXZWJwYWNrXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xMyA9IGNyZWF0ZUNhcm91c2VsSXRlbShWdWUsIFwiVnVlLmpzXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xNCA9IGNyZWF0ZUNhcm91c2VsSXRlbShCYWJlbCwgXCJCYWJlbFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTUgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oSmVzdCwgXCJKZXN0XCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xNiA9IGNyZWF0ZUNhcm91c2VsSXRlbShQcmV0dGllciwgXCJQcmV0dGllclwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTcgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oRXNsaW50LCBcIkVzbGludFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTggPSBjcmVhdGVDYXJvdXNlbEl0ZW0oQ3lwcmVzcywgXCJDeXByZXNzXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xOSA9IGNyZWF0ZUNhcm91c2VsSXRlbShDLCBcIkMrK1wiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMjAgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oTHVhLCBcIkx1YVwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMjEgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oRWNsaXBzZSwgXCJFY2xpcHNlXCIpO1xuXG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMSk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMik7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMyk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtNCk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtNSk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtNik7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtNyk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtOCk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtOSk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTApO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTExKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xMik7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTMpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTE0KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xNSk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTYpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTE3KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xOCk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTkpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTIwKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0yMSk7XG5cblx0Y2Fyb3VzZWwuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtcyk7XG5cdGNhcm91c2VsRGl2LmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuXHRjYXJvdXNlbERpdi5hcHBlbmRDaGlsZChjYXJvdXNlbCk7XG5cblx0Y29uc3QgZm9yd2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGZvcndhcmRCdG4uY2xhc3NMaXN0LmFkZChcImZvcndhcmQtYnRuXCIpO1xuXHRmb3J3YXJkQnRuLnRleHRDb250ZW50ID0gXCI+XCI7XG5cdGNhcm91c2VsRGl2LmFwcGVuZENoaWxkKGZvcndhcmRCdG4pO1xuXG5cdGNhcm91c2VsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcm91c2VsRGl2KTtcblx0c2Vjb25kRGl2LmFwcGVuZENoaWxkKGNhcm91c2VsQ29udGFpbmVyKTtcblx0YWJvdXRQYWdlLmFwcGVuZENoaWxkKHNlY29uZERpdik7XG5cblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG5cdG1haW4uaW5uZXJIVE1MID0gXCJcIjtcblx0bWFpbi5hcHBlbmRDaGlsZChhYm91dFBhZ2UpO1xuXG5cdGJ1dHRvbnMoKTsgLy8gYWRkIGJ1dHRvbnMgdG8gdGhlIGNhcm91c2VsIGFuZCBjb250cm9sIHRoZSBzY3JvbGxpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgVHlwZWQgZnJvbSBcInR5cGVkLmpzXCI7XG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSBcIi4vaW1nL2NvbXB1dGVyLnBuZ1wiO1xuaW1wb3J0IEhhbmQgZnJvbSBcIi4vaW1nL2hhbmQuc3ZnXCI7XG5pbXBvcnQgSGFja2VyIGZyb20gXCIuL2ltZy9oYWNrZXIuc3ZnXCI7XG5pbXBvcnQgR2l0U29jaWFsIGZyb20gXCIuL2ltZy9naXRTb2NpYWwuc3ZnXCI7XG5pbXBvcnQgTGlua2VkIGZyb20gXCIuL2ltZy9saW5rZWQuc3ZnXCI7XG5cbi8vIFR5cGUuanMgdG8gd3JpdGUgZHluYW1pY2FsbHkgY2hhbmdpbmcgdGV4dFxuZnVuY3Rpb24gZHluYW1pY1RleHQoKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRjb25zdCB0eXBlZCA9IG5ldyBUeXBlZChcIiN0eXBlZC10ZXh0XCIsIHtcblx0XHQvLyBTdHJpbmdzIHRvIGRpc3BsYXlcblx0XHRzdHJpbmdzOiBbXG5cdFx0XHRcIkZ1bGwgU3RhY2sgRGV2ZWxvcGVyXCIsXG5cdFx0XHRcIkNyZWF0aXZlIENvZGVyXCIsXG5cdFx0XHRcIkNvbXB1dGVyIFNjaWVuY2UgU3R1ZGVudFwiLFxuXHRcdFx0XCJNYXRoZW1hdGljcyBTdHVkZW50XCIsXG5cdFx0XHRcIkFzcGlyaW5nIFNvZnR3YXJlIERldmVsb3BlclwiLFxuXHRcdFx0XCJFbWVyZ2luZyBGdWxsIFN0YWNrIERldmVsb3BlclwiLFxuXHRcdFx0XCJQcm9ncmFtbWluZyBFbnRodXNpYXN0XCIsXG5cdFx0XHRcIkZ1dHVyZSBUZWNoIFByb2Zlc3Npb25hbFwiLFxuXHRcdFx0XCJTdHVkZW50IG9mIFNvZnR3YXJlIEVuZ2luZWVyaW5nXCIsXG5cdFx0XHRcIkNvZGluZyBIb2JieWlzdFwiLFxuXHRcdFx0XCJTb2Z0d2FyZSBFbmdpbmVlciBpbiBUcmFpbmluZ1wiLFxuXHRcdFx0XCJTb2Z0d2FyZSBFbmdpbmVlciBpbiB0aGUgTWFraW5nXCIsXG5cdFx0XHRcIlNvZnR3YXJlIEVuZ2luZWVyIGluIHRoZSBXb3Jrc1wiLFxuXHRcdF0sXG5cblx0XHQvLyBTcGVlZCBzZXR0aW5nc1xuXHRcdHR5cGVTcGVlZDogNTAsXG5cdFx0YmFja1NwZWVkOiAyNSxcblx0XHQvLyBUaW1lIGJlZm9yZSB0eXBpbmcgc3RhcnRzXG5cdFx0c3RhcnREZWxheTogMTAwMCxcblx0XHQvLyBUaW1lIGJlZm9yZSBlcmFzaW5nXG5cdFx0YmFja0RlbGF5OiAyMDAwLFxuXHRcdC8vIExvb3AgdGhlIGFuaW1hdGlvblxuXHRcdGxvb3A6IHRydWUsXG5cdFx0Ly8gU2hvdyBjdXJzb3Jcblx0XHRzaG93Q3Vyc29yOiB0cnVlLFxuXHRcdC8vIENoYXJhY3RlciBmb3IgY3Vyc29yXG5cdFx0Y3Vyc29yQ2hhcjogXCJ8XCIsXG5cdFx0Ly8gQXR0cmlidXRlIHRvIHR5cGUgKG51bGwgPT0gdGV4dClcblx0XHRhdHRyOiBudWxsLFxuXHRcdC8vIFdoZXRoZXIgdG8gc3RhcnQgdHlwaW5nIGF1dG9tYXRpY2FsbHlcblx0XHRhdXRvSW5zZXJ0Q3NzOiB0cnVlLFxuXHRcdC8vIERlZmF1bHQgY29udGVudCBiZWZvcmUgdHlwaW5nXG5cdFx0Y29udGVudFR5cGU6IFwiaHRtbFwiLFxuXHR9KTtcbn1cblxuLy8gbG9hZHMgdGhlIGhvbWUgcGFnZVxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cdGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xuXHRtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cblx0Y29uc3QgZmlyc3RCbG9ja0hvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRmaXJzdEJsb2NrSG9tZS5jbGFzc0xpc3QuYWRkKFwiZmlyc3QtYmxvY2staG9tZVwiKTtcblxuXHRjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dC1jb250YWluZXJcIik7XG5cblx0Y29uc3Qgc3ViVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHN1YlRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Yi10ZXh0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBmaXJzdFRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRmaXJzdFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZpcnN0LXRleHQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IGZpcnN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0Zmlyc3RUZXh0LnRleHRDb250ZW50ID0gXCJIaSwgVGhlcmUhXCI7XG5cdGZpcnN0VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdFRleHQpO1xuXG5cdGNvbnN0IHdhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHR3YXZlLmNsYXNzTGlzdC5hZGQoXCJ3YXZlXCIpO1xuXHR3YXZlLnNyYyA9IEhhbmQ7XG5cdHdhdmUuYWx0ID0gXCJXYXZlXCI7XG5cdGZpcnN0VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh3YXZlKTtcblxuXHRjb25zdCBzZWNvbmRUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2Vjb25kVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLXRleHQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IHNlY29uZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG5cdHNlY29uZFRleHQudGV4dENvbnRlbnQgPSBcIkknbSBcIjtcblx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRuYW1lLnRleHRDb250ZW50ID0gXCJTaGFoaXIgQWhtZWRcIjtcblx0bmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcblx0c2Vjb25kVGV4dC5hcHBlbmRDaGlsZChuYW1lKTtcblx0c2Vjb25kVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRUZXh0KTtcblxuXHRzdWJUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0VGV4dENvbnRhaW5lcik7XG5cdHN1YlRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kVGV4dENvbnRhaW5lcik7XG5cblx0Y29uc3QgdHlwZWRUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dHlwZWRUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0eXBlZC10ZXh0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCB0eXBlZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0dHlwZWRUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0eXBlZC10ZXh0XCIpO1xuXHR0eXBlZFRleHQuaWQgPSBcInR5cGVkLXRleHRcIjtcblxuXHR0eXBlZFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodHlwZWRUZXh0KTtcblxuXHR0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1YlRleHRDb250YWluZXIpO1xuXHR0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHR5cGVkVGV4dENvbnRhaW5lcik7XG5cblx0Zmlyc3RCbG9ja0hvbWUuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cblx0Y29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRpbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0aW1hZ2Uuc3JjID0gQ29tcHV0ZXI7XG5cdGltYWdlLmFsdCA9IFwiQ29tcHV0ZXJcIjtcblx0aW1hZ2UuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyXCIpO1xuXHRpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG5cblx0Zmlyc3RCbG9ja0hvbWUuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuXG5cdG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RCbG9ja0hvbWUpO1xuXG5cdGNvbnN0IHNlY29uZEJsb2NrSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNlY29uZEJsb2NrSG9tZS5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLWJsb2NrLWhvbWVcIik7XG5cblx0Y29uc3Qgc2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtYmxvY2stdGV4dC1jb250YWluZXJcIik7XG5cblx0Y29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRleHREaXYuY2xhc3NMaXN0LmFkZChcInRleHQtZGl2XCIpO1xuXG5cdGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHRleHQudGV4dENvbnRlbnQgPSBcIklmIG9wcG9ydHVuaXR5IGRvZXNuJ3Qga25vY2ssIFwiO1xuXG5cdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0c3Bhbi50ZXh0Q29udGVudCA9IFwiYnVpbGQgYSBkb29yLlwiO1xuXHRzcGFuLmNsYXNzTGlzdC5hZGQoXCJzcGFuLWRvb3JcIik7XG5cblx0dGV4dC5hcHBlbmRDaGlsZChzcGFuKTtcblx0dGV4dERpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcblx0Y29uc3Qgc3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c3ViRGl2LmNsYXNzTGlzdC5hZGQoXCJzdWItZGl2XCIpO1xuXHRjb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0aGlnaGxpZ2h0LnRleHRDb250ZW50ID1cblx0XHRcIkVtYnJhY2luZyBjaGFsbGVuZ2VzIHdpdGggaW5ub3ZhdGlvbiBhbmQgZGV0ZXJtaW5hdGlvbiwgXCI7XG5cdGhpZ2hsaWdodC5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuXG5cdGNvbnN0IHN1YlRleHRBZnRlckhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuXHRcdFwiSSBjaGFubmVsIG15IHBhc3Npb24gZm9yIGNvZGluZyBpbnRvIGNyYWZ0aW5nIHNvbHV0aW9ucyB3aGVyZSBub25lIGV4aXN0ZWQgYmVmb3JlLiBJbiB0aGUgZXZlci1ldm9sdmluZyB3b3JsZCBvZiB3ZWIgZGV2ZWxvcG1lbnQsIEknbSBjb21taXR0ZWQgdG8gdHVybmluZyBvYnN0YWNsZXMgaW50byBzdGVwcGluZyBzdG9uZXMgZm9yIGdyb3d0aCBhbmQgbGVhcm5pbmcuXCIsXG5cdCk7XG5cdGNvbnN0IHN1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0c3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViLXRleHRcIik7XG5cblx0c3ViVGV4dC5hcHBlbmRDaGlsZChoaWdobGlnaHQpO1xuXHRzdWJUZXh0LmFwcGVuZENoaWxkKHN1YlRleHRBZnRlckhpZ2hsaWdodCk7XG5cblx0Y29uc3Qgc3Vic3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRzdWJzdWJUZXh0LnRleHRDb250ZW50ID1cblx0XHRcIldpdGggZXZlcnkgbGluZSBvZiBjb2RlLCBJIGFpbSB0byBidWlsZCB3ZWIgYXBwbGljYXRpb25zIHRoYXQgYXJlIGludHVpdGl2ZSBhbmQgZWZmaWNpZW50LiBNeSBnb2FsIGlzIHRvIGNyZWF0ZSB0b29scyB0aGF0IG5vdCBvbmx5IGZ1bmN0aW9uIHNtb290aGx5IGJ1dCBhbHNvIGVuaGFuY2UgdGhlIHVzZXIgZXhwZXJpZW5jZS4gSXQncyBhYm91dCBwYXZpbmcgbmV3IHBhdGh3YXlzIHRvIHN1Y2Nlc3MgYW5kIGVuc3VyaW5nIHRoZXkgbGVhZCB0byBtZWFuaW5nZnVsIHJlc3VsdHMgZm9yIGJvdGggdXNlcnMgYW5kIGJ1c2luZXNzZXNcIjtcblx0c3Vic3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViLXRleHRcIik7XG5cdHN1YkRpdi5hcHBlbmRDaGlsZChzdWJUZXh0KTtcblx0c3ViRGl2LmFwcGVuZENoaWxkKHN1YnN1YlRleHQpO1xuXHR0ZXh0RGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG5cdHNlY29uZEJsb2NrVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcblxuXHRjb25zdCBoYWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRoYWNrZXIuY2xhc3NMaXN0LmFkZChcImhhY2tlclwiKTtcblx0aGFja2VyLnNyYyA9IEhhY2tlcjtcblx0aGFja2VyLmFsdCA9IFwiSGFja2VyXCI7XG5cdHNlY29uZEJsb2NrVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChoYWNrZXIpO1xuXG5cdGNvbnN0IHNvY2lhbEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c29jaWFsQmxvY2suY2xhc3NMaXN0LmFkZChcInNvY2lhbC1ibG9ja1wiKTtcblxuXHRjb25zdCBzb2NpYWxUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c29jaWFsVGV4dERpdi5jbGFzc0xpc3QuYWRkKFwic29jaWFsLXRleHQtZGl2XCIpO1xuXG5cdGNvbnN0IHNvY2lhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHNvY2lhbFRleHQudGV4dENvbnRlbnQgPSBcIkZJTkQgTUUgT05cIjtcblxuXHRjb25zdCB0ZXh0QmVmb3JlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJGZWVsIGZyZWUgdG8gXCIpO1xuXHRjb25zdCB0ZXh0QWZ0ZXIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiB3aXRoIG1lXCIpO1xuXG5cdGNvbnN0IHNwYW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdHNwYW5Db250ZW50LnRleHRDb250ZW50ID0gXCJjb25uZWN0XCI7XG5cblx0Y29uc3Qgc29jaWFsU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRzb2NpYWxTdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtc3ViLXRleHRcIik7XG5cdHNvY2lhbFN1YlRleHQuYXBwZW5kQ2hpbGQodGV4dEJlZm9yZSk7XG5cdHNvY2lhbFN1YlRleHQuYXBwZW5kQ2hpbGQoc3BhbkNvbnRlbnQpO1xuXHRzb2NpYWxTdWJUZXh0LmFwcGVuZENoaWxkKHRleHRBZnRlcik7XG5cblx0c29jaWFsVGV4dERpdi5hcHBlbmRDaGlsZChzb2NpYWxUZXh0KTtcblx0c29jaWFsVGV4dERpdi5hcHBlbmRDaGlsZChzb2NpYWxTdWJUZXh0KTtcblxuXHRjb25zdCBzb2NpYWxJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNvY2lhbEljb25zLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvbnNcIik7XG5cblx0Y29uc3QgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDdcIjtcblx0Z2l0TGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXHRnaXRMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuXHRjb25zdCBnaXRTb2NpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRnaXRTb2NpYWwuc3JjID0gR2l0U29jaWFsO1xuXHRnaXRTb2NpYWwuYWx0ID0gXCJHaXRIdWJcIjtcblx0Z2l0U29jaWFsLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvblwiKTtcblx0Z2l0TGluay5hcHBlbmRDaGlsZChnaXRTb2NpYWwpO1xuXHRzb2NpYWxJY29ucy5hcHBlbmRDaGlsZChnaXRMaW5rKTtcblxuXHRjb25zdCBsaW5rZWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGxpbmtlZExpbmsuaHJlZiA9IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NoYWhpcjQ3L1wiO1xuXHRsaW5rZWRMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cdGxpbmtlZExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5cdGNvbnN0IGxpbmtlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGxpbmtlZC5zcmMgPSBMaW5rZWQ7XG5cdGxpbmtlZC5hbHQgPSBcIkxpbmtlZEluXCI7XG5cdGxpbmtlZC5jbGFzc0xpc3QuYWRkKFwic29jaWFsLWljb25cIik7XG5cdGxpbmtlZExpbmsuYXBwZW5kQ2hpbGQobGlua2VkKTtcblx0c29jaWFsSWNvbnMuYXBwZW5kQ2hpbGQobGlua2VkTGluayk7XG5cblx0c29jaWFsQmxvY2suYXBwZW5kQ2hpbGQoc29jaWFsVGV4dERpdik7XG5cdHNvY2lhbEJsb2NrLmFwcGVuZENoaWxkKHNvY2lhbEljb25zKTtcblxuXHRzZWNvbmRCbG9ja0hvbWUuYXBwZW5kQ2hpbGQoc2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyKTtcblx0c2Vjb25kQmxvY2tIb21lLmFwcGVuZENoaWxkKHNvY2lhbEJsb2NrKTtcblxuXHRtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZEJsb2NrSG9tZSk7XG5cblx0ZHluYW1pY1RleHQoKTsgLy8gVHlwZS5qc1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiIsImltcG9ydCBUb2RvIGZyb20gXCIuL2ltZy90b2RvLnBuZ1wiO1xuaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSBcIi4vaW1nL2JhdHRsZXNoaXAucG5nXCI7XG5pbXBvcnQgV2VhdGhlciBmcm9tIFwiLi9pbWcvd2VhdGhlci5wbmdcIjtcbmltcG9ydCBUaWN0YWMgZnJvbSBcIi4vaW1nL3RpY3RhYy5wbmdcIjtcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gXCIuL2ltZy9jYWxjdWxhdG9yLnBuZ1wiO1xuaW1wb3J0IFJlc3RhdXJhbnQgZnJvbSBcIi4vaW1nL3Jlc3RhdXJhbnQucG5nXCI7XG5pbXBvcnQgRXRjaCBmcm9tIFwiLi9pbWcvZXRjaC5wbmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEl0ZW0oaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgbGl2ZURlbW8sIHNvdXJjZUNvZGUpIHtcblx0Y29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtXCIpO1xuXG5cdGNvbnN0IHByb2plY3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdHByb2plY3RJbWFnZS5zcmMgPSBpbWFnZTtcblx0cHJvamVjdEltYWdlLmFsdCA9IHRpdGxlO1xuXHRwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0SW1hZ2UpO1xuXG5cdGNvbnN0IHByb2plY3RJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdEl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbS1kaXZcIik7XG5cblx0Y29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuXHRjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0cHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cblx0Y29uc3QgcHJvamVjdExpbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0TGlua0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saW5rLWRpdlwiKTtcblxuXHRjb25zdCBwcm9qZWN0TGl2ZURlbW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0cHJvamVjdExpdmVEZW1vLmhyZWYgPSBsaXZlRGVtbztcblx0cHJvamVjdExpdmVEZW1vLnRleHRDb250ZW50ID0gXCJMaXZlIERlbW9cIjtcblx0cHJvamVjdExpbmtEaXYuYXBwZW5kQ2hpbGQocHJvamVjdExpdmVEZW1vKTtcblxuXHRjb25zdCBwcm9qZWN0U291cmNlQ29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRwcm9qZWN0U291cmNlQ29kZS5ocmVmID0gc291cmNlQ29kZTtcblx0cHJvamVjdFNvdXJjZUNvZGUudGV4dENvbnRlbnQgPSBcIlNvdXJjZSBDb2RlXCI7XG5cdHByb2plY3RMaW5rRGl2LmFwcGVuZENoaWxkKHByb2plY3RTb3VyY2VDb2RlKTtcblxuXHRwcm9qZWN0SXRlbURpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXHRwcm9qZWN0SXRlbURpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuXHRwcm9qZWN0SXRlbURpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGlua0Rpdik7XG5cdHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtRGl2KTtcblxuXHRyZXR1cm4gcHJvamVjdEl0ZW07XG59XG5cbi8vIGxvYWRzIHRoZSBwcm9qZWN0IHBhZ2VcbmZ1bmN0aW9uIHByb2plY3QoKSB7XG5cdGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRpdlwiKTtcblx0Y29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cdHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG5cblx0Y29uc3QgdG9kbyA9IGNyZWF0ZVByb2plY3RJdGVtKFxuXHRcdFRvZG8sXG5cdFx0XCJUb2RvIExpc3RcIixcblx0XHRcIlRvZG8gTGlzdCBpcyBhIHBvd2VyZnVsIHRhc2sgbWFuYWdlbWVudCBhcHBsaWNhdGlvbiB0aGF0IGhlbHBzIHlvdSBzdGF5IG9yZ2FuaXplZCBhbmQgcHJvZHVjdGl2ZS4gTWFuYWdlIHRhc2tzLCBwcm9qZWN0cywgYW5kIG5vdGVzIGVmZm9ydGxlc3NseS4gRmVhdHVyZXMgaW5jbHVkZSBwcmlvcml0eSBsZXZlbHMsIGR1ZSBkYXRlcywgc2VhcmNoIGZ1bmN0aW9uYWxpdHksIGFuZCBkYXJrL2xpZ2h0IHRoZW1lLiBHZXQgc3RhcnRlZCBhbmQgYm9vc3QgeW91ciBwcm9kdWN0aXZpdHkgdG9kYXkhXCIsXG5cdFx0XCJodHRwczovL3NoYWhpci00Ny5naXRodWIuaW8vVG9kby1MaXN0L1wiLFxuXHRcdFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00Ny9Ub2RvLUxpc3RcIixcblx0KTtcblxuXHRjb25zdCBiYXR0bGVzaGlwID0gY3JlYXRlUHJvamVjdEl0ZW0oXG5cdFx0QmF0dGxlc2hpcCxcblx0XHRcIkJhdHRsZXNoaXBcIixcblx0XHRcIkEgd2ViLWJhc2VkIEJhdHRsZXNoaXAgZ2FtZSB3aXRoIGEgc3RyYXRlZ2ljIEFJLiBQbGF5ZXJzIGVuZ2FnZSBpbiBjbGFzc2ljIG5hdmFsIHdhcmZhcmUgYWdhaW5zdCBhIGNvbXB1dGVyLiBDb2RlIGlzIG9wZW4gZm9yIGNvbnRyaWJ1dGlvbnMgYW5kIHRlc3RzIGVuc3VyZSByb2J1c3QgZ2FtZXBsYXkuUGxheSBub3chXCIsXG5cdFx0XCJodHRwczovL3NoYWhpci00Ny5naXRodWIuaW8vQmF0dGxlc2hpcC9cIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvQmF0dGxlc2hpcFwiLFxuXHQpO1xuXG5cdGNvbnN0IHdlYXRoZXIgPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRXZWF0aGVyLFxuXHRcdFwiV2VhdGhlciBBcHBcIixcblx0XHRcIldlYXRoZXIgV2hpeiBpcyBhIHdlYiBhcHAgcHJvdmlkaW5nIGN1cnJlbnQgd2VhdGhlciwgaG91cmx5ICYgMi1kYXkgZm9yZWNhc3RzIGZvciBkaWZmZXJlbnQgbG9jYXRpb25zLiBTd2l0Y2ggYmV0d2VlbiBpbXBlcmlhbCAmIG1ldHJpYyB1bml0cy4gQnVpbHQgd2l0aCBIVE1MLCBDU1MsIEpTLCBXZWJwYWNrLCBCYWJlbCwgRVNMaW50ICYgUHJldHRpZXIuIEFQSXM6IE9wZW5XZWF0aGVyICYgTWFwYm94LiBTdGF5IHByZXBhcmVkIHdpdGggYWNjdXJhdGUgd2VhdGhlciBkYXRhIVwiLFxuXHRcdFwiaHR0cHM6Ly9zaGFoaXItNDcuZ2l0aHViLmlvL1dlYXRoZXItV2hpei9cIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvV2VhdGhlci1XaGl6XCIsXG5cdCk7XG5cblx0Y29uc3QgdGljdGFjID0gY3JlYXRlUHJvamVjdEl0ZW0oXG5cdFx0VGljdGFjLFxuXHRcdFwiVGljIFRhYyBUb2VcIixcblx0XHRcIkVuam95IHRoZSBjbGFzc2ljIFRpYyBUYWMgVG9lIGdhbWUgd2l0aCBjdXN0b21pemFibGUgbWFya2VycywgY29sb3JzLCBhbmQgcGxheWVyIG5hbWVzLiBQbGF5IGFnYWluc3QgYSBmcmllbmQgb3IgY2hhbGxlbmdpbmcgQUkuIFJlc3BvbnNpdmUgZGVzaWduLCB2aXN1YWxseSBhcHBlYWxpbmcgaW50ZXJmYWNlLiBTb3VyY2UgY29kZSBmb3IgSFRNTCwgQ1NTLCBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uLiBFeHBlcmllbmNlIGhvdXJzIG9mIGludGVyYWN0aXZlIGFuZCBhZGRpY3RpdmUgZnVuIVwiLFxuXHRcdFwiaHR0cHM6Ly9zaGFoaXItNDcuZ2l0aHViLmlvL1RpYy1UYWMtVG9lL1wiLFxuXHRcdFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00Ny9UaWMtVGFjLXRvZVwiLFxuXHQpO1xuXG5cdGNvbnN0IGNhbGN1bGF0b3IgPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRDYWxjdWxhdG9yLFxuXHRcdFwiQ2FsY3VsYXRvclwiLFxuXHRcdFwiVGhpcyBpcyBhIHNpbXBsZSBjYWxjdWxhdG9yIGFwcGxpY2F0aW9uIHdpdGgga2V5Ym9hcmQgc3VwcG9ydC4gSXQgYWxsb3dzIHlvdSB0byBwZXJmb3JtIGJhc2ljIGFyaXRobWV0aWMgb3BlcmF0aW9ucyBzdWNoIGFzIGFkZGl0aW9uLCBzdWJ0cmFjdGlvbiwgbXVsdGlwbGljYXRpb24sIGFuZCBkaXZpc2lvbi4gSXQgYWxzbyBpbmNsdWRlcyBhZGRpdGlvbmFsIGZlYXR1cmVzIGxpa2UgY2FsY3VsYXRpbmcgdGhlIGZhY3RvcmlhbCBhbmQgZXhwb25lbnRpYXRpb24uXCIsXG5cdFx0XCJodHRwczovL3NoYWhpci00Ny5naXRodWIuaW8vQ2FsY3VsYXRvci9cIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvQ2FsY3VsYXRvclwiLFxuXHQpO1xuXG5cdGNvbnN0IHJlc3RhdXJhbnQgPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRSZXN0YXVyYW50LFxuXHRcdFwiUmVzdGF1cmFudCBQYWdlXCIsXG5cdFx0XCJBIHdlYi1iYXNlZCBwbGF0Zm9ybSB0aGF0IHByb3ZpZGVzIGluZm9ybWF0aW9uIGFuZCBmZWF0dXJlcyByZWxhdGVkIHRvIGEgZmljdGlvbmFsIHJlc3RhdXJhbnQgY2FsbGVkIHRoZSBHYWxhY3RpYyBDYW50aW5hLiBUaGUgYXBwbGljYXRpb24gYWxsb3dzIHVzZXJzIHRvIGV4cGxvcmUgdmFyaW91cyBzZWN0aW9ucyBzdWNoIGFzIHRoZSBob21lIHBhZ2UsIG1lbnUgcGFnZSwgY29udGFjdCBwYWdlLCBhYm91dCB1cyBwYWdlLCByZXZpZXcgcGFnZSwgYW5kIEZBUSBwYWdlLlwiLFxuXHRcdFwiaHR0cHM6Ly9zaGFoaXItNDcuZ2l0aHViLmlvL1Jlc3RhdXJhbnQtUGFnZS9cIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvUmVzdGF1cmFudC1QYWdlXCIsXG5cdCk7XG5cblx0Y29uc3QgZXRjaCA9IGNyZWF0ZVByb2plY3RJdGVtKFxuXHRcdEV0Y2gsXG5cdFx0XCJFdGNoIGEgU2tldGNoXCIsXG5cdFx0XCJFeHBlcmllbmNlIHRoZSBjbGFzc2ljIEV0Y2gtYS1Ta2V0Y2ggZnVuIG9ubGluZSEgRHJhdyBhbmQgY3JlYXRlIG1hc3RlcnBpZWNlcyB3aXRoIHRoaXMgc2ltcGxlIHdlYiBhcHBsaWNhdGlvbi4gQnVpbHQgdXNpbmcgSFRNTCwgQ1NTLCBhbmQgSmF2YVNjcmlwdC5cIixcblx0XHRcImh0dHBzOi8vc2hhaGlyLTQ3LmdpdGh1Yi5pby9FdGNoLWEtU2tldGNoL1wiLFxuXHRcdFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00Ny9FdGNoLWEtU2tldGNoL1wiLFxuXHQpO1xuXG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcCk7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlcik7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGljdGFjKTtcblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjYWxjdWxhdG9yKTtcblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50KTtcblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChldGNoKTtcblxuXHRwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcblx0bWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuXHRtYWluLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0O1xuIiwiaW1wb3J0IEljb24gZnJvbSBcIi4vaW1nL2ljb24uc3ZnXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9pbWcvaG9tZS5zdmdcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi9pbWcvYWJvdXQuc3ZnXCI7XG5pbXBvcnQgQ29kZSBmcm9tIFwiLi9pbWcvY29kZS5zdmdcIjtcbmltcG9ydCBEb2MgZnJvbSBcIi4vaW1nL2RvYy5zdmdcIjtcbmltcG9ydCBHaXRIdWIgZnJvbSBcIi4vaW1nL2dpdFNvY2lhbC5zdmdcIjtcbmltcG9ydCBoYW1idXJnZXJJbWcgZnJvbSBcIi4vaW1nL2hhbWJ1cmdlci5zdmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuXHRjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXHRiYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1iYXJcIik7XG5cblx0Y29uc3QgbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bG9nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2ctY29udGFpbmVyXCIpO1xuXHRjb25zdCBsb2dvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bG9nb0JveC5jbGFzc0xpc3QuYWRkKFwibG9nby1ib3hcIik7XG5cdGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRsb2dvLnNyYyA9IEljb247XG5cdGxvZ28uYWx0ID0gXCJsb2dvXCI7XG5cdGNvbnN0IGxvZ29MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGxvZ29MaW5rLmFwcGVuZENoaWxkKGxvZ28pO1xuXHRsb2dvQm94LmFwcGVuZENoaWxkKGxvZ29MaW5rKTtcblx0Y29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdGxvZ29UZXh0LnRleHRDb250ZW50ID0gXCJTaGFoaXIgQWhtZWRcIjtcblx0Y29uc3QgbG9nb0xpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGxvZ29MaW5rMi5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XG5cdGxvZ29Cb3guYXBwZW5kQ2hpbGQobG9nb0xpbmsyKTtcblxuXHRsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0JveCk7XG5cblx0Y29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRuYXZMaW5rcy5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtzXCIpO1xuXG5cdGNvbnN0IGhvbWVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRob21lQm94LmNsYXNzTGlzdC5hZGQoXCJuYXYtYm94XCIpO1xuXHRjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRob21lTGluay5ocmVmID0gXCIjXCI7XG5cdGhvbWVMaW5rLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cdGhvbWVCb3guYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuXG5cdGNvbnN0IGhvbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0aG9tZUljb24uc3JjID0gSG9tZTtcblx0aG9tZUljb24uYWx0ID0gXCJob21lXCI7XG5cdGhvbWVCb3guYXBwZW5kQ2hpbGQoaG9tZUljb24pO1xuXG5cdG5hdkxpbmtzLmFwcGVuZENoaWxkKGhvbWVCb3gpO1xuXG5cdGNvbnN0IG1lbnVMaW5rYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bWVudUxpbmtib3guY2xhc3NMaXN0LmFkZChcIm5hdi1ib3hcIik7XG5cdGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdG1lbnVMaW5rLmhyZWYgPSBcIiNcIjtcblx0bWVudUxpbmsudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG5cdG1lbnVMaW5rYm94LmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcblxuXHRjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdG1lbnVJY29uLnNyYyA9IEFib3V0O1xuXHRtZW51SWNvbi5hbHQgPSBcImFib3V0XCI7XG5cdG1lbnVMaW5rYm94LmFwcGVuZENoaWxkKG1lbnVJY29uKTtcblx0bmF2TGlua3MuYXBwZW5kQ2hpbGQobWVudUxpbmtib3gpO1xuXG5cdGNvbnN0IGNvbnRhY3RMaW5rYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29udGFjdExpbmtib3guY2xhc3NMaXN0LmFkZChcIm5hdi1ib3hcIik7XG5cdGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGNvbnRhY3RMaW5rLmhyZWYgPSBcIiNcIjtcblx0Y29udGFjdExpbmsudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cdGNvbnRhY3RMaW5rYm94LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcblxuXHRjb25zdCBjb250YWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGNvbnRhY3RJY29uLnNyYyA9IENvZGU7XG5cdGNvbnRhY3RJY29uLmFsdCA9IFwicHJvamVjdHNcIjtcblx0Y29udGFjdExpbmtib3guYXBwZW5kQ2hpbGQoY29udGFjdEljb24pO1xuXHRuYXZMaW5rcy5hcHBlbmRDaGlsZChjb250YWN0TGlua2JveCk7XG5cblx0Y29uc3QgQWJvdXRMaW5rYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0QWJvdXRMaW5rYm94LmNsYXNzTGlzdC5hZGQoXCJuYXYtYm94XCIpO1xuXG5cdGNvbnN0IEFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRBYm91dExpbmsuaHJlZiA9IFwiI1wiO1xuXHRBYm91dExpbmsudGV4dENvbnRlbnQgPSBcIlJlc3VtZVwiO1xuXHRBYm91dExpbmtib3guYXBwZW5kQ2hpbGQoQWJvdXRMaW5rKTtcblxuXHRjb25zdCBBYm91dEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRBYm91dEljb24uc3JjID0gRG9jO1xuXHRBYm91dEljb24uYWx0ID0gXCJyZXN1bWVcIjtcblx0QWJvdXRMaW5rYm94LmFwcGVuZENoaWxkKEFib3V0SWNvbik7XG5cdG5hdkxpbmtzLmFwcGVuZENoaWxkKEFib3V0TGlua2JveCk7XG5cblx0Ly8gaGFtYnVyZ2VyIG1lbnVcblx0Y29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0aGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoXCJoYW1idXJnZXJcIik7XG5cdGNvbnN0IGhhbWJ1cmdlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRoYW1idXJnZXJJY29uLnNyYyA9IGhhbWJ1cmdlckltZztcblx0aGFtYnVyZ2VySWNvbi5hbHQgPSBcImhhbWJ1cmdlclwiO1xuXHRoYW1idXJnZXIuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VySWNvbik7XG5cblx0Y29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZChcImhhbWJ1cmdlci1tZW51XCIpO1xuXHRjb25zdCBoYW1idXJnZXJNZW51SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRoYW1idXJnZXJNZW51SG9tZS5ocmVmID0gXCIjXCI7XG5cdGhhbWJ1cmdlck1lbnVIb21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cdGhhbWJ1cmdlck1lbnUuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudUhvbWUpO1xuXHRjb25zdCBoYW1idXJnZXJNZW51QWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0aGFtYnVyZ2VyTWVudUFib3V0LmhyZWYgPSBcIiNcIjtcblx0aGFtYnVyZ2VyTWVudUFib3V0LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuXHRoYW1idXJnZXJNZW51LmFwcGVuZENoaWxkKGhhbWJ1cmdlck1lbnVBYm91dCk7XG5cdGNvbnN0IGhhbWJ1cmdlck1lbnVQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRoYW1idXJnZXJNZW51UHJvamVjdHMuaHJlZiA9IFwiI1wiO1xuXHRoYW1idXJnZXJNZW51UHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cdGhhbWJ1cmdlck1lbnUuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudVByb2plY3RzKTtcblx0Y29uc3QgaGFtYnVyZ2VyTWVudVJlc3VtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRoYW1idXJnZXJNZW51UmVzdW1lLmhyZWYgPSBcIiNcIjtcblx0aGFtYnVyZ2VyTWVudVJlc3VtZS50ZXh0Q29udGVudCA9IFwiUmVzdW1lXCI7XG5cdGhhbWJ1cmdlck1lbnUuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudVJlc3VtZSk7XG5cblx0aGFtYnVyZ2VyLmFwcGVuZENoaWxkKGhhbWJ1cmdlck1lbnUpO1xuXHRuYXZMaW5rcy5hcHBlbmRDaGlsZChoYW1idXJnZXIpO1xuXG5cdGJhci5hcHBlbmRDaGlsZChsb2dDb250YWluZXIpO1xuXHRiYXIuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xuXG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIik7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuXHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXHRmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuXHRjb25zdCBnaXRIdWJQcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGdpdEh1YlByb2ZpbGUuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00N1wiO1xuXG5cdGNvbnN0IGdpdEh1YlByb2ZpbGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRnaXRIdWJQcm9maWxlSW1nLnNyYyA9IEdpdEh1Yjtcblx0Z2l0SHViUHJvZmlsZUltZy5hbHQgPSBcImdpdEh1YiBMb2dvXCI7XG5cblx0Y29uc3QgZ2l0SHViUHJvZmlsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgYXRTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0YXRTeW1ib2wuY2xhc3NMaXN0LmFkZChcImF0LXN5bWJvbFwiKTtcblx0YXRTeW1ib2wudGV4dENvbnRlbnQgPSBcIkBcIjtcblx0Y29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0dXNlcm5hbWUudGV4dENvbnRlbnQgPSBcIlNoYWhpci00N1wiO1xuXHRnaXRIdWJQcm9maWxlVGV4dC5hcHBlbmRDaGlsZChhdFN5bWJvbCk7XG5cdGdpdEh1YlByb2ZpbGVUZXh0LmFwcGVuZENoaWxkKHVzZXJuYW1lKTtcblxuXHRnaXRIdWJQcm9maWxlLmFwcGVuZENoaWxkKGdpdEh1YlByb2ZpbGVJbWcpO1xuXHRnaXRIdWJQcm9maWxlLmFwcGVuZENoaWxkKGdpdEh1YlByb2ZpbGVUZXh0KTtcblxuXHRjb25zdCBzZXBlcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0c2VwZXJhdG9yLnRleHRDb250ZW50ID0gXCJ8XCI7XG5cblx0Y29uc3QgZ2l0SHViUmVwbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRIdWJSZXBvLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvUG9ydGZvbGlvLVdlYnNpdGVcIjtcblx0Z2l0SHViUmVwby50ZXh0Q29udGVudCA9IFwiU291cmNlIENvZGVcIjtcblxuXHRmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0SHViUHJvZmlsZSk7XG5cdGZvb3Rlci5hcHBlbmRDaGlsZChzZXBlcmF0b3IpO1xuXHRmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0SHViUmVwbyk7XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpLmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIHNldHVwUGFnZSgpIHtcblx0Y3JlYXRlTmF2QmFyKCk7IC8vIGNyZWF0ZXMgdGhlIG5hdiBiYXJcblx0Ly8gY3JlYXRlcyB0aGUgbWFpbiBjb250YWluZXJcblx0Y29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFpbmVyXCIpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cdGNyZWF0ZUZvb3RlcigpOyAvLyBjcmVhdGVzIHRoZSBmb290ZXJcblx0Ly8gYWRkIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIG5hdiBiYXIgd2hlbiBzY3JvbGxlZFxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0Y29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYmFyXCIpO1xuXHRcdGlmICh3aW5kb3cuc2Nyb2xsWSA+IDApIHtcblx0XHRcdG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2LWJhci1zY3JvbGxlZFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmF2QmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtYmFyLXNjcm9sbGVkXCIpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gYWN0aXZhdGUgaGFtYnVyZ2VyIG1lbnUgb24gc21hbGxlciBzY3JlZW5zXG5cdGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xuXHRjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXItbWVudVwiKTtcblx0aGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0aWYgKGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG5cdFx0XHRoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0XHRoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcblx0XHR9IGVsc2UgaWYgKGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW5hY3RpdmVcIikpIHtcblx0XHRcdGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuXHRcdFx0aGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdFx0fVxuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0dXBQYWdlO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuaHRtbCB7XG5cdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG5cdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xufVxuXG4vKiBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuYm9keSB7XG5cdG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIFxcYG1haW5cXGAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gKi9cblxubWFpbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIFxcYGgxXFxgIGVsZW1lbnRzIHdpdGhpbiBcXGBzZWN0aW9uXFxgIGFuZFxuICogXFxgYXJ0aWNsZVxcYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cblxuaDEge1xuXHRmb250LXNpemU6IDJlbTtcblx0bWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cblxuaHIge1xuXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xuXHRoZWlnaHQ6IDA7IC8qIDEgKi9cblx0b3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5wcmUge1xuXHRmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cblx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmEge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5hYmJyW3RpdGxlXSB7XG5cdGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5iLFxuc3Ryb25nIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5jb2RlLFxua2JkLFxuc2FtcCB7XG5cdGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnNtYWxsIHtcblx0Zm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuICogUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAqIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdWIsXG5zdXAge1xuXHRmb250LXNpemU6IDc1JTtcblx0bGluZS1oZWlnaHQ6IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuXHRib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG5cdHRvcDogLTAuNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuaW1nIHtcblx0Ym9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuXHRmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cblx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cblx0bWFyZ2luOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5cbmJ1dHRvbixcbmlucHV0IHtcblx0LyogMSAqL1xuXHRvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuXHQvKiAxICovXG5cdHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuW3R5cGU9XCJidXR0b25cIl0sXG5bdHlwZT1cInJlc2V0XCJdLFxuW3R5cGU9XCJzdWJtaXRcIl0ge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcblx0Ym9yZGVyLXN0eWxlOiBub25lO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuXG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XG5cdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuZmllbGRzZXQge1xuXHRwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gSUUuXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gKiAgICBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxubGVnZW5kIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuXHRkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuXHRtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cblx0cGFkZGluZzogMDsgLyogMyAqL1xuXHR3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5wcm9ncmVzcyB7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cbiAqL1xuXG50ZXh0YXJlYSB7XG5cdG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICovXG5cblt0eXBlPVwiY2hlY2tib3hcIl0sXG5bdHlwZT1cInJhZGlvXCJdIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuXHRwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG5cdG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuICovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuXHRmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qIEludGVyYWN0aXZlXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cbiAqL1xuXG5kZXRhaWxzIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3VtbWFyeSB7XG5cdGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLyogTWlzY1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXG4gKi9cblxudGVtcGxhdGUge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxuICovXG5cbltoaWRkZW5dIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Q0FDQyxpQkFBaUIsRUFBRSxNQUFNO0NBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDdkM7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtDQUNDLFNBQVM7QUFDVjs7QUFFQTs7RUFFRTs7QUFFRjtDQUNDLGNBQWM7QUFDZjs7QUFFQTs7O0VBR0U7O0FBRUY7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0NBQ0MsdUJBQXVCLEVBQUUsTUFBTTtDQUMvQixTQUFTLEVBQUUsTUFBTTtDQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtDQUNDLGlDQUFpQyxFQUFFLE1BQU07Q0FDekMsY0FBYyxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtDQUNDLDZCQUE2QjtBQUM5Qjs7QUFFQTs7O0VBR0U7O0FBRUY7Q0FDQyxtQkFBbUIsRUFBRSxNQUFNO0NBQzNCLDBCQUEwQixFQUFFLE1BQU07Q0FDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMxQzs7QUFFQTs7RUFFRTs7QUFFRjs7Q0FFQyxtQkFBbUI7QUFDcEI7O0FBRUE7OztFQUdFOztBQUVGOzs7Q0FHQyxpQ0FBaUMsRUFBRSxNQUFNO0NBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOztFQUVFOztBQUVGO0NBQ0MsY0FBYztBQUNmOztBQUVBOzs7RUFHRTs7QUFFRjs7Q0FFQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGtCQUFrQjtDQUNsQix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0NBS0Msb0JBQW9CLEVBQUUsTUFBTTtDQUM1QixlQUFlLEVBQUUsTUFBTTtDQUN2QixpQkFBaUIsRUFBRSxNQUFNO0NBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ2xCOztBQUVBOzs7RUFHRTs7QUFFRjs7Q0FFQyxNQUFNO0NBQ04saUJBQWlCO0FBQ2xCOztBQUVBOzs7RUFHRTs7QUFFRjs7Q0FFQyxNQUFNO0NBQ04sb0JBQW9CO0FBQ3JCOztBQUVBOztFQUVFOztBQUVGOzs7O0NBSUMsMEJBQTBCO0FBQzNCOztBQUVBOztFQUVFOztBQUVGOzs7O0NBSUMsa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDs7QUFFQTs7RUFFRTs7QUFFRjs7OztDQUlDLDhCQUE4QjtBQUMvQjs7QUFFQTs7RUFFRTs7QUFFRjtDQUNDLDhCQUE4QjtBQUMvQjs7QUFFQTs7Ozs7RUFLRTs7QUFFRjtDQUNDLHNCQUFzQixFQUFFLE1BQU07Q0FDOUIsY0FBYyxFQUFFLE1BQU07Q0FDdEIsY0FBYyxFQUFFLE1BQU07Q0FDdEIsZUFBZSxFQUFFLE1BQU07Q0FDdkIsVUFBVSxFQUFFLE1BQU07Q0FDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTs7RUFFRTs7QUFFRjtDQUNDLGNBQWM7QUFDZjs7QUFFQTs7O0VBR0U7O0FBRUY7O0NBRUMsc0JBQXNCLEVBQUUsTUFBTTtDQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7RUFFRTs7QUFFRjs7Q0FFQyxZQUFZO0FBQ2I7O0FBRUE7OztFQUdFOztBQUVGO0NBQ0MsNkJBQTZCLEVBQUUsTUFBTTtDQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBOzs7RUFHRTs7QUFFRjtDQUNDLDBCQUEwQixFQUFFLE1BQU07Q0FDbEMsYUFBYSxFQUFFLE1BQU07QUFDdEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtDQUNDLGNBQWM7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0NBQ0MsYUFBYTtBQUNkOztBQUVBOztFQUVFOztBQUVGO0NBQ0MsYUFBYTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcblxcdGZvbnQtc2l6ZTogMmVtO1xcblxcdG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcblxcdGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuXFx0aGVpZ2h0OiAwOyAvKiAxICovXFxuXFx0b3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcblxcdGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG5cXHRmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuXFx0Zm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG5cXHRmb250LXNpemU6IDc1JTtcXG5cXHRsaW5lLWhlaWdodDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcblxcdGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG5cXHR0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG5cXHQvKiAxICovXFxuXFx0b3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG5cXHQvKiAxICovXFxuXFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuXFx0cGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG5cXHRkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcblxcdG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcblxcdHBhZGRpbmc6IDA7IC8qIDMgKi9cXG5cXHR3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcblxcdG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG5cXHRwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuXFx0Zm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG5cXHRkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcblx0Y29sb3I6ICNlMGUwZTA7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbmRpdiNjb250ZW50IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5hdi1iYXIge1xuXHRwb3NpdGlvbjogc3RpY2t5O1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXHR6LWluZGV4OiA5OTk7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBObyBiYWNrZ3JvdW5kIGluaXRpYWxseSAqL1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCk7IC8qIE5vIGJsdXIgaW5pdGlhbGx5ICovXG5cdGJveC1zaGFkb3c6XG5cdFx0MCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuXHRcdDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG5cbi5uYXYtYmFyLXNjcm9sbGVkIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzBiNGQ0NDtcbn1cblxuLmxvZ28tYm94IHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAxcmVtO1xufVxuXG4ubG9nby1ib3ggaW1nIHtcblx0d2lkdGg6IDNyZW07XG5cdGhlaWdodDogYXV0bztcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nLWNvbnRhaW5lcjpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ28tYm94IGEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5sb2ctY29udGFpbmVyOmhvdmVyOmFmdGVyIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5sb2ctY29udGFpbmVyOmhvdmVyIC5sb2dvLWJveCBhIGgxIHtcblx0Y29sb3I6ICNmZmZmZmZmZjtcbn1cblxuLmxvZy1jb250YWluZXI6aG92ZXIgLmxvZ28tYm94IGltZyB7XG5cdGZpbHRlcjogYnJpZ2h0bmVzcygzKTtcbn1cblxuLmxvZy1jb250YWluZXI6YWZ0ZXIge1xuXHRiYWNrZ3JvdW5kOiAjNGZkMWM1O1xuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRib3R0b206IDFweDtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGhlaWdodDogNXB4O1xuXHRsZWZ0OiAwO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xuXHR3aWR0aDogMDtcblx0ei1pbmRleDogLTE7XG59XG5cbi5sb2dvLWJveCBhIGgxIHtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdG1hcmdpbjogMDtcbn1cblxuLm5hdi1saW5rcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMnJlbTtcbn1cblxuLm5hdi1saW5rcyBhIHtcblx0Y29sb3I6ICNlMGUwZTA7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRmb250LXdlaWdodDogMTAwO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXYtbGlua3MgYTpob3ZlciB7XG5cdGNvbG9yOiAjZmZmZmZmZmY7XG59XG5cbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXIge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXIgYSB7XG5cdGNvbG9yOiAjZmZmZmZmZmY7XG59XG5cbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXIgaW1nIHtcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDMpO1xufVxuXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyOmFmdGVyIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtbGlua3MgLm5hdi1ib3gge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXYtbGlua3MgLm5hdi1ib3g6YWZ0ZXIge1xuXHRiYWNrZ3JvdW5kOiAjNGZkMWM1O1xuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRib3R0b206IC01cHg7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRoZWlnaHQ6IDVweDtcblx0bGVmdDogMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcblx0d2lkdGg6IDA7XG5cdHotaW5kZXg6IC0xO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDdyZW07XG59XG5cbi5maXJzdC1ibG9jay1ob21lIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcblx0cGFkZGluZzogMCAzcmVtO1xuXHRnYXA6IDFyZW07XG59XG5cbi50ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zdWItdGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDFyZW07XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuXHR3aWR0aDogNzUlO1xufVxuXG4uY29tcHV0ZXIge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4uZmlyc3QtdGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRnYXA6IDFyZW07XG59XG5cbi50eXBlZC10ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuI3R5cGVkLXRleHQge1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiAjNGZkMWM1O1xufVxuXG4udHlwZWQtY3Vyc29yIHtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjb2xvcjogIzRmZDFjNTtcblx0YW5pbWF0aW9uOiBibGluayAwLjdzIGluZmluaXRlO1xufVxuXG4ubmF2LWJveCB7XG5cdHBhZGRpbmc6IDAuMjVyZW0gMHJlbTtcbn1cblxuLndhdmUge1xuXHR3aWR0aDogMnJlbTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRhbmltYXRpb24tbmFtZTogd2F2ZS1hbmltYXRpb247XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMi41cztcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG5cdHRyYW5zZm9ybS1vcmlnaW46IDcwJSA3MCU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG59XG5cbkBrZXlmcmFtZXMgd2F2ZS1hbmltYXRpb24ge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0MTAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuXHR9XG5cdDIwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xuXHR9XG5cdDMwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcblx0fVxuXHQ0MCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDlkZWcpO1xuXHR9XG5cdDUwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cbn1cblxuLm5hbWUge1xuXHRmb250LXNpemU6IDNyZW07XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGNvbG9yOiAjNGZkMWM1O1xufVxuXG4ubmF2LWJveCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblx0Z2FwOiAwLjVyZW07XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtYm94IGltZyB7XG5cdHdpZHRoOiAycmVtO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5zZWNvbmQtdGV4dC1jb250YWluZXIgaDUge1xuXHRtYXJnaW46IDA7XG59XG5cbi5maXJzdC10ZXh0LWNvbnRhaW5lciBoMyB7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0bWFyZ2luOiAwO1xufVxuXG4uc2Vjb25kLXRleHQtY29udGFpbmVyIGg1IHtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4uc2Vjb25kLWJsb2NrLWhvbWUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwYWRkaW5nOiAwIDNyZW07XG5cdG1hcmdpbjogMCA1cmVtO1xuXHRnYXA6IDVyZW07XG59XG5cbi5zZWNvbmQtYmxvY2stdGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGFja2VyIHtcblx0d2lkdGg6IDM1JTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4udGV4dC1kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDNyZW07XG59XG5cbi50ZXh0LWRpdiBoMyB7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxLjlyZW07XG5cdG1hcmdpbjogMDtcbn1cblxuLmhpZ2hsaWdodCxcbi50ZXh0LWRpdiBoMyBzcGFuIHtcblx0Y29sb3I6ICM0ZmQxYzU7XG59XG5cbi5zdWItZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAycmVtO1xufVxuXG4uc3ViLXRleHQge1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRtYXJnaW46IDA7XG59XG5cbi5zb2NpYWwtaWNvbnMgaW1nIHtcblx0d2lkdGg6IDIuNXJlbTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNvY2lhbC1pY29ucyBpbWc6aG92ZXIge1xuXHRmaWx0ZXI6IGludmVydCgxKTtcblx0Ym94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSg3OSwgMjA5LCAxOTcsIDAuNSk7XG59XG5cbi5zb2NpYWwtdGV4dC1kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNXJlbTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNvY2lhbC10ZXh0LWRpdiBoMyB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNvY2lhbC10ZXh0LWRpdiAqIHtcblx0bWFyZ2luOiAwO1xufVxuXG4uc29jaWFsLWljb25zIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGdhcDogMnJlbTtcbn1cblxuLnNvY2lhbC1zdWItdGV4dCB7XG5cdGZvbnQtc2l6ZTogMC44cmVtO1xuXHRmb250LXdlaWdodDogNTUwO1xufVxuXG4uc29jaWFsLWJsb2NrIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAycmVtO1xufVxuXG4uc29jaWFsLXN1Yi10ZXh0IHNwYW4ge1xuXHRjb2xvcjogIzRmZDFjNTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZvb3RlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmZvb3RlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDFyZW07XG5cdG1hcmdpbi10b3A6IDJyZW07XG5cdHBhZGRpbmc6IDAuMjVyZW0gM3JlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTtcbn1cblxuZm9vdGVyIGEge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDAuNXJlbTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmb250LXNpemU6IDEuM3JlbTtcblx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0Y29sb3I6ICNmYWZhZmE7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbmZvb3RlciBwIHtcblx0bWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuZm9vdGVyIGE6aG92ZXIsXG5mb290ZXIgYTphY3RpdmUge1xuXHRjb2xvcjogI2IwMmUzOTtcbn1cblxuZm9vdGVyIGEgaW1nIHtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG5mb290ZXIgYTpob3ZlciBpbWcsXG5mb290ZXIgYTphY3RpdmUgaW1nIHtcblx0ZmlsdGVyOiBpbnZlcnQoMSk7XG5cdGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoNzksIDIwOSwgMTk3LCAwLjUpO1xufVxuXG4uYXQtc3ltYm9sIHtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuZm9vdGVyIGltZyB7XG5cdHdpZHRoOiAycmVtO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi8qIFN0eWxlcyB0aGUgc2Nyb2xsYmFyIHRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDsgLyogQSBkYXJrZXIgc2hhZGUgZm9yIGNvbnRyYXN0ICovXG59XG5cbi8qIFN0eWxlcyB0aGUgc2Nyb2xsYmFyIGhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7IC8qIFRoZSBjb2xvciB5b3UgcHJvdmlkZWQgZm9yIHRoZSBoYW5kbGUgKi9cblx0Ym9yZGVyLXJhZGl1czogMTBweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciB0aGUgaGFuZGxlICovXG59XG5cbi8qIFN0eWxlcyB0aGUgc2Nyb2xsYmFyIGl0c2VsZiAoaW5jbHVkaW5nIHRoZSB0cmFjaykgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuXHR3aWR0aDogMTJweDsgLyogQWRqdXN0IHRvIHRoZSBzaXplIHlvdSBwcmVmZXIgKi9cbn1cblxuLyogT3B0aW9uYWw6IHN0eWxlcyB0aGUgc2Nyb2xsYmFyIGhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzYTlkOWI7IC8qIEEgc2xpZ2h0bHkgZGFya2VyIHNoYWRlIG9mIHRoZSBoYW5kbGUgY29sb3IgZm9yIGhvdmVyICovXG59XG5cbi8qIEZpcmVmb3ggKi9cbmh0bWwge1xuXHRzY3JvbGxiYXItY29sb3I6ICM0ZmQxYzUgIzJjM2U1MDtcblx0c2Nyb2xsYmFyLXdpZHRoOiB0aGluOyAvKiBZb3UgY2FuIHVzZSAnYXV0bycgb3IgJ3RoaW4nICovXG59XG5cbi5hYm91dC1wYWdlIHtcblx0cGFkZGluZzogMHJlbSAzcmVtO1xuXHRwYWRkaW5nLWJvdHRvbTogMnJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiA1cmVtO1xufVxuXG4uYWJvdXQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAycmVtO1xufVxuXG4uYWJvdXQtdGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFib3V0LW1lIHNwYW4ge1xuXHRjb2xvcjogIzRmZDFjNTtcbn1cblxuLmFib3V0LW1lLWRpdiB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNTAwcHgsIDFmcikpO1xuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMnJlbTtcbn1cblxuLmFib3V0LW1lLXBpY3R1cmUge1xuXHRvcmRlcjogMTtcblx0d2lkdGg6IDMwJTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4uYWJvdXQtbWUtdGV4dC1kaXYge1xuXHRvcmRlcjogMjtcbn1cblxuLmFib3V0LW1lLXRleHQtZGl2IHtcblx0Zm9udC1zaXplOiAxLjFyZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMXJlbTtcbn1cblxuLmFib3V0LW1lLXRleHQ6bnRoLW9mLXR5cGUoMSkge1xuXHRtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFbmQgb2YgRm9vdGVyIHN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5jYXJvdXNlbC1pdGVtIGltZyB7XG5cdHdpZHRoOiAzcmVtO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5zZWNvbmQtZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAzcmVtO1xuXHRwYWRkaW5nOiAwIDNyZW07XG59XG5cbi5zZWNvbmQtZGl2LXRleHQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiAxcmVtO1xufVxuXG4uc2Vjb25kLWRpdi10ZXh0IHAge1xuXHRmb250LXNpemU6IDJyZW07XG5cdG1hcmdpbjogMDtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmNhcm91c2VsLWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJvcmRlcjogM3B4IHNvbGlkICNkZGRkZGQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5iYWNrLWJ0bixcbi5mb3J3YXJkLWJ0biB7XG5cdGZvbnQtc2l6ZTogMi41cmVtO1xuXHRjb2xvcjogIzE1MjAyYjtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcblx0Ym9yZGVyOiBub25lO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYWNrLWJ0bjpob3Zlcixcbi5mb3J3YXJkLWJ0bjpob3ZlciB7XG5cdGNvbG9yOiAjNGZkMWM1O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2Fyb3VzZWwge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRvdmVyZmxvdy14OiBhdXRvO1xuXHRnYXA6IDJyZW07XG5cdHBhZGRpbmc6IDFyZW07XG5cdHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG5cdG1hcmdpbi10b3A6IDAuMnJlbTtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG5cdG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuXHRtaW4td2lkdGg6IDdyZW07XG5cdG1pbi1oZWlnaHQ6IDEwcmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiAxcmVtO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcblx0LW1zLXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMTc7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHAge1xuXHRmb250LXNpemU6IDEuNXJlbTtcblx0bWFyZ2luOiAwO1xufVxuXG4uY2Fyb3VzZWwtaXRlbXMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiAycmVtO1xufVxuXG4vKiBTdHlsZSB0aGUgc2Nyb2xsYmFyICovXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcblx0d2lkdGg6IDVweDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsYmFyICovXG5cdGhlaWdodDogMTBweDsgLyogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIHNjcm9sbGJhciAqL1xufVxuXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0aHVtYiAqL1xuXHRib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgdGhlIHNjcm9sbGJhciB0aHVtYiAqL1xufVxuXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0aHVtYiBvbiBob3ZlciAqL1xufVxuXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgdHJhY2sgKi9cbn1cblxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciBjb3JuZXIgKi9cbn1cblxuLnByb2plY3QtZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAycmVtO1xuXHRwYWRkaW5nOiAwIDNyZW07XG59XG5cbi5wcm9qZWN0LWRpdiBoMSB7XG5cdGNvbG9yOiAjNGZkMWM1O1xufVxuXG4ucHJvamVjdC1pdGVtIGltZyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRnYXA6IDJyZW07XG59XG5cbi5wcm9qZWN0LWl0ZW0ge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMnJlbTtcblx0cGFkZGluZzogMXJlbTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjE3O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuXG4ucHJvamVjdC1saW5rLWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMXJlbTtcbn1cblxuLnByb2plY3QtbGluay1kaXYgYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Y29sb3I6ICM0ZmQxYzU7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjNGZkMWM1O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLnByb2plY3QtbGluay1kaXYgYTpob3ZlciB7XG5cdGNvbG9yOiAjZTBlMGUwO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1O1xufVxuXG4ucHJvamVjdC1pdGVtLWRpdiBwIHtcblx0Zm9udC1zaXplOiAxLjFyZW07XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi8qIC4uLmV4aXN0aW5nIHN0eWxlcyAqL1xuXG4uaGFtYnVyZ2VyLW1lbnUge1xuXHRkaXNwbGF5OiBub25lO1xuXHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG59XG5cbi5oYW1idXJnZXIge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcblx0LmZpcnN0LWJsb2NrLWhvbWUge1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuXHR9XG5cblx0ZGl2LnNlY29uZC1kaXYtdGV4dCBwIHtcblx0XHRmb250LXNpemU6IDEuMnJlbTtcblx0fVxuXG5cdGRpdi5hYm91dC1tZS1kaXYge1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuXHRcdGdhcDogMXJlbTtcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcblx0ZGl2LnNlY29uZC1ibG9jay10ZXh0LWNvbnRhaW5lciB7XG5cdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG5cdH1cblxuXHQuYWJvdXQtbWUtZGl2IHtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcblx0XHRnYXA6IDJyZW07XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM1NXB4KSB7XG5cdC5hYm91dC1tZS1kaXYge1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuXHRcdGdhcDogMXJlbTtcblx0fVxuXHRkaXYuc3ViLXRleHQtY29udGFpbmVyIGRpdi5maXJzdC10ZXh0LWNvbnRhaW5lciBoMyB7XG5cdFx0Zm9udC1zaXplOiAxLjJyZW07XG5cdH1cblxuXHRkaXYuc2Vjb25kLXRleHQtY29udGFpbmVyIGg1IHtcblx0XHRmb250LXNpemU6IDEuMXJlbTtcblx0fVxuXG5cdGRpdi5zZWNvbmQtdGV4dC1jb250YWluZXIgaDUgc3Bhbi5uYW1lIHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0fVxuXG5cdGltZy53YXZlIHtcblx0XHR3aWR0aDogMS41cmVtO1xuXHRcdGhlaWdodDogYXV0bztcblx0fVxuXG5cdGRpdi5sb2dvLWJveCBpbWcge1xuXHRcdHdpZHRoOiAyLjc1cmVtO1xuXHRcdGhlaWdodDogYXV0bztcblx0fVxuXG5cdGRpdi5sb2dvLWJveCBhIGgxIHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0fVxuXG5cdGRpdi50ZXh0LWRpdiBoMyB7XG5cdFx0Zm9udC1zaXplOiAxLjNyZW07XG5cdH1cblxuXHRwLnN1Yi10ZXh0IHtcblx0XHRmb250LXNpemU6IDAuOHJlbTtcblx0fVxuXG5cdC5zb2NpYWwtdGV4dC1kaXYgaDMge1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHR9XG5cblx0Zm9vdGVyIHtcblx0XHRwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcblx0fVxuXG5cdGZvb3Rlci5mb290ZXIgYSB7XG5cdFx0Zm9udC1zaXplOiAxcmVtO1xuXHR9XG5cblx0Lm5hdi1iYXIge1xuXHRcdHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuXHR9XG5cblx0ZGl2LmFib3V0LXRleHQtY29udGFpbmVyIGgxIHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0fVxuXG5cdC5hYm91dC1wYWdlIHtcblx0XHRwYWRkaW5nOiAwcmVtIDEuNXJlbTtcblx0fVxuXG5cdC5hYm91dC1tZS10ZXh0IHtcblx0XHRmb250LXNpemU6IDFyZW07XG5cdH1cblxuXHQucHJvamVjdC1kaXYge1xuXHRcdGdhcDogMHJlbTtcblx0XHRwYWRkaW5nOiAwIDEuNXJlbTtcblx0fVxuXG5cdC5wcm9qZWN0LWRpdiBoMSB7XG5cdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdH1cblxuXHQucHJvamVjdC1pdGVtLWRpdiBwIHtcblx0XHRmb250LXNpemU6IDFyZW07XG5cdH1cblxuXHQucHJvamVjdC1saW5rLWRpdiBhIHtcblx0XHRmb250LXNpemU6IDFyZW07XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4KSB7XG5cdGRpdi5hYm91dC1tZS1kaXYge1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuXHRcdGdhcDogMXJlbTtcblx0fVxuXG5cdC5zdWItdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAwLjlyZW07XG5cdH1cblxuXHQuZm9vdGVyIGEge1xuXHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHR9XG5cblx0ZGl2LmZpcnN0LXRleHQtY29udGFpbmVyIGgzIHtcblx0XHRmb250LXNpemU6IDEuM3JlbTtcblx0fVxuXG5cdC5zZWNvbmQtdGV4dC1jb250YWluZXIgaDUge1xuXHRcdGZvbnQtc2l6ZTogMS4zcmVtO1xuXHR9XG5cblx0c3Bhbi5uYW1lIHtcblx0XHRmb250LXNpemU6IDEuN3JlbTtcblx0fVxuXG5cdCN0eXBlZC10ZXh0IHtcblx0XHRmb250LXNpemU6IDEuM3JlbTtcblx0fVxuXG5cdC5zb2NpYWwtYmxvY2sge1xuXHRcdGdhcDogMXJlbTtcblx0fVxuXG5cdC5zZWNvbmQtYmxvY2staG9tZSB7XG5cdFx0Z2FwOiAzcmVtO1xuXHR9XG5cblx0LmNhcm91c2VsIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdH1cblxuXHQuY2Fyb3VzZWwtaXRlbXMge1xuXHRcdGdhcDogMXJlbTtcblx0fVxuXG5cdC5jYXJvdXNlbC1pdGVtIHtcblx0XHRtaW4td2lkdGg6IDQuNXJlbTtcblx0XHRtaW4taGVpZ2h0OiA2cmVtO1xuXHR9XG5cblx0LmNhcm91c2VsLWl0ZW0gaW1nIHtcblx0XHR3aWR0aDogMnJlbTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdH1cblxuXHQuY2Fyb3VzZWwtaXRlbSBwIHtcblx0XHRmb250LXNpemU6IDFyZW07XG5cdH1cblxuXHQuZmlyc3QtYmxvY2staG9tZSxcblx0LnNlY29uZC1ibG9jay1ob21lIHtcblx0XHRwYWRkaW5nOiAwIDEuNXJlbTtcblx0fVxuXG5cdHNwYW4udHlwZWQtY3Vyc29yLFxuXHRwI3R5cGVkLXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHR9XG5cblx0LnByb2plY3QtbGluay1kaXYgYSB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuXHQuYmFjay1idG4sXG5cdC5mb3J3YXJkLWJ0biB7XG5cdFx0Zm9udC1zaXplOiAxLjFyZW07XG5cdFx0cGFkZGluZzogMHB4IDNweDtcblx0fVxuXG5cdC5hYm91dC1tZS1kaXYge1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuXHRcdGdhcDogMXJlbTtcblx0fVxuXG5cdC5zZWNvbmQtYmxvY2staG9tZSB7XG5cdFx0bWFyZ2luOiAwO1xuXHR9XG5cblx0LmxvZ28tYm94IGltZyB7XG5cdFx0d2lkdGg6IDIuNXJlbTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdH1cblxuXHQubG9nby1ib3ggYSBoMSB7XG5cdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdH1cblxuXHRkaXYuaGFtYnVyZ2VyLW1lbnUuaW5hY3RpdmUsXG5cdGRpdi5oYW1idXJnZXItbWVudS5hY3RpdmUge1xuXHRcdG1hcmdpbi10b3A6IDEuMnJlbTtcblx0fVxuXG5cdC5tYWluLWNvbnRhaW5lciB7XG5cdFx0Z2FwOiAxcmVtO1xuXHR9XG5cblx0LnRleHQtZGl2IHtcblx0XHRnYXA6IDFyZW07XG5cdH1cblxuXHQudGV4dC1kaXYgaDMge1xuXHRcdGZvbnQtc2l6ZTogMS4yNXJlbTtcblx0fVxuXG5cdC5hYm91dC1jb250YWluZXIge1xuXHRcdGdhcDogMHJlbTtcblx0fVxuXG5cdC5hYm91dC1tZS1kaXYge1xuXHRcdGdhcDogMXJlbTtcblx0fVxuXG5cdC5zZWNvbmQtZGl2LXRleHQgcCB7XG5cdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0LnNlY29uZC1kaXYge1xuXHRcdHBhZGRpbmc6IDByZW07XG5cdH1cblxuXHQucHJvamVjdC1pdGVtIHtcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblx0XHRnYXA6IDByZW07XG5cdH1cblxuXHQucHJvamVjdC1saW5rLWRpdiB7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XG5cdC5oYW1idXJnZXIge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG5cblx0ZGl2LmFib3V0LWNvbnRhaW5lciB7XG5cdFx0Z2FwOiAxcmVtO1xuXHR9XG5cblx0ZGl2LmFib3V0LW1lLWRpdiB7XG5cdFx0Z2FwOiAycmVtO1xuXHR9XG5cblx0LmFib3V0LW1lLXBpY3R1cmUge1xuXHRcdG9yZGVyOiAxO1xuXHRcdHdpZHRoOiAzMCU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHR9XG5cblx0ZGl2LmFib3V0LW1lLXRleHQtZGl2IHtcblx0XHRvcmRlcjogMjtcblx0fVxuXG5cdC5oYW1idXJnZXIgaW1nIHtcblx0XHR3aWR0aDogMnJlbTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdH1cblxuXHQuaGFtYnVyZ2VyIGltZzpob3ZlciB7XG5cdFx0ZmlsdGVyOiBicmlnaHRuZXNzKDMpO1xuXHR9XG5cblx0Lm5hdi1ib3gge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblxuXHQubG9nLWNvbnRhaW5lciB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGdhcDogMXJlbTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdH1cblxuXHQuaGFtYnVyZ2VyLW1lbnUuYWN0aXZlIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR6LWluZGV4OiA5OTk7XG5cdFx0YW5pbWF0aW9uOiBleHBhbmQgNTAwbXMgZWFzZS1pbi1vdXQ7XG5cdFx0bWFyZ2luLXRvcDogMnJlbTtcblx0XHRnYXA6IDFyZW07XG5cdFx0cGFkZGluZy10b3A6IDFyZW07XG5cdFx0LyogZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWFyZ2luLXRvcDogMi41cmVtO1xuXHRcdGdhcDogMXJlbTsgKi9cblx0fVxuXG5cdEBrZXlmcmFtZXMgZXhwYW5kIHtcblx0XHQwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlWSgwKTtcblx0XHR9XG5cblx0XHQ3MCUge1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZVkoMS4xKTtcblx0XHR9XG5cblx0XHQxMDAlIHtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuXHRcdH1cblx0fVxuXG5cdC5pbmFjdGl2ZSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0ei1pbmRleDogOTk5O1xuXHRcdGFuaW1hdGlvbjogY29sbGFwc2UgMC41cyBmb3J3YXJkcztcblx0XHRtYXJnaW4tdG9wOiAycmVtO1xuXHRcdGdhcDogMXJlbTtcblx0XHRwYWRkaW5nLXRvcDogMXJlbTtcblx0fVxuXG5cdC8qIC5pbmFjdGl2ZSB7XG5cdFx0b3BhY2l0eTogMDtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0dHJhbnNmb3JtOiBzY2FsZVkoMCk7XG5cdFx0dHJhbnNpdGlvbjpcblx0XHRcdHRyYW5zZm9ybSAwLjVzLFxuXHRcdFx0b3BhY2l0eSAwLjVzLFxuXHRcdFx0dmlzaWJpbGl0eSAwcyAwcztcblx0fSAqL1xuXG5cdEBrZXlmcmFtZXMgY29sbGFwc2Uge1xuXHRcdDAlIHtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuXHRcdH1cblx0XHQ3MCUge1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZVkoMS4xKTtcblx0XHR9XG5cdFx0MTAwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlWSgwKTtcblx0XHRcdGRpc3BsYXk6IG5vbmU7XG5cdFx0fVxuXHR9XG5cblx0LmhhbWJ1cmdlci1tZW51IGEge1xuXHRcdGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICNlMGUwZTA7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0LmhhbWJ1cmdlci1tZW51IGE6bnRoLW9mLXR5cGUoNCkge1xuXHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdH1cblxuXHQuaGFtYnVyZ2VyLW1lbnUgYSB7XG5cdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdFx0cGFkZGluZy1ib3R0b206IDAuNXJlbTtcblx0fVxuXG5cdC5maXJzdC10ZXh0LWNvbnRhaW5lciBoMyB7XG5cdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdH1cblxuXHQubmFtZSB7XG5cdFx0Zm9udC1zaXplOiAycmVtO1xuXHR9XG5cblx0I3R5cGVkLXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHR9XG5cblx0LnNlY29uZC1ibG9jay10ZXh0LWNvbnRhaW5lciB7XG5cdFx0Z2FwOiAzcmVtO1xuXHR9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyMTAwcHgpIHtcblx0LnN1YmRpdiB7XG5cdFx0Zm9udC1zaXplOiAxLjNyZW07XG5cdH1cblxuXHQuYWJvdXQtbWUge1xuXHRcdGZvbnQtc2l6ZTogM3JlbTtcblx0fVxuXG5cdC5wYXJhZ3JhcGgge1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHR9XG5cblx0cC5zb2NpYWwtc3ViLXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHR9XG5cblx0cC5hYm91dC1tZS10ZXh0IHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0fVxuXG5cdGRpdi5wcm9qZWN0LWl0ZW0tZGl2IHAge1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHR9XG5cblx0LnN1Yi1kaXYge1xuXHRcdGZvbnQtc2l6ZTogMS4zcmVtO1xuXHR9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyNTAwcHgpIHtcblx0ZGl2LnBhcmFncmFwaCB7XG5cdFx0Zm9udC1zaXplOiAycmVtO1xuXHR9XG5cblx0ZGl2LnBhcmFncmFwaCBwLmFib3V0LW1lLXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMnJlbTtcblx0fVxuXG5cdGRpdi5zb2NpYWwtaWNvbnMge1xuXHRcdGdhcDogNHJlbTtcblx0fVxuXG5cdGRpdi5zZWNvbmQtZGl2LXRleHQgcCB7XG5cdFx0Zm9udC1zaXplOiAzcmVtO1xuXHR9XG5cblx0LmNhcm91c2VsLWl0ZW0ge1xuXHRcdHBhZGRpbmc6IDByZW0gMC41cmVtO1xuXHR9XG5cblx0ZGl2LmxvZ28tYm94IGltZyB7XG5cdFx0d2lkdGg6IDVyZW07XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHR9XG5cblx0ZGl2LmxvZ28tYm94IHtcblx0XHRnYXA6IDJyZW07XG5cdH1cblxuXHRkaXYubG9nby1ib3ggYSBoMSB7XG5cdFx0Zm9udC1zaXplOiAyLjVyZW07XG5cdH1cblxuXHRkaXYubmF2LWJveCBpbWcge1xuXHRcdHdpZHRoOiAzcmVtO1xuXHRcdGhlaWdodDogYXV0bztcblx0fVxuXG5cdGRpdi5uYXYtYm94IHtcblx0XHRnYXA6IDFyZW07XG5cdH1cblxuXHRkaXYubmF2LWxpbmtzIGEge1xuXHRcdGZvbnQtc2l6ZTogMnJlbTtcblx0fVxuXG5cdGRpdi5wcm9qZWN0LWRpdiBoMSB7XG5cdFx0Zm9udC1zaXplOiAzcmVtO1xuXHR9XG5cblx0ZGl2LnByb2plY3QtaXRlbS1kaXYgcCB7XG5cdFx0Zm9udC1zaXplOiAycmVtO1xuXHR9XG5cblx0ZGl2LnByb2plY3QtbGluay1kaXYgYSB7XG5cdFx0Zm9udC1zaXplOiAycmVtO1xuXHRcdGJvcmRlcjogMnB4IHNvbGlkICM0ZmQxYzU7XG5cdH1cblxuXHRkaXYuc29jaWFsLXRleHQtZGl2IGgzLFxuXHRwI3R5cGVkLXRleHQsXG5cdHNwYW4udHlwZWQtY3Vyc29yLFxuXHRkaXYuZmlyc3QtdGV4dC1jb250YWluZXIgaDMge1xuXHRcdGZvbnQtc2l6ZTogM3JlbTtcblx0fVxuXG5cdGltZy53YXZlIHtcblx0XHR3aWR0aDogM3JlbTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdH1cblxuXHRkaXYuc2Vjb25kLXRleHQtY29udGFpbmVyIGg1IHtcblx0XHRmb250LXNpemU6IDIuNXJlbTtcblx0fVxuXG5cdGRpdi50ZXh0LWRpdiBoMyB7XG5cdFx0Zm9udC1zaXplOiAyLjlyZW07XG5cdH1cblxuXHRkaXYuc3ViLWRpdiB7XG5cdFx0Zm9udC1zaXplOiAxLjdyZW07XG5cdH1cblxuXHRwLnNvY2lhbC1zdWItdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdH1cblxuXHRkaXYuc29jaWFsLWljb25zIGltZyB7XG5cdFx0d2lkdGg6IDMuNXJlbTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdH1cblxuXHRmb290ZXIuZm9vdGVyIHtcblx0XHRwYWRkaW5nOiAxcmVtIDNyZW07XG5cdH1cblxuXHRmb290ZXIuZm9vdGVyIHAsXG5cdGZvb3Rlci5mb290ZXIgYSB7XG5cdFx0Zm9udC1zaXplOiAycmVtO1xuXHR9XG5cblx0Zm9vdGVyLmZvb3RlciBpbWcge1xuXHRcdHdpZHRoOiAzcmVtO1xuXHRcdGhlaWdodDogYXV0bztcblx0fVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTEyOHB4KSB7XG5cdGltZy5hYm91dC1tZS1waWN0dXJlIHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxjQUFjO0NBQ2QseUJBQXlCO0NBQ3pCLHlEQUE0QztDQUM1QyxtQ0FBbUM7Q0FDbkMsdUNBQXVDO0NBQ3ZDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsTUFBTTtDQUNOLE9BQU87Q0FDUCxRQUFRO0NBQ1IsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osNkJBQTZCLEVBQUUsNEJBQTRCO0NBQzNELHdCQUF3QixFQUFFLHNCQUFzQjtDQUNoRDs7b0NBRW1DO0FBQ3BDOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsV0FBVztDQUNYLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsT0FBTztDQUNQLGtCQUFrQjtDQUNsQixnQ0FBZ0M7Q0FDaEMsUUFBUTtDQUNSLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsU0FBUztBQUNWOztBQUVBO0NBQ0MsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsV0FBVztDQUNYLE9BQU87Q0FDUCxrQkFBa0I7Q0FDbEIsZ0NBQWdDO0NBQ2hDLFFBQVE7Q0FDUixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CLDJEQUEyRDtDQUMzRCxlQUFlO0NBQ2YsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztBQUNWOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLDhCQUE4QjtDQUM5Qix3QkFBd0I7Q0FDeEIsbUNBQW1DO0NBQ25DLHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0M7RUFDQyx1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLHlCQUF5QjtDQUMxQjtDQUNBO0VBQ0Msd0JBQXdCO0NBQ3pCO0NBQ0E7RUFDQyx5QkFBeUI7Q0FDMUI7Q0FDQTtFQUNDLHVCQUF1QjtDQUN4QjtDQUNBO0VBQ0MsdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyx1QkFBdUI7Q0FDeEI7QUFDRDs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDJCQUEyQjtDQUMzQixXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsU0FBUztBQUNWOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLGNBQWM7Q0FDZCxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsMkRBQTJEO0NBQzNELHFCQUFxQjtDQUNyQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLFNBQVM7QUFDVjs7QUFFQTs7Q0FFQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLGVBQWU7Q0FDZix5QkFBeUI7Q0FDekIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLCtDQUErQztBQUNoRDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUEsMkdBQTJHOztBQUUzRztDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7O0NBRUMsY0FBYztBQUNmOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHlCQUF5QjtBQUMxQjs7QUFFQTs7Q0FFQyxpQkFBaUI7Q0FDakIsK0NBQStDO0FBQ2hEOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQSwrQkFBK0I7QUFDL0I7Q0FDQyx5QkFBeUIsRUFBRSxnQ0FBZ0M7QUFDNUQ7O0FBRUEsZ0NBQWdDO0FBQ2hDO0NBQ0MseUJBQXlCLEVBQUUsMENBQTBDO0NBQ3JFLG1CQUFtQixFQUFFLG1DQUFtQztBQUN6RDs7QUFFQSxzREFBc0Q7QUFDdEQ7Q0FDQyxXQUFXLEVBQUUsa0NBQWtDO0FBQ2hEOztBQUVBLG1EQUFtRDtBQUNuRDtDQUNDLHlCQUF5QixFQUFFLDBEQUEwRDtBQUN0Rjs7QUFFQSxZQUFZO0FBQ1o7Q0FDQyxnQ0FBZ0M7Q0FDaEMscUJBQXFCLEVBQUUsaUNBQWlDO0FBQ3pEOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwyREFBMkQ7Q0FDM0QscUJBQXFCO0NBQ3JCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFFBQVE7Q0FDUixVQUFVO0NBQ1YsWUFBWTtBQUNiOztBQUVBO0NBQ0MsUUFBUTtBQUNUOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztBQUNWOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBLHlIQUF5SDs7QUFFekg7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsU0FBUztBQUNWOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFNBQVM7Q0FDVCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLG1CQUFtQjtBQUNwQjs7QUFFQTs7Q0FFQyxpQkFBaUI7Q0FDakIsY0FBYztDQUNkLGdCQUFnQjtDQUNoQix5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7O0NBRUMsY0FBYztDQUNkLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULGFBQWE7Q0FDYiwwQkFBMEI7Q0FDMUIsOEJBQThCO0NBQzlCLGtDQUFrQztDQUNsQyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLFNBQVM7Q0FDVCwwQkFBMEI7Q0FDMUIsOEJBQThCO0NBQzlCLGtDQUFrQztDQUNsQyx5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixTQUFTO0FBQ1Y7O0FBRUEsd0JBQXdCO0FBQ3hCO0NBQ0MsVUFBVSxFQUFFLG1DQUFtQztDQUMvQyxZQUFZLEVBQUUsb0NBQW9DO0FBQ25EOztBQUVBO0NBQ0MseUJBQXlCLEVBQUUsaUNBQWlDO0NBQzVELGtCQUFrQixFQUFFLDRDQUE0QztBQUNqRTs7QUFFQTtDQUNDLHlCQUF5QixFQUFFLDBDQUEwQztBQUN0RTs7QUFFQTtDQUNDLDZCQUE2QixFQUFFLGlDQUFpQztBQUNqRTs7QUFFQTtDQUNDLDZCQUE2QixFQUFFLGtDQUFrQztBQUNsRTs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztDQUNULGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsY0FBYztDQUNkLHlCQUF5QjtDQUN6Qix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBLHVCQUF1Qjs7QUFFdkI7Q0FDQyxhQUFhO0NBQ2IscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0M7RUFDQywyREFBMkQ7Q0FDNUQ7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQywyREFBMkQ7RUFDM0QsU0FBUztDQUNWO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLDJEQUEyRDtDQUM1RDs7Q0FFQTtFQUNDLDJEQUEyRDtFQUMzRCxTQUFTO0NBQ1Y7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsMkRBQTJEO0VBQzNELFNBQVM7Q0FDVjtDQUNBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsYUFBYTtFQUNiLFlBQVk7Q0FDYjs7Q0FFQTtFQUNDLGNBQWM7RUFDZCxZQUFZO0NBQ2I7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyx1QkFBdUI7Q0FDeEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0Msb0JBQW9CO0NBQ3JCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0Msb0JBQW9CO0NBQ3JCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFNBQVM7RUFDVCxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjtBQUNEOztBQUVBO0NBQ0M7RUFDQywyREFBMkQ7RUFDM0QsU0FBUztDQUNWOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsU0FBUztDQUNWOztDQUVBO0VBQ0MsU0FBUztDQUNWOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFNBQVM7Q0FDVjs7Q0FFQTtFQUNDLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7O0NBRUE7RUFDQyxXQUFXO0VBQ1gsWUFBWTtDQUNiOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTs7RUFFQyxpQkFBaUI7Q0FDbEI7O0NBRUE7O0VBRUMsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0Msa0JBQWtCO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQzs7RUFFQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsMkRBQTJEO0VBQzNELFNBQVM7Q0FDVjs7Q0FFQTtFQUNDLFNBQVM7Q0FDVjs7Q0FFQTtFQUNDLGFBQWE7RUFDYixZQUFZO0NBQ2I7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7O0VBRUMsa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsU0FBUztDQUNWOztDQUVBO0VBQ0MsU0FBUztDQUNWOztDQUVBO0VBQ0Msa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsU0FBUztDQUNWOztDQUVBO0VBQ0MsU0FBUztDQUNWOztDQUVBO0VBQ0MsaUJBQWlCO0VBQ2pCLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGFBQWE7Q0FDZDs7Q0FFQTtFQUNDLDBCQUEwQjtFQUMxQixTQUFTO0NBQ1Y7O0NBRUE7RUFDQyx1QkFBdUI7Q0FDeEI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsY0FBYztDQUNmOztDQUVBO0VBQ0MsU0FBUztDQUNWOztDQUVBO0VBQ0MsU0FBUztDQUNWOztDQUVBO0VBQ0MsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0NBQ2I7O0NBRUE7RUFDQyxRQUFRO0NBQ1Q7O0NBRUE7RUFDQyxXQUFXO0VBQ1gsWUFBWTtDQUNiOztDQUVBO0VBQ0MscUJBQXFCO0NBQ3RCOztDQUVBO0VBQ0MsYUFBYTtDQUNkOztDQUVBO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsOEJBQThCO0NBQy9COztDQUVBO0VBQ0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakI7Ozs7Ozs7Y0FPWTtDQUNiOztDQUVBO0VBQ0M7R0FDQyxvQkFBb0I7RUFDckI7O0VBRUE7R0FDQyxzQkFBc0I7RUFDdkI7O0VBRUE7R0FDQyxvQkFBb0I7RUFDckI7Q0FDRDs7Q0FFQTtFQUNDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsaUJBQWlCO0NBQ2xCOztDQUVBOzs7Ozs7OztJQVFHOztDQUVIO0VBQ0M7R0FDQyxvQkFBb0I7RUFDckI7RUFDQTtHQUNDLHNCQUFzQjtFQUN2QjtFQUNBO0dBQ0Msb0JBQW9CO0dBQ3BCLGFBQWE7RUFDZDtDQUNEOztDQUVBO0VBQ0Msa0NBQWtDO0VBQ2xDLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGlCQUFpQjtFQUNqQixzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsU0FBUztDQUNWO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxTQUFTO0NBQ1Y7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0Msb0JBQW9CO0NBQ3JCOztDQUVBO0VBQ0MsV0FBVztFQUNYLFlBQVk7Q0FDYjs7Q0FFQTtFQUNDLFNBQVM7Q0FDVjs7Q0FFQTtFQUNDLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLFdBQVc7RUFDWCxZQUFZO0NBQ2I7O0NBRUE7RUFDQyxTQUFTO0NBQ1Y7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxlQUFlO0VBQ2YseUJBQXlCO0NBQzFCOztDQUVBOzs7O0VBSUMsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFdBQVc7RUFDWCxZQUFZO0NBQ2I7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxhQUFhO0VBQ2IsWUFBWTtDQUNiOztDQUVBO0VBQ0Msa0JBQWtCO0NBQ25COztDQUVBOztFQUVDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxXQUFXO0VBQ1gsWUFBWTtDQUNiO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLFdBQVc7RUFDWCxZQUFZO0NBQ2I7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG5cXHRjb2xvcjogI2UwZTBlMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvYmFja2dyb3VuZC5qcGcpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcXG5cXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuZGl2I2NvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdi1iYXIge1xcblxcdHBvc2l0aW9uOiBzdGlja3k7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxLjVyZW0gM3JlbTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcblxcdHotaW5kZXg6IDk5OTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogTm8gYmFja2dyb3VuZCBpbml0aWFsbHkgKi9cXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCk7IC8qIE5vIGJsdXIgaW5pdGlhbGx5ICovXFxuXFx0Ym94LXNoYWRvdzpcXG5cXHRcXHQwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksXFxuXFx0XFx0MCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG59XFxuXFxuLm5hdi1iYXItc2Nyb2xsZWQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwYjRkNDQ7XFxufVxcblxcbi5sb2dvLWJveCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLmxvZ28tYm94IGltZyB7XFxuXFx0d2lkdGg6IDNyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvZy1jb250YWluZXI6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvZ28tYm94IGEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxvZy1jb250YWluZXI6aG92ZXI6YWZ0ZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lcjpob3ZlciAubG9nby1ib3ggYSBoMSB7XFxuXFx0Y29sb3I6ICNmZmZmZmZmZjtcXG59XFxuXFxuLmxvZy1jb250YWluZXI6aG92ZXIgLmxvZ28tYm94IGltZyB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDMpO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lcjphZnRlciB7XFxuXFx0YmFja2dyb3VuZDogIzRmZDFjNTtcXG5cXHRib3JkZXItcmFkaXVzOiAxNnB4O1xcblxcdGJvdHRvbTogMXB4O1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGhlaWdodDogNXB4O1xcblxcdGxlZnQ6IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xcblxcdHdpZHRoOiAwO1xcblxcdHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ubG9nby1ib3ggYSBoMSB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLm5hdi1saW5rcyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLm5hdi1saW5rcyBhIHtcXG5cXHRjb2xvcjogI2UwZTBlMDtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm5hdi1saW5rcyBhOmhvdmVyIHtcXG5cXHRjb2xvcjogI2ZmZmZmZmZmO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXIgYSB7XFxuXFx0Y29sb3I6ICNmZmZmZmZmZjtcXG59XFxuXFxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciBpbWcge1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcygzKTtcXG59XFxuXFxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlcjphZnRlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXYtbGlua3MgLm5hdi1ib3gge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdi1saW5rcyAubmF2LWJveDphZnRlciB7XFxuXFx0YmFja2dyb3VuZDogIzRmZDFjNTtcXG5cXHRib3JkZXItcmFkaXVzOiAxNnB4O1xcblxcdGJvdHRvbTogLTVweDtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRoZWlnaHQ6IDVweDtcXG5cXHRsZWZ0OiAwO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcXG5cXHR3aWR0aDogMDtcXG5cXHR6LWluZGV4OiAtMTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiA3cmVtO1xcbn1cXG5cXG4uZmlyc3QtYmxvY2staG9tZSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG5cXHRwYWRkaW5nOiAwIDNyZW07XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4udGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnN1Yi10ZXh0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDc1JTtcXG59XFxuXFxuLmNvbXB1dGVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5maXJzdC10ZXh0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLnR5cGVkLXRleHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jdHlwZWQtdGV4dCB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi50eXBlZC1jdXJzb3Ige1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGNvbG9yOiAjNGZkMWM1O1xcblxcdGFuaW1hdGlvbjogYmxpbmsgMC43cyBpbmZpbml0ZTtcXG59XFxuXFxuLm5hdi1ib3gge1xcblxcdHBhZGRpbmc6IDAuMjVyZW0gMHJlbTtcXG59XFxuXFxuLndhdmUge1xcblxcdHdpZHRoOiAycmVtO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRhbmltYXRpb24tbmFtZTogd2F2ZS1hbmltYXRpb247XFxuXFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAyLjVzO1xcblxcdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcblxcdHRyYW5zZm9ybS1vcmlnaW46IDcwJSA3MCU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHdhdmUtYW5pbWF0aW9uIHtcXG5cXHQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcblxcdDEwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG5cXHR9XFxuXFx0MjAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XFxuXFx0fVxcblxcdDMwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG5cXHR9XFxuXFx0NDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSg5ZGVnKTtcXG5cXHR9XFxuXFx0NTAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcbn1cXG5cXG4ubmFtZSB7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi5uYXYtYm94IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG5cXHRnYXA6IDAuNXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWJveCBpbWcge1xcblxcdHdpZHRoOiAycmVtO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLnNlY29uZC10ZXh0LWNvbnRhaW5lciBoNSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uZmlyc3QtdGV4dC1jb250YWluZXIgaDMge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnNlY29uZC10ZXh0LWNvbnRhaW5lciBoNSB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zZWNvbmQtYmxvY2staG9tZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IDAgM3JlbTtcXG5cXHRtYXJnaW46IDAgNXJlbTtcXG5cXHRnYXA6IDVyZW07XFxufVxcblxcbi5zZWNvbmQtYmxvY2stdGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oYWNrZXIge1xcblxcdHdpZHRoOiAzNSU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udGV4dC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDNyZW07XFxufVxcblxcbi50ZXh0LWRpdiBoMyB7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMS45cmVtO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZ2hsaWdodCxcXG4udGV4dC1kaXYgaDMgc3BhbiB7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi5zdWItZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG5cXG4uc3ViLXRleHQge1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uc29jaWFsLWljb25zIGltZyB7XFxuXFx0d2lkdGg6IDIuNXJlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uc29jaWFsLWljb25zIGltZzpob3ZlciB7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoMSk7XFxuXFx0Ym94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSg3OSwgMjA5LCAxOTcsIDAuNSk7XFxufVxcblxcbi5zb2NpYWwtdGV4dC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDAuNXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc29jaWFsLXRleHQtZGl2IGgzIHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNvY2lhbC10ZXh0LWRpdiAqIHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5zb2NpYWwtaWNvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDJyZW07XFxufVxcblxcbi5zb2NpYWwtc3ViLXRleHQge1xcblxcdGZvbnQtc2l6ZTogMC44cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1NTA7XFxufVxcblxcbi5zb2NpYWwtYmxvY2sge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDJyZW07XFxufVxcblxcbi5zb2NpYWwtc3ViLXRleHQgc3BhbiB7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGb290ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmZvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdHBhZGRpbmc6IDAuMjVyZW0gM3JlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1O1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC41cmVtO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcblxcdGNvbG9yOiAjZmFmYWZhO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbmZvb3RlciBwIHtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlcixcXG5mb290ZXIgYTphY3RpdmUge1xcblxcdGNvbG9yOiAjYjAyZTM5O1xcbn1cXG5cXG5mb290ZXIgYSBpbWcge1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciBpbWcsXFxuZm9vdGVyIGE6YWN0aXZlIGltZyB7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoMSk7XFxuXFx0Ym94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSg3OSwgMjA5LCAxOTcsIDAuNSk7XFxufVxcblxcbi5hdC1zeW1ib2wge1xcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbmZvb3RlciBpbWcge1xcblxcdHdpZHRoOiAycmVtO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogU3R5bGVzIHRoZSBzY3JvbGxiYXIgdHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwOyAvKiBBIGRhcmtlciBzaGFkZSBmb3IgY29udHJhc3QgKi9cXG59XFxuXFxuLyogU3R5bGVzIHRoZSBzY3JvbGxiYXIgaGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTsgLyogVGhlIGNvbG9yIHlvdSBwcm92aWRlZCBmb3IgdGhlIGhhbmRsZSAqL1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgdGhlIGhhbmRsZSAqL1xcbn1cXG5cXG4vKiBTdHlsZXMgdGhlIHNjcm9sbGJhciBpdHNlbGYgKGluY2x1ZGluZyB0aGUgdHJhY2spICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDEycHg7IC8qIEFkanVzdCB0byB0aGUgc2l6ZSB5b3UgcHJlZmVyICovXFxufVxcblxcbi8qIE9wdGlvbmFsOiBzdHlsZXMgdGhlIHNjcm9sbGJhciBoYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2E5ZDliOyAvKiBBIHNsaWdodGx5IGRhcmtlciBzaGFkZSBvZiB0aGUgaGFuZGxlIGNvbG9yIGZvciBob3ZlciAqL1xcbn1cXG5cXG4vKiBGaXJlZm94ICovXFxuaHRtbCB7XFxuXFx0c2Nyb2xsYmFyLWNvbG9yOiAjNGZkMWM1ICMyYzNlNTA7XFxuXFx0c2Nyb2xsYmFyLXdpZHRoOiB0aGluOyAvKiBZb3UgY2FuIHVzZSAnYXV0bycgb3IgJ3RoaW4nICovXFxufVxcblxcbi5hYm91dC1wYWdlIHtcXG5cXHRwYWRkaW5nOiAwcmVtIDNyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDJyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogNXJlbTtcXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLmFib3V0LXRleHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXQtbWUgc3BhbiB7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi5hYm91dC1tZS1kaXYge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MDBweCwgMWZyKSk7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLmFib3V0LW1lLXBpY3R1cmUge1xcblxcdG9yZGVyOiAxO1xcblxcdHdpZHRoOiAzMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uYWJvdXQtbWUtdGV4dC1kaXYge1xcblxcdG9yZGVyOiAyO1xcbn1cXG5cXG4uYWJvdXQtbWUtdGV4dC1kaXYge1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5hYm91dC1tZS10ZXh0Om50aC1vZi10eXBlKDEpIHtcXG5cXHRtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFbmQgb2YgRm9vdGVyIHN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmNhcm91c2VsLWl0ZW0gaW1nIHtcXG5cXHR3aWR0aDogM3JlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5zZWNvbmQtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAzcmVtO1xcblxcdHBhZGRpbmc6IDAgM3JlbTtcXG59XFxuXFxuLnNlY29uZC1kaXYtdGV4dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5zZWNvbmQtZGl2LXRleHQgcCB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdG1hcmdpbjogMDtcXG5cXHRmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uY2Fyb3VzZWwtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJvcmRlcjogM3B4IHNvbGlkICNkZGRkZGQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJhY2stYnRuLFxcbi5mb3J3YXJkLWJ0biB7XFxuXFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0Y29sb3I6ICMxNTIwMmI7XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5iYWNrLWJ0bjpob3ZlcixcXG4uZm9yd2FyZC1idG46aG92ZXIge1xcblxcdGNvbG9yOiAjNGZkMWM1O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5jYXJvdXNlbCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcblxcdGdhcDogMnJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xcblxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xcblxcdG1hcmdpbi10b3A6IDAuMnJlbTtcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5jYXJvdXNlbC1pdGVtIHtcXG5cXHRtaW4td2lkdGg6IDdyZW07XFxuXFx0bWluLWhlaWdodDogMTByZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xcblxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMTc7XFxufVxcblxcbi5jYXJvdXNlbC1pdGVtIHAge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmNhcm91c2VsLWl0ZW1zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgc2Nyb2xsYmFyICovXFxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDVweDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsYmFyICovXFxuXFx0aGVpZ2h0OiAxMHB4OyAvKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgc2Nyb2xsYmFyICovXFxufVxcblxcbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgdGh1bWIgKi9cXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgdGhlIHNjcm9sbGJhciB0aHVtYiAqL1xcbn1cXG5cXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIHRodW1iIG9uIGhvdmVyICovXFxufVxcblxcbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIHRyYWNrICovXFxufVxcblxcbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciBjb3JuZXIgKi9cXG59XFxuXFxuLnByb2plY3QtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAycmVtO1xcblxcdHBhZGRpbmc6IDAgM3JlbTtcXG59XFxuXFxuLnByb2plY3QtZGl2IGgxIHtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSBpbWcge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMnJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjE3O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxufVxcblxcbi5wcm9qZWN0LWxpbmstZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtbGluay1kaXYgYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiAjNGZkMWM1O1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgIzRmZDFjNTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbi5wcm9qZWN0LWxpbmstZGl2IGE6aG92ZXIge1xcblxcdGNvbG9yOiAjZTBlMGUwO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLnByb2plY3QtaXRlbS1kaXYgcCB7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLyogLi4uZXhpc3Rpbmcgc3R5bGVzICovXFxuXFxuLmhhbWJ1cmdlci1tZW51IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XFxuXFx0LmZpcnN0LWJsb2NrLWhvbWUge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcblxcdH1cXG5cXG5cXHRkaXYuc2Vjb25kLWRpdi10ZXh0IHAge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdH1cXG5cXG5cXHRkaXYuYWJvdXQtbWUtZGl2IHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG5cXHRcXHRnYXA6IDFyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcXG5cXHRkaXYuc2Vjb25kLWJsb2NrLXRleHQtY29udGFpbmVyIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG5cXHR9XFxuXFxuXFx0LmFib3V0LW1lLWRpdiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuXFx0XFx0Z2FwOiAycmVtO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM1NXB4KSB7XFxuXFx0LmFib3V0LW1lLWRpdiB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuXFx0XFx0Z2FwOiAxcmVtO1xcblxcdH1cXG5cXHRkaXYuc3ViLXRleHQtY29udGFpbmVyIGRpdi5maXJzdC10ZXh0LWNvbnRhaW5lciBoMyB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0fVxcblxcblxcdGRpdi5zZWNvbmQtdGV4dC1jb250YWluZXIgaDUge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdH1cXG5cXG5cXHRkaXYuc2Vjb25kLXRleHQtY29udGFpbmVyIGg1IHNwYW4ubmFtZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0fVxcblxcblxcdGltZy53YXZlIHtcXG5cXHRcXHR3aWR0aDogMS41cmVtO1xcblxcdFxcdGhlaWdodDogYXV0bztcXG5cXHR9XFxuXFxuXFx0ZGl2LmxvZ28tYm94IGltZyB7XFxuXFx0XFx0d2lkdGg6IDIuNzVyZW07XFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdH1cXG5cXG5cXHRkaXYubG9nby1ib3ggYSBoMSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0fVxcblxcblxcdGRpdi50ZXh0LWRpdiBoMyB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjNyZW07XFxuXFx0fVxcblxcblxcdHAuc3ViLXRleHQge1xcblxcdFxcdGZvbnQtc2l6ZTogMC44cmVtO1xcblxcdH1cXG5cXG5cXHQuc29jaWFsLXRleHQtZGl2IGgzIHtcXG5cXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0Zm9vdGVyIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG5cXHR9XFxuXFxuXFx0Zm9vdGVyLmZvb3RlciBhIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcblxcdC5uYXYtYmFyIHtcXG5cXHRcXHRwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0ZGl2LmFib3V0LXRleHQtY29udGFpbmVyIGgxIHtcXG5cXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LmFib3V0LXBhZ2Uge1xcblxcdFxcdHBhZGRpbmc6IDByZW0gMS41cmVtO1xcblxcdH1cXG5cXG5cXHQuYWJvdXQtbWUtdGV4dCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdC1kaXYge1xcblxcdFxcdGdhcDogMHJlbTtcXG5cXHRcXHRwYWRkaW5nOiAwIDEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtZGl2IGgxIHtcXG5cXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtaXRlbS1kaXYgcCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdC1saW5rLWRpdiBhIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMzkwcHgpIHtcXG5cXHRkaXYuYWJvdXQtbWUtZGl2IHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG5cXHRcXHRnYXA6IDFyZW07XFxuXFx0fVxcblxcblxcdC5zdWItdGV4dCB7XFxuXFx0XFx0Zm9udC1zaXplOiAwLjlyZW07XFxuXFx0fVxcblxcblxcdC5mb290ZXIgYSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0fVxcblxcblxcdGRpdi5maXJzdC10ZXh0LWNvbnRhaW5lciBoMyB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjNyZW07XFxuXFx0fVxcblxcblxcdC5zZWNvbmQtdGV4dC1jb250YWluZXIgaDUge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdH1cXG5cXG5cXHRzcGFuLm5hbWUge1xcblxcdFxcdGZvbnQtc2l6ZTogMS43cmVtO1xcblxcdH1cXG5cXG5cXHQjdHlwZWQtdGV4dCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjNyZW07XFxuXFx0fVxcblxcblxcdC5zb2NpYWwtYmxvY2sge1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LnNlY29uZC1ibG9jay1ob21lIHtcXG5cXHRcXHRnYXA6IDNyZW07XFxuXFx0fVxcblxcblxcdC5jYXJvdXNlbCB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAwO1xcblxcdH1cXG5cXG5cXHQuY2Fyb3VzZWwtaXRlbXMge1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LmNhcm91c2VsLWl0ZW0ge1xcblxcdFxcdG1pbi13aWR0aDogNC41cmVtO1xcblxcdFxcdG1pbi1oZWlnaHQ6IDZyZW07XFxuXFx0fVxcblxcblxcdC5jYXJvdXNlbC1pdGVtIGltZyB7XFxuXFx0XFx0d2lkdGg6IDJyZW07XFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdH1cXG5cXG5cXHQuY2Fyb3VzZWwtaXRlbSBwIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcblxcdC5maXJzdC1ibG9jay1ob21lLFxcblxcdC5zZWNvbmQtYmxvY2staG9tZSB7XFxuXFx0XFx0cGFkZGluZzogMCAxLjVyZW07XFxuXFx0fVxcblxcblxcdHNwYW4udHlwZWQtY3Vyc29yLFxcblxcdHAjdHlwZWQtdGV4dCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWxpbmstZGl2IGEge1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcblxcdC5iYWNrLWJ0bixcXG5cXHQuZm9yd2FyZC1idG4ge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdFxcdHBhZGRpbmc6IDBweCAzcHg7XFxuXFx0fVxcblxcblxcdC5hYm91dC1tZS1kaXYge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LnNlY29uZC1ibG9jay1ob21lIHtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0fVxcblxcblxcdC5sb2dvLWJveCBpbWcge1xcblxcdFxcdHdpZHRoOiAyLjVyZW07XFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdH1cXG5cXG5cXHQubG9nby1ib3ggYSBoMSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0fVxcblxcblxcdGRpdi5oYW1idXJnZXItbWVudS5pbmFjdGl2ZSxcXG5cXHRkaXYuaGFtYnVyZ2VyLW1lbnUuYWN0aXZlIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxLjJyZW07XFxuXFx0fVxcblxcblxcdC5tYWluLWNvbnRhaW5lciB7XFxuXFx0XFx0Z2FwOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQudGV4dC1kaXYge1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LnRleHQtZGl2IGgzIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0fVxcblxcblxcdC5hYm91dC1jb250YWluZXIge1xcblxcdFxcdGdhcDogMHJlbTtcXG5cXHR9XFxuXFxuXFx0LmFib3V0LW1lLWRpdiB7XFxuXFx0XFx0Z2FwOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQuc2Vjb25kLWRpdi10ZXh0IHAge1xcblxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0LnNlY29uZC1kaXYge1xcblxcdFxcdHBhZGRpbmc6IDByZW07XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWl0ZW0ge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcblxcdFxcdGdhcDogMHJlbTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtbGluay1kaXYge1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XFxuXFx0LmhhbWJ1cmdlciB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0fVxcblxcblxcdGRpdi5hYm91dC1jb250YWluZXIge1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHR9XFxuXFxuXFx0ZGl2LmFib3V0LW1lLWRpdiB7XFxuXFx0XFx0Z2FwOiAycmVtO1xcblxcdH1cXG5cXG5cXHQuYWJvdXQtbWUtcGljdHVyZSB7XFxuXFx0XFx0b3JkZXI6IDE7XFxuXFx0XFx0d2lkdGg6IDMwJTtcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0fVxcblxcblxcdGRpdi5hYm91dC1tZS10ZXh0LWRpdiB7XFxuXFx0XFx0b3JkZXI6IDI7XFxuXFx0fVxcblxcblxcdC5oYW1idXJnZXIgaW1nIHtcXG5cXHRcXHR3aWR0aDogMnJlbTtcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0fVxcblxcblxcdC5oYW1idXJnZXIgaW1nOmhvdmVyIHtcXG5cXHRcXHRmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XFxuXFx0fVxcblxcblxcdC5uYXYtYm94IHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXG5cXHQubG9nLWNvbnRhaW5lciB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0fVxcblxcblxcdC5oYW1idXJnZXItbWVudS5hY3RpdmUge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1O1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdHotaW5kZXg6IDk5OTtcXG5cXHRcXHRhbmltYXRpb246IGV4cGFuZCA1MDBtcyBlYXNlLWluLW91dDtcXG5cXHRcXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHRcXHRwYWRkaW5nLXRvcDogMXJlbTtcXG5cXHRcXHQvKiBkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0cmlnaHQ6IDA7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRtYXJnaW4tdG9wOiAyLjVyZW07XFxuXFx0XFx0Z2FwOiAxcmVtOyAqL1xcblxcdH1cXG5cXG5cXHRAa2V5ZnJhbWVzIGV4cGFuZCB7XFxuXFx0XFx0MCUge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGVZKDApO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQ3MCUge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGVZKDEuMSk7XFxuXFx0XFx0fVxcblxcblxcdFxcdDEwMCUge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0LmluYWN0aXZlIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0bGVmdDogMDtcXG5cXHRcXHRyaWdodDogMDtcXG5cXHRcXHR6LWluZGV4OiA5OTk7XFxuXFx0XFx0YW5pbWF0aW9uOiBjb2xsYXBzZSAwLjVzIGZvcndhcmRzO1xcblxcdFxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0XFx0Z2FwOiAxcmVtO1xcblxcdFxcdHBhZGRpbmctdG9wOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQvKiAuaW5hY3RpdmUge1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGVZKDApO1xcblxcdFxcdHRyYW5zaXRpb246XFxuXFx0XFx0XFx0dHJhbnNmb3JtIDAuNXMsXFxuXFx0XFx0XFx0b3BhY2l0eSAwLjVzLFxcblxcdFxcdFxcdHZpc2liaWxpdHkgMHMgMHM7XFxuXFx0fSAqL1xcblxcblxcdEBrZXlmcmFtZXMgY29sbGFwc2Uge1xcblxcdFxcdDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG5cXHRcXHR9XFxuXFx0XFx0NzAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgxLjEpO1xcblxcdFxcdH1cXG5cXHRcXHQxMDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0LmhhbWJ1cmdlci1tZW51IGEge1xcblxcdFxcdGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICNlMGUwZTA7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyLW1lbnUgYTpudGgtb2YtdHlwZSg0KSB7XFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LmhhbWJ1cmdlci1tZW51IGEge1xcblxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuXFx0fVxcblxcblxcdC5maXJzdC10ZXh0LWNvbnRhaW5lciBoMyB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0fVxcblxcblxcdC5uYW1lIHtcXG5cXHRcXHRmb250LXNpemU6IDJyZW07XFxuXFx0fVxcblxcblxcdCN0eXBlZC10ZXh0IHtcXG5cXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LnNlY29uZC1ibG9jay10ZXh0LWNvbnRhaW5lciB7XFxuXFx0XFx0Z2FwOiAzcmVtO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDIxMDBweCkge1xcblxcdC5zdWJkaXYge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdH1cXG5cXG5cXHQuYWJvdXQtbWUge1xcblxcdFxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHR9XFxuXFxuXFx0LnBhcmFncmFwaCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0fVxcblxcblxcdHAuc29jaWFsLXN1Yi10ZXh0IHtcXG5cXHRcXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHR9XFxuXFxuXFx0cC5hYm91dC1tZS10ZXh0IHtcXG5cXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0ZGl2LnByb2plY3QtaXRlbS1kaXYgcCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0fVxcblxcblxcdC5zdWItZGl2IHtcXG5cXHRcXHRmb250LXNpemU6IDEuM3JlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAyNTAwcHgpIHtcXG5cXHRkaXYucGFyYWdyYXBoIHtcXG5cXHRcXHRmb250LXNpemU6IDJyZW07XFxuXFx0fVxcblxcblxcdGRpdi5wYXJhZ3JhcGggcC5hYm91dC1tZS10ZXh0IHtcXG5cXHRcXHRmb250LXNpemU6IDJyZW07XFxuXFx0fVxcblxcblxcdGRpdi5zb2NpYWwtaWNvbnMge1xcblxcdFxcdGdhcDogNHJlbTtcXG5cXHR9XFxuXFxuXFx0ZGl2LnNlY29uZC1kaXYtdGV4dCBwIHtcXG5cXHRcXHRmb250LXNpemU6IDNyZW07XFxuXFx0fVxcblxcblxcdC5jYXJvdXNlbC1pdGVtIHtcXG5cXHRcXHRwYWRkaW5nOiAwcmVtIDAuNXJlbTtcXG5cXHR9XFxuXFxuXFx0ZGl2LmxvZ28tYm94IGltZyB7XFxuXFx0XFx0d2lkdGg6IDVyZW07XFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdH1cXG5cXG5cXHRkaXYubG9nby1ib3gge1xcblxcdFxcdGdhcDogMnJlbTtcXG5cXHR9XFxuXFxuXFx0ZGl2LmxvZ28tYm94IGEgaDEge1xcblxcdFxcdGZvbnQtc2l6ZTogMi41cmVtO1xcblxcdH1cXG5cXG5cXHRkaXYubmF2LWJveCBpbWcge1xcblxcdFxcdHdpZHRoOiAzcmVtO1xcblxcdFxcdGhlaWdodDogYXV0bztcXG5cXHR9XFxuXFxuXFx0ZGl2Lm5hdi1ib3gge1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHR9XFxuXFxuXFx0ZGl2Lm5hdi1saW5rcyBhIHtcXG5cXHRcXHRmb250LXNpemU6IDJyZW07XFxuXFx0fVxcblxcblxcdGRpdi5wcm9qZWN0LWRpdiBoMSB7XFxuXFx0XFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdH1cXG5cXG5cXHRkaXYucHJvamVjdC1pdGVtLWRpdiBwIHtcXG5cXHRcXHRmb250LXNpemU6IDJyZW07XFxuXFx0fVxcblxcblxcdGRpdi5wcm9qZWN0LWxpbmstZGl2IGEge1xcblxcdFxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRcXHRib3JkZXI6IDJweCBzb2xpZCAjNGZkMWM1O1xcblxcdH1cXG5cXG5cXHRkaXYuc29jaWFsLXRleHQtZGl2IGgzLFxcblxcdHAjdHlwZWQtdGV4dCxcXG5cXHRzcGFuLnR5cGVkLWN1cnNvcixcXG5cXHRkaXYuZmlyc3QtdGV4dC1jb250YWluZXIgaDMge1xcblxcdFxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHR9XFxuXFxuXFx0aW1nLndhdmUge1xcblxcdFxcdHdpZHRoOiAzcmVtO1xcblxcdFxcdGhlaWdodDogYXV0bztcXG5cXHR9XFxuXFxuXFx0ZGl2LnNlY29uZC10ZXh0LWNvbnRhaW5lciBoNSB7XFxuXFx0XFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0fVxcblxcblxcdGRpdi50ZXh0LWRpdiBoMyB7XFxuXFx0XFx0Zm9udC1zaXplOiAyLjlyZW07XFxuXFx0fVxcblxcblxcdGRpdi5zdWItZGl2IHtcXG5cXHRcXHRmb250LXNpemU6IDEuN3JlbTtcXG5cXHR9XFxuXFxuXFx0cC5zb2NpYWwtc3ViLXRleHQge1xcblxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdH1cXG5cXG5cXHRkaXYuc29jaWFsLWljb25zIGltZyB7XFxuXFx0XFx0d2lkdGg6IDMuNXJlbTtcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0fVxcblxcblxcdGZvb3Rlci5mb290ZXIge1xcblxcdFxcdHBhZGRpbmc6IDFyZW0gM3JlbTtcXG5cXHR9XFxuXFxuXFx0Zm9vdGVyLmZvb3RlciBwLFxcblxcdGZvb3Rlci5mb290ZXIgYSB7XFxuXFx0XFx0Zm9udC1zaXplOiAycmVtO1xcblxcdH1cXG5cXG5cXHRmb290ZXIuZm9vdGVyIGltZyB7XFxuXFx0XFx0d2lkdGg6IDNyZW07XFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDExMjhweCkge1xcblxcdGltZy5hYm91dC1tZS1waWN0dXJlIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gdCgpe3JldHVybiB0PU9iamVjdC5hc3NpZ24/T2JqZWN0LmFzc2lnbi5iaW5kKCk6ZnVuY3Rpb24odCl7Zm9yKHZhciBzPTE7czxhcmd1bWVudHMubGVuZ3RoO3MrKyl7dmFyIGU9YXJndW1lbnRzW3NdO2Zvcih2YXIgbiBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiYodFtuXT1lW25dKX1yZXR1cm4gdH0sdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIHM9e3N0cmluZ3M6W1wiVGhlc2UgYXJlIHRoZSBkZWZhdWx0IHZhbHVlcy4uLlwiLFwiWW91IGtub3cgd2hhdCB5b3Ugc2hvdWxkIGRvP1wiLFwiVXNlIHlvdXIgb3duIVwiLFwiSGF2ZSBhIGdyZWF0IGRheSFcIl0sc3RyaW5nc0VsZW1lbnQ6bnVsbCx0eXBlU3BlZWQ6MCxzdGFydERlbGF5OjAsYmFja1NwZWVkOjAsc21hcnRCYWNrc3BhY2U6ITAsc2h1ZmZsZTohMSxiYWNrRGVsYXk6NzAwLGZhZGVPdXQ6ITEsZmFkZU91dENsYXNzOlwidHlwZWQtZmFkZS1vdXRcIixmYWRlT3V0RGVsYXk6NTAwLGxvb3A6ITEsbG9vcENvdW50OkluZmluaXR5LHNob3dDdXJzb3I6ITAsY3Vyc29yQ2hhcjpcInxcIixhdXRvSW5zZXJ0Q3NzOiEwLGF0dHI6bnVsbCxiaW5kSW5wdXRGb2N1c0V2ZW50czohMSxjb250ZW50VHlwZTpcImh0bWxcIixvbkJlZ2luOmZ1bmN0aW9uKHQpe30sb25Db21wbGV0ZTpmdW5jdGlvbih0KXt9LHByZVN0cmluZ1R5cGVkOmZ1bmN0aW9uKHQscyl7fSxvblN0cmluZ1R5cGVkOmZ1bmN0aW9uKHQscyl7fSxvbkxhc3RTdHJpbmdCYWNrc3BhY2VkOmZ1bmN0aW9uKHQpe30sb25UeXBpbmdQYXVzZWQ6ZnVuY3Rpb24odCxzKXt9LG9uVHlwaW5nUmVzdW1lZDpmdW5jdGlvbih0LHMpe30sb25SZXNldDpmdW5jdGlvbih0KXt9LG9uU3RvcDpmdW5jdGlvbih0LHMpe30sb25TdGFydDpmdW5jdGlvbih0LHMpe30sb25EZXN0cm95OmZ1bmN0aW9uKHQpe319LGU9bmV3KC8qI19fUFVSRV9fKi9mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt9dmFyIG49ZS5wcm90b3R5cGU7cmV0dXJuIG4ubG9hZD1mdW5jdGlvbihlLG4saSl7aWYoZS5lbD1cInN0cmluZ1wiPT10eXBlb2YgaT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGkpOmksZS5vcHRpb25zPXQoe30scyxuKSxlLmlzSW5wdXQ9XCJpbnB1dFwiPT09ZS5lbC50YWdOYW1lLnRvTG93ZXJDYXNlKCksZS5hdHRyPWUub3B0aW9ucy5hdHRyLGUuYmluZElucHV0Rm9jdXNFdmVudHM9ZS5vcHRpb25zLmJpbmRJbnB1dEZvY3VzRXZlbnRzLGUuc2hvd0N1cnNvcj0hZS5pc0lucHV0JiZlLm9wdGlvbnMuc2hvd0N1cnNvcixlLmN1cnNvckNoYXI9ZS5vcHRpb25zLmN1cnNvckNoYXIsZS5jdXJzb3JCbGlua2luZz0hMCxlLmVsQ29udGVudD1lLmF0dHI/ZS5lbC5nZXRBdHRyaWJ1dGUoZS5hdHRyKTplLmVsLnRleHRDb250ZW50LGUuY29udGVudFR5cGU9ZS5vcHRpb25zLmNvbnRlbnRUeXBlLGUudHlwZVNwZWVkPWUub3B0aW9ucy50eXBlU3BlZWQsZS5zdGFydERlbGF5PWUub3B0aW9ucy5zdGFydERlbGF5LGUuYmFja1NwZWVkPWUub3B0aW9ucy5iYWNrU3BlZWQsZS5zbWFydEJhY2tzcGFjZT1lLm9wdGlvbnMuc21hcnRCYWNrc3BhY2UsZS5iYWNrRGVsYXk9ZS5vcHRpb25zLmJhY2tEZWxheSxlLmZhZGVPdXQ9ZS5vcHRpb25zLmZhZGVPdXQsZS5mYWRlT3V0Q2xhc3M9ZS5vcHRpb25zLmZhZGVPdXRDbGFzcyxlLmZhZGVPdXREZWxheT1lLm9wdGlvbnMuZmFkZU91dERlbGF5LGUuaXNQYXVzZWQ9ITEsZS5zdHJpbmdzPWUub3B0aW9ucy5zdHJpbmdzLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdC50cmltKCl9KSxlLnN0cmluZ3NFbGVtZW50PVwic3RyaW5nXCI9PXR5cGVvZiBlLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQ/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQpOmUub3B0aW9ucy5zdHJpbmdzRWxlbWVudCxlLnN0cmluZ3NFbGVtZW50KXtlLnN0cmluZ3M9W10sZS5zdHJpbmdzRWxlbWVudC5zdHlsZS5jc3NUZXh0PVwiY2xpcDogcmVjdCgwIDAgMCAwKTtjbGlwLXBhdGg6aW5zZXQoNTAlKTtoZWlnaHQ6MXB4O292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjphYnNvbHV0ZTt3aGl0ZS1zcGFjZTpub3dyYXA7d2lkdGg6MXB4O1wiO3ZhciByPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlLnN0cmluZ3NFbGVtZW50LmNoaWxkcmVuKSxvPXIubGVuZ3RoO2lmKG8pZm9yKHZhciBhPTA7YTxvO2ErPTEpZS5zdHJpbmdzLnB1c2goclthXS5pbm5lckhUTUwudHJpbSgpKX1mb3IodmFyIHUgaW4gZS5zdHJQb3M9MCxlLmN1cnJlbnRFbENvbnRlbnQ9dGhpcy5nZXRDdXJyZW50RWxDb250ZW50KGUpLGUuY3VycmVudEVsQ29udGVudCYmZS5jdXJyZW50RWxDb250ZW50Lmxlbmd0aD4wJiYoZS5zdHJQb3M9ZS5jdXJyZW50RWxDb250ZW50Lmxlbmd0aC0xLGUuc3RyaW5ncy51bnNoaWZ0KGUuY3VycmVudEVsQ29udGVudCkpLGUuc2VxdWVuY2U9W10sZS5zdHJpbmdzKWUuc2VxdWVuY2VbdV09dTtlLmFycmF5UG9zPTAsZS5zdG9wTnVtPTAsZS5sb29wPWUub3B0aW9ucy5sb29wLGUubG9vcENvdW50PWUub3B0aW9ucy5sb29wQ291bnQsZS5jdXJMb29wPTAsZS5zaHVmZmxlPWUub3B0aW9ucy5zaHVmZmxlLGUucGF1c2U9e3N0YXR1czohMSx0eXBld3JpdGU6ITAsY3VyU3RyaW5nOlwiXCIsY3VyU3RyUG9zOjB9LGUudHlwaW5nQ29tcGxldGU9ITEsZS5hdXRvSW5zZXJ0Q3NzPWUub3B0aW9ucy5hdXRvSW5zZXJ0Q3NzLGUuYXV0b0luc2VydENzcyYmKHRoaXMuYXBwZW5kQ3Vyc29yQW5pbWF0aW9uQ3NzKGUpLHRoaXMuYXBwZW5kRmFkZU91dEFuaW1hdGlvbkNzcyhlKSl9LG4uZ2V0Q3VycmVudEVsQ29udGVudD1mdW5jdGlvbih0KXtyZXR1cm4gdC5hdHRyP3QuZWwuZ2V0QXR0cmlidXRlKHQuYXR0cik6dC5pc0lucHV0P3QuZWwudmFsdWU6XCJodG1sXCI9PT10LmNvbnRlbnRUeXBlP3QuZWwuaW5uZXJIVE1MOnQuZWwudGV4dENvbnRlbnR9LG4uYXBwZW5kQ3Vyc29yQW5pbWF0aW9uQ3NzPWZ1bmN0aW9uKHQpe3ZhciBzPVwiZGF0YS10eXBlZC1qcy1jdXJzb3ItY3NzXCI7aWYodC5zaG93Q3Vyc29yJiYhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltcIitzK1wiXVwiKSl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2Uuc2V0QXR0cmlidXRlKHMsXCJ0cnVlXCIpLGUuaW5uZXJIVE1MPVwiXFxuICAgICAgICAudHlwZWQtY3Vyc29ye1xcbiAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnR5cGVkLWN1cnNvci50eXBlZC1jdXJzb3ItLWJsaW5re1xcbiAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBrZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgIH1cXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgIH1cXG4gICAgICBcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpfX0sbi5hcHBlbmRGYWRlT3V0QW5pbWF0aW9uQ3NzPWZ1bmN0aW9uKHQpe3ZhciBzPVwiZGF0YS10eXBlZC1mYWRlb3V0LWpzLWNzc1wiO2lmKHQuZmFkZU91dCYmIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbXCIrcytcIl1cIikpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtlLnNldEF0dHJpYnV0ZShzLFwidHJ1ZVwiKSxlLmlubmVySFRNTD1cIlxcbiAgICAgICAgLnR5cGVkLWZhZGUtb3V0e1xcbiAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXM7XFxuICAgICAgICB9XFxuICAgICAgICAudHlwZWQtY3Vyc29yLnR5cGVkLWN1cnNvci0tYmxpbmsudHlwZWQtZmFkZS1vdXR7XFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAwO1xcbiAgICAgICAgICBhbmltYXRpb246IDA7XFxuICAgICAgICB9XFxuICAgICAgXCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKX19LGV9KCkpLG49bmV3KC8qI19fUFVSRV9fKi9mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9dmFyIHM9dC5wcm90b3R5cGU7cmV0dXJuIHMudHlwZUh0bWxDaGFycz1mdW5jdGlvbih0LHMsZSl7aWYoXCJodG1sXCIhPT1lLmNvbnRlbnRUeXBlKXJldHVybiBzO3ZhciBuPXQuc3Vic3RyaW5nKHMpLmNoYXJBdCgwKTtpZihcIjxcIj09PW58fFwiJlwiPT09bil7dmFyIGk7Zm9yKGk9XCI8XCI9PT1uP1wiPlwiOlwiO1wiO3Quc3Vic3RyaW5nKHMrMSkuY2hhckF0KDApIT09aSYmISgxKyArK3M+dC5sZW5ndGgpOyk7cysrfXJldHVybiBzfSxzLmJhY2tTcGFjZUh0bWxDaGFycz1mdW5jdGlvbih0LHMsZSl7aWYoXCJodG1sXCIhPT1lLmNvbnRlbnRUeXBlKXJldHVybiBzO3ZhciBuPXQuc3Vic3RyaW5nKHMpLmNoYXJBdCgwKTtpZihcIj5cIj09PW58fFwiO1wiPT09bil7dmFyIGk7Zm9yKGk9XCI+XCI9PT1uP1wiPFwiOlwiJlwiO3Quc3Vic3RyaW5nKHMtMSkuY2hhckF0KDApIT09aSYmISgtLXM8MCk7KTtzLS19cmV0dXJuIHN9LHR9KCkpLGk9LyojX19QVVJFX18qL2Z1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LHMpe2UubG9hZCh0aGlzLHMsdCksdGhpcy5iZWdpbigpfXZhciBzPXQucHJvdG90eXBlO3JldHVybiBzLnRvZ2dsZT1mdW5jdGlvbigpe3RoaXMucGF1c2Uuc3RhdHVzP3RoaXMuc3RhcnQoKTp0aGlzLnN0b3AoKX0scy5zdG9wPWZ1bmN0aW9uKCl7dGhpcy50eXBpbmdDb21wbGV0ZXx8dGhpcy5wYXVzZS5zdGF0dXN8fCh0aGlzLnRvZ2dsZUJsaW5raW5nKCEwKSx0aGlzLnBhdXNlLnN0YXR1cz0hMCx0aGlzLm9wdGlvbnMub25TdG9wKHRoaXMuYXJyYXlQb3MsdGhpcykpfSxzLnN0YXJ0PWZ1bmN0aW9uKCl7dGhpcy50eXBpbmdDb21wbGV0ZXx8dGhpcy5wYXVzZS5zdGF0dXMmJih0aGlzLnBhdXNlLnN0YXR1cz0hMSx0aGlzLnBhdXNlLnR5cGV3cml0ZT90aGlzLnR5cGV3cml0ZSh0aGlzLnBhdXNlLmN1clN0cmluZyx0aGlzLnBhdXNlLmN1clN0clBvcyk6dGhpcy5iYWNrc3BhY2UodGhpcy5wYXVzZS5jdXJTdHJpbmcsdGhpcy5wYXVzZS5jdXJTdHJQb3MpLHRoaXMub3B0aW9ucy5vblN0YXJ0KHRoaXMuYXJyYXlQb3MsdGhpcykpfSxzLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLnJlc2V0KCExKSx0aGlzLm9wdGlvbnMub25EZXN0cm95KHRoaXMpfSxzLnJlc2V0PWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PSEwKSxjbGVhckludGVydmFsKHRoaXMudGltZW91dCksdGhpcy5yZXBsYWNlVGV4dChcIlwiKSx0aGlzLmN1cnNvciYmdGhpcy5jdXJzb3IucGFyZW50Tm9kZSYmKHRoaXMuY3Vyc29yLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jdXJzb3IpLHRoaXMuY3Vyc29yPW51bGwpLHRoaXMuc3RyUG9zPTAsdGhpcy5hcnJheVBvcz0wLHRoaXMuY3VyTG9vcD0wLHQmJih0aGlzLmluc2VydEN1cnNvcigpLHRoaXMub3B0aW9ucy5vblJlc2V0KHRoaXMpLHRoaXMuYmVnaW4oKSl9LHMuYmVnaW49ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMub3B0aW9ucy5vbkJlZ2luKHRoaXMpLHRoaXMudHlwaW5nQ29tcGxldGU9ITEsdGhpcy5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkKHRoaXMpLHRoaXMuaW5zZXJ0Q3Vyc29yKCksdGhpcy5iaW5kSW5wdXRGb2N1c0V2ZW50cyYmdGhpcy5iaW5kRm9jdXNFdmVudHMoKSx0aGlzLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpezA9PT10LnN0clBvcz90LnR5cGV3cml0ZSh0LnN0cmluZ3NbdC5zZXF1ZW5jZVt0LmFycmF5UG9zXV0sdC5zdHJQb3MpOnQuYmFja3NwYWNlKHQuc3RyaW5nc1t0LnNlcXVlbmNlW3QuYXJyYXlQb3NdXSx0LnN0clBvcyl9LHRoaXMuc3RhcnREZWxheSl9LHMudHlwZXdyaXRlPWZ1bmN0aW9uKHQscyl7dmFyIGU9dGhpczt0aGlzLmZhZGVPdXQmJnRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZmFkZU91dENsYXNzKSYmKHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcyksdGhpcy5jdXJzb3ImJnRoaXMuY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5mYWRlT3V0Q2xhc3MpKTt2YXIgaT10aGlzLmh1bWFuaXplcih0aGlzLnR5cGVTcGVlZCkscj0xOyEwIT09dGhpcy5wYXVzZS5zdGF0dXM/dGhpcy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtzPW4udHlwZUh0bWxDaGFycyh0LHMsZSk7dmFyIGk9MCxvPXQuc3Vic3RyaW5nKHMpO2lmKFwiXlwiPT09by5jaGFyQXQoMCkmJi9eXFxeXFxkKy8udGVzdChvKSl7dmFyIGE9MTthKz0obz0vXFxkKy8uZXhlYyhvKVswXSkubGVuZ3RoLGk9cGFyc2VJbnQobyksZS50ZW1wb3JhcnlQYXVzZT0hMCxlLm9wdGlvbnMub25UeXBpbmdQYXVzZWQoZS5hcnJheVBvcyxlKSx0PXQuc3Vic3RyaW5nKDAscykrdC5zdWJzdHJpbmcocythKSxlLnRvZ2dsZUJsaW5raW5nKCEwKX1pZihcImBcIj09PW8uY2hhckF0KDApKXtmb3IoO1wiYFwiIT09dC5zdWJzdHJpbmcocytyKS5jaGFyQXQoMCkmJihyKyssIShzK3I+dC5sZW5ndGgpKTspO3ZhciB1PXQuc3Vic3RyaW5nKDAscykscD10LnN1YnN0cmluZyh1Lmxlbmd0aCsxLHMrciksYz10LnN1YnN0cmluZyhzK3IrMSk7dD11K3ArYyxyLS19ZS50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLnRvZ2dsZUJsaW5raW5nKCExKSxzPj10Lmxlbmd0aD9lLmRvbmVUeXBpbmcodCxzKTplLmtlZXBUeXBpbmcodCxzLHIpLGUudGVtcG9yYXJ5UGF1c2UmJihlLnRlbXBvcmFyeVBhdXNlPSExLGUub3B0aW9ucy5vblR5cGluZ1Jlc3VtZWQoZS5hcnJheVBvcyxlKSl9LGkpfSxpKTp0aGlzLnNldFBhdXNlU3RhdHVzKHQscywhMCl9LHMua2VlcFR5cGluZz1mdW5jdGlvbih0LHMsZSl7MD09PXMmJih0aGlzLnRvZ2dsZUJsaW5raW5nKCExKSx0aGlzLm9wdGlvbnMucHJlU3RyaW5nVHlwZWQodGhpcy5hcnJheVBvcyx0aGlzKSk7dmFyIG49dC5zdWJzdHJpbmcoMCxzKz1lKTt0aGlzLnJlcGxhY2VUZXh0KG4pLHRoaXMudHlwZXdyaXRlKHQscyl9LHMuZG9uZVR5cGluZz1mdW5jdGlvbih0LHMpe3ZhciBlPXRoaXM7dGhpcy5vcHRpb25zLm9uU3RyaW5nVHlwZWQodGhpcy5hcnJheVBvcyx0aGlzKSx0aGlzLnRvZ2dsZUJsaW5raW5nKCEwKSx0aGlzLmFycmF5UG9zPT09dGhpcy5zdHJpbmdzLmxlbmd0aC0xJiYodGhpcy5jb21wbGV0ZSgpLCExPT09dGhpcy5sb29wfHx0aGlzLmN1ckxvb3A9PT10aGlzLmxvb3BDb3VudCl8fCh0aGlzLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2UuYmFja3NwYWNlKHQscyl9LHRoaXMuYmFja0RlbGF5KSl9LHMuYmFja3NwYWNlPWZ1bmN0aW9uKHQscyl7dmFyIGU9dGhpcztpZighMCE9PXRoaXMucGF1c2Uuc3RhdHVzKXtpZih0aGlzLmZhZGVPdXQpcmV0dXJuIHRoaXMuaW5pdEZhZGVPdXQoKTt0aGlzLnRvZ2dsZUJsaW5raW5nKCExKTt2YXIgaT10aGlzLmh1bWFuaXplcih0aGlzLmJhY2tTcGVlZCk7dGhpcy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtzPW4uYmFja1NwYWNlSHRtbENoYXJzKHQscyxlKTt2YXIgaT10LnN1YnN0cmluZygwLHMpO2lmKGUucmVwbGFjZVRleHQoaSksZS5zbWFydEJhY2tzcGFjZSl7dmFyIHI9ZS5zdHJpbmdzW2UuYXJyYXlQb3MrMV07ZS5zdG9wTnVtPXImJmk9PT1yLnN1YnN0cmluZygwLHMpP3M6MH1zPmUuc3RvcE51bT8ocy0tLGUuYmFja3NwYWNlKHQscykpOnM8PWUuc3RvcE51bSYmKGUuYXJyYXlQb3MrKyxlLmFycmF5UG9zPT09ZS5zdHJpbmdzLmxlbmd0aD8oZS5hcnJheVBvcz0wLGUub3B0aW9ucy5vbkxhc3RTdHJpbmdCYWNrc3BhY2VkKCksZS5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkKCksZS5iZWdpbigpKTplLnR5cGV3cml0ZShlLnN0cmluZ3NbZS5zZXF1ZW5jZVtlLmFycmF5UG9zXV0scykpfSxpKX1lbHNlIHRoaXMuc2V0UGF1c2VTdGF0dXModCxzLCExKX0scy5jb21wbGV0ZT1mdW5jdGlvbigpe3RoaXMub3B0aW9ucy5vbkNvbXBsZXRlKHRoaXMpLHRoaXMubG9vcD90aGlzLmN1ckxvb3ArKzp0aGlzLnR5cGluZ0NvbXBsZXRlPSEwfSxzLnNldFBhdXNlU3RhdHVzPWZ1bmN0aW9uKHQscyxlKXt0aGlzLnBhdXNlLnR5cGV3cml0ZT1lLHRoaXMucGF1c2UuY3VyU3RyaW5nPXQsdGhpcy5wYXVzZS5jdXJTdHJQb3M9c30scy50b2dnbGVCbGlua2luZz1mdW5jdGlvbih0KXt0aGlzLmN1cnNvciYmKHRoaXMucGF1c2Uuc3RhdHVzfHx0aGlzLmN1cnNvckJsaW5raW5nIT09dCYmKHRoaXMuY3Vyc29yQmxpbmtpbmc9dCx0P3RoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoXCJ0eXBlZC1jdXJzb3ItLWJsaW5rXCIpOnRoaXMuY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUoXCJ0eXBlZC1jdXJzb3ItLWJsaW5rXCIpKSl9LHMuaHVtYW5pemVyPWZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqdC8yKSt0fSxzLnNodWZmbGVTdHJpbmdzSWZOZWVkZWQ9ZnVuY3Rpb24oKXt0aGlzLnNodWZmbGUmJih0aGlzLnNlcXVlbmNlPXRoaXMuc2VxdWVuY2Uuc29ydChmdW5jdGlvbigpe3JldHVybiBNYXRoLnJhbmRvbSgpLS41fSkpfSxzLmluaXRGYWRlT3V0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyZXR1cm4gdGhpcy5lbC5jbGFzc05hbWUrPVwiIFwiK3RoaXMuZmFkZU91dENsYXNzLHRoaXMuY3Vyc29yJiYodGhpcy5jdXJzb3IuY2xhc3NOYW1lKz1cIiBcIit0aGlzLmZhZGVPdXRDbGFzcyksc2V0VGltZW91dChmdW5jdGlvbigpe3QuYXJyYXlQb3MrKyx0LnJlcGxhY2VUZXh0KFwiXCIpLHQuc3RyaW5ncy5sZW5ndGg+dC5hcnJheVBvcz90LnR5cGV3cml0ZSh0LnN0cmluZ3NbdC5zZXF1ZW5jZVt0LmFycmF5UG9zXV0sMCk6KHQudHlwZXdyaXRlKHQuc3RyaW5nc1swXSwwKSx0LmFycmF5UG9zPTApfSx0aGlzLmZhZGVPdXREZWxheSl9LHMucmVwbGFjZVRleHQ9ZnVuY3Rpb24odCl7dGhpcy5hdHRyP3RoaXMuZWwuc2V0QXR0cmlidXRlKHRoaXMuYXR0cix0KTp0aGlzLmlzSW5wdXQ/dGhpcy5lbC52YWx1ZT10OlwiaHRtbFwiPT09dGhpcy5jb250ZW50VHlwZT90aGlzLmVsLmlubmVySFRNTD10OnRoaXMuZWwudGV4dENvbnRlbnQ9dH0scy5iaW5kRm9jdXNFdmVudHM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuaXNJbnB1dCYmKHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsZnVuY3Rpb24ocyl7dC5zdG9wKCl9KSx0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsZnVuY3Rpb24ocyl7dC5lbC52YWx1ZSYmMCE9PXQuZWwudmFsdWUubGVuZ3RofHx0LnN0YXJ0KCl9KSl9LHMuaW5zZXJ0Q3Vyc29yPWZ1bmN0aW9uKCl7dGhpcy5zaG93Q3Vyc29yJiYodGhpcy5jdXJzb3J8fCh0aGlzLmN1cnNvcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSx0aGlzLmN1cnNvci5jbGFzc05hbWU9XCJ0eXBlZC1jdXJzb3JcIix0aGlzLmN1cnNvci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCEwKSx0aGlzLmN1cnNvci5pbm5lckhUTUw9dGhpcy5jdXJzb3JDaGFyLHRoaXMuZWwucGFyZW50Tm9kZSYmdGhpcy5lbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmN1cnNvcix0aGlzLmVsLm5leHRTaWJsaW5nKSkpfSx0fSgpO2V4cG9ydHtpIGFzIGRlZmF1bHR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHlwZWQubW9kdWxlLmpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2Nzcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBzZXR1cFBhZ2UgZnJvbSBcIi4vc2V0dXBcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuaW1wb3J0IGFib3V0IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbi8vIHNldHMgdXAgdGhlIGhlYWRlciBhbmQgZm9vdGVyIGFuZCB0aGVuIGxvYWRzIHRoZSBob21lIHBhZ2VcbnNldHVwUGFnZSgpO1xuSG9tZVBhZ2UoKTtcblxuY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1ib3g6bnRoLW9mLXR5cGUoMSlcIik7XG5jb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1ib3g6bnRoLW9mLXR5cGUoMilcIik7XG5jb25zdCBwcm9qZWN0c0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1ib3g6bnRoLW9mLXR5cGUoMylcIik7XG5jb25zdCByZXN1bWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYm94Om50aC1vZi10eXBlKDQpXCIpO1xuXG4vLyBsaW5rcyBpZiBuYXZiYXIgc3dpdGNoZXMgdG8gaGFtYnVyZ2VyIG1lbnVcbmNvbnN0IG1vYmlsZUhvbWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XCIuaGFtYnVyZ2VyLW1lbnUgPiBhOm50aC1vZi10eXBlKDEpXCIsXG4pO1xuY29uc3QgbW9iaWxlQWJvdXRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XCIuaGFtYnVyZ2VyLW1lbnUgPiBhOm50aC1vZi10eXBlKDIpXCIsXG4pO1xuY29uc3QgbW9iaWxlUHJvamVjdHNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XCIuaGFtYnVyZ2VyLW1lbnUgPiBhOm50aC1vZi10eXBlKDMpXCIsXG4pO1xuY29uc3QgbW9iaWxlUmVzdW1lTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFwiLmhhbWJ1cmdlci1tZW51ID4gYTpudGgtb2YtdHlwZSg0KVwiLFxuKTtcblxuLy8gbG9nb1xuY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nby1ib3hcIik7XG5cbmhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdEhvbWVQYWdlKCk7XG59KTtcblxubW9iaWxlSG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0SG9tZVBhZ2UoKTtcbn0pO1xuXG4vLyBpZiBjbGlja2VkIG9uIGxvZ28sIGxvYWQgaG9tZSBwYWdlXG5sb2dvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdEhvbWVQYWdlKCk7XG59KTtcblxuYWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGFib3V0KCk7XG59KTtcblxubW9iaWxlQWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGFib3V0KCk7XG59KTtcblxucHJvamVjdHNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdHByb2plY3QoKTtcbn0pO1xuXG5tb2JpbGVQcm9qZWN0c0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0cHJvamVjdCgpO1xufSk7XG5cbnJlc3VtZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0d2luZG93Lm9wZW4oXG5cdFx0XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4Q1pTbTRLM3RjN19ocUhoeklxUU1zNkVfQ3otNnFVZy92aWV3P3VzcD1zaGFyaW5nXCIsXG5cdCk7XG59KTtcblxubW9iaWxlUmVzdW1lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHR3aW5kb3cub3Blbihcblx0XHRcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhDWlNtNEszdGM3X2hxSGh6SXFRTXM2RV9Dei02cVVnL3ZpZXc/dXNwPXNoYXJpbmdcIixcblx0KTtcbn0pO1xuIl0sIm5hbWVzIjpbIlNoYWhpciIsIkdpdFNvY2lhbCIsIkxpbmtlZCIsIkRvY2tlciIsIlNxbCIsIkVjbGlwc2UiLCJMdWEiLCJWdWUiLCJDeXByZXNzIiwiVnNjb2RlIiwiQyIsIk5wbSIsIkJhYmVsIiwiUHJldHRpZXIiLCJFc2xpbnQiLCJXZWJwYWNrIiwiSmVzdCIsIkdpdCIsIlB5dGhvbiIsIkphdmEiLCJMaW51eCIsIkh0bWwiLCJDc3MiLCJKcyIsImNyZWF0ZUNhcm91c2VsSXRlbSIsImltYWdlIiwidGl0bGUiLCJjYXJvdXNlbEl0ZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYXJvdXNlbEltYWdlIiwic3JjIiwiYWx0IiwiY2Fyb3VzZWxUaXRsZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJidXR0b25zIiwiY2Fyb3VzZWwiLCJxdWVyeVNlbGVjdG9yIiwiYmFja0J0biIsImZvcndhcmRCdG4iLCJpc1Njcm9sbGluZyIsInNjcm9sbERpcmVjdGlvbiIsInNjcm9sbFN0ZXAiLCJhbmltYXRlU2Nyb2xsIiwic2Nyb2xsRGlzdGFuY2UiLCJzY3JvbGxMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJzY3JvbGxXaWR0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFJpZ2h0Iiwic3RvcFNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsImFib3V0IiwiYWJvdXRQYWdlIiwiYWJvdXRDb250YWluZXIiLCJhYm91dFRleHRDb250YWluZXIiLCJhYm91dE1lIiwiYWJvdXRNZVNwYW4iLCJhYm91dE1lRGl2IiwiYWJvdXRNZVRleHREaXYiLCJwYXJhZ3JhcGgiLCJhYm91dE1lVGV4dCIsImFib3V0TWVUZXh0MiIsImFib3V0TWVUZXh0MyIsImFib3V0TWVUZXh0NCIsInNvY2lhbEljb25zIiwiZ2l0TGluayIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJnaXRTb2NpYWwiLCJsaW5rZWRMaW5rIiwibGlua2VkIiwicGljdHVyZSIsInNlY29uZERpdiIsInNlY29uZERpdlRleHQiLCJoaWdobGlnaHQiLCJhbmQiLCJjcmVhdGVUZXh0Tm9kZSIsImhpZ2hsaWdodFRleHQiLCJzZW50ZW5jZSIsInRleHQiLCJjYXJvdXNlbENvbnRhaW5lciIsImNhcm91c2VsRGl2IiwiY2Fyb3VzZWxJdGVtcyIsImNhcm91c2VsSXRlbTEiLCJjYXJvdXNlbEl0ZW0yIiwiY2Fyb3VzZWxJdGVtMyIsImNhcm91c2VsSXRlbTQiLCJjYXJvdXNlbEl0ZW01IiwiY2Fyb3VzZWxJdGVtNiIsImNhcm91c2VsSXRlbTciLCJjYXJvdXNlbEl0ZW04IiwiY2Fyb3VzZWxJdGVtOSIsImNhcm91c2VsSXRlbTEwIiwiY2Fyb3VzZWxJdGVtMTEiLCJjYXJvdXNlbEl0ZW0xMiIsImNhcm91c2VsSXRlbTEzIiwiY2Fyb3VzZWxJdGVtMTQiLCJjYXJvdXNlbEl0ZW0xNSIsImNhcm91c2VsSXRlbTE2IiwiY2Fyb3VzZWxJdGVtMTciLCJjYXJvdXNlbEl0ZW0xOCIsImNhcm91c2VsSXRlbTE5IiwiY2Fyb3VzZWxJdGVtMjAiLCJjYXJvdXNlbEl0ZW0yMSIsIm1haW4iLCJpbm5lckhUTUwiLCJUeXBlZCIsIkNvbXB1dGVyIiwiSGFuZCIsIkhhY2tlciIsImR5bmFtaWNUZXh0IiwidHlwZWQiLCJzdHJpbmdzIiwidHlwZVNwZWVkIiwiYmFja1NwZWVkIiwic3RhcnREZWxheSIsImJhY2tEZWxheSIsImxvb3AiLCJzaG93Q3Vyc29yIiwiY3Vyc29yQ2hhciIsImF0dHIiLCJhdXRvSW5zZXJ0Q3NzIiwiY29udGVudFR5cGUiLCJIb21lUGFnZSIsIm1haW5Db250YWluZXIiLCJmaXJzdEJsb2NrSG9tZSIsInRleHRDb250YWluZXIiLCJzdWJUZXh0Q29udGFpbmVyIiwiZmlyc3RUZXh0Q29udGFpbmVyIiwiZmlyc3RUZXh0Iiwid2F2ZSIsInNlY29uZFRleHRDb250YWluZXIiLCJzZWNvbmRUZXh0IiwibmFtZSIsInR5cGVkVGV4dENvbnRhaW5lciIsInR5cGVkVGV4dCIsImlkIiwiaW1hZ2VDb250YWluZXIiLCJzZWNvbmRCbG9ja0hvbWUiLCJzZWNvbmRCbG9ja1RleHRDb250YWluZXIiLCJ0ZXh0RGl2Iiwic3BhbiIsInN1YkRpdiIsInN1YlRleHRBZnRlckhpZ2hsaWdodCIsInN1YlRleHQiLCJzdWJzdWJUZXh0IiwiaGFja2VyIiwic29jaWFsQmxvY2siLCJzb2NpYWxUZXh0RGl2Iiwic29jaWFsVGV4dCIsInRleHRCZWZvcmUiLCJ0ZXh0QWZ0ZXIiLCJzcGFuQ29udGVudCIsInNvY2lhbFN1YlRleHQiLCJUb2RvIiwiQmF0dGxlc2hpcCIsIldlYXRoZXIiLCJUaWN0YWMiLCJDYWxjdWxhdG9yIiwiUmVzdGF1cmFudCIsIkV0Y2giLCJjcmVhdGVQcm9qZWN0SXRlbSIsImRlc2NyaXB0aW9uIiwibGl2ZURlbW8iLCJzb3VyY2VDb2RlIiwicHJvamVjdEl0ZW0iLCJwcm9qZWN0SW1hZ2UiLCJwcm9qZWN0SXRlbURpdiIsInByb2plY3RUaXRsZSIsInByb2plY3REZXNjcmlwdGlvbiIsInByb2plY3RMaW5rRGl2IiwicHJvamVjdExpdmVEZW1vIiwicHJvamVjdFNvdXJjZUNvZGUiLCJwcm9qZWN0IiwicHJvamVjdERpdiIsInByb2plY3RDb250YWluZXIiLCJ0b2RvIiwiYmF0dGxlc2hpcCIsIndlYXRoZXIiLCJ0aWN0YWMiLCJjYWxjdWxhdG9yIiwicmVzdGF1cmFudCIsImV0Y2giLCJJY29uIiwiSG9tZSIsIkFib3V0IiwiQ29kZSIsIkRvYyIsIkdpdEh1YiIsImhhbWJ1cmdlckltZyIsImNyZWF0ZU5hdkJhciIsImJhciIsImxvZ0NvbnRhaW5lciIsImxvZ29Cb3giLCJsb2dvIiwibG9nb0xpbmsiLCJsb2dvVGV4dCIsImxvZ29MaW5rMiIsIm5hdkxpbmtzIiwiaG9tZUJveCIsImhvbWVMaW5rIiwiaG9tZUljb24iLCJtZW51TGlua2JveCIsIm1lbnVMaW5rIiwibWVudUljb24iLCJjb250YWN0TGlua2JveCIsImNvbnRhY3RMaW5rIiwiY29udGFjdEljb24iLCJBYm91dExpbmtib3giLCJBYm91dExpbmsiLCJBYm91dEljb24iLCJoYW1idXJnZXIiLCJoYW1idXJnZXJJY29uIiwiaGFtYnVyZ2VyTWVudSIsImhhbWJ1cmdlck1lbnVIb21lIiwiaGFtYnVyZ2VyTWVudUFib3V0IiwiaGFtYnVyZ2VyTWVudVByb2plY3RzIiwiaGFtYnVyZ2VyTWVudVJlc3VtZSIsImNvbnRlbnQiLCJjcmVhdGVGb290ZXIiLCJmb290ZXIiLCJnaXRIdWJQcm9maWxlIiwiZ2l0SHViUHJvZmlsZUltZyIsImdpdEh1YlByb2ZpbGVUZXh0IiwiYXRTeW1ib2wiLCJ1c2VybmFtZSIsInNlcGVyYXRvciIsImdpdEh1YlJlcG8iLCJzZXR1cFBhZ2UiLCJ3aW5kb3ciLCJuYXZCYXIiLCJzY3JvbGxZIiwicmVtb3ZlIiwiY29udGFpbnMiLCJhYm91dExpbmsiLCJwcm9qZWN0c0xpbmsiLCJyZXN1bWVMaW5rIiwibW9iaWxlSG9tZUxpbmsiLCJtb2JpbGVBYm91dExpbmsiLCJtb2JpbGVQcm9qZWN0c0xpbmsiLCJtb2JpbGVSZXN1bWVMaW5rIiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=