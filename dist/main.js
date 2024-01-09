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

  // add event listeners to the buttons
  backBtn.addEventListener("mouseenter", scrollLeft); // Scroll left on mouse enter
  backBtn.addEventListener("mouseleave", stopScroll); // Stop scrolling on mouse leave
  backBtn.addEventListener("click", scrollLeft); // Scroll left on click
  forwardBtn.addEventListener("mouseenter", scrollRight); // Scroll right on mouse enter
  forwardBtn.addEventListener("mouseleave", stopScroll); // Stop scrolling on mouse leave
  forwardBtn.addEventListener("click", scrollRight); // Scroll right on click
}
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
  buttons();
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
  dynamicText();
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
  createNavBar();
  var mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  document.querySelector("div#content").appendChild(mainContainer);
  createFooter();
  window.addEventListener("scroll", function () {
    var navBar = document.querySelector(".nav-bar");
    if (window.scrollY > 0) {
      navBar.classList.add("nav-bar-scrolled");
    } else {
      navBar.classList.remove("nav-bar-scrolled");
    }
  });

  // hamburger menu
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
	backdrop-filter: blur(10px); /* Adjust the blur value as needed */
	background-color: rgba(
		79,
		209,
		197,
		0.15
	); /* RGBA color for translucent teal */
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
	height: 2.5rem;
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
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	justify-items: center;
}

.about-me-picture {
	width: 75%;
	height: auto;
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

@media (max-width: 500px) {
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
		position: fixed;
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
		position: fixed;
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
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n\tcolor: #e0e0e0;\n\tbackground-color: #000000;\n\tbackground-image: url(../img/background.jpg);\n\tbackground-size: contain !important;\n\tbackground-repeat: no-repeat !important;\n\tfont-family: sans-serif;\n}\n\ndiv#content {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.nav-bar {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1.5rem 3rem;\n\ttransition: all 0.3s ease;\n\tz-index: 999;\n\tbackground-color: transparent; /* No background initially */\n\tbackdrop-filter: blur(0); /* No blur initially */\n\tbox-shadow:\n\t\t0 4px 6px -1px rgba(0, 0, 0, 0.1),\n\t\t0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.nav-bar-scrolled {\n\tbackdrop-filter: blur(10px); /* Adjust the blur value as needed */\n\tbackground-color: rgba(\n\t\t79,\n\t\t209,\n\t\t197,\n\t\t0.15\n\t); /* RGBA color for translucent teal */\n}\n\n.logo-box {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.logo-box img {\n\twidth: 3rem;\n\theight: auto;\n\tcursor: pointer;\n}\n\n.log-container:hover {\n\tcursor: pointer;\n}\n\n.logo-box a {\n\ttext-decoration: none;\n}\n\n.log-container:hover:after {\n\twidth: 100%;\n}\n\n.log-container:hover .logo-box a h1 {\n\tcolor: #ffffffff;\n}\n\n.log-container:hover .logo-box img {\n\tfilter: brightness(3);\n}\n\n.log-container:after {\n\tbackground: #4fd1c5;\n\tborder-radius: 16px;\n\tbottom: 1px;\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 5px;\n\tleft: 0;\n\tposition: relative;\n\ttransition: all 0.3s ease-out 0s;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.logo-box a h1 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcursor: pointer;\n\tmargin: 0;\n}\n\n.nav-links {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 2rem;\n}\n\n.nav-links a {\n\tcolor: #e0e0e0;\n\tfont-size: 1.5rem;\n\tfont-weight: 100;\n\ttext-decoration: none;\n}\n\n.nav-links a:hover {\n\tcolor: #ffffffff;\n}\n\n.nav-links .nav-box:hover {\n\tcursor: pointer;\n}\n\n.nav-links .nav-box:hover a {\n\tcolor: #ffffffff;\n}\n\n.nav-links .nav-box:hover img {\n\tfilter: brightness(3);\n}\n\n.nav-links .nav-box:hover:after {\n\twidth: 100%;\n}\n\n.nav-links .nav-box {\n\tposition: relative;\n}\n\n.nav-links .nav-box:after {\n\tbackground: #4fd1c5;\n\tborder-radius: 16px;\n\tbottom: -5px;\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 5px;\n\tleft: 0;\n\tposition: absolute;\n\ttransition: all 0.3s ease-out 0s;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.main-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 7rem;\n}\n\n.first-block-home {\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tpadding: 0 3rem;\n\tgap: 1rem;\n}\n\n.text-container {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.sub-text-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.image-container {\n\twidth: 75%;\n}\n\n.computer {\n\twidth: 100%;\n\theight: auto;\n}\n\n.first-text-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 1rem;\n}\n\n.typed-text-container {\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 2rem;\n}\n\n#typed-text {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcolor: #4fd1c5;\n}\n\n.typed-cursor {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcolor: #4fd1c5;\n\tanimation: blink 0.7s infinite;\n}\n\n.nav-box {\n\tpadding: 0.25rem 0rem;\n}\n\n.wave {\n\twidth: 2rem;\n\theight: auto;\n\tanimation-name: wave-animation;\n\tanimation-duration: 2.5s;\n\tanimation-iteration-count: infinite;\n\ttransform-origin: 70% 70%;\n\tdisplay: inline-block;\n\tfilter: brightness(0.9);\n}\n\n@keyframes wave-animation {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t10% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t20% {\n\t\ttransform: rotate(12deg);\n\t}\n\t30% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t40% {\n\t\ttransform: rotate(9deg);\n\t}\n\t50% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(0deg);\n\t}\n}\n\n.name {\n\tfont-size: 3rem;\n\tfont-weight: 700;\n\tcolor: #4fd1c5;\n}\n\n.nav-box {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tgap: 0.5rem;\n\talign-items: center;\n}\n\n.nav-box img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n.second-text-container h5 {\n\tmargin: 0;\n}\n\n.first-text-container h3 {\n\tfont-weight: 500;\n\tfont-size: 2rem;\n\tmargin: 0;\n}\n\n.second-text-container h5 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n}\n\n.second-block-home {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 0 3rem;\n\tmargin: 0 5rem;\n\tgap: 5rem;\n}\n\n.second-block-text-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tjustify-items: center;\n\talign-items: center;\n}\n\n.hacker {\n\twidth: 35%;\n\theight: auto;\n}\n\n.text-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 3rem;\n}\n\n.text-div h3 {\n\talign-self: center;\n\tfont-size: 1.9rem;\n\tmargin: 0;\n}\n\n.highlight,\n.text-div h3 span {\n\tcolor: #4fd1c5;\n}\n\n.sub-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.sub-text {\n\tfont-weight: 600;\n\tmargin: 0;\n}\n\n.social-icons img {\n\twidth: 2.5rem;\n\theight: auto;\n\tcursor: pointer;\n\ttransition: all 0.3s ease;\n\tborder-radius: 50%;\n}\n\n.social-icons img:hover {\n\tfilter: invert(1);\n\tbox-shadow: 0 4px 8px 0 rgba(79, 209, 197, 0.5);\n}\n\n.social-text-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n\talign-items: center;\n}\n\n.social-text-div h3 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n}\n\n.social-text-div * {\n\tmargin: 0;\n}\n\n.social-icons {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 2rem;\n}\n\n.social-sub-text {\n\tfont-size: 0.8rem;\n\tfont-weight: 550;\n}\n\n.social-block {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.social-sub-text span {\n\tcolor: #4fd1c5;\n}\n\n/* --------------------------------------- Footer ------------------------------------------------------- */\n\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n\theight: 2.5rem;\n\tmargin-top: 2rem;\n\tpadding: 0.25rem 3rem;\n\tbackground-color: #4fd1c5;\n}\n\nfooter a {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\ttext-decoration: none;\n\tfont-size: 1.3rem;\n\tfont-weight: 100;\n\tcolor: #fafafa;\n\ttransition: all 0.3s ease;\n}\n\nfooter p {\n\tmargin: 0.5rem 0;\n}\n\nfooter a:hover,\nfooter a:active {\n\tcolor: #b02e39;\n}\n\nfooter a img {\n\tborder-radius: 50%;\n\ttransition: all 0.3s ease;\n}\n\nfooter a:hover img,\nfooter a:active img {\n\tfilter: invert(1);\n\tbox-shadow: 0 4px 8px 0 rgba(79, 209, 197, 0.5);\n}\n\n.at-symbol {\n\tfont-weight: 900;\n}\n\nfooter img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n/* Styles the scrollbar track */\n::-webkit-scrollbar-track {\n\tbackground-color: #2c3e50; /* A darker shade for contrast */\n}\n\n/* Styles the scrollbar handle */\n::-webkit-scrollbar-thumb {\n\tbackground-color: #4fd1c5; /* The color you provided for the handle */\n\tborder-radius: 10px; /* Rounded corners for the handle */\n}\n\n/* Styles the scrollbar itself (including the track) */\n::-webkit-scrollbar {\n\twidth: 12px; /* Adjust to the size you prefer */\n}\n\n/* Optional: styles the scrollbar handle on hover */\n::-webkit-scrollbar-thumb:hover {\n\tbackground-color: #3a9d9b; /* A slightly darker shade of the handle color for hover */\n}\n\n/* Firefox */\nhtml {\n\tscrollbar-color: #4fd1c5 #2c3e50;\n\tscrollbar-width: thin; /* You can use 'auto' or 'thin' */\n}\n\n.about-page {\n\tpadding: 0rem 3rem;\n\tpadding-bottom: 2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5rem;\n}\n\n.about-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.about-text-container {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.about-me span {\n\tcolor: #4fd1c5;\n}\n\n.about-me-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tjustify-items: center;\n}\n\n.about-me-picture {\n\twidth: 75%;\n\theight: auto;\n}\n\n.about-me-text-div {\n\tfont-size: 1.1rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.about-me-text:nth-of-type(1) {\n\tmargin-top: 0.5rem;\n}\n\n/* --------------------------------------- End of Footer styles ------------------------------------------------------- */\n\n.carousel-item img {\n\twidth: 3rem;\n\theight: auto;\n}\n\n.second-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 3rem;\n\tpadding: 0 3rem;\n}\n\n.second-div-text {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 1rem;\n}\n\n.second-div-text p {\n\tfont-size: 2rem;\n\tmargin: 0;\n\tfont-weight: 900;\n}\n\n.carousel-div {\n\tdisplay: flex;\n\tborder: 3px solid #dddddd;\n\tborder-radius: 10px;\n}\n\n.back-btn,\n.forward-btn {\n\tfont-size: 2.5rem;\n\tcolor: #15202b;\n\tfont-weight: 900;\n\tbackground-color: #dddddd;\n\tborder: none;\n\tcursor: pointer;\n}\n\n.carousel {\n\tdisplay: flex;\n\toverflow-x: auto;\n\tgap: 2rem;\n\tpadding: 1rem;\n\ttransform: rotateX(180deg);\n\t-ms-transform: rotateX(180deg);\n\t-webkit-transform: rotateX(180deg);\n\tmargin-top: 0.2rem;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n}\n\n.carousel-item {\n\tmin-width: 7rem;\n\tmin-height: 10rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 1rem;\n\ttransform: rotateX(180deg);\n\t-ms-transform: rotateX(180deg);\n\t-webkit-transform: rotateX(180deg);\n\tborder: 1px solid #dddddd;\n\tborder-radius: 15px;\n\tbackground-color: #ffffff17;\n}\n\n.carousel-item p {\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.carousel-items {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 2rem;\n}\n\n/* Style the scrollbar */\n.carousel::-webkit-scrollbar {\n\twidth: 5px; /* Set the width of the scrollbar */\n\theight: 10px; /* Set the height of the scrollbar */\n}\n\n.carousel::-webkit-scrollbar-thumb {\n\tbackground-color: #4fd1c5; /* Color of the scrollbar thumb */\n\tborder-radius: 5px; /* Rounded corners for the scrollbar thumb */\n}\n\n.carousel::-webkit-scrollbar-thumb:hover {\n\tbackground-color: #4fd1c5; /* Color of the scrollbar thumb on hover */\n}\n\n.carousel::-webkit-scrollbar-track {\n\tbackground-color: transparent; /* Color of the scrollbar track */\n}\n\n.carousel::-webkit-scrollbar-corner {\n\tbackground-color: transparent; /* Color of the scrollbar corner */\n}\n\n.project-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n\tpadding: 0 3rem;\n}\n\n.project-div h1 {\n\tcolor: #4fd1c5;\n}\n\n.project-item img {\n\twidth: 100%;\n\theight: auto;\n}\n\n.project-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tgap: 2rem;\n}\n\n.project-item {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 2fr;\n\talign-items: center;\n\tgap: 2rem;\n\tpadding: 1rem;\n\tborder-radius: 10px;\n\tbackground-color: #ffffff17;\n\tborder: 1px solid #dddddd;\n}\n\n.project-link-div {\n\tdisplay: flex;\n\tgap: 1rem;\n}\n\n.project-link-div a {\n\ttext-decoration: none;\n\tcolor: #4fd1c5;\n\tfont-size: 1.5rem;\n\tfont-weight: 500;\n\tborder: 1px solid #4fd1c5;\n\tborder-radius: 10px;\n\tpadding: 0.5rem 1rem;\n\ttransition: all 0.3s ease;\n}\n\n.project-link-div a:hover {\n\tcolor: #e0e0e0;\n\tborder: 1px solid #e0e0e0;\n\tbackground-color: #4fd1c5;\n}\n\n.project-item-div p {\n\tfont-size: 1.1rem;\n\tfont-weight: 600;\n}\n\n/* ...existing styles */\n\n.hamburger-menu {\n\tdisplay: none;\n\ttransform-origin: top;\n}\n\n.hamburger {\n\tdisplay: none;\n}\n\n@media (max-width: 500px) {\n\t.second-block-home {\n\t\tmargin: 0;\n\t}\n\n\t.logo-box img {\n\t\twidth: 2.5rem;\n\t\theight: auto;\n\t}\n\n\t.logo-box a h1 {\n\t\tfont-size: 1.5rem;\n\t}\n\n\tdiv.hamburger-menu.inactive,\n\tdiv.hamburger-menu.active {\n\t\tmargin-top: 1.2rem;\n\t}\n\n\t.main-container {\n\t\tgap: 1rem;\n\t}\n\n\t.text-div {\n\t\tgap: 1rem;\n\t}\n\n\t.text-div h3 {\n\t\tfont-size: 1.25rem;\n\t}\n\n\t.about-container {\n\t\tgap: 0rem;\n\t}\n\n\t.about-me-div {\n\t\tgap: 1rem;\n\t}\n\n\t.second-div-text p {\n\t\tfont-size: 1.5rem;\n\t\ttext-align: center;\n\t}\n\n\t.second-div {\n\t\tpadding: 0rem;\n\t}\n\n\t.project-item {\n\t\tgrid-template-columns: 1fr;\n\t\tgap: 0rem;\n\t}\n\n\t.project-link-div {\n\t\tjustify-content: center;\n\t}\n}\n\n@media (max-width: 870px) {\n\t.hamburger {\n\t\tdisplay: block;\n\t}\n\n\t.hamburger img {\n\t\twidth: 2rem;\n\t\theight: auto;\n\t}\n\n\t.hamburger img:hover {\n\t\tfilter: brightness(3);\n\t}\n\n\t.nav-box {\n\t\tdisplay: none;\n\t}\n\n\t.log-container {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 1rem;\n\t\tjustify-content: space-between;\n\t}\n\n\t.hamburger-menu.active {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\tbackground-color: #4fd1c5;\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tz-index: 999;\n\t\tanimation: expand 500ms ease-in-out;\n\t\tmargin-top: 2rem;\n\t\tgap: 1rem;\n\t\tpadding-top: 1rem;\n\t\t/* display: flex;\n\t\tflex-direction: column;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\talign-items: center;\n\t\tmargin-top: 2.5rem;\n\t\tgap: 1rem; */\n\t}\n\n\t@keyframes expand {\n\t\t0% {\n\t\t\ttransform: scaleY(0);\n\t\t}\n\n\t\t70% {\n\t\t\ttransform: scaleY(1.1);\n\t\t}\n\n\t\t100% {\n\t\t\ttransform: scaleY(1);\n\t\t}\n\t}\n\n\t.inactive {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\tbackground-color: #4fd1c5;\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tz-index: 999;\n\t\tanimation: collapse 0.5s forwards;\n\t\tmargin-top: 2rem;\n\t\tgap: 1rem;\n\t\tpadding-top: 1rem;\n\t}\n\n\t/* .inactive {\n\t\topacity: 0;\n\t\tvisibility: hidden;\n\t\ttransform: scaleY(0);\n\t\ttransition:\n\t\t\ttransform 0.5s,\n\t\t\topacity 0.5s,\n\t\t\tvisibility 0s 0s;\n\t} */\n\n\t@keyframes collapse {\n\t\t0% {\n\t\t\ttransform: scaleY(1);\n\t\t}\n\t\t70% {\n\t\t\ttransform: scaleY(1.1);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scaleY(0);\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t.hamburger-menu a {\n\t\tborder-bottom: 1.5px solid #e0e0e0;\n\t\ttext-align: center;\n\t}\n\n\t.hamburger-menu a:nth-of-type(4) {\n\t\tborder-bottom: none;\n\t}\n\n\t.hamburger-menu a {\n\t\tfont-size: 1.5rem;\n\t\tpadding-bottom: 0.5rem;\n\t}\n\n\t.first-text-container h3 {\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.name {\n\t\tfont-size: 2rem;\n\t}\n\n\t#typed-text {\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.second-block-text-container {\n\t\tgap: 3rem;\n\t}\n}\n"],"sourceRoot":""}]);
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






console.log("Test build");
(0,_setup__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_homepage__WEBPACK_IMPORTED_MODULE_3__["default"])();
var homeLink = document.querySelector(".nav-box:nth-of-type(1)");
var aboutLink = document.querySelector(".nav-box:nth-of-type(2)");
var projectsLink = document.querySelector(".nav-box:nth-of-type(3)");
var resumeLink = document.querySelector(".nav-box:nth-of-type(4)");
var mobileHomeLink = document.querySelector(".hamburger-menu > a:nth-of-type(1)");
var mobileAboutLink = document.querySelector(".hamburger-menu > a:nth-of-type(2)");
var mobileProjectsLink = document.querySelector(".hamburger-menu > a:nth-of-type(3)");
var mobileResumeLink = document.querySelector(".hamburger-menu > a:nth-of-type(4)");
homeLink.addEventListener("click", function () {
  (0,_homepage__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
mobileHomeLink.addEventListener("click", function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsdUJBQXVCLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxNQUFNLE9BQU8sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsc0JBQXNCLHFCQUFxQix1QkFBdUIscUJBQXFCLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxR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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGVBQWU7QUFDZjs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0ZBQW9GLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsd0JBQXdCLHlCQUF5QixPQUFPLE9BQU8sT0FBTyxLQUFLLHdCQUF3QixVQUFVLGlCQUFpQixPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLHdCQUF3QixPQUFPLFlBQVksTUFBTSx3QkFBd0IseUJBQXlCLE9BQU8sWUFBWSxNQUFNLHNCQUFzQixPQUFPLFlBQVksTUFBTSx3QkFBd0IsT0FBTyxVQUFVLEtBQUssWUFBWSx5QkFBeUIsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssd0JBQXdCLHlCQUF5QixPQUFPLEtBQUssd0JBQXdCLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxLQUFLLHdCQUF3QixPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFN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QUM7QUFDWCxDQUFDLENBQUM7QUFFRmlILFNBQVMsQ0FBQzNMLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3pDQyxrREFBSyxDQUFDLENBQUM7QUFDUixDQUFDLENBQUM7QUFFRjhMLGVBQWUsQ0FBQy9MLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQy9DQyxrREFBSyxDQUFDLENBQUM7QUFDUixDQUFDLENBQUM7QUFFRjJMLFlBQVksQ0FBQzVMLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQzVDNEgsb0RBQU8sQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBRUZvRSxrQkFBa0IsQ0FBQ2hNLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ2xENEgsb0RBQU8sQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBRUZpRSxVQUFVLENBQUM3TCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUMxQ29MLE1BQU0sQ0FBQ2MsSUFBSSxDQUNWLG9GQUNELENBQUM7QUFDRixDQUFDLENBQUM7QUFFRkQsZ0JBQWdCLENBQUNqTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUNoRG9MLE1BQU0sQ0FBQ2MsSUFBSSxDQUNWLG9GQUNELENBQUM7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvc2V0dXAuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvY3NzL25vcm1hbGl6ZS5jc3M/NmQ1NCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90eXBlZC5qcy9kaXN0L3R5cGVkLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGFoaXIgZnJvbSBcIi4vaW1nL3NoYWhpci5QTkdcIjtcbmltcG9ydCBHaXRTb2NpYWwgZnJvbSBcIi4vaW1nL2dpdFNvY2lhbC5zdmdcIjtcbmltcG9ydCBMaW5rZWQgZnJvbSBcIi4vaW1nL2xpbmtlZC5zdmdcIjtcbmltcG9ydCBEb2NrZXIgZnJvbSBcIi4vaW1nL2RvY2tlci5zdmdcIjtcbmltcG9ydCBTcWwgZnJvbSBcIi4vaW1nL3NxbC5zdmdcIjtcbmltcG9ydCBFY2xpcHNlIGZyb20gXCIuL2ltZy9lY2xpcHNlLnN2Z1wiO1xuaW1wb3J0IEx1YSBmcm9tIFwiLi9pbWcvbHVhLnN2Z1wiO1xuaW1wb3J0IFZ1ZSBmcm9tIFwiLi9pbWcvdnVlLnN2Z1wiO1xuaW1wb3J0IEN5cHJlc3MgZnJvbSBcIi4vaW1nL2N5cHJlc3Muc3ZnXCI7XG5pbXBvcnQgVnNjb2RlIGZyb20gXCIuL2ltZy92c2NvZGUuc3ZnXCI7XG5pbXBvcnQgQyBmcm9tIFwiLi9pbWcvYy5zdmdcIjtcbmltcG9ydCBOcG0gZnJvbSBcIi4vaW1nL25wbS5zdmdcIjtcbmltcG9ydCBCYWJlbCBmcm9tIFwiLi9pbWcvYmFiZWwuc3ZnXCI7XG5pbXBvcnQgUHJldHRpZXIgZnJvbSBcIi4vaW1nL3ByZXR0aWVyLnN2Z1wiO1xuaW1wb3J0IEVzbGludCBmcm9tIFwiLi9pbWcvZXNsaW50LnN2Z1wiO1xuaW1wb3J0IFdlYnBhY2sgZnJvbSBcIi4vaW1nL3dlYnBhY2suc3ZnXCI7XG5pbXBvcnQgSmVzdCBmcm9tIFwiLi9pbWcvamVzdC5zdmdcIjtcbmltcG9ydCBHaXQgZnJvbSBcIi4vaW1nL2dpdC5zdmdcIjtcbmltcG9ydCBQeXRob24gZnJvbSBcIi4vaW1nL3B5dGhvbi5zdmdcIjtcbmltcG9ydCBKYXZhIGZyb20gXCIuL2ltZy9qYXZhLnN2Z1wiO1xuaW1wb3J0IExpbnV4IGZyb20gXCIuL2ltZy9saW51eC5zdmdcIjtcbmltcG9ydCBIdG1sIGZyb20gXCIuL2ltZy9odG1sLnN2Z1wiO1xuaW1wb3J0IENzcyBmcm9tIFwiLi9pbWcvY3NzLnN2Z1wiO1xuaW1wb3J0IEpzIGZyb20gXCIuL2ltZy9qcy5zdmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWxJdGVtKGltYWdlLCB0aXRsZSkge1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjYXJvdXNlbEl0ZW0uY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWl0ZW1cIik7XG5cblx0Y29uc3QgY2Fyb3VzZWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGNhcm91c2VsSW1hZ2Uuc3JjID0gaW1hZ2U7XG5cdGNhcm91c2VsSW1hZ2UuYWx0ID0gdGl0bGU7XG5cdGNhcm91c2VsSW1hZ2UuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWltYWdlXCIpO1xuXG5cdGNvbnN0IGNhcm91c2VsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y2Fyb3VzZWxUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtdGl0bGVcIik7XG5cdGNhcm91c2VsVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuXHRjYXJvdXNlbEl0ZW0uYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJbWFnZSk7XG5cdGNhcm91c2VsSXRlbS5hcHBlbmRDaGlsZChjYXJvdXNlbFRpdGxlKTtcblxuXHRyZXR1cm4gY2Fyb3VzZWxJdGVtO1xufVxuXG4vLyBhZGQgYnV0dG9ucyB0byB0aGUgY2Fyb3VzZWwgYW5kIGNvbnRyb2wgdGhlIHNjcm9sbGluZ1xuZnVuY3Rpb24gYnV0dG9ucygpIHtcblx0Y29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsXCIpO1xuXHRjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrLWJ0blwiKTtcblx0Y29uc3QgZm9yd2FyZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yd2FyZC1idG5cIik7XG5cdGxldCBpc1Njcm9sbGluZyA9IGZhbHNlOyAvLyBUaGlzIHZhcmlhYmxlIHdpbGwgYmUgdXNlZCB0byBpbmRpY2F0ZSBzY3JvbGxpbmcgc3RhdHVzXG5cdGxldCBzY3JvbGxEaXJlY3Rpb24gPSAwOyAvLyAwIGZvciBsZWZ0LCAxIGZvciByaWdodFxuXHRjb25zdCBzY3JvbGxTdGVwID0gODsgLy8gVGhpcyB2YWx1ZSBjb250cm9scyB0aGUgc21vb3RobmVzcyBvZiB0aGUgc2Nyb2xsXG5cblx0Ly8gc21vb3RoIHNjcm9sbCBhbmltYXRpb25cblx0Y29uc3QgYW5pbWF0ZVNjcm9sbCA9ICgpID0+IHtcblx0XHQvLyBpZiBzY3JvbGxpbmcgaXMgc3RpbGwgaW4gcHJvZ3Jlc3MsIHRoZW4gY29udGludWUgc2Nyb2xsaW5nXG5cdFx0aWYgKCFpc1Njcm9sbGluZykgcmV0dXJuO1xuXG5cdFx0Ly8gc2Nyb2xsIGJ5IHRoZSBzY3JvbGxTdGVwXG5cdFx0Y29uc3Qgc2Nyb2xsRGlzdGFuY2UgPSBzY3JvbGxEaXJlY3Rpb24gPT09IDAgPyAtc2Nyb2xsU3RlcCA6IHNjcm9sbFN0ZXA7XG5cdFx0Y2Fyb3VzZWwuc2Nyb2xsTGVmdCArPSBzY3JvbGxEaXN0YW5jZTtcblxuXHRcdC8vIGlmIHRoZSBzY3JvbGwgaXMgbm90IGF0IHRoZSBlbmQsIHRoZW4gY29udGludWUgc2Nyb2xsaW5nXG5cdFx0aWYgKFxuXHRcdFx0KHNjcm9sbERpcmVjdGlvbiA9PT0gMCAmJiBjYXJvdXNlbC5zY3JvbGxMZWZ0ID4gMCkgfHxcblx0XHRcdChzY3JvbGxEaXJlY3Rpb24gPT09IDEgJiZcblx0XHRcdFx0Y2Fyb3VzZWwuc2Nyb2xsTGVmdCArIGNhcm91c2VsLm9mZnNldFdpZHRoIDwgY2Fyb3VzZWwuc2Nyb2xsV2lkdGgpXG5cdFx0KSB7XG5cdFx0XHQvLyBhbmltYXRlIHRoZSBzY3JvbGwgYXQgNjAgZnJhbWVzIHBlciBzZWNvbmRcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlU2Nyb2xsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gb3RoZXJ3aXNlLCBzdG9wIHNjcm9sbGluZ1xuXHRcdFx0aXNTY3JvbGxpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0Ly8gc2Nyb2xsIGxlZnQgd2hlbiB0aGUgYmFjayBidXR0b24gaXMgY2xpY2tlZFxuXHRjb25zdCBzY3JvbGxMZWZ0ID0gKCkgPT4ge1xuXHRcdC8vIGlmIHRoZSBzY3JvbGwgaXMgbm90IGluIHByb2dyZXNzLCB0aGVuIHN0YXJ0IHNjcm9sbGluZ1xuXHRcdGlmICghaXNTY3JvbGxpbmcpIHtcblx0XHRcdHNjcm9sbERpcmVjdGlvbiA9IDA7IC8vIDAgZm9yIGxlZnRcblx0XHRcdGlzU2Nyb2xsaW5nID0gdHJ1ZTsgLy8gdGhlIHNjcm9sbCBpcyBpbiBwcm9ncmVzc1xuXHRcdFx0YW5pbWF0ZVNjcm9sbCgpOyAvLyBzdGFydCBzY3JvbGxpbmdcblx0XHR9XG5cdH07XG5cblx0Ly8gc2Nyb2xsIHJpZ2h0IHdoZW4gdGhlIG5leHQgYnV0dG9uIGlzIGNsaWNrZWRcblx0Y29uc3Qgc2Nyb2xsUmlnaHQgPSAoKSA9PiB7XG5cdFx0Ly8gaWYgdGhlIHNjcm9sbCBpcyBub3QgaW4gcHJvZ3Jlc3MsIHRoZW4gc3RhcnQgc2Nyb2xsaW5nXG5cdFx0aWYgKCFpc1Njcm9sbGluZykge1xuXHRcdFx0c2Nyb2xsRGlyZWN0aW9uID0gMTsgLy8gMSBmb3IgcmlnaHRcblx0XHRcdGlzU2Nyb2xsaW5nID0gdHJ1ZTsgLy8gdGhlIHNjcm9sbCBpcyBpbiBwcm9ncmVzc1xuXHRcdFx0YW5pbWF0ZVNjcm9sbCgpOyAvLyBzdGFydCBzY3JvbGxpbmdcblx0XHR9XG5cdH07XG5cblx0Ly8gc3RvcCBzY3JvbGxpbmcgd2hlbiB0aGUgbW91c2UgbGVhdmVzIHRoZSBidXR0b25cblx0Y29uc3Qgc3RvcFNjcm9sbCA9ICgpID0+IHtcblx0XHRpc1Njcm9sbGluZyA9IGZhbHNlOyAvLyB0aGUgc2Nyb2xsIGlzIG5vdCBpbiBwcm9ncmVzc1xuXHR9O1xuXG5cdC8vIGFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGJ1dHRvbnNcblx0YmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzY3JvbGxMZWZ0KTsgLy8gU2Nyb2xsIGxlZnQgb24gbW91c2UgZW50ZXJcblx0YmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wU2Nyb2xsKTsgLy8gU3RvcCBzY3JvbGxpbmcgb24gbW91c2UgbGVhdmVcblx0YmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2Nyb2xsTGVmdCk7IC8vIFNjcm9sbCBsZWZ0IG9uIGNsaWNrXG5cdGZvcndhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2Nyb2xsUmlnaHQpOyAvLyBTY3JvbGwgcmlnaHQgb24gbW91c2UgZW50ZXJcblx0Zm9yd2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wU2Nyb2xsKTsgLy8gU3RvcCBzY3JvbGxpbmcgb24gbW91c2UgbGVhdmVcblx0Zm9yd2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2Nyb2xsUmlnaHQpOyAvLyBTY3JvbGwgcmlnaHQgb24gY2xpY2tcbn1cblxuZnVuY3Rpb24gYWJvdXQoKSB7XG5cdGNvbnN0IGFib3V0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGFib3V0UGFnZS5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtcGFnZVwiKTtcblxuXHRjb25zdCBhYm91dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGFib3V0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1jb250YWluZXJcIik7XG5cblx0Y29uc3QgYWJvdXRUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0YWJvdXRUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC10ZXh0LWNvbnRhaW5lclwiKTtcblx0Y29uc3QgYWJvdXRNZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0YWJvdXRNZS50ZXh0Q29udGVudCA9IFwiQWJvdXQgXCI7XG5cdGNvbnN0IGFib3V0TWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGFib3V0TWVTcGFuLnRleHRDb250ZW50ID0gXCJNZVwiO1xuXHRhYm91dE1lLmFwcGVuZENoaWxkKGFib3V0TWVTcGFuKTtcblx0YWJvdXRNZS5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbWVcIik7XG5cdGFib3V0VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dE1lKTtcblx0YWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0Q29udGFpbmVyKTtcblxuXHRjb25zdCBhYm91dE1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0YWJvdXRNZURpdi5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbWUtZGl2XCIpO1xuXG5cdGNvbnN0IGFib3V0TWVUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0YWJvdXRNZVRleHREaXYuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLXRleHQtZGl2XCIpO1xuXG5cdGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwicGFyYWdyYXBoXCIpO1xuXG5cdGNvbnN0IGFib3V0TWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGFib3V0TWVUZXh0LmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZS10ZXh0XCIpO1xuXHRhYm91dE1lVGV4dC50ZXh0Q29udGVudCA9XG5cdFx0XCJIZWxsbywgSSdtIFNoYWhpciwgYSBkZWRpY2F0ZWQgQ29tcHV0ZXIgU2NpZW5jZSBhbmQgTWF0aGVtYXRpY3Mgc3R1ZGVudCBhdCBEaWNraW5zb24gQ29sbGVnZSB3aXRoIGEgZGVlcCBwYXNzaW9uIGZvciB3ZWIgZGV2ZWxvcG1lbnQuIE15IGFjYWRlbWljIGFuZCBzZWxmLXRhdWdodCBqb3VybmV5IGluIHByb2dyYW1taW5nIGhhcyBlcXVpcHBlZCBtZSB3aXRoIHRoZSBza2lsbHMgdG8gY3JhZnQgZWZmaWNpZW50LCBzY2FsYWJsZSBzb2Z0d2FyZSBzb2x1dGlvbnMuIEkgdGhyaXZlIG9uIHRoZSBjaGFsbGVuZ2VzIHRoYXQgY29tZSB3aXRoIGRldmVsb3BpbmcgY2xlYW4sIGludHVpdGl2ZSB1c2VyIGludGVyZmFjZXMgYW5kIHJvYnVzdCBiYWNrZW5kIGZ1bmN0aW9uYWxpdGllcy4gTXkgZ29hbCBpcyB0byBjb250aW51b3VzbHkgZXhwYW5kIG15IGZ1bGwtc3RhY2sgZGV2ZWxvcG1lbnQgZXhwZXJ0aXNlIGFuZCBjb250cmlidXRlIHRvIG1lYW5pbmdmdWwgcHJvamVjdHMgaW4gYSBkeW5hbWljIHRlYW0gZW52aXJvbm1lbnQuXCI7XG5cblx0Y29uc3QgYWJvdXRNZVRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGFib3V0TWVUZXh0Mi5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbWUtdGV4dFwiKTtcblx0YWJvdXRNZVRleHQyLnRleHRDb250ZW50ID0gYFdoZW4gSSBzdGVwIGF3YXkgZnJvbSB0aGUga2V5Ym9hcmQsIHlvdSdsbCBmaW5kIG1lIGluZHVsZ2luZyBpbiBhIHZhcmlldHkgb2YgaW50ZXJlc3RzIHRoYXQga2VlcCBtZSBiYWxhbmNlZCBhbmQgaW5zcGlyZWQuIEknbSBhbiBhdmlkIHNvY2NlciBmYW4sIHdpdGggUmVhbCBNYWRyaWQncyBnYW1lcyBwdW5jdHVhdGluZyB0aGUgY2FsZW5kYXIgb2YgbXkgcGVyc29uYWwgbGlmZS4gSW4gdGhlIHdvcmxkIG9mIG1peGVkIG1hcnRpYWwgYXJ0cywgSSBhZG1pcmUgdGhlIHN0cmF0ZWdpYyBwcm93ZXNzIG9mIGZpZ2h0ZXJzIGxpa2UgdGhlIHJldGlyZWQgS2hhYmliIE51cm1hZ29tZWRvdi4gTXkgdGFzdGUgaW4gZW50ZXJ0YWlubWVudCByYW5nZXMgZnJvbSB0aGUgY2FwdGl2YXRpbmcgbmFycmF0aXZlcyBvZiBcIlRoZSBTaGF3c2hhbmsgUmVkZW1wdGlvblwiIHRvIHRoZSBjb21wbGV4IGxlZ2FsIGRyYW1hcyBvZiBcIkJldHRlciBDYWxsIFNhdWwuXCIgR2FtaW5nIGlzIGFub3RoZXIgcGFzc2lvbiDigJQgaW1tZXJzaW5nIG15c2VsZiBpbiByaWNoLCBzdG9yeS1kcml2ZW4gd29ybGRzIGxpa2UgdGhvc2Ugb2YgUmVkIERlYWQgUmVkZW1wdGlvbiAyLCBMQSBOb2lyZSwgYW5kIFNsZWVwaW5nIERvZ3MgcHJvdmlkZXMgbm90IGp1c3QgcmVjcmVhdGlvbiwgYnV0IGNyZWF0aXZlIGluc3BpcmF0aW9uLmA7XG5cblx0Y29uc3QgYWJvdXRNZVRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGFib3V0TWVUZXh0My5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbWUtdGV4dFwiKTtcblx0YWJvdXRNZVRleHQzLnRleHRDb250ZW50ID1cblx0XHRcIkluIGFkZGl0aW9uIHRvIG15IHN0dWRpZXMgYW5kIGhvYmJpZXMsIEkgc2VydmUgYXMgYSBSZXNpZGVudCBBZHZpc29yLCBhIHJvbGUgdGhhdCBoYXMgcmVmaW5lZCBteSBpbnRlcnBlcnNvbmFsIHNraWxscyBhbmQgYWJpbGl0eSB0byBmb3N0ZXIgY29tbXVuaXR5IGFtb25nIGRpdmVyc2UgZ3JvdXBzLiBJdCdzIGEgcm9sZSB0aGF0IGNvbXBsZW1lbnRzIG15IHRlY2huaWNhbCBhc3BpcmF0aW9ucyBieSBlbXBoYXNpemluZyBlbXBhdGh5LCBsZWFkZXJzaGlwLCBhbmQgY29sbGFib3JhdGlvbi5cIjtcblxuXHRjb25zdCBhYm91dE1lVGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0YWJvdXRNZVRleHQ0LmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZS10ZXh0XCIpO1xuXHRhYm91dE1lVGV4dDQudGV4dENvbnRlbnQgPVxuXHRcdFwiSSdtIGV4Y2l0ZWQgdG8gZW1iYXJrIG9uIHRoZSBuZXh0IHN0YWdlIG9mIG15IGNhcmVlciBqb3VybmV5IGFuZCBhbSBhY3RpdmVseSBzZWVraW5nIGludGVybnNoaXAgb3Bwb3J0dW5pdGllcyB0aGF0IHdpbGwgbGV2ZXJhZ2UgbXkgdGVjaG5pY2FsIHNraWxscyBhbmQgd29yayBldGhpYy4gSWYgeW91J3JlIGxvb2tpbmcgZm9yIHNvbWVvbmUgd2hvIGJyaW5ncyBhIGNvbWJpbmF0aW9uIG9mIGNvZGluZyBwcm9maWNpZW5jeSBhbmQgYSB3ZWxsLXJvdW5kZWQgcGVyc3BlY3RpdmUgdG8geW91ciB0ZWFtLCBsZXQncyBjb25uZWN0LlwiO1xuXG5cdHBhcmFncmFwaC5hcHBlbmRDaGlsZChhYm91dE1lVGV4dCk7XG5cdHBhcmFncmFwaC5hcHBlbmRDaGlsZChhYm91dE1lVGV4dDIpO1xuXHRwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoYWJvdXRNZVRleHQzKTtcblx0cGFyYWdyYXBoLmFwcGVuZENoaWxkKGFib3V0TWVUZXh0NCk7XG5cdGFib3V0TWVUZXh0RGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cblx0Y29uc3Qgc29jaWFsSWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzb2NpYWxJY29ucy5jbGFzc0xpc3QuYWRkKFwic29jaWFsLWljb25zXCIpO1xuXG5cdGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0Z2l0TGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3XCI7XG5cdGdpdExpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblx0Z2l0TGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcblx0Y29uc3QgZ2l0U29jaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Z2l0U29jaWFsLnNyYyA9IEdpdFNvY2lhbDtcblx0Z2l0U29jaWFsLmFsdCA9IFwiR2l0SHViXCI7XG5cdGdpdFNvY2lhbC5jbGFzc0xpc3QuYWRkKFwic29jaWFsLWljb25cIik7XG5cdGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0U29jaWFsKTtcblx0c29jaWFsSWNvbnMuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG5cblx0Y29uc3QgbGlua2VkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRsaW5rZWRMaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zaGFoaXI0Ny9cIjtcblx0bGlua2VkTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXHRsaW5rZWRMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuXHRjb25zdCBsaW5rZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRsaW5rZWQuc3JjID0gTGlua2VkO1xuXHRsaW5rZWQuYWx0ID0gXCJMaW5rZWRJblwiO1xuXHRsaW5rZWQuY2xhc3NMaXN0LmFkZChcInNvY2lhbC1pY29uXCIpO1xuXHRsaW5rZWRMaW5rLmFwcGVuZENoaWxkKGxpbmtlZCk7XG5cdHNvY2lhbEljb25zLmFwcGVuZENoaWxkKGxpbmtlZExpbmspO1xuXG5cdGFib3V0TWVUZXh0RGl2LmFwcGVuZENoaWxkKHNvY2lhbEljb25zKTtcblx0YWJvdXRNZURpdi5hcHBlbmRDaGlsZChhYm91dE1lVGV4dERpdik7XG5cblx0Y29uc3QgcGljdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdHBpY3R1cmUuc3JjID0gU2hhaGlyO1xuXHRwaWN0dXJlLmFsdCA9IFwiU2hhaGlyXCI7XG5cdHBpY3R1cmUuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLXBpY3R1cmVcIik7XG5cdGFib3V0TWVEaXYuYXBwZW5kQ2hpbGQocGljdHVyZSk7XG5cblx0YWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZURpdik7XG5cdGFib3V0UGFnZS5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG5cblx0Y29uc3Qgc2Vjb25kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2Vjb25kRGl2LmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtZGl2XCIpO1xuXG5cdGNvbnN0IHNlY29uZERpdlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzZWNvbmREaXZUZXh0LmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtZGl2LXRleHRcIik7XG5cblx0Y29uc3QgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGhpZ2hsaWdodC5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuXHRoaWdobGlnaHQudGV4dENvbnRlbnQgPSBcIlRvb2xzXCI7XG5cblx0Y29uc3QgYW5kID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgYW5kXCIpO1xuXG5cdGNvbnN0IGhpZ2hsaWdodFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0aGlnaGxpZ2h0VGV4dC50ZXh0Q29udGVudCA9IFwiIFRlY2hub2xvZ2llc1wiO1xuXHRoaWdobGlnaHRUZXh0LmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG5cblx0Y29uc3Qgc2VudGVuY2UgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiBJJ3ZlIHdvcmtlZCB3aXRoXCIpO1xuXG5cdGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0dGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcblx0dGV4dC5hcHBlbmRDaGlsZChoaWdobGlnaHQpO1xuXHR0ZXh0LmFwcGVuZENoaWxkKGFuZCk7XG5cdHRleHQuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0VGV4dCk7XG5cdHRleHQuYXBwZW5kQ2hpbGQoc2VudGVuY2UpO1xuXHRzZWNvbmREaXZUZXh0LmFwcGVuZENoaWxkKHRleHQpO1xuXHRzZWNvbmREaXYuYXBwZW5kQ2hpbGQoc2Vjb25kRGl2VGV4dCk7XG5cblx0Y29uc3QgY2Fyb3VzZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjYXJvdXNlbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IGNhcm91c2VsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y2Fyb3VzZWxEaXYuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWRpdlwiKTtcblxuXHRjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YmFja0J0bi5jbGFzc0xpc3QuYWRkKFwiYmFjay1idG5cIik7XG5cdGJhY2tCdG4udGV4dENvbnRlbnQgPSBcIjxcIjtcblx0Y2Fyb3VzZWxEaXYuYXBwZW5kQ2hpbGQoYmFja0J0bik7XG5cblx0Y29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjYXJvdXNlbC5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWxcIik7XG5cblx0Y29uc3QgY2Fyb3VzZWxJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNhcm91c2VsSXRlbXMuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWl0ZW1zXCIpO1xuXG5cdGNvbnN0IGNhcm91c2VsSXRlbTEgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oSHRtbCwgXCJIVE1MXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0yID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKENzcywgXCJDU1NcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTMgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oSnMsIFwiSmF2YVNjcmlwdFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtNCA9IGNyZWF0ZUNhcm91c2VsSXRlbShHaXQsIFwiR2l0XCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW01ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKE5wbSwgXCJOUE1cIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTYgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oVnNjb2RlLCBcIlZTIENvZGVcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTcgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oRG9ja2VyLCBcIkRvY2tlclwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtOCA9IGNyZWF0ZUNhcm91c2VsSXRlbShMaW51eCwgXCJMaW51eFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtOSA9IGNyZWF0ZUNhcm91c2VsSXRlbShQeXRob24sIFwiUHl0aG9uXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xMCA9IGNyZWF0ZUNhcm91c2VsSXRlbShKYXZhLCBcIkphdmFcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTExID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKFNxbCwgXCJTUUxcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTEyID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKFdlYnBhY2ssIFwiV2VicGFja1wiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTMgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oVnVlLCBcIlZ1ZS5qc1wiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTQgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oQmFiZWwsIFwiQmFiZWxcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTE1ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEplc3QsIFwiSmVzdFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTYgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oUHJldHRpZXIsIFwiUHJldHRpZXJcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTE3ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEVzbGludCwgXCJFc2xpbnRcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTE4ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEN5cHJlc3MsIFwiQ3lwcmVzc1wiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTkgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oQywgXCJDKytcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTIwID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEx1YSwgXCJMdWFcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTIxID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEVjbGlwc2UsIFwiRWNsaXBzZVwiKTtcblxuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTEpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTIpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTMpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTQpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTUpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTYpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTcpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTgpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTkpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTEwKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xMSk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTIpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTEzKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xNCk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTUpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTE2KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xNyk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTgpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTE5KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0yMCk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMjEpO1xuXG5cdGNhcm91c2VsLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbXMpO1xuXHRjYXJvdXNlbERpdi5hcHBlbmRDaGlsZChiYWNrQnRuKTtcblx0Y2Fyb3VzZWxEaXYuYXBwZW5kQ2hpbGQoY2Fyb3VzZWwpO1xuXG5cdGNvbnN0IGZvcndhcmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRmb3J3YXJkQnRuLmNsYXNzTGlzdC5hZGQoXCJmb3J3YXJkLWJ0blwiKTtcblx0Zm9yd2FyZEJ0bi50ZXh0Q29udGVudCA9IFwiPlwiO1xuXHRjYXJvdXNlbERpdi5hcHBlbmRDaGlsZChmb3J3YXJkQnRuKTtcblxuXHRjYXJvdXNlbENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJvdXNlbERpdik7XG5cdHNlY29uZERpdi5hcHBlbmRDaGlsZChjYXJvdXNlbENvbnRhaW5lcik7XG5cdGFib3V0UGFnZS5hcHBlbmRDaGlsZChzZWNvbmREaXYpO1xuXG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xuXHRtYWluLmlubmVySFRNTCA9IFwiXCI7XG5cdG1haW4uYXBwZW5kQ2hpbGQoYWJvdXRQYWdlKTtcblxuXHRidXR0b25zKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0O1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IFR5cGVkIGZyb20gXCJ0eXBlZC5qc1wiO1xuaW1wb3J0IENvbXB1dGVyIGZyb20gXCIuL2ltZy9jb21wdXRlci5wbmdcIjtcbmltcG9ydCBIYW5kIGZyb20gXCIuL2ltZy9oYW5kLnN2Z1wiO1xuaW1wb3J0IEhhY2tlciBmcm9tIFwiLi9pbWcvaGFja2VyLnN2Z1wiO1xuaW1wb3J0IEdpdFNvY2lhbCBmcm9tIFwiLi9pbWcvZ2l0U29jaWFsLnN2Z1wiO1xuaW1wb3J0IExpbmtlZCBmcm9tIFwiLi9pbWcvbGlua2VkLnN2Z1wiO1xuXG5mdW5jdGlvbiBkeW5hbWljVGV4dCgpIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGNvbnN0IHR5cGVkID0gbmV3IFR5cGVkKFwiI3R5cGVkLXRleHRcIiwge1xuXHRcdC8vIFN0cmluZ3MgdG8gZGlzcGxheVxuXHRcdHN0cmluZ3M6IFtcblx0XHRcdFwiRnVsbCBTdGFjayBEZXZlbG9wZXJcIixcblx0XHRcdFwiQ3JlYXRpdmUgQ29kZXJcIixcblx0XHRcdFwiQ29tcHV0ZXIgU2NpZW5jZSBTdHVkZW50XCIsXG5cdFx0XHRcIk1hdGhlbWF0aWNzIFN0dWRlbnRcIixcblx0XHRcdFwiQXNwaXJpbmcgU29mdHdhcmUgRGV2ZWxvcGVyXCIsXG5cdFx0XHRcIkVtZXJnaW5nIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXCIsXG5cdFx0XHRcIlByb2dyYW1taW5nIEVudGh1c2lhc3RcIixcblx0XHRcdFwiRnV0dXJlIFRlY2ggUHJvZmVzc2lvbmFsXCIsXG5cdFx0XHRcIlN0dWRlbnQgb2YgU29mdHdhcmUgRW5naW5lZXJpbmdcIixcblx0XHRcdFwiQ29kaW5nIEhvYmJ5aXN0XCIsXG5cdFx0XHRcIlNvZnR3YXJlIEVuZ2luZWVyIGluIFRyYWluaW5nXCIsXG5cdFx0XHRcIlNvZnR3YXJlIEVuZ2luZWVyIGluIHRoZSBNYWtpbmdcIixcblx0XHRcdFwiU29mdHdhcmUgRW5naW5lZXIgaW4gdGhlIFdvcmtzXCIsXG5cdFx0XSxcblxuXHRcdC8vIFNwZWVkIHNldHRpbmdzXG5cdFx0dHlwZVNwZWVkOiA1MCxcblx0XHRiYWNrU3BlZWQ6IDI1LFxuXHRcdC8vIFRpbWUgYmVmb3JlIHR5cGluZyBzdGFydHNcblx0XHRzdGFydERlbGF5OiAxMDAwLFxuXHRcdC8vIFRpbWUgYmVmb3JlIGVyYXNpbmdcblx0XHRiYWNrRGVsYXk6IDIwMDAsXG5cdFx0Ly8gTG9vcCB0aGUgYW5pbWF0aW9uXG5cdFx0bG9vcDogdHJ1ZSxcblx0XHQvLyBTaG93IGN1cnNvclxuXHRcdHNob3dDdXJzb3I6IHRydWUsXG5cdFx0Ly8gQ2hhcmFjdGVyIGZvciBjdXJzb3Jcblx0XHRjdXJzb3JDaGFyOiBcInxcIixcblx0XHQvLyBBdHRyaWJ1dGUgdG8gdHlwZSAobnVsbCA9PSB0ZXh0KVxuXHRcdGF0dHI6IG51bGwsXG5cdFx0Ly8gV2hldGhlciB0byBzdGFydCB0eXBpbmcgYXV0b21hdGljYWxseVxuXHRcdGF1dG9JbnNlcnRDc3M6IHRydWUsXG5cdFx0Ly8gRGVmYXVsdCBjb250ZW50IGJlZm9yZSB0eXBpbmdcblx0XHRjb250ZW50VHlwZTogXCJodG1sXCIsXG5cdH0pO1xufVxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcblx0Y29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG5cdG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRjb25zdCBmaXJzdEJsb2NrSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGZpcnN0QmxvY2tIb21lLmNsYXNzTGlzdC5hZGQoXCJmaXJzdC1ibG9jay1ob21lXCIpO1xuXG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBzdWJUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c3ViVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3ViLXRleHQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IGZpcnN0VGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGZpcnN0VGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmlyc3QtdGV4dC1jb250YWluZXJcIik7XG5cblx0Y29uc3QgZmlyc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRmaXJzdFRleHQudGV4dENvbnRlbnQgPSBcIkhpLCBUaGVyZSFcIjtcblx0Zmlyc3RUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0VGV4dCk7XG5cblx0Y29uc3Qgd2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdHdhdmUuY2xhc3NMaXN0LmFkZChcIndhdmVcIik7XG5cdHdhdmUuc3JjID0gSGFuZDtcblx0d2F2ZS5hbHQgPSBcIldhdmVcIjtcblx0Zmlyc3RUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHdhdmUpO1xuXG5cdGNvbnN0IHNlY29uZFRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzZWNvbmRUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtdGV4dC1jb250YWluZXJcIik7XG5cblx0Y29uc3Qgc2Vjb25kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcblx0c2Vjb25kVGV4dC50ZXh0Q29udGVudCA9IFwiSSdtIFwiO1xuXHRjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdG5hbWUudGV4dENvbnRlbnQgPSBcIlNoYWhpciBBaG1lZFwiO1xuXHRuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuXHRzZWNvbmRUZXh0LmFwcGVuZENoaWxkKG5hbWUpO1xuXHRzZWNvbmRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZFRleHQpO1xuXG5cdHN1YlRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RUZXh0Q29udGFpbmVyKTtcblx0c3ViVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRUZXh0Q29udGFpbmVyKTtcblxuXHRjb25zdCB0eXBlZFRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0eXBlZFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInR5cGVkLXRleHQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IHR5cGVkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHR0eXBlZFRleHQuY2xhc3NMaXN0LmFkZChcInR5cGVkLXRleHRcIik7XG5cdHR5cGVkVGV4dC5pZCA9IFwidHlwZWQtdGV4dFwiO1xuXG5cdHR5cGVkVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0eXBlZFRleHQpO1xuXG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViVGV4dENvbnRhaW5lcik7XG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodHlwZWRUZXh0Q29udGFpbmVyKTtcblxuXHRmaXJzdEJsb2NrSG9tZS5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblxuXHRjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1jb250YWluZXJcIik7XG5cblx0Y29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRpbWFnZS5zcmMgPSBDb21wdXRlcjtcblx0aW1hZ2UuYWx0ID0gXCJDb21wdXRlclwiO1xuXHRpbWFnZS5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXJcIik7XG5cdGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcblxuXHRmaXJzdEJsb2NrSG9tZS5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG5cblx0bWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdEJsb2NrSG9tZSk7XG5cblx0Y29uc3Qgc2Vjb25kQmxvY2tIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2Vjb25kQmxvY2tIb21lLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtYmxvY2staG9tZVwiKTtcblxuXHRjb25zdCBzZWNvbmRCbG9ja1RleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzZWNvbmRCbG9ja1RleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlY29uZC1ibG9jay10ZXh0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGV4dERpdi5jbGFzc0xpc3QuYWRkKFwidGV4dC1kaXZcIik7XG5cblx0Y29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0dGV4dC50ZXh0Q29udGVudCA9IFwiSWYgb3Bwb3J0dW5pdHkgZG9lc24ndCBrbm9jaywgXCI7XG5cblx0Y29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRzcGFuLnRleHRDb250ZW50ID0gXCJidWlsZCBhIGRvb3IuXCI7XG5cdHNwYW4uY2xhc3NMaXN0LmFkZChcInNwYW4tZG9vclwiKTtcblxuXHR0ZXh0LmFwcGVuZENoaWxkKHNwYW4pO1xuXHR0ZXh0RGl2LmFwcGVuZENoaWxkKHRleHQpO1xuXHRjb25zdCBzdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzdWJEaXYuY2xhc3NMaXN0LmFkZChcInN1Yi1kaXZcIik7XG5cdGNvbnN0IGhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRoaWdobGlnaHQudGV4dENvbnRlbnQgPVxuXHRcdFwiRW1icmFjaW5nIGNoYWxsZW5nZXMgd2l0aCBpbm5vdmF0aW9uIGFuZCBkZXRlcm1pbmF0aW9uLCBcIjtcblx0aGlnaGxpZ2h0LmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG5cblx0Y29uc3Qgc3ViVGV4dEFmdGVySGlnaGxpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG5cdFx0XCJJIGNoYW5uZWwgbXkgcGFzc2lvbiBmb3IgY29kaW5nIGludG8gY3JhZnRpbmcgc29sdXRpb25zIHdoZXJlIG5vbmUgZXhpc3RlZCBiZWZvcmUuIEluIHRoZSBldmVyLWV2b2x2aW5nIHdvcmxkIG9mIHdlYiBkZXZlbG9wbWVudCwgSSdtIGNvbW1pdHRlZCB0byB0dXJuaW5nIG9ic3RhY2xlcyBpbnRvIHN0ZXBwaW5nIHN0b25lcyBmb3IgZ3Jvd3RoIGFuZCBsZWFybmluZy5cIixcblx0KTtcblx0Y29uc3Qgc3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRzdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzdWItdGV4dFwiKTtcblxuXHRzdWJUZXh0LmFwcGVuZENoaWxkKGhpZ2hsaWdodCk7XG5cdHN1YlRleHQuYXBwZW5kQ2hpbGQoc3ViVGV4dEFmdGVySGlnaGxpZ2h0KTtcblxuXHRjb25zdCBzdWJzdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHN1YnN1YlRleHQudGV4dENvbnRlbnQgPVxuXHRcdFwiV2l0aCBldmVyeSBsaW5lIG9mIGNvZGUsIEkgYWltIHRvIGJ1aWxkIHdlYiBhcHBsaWNhdGlvbnMgdGhhdCBhcmUgaW50dWl0aXZlIGFuZCBlZmZpY2llbnQuIE15IGdvYWwgaXMgdG8gY3JlYXRlIHRvb2xzIHRoYXQgbm90IG9ubHkgZnVuY3Rpb24gc21vb3RobHkgYnV0IGFsc28gZW5oYW5jZSB0aGUgdXNlciBleHBlcmllbmNlLiBJdCdzIGFib3V0IHBhdmluZyBuZXcgcGF0aHdheXMgdG8gc3VjY2VzcyBhbmQgZW5zdXJpbmcgdGhleSBsZWFkIHRvIG1lYW5pbmdmdWwgcmVzdWx0cyBmb3IgYm90aCB1c2VycyBhbmQgYnVzaW5lc3Nlc1wiO1xuXHRzdWJzdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzdWItdGV4dFwiKTtcblx0c3ViRGl2LmFwcGVuZENoaWxkKHN1YlRleHQpO1xuXHRzdWJEaXYuYXBwZW5kQ2hpbGQoc3Vic3ViVGV4dCk7XG5cdHRleHREaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcblx0c2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG5cdGNvbnN0IGhhY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGhhY2tlci5jbGFzc0xpc3QuYWRkKFwiaGFja2VyXCIpO1xuXHRoYWNrZXIuc3JjID0gSGFja2VyO1xuXHRoYWNrZXIuYWx0ID0gXCJIYWNrZXJcIjtcblx0c2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhhY2tlcik7XG5cblx0Y29uc3Qgc29jaWFsQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzb2NpYWxCbG9jay5jbGFzc0xpc3QuYWRkKFwic29jaWFsLWJsb2NrXCIpO1xuXG5cdGNvbnN0IHNvY2lhbFRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzb2NpYWxUZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtdGV4dC1kaXZcIik7XG5cblx0Y29uc3Qgc29jaWFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0c29jaWFsVGV4dC50ZXh0Q29udGVudCA9IFwiRklORCBNRSBPTlwiO1xuXG5cdGNvbnN0IHRleHRCZWZvcmUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkZlZWwgZnJlZSB0byBcIik7XG5cdGNvbnN0IHRleHRBZnRlciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIHdpdGggbWVcIik7XG5cblx0Y29uc3Qgc3BhbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0c3BhbkNvbnRlbnQudGV4dENvbnRlbnQgPSBcImNvbm5lY3RcIjtcblxuXHRjb25zdCBzb2NpYWxTdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHNvY2lhbFN1YlRleHQuY2xhc3NMaXN0LmFkZChcInNvY2lhbC1zdWItdGV4dFwiKTtcblx0c29jaWFsU3ViVGV4dC5hcHBlbmRDaGlsZCh0ZXh0QmVmb3JlKTtcblx0c29jaWFsU3ViVGV4dC5hcHBlbmRDaGlsZChzcGFuQ29udGVudCk7XG5cdHNvY2lhbFN1YlRleHQuYXBwZW5kQ2hpbGQodGV4dEFmdGVyKTtcblxuXHRzb2NpYWxUZXh0RGl2LmFwcGVuZENoaWxkKHNvY2lhbFRleHQpO1xuXHRzb2NpYWxUZXh0RGl2LmFwcGVuZENoaWxkKHNvY2lhbFN1YlRleHQpO1xuXG5cdGNvbnN0IHNvY2lhbEljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c29jaWFsSWNvbnMuY2xhc3NMaXN0LmFkZChcInNvY2lhbC1pY29uc1wiKTtcblxuXHRjb25zdCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGdpdExpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00N1wiO1xuXHRnaXRMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cdGdpdExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5cdGNvbnN0IGdpdFNvY2lhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGdpdFNvY2lhbC5zcmMgPSBHaXRTb2NpYWw7XG5cdGdpdFNvY2lhbC5hbHQgPSBcIkdpdEh1YlwiO1xuXHRnaXRTb2NpYWwuY2xhc3NMaXN0LmFkZChcInNvY2lhbC1pY29uXCIpO1xuXHRnaXRMaW5rLmFwcGVuZENoaWxkKGdpdFNvY2lhbCk7XG5cdHNvY2lhbEljb25zLmFwcGVuZENoaWxkKGdpdExpbmspO1xuXG5cdGNvbnN0IGxpbmtlZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bGlua2VkTGluay5ocmVmID0gXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2hhaGlyNDcvXCI7XG5cdGxpbmtlZExpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblx0bGlua2VkTGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcblx0Y29uc3QgbGlua2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0bGlua2VkLnNyYyA9IExpbmtlZDtcblx0bGlua2VkLmFsdCA9IFwiTGlua2VkSW5cIjtcblx0bGlua2VkLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvblwiKTtcblx0bGlua2VkTGluay5hcHBlbmRDaGlsZChsaW5rZWQpO1xuXHRzb2NpYWxJY29ucy5hcHBlbmRDaGlsZChsaW5rZWRMaW5rKTtcblxuXHRzb2NpYWxCbG9jay5hcHBlbmRDaGlsZChzb2NpYWxUZXh0RGl2KTtcblx0c29jaWFsQmxvY2suYXBwZW5kQ2hpbGQoc29jaWFsSWNvbnMpO1xuXG5cdHNlY29uZEJsb2NrSG9tZS5hcHBlbmRDaGlsZChzZWNvbmRCbG9ja1RleHRDb250YWluZXIpO1xuXHRzZWNvbmRCbG9ja0hvbWUuYXBwZW5kQ2hpbGQoc29jaWFsQmxvY2spO1xuXG5cdG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kQmxvY2tIb21lKTtcblxuXHRkeW5hbWljVGV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiIsImltcG9ydCBUb2RvIGZyb20gXCIuL2ltZy90b2RvLnBuZ1wiO1xuaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSBcIi4vaW1nL2JhdHRsZXNoaXAucG5nXCI7XG5pbXBvcnQgV2VhdGhlciBmcm9tIFwiLi9pbWcvd2VhdGhlci5wbmdcIjtcbmltcG9ydCBUaWN0YWMgZnJvbSBcIi4vaW1nL3RpY3RhYy5wbmdcIjtcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gXCIuL2ltZy9jYWxjdWxhdG9yLnBuZ1wiO1xuaW1wb3J0IFJlc3RhdXJhbnQgZnJvbSBcIi4vaW1nL3Jlc3RhdXJhbnQucG5nXCI7XG5pbXBvcnQgRXRjaCBmcm9tIFwiLi9pbWcvZXRjaC5wbmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEl0ZW0oaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgbGl2ZURlbW8sIHNvdXJjZUNvZGUpIHtcblx0Y29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtXCIpO1xuXG5cdGNvbnN0IHByb2plY3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdHByb2plY3RJbWFnZS5zcmMgPSBpbWFnZTtcblx0cHJvamVjdEltYWdlLmFsdCA9IHRpdGxlO1xuXHRwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0SW1hZ2UpO1xuXG5cdGNvbnN0IHByb2plY3RJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdEl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbS1kaXZcIik7XG5cblx0Y29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuXHRjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0cHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cblx0Y29uc3QgcHJvamVjdExpbmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0TGlua0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saW5rLWRpdlwiKTtcblxuXHRjb25zdCBwcm9qZWN0TGl2ZURlbW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0cHJvamVjdExpdmVEZW1vLmhyZWYgPSBsaXZlRGVtbztcblx0cHJvamVjdExpdmVEZW1vLnRleHRDb250ZW50ID0gXCJMaXZlIERlbW9cIjtcblx0cHJvamVjdExpbmtEaXYuYXBwZW5kQ2hpbGQocHJvamVjdExpdmVEZW1vKTtcblxuXHRjb25zdCBwcm9qZWN0U291cmNlQ29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRwcm9qZWN0U291cmNlQ29kZS5ocmVmID0gc291cmNlQ29kZTtcblx0cHJvamVjdFNvdXJjZUNvZGUudGV4dENvbnRlbnQgPSBcIlNvdXJjZSBDb2RlXCI7XG5cdHByb2plY3RMaW5rRGl2LmFwcGVuZENoaWxkKHByb2plY3RTb3VyY2VDb2RlKTtcblxuXHRwcm9qZWN0SXRlbURpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXHRwcm9qZWN0SXRlbURpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuXHRwcm9qZWN0SXRlbURpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGlua0Rpdik7XG5cdHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtRGl2KTtcblxuXHRyZXR1cm4gcHJvamVjdEl0ZW07XG59XG5cbmZ1bmN0aW9uIHByb2plY3QoKSB7XG5cdGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRpdlwiKTtcblx0Y29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cdHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG5cblx0Y29uc3QgdG9kbyA9IGNyZWF0ZVByb2plY3RJdGVtKFxuXHRcdFRvZG8sXG5cdFx0XCJUb2RvIExpc3RcIixcblx0XHRcIlRvZG8gTGlzdCBpcyBhIHBvd2VyZnVsIHRhc2sgbWFuYWdlbWVudCBhcHBsaWNhdGlvbiB0aGF0IGhlbHBzIHlvdSBzdGF5IG9yZ2FuaXplZCBhbmQgcHJvZHVjdGl2ZS4gTWFuYWdlIHRhc2tzLCBwcm9qZWN0cywgYW5kIG5vdGVzIGVmZm9ydGxlc3NseS4gRmVhdHVyZXMgaW5jbHVkZSBwcmlvcml0eSBsZXZlbHMsIGR1ZSBkYXRlcywgc2VhcmNoIGZ1bmN0aW9uYWxpdHksIGFuZCBkYXJrL2xpZ2h0IHRoZW1lLiBHZXQgc3RhcnRlZCBhbmQgYm9vc3QgeW91ciBwcm9kdWN0aXZpdHkgdG9kYXkhXCIsXG5cdFx0XCJodHRwczovL3NoYWhpci00Ny5naXRodWIuaW8vVG9kby1MaXN0L1wiLFxuXHRcdFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00Ny9Ub2RvLUxpc3RcIixcblx0KTtcblxuXHRjb25zdCBiYXR0bGVzaGlwID0gY3JlYXRlUHJvamVjdEl0ZW0oXG5cdFx0QmF0dGxlc2hpcCxcblx0XHRcIkJhdHRsZXNoaXBcIixcblx0XHRcIkEgd2ViLWJhc2VkIEJhdHRsZXNoaXAgZ2FtZSB3aXRoIGEgc3RyYXRlZ2ljIEFJLiBQbGF5ZXJzIGVuZ2FnZSBpbiBjbGFzc2ljIG5hdmFsIHdhcmZhcmUgYWdhaW5zdCBhIGNvbXB1dGVyLiBDb2RlIGlzIG9wZW4gZm9yIGNvbnRyaWJ1dGlvbnMgYW5kIHRlc3RzIGVuc3VyZSByb2J1c3QgZ2FtZXBsYXkuUGxheSBub3chXCIsXG5cdFx0XCJodHRwczovL3NoYWhpci00Ny5naXRodWIuaW8vQmF0dGxlc2hpcC9cIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvQmF0dGxlc2hpcFwiLFxuXHQpO1xuXG5cdGNvbnN0IHdlYXRoZXIgPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRXZWF0aGVyLFxuXHRcdFwiV2VhdGhlciBBcHBcIixcblx0XHRcIldlYXRoZXIgV2hpeiBpcyBhIHdlYiBhcHAgcHJvdmlkaW5nIGN1cnJlbnQgd2VhdGhlciwgaG91cmx5ICYgMi1kYXkgZm9yZWNhc3RzIGZvciBkaWZmZXJlbnQgbG9jYXRpb25zLiBTd2l0Y2ggYmV0d2VlbiBpbXBlcmlhbCAmIG1ldHJpYyB1bml0cy4gQnVpbHQgd2l0aCBIVE1MLCBDU1MsIEpTLCBXZWJwYWNrLCBCYWJlbCwgRVNMaW50ICYgUHJldHRpZXIuIEFQSXM6IE9wZW5XZWF0aGVyICYgTWFwYm94LiBTdGF5IHByZXBhcmVkIHdpdGggYWNjdXJhdGUgd2VhdGhlciBkYXRhIVwiLFxuXHRcdFwiaHR0cHM6Ly9zaGFoaXItNDcuZ2l0aHViLmlvL1dlYXRoZXItV2hpei9cIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvV2VhdGhlci1XaGl6XCIsXG5cdCk7XG5cblx0Y29uc3QgdGljdGFjID0gY3JlYXRlUHJvamVjdEl0ZW0oXG5cdFx0VGljdGFjLFxuXHRcdFwiVGljIFRhYyBUb2VcIixcblx0XHRcIkVuam95IHRoZSBjbGFzc2ljIFRpYyBUYWMgVG9lIGdhbWUgd2l0aCBjdXN0b21pemFibGUgbWFya2VycywgY29sb3JzLCBhbmQgcGxheWVyIG5hbWVzLiBQbGF5IGFnYWluc3QgYSBmcmllbmQgb3IgY2hhbGxlbmdpbmcgQUkuIFJlc3BvbnNpdmUgZGVzaWduLCB2aXN1YWxseSBhcHBlYWxpbmcgaW50ZXJmYWNlLiBTb3VyY2UgY29kZSBmb3IgSFRNTCwgQ1NTLCBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uLiBFeHBlcmllbmNlIGhvdXJzIG9mIGludGVyYWN0aXZlIGFuZCBhZGRpY3RpdmUgZnVuIVwiLFxuXHRcdFwiaHR0cHM6Ly9zaGFoaXItNDcuZ2l0aHViLmlvL1RpYy1UYWMtVG9lL1wiLFxuXHRcdFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00Ny9UaWMtVGFjLXRvZVwiLFxuXHQpO1xuXG5cdGNvbnN0IGNhbGN1bGF0b3IgPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRDYWxjdWxhdG9yLFxuXHRcdFwiQ2FsY3VsYXRvclwiLFxuXHRcdFwiVGhpcyBpcyBhIHNpbXBsZSBjYWxjdWxhdG9yIGFwcGxpY2F0aW9uIHdpdGgga2V5Ym9hcmQgc3VwcG9ydC4gSXQgYWxsb3dzIHlvdSB0byBwZXJmb3JtIGJhc2ljIGFyaXRobWV0aWMgb3BlcmF0aW9ucyBzdWNoIGFzIGFkZGl0aW9uLCBzdWJ0cmFjdGlvbiwgbXVsdGlwbGljYXRpb24sIGFuZCBkaXZpc2lvbi4gSXQgYWxzbyBpbmNsdWRlcyBhZGRpdGlvbmFsIGZlYXR1cmVzIGxpa2UgY2FsY3VsYXRpbmcgdGhlIGZhY3RvcmlhbCBhbmQgZXhwb25lbnRpYXRpb24uXCIsXG5cdFx0XCJodHRwczovL3NoYWhpci00Ny5naXRodWIuaW8vQ2FsY3VsYXRvci9cIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvQ2FsY3VsYXRvclwiLFxuXHQpO1xuXG5cdGNvbnN0IHJlc3RhdXJhbnQgPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRSZXN0YXVyYW50LFxuXHRcdFwiUmVzdGF1cmFudCBQYWdlXCIsXG5cdFx0XCJBIHdlYi1iYXNlZCBwbGF0Zm9ybSB0aGF0IHByb3ZpZGVzIGluZm9ybWF0aW9uIGFuZCBmZWF0dXJlcyByZWxhdGVkIHRvIGEgZmljdGlvbmFsIHJlc3RhdXJhbnQgY2FsbGVkIHRoZSBHYWxhY3RpYyBDYW50aW5hLiBUaGUgYXBwbGljYXRpb24gYWxsb3dzIHVzZXJzIHRvIGV4cGxvcmUgdmFyaW91cyBzZWN0aW9ucyBzdWNoIGFzIHRoZSBob21lIHBhZ2UsIG1lbnUgcGFnZSwgY29udGFjdCBwYWdlLCBhYm91dCB1cyBwYWdlLCByZXZpZXcgcGFnZSwgYW5kIEZBUSBwYWdlLlwiLFxuXHRcdFwiaHR0cHM6Ly9zaGFoaXItNDcuZ2l0aHViLmlvL1Jlc3RhdXJhbnQtUGFnZS9cIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvUmVzdGF1cmFudC1QYWdlXCIsXG5cdCk7XG5cblx0Y29uc3QgZXRjaCA9IGNyZWF0ZVByb2plY3RJdGVtKFxuXHRcdEV0Y2gsXG5cdFx0XCJFdGNoIGEgU2tldGNoXCIsXG5cdFx0XCJFeHBlcmllbmNlIHRoZSBjbGFzc2ljIEV0Y2gtYS1Ta2V0Y2ggZnVuIG9ubGluZSEgRHJhdyBhbmQgY3JlYXRlIG1hc3RlcnBpZWNlcyB3aXRoIHRoaXMgc2ltcGxlIHdlYiBhcHBsaWNhdGlvbi4gQnVpbHQgdXNpbmcgSFRNTCwgQ1NTLCBhbmQgSmF2YVNjcmlwdC5cIixcblx0XHRcImh0dHBzOi8vc2hhaGlyLTQ3LmdpdGh1Yi5pby9FdGNoLWEtU2tldGNoL1wiLFxuXHRcdFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00Ny9FdGNoLWEtU2tldGNoL1wiLFxuXHQpO1xuXG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kbyk7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYmF0dGxlc2hpcCk7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlcik7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGljdGFjKTtcblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjYWxjdWxhdG9yKTtcblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50KTtcblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChldGNoKTtcblxuXHRwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcblx0bWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuXHRtYWluLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0O1xuIiwiaW1wb3J0IEljb24gZnJvbSBcIi4vaW1nL2ljb24uc3ZnXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9pbWcvaG9tZS5zdmdcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi9pbWcvYWJvdXQuc3ZnXCI7XG5pbXBvcnQgQ29kZSBmcm9tIFwiLi9pbWcvY29kZS5zdmdcIjtcbmltcG9ydCBEb2MgZnJvbSBcIi4vaW1nL2RvYy5zdmdcIjtcbmltcG9ydCBHaXRIdWIgZnJvbSBcIi4vaW1nL2dpdFNvY2lhbC5zdmdcIjtcbmltcG9ydCBoYW1idXJnZXJJbWcgZnJvbSBcIi4vaW1nL2hhbWJ1cmdlci5zdmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuXHRjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuXHRiYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1iYXJcIik7XG5cblx0Y29uc3QgbG9nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bG9nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2ctY29udGFpbmVyXCIpO1xuXHRjb25zdCBsb2dvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bG9nb0JveC5jbGFzc0xpc3QuYWRkKFwibG9nby1ib3hcIik7XG5cdGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRsb2dvLnNyYyA9IEljb247XG5cdGxvZ28uYWx0ID0gXCJsb2dvXCI7XG5cdGNvbnN0IGxvZ29MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGxvZ29MaW5rLmFwcGVuZENoaWxkKGxvZ28pO1xuXHRsb2dvQm94LmFwcGVuZENoaWxkKGxvZ29MaW5rKTtcblx0Y29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdGxvZ29UZXh0LnRleHRDb250ZW50ID0gXCJTaGFoaXIgQWhtZWRcIjtcblx0Y29uc3QgbG9nb0xpbmsyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGxvZ29MaW5rMi5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XG5cdGxvZ29Cb3guYXBwZW5kQ2hpbGQobG9nb0xpbmsyKTtcblxuXHRsb2dDb250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0JveCk7XG5cblx0Y29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRuYXZMaW5rcy5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtzXCIpO1xuXG5cdGNvbnN0IGhvbWVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRob21lQm94LmNsYXNzTGlzdC5hZGQoXCJuYXYtYm94XCIpO1xuXHRjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRob21lTGluay5ocmVmID0gXCIjXCI7XG5cdGhvbWVMaW5rLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cdGhvbWVCb3guYXBwZW5kQ2hpbGQoaG9tZUxpbmspO1xuXG5cdGNvbnN0IGhvbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0aG9tZUljb24uc3JjID0gSG9tZTtcblx0aG9tZUljb24uYWx0ID0gXCJob21lXCI7XG5cdGhvbWVCb3guYXBwZW5kQ2hpbGQoaG9tZUljb24pO1xuXG5cdG5hdkxpbmtzLmFwcGVuZENoaWxkKGhvbWVCb3gpO1xuXG5cdGNvbnN0IG1lbnVMaW5rYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bWVudUxpbmtib3guY2xhc3NMaXN0LmFkZChcIm5hdi1ib3hcIik7XG5cdGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdG1lbnVMaW5rLmhyZWYgPSBcIiNcIjtcblx0bWVudUxpbmsudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG5cdG1lbnVMaW5rYm94LmFwcGVuZENoaWxkKG1lbnVMaW5rKTtcblxuXHRjb25zdCBtZW51SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdG1lbnVJY29uLnNyYyA9IEFib3V0O1xuXHRtZW51SWNvbi5hbHQgPSBcImFib3V0XCI7XG5cdG1lbnVMaW5rYm94LmFwcGVuZENoaWxkKG1lbnVJY29uKTtcblx0bmF2TGlua3MuYXBwZW5kQ2hpbGQobWVudUxpbmtib3gpO1xuXG5cdGNvbnN0IGNvbnRhY3RMaW5rYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29udGFjdExpbmtib3guY2xhc3NMaXN0LmFkZChcIm5hdi1ib3hcIik7XG5cdGNvbnN0IGNvbnRhY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGNvbnRhY3RMaW5rLmhyZWYgPSBcIiNcIjtcblx0Y29udGFjdExpbmsudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cdGNvbnRhY3RMaW5rYm94LmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rKTtcblxuXHRjb25zdCBjb250YWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGNvbnRhY3RJY29uLnNyYyA9IENvZGU7XG5cdGNvbnRhY3RJY29uLmFsdCA9IFwicHJvamVjdHNcIjtcblx0Y29udGFjdExpbmtib3guYXBwZW5kQ2hpbGQoY29udGFjdEljb24pO1xuXHRuYXZMaW5rcy5hcHBlbmRDaGlsZChjb250YWN0TGlua2JveCk7XG5cblx0Y29uc3QgQWJvdXRMaW5rYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0QWJvdXRMaW5rYm94LmNsYXNzTGlzdC5hZGQoXCJuYXYtYm94XCIpO1xuXG5cdGNvbnN0IEFib3V0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRBYm91dExpbmsuaHJlZiA9IFwiI1wiO1xuXHRBYm91dExpbmsudGV4dENvbnRlbnQgPSBcIlJlc3VtZVwiO1xuXHRBYm91dExpbmtib3guYXBwZW5kQ2hpbGQoQWJvdXRMaW5rKTtcblxuXHRjb25zdCBBYm91dEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRBYm91dEljb24uc3JjID0gRG9jO1xuXHRBYm91dEljb24uYWx0ID0gXCJyZXN1bWVcIjtcblx0QWJvdXRMaW5rYm94LmFwcGVuZENoaWxkKEFib3V0SWNvbik7XG5cdG5hdkxpbmtzLmFwcGVuZENoaWxkKEFib3V0TGlua2JveCk7XG5cblx0Ly8gaGFtYnVyZ2VyIG1lbnVcblx0Y29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0aGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoXCJoYW1idXJnZXJcIik7XG5cdGNvbnN0IGhhbWJ1cmdlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRoYW1idXJnZXJJY29uLnNyYyA9IGhhbWJ1cmdlckltZztcblx0aGFtYnVyZ2VySWNvbi5hbHQgPSBcImhhbWJ1cmdlclwiO1xuXHRoYW1idXJnZXIuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VySWNvbik7XG5cblx0Y29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZChcImhhbWJ1cmdlci1tZW51XCIpO1xuXHRjb25zdCBoYW1idXJnZXJNZW51SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRoYW1idXJnZXJNZW51SG9tZS5ocmVmID0gXCIjXCI7XG5cdGhhbWJ1cmdlck1lbnVIb21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cdGhhbWJ1cmdlck1lbnUuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudUhvbWUpO1xuXHRjb25zdCBoYW1idXJnZXJNZW51QWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0aGFtYnVyZ2VyTWVudUFib3V0LmhyZWYgPSBcIiNcIjtcblx0aGFtYnVyZ2VyTWVudUFib3V0LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuXHRoYW1idXJnZXJNZW51LmFwcGVuZENoaWxkKGhhbWJ1cmdlck1lbnVBYm91dCk7XG5cdGNvbnN0IGhhbWJ1cmdlck1lbnVQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRoYW1idXJnZXJNZW51UHJvamVjdHMuaHJlZiA9IFwiI1wiO1xuXHRoYW1idXJnZXJNZW51UHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cdGhhbWJ1cmdlck1lbnUuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudVByb2plY3RzKTtcblx0Y29uc3QgaGFtYnVyZ2VyTWVudVJlc3VtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRoYW1idXJnZXJNZW51UmVzdW1lLmhyZWYgPSBcIiNcIjtcblx0aGFtYnVyZ2VyTWVudVJlc3VtZS50ZXh0Q29udGVudCA9IFwiUmVzdW1lXCI7XG5cdGhhbWJ1cmdlck1lbnUuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudVJlc3VtZSk7XG5cblx0aGFtYnVyZ2VyLmFwcGVuZENoaWxkKGhhbWJ1cmdlck1lbnUpO1xuXHRuYXZMaW5rcy5hcHBlbmRDaGlsZChoYW1idXJnZXIpO1xuXG5cdGJhci5hcHBlbmRDaGlsZChsb2dDb250YWluZXIpO1xuXHRiYXIuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xuXG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIik7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuXHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXHRmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuXHRjb25zdCBnaXRIdWJQcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGdpdEh1YlByb2ZpbGUuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00N1wiO1xuXG5cdGNvbnN0IGdpdEh1YlByb2ZpbGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRnaXRIdWJQcm9maWxlSW1nLnNyYyA9IEdpdEh1Yjtcblx0Z2l0SHViUHJvZmlsZUltZy5hbHQgPSBcImdpdEh1YiBMb2dvXCI7XG5cblx0Y29uc3QgZ2l0SHViUHJvZmlsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgYXRTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0YXRTeW1ib2wuY2xhc3NMaXN0LmFkZChcImF0LXN5bWJvbFwiKTtcblx0YXRTeW1ib2wudGV4dENvbnRlbnQgPSBcIkBcIjtcblx0Y29uc3QgdXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0dXNlcm5hbWUudGV4dENvbnRlbnQgPSBcIlNoYWhpci00N1wiO1xuXHRnaXRIdWJQcm9maWxlVGV4dC5hcHBlbmRDaGlsZChhdFN5bWJvbCk7XG5cdGdpdEh1YlByb2ZpbGVUZXh0LmFwcGVuZENoaWxkKHVzZXJuYW1lKTtcblxuXHRnaXRIdWJQcm9maWxlLmFwcGVuZENoaWxkKGdpdEh1YlByb2ZpbGVJbWcpO1xuXHRnaXRIdWJQcm9maWxlLmFwcGVuZENoaWxkKGdpdEh1YlByb2ZpbGVUZXh0KTtcblxuXHRjb25zdCBzZXBlcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0c2VwZXJhdG9yLnRleHRDb250ZW50ID0gXCJ8XCI7XG5cblx0Y29uc3QgZ2l0SHViUmVwbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRIdWJSZXBvLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvUG9ydGZvbGlvLVdlYnNpdGVcIjtcblx0Z2l0SHViUmVwby50ZXh0Q29udGVudCA9IFwiU291cmNlIENvZGVcIjtcblxuXHRmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0SHViUHJvZmlsZSk7XG5cdGZvb3Rlci5hcHBlbmRDaGlsZChzZXBlcmF0b3IpO1xuXHRmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0SHViUmVwbyk7XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpLmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIHNldHVwUGFnZSgpIHtcblx0Y3JlYXRlTmF2QmFyKCk7XG5cdGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRhaW5lclwiKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpLmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuXHRjcmVhdGVGb290ZXIoKTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJhclwiKTtcblx0XHRpZiAod2luZG93LnNjcm9sbFkgPiAwKSB7XG5cdFx0XHRuYXZCYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1iYXItc2Nyb2xsZWRcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5hdkJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LWJhci1zY3JvbGxlZFwiKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIGhhbWJ1cmdlciBtZW51XG5cdGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyXCIpO1xuXHRjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXItbWVudVwiKTtcblx0aGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0aWYgKGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG5cdFx0XHRoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0XHRoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcblx0XHR9IGVsc2UgaWYgKGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW5hY3RpdmVcIikpIHtcblx0XHRcdGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuXHRcdFx0aGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdFx0fVxuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0dXBQYWdlO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xufVxuXG4vKiBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIFxcYG1haW5cXGAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gKi9cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIFxcYGgxXFxgIGVsZW1lbnRzIHdpdGhpbiBcXGBzZWN0aW9uXFxgIGFuZFxuICogXFxgYXJ0aWNsZVxcYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5wcmUge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuICogUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAqIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuaW1nIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5cbmJ1dHRvbixcbmlucHV0IHsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b24sXG5zZWxlY3QgeyAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuW3R5cGU9XCJidXR0b25cIl0sXG5bdHlwZT1cInJlc2V0XCJdLFxuW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuXG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gSUUuXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gKiAgICBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cbiAqL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICovXG5cblt0eXBlPVwiY2hlY2tib3hcIl0sXG5bdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuICovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qIEludGVyYWN0aXZlXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cbiAqL1xuXG5kZXRhaWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLyogTWlzY1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXG4gKi9cblxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxuICovXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsU0FBUyxFQUFFLE1BQU07RUFDakIsaUJBQWlCLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsbUJBQW1CLEVBQUUsTUFBTTtFQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDM0M7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRTs7QUFFRjs7O0VBR0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7Ozs7RUFLRSxvQkFBb0IsRUFBRSxNQUFNO0VBQzVCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLGlCQUFpQixFQUFFLE1BQU07RUFDekIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1FBQ1EsTUFBTTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7U0FDUyxNQUFNO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7RUFLRTs7QUFFRjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG5cdGNvbG9yOiAjZTBlMGUwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG5cdGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG5cdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG5kaXYjY29udGVudCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uYXYtYmFyIHtcblx0cG9zaXRpb246IHN0aWNreTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nOiAxLjVyZW0gM3JlbTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblx0ei1pbmRleDogOTk5O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogTm8gYmFja2dyb3VuZCBpbml0aWFsbHkgKi9cblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDApOyAvKiBObyBibHVyIGluaXRpYWxseSAqL1xuXHRib3gtc2hhZG93OlxuXHRcdDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcblx0XHQwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuXG4ubmF2LWJhci1zY3JvbGxlZCB7XG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsgLyogQWRqdXN0IHRoZSBibHVyIHZhbHVlIGFzIG5lZWRlZCAqL1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxuXHRcdDc5LFxuXHRcdDIwOSxcblx0XHQxOTcsXG5cdFx0MC4xNVxuXHQpOyAvKiBSR0JBIGNvbG9yIGZvciB0cmFuc2x1Y2VudCB0ZWFsICovXG59XG5cbi5sb2dvLWJveCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMXJlbTtcbn1cblxuLmxvZ28tYm94IGltZyB7XG5cdHdpZHRoOiAzcmVtO1xuXHRoZWlnaHQ6IGF1dG87XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZy1jb250YWluZXI6aG92ZXIge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dvLWJveCBhIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubG9nLWNvbnRhaW5lcjpob3ZlcjphZnRlciB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ubG9nLWNvbnRhaW5lcjpob3ZlciAubG9nby1ib3ggYSBoMSB7XG5cdGNvbG9yOiAjZmZmZmZmZmY7XG59XG5cbi5sb2ctY29udGFpbmVyOmhvdmVyIC5sb2dvLWJveCBpbWcge1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XG59XG5cbi5sb2ctY29udGFpbmVyOmFmdGVyIHtcblx0YmFja2dyb3VuZDogIzRmZDFjNTtcblx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0Ym90dG9tOiAxcHg7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRoZWlnaHQ6IDVweDtcblx0bGVmdDogMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcblx0d2lkdGg6IDA7XG5cdHotaW5kZXg6IC0xO1xufVxuXG4ubG9nby1ib3ggYSBoMSB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRtYXJnaW46IDA7XG59XG5cbi5uYXYtbGlua3Mge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDJyZW07XG59XG5cbi5uYXYtbGlua3MgYSB7XG5cdGNvbG9yOiAjZTBlMGUwO1xuXHRmb250LXNpemU6IDEuNXJlbTtcblx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubmF2LWxpbmtzIGE6aG92ZXIge1xuXHRjb2xvcjogI2ZmZmZmZmZmO1xufVxuXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyIGEge1xuXHRjb2xvcjogI2ZmZmZmZmZmO1xufVxuXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyIGltZyB7XG5cdGZpbHRlcjogYnJpZ2h0bmVzcygzKTtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlcjphZnRlciB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LWxpbmtzIC5uYXYtYm94IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmF2LWxpbmtzIC5uYXYtYm94OmFmdGVyIHtcblx0YmFja2dyb3VuZDogIzRmZDFjNTtcblx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0Ym90dG9tOiAtNXB4O1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiBibG9jaztcblx0aGVpZ2h0OiA1cHg7XG5cdGxlZnQ6IDA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG5cdHdpZHRoOiAwO1xuXHR6LWluZGV4OiAtMTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiA3cmVtO1xufVxuXG4uZmlyc3QtYmxvY2staG9tZSB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG5cdHBhZGRpbmc6IDAgM3JlbTtcblx0Z2FwOiAxcmVtO1xufVxuXG4udGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3ViLXRleHQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxcmVtO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcblx0d2lkdGg6IDc1JTtcbn1cblxuLmNvbXB1dGVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bztcbn1cblxuLmZpcnN0LXRleHQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0Z2FwOiAxcmVtO1xufVxuXG4udHlwZWQtdGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LXNpemU6IDJyZW07XG59XG5cbiN0eXBlZC10ZXh0IHtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjb2xvcjogIzRmZDFjNTtcbn1cblxuLnR5cGVkLWN1cnNvciB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6ICM0ZmQxYzU7XG5cdGFuaW1hdGlvbjogYmxpbmsgMC43cyBpbmZpbml0ZTtcbn1cblxuLm5hdi1ib3gge1xuXHRwYWRkaW5nOiAwLjI1cmVtIDByZW07XG59XG5cbi53YXZlIHtcblx0d2lkdGg6IDJyZW07XG5cdGhlaWdodDogYXV0bztcblx0YW5pbWF0aW9uLW5hbWU6IHdhdmUtYW5pbWF0aW9uO1xuXHRhbmltYXRpb24tZHVyYXRpb246IDIuNXM7XG5cdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuXHR0cmFuc2Zvcm0tb3JpZ2luOiA3MCUgNzAlO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xufVxuXG5Aa2V5ZnJhbWVzIHdhdmUtYW5pbWF0aW9uIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR9XG5cdDEwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcblx0fVxuXHQyMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDEyZGVnKTtcblx0fVxuXHQzMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG5cdH1cblx0NDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5ZGVnKTtcblx0fVxuXHQ1MCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR9XG59XG5cbi5uYW1lIHtcblx0Zm9udC1zaXplOiAzcmVtO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRjb2xvcjogIzRmZDFjNTtcbn1cblxuLm5hdi1ib3gge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cdGdhcDogMC41cmVtO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2LWJveCBpbWcge1xuXHR3aWR0aDogMnJlbTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4uc2Vjb25kLXRleHQtY29udGFpbmVyIGg1IHtcblx0bWFyZ2luOiAwO1xufVxuXG4uZmlyc3QtdGV4dC1jb250YWluZXIgaDMge1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LXNpemU6IDJyZW07XG5cdG1hcmdpbjogMDtcbn1cblxuLnNlY29uZC10ZXh0LWNvbnRhaW5lciBoNSB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNlY29uZC1ibG9jay1ob21lIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0cGFkZGluZzogMCAzcmVtO1xuXHRtYXJnaW46IDAgNXJlbTtcblx0Z2FwOiA1cmVtO1xufVxuXG4uc2Vjb25kLWJsb2NrLXRleHQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhhY2tlciB7XG5cdHdpZHRoOiAzNSU7XG5cdGhlaWdodDogYXV0bztcbn1cblxuLnRleHQtZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAzcmVtO1xufVxuXG4udGV4dC1kaXYgaDMge1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMS45cmVtO1xuXHRtYXJnaW46IDA7XG59XG5cbi5oaWdobGlnaHQsXG4udGV4dC1kaXYgaDMgc3BhbiB7XG5cdGNvbG9yOiAjNGZkMWM1O1xufVxuXG4uc3ViLWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMnJlbTtcbn1cblxuLnN1Yi10ZXh0IHtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0bWFyZ2luOiAwO1xufVxuXG4uc29jaWFsLWljb25zIGltZyB7XG5cdHdpZHRoOiAyLjVyZW07XG5cdGhlaWdodDogYXV0bztcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zb2NpYWwtaWNvbnMgaW1nOmhvdmVyIHtcblx0ZmlsdGVyOiBpbnZlcnQoMSk7XG5cdGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoNzksIDIwOSwgMTk3LCAwLjUpO1xufVxuXG4uc29jaWFsLXRleHQtZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjVyZW07XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtdGV4dC1kaXYgaDMge1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zb2NpYWwtdGV4dC1kaXYgKiB7XG5cdG1hcmdpbjogMDtcbn1cblxuLnNvY2lhbC1pY29ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRnYXA6IDJyZW07XG59XG5cbi5zb2NpYWwtc3ViLXRleHQge1xuXHRmb250LXNpemU6IDAuOHJlbTtcblx0Zm9udC13ZWlnaHQ6IDU1MDtcbn1cblxuLnNvY2lhbC1ibG9jayB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMnJlbTtcbn1cblxuLnNvY2lhbC1zdWItdGV4dCBzcGFuIHtcblx0Y29sb3I6ICM0ZmQxYzU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGb290ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mb290ZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAxcmVtO1xuXHRoZWlnaHQ6IDIuNXJlbTtcblx0bWFyZ2luLXRvcDogMnJlbTtcblx0cGFkZGluZzogMC4yNXJlbSAzcmVtO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1O1xufVxuXG5mb290ZXIgYSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMC41cmVtO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGZvbnQtc2l6ZTogMS4zcmVtO1xuXHRmb250LXdlaWdodDogMTAwO1xuXHRjb2xvcjogI2ZhZmFmYTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuZm9vdGVyIHAge1xuXHRtYXJnaW46IDAuNXJlbSAwO1xufVxuXG5mb290ZXIgYTpob3ZlcixcbmZvb3RlciBhOmFjdGl2ZSB7XG5cdGNvbG9yOiAjYjAyZTM5O1xufVxuXG5mb290ZXIgYSBpbWcge1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbmZvb3RlciBhOmhvdmVyIGltZyxcbmZvb3RlciBhOmFjdGl2ZSBpbWcge1xuXHRmaWx0ZXI6IGludmVydCgxKTtcblx0Ym94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSg3OSwgMjA5LCAxOTcsIDAuNSk7XG59XG5cbi5hdC1zeW1ib2wge1xuXHRmb250LXdlaWdodDogOTAwO1xufVxuXG5mb290ZXIgaW1nIHtcblx0d2lkdGg6IDJyZW07XG5cdGhlaWdodDogYXV0bztcbn1cblxuLyogU3R5bGVzIHRoZSBzY3JvbGxiYXIgdHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwOyAvKiBBIGRhcmtlciBzaGFkZSBmb3IgY29udHJhc3QgKi9cbn1cblxuLyogU3R5bGVzIHRoZSBzY3JvbGxiYXIgaGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTsgLyogVGhlIGNvbG9yIHlvdSBwcm92aWRlZCBmb3IgdGhlIGhhbmRsZSAqL1xuXHRib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHRoZSBoYW5kbGUgKi9cbn1cblxuLyogU3R5bGVzIHRoZSBzY3JvbGxiYXIgaXRzZWxmIChpbmNsdWRpbmcgdGhlIHRyYWNrKSAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG5cdHdpZHRoOiAxMnB4OyAvKiBBZGp1c3QgdG8gdGhlIHNpemUgeW91IHByZWZlciAqL1xufVxuXG4vKiBPcHRpb25hbDogc3R5bGVzIHRoZSBzY3JvbGxiYXIgaGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzNhOWQ5YjsgLyogQSBzbGlnaHRseSBkYXJrZXIgc2hhZGUgb2YgdGhlIGhhbmRsZSBjb2xvciBmb3IgaG92ZXIgKi9cbn1cblxuLyogRmlyZWZveCAqL1xuaHRtbCB7XG5cdHNjcm9sbGJhci1jb2xvcjogIzRmZDFjNSAjMmMzZTUwO1xuXHRzY3JvbGxiYXItd2lkdGg6IHRoaW47IC8qIFlvdSBjYW4gdXNlICdhdXRvJyBvciAndGhpbicgKi9cbn1cblxuLmFib3V0LXBhZ2Uge1xuXHRwYWRkaW5nOiAwcmVtIDNyZW07XG5cdHBhZGRpbmctYm90dG9tOiAycmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDVyZW07XG59XG5cbi5hYm91dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDJyZW07XG59XG5cbi5hYm91dC10ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWJvdXQtbWUgc3BhbiB7XG5cdGNvbG9yOiAjNGZkMWM1O1xufVxuXG4uYWJvdXQtbWUtZGl2IHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmFib3V0LW1lLXBpY3R1cmUge1xuXHR3aWR0aDogNzUlO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5hYm91dC1tZS10ZXh0LWRpdiB7XG5cdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDFyZW07XG59XG5cbi5hYm91dC1tZS10ZXh0Om50aC1vZi10eXBlKDEpIHtcblx0bWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRW5kIG9mIEZvb3RlciBzdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uY2Fyb3VzZWwtaXRlbSBpbWcge1xuXHR3aWR0aDogM3JlbTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4uc2Vjb25kLWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogM3JlbTtcblx0cGFkZGluZzogMCAzcmVtO1xufVxuXG4uc2Vjb25kLWRpdi10ZXh0IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGdhcDogMXJlbTtcbn1cblxuLnNlY29uZC1kaXYtdGV4dCBwIHtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRtYXJnaW46IDA7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5jYXJvdXNlbC1kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRib3JkZXI6IDNweCBzb2xpZCAjZGRkZGRkO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYmFjay1idG4sXG4uZm9yd2FyZC1idG4ge1xuXHRmb250LXNpemU6IDIuNXJlbTtcblx0Y29sb3I6ICMxNTIwMmI7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG5cdGJvcmRlcjogbm9uZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2Fyb3VzZWwge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRvdmVyZmxvdy14OiBhdXRvO1xuXHRnYXA6IDJyZW07XG5cdHBhZGRpbmc6IDFyZW07XG5cdHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG5cdG1hcmdpbi10b3A6IDAuMnJlbTtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG5cdG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuXHRtaW4td2lkdGg6IDdyZW07XG5cdG1pbi1oZWlnaHQ6IDEwcmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiAxcmVtO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcblx0LW1zLXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMTc7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHAge1xuXHRmb250LXNpemU6IDEuNXJlbTtcblx0bWFyZ2luOiAwO1xufVxuXG4uY2Fyb3VzZWwtaXRlbXMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiAycmVtO1xufVxuXG4vKiBTdHlsZSB0aGUgc2Nyb2xsYmFyICovXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcblx0d2lkdGg6IDVweDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsYmFyICovXG5cdGhlaWdodDogMTBweDsgLyogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIHNjcm9sbGJhciAqL1xufVxuXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0aHVtYiAqL1xuXHRib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgdGhlIHNjcm9sbGJhciB0aHVtYiAqL1xufVxuXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0aHVtYiBvbiBob3ZlciAqL1xufVxuXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgdHJhY2sgKi9cbn1cblxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciBjb3JuZXIgKi9cbn1cblxuLnByb2plY3QtZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAycmVtO1xuXHRwYWRkaW5nOiAwIDNyZW07XG59XG5cbi5wcm9qZWN0LWRpdiBoMSB7XG5cdGNvbG9yOiAjNGZkMWM1O1xufVxuXG4ucHJvamVjdC1pdGVtIGltZyB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXHRnYXA6IDJyZW07XG59XG5cbi5wcm9qZWN0LWl0ZW0ge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMnJlbTtcblx0cGFkZGluZzogMXJlbTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjE3O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuXG4ucHJvamVjdC1saW5rLWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMXJlbTtcbn1cblxuLnByb2plY3QtbGluay1kaXYgYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Y29sb3I6ICM0ZmQxYzU7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjNGZkMWM1O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLnByb2plY3QtbGluay1kaXYgYTpob3ZlciB7XG5cdGNvbG9yOiAjZTBlMGUwO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1O1xufVxuXG4ucHJvamVjdC1pdGVtLWRpdiBwIHtcblx0Zm9udC1zaXplOiAxLjFyZW07XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi8qIC4uLmV4aXN0aW5nIHN0eWxlcyAqL1xuXG4uaGFtYnVyZ2VyLW1lbnUge1xuXHRkaXNwbGF5OiBub25lO1xuXHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG59XG5cbi5oYW1idXJnZXIge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcblx0LnNlY29uZC1ibG9jay1ob21lIHtcblx0XHRtYXJnaW46IDA7XG5cdH1cblxuXHQubG9nby1ib3ggaW1nIHtcblx0XHR3aWR0aDogMi41cmVtO1xuXHRcdGhlaWdodDogYXV0bztcblx0fVxuXG5cdC5sb2dvLWJveCBhIGgxIHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0fVxuXG5cdGRpdi5oYW1idXJnZXItbWVudS5pbmFjdGl2ZSxcblx0ZGl2LmhhbWJ1cmdlci1tZW51LmFjdGl2ZSB7XG5cdFx0bWFyZ2luLXRvcDogMS4ycmVtO1xuXHR9XG5cblx0Lm1haW4tY29udGFpbmVyIHtcblx0XHRnYXA6IDFyZW07XG5cdH1cblxuXHQudGV4dC1kaXYge1xuXHRcdGdhcDogMXJlbTtcblx0fVxuXG5cdC50ZXh0LWRpdiBoMyB7XG5cdFx0Zm9udC1zaXplOiAxLjI1cmVtO1xuXHR9XG5cblx0LmFib3V0LWNvbnRhaW5lciB7XG5cdFx0Z2FwOiAwcmVtO1xuXHR9XG5cblx0LmFib3V0LW1lLWRpdiB7XG5cdFx0Z2FwOiAxcmVtO1xuXHR9XG5cblx0LnNlY29uZC1kaXYtdGV4dCBwIHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHQuc2Vjb25kLWRpdiB7XG5cdFx0cGFkZGluZzogMHJlbTtcblx0fVxuXG5cdC5wcm9qZWN0LWl0ZW0ge1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRcdGdhcDogMHJlbTtcblx0fVxuXG5cdC5wcm9qZWN0LWxpbmstZGl2IHtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcblx0LmhhbWJ1cmdlciB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cblxuXHQuaGFtYnVyZ2VyIGltZyB7XG5cdFx0d2lkdGg6IDJyZW07XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHR9XG5cblx0LmhhbWJ1cmdlciBpbWc6aG92ZXIge1xuXHRcdGZpbHRlcjogYnJpZ2h0bmVzcygzKTtcblx0fVxuXG5cdC5uYXYtYm94IHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblx0LmxvZy1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRnYXA6IDFyZW07XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cblx0LmhhbWJ1cmdlci1tZW51LmFjdGl2ZSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0ei1pbmRleDogOTk5O1xuXHRcdGFuaW1hdGlvbjogZXhwYW5kIDUwMG1zIGVhc2UtaW4tb3V0O1xuXHRcdG1hcmdpbi10b3A6IDJyZW07XG5cdFx0Z2FwOiAxcmVtO1xuXHRcdHBhZGRpbmctdG9wOiAxcmVtO1xuXHRcdC8qIGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbi10b3A6IDIuNXJlbTtcblx0XHRnYXA6IDFyZW07ICovXG5cdH1cblxuXHRAa2V5ZnJhbWVzIGV4cGFuZCB7XG5cdFx0MCUge1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZVkoMCk7XG5cdFx0fVxuXG5cdFx0NzAlIHtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGVZKDEuMSk7XG5cdFx0fVxuXG5cdFx0MTAwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlWSgxKTtcblx0XHR9XG5cdH1cblxuXHQuaW5hY3RpdmUge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1O1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHotaW5kZXg6IDk5OTtcblx0XHRhbmltYXRpb246IGNvbGxhcHNlIDAuNXMgZm9yd2FyZHM7XG5cdFx0bWFyZ2luLXRvcDogMnJlbTtcblx0XHRnYXA6IDFyZW07XG5cdFx0cGFkZGluZy10b3A6IDFyZW07XG5cdH1cblxuXHQvKiAuaW5hY3RpdmUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdHRyYW5zZm9ybTogc2NhbGVZKDApO1xuXHRcdHRyYW5zaXRpb246XG5cdFx0XHR0cmFuc2Zvcm0gMC41cyxcblx0XHRcdG9wYWNpdHkgMC41cyxcblx0XHRcdHZpc2liaWxpdHkgMHMgMHM7XG5cdH0gKi9cblxuXHRAa2V5ZnJhbWVzIGNvbGxhcHNlIHtcblx0XHQwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlWSgxKTtcblx0XHR9XG5cdFx0NzAlIHtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGVZKDEuMSk7XG5cdFx0fVxuXHRcdDEwMCUge1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZVkoMCk7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdH1cblx0fVxuXG5cdC5oYW1idXJnZXItbWVudSBhIHtcblx0XHRib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjZTBlMGUwO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdC5oYW1idXJnZXItbWVudSBhOm50aC1vZi10eXBlKDQpIHtcblx0XHRib3JkZXItYm90dG9tOiBub25lO1xuXHR9XG5cblx0LmhhbWJ1cmdlci1tZW51IGEge1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG5cdH1cblxuXHQuZmlyc3QtdGV4dC1jb250YWluZXIgaDMge1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHR9XG5cblx0Lm5hbWUge1xuXHRcdGZvbnQtc2l6ZTogMnJlbTtcblx0fVxuXG5cdCN0eXBlZC10ZXh0IHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0fVxuXG5cdC5zZWNvbmQtYmxvY2stdGV4dC1jb250YWluZXIge1xuXHRcdGdhcDogM3JlbTtcblx0fVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIseURBQTRDO0NBQzVDLG1DQUFtQztDQUNuQyx1Q0FBdUM7Q0FDdkMsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixNQUFNO0NBQ04sT0FBTztDQUNQLFFBQVE7Q0FDUixhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWiw2QkFBNkIsRUFBRSw0QkFBNEI7Q0FDM0Qsd0JBQXdCLEVBQUUsc0JBQXNCO0NBQ2hEOztvQ0FFbUM7QUFDcEM7O0FBRUE7Q0FDQywyQkFBMkIsRUFBRSxvQ0FBb0M7Q0FDakU7Ozs7O0VBS0MsRUFBRSxvQ0FBb0M7QUFDeEM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxxQkFBcUI7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LGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCOzs7Ozs7O2NBT1k7Q0FDYjs7Q0FFQTtFQUNDO0dBQ0Msb0JBQW9CO0VBQ3JCOztFQUVBO0dBQ0Msc0JBQXNCO0VBQ3ZCOztFQUVBO0dBQ0Msb0JBQW9CO0VBQ3JCO0NBQ0Q7O0NBRUE7RUFDQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGlCQUFpQjtDQUNsQjs7Q0FFQTs7Ozs7Ozs7SUFRRzs7Q0FFSDtFQUNDO0dBQ0Msb0JBQW9CO0VBQ3JCO0VBQ0E7R0FDQyxzQkFBc0I7RUFDdkI7RUFDQTtHQUNDLG9CQUFvQjtHQUNwQixhQUFhO0VBQ2Q7Q0FDRDs7Q0FFQTtFQUNDLGtDQUFrQztFQUNsQyxrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxtQkFBbUI7Q0FDcEI7O0NBRUE7RUFDQyxpQkFBaUI7RUFDakIsc0JBQXNCO0NBQ3ZCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLFNBQVM7Q0FDVjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcblxcdGNvbG9yOiAjZTBlMGUwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9iYWNrZ3JvdW5kLmpwZyk7XFxuXFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xcblxcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5kaXYjY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuXFx0cG9zaXRpb246IHN0aWNreTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRyaWdodDogMDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuXFx0ei1pbmRleDogOTk5O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBObyBiYWNrZ3JvdW5kIGluaXRpYWxseSAqL1xcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigwKTsgLyogTm8gYmx1ciBpbml0aWFsbHkgKi9cXG5cXHRib3gtc2hhZG93OlxcblxcdFxcdDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcXG5cXHRcXHQwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbn1cXG5cXG4ubmF2LWJhci1zY3JvbGxlZCB7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpOyAvKiBBZGp1c3QgdGhlIGJsdXIgdmFsdWUgYXMgbmVlZGVkICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYShcXG5cXHRcXHQ3OSxcXG5cXHRcXHQyMDksXFxuXFx0XFx0MTk3LFxcblxcdFxcdDAuMTVcXG5cXHQpOyAvKiBSR0JBIGNvbG9yIGZvciB0cmFuc2x1Y2VudCB0ZWFsICovXFxufVxcblxcbi5sb2dvLWJveCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLmxvZ28tYm94IGltZyB7XFxuXFx0d2lkdGg6IDNyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvZy1jb250YWluZXI6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvZ28tYm94IGEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxvZy1jb250YWluZXI6aG92ZXI6YWZ0ZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lcjpob3ZlciAubG9nby1ib3ggYSBoMSB7XFxuXFx0Y29sb3I6ICNmZmZmZmZmZjtcXG59XFxuXFxuLmxvZy1jb250YWluZXI6aG92ZXIgLmxvZ28tYm94IGltZyB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDMpO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lcjphZnRlciB7XFxuXFx0YmFja2dyb3VuZDogIzRmZDFjNTtcXG5cXHRib3JkZXItcmFkaXVzOiAxNnB4O1xcblxcdGJvdHRvbTogMXB4O1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGhlaWdodDogNXB4O1xcblxcdGxlZnQ6IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xcblxcdHdpZHRoOiAwO1xcblxcdHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ubG9nby1ib3ggYSBoMSB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLm5hdi1saW5rcyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLm5hdi1saW5rcyBhIHtcXG5cXHRjb2xvcjogI2UwZTBlMDtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLm5hdi1saW5rcyBhOmhvdmVyIHtcXG5cXHRjb2xvcjogI2ZmZmZmZmZmO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXIgYSB7XFxuXFx0Y29sb3I6ICNmZmZmZmZmZjtcXG59XFxuXFxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciBpbWcge1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcygzKTtcXG59XFxuXFxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlcjphZnRlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5uYXYtbGlua3MgLm5hdi1ib3gge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm5hdi1saW5rcyAubmF2LWJveDphZnRlciB7XFxuXFx0YmFja2dyb3VuZDogIzRmZDFjNTtcXG5cXHRib3JkZXItcmFkaXVzOiAxNnB4O1xcblxcdGJvdHRvbTogLTVweDtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRoZWlnaHQ6IDVweDtcXG5cXHRsZWZ0OiAwO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcXG5cXHR3aWR0aDogMDtcXG5cXHR6LWluZGV4OiAtMTtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiA3cmVtO1xcbn1cXG5cXG4uZmlyc3QtYmxvY2staG9tZSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG5cXHRwYWRkaW5nOiAwIDNyZW07XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4udGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnN1Yi10ZXh0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLmltYWdlLWNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDc1JTtcXG59XFxuXFxuLmNvbXB1dGVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5maXJzdC10ZXh0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLnR5cGVkLXRleHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jdHlwZWQtdGV4dCB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi50eXBlZC1jdXJzb3Ige1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGNvbG9yOiAjNGZkMWM1O1xcblxcdGFuaW1hdGlvbjogYmxpbmsgMC43cyBpbmZpbml0ZTtcXG59XFxuXFxuLm5hdi1ib3gge1xcblxcdHBhZGRpbmc6IDAuMjVyZW0gMHJlbTtcXG59XFxuXFxuLndhdmUge1xcblxcdHdpZHRoOiAycmVtO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRhbmltYXRpb24tbmFtZTogd2F2ZS1hbmltYXRpb247XFxuXFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAyLjVzO1xcblxcdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcblxcdHRyYW5zZm9ybS1vcmlnaW46IDcwJSA3MCU7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHdhdmUtYW5pbWF0aW9uIHtcXG5cXHQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcblxcdDEwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG5cXHR9XFxuXFx0MjAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XFxuXFx0fVxcblxcdDMwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcXG5cXHR9XFxuXFx0NDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSg5ZGVnKTtcXG5cXHR9XFxuXFx0NTAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcbn1cXG5cXG4ubmFtZSB7XFxuXFx0Zm9udC1zaXplOiAzcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi5uYXYtYm94IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG5cXHRnYXA6IDAuNXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWJveCBpbWcge1xcblxcdHdpZHRoOiAycmVtO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLnNlY29uZC10ZXh0LWNvbnRhaW5lciBoNSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uZmlyc3QtdGV4dC1jb250YWluZXIgaDMge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnNlY29uZC10ZXh0LWNvbnRhaW5lciBoNSB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zZWNvbmQtYmxvY2staG9tZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IDAgM3JlbTtcXG5cXHRtYXJnaW46IDAgNXJlbTtcXG5cXHRnYXA6IDVyZW07XFxufVxcblxcbi5zZWNvbmQtYmxvY2stdGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oYWNrZXIge1xcblxcdHdpZHRoOiAzNSU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udGV4dC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDNyZW07XFxufVxcblxcbi50ZXh0LWRpdiBoMyB7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMS45cmVtO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmhpZ2hsaWdodCxcXG4udGV4dC1kaXYgaDMgc3BhbiB7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi5zdWItZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG5cXG4uc3ViLXRleHQge1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uc29jaWFsLWljb25zIGltZyB7XFxuXFx0d2lkdGg6IDIuNXJlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uc29jaWFsLWljb25zIGltZzpob3ZlciB7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoMSk7XFxuXFx0Ym94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSg3OSwgMjA5LCAxOTcsIDAuNSk7XFxufVxcblxcbi5zb2NpYWwtdGV4dC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDAuNXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc29jaWFsLXRleHQtZGl2IGgzIHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNvY2lhbC10ZXh0LWRpdiAqIHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5zb2NpYWwtaWNvbnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDJyZW07XFxufVxcblxcbi5zb2NpYWwtc3ViLXRleHQge1xcblxcdGZvbnQtc2l6ZTogMC44cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1NTA7XFxufVxcblxcbi5zb2NpYWwtYmxvY2sge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDJyZW07XFxufVxcblxcbi5zb2NpYWwtc3ViLXRleHQgc3BhbiB7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGb290ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmZvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHRoZWlnaHQ6IDIuNXJlbTtcXG5cXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdHBhZGRpbmc6IDAuMjVyZW0gM3JlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1O1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC41cmVtO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXG5cXHRmb250LXdlaWdodDogMTAwO1xcblxcdGNvbG9yOiAjZmFmYWZhO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbmZvb3RlciBwIHtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlcixcXG5mb290ZXIgYTphY3RpdmUge1xcblxcdGNvbG9yOiAjYjAyZTM5O1xcbn1cXG5cXG5mb290ZXIgYSBpbWcge1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciBpbWcsXFxuZm9vdGVyIGE6YWN0aXZlIGltZyB7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoMSk7XFxuXFx0Ym94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSg3OSwgMjA5LCAxOTcsIDAuNSk7XFxufVxcblxcbi5hdC1zeW1ib2wge1xcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbmZvb3RlciBpbWcge1xcblxcdHdpZHRoOiAycmVtO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogU3R5bGVzIHRoZSBzY3JvbGxiYXIgdHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwOyAvKiBBIGRhcmtlciBzaGFkZSBmb3IgY29udHJhc3QgKi9cXG59XFxuXFxuLyogU3R5bGVzIHRoZSBzY3JvbGxiYXIgaGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTsgLyogVGhlIGNvbG9yIHlvdSBwcm92aWRlZCBmb3IgdGhlIGhhbmRsZSAqL1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgdGhlIGhhbmRsZSAqL1xcbn1cXG5cXG4vKiBTdHlsZXMgdGhlIHNjcm9sbGJhciBpdHNlbGYgKGluY2x1ZGluZyB0aGUgdHJhY2spICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDEycHg7IC8qIEFkanVzdCB0byB0aGUgc2l6ZSB5b3UgcHJlZmVyICovXFxufVxcblxcbi8qIE9wdGlvbmFsOiBzdHlsZXMgdGhlIHNjcm9sbGJhciBoYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2E5ZDliOyAvKiBBIHNsaWdodGx5IGRhcmtlciBzaGFkZSBvZiB0aGUgaGFuZGxlIGNvbG9yIGZvciBob3ZlciAqL1xcbn1cXG5cXG4vKiBGaXJlZm94ICovXFxuaHRtbCB7XFxuXFx0c2Nyb2xsYmFyLWNvbG9yOiAjNGZkMWM1ICMyYzNlNTA7XFxuXFx0c2Nyb2xsYmFyLXdpZHRoOiB0aGluOyAvKiBZb3UgY2FuIHVzZSAnYXV0bycgb3IgJ3RoaW4nICovXFxufVxcblxcbi5hYm91dC1wYWdlIHtcXG5cXHRwYWRkaW5nOiAwcmVtIDNyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDJyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogNXJlbTtcXG59XFxuXFxuLmFib3V0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLmFib3V0LXRleHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXQtbWUgc3BhbiB7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi5hYm91dC1tZS1kaXYge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWJvdXQtbWUtcGljdHVyZSB7XFxuXFx0d2lkdGg6IDc1JTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5hYm91dC1tZS10ZXh0LWRpdiB7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLmFib3V0LW1lLXRleHQ6bnRoLW9mLXR5cGUoMSkge1xcblxcdG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVuZCBvZiBGb290ZXIgc3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4uY2Fyb3VzZWwtaXRlbSBpbWcge1xcblxcdHdpZHRoOiAzcmVtO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLnNlY29uZC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDNyZW07XFxuXFx0cGFkZGluZzogMCAzcmVtO1xcbn1cXG5cXG4uc2Vjb25kLWRpdi10ZXh0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLnNlY29uZC1kaXYtdGV4dCBwIHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0bWFyZ2luOiAwO1xcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5jYXJvdXNlbC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgI2RkZGRkZDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uYmFjay1idG4sXFxuLmZvcndhcmQtYnRuIHtcXG5cXHRmb250LXNpemU6IDIuNXJlbTtcXG5cXHRjb2xvcjogIzE1MjAyYjtcXG5cXHRmb250LXdlaWdodDogOTAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhcm91c2VsIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG92ZXJmbG93LXg6IGF1dG87XFxuXFx0Z2FwOiAycmVtO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XFxuXFx0LW1zLXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XFxuXFx0bWFyZ2luLXRvcDogMC4ycmVtO1xcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmNhcm91c2VsLWl0ZW0ge1xcblxcdG1pbi13aWR0aDogN3JlbTtcXG5cXHRtaW4taGVpZ2h0OiAxMHJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XFxuXFx0LW1zLXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYxNztcXG59XFxuXFxuLmNhcm91c2VsLWl0ZW0gcCB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uY2Fyb3VzZWwtaXRlbXMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDJyZW07XFxufVxcblxcbi8qIFN0eWxlIHRoZSBzY3JvbGxiYXIgKi9cXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5cXHR3aWR0aDogNXB4OyAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBzY3JvbGxiYXIgKi9cXG5cXHRoZWlnaHQ6IDEwcHg7IC8qIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBzY3JvbGxiYXIgKi9cXG59XFxuXFxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0aHVtYiAqL1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciB0aGUgc2Nyb2xsYmFyIHRodW1iICovXFxufVxcblxcbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgdGh1bWIgb24gaG92ZXIgKi9cXG59XFxuXFxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgdHJhY2sgKi9cXG59XFxuXFxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIGNvcm5lciAqL1xcbn1cXG5cXG4ucHJvamVjdC1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDJyZW07XFxuXFx0cGFkZGluZzogMCAzcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1kaXYgaDEge1xcblxcdGNvbG9yOiAjNGZkMWM1O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIGltZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXG5cXHRnYXA6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAycmVtO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMTc7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcXG59XFxuXFxuLnByb2plY3QtbGluay1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rLWRpdiBhIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjNGZkMWM1O1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLnByb2plY3QtbGluay1kaXYgYTpob3ZlciB7XFxuXFx0Y29sb3I6ICNlMGUwZTA7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLWRpdiBwIHtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4vKiAuLi5leGlzdGluZyBzdHlsZXMgKi9cXG5cXG4uaGFtYnVyZ2VyLW1lbnUge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogdG9wO1xcbn1cXG5cXG4uaGFtYnVyZ2VyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG5cXHQuc2Vjb25kLWJsb2NrLWhvbWUge1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHR9XFxuXFxuXFx0LmxvZ28tYm94IGltZyB7XFxuXFx0XFx0d2lkdGg6IDIuNXJlbTtcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0fVxcblxcblxcdC5sb2dvLWJveCBhIGgxIHtcXG5cXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0ZGl2LmhhbWJ1cmdlci1tZW51LmluYWN0aXZlLFxcblxcdGRpdi5oYW1idXJnZXItbWVudS5hY3RpdmUge1xcblxcdFxcdG1hcmdpbi10b3A6IDEuMnJlbTtcXG5cXHR9XFxuXFxuXFx0Lm1haW4tY29udGFpbmVyIHtcXG5cXHRcXHRnYXA6IDFyZW07XFxuXFx0fVxcblxcblxcdC50ZXh0LWRpdiB7XFxuXFx0XFx0Z2FwOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQudGV4dC1kaXYgaDMge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4yNXJlbTtcXG5cXHR9XFxuXFxuXFx0LmFib3V0LWNvbnRhaW5lciB7XFxuXFx0XFx0Z2FwOiAwcmVtO1xcblxcdH1cXG5cXG5cXHQuYWJvdXQtbWUtZGl2IHtcXG5cXHRcXHRnYXA6IDFyZW07XFxuXFx0fVxcblxcblxcdC5zZWNvbmQtZGl2LXRleHQgcCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXG5cXHQuc2Vjb25kLWRpdiB7XFxuXFx0XFx0cGFkZGluZzogMHJlbTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtaXRlbSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuXFx0XFx0Z2FwOiAwcmVtO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdC1saW5rLWRpdiB7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcXG5cXHQuaGFtYnVyZ2VyIHtcXG5cXHRcXHRkaXNwbGF5OiBibG9jaztcXG5cXHR9XFxuXFxuXFx0LmhhbWJ1cmdlciBpbWcge1xcblxcdFxcdHdpZHRoOiAycmVtO1xcblxcdFxcdGhlaWdodDogYXV0bztcXG5cXHR9XFxuXFxuXFx0LmhhbWJ1cmdlciBpbWc6aG92ZXIge1xcblxcdFxcdGZpbHRlcjogYnJpZ2h0bmVzcygzKTtcXG5cXHR9XFxuXFxuXFx0Lm5hdi1ib3gge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcblxcdC5sb2ctY29udGFpbmVyIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0Z2FwOiAxcmVtO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHR9XFxuXFxuXFx0LmhhbWJ1cmdlci1tZW51LmFjdGl2ZSB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7XFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0cmlnaHQ6IDA7XFxuXFx0XFx0ei1pbmRleDogOTk5O1xcblxcdFxcdGFuaW1hdGlvbjogZXhwYW5kIDUwMG1zIGVhc2UtaW4tb3V0O1xcblxcdFxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0XFx0Z2FwOiAxcmVtO1xcblxcdFxcdHBhZGRpbmctdG9wOiAxcmVtO1xcblxcdFxcdC8qIGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0XFx0bGVmdDogMDtcXG5cXHRcXHRyaWdodDogMDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdG1hcmdpbi10b3A6IDIuNXJlbTtcXG5cXHRcXHRnYXA6IDFyZW07ICovXFxuXFx0fVxcblxcblxcdEBrZXlmcmFtZXMgZXhwYW5kIHtcXG5cXHRcXHQwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuXFx0XFx0fVxcblxcblxcdFxcdDcwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZVkoMS4xKTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0MTAwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQuaW5hY3RpdmUge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1O1xcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdHotaW5kZXg6IDk5OTtcXG5cXHRcXHRhbmltYXRpb246IGNvbGxhcHNlIDAuNXMgZm9yd2FyZHM7XFxuXFx0XFx0bWFyZ2luLXRvcDogMnJlbTtcXG5cXHRcXHRnYXA6IDFyZW07XFxuXFx0XFx0cGFkZGluZy10b3A6IDFyZW07XFxuXFx0fVxcblxcblxcdC8qIC5pbmFjdGl2ZSB7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHRcXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuXFx0XFx0dHJhbnNpdGlvbjpcXG5cXHRcXHRcXHR0cmFuc2Zvcm0gMC41cyxcXG5cXHRcXHRcXHRvcGFjaXR5IDAuNXMsXFxuXFx0XFx0XFx0dmlzaWJpbGl0eSAwcyAwcztcXG5cXHR9ICovXFxuXFxuXFx0QGtleWZyYW1lcyBjb2xsYXBzZSB7XFxuXFx0XFx0MCUge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcblxcdFxcdH1cXG5cXHRcXHQ3MCUge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGVZKDEuMSk7XFxuXFx0XFx0fVxcblxcdFxcdDEwMCUge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGVZKDApO1xcblxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0XFx0fVxcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyLW1lbnUgYSB7XFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMS41cHggc29saWQgI2UwZTBlMDtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcblxcdC5oYW1idXJnZXItbWVudSBhOm50aC1vZi10eXBlKDQpIHtcXG5cXHRcXHRib3JkZXItYm90dG9tOiBub25lO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyLW1lbnUgYSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LmZpcnN0LXRleHQtY29udGFpbmVyIGgzIHtcXG5cXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0Lm5hbWUge1xcblxcdFxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHR9XFxuXFxuXFx0I3R5cGVkLXRleHQge1xcblxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdH1cXG5cXG5cXHQuc2Vjb25kLWJsb2NrLXRleHQtY29udGFpbmVyIHtcXG5cXHRcXHRnYXA6IDNyZW07XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gdCgpe3JldHVybiB0PU9iamVjdC5hc3NpZ24/T2JqZWN0LmFzc2lnbi5iaW5kKCk6ZnVuY3Rpb24odCl7Zm9yKHZhciBzPTE7czxhcmd1bWVudHMubGVuZ3RoO3MrKyl7dmFyIGU9YXJndW1lbnRzW3NdO2Zvcih2YXIgbiBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiYodFtuXT1lW25dKX1yZXR1cm4gdH0sdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIHM9e3N0cmluZ3M6W1wiVGhlc2UgYXJlIHRoZSBkZWZhdWx0IHZhbHVlcy4uLlwiLFwiWW91IGtub3cgd2hhdCB5b3Ugc2hvdWxkIGRvP1wiLFwiVXNlIHlvdXIgb3duIVwiLFwiSGF2ZSBhIGdyZWF0IGRheSFcIl0sc3RyaW5nc0VsZW1lbnQ6bnVsbCx0eXBlU3BlZWQ6MCxzdGFydERlbGF5OjAsYmFja1NwZWVkOjAsc21hcnRCYWNrc3BhY2U6ITAsc2h1ZmZsZTohMSxiYWNrRGVsYXk6NzAwLGZhZGVPdXQ6ITEsZmFkZU91dENsYXNzOlwidHlwZWQtZmFkZS1vdXRcIixmYWRlT3V0RGVsYXk6NTAwLGxvb3A6ITEsbG9vcENvdW50OkluZmluaXR5LHNob3dDdXJzb3I6ITAsY3Vyc29yQ2hhcjpcInxcIixhdXRvSW5zZXJ0Q3NzOiEwLGF0dHI6bnVsbCxiaW5kSW5wdXRGb2N1c0V2ZW50czohMSxjb250ZW50VHlwZTpcImh0bWxcIixvbkJlZ2luOmZ1bmN0aW9uKHQpe30sb25Db21wbGV0ZTpmdW5jdGlvbih0KXt9LHByZVN0cmluZ1R5cGVkOmZ1bmN0aW9uKHQscyl7fSxvblN0cmluZ1R5cGVkOmZ1bmN0aW9uKHQscyl7fSxvbkxhc3RTdHJpbmdCYWNrc3BhY2VkOmZ1bmN0aW9uKHQpe30sb25UeXBpbmdQYXVzZWQ6ZnVuY3Rpb24odCxzKXt9LG9uVHlwaW5nUmVzdW1lZDpmdW5jdGlvbih0LHMpe30sb25SZXNldDpmdW5jdGlvbih0KXt9LG9uU3RvcDpmdW5jdGlvbih0LHMpe30sb25TdGFydDpmdW5jdGlvbih0LHMpe30sb25EZXN0cm95OmZ1bmN0aW9uKHQpe319LGU9bmV3KC8qI19fUFVSRV9fKi9mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt9dmFyIG49ZS5wcm90b3R5cGU7cmV0dXJuIG4ubG9hZD1mdW5jdGlvbihlLG4saSl7aWYoZS5lbD1cInN0cmluZ1wiPT10eXBlb2YgaT9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGkpOmksZS5vcHRpb25zPXQoe30scyxuKSxlLmlzSW5wdXQ9XCJpbnB1dFwiPT09ZS5lbC50YWdOYW1lLnRvTG93ZXJDYXNlKCksZS5hdHRyPWUub3B0aW9ucy5hdHRyLGUuYmluZElucHV0Rm9jdXNFdmVudHM9ZS5vcHRpb25zLmJpbmRJbnB1dEZvY3VzRXZlbnRzLGUuc2hvd0N1cnNvcj0hZS5pc0lucHV0JiZlLm9wdGlvbnMuc2hvd0N1cnNvcixlLmN1cnNvckNoYXI9ZS5vcHRpb25zLmN1cnNvckNoYXIsZS5jdXJzb3JCbGlua2luZz0hMCxlLmVsQ29udGVudD1lLmF0dHI/ZS5lbC5nZXRBdHRyaWJ1dGUoZS5hdHRyKTplLmVsLnRleHRDb250ZW50LGUuY29udGVudFR5cGU9ZS5vcHRpb25zLmNvbnRlbnRUeXBlLGUudHlwZVNwZWVkPWUub3B0aW9ucy50eXBlU3BlZWQsZS5zdGFydERlbGF5PWUub3B0aW9ucy5zdGFydERlbGF5LGUuYmFja1NwZWVkPWUub3B0aW9ucy5iYWNrU3BlZWQsZS5zbWFydEJhY2tzcGFjZT1lLm9wdGlvbnMuc21hcnRCYWNrc3BhY2UsZS5iYWNrRGVsYXk9ZS5vcHRpb25zLmJhY2tEZWxheSxlLmZhZGVPdXQ9ZS5vcHRpb25zLmZhZGVPdXQsZS5mYWRlT3V0Q2xhc3M9ZS5vcHRpb25zLmZhZGVPdXRDbGFzcyxlLmZhZGVPdXREZWxheT1lLm9wdGlvbnMuZmFkZU91dERlbGF5LGUuaXNQYXVzZWQ9ITEsZS5zdHJpbmdzPWUub3B0aW9ucy5zdHJpbmdzLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gdC50cmltKCl9KSxlLnN0cmluZ3NFbGVtZW50PVwic3RyaW5nXCI9PXR5cGVvZiBlLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQ/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQpOmUub3B0aW9ucy5zdHJpbmdzRWxlbWVudCxlLnN0cmluZ3NFbGVtZW50KXtlLnN0cmluZ3M9W10sZS5zdHJpbmdzRWxlbWVudC5zdHlsZS5jc3NUZXh0PVwiY2xpcDogcmVjdCgwIDAgMCAwKTtjbGlwLXBhdGg6aW5zZXQoNTAlKTtoZWlnaHQ6MXB4O292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjphYnNvbHV0ZTt3aGl0ZS1zcGFjZTpub3dyYXA7d2lkdGg6MXB4O1wiO3ZhciByPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlLnN0cmluZ3NFbGVtZW50LmNoaWxkcmVuKSxvPXIubGVuZ3RoO2lmKG8pZm9yKHZhciBhPTA7YTxvO2ErPTEpZS5zdHJpbmdzLnB1c2goclthXS5pbm5lckhUTUwudHJpbSgpKX1mb3IodmFyIHUgaW4gZS5zdHJQb3M9MCxlLmN1cnJlbnRFbENvbnRlbnQ9dGhpcy5nZXRDdXJyZW50RWxDb250ZW50KGUpLGUuY3VycmVudEVsQ29udGVudCYmZS5jdXJyZW50RWxDb250ZW50Lmxlbmd0aD4wJiYoZS5zdHJQb3M9ZS5jdXJyZW50RWxDb250ZW50Lmxlbmd0aC0xLGUuc3RyaW5ncy51bnNoaWZ0KGUuY3VycmVudEVsQ29udGVudCkpLGUuc2VxdWVuY2U9W10sZS5zdHJpbmdzKWUuc2VxdWVuY2VbdV09dTtlLmFycmF5UG9zPTAsZS5zdG9wTnVtPTAsZS5sb29wPWUub3B0aW9ucy5sb29wLGUubG9vcENvdW50PWUub3B0aW9ucy5sb29wQ291bnQsZS5jdXJMb29wPTAsZS5zaHVmZmxlPWUub3B0aW9ucy5zaHVmZmxlLGUucGF1c2U9e3N0YXR1czohMSx0eXBld3JpdGU6ITAsY3VyU3RyaW5nOlwiXCIsY3VyU3RyUG9zOjB9LGUudHlwaW5nQ29tcGxldGU9ITEsZS5hdXRvSW5zZXJ0Q3NzPWUub3B0aW9ucy5hdXRvSW5zZXJ0Q3NzLGUuYXV0b0luc2VydENzcyYmKHRoaXMuYXBwZW5kQ3Vyc29yQW5pbWF0aW9uQ3NzKGUpLHRoaXMuYXBwZW5kRmFkZU91dEFuaW1hdGlvbkNzcyhlKSl9LG4uZ2V0Q3VycmVudEVsQ29udGVudD1mdW5jdGlvbih0KXtyZXR1cm4gdC5hdHRyP3QuZWwuZ2V0QXR0cmlidXRlKHQuYXR0cik6dC5pc0lucHV0P3QuZWwudmFsdWU6XCJodG1sXCI9PT10LmNvbnRlbnRUeXBlP3QuZWwuaW5uZXJIVE1MOnQuZWwudGV4dENvbnRlbnR9LG4uYXBwZW5kQ3Vyc29yQW5pbWF0aW9uQ3NzPWZ1bmN0aW9uKHQpe3ZhciBzPVwiZGF0YS10eXBlZC1qcy1jdXJzb3ItY3NzXCI7aWYodC5zaG93Q3Vyc29yJiYhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltcIitzK1wiXVwiKSl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2Uuc2V0QXR0cmlidXRlKHMsXCJ0cnVlXCIpLGUuaW5uZXJIVE1MPVwiXFxuICAgICAgICAudHlwZWQtY3Vyc29ye1xcbiAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnR5cGVkLWN1cnNvci50eXBlZC1jdXJzb3ItLWJsaW5re1xcbiAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgIH1cXG4gICAgICAgIEBrZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgIH1cXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cXG4gICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgIH1cXG4gICAgICBcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpfX0sbi5hcHBlbmRGYWRlT3V0QW5pbWF0aW9uQ3NzPWZ1bmN0aW9uKHQpe3ZhciBzPVwiZGF0YS10eXBlZC1mYWRlb3V0LWpzLWNzc1wiO2lmKHQuZmFkZU91dCYmIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbXCIrcytcIl1cIikpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtlLnNldEF0dHJpYnV0ZShzLFwidHJ1ZVwiKSxlLmlubmVySFRNTD1cIlxcbiAgICAgICAgLnR5cGVkLWZhZGUtb3V0e1xcbiAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXM7XFxuICAgICAgICB9XFxuICAgICAgICAudHlwZWQtY3Vyc29yLnR5cGVkLWN1cnNvci0tYmxpbmsudHlwZWQtZmFkZS1vdXR7XFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAwO1xcbiAgICAgICAgICBhbmltYXRpb246IDA7XFxuICAgICAgICB9XFxuICAgICAgXCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKX19LGV9KCkpLG49bmV3KC8qI19fUFVSRV9fKi9mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9dmFyIHM9dC5wcm90b3R5cGU7cmV0dXJuIHMudHlwZUh0bWxDaGFycz1mdW5jdGlvbih0LHMsZSl7aWYoXCJodG1sXCIhPT1lLmNvbnRlbnRUeXBlKXJldHVybiBzO3ZhciBuPXQuc3Vic3RyaW5nKHMpLmNoYXJBdCgwKTtpZihcIjxcIj09PW58fFwiJlwiPT09bil7dmFyIGk7Zm9yKGk9XCI8XCI9PT1uP1wiPlwiOlwiO1wiO3Quc3Vic3RyaW5nKHMrMSkuY2hhckF0KDApIT09aSYmISgxKyArK3M+dC5sZW5ndGgpOyk7cysrfXJldHVybiBzfSxzLmJhY2tTcGFjZUh0bWxDaGFycz1mdW5jdGlvbih0LHMsZSl7aWYoXCJodG1sXCIhPT1lLmNvbnRlbnRUeXBlKXJldHVybiBzO3ZhciBuPXQuc3Vic3RyaW5nKHMpLmNoYXJBdCgwKTtpZihcIj5cIj09PW58fFwiO1wiPT09bil7dmFyIGk7Zm9yKGk9XCI+XCI9PT1uP1wiPFwiOlwiJlwiO3Quc3Vic3RyaW5nKHMtMSkuY2hhckF0KDApIT09aSYmISgtLXM8MCk7KTtzLS19cmV0dXJuIHN9LHR9KCkpLGk9LyojX19QVVJFX18qL2Z1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LHMpe2UubG9hZCh0aGlzLHMsdCksdGhpcy5iZWdpbigpfXZhciBzPXQucHJvdG90eXBlO3JldHVybiBzLnRvZ2dsZT1mdW5jdGlvbigpe3RoaXMucGF1c2Uuc3RhdHVzP3RoaXMuc3RhcnQoKTp0aGlzLnN0b3AoKX0scy5zdG9wPWZ1bmN0aW9uKCl7dGhpcy50eXBpbmdDb21wbGV0ZXx8dGhpcy5wYXVzZS5zdGF0dXN8fCh0aGlzLnRvZ2dsZUJsaW5raW5nKCEwKSx0aGlzLnBhdXNlLnN0YXR1cz0hMCx0aGlzLm9wdGlvbnMub25TdG9wKHRoaXMuYXJyYXlQb3MsdGhpcykpfSxzLnN0YXJ0PWZ1bmN0aW9uKCl7dGhpcy50eXBpbmdDb21wbGV0ZXx8dGhpcy5wYXVzZS5zdGF0dXMmJih0aGlzLnBhdXNlLnN0YXR1cz0hMSx0aGlzLnBhdXNlLnR5cGV3cml0ZT90aGlzLnR5cGV3cml0ZSh0aGlzLnBhdXNlLmN1clN0cmluZyx0aGlzLnBhdXNlLmN1clN0clBvcyk6dGhpcy5iYWNrc3BhY2UodGhpcy5wYXVzZS5jdXJTdHJpbmcsdGhpcy5wYXVzZS5jdXJTdHJQb3MpLHRoaXMub3B0aW9ucy5vblN0YXJ0KHRoaXMuYXJyYXlQb3MsdGhpcykpfSxzLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0aGlzLnJlc2V0KCExKSx0aGlzLm9wdGlvbnMub25EZXN0cm95KHRoaXMpfSxzLnJlc2V0PWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PSEwKSxjbGVhckludGVydmFsKHRoaXMudGltZW91dCksdGhpcy5yZXBsYWNlVGV4dChcIlwiKSx0aGlzLmN1cnNvciYmdGhpcy5jdXJzb3IucGFyZW50Tm9kZSYmKHRoaXMuY3Vyc29yLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jdXJzb3IpLHRoaXMuY3Vyc29yPW51bGwpLHRoaXMuc3RyUG9zPTAsdGhpcy5hcnJheVBvcz0wLHRoaXMuY3VyTG9vcD0wLHQmJih0aGlzLmluc2VydEN1cnNvcigpLHRoaXMub3B0aW9ucy5vblJlc2V0KHRoaXMpLHRoaXMuYmVnaW4oKSl9LHMuYmVnaW49ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMub3B0aW9ucy5vbkJlZ2luKHRoaXMpLHRoaXMudHlwaW5nQ29tcGxldGU9ITEsdGhpcy5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkKHRoaXMpLHRoaXMuaW5zZXJ0Q3Vyc29yKCksdGhpcy5iaW5kSW5wdXRGb2N1c0V2ZW50cyYmdGhpcy5iaW5kRm9jdXNFdmVudHMoKSx0aGlzLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpezA9PT10LnN0clBvcz90LnR5cGV3cml0ZSh0LnN0cmluZ3NbdC5zZXF1ZW5jZVt0LmFycmF5UG9zXV0sdC5zdHJQb3MpOnQuYmFja3NwYWNlKHQuc3RyaW5nc1t0LnNlcXVlbmNlW3QuYXJyYXlQb3NdXSx0LnN0clBvcyl9LHRoaXMuc3RhcnREZWxheSl9LHMudHlwZXdyaXRlPWZ1bmN0aW9uKHQscyl7dmFyIGU9dGhpczt0aGlzLmZhZGVPdXQmJnRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuZmFkZU91dENsYXNzKSYmKHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcyksdGhpcy5jdXJzb3ImJnRoaXMuY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5mYWRlT3V0Q2xhc3MpKTt2YXIgaT10aGlzLmh1bWFuaXplcih0aGlzLnR5cGVTcGVlZCkscj0xOyEwIT09dGhpcy5wYXVzZS5zdGF0dXM/dGhpcy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtzPW4udHlwZUh0bWxDaGFycyh0LHMsZSk7dmFyIGk9MCxvPXQuc3Vic3RyaW5nKHMpO2lmKFwiXlwiPT09by5jaGFyQXQoMCkmJi9eXFxeXFxkKy8udGVzdChvKSl7dmFyIGE9MTthKz0obz0vXFxkKy8uZXhlYyhvKVswXSkubGVuZ3RoLGk9cGFyc2VJbnQobyksZS50ZW1wb3JhcnlQYXVzZT0hMCxlLm9wdGlvbnMub25UeXBpbmdQYXVzZWQoZS5hcnJheVBvcyxlKSx0PXQuc3Vic3RyaW5nKDAscykrdC5zdWJzdHJpbmcocythKSxlLnRvZ2dsZUJsaW5raW5nKCEwKX1pZihcImBcIj09PW8uY2hhckF0KDApKXtmb3IoO1wiYFwiIT09dC5zdWJzdHJpbmcocytyKS5jaGFyQXQoMCkmJihyKyssIShzK3I+dC5sZW5ndGgpKTspO3ZhciB1PXQuc3Vic3RyaW5nKDAscykscD10LnN1YnN0cmluZyh1Lmxlbmd0aCsxLHMrciksYz10LnN1YnN0cmluZyhzK3IrMSk7dD11K3ArYyxyLS19ZS50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLnRvZ2dsZUJsaW5raW5nKCExKSxzPj10Lmxlbmd0aD9lLmRvbmVUeXBpbmcodCxzKTplLmtlZXBUeXBpbmcodCxzLHIpLGUudGVtcG9yYXJ5UGF1c2UmJihlLnRlbXBvcmFyeVBhdXNlPSExLGUub3B0aW9ucy5vblR5cGluZ1Jlc3VtZWQoZS5hcnJheVBvcyxlKSl9LGkpfSxpKTp0aGlzLnNldFBhdXNlU3RhdHVzKHQscywhMCl9LHMua2VlcFR5cGluZz1mdW5jdGlvbih0LHMsZSl7MD09PXMmJih0aGlzLnRvZ2dsZUJsaW5raW5nKCExKSx0aGlzLm9wdGlvbnMucHJlU3RyaW5nVHlwZWQodGhpcy5hcnJheVBvcyx0aGlzKSk7dmFyIG49dC5zdWJzdHJpbmcoMCxzKz1lKTt0aGlzLnJlcGxhY2VUZXh0KG4pLHRoaXMudHlwZXdyaXRlKHQscyl9LHMuZG9uZVR5cGluZz1mdW5jdGlvbih0LHMpe3ZhciBlPXRoaXM7dGhpcy5vcHRpb25zLm9uU3RyaW5nVHlwZWQodGhpcy5hcnJheVBvcyx0aGlzKSx0aGlzLnRvZ2dsZUJsaW5raW5nKCEwKSx0aGlzLmFycmF5UG9zPT09dGhpcy5zdHJpbmdzLmxlbmd0aC0xJiYodGhpcy5jb21wbGV0ZSgpLCExPT09dGhpcy5sb29wfHx0aGlzLmN1ckxvb3A9PT10aGlzLmxvb3BDb3VudCl8fCh0aGlzLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2UuYmFja3NwYWNlKHQscyl9LHRoaXMuYmFja0RlbGF5KSl9LHMuYmFja3NwYWNlPWZ1bmN0aW9uKHQscyl7dmFyIGU9dGhpcztpZighMCE9PXRoaXMucGF1c2Uuc3RhdHVzKXtpZih0aGlzLmZhZGVPdXQpcmV0dXJuIHRoaXMuaW5pdEZhZGVPdXQoKTt0aGlzLnRvZ2dsZUJsaW5raW5nKCExKTt2YXIgaT10aGlzLmh1bWFuaXplcih0aGlzLmJhY2tTcGVlZCk7dGhpcy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtzPW4uYmFja1NwYWNlSHRtbENoYXJzKHQscyxlKTt2YXIgaT10LnN1YnN0cmluZygwLHMpO2lmKGUucmVwbGFjZVRleHQoaSksZS5zbWFydEJhY2tzcGFjZSl7dmFyIHI9ZS5zdHJpbmdzW2UuYXJyYXlQb3MrMV07ZS5zdG9wTnVtPXImJmk9PT1yLnN1YnN0cmluZygwLHMpP3M6MH1zPmUuc3RvcE51bT8ocy0tLGUuYmFja3NwYWNlKHQscykpOnM8PWUuc3RvcE51bSYmKGUuYXJyYXlQb3MrKyxlLmFycmF5UG9zPT09ZS5zdHJpbmdzLmxlbmd0aD8oZS5hcnJheVBvcz0wLGUub3B0aW9ucy5vbkxhc3RTdHJpbmdCYWNrc3BhY2VkKCksZS5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkKCksZS5iZWdpbigpKTplLnR5cGV3cml0ZShlLnN0cmluZ3NbZS5zZXF1ZW5jZVtlLmFycmF5UG9zXV0scykpfSxpKX1lbHNlIHRoaXMuc2V0UGF1c2VTdGF0dXModCxzLCExKX0scy5jb21wbGV0ZT1mdW5jdGlvbigpe3RoaXMub3B0aW9ucy5vbkNvbXBsZXRlKHRoaXMpLHRoaXMubG9vcD90aGlzLmN1ckxvb3ArKzp0aGlzLnR5cGluZ0NvbXBsZXRlPSEwfSxzLnNldFBhdXNlU3RhdHVzPWZ1bmN0aW9uKHQscyxlKXt0aGlzLnBhdXNlLnR5cGV3cml0ZT1lLHRoaXMucGF1c2UuY3VyU3RyaW5nPXQsdGhpcy5wYXVzZS5jdXJTdHJQb3M9c30scy50b2dnbGVCbGlua2luZz1mdW5jdGlvbih0KXt0aGlzLmN1cnNvciYmKHRoaXMucGF1c2Uuc3RhdHVzfHx0aGlzLmN1cnNvckJsaW5raW5nIT09dCYmKHRoaXMuY3Vyc29yQmxpbmtpbmc9dCx0P3RoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoXCJ0eXBlZC1jdXJzb3ItLWJsaW5rXCIpOnRoaXMuY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUoXCJ0eXBlZC1jdXJzb3ItLWJsaW5rXCIpKSl9LHMuaHVtYW5pemVyPWZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqdC8yKSt0fSxzLnNodWZmbGVTdHJpbmdzSWZOZWVkZWQ9ZnVuY3Rpb24oKXt0aGlzLnNodWZmbGUmJih0aGlzLnNlcXVlbmNlPXRoaXMuc2VxdWVuY2Uuc29ydChmdW5jdGlvbigpe3JldHVybiBNYXRoLnJhbmRvbSgpLS41fSkpfSxzLmluaXRGYWRlT3V0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyZXR1cm4gdGhpcy5lbC5jbGFzc05hbWUrPVwiIFwiK3RoaXMuZmFkZU91dENsYXNzLHRoaXMuY3Vyc29yJiYodGhpcy5jdXJzb3IuY2xhc3NOYW1lKz1cIiBcIit0aGlzLmZhZGVPdXRDbGFzcyksc2V0VGltZW91dChmdW5jdGlvbigpe3QuYXJyYXlQb3MrKyx0LnJlcGxhY2VUZXh0KFwiXCIpLHQuc3RyaW5ncy5sZW5ndGg+dC5hcnJheVBvcz90LnR5cGV3cml0ZSh0LnN0cmluZ3NbdC5zZXF1ZW5jZVt0LmFycmF5UG9zXV0sMCk6KHQudHlwZXdyaXRlKHQuc3RyaW5nc1swXSwwKSx0LmFycmF5UG9zPTApfSx0aGlzLmZhZGVPdXREZWxheSl9LHMucmVwbGFjZVRleHQ9ZnVuY3Rpb24odCl7dGhpcy5hdHRyP3RoaXMuZWwuc2V0QXR0cmlidXRlKHRoaXMuYXR0cix0KTp0aGlzLmlzSW5wdXQ/dGhpcy5lbC52YWx1ZT10OlwiaHRtbFwiPT09dGhpcy5jb250ZW50VHlwZT90aGlzLmVsLmlubmVySFRNTD10OnRoaXMuZWwudGV4dENvbnRlbnQ9dH0scy5iaW5kRm9jdXNFdmVudHM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3RoaXMuaXNJbnB1dCYmKHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsZnVuY3Rpb24ocyl7dC5zdG9wKCl9KSx0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsZnVuY3Rpb24ocyl7dC5lbC52YWx1ZSYmMCE9PXQuZWwudmFsdWUubGVuZ3RofHx0LnN0YXJ0KCl9KSl9LHMuaW5zZXJ0Q3Vyc29yPWZ1bmN0aW9uKCl7dGhpcy5zaG93Q3Vyc29yJiYodGhpcy5jdXJzb3J8fCh0aGlzLmN1cnNvcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSx0aGlzLmN1cnNvci5jbGFzc05hbWU9XCJ0eXBlZC1jdXJzb3JcIix0aGlzLmN1cnNvci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCEwKSx0aGlzLmN1cnNvci5pbm5lckhUTUw9dGhpcy5jdXJzb3JDaGFyLHRoaXMuZWwucGFyZW50Tm9kZSYmdGhpcy5lbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmN1cnNvcix0aGlzLmVsLm5leHRTaWJsaW5nKSkpfSx0fSgpO2V4cG9ydHtpIGFzIGRlZmF1bHR9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHlwZWQubW9kdWxlLmpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2Nzcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBzZXR1cFBhZ2UgZnJvbSBcIi4vc2V0dXBcIjtcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9ob21lcGFnZVwiO1xuaW1wb3J0IGFib3V0IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnNvbGUubG9nKFwiVGVzdCBidWlsZFwiKTtcbnNldHVwUGFnZSgpO1xuSG9tZVBhZ2UoKTtcblxuY29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1ib3g6bnRoLW9mLXR5cGUoMSlcIik7XG5jb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1ib3g6bnRoLW9mLXR5cGUoMilcIik7XG5jb25zdCBwcm9qZWN0c0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1ib3g6bnRoLW9mLXR5cGUoMylcIik7XG5jb25zdCByZXN1bWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYm94Om50aC1vZi10eXBlKDQpXCIpO1xuXG5jb25zdCBtb2JpbGVIb21lTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFwiLmhhbWJ1cmdlci1tZW51ID4gYTpudGgtb2YtdHlwZSgxKVwiLFxuKTtcbmNvbnN0IG1vYmlsZUFib3V0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFwiLmhhbWJ1cmdlci1tZW51ID4gYTpudGgtb2YtdHlwZSgyKVwiLFxuKTtcbmNvbnN0IG1vYmlsZVByb2plY3RzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFwiLmhhbWJ1cmdlci1tZW51ID4gYTpudGgtb2YtdHlwZSgzKVwiLFxuKTtcbmNvbnN0IG1vYmlsZVJlc3VtZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcIi5oYW1idXJnZXItbWVudSA+IGE6bnRoLW9mLXR5cGUoNClcIixcbik7XG5cbmhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdEhvbWVQYWdlKCk7XG59KTtcblxubW9iaWxlSG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0SG9tZVBhZ2UoKTtcbn0pO1xuXG5hYm91dExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0YWJvdXQoKTtcbn0pO1xuXG5tb2JpbGVBYm91dExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0YWJvdXQoKTtcbn0pO1xuXG5wcm9qZWN0c0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0cHJvamVjdCgpO1xufSk7XG5cbm1vYmlsZVByb2plY3RzTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRwcm9qZWN0KCk7XG59KTtcblxucmVzdW1lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHR3aW5kb3cub3Blbihcblx0XHRcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhDWlNtNEszdGM3X2hxSGh6SXFRTXM2RV9Dei02cVVnL3ZpZXc/dXNwPXNoYXJpbmdcIixcblx0KTtcbn0pO1xuXG5tb2JpbGVSZXN1bWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdHdpbmRvdy5vcGVuKFxuXHRcdFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeENaU200SzN0YzdfaHFIaHpJcVFNczZFX0N6LTZxVWcvdmlldz91c3A9c2hhcmluZ1wiLFxuXHQpO1xufSk7XG4iXSwibmFtZXMiOlsiU2hhaGlyIiwiR2l0U29jaWFsIiwiTGlua2VkIiwiRG9ja2VyIiwiU3FsIiwiRWNsaXBzZSIsIkx1YSIsIlZ1ZSIsIkN5cHJlc3MiLCJWc2NvZGUiLCJDIiwiTnBtIiwiQmFiZWwiLCJQcmV0dGllciIsIkVzbGludCIsIldlYnBhY2siLCJKZXN0IiwiR2l0IiwiUHl0aG9uIiwiSmF2YSIsIkxpbnV4IiwiSHRtbCIsIkNzcyIsIkpzIiwiY3JlYXRlQ2Fyb3VzZWxJdGVtIiwiaW1hZ2UiLCJ0aXRsZSIsImNhcm91c2VsSXRlbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImNhcm91c2VsSW1hZ2UiLCJzcmMiLCJhbHQiLCJjYXJvdXNlbFRpdGxlIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImJ1dHRvbnMiLCJjYXJvdXNlbCIsInF1ZXJ5U2VsZWN0b3IiLCJiYWNrQnRuIiwiZm9yd2FyZEJ0biIsImlzU2Nyb2xsaW5nIiwic2Nyb2xsRGlyZWN0aW9uIiwic2Nyb2xsU3RlcCIsImFuaW1hdGVTY3JvbGwiLCJzY3JvbGxEaXN0YW5jZSIsInNjcm9sbExlZnQiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsUmlnaHQiLCJzdG9wU2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFib3V0IiwiYWJvdXRQYWdlIiwiYWJvdXRDb250YWluZXIiLCJhYm91dFRleHRDb250YWluZXIiLCJhYm91dE1lIiwiYWJvdXRNZVNwYW4iLCJhYm91dE1lRGl2IiwiYWJvdXRNZVRleHREaXYiLCJwYXJhZ3JhcGgiLCJhYm91dE1lVGV4dCIsImFib3V0TWVUZXh0MiIsImFib3V0TWVUZXh0MyIsImFib3V0TWVUZXh0NCIsInNvY2lhbEljb25zIiwiZ2l0TGluayIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJnaXRTb2NpYWwiLCJsaW5rZWRMaW5rIiwibGlua2VkIiwicGljdHVyZSIsInNlY29uZERpdiIsInNlY29uZERpdlRleHQiLCJoaWdobGlnaHQiLCJhbmQiLCJjcmVhdGVUZXh0Tm9kZSIsImhpZ2hsaWdodFRleHQiLCJzZW50ZW5jZSIsInRleHQiLCJjYXJvdXNlbENvbnRhaW5lciIsImNhcm91c2VsRGl2IiwiY2Fyb3VzZWxJdGVtcyIsImNhcm91c2VsSXRlbTEiLCJjYXJvdXNlbEl0ZW0yIiwiY2Fyb3VzZWxJdGVtMyIsImNhcm91c2VsSXRlbTQiLCJjYXJvdXNlbEl0ZW01IiwiY2Fyb3VzZWxJdGVtNiIsImNhcm91c2VsSXRlbTciLCJjYXJvdXNlbEl0ZW04IiwiY2Fyb3VzZWxJdGVtOSIsImNhcm91c2VsSXRlbTEwIiwiY2Fyb3VzZWxJdGVtMTEiLCJjYXJvdXNlbEl0ZW0xMiIsImNhcm91c2VsSXRlbTEzIiwiY2Fyb3VzZWxJdGVtMTQiLCJjYXJvdXNlbEl0ZW0xNSIsImNhcm91c2VsSXRlbTE2IiwiY2Fyb3VzZWxJdGVtMTciLCJjYXJvdXNlbEl0ZW0xOCIsImNhcm91c2VsSXRlbTE5IiwiY2Fyb3VzZWxJdGVtMjAiLCJjYXJvdXNlbEl0ZW0yMSIsIm1haW4iLCJpbm5lckhUTUwiLCJUeXBlZCIsIkNvbXB1dGVyIiwiSGFuZCIsIkhhY2tlciIsImR5bmFtaWNUZXh0IiwidHlwZWQiLCJzdHJpbmdzIiwidHlwZVNwZWVkIiwiYmFja1NwZWVkIiwic3RhcnREZWxheSIsImJhY2tEZWxheSIsImxvb3AiLCJzaG93Q3Vyc29yIiwiY3Vyc29yQ2hhciIsImF0dHIiLCJhdXRvSW5zZXJ0Q3NzIiwiY29udGVudFR5cGUiLCJIb21lUGFnZSIsIm1haW5Db250YWluZXIiLCJmaXJzdEJsb2NrSG9tZSIsInRleHRDb250YWluZXIiLCJzdWJUZXh0Q29udGFpbmVyIiwiZmlyc3RUZXh0Q29udGFpbmVyIiwiZmlyc3RUZXh0Iiwid2F2ZSIsInNlY29uZFRleHRDb250YWluZXIiLCJzZWNvbmRUZXh0IiwibmFtZSIsInR5cGVkVGV4dENvbnRhaW5lciIsInR5cGVkVGV4dCIsImlkIiwiaW1hZ2VDb250YWluZXIiLCJzZWNvbmRCbG9ja0hvbWUiLCJzZWNvbmRCbG9ja1RleHRDb250YWluZXIiLCJ0ZXh0RGl2Iiwic3BhbiIsInN1YkRpdiIsInN1YlRleHRBZnRlckhpZ2hsaWdodCIsInN1YlRleHQiLCJzdWJzdWJUZXh0IiwiaGFja2VyIiwic29jaWFsQmxvY2siLCJzb2NpYWxUZXh0RGl2Iiwic29jaWFsVGV4dCIsInRleHRCZWZvcmUiLCJ0ZXh0QWZ0ZXIiLCJzcGFuQ29udGVudCIsInNvY2lhbFN1YlRleHQiLCJUb2RvIiwiQmF0dGxlc2hpcCIsIldlYXRoZXIiLCJUaWN0YWMiLCJDYWxjdWxhdG9yIiwiUmVzdGF1cmFudCIsIkV0Y2giLCJjcmVhdGVQcm9qZWN0SXRlbSIsImRlc2NyaXB0aW9uIiwibGl2ZURlbW8iLCJzb3VyY2VDb2RlIiwicHJvamVjdEl0ZW0iLCJwcm9qZWN0SW1hZ2UiLCJwcm9qZWN0SXRlbURpdiIsInByb2plY3RUaXRsZSIsInByb2plY3REZXNjcmlwdGlvbiIsInByb2plY3RMaW5rRGl2IiwicHJvamVjdExpdmVEZW1vIiwicHJvamVjdFNvdXJjZUNvZGUiLCJwcm9qZWN0IiwicHJvamVjdERpdiIsInByb2plY3RDb250YWluZXIiLCJ0b2RvIiwiYmF0dGxlc2hpcCIsIndlYXRoZXIiLCJ0aWN0YWMiLCJjYWxjdWxhdG9yIiwicmVzdGF1cmFudCIsImV0Y2giLCJJY29uIiwiSG9tZSIsIkFib3V0IiwiQ29kZSIsIkRvYyIsIkdpdEh1YiIsImhhbWJ1cmdlckltZyIsImNyZWF0ZU5hdkJhciIsImJhciIsImxvZ0NvbnRhaW5lciIsImxvZ29Cb3giLCJsb2dvIiwibG9nb0xpbmsiLCJsb2dvVGV4dCIsImxvZ29MaW5rMiIsIm5hdkxpbmtzIiwiaG9tZUJveCIsImhvbWVMaW5rIiwiaG9tZUljb24iLCJtZW51TGlua2JveCIsIm1lbnVMaW5rIiwibWVudUljb24iLCJjb250YWN0TGlua2JveCIsImNvbnRhY3RMaW5rIiwiY29udGFjdEljb24iLCJBYm91dExpbmtib3giLCJBYm91dExpbmsiLCJBYm91dEljb24iLCJoYW1idXJnZXIiLCJoYW1idXJnZXJJY29uIiwiaGFtYnVyZ2VyTWVudSIsImhhbWJ1cmdlck1lbnVIb21lIiwiaGFtYnVyZ2VyTWVudUFib3V0IiwiaGFtYnVyZ2VyTWVudVByb2plY3RzIiwiaGFtYnVyZ2VyTWVudVJlc3VtZSIsImNvbnRlbnQiLCJjcmVhdGVGb290ZXIiLCJmb290ZXIiLCJnaXRIdWJQcm9maWxlIiwiZ2l0SHViUHJvZmlsZUltZyIsImdpdEh1YlByb2ZpbGVUZXh0IiwiYXRTeW1ib2wiLCJ1c2VybmFtZSIsInNlcGVyYXRvciIsImdpdEh1YlJlcG8iLCJzZXR1cFBhZ2UiLCJ3aW5kb3ciLCJuYXZCYXIiLCJzY3JvbGxZIiwicmVtb3ZlIiwiY29udGFpbnMiLCJjb25zb2xlIiwibG9nIiwiYWJvdXRMaW5rIiwicHJvamVjdHNMaW5rIiwicmVzdW1lTGluayIsIm1vYmlsZUhvbWVMaW5rIiwibW9iaWxlQWJvdXRMaW5rIiwibW9iaWxlUHJvamVjdHNMaW5rIiwibW9iaWxlUmVzdW1lTGluayIsIm9wZW4iXSwic291cmNlUm9vdCI6IiJ9