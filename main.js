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

@media (max-width: 390px) {
	.sub-text {
		font-size: 0.9rem;
	}

	.footer a {
		font-size: 1.1rem;
	}

	.first-text-container h3 {
		font-size: 1.3rem;
	}

	.second-text-container h5 {
		font-size: 1.3rem;
	}

	.name {
		font-size: 1.5rem;
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
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n\tcolor: #e0e0e0;\n\tbackground-color: #000000;\n\tbackground-image: url(../img/background.jpg);\n\tbackground-size: contain !important;\n\tbackground-repeat: no-repeat !important;\n\tfont-family: sans-serif;\n}\n\ndiv#content {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.nav-bar {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1.5rem 3rem;\n\ttransition: all 0.3s ease;\n\tz-index: 999;\n\tbackground-color: transparent; /* No background initially */\n\tbackdrop-filter: blur(0); /* No blur initially */\n\tbox-shadow:\n\t\t0 4px 6px -1px rgba(0, 0, 0, 0.1),\n\t\t0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.nav-bar-scrolled {\n\tbackdrop-filter: blur(10px); /* Adjust the blur value as needed */\n\tbackground-color: rgba(\n\t\t79,\n\t\t209,\n\t\t197,\n\t\t0.15\n\t); /* RGBA color for translucent teal */\n}\n\n.logo-box {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.logo-box img {\n\twidth: 3rem;\n\theight: auto;\n\tcursor: pointer;\n}\n\n.log-container:hover {\n\tcursor: pointer;\n}\n\n.logo-box a {\n\ttext-decoration: none;\n}\n\n.log-container:hover:after {\n\twidth: 100%;\n}\n\n.log-container:hover .logo-box a h1 {\n\tcolor: #ffffffff;\n}\n\n.log-container:hover .logo-box img {\n\tfilter: brightness(3);\n}\n\n.log-container:after {\n\tbackground: #4fd1c5;\n\tborder-radius: 16px;\n\tbottom: 1px;\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 5px;\n\tleft: 0;\n\tposition: relative;\n\ttransition: all 0.3s ease-out 0s;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.logo-box a h1 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcursor: pointer;\n\tmargin: 0;\n}\n\n.nav-links {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 2rem;\n}\n\n.nav-links a {\n\tcolor: #e0e0e0;\n\tfont-size: 1.5rem;\n\tfont-weight: 100;\n\ttext-decoration: none;\n}\n\n.nav-links a:hover {\n\tcolor: #ffffffff;\n}\n\n.nav-links .nav-box:hover {\n\tcursor: pointer;\n}\n\n.nav-links .nav-box:hover a {\n\tcolor: #ffffffff;\n}\n\n.nav-links .nav-box:hover img {\n\tfilter: brightness(3);\n}\n\n.nav-links .nav-box:hover:after {\n\twidth: 100%;\n}\n\n.nav-links .nav-box {\n\tposition: relative;\n}\n\n.nav-links .nav-box:after {\n\tbackground: #4fd1c5;\n\tborder-radius: 16px;\n\tbottom: -5px;\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 5px;\n\tleft: 0;\n\tposition: absolute;\n\ttransition: all 0.3s ease-out 0s;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.main-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 7rem;\n}\n\n.first-block-home {\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tpadding: 0 3rem;\n\tgap: 1rem;\n}\n\n.text-container {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.sub-text-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.image-container {\n\twidth: 75%;\n}\n\n.computer {\n\twidth: 100%;\n\theight: auto;\n}\n\n.first-text-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 1rem;\n}\n\n.typed-text-container {\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 2rem;\n}\n\n#typed-text {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcolor: #4fd1c5;\n}\n\n.typed-cursor {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcolor: #4fd1c5;\n\tanimation: blink 0.7s infinite;\n}\n\n.nav-box {\n\tpadding: 0.25rem 0rem;\n}\n\n.wave {\n\twidth: 2rem;\n\theight: auto;\n\tanimation-name: wave-animation;\n\tanimation-duration: 2.5s;\n\tanimation-iteration-count: infinite;\n\ttransform-origin: 70% 70%;\n\tdisplay: inline-block;\n\tfilter: brightness(0.9);\n}\n\n@keyframes wave-animation {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t10% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t20% {\n\t\ttransform: rotate(12deg);\n\t}\n\t30% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t40% {\n\t\ttransform: rotate(9deg);\n\t}\n\t50% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(0deg);\n\t}\n}\n\n.name {\n\tfont-size: 3rem;\n\tfont-weight: 700;\n\tcolor: #4fd1c5;\n}\n\n.nav-box {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tgap: 0.5rem;\n\talign-items: center;\n}\n\n.nav-box img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n.second-text-container h5 {\n\tmargin: 0;\n}\n\n.first-text-container h3 {\n\tfont-weight: 500;\n\tfont-size: 2rem;\n\tmargin: 0;\n}\n\n.second-text-container h5 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n}\n\n.second-block-home {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 0 3rem;\n\tmargin: 0 5rem;\n\tgap: 5rem;\n}\n\n.second-block-text-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tjustify-items: center;\n\talign-items: center;\n}\n\n.hacker {\n\twidth: 35%;\n\theight: auto;\n}\n\n.text-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 3rem;\n}\n\n.text-div h3 {\n\talign-self: center;\n\tfont-size: 1.9rem;\n\tmargin: 0;\n}\n\n.highlight,\n.text-div h3 span {\n\tcolor: #4fd1c5;\n}\n\n.sub-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.sub-text {\n\tfont-weight: 600;\n\tmargin: 0;\n}\n\n.social-icons img {\n\twidth: 2.5rem;\n\theight: auto;\n\tcursor: pointer;\n\ttransition: all 0.3s ease;\n\tborder-radius: 50%;\n}\n\n.social-icons img:hover {\n\tfilter: invert(1);\n\tbox-shadow: 0 4px 8px 0 rgba(79, 209, 197, 0.5);\n}\n\n.social-text-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n\talign-items: center;\n}\n\n.social-text-div h3 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n}\n\n.social-text-div * {\n\tmargin: 0;\n}\n\n.social-icons {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 2rem;\n}\n\n.social-sub-text {\n\tfont-size: 0.8rem;\n\tfont-weight: 550;\n}\n\n.social-block {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.social-sub-text span {\n\tcolor: #4fd1c5;\n}\n\n/* --------------------------------------- Footer ------------------------------------------------------- */\n\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n\theight: 2.5rem;\n\tmargin-top: 2rem;\n\tpadding: 0.25rem 3rem;\n\tbackground-color: #4fd1c5;\n}\n\nfooter a {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\ttext-decoration: none;\n\tfont-size: 1.3rem;\n\tfont-weight: 100;\n\tcolor: #fafafa;\n\ttransition: all 0.3s ease;\n}\n\nfooter p {\n\tmargin: 0.5rem 0;\n}\n\nfooter a:hover,\nfooter a:active {\n\tcolor: #b02e39;\n}\n\nfooter a img {\n\tborder-radius: 50%;\n\ttransition: all 0.3s ease;\n}\n\nfooter a:hover img,\nfooter a:active img {\n\tfilter: invert(1);\n\tbox-shadow: 0 4px 8px 0 rgba(79, 209, 197, 0.5);\n}\n\n.at-symbol {\n\tfont-weight: 900;\n}\n\nfooter img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n/* Styles the scrollbar track */\n::-webkit-scrollbar-track {\n\tbackground-color: #2c3e50; /* A darker shade for contrast */\n}\n\n/* Styles the scrollbar handle */\n::-webkit-scrollbar-thumb {\n\tbackground-color: #4fd1c5; /* The color you provided for the handle */\n\tborder-radius: 10px; /* Rounded corners for the handle */\n}\n\n/* Styles the scrollbar itself (including the track) */\n::-webkit-scrollbar {\n\twidth: 12px; /* Adjust to the size you prefer */\n}\n\n/* Optional: styles the scrollbar handle on hover */\n::-webkit-scrollbar-thumb:hover {\n\tbackground-color: #3a9d9b; /* A slightly darker shade of the handle color for hover */\n}\n\n/* Firefox */\nhtml {\n\tscrollbar-color: #4fd1c5 #2c3e50;\n\tscrollbar-width: thin; /* You can use 'auto' or 'thin' */\n}\n\n.about-page {\n\tpadding: 0rem 3rem;\n\tpadding-bottom: 2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5rem;\n}\n\n.about-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.about-text-container {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.about-me span {\n\tcolor: #4fd1c5;\n}\n\n.about-me-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tjustify-items: center;\n}\n\n.about-me-picture {\n\twidth: 75%;\n\theight: auto;\n}\n\n.about-me-text-div {\n\tfont-size: 1.1rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.about-me-text:nth-of-type(1) {\n\tmargin-top: 0.5rem;\n}\n\n/* --------------------------------------- End of Footer styles ------------------------------------------------------- */\n\n.carousel-item img {\n\twidth: 3rem;\n\theight: auto;\n}\n\n.second-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 3rem;\n\tpadding: 0 3rem;\n}\n\n.second-div-text {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 1rem;\n}\n\n.second-div-text p {\n\tfont-size: 2rem;\n\tmargin: 0;\n\tfont-weight: 900;\n}\n\n.carousel-div {\n\tdisplay: flex;\n\tborder: 3px solid #dddddd;\n\tborder-radius: 10px;\n}\n\n.back-btn,\n.forward-btn {\n\tfont-size: 2.5rem;\n\tcolor: #15202b;\n\tfont-weight: 900;\n\tbackground-color: #dddddd;\n\tborder: none;\n\tcursor: pointer;\n}\n\n.carousel {\n\tdisplay: flex;\n\toverflow-x: auto;\n\tgap: 2rem;\n\tpadding: 1rem;\n\ttransform: rotateX(180deg);\n\t-ms-transform: rotateX(180deg);\n\t-webkit-transform: rotateX(180deg);\n\tmargin-top: 0.2rem;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n}\n\n.carousel-item {\n\tmin-width: 7rem;\n\tmin-height: 10rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 1rem;\n\ttransform: rotateX(180deg);\n\t-ms-transform: rotateX(180deg);\n\t-webkit-transform: rotateX(180deg);\n\tborder: 1px solid #dddddd;\n\tborder-radius: 15px;\n\tbackground-color: #ffffff17;\n}\n\n.carousel-item p {\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.carousel-items {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 2rem;\n}\n\n/* Style the scrollbar */\n.carousel::-webkit-scrollbar {\n\twidth: 5px; /* Set the width of the scrollbar */\n\theight: 10px; /* Set the height of the scrollbar */\n}\n\n.carousel::-webkit-scrollbar-thumb {\n\tbackground-color: #4fd1c5; /* Color of the scrollbar thumb */\n\tborder-radius: 5px; /* Rounded corners for the scrollbar thumb */\n}\n\n.carousel::-webkit-scrollbar-thumb:hover {\n\tbackground-color: #4fd1c5; /* Color of the scrollbar thumb on hover */\n}\n\n.carousel::-webkit-scrollbar-track {\n\tbackground-color: transparent; /* Color of the scrollbar track */\n}\n\n.carousel::-webkit-scrollbar-corner {\n\tbackground-color: transparent; /* Color of the scrollbar corner */\n}\n\n.project-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n\tpadding: 0 3rem;\n}\n\n.project-div h1 {\n\tcolor: #4fd1c5;\n}\n\n.project-item img {\n\twidth: 100%;\n\theight: auto;\n}\n\n.project-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tgap: 2rem;\n}\n\n.project-item {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 2fr;\n\talign-items: center;\n\tgap: 2rem;\n\tpadding: 1rem;\n\tborder-radius: 10px;\n\tbackground-color: #ffffff17;\n\tborder: 1px solid #dddddd;\n}\n\n.project-link-div {\n\tdisplay: flex;\n\tgap: 1rem;\n}\n\n.project-link-div a {\n\ttext-decoration: none;\n\tcolor: #4fd1c5;\n\tfont-size: 1.5rem;\n\tfont-weight: 500;\n\tborder: 1px solid #4fd1c5;\n\tborder-radius: 10px;\n\tpadding: 0.5rem 1rem;\n\ttransition: all 0.3s ease;\n}\n\n.project-link-div a:hover {\n\tcolor: #e0e0e0;\n\tborder: 1px solid #e0e0e0;\n\tbackground-color: #4fd1c5;\n}\n\n.project-item-div p {\n\tfont-size: 1.1rem;\n\tfont-weight: 600;\n}\n\n/* ...existing styles */\n\n.hamburger-menu {\n\tdisplay: none;\n\ttransform-origin: top;\n}\n\n.hamburger {\n\tdisplay: none;\n}\n\n@media (max-width: 390px) {\n\t.sub-text {\n\t\tfont-size: 0.9rem;\n\t}\n\n\t.footer a {\n\t\tfont-size: 1.1rem;\n\t}\n\n\t.first-text-container h3 {\n\t\tfont-size: 1.3rem;\n\t}\n\n\t.second-text-container h5 {\n\t\tfont-size: 1.3rem;\n\t}\n\n\t.name {\n\t\tfont-size: 1.5rem;\n\t}\n\n\t#typed-text {\n\t\tfont-size: 1.3rem;\n\t}\n\n\t.social-block {\n\t\tgap: 1rem;\n\t}\n\n\t.second-block-home {\n\t\tgap: 3rem;\n\t}\n\n\t.carousel {\n\t\tpadding-left: 0;\n\t}\n\n\t.carousel-items {\n\t\tgap: 1rem;\n\t}\n\n\t.carousel-item {\n\t\tmin-width: 4.5rem;\n\t\tmin-height: 6rem;\n\t}\n\n\t.carousel-item img {\n\t\twidth: 2rem;\n\t\theight: auto;\n\t}\n\n\t.carousel-item p {\n\t\tfont-size: 1rem;\n\t}\n}\n\n@media (max-width: 500px) {\n\t.second-block-home {\n\t\tmargin: 0;\n\t}\n\n\t.logo-box img {\n\t\twidth: 2.5rem;\n\t\theight: auto;\n\t}\n\n\t.logo-box a h1 {\n\t\tfont-size: 1.5rem;\n\t}\n\n\tdiv.hamburger-menu.inactive,\n\tdiv.hamburger-menu.active {\n\t\tmargin-top: 1.2rem;\n\t}\n\n\t.main-container {\n\t\tgap: 1rem;\n\t}\n\n\t.text-div {\n\t\tgap: 1rem;\n\t}\n\n\t.text-div h3 {\n\t\tfont-size: 1.25rem;\n\t}\n\n\t.about-container {\n\t\tgap: 0rem;\n\t}\n\n\t.about-me-div {\n\t\tgap: 1rem;\n\t}\n\n\t.second-div-text p {\n\t\tfont-size: 1.5rem;\n\t\ttext-align: center;\n\t}\n\n\t.second-div {\n\t\tpadding: 0rem;\n\t}\n\n\t.project-item {\n\t\tgrid-template-columns: 1fr;\n\t\tgap: 0rem;\n\t}\n\n\t.project-link-div {\n\t\tjustify-content: center;\n\t}\n}\n\n@media (max-width: 870px) {\n\t.hamburger {\n\t\tdisplay: block;\n\t}\n\n\t.hamburger img {\n\t\twidth: 2rem;\n\t\theight: auto;\n\t}\n\n\t.hamburger img:hover {\n\t\tfilter: brightness(3);\n\t}\n\n\t.nav-box {\n\t\tdisplay: none;\n\t}\n\n\t.log-container {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 1rem;\n\t\tjustify-content: space-between;\n\t}\n\n\t.hamburger-menu.active {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\tbackground-color: #4fd1c5;\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tz-index: 999;\n\t\tanimation: expand 500ms ease-in-out;\n\t\tmargin-top: 2rem;\n\t\tgap: 1rem;\n\t\tpadding-top: 1rem;\n\t\t/* display: flex;\n\t\tflex-direction: column;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\talign-items: center;\n\t\tmargin-top: 2.5rem;\n\t\tgap: 1rem; */\n\t}\n\n\t@keyframes expand {\n\t\t0% {\n\t\t\ttransform: scaleY(0);\n\t\t}\n\n\t\t70% {\n\t\t\ttransform: scaleY(1.1);\n\t\t}\n\n\t\t100% {\n\t\t\ttransform: scaleY(1);\n\t\t}\n\t}\n\n\t.inactive {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\tbackground-color: #4fd1c5;\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tz-index: 999;\n\t\tanimation: collapse 0.5s forwards;\n\t\tmargin-top: 2rem;\n\t\tgap: 1rem;\n\t\tpadding-top: 1rem;\n\t}\n\n\t/* .inactive {\n\t\topacity: 0;\n\t\tvisibility: hidden;\n\t\ttransform: scaleY(0);\n\t\ttransition:\n\t\t\ttransform 0.5s,\n\t\t\topacity 0.5s,\n\t\t\tvisibility 0s 0s;\n\t} */\n\n\t@keyframes collapse {\n\t\t0% {\n\t\t\ttransform: scaleY(1);\n\t\t}\n\t\t70% {\n\t\t\ttransform: scaleY(1.1);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scaleY(0);\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t.hamburger-menu a {\n\t\tborder-bottom: 1.5px solid #e0e0e0;\n\t\ttext-align: center;\n\t}\n\n\t.hamburger-menu a:nth-of-type(4) {\n\t\tborder-bottom: none;\n\t}\n\n\t.hamburger-menu a {\n\t\tfont-size: 1.5rem;\n\t\tpadding-bottom: 0.5rem;\n\t}\n\n\t.first-text-container h3 {\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.name {\n\t\tfont-size: 2rem;\n\t}\n\n\t#typed-text {\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.second-block-text-container {\n\t\tgap: 3rem;\n\t}\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNNO0FBQ047QUFDQTtBQUNOO0FBQ1E7QUFDUjtBQUNBO0FBQ1E7QUFDRjtBQUNWO0FBQ0k7QUFDSTtBQUNNO0FBQ0o7QUFDRTtBQUNOO0FBQ0Y7QUFDTTtBQUNKO0FBQ0U7QUFDRjtBQUNGO0FBQ0Y7QUFFOUIsU0FBU3dCLGtCQUFrQkEsQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUU7RUFDekMsSUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbERGLFlBQVksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBRTNDLElBQU1DLGFBQWEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ25ERyxhQUFhLENBQUNDLEdBQUcsR0FBR1IsS0FBSztFQUN6Qk8sYUFBYSxDQUFDRSxHQUFHLEdBQUdSLEtBQUs7RUFDekJNLGFBQWEsQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFFN0MsSUFBTUksYUFBYSxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDakRNLGFBQWEsQ0FBQ0wsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFDN0NJLGFBQWEsQ0FBQ0MsV0FBVyxHQUFHVixLQUFLO0VBRWpDQyxZQUFZLENBQUNVLFdBQVcsQ0FBQ0wsYUFBYSxDQUFDO0VBQ3ZDTCxZQUFZLENBQUNVLFdBQVcsQ0FBQ0YsYUFBYSxDQUFDO0VBRXZDLE9BQU9SLFlBQVk7QUFDcEI7O0FBRUE7QUFDQSxTQUFTVyxPQUFPQSxDQUFBLEVBQUc7RUFDbEIsSUFBTUMsUUFBUSxHQUFHWCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFDcEQsSUFBTUMsT0FBTyxHQUFHYixRQUFRLENBQUNZLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFDbkQsSUFBTUUsVUFBVSxHQUFHZCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFDekQsSUFBSUcsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO0VBQ3pCLElBQUlDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUN6QixJQUFNQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0VBRXRCO0VBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDM0I7SUFDQSxJQUFJLENBQUNILFdBQVcsRUFBRTs7SUFFbEI7SUFDQSxJQUFNSSxjQUFjLEdBQUdILGVBQWUsS0FBSyxDQUFDLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHQSxVQUFVO0lBQ3ZFTixRQUFRLENBQUNTLFVBQVUsSUFBSUQsY0FBYzs7SUFFckM7SUFDQSxJQUNFSCxlQUFlLEtBQUssQ0FBQyxJQUFJTCxRQUFRLENBQUNTLFVBQVUsR0FBRyxDQUFDLElBQ2hESixlQUFlLEtBQUssQ0FBQyxJQUNyQkwsUUFBUSxDQUFDUyxVQUFVLEdBQUdULFFBQVEsQ0FBQ1UsV0FBVyxHQUFHVixRQUFRLENBQUNXLFdBQVksRUFDbEU7TUFDRDtNQUNBQyxxQkFBcUIsQ0FBQ0wsYUFBYSxDQUFDO0lBQ3JDLENBQUMsTUFBTTtNQUNOO01BQ0FILFdBQVcsR0FBRyxLQUFLO0lBQ3BCO0VBQ0QsQ0FBQzs7RUFFRDtFQUNBLElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDeEI7SUFDQSxJQUFJLENBQUNMLFdBQVcsRUFBRTtNQUNqQkMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ3JCRCxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7TUFDcEJHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQjtFQUNELENBQUM7O0VBRUQ7RUFDQSxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3pCO0lBQ0EsSUFBSSxDQUFDVCxXQUFXLEVBQUU7TUFDakJDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUNyQkQsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDO01BQ3BCRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEI7RUFDRCxDQUFDOztFQUVEO0VBQ0EsSUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUN4QlYsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO0VBQ3RCLENBQUM7O0VBRUQ7RUFDQUYsT0FBTyxDQUFDYSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVOLFVBQVUsQ0FBQyxDQUFDLENBQUM7RUFDcERQLE9BQU8sQ0FBQ2EsZ0JBQWdCLENBQUMsWUFBWSxFQUFFRCxVQUFVLENBQUMsQ0FBQyxDQUFDO0VBQ3BEWixPQUFPLENBQUNhLGdCQUFnQixDQUFDLE9BQU8sRUFBRU4sVUFBVSxDQUFDLENBQUMsQ0FBQztFQUMvQ04sVUFBVSxDQUFDWSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVGLFdBQVcsQ0FBQyxDQUFDLENBQUM7RUFDeERWLFVBQVUsQ0FBQ1ksZ0JBQWdCLENBQUMsWUFBWSxFQUFFRCxVQUFVLENBQUMsQ0FBQyxDQUFDO0VBQ3ZEWCxVQUFVLENBQUNZLGdCQUFnQixDQUFDLE9BQU8sRUFBRUYsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNwRDtBQUVBLFNBQVNHLEtBQUtBLENBQUEsRUFBRztFQUNoQixJQUFNQyxTQUFTLEdBQUc1QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDL0MyQixTQUFTLENBQUMxQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFFckMsSUFBTTBCLGNBQWMsR0FBRzdCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNwRDRCLGNBQWMsQ0FBQzNCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0VBRS9DLElBQU0yQixrQkFBa0IsR0FBRzlCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN4RDZCLGtCQUFrQixDQUFDNUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7RUFDeEQsSUFBTTRCLE9BQU8sR0FBRy9CLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztFQUM1QzhCLE9BQU8sQ0FBQ3ZCLFdBQVcsR0FBRyxRQUFRO0VBQzlCLElBQU13QixXQUFXLEdBQUdoQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDbEQrQixXQUFXLENBQUN4QixXQUFXLEdBQUcsSUFBSTtFQUM5QnVCLE9BQU8sQ0FBQ3RCLFdBQVcsQ0FBQ3VCLFdBQVcsQ0FBQztFQUNoQ0QsT0FBTyxDQUFDN0IsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQ2pDMkIsa0JBQWtCLENBQUNyQixXQUFXLENBQUNzQixPQUFPLENBQUM7RUFDdkNGLGNBQWMsQ0FBQ3BCLFdBQVcsQ0FBQ3FCLGtCQUFrQixDQUFDO0VBRTlDLElBQU1HLFVBQVUsR0FBR2pDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNoRGdDLFVBQVUsQ0FBQy9CLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUV4QyxJQUFNK0IsY0FBYyxHQUFHbEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3BEaUMsY0FBYyxDQUFDaEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7RUFFakQsSUFBTWdDLFNBQVMsR0FBR25DLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQ2tDLFNBQVMsQ0FBQ2pDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUVwQyxJQUFNaUMsV0FBVyxHQUFHcEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQy9DbUMsV0FBVyxDQUFDbEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBQzFDaUMsV0FBVyxDQUFDNUIsV0FBVyxHQUN0QixnaEJBQWdoQjtFQUVqaEIsSUFBTTZCLFlBQVksR0FBR3JDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNoRG9DLFlBQVksQ0FBQ25DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUMzQ2tDLFlBQVksQ0FBQzdCLFdBQVcsaXJCQUF3cUI7RUFFaHNCLElBQU04QixZQUFZLEdBQUd0QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDaERxQyxZQUFZLENBQUNwQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7RUFDM0NtQyxZQUFZLENBQUM5QixXQUFXLEdBQ3ZCLDBSQUEwUjtFQUUzUixJQUFNK0IsWUFBWSxHQUFHdkMsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ2hEc0MsWUFBWSxDQUFDckMsU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBQzNDb0MsWUFBWSxDQUFDL0IsV0FBVyxHQUN2QiwrU0FBK1M7RUFFaFQyQixTQUFTLENBQUMxQixXQUFXLENBQUMyQixXQUFXLENBQUM7RUFDbENELFNBQVMsQ0FBQzFCLFdBQVcsQ0FBQzRCLFlBQVksQ0FBQztFQUNuQ0YsU0FBUyxDQUFDMUIsV0FBVyxDQUFDNkIsWUFBWSxDQUFDO0VBQ25DSCxTQUFTLENBQUMxQixXQUFXLENBQUM4QixZQUFZLENBQUM7RUFDbkNMLGNBQWMsQ0FBQ3pCLFdBQVcsQ0FBQzBCLFNBQVMsQ0FBQztFQUVyQyxJQUFNSyxXQUFXLEdBQUd4QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDakR1QyxXQUFXLENBQUN0QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFFekMsSUFBTXNDLE9BQU8sR0FBR3pDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMzQ3dDLE9BQU8sQ0FBQ0MsSUFBSSxHQUFHLDhCQUE4QjtFQUM3Q0QsT0FBTyxDQUFDRSxNQUFNLEdBQUcsUUFBUTtFQUN6QkYsT0FBTyxDQUFDRyxHQUFHLEdBQUcscUJBQXFCO0VBQ25DLElBQU1DLFNBQVMsR0FBRzdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQzRDLFNBQVMsQ0FBQ3hDLEdBQUcsR0FBR2hDLCtDQUFTO0VBQ3pCd0UsU0FBUyxDQUFDdkMsR0FBRyxHQUFHLFFBQVE7RUFDeEJ1QyxTQUFTLENBQUMzQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDdENzQyxPQUFPLENBQUNoQyxXQUFXLENBQUNvQyxTQUFTLENBQUM7RUFDOUJMLFdBQVcsQ0FBQy9CLFdBQVcsQ0FBQ2dDLE9BQU8sQ0FBQztFQUVoQyxJQUFNSyxVQUFVLEdBQUc5QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDOUM2QyxVQUFVLENBQUNKLElBQUksR0FBRyx1Q0FBdUM7RUFDekRJLFVBQVUsQ0FBQ0gsTUFBTSxHQUFHLFFBQVE7RUFDNUJHLFVBQVUsQ0FBQ0YsR0FBRyxHQUFHLHFCQUFxQjtFQUN0QyxJQUFNRyxNQUFNLEdBQUcvQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDNUM4QyxNQUFNLENBQUMxQyxHQUFHLEdBQUcvQiw0Q0FBTTtFQUNuQnlFLE1BQU0sQ0FBQ3pDLEdBQUcsR0FBRyxVQUFVO0VBQ3ZCeUMsTUFBTSxDQUFDN0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQ25DMkMsVUFBVSxDQUFDckMsV0FBVyxDQUFDc0MsTUFBTSxDQUFDO0VBQzlCUCxXQUFXLENBQUMvQixXQUFXLENBQUNxQyxVQUFVLENBQUM7RUFFbkNaLGNBQWMsQ0FBQ3pCLFdBQVcsQ0FBQytCLFdBQVcsQ0FBQztFQUN2Q1AsVUFBVSxDQUFDeEIsV0FBVyxDQUFDeUIsY0FBYyxDQUFDO0VBRXRDLElBQU1jLE9BQU8sR0FBR2hELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3QytDLE9BQU8sQ0FBQzNDLEdBQUcsR0FBR2pDLDRDQUFNO0VBQ3BCNEUsT0FBTyxDQUFDMUMsR0FBRyxHQUFHLFFBQVE7RUFDdEIwQyxPQUFPLENBQUM5QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztFQUN6QzhCLFVBQVUsQ0FBQ3hCLFdBQVcsQ0FBQ3VDLE9BQU8sQ0FBQztFQUUvQm5CLGNBQWMsQ0FBQ3BCLFdBQVcsQ0FBQ3dCLFVBQVUsQ0FBQztFQUN0Q0wsU0FBUyxDQUFDbkIsV0FBVyxDQUFDb0IsY0FBYyxDQUFDO0VBRXJDLElBQU1vQixTQUFTLEdBQUdqRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDL0NnRCxTQUFTLENBQUMvQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFFckMsSUFBTStDLGFBQWEsR0FBR2xELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNuRGlELGFBQWEsQ0FBQ2hELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0VBRTlDLElBQU1nRCxTQUFTLEdBQUduRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDaERrRCxTQUFTLENBQUNqRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFDcENnRCxTQUFTLENBQUMzQyxXQUFXLEdBQUcsT0FBTztFQUUvQixJQUFNNEMsR0FBRyxHQUFHcEQsUUFBUSxDQUFDcUQsY0FBYyxDQUFDLE1BQU0sQ0FBQztFQUUzQyxJQUFNQyxhQUFhLEdBQUd0RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDcERxRCxhQUFhLENBQUM5QyxXQUFXLEdBQUcsZUFBZTtFQUMzQzhDLGFBQWEsQ0FBQ3BELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUV4QyxJQUFNb0QsUUFBUSxHQUFHdkQsUUFBUSxDQUFDcUQsY0FBYyxDQUFDLG1CQUFtQixDQUFDO0VBRTdELElBQU1HLElBQUksR0FBR3hELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUN4Q3VELElBQUksQ0FBQ3RELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUMxQnFELElBQUksQ0FBQy9DLFdBQVcsQ0FBQzBDLFNBQVMsQ0FBQztFQUMzQkssSUFBSSxDQUFDL0MsV0FBVyxDQUFDMkMsR0FBRyxDQUFDO0VBQ3JCSSxJQUFJLENBQUMvQyxXQUFXLENBQUM2QyxhQUFhLENBQUM7RUFDL0JFLElBQUksQ0FBQy9DLFdBQVcsQ0FBQzhDLFFBQVEsQ0FBQztFQUMxQkwsYUFBYSxDQUFDekMsV0FBVyxDQUFDK0MsSUFBSSxDQUFDO0VBQy9CUCxTQUFTLENBQUN4QyxXQUFXLENBQUN5QyxhQUFhLENBQUM7RUFFcEMsSUFBTU8saUJBQWlCLEdBQUd6RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDdkR3RCxpQkFBaUIsQ0FBQ3ZELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0VBRXJELElBQU11RCxXQUFXLEdBQUcxRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDakR5RCxXQUFXLENBQUN4RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFFekMsSUFBTVUsT0FBTyxHQUFHYixRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDaERZLE9BQU8sQ0FBQ1gsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQ2pDVSxPQUFPLENBQUNMLFdBQVcsR0FBRyxHQUFHO0VBQ3pCa0QsV0FBVyxDQUFDakQsV0FBVyxDQUFDSSxPQUFPLENBQUM7RUFFaEMsSUFBTUYsUUFBUSxHQUFHWCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDOUNVLFFBQVEsQ0FBQ1QsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBRWxDLElBQU13RCxhQUFhLEdBQUczRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbkQwRCxhQUFhLENBQUN6RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztFQUU3QyxJQUFNeUQsYUFBYSxHQUFHaEUsa0JBQWtCLENBQUNILDJDQUFJLEVBQUUsTUFBTSxDQUFDO0VBQ3RELElBQU1vRSxhQUFhLEdBQUdqRSxrQkFBa0IsQ0FBQ0YsMENBQUcsRUFBRSxLQUFLLENBQUM7RUFDcEQsSUFBTW9FLGFBQWEsR0FBR2xFLGtCQUFrQixDQUFDRCx5Q0FBRSxFQUFFLFlBQVksQ0FBQztFQUMxRCxJQUFNb0UsYUFBYSxHQUFHbkUsa0JBQWtCLENBQUNQLDBDQUFHLEVBQUUsS0FBSyxDQUFDO0VBQ3BELElBQU0yRSxhQUFhLEdBQUdwRSxrQkFBa0IsQ0FBQ2IsMENBQUcsRUFBRSxLQUFLLENBQUM7RUFDcEQsSUFBTWtGLGFBQWEsR0FBR3JFLGtCQUFrQixDQUFDZiw0Q0FBTSxFQUFFLFNBQVMsQ0FBQztFQUMzRCxJQUFNcUYsYUFBYSxHQUFHdEUsa0JBQWtCLENBQUNyQiw0Q0FBTSxFQUFFLFFBQVEsQ0FBQztFQUMxRCxJQUFNNEYsYUFBYSxHQUFHdkUsa0JBQWtCLENBQUNKLDRDQUFLLEVBQUUsT0FBTyxDQUFDO0VBQ3hELElBQU00RSxhQUFhLEdBQUd4RSxrQkFBa0IsQ0FBQ04sNkNBQU0sRUFBRSxRQUFRLENBQUM7RUFDMUQsSUFBTStFLGNBQWMsR0FBR3pFLGtCQUFrQixDQUFDTCwyQ0FBSSxFQUFFLE1BQU0sQ0FBQztFQUN2RCxJQUFNK0UsY0FBYyxHQUFHMUUsa0JBQWtCLENBQUNwQix5Q0FBRyxFQUFFLEtBQUssQ0FBQztFQUNyRCxJQUFNK0YsY0FBYyxHQUFHM0Usa0JBQWtCLENBQUNULDhDQUFPLEVBQUUsU0FBUyxDQUFDO0VBQzdELElBQU1xRixjQUFjLEdBQUc1RSxrQkFBa0IsQ0FBQ2pCLHlDQUFHLEVBQUUsUUFBUSxDQUFDO0VBQ3hELElBQU04RixjQUFjLEdBQUc3RSxrQkFBa0IsQ0FBQ1osNENBQUssRUFBRSxPQUFPLENBQUM7RUFDekQsSUFBTTBGLGNBQWMsR0FBRzlFLGtCQUFrQixDQUFDUiwyQ0FBSSxFQUFFLE1BQU0sQ0FBQztFQUN2RCxJQUFNdUYsY0FBYyxHQUFHL0Usa0JBQWtCLENBQUNYLCtDQUFRLEVBQUUsVUFBVSxDQUFDO0VBQy9ELElBQU0yRixjQUFjLEdBQUdoRixrQkFBa0IsQ0FBQ1YsNkNBQU0sRUFBRSxRQUFRLENBQUM7RUFDM0QsSUFBTTJGLGNBQWMsR0FBR2pGLGtCQUFrQixDQUFDaEIsNkNBQU8sRUFBRSxTQUFTLENBQUM7RUFDN0QsSUFBTWtHLGNBQWMsR0FBR2xGLGtCQUFrQixDQUFDZCx3Q0FBQyxFQUFFLEtBQUssQ0FBQztFQUNuRCxJQUFNaUcsY0FBYyxHQUFHbkYsa0JBQWtCLENBQUNsQix5Q0FBRyxFQUFFLEtBQUssQ0FBQztFQUNyRCxJQUFNc0csY0FBYyxHQUFHcEYsa0JBQWtCLENBQUNuQiw2Q0FBTyxFQUFFLFNBQVMsQ0FBQztFQUU3RGtGLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ21ELGFBQWEsQ0FBQztFQUN4Q0QsYUFBYSxDQUFDbEQsV0FBVyxDQUFDb0QsYUFBYSxDQUFDO0VBQ3hDRixhQUFhLENBQUNsRCxXQUFXLENBQUNxRCxhQUFhLENBQUM7RUFDeENILGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ3NELGFBQWEsQ0FBQztFQUN4Q0osYUFBYSxDQUFDbEQsV0FBVyxDQUFDdUQsYUFBYSxDQUFDO0VBQ3hDTCxhQUFhLENBQUNsRCxXQUFXLENBQUN3RCxhQUFhLENBQUM7RUFDeENOLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ3lELGFBQWEsQ0FBQztFQUN4Q1AsYUFBYSxDQUFDbEQsV0FBVyxDQUFDMEQsYUFBYSxDQUFDO0VBQ3hDUixhQUFhLENBQUNsRCxXQUFXLENBQUMyRCxhQUFhLENBQUM7RUFDeENULGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQzRELGNBQWMsQ0FBQztFQUN6Q1YsYUFBYSxDQUFDbEQsV0FBVyxDQUFDNkQsY0FBYyxDQUFDO0VBQ3pDWCxhQUFhLENBQUNsRCxXQUFXLENBQUM4RCxjQUFjLENBQUM7RUFDekNaLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQytELGNBQWMsQ0FBQztFQUN6Q2IsYUFBYSxDQUFDbEQsV0FBVyxDQUFDZ0UsY0FBYyxDQUFDO0VBQ3pDZCxhQUFhLENBQUNsRCxXQUFXLENBQUNpRSxjQUFjLENBQUM7RUFDekNmLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ2tFLGNBQWMsQ0FBQztFQUN6Q2hCLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ21FLGNBQWMsQ0FBQztFQUN6Q2pCLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ29FLGNBQWMsQ0FBQztFQUN6Q2xCLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ3FFLGNBQWMsQ0FBQztFQUN6Q25CLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ3NFLGNBQWMsQ0FBQztFQUN6Q3BCLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ3VFLGNBQWMsQ0FBQztFQUV6Q3JFLFFBQVEsQ0FBQ0YsV0FBVyxDQUFDa0QsYUFBYSxDQUFDO0VBQ25DRCxXQUFXLENBQUNqRCxXQUFXLENBQUNJLE9BQU8sQ0FBQztFQUNoQzZDLFdBQVcsQ0FBQ2pELFdBQVcsQ0FBQ0UsUUFBUSxDQUFDO0VBRWpDLElBQU1HLFVBQVUsR0FBR2QsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQ25EYSxVQUFVLENBQUNaLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztFQUN2Q1csVUFBVSxDQUFDTixXQUFXLEdBQUcsR0FBRztFQUM1QmtELFdBQVcsQ0FBQ2pELFdBQVcsQ0FBQ0ssVUFBVSxDQUFDO0VBRW5DMkMsaUJBQWlCLENBQUNoRCxXQUFXLENBQUNpRCxXQUFXLENBQUM7RUFDMUNULFNBQVMsQ0FBQ3hDLFdBQVcsQ0FBQ2dELGlCQUFpQixDQUFDO0VBQ3hDN0IsU0FBUyxDQUFDbkIsV0FBVyxDQUFDd0MsU0FBUyxDQUFDO0VBRWhDLElBQU1nQyxJQUFJLEdBQUdqRixRQUFRLENBQUNZLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztFQUN0RHFFLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEVBQUU7RUFDbkJELElBQUksQ0FBQ3hFLFdBQVcsQ0FBQ21CLFNBQVMsQ0FBQztFQUUzQmxCLE9BQU8sQ0FBQyxDQUFDO0FBQ1Y7QUFFQSxpRUFBZWlCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblRwQjtBQUM2QjtBQUNhO0FBQ1I7QUFDSTtBQUNNO0FBQ047QUFFdEMsU0FBUzRELFdBQVdBLENBQUEsRUFBRztFQUN0QjtFQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJTCxnREFBSyxDQUFDLGFBQWEsRUFBRTtJQUN0QztJQUNBTSxPQUFPLEVBQUUsQ0FDUixzQkFBc0IsRUFDdEIsZ0JBQWdCLEVBQ2hCLDBCQUEwQixFQUMxQixxQkFBcUIsRUFDckIsNkJBQTZCLEVBQzdCLCtCQUErQixFQUMvQix3QkFBd0IsRUFDeEIsMEJBQTBCLEVBQzFCLGlDQUFpQyxFQUNqQyxpQkFBaUIsRUFDakIsK0JBQStCLEVBQy9CLGlDQUFpQyxFQUNqQyxnQ0FBZ0MsQ0FDaEM7SUFFRDtJQUNBQyxTQUFTLEVBQUUsRUFBRTtJQUNiQyxTQUFTLEVBQUUsRUFBRTtJQUNiO0lBQ0FDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCO0lBQ0FDLFNBQVMsRUFBRSxJQUFJO0lBQ2Y7SUFDQUMsSUFBSSxFQUFFLElBQUk7SUFDVjtJQUNBQyxVQUFVLEVBQUUsSUFBSTtJQUNoQjtJQUNBQyxVQUFVLEVBQUUsR0FBRztJQUNmO0lBQ0FDLElBQUksRUFBRSxJQUFJO0lBQ1Y7SUFDQUMsYUFBYSxFQUFFLElBQUk7SUFDbkI7SUFDQUMsV0FBVyxFQUFFO0VBQ2QsQ0FBQyxDQUFDO0FBQ0g7QUFFQSxTQUFTQyxRQUFRQSxDQUFBLEVBQUc7RUFDbkIsSUFBTUMsYUFBYSxHQUFHckcsUUFBUSxDQUFDWSxhQUFhLENBQUMsaUJBQWlCLENBQUM7RUFDL0R5RixhQUFhLENBQUNuQixTQUFTLEdBQUcsRUFBRTtFQUU1QixJQUFNb0IsY0FBYyxHQUFHdEcsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3BEcUcsY0FBYyxDQUFDcEcsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7RUFFaEQsSUFBTW9HLGFBQWEsR0FBR3ZHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNuRHNHLGFBQWEsQ0FBQ3JHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0VBRTdDLElBQU1xRyxnQkFBZ0IsR0FBR3hHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN0RHVHLGdCQUFnQixDQUFDdEcsU0FBUyxDQUFDQyxHQUFHLENBQUMsb0JBQW9CLENBQUM7RUFFcEQsSUFBTXNHLGtCQUFrQixHQUFHekcsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3hEd0csa0JBQWtCLENBQUN2RyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztFQUV4RCxJQUFNdUcsU0FBUyxHQUFHMUcsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQzlDeUcsU0FBUyxDQUFDbEcsV0FBVyxHQUFHLFlBQVk7RUFDcENpRyxrQkFBa0IsQ0FBQ2hHLFdBQVcsQ0FBQ2lHLFNBQVMsQ0FBQztFQUV6QyxJQUFNQyxJQUFJLEdBQUczRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDMUMwRyxJQUFJLENBQUN6RyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDMUJ3RyxJQUFJLENBQUN0RyxHQUFHLEdBQUdnRiwwQ0FBSTtFQUNmc0IsSUFBSSxDQUFDckcsR0FBRyxHQUFHLE1BQU07RUFDakJtRyxrQkFBa0IsQ0FBQ2hHLFdBQVcsQ0FBQ2tHLElBQUksQ0FBQztFQUVwQyxJQUFNQyxtQkFBbUIsR0FBRzVHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN6RDJHLG1CQUFtQixDQUFDMUcsU0FBUyxDQUFDQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7RUFFMUQsSUFBTTBHLFVBQVUsR0FBRzdHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztFQUMvQzRHLFVBQVUsQ0FBQ3JHLFdBQVcsR0FBRyxNQUFNO0VBQy9CLElBQU1zRyxJQUFJLEdBQUc5RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDM0M2RyxJQUFJLENBQUN0RyxXQUFXLEdBQUcsY0FBYztFQUNqQ3NHLElBQUksQ0FBQzVHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUMxQjBHLFVBQVUsQ0FBQ3BHLFdBQVcsQ0FBQ3FHLElBQUksQ0FBQztFQUM1QkYsbUJBQW1CLENBQUNuRyxXQUFXLENBQUNvRyxVQUFVLENBQUM7RUFFM0NMLGdCQUFnQixDQUFDL0YsV0FBVyxDQUFDZ0csa0JBQWtCLENBQUM7RUFDaERELGdCQUFnQixDQUFDL0YsV0FBVyxDQUFDbUcsbUJBQW1CLENBQUM7RUFFakQsSUFBTUcsa0JBQWtCLEdBQUcvRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDeEQ4RyxrQkFBa0IsQ0FBQzdHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0VBRXhELElBQU02RyxTQUFTLEdBQUdoSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDN0MrRyxTQUFTLENBQUM5RyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFDckM2RyxTQUFTLENBQUNDLEVBQUUsR0FBRyxZQUFZO0VBRTNCRixrQkFBa0IsQ0FBQ3RHLFdBQVcsQ0FBQ3VHLFNBQVMsQ0FBQztFQUV6Q1QsYUFBYSxDQUFDOUYsV0FBVyxDQUFDK0YsZ0JBQWdCLENBQUM7RUFDM0NELGFBQWEsQ0FBQzlGLFdBQVcsQ0FBQ3NHLGtCQUFrQixDQUFDO0VBRTdDVCxjQUFjLENBQUM3RixXQUFXLENBQUM4RixhQUFhLENBQUM7RUFFekMsSUFBTVcsY0FBYyxHQUFHbEgsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3BEaUgsY0FBYyxDQUFDaEgsU0FBUyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7RUFFL0MsSUFBTU4sS0FBSyxHQUFHRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDM0NKLEtBQUssQ0FBQ1EsR0FBRyxHQUFHK0UsOENBQVE7RUFDcEJ2RixLQUFLLENBQUNTLEdBQUcsR0FBRyxVQUFVO0VBQ3RCVCxLQUFLLENBQUNLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUMvQitHLGNBQWMsQ0FBQ3pHLFdBQVcsQ0FBQ1osS0FBSyxDQUFDO0VBRWpDeUcsY0FBYyxDQUFDN0YsV0FBVyxDQUFDeUcsY0FBYyxDQUFDO0VBRTFDYixhQUFhLENBQUM1RixXQUFXLENBQUM2RixjQUFjLENBQUM7RUFFekMsSUFBTWEsZUFBZSxHQUFHbkgsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3JEa0gsZUFBZSxDQUFDakgsU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7RUFFbEQsSUFBTWlILHdCQUF3QixHQUFHcEgsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzlEbUgsd0JBQXdCLENBQUNsSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQztFQUVyRSxJQUFNa0gsT0FBTyxHQUFHckgsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzdDb0gsT0FBTyxDQUFDbkgsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBRWpDLElBQU1xRCxJQUFJLEdBQUd4RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDekN1RCxJQUFJLENBQUNoRCxXQUFXLEdBQUcsZ0NBQWdDO0VBRW5ELElBQU04RyxJQUFJLEdBQUd0SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDM0NxSCxJQUFJLENBQUM5RyxXQUFXLEdBQUcsZUFBZTtFQUNsQzhHLElBQUksQ0FBQ3BILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUUvQnFELElBQUksQ0FBQy9DLFdBQVcsQ0FBQzZHLElBQUksQ0FBQztFQUN0QkQsT0FBTyxDQUFDNUcsV0FBVyxDQUFDK0MsSUFBSSxDQUFDO0VBQ3pCLElBQU0rRCxNQUFNLEdBQUd2SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDNUNzSCxNQUFNLENBQUNySCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFDL0IsSUFBTWdELFNBQVMsR0FBR25ELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUNoRGtELFNBQVMsQ0FBQzNDLFdBQVcsR0FDcEIsMERBQTBEO0VBQzNEMkMsU0FBUyxDQUFDakQsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0VBRXBDLElBQU1xSCxxQkFBcUIsR0FBR3hILFFBQVEsQ0FBQ3FELGNBQWMsQ0FDcEQsb05BQ0QsQ0FBQztFQUNELElBQU1vRSxPQUFPLEdBQUd6SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDM0N3SCxPQUFPLENBQUN2SCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7RUFFakNzSCxPQUFPLENBQUNoSCxXQUFXLENBQUMwQyxTQUFTLENBQUM7RUFDOUJzRSxPQUFPLENBQUNoSCxXQUFXLENBQUMrRyxxQkFBcUIsQ0FBQztFQUUxQyxJQUFNRSxVQUFVLEdBQUcxSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDOUN5SCxVQUFVLENBQUNsSCxXQUFXLEdBQ3JCLGtUQUFrVDtFQUNuVGtILFVBQVUsQ0FBQ3hILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUNwQ29ILE1BQU0sQ0FBQzlHLFdBQVcsQ0FBQ2dILE9BQU8sQ0FBQztFQUMzQkYsTUFBTSxDQUFDOUcsV0FBVyxDQUFDaUgsVUFBVSxDQUFDO0VBQzlCTCxPQUFPLENBQUM1RyxXQUFXLENBQUM4RyxNQUFNLENBQUM7RUFDM0JILHdCQUF3QixDQUFDM0csV0FBVyxDQUFDNEcsT0FBTyxDQUFDO0VBRTdDLElBQU1NLE1BQU0sR0FBRzNILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM1QzBILE1BQU0sQ0FBQ3pILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUM5QndILE1BQU0sQ0FBQ3RILEdBQUcsR0FBR2lGLDRDQUFNO0VBQ25CcUMsTUFBTSxDQUFDckgsR0FBRyxHQUFHLFFBQVE7RUFDckI4Ryx3QkFBd0IsQ0FBQzNHLFdBQVcsQ0FBQ2tILE1BQU0sQ0FBQztFQUU1QyxJQUFNQyxXQUFXLEdBQUc1SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDakQySCxXQUFXLENBQUMxSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFFekMsSUFBTTBILGFBQWEsR0FBRzdILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNuRDRILGFBQWEsQ0FBQzNILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0VBRTlDLElBQU0ySCxVQUFVLEdBQUc5SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDL0M2SCxVQUFVLENBQUN0SCxXQUFXLEdBQUcsWUFBWTtFQUVyQyxJQUFNdUgsVUFBVSxHQUFHL0gsUUFBUSxDQUFDcUQsY0FBYyxDQUFDLGVBQWUsQ0FBQztFQUMzRCxJQUFNMkUsU0FBUyxHQUFHaEksUUFBUSxDQUFDcUQsY0FBYyxDQUFDLFVBQVUsQ0FBQztFQUVyRCxJQUFNNEUsV0FBVyxHQUFHakksUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQ2xEZ0ksV0FBVyxDQUFDekgsV0FBVyxHQUFHLFNBQVM7RUFFbkMsSUFBTTBILGFBQWEsR0FBR2xJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNqRGlJLGFBQWEsQ0FBQ2hJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0VBQzlDK0gsYUFBYSxDQUFDekgsV0FBVyxDQUFDc0gsVUFBVSxDQUFDO0VBQ3JDRyxhQUFhLENBQUN6SCxXQUFXLENBQUN3SCxXQUFXLENBQUM7RUFDdENDLGFBQWEsQ0FBQ3pILFdBQVcsQ0FBQ3VILFNBQVMsQ0FBQztFQUVwQ0gsYUFBYSxDQUFDcEgsV0FBVyxDQUFDcUgsVUFBVSxDQUFDO0VBQ3JDRCxhQUFhLENBQUNwSCxXQUFXLENBQUN5SCxhQUFhLENBQUM7RUFFeEMsSUFBTTFGLFdBQVcsR0FBR3hDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNqRHVDLFdBQVcsQ0FBQ3RDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUV6QyxJQUFNc0MsT0FBTyxHQUFHekMsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzNDd0MsT0FBTyxDQUFDQyxJQUFJLEdBQUcsOEJBQThCO0VBQzdDRCxPQUFPLENBQUNFLE1BQU0sR0FBRyxRQUFRO0VBQ3pCRixPQUFPLENBQUNHLEdBQUcsR0FBRyxxQkFBcUI7RUFDbkMsSUFBTUMsU0FBUyxHQUFHN0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQy9DNEMsU0FBUyxDQUFDeEMsR0FBRyxHQUFHaEMsK0NBQVM7RUFDekJ3RSxTQUFTLENBQUN2QyxHQUFHLEdBQUcsUUFBUTtFQUN4QnVDLFNBQVMsQ0FBQzNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztFQUN0Q3NDLE9BQU8sQ0FBQ2hDLFdBQVcsQ0FBQ29DLFNBQVMsQ0FBQztFQUM5QkwsV0FBVyxDQUFDL0IsV0FBVyxDQUFDZ0MsT0FBTyxDQUFDO0VBRWhDLElBQU1LLFVBQVUsR0FBRzlDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM5QzZDLFVBQVUsQ0FBQ0osSUFBSSxHQUFHLHVDQUF1QztFQUN6REksVUFBVSxDQUFDSCxNQUFNLEdBQUcsUUFBUTtFQUM1QkcsVUFBVSxDQUFDRixHQUFHLEdBQUcscUJBQXFCO0VBQ3RDLElBQU1HLE1BQU0sR0FBRy9DLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM1QzhDLE1BQU0sQ0FBQzFDLEdBQUcsR0FBRy9CLDRDQUFNO0VBQ25CeUUsTUFBTSxDQUFDekMsR0FBRyxHQUFHLFVBQVU7RUFDdkJ5QyxNQUFNLENBQUM3QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDbkMyQyxVQUFVLENBQUNyQyxXQUFXLENBQUNzQyxNQUFNLENBQUM7RUFDOUJQLFdBQVcsQ0FBQy9CLFdBQVcsQ0FBQ3FDLFVBQVUsQ0FBQztFQUVuQzhFLFdBQVcsQ0FBQ25ILFdBQVcsQ0FBQ29ILGFBQWEsQ0FBQztFQUN0Q0QsV0FBVyxDQUFDbkgsV0FBVyxDQUFDK0IsV0FBVyxDQUFDO0VBRXBDMkUsZUFBZSxDQUFDMUcsV0FBVyxDQUFDMkcsd0JBQXdCLENBQUM7RUFDckRELGVBQWUsQ0FBQzFHLFdBQVcsQ0FBQ21ILFdBQVcsQ0FBQztFQUV4Q3ZCLGFBQWEsQ0FBQzVGLFdBQVcsQ0FBQzBHLGVBQWUsQ0FBQztFQUUxQzVCLFdBQVcsQ0FBQyxDQUFDO0FBQ2Q7QUFFQSxpRUFBZWEsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE9XO0FBQ1k7QUFDTjtBQUNGO0FBQ1E7QUFDQTtBQUNaO0FBRWxDLFNBQVNzQyxpQkFBaUJBLENBQUM3SSxLQUFLLEVBQUVDLEtBQUssRUFBRTZJLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUU7RUFDM0UsSUFBTUMsV0FBVyxHQUFHOUksUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2pENkksV0FBVyxDQUFDNUksU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBRXpDLElBQU00SSxZQUFZLEdBQUcvSSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbEQ4SSxZQUFZLENBQUMxSSxHQUFHLEdBQUdSLEtBQUs7RUFDeEJrSixZQUFZLENBQUN6SSxHQUFHLEdBQUdSLEtBQUs7RUFDeEJnSixXQUFXLENBQUNySSxXQUFXLENBQUNzSSxZQUFZLENBQUM7RUFFckMsSUFBTUMsY0FBYyxHQUFHaEosUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3BEK0ksY0FBYyxDQUFDOUksU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7RUFFaEQsSUFBTThJLFlBQVksR0FBR2pKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztFQUNqRGdKLFlBQVksQ0FBQ3pJLFdBQVcsR0FBR1YsS0FBSztFQUVoQyxJQUFNb0osa0JBQWtCLEdBQUdsSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDdERpSixrQkFBa0IsQ0FBQzFJLFdBQVcsR0FBR21JLFdBQVc7RUFFNUMsSUFBTVEsY0FBYyxHQUFHbkosUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3BEa0osY0FBYyxDQUFDakosU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7RUFFaEQsSUFBTWlKLGVBQWUsR0FBR3BKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNuRG1KLGVBQWUsQ0FBQzFHLElBQUksR0FBR2tHLFFBQVE7RUFDL0JRLGVBQWUsQ0FBQzVJLFdBQVcsR0FBRyxXQUFXO0VBQ3pDMkksY0FBYyxDQUFDMUksV0FBVyxDQUFDMkksZUFBZSxDQUFDO0VBRTNDLElBQU1DLGlCQUFpQixHQUFHckosUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ3JEb0osaUJBQWlCLENBQUMzRyxJQUFJLEdBQUdtRyxVQUFVO0VBQ25DUSxpQkFBaUIsQ0FBQzdJLFdBQVcsR0FBRyxhQUFhO0VBQzdDMkksY0FBYyxDQUFDMUksV0FBVyxDQUFDNEksaUJBQWlCLENBQUM7RUFFN0NMLGNBQWMsQ0FBQ3ZJLFdBQVcsQ0FBQ3dJLFlBQVksQ0FBQztFQUN4Q0QsY0FBYyxDQUFDdkksV0FBVyxDQUFDeUksa0JBQWtCLENBQUM7RUFDOUNGLGNBQWMsQ0FBQ3ZJLFdBQVcsQ0FBQzBJLGNBQWMsQ0FBQztFQUMxQ0wsV0FBVyxDQUFDckksV0FBVyxDQUFDdUksY0FBYyxDQUFDO0VBRXZDLE9BQU9GLFdBQVc7QUFDbkI7QUFFQSxTQUFTUSxPQUFPQSxDQUFBLEVBQUc7RUFDbEIsSUFBTUMsVUFBVSxHQUFHdkosUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2hEc0osVUFBVSxDQUFDckosU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQ3ZDLElBQU04SSxZQUFZLEdBQUdqSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDakRnSixZQUFZLENBQUN6SSxXQUFXLEdBQUcsVUFBVTtFQUNyQytJLFVBQVUsQ0FBQzlJLFdBQVcsQ0FBQ3dJLFlBQVksQ0FBQztFQUVwQyxJQUFNTyxnQkFBZ0IsR0FBR3hKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN0RHVKLGdCQUFnQixDQUFDdEosU0FBUyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7RUFFbkQsSUFBTXNKLElBQUksR0FBR2YsaUJBQWlCLENBQzdCUCwwQ0FBSSxFQUNKLFdBQVcsRUFDWCwyUkFBMlIsRUFDM1Isd0NBQXdDLEVBQ3hDLHdDQUNELENBQUM7RUFFRCxJQUFNdUIsVUFBVSxHQUFHaEIsaUJBQWlCLENBQ25DTixnREFBVSxFQUNWLFlBQVksRUFDWix3TEFBd0wsRUFDeEwseUNBQXlDLEVBQ3pDLHlDQUNELENBQUM7RUFFRCxJQUFNdUIsT0FBTyxHQUFHakIsaUJBQWlCLENBQ2hDTCw2Q0FBTyxFQUNQLGFBQWEsRUFDYixtUkFBbVIsRUFDblIsMkNBQTJDLEVBQzNDLDJDQUNELENBQUM7RUFFRCxJQUFNdUIsTUFBTSxHQUFHbEIsaUJBQWlCLENBQy9CSiw0Q0FBTSxFQUNOLGFBQWEsRUFDYiw0UkFBNFIsRUFDNVIsMENBQTBDLEVBQzFDLDBDQUNELENBQUM7RUFFRCxJQUFNdUIsVUFBVSxHQUFHbkIsaUJBQWlCLENBQ25DSCxnREFBVSxFQUNWLFlBQVksRUFDWiwwUUFBMFEsRUFDMVEseUNBQXlDLEVBQ3pDLHlDQUNELENBQUM7RUFFRCxJQUFNdUIsVUFBVSxHQUFHcEIsaUJBQWlCLENBQ25DRixnREFBVSxFQUNWLGlCQUFpQixFQUNqQiwrUUFBK1EsRUFDL1EsOENBQThDLEVBQzlDLDhDQUNELENBQUM7RUFFRCxJQUFNdUIsSUFBSSxHQUFHckIsaUJBQWlCLENBQzdCRCwwQ0FBSSxFQUNKLGVBQWUsRUFDZix3SkFBd0osRUFDeEosNENBQTRDLEVBQzVDLDZDQUNELENBQUM7RUFFRGUsZ0JBQWdCLENBQUMvSSxXQUFXLENBQUNnSixJQUFJLENBQUM7RUFDbENELGdCQUFnQixDQUFDL0ksV0FBVyxDQUFDaUosVUFBVSxDQUFDO0VBQ3hDRixnQkFBZ0IsQ0FBQy9JLFdBQVcsQ0FBQ2tKLE9BQU8sQ0FBQztFQUNyQ0gsZ0JBQWdCLENBQUMvSSxXQUFXLENBQUNtSixNQUFNLENBQUM7RUFDcENKLGdCQUFnQixDQUFDL0ksV0FBVyxDQUFDb0osVUFBVSxDQUFDO0VBQ3hDTCxnQkFBZ0IsQ0FBQy9JLFdBQVcsQ0FBQ3FKLFVBQVUsQ0FBQztFQUN4Q04sZ0JBQWdCLENBQUMvSSxXQUFXLENBQUNzSixJQUFJLENBQUM7RUFFbENSLFVBQVUsQ0FBQzlJLFdBQVcsQ0FBQytJLGdCQUFnQixDQUFDO0VBQ3hDLElBQU12RSxJQUFJLEdBQUdqRixRQUFRLENBQUNZLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztFQUN0RHFFLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEVBQUU7RUFDbkJELElBQUksQ0FBQ3hFLFdBQVcsQ0FBQzhJLFVBQVUsQ0FBQztBQUM3QjtBQUVBLGlFQUFlRCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSFk7QUFDQTtBQUNFO0FBQ0Y7QUFDRjtBQUNTO0FBQ007QUFFL0MsU0FBU2lCLFlBQVlBLENBQUEsRUFBRztFQUN2QixJQUFNQyxHQUFHLEdBQUd4SyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDekN1SyxHQUFHLENBQUN0SyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFFNUIsSUFBTXNLLFlBQVksR0FBR3pLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNsRHdLLFlBQVksQ0FBQ3ZLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUMzQyxJQUFNdUssT0FBTyxHQUFHMUssUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzdDeUssT0FBTyxDQUFDeEssU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQ2pDLElBQU13SyxJQUFJLEdBQUczSyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDMUMwSyxJQUFJLENBQUN0SyxHQUFHLEdBQUcySiwwQ0FBSTtFQUNmVyxJQUFJLENBQUNySyxHQUFHLEdBQUcsTUFBTTtFQUNqQixJQUFNc0ssUUFBUSxHQUFHNUssUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzVDMkssUUFBUSxDQUFDbkssV0FBVyxDQUFDa0ssSUFBSSxDQUFDO0VBQzFCRCxPQUFPLENBQUNqSyxXQUFXLENBQUNtSyxRQUFRLENBQUM7RUFDN0IsSUFBTUMsUUFBUSxHQUFHN0ssUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQzdDNEssUUFBUSxDQUFDckssV0FBVyxHQUFHLGNBQWM7RUFDckMsSUFBTXNLLFNBQVMsR0FBRzlLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM3QzZLLFNBQVMsQ0FBQ3JLLFdBQVcsQ0FBQ29LLFFBQVEsQ0FBQztFQUMvQkgsT0FBTyxDQUFDakssV0FBVyxDQUFDcUssU0FBUyxDQUFDO0VBRTlCTCxZQUFZLENBQUNoSyxXQUFXLENBQUNpSyxPQUFPLENBQUM7RUFFakMsSUFBTUssUUFBUSxHQUFHL0ssUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzlDOEssUUFBUSxDQUFDN0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0VBRW5DLElBQU02SyxPQUFPLEdBQUdoTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDN0MrSyxPQUFPLENBQUM5SyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFDaEMsSUFBTThLLFFBQVEsR0FBR2pMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM1Q2dMLFFBQVEsQ0FBQ3ZJLElBQUksR0FBRyxHQUFHO0VBQ25CdUksUUFBUSxDQUFDekssV0FBVyxHQUFHLE1BQU07RUFDN0J3SyxPQUFPLENBQUN2SyxXQUFXLENBQUN3SyxRQUFRLENBQUM7RUFFN0IsSUFBTUMsUUFBUSxHQUFHbEwsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzlDaUwsUUFBUSxDQUFDN0ssR0FBRyxHQUFHNEosMENBQUk7RUFDbkJpQixRQUFRLENBQUM1SyxHQUFHLEdBQUcsTUFBTTtFQUNyQjBLLE9BQU8sQ0FBQ3ZLLFdBQVcsQ0FBQ3lLLFFBQVEsQ0FBQztFQUU3QkgsUUFBUSxDQUFDdEssV0FBVyxDQUFDdUssT0FBTyxDQUFDO0VBRTdCLElBQU1HLFdBQVcsR0FBR25MLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNqRGtMLFdBQVcsQ0FBQ2pMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztFQUNwQyxJQUFNaUwsUUFBUSxHQUFHcEwsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzVDbUwsUUFBUSxDQUFDMUksSUFBSSxHQUFHLEdBQUc7RUFDbkIwSSxRQUFRLENBQUM1SyxXQUFXLEdBQUcsT0FBTztFQUM5QjJLLFdBQVcsQ0FBQzFLLFdBQVcsQ0FBQzJLLFFBQVEsQ0FBQztFQUVqQyxJQUFNQyxRQUFRLEdBQUdyTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDOUNvTCxRQUFRLENBQUNoTCxHQUFHLEdBQUc2SiwyQ0FBSztFQUNwQm1CLFFBQVEsQ0FBQy9LLEdBQUcsR0FBRyxPQUFPO0VBQ3RCNkssV0FBVyxDQUFDMUssV0FBVyxDQUFDNEssUUFBUSxDQUFDO0VBQ2pDTixRQUFRLENBQUN0SyxXQUFXLENBQUMwSyxXQUFXLENBQUM7RUFFakMsSUFBTUcsY0FBYyxHQUFHdEwsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3BEcUwsY0FBYyxDQUFDcEwsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBQ3ZDLElBQU1vTCxXQUFXLEdBQUd2TCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDL0NzTCxXQUFXLENBQUM3SSxJQUFJLEdBQUcsR0FBRztFQUN0QjZJLFdBQVcsQ0FBQy9LLFdBQVcsR0FBRyxVQUFVO0VBQ3BDOEssY0FBYyxDQUFDN0ssV0FBVyxDQUFDOEssV0FBVyxDQUFDO0VBRXZDLElBQU1DLFdBQVcsR0FBR3hMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNqRHVMLFdBQVcsQ0FBQ25MLEdBQUcsR0FBRzhKLDBDQUFJO0VBQ3RCcUIsV0FBVyxDQUFDbEwsR0FBRyxHQUFHLFVBQVU7RUFDNUJnTCxjQUFjLENBQUM3SyxXQUFXLENBQUMrSyxXQUFXLENBQUM7RUFDdkNULFFBQVEsQ0FBQ3RLLFdBQVcsQ0FBQzZLLGNBQWMsQ0FBQztFQUVwQyxJQUFNRyxZQUFZLEdBQUd6TCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbER3TCxZQUFZLENBQUN2TCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFFckMsSUFBTXVMLFNBQVMsR0FBRzFMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM3Q3lMLFNBQVMsQ0FBQ2hKLElBQUksR0FBRyxHQUFHO0VBQ3BCZ0osU0FBUyxDQUFDbEwsV0FBVyxHQUFHLFFBQVE7RUFDaENpTCxZQUFZLENBQUNoTCxXQUFXLENBQUNpTCxTQUFTLENBQUM7RUFFbkMsSUFBTUMsU0FBUyxHQUFHM0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQy9DMEwsU0FBUyxDQUFDdEwsR0FBRyxHQUFHK0oseUNBQUc7RUFDbkJ1QixTQUFTLENBQUNyTCxHQUFHLEdBQUcsUUFBUTtFQUN4Qm1MLFlBQVksQ0FBQ2hMLFdBQVcsQ0FBQ2tMLFNBQVMsQ0FBQztFQUNuQ1osUUFBUSxDQUFDdEssV0FBVyxDQUFDZ0wsWUFBWSxDQUFDOztFQUVsQztFQUNBLElBQU1HLFNBQVMsR0FBRzVMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQzJMLFNBQVMsQ0FBQzFMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUNwQyxJQUFNMEwsYUFBYSxHQUFHN0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ25ENEwsYUFBYSxDQUFDeEwsR0FBRyxHQUFHaUssK0NBQVk7RUFDaEN1QixhQUFhLENBQUN2TCxHQUFHLEdBQUcsV0FBVztFQUMvQnNMLFNBQVMsQ0FBQ25MLFdBQVcsQ0FBQ29MLGFBQWEsQ0FBQztFQUVwQyxJQUFNQyxhQUFhLEdBQUc5TCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbkQ2TCxhQUFhLENBQUM1TCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM3QyxJQUFNNEwsaUJBQWlCLEdBQUcvTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDckQ4TCxpQkFBaUIsQ0FBQ3JKLElBQUksR0FBRyxHQUFHO0VBQzVCcUosaUJBQWlCLENBQUN2TCxXQUFXLEdBQUcsTUFBTTtFQUN0Q3NMLGFBQWEsQ0FBQ3JMLFdBQVcsQ0FBQ3NMLGlCQUFpQixDQUFDO0VBQzVDLElBQU1DLGtCQUFrQixHQUFHaE0sUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ3REK0wsa0JBQWtCLENBQUN0SixJQUFJLEdBQUcsR0FBRztFQUM3QnNKLGtCQUFrQixDQUFDeEwsV0FBVyxHQUFHLE9BQU87RUFDeENzTCxhQUFhLENBQUNyTCxXQUFXLENBQUN1TCxrQkFBa0IsQ0FBQztFQUM3QyxJQUFNQyxxQkFBcUIsR0FBR2pNLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUN6RGdNLHFCQUFxQixDQUFDdkosSUFBSSxHQUFHLEdBQUc7RUFDaEN1SixxQkFBcUIsQ0FBQ3pMLFdBQVcsR0FBRyxVQUFVO0VBQzlDc0wsYUFBYSxDQUFDckwsV0FBVyxDQUFDd0wscUJBQXFCLENBQUM7RUFDaEQsSUFBTUMsbUJBQW1CLEdBQUdsTSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDdkRpTSxtQkFBbUIsQ0FBQ3hKLElBQUksR0FBRyxHQUFHO0VBQzlCd0osbUJBQW1CLENBQUMxTCxXQUFXLEdBQUcsUUFBUTtFQUMxQ3NMLGFBQWEsQ0FBQ3JMLFdBQVcsQ0FBQ3lMLG1CQUFtQixDQUFDO0VBRTlDTixTQUFTLENBQUNuTCxXQUFXLENBQUNxTCxhQUFhLENBQUM7RUFDcENmLFFBQVEsQ0FBQ3RLLFdBQVcsQ0FBQ21MLFNBQVMsQ0FBQztFQUUvQnBCLEdBQUcsQ0FBQy9KLFdBQVcsQ0FBQ2dLLFlBQVksQ0FBQztFQUM3QkQsR0FBRyxDQUFDL0osV0FBVyxDQUFDc0ssUUFBUSxDQUFDO0VBRXpCLElBQU1vQixPQUFPLEdBQUduTSxRQUFRLENBQUNZLGFBQWEsQ0FBQyxhQUFhLENBQUM7RUFDckR1TCxPQUFPLENBQUMxTCxXQUFXLENBQUMrSixHQUFHLENBQUM7QUFDekI7QUFFQSxTQUFTNEIsWUFBWUEsQ0FBQSxFQUFHO0VBQ3ZCLElBQU1DLE1BQU0sR0FBR3JNLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUMvQ29NLE1BQU0sQ0FBQ25NLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUU5QixJQUFNbU0sYUFBYSxHQUFHdE0sUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ2pEcU0sYUFBYSxDQUFDNUosSUFBSSxHQUFHLDhCQUE4QjtFQUVuRCxJQUFNNkosZ0JBQWdCLEdBQUd2TSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDdERzTSxnQkFBZ0IsQ0FBQ2xNLEdBQUcsR0FBR2dLLCtDQUFNO0VBQzdCa0MsZ0JBQWdCLENBQUNqTSxHQUFHLEdBQUcsYUFBYTtFQUVwQyxJQUFNa00saUJBQWlCLEdBQUd4TSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDckQsSUFBTXdNLFFBQVEsR0FBR3pNLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUMvQ3dNLFFBQVEsQ0FBQ3ZNLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUNuQ3NNLFFBQVEsQ0FBQ2pNLFdBQVcsR0FBRyxHQUFHO0VBQzFCLElBQU1rTSxRQUFRLEdBQUcxTSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDL0N5TSxRQUFRLENBQUNsTSxXQUFXLEdBQUcsV0FBVztFQUNsQ2dNLGlCQUFpQixDQUFDL0wsV0FBVyxDQUFDZ00sUUFBUSxDQUFDO0VBQ3ZDRCxpQkFBaUIsQ0FBQy9MLFdBQVcsQ0FBQ2lNLFFBQVEsQ0FBQztFQUV2Q0osYUFBYSxDQUFDN0wsV0FBVyxDQUFDOEwsZ0JBQWdCLENBQUM7RUFDM0NELGFBQWEsQ0FBQzdMLFdBQVcsQ0FBQytMLGlCQUFpQixDQUFDO0VBRTVDLElBQU1HLFNBQVMsR0FBRzNNLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM3QzBNLFNBQVMsQ0FBQ25NLFdBQVcsR0FBRyxHQUFHO0VBRTNCLElBQU1vTSxVQUFVLEdBQUc1TSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDOUMyTSxVQUFVLENBQUNsSyxJQUFJLEdBQUcsZ0RBQWdEO0VBQ2xFa0ssVUFBVSxDQUFDcE0sV0FBVyxHQUFHLGFBQWE7RUFFdEM2TCxNQUFNLENBQUM1TCxXQUFXLENBQUM2TCxhQUFhLENBQUM7RUFDakNELE1BQU0sQ0FBQzVMLFdBQVcsQ0FBQ2tNLFNBQVMsQ0FBQztFQUM3Qk4sTUFBTSxDQUFDNUwsV0FBVyxDQUFDbU0sVUFBVSxDQUFDO0VBRTlCNU0sUUFBUSxDQUFDWSxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUNILFdBQVcsQ0FBQzRMLE1BQU0sQ0FBQztBQUMxRDtBQUVBLFNBQVNRLFNBQVNBLENBQUEsRUFBRztFQUNwQnRDLFlBQVksQ0FBQyxDQUFDO0VBQ2QsSUFBTWxFLGFBQWEsR0FBR3JHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNuRG9HLGFBQWEsQ0FBQ25HLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0VBQzdDSCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQ0gsV0FBVyxDQUFDNEYsYUFBYSxDQUFDO0VBQ2hFK0YsWUFBWSxDQUFDLENBQUM7RUFDZFUsTUFBTSxDQUFDcEwsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07SUFDdkMsSUFBTXFMLE1BQU0sR0FBRy9NLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLFVBQVUsQ0FBQztJQUNqRCxJQUFJa00sTUFBTSxDQUFDRSxPQUFPLEdBQUcsQ0FBQyxFQUFFO01BQ3ZCRCxNQUFNLENBQUM3TSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztJQUN6QyxDQUFDLE1BQU07TUFDTjRNLE1BQU0sQ0FBQzdNLFNBQVMsQ0FBQytNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztJQUM1QztFQUNELENBQUMsQ0FBQzs7RUFFRjtFQUNBLElBQU1yQixTQUFTLEdBQUc1TCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDdEQsSUFBTWtMLGFBQWEsR0FBRzlMLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBQy9EZ0wsU0FBUyxDQUFDbEssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDekMsSUFBSW9LLGFBQWEsQ0FBQzVMLFNBQVMsQ0FBQ2dOLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtNQUMvQ3BCLGFBQWEsQ0FBQzVMLFNBQVMsQ0FBQytNLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDeENuQixhQUFhLENBQUM1TCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDeEMsQ0FBQyxNQUFNLElBQUkyTCxhQUFhLENBQUM1TCxTQUFTLENBQUNnTixRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7TUFDeERwQixhQUFhLENBQUM1TCxTQUFTLENBQUMrTSxNQUFNLENBQUMsVUFBVSxDQUFDO01BQzFDbkIsYUFBYSxDQUFDNUwsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3RDLENBQUMsTUFBTTtNQUNOMkwsYUFBYSxDQUFDNUwsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3RDO0VBQ0QsQ0FBQyxDQUFDO0FBQ0g7QUFFQSxpRUFBZTBNLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNeEI7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckIsa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQyxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5QixxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsY0FBYztBQUNkLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0dBQWdHLE1BQU0sUUFBUSxRQUFRLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsdUJBQXVCLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxNQUFNLE9BQU8sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsc0JBQXNCLHFCQUFxQix1QkFBdUIscUJBQXFCLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxR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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGVBQWU7QUFDZjs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0ZBQW9GLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsd0JBQXdCLHlCQUF5QixPQUFPLE9BQU8sT0FBTyxLQUFLLHdCQUF3QixVQUFVLGlCQUFpQixPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLHdCQUF3QixPQUFPLFlBQVksTUFBTSx3QkFBd0IseUJBQXlCLE9BQU8sWUFBWSxNQUFNLHNCQUFzQixPQUFPLFlBQVksTUFBTSx3QkFBd0IsT0FBTyxVQUFVLEtBQUssWUFBWSx5QkFBeUIsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssd0JBQXdCLHlCQUF5QixPQUFPLEtBQUssd0JBQXdCLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxLQUFLLHdCQUF3QixPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxL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RUYyTCxZQUFZLENBQUM1TCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUM1QzRILG9EQUFPLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQztBQUVGb0Usa0JBQWtCLENBQUNoTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUNsRDRILG9EQUFPLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQztBQUVGaUUsVUFBVSxDQUFDN0wsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDMUNvTCxNQUFNLENBQUNjLElBQUksQ0FDVixvRkFDRCxDQUFDO0FBQ0YsQ0FBQyxDQUFDO0FBRUZELGdCQUFnQixDQUFDak0sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDaERvTCxNQUFNLENBQUNjLElBQUksQ0FDVixvRkFDRCxDQUFDO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL3NldHVwLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2Nzcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2Nzcy9ub3JtYWxpemUuY3NzPzZkNTQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvdHlwZWQuanMvZGlzdC90eXBlZC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2hhaGlyIGZyb20gXCIuL2ltZy9zaGFoaXIuUE5HXCI7XG5pbXBvcnQgR2l0U29jaWFsIGZyb20gXCIuL2ltZy9naXRTb2NpYWwuc3ZnXCI7XG5pbXBvcnQgTGlua2VkIGZyb20gXCIuL2ltZy9saW5rZWQuc3ZnXCI7XG5pbXBvcnQgRG9ja2VyIGZyb20gXCIuL2ltZy9kb2NrZXIuc3ZnXCI7XG5pbXBvcnQgU3FsIGZyb20gXCIuL2ltZy9zcWwuc3ZnXCI7XG5pbXBvcnQgRWNsaXBzZSBmcm9tIFwiLi9pbWcvZWNsaXBzZS5zdmdcIjtcbmltcG9ydCBMdWEgZnJvbSBcIi4vaW1nL2x1YS5zdmdcIjtcbmltcG9ydCBWdWUgZnJvbSBcIi4vaW1nL3Z1ZS5zdmdcIjtcbmltcG9ydCBDeXByZXNzIGZyb20gXCIuL2ltZy9jeXByZXNzLnN2Z1wiO1xuaW1wb3J0IFZzY29kZSBmcm9tIFwiLi9pbWcvdnNjb2RlLnN2Z1wiO1xuaW1wb3J0IEMgZnJvbSBcIi4vaW1nL2Muc3ZnXCI7XG5pbXBvcnQgTnBtIGZyb20gXCIuL2ltZy9ucG0uc3ZnXCI7XG5pbXBvcnQgQmFiZWwgZnJvbSBcIi4vaW1nL2JhYmVsLnN2Z1wiO1xuaW1wb3J0IFByZXR0aWVyIGZyb20gXCIuL2ltZy9wcmV0dGllci5zdmdcIjtcbmltcG9ydCBFc2xpbnQgZnJvbSBcIi4vaW1nL2VzbGludC5zdmdcIjtcbmltcG9ydCBXZWJwYWNrIGZyb20gXCIuL2ltZy93ZWJwYWNrLnN2Z1wiO1xuaW1wb3J0IEplc3QgZnJvbSBcIi4vaW1nL2plc3Quc3ZnXCI7XG5pbXBvcnQgR2l0IGZyb20gXCIuL2ltZy9naXQuc3ZnXCI7XG5pbXBvcnQgUHl0aG9uIGZyb20gXCIuL2ltZy9weXRob24uc3ZnXCI7XG5pbXBvcnQgSmF2YSBmcm9tIFwiLi9pbWcvamF2YS5zdmdcIjtcbmltcG9ydCBMaW51eCBmcm9tIFwiLi9pbWcvbGludXguc3ZnXCI7XG5pbXBvcnQgSHRtbCBmcm9tIFwiLi9pbWcvaHRtbC5zdmdcIjtcbmltcG9ydCBDc3MgZnJvbSBcIi4vaW1nL2Nzcy5zdmdcIjtcbmltcG9ydCBKcyBmcm9tIFwiLi9pbWcvanMuc3ZnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcm91c2VsSXRlbShpbWFnZSwgdGl0bGUpIHtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y2Fyb3VzZWxJdGVtLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1pdGVtXCIpO1xuXG5cdGNvbnN0IGNhcm91c2VsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRjYXJvdXNlbEltYWdlLnNyYyA9IGltYWdlO1xuXHRjYXJvdXNlbEltYWdlLmFsdCA9IHRpdGxlO1xuXHRjYXJvdXNlbEltYWdlLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1pbWFnZVwiKTtcblxuXHRjb25zdCBjYXJvdXNlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNhcm91c2VsVGl0bGUuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLXRpdGxlXCIpO1xuXHRjYXJvdXNlbFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cblx0Y2Fyb3VzZWxJdGVtLmFwcGVuZENoaWxkKGNhcm91c2VsSW1hZ2UpO1xuXHRjYXJvdXNlbEl0ZW0uYXBwZW5kQ2hpbGQoY2Fyb3VzZWxUaXRsZSk7XG5cblx0cmV0dXJuIGNhcm91c2VsSXRlbTtcbn1cblxuLy8gYWRkIGJ1dHRvbnMgdG8gdGhlIGNhcm91c2VsIGFuZCBjb250cm9sIHRoZSBzY3JvbGxpbmdcbmZ1bmN0aW9uIGJ1dHRvbnMoKSB7XG5cdGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJvdXNlbFwiKTtcblx0Y29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFjay1idG5cIik7XG5cdGNvbnN0IGZvcndhcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcndhcmQtYnRuXCIpO1xuXHRsZXQgaXNTY3JvbGxpbmcgPSBmYWxzZTsgLy8gVGhpcyB2YXJpYWJsZSB3aWxsIGJlIHVzZWQgdG8gaW5kaWNhdGUgc2Nyb2xsaW5nIHN0YXR1c1xuXHRsZXQgc2Nyb2xsRGlyZWN0aW9uID0gMDsgLy8gMCBmb3IgbGVmdCwgMSBmb3IgcmlnaHRcblx0Y29uc3Qgc2Nyb2xsU3RlcCA9IDg7IC8vIFRoaXMgdmFsdWUgY29udHJvbHMgdGhlIHNtb290aG5lc3Mgb2YgdGhlIHNjcm9sbFxuXG5cdC8vIHNtb290aCBzY3JvbGwgYW5pbWF0aW9uXG5cdGNvbnN0IGFuaW1hdGVTY3JvbGwgPSAoKSA9PiB7XG5cdFx0Ly8gaWYgc2Nyb2xsaW5nIGlzIHN0aWxsIGluIHByb2dyZXNzLCB0aGVuIGNvbnRpbnVlIHNjcm9sbGluZ1xuXHRcdGlmICghaXNTY3JvbGxpbmcpIHJldHVybjtcblxuXHRcdC8vIHNjcm9sbCBieSB0aGUgc2Nyb2xsU3RlcFxuXHRcdGNvbnN0IHNjcm9sbERpc3RhbmNlID0gc2Nyb2xsRGlyZWN0aW9uID09PSAwID8gLXNjcm9sbFN0ZXAgOiBzY3JvbGxTdGVwO1xuXHRcdGNhcm91c2VsLnNjcm9sbExlZnQgKz0gc2Nyb2xsRGlzdGFuY2U7XG5cblx0XHQvLyBpZiB0aGUgc2Nyb2xsIGlzIG5vdCBhdCB0aGUgZW5kLCB0aGVuIGNvbnRpbnVlIHNjcm9sbGluZ1xuXHRcdGlmIChcblx0XHRcdChzY3JvbGxEaXJlY3Rpb24gPT09IDAgJiYgY2Fyb3VzZWwuc2Nyb2xsTGVmdCA+IDApIHx8XG5cdFx0XHQoc2Nyb2xsRGlyZWN0aW9uID09PSAxICYmXG5cdFx0XHRcdGNhcm91c2VsLnNjcm9sbExlZnQgKyBjYXJvdXNlbC5vZmZzZXRXaWR0aCA8IGNhcm91c2VsLnNjcm9sbFdpZHRoKVxuXHRcdCkge1xuXHRcdFx0Ly8gYW5pbWF0ZSB0aGUgc2Nyb2xsIGF0IDYwIGZyYW1lcyBwZXIgc2Vjb25kXG5cdFx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZVNjcm9sbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIG90aGVyd2lzZSwgc3RvcCBzY3JvbGxpbmdcblx0XHRcdGlzU2Nyb2xsaW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIHNjcm9sbCBsZWZ0IHdoZW4gdGhlIGJhY2sgYnV0dG9uIGlzIGNsaWNrZWRcblx0Y29uc3Qgc2Nyb2xsTGVmdCA9ICgpID0+IHtcblx0XHQvLyBpZiB0aGUgc2Nyb2xsIGlzIG5vdCBpbiBwcm9ncmVzcywgdGhlbiBzdGFydCBzY3JvbGxpbmdcblx0XHRpZiAoIWlzU2Nyb2xsaW5nKSB7XG5cdFx0XHRzY3JvbGxEaXJlY3Rpb24gPSAwOyAvLyAwIGZvciBsZWZ0XG5cdFx0XHRpc1Njcm9sbGluZyA9IHRydWU7IC8vIHRoZSBzY3JvbGwgaXMgaW4gcHJvZ3Jlc3Ncblx0XHRcdGFuaW1hdGVTY3JvbGwoKTsgLy8gc3RhcnQgc2Nyb2xsaW5nXG5cdFx0fVxuXHR9O1xuXG5cdC8vIHNjcm9sbCByaWdodCB3aGVuIHRoZSBuZXh0IGJ1dHRvbiBpcyBjbGlja2VkXG5cdGNvbnN0IHNjcm9sbFJpZ2h0ID0gKCkgPT4ge1xuXHRcdC8vIGlmIHRoZSBzY3JvbGwgaXMgbm90IGluIHByb2dyZXNzLCB0aGVuIHN0YXJ0IHNjcm9sbGluZ1xuXHRcdGlmICghaXNTY3JvbGxpbmcpIHtcblx0XHRcdHNjcm9sbERpcmVjdGlvbiA9IDE7IC8vIDEgZm9yIHJpZ2h0XG5cdFx0XHRpc1Njcm9sbGluZyA9IHRydWU7IC8vIHRoZSBzY3JvbGwgaXMgaW4gcHJvZ3Jlc3Ncblx0XHRcdGFuaW1hdGVTY3JvbGwoKTsgLy8gc3RhcnQgc2Nyb2xsaW5nXG5cdFx0fVxuXHR9O1xuXG5cdC8vIHN0b3Agc2Nyb2xsaW5nIHdoZW4gdGhlIG1vdXNlIGxlYXZlcyB0aGUgYnV0dG9uXG5cdGNvbnN0IHN0b3BTY3JvbGwgPSAoKSA9PiB7XG5cdFx0aXNTY3JvbGxpbmcgPSBmYWxzZTsgLy8gdGhlIHNjcm9sbCBpcyBub3QgaW4gcHJvZ3Jlc3Ncblx0fTtcblxuXHQvLyBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBidXR0b25zXG5cdGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2Nyb2xsTGVmdCk7IC8vIFNjcm9sbCBsZWZ0IG9uIG1vdXNlIGVudGVyXG5cdGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFNjcm9sbCk7IC8vIFN0b3Agc2Nyb2xsaW5nIG9uIG1vdXNlIGxlYXZlXG5cdGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNjcm9sbExlZnQpOyAvLyBTY3JvbGwgbGVmdCBvbiBjbGlja1xuXHRmb3J3YXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNjcm9sbFJpZ2h0KTsgLy8gU2Nyb2xsIHJpZ2h0IG9uIG1vdXNlIGVudGVyXG5cdGZvcndhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFNjcm9sbCk7IC8vIFN0b3Agc2Nyb2xsaW5nIG9uIG1vdXNlIGxlYXZlXG5cdGZvcndhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNjcm9sbFJpZ2h0KTsgLy8gU2Nyb2xsIHJpZ2h0IG9uIGNsaWNrXG59XG5cbmZ1bmN0aW9uIGFib3V0KCkge1xuXHRjb25zdCBhYm91dFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRhYm91dFBhZ2UuY2xhc3NMaXN0LmFkZChcImFib3V0LXBhZ2VcIik7XG5cblx0Y29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IGFib3V0VGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGFib3V0VGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdGV4dC1jb250YWluZXJcIik7XG5cdGNvbnN0IGFib3V0TWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdGFib3V0TWUudGV4dENvbnRlbnQgPSBcIkFib3V0IFwiO1xuXHRjb25zdCBhYm91dE1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRhYm91dE1lU3Bhbi50ZXh0Q29udGVudCA9IFwiTWVcIjtcblx0YWJvdXRNZS5hcHBlbmRDaGlsZChhYm91dE1lU3Bhbik7XG5cdGFib3V0TWUuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lXCIpO1xuXHRhYm91dFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZSk7XG5cdGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0VGV4dENvbnRhaW5lcik7XG5cblx0Y29uc3QgYWJvdXRNZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGFib3V0TWVEaXYuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLWRpdlwiKTtcblxuXHRjb25zdCBhYm91dE1lVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGFib3V0TWVUZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZS10ZXh0LWRpdlwiKTtcblxuXHRjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcInBhcmFncmFwaFwiKTtcblxuXHRjb25zdCBhYm91dE1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRhYm91dE1lVGV4dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbWUtdGV4dFwiKTtcblx0YWJvdXRNZVRleHQudGV4dENvbnRlbnQgPVxuXHRcdFwiSGVsbG8sIEknbSBTaGFoaXIsIGEgZGVkaWNhdGVkIENvbXB1dGVyIFNjaWVuY2UgYW5kIE1hdGhlbWF0aWNzIHN0dWRlbnQgYXQgRGlja2luc29uIENvbGxlZ2Ugd2l0aCBhIGRlZXAgcGFzc2lvbiBmb3Igd2ViIGRldmVsb3BtZW50LiBNeSBhY2FkZW1pYyBhbmQgc2VsZi10YXVnaHQgam91cm5leSBpbiBwcm9ncmFtbWluZyBoYXMgZXF1aXBwZWQgbWUgd2l0aCB0aGUgc2tpbGxzIHRvIGNyYWZ0IGVmZmljaWVudCwgc2NhbGFibGUgc29mdHdhcmUgc29sdXRpb25zLiBJIHRocml2ZSBvbiB0aGUgY2hhbGxlbmdlcyB0aGF0IGNvbWUgd2l0aCBkZXZlbG9waW5nIGNsZWFuLCBpbnR1aXRpdmUgdXNlciBpbnRlcmZhY2VzIGFuZCByb2J1c3QgYmFja2VuZCBmdW5jdGlvbmFsaXRpZXMuIE15IGdvYWwgaXMgdG8gY29udGludW91c2x5IGV4cGFuZCBteSBmdWxsLXN0YWNrIGRldmVsb3BtZW50IGV4cGVydGlzZSBhbmQgY29udHJpYnV0ZSB0byBtZWFuaW5nZnVsIHByb2plY3RzIGluIGEgZHluYW1pYyB0ZWFtIGVudmlyb25tZW50LlwiO1xuXG5cdGNvbnN0IGFib3V0TWVUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRhYm91dE1lVGV4dDIuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLXRleHRcIik7XG5cdGFib3V0TWVUZXh0Mi50ZXh0Q29udGVudCA9IGBXaGVuIEkgc3RlcCBhd2F5IGZyb20gdGhlIGtleWJvYXJkLCB5b3UnbGwgZmluZCBtZSBpbmR1bGdpbmcgaW4gYSB2YXJpZXR5IG9mIGludGVyZXN0cyB0aGF0IGtlZXAgbWUgYmFsYW5jZWQgYW5kIGluc3BpcmVkLiBJJ20gYW4gYXZpZCBzb2NjZXIgZmFuLCB3aXRoIFJlYWwgTWFkcmlkJ3MgZ2FtZXMgcHVuY3R1YXRpbmcgdGhlIGNhbGVuZGFyIG9mIG15IHBlcnNvbmFsIGxpZmUuIEluIHRoZSB3b3JsZCBvZiBtaXhlZCBtYXJ0aWFsIGFydHMsIEkgYWRtaXJlIHRoZSBzdHJhdGVnaWMgcHJvd2VzcyBvZiBmaWdodGVycyBsaWtlIHRoZSByZXRpcmVkIEtoYWJpYiBOdXJtYWdvbWVkb3YuIE15IHRhc3RlIGluIGVudGVydGFpbm1lbnQgcmFuZ2VzIGZyb20gdGhlIGNhcHRpdmF0aW5nIG5hcnJhdGl2ZXMgb2YgXCJUaGUgU2hhd3NoYW5rIFJlZGVtcHRpb25cIiB0byB0aGUgY29tcGxleCBsZWdhbCBkcmFtYXMgb2YgXCJCZXR0ZXIgQ2FsbCBTYXVsLlwiIEdhbWluZyBpcyBhbm90aGVyIHBhc3Npb24g4oCUIGltbWVyc2luZyBteXNlbGYgaW4gcmljaCwgc3RvcnktZHJpdmVuIHdvcmxkcyBsaWtlIHRob3NlIG9mIFJlZCBEZWFkIFJlZGVtcHRpb24gMiwgTEEgTm9pcmUsIGFuZCBTbGVlcGluZyBEb2dzIHByb3ZpZGVzIG5vdCBqdXN0IHJlY3JlYXRpb24sIGJ1dCBjcmVhdGl2ZSBpbnNwaXJhdGlvbi5gO1xuXG5cdGNvbnN0IGFib3V0TWVUZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRhYm91dE1lVGV4dDMuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLXRleHRcIik7XG5cdGFib3V0TWVUZXh0My50ZXh0Q29udGVudCA9XG5cdFx0XCJJbiBhZGRpdGlvbiB0byBteSBzdHVkaWVzIGFuZCBob2JiaWVzLCBJIHNlcnZlIGFzIGEgUmVzaWRlbnQgQWR2aXNvciwgYSByb2xlIHRoYXQgaGFzIHJlZmluZWQgbXkgaW50ZXJwZXJzb25hbCBza2lsbHMgYW5kIGFiaWxpdHkgdG8gZm9zdGVyIGNvbW11bml0eSBhbW9uZyBkaXZlcnNlIGdyb3Vwcy4gSXQncyBhIHJvbGUgdGhhdCBjb21wbGVtZW50cyBteSB0ZWNobmljYWwgYXNwaXJhdGlvbnMgYnkgZW1waGFzaXppbmcgZW1wYXRoeSwgbGVhZGVyc2hpcCwgYW5kIGNvbGxhYm9yYXRpb24uXCI7XG5cblx0Y29uc3QgYWJvdXRNZVRleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGFib3V0TWVUZXh0NC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbWUtdGV4dFwiKTtcblx0YWJvdXRNZVRleHQ0LnRleHRDb250ZW50ID1cblx0XHRcIkknbSBleGNpdGVkIHRvIGVtYmFyayBvbiB0aGUgbmV4dCBzdGFnZSBvZiBteSBjYXJlZXIgam91cm5leSBhbmQgYW0gYWN0aXZlbHkgc2Vla2luZyBpbnRlcm5zaGlwIG9wcG9ydHVuaXRpZXMgdGhhdCB3aWxsIGxldmVyYWdlIG15IHRlY2huaWNhbCBza2lsbHMgYW5kIHdvcmsgZXRoaWMuIElmIHlvdSdyZSBsb29raW5nIGZvciBzb21lb25lIHdobyBicmluZ3MgYSBjb21iaW5hdGlvbiBvZiBjb2RpbmcgcHJvZmljaWVuY3kgYW5kIGEgd2VsbC1yb3VuZGVkIHBlcnNwZWN0aXZlIHRvIHlvdXIgdGVhbSwgbGV0J3MgY29ubmVjdC5cIjtcblxuXHRwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoYWJvdXRNZVRleHQpO1xuXHRwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoYWJvdXRNZVRleHQyKTtcblx0cGFyYWdyYXBoLmFwcGVuZENoaWxkKGFib3V0TWVUZXh0Myk7XG5cdHBhcmFncmFwaC5hcHBlbmRDaGlsZChhYm91dE1lVGV4dDQpO1xuXHRhYm91dE1lVGV4dERpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG5cdGNvbnN0IHNvY2lhbEljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c29jaWFsSWNvbnMuY2xhc3NMaXN0LmFkZChcInNvY2lhbC1pY29uc1wiKTtcblxuXHRjb25zdCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGdpdExpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00N1wiO1xuXHRnaXRMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cdGdpdExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5cdGNvbnN0IGdpdFNvY2lhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGdpdFNvY2lhbC5zcmMgPSBHaXRTb2NpYWw7XG5cdGdpdFNvY2lhbC5hbHQgPSBcIkdpdEh1YlwiO1xuXHRnaXRTb2NpYWwuY2xhc3NMaXN0LmFkZChcInNvY2lhbC1pY29uXCIpO1xuXHRnaXRMaW5rLmFwcGVuZENoaWxkKGdpdFNvY2lhbCk7XG5cdHNvY2lhbEljb25zLmFwcGVuZENoaWxkKGdpdExpbmspO1xuXG5cdGNvbnN0IGxpbmtlZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bGlua2VkTGluay5ocmVmID0gXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2hhaGlyNDcvXCI7XG5cdGxpbmtlZExpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblx0bGlua2VkTGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcblx0Y29uc3QgbGlua2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0bGlua2VkLnNyYyA9IExpbmtlZDtcblx0bGlua2VkLmFsdCA9IFwiTGlua2VkSW5cIjtcblx0bGlua2VkLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvblwiKTtcblx0bGlua2VkTGluay5hcHBlbmRDaGlsZChsaW5rZWQpO1xuXHRzb2NpYWxJY29ucy5hcHBlbmRDaGlsZChsaW5rZWRMaW5rKTtcblxuXHRhYm91dE1lVGV4dERpdi5hcHBlbmRDaGlsZChzb2NpYWxJY29ucyk7XG5cdGFib3V0TWVEaXYuYXBwZW5kQ2hpbGQoYWJvdXRNZVRleHREaXYpO1xuXG5cdGNvbnN0IHBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRwaWN0dXJlLnNyYyA9IFNoYWhpcjtcblx0cGljdHVyZS5hbHQgPSBcIlNoYWhpclwiO1xuXHRwaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZS1waWN0dXJlXCIpO1xuXHRhYm91dE1lRGl2LmFwcGVuZENoaWxkKHBpY3R1cmUpO1xuXG5cdGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVEaXYpO1xuXHRhYm91dFBhZ2UuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xuXG5cdGNvbnN0IHNlY29uZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNlY29uZERpdi5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLWRpdlwiKTtcblxuXHRjb25zdCBzZWNvbmREaXZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2Vjb25kRGl2VGV4dC5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLWRpdi10ZXh0XCIpO1xuXG5cdGNvbnN0IGhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRoaWdobGlnaHQuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcblx0aGlnaGxpZ2h0LnRleHRDb250ZW50ID0gXCJUb29sc1wiO1xuXG5cdGNvbnN0IGFuZCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIGFuZFwiKTtcblxuXHRjb25zdCBoaWdobGlnaHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGhpZ2hsaWdodFRleHQudGV4dENvbnRlbnQgPSBcIiBUZWNobm9sb2dpZXNcIjtcblx0aGlnaGxpZ2h0VGV4dC5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuXG5cdGNvbnN0IHNlbnRlbmNlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgSSd2ZSB3b3JrZWQgd2l0aFwiKTtcblxuXHRjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHRleHQuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG5cdHRleHQuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0KTtcblx0dGV4dC5hcHBlbmRDaGlsZChhbmQpO1xuXHR0ZXh0LmFwcGVuZENoaWxkKGhpZ2hsaWdodFRleHQpO1xuXHR0ZXh0LmFwcGVuZENoaWxkKHNlbnRlbmNlKTtcblx0c2Vjb25kRGl2VGV4dC5hcHBlbmRDaGlsZCh0ZXh0KTtcblx0c2Vjb25kRGl2LmFwcGVuZENoaWxkKHNlY29uZERpdlRleHQpO1xuXG5cdGNvbnN0IGNhcm91c2VsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y2Fyb3VzZWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBjYXJvdXNlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNhcm91c2VsRGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1kaXZcIik7XG5cblx0Y29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGJhY2tCdG4uY2xhc3NMaXN0LmFkZChcImJhY2stYnRuXCIpO1xuXHRiYWNrQnRuLnRleHRDb250ZW50ID0gXCI8XCI7XG5cdGNhcm91c2VsRGl2LmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuXG5cdGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y2Fyb3VzZWwuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsXCIpO1xuXG5cdGNvbnN0IGNhcm91c2VsSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjYXJvdXNlbEl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1pdGVtc1wiKTtcblxuXHRjb25zdCBjYXJvdXNlbEl0ZW0xID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEh0bWwsIFwiSFRNTFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMiA9IGNyZWF0ZUNhcm91c2VsSXRlbShDc3MsIFwiQ1NTXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0zID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEpzLCBcIkphdmFTY3JpcHRcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTQgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oR2l0LCBcIkdpdFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtNSA9IGNyZWF0ZUNhcm91c2VsSXRlbShOcG0sIFwiTlBNXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW02ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKFZzY29kZSwgXCJWUyBDb2RlXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW03ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKERvY2tlciwgXCJEb2NrZXJcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTggPSBjcmVhdGVDYXJvdXNlbEl0ZW0oTGludXgsIFwiTGludXhcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTkgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oUHl0aG9uLCBcIlB5dGhvblwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTAgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oSmF2YSwgXCJKYXZhXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xMSA9IGNyZWF0ZUNhcm91c2VsSXRlbShTcWwsIFwiU1FMXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xMiA9IGNyZWF0ZUNhcm91c2VsSXRlbShXZWJwYWNrLCBcIldlYnBhY2tcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTEzID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKFZ1ZSwgXCJWdWUuanNcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTE0ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEJhYmVsLCBcIkJhYmVsXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xNSA9IGNyZWF0ZUNhcm91c2VsSXRlbShKZXN0LCBcIkplc3RcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTE2ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKFByZXR0aWVyLCBcIlByZXR0aWVyXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xNyA9IGNyZWF0ZUNhcm91c2VsSXRlbShFc2xpbnQsIFwiRXNsaW50XCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xOCA9IGNyZWF0ZUNhcm91c2VsSXRlbShDeXByZXNzLCBcIkN5cHJlc3NcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTE5ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEMsIFwiQysrXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0yMCA9IGNyZWF0ZUNhcm91c2VsSXRlbShMdWEsIFwiTHVhXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0yMSA9IGNyZWF0ZUNhcm91c2VsSXRlbShFY2xpcHNlLCBcIkVjbGlwc2VcIik7XG5cblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0yKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0zKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW00KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW01KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW02KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW03KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW04KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW05KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xMCk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTEpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTEyKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xMyk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTQpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTE1KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xNik7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTcpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTE4KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xOSk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMjApO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTIxKTtcblxuXHRjYXJvdXNlbC5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW1zKTtcblx0Y2Fyb3VzZWxEaXYuYXBwZW5kQ2hpbGQoYmFja0J0bik7XG5cdGNhcm91c2VsRGl2LmFwcGVuZENoaWxkKGNhcm91c2VsKTtcblxuXHRjb25zdCBmb3J3YXJkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Zm9yd2FyZEJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9yd2FyZC1idG5cIik7XG5cdGZvcndhcmRCdG4udGV4dENvbnRlbnQgPSBcIj5cIjtcblx0Y2Fyb3VzZWxEaXYuYXBwZW5kQ2hpbGQoZm9yd2FyZEJ0bik7XG5cblx0Y2Fyb3VzZWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxEaXYpO1xuXHRzZWNvbmREaXYuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxDb250YWluZXIpO1xuXHRhYm91dFBhZ2UuYXBwZW5kQ2hpbGQoc2Vjb25kRGl2KTtcblxuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcblx0bWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuXHRtYWluLmFwcGVuZENoaWxkKGFib3V0UGFnZSk7XG5cblx0YnV0dG9ucygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYm91dDtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBUeXBlZCBmcm9tIFwidHlwZWQuanNcIjtcbmltcG9ydCBDb21wdXRlciBmcm9tIFwiLi9pbWcvY29tcHV0ZXIucG5nXCI7XG5pbXBvcnQgSGFuZCBmcm9tIFwiLi9pbWcvaGFuZC5zdmdcIjtcbmltcG9ydCBIYWNrZXIgZnJvbSBcIi4vaW1nL2hhY2tlci5zdmdcIjtcbmltcG9ydCBHaXRTb2NpYWwgZnJvbSBcIi4vaW1nL2dpdFNvY2lhbC5zdmdcIjtcbmltcG9ydCBMaW5rZWQgZnJvbSBcIi4vaW1nL2xpbmtlZC5zdmdcIjtcblxuZnVuY3Rpb24gZHluYW1pY1RleHQoKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRjb25zdCB0eXBlZCA9IG5ldyBUeXBlZChcIiN0eXBlZC10ZXh0XCIsIHtcblx0XHQvLyBTdHJpbmdzIHRvIGRpc3BsYXlcblx0XHRzdHJpbmdzOiBbXG5cdFx0XHRcIkZ1bGwgU3RhY2sgRGV2ZWxvcGVyXCIsXG5cdFx0XHRcIkNyZWF0aXZlIENvZGVyXCIsXG5cdFx0XHRcIkNvbXB1dGVyIFNjaWVuY2UgU3R1ZGVudFwiLFxuXHRcdFx0XCJNYXRoZW1hdGljcyBTdHVkZW50XCIsXG5cdFx0XHRcIkFzcGlyaW5nIFNvZnR3YXJlIERldmVsb3BlclwiLFxuXHRcdFx0XCJFbWVyZ2luZyBGdWxsIFN0YWNrIERldmVsb3BlclwiLFxuXHRcdFx0XCJQcm9ncmFtbWluZyBFbnRodXNpYXN0XCIsXG5cdFx0XHRcIkZ1dHVyZSBUZWNoIFByb2Zlc3Npb25hbFwiLFxuXHRcdFx0XCJTdHVkZW50IG9mIFNvZnR3YXJlIEVuZ2luZWVyaW5nXCIsXG5cdFx0XHRcIkNvZGluZyBIb2JieWlzdFwiLFxuXHRcdFx0XCJTb2Z0d2FyZSBFbmdpbmVlciBpbiBUcmFpbmluZ1wiLFxuXHRcdFx0XCJTb2Z0d2FyZSBFbmdpbmVlciBpbiB0aGUgTWFraW5nXCIsXG5cdFx0XHRcIlNvZnR3YXJlIEVuZ2luZWVyIGluIHRoZSBXb3Jrc1wiLFxuXHRcdF0sXG5cblx0XHQvLyBTcGVlZCBzZXR0aW5nc1xuXHRcdHR5cGVTcGVlZDogNTAsXG5cdFx0YmFja1NwZWVkOiAyNSxcblx0XHQvLyBUaW1lIGJlZm9yZSB0eXBpbmcgc3RhcnRzXG5cdFx0c3RhcnREZWxheTogMTAwMCxcblx0XHQvLyBUaW1lIGJlZm9yZSBlcmFzaW5nXG5cdFx0YmFja0RlbGF5OiAyMDAwLFxuXHRcdC8vIExvb3AgdGhlIGFuaW1hdGlvblxuXHRcdGxvb3A6IHRydWUsXG5cdFx0Ly8gU2hvdyBjdXJzb3Jcblx0XHRzaG93Q3Vyc29yOiB0cnVlLFxuXHRcdC8vIENoYXJhY3RlciBmb3IgY3Vyc29yXG5cdFx0Y3Vyc29yQ2hhcjogXCJ8XCIsXG5cdFx0Ly8gQXR0cmlidXRlIHRvIHR5cGUgKG51bGwgPT0gdGV4dClcblx0XHRhdHRyOiBudWxsLFxuXHRcdC8vIFdoZXRoZXIgdG8gc3RhcnQgdHlwaW5nIGF1dG9tYXRpY2FsbHlcblx0XHRhdXRvSW5zZXJ0Q3NzOiB0cnVlLFxuXHRcdC8vIERlZmF1bHQgY29udGVudCBiZWZvcmUgdHlwaW5nXG5cdFx0Y29udGVudFR5cGU6IFwiaHRtbFwiLFxuXHR9KTtcbn1cblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cdGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xuXHRtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cblx0Y29uc3QgZmlyc3RCbG9ja0hvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRmaXJzdEJsb2NrSG9tZS5jbGFzc0xpc3QuYWRkKFwiZmlyc3QtYmxvY2staG9tZVwiKTtcblxuXHRjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dC1jb250YWluZXJcIik7XG5cblx0Y29uc3Qgc3ViVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHN1YlRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Yi10ZXh0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBmaXJzdFRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRmaXJzdFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZpcnN0LXRleHQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IGZpcnN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0Zmlyc3RUZXh0LnRleHRDb250ZW50ID0gXCJIaSwgVGhlcmUhXCI7XG5cdGZpcnN0VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdFRleHQpO1xuXG5cdGNvbnN0IHdhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHR3YXZlLmNsYXNzTGlzdC5hZGQoXCJ3YXZlXCIpO1xuXHR3YXZlLnNyYyA9IEhhbmQ7XG5cdHdhdmUuYWx0ID0gXCJXYXZlXCI7XG5cdGZpcnN0VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh3YXZlKTtcblxuXHRjb25zdCBzZWNvbmRUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2Vjb25kVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLXRleHQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IHNlY29uZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG5cdHNlY29uZFRleHQudGV4dENvbnRlbnQgPSBcIkknbSBcIjtcblx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRuYW1lLnRleHRDb250ZW50ID0gXCJTaGFoaXIgQWhtZWRcIjtcblx0bmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcblx0c2Vjb25kVGV4dC5hcHBlbmRDaGlsZChuYW1lKTtcblx0c2Vjb25kVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRUZXh0KTtcblxuXHRzdWJUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0VGV4dENvbnRhaW5lcik7XG5cdHN1YlRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kVGV4dENvbnRhaW5lcik7XG5cblx0Y29uc3QgdHlwZWRUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dHlwZWRUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0eXBlZC10ZXh0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCB0eXBlZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0dHlwZWRUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0eXBlZC10ZXh0XCIpO1xuXHR0eXBlZFRleHQuaWQgPSBcInR5cGVkLXRleHRcIjtcblxuXHR0eXBlZFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodHlwZWRUZXh0KTtcblxuXHR0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1YlRleHRDb250YWluZXIpO1xuXHR0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHR5cGVkVGV4dENvbnRhaW5lcik7XG5cblx0Zmlyc3RCbG9ja0hvbWUuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cblx0Y29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRpbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0aW1hZ2Uuc3JjID0gQ29tcHV0ZXI7XG5cdGltYWdlLmFsdCA9IFwiQ29tcHV0ZXJcIjtcblx0aW1hZ2UuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyXCIpO1xuXHRpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG5cblx0Zmlyc3RCbG9ja0hvbWUuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuXG5cdG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RCbG9ja0hvbWUpO1xuXG5cdGNvbnN0IHNlY29uZEJsb2NrSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNlY29uZEJsb2NrSG9tZS5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLWJsb2NrLWhvbWVcIik7XG5cblx0Y29uc3Qgc2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtYmxvY2stdGV4dC1jb250YWluZXJcIik7XG5cblx0Y29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRleHREaXYuY2xhc3NMaXN0LmFkZChcInRleHQtZGl2XCIpO1xuXG5cdGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHRleHQudGV4dENvbnRlbnQgPSBcIklmIG9wcG9ydHVuaXR5IGRvZXNuJ3Qga25vY2ssIFwiO1xuXG5cdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0c3Bhbi50ZXh0Q29udGVudCA9IFwiYnVpbGQgYSBkb29yLlwiO1xuXHRzcGFuLmNsYXNzTGlzdC5hZGQoXCJzcGFuLWRvb3JcIik7XG5cblx0dGV4dC5hcHBlbmRDaGlsZChzcGFuKTtcblx0dGV4dERpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcblx0Y29uc3Qgc3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c3ViRGl2LmNsYXNzTGlzdC5hZGQoXCJzdWItZGl2XCIpO1xuXHRjb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0aGlnaGxpZ2h0LnRleHRDb250ZW50ID1cblx0XHRcIkVtYnJhY2luZyBjaGFsbGVuZ2VzIHdpdGggaW5ub3ZhdGlvbiBhbmQgZGV0ZXJtaW5hdGlvbiwgXCI7XG5cdGhpZ2hsaWdodC5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuXG5cdGNvbnN0IHN1YlRleHRBZnRlckhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuXHRcdFwiSSBjaGFubmVsIG15IHBhc3Npb24gZm9yIGNvZGluZyBpbnRvIGNyYWZ0aW5nIHNvbHV0aW9ucyB3aGVyZSBub25lIGV4aXN0ZWQgYmVmb3JlLiBJbiB0aGUgZXZlci1ldm9sdmluZyB3b3JsZCBvZiB3ZWIgZGV2ZWxvcG1lbnQsIEknbSBjb21taXR0ZWQgdG8gdHVybmluZyBvYnN0YWNsZXMgaW50byBzdGVwcGluZyBzdG9uZXMgZm9yIGdyb3d0aCBhbmQgbGVhcm5pbmcuXCIsXG5cdCk7XG5cdGNvbnN0IHN1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0c3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViLXRleHRcIik7XG5cblx0c3ViVGV4dC5hcHBlbmRDaGlsZChoaWdobGlnaHQpO1xuXHRzdWJUZXh0LmFwcGVuZENoaWxkKHN1YlRleHRBZnRlckhpZ2hsaWdodCk7XG5cblx0Y29uc3Qgc3Vic3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRzdWJzdWJUZXh0LnRleHRDb250ZW50ID1cblx0XHRcIldpdGggZXZlcnkgbGluZSBvZiBjb2RlLCBJIGFpbSB0byBidWlsZCB3ZWIgYXBwbGljYXRpb25zIHRoYXQgYXJlIGludHVpdGl2ZSBhbmQgZWZmaWNpZW50LiBNeSBnb2FsIGlzIHRvIGNyZWF0ZSB0b29scyB0aGF0IG5vdCBvbmx5IGZ1bmN0aW9uIHNtb290aGx5IGJ1dCBhbHNvIGVuaGFuY2UgdGhlIHVzZXIgZXhwZXJpZW5jZS4gSXQncyBhYm91dCBwYXZpbmcgbmV3IHBhdGh3YXlzIHRvIHN1Y2Nlc3MgYW5kIGVuc3VyaW5nIHRoZXkgbGVhZCB0byBtZWFuaW5nZnVsIHJlc3VsdHMgZm9yIGJvdGggdXNlcnMgYW5kIGJ1c2luZXNzZXNcIjtcblx0c3Vic3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViLXRleHRcIik7XG5cdHN1YkRpdi5hcHBlbmRDaGlsZChzdWJUZXh0KTtcblx0c3ViRGl2LmFwcGVuZENoaWxkKHN1YnN1YlRleHQpO1xuXHR0ZXh0RGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG5cdHNlY29uZEJsb2NrVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcblxuXHRjb25zdCBoYWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRoYWNrZXIuY2xhc3NMaXN0LmFkZChcImhhY2tlclwiKTtcblx0aGFja2VyLnNyYyA9IEhhY2tlcjtcblx0aGFja2VyLmFsdCA9IFwiSGFja2VyXCI7XG5cdHNlY29uZEJsb2NrVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChoYWNrZXIpO1xuXG5cdGNvbnN0IHNvY2lhbEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c29jaWFsQmxvY2suY2xhc3NMaXN0LmFkZChcInNvY2lhbC1ibG9ja1wiKTtcblxuXHRjb25zdCBzb2NpYWxUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c29jaWFsVGV4dERpdi5jbGFzc0xpc3QuYWRkKFwic29jaWFsLXRleHQtZGl2XCIpO1xuXG5cdGNvbnN0IHNvY2lhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHNvY2lhbFRleHQudGV4dENvbnRlbnQgPSBcIkZJTkQgTUUgT05cIjtcblxuXHRjb25zdCB0ZXh0QmVmb3JlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJGZWVsIGZyZWUgdG8gXCIpO1xuXHRjb25zdCB0ZXh0QWZ0ZXIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiB3aXRoIG1lXCIpO1xuXG5cdGNvbnN0IHNwYW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdHNwYW5Db250ZW50LnRleHRDb250ZW50ID0gXCJjb25uZWN0XCI7XG5cblx0Y29uc3Qgc29jaWFsU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRzb2NpYWxTdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtc3ViLXRleHRcIik7XG5cdHNvY2lhbFN1YlRleHQuYXBwZW5kQ2hpbGQodGV4dEJlZm9yZSk7XG5cdHNvY2lhbFN1YlRleHQuYXBwZW5kQ2hpbGQoc3BhbkNvbnRlbnQpO1xuXHRzb2NpYWxTdWJUZXh0LmFwcGVuZENoaWxkKHRleHRBZnRlcik7XG5cblx0c29jaWFsVGV4dERpdi5hcHBlbmRDaGlsZChzb2NpYWxUZXh0KTtcblx0c29jaWFsVGV4dERpdi5hcHBlbmRDaGlsZChzb2NpYWxTdWJUZXh0KTtcblxuXHRjb25zdCBzb2NpYWxJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNvY2lhbEljb25zLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvbnNcIik7XG5cblx0Y29uc3QgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDdcIjtcblx0Z2l0TGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXHRnaXRMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuXHRjb25zdCBnaXRTb2NpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRnaXRTb2NpYWwuc3JjID0gR2l0U29jaWFsO1xuXHRnaXRTb2NpYWwuYWx0ID0gXCJHaXRIdWJcIjtcblx0Z2l0U29jaWFsLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvblwiKTtcblx0Z2l0TGluay5hcHBlbmRDaGlsZChnaXRTb2NpYWwpO1xuXHRzb2NpYWxJY29ucy5hcHBlbmRDaGlsZChnaXRMaW5rKTtcblxuXHRjb25zdCBsaW5rZWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGxpbmtlZExpbmsuaHJlZiA9IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NoYWhpcjQ3L1wiO1xuXHRsaW5rZWRMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cdGxpbmtlZExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5cdGNvbnN0IGxpbmtlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGxpbmtlZC5zcmMgPSBMaW5rZWQ7XG5cdGxpbmtlZC5hbHQgPSBcIkxpbmtlZEluXCI7XG5cdGxpbmtlZC5jbGFzc0xpc3QuYWRkKFwic29jaWFsLWljb25cIik7XG5cdGxpbmtlZExpbmsuYXBwZW5kQ2hpbGQobGlua2VkKTtcblx0c29jaWFsSWNvbnMuYXBwZW5kQ2hpbGQobGlua2VkTGluayk7XG5cblx0c29jaWFsQmxvY2suYXBwZW5kQ2hpbGQoc29jaWFsVGV4dERpdik7XG5cdHNvY2lhbEJsb2NrLmFwcGVuZENoaWxkKHNvY2lhbEljb25zKTtcblxuXHRzZWNvbmRCbG9ja0hvbWUuYXBwZW5kQ2hpbGQoc2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyKTtcblx0c2Vjb25kQmxvY2tIb21lLmFwcGVuZENoaWxkKHNvY2lhbEJsb2NrKTtcblxuXHRtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZEJsb2NrSG9tZSk7XG5cblx0ZHluYW1pY1RleHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi9pbWcvdG9kby5wbmdcIjtcbmltcG9ydCBCYXR0bGVzaGlwIGZyb20gXCIuL2ltZy9iYXR0bGVzaGlwLnBuZ1wiO1xuaW1wb3J0IFdlYXRoZXIgZnJvbSBcIi4vaW1nL3dlYXRoZXIucG5nXCI7XG5pbXBvcnQgVGljdGFjIGZyb20gXCIuL2ltZy90aWN0YWMucG5nXCI7XG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi9pbWcvY2FsY3VsYXRvci5wbmdcIjtcbmltcG9ydCBSZXN0YXVyYW50IGZyb20gXCIuL2ltZy9yZXN0YXVyYW50LnBuZ1wiO1xuaW1wb3J0IEV0Y2ggZnJvbSBcIi4vaW1nL2V0Y2gucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RJdGVtKGltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24sIGxpdmVEZW1vLCBzb3VyY2VDb2RlKSB7XG5cdGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcblxuXHRjb25zdCBwcm9qZWN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRwcm9qZWN0SW1hZ2Uuc3JjID0gaW1hZ2U7XG5cdHByb2plY3RJbWFnZS5hbHQgPSB0aXRsZTtcblx0cHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdEltYWdlKTtcblxuXHRjb25zdCBwcm9qZWN0SXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RJdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW0tZGl2XCIpO1xuXG5cdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0cHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cblx0Y29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG5cdGNvbnN0IHByb2plY3RMaW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdExpbmtEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGluay1kaXZcIik7XG5cblx0Y29uc3QgcHJvamVjdExpdmVEZW1vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdHByb2plY3RMaXZlRGVtby5ocmVmID0gbGl2ZURlbW87XG5cdHByb2plY3RMaXZlRGVtby50ZXh0Q29udGVudCA9IFwiTGl2ZSBEZW1vXCI7XG5cdHByb2plY3RMaW5rRGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXZlRGVtbyk7XG5cblx0Y29uc3QgcHJvamVjdFNvdXJjZUNvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0cHJvamVjdFNvdXJjZUNvZGUuaHJlZiA9IHNvdXJjZUNvZGU7XG5cdHByb2plY3RTb3VyY2VDb2RlLnRleHRDb250ZW50ID0gXCJTb3VyY2UgQ29kZVwiO1xuXHRwcm9qZWN0TGlua0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0U291cmNlQ29kZSk7XG5cblx0cHJvamVjdEl0ZW1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblx0cHJvamVjdEl0ZW1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcblx0cHJvamVjdEl0ZW1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdExpbmtEaXYpO1xuXHRwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbURpdik7XG5cblx0cmV0dXJuIHByb2plY3RJdGVtO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0KCkge1xuXHRjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kaXZcIik7XG5cdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0cHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXHRwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cblx0Y29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IHRvZG8gPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRUb2RvLFxuXHRcdFwiVG9kbyBMaXN0XCIsXG5cdFx0XCJUb2RvIExpc3QgaXMgYSBwb3dlcmZ1bCB0YXNrIG1hbmFnZW1lbnQgYXBwbGljYXRpb24gdGhhdCBoZWxwcyB5b3Ugc3RheSBvcmdhbml6ZWQgYW5kIHByb2R1Y3RpdmUuIE1hbmFnZSB0YXNrcywgcHJvamVjdHMsIGFuZCBub3RlcyBlZmZvcnRsZXNzbHkuIEZlYXR1cmVzIGluY2x1ZGUgcHJpb3JpdHkgbGV2ZWxzLCBkdWUgZGF0ZXMsIHNlYXJjaCBmdW5jdGlvbmFsaXR5LCBhbmQgZGFyay9saWdodCB0aGVtZS4gR2V0IHN0YXJ0ZWQgYW5kIGJvb3N0IHlvdXIgcHJvZHVjdGl2aXR5IHRvZGF5IVwiLFxuXHRcdFwiaHR0cHM6Ly9zaGFoaXItNDcuZ2l0aHViLmlvL1RvZG8tTGlzdC9cIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvVG9kby1MaXN0XCIsXG5cdCk7XG5cblx0Y29uc3QgYmF0dGxlc2hpcCA9IGNyZWF0ZVByb2plY3RJdGVtKFxuXHRcdEJhdHRsZXNoaXAsXG5cdFx0XCJCYXR0bGVzaGlwXCIsXG5cdFx0XCJBIHdlYi1iYXNlZCBCYXR0bGVzaGlwIGdhbWUgd2l0aCBhIHN0cmF0ZWdpYyBBSS4gUGxheWVycyBlbmdhZ2UgaW4gY2xhc3NpYyBuYXZhbCB3YXJmYXJlIGFnYWluc3QgYSBjb21wdXRlci4gQ29kZSBpcyBvcGVuIGZvciBjb250cmlidXRpb25zIGFuZCB0ZXN0cyBlbnN1cmUgcm9idXN0IGdhbWVwbGF5LlBsYXkgbm93IVwiLFxuXHRcdFwiaHR0cHM6Ly9zaGFoaXItNDcuZ2l0aHViLmlvL0JhdHRsZXNoaXAvXCIsXG5cdFx0XCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L0JhdHRsZXNoaXBcIixcblx0KTtcblxuXHRjb25zdCB3ZWF0aGVyID0gY3JlYXRlUHJvamVjdEl0ZW0oXG5cdFx0V2VhdGhlcixcblx0XHRcIldlYXRoZXIgQXBwXCIsXG5cdFx0XCJXZWF0aGVyIFdoaXogaXMgYSB3ZWIgYXBwIHByb3ZpZGluZyBjdXJyZW50IHdlYXRoZXIsIGhvdXJseSAmIDItZGF5IGZvcmVjYXN0cyBmb3IgZGlmZmVyZW50IGxvY2F0aW9ucy4gU3dpdGNoIGJldHdlZW4gaW1wZXJpYWwgJiBtZXRyaWMgdW5pdHMuIEJ1aWx0IHdpdGggSFRNTCwgQ1NTLCBKUywgV2VicGFjaywgQmFiZWwsIEVTTGludCAmIFByZXR0aWVyLiBBUElzOiBPcGVuV2VhdGhlciAmIE1hcGJveC4gU3RheSBwcmVwYXJlZCB3aXRoIGFjY3VyYXRlIHdlYXRoZXIgZGF0YSFcIixcblx0XHRcImh0dHBzOi8vc2hhaGlyLTQ3LmdpdGh1Yi5pby9XZWF0aGVyLVdoaXovXCIsXG5cdFx0XCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L1dlYXRoZXItV2hpelwiLFxuXHQpO1xuXG5cdGNvbnN0IHRpY3RhYyA9IGNyZWF0ZVByb2plY3RJdGVtKFxuXHRcdFRpY3RhYyxcblx0XHRcIlRpYyBUYWMgVG9lXCIsXG5cdFx0XCJFbmpveSB0aGUgY2xhc3NpYyBUaWMgVGFjIFRvZSBnYW1lIHdpdGggY3VzdG9taXphYmxlIG1hcmtlcnMsIGNvbG9ycywgYW5kIHBsYXllciBuYW1lcy4gUGxheSBhZ2FpbnN0IGEgZnJpZW5kIG9yIGNoYWxsZW5naW5nIEFJLiBSZXNwb25zaXZlIGRlc2lnbiwgdmlzdWFsbHkgYXBwZWFsaW5nIGludGVyZmFjZS4gU291cmNlIGNvZGUgZm9yIEhUTUwsIENTUywgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbi4gRXhwZXJpZW5jZSBob3VycyBvZiBpbnRlcmFjdGl2ZSBhbmQgYWRkaWN0aXZlIGZ1biFcIixcblx0XHRcImh0dHBzOi8vc2hhaGlyLTQ3LmdpdGh1Yi5pby9UaWMtVGFjLVRvZS9cIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvVGljLVRhYy10b2VcIixcblx0KTtcblxuXHRjb25zdCBjYWxjdWxhdG9yID0gY3JlYXRlUHJvamVjdEl0ZW0oXG5cdFx0Q2FsY3VsYXRvcixcblx0XHRcIkNhbGN1bGF0b3JcIixcblx0XHRcIlRoaXMgaXMgYSBzaW1wbGUgY2FsY3VsYXRvciBhcHBsaWNhdGlvbiB3aXRoIGtleWJvYXJkIHN1cHBvcnQuIEl0IGFsbG93cyB5b3UgdG8gcGVyZm9ybSBiYXNpYyBhcml0aG1ldGljIG9wZXJhdGlvbnMgc3VjaCBhcyBhZGRpdGlvbiwgc3VidHJhY3Rpb24sIG11bHRpcGxpY2F0aW9uLCBhbmQgZGl2aXNpb24uIEl0IGFsc28gaW5jbHVkZXMgYWRkaXRpb25hbCBmZWF0dXJlcyBsaWtlIGNhbGN1bGF0aW5nIHRoZSBmYWN0b3JpYWwgYW5kIGV4cG9uZW50aWF0aW9uLlwiLFxuXHRcdFwiaHR0cHM6Ly9zaGFoaXItNDcuZ2l0aHViLmlvL0NhbGN1bGF0b3IvXCIsXG5cdFx0XCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L0NhbGN1bGF0b3JcIixcblx0KTtcblxuXHRjb25zdCByZXN0YXVyYW50ID0gY3JlYXRlUHJvamVjdEl0ZW0oXG5cdFx0UmVzdGF1cmFudCxcblx0XHRcIlJlc3RhdXJhbnQgUGFnZVwiLFxuXHRcdFwiQSB3ZWItYmFzZWQgcGxhdGZvcm0gdGhhdCBwcm92aWRlcyBpbmZvcm1hdGlvbiBhbmQgZmVhdHVyZXMgcmVsYXRlZCB0byBhIGZpY3Rpb25hbCByZXN0YXVyYW50IGNhbGxlZCB0aGUgR2FsYWN0aWMgQ2FudGluYS4gVGhlIGFwcGxpY2F0aW9uIGFsbG93cyB1c2VycyB0byBleHBsb3JlIHZhcmlvdXMgc2VjdGlvbnMgc3VjaCBhcyB0aGUgaG9tZSBwYWdlLCBtZW51IHBhZ2UsIGNvbnRhY3QgcGFnZSwgYWJvdXQgdXMgcGFnZSwgcmV2aWV3IHBhZ2UsIGFuZCBGQVEgcGFnZS5cIixcblx0XHRcImh0dHBzOi8vc2hhaGlyLTQ3LmdpdGh1Yi5pby9SZXN0YXVyYW50LVBhZ2UvXCIsXG5cdFx0XCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L1Jlc3RhdXJhbnQtUGFnZVwiLFxuXHQpO1xuXG5cdGNvbnN0IGV0Y2ggPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRFdGNoLFxuXHRcdFwiRXRjaCBhIFNrZXRjaFwiLFxuXHRcdFwiRXhwZXJpZW5jZSB0aGUgY2xhc3NpYyBFdGNoLWEtU2tldGNoIGZ1biBvbmxpbmUhIERyYXcgYW5kIGNyZWF0ZSBtYXN0ZXJwaWVjZXMgd2l0aCB0aGlzIHNpbXBsZSB3ZWIgYXBwbGljYXRpb24uIEJ1aWx0IHVzaW5nIEhUTUwsIENTUywgYW5kIEphdmFTY3JpcHQuXCIsXG5cdFx0XCJodHRwczovL3NoYWhpci00Ny5naXRodWIuaW8vRXRjaC1hLVNrZXRjaC9cIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvRXRjaC1hLVNrZXRjaC9cIixcblx0KTtcblxuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pO1xuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJhdHRsZXNoaXApO1xuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpY3RhYyk7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FsY3VsYXRvcik7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudCk7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZXRjaCk7XG5cblx0cHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG5cdG1haW4uaW5uZXJIVE1MID0gXCJcIjtcblx0bWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcbiIsImltcG9ydCBJY29uIGZyb20gXCIuL2ltZy9pY29uLnN2Z1wiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaW1nL2hvbWUuc3ZnXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vaW1nL2Fib3V0LnN2Z1wiO1xuaW1wb3J0IENvZGUgZnJvbSBcIi4vaW1nL2NvZGUuc3ZnXCI7XG5pbXBvcnQgRG9jIGZyb20gXCIuL2ltZy9kb2Muc3ZnXCI7XG5pbXBvcnQgR2l0SHViIGZyb20gXCIuL2ltZy9naXRTb2NpYWwuc3ZnXCI7XG5pbXBvcnQgaGFtYnVyZ2VySW1nIGZyb20gXCIuL2ltZy9oYW1idXJnZXIuc3ZnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcblx0Y29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblx0YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyXCIpO1xuXG5cdGNvbnN0IGxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGxvZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgbG9nb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGxvZ29Cb3guY2xhc3NMaXN0LmFkZChcImxvZ28tYm94XCIpO1xuXHRjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0bG9nby5zcmMgPSBJY29uO1xuXHRsb2dvLmFsdCA9IFwibG9nb1wiO1xuXHRjb25zdCBsb2dvTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRsb2dvTGluay5hcHBlbmRDaGlsZChsb2dvKTtcblx0bG9nb0JveC5hcHBlbmRDaGlsZChsb2dvTGluayk7XG5cdGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRsb2dvVGV4dC50ZXh0Q29udGVudCA9IFwiU2hhaGlyIEFobWVkXCI7XG5cdGNvbnN0IGxvZ29MaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRsb2dvTGluazIuYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuXHRsb2dvQm94LmFwcGVuZENoaWxkKGxvZ29MaW5rMik7XG5cblx0bG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29Cb3gpO1xuXG5cdGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bmF2TGlua3MuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rc1wiKTtcblxuXHRjb25zdCBob21lQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0aG9tZUJveC5jbGFzc0xpc3QuYWRkKFwibmF2LWJveFwiKTtcblx0Y29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0aG9tZUxpbmsuaHJlZiA9IFwiI1wiO1xuXHRob21lTGluay50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXHRob21lQm94LmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcblxuXHRjb25zdCBob21lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGhvbWVJY29uLnNyYyA9IEhvbWU7XG5cdGhvbWVJY29uLmFsdCA9IFwiaG9tZVwiO1xuXHRob21lQm94LmFwcGVuZENoaWxkKGhvbWVJY29uKTtcblxuXHRuYXZMaW5rcy5hcHBlbmRDaGlsZChob21lQm94KTtcblxuXHRjb25zdCBtZW51TGlua2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1lbnVMaW5rYm94LmNsYXNzTGlzdC5hZGQoXCJuYXYtYm94XCIpO1xuXHRjb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRtZW51TGluay5ocmVmID0gXCIjXCI7XG5cdG1lbnVMaW5rLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuXHRtZW51TGlua2JveC5hcHBlbmRDaGlsZChtZW51TGluayk7XG5cblx0Y29uc3QgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRtZW51SWNvbi5zcmMgPSBBYm91dDtcblx0bWVudUljb24uYWx0ID0gXCJhYm91dFwiO1xuXHRtZW51TGlua2JveC5hcHBlbmRDaGlsZChtZW51SWNvbik7XG5cdG5hdkxpbmtzLmFwcGVuZENoaWxkKG1lbnVMaW5rYm94KTtcblxuXHRjb25zdCBjb250YWN0TGlua2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnRhY3RMaW5rYm94LmNsYXNzTGlzdC5hZGQoXCJuYXYtYm94XCIpO1xuXHRjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRjb250YWN0TGluay5ocmVmID0gXCIjXCI7XG5cdGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXHRjb250YWN0TGlua2JveC5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG5cblx0Y29uc3QgY29udGFjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRjb250YWN0SWNvbi5zcmMgPSBDb2RlO1xuXHRjb250YWN0SWNvbi5hbHQgPSBcInByb2plY3RzXCI7XG5cdGNvbnRhY3RMaW5rYm94LmFwcGVuZENoaWxkKGNvbnRhY3RJY29uKTtcblx0bmF2TGlua3MuYXBwZW5kQ2hpbGQoY29udGFjdExpbmtib3gpO1xuXG5cdGNvbnN0IEFib3V0TGlua2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdEFib3V0TGlua2JveC5jbGFzc0xpc3QuYWRkKFwibmF2LWJveFwiKTtcblxuXHRjb25zdCBBYm91dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0QWJvdXRMaW5rLmhyZWYgPSBcIiNcIjtcblx0QWJvdXRMaW5rLnRleHRDb250ZW50ID0gXCJSZXN1bWVcIjtcblx0QWJvdXRMaW5rYm94LmFwcGVuZENoaWxkKEFib3V0TGluayk7XG5cblx0Y29uc3QgQWJvdXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0QWJvdXRJY29uLnNyYyA9IERvYztcblx0QWJvdXRJY29uLmFsdCA9IFwicmVzdW1lXCI7XG5cdEFib3V0TGlua2JveC5hcHBlbmRDaGlsZChBYm91dEljb24pO1xuXHRuYXZMaW5rcy5hcHBlbmRDaGlsZChBYm91dExpbmtib3gpO1xuXG5cdC8vIGhhbWJ1cmdlciBtZW51XG5cdGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGhhbWJ1cmdlci5jbGFzc0xpc3QuYWRkKFwiaGFtYnVyZ2VyXCIpO1xuXHRjb25zdCBoYW1idXJnZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0aGFtYnVyZ2VySWNvbi5zcmMgPSBoYW1idXJnZXJJbWc7XG5cdGhhbWJ1cmdlckljb24uYWx0ID0gXCJoYW1idXJnZXJcIjtcblx0aGFtYnVyZ2VyLmFwcGVuZENoaWxkKGhhbWJ1cmdlckljb24pO1xuXG5cdGNvbnN0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJoYW1idXJnZXItbWVudVwiKTtcblx0Y29uc3QgaGFtYnVyZ2VyTWVudUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0aGFtYnVyZ2VyTWVudUhvbWUuaHJlZiA9IFwiI1wiO1xuXHRoYW1idXJnZXJNZW51SG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXHRoYW1idXJnZXJNZW51LmFwcGVuZENoaWxkKGhhbWJ1cmdlck1lbnVIb21lKTtcblx0Y29uc3QgaGFtYnVyZ2VyTWVudUFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGhhbWJ1cmdlck1lbnVBYm91dC5ocmVmID0gXCIjXCI7XG5cdGhhbWJ1cmdlck1lbnVBYm91dC50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcblx0aGFtYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChoYW1idXJnZXJNZW51QWJvdXQpO1xuXHRjb25zdCBoYW1idXJnZXJNZW51UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0aGFtYnVyZ2VyTWVudVByb2plY3RzLmhyZWYgPSBcIiNcIjtcblx0aGFtYnVyZ2VyTWVudVByb2plY3RzLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXHRoYW1idXJnZXJNZW51LmFwcGVuZENoaWxkKGhhbWJ1cmdlck1lbnVQcm9qZWN0cyk7XG5cdGNvbnN0IGhhbWJ1cmdlck1lbnVSZXN1bWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0aGFtYnVyZ2VyTWVudVJlc3VtZS5ocmVmID0gXCIjXCI7XG5cdGhhbWJ1cmdlck1lbnVSZXN1bWUudGV4dENvbnRlbnQgPSBcIlJlc3VtZVwiO1xuXHRoYW1idXJnZXJNZW51LmFwcGVuZENoaWxkKGhhbWJ1cmdlck1lbnVSZXN1bWUpO1xuXG5cdGhhbWJ1cmdlci5hcHBlbmRDaGlsZChoYW1idXJnZXJNZW51KTtcblx0bmF2TGlua3MuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyKTtcblxuXHRiYXIuYXBwZW5kQ2hpbGQobG9nQ29udGFpbmVyKTtcblx0YmFyLmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKGJhcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcblx0Y29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblx0Zm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cblx0Y29uc3QgZ2l0SHViUHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRIdWJQcm9maWxlLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDdcIjtcblxuXHRjb25zdCBnaXRIdWJQcm9maWxlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Z2l0SHViUHJvZmlsZUltZy5zcmMgPSBHaXRIdWI7XG5cdGdpdEh1YlByb2ZpbGVJbWcuYWx0ID0gXCJnaXRIdWIgTG9nb1wiO1xuXG5cdGNvbnN0IGdpdEh1YlByb2ZpbGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGF0U3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGF0U3ltYm9sLmNsYXNzTGlzdC5hZGQoXCJhdC1zeW1ib2xcIik7XG5cdGF0U3ltYm9sLnRleHRDb250ZW50ID0gXCJAXCI7XG5cdGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdHVzZXJuYW1lLnRleHRDb250ZW50ID0gXCJTaGFoaXItNDdcIjtcblx0Z2l0SHViUHJvZmlsZVRleHQuYXBwZW5kQ2hpbGQoYXRTeW1ib2wpO1xuXHRnaXRIdWJQcm9maWxlVGV4dC5hcHBlbmRDaGlsZCh1c2VybmFtZSk7XG5cblx0Z2l0SHViUHJvZmlsZS5hcHBlbmRDaGlsZChnaXRIdWJQcm9maWxlSW1nKTtcblx0Z2l0SHViUHJvZmlsZS5hcHBlbmRDaGlsZChnaXRIdWJQcm9maWxlVGV4dCk7XG5cblx0Y29uc3Qgc2VwZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHNlcGVyYXRvci50ZXh0Q29udGVudCA9IFwifFwiO1xuXG5cdGNvbnN0IGdpdEh1YlJlcG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0Z2l0SHViUmVwby5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L1BvcnRmb2xpby1XZWJzaXRlXCI7XG5cdGdpdEh1YlJlcG8udGV4dENvbnRlbnQgPSBcIlNvdXJjZSBDb2RlXCI7XG5cblx0Zm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlByb2ZpbGUpO1xuXHRmb290ZXIuYXBwZW5kQ2hpbGQoc2VwZXJhdG9yKTtcblx0Zm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlJlcG8pO1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5mdW5jdGlvbiBzZXR1cFBhZ2UoKSB7XG5cdGNyZWF0ZU5hdkJhcigpO1xuXHRjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblx0Y3JlYXRlRm9vdGVyKCk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcblx0XHRjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1iYXJcIik7XG5cdFx0aWYgKHdpbmRvdy5zY3JvbGxZID4gMCkge1xuXHRcdFx0bmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyLXNjcm9sbGVkXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuYXZCYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1iYXItc2Nyb2xsZWRcIik7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBoYW1idXJnZXIgbWVudVxuXHRjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcblx0Y29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyLW1lbnVcIik7XG5cdGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmIChoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuXHRcdFx0aGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdFx0aGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG5cdFx0fSBlbHNlIGlmIChoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5jb250YWlucyhcImluYWN0aXZlXCIpKSB7XG5cdFx0XHRoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcblx0XHRcdGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdH1cblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwUGFnZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBcXGBtYWluXFxgIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxuICovXG5cbm1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBcXGBoMVxcYCBlbGVtZW50cyB3aXRoaW4gXFxgc2VjdGlvblxcYCBhbmRcbiAqIFxcYGFydGljbGVcXGAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxuICovXG5cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC42N2VtIDA7XG59XG5cbi8qIEdyb3VwaW5nIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG5cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXG4gKi9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4gKiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyogRm9ybXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCB7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uLFxuc2VsZWN0IHsgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcblt0eXBlPVwiYnV0dG9uXCJdLFxuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gKi9cblxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmxlZ2VuZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAqL1xuXG5bdHlwZT1cImNoZWNrYm94XCJdLFxuW3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiAqL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXG4gKi9cblxuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qIE1pc2NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICovXG5cbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cbiAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuXHRjb2xvcjogI2UwZTBlMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuZGl2I2NvbnRlbnQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubmF2LWJhciB7XG5cdHBvc2l0aW9uOiBzdGlja3k7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogMS41cmVtIDNyZW07XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cdHotaW5kZXg6IDk5OTtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIE5vIGJhY2tncm91bmQgaW5pdGlhbGx5ICovXG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cigwKTsgLyogTm8gYmx1ciBpbml0aWFsbHkgKi9cblx0Ym94LXNoYWRvdzpcblx0XHQwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksXG5cdFx0MCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLm5hdi1iYXItc2Nyb2xsZWQge1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7IC8qIEFkanVzdCB0aGUgYmx1ciB2YWx1ZSBhcyBuZWVkZWQgKi9cblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYShcblx0XHQ3OSxcblx0XHQyMDksXG5cdFx0MTk3LFxuXHRcdDAuMTVcblx0KTsgLyogUkdCQSBjb2xvciBmb3IgdHJhbnNsdWNlbnQgdGVhbCAqL1xufVxuXG4ubG9nby1ib3gge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDFyZW07XG59XG5cbi5sb2dvLWJveCBpbWcge1xuXHR3aWR0aDogM3JlbTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2ctY29udGFpbmVyOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nby1ib3ggYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxvZy1jb250YWluZXI6aG92ZXI6YWZ0ZXIge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmxvZy1jb250YWluZXI6aG92ZXIgLmxvZ28tYm94IGEgaDEge1xuXHRjb2xvcjogI2ZmZmZmZmZmO1xufVxuXG4ubG9nLWNvbnRhaW5lcjpob3ZlciAubG9nby1ib3ggaW1nIHtcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDMpO1xufVxuXG4ubG9nLWNvbnRhaW5lcjphZnRlciB7XG5cdGJhY2tncm91bmQ6ICM0ZmQxYzU7XG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdGJvdHRvbTogMXB4O1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiBibG9jaztcblx0aGVpZ2h0OiA1cHg7XG5cdGxlZnQ6IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG5cdHdpZHRoOiAwO1xuXHR6LWluZGV4OiAtMTtcbn1cblxuLmxvZ28tYm94IGEgaDEge1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0bWFyZ2luOiAwO1xufVxuXG4ubmF2LWxpbmtzIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAycmVtO1xufVxuXG4ubmF2LWxpbmtzIGEge1xuXHRjb2xvcjogI2UwZTBlMDtcblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdGZvbnQtd2VpZ2h0OiAxMDA7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5hdi1saW5rcyBhOmhvdmVyIHtcblx0Y29sb3I6ICNmZmZmZmZmZjtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciBhIHtcblx0Y29sb3I6ICNmZmZmZmZmZjtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciBpbWcge1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XG59XG5cbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXI6YWZ0ZXIge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveDphZnRlciB7XG5cdGJhY2tncm91bmQ6ICM0ZmQxYzU7XG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdGJvdHRvbTogLTVweDtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGhlaWdodDogNXB4O1xuXHRsZWZ0OiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xuXHR3aWR0aDogMDtcblx0ei1pbmRleDogLTE7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogN3JlbTtcbn1cblxuLmZpcnN0LWJsb2NrLWhvbWUge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuXHRwYWRkaW5nOiAwIDNyZW07XG5cdGdhcDogMXJlbTtcbn1cblxuLnRleHQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnN1Yi10ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMXJlbTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG5cdHdpZHRoOiA3NSU7XG59XG5cbi5jb21wdXRlciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5maXJzdC10ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGdhcDogMXJlbTtcbn1cblxuLnR5cGVkLXRleHQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAycmVtO1xufVxuXG4jdHlwZWQtdGV4dCB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6ICM0ZmQxYzU7XG59XG5cbi50eXBlZC1jdXJzb3Ige1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiAjNGZkMWM1O1xuXHRhbmltYXRpb246IGJsaW5rIDAuN3MgaW5maW5pdGU7XG59XG5cbi5uYXYtYm94IHtcblx0cGFkZGluZzogMC4yNXJlbSAwcmVtO1xufVxuXG4ud2F2ZSB7XG5cdHdpZHRoOiAycmVtO1xuXHRoZWlnaHQ6IGF1dG87XG5cdGFuaW1hdGlvbi1uYW1lOiB3YXZlLWFuaW1hdGlvbjtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAyLjVzO1xuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0dHJhbnNmb3JtLW9yaWdpbjogNzAlIDcwJTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbn1cblxuQGtleWZyYW1lcyB3YXZlLWFuaW1hdGlvbiB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxuXHQxMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG5cdH1cblx0MjAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XG5cdH1cblx0MzAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuXHR9XG5cdDQwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoOWRlZyk7XG5cdH1cblx0NTAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxufVxuXG4ubmFtZSB7XG5cdGZvbnQtc2l6ZTogM3JlbTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Y29sb3I6ICM0ZmQxYzU7XG59XG5cbi5uYXYtYm94IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXHRnYXA6IDAuNXJlbTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdi1ib3ggaW1nIHtcblx0d2lkdGg6IDJyZW07XG5cdGhlaWdodDogYXV0bztcbn1cblxuLnNlY29uZC10ZXh0LWNvbnRhaW5lciBoNSB7XG5cdG1hcmdpbjogMDtcbn1cblxuLmZpcnN0LXRleHQtY29udGFpbmVyIGgzIHtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRtYXJnaW46IDA7XG59XG5cbi5zZWNvbmQtdGV4dC1jb250YWluZXIgaDUge1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zZWNvbmQtYmxvY2staG9tZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdHBhZGRpbmc6IDAgM3JlbTtcblx0bWFyZ2luOiAwIDVyZW07XG5cdGdhcDogNXJlbTtcbn1cblxuLnNlY29uZC1ibG9jay10ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oYWNrZXIge1xuXHR3aWR0aDogMzUlO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi50ZXh0LWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogM3JlbTtcbn1cblxuLnRleHQtZGl2IGgzIHtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRmb250LXNpemU6IDEuOXJlbTtcblx0bWFyZ2luOiAwO1xufVxuXG4uaGlnaGxpZ2h0LFxuLnRleHQtZGl2IGgzIHNwYW4ge1xuXHRjb2xvcjogIzRmZDFjNTtcbn1cblxuLnN1Yi1kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDJyZW07XG59XG5cbi5zdWItdGV4dCB7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdG1hcmdpbjogMDtcbn1cblxuLnNvY2lhbC1pY29ucyBpbWcge1xuXHR3aWR0aDogMi41cmVtO1xuXHRoZWlnaHQ6IGF1dG87XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc29jaWFsLWljb25zIGltZzpob3ZlciB7XG5cdGZpbHRlcjogaW52ZXJ0KDEpO1xuXHRib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDc5LCAyMDksIDE5NywgMC41KTtcbn1cblxuLnNvY2lhbC10ZXh0LWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC41cmVtO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc29jaWFsLXRleHQtZGl2IGgzIHtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4uc29jaWFsLXRleHQtZGl2ICoge1xuXHRtYXJnaW46IDA7XG59XG5cbi5zb2NpYWwtaWNvbnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiAycmVtO1xufVxuXG4uc29jaWFsLXN1Yi10ZXh0IHtcblx0Zm9udC1zaXplOiAwLjhyZW07XG5cdGZvbnQtd2VpZ2h0OiA1NTA7XG59XG5cbi5zb2NpYWwtYmxvY2sge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDJyZW07XG59XG5cbi5zb2NpYWwtc3ViLXRleHQgc3BhbiB7XG5cdGNvbG9yOiAjNGZkMWM1O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRm9vdGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZm9vdGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMXJlbTtcblx0aGVpZ2h0OiAyLjVyZW07XG5cdG1hcmdpbi10b3A6IDJyZW07XG5cdHBhZGRpbmc6IDAuMjVyZW0gM3JlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTtcbn1cblxuZm9vdGVyIGEge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDAuNXJlbTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmb250LXNpemU6IDEuM3JlbTtcblx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0Y29sb3I6ICNmYWZhZmE7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbmZvb3RlciBwIHtcblx0bWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuZm9vdGVyIGE6aG92ZXIsXG5mb290ZXIgYTphY3RpdmUge1xuXHRjb2xvcjogI2IwMmUzOTtcbn1cblxuZm9vdGVyIGEgaW1nIHtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG5mb290ZXIgYTpob3ZlciBpbWcsXG5mb290ZXIgYTphY3RpdmUgaW1nIHtcblx0ZmlsdGVyOiBpbnZlcnQoMSk7XG5cdGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoNzksIDIwOSwgMTk3LCAwLjUpO1xufVxuXG4uYXQtc3ltYm9sIHtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuZm9vdGVyIGltZyB7XG5cdHdpZHRoOiAycmVtO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi8qIFN0eWxlcyB0aGUgc2Nyb2xsYmFyIHRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDsgLyogQSBkYXJrZXIgc2hhZGUgZm9yIGNvbnRyYXN0ICovXG59XG5cbi8qIFN0eWxlcyB0aGUgc2Nyb2xsYmFyIGhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7IC8qIFRoZSBjb2xvciB5b3UgcHJvdmlkZWQgZm9yIHRoZSBoYW5kbGUgKi9cblx0Ym9yZGVyLXJhZGl1czogMTBweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciB0aGUgaGFuZGxlICovXG59XG5cbi8qIFN0eWxlcyB0aGUgc2Nyb2xsYmFyIGl0c2VsZiAoaW5jbHVkaW5nIHRoZSB0cmFjaykgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuXHR3aWR0aDogMTJweDsgLyogQWRqdXN0IHRvIHRoZSBzaXplIHlvdSBwcmVmZXIgKi9cbn1cblxuLyogT3B0aW9uYWw6IHN0eWxlcyB0aGUgc2Nyb2xsYmFyIGhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzYTlkOWI7IC8qIEEgc2xpZ2h0bHkgZGFya2VyIHNoYWRlIG9mIHRoZSBoYW5kbGUgY29sb3IgZm9yIGhvdmVyICovXG59XG5cbi8qIEZpcmVmb3ggKi9cbmh0bWwge1xuXHRzY3JvbGxiYXItY29sb3I6ICM0ZmQxYzUgIzJjM2U1MDtcblx0c2Nyb2xsYmFyLXdpZHRoOiB0aGluOyAvKiBZb3UgY2FuIHVzZSAnYXV0bycgb3IgJ3RoaW4nICovXG59XG5cbi5hYm91dC1wYWdlIHtcblx0cGFkZGluZzogMHJlbSAzcmVtO1xuXHRwYWRkaW5nLWJvdHRvbTogMnJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiA1cmVtO1xufVxuXG4uYWJvdXQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAycmVtO1xufVxuXG4uYWJvdXQtdGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFib3V0LW1lIHNwYW4ge1xuXHRjb2xvcjogIzRmZDFjNTtcbn1cblxuLmFib3V0LW1lLWRpdiB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hYm91dC1tZS1waWN0dXJlIHtcblx0d2lkdGg6IDc1JTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4uYWJvdXQtbWUtdGV4dC1kaXYge1xuXHRmb250LXNpemU6IDEuMXJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxcmVtO1xufVxuXG4uYWJvdXQtbWUtdGV4dDpudGgtb2YtdHlwZSgxKSB7XG5cdG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVuZCBvZiBGb290ZXIgc3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLmNhcm91c2VsLWl0ZW0gaW1nIHtcblx0d2lkdGg6IDNyZW07XG5cdGhlaWdodDogYXV0bztcbn1cblxuLnNlY29uZC1kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDNyZW07XG5cdHBhZGRpbmc6IDAgM3JlbTtcbn1cblxuLnNlY29uZC1kaXYtdGV4dCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRnYXA6IDFyZW07XG59XG5cbi5zZWNvbmQtZGl2LXRleHQgcCB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0bWFyZ2luOiAwO1xuXHRmb250LXdlaWdodDogOTAwO1xufVxuXG4uY2Fyb3VzZWwtZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0Ym9yZGVyOiAzcHggc29saWQgI2RkZGRkZDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJhY2stYnRuLFxuLmZvcndhcmQtYnRuIHtcblx0Zm9udC1zaXplOiAyLjVyZW07XG5cdGNvbG9yOiAjMTUyMDJiO1xuXHRmb250LXdlaWdodDogOTAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuXHRib3JkZXI6IG5vbmU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcm91c2VsIHtcblx0ZGlzcGxheTogZmxleDtcblx0b3ZlcmZsb3cteDogYXV0bztcblx0Z2FwOiAycmVtO1xuXHRwYWRkaW5nOiAxcmVtO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcblx0LW1zLXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHRtYXJnaW4tdG9wOiAwLjJyZW07XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xuXHRtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcblx0bWluLXdpZHRoOiA3cmVtO1xuXHRtaW4taGVpZ2h0OiAxMHJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGdhcDogMXJlbTtcblx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjE3O1xufVxuXG4uY2Fyb3VzZWwtaXRlbSBwIHtcblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdG1hcmdpbjogMDtcbn1cblxuLmNhcm91c2VsLWl0ZW1zIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGdhcDogMnJlbTtcbn1cblxuLyogU3R5bGUgdGhlIHNjcm9sbGJhciAqL1xuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhciB7XG5cdHdpZHRoOiA1cHg7IC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbGJhciAqL1xuXHRoZWlnaHQ6IDEwcHg7IC8qIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBzY3JvbGxiYXIgKi9cbn1cblxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgdGh1bWIgKi9cblx0Ym9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHRoZSBzY3JvbGxiYXIgdGh1bWIgKi9cbn1cblxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgdGh1bWIgb24gaG92ZXIgKi9cbn1cblxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIHRyYWNrICovXG59XG5cbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgY29ybmVyICovXG59XG5cbi5wcm9qZWN0LWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMnJlbTtcblx0cGFkZGluZzogMCAzcmVtO1xufVxuXG4ucHJvamVjdC1kaXYgaDEge1xuXHRjb2xvcjogIzRmZDFjNTtcbn1cblxuLnByb2plY3QtaXRlbSBpbWcge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0Z2FwOiAycmVtO1xufVxuXG4ucHJvamVjdC1pdGVtIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDJyZW07XG5cdHBhZGRpbmc6IDFyZW07XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYxNztcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbn1cblxuLnByb2plY3QtbGluay1kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDFyZW07XG59XG5cbi5wcm9qZWN0LWxpbmstZGl2IGEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiAjNGZkMWM1O1xuXHRmb250LXNpemU6IDEuNXJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Ym9yZGVyOiAxcHggc29saWQgIzRmZDFjNTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0cGFkZGluZzogMC41cmVtIDFyZW07XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5wcm9qZWN0LWxpbmstZGl2IGE6aG92ZXIge1xuXHRjb2xvcjogI2UwZTBlMDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTtcbn1cblxuLnByb2plY3QtaXRlbS1kaXYgcCB7XG5cdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuXG4vKiAuLi5leGlzdGluZyBzdHlsZXMgKi9cblxuLmhhbWJ1cmdlci1tZW51IHtcblx0ZGlzcGxheTogbm9uZTtcblx0dHJhbnNmb3JtLW9yaWdpbjogdG9wO1xufVxuXG4uaGFtYnVyZ2VyIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4KSB7XG5cdC5zdWItdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAwLjlyZW07XG5cdH1cblxuXHQuZm9vdGVyIGEge1xuXHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHR9XG5cblx0LmZpcnN0LXRleHQtY29udGFpbmVyIGgzIHtcblx0XHRmb250LXNpemU6IDEuM3JlbTtcblx0fVxuXG5cdC5zZWNvbmQtdGV4dC1jb250YWluZXIgaDUge1xuXHRcdGZvbnQtc2l6ZTogMS4zcmVtO1xuXHR9XG5cblx0Lm5hbWUge1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHR9XG5cblx0I3R5cGVkLXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMS4zcmVtO1xuXHR9XG5cblx0LnNvY2lhbC1ibG9jayB7XG5cdFx0Z2FwOiAxcmVtO1xuXHR9XG5cblx0LnNlY29uZC1ibG9jay1ob21lIHtcblx0XHRnYXA6IDNyZW07XG5cdH1cblxuXHQuY2Fyb3VzZWwge1xuXHRcdHBhZGRpbmctbGVmdDogMDtcblx0fVxuXG5cdC5jYXJvdXNlbC1pdGVtcyB7XG5cdFx0Z2FwOiAxcmVtO1xuXHR9XG5cblx0LmNhcm91c2VsLWl0ZW0ge1xuXHRcdG1pbi13aWR0aDogNC41cmVtO1xuXHRcdG1pbi1oZWlnaHQ6IDZyZW07XG5cdH1cblxuXHQuY2Fyb3VzZWwtaXRlbSBpbWcge1xuXHRcdHdpZHRoOiAycmVtO1xuXHRcdGhlaWdodDogYXV0bztcblx0fVxuXG5cdC5jYXJvdXNlbC1pdGVtIHAge1xuXHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcblx0LnNlY29uZC1ibG9jay1ob21lIHtcblx0XHRtYXJnaW46IDA7XG5cdH1cblxuXHQubG9nby1ib3ggaW1nIHtcblx0XHR3aWR0aDogMi41cmVtO1xuXHRcdGhlaWdodDogYXV0bztcblx0fVxuXG5cdC5sb2dvLWJveCBhIGgxIHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0fVxuXG5cdGRpdi5oYW1idXJnZXItbWVudS5pbmFjdGl2ZSxcblx0ZGl2LmhhbWJ1cmdlci1tZW51LmFjdGl2ZSB7XG5cdFx0bWFyZ2luLXRvcDogMS4ycmVtO1xuXHR9XG5cblx0Lm1haW4tY29udGFpbmVyIHtcblx0XHRnYXA6IDFyZW07XG5cdH1cblxuXHQudGV4dC1kaXYge1xuXHRcdGdhcDogMXJlbTtcblx0fVxuXG5cdC50ZXh0LWRpdiBoMyB7XG5cdFx0Zm9udC1zaXplOiAxLjI1cmVtO1xuXHR9XG5cblx0LmFib3V0LWNvbnRhaW5lciB7XG5cdFx0Z2FwOiAwcmVtO1xuXHR9XG5cblx0LmFib3V0LW1lLWRpdiB7XG5cdFx0Z2FwOiAxcmVtO1xuXHR9XG5cblx0LnNlY29uZC1kaXYtdGV4dCBwIHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHQuc2Vjb25kLWRpdiB7XG5cdFx0cGFkZGluZzogMHJlbTtcblx0fVxuXG5cdC5wcm9qZWN0LWl0ZW0ge1xuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXHRcdGdhcDogMHJlbTtcblx0fVxuXG5cdC5wcm9qZWN0LWxpbmstZGl2IHtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcblx0LmhhbWJ1cmdlciB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cblxuXHQuaGFtYnVyZ2VyIGltZyB7XG5cdFx0d2lkdGg6IDJyZW07XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHR9XG5cblx0LmhhbWJ1cmdlciBpbWc6aG92ZXIge1xuXHRcdGZpbHRlcjogYnJpZ2h0bmVzcygzKTtcblx0fVxuXG5cdC5uYXYtYm94IHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG5cblx0LmxvZy1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRnYXA6IDFyZW07XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cblx0LmhhbWJ1cmdlci1tZW51LmFjdGl2ZSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0ei1pbmRleDogOTk5O1xuXHRcdGFuaW1hdGlvbjogZXhwYW5kIDUwMG1zIGVhc2UtaW4tb3V0O1xuXHRcdG1hcmdpbi10b3A6IDJyZW07XG5cdFx0Z2FwOiAxcmVtO1xuXHRcdHBhZGRpbmctdG9wOiAxcmVtO1xuXHRcdC8qIGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbi10b3A6IDIuNXJlbTtcblx0XHRnYXA6IDFyZW07ICovXG5cdH1cblxuXHRAa2V5ZnJhbWVzIGV4cGFuZCB7XG5cdFx0MCUge1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZVkoMCk7XG5cdFx0fVxuXG5cdFx0NzAlIHtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGVZKDEuMSk7XG5cdFx0fVxuXG5cdFx0MTAwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlWSgxKTtcblx0XHR9XG5cdH1cblxuXHQuaW5hY3RpdmUge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1O1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHotaW5kZXg6IDk5OTtcblx0XHRhbmltYXRpb246IGNvbGxhcHNlIDAuNXMgZm9yd2FyZHM7XG5cdFx0bWFyZ2luLXRvcDogMnJlbTtcblx0XHRnYXA6IDFyZW07XG5cdFx0cGFkZGluZy10b3A6IDFyZW07XG5cdH1cblxuXHQvKiAuaW5hY3RpdmUge1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdHRyYW5zZm9ybTogc2NhbGVZKDApO1xuXHRcdHRyYW5zaXRpb246XG5cdFx0XHR0cmFuc2Zvcm0gMC41cyxcblx0XHRcdG9wYWNpdHkgMC41cyxcblx0XHRcdHZpc2liaWxpdHkgMHMgMHM7XG5cdH0gKi9cblxuXHRAa2V5ZnJhbWVzIGNvbGxhcHNlIHtcblx0XHQwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlWSgxKTtcblx0XHR9XG5cdFx0NzAlIHtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGVZKDEuMSk7XG5cdFx0fVxuXHRcdDEwMCUge1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZVkoMCk7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdH1cblx0fVxuXG5cdC5oYW1idXJnZXItbWVudSBhIHtcblx0XHRib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjZTBlMGUwO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdC5oYW1idXJnZXItbWVudSBhOm50aC1vZi10eXBlKDQpIHtcblx0XHRib3JkZXItYm90dG9tOiBub25lO1xuXHR9XG5cblx0LmhhbWJ1cmdlci1tZW51IGEge1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRcdHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG5cdH1cblxuXHQuZmlyc3QtdGV4dC1jb250YWluZXIgaDMge1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHR9XG5cblx0Lm5hbWUge1xuXHRcdGZvbnQtc2l6ZTogMnJlbTtcblx0fVxuXG5cdCN0eXBlZC10ZXh0IHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0fVxuXG5cdC5zZWNvbmQtYmxvY2stdGV4dC1jb250YWluZXIge1xuXHRcdGdhcDogM3JlbTtcblx0fVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIseURBQTRDO0NBQzVDLG1D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OztDQUVBO0VBQ0M7R0FDQyxvQkFBb0I7RUFDckI7O0VBRUE7R0FDQyxzQkFBc0I7RUFDdkI7O0VBRUE7R0FDQyxvQkFBb0I7RUFDckI7Q0FDRDs7Q0FFQTtFQUNDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsaUJBQWlCO0NBQ2xCOztDQUVBOzs7Ozs7OztJQVFHOztDQUVIO0VBQ0M7R0FDQyxvQkFBb0I7RUFDckI7RUFDQTtHQUNDLHNCQUFzQjtFQUN2QjtFQUNBO0dBQ0Msb0JBQW9CO0dBQ3BCLGFBQWE7RUFDZDtDQUNEOztDQUVBO0VBQ0Msa0NBQWtDO0VBQ2xDLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGlCQUFpQjtFQUNqQixzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsU0FBUztDQUNWO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuXFx0Y29sb3I6ICNlMGUwZTA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2JhY2tncm91bmQuanBnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmRpdiNjb250ZW50IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uYXYtYmFyIHtcXG5cXHRwb3NpdGlvbjogc3RpY2t5O1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMS41cmVtIDNyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG5cXHR6LWluZGV4OiA5OTk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIE5vIGJhY2tncm91bmQgaW5pdGlhbGx5ICovXFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDApOyAvKiBObyBibHVyIGluaXRpYWxseSAqL1xcblxcdGJveC1zaGFkb3c6XFxuXFx0XFx0MCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxcblxcdFxcdDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxufVxcblxcbi5uYXYtYmFyLXNjcm9sbGVkIHtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7IC8qIEFkanVzdCB0aGUgYmx1ciB2YWx1ZSBhcyBuZWVkZWQgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcblxcdFxcdDc5LFxcblxcdFxcdDIwOSxcXG5cXHRcXHQxOTcsXFxuXFx0XFx0MC4xNVxcblxcdCk7IC8qIFJHQkEgY29sb3IgZm9yIHRyYW5zbHVjZW50IHRlYWwgKi9cXG59XFxuXFxuLmxvZ28tYm94IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4ubG9nby1ib3ggaW1nIHtcXG5cXHR3aWR0aDogM3JlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lcjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9nby1ib3ggYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lcjpob3ZlcjphZnRlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5sb2ctY29udGFpbmVyOmhvdmVyIC5sb2dvLWJveCBhIGgxIHtcXG5cXHRjb2xvcjogI2ZmZmZmZmZmO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lcjpob3ZlciAubG9nby1ib3ggaW1nIHtcXG5cXHRmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XFxufVxcblxcbi5sb2ctY29udGFpbmVyOmFmdGVyIHtcXG5cXHRiYWNrZ3JvdW5kOiAjNGZkMWM1O1xcblxcdGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuXFx0Ym90dG9tOiAxcHg7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0aGVpZ2h0OiA1cHg7XFxuXFx0bGVmdDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XFxuXFx0d2lkdGg6IDA7XFxuXFx0ei1pbmRleDogLTE7XFxufVxcblxcbi5sb2dvLWJveCBhIGgxIHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2LWxpbmtzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG5cXG4ubmF2LWxpbmtzIGEge1xcblxcdGNvbG9yOiAjZTBlMGUwO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubmF2LWxpbmtzIGE6aG92ZXIge1xcblxcdGNvbG9yOiAjZmZmZmZmZmY7XFxufVxcblxcbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciBhIHtcXG5cXHRjb2xvcjogI2ZmZmZmZmZmO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyIGltZyB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDMpO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyOmFmdGVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hdi1saW5rcyAubmF2LWJveCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94OmFmdGVyIHtcXG5cXHRiYWNrZ3JvdW5kOiAjNGZkMWM1O1xcblxcdGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuXFx0Ym90dG9tOiAtNXB4O1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGhlaWdodDogNXB4O1xcblxcdGxlZnQ6IDA7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xcblxcdHdpZHRoOiAwO1xcblxcdHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDdyZW07XFxufVxcblxcbi5maXJzdC1ibG9jay1ob21lIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcblxcdHBhZGRpbmc6IDAgM3JlbTtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi50ZXh0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc3ViLXRleHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG5cXHR3aWR0aDogNzUlO1xcbn1cXG5cXG4uY29tcHV0ZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLmZpcnN0LXRleHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4udHlwZWQtdGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDJyZW07XFxufVxcblxcbiN0eXBlZC10ZXh0IHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLnR5cGVkLWN1cnNvciB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxuXFx0YW5pbWF0aW9uOiBibGluayAwLjdzIGluZmluaXRlO1xcbn1cXG5cXG4ubmF2LWJveCB7XFxuXFx0cGFkZGluZzogMC4yNXJlbSAwcmVtO1xcbn1cXG5cXG4ud2F2ZSB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdGFuaW1hdGlvbi1uYW1lOiB3YXZlLWFuaW1hdGlvbjtcXG5cXHRhbmltYXRpb24tZHVyYXRpb246IDIuNXM7XFxuXFx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogNzAlIDcwJTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcblxcbkBrZXlmcmFtZXMgd2F2ZS1hbmltYXRpb24ge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFx0MTAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcblxcdH1cXG5cXHQyMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDEyZGVnKTtcXG5cXHR9XFxuXFx0MzAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcblxcdH1cXG5cXHQ0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDlkZWcpO1xcblxcdH1cXG5cXHQ1MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxufVxcblxcbi5uYW1lIHtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLm5hdi1ib3gge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcblxcdGdhcDogMC41cmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYm94IGltZyB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2Vjb25kLXRleHQtY29udGFpbmVyIGg1IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5maXJzdC10ZXh0LWNvbnRhaW5lciBoMyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uc2Vjb25kLXRleHQtY29udGFpbmVyIGg1IHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNlY29uZC1ibG9jay1ob21lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogMCAzcmVtO1xcblxcdG1hcmdpbjogMCA1cmVtO1xcblxcdGdhcDogNXJlbTtcXG59XFxuXFxuLnNlY29uZC1ibG9jay10ZXh0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhhY2tlciB7XFxuXFx0d2lkdGg6IDM1JTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi50ZXh0LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogM3JlbTtcXG59XFxuXFxuLnRleHQtZGl2IGgzIHtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjlyZW07XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uaGlnaGxpZ2h0LFxcbi50ZXh0LWRpdiBoMyBzcGFuIHtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLnN1Yi1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDJyZW07XFxufVxcblxcbi5zdWItdGV4dCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5zb2NpYWwtaWNvbnMgaW1nIHtcXG5cXHR3aWR0aDogMi41cmVtO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zb2NpYWwtaWNvbnMgaW1nOmhvdmVyIHtcXG5cXHRmaWx0ZXI6IGludmVydCgxKTtcXG5cXHRib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDc5LCAyMDksIDE5NywgMC41KTtcXG59XFxuXFxuLnNvY2lhbC10ZXh0LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMC41cmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zb2NpYWwtdGV4dC1kaXYgaDMge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc29jaWFsLXRleHQtZGl2ICoge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnNvY2lhbC1pY29ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLnNvY2lhbC1zdWItdGV4dCB7XFxuXFx0Zm9udC1zaXplOiAwLjhyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDU1MDtcXG59XFxuXFxuLnNvY2lhbC1ibG9jayB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLnNvY2lhbC1zdWItdGV4dCBzcGFuIHtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZvb3RlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGhlaWdodDogMi41cmVtO1xcblxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0cGFkZGluZzogMC4yNXJlbSAzcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbmZvb3RlciBhIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0Y29sb3I6ICNmYWZhZmE7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuZm9vdGVyIHAge1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyLFxcbmZvb3RlciBhOmFjdGl2ZSB7XFxuXFx0Y29sb3I6ICNiMDJlMzk7XFxufVxcblxcbmZvb3RlciBhIGltZyB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIGltZyxcXG5mb290ZXIgYTphY3RpdmUgaW1nIHtcXG5cXHRmaWx0ZXI6IGludmVydCgxKTtcXG5cXHRib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDc5LCAyMDksIDE5NywgMC41KTtcXG59XFxuXFxuLmF0LXN5bWJvbCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBTdHlsZXMgdGhlIHNjcm9sbGJhciB0cmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7IC8qIEEgZGFya2VyIHNoYWRlIGZvciBjb250cmFzdCAqL1xcbn1cXG5cXG4vKiBTdHlsZXMgdGhlIHNjcm9sbGJhciBoYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1OyAvKiBUaGUgY29sb3IgeW91IHByb3ZpZGVkIGZvciB0aGUgaGFuZGxlICovXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciB0aGUgaGFuZGxlICovXFxufVxcblxcbi8qIFN0eWxlcyB0aGUgc2Nyb2xsYmFyIGl0c2VsZiAoaW5jbHVkaW5nIHRoZSB0cmFjaykgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5cXHR3aWR0aDogMTJweDsgLyogQWRqdXN0IHRvIHRoZSBzaXplIHlvdSBwcmVmZXIgKi9cXG59XFxuXFxuLyogT3B0aW9uYWw6IHN0eWxlcyB0aGUgc2Nyb2xsYmFyIGhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzYTlkOWI7IC8qIEEgc2xpZ2h0bHkgZGFya2VyIHNoYWRlIG9mIHRoZSBoYW5kbGUgY29sb3IgZm9yIGhvdmVyICovXFxufVxcblxcbi8qIEZpcmVmb3ggKi9cXG5odG1sIHtcXG5cXHRzY3JvbGxiYXItY29sb3I6ICM0ZmQxYzUgIzJjM2U1MDtcXG5cXHRzY3JvbGxiYXItd2lkdGg6IHRoaW47IC8qIFlvdSBjYW4gdXNlICdhdXRvJyBvciAndGhpbicgKi9cXG59XFxuXFxuLmFib3V0LXBhZ2Uge1xcblxcdHBhZGRpbmc6IDByZW0gM3JlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiA1cmVtO1xcbn1cXG5cXG4uYWJvdXQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG5cXG4uYWJvdXQtdGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hYm91dC1tZSBzcGFuIHtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLmFib3V0LW1lLWRpdiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hYm91dC1tZS1waWN0dXJlIHtcXG5cXHR3aWR0aDogNzUlO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLmFib3V0LW1lLXRleHQtZGl2IHtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4uYWJvdXQtbWUtdGV4dDpudGgtb2YtdHlwZSgxKSB7XFxuXFx0bWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRW5kIG9mIEZvb3RlciBzdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5jYXJvdXNlbC1pdGVtIGltZyB7XFxuXFx0d2lkdGg6IDNyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2Vjb25kLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogM3JlbTtcXG5cXHRwYWRkaW5nOiAwIDNyZW07XFxufVxcblxcbi5zZWNvbmQtZGl2LXRleHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4uc2Vjb25kLWRpdi10ZXh0IHAge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmNhcm91c2VsLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCAjZGRkZGRkO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5iYWNrLWJ0bixcXG4uZm9yd2FyZC1idG4ge1xcblxcdGZvbnQtc2l6ZTogMi41cmVtO1xcblxcdGNvbG9yOiAjMTUyMDJiO1xcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2Fyb3VzZWwge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG5cXHRnYXA6IDJyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHQtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHRtYXJnaW4tdG9wOiAwLjJyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uY2Fyb3VzZWwtaXRlbSB7XFxuXFx0bWluLXdpZHRoOiA3cmVtO1xcblxcdG1pbi1oZWlnaHQ6IDEwcmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHQtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjE3O1xcbn1cXG5cXG4uY2Fyb3VzZWwtaXRlbSBwIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5jYXJvdXNlbC1pdGVtcyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLyogU3R5bGUgdGhlIHNjcm9sbGJhciAqL1xcbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiA1cHg7IC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbGJhciAqL1xcblxcdGhlaWdodDogMTBweDsgLyogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIHNjcm9sbGJhciAqL1xcbn1cXG5cXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIHRodW1iICovXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHRoZSBzY3JvbGxiYXIgdGh1bWIgKi9cXG59XFxuXFxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0aHVtYiBvbiBob3ZlciAqL1xcbn1cXG5cXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0cmFjayAqL1xcbn1cXG5cXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgY29ybmVyICovXFxufVxcblxcbi5wcm9qZWN0LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMnJlbTtcXG5cXHRwYWRkaW5nOiAwIDNyZW07XFxufVxcblxcbi5wcm9qZWN0LWRpdiBoMSB7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gaW1nIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDJyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYxNztcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWxpbmstZGl2IGEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICM0ZmQxYzU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rLWRpdiBhOmhvdmVyIHtcXG5cXHRjb2xvcjogI2UwZTBlMDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0tZGl2IHAge1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi8qIC4uLmV4aXN0aW5nIHN0eWxlcyAqL1xcblxcbi5oYW1idXJnZXItbWVudSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxufVxcblxcbi5oYW1idXJnZXIge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAzOTBweCkge1xcblxcdC5zdWItdGV4dCB7XFxuXFx0XFx0Zm9udC1zaXplOiAwLjlyZW07XFxuXFx0fVxcblxcblxcdC5mb290ZXIgYSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0fVxcblxcblxcdC5maXJzdC10ZXh0LWNvbnRhaW5lciBoMyB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjNyZW07XFxuXFx0fVxcblxcblxcdC5zZWNvbmQtdGV4dC1jb250YWluZXIgaDUge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdH1cXG5cXG5cXHQubmFtZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0fVxcblxcblxcdCN0eXBlZC10ZXh0IHtcXG5cXHRcXHRmb250LXNpemU6IDEuM3JlbTtcXG5cXHR9XFxuXFxuXFx0LnNvY2lhbC1ibG9jayB7XFxuXFx0XFx0Z2FwOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQuc2Vjb25kLWJsb2NrLWhvbWUge1xcblxcdFxcdGdhcDogM3JlbTtcXG5cXHR9XFxuXFxuXFx0LmNhcm91c2VsIHtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDA7XFxuXFx0fVxcblxcblxcdC5jYXJvdXNlbC1pdGVtcyB7XFxuXFx0XFx0Z2FwOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQuY2Fyb3VzZWwtaXRlbSB7XFxuXFx0XFx0bWluLXdpZHRoOiA0LjVyZW07XFxuXFx0XFx0bWluLWhlaWdodDogNnJlbTtcXG5cXHR9XFxuXFxuXFx0LmNhcm91c2VsLWl0ZW0gaW1nIHtcXG5cXHRcXHR3aWR0aDogMnJlbTtcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0fVxcblxcblxcdC5jYXJvdXNlbC1pdGVtIHAge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcblxcdC5zZWNvbmQtYmxvY2staG9tZSB7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdH1cXG5cXG5cXHQubG9nby1ib3ggaW1nIHtcXG5cXHRcXHR3aWR0aDogMi41cmVtO1xcblxcdFxcdGhlaWdodDogYXV0bztcXG5cXHR9XFxuXFxuXFx0LmxvZ28tYm94IGEgaDEge1xcblxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdH1cXG5cXG5cXHRkaXYuaGFtYnVyZ2VyLW1lbnUuaW5hY3RpdmUsXFxuXFx0ZGl2LmhhbWJ1cmdlci1tZW51LmFjdGl2ZSB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMS4ycmVtO1xcblxcdH1cXG5cXG5cXHQubWFpbi1jb250YWluZXIge1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LnRleHQtZGl2IHtcXG5cXHRcXHRnYXA6IDFyZW07XFxuXFx0fVxcblxcblxcdC50ZXh0LWRpdiBoMyB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjI1cmVtO1xcblxcdH1cXG5cXG5cXHQuYWJvdXQtY29udGFpbmVyIHtcXG5cXHRcXHRnYXA6IDByZW07XFxuXFx0fVxcblxcblxcdC5hYm91dC1tZS1kaXYge1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LnNlY29uZC1kaXYtdGV4dCBwIHtcXG5cXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcblxcdC5zZWNvbmQtZGl2IHtcXG5cXHRcXHRwYWRkaW5nOiAwcmVtO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdC1pdGVtIHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG5cXHRcXHRnYXA6IDByZW07XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWxpbmstZGl2IHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xcblxcdC5oYW1idXJnZXIge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyIGltZyB7XFxuXFx0XFx0d2lkdGg6IDJyZW07XFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyIGltZzpob3ZlciB7XFxuXFx0XFx0ZmlsdGVyOiBicmlnaHRuZXNzKDMpO1xcblxcdH1cXG5cXG5cXHQubmF2LWJveCB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LmxvZy1jb250YWluZXIge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IDFyZW07XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyLW1lbnUuYWN0aXZlIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTtcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0XFx0bGVmdDogMDtcXG5cXHRcXHRyaWdodDogMDtcXG5cXHRcXHR6LWluZGV4OiA5OTk7XFxuXFx0XFx0YW5pbWF0aW9uOiBleHBhbmQgNTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFx0XFx0bWFyZ2luLXRvcDogMnJlbTtcXG5cXHRcXHRnYXA6IDFyZW07XFxuXFx0XFx0cGFkZGluZy10b3A6IDFyZW07XFxuXFx0XFx0LyogZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0bWFyZ2luLXRvcDogMi41cmVtO1xcblxcdFxcdGdhcDogMXJlbTsgKi9cXG5cXHR9XFxuXFxuXFx0QGtleWZyYW1lcyBleHBhbmQge1xcblxcdFxcdDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0NzAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgxLjEpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQxMDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC5pbmFjdGl2ZSB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7XFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0cmlnaHQ6IDA7XFxuXFx0XFx0ei1pbmRleDogOTk5O1xcblxcdFxcdGFuaW1hdGlvbjogY29sbGFwc2UgMC41cyBmb3J3YXJkcztcXG5cXHRcXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHRcXHRwYWRkaW5nLXRvcDogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LyogLmluYWN0aXZlIHtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdFxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG5cXHRcXHR0cmFuc2l0aW9uOlxcblxcdFxcdFxcdHRyYW5zZm9ybSAwLjVzLFxcblxcdFxcdFxcdG9wYWNpdHkgMC41cyxcXG5cXHRcXHRcXHR2aXNpYmlsaXR5IDBzIDBzO1xcblxcdH0gKi9cXG5cXG5cXHRAa2V5ZnJhbWVzIGNvbGxhcHNlIHtcXG5cXHRcXHQwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuXFx0XFx0fVxcblxcdFxcdDcwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZVkoMS4xKTtcXG5cXHRcXHR9XFxuXFx0XFx0MTAwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC5oYW1idXJnZXItbWVudSBhIHtcXG5cXHRcXHRib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjZTBlMGUwO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFxuXFx0LmhhbWJ1cmdlci1tZW51IGE6bnRoLW9mLXR5cGUoNCkge1xcblxcdFxcdGJvcmRlci1ib3R0b206IG5vbmU7XFxuXFx0fVxcblxcblxcdC5oYW1idXJnZXItbWVudSBhIHtcXG5cXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcblxcdH1cXG5cXG5cXHQuZmlyc3QtdGV4dC1jb250YWluZXIgaDMge1xcblxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdH1cXG5cXG5cXHQubmFtZSB7XFxuXFx0XFx0Zm9udC1zaXplOiAycmVtO1xcblxcdH1cXG5cXG5cXHQjdHlwZWQtdGV4dCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0fVxcblxcblxcdC5zZWNvbmQtYmxvY2stdGV4dC1jb250YWluZXIge1xcblxcdFxcdGdhcDogM3JlbTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiB0KCl7cmV0dXJuIHQ9T2JqZWN0LmFzc2lnbj9PYmplY3QuYXNzaWduLmJpbmQoKTpmdW5jdGlvbih0KXtmb3IodmFyIHM9MTtzPGFyZ3VtZW50cy5sZW5ndGg7cysrKXt2YXIgZT1hcmd1bWVudHNbc107Zm9yKHZhciBuIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbikmJih0W25dPWVbbl0pfXJldHVybiB0fSx0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgcz17c3RyaW5nczpbXCJUaGVzZSBhcmUgdGhlIGRlZmF1bHQgdmFsdWVzLi4uXCIsXCJZb3Uga25vdyB3aGF0IHlvdSBzaG91bGQgZG8/XCIsXCJVc2UgeW91ciBvd24hXCIsXCJIYXZlIGEgZ3JlYXQgZGF5IVwiXSxzdHJpbmdzRWxlbWVudDpudWxsLHR5cGVTcGVlZDowLHN0YXJ0RGVsYXk6MCxiYWNrU3BlZWQ6MCxzbWFydEJhY2tzcGFjZTohMCxzaHVmZmxlOiExLGJhY2tEZWxheTo3MDAsZmFkZU91dDohMSxmYWRlT3V0Q2xhc3M6XCJ0eXBlZC1mYWRlLW91dFwiLGZhZGVPdXREZWxheTo1MDAsbG9vcDohMSxsb29wQ291bnQ6SW5maW5pdHksc2hvd0N1cnNvcjohMCxjdXJzb3JDaGFyOlwifFwiLGF1dG9JbnNlcnRDc3M6ITAsYXR0cjpudWxsLGJpbmRJbnB1dEZvY3VzRXZlbnRzOiExLGNvbnRlbnRUeXBlOlwiaHRtbFwiLG9uQmVnaW46ZnVuY3Rpb24odCl7fSxvbkNvbXBsZXRlOmZ1bmN0aW9uKHQpe30scHJlU3RyaW5nVHlwZWQ6ZnVuY3Rpb24odCxzKXt9LG9uU3RyaW5nVHlwZWQ6ZnVuY3Rpb24odCxzKXt9LG9uTGFzdFN0cmluZ0JhY2tzcGFjZWQ6ZnVuY3Rpb24odCl7fSxvblR5cGluZ1BhdXNlZDpmdW5jdGlvbih0LHMpe30sb25UeXBpbmdSZXN1bWVkOmZ1bmN0aW9uKHQscyl7fSxvblJlc2V0OmZ1bmN0aW9uKHQpe30sb25TdG9wOmZ1bmN0aW9uKHQscyl7fSxvblN0YXJ0OmZ1bmN0aW9uKHQscyl7fSxvbkRlc3Ryb3k6ZnVuY3Rpb24odCl7fX0sZT1uZXcoLyojX19QVVJFX18qL2Z1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe312YXIgbj1lLnByb3RvdHlwZTtyZXR1cm4gbi5sb2FkPWZ1bmN0aW9uKGUsbixpKXtpZihlLmVsPVwic3RyaW5nXCI9PXR5cGVvZiBpP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaSk6aSxlLm9wdGlvbnM9dCh7fSxzLG4pLGUuaXNJbnB1dD1cImlucHV0XCI9PT1lLmVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSxlLmF0dHI9ZS5vcHRpb25zLmF0dHIsZS5iaW5kSW5wdXRGb2N1c0V2ZW50cz1lLm9wdGlvbnMuYmluZElucHV0Rm9jdXNFdmVudHMsZS5zaG93Q3Vyc29yPSFlLmlzSW5wdXQmJmUub3B0aW9ucy5zaG93Q3Vyc29yLGUuY3Vyc29yQ2hhcj1lLm9wdGlvbnMuY3Vyc29yQ2hhcixlLmN1cnNvckJsaW5raW5nPSEwLGUuZWxDb250ZW50PWUuYXR0cj9lLmVsLmdldEF0dHJpYnV0ZShlLmF0dHIpOmUuZWwudGV4dENvbnRlbnQsZS5jb250ZW50VHlwZT1lLm9wdGlvbnMuY29udGVudFR5cGUsZS50eXBlU3BlZWQ9ZS5vcHRpb25zLnR5cGVTcGVlZCxlLnN0YXJ0RGVsYXk9ZS5vcHRpb25zLnN0YXJ0RGVsYXksZS5iYWNrU3BlZWQ9ZS5vcHRpb25zLmJhY2tTcGVlZCxlLnNtYXJ0QmFja3NwYWNlPWUub3B0aW9ucy5zbWFydEJhY2tzcGFjZSxlLmJhY2tEZWxheT1lLm9wdGlvbnMuYmFja0RlbGF5LGUuZmFkZU91dD1lLm9wdGlvbnMuZmFkZU91dCxlLmZhZGVPdXRDbGFzcz1lLm9wdGlvbnMuZmFkZU91dENsYXNzLGUuZmFkZU91dERlbGF5PWUub3B0aW9ucy5mYWRlT3V0RGVsYXksZS5pc1BhdXNlZD0hMSxlLnN0cmluZ3M9ZS5vcHRpb25zLnN0cmluZ3MubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0LnRyaW0oKX0pLGUuc3RyaW5nc0VsZW1lbnQ9XCJzdHJpbmdcIj09dHlwZW9mIGUub3B0aW9ucy5zdHJpbmdzRWxlbWVudD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUub3B0aW9ucy5zdHJpbmdzRWxlbWVudCk6ZS5vcHRpb25zLnN0cmluZ3NFbGVtZW50LGUuc3RyaW5nc0VsZW1lbnQpe2Uuc3RyaW5ncz1bXSxlLnN0cmluZ3NFbGVtZW50LnN0eWxlLmNzc1RleHQ9XCJjbGlwOiByZWN0KDAgMCAwIDApO2NsaXAtcGF0aDppbnNldCg1MCUpO2hlaWdodDoxcHg7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3doaXRlLXNwYWNlOm5vd3JhcDt3aWR0aDoxcHg7XCI7dmFyIHI9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGUuc3RyaW5nc0VsZW1lbnQuY2hpbGRyZW4pLG89ci5sZW5ndGg7aWYobylmb3IodmFyIGE9MDthPG87YSs9MSllLnN0cmluZ3MucHVzaChyW2FdLmlubmVySFRNTC50cmltKCkpfWZvcih2YXIgdSBpbiBlLnN0clBvcz0wLGUuY3VycmVudEVsQ29udGVudD10aGlzLmdldEN1cnJlbnRFbENvbnRlbnQoZSksZS5jdXJyZW50RWxDb250ZW50JiZlLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoPjAmJihlLnN0clBvcz1lLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoLTEsZS5zdHJpbmdzLnVuc2hpZnQoZS5jdXJyZW50RWxDb250ZW50KSksZS5zZXF1ZW5jZT1bXSxlLnN0cmluZ3MpZS5zZXF1ZW5jZVt1XT11O2UuYXJyYXlQb3M9MCxlLnN0b3BOdW09MCxlLmxvb3A9ZS5vcHRpb25zLmxvb3AsZS5sb29wQ291bnQ9ZS5vcHRpb25zLmxvb3BDb3VudCxlLmN1ckxvb3A9MCxlLnNodWZmbGU9ZS5vcHRpb25zLnNodWZmbGUsZS5wYXVzZT17c3RhdHVzOiExLHR5cGV3cml0ZTohMCxjdXJTdHJpbmc6XCJcIixjdXJTdHJQb3M6MH0sZS50eXBpbmdDb21wbGV0ZT0hMSxlLmF1dG9JbnNlcnRDc3M9ZS5vcHRpb25zLmF1dG9JbnNlcnRDc3MsZS5hdXRvSW5zZXJ0Q3NzJiYodGhpcy5hcHBlbmRDdXJzb3JBbmltYXRpb25Dc3MoZSksdGhpcy5hcHBlbmRGYWRlT3V0QW5pbWF0aW9uQ3NzKGUpKX0sbi5nZXRDdXJyZW50RWxDb250ZW50PWZ1bmN0aW9uKHQpe3JldHVybiB0LmF0dHI/dC5lbC5nZXRBdHRyaWJ1dGUodC5hdHRyKTp0LmlzSW5wdXQ/dC5lbC52YWx1ZTpcImh0bWxcIj09PXQuY29udGVudFR5cGU/dC5lbC5pbm5lckhUTUw6dC5lbC50ZXh0Q29udGVudH0sbi5hcHBlbmRDdXJzb3JBbmltYXRpb25Dc3M9ZnVuY3Rpb24odCl7dmFyIHM9XCJkYXRhLXR5cGVkLWpzLWN1cnNvci1jc3NcIjtpZih0LnNob3dDdXJzb3ImJiFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW1wiK3MrXCJdXCIpKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7ZS5zZXRBdHRyaWJ1dGUocyxcInRydWVcIiksZS5pbm5lckhUTUw9XCJcXG4gICAgICAgIC50eXBlZC1jdXJzb3J7XFxuICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgICAgICAudHlwZWQtY3Vyc29yLnR5cGVkLWN1cnNvci0tYmxpbmt7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgfVxcbiAgICAgICAgQGtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxcbiAgICAgICAgfVxcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHR5cGVkanNCbGlua3tcXG4gICAgICAgICAgMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxcbiAgICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgfVxcbiAgICAgIFwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZSl9fSxuLmFwcGVuZEZhZGVPdXRBbmltYXRpb25Dc3M9ZnVuY3Rpb24odCl7dmFyIHM9XCJkYXRhLXR5cGVkLWZhZGVvdXQtanMtY3NzXCI7aWYodC5mYWRlT3V0JiYhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltcIitzK1wiXVwiKSl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2Uuc2V0QXR0cmlidXRlKHMsXCJ0cnVlXCIpLGUuaW5uZXJIVE1MPVwiXFxuICAgICAgICAudHlwZWQtZmFkZS1vdXR7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cztcXG4gICAgICAgIH1cXG4gICAgICAgIC50eXBlZC1jdXJzb3IudHlwZWQtY3Vyc29yLS1ibGluay50eXBlZC1mYWRlLW91dHtcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDA7XFxuICAgICAgICAgIGFuaW1hdGlvbjogMDtcXG4gICAgICAgIH1cXG4gICAgICBcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpfX0sZX0oKSksbj1uZXcoLyojX19QVVJFX18qL2Z1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe312YXIgcz10LnByb3RvdHlwZTtyZXR1cm4gcy50eXBlSHRtbENoYXJzPWZ1bmN0aW9uKHQscyxlKXtpZihcImh0bWxcIiE9PWUuY29udGVudFR5cGUpcmV0dXJuIHM7dmFyIG49dC5zdWJzdHJpbmcocykuY2hhckF0KDApO2lmKFwiPFwiPT09bnx8XCImXCI9PT1uKXt2YXIgaTtmb3IoaT1cIjxcIj09PW4/XCI+XCI6XCI7XCI7dC5zdWJzdHJpbmcocysxKS5jaGFyQXQoMCkhPT1pJiYhKDErICsrcz50Lmxlbmd0aCk7KTtzKyt9cmV0dXJuIHN9LHMuYmFja1NwYWNlSHRtbENoYXJzPWZ1bmN0aW9uKHQscyxlKXtpZihcImh0bWxcIiE9PWUuY29udGVudFR5cGUpcmV0dXJuIHM7dmFyIG49dC5zdWJzdHJpbmcocykuY2hhckF0KDApO2lmKFwiPlwiPT09bnx8XCI7XCI9PT1uKXt2YXIgaTtmb3IoaT1cIj5cIj09PW4/XCI8XCI6XCImXCI7dC5zdWJzdHJpbmcocy0xKS5jaGFyQXQoMCkhPT1pJiYhKC0tczwwKTspO3MtLX1yZXR1cm4gc30sdH0oKSksaT0vKiNfX1BVUkVfXyovZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQscyl7ZS5sb2FkKHRoaXMscyx0KSx0aGlzLmJlZ2luKCl9dmFyIHM9dC5wcm90b3R5cGU7cmV0dXJuIHMudG9nZ2xlPWZ1bmN0aW9uKCl7dGhpcy5wYXVzZS5zdGF0dXM/dGhpcy5zdGFydCgpOnRoaXMuc3RvcCgpfSxzLnN0b3A9ZnVuY3Rpb24oKXt0aGlzLnR5cGluZ0NvbXBsZXRlfHx0aGlzLnBhdXNlLnN0YXR1c3x8KHRoaXMudG9nZ2xlQmxpbmtpbmcoITApLHRoaXMucGF1c2Uuc3RhdHVzPSEwLHRoaXMub3B0aW9ucy5vblN0b3AodGhpcy5hcnJheVBvcyx0aGlzKSl9LHMuc3RhcnQ9ZnVuY3Rpb24oKXt0aGlzLnR5cGluZ0NvbXBsZXRlfHx0aGlzLnBhdXNlLnN0YXR1cyYmKHRoaXMucGF1c2Uuc3RhdHVzPSExLHRoaXMucGF1c2UudHlwZXdyaXRlP3RoaXMudHlwZXdyaXRlKHRoaXMucGF1c2UuY3VyU3RyaW5nLHRoaXMucGF1c2UuY3VyU3RyUG9zKTp0aGlzLmJhY2tzcGFjZSh0aGlzLnBhdXNlLmN1clN0cmluZyx0aGlzLnBhdXNlLmN1clN0clBvcyksdGhpcy5vcHRpb25zLm9uU3RhcnQodGhpcy5hcnJheVBvcyx0aGlzKSl9LHMuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMucmVzZXQoITEpLHRoaXMub3B0aW9ucy5vbkRlc3Ryb3kodGhpcyl9LHMucmVzZXQ9ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9ITApLGNsZWFySW50ZXJ2YWwodGhpcy50aW1lb3V0KSx0aGlzLnJlcGxhY2VUZXh0KFwiXCIpLHRoaXMuY3Vyc29yJiZ0aGlzLmN1cnNvci5wYXJlbnROb2RlJiYodGhpcy5jdXJzb3IucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmN1cnNvciksdGhpcy5jdXJzb3I9bnVsbCksdGhpcy5zdHJQb3M9MCx0aGlzLmFycmF5UG9zPTAsdGhpcy5jdXJMb29wPTAsdCYmKHRoaXMuaW5zZXJ0Q3Vyc29yKCksdGhpcy5vcHRpb25zLm9uUmVzZXQodGhpcyksdGhpcy5iZWdpbigpKX0scy5iZWdpbj1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5vcHRpb25zLm9uQmVnaW4odGhpcyksdGhpcy50eXBpbmdDb21wbGV0ZT0hMSx0aGlzLnNodWZmbGVTdHJpbmdzSWZOZWVkZWQodGhpcyksdGhpcy5pbnNlcnRDdXJzb3IoKSx0aGlzLmJpbmRJbnB1dEZvY3VzRXZlbnRzJiZ0aGlzLmJpbmRGb2N1c0V2ZW50cygpLHRoaXMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7MD09PXQuc3RyUG9zP3QudHlwZXdyaXRlKHQuc3RyaW5nc1t0LnNlcXVlbmNlW3QuYXJyYXlQb3NdXSx0LnN0clBvcyk6dC5iYWNrc3BhY2UodC5zdHJpbmdzW3Quc2VxdWVuY2VbdC5hcnJheVBvc11dLHQuc3RyUG9zKX0sdGhpcy5zdGFydERlbGF5KX0scy50eXBld3JpdGU9ZnVuY3Rpb24odCxzKXt2YXIgZT10aGlzO3RoaXMuZmFkZU91dCYmdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5mYWRlT3V0Q2xhc3MpJiYodGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKSx0aGlzLmN1cnNvciYmdGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcykpO3ZhciBpPXRoaXMuaHVtYW5pemVyKHRoaXMudHlwZVNwZWVkKSxyPTE7ITAhPT10aGlzLnBhdXNlLnN0YXR1cz90aGlzLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3M9bi50eXBlSHRtbENoYXJzKHQscyxlKTt2YXIgaT0wLG89dC5zdWJzdHJpbmcocyk7aWYoXCJeXCI9PT1vLmNoYXJBdCgwKSYmL15cXF5cXGQrLy50ZXN0KG8pKXt2YXIgYT0xO2ErPShvPS9cXGQrLy5leGVjKG8pWzBdKS5sZW5ndGgsaT1wYXJzZUludChvKSxlLnRlbXBvcmFyeVBhdXNlPSEwLGUub3B0aW9ucy5vblR5cGluZ1BhdXNlZChlLmFycmF5UG9zLGUpLHQ9dC5zdWJzdHJpbmcoMCxzKSt0LnN1YnN0cmluZyhzK2EpLGUudG9nZ2xlQmxpbmtpbmcoITApfWlmKFwiYFwiPT09by5jaGFyQXQoMCkpe2Zvcig7XCJgXCIhPT10LnN1YnN0cmluZyhzK3IpLmNoYXJBdCgwKSYmKHIrKywhKHMrcj50Lmxlbmd0aCkpOyk7dmFyIHU9dC5zdWJzdHJpbmcoMCxzKSxwPXQuc3Vic3RyaW5nKHUubGVuZ3RoKzEscytyKSxjPXQuc3Vic3RyaW5nKHMrcisxKTt0PXUrcCtjLHItLX1lLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2UudG9nZ2xlQmxpbmtpbmcoITEpLHM+PXQubGVuZ3RoP2UuZG9uZVR5cGluZyh0LHMpOmUua2VlcFR5cGluZyh0LHMsciksZS50ZW1wb3JhcnlQYXVzZSYmKGUudGVtcG9yYXJ5UGF1c2U9ITEsZS5vcHRpb25zLm9uVHlwaW5nUmVzdW1lZChlLmFycmF5UG9zLGUpKX0saSl9LGkpOnRoaXMuc2V0UGF1c2VTdGF0dXModCxzLCEwKX0scy5rZWVwVHlwaW5nPWZ1bmN0aW9uKHQscyxlKXswPT09cyYmKHRoaXMudG9nZ2xlQmxpbmtpbmcoITEpLHRoaXMub3B0aW9ucy5wcmVTdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLHRoaXMpKTt2YXIgbj10LnN1YnN0cmluZygwLHMrPWUpO3RoaXMucmVwbGFjZVRleHQobiksdGhpcy50eXBld3JpdGUodCxzKX0scy5kb25lVHlwaW5nPWZ1bmN0aW9uKHQscyl7dmFyIGU9dGhpczt0aGlzLm9wdGlvbnMub25TdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLHRoaXMpLHRoaXMudG9nZ2xlQmxpbmtpbmcoITApLHRoaXMuYXJyYXlQb3M9PT10aGlzLnN0cmluZ3MubGVuZ3RoLTEmJih0aGlzLmNvbXBsZXRlKCksITE9PT10aGlzLmxvb3B8fHRoaXMuY3VyTG9vcD09PXRoaXMubG9vcENvdW50KXx8KHRoaXMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5iYWNrc3BhY2UodCxzKX0sdGhpcy5iYWNrRGVsYXkpKX0scy5iYWNrc3BhY2U9ZnVuY3Rpb24odCxzKXt2YXIgZT10aGlzO2lmKCEwIT09dGhpcy5wYXVzZS5zdGF0dXMpe2lmKHRoaXMuZmFkZU91dClyZXR1cm4gdGhpcy5pbml0RmFkZU91dCgpO3RoaXMudG9nZ2xlQmxpbmtpbmcoITEpO3ZhciBpPXRoaXMuaHVtYW5pemVyKHRoaXMuYmFja1NwZWVkKTt0aGlzLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3M9bi5iYWNrU3BhY2VIdG1sQ2hhcnModCxzLGUpO3ZhciBpPXQuc3Vic3RyaW5nKDAscyk7aWYoZS5yZXBsYWNlVGV4dChpKSxlLnNtYXJ0QmFja3NwYWNlKXt2YXIgcj1lLnN0cmluZ3NbZS5hcnJheVBvcysxXTtlLnN0b3BOdW09ciYmaT09PXIuc3Vic3RyaW5nKDAscyk/czowfXM+ZS5zdG9wTnVtPyhzLS0sZS5iYWNrc3BhY2UodCxzKSk6czw9ZS5zdG9wTnVtJiYoZS5hcnJheVBvcysrLGUuYXJyYXlQb3M9PT1lLnN0cmluZ3MubGVuZ3RoPyhlLmFycmF5UG9zPTAsZS5vcHRpb25zLm9uTGFzdFN0cmluZ0JhY2tzcGFjZWQoKSxlLnNodWZmbGVTdHJpbmdzSWZOZWVkZWQoKSxlLmJlZ2luKCkpOmUudHlwZXdyaXRlKGUuc3RyaW5nc1tlLnNlcXVlbmNlW2UuYXJyYXlQb3NdXSxzKSl9LGkpfWVsc2UgdGhpcy5zZXRQYXVzZVN0YXR1cyh0LHMsITEpfSxzLmNvbXBsZXRlPWZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLm9uQ29tcGxldGUodGhpcyksdGhpcy5sb29wP3RoaXMuY3VyTG9vcCsrOnRoaXMudHlwaW5nQ29tcGxldGU9ITB9LHMuc2V0UGF1c2VTdGF0dXM9ZnVuY3Rpb24odCxzLGUpe3RoaXMucGF1c2UudHlwZXdyaXRlPWUsdGhpcy5wYXVzZS5jdXJTdHJpbmc9dCx0aGlzLnBhdXNlLmN1clN0clBvcz1zfSxzLnRvZ2dsZUJsaW5raW5nPWZ1bmN0aW9uKHQpe3RoaXMuY3Vyc29yJiYodGhpcy5wYXVzZS5zdGF0dXN8fHRoaXMuY3Vyc29yQmxpbmtpbmchPT10JiYodGhpcy5jdXJzb3JCbGlua2luZz10LHQ/dGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZChcInR5cGVkLWN1cnNvci0tYmxpbmtcIik6dGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZShcInR5cGVkLWN1cnNvci0tYmxpbmtcIikpKX0scy5odW1hbml6ZXI9ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSp0LzIpK3R9LHMuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZD1mdW5jdGlvbigpe3RoaXMuc2h1ZmZsZSYmKHRoaXMuc2VxdWVuY2U9dGhpcy5zZXF1ZW5jZS5zb3J0KGZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgucmFuZG9tKCktLjV9KSl9LHMuaW5pdEZhZGVPdXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3JldHVybiB0aGlzLmVsLmNsYXNzTmFtZSs9XCIgXCIrdGhpcy5mYWRlT3V0Q2xhc3MsdGhpcy5jdXJzb3ImJih0aGlzLmN1cnNvci5jbGFzc05hbWUrPVwiIFwiK3RoaXMuZmFkZU91dENsYXNzKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5hcnJheVBvcysrLHQucmVwbGFjZVRleHQoXCJcIiksdC5zdHJpbmdzLmxlbmd0aD50LmFycmF5UG9zP3QudHlwZXdyaXRlKHQuc3RyaW5nc1t0LnNlcXVlbmNlW3QuYXJyYXlQb3NdXSwwKToodC50eXBld3JpdGUodC5zdHJpbmdzWzBdLDApLHQuYXJyYXlQb3M9MCl9LHRoaXMuZmFkZU91dERlbGF5KX0scy5yZXBsYWNlVGV4dD1mdW5jdGlvbih0KXt0aGlzLmF0dHI/dGhpcy5lbC5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyLHQpOnRoaXMuaXNJbnB1dD90aGlzLmVsLnZhbHVlPXQ6XCJodG1sXCI9PT10aGlzLmNvbnRlbnRUeXBlP3RoaXMuZWwuaW5uZXJIVE1MPXQ6dGhpcy5lbC50ZXh0Q29udGVudD10fSxzLmJpbmRGb2N1c0V2ZW50cz1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5pc0lucHV0JiYodGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIixmdW5jdGlvbihzKXt0LnN0b3AoKX0pLHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIixmdW5jdGlvbihzKXt0LmVsLnZhbHVlJiYwIT09dC5lbC52YWx1ZS5sZW5ndGh8fHQuc3RhcnQoKX0pKX0scy5pbnNlcnRDdXJzb3I9ZnVuY3Rpb24oKXt0aGlzLnNob3dDdXJzb3ImJih0aGlzLmN1cnNvcnx8KHRoaXMuY3Vyc29yPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLHRoaXMuY3Vyc29yLmNsYXNzTmFtZT1cInR5cGVkLWN1cnNvclwiLHRoaXMuY3Vyc29yLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsITApLHRoaXMuY3Vyc29yLmlubmVySFRNTD10aGlzLmN1cnNvckNoYXIsdGhpcy5lbC5wYXJlbnROb2RlJiZ0aGlzLmVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY3Vyc29yLHRoaXMuZWwubmV4dFNpYmxpbmcpKSl9LHR9KCk7ZXhwb3J0e2kgYXMgZGVmYXVsdH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlZC5tb2R1bGUuanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vY3NzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHNldHVwUGFnZSBmcm9tIFwiLi9zZXR1cFwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL2hvbWVwYWdlXCI7XG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc29sZS5sb2coXCJUZXN0IGJ1aWxkXCIpO1xuc2V0dXBQYWdlKCk7XG5Ib21lUGFnZSgpO1xuXG5jb25zdCBob21lTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJveDpudGgtb2YtdHlwZSgxKVwiKTtcbmNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJveDpudGgtb2YtdHlwZSgyKVwiKTtcbmNvbnN0IHByb2plY3RzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJveDpudGgtb2YtdHlwZSgzKVwiKTtcbmNvbnN0IHJlc3VtZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1ib3g6bnRoLW9mLXR5cGUoNClcIik7XG5cbmNvbnN0IG1vYmlsZUhvbWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XCIuaGFtYnVyZ2VyLW1lbnUgPiBhOm50aC1vZi10eXBlKDEpXCIsXG4pO1xuY29uc3QgbW9iaWxlQWJvdXRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XCIuaGFtYnVyZ2VyLW1lbnUgPiBhOm50aC1vZi10eXBlKDIpXCIsXG4pO1xuY29uc3QgbW9iaWxlUHJvamVjdHNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XCIuaGFtYnVyZ2VyLW1lbnUgPiBhOm50aC1vZi10eXBlKDMpXCIsXG4pO1xuY29uc3QgbW9iaWxlUmVzdW1lTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFwiLmhhbWJ1cmdlci1tZW51ID4gYTpudGgtb2YtdHlwZSg0KVwiLFxuKTtcblxuaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0SG9tZVBhZ2UoKTtcbn0pO1xuXG5tb2JpbGVIb21lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRIb21lUGFnZSgpO1xufSk7XG5cbmFib3V0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRhYm91dCgpO1xufSk7XG5cbm1vYmlsZUFib3V0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRhYm91dCgpO1xufSk7XG5cbnByb2plY3RzTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRwcm9qZWN0KCk7XG59KTtcblxubW9iaWxlUHJvamVjdHNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdHByb2plY3QoKTtcbn0pO1xuXG5yZXN1bWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdHdpbmRvdy5vcGVuKFxuXHRcdFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xeENaU200SzN0YzdfaHFIaHpJcVFNczZFX0N6LTZxVWcvdmlldz91c3A9c2hhcmluZ1wiLFxuXHQpO1xufSk7XG5cbm1vYmlsZVJlc3VtZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0d2luZG93Lm9wZW4oXG5cdFx0XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4Q1pTbTRLM3RjN19ocUhoeklxUU1zNkVfQ3otNnFVZy92aWV3P3VzcD1zaGFyaW5nXCIsXG5cdCk7XG59KTtcbiJdLCJuYW1lcyI6WyJTaGFoaXIiLCJHaXRTb2NpYWwiLCJMaW5rZWQiLCJEb2NrZXIiLCJTcWwiLCJFY2xpcHNlIiwiTHVhIiwiVnVlIiwiQ3lwcmVzcyIsIlZzY29kZSIsIkMiLCJOcG0iLCJCYWJlbCIsIlByZXR0aWVyIiwiRXNsaW50IiwiV2VicGFjayIsIkplc3QiLCJHaXQiLCJQeXRob24iLCJKYXZhIiwiTGludXgiLCJIdG1sIiwiQ3NzIiwiSnMiLCJjcmVhdGVDYXJvdXNlbEl0ZW0iLCJpbWFnZSIsInRpdGxlIiwiY2Fyb3VzZWxJdGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2Fyb3VzZWxJbWFnZSIsInNyYyIsImFsdCIsImNhcm91c2VsVGl0bGUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiYnV0dG9ucyIsImNhcm91c2VsIiwicXVlcnlTZWxlY3RvciIsImJhY2tCdG4iLCJmb3J3YXJkQnRuIiwiaXNTY3JvbGxpbmciLCJzY3JvbGxEaXJlY3Rpb24iLCJzY3JvbGxTdGVwIiwiYW5pbWF0ZVNjcm9sbCIsInNjcm9sbERpc3RhbmNlIiwic2Nyb2xsTGVmdCIsIm9mZnNldFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY3JvbGxSaWdodCIsInN0b3BTY3JvbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiYWJvdXQiLCJhYm91dFBhZ2UiLCJhYm91dENvbnRhaW5lciIsImFib3V0VGV4dENvbnRhaW5lciIsImFib3V0TWUiLCJhYm91dE1lU3BhbiIsImFib3V0TWVEaXYiLCJhYm91dE1lVGV4dERpdiIsInBhcmFncmFwaCIsImFib3V0TWVUZXh0IiwiYWJvdXRNZVRleHQyIiwiYWJvdXRNZVRleHQzIiwiYWJvdXRNZVRleHQ0Iiwic29jaWFsSWNvbnMiLCJnaXRMaW5rIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImdpdFNvY2lhbCIsImxpbmtlZExpbmsiLCJsaW5rZWQiLCJwaWN0dXJlIiwic2Vjb25kRGl2Iiwic2Vjb25kRGl2VGV4dCIsImhpZ2hsaWdodCIsImFuZCIsImNyZWF0ZVRleHROb2RlIiwiaGlnaGxpZ2h0VGV4dCIsInNlbnRlbmNlIiwidGV4dCIsImNhcm91c2VsQ29udGFpbmVyIiwiY2Fyb3VzZWxEaXYiLCJjYXJvdXNlbEl0ZW1zIiwiY2Fyb3VzZWxJdGVtMSIsImNhcm91c2VsSXRlbTIiLCJjYXJvdXNlbEl0ZW0zIiwiY2Fyb3VzZWxJdGVtNCIsImNhcm91c2VsSXRlbTUiLCJjYXJvdXNlbEl0ZW02IiwiY2Fyb3VzZWxJdGVtNyIsImNhcm91c2VsSXRlbTgiLCJjYXJvdXNlbEl0ZW05IiwiY2Fyb3VzZWxJdGVtMTAiLCJjYXJvdXNlbEl0ZW0xMSIsImNhcm91c2VsSXRlbTEyIiwiY2Fyb3VzZWxJdGVtMTMiLCJjYXJvdXNlbEl0ZW0xNCIsImNhcm91c2VsSXRlbTE1IiwiY2Fyb3VzZWxJdGVtMTYiLCJjYXJvdXNlbEl0ZW0xNyIsImNhcm91c2VsSXRlbTE4IiwiY2Fyb3VzZWxJdGVtMTkiLCJjYXJvdXNlbEl0ZW0yMCIsImNhcm91c2VsSXRlbTIxIiwibWFpbiIsImlubmVySFRNTCIsIlR5cGVkIiwiQ29tcHV0ZXIiLCJIYW5kIiwiSGFja2VyIiwiZHluYW1pY1RleHQiLCJ0eXBlZCIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJiYWNrU3BlZWQiLCJzdGFydERlbGF5IiwiYmFja0RlbGF5IiwibG9vcCIsInNob3dDdXJzb3IiLCJjdXJzb3JDaGFyIiwiYXR0ciIsImF1dG9JbnNlcnRDc3MiLCJjb250ZW50VHlwZSIsIkhvbWVQYWdlIiwibWFpbkNvbnRhaW5lciIsImZpcnN0QmxvY2tIb21lIiwidGV4dENvbnRhaW5lciIsInN1YlRleHRDb250YWluZXIiLCJmaXJzdFRleHRDb250YWluZXIiLCJmaXJzdFRleHQiLCJ3YXZlIiwic2Vjb25kVGV4dENvbnRhaW5lciIsInNlY29uZFRleHQiLCJuYW1lIiwidHlwZWRUZXh0Q29udGFpbmVyIiwidHlwZWRUZXh0IiwiaWQiLCJpbWFnZUNvbnRhaW5lciIsInNlY29uZEJsb2NrSG9tZSIsInNlY29uZEJsb2NrVGV4dENvbnRhaW5lciIsInRleHREaXYiLCJzcGFuIiwic3ViRGl2Iiwic3ViVGV4dEFmdGVySGlnaGxpZ2h0Iiwic3ViVGV4dCIsInN1YnN1YlRleHQiLCJoYWNrZXIiLCJzb2NpYWxCbG9jayIsInNvY2lhbFRleHREaXYiLCJzb2NpYWxUZXh0IiwidGV4dEJlZm9yZSIsInRleHRBZnRlciIsInNwYW5Db250ZW50Iiwic29jaWFsU3ViVGV4dCIsIlRvZG8iLCJCYXR0bGVzaGlwIiwiV2VhdGhlciIsIlRpY3RhYyIsIkNhbGN1bGF0b3IiLCJSZXN0YXVyYW50IiwiRXRjaCIsImNyZWF0ZVByb2plY3RJdGVtIiwiZGVzY3JpcHRpb24iLCJsaXZlRGVtbyIsInNvdXJjZUNvZGUiLCJwcm9qZWN0SXRlbSIsInByb2plY3RJbWFnZSIsInByb2plY3RJdGVtRGl2IiwicHJvamVjdFRpdGxlIiwicHJvamVjdERlc2NyaXB0aW9uIiwicHJvamVjdExpbmtEaXYiLCJwcm9qZWN0TGl2ZURlbW8iLCJwcm9qZWN0U291cmNlQ29kZSIsInByb2plY3QiLCJwcm9qZWN0RGl2IiwicHJvamVjdENvbnRhaW5lciIsInRvZG8iLCJiYXR0bGVzaGlwIiwid2VhdGhlciIsInRpY3RhYyIsImNhbGN1bGF0b3IiLCJyZXN0YXVyYW50IiwiZXRjaCIsIkljb24iLCJIb21lIiwiQWJvdXQiLCJDb2RlIiwiRG9jIiwiR2l0SHViIiwiaGFtYnVyZ2VySW1nIiwiY3JlYXRlTmF2QmFyIiwiYmFyIiwibG9nQ29udGFpbmVyIiwibG9nb0JveCIsImxvZ28iLCJsb2dvTGluayIsImxvZ29UZXh0IiwibG9nb0xpbmsyIiwibmF2TGlua3MiLCJob21lQm94IiwiaG9tZUxpbmsiLCJob21lSWNvbiIsIm1lbnVMaW5rYm94IiwibWVudUxpbmsiLCJtZW51SWNvbiIsImNvbnRhY3RMaW5rYm94IiwiY29udGFjdExpbmsiLCJjb250YWN0SWNvbiIsIkFib3V0TGlua2JveCIsIkFib3V0TGluayIsIkFib3V0SWNvbiIsImhhbWJ1cmdlciIsImhhbWJ1cmdlckljb24iLCJoYW1idXJnZXJNZW51IiwiaGFtYnVyZ2VyTWVudUhvbWUiLCJoYW1idXJnZXJNZW51QWJvdXQiLCJoYW1idXJnZXJNZW51UHJvamVjdHMiLCJoYW1idXJnZXJNZW51UmVzdW1lIiwiY29udGVudCIsImNyZWF0ZUZvb3RlciIsImZvb3RlciIsImdpdEh1YlByb2ZpbGUiLCJnaXRIdWJQcm9maWxlSW1nIiwiZ2l0SHViUHJvZmlsZVRleHQiLCJhdFN5bWJvbCIsInVzZXJuYW1lIiwic2VwZXJhdG9yIiwiZ2l0SHViUmVwbyIsInNldHVwUGFnZSIsIndpbmRvdyIsIm5hdkJhciIsInNjcm9sbFkiLCJyZW1vdmUiLCJjb250YWlucyIsImNvbnNvbGUiLCJsb2ciLCJhYm91dExpbmsiLCJwcm9qZWN0c0xpbmsiLCJyZXN1bWVMaW5rIiwibW9iaWxlSG9tZUxpbmsiLCJtb2JpbGVBYm91dExpbmsiLCJtb2JpbGVQcm9qZWN0c0xpbmsiLCJtb2JpbGVSZXN1bWVMaW5rIiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=