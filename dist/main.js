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
  forwardBtn.addEventListener("mouseenter", scrollRight); // Scroll right on mouse enter
  forwardBtn.addEventListener("mouseleave", stopScroll); // Stop scrolling on mouse leave
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
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n\tcolor: #e0e0e0;\n\tbackground-color: #000000;\n\tbackground-image: url(../img/background.jpg);\n\tbackground-size: contain !important;\n\tbackground-repeat: no-repeat !important;\n\tfont-family: sans-serif;\n}\n\ndiv#content {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.nav-bar {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1.5rem 3rem;\n\ttransition: all 0.3s ease;\n\tz-index: 999;\n\tbackground-color: transparent; /* No background initially */\n\tbackdrop-filter: blur(0); /* No blur initially */\n\tbox-shadow:\n\t\t0 4px 6px -1px rgba(0, 0, 0, 0.1),\n\t\t0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.nav-bar-scrolled {\n\tbackdrop-filter: blur(10px); /* Adjust the blur value as needed */\n\tbackground-color: rgba(\n\t\t79,\n\t\t209,\n\t\t197,\n\t\t0.15\n\t); /* RGBA color for translucent teal */\n}\n\n.logo-box {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.logo-box img {\n\twidth: 3rem;\n\theight: auto;\n\tcursor: pointer;\n}\n\n.log-container:hover {\n\tcursor: pointer;\n}\n\n.logo-box a {\n\ttext-decoration: none;\n}\n\n.log-container:hover:after {\n\twidth: 100%;\n}\n\n.log-container:hover .logo-box a h1 {\n\tcolor: #ffffffff;\n}\n\n.log-container:hover .logo-box img {\n\tfilter: brightness(3);\n}\n\n.log-container:after {\n\tbackground: #4fd1c5;\n\tborder-radius: 16px;\n\tbottom: 1px;\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 5px;\n\tleft: 0;\n\tposition: relative;\n\ttransition: all 0.3s ease-out 0s;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.logo-box a h1 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcursor: pointer;\n\tmargin: 0;\n}\n\n.nav-links {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 2rem;\n}\n\n.nav-links a {\n\tcolor: #e0e0e0;\n\tfont-size: 1.5rem;\n\tfont-weight: 100;\n\ttext-decoration: none;\n}\n\n.nav-links a:hover {\n\tcolor: #ffffffff;\n}\n\n.nav-links .nav-box:hover {\n\tcursor: pointer;\n}\n\n.nav-links .nav-box:hover a {\n\tcolor: #ffffffff;\n}\n\n.nav-links .nav-box:hover img {\n\tfilter: brightness(3);\n}\n\n.nav-links .nav-box:hover:after {\n\twidth: 100%;\n}\n\n.nav-links .nav-box {\n\tposition: relative;\n}\n\n.nav-links .nav-box:after {\n\tbackground: #4fd1c5;\n\tborder-radius: 16px;\n\tbottom: -5px;\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 5px;\n\tleft: 0;\n\tposition: absolute;\n\ttransition: all 0.3s ease-out 0s;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.main-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 7rem;\n}\n\n.first-block-home {\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tpadding: 0 3rem;\n\tgap: 1rem;\n}\n\n.text-container {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.sub-text-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.image-container {\n\twidth: 75%;\n}\n\n.computer {\n\twidth: 100%;\n\theight: auto;\n}\n\n.first-text-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 1rem;\n}\n\n.typed-text-container {\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 2rem;\n}\n\n#typed-text {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcolor: #4fd1c5;\n}\n\n.typed-cursor {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcolor: #4fd1c5;\n\tanimation: blink 0.7s infinite;\n}\n\n.nav-box {\n\tpadding: 0.25rem 0rem;\n}\n\n.wave {\n\twidth: 2rem;\n\theight: auto;\n\tanimation-name: wave-animation;\n\tanimation-duration: 2.5s;\n\tanimation-iteration-count: infinite;\n\ttransform-origin: 70% 70%;\n\tdisplay: inline-block;\n\tfilter: brightness(0.9);\n}\n\n@keyframes wave-animation {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t10% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t20% {\n\t\ttransform: rotate(12deg);\n\t}\n\t30% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t40% {\n\t\ttransform: rotate(9deg);\n\t}\n\t50% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(0deg);\n\t}\n}\n\n.name {\n\tfont-size: 3rem;\n\tfont-weight: 700;\n\tcolor: #4fd1c5;\n}\n\n.nav-box {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tgap: 0.5rem;\n\talign-items: center;\n}\n\n.nav-box img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n.second-text-container h5 {\n\tmargin: 0;\n}\n\n.first-text-container h3 {\n\tfont-weight: 500;\n\tfont-size: 2rem;\n\tmargin: 0;\n}\n\n.second-text-container h5 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n}\n\n.second-block-home {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 0 3rem;\n\tmargin: 0 5rem;\n\tgap: 5rem;\n}\n\n.second-block-text-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tjustify-items: center;\n\talign-items: center;\n}\n\n.hacker {\n\twidth: 35%;\n\theight: auto;\n}\n\n.text-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 3rem;\n}\n\n.text-div h3 {\n\talign-self: center;\n\tfont-size: 1.9rem;\n\tmargin: 0;\n}\n\n.highlight,\n.text-div h3 span {\n\tcolor: #4fd1c5;\n}\n\n.sub-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.sub-text {\n\tfont-weight: 600;\n\tmargin: 0;\n}\n\n.social-icons img {\n\twidth: 2.5rem;\n\theight: auto;\n\tcursor: pointer;\n\ttransition: all 0.3s ease;\n\tborder-radius: 50%;\n}\n\n.social-icons img:hover {\n\tfilter: invert(1);\n\tbox-shadow: 0 4px 8px 0 rgba(79, 209, 197, 0.5);\n}\n\n.social-text-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n\talign-items: center;\n}\n\n.social-text-div h3 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n}\n\n.social-text-div * {\n\tmargin: 0;\n}\n\n.social-icons {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 2rem;\n}\n\n.social-sub-text {\n\tfont-size: 0.8rem;\n\tfont-weight: 550;\n}\n\n.social-block {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.social-sub-text span {\n\tcolor: #4fd1c5;\n}\n\n/* --------------------------------------- Footer ------------------------------------------------------- */\n\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n\theight: 2.5rem;\n\tmargin-top: 2rem;\n\tpadding: 0.25rem 3rem;\n\tbackground-color: #4fd1c5;\n}\n\nfooter a {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\ttext-decoration: none;\n\tfont-size: 1.3rem;\n\tfont-weight: 100;\n\tcolor: #fafafa;\n\ttransition: all 0.3s ease;\n}\n\nfooter p {\n\tmargin: 0.5rem 0;\n}\n\nfooter a:hover,\nfooter a:active {\n\tcolor: #b02e39;\n}\n\nfooter a img {\n\tborder-radius: 50%;\n\ttransition: all 0.3s ease;\n}\n\nfooter a:hover img,\nfooter a:active img {\n\tfilter: invert(1);\n\tbox-shadow: 0 4px 8px 0 rgba(79, 209, 197, 0.5);\n}\n\n.at-symbol {\n\tfont-weight: 900;\n}\n\nfooter img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n/* Styles the scrollbar track */\n::-webkit-scrollbar-track {\n\tbackground-color: #2c3e50; /* A darker shade for contrast */\n}\n\n/* Styles the scrollbar handle */\n::-webkit-scrollbar-thumb {\n\tbackground-color: #4fd1c5; /* The color you provided for the handle */\n\tborder-radius: 10px; /* Rounded corners for the handle */\n}\n\n/* Styles the scrollbar itself (including the track) */\n::-webkit-scrollbar {\n\twidth: 12px; /* Adjust to the size you prefer */\n}\n\n/* Optional: styles the scrollbar handle on hover */\n::-webkit-scrollbar-thumb:hover {\n\tbackground-color: #3a9d9b; /* A slightly darker shade of the handle color for hover */\n}\n\n/* Firefox */\nhtml {\n\tscrollbar-color: #4fd1c5 #2c3e50;\n\tscrollbar-width: thin; /* You can use 'auto' or 'thin' */\n}\n\n.about-page {\n\tpadding: 0rem 3rem;\n\tpadding-bottom: 2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5rem;\n}\n\n.about-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.about-text-container {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.about-me span {\n\tcolor: #4fd1c5;\n}\n\n.about-me-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tjustify-items: center;\n}\n\n.about-me-picture {\n\twidth: 75%;\n\theight: auto;\n}\n\n.about-me-text-div {\n\tfont-size: 1.1rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.about-me-text:nth-of-type(1) {\n\tmargin-top: 0.5rem;\n}\n\n/* --------------------------------------- End of Footer styles ------------------------------------------------------- */\n\n.carousel-item img {\n\twidth: 3rem;\n\theight: auto;\n}\n\n.second-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 3rem;\n\tpadding: 0 3rem;\n}\n\n.second-div-text {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 1rem;\n}\n\n.second-div-text p {\n\tfont-size: 2rem;\n\tmargin: 0;\n\tfont-weight: 900;\n}\n\n.carousel-div {\n\tdisplay: flex;\n\tborder: 3px solid #dddddd;\n\tborder-radius: 10px;\n}\n\n.back-btn,\n.forward-btn {\n\tfont-size: 2.5rem;\n\tcolor: #15202b;\n\tfont-weight: 900;\n\tbackground-color: #dddddd;\n\tborder: none;\n\tcursor: pointer;\n}\n\n.carousel {\n\tdisplay: flex;\n\toverflow-x: auto;\n\tgap: 2rem;\n\tpadding: 1rem;\n\ttransform: rotateX(180deg);\n\t-ms-transform: rotateX(180deg);\n\t-webkit-transform: rotateX(180deg);\n\tmargin-top: 0.2rem;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n}\n\n.carousel-item {\n\tmin-width: 7rem;\n\tmin-height: 10rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 1rem;\n\ttransform: rotateX(180deg);\n\t-ms-transform: rotateX(180deg);\n\t-webkit-transform: rotateX(180deg);\n\tborder: 1px solid #dddddd;\n\tborder-radius: 15px;\n\tbackground-color: #ffffff17;\n}\n\n.carousel-item p {\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.carousel-items {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 2rem;\n}\n\n/* Style the scrollbar */\n.carousel::-webkit-scrollbar {\n\twidth: 5px; /* Set the width of the scrollbar */\n\theight: 10px; /* Set the height of the scrollbar */\n}\n\n.carousel::-webkit-scrollbar-thumb {\n\tbackground-color: #4fd1c5; /* Color of the scrollbar thumb */\n\tborder-radius: 5px; /* Rounded corners for the scrollbar thumb */\n}\n\n.carousel::-webkit-scrollbar-thumb:hover {\n\tbackground-color: #4fd1c5; /* Color of the scrollbar thumb on hover */\n}\n\n.carousel::-webkit-scrollbar-track {\n\tbackground-color: transparent; /* Color of the scrollbar track */\n}\n\n.carousel::-webkit-scrollbar-corner {\n\tbackground-color: transparent; /* Color of the scrollbar corner */\n}\n\n.project-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n\tpadding: 0 3rem;\n}\n\n.project-div h1 {\n\tcolor: #4fd1c5;\n}\n\n.project-item img {\n\twidth: 100%;\n\theight: auto;\n}\n\n.project-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tgap: 2rem;\n}\n\n.project-item {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 2fr;\n\talign-items: center;\n\tgap: 2rem;\n\tpadding: 1rem;\n\tborder-radius: 10px;\n\tbackground-color: #ffffff17;\n\tborder: 1px solid #dddddd;\n}\n\n.project-link-div {\n\tdisplay: flex;\n\tgap: 1rem;\n}\n\n.project-link-div a {\n\ttext-decoration: none;\n\tcolor: #4fd1c5;\n\tfont-size: 1.5rem;\n\tfont-weight: 500;\n\tborder: 1px solid #4fd1c5;\n\tborder-radius: 10px;\n\tpadding: 0.5rem 1rem;\n\ttransition: all 0.3s ease;\n}\n\n.project-link-div a:hover {\n\tcolor: #e0e0e0;\n\tborder: 1px solid #e0e0e0;\n\tbackground-color: #4fd1c5;\n}\n\n.project-item-div p {\n\tfont-size: 1.1rem;\n\tfont-weight: 600;\n}\n\n/* ...existing styles */\n\n.hamburger-menu {\n\tdisplay: none;\n\ttransform-origin: top;\n}\n\n.hamburger {\n\tdisplay: none;\n}\n\n@media (max-width: 500px) {\n\t.second-block-home {\n\t\tmargin: 0;\n\t}\n\n\t.logo-box img {\n\t\twidth: 2.5rem;\n\t\theight: auto;\n\t}\n\n\t.logo-box a h1 {\n\t\tfont-size: 1.5rem;\n\t}\n\n\tdiv.hamburger-menu.inactive,\n\tdiv.hamburger-menu.active {\n\t\tmargin-top: 1.2rem;\n\t}\n\n\t.main-container {\n\t\tgap: 1rem;\n\t}\n\n\t.text-div {\n\t\tgap: 1rem;\n\t}\n\n\t.text-div h3 {\n\t\tfont-size: 1.25rem;\n\t}\n}\n\n@media (max-width: 870px) {\n\t.hamburger {\n\t\tdisplay: block;\n\t}\n\n\t.hamburger img {\n\t\twidth: 2rem;\n\t\theight: auto;\n\t}\n\n\t.hamburger img:hover {\n\t\tfilter: brightness(3);\n\t}\n\n\t.nav-box {\n\t\tdisplay: none;\n\t}\n\n\t.log-container {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 1rem;\n\t\tjustify-content: space-between;\n\t}\n\n\t.hamburger-menu.active {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\tbackground-color: #4fd1c5;\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tz-index: 999;\n\t\tanimation: expand 500ms ease-in-out;\n\t\tmargin-top: 2rem;\n\t\tgap: 1rem;\n\t\tpadding-top: 1rem;\n\t\t/* display: flex;\n\t\tflex-direction: column;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\talign-items: center;\n\t\tmargin-top: 2.5rem;\n\t\tgap: 1rem; */\n\t}\n\n\t@keyframes expand {\n\t\t0% {\n\t\t\ttransform: scaleY(0);\n\t\t}\n\n\t\t70% {\n\t\t\ttransform: scaleY(1.1);\n\t\t}\n\n\t\t100% {\n\t\t\ttransform: scaleY(1);\n\t\t}\n\t}\n\n\t.inactive {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\tbackground-color: #4fd1c5;\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tz-index: 999;\n\t\tanimation: collapse 0.5s forwards;\n\t\tmargin-top: 2rem;\n\t\tgap: 1rem;\n\t\tpadding-top: 1rem;\n\t}\n\n\t/* .inactive {\n\t\topacity: 0;\n\t\tvisibility: hidden;\n\t\ttransform: scaleY(0);\n\t\ttransition:\n\t\t\ttransform 0.5s,\n\t\t\topacity 0.5s,\n\t\t\tvisibility 0s 0s;\n\t} */\n\n\t@keyframes collapse {\n\t\t0% {\n\t\t\ttransform: scaleY(1);\n\t\t}\n\t\t70% {\n\t\t\ttransform: scaleY(1.1);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scaleY(0);\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t.hamburger-menu a {\n\t\tborder-bottom: 1.5px solid #e0e0e0;\n\t\ttext-align: center;\n\t}\n\n\t.hamburger-menu a:nth-of-type(4) {\n\t\tborder-bottom: none;\n\t}\n\n\t.hamburger-menu a {\n\t\tfont-size: 1.5rem;\n\t\tpadding-bottom: 0.5rem;\n\t}\n\n\t.first-text-container h3 {\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.name {\n\t\tfont-size: 2rem;\n\t}\n\n\t#typed-text {\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.second-block-text-container {\n\t\tgap: 3rem;\n\t}\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNNO0FBQ047QUFDQTtBQUNOO0FBQ1E7QUFDUjtBQUNBO0FBQ1E7QUFDRjtBQUNWO0FBQ0k7QUFDSTtBQUNNO0FBQ0o7QUFDRTtBQUNOO0FBQ0Y7QUFDTTtBQUNKO0FBQ0U7QUFDRjtBQUNGO0FBQ0Y7QUFFOUIsU0FBU3dCLGtCQUFrQkEsQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUU7RUFDekMsSUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbERGLFlBQVksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBRTNDLElBQU1DLGFBQWEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ25ERyxhQUFhLENBQUNDLEdBQUcsR0FBR1IsS0FBSztFQUN6Qk8sYUFBYSxDQUFDRSxHQUFHLEdBQUdSLEtBQUs7RUFDekJNLGFBQWEsQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFFN0MsSUFBTUksYUFBYSxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDakRNLGFBQWEsQ0FBQ0wsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFDN0NJLGFBQWEsQ0FBQ0MsV0FBVyxHQUFHVixLQUFLO0VBRWpDQyxZQUFZLENBQUNVLFdBQVcsQ0FBQ0wsYUFBYSxDQUFDO0VBQ3ZDTCxZQUFZLENBQUNVLFdBQVcsQ0FBQ0YsYUFBYSxDQUFDO0VBRXZDLE9BQU9SLFlBQVk7QUFDcEI7O0FBRUE7QUFDQSxTQUFTVyxPQUFPQSxDQUFBLEVBQUc7RUFDbEIsSUFBTUMsUUFBUSxHQUFHWCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFDcEQsSUFBTUMsT0FBTyxHQUFHYixRQUFRLENBQUNZLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFDbkQsSUFBTUUsVUFBVSxHQUFHZCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFDekQsSUFBSUcsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO0VBQ3pCLElBQUlDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUN6QixJQUFNQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0VBRXRCO0VBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDM0I7SUFDQSxJQUFJLENBQUNILFdBQVcsRUFBRTs7SUFFbEI7SUFDQSxJQUFNSSxjQUFjLEdBQUdILGVBQWUsS0FBSyxDQUFDLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHQSxVQUFVO0lBQ3ZFTixRQUFRLENBQUNTLFVBQVUsSUFBSUQsY0FBYzs7SUFFckM7SUFDQSxJQUNFSCxlQUFlLEtBQUssQ0FBQyxJQUFJTCxRQUFRLENBQUNTLFVBQVUsR0FBRyxDQUFDLElBQ2hESixlQUFlLEtBQUssQ0FBQyxJQUNyQkwsUUFBUSxDQUFDUyxVQUFVLEdBQUdULFFBQVEsQ0FBQ1UsV0FBVyxHQUFHVixRQUFRLENBQUNXLFdBQVksRUFDbEU7TUFDRDtNQUNBQyxxQkFBcUIsQ0FBQ0wsYUFBYSxDQUFDO0lBQ3JDLENBQUMsTUFBTTtNQUNOO01BQ0FILFdBQVcsR0FBRyxLQUFLO0lBQ3BCO0VBQ0QsQ0FBQzs7RUFFRDtFQUNBLElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDeEI7SUFDQSxJQUFJLENBQUNMLFdBQVcsRUFBRTtNQUNqQkMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ3JCRCxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7TUFDcEJHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQjtFQUNELENBQUM7O0VBRUQ7RUFDQSxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3pCO0lBQ0EsSUFBSSxDQUFDVCxXQUFXLEVBQUU7TUFDakJDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUNyQkQsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDO01BQ3BCRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEI7RUFDRCxDQUFDOztFQUVEO0VBQ0EsSUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUN4QlYsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO0VBQ3RCLENBQUM7O0VBRUQ7RUFDQUYsT0FBTyxDQUFDYSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVOLFVBQVUsQ0FBQyxDQUFDLENBQUM7RUFDcERQLE9BQU8sQ0FBQ2EsZ0JBQWdCLENBQUMsWUFBWSxFQUFFRCxVQUFVLENBQUMsQ0FBQyxDQUFDO0VBQ3BEWCxVQUFVLENBQUNZLGdCQUFnQixDQUFDLFlBQVksRUFBRUYsV0FBVyxDQUFDLENBQUMsQ0FBQztFQUN4RFYsVUFBVSxDQUFDWSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVELFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDeEQ7QUFFQSxTQUFTRSxLQUFLQSxDQUFBLEVBQUc7RUFDaEIsSUFBTUMsU0FBUyxHQUFHNUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQy9DMkIsU0FBUyxDQUFDMUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0VBRXJDLElBQU0wQixjQUFjLEdBQUc3QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDcEQ0QixjQUFjLENBQUMzQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUUvQyxJQUFNMkIsa0JBQWtCLEdBQUc5QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDeEQ2QixrQkFBa0IsQ0FBQzVCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0VBQ3hELElBQU00QixPQUFPLEdBQUcvQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDNUM4QixPQUFPLENBQUN2QixXQUFXLEdBQUcsUUFBUTtFQUM5QixJQUFNd0IsV0FBVyxHQUFHaEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQ2xEK0IsV0FBVyxDQUFDeEIsV0FBVyxHQUFHLElBQUk7RUFDOUJ1QixPQUFPLENBQUN0QixXQUFXLENBQUN1QixXQUFXLENBQUM7RUFDaENELE9BQU8sQ0FBQzdCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUNqQzJCLGtCQUFrQixDQUFDckIsV0FBVyxDQUFDc0IsT0FBTyxDQUFDO0VBQ3ZDRixjQUFjLENBQUNwQixXQUFXLENBQUNxQixrQkFBa0IsQ0FBQztFQUU5QyxJQUFNRyxVQUFVLEdBQUdqQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDaERnQyxVQUFVLENBQUMvQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFFeEMsSUFBTStCLGNBQWMsR0FBR2xDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNwRGlDLGNBQWMsQ0FBQ2hDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0VBRWpELElBQU1nQyxTQUFTLEdBQUduQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDL0NrQyxTQUFTLENBQUNqQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFFcEMsSUFBTWlDLFdBQVcsR0FBR3BDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMvQ21DLFdBQVcsQ0FBQ2xDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUMxQ2lDLFdBQVcsQ0FBQzVCLFdBQVcsR0FDdEIsZ2hCQUFnaEI7RUFFamhCLElBQU02QixZQUFZLEdBQUdyQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDaERvQyxZQUFZLENBQUNuQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7RUFDM0NrQyxZQUFZLENBQUM3QixXQUFXLGlyQkFBd3FCO0VBRWhzQixJQUFNOEIsWUFBWSxHQUFHdEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ2hEcUMsWUFBWSxDQUFDcEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBQzNDbUMsWUFBWSxDQUFDOUIsV0FBVyxHQUN2QiwwUkFBMFI7RUFFM1IsSUFBTStCLFlBQVksR0FBR3ZDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNoRHNDLFlBQVksQ0FBQ3JDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUMzQ29DLFlBQVksQ0FBQy9CLFdBQVcsR0FDdkIsK1NBQStTO0VBRWhUMkIsU0FBUyxDQUFDMUIsV0FBVyxDQUFDMkIsV0FBVyxDQUFDO0VBQ2xDRCxTQUFTLENBQUMxQixXQUFXLENBQUM0QixZQUFZLENBQUM7RUFDbkNGLFNBQVMsQ0FBQzFCLFdBQVcsQ0FBQzZCLFlBQVksQ0FBQztFQUNuQ0gsU0FBUyxDQUFDMUIsV0FBVyxDQUFDOEIsWUFBWSxDQUFDO0VBQ25DTCxjQUFjLENBQUN6QixXQUFXLENBQUMwQixTQUFTLENBQUM7RUFFckMsSUFBTUssV0FBVyxHQUFHeEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2pEdUMsV0FBVyxDQUFDdEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBRXpDLElBQU1zQyxPQUFPLEdBQUd6QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDM0N3QyxPQUFPLENBQUNDLElBQUksR0FBRyw4QkFBOEI7RUFDN0NELE9BQU8sQ0FBQ0UsTUFBTSxHQUFHLFFBQVE7RUFDekJGLE9BQU8sQ0FBQ0csR0FBRyxHQUFHLHFCQUFxQjtFQUNuQyxJQUFNQyxTQUFTLEdBQUc3QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDL0M0QyxTQUFTLENBQUN4QyxHQUFHLEdBQUdoQywrQ0FBUztFQUN6QndFLFNBQVMsQ0FBQ3ZDLEdBQUcsR0FBRyxRQUFRO0VBQ3hCdUMsU0FBUyxDQUFDM0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQ3RDc0MsT0FBTyxDQUFDaEMsV0FBVyxDQUFDb0MsU0FBUyxDQUFDO0VBQzlCTCxXQUFXLENBQUMvQixXQUFXLENBQUNnQyxPQUFPLENBQUM7RUFFaEMsSUFBTUssVUFBVSxHQUFHOUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzlDNkMsVUFBVSxDQUFDSixJQUFJLEdBQUcsdUNBQXVDO0VBQ3pESSxVQUFVLENBQUNILE1BQU0sR0FBRyxRQUFRO0VBQzVCRyxVQUFVLENBQUNGLEdBQUcsR0FBRyxxQkFBcUI7RUFDdEMsSUFBTUcsTUFBTSxHQUFHL0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzVDOEMsTUFBTSxDQUFDMUMsR0FBRyxHQUFHL0IsNENBQU07RUFDbkJ5RSxNQUFNLENBQUN6QyxHQUFHLEdBQUcsVUFBVTtFQUN2QnlDLE1BQU0sQ0FBQzdDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztFQUNuQzJDLFVBQVUsQ0FBQ3JDLFdBQVcsQ0FBQ3NDLE1BQU0sQ0FBQztFQUM5QlAsV0FBVyxDQUFDL0IsV0FBVyxDQUFDcUMsVUFBVSxDQUFDO0VBRW5DWixjQUFjLENBQUN6QixXQUFXLENBQUMrQixXQUFXLENBQUM7RUFDdkNQLFVBQVUsQ0FBQ3hCLFdBQVcsQ0FBQ3lCLGNBQWMsQ0FBQztFQUV0QyxJQUFNYyxPQUFPLEdBQUdoRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDN0MrQyxPQUFPLENBQUMzQyxHQUFHLEdBQUdqQyw0Q0FBTTtFQUNwQjRFLE9BQU8sQ0FBQzFDLEdBQUcsR0FBRyxRQUFRO0VBQ3RCMEMsT0FBTyxDQUFDOUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7RUFDekM4QixVQUFVLENBQUN4QixXQUFXLENBQUN1QyxPQUFPLENBQUM7RUFFL0JuQixjQUFjLENBQUNwQixXQUFXLENBQUN3QixVQUFVLENBQUM7RUFDdENMLFNBQVMsQ0FBQ25CLFdBQVcsQ0FBQ29CLGNBQWMsQ0FBQztFQUVyQyxJQUFNb0IsU0FBUyxHQUFHakQsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQy9DZ0QsU0FBUyxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0VBRXJDLElBQU0rQyxhQUFhLEdBQUdsRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbkRpRCxhQUFhLENBQUNoRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUU5QyxJQUFNZ0QsU0FBUyxHQUFHbkQsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQ2hEa0QsU0FBUyxDQUFDakQsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0VBQ3BDZ0QsU0FBUyxDQUFDM0MsV0FBVyxHQUFHLE9BQU87RUFFL0IsSUFBTTRDLEdBQUcsR0FBR3BELFFBQVEsQ0FBQ3FELGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFFM0MsSUFBTUMsYUFBYSxHQUFHdEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQ3BEcUQsYUFBYSxDQUFDOUMsV0FBVyxHQUFHLGVBQWU7RUFDM0M4QyxhQUFhLENBQUNwRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFFeEMsSUFBTW9ELFFBQVEsR0FBR3ZELFFBQVEsQ0FBQ3FELGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztFQUU3RCxJQUFNRyxJQUFJLEdBQUd4RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDeEN1RCxJQUFJLENBQUN0RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDMUJxRCxJQUFJLENBQUMvQyxXQUFXLENBQUMwQyxTQUFTLENBQUM7RUFDM0JLLElBQUksQ0FBQy9DLFdBQVcsQ0FBQzJDLEdBQUcsQ0FBQztFQUNyQkksSUFBSSxDQUFDL0MsV0FBVyxDQUFDNkMsYUFBYSxDQUFDO0VBQy9CRSxJQUFJLENBQUMvQyxXQUFXLENBQUM4QyxRQUFRLENBQUM7RUFDMUJMLGFBQWEsQ0FBQ3pDLFdBQVcsQ0FBQytDLElBQUksQ0FBQztFQUMvQlAsU0FBUyxDQUFDeEMsV0FBVyxDQUFDeUMsYUFBYSxDQUFDO0VBRXBDLElBQU1PLGlCQUFpQixHQUFHekQsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3ZEd0QsaUJBQWlCLENBQUN2RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztFQUVyRCxJQUFNdUQsV0FBVyxHQUFHMUQsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2pEeUQsV0FBVyxDQUFDeEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBRXpDLElBQU1VLE9BQU8sR0FBR2IsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQ2hEWSxPQUFPLENBQUNYLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUNqQ1UsT0FBTyxDQUFDTCxXQUFXLEdBQUcsR0FBRztFQUN6QmtELFdBQVcsQ0FBQ2pELFdBQVcsQ0FBQ0ksT0FBTyxDQUFDO0VBRWhDLElBQU1GLFFBQVEsR0FBR1gsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzlDVSxRQUFRLENBQUNULFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUVsQyxJQUFNd0QsYUFBYSxHQUFHM0QsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ25EMEQsYUFBYSxDQUFDekQsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFFN0MsSUFBTXlELGFBQWEsR0FBR2hFLGtCQUFrQixDQUFDSCwyQ0FBSSxFQUFFLE1BQU0sQ0FBQztFQUN0RCxJQUFNb0UsYUFBYSxHQUFHakUsa0JBQWtCLENBQUNGLDBDQUFHLEVBQUUsS0FBSyxDQUFDO0VBQ3BELElBQU1vRSxhQUFhLEdBQUdsRSxrQkFBa0IsQ0FBQ0QseUNBQUUsRUFBRSxZQUFZLENBQUM7RUFDMUQsSUFBTW9FLGFBQWEsR0FBR25FLGtCQUFrQixDQUFDUCwwQ0FBRyxFQUFFLEtBQUssQ0FBQztFQUNwRCxJQUFNMkUsYUFBYSxHQUFHcEUsa0JBQWtCLENBQUNiLDBDQUFHLEVBQUUsS0FBSyxDQUFDO0VBQ3BELElBQU1rRixhQUFhLEdBQUdyRSxrQkFBa0IsQ0FBQ2YsNENBQU0sRUFBRSxTQUFTLENBQUM7RUFDM0QsSUFBTXFGLGFBQWEsR0FBR3RFLGtCQUFrQixDQUFDckIsNENBQU0sRUFBRSxRQUFRLENBQUM7RUFDMUQsSUFBTTRGLGFBQWEsR0FBR3ZFLGtCQUFrQixDQUFDSiw0Q0FBSyxFQUFFLE9BQU8sQ0FBQztFQUN4RCxJQUFNNEUsYUFBYSxHQUFHeEUsa0JBQWtCLENBQUNOLDZDQUFNLEVBQUUsUUFBUSxDQUFDO0VBQzFELElBQU0rRSxjQUFjLEdBQUd6RSxrQkFBa0IsQ0FBQ0wsMkNBQUksRUFBRSxNQUFNLENBQUM7RUFDdkQsSUFBTStFLGNBQWMsR0FBRzFFLGtCQUFrQixDQUFDcEIseUNBQUcsRUFBRSxLQUFLLENBQUM7RUFDckQsSUFBTStGLGNBQWMsR0FBRzNFLGtCQUFrQixDQUFDVCw4Q0FBTyxFQUFFLFNBQVMsQ0FBQztFQUM3RCxJQUFNcUYsY0FBYyxHQUFHNUUsa0JBQWtCLENBQUNqQix5Q0FBRyxFQUFFLFFBQVEsQ0FBQztFQUN4RCxJQUFNOEYsY0FBYyxHQUFHN0Usa0JBQWtCLENBQUNaLDRDQUFLLEVBQUUsT0FBTyxDQUFDO0VBQ3pELElBQU0wRixjQUFjLEdBQUc5RSxrQkFBa0IsQ0FBQ1IsMkNBQUksRUFBRSxNQUFNLENBQUM7RUFDdkQsSUFBTXVGLGNBQWMsR0FBRy9FLGtCQUFrQixDQUFDWCwrQ0FBUSxFQUFFLFVBQVUsQ0FBQztFQUMvRCxJQUFNMkYsY0FBYyxHQUFHaEYsa0JBQWtCLENBQUNWLDZDQUFNLEVBQUUsUUFBUSxDQUFDO0VBQzNELElBQU0yRixjQUFjLEdBQUdqRixrQkFBa0IsQ0FBQ2hCLDZDQUFPLEVBQUUsU0FBUyxDQUFDO0VBQzdELElBQU1rRyxjQUFjLEdBQUdsRixrQkFBa0IsQ0FBQ2Qsd0NBQUMsRUFBRSxLQUFLLENBQUM7RUFDbkQsSUFBTWlHLGNBQWMsR0FBR25GLGtCQUFrQixDQUFDbEIseUNBQUcsRUFBRSxLQUFLLENBQUM7RUFDckQsSUFBTXNHLGNBQWMsR0FBR3BGLGtCQUFrQixDQUFDbkIsNkNBQU8sRUFBRSxTQUFTLENBQUM7RUFFN0RrRixhQUFhLENBQUNsRCxXQUFXLENBQUNtRCxhQUFhLENBQUM7RUFDeENELGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ29ELGFBQWEsQ0FBQztFQUN4Q0YsYUFBYSxDQUFDbEQsV0FBVyxDQUFDcUQsYUFBYSxDQUFDO0VBQ3hDSCxhQUFhLENBQUNsRCxXQUFXLENBQUNzRCxhQUFhLENBQUM7RUFDeENKLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ3VELGFBQWEsQ0FBQztFQUN4Q0wsYUFBYSxDQUFDbEQsV0FBVyxDQUFDd0QsYUFBYSxDQUFDO0VBQ3hDTixhQUFhLENBQUNsRCxXQUFXLENBQUN5RCxhQUFhLENBQUM7RUFDeENQLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQzBELGFBQWEsQ0FBQztFQUN4Q1IsYUFBYSxDQUFDbEQsV0FBVyxDQUFDMkQsYUFBYSxDQUFDO0VBQ3hDVCxhQUFhLENBQUNsRCxXQUFXLENBQUM0RCxjQUFjLENBQUM7RUFDekNWLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQzZELGNBQWMsQ0FBQztFQUN6Q1gsYUFBYSxDQUFDbEQsV0FBVyxDQUFDOEQsY0FBYyxDQUFDO0VBQ3pDWixhQUFhLENBQUNsRCxXQUFXLENBQUMrRCxjQUFjLENBQUM7RUFDekNiLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ2dFLGNBQWMsQ0FBQztFQUN6Q2QsYUFBYSxDQUFDbEQsV0FBVyxDQUFDaUUsY0FBYyxDQUFDO0VBQ3pDZixhQUFhLENBQUNsRCxXQUFXLENBQUNrRSxjQUFjLENBQUM7RUFDekNoQixhQUFhLENBQUNsRCxXQUFXLENBQUNtRSxjQUFjLENBQUM7RUFDekNqQixhQUFhLENBQUNsRCxXQUFXLENBQUNvRSxjQUFjLENBQUM7RUFDekNsQixhQUFhLENBQUNsRCxXQUFXLENBQUNxRSxjQUFjLENBQUM7RUFDekNuQixhQUFhLENBQUNsRCxXQUFXLENBQUNzRSxjQUFjLENBQUM7RUFDekNwQixhQUFhLENBQUNsRCxXQUFXLENBQUN1RSxjQUFjLENBQUM7RUFFekNyRSxRQUFRLENBQUNGLFdBQVcsQ0FBQ2tELGFBQWEsQ0FBQztFQUNuQ0QsV0FBVyxDQUFDakQsV0FBVyxDQUFDSSxPQUFPLENBQUM7RUFDaEM2QyxXQUFXLENBQUNqRCxXQUFXLENBQUNFLFFBQVEsQ0FBQztFQUVqQyxJQUFNRyxVQUFVLEdBQUdkLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUNuRGEsVUFBVSxDQUFDWixTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDdkNXLFVBQVUsQ0FBQ04sV0FBVyxHQUFHLEdBQUc7RUFDNUJrRCxXQUFXLENBQUNqRCxXQUFXLENBQUNLLFVBQVUsQ0FBQztFQUVuQzJDLGlCQUFpQixDQUFDaEQsV0FBVyxDQUFDaUQsV0FBVyxDQUFDO0VBQzFDVCxTQUFTLENBQUN4QyxXQUFXLENBQUNnRCxpQkFBaUIsQ0FBQztFQUN4QzdCLFNBQVMsQ0FBQ25CLFdBQVcsQ0FBQ3dDLFNBQVMsQ0FBQztFQUVoQyxJQUFNZ0MsSUFBSSxHQUFHakYsUUFBUSxDQUFDWSxhQUFhLENBQUMsaUJBQWlCLENBQUM7RUFDdERxRSxJQUFJLENBQUNDLFNBQVMsR0FBRyxFQUFFO0VBQ25CRCxJQUFJLENBQUN4RSxXQUFXLENBQUNtQixTQUFTLENBQUM7RUFFM0JsQixPQUFPLENBQUMsQ0FBQztBQUNWO0FBRUEsaUVBQWVpQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pUcEI7QUFDNkI7QUFDYTtBQUNSO0FBQ0k7QUFDTTtBQUNOO0FBRXRDLFNBQVM0RCxXQUFXQSxDQUFBLEVBQUc7RUFDdEI7RUFDQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUwsZ0RBQUssQ0FBQyxhQUFhLEVBQUU7SUFDdEM7SUFDQU0sT0FBTyxFQUFFLENBQ1Isc0JBQXNCLEVBQ3RCLGdCQUFnQixFQUNoQiwwQkFBMEIsRUFDMUIscUJBQXFCLEVBQ3JCLDZCQUE2QixFQUM3QiwrQkFBK0IsRUFDL0Isd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQixpQ0FBaUMsRUFDakMsaUJBQWlCLEVBQ2pCLCtCQUErQixFQUMvQixpQ0FBaUMsRUFDakMsZ0NBQWdDLENBQ2hDO0lBRUQ7SUFDQUMsU0FBUyxFQUFFLEVBQUU7SUFDYkMsU0FBUyxFQUFFLEVBQUU7SUFDYjtJQUNBQyxVQUFVLEVBQUUsSUFBSTtJQUNoQjtJQUNBQyxTQUFTLEVBQUUsSUFBSTtJQUNmO0lBQ0FDLElBQUksRUFBRSxJQUFJO0lBQ1Y7SUFDQUMsVUFBVSxFQUFFLElBQUk7SUFDaEI7SUFDQUMsVUFBVSxFQUFFLEdBQUc7SUFDZjtJQUNBQyxJQUFJLEVBQUUsSUFBSTtJQUNWO0lBQ0FDLGFBQWEsRUFBRSxJQUFJO0lBQ25CO0lBQ0FDLFdBQVcsRUFBRTtFQUNkLENBQUMsQ0FBQztBQUNIO0FBRUEsU0FBU0MsUUFBUUEsQ0FBQSxFQUFHO0VBQ25CLElBQU1DLGFBQWEsR0FBR3JHLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBQy9EeUYsYUFBYSxDQUFDbkIsU0FBUyxHQUFHLEVBQUU7RUFFNUIsSUFBTW9CLGNBQWMsR0FBR3RHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNwRHFHLGNBQWMsQ0FBQ3BHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0VBRWhELElBQU1vRyxhQUFhLEdBQUd2RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbkRzRyxhQUFhLENBQUNyRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztFQUU3QyxJQUFNcUcsZ0JBQWdCLEdBQUd4RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDdER1RyxnQkFBZ0IsQ0FBQ3RHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0VBRXBELElBQU1zRyxrQkFBa0IsR0FBR3pHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN4RHdHLGtCQUFrQixDQUFDdkcsU0FBUyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7RUFFeEQsSUFBTXVHLFNBQVMsR0FBRzFHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztFQUM5Q3lHLFNBQVMsQ0FBQ2xHLFdBQVcsR0FBRyxZQUFZO0VBQ3BDaUcsa0JBQWtCLENBQUNoRyxXQUFXLENBQUNpRyxTQUFTLENBQUM7RUFFekMsSUFBTUMsSUFBSSxHQUFHM0csUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzFDMEcsSUFBSSxDQUFDekcsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBQzFCd0csSUFBSSxDQUFDdEcsR0FBRyxHQUFHZ0YsMENBQUk7RUFDZnNCLElBQUksQ0FBQ3JHLEdBQUcsR0FBRyxNQUFNO0VBQ2pCbUcsa0JBQWtCLENBQUNoRyxXQUFXLENBQUNrRyxJQUFJLENBQUM7RUFFcEMsSUFBTUMsbUJBQW1CLEdBQUc1RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDekQyRyxtQkFBbUIsQ0FBQzFHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixDQUFDO0VBRTFELElBQU0wRyxVQUFVLEdBQUc3RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDL0M0RyxVQUFVLENBQUNyRyxXQUFXLEdBQUcsTUFBTTtFQUMvQixJQUFNc0csSUFBSSxHQUFHOUcsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQzNDNkcsSUFBSSxDQUFDdEcsV0FBVyxHQUFHLGNBQWM7RUFDakNzRyxJQUFJLENBQUM1RyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDMUIwRyxVQUFVLENBQUNwRyxXQUFXLENBQUNxRyxJQUFJLENBQUM7RUFDNUJGLG1CQUFtQixDQUFDbkcsV0FBVyxDQUFDb0csVUFBVSxDQUFDO0VBRTNDTCxnQkFBZ0IsQ0FBQy9GLFdBQVcsQ0FBQ2dHLGtCQUFrQixDQUFDO0VBQ2hERCxnQkFBZ0IsQ0FBQy9GLFdBQVcsQ0FBQ21HLG1CQUFtQixDQUFDO0VBRWpELElBQU1HLGtCQUFrQixHQUFHL0csUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3hEOEcsa0JBQWtCLENBQUM3RyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztFQUV4RCxJQUFNNkcsU0FBUyxHQUFHaEgsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzdDK0csU0FBUyxDQUFDOUcsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0VBQ3JDNkcsU0FBUyxDQUFDQyxFQUFFLEdBQUcsWUFBWTtFQUUzQkYsa0JBQWtCLENBQUN0RyxXQUFXLENBQUN1RyxTQUFTLENBQUM7RUFFekNULGFBQWEsQ0FBQzlGLFdBQVcsQ0FBQytGLGdCQUFnQixDQUFDO0VBQzNDRCxhQUFhLENBQUM5RixXQUFXLENBQUNzRyxrQkFBa0IsQ0FBQztFQUU3Q1QsY0FBYyxDQUFDN0YsV0FBVyxDQUFDOEYsYUFBYSxDQUFDO0VBRXpDLElBQU1XLGNBQWMsR0FBR2xILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNwRGlILGNBQWMsQ0FBQ2hILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0VBRS9DLElBQU1OLEtBQUssR0FBR0csUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzNDSixLQUFLLENBQUNRLEdBQUcsR0FBRytFLDhDQUFRO0VBQ3BCdkYsS0FBSyxDQUFDUyxHQUFHLEdBQUcsVUFBVTtFQUN0QlQsS0FBSyxDQUFDSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7RUFDL0IrRyxjQUFjLENBQUN6RyxXQUFXLENBQUNaLEtBQUssQ0FBQztFQUVqQ3lHLGNBQWMsQ0FBQzdGLFdBQVcsQ0FBQ3lHLGNBQWMsQ0FBQztFQUUxQ2IsYUFBYSxDQUFDNUYsV0FBVyxDQUFDNkYsY0FBYyxDQUFDO0VBRXpDLElBQU1hLGVBQWUsR0FBR25ILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNyRGtILGVBQWUsQ0FBQ2pILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0VBRWxELElBQU1pSCx3QkFBd0IsR0FBR3BILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM5RG1ILHdCQUF3QixDQUFDbEgsU0FBUyxDQUFDQyxHQUFHLENBQUMsNkJBQTZCLENBQUM7RUFFckUsSUFBTWtILE9BQU8sR0FBR3JILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3Q29ILE9BQU8sQ0FBQ25ILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUVqQyxJQUFNcUQsSUFBSSxHQUFHeEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ3pDdUQsSUFBSSxDQUFDaEQsV0FBVyxHQUFHLGdDQUFnQztFQUVuRCxJQUFNOEcsSUFBSSxHQUFHdEgsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQzNDcUgsSUFBSSxDQUFDOUcsV0FBVyxHQUFHLGVBQWU7RUFDbEM4RyxJQUFJLENBQUNwSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFFL0JxRCxJQUFJLENBQUMvQyxXQUFXLENBQUM2RyxJQUFJLENBQUM7RUFDdEJELE9BQU8sQ0FBQzVHLFdBQVcsQ0FBQytDLElBQUksQ0FBQztFQUN6QixJQUFNK0QsTUFBTSxHQUFHdkgsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzVDc0gsTUFBTSxDQUFDckgsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBQy9CLElBQU1nRCxTQUFTLEdBQUduRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDaERrRCxTQUFTLENBQUMzQyxXQUFXLEdBQ3BCLDBEQUEwRDtFQUMzRDJDLFNBQVMsQ0FBQ2pELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUVwQyxJQUFNcUgscUJBQXFCLEdBQUd4SCxRQUFRLENBQUNxRCxjQUFjLENBQ3BELG9OQUNELENBQUM7RUFDRCxJQUFNb0UsT0FBTyxHQUFHekgsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzNDd0gsT0FBTyxDQUFDdkgsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBRWpDc0gsT0FBTyxDQUFDaEgsV0FBVyxDQUFDMEMsU0FBUyxDQUFDO0VBQzlCc0UsT0FBTyxDQUFDaEgsV0FBVyxDQUFDK0cscUJBQXFCLENBQUM7RUFFMUMsSUFBTUUsVUFBVSxHQUFHMUgsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzlDeUgsVUFBVSxDQUFDbEgsV0FBVyxHQUNyQixrVEFBa1Q7RUFDblRrSCxVQUFVLENBQUN4SCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7RUFDcENvSCxNQUFNLENBQUM5RyxXQUFXLENBQUNnSCxPQUFPLENBQUM7RUFDM0JGLE1BQU0sQ0FBQzlHLFdBQVcsQ0FBQ2lILFVBQVUsQ0FBQztFQUM5QkwsT0FBTyxDQUFDNUcsV0FBVyxDQUFDOEcsTUFBTSxDQUFDO0VBQzNCSCx3QkFBd0IsQ0FBQzNHLFdBQVcsQ0FBQzRHLE9BQU8sQ0FBQztFQUU3QyxJQUFNTSxNQUFNLEdBQUczSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDNUMwSCxNQUFNLENBQUN6SCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDOUJ3SCxNQUFNLENBQUN0SCxHQUFHLEdBQUdpRiw0Q0FBTTtFQUNuQnFDLE1BQU0sQ0FBQ3JILEdBQUcsR0FBRyxRQUFRO0VBQ3JCOEcsd0JBQXdCLENBQUMzRyxXQUFXLENBQUNrSCxNQUFNLENBQUM7RUFFNUMsSUFBTUMsV0FBVyxHQUFHNUgsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2pEMkgsV0FBVyxDQUFDMUgsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBRXpDLElBQU0wSCxhQUFhLEdBQUc3SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbkQ0SCxhQUFhLENBQUMzSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUU5QyxJQUFNMkgsVUFBVSxHQUFHOUgsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQy9DNkgsVUFBVSxDQUFDdEgsV0FBVyxHQUFHLFlBQVk7RUFFckMsSUFBTXVILFVBQVUsR0FBRy9ILFFBQVEsQ0FBQ3FELGNBQWMsQ0FBQyxlQUFlLENBQUM7RUFDM0QsSUFBTTJFLFNBQVMsR0FBR2hJLFFBQVEsQ0FBQ3FELGNBQWMsQ0FBQyxVQUFVLENBQUM7RUFFckQsSUFBTTRFLFdBQVcsR0FBR2pJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUNsRGdJLFdBQVcsQ0FBQ3pILFdBQVcsR0FBRyxTQUFTO0VBRW5DLElBQU0wSCxhQUFhLEdBQUdsSSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDakRpSSxhQUFhLENBQUNoSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUM5QytILGFBQWEsQ0FBQ3pILFdBQVcsQ0FBQ3NILFVBQVUsQ0FBQztFQUNyQ0csYUFBYSxDQUFDekgsV0FBVyxDQUFDd0gsV0FBVyxDQUFDO0VBQ3RDQyxhQUFhLENBQUN6SCxXQUFXLENBQUN1SCxTQUFTLENBQUM7RUFFcENILGFBQWEsQ0FBQ3BILFdBQVcsQ0FBQ3FILFVBQVUsQ0FBQztFQUNyQ0QsYUFBYSxDQUFDcEgsV0FBVyxDQUFDeUgsYUFBYSxDQUFDO0VBRXhDLElBQU0xRixXQUFXLEdBQUd4QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDakR1QyxXQUFXLENBQUN0QyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFFekMsSUFBTXNDLE9BQU8sR0FBR3pDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMzQ3dDLE9BQU8sQ0FBQ0MsSUFBSSxHQUFHLDhCQUE4QjtFQUM3Q0QsT0FBTyxDQUFDRSxNQUFNLEdBQUcsUUFBUTtFQUN6QkYsT0FBTyxDQUFDRyxHQUFHLEdBQUcscUJBQXFCO0VBQ25DLElBQU1DLFNBQVMsR0FBRzdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQzRDLFNBQVMsQ0FBQ3hDLEdBQUcsR0FBR2hDLCtDQUFTO0VBQ3pCd0UsU0FBUyxDQUFDdkMsR0FBRyxHQUFHLFFBQVE7RUFDeEJ1QyxTQUFTLENBQUMzQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDdENzQyxPQUFPLENBQUNoQyxXQUFXLENBQUNvQyxTQUFTLENBQUM7RUFDOUJMLFdBQVcsQ0FBQy9CLFdBQVcsQ0FBQ2dDLE9BQU8sQ0FBQztFQUVoQyxJQUFNSyxVQUFVLEdBQUc5QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDOUM2QyxVQUFVLENBQUNKLElBQUksR0FBRyx1Q0FBdUM7RUFDekRJLFVBQVUsQ0FBQ0gsTUFBTSxHQUFHLFFBQVE7RUFDNUJHLFVBQVUsQ0FBQ0YsR0FBRyxHQUFHLHFCQUFxQjtFQUN0QyxJQUFNRyxNQUFNLEdBQUcvQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDNUM4QyxNQUFNLENBQUMxQyxHQUFHLEdBQUcvQiw0Q0FBTTtFQUNuQnlFLE1BQU0sQ0FBQ3pDLEdBQUcsR0FBRyxVQUFVO0VBQ3ZCeUMsTUFBTSxDQUFDN0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQ25DMkMsVUFBVSxDQUFDckMsV0FBVyxDQUFDc0MsTUFBTSxDQUFDO0VBQzlCUCxXQUFXLENBQUMvQixXQUFXLENBQUNxQyxVQUFVLENBQUM7RUFFbkM4RSxXQUFXLENBQUNuSCxXQUFXLENBQUNvSCxhQUFhLENBQUM7RUFDdENELFdBQVcsQ0FBQ25ILFdBQVcsQ0FBQytCLFdBQVcsQ0FBQztFQUVwQzJFLGVBQWUsQ0FBQzFHLFdBQVcsQ0FBQzJHLHdCQUF3QixDQUFDO0VBQ3JERCxlQUFlLENBQUMxRyxXQUFXLENBQUNtSCxXQUFXLENBQUM7RUFFeEN2QixhQUFhLENBQUM1RixXQUFXLENBQUMwRyxlQUFlLENBQUM7RUFFMUM1QixXQUFXLENBQUMsQ0FBQztBQUNkO0FBRUEsaUVBQWVhLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xPVztBQUNZO0FBQ047QUFDRjtBQUNRO0FBQ0E7QUFDWjtBQUVsQyxTQUFTc0MsaUJBQWlCQSxDQUFDN0ksS0FBSyxFQUFFQyxLQUFLLEVBQUU2SSxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFO0VBQzNFLElBQU1DLFdBQVcsR0FBRzlJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNqRDZJLFdBQVcsQ0FBQzVJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUV6QyxJQUFNNEksWUFBWSxHQUFHL0ksUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2xEOEksWUFBWSxDQUFDMUksR0FBRyxHQUFHUixLQUFLO0VBQ3hCa0osWUFBWSxDQUFDekksR0FBRyxHQUFHUixLQUFLO0VBQ3hCZ0osV0FBVyxDQUFDckksV0FBVyxDQUFDc0ksWUFBWSxDQUFDO0VBRXJDLElBQU1DLGNBQWMsR0FBR2hKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNwRCtJLGNBQWMsQ0FBQzlJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0VBRWhELElBQU04SSxZQUFZLEdBQUdqSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDakRnSixZQUFZLENBQUN6SSxXQUFXLEdBQUdWLEtBQUs7RUFFaEMsSUFBTW9KLGtCQUFrQixHQUFHbEosUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ3REaUosa0JBQWtCLENBQUMxSSxXQUFXLEdBQUdtSSxXQUFXO0VBRTVDLElBQU1RLGNBQWMsR0FBR25KLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNwRGtKLGNBQWMsQ0FBQ2pKLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0VBRWhELElBQU1pSixlQUFlLEdBQUdwSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDbkRtSixlQUFlLENBQUMxRyxJQUFJLEdBQUdrRyxRQUFRO0VBQy9CUSxlQUFlLENBQUM1SSxXQUFXLEdBQUcsV0FBVztFQUN6QzJJLGNBQWMsQ0FBQzFJLFdBQVcsQ0FBQzJJLGVBQWUsQ0FBQztFQUUzQyxJQUFNQyxpQkFBaUIsR0FBR3JKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNyRG9KLGlCQUFpQixDQUFDM0csSUFBSSxHQUFHbUcsVUFBVTtFQUNuQ1EsaUJBQWlCLENBQUM3SSxXQUFXLEdBQUcsYUFBYTtFQUM3QzJJLGNBQWMsQ0FBQzFJLFdBQVcsQ0FBQzRJLGlCQUFpQixDQUFDO0VBRTdDTCxjQUFjLENBQUN2SSxXQUFXLENBQUN3SSxZQUFZLENBQUM7RUFDeENELGNBQWMsQ0FBQ3ZJLFdBQVcsQ0FBQ3lJLGtCQUFrQixDQUFDO0VBQzlDRixjQUFjLENBQUN2SSxXQUFXLENBQUMwSSxjQUFjLENBQUM7RUFDMUNMLFdBQVcsQ0FBQ3JJLFdBQVcsQ0FBQ3VJLGNBQWMsQ0FBQztFQUV2QyxPQUFPRixXQUFXO0FBQ25CO0FBRUEsU0FBU1EsT0FBT0EsQ0FBQSxFQUFHO0VBQ2xCLElBQU1DLFVBQVUsR0FBR3ZKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNoRHNKLFVBQVUsQ0FBQ3JKLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztFQUN2QyxJQUFNOEksWUFBWSxHQUFHakosUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ2pEZ0osWUFBWSxDQUFDekksV0FBVyxHQUFHLFVBQVU7RUFDckMrSSxVQUFVLENBQUM5SSxXQUFXLENBQUN3SSxZQUFZLENBQUM7RUFFcEMsSUFBTU8sZ0JBQWdCLEdBQUd4SixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDdER1SixnQkFBZ0IsQ0FBQ3RKLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0VBRW5ELElBQU1zSixJQUFJLEdBQUdmLGlCQUFpQixDQUM3QlAsMENBQUksRUFDSixXQUFXLEVBQ1gsMlJBQTJSLEVBQzNSLHdDQUF3QyxFQUN4Qyx3Q0FDRCxDQUFDO0VBRUQsSUFBTXVCLFVBQVUsR0FBR2hCLGlCQUFpQixDQUNuQ04sZ0RBQVUsRUFDVixZQUFZLEVBQ1osd0xBQXdMLEVBQ3hMLHlDQUF5QyxFQUN6Qyx5Q0FDRCxDQUFDO0VBRUQsSUFBTXVCLE9BQU8sR0FBR2pCLGlCQUFpQixDQUNoQ0wsNkNBQU8sRUFDUCxhQUFhLEVBQ2IsbVJBQW1SLEVBQ25SLDJDQUEyQyxFQUMzQywyQ0FDRCxDQUFDO0VBRUQsSUFBTXVCLE1BQU0sR0FBR2xCLGlCQUFpQixDQUMvQkosNENBQU0sRUFDTixhQUFhLEVBQ2IsNFJBQTRSLEVBQzVSLDBDQUEwQyxFQUMxQywwQ0FDRCxDQUFDO0VBRUQsSUFBTXVCLFVBQVUsR0FBR25CLGlCQUFpQixDQUNuQ0gsZ0RBQVUsRUFDVixZQUFZLEVBQ1osMFFBQTBRLEVBQzFRLHlDQUF5QyxFQUN6Qyx5Q0FDRCxDQUFDO0VBRUQsSUFBTXVCLFVBQVUsR0FBR3BCLGlCQUFpQixDQUNuQ0YsZ0RBQVUsRUFDVixpQkFBaUIsRUFDakIsK1FBQStRLEVBQy9RLDhDQUE4QyxFQUM5Qyw4Q0FDRCxDQUFDO0VBRUQsSUFBTXVCLElBQUksR0FBR3JCLGlCQUFpQixDQUM3QkQsMENBQUksRUFDSixlQUFlLEVBQ2Ysd0pBQXdKLEVBQ3hKLDRDQUE0QyxFQUM1Qyw2Q0FDRCxDQUFDO0VBRURlLGdCQUFnQixDQUFDL0ksV0FBVyxDQUFDZ0osSUFBSSxDQUFDO0VBQ2xDRCxnQkFBZ0IsQ0FBQy9JLFdBQVcsQ0FBQ2lKLFVBQVUsQ0FBQztFQUN4Q0YsZ0JBQWdCLENBQUMvSSxXQUFXLENBQUNrSixPQUFPLENBQUM7RUFDckNILGdCQUFnQixDQUFDL0ksV0FBVyxDQUFDbUosTUFBTSxDQUFDO0VBQ3BDSixnQkFBZ0IsQ0FBQy9JLFdBQVcsQ0FBQ29KLFVBQVUsQ0FBQztFQUN4Q0wsZ0JBQWdCLENBQUMvSSxXQUFXLENBQUNxSixVQUFVLENBQUM7RUFDeENOLGdCQUFnQixDQUFDL0ksV0FBVyxDQUFDc0osSUFBSSxDQUFDO0VBRWxDUixVQUFVLENBQUM5SSxXQUFXLENBQUMrSSxnQkFBZ0IsQ0FBQztFQUN4QyxJQUFNdkUsSUFBSSxHQUFHakYsUUFBUSxDQUFDWSxhQUFhLENBQUMsaUJBQWlCLENBQUM7RUFDdERxRSxJQUFJLENBQUNDLFNBQVMsR0FBRyxFQUFFO0VBQ25CRCxJQUFJLENBQUN4RSxXQUFXLENBQUM4SSxVQUFVLENBQUM7QUFDN0I7QUFFQSxpRUFBZUQsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0hZO0FBQ0E7QUFDRTtBQUNGO0FBQ0Y7QUFDUztBQUNNO0FBRS9DLFNBQVNpQixZQUFZQSxDQUFBLEVBQUc7RUFDdkIsSUFBTUMsR0FBRyxHQUFHeEssUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3pDdUssR0FBRyxDQUFDdEssU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBRTVCLElBQU1zSyxZQUFZLEdBQUd6SyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbER3SyxZQUFZLENBQUN2SyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7RUFDM0MsSUFBTXVLLE9BQU8sR0FBRzFLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3Q3lLLE9BQU8sQ0FBQ3hLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUNqQyxJQUFNd0ssSUFBSSxHQUFHM0ssUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzFDMEssSUFBSSxDQUFDdEssR0FBRyxHQUFHMkosMENBQUk7RUFDZlcsSUFBSSxDQUFDckssR0FBRyxHQUFHLE1BQU07RUFDakIsSUFBTXNLLFFBQVEsR0FBRzVLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM1QzJLLFFBQVEsQ0FBQ25LLFdBQVcsQ0FBQ2tLLElBQUksQ0FBQztFQUMxQkQsT0FBTyxDQUFDakssV0FBVyxDQUFDbUssUUFBUSxDQUFDO0VBQzdCLElBQU1DLFFBQVEsR0FBRzdLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztFQUM3QzRLLFFBQVEsQ0FBQ3JLLFdBQVcsR0FBRyxjQUFjO0VBQ3JDLElBQU1zSyxTQUFTLEdBQUc5SyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDN0M2SyxTQUFTLENBQUNySyxXQUFXLENBQUNvSyxRQUFRLENBQUM7RUFDL0JILE9BQU8sQ0FBQ2pLLFdBQVcsQ0FBQ3FLLFNBQVMsQ0FBQztFQUU5QkwsWUFBWSxDQUFDaEssV0FBVyxDQUFDaUssT0FBTyxDQUFDO0VBRWpDLElBQU1LLFFBQVEsR0FBRy9LLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM5QzhLLFFBQVEsQ0FBQzdLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUVuQyxJQUFNNkssT0FBTyxHQUFHaEwsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzdDK0ssT0FBTyxDQUFDOUssU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBQ2hDLElBQU04SyxRQUFRLEdBQUdqTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDNUNnTCxRQUFRLENBQUN2SSxJQUFJLEdBQUcsR0FBRztFQUNuQnVJLFFBQVEsQ0FBQ3pLLFdBQVcsR0FBRyxNQUFNO0VBQzdCd0ssT0FBTyxDQUFDdkssV0FBVyxDQUFDd0ssUUFBUSxDQUFDO0VBRTdCLElBQU1DLFFBQVEsR0FBR2xMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM5Q2lMLFFBQVEsQ0FBQzdLLEdBQUcsR0FBRzRKLDBDQUFJO0VBQ25CaUIsUUFBUSxDQUFDNUssR0FBRyxHQUFHLE1BQU07RUFDckIwSyxPQUFPLENBQUN2SyxXQUFXLENBQUN5SyxRQUFRLENBQUM7RUFFN0JILFFBQVEsQ0FBQ3RLLFdBQVcsQ0FBQ3VLLE9BQU8sQ0FBQztFQUU3QixJQUFNRyxXQUFXLEdBQUduTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDakRrTCxXQUFXLENBQUNqTCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFDcEMsSUFBTWlMLFFBQVEsR0FBR3BMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM1Q21MLFFBQVEsQ0FBQzFJLElBQUksR0FBRyxHQUFHO0VBQ25CMEksUUFBUSxDQUFDNUssV0FBVyxHQUFHLE9BQU87RUFDOUIySyxXQUFXLENBQUMxSyxXQUFXLENBQUMySyxRQUFRLENBQUM7RUFFakMsSUFBTUMsUUFBUSxHQUFHckwsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzlDb0wsUUFBUSxDQUFDaEwsR0FBRyxHQUFHNkosMkNBQUs7RUFDcEJtQixRQUFRLENBQUMvSyxHQUFHLEdBQUcsT0FBTztFQUN0QjZLLFdBQVcsQ0FBQzFLLFdBQVcsQ0FBQzRLLFFBQVEsQ0FBQztFQUNqQ04sUUFBUSxDQUFDdEssV0FBVyxDQUFDMEssV0FBVyxDQUFDO0VBRWpDLElBQU1HLGNBQWMsR0FBR3RMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNwRHFMLGNBQWMsQ0FBQ3BMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztFQUN2QyxJQUFNb0wsV0FBVyxHQUFHdkwsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQy9Dc0wsV0FBVyxDQUFDN0ksSUFBSSxHQUFHLEdBQUc7RUFDdEI2SSxXQUFXLENBQUMvSyxXQUFXLEdBQUcsVUFBVTtFQUNwQzhLLGNBQWMsQ0FBQzdLLFdBQVcsQ0FBQzhLLFdBQVcsQ0FBQztFQUV2QyxJQUFNQyxXQUFXLEdBQUd4TCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDakR1TCxXQUFXLENBQUNuTCxHQUFHLEdBQUc4SiwwQ0FBSTtFQUN0QnFCLFdBQVcsQ0FBQ2xMLEdBQUcsR0FBRyxVQUFVO0VBQzVCZ0wsY0FBYyxDQUFDN0ssV0FBVyxDQUFDK0ssV0FBVyxDQUFDO0VBQ3ZDVCxRQUFRLENBQUN0SyxXQUFXLENBQUM2SyxjQUFjLENBQUM7RUFFcEMsSUFBTUcsWUFBWSxHQUFHekwsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2xEd0wsWUFBWSxDQUFDdkwsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBRXJDLElBQU11TCxTQUFTLEdBQUcxTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDN0N5TCxTQUFTLENBQUNoSixJQUFJLEdBQUcsR0FBRztFQUNwQmdKLFNBQVMsQ0FBQ2xMLFdBQVcsR0FBRyxRQUFRO0VBQ2hDaUwsWUFBWSxDQUFDaEwsV0FBVyxDQUFDaUwsU0FBUyxDQUFDO0VBRW5DLElBQU1DLFNBQVMsR0FBRzNMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQzBMLFNBQVMsQ0FBQ3RMLEdBQUcsR0FBRytKLHlDQUFHO0VBQ25CdUIsU0FBUyxDQUFDckwsR0FBRyxHQUFHLFFBQVE7RUFDeEJtTCxZQUFZLENBQUNoTCxXQUFXLENBQUNrTCxTQUFTLENBQUM7RUFDbkNaLFFBQVEsQ0FBQ3RLLFdBQVcsQ0FBQ2dMLFlBQVksQ0FBQzs7RUFFbEM7RUFDQSxJQUFNRyxTQUFTLEdBQUc1TCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDL0MyTCxTQUFTLENBQUMxTCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFDcEMsSUFBTTBMLGFBQWEsR0FBRzdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNuRDRMLGFBQWEsQ0FBQ3hMLEdBQUcsR0FBR2lLLCtDQUFZO0VBQ2hDdUIsYUFBYSxDQUFDdkwsR0FBRyxHQUFHLFdBQVc7RUFDL0JzTCxTQUFTLENBQUNuTCxXQUFXLENBQUNvTCxhQUFhLENBQUM7RUFFcEMsSUFBTUMsYUFBYSxHQUFHOUwsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ25ENkwsYUFBYSxDQUFDNUwsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFDN0MsSUFBTTRMLGlCQUFpQixHQUFHL0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ3JEOEwsaUJBQWlCLENBQUNySixJQUFJLEdBQUcsR0FBRztFQUM1QnFKLGlCQUFpQixDQUFDdkwsV0FBVyxHQUFHLE1BQU07RUFDdENzTCxhQUFhLENBQUNyTCxXQUFXLENBQUNzTCxpQkFBaUIsQ0FBQztFQUM1QyxJQUFNQyxrQkFBa0IsR0FBR2hNLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUN0RCtMLGtCQUFrQixDQUFDdEosSUFBSSxHQUFHLEdBQUc7RUFDN0JzSixrQkFBa0IsQ0FBQ3hMLFdBQVcsR0FBRyxPQUFPO0VBQ3hDc0wsYUFBYSxDQUFDckwsV0FBVyxDQUFDdUwsa0JBQWtCLENBQUM7RUFDN0MsSUFBTUMscUJBQXFCLEdBQUdqTSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDekRnTSxxQkFBcUIsQ0FBQ3ZKLElBQUksR0FBRyxHQUFHO0VBQ2hDdUoscUJBQXFCLENBQUN6TCxXQUFXLEdBQUcsVUFBVTtFQUM5Q3NMLGFBQWEsQ0FBQ3JMLFdBQVcsQ0FBQ3dMLHFCQUFxQixDQUFDO0VBQ2hELElBQU1DLG1CQUFtQixHQUFHbE0sUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ3ZEaU0sbUJBQW1CLENBQUN4SixJQUFJLEdBQUcsR0FBRztFQUM5QndKLG1CQUFtQixDQUFDMUwsV0FBVyxHQUFHLFFBQVE7RUFDMUNzTCxhQUFhLENBQUNyTCxXQUFXLENBQUN5TCxtQkFBbUIsQ0FBQztFQUU5Q04sU0FBUyxDQUFDbkwsV0FBVyxDQUFDcUwsYUFBYSxDQUFDO0VBQ3BDZixRQUFRLENBQUN0SyxXQUFXLENBQUNtTCxTQUFTLENBQUM7RUFFL0JwQixHQUFHLENBQUMvSixXQUFXLENBQUNnSyxZQUFZLENBQUM7RUFDN0JELEdBQUcsQ0FBQy9KLFdBQVcsQ0FBQ3NLLFFBQVEsQ0FBQztFQUV6QixJQUFNb0IsT0FBTyxHQUFHbk0sUUFBUSxDQUFDWSxhQUFhLENBQUMsYUFBYSxDQUFDO0VBQ3JEdUwsT0FBTyxDQUFDMUwsV0FBVyxDQUFDK0osR0FBRyxDQUFDO0FBQ3pCO0FBRUEsU0FBUzRCLFlBQVlBLENBQUEsRUFBRztFQUN2QixJQUFNQyxNQUFNLEdBQUdyTSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7RUFDL0NvTSxNQUFNLENBQUNuTSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFFOUIsSUFBTW1NLGFBQWEsR0FBR3RNLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNqRHFNLGFBQWEsQ0FBQzVKLElBQUksR0FBRyw4QkFBOEI7RUFFbkQsSUFBTTZKLGdCQUFnQixHQUFHdk0sUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3REc00sZ0JBQWdCLENBQUNsTSxHQUFHLEdBQUdnSywrQ0FBTTtFQUM3QmtDLGdCQUFnQixDQUFDak0sR0FBRyxHQUFHLGFBQWE7RUFFcEMsSUFBTWtNLGlCQUFpQixHQUFHeE0sUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ3JELElBQU13TSxRQUFRLEdBQUd6TSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDL0N3TSxRQUFRLENBQUN2TSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFDbkNzTSxRQUFRLENBQUNqTSxXQUFXLEdBQUcsR0FBRztFQUMxQixJQUFNa00sUUFBUSxHQUFHMU0sUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQy9DeU0sUUFBUSxDQUFDbE0sV0FBVyxHQUFHLFdBQVc7RUFDbENnTSxpQkFBaUIsQ0FBQy9MLFdBQVcsQ0FBQ2dNLFFBQVEsQ0FBQztFQUN2Q0QsaUJBQWlCLENBQUMvTCxXQUFXLENBQUNpTSxRQUFRLENBQUM7RUFFdkNKLGFBQWEsQ0FBQzdMLFdBQVcsQ0FBQzhMLGdCQUFnQixDQUFDO0VBQzNDRCxhQUFhLENBQUM3TCxXQUFXLENBQUMrTCxpQkFBaUIsQ0FBQztFQUU1QyxJQUFNRyxTQUFTLEdBQUczTSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDN0MwTSxTQUFTLENBQUNuTSxXQUFXLEdBQUcsR0FBRztFQUUzQixJQUFNb00sVUFBVSxHQUFHNU0sUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzlDMk0sVUFBVSxDQUFDbEssSUFBSSxHQUFHLGdEQUFnRDtFQUNsRWtLLFVBQVUsQ0FBQ3BNLFdBQVcsR0FBRyxhQUFhO0VBRXRDNkwsTUFBTSxDQUFDNUwsV0FBVyxDQUFDNkwsYUFBYSxDQUFDO0VBQ2pDRCxNQUFNLENBQUM1TCxXQUFXLENBQUNrTSxTQUFTLENBQUM7RUFDN0JOLE1BQU0sQ0FBQzVMLFdBQVcsQ0FBQ21NLFVBQVUsQ0FBQztFQUU5QjVNLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDSCxXQUFXLENBQUM0TCxNQUFNLENBQUM7QUFDMUQ7QUFFQSxTQUFTUSxTQUFTQSxDQUFBLEVBQUc7RUFDcEJ0QyxZQUFZLENBQUMsQ0FBQztFQUNkLElBQU1sRSxhQUFhLEdBQUdyRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbkRvRyxhQUFhLENBQUNuRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM3Q0gsUUFBUSxDQUFDWSxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUNILFdBQVcsQ0FBQzRGLGFBQWEsQ0FBQztFQUNoRStGLFlBQVksQ0FBQyxDQUFDO0VBQ2RVLE1BQU0sQ0FBQ3BMLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0lBQ3ZDLElBQU1xTCxNQUFNLEdBQUcvTSxRQUFRLENBQUNZLGFBQWEsQ0FBQyxVQUFVLENBQUM7SUFDakQsSUFBSWtNLE1BQU0sQ0FBQ0UsT0FBTyxHQUFHLENBQUMsRUFBRTtNQUN2QkQsTUFBTSxDQUFDN00sU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7SUFDekMsQ0FBQyxNQUFNO01BQ040TSxNQUFNLENBQUM3TSxTQUFTLENBQUMrTSxNQUFNLENBQUMsa0JBQWtCLENBQUM7SUFDNUM7RUFDRCxDQUFDLENBQUM7O0VBRUY7RUFDQSxJQUFNckIsU0FBUyxHQUFHNUwsUUFBUSxDQUFDWSxhQUFhLENBQUMsWUFBWSxDQUFDO0VBQ3RELElBQU1rTCxhQUFhLEdBQUc5TCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztFQUMvRGdMLFNBQVMsQ0FBQ2xLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3pDLElBQUlvSyxhQUFhLENBQUM1TCxTQUFTLENBQUNnTixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7TUFDL0NwQixhQUFhLENBQUM1TCxTQUFTLENBQUMrTSxNQUFNLENBQUMsUUFBUSxDQUFDO01BQ3hDbkIsYUFBYSxDQUFDNUwsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ3hDLENBQUMsTUFBTSxJQUFJMkwsYUFBYSxDQUFDNUwsU0FBUyxDQUFDZ04sUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO01BQ3hEcEIsYUFBYSxDQUFDNUwsU0FBUyxDQUFDK00sTUFBTSxDQUFDLFVBQVUsQ0FBQztNQUMxQ25CLGFBQWEsQ0FBQzVMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUN0QyxDQUFDLE1BQU07TUFDTjJMLGFBQWEsQ0FBQzVMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUN0QztFQUNELENBQUMsQ0FBQztBQUNIO0FBRUEsaUVBQWUwTSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoTXhCO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUM7QUFDckMsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2Qiw4QkFBOEI7QUFDOUIscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGNBQWM7QUFDZCx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQyx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdHQUFnRyxNQUFNLFFBQVEsUUFBUSxNQUFNLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLHVCQUF1QixPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sTUFBTSxPQUFPLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLHNCQUFzQixxQkFBcUIsdUJBQXVCLHFCQUFxQixPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxzVkFBc1YsdUJBQXVC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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYixlQUFlO0FBQ2Y7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sb0ZBQW9GLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsd0JBQXdCLHlCQUF5QixPQUFPLE9BQU8sT0FBTyxLQUFLLHdCQUF3QixVQUFVLGlCQUFpQixPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLHdCQUF3QixPQUFPLFlBQVksTUFBTSx3QkFBd0IseUJBQXlCLE9BQU8sWUFBWSxNQUFNLHNCQUFzQixPQUFPLFlBQVksTUFBTSx3QkFBd0IsT0FBTyxVQUFVLEtBQUssWUFBWSx5QkFBeUIsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssd0JBQXdCLHlCQUF5QixPQUFPLEtBQUssd0JBQXdCLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxLQUFLLHdCQUF3QixPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1B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QUM7QUFFRkQsZ0JBQWdCLENBQUNqTSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUNoRG9MLE1BQU0sQ0FBQ2MsSUFBSSxDQUNWLG9GQUNELENBQUM7QUFDRixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvc2V0dXAuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvY3NzL25vcm1hbGl6ZS5jc3M/NmQ1NCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy90eXBlZC5qcy9kaXN0L3R5cGVkLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGFoaXIgZnJvbSBcIi4vaW1nL3NoYWhpci5QTkdcIjtcbmltcG9ydCBHaXRTb2NpYWwgZnJvbSBcIi4vaW1nL2dpdFNvY2lhbC5zdmdcIjtcbmltcG9ydCBMaW5rZWQgZnJvbSBcIi4vaW1nL2xpbmtlZC5zdmdcIjtcbmltcG9ydCBEb2NrZXIgZnJvbSBcIi4vaW1nL2RvY2tlci5zdmdcIjtcbmltcG9ydCBTcWwgZnJvbSBcIi4vaW1nL3NxbC5zdmdcIjtcbmltcG9ydCBFY2xpcHNlIGZyb20gXCIuL2ltZy9lY2xpcHNlLnN2Z1wiO1xuaW1wb3J0IEx1YSBmcm9tIFwiLi9pbWcvbHVhLnN2Z1wiO1xuaW1wb3J0IFZ1ZSBmcm9tIFwiLi9pbWcvdnVlLnN2Z1wiO1xuaW1wb3J0IEN5cHJlc3MgZnJvbSBcIi4vaW1nL2N5cHJlc3Muc3ZnXCI7XG5pbXBvcnQgVnNjb2RlIGZyb20gXCIuL2ltZy92c2NvZGUuc3ZnXCI7XG5pbXBvcnQgQyBmcm9tIFwiLi9pbWcvYy5zdmdcIjtcbmltcG9ydCBOcG0gZnJvbSBcIi4vaW1nL25wbS5zdmdcIjtcbmltcG9ydCBCYWJlbCBmcm9tIFwiLi9pbWcvYmFiZWwuc3ZnXCI7XG5pbXBvcnQgUHJldHRpZXIgZnJvbSBcIi4vaW1nL3ByZXR0aWVyLnN2Z1wiO1xuaW1wb3J0IEVzbGludCBmcm9tIFwiLi9pbWcvZXNsaW50LnN2Z1wiO1xuaW1wb3J0IFdlYnBhY2sgZnJvbSBcIi4vaW1nL3dlYnBhY2suc3ZnXCI7XG5pbXBvcnQgSmVzdCBmcm9tIFwiLi9pbWcvamVzdC5zdmdcIjtcbmltcG9ydCBHaXQgZnJvbSBcIi4vaW1nL2dpdC5zdmdcIjtcbmltcG9ydCBQeXRob24gZnJvbSBcIi4vaW1nL3B5dGhvbi5zdmdcIjtcbmltcG9ydCBKYXZhIGZyb20gXCIuL2ltZy9qYXZhLnN2Z1wiO1xuaW1wb3J0IExpbnV4IGZyb20gXCIuL2ltZy9saW51eC5zdmdcIjtcbmltcG9ydCBIdG1sIGZyb20gXCIuL2ltZy9odG1sLnN2Z1wiO1xuaW1wb3J0IENzcyBmcm9tIFwiLi9pbWcvY3NzLnN2Z1wiO1xuaW1wb3J0IEpzIGZyb20gXCIuL2ltZy9qcy5zdmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWxJdGVtKGltYWdlLCB0aXRsZSkge1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjYXJvdXNlbEl0ZW0uY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWl0ZW1cIik7XG5cblx0Y29uc3QgY2Fyb3VzZWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGNhcm91c2VsSW1hZ2Uuc3JjID0gaW1hZ2U7XG5cdGNhcm91c2VsSW1hZ2UuYWx0ID0gdGl0bGU7XG5cdGNhcm91c2VsSW1hZ2UuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWltYWdlXCIpO1xuXG5cdGNvbnN0IGNhcm91c2VsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y2Fyb3VzZWxUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtdGl0bGVcIik7XG5cdGNhcm91c2VsVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuXHRjYXJvdXNlbEl0ZW0uYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJbWFnZSk7XG5cdGNhcm91c2VsSXRlbS5hcHBlbmRDaGlsZChjYXJvdXNlbFRpdGxlKTtcblxuXHRyZXR1cm4gY2Fyb3VzZWxJdGVtO1xufVxuXG4vLyBhZGQgYnV0dG9ucyB0byB0aGUgY2Fyb3VzZWwgYW5kIGNvbnRyb2wgdGhlIHNjcm9sbGluZ1xuZnVuY3Rpb24gYnV0dG9ucygpIHtcblx0Y29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcm91c2VsXCIpO1xuXHRjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrLWJ0blwiKTtcblx0Y29uc3QgZm9yd2FyZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yd2FyZC1idG5cIik7XG5cdGxldCBpc1Njcm9sbGluZyA9IGZhbHNlOyAvLyBUaGlzIHZhcmlhYmxlIHdpbGwgYmUgdXNlZCB0byBpbmRpY2F0ZSBzY3JvbGxpbmcgc3RhdHVzXG5cdGxldCBzY3JvbGxEaXJlY3Rpb24gPSAwOyAvLyAwIGZvciBsZWZ0LCAxIGZvciByaWdodFxuXHRjb25zdCBzY3JvbGxTdGVwID0gODsgLy8gVGhpcyB2YWx1ZSBjb250cm9scyB0aGUgc21vb3RobmVzcyBvZiB0aGUgc2Nyb2xsXG5cblx0Ly8gc21vb3RoIHNjcm9sbCBhbmltYXRpb25cblx0Y29uc3QgYW5pbWF0ZVNjcm9sbCA9ICgpID0+IHtcblx0XHQvLyBpZiBzY3JvbGxpbmcgaXMgc3RpbGwgaW4gcHJvZ3Jlc3MsIHRoZW4gY29udGludWUgc2Nyb2xsaW5nXG5cdFx0aWYgKCFpc1Njcm9sbGluZykgcmV0dXJuO1xuXG5cdFx0Ly8gc2Nyb2xsIGJ5IHRoZSBzY3JvbGxTdGVwXG5cdFx0Y29uc3Qgc2Nyb2xsRGlzdGFuY2UgPSBzY3JvbGxEaXJlY3Rpb24gPT09IDAgPyAtc2Nyb2xsU3RlcCA6IHNjcm9sbFN0ZXA7XG5cdFx0Y2Fyb3VzZWwuc2Nyb2xsTGVmdCArPSBzY3JvbGxEaXN0YW5jZTtcblxuXHRcdC8vIGlmIHRoZSBzY3JvbGwgaXMgbm90IGF0IHRoZSBlbmQsIHRoZW4gY29udGludWUgc2Nyb2xsaW5nXG5cdFx0aWYgKFxuXHRcdFx0KHNjcm9sbERpcmVjdGlvbiA9PT0gMCAmJiBjYXJvdXNlbC5zY3JvbGxMZWZ0ID4gMCkgfHxcblx0XHRcdChzY3JvbGxEaXJlY3Rpb24gPT09IDEgJiZcblx0XHRcdFx0Y2Fyb3VzZWwuc2Nyb2xsTGVmdCArIGNhcm91c2VsLm9mZnNldFdpZHRoIDwgY2Fyb3VzZWwuc2Nyb2xsV2lkdGgpXG5cdFx0KSB7XG5cdFx0XHQvLyBhbmltYXRlIHRoZSBzY3JvbGwgYXQgNjAgZnJhbWVzIHBlciBzZWNvbmRcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlU2Nyb2xsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gb3RoZXJ3aXNlLCBzdG9wIHNjcm9sbGluZ1xuXHRcdFx0aXNTY3JvbGxpbmcgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0Ly8gc2Nyb2xsIGxlZnQgd2hlbiB0aGUgYmFjayBidXR0b24gaXMgY2xpY2tlZFxuXHRjb25zdCBzY3JvbGxMZWZ0ID0gKCkgPT4ge1xuXHRcdC8vIGlmIHRoZSBzY3JvbGwgaXMgbm90IGluIHByb2dyZXNzLCB0aGVuIHN0YXJ0IHNjcm9sbGluZ1xuXHRcdGlmICghaXNTY3JvbGxpbmcpIHtcblx0XHRcdHNjcm9sbERpcmVjdGlvbiA9IDA7IC8vIDAgZm9yIGxlZnRcblx0XHRcdGlzU2Nyb2xsaW5nID0gdHJ1ZTsgLy8gdGhlIHNjcm9sbCBpcyBpbiBwcm9ncmVzc1xuXHRcdFx0YW5pbWF0ZVNjcm9sbCgpOyAvLyBzdGFydCBzY3JvbGxpbmdcblx0XHR9XG5cdH07XG5cblx0Ly8gc2Nyb2xsIHJpZ2h0IHdoZW4gdGhlIG5leHQgYnV0dG9uIGlzIGNsaWNrZWRcblx0Y29uc3Qgc2Nyb2xsUmlnaHQgPSAoKSA9PiB7XG5cdFx0Ly8gaWYgdGhlIHNjcm9sbCBpcyBub3QgaW4gcHJvZ3Jlc3MsIHRoZW4gc3RhcnQgc2Nyb2xsaW5nXG5cdFx0aWYgKCFpc1Njcm9sbGluZykge1xuXHRcdFx0c2Nyb2xsRGlyZWN0aW9uID0gMTsgLy8gMSBmb3IgcmlnaHRcblx0XHRcdGlzU2Nyb2xsaW5nID0gdHJ1ZTsgLy8gdGhlIHNjcm9sbCBpcyBpbiBwcm9ncmVzc1xuXHRcdFx0YW5pbWF0ZVNjcm9sbCgpOyAvLyBzdGFydCBzY3JvbGxpbmdcblx0XHR9XG5cdH07XG5cblx0Ly8gc3RvcCBzY3JvbGxpbmcgd2hlbiB0aGUgbW91c2UgbGVhdmVzIHRoZSBidXR0b25cblx0Y29uc3Qgc3RvcFNjcm9sbCA9ICgpID0+IHtcblx0XHRpc1Njcm9sbGluZyA9IGZhbHNlOyAvLyB0aGUgc2Nyb2xsIGlzIG5vdCBpbiBwcm9ncmVzc1xuXHR9O1xuXG5cdC8vIGFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGJ1dHRvbnNcblx0YmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzY3JvbGxMZWZ0KTsgLy8gU2Nyb2xsIGxlZnQgb24gbW91c2UgZW50ZXJcblx0YmFja0J0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wU2Nyb2xsKTsgLy8gU3RvcCBzY3JvbGxpbmcgb24gbW91c2UgbGVhdmVcblx0Zm9yd2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBzY3JvbGxSaWdodCk7IC8vIFNjcm9sbCByaWdodCBvbiBtb3VzZSBlbnRlclxuXHRmb3J3YXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BTY3JvbGwpOyAvLyBTdG9wIHNjcm9sbGluZyBvbiBtb3VzZSBsZWF2ZVxufVxuXG5mdW5jdGlvbiBhYm91dCgpIHtcblx0Y29uc3QgYWJvdXRQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0YWJvdXRQYWdlLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1wYWdlXCIpO1xuXG5cdGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0YWJvdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBhYm91dFRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRhYm91dFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LXRleHQtY29udGFpbmVyXCIpO1xuXHRjb25zdCBhYm91dE1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRhYm91dE1lLnRleHRDb250ZW50ID0gXCJBYm91dCBcIjtcblx0Y29uc3QgYWJvdXRNZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0YWJvdXRNZVNwYW4udGV4dENvbnRlbnQgPSBcIk1lXCI7XG5cdGFib3V0TWUuYXBwZW5kQ2hpbGQoYWJvdXRNZVNwYW4pO1xuXHRhYm91dE1lLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZVwiKTtcblx0YWJvdXRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWUpO1xuXHRhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFRleHRDb250YWluZXIpO1xuXG5cdGNvbnN0IGFib3V0TWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRhYm91dE1lRGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZS1kaXZcIik7XG5cblx0Y29uc3QgYWJvdXRNZVRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRhYm91dE1lVGV4dERpdi5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbWUtdGV4dC1kaXZcIik7XG5cblx0Y29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoXCJwYXJhZ3JhcGhcIik7XG5cblx0Y29uc3QgYWJvdXRNZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0YWJvdXRNZVRleHQuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLXRleHRcIik7XG5cdGFib3V0TWVUZXh0LnRleHRDb250ZW50ID1cblx0XHRcIkhlbGxvLCBJJ20gU2hhaGlyLCBhIGRlZGljYXRlZCBDb21wdXRlciBTY2llbmNlIGFuZCBNYXRoZW1hdGljcyBzdHVkZW50IGF0IERpY2tpbnNvbiBDb2xsZWdlIHdpdGggYSBkZWVwIHBhc3Npb24gZm9yIHdlYiBkZXZlbG9wbWVudC4gTXkgYWNhZGVtaWMgYW5kIHNlbGYtdGF1Z2h0IGpvdXJuZXkgaW4gcHJvZ3JhbW1pbmcgaGFzIGVxdWlwcGVkIG1lIHdpdGggdGhlIHNraWxscyB0byBjcmFmdCBlZmZpY2llbnQsIHNjYWxhYmxlIHNvZnR3YXJlIHNvbHV0aW9ucy4gSSB0aHJpdmUgb24gdGhlIGNoYWxsZW5nZXMgdGhhdCBjb21lIHdpdGggZGV2ZWxvcGluZyBjbGVhbiwgaW50dWl0aXZlIHVzZXIgaW50ZXJmYWNlcyBhbmQgcm9idXN0IGJhY2tlbmQgZnVuY3Rpb25hbGl0aWVzLiBNeSBnb2FsIGlzIHRvIGNvbnRpbnVvdXNseSBleHBhbmQgbXkgZnVsbC1zdGFjayBkZXZlbG9wbWVudCBleHBlcnRpc2UgYW5kIGNvbnRyaWJ1dGUgdG8gbWVhbmluZ2Z1bCBwcm9qZWN0cyBpbiBhIGR5bmFtaWMgdGVhbSBlbnZpcm9ubWVudC5cIjtcblxuXHRjb25zdCBhYm91dE1lVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0YWJvdXRNZVRleHQyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZS10ZXh0XCIpO1xuXHRhYm91dE1lVGV4dDIudGV4dENvbnRlbnQgPSBgV2hlbiBJIHN0ZXAgYXdheSBmcm9tIHRoZSBrZXlib2FyZCwgeW91J2xsIGZpbmQgbWUgaW5kdWxnaW5nIGluIGEgdmFyaWV0eSBvZiBpbnRlcmVzdHMgdGhhdCBrZWVwIG1lIGJhbGFuY2VkIGFuZCBpbnNwaXJlZC4gSSdtIGFuIGF2aWQgc29jY2VyIGZhbiwgd2l0aCBSZWFsIE1hZHJpZCdzIGdhbWVzIHB1bmN0dWF0aW5nIHRoZSBjYWxlbmRhciBvZiBteSBwZXJzb25hbCBsaWZlLiBJbiB0aGUgd29ybGQgb2YgbWl4ZWQgbWFydGlhbCBhcnRzLCBJIGFkbWlyZSB0aGUgc3RyYXRlZ2ljIHByb3dlc3Mgb2YgZmlnaHRlcnMgbGlrZSB0aGUgcmV0aXJlZCBLaGFiaWIgTnVybWFnb21lZG92LiBNeSB0YXN0ZSBpbiBlbnRlcnRhaW5tZW50IHJhbmdlcyBmcm9tIHRoZSBjYXB0aXZhdGluZyBuYXJyYXRpdmVzIG9mIFwiVGhlIFNoYXdzaGFuayBSZWRlbXB0aW9uXCIgdG8gdGhlIGNvbXBsZXggbGVnYWwgZHJhbWFzIG9mIFwiQmV0dGVyIENhbGwgU2F1bC5cIiBHYW1pbmcgaXMgYW5vdGhlciBwYXNzaW9uIOKAlCBpbW1lcnNpbmcgbXlzZWxmIGluIHJpY2gsIHN0b3J5LWRyaXZlbiB3b3JsZHMgbGlrZSB0aG9zZSBvZiBSZWQgRGVhZCBSZWRlbXB0aW9uIDIsIExBIE5vaXJlLCBhbmQgU2xlZXBpbmcgRG9ncyBwcm92aWRlcyBub3QganVzdCByZWNyZWF0aW9uLCBidXQgY3JlYXRpdmUgaW5zcGlyYXRpb24uYDtcblxuXHRjb25zdCBhYm91dE1lVGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0YWJvdXRNZVRleHQzLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZS10ZXh0XCIpO1xuXHRhYm91dE1lVGV4dDMudGV4dENvbnRlbnQgPVxuXHRcdFwiSW4gYWRkaXRpb24gdG8gbXkgc3R1ZGllcyBhbmQgaG9iYmllcywgSSBzZXJ2ZSBhcyBhIFJlc2lkZW50IEFkdmlzb3IsIGEgcm9sZSB0aGF0IGhhcyByZWZpbmVkIG15IGludGVycGVyc29uYWwgc2tpbGxzIGFuZCBhYmlsaXR5IHRvIGZvc3RlciBjb21tdW5pdHkgYW1vbmcgZGl2ZXJzZSBncm91cHMuIEl0J3MgYSByb2xlIHRoYXQgY29tcGxlbWVudHMgbXkgdGVjaG5pY2FsIGFzcGlyYXRpb25zIGJ5IGVtcGhhc2l6aW5nIGVtcGF0aHksIGxlYWRlcnNoaXAsIGFuZCBjb2xsYWJvcmF0aW9uLlwiO1xuXG5cdGNvbnN0IGFib3V0TWVUZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRhYm91dE1lVGV4dDQuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLXRleHRcIik7XG5cdGFib3V0TWVUZXh0NC50ZXh0Q29udGVudCA9XG5cdFx0XCJJJ20gZXhjaXRlZCB0byBlbWJhcmsgb24gdGhlIG5leHQgc3RhZ2Ugb2YgbXkgY2FyZWVyIGpvdXJuZXkgYW5kIGFtIGFjdGl2ZWx5IHNlZWtpbmcgaW50ZXJuc2hpcCBvcHBvcnR1bml0aWVzIHRoYXQgd2lsbCBsZXZlcmFnZSBteSB0ZWNobmljYWwgc2tpbGxzIGFuZCB3b3JrIGV0aGljLiBJZiB5b3UncmUgbG9va2luZyBmb3Igc29tZW9uZSB3aG8gYnJpbmdzIGEgY29tYmluYXRpb24gb2YgY29kaW5nIHByb2ZpY2llbmN5IGFuZCBhIHdlbGwtcm91bmRlZCBwZXJzcGVjdGl2ZSB0byB5b3VyIHRlYW0sIGxldCdzIGNvbm5lY3QuXCI7XG5cblx0cGFyYWdyYXBoLmFwcGVuZENoaWxkKGFib3V0TWVUZXh0KTtcblx0cGFyYWdyYXBoLmFwcGVuZENoaWxkKGFib3V0TWVUZXh0Mik7XG5cdHBhcmFncmFwaC5hcHBlbmRDaGlsZChhYm91dE1lVGV4dDMpO1xuXHRwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoYWJvdXRNZVRleHQ0KTtcblx0YWJvdXRNZVRleHREaXYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcblxuXHRjb25zdCBzb2NpYWxJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNvY2lhbEljb25zLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvbnNcIik7XG5cblx0Y29uc3QgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDdcIjtcblx0Z2l0TGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXHRnaXRMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuXHRjb25zdCBnaXRTb2NpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRnaXRTb2NpYWwuc3JjID0gR2l0U29jaWFsO1xuXHRnaXRTb2NpYWwuYWx0ID0gXCJHaXRIdWJcIjtcblx0Z2l0U29jaWFsLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvblwiKTtcblx0Z2l0TGluay5hcHBlbmRDaGlsZChnaXRTb2NpYWwpO1xuXHRzb2NpYWxJY29ucy5hcHBlbmRDaGlsZChnaXRMaW5rKTtcblxuXHRjb25zdCBsaW5rZWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGxpbmtlZExpbmsuaHJlZiA9IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NoYWhpcjQ3L1wiO1xuXHRsaW5rZWRMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cdGxpbmtlZExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5cdGNvbnN0IGxpbmtlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGxpbmtlZC5zcmMgPSBMaW5rZWQ7XG5cdGxpbmtlZC5hbHQgPSBcIkxpbmtlZEluXCI7XG5cdGxpbmtlZC5jbGFzc0xpc3QuYWRkKFwic29jaWFsLWljb25cIik7XG5cdGxpbmtlZExpbmsuYXBwZW5kQ2hpbGQobGlua2VkKTtcblx0c29jaWFsSWNvbnMuYXBwZW5kQ2hpbGQobGlua2VkTGluayk7XG5cblx0YWJvdXRNZVRleHREaXYuYXBwZW5kQ2hpbGQoc29jaWFsSWNvbnMpO1xuXHRhYm91dE1lRGl2LmFwcGVuZENoaWxkKGFib3V0TWVUZXh0RGl2KTtcblxuXHRjb25zdCBwaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0cGljdHVyZS5zcmMgPSBTaGFoaXI7XG5cdHBpY3R1cmUuYWx0ID0gXCJTaGFoaXJcIjtcblx0cGljdHVyZS5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbWUtcGljdHVyZVwiKTtcblx0YWJvdXRNZURpdi5hcHBlbmRDaGlsZChwaWN0dXJlKTtcblxuXHRhYm91dENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dE1lRGl2KTtcblx0YWJvdXRQYWdlLmFwcGVuZENoaWxkKGFib3V0Q29udGFpbmVyKTtcblxuXHRjb25zdCBzZWNvbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzZWNvbmREaXYuY2xhc3NMaXN0LmFkZChcInNlY29uZC1kaXZcIik7XG5cblx0Y29uc3Qgc2Vjb25kRGl2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNlY29uZERpdlRleHQuY2xhc3NMaXN0LmFkZChcInNlY29uZC1kaXYtdGV4dFwiKTtcblxuXHRjb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0aGlnaGxpZ2h0LmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG5cdGhpZ2hsaWdodC50ZXh0Q29udGVudCA9IFwiVG9vbHNcIjtcblxuXHRjb25zdCBhbmQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiBhbmRcIik7XG5cblx0Y29uc3QgaGlnaGxpZ2h0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRoaWdobGlnaHRUZXh0LnRleHRDb250ZW50ID0gXCIgVGVjaG5vbG9naWVzXCI7XG5cdGhpZ2hsaWdodFRleHQuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcblxuXHRjb25zdCBzZW50ZW5jZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIEkndmUgd29ya2VkIHdpdGhcIik7XG5cblx0Y29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHR0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuXHR0ZXh0LmFwcGVuZENoaWxkKGhpZ2hsaWdodCk7XG5cdHRleHQuYXBwZW5kQ2hpbGQoYW5kKTtcblx0dGV4dC5hcHBlbmRDaGlsZChoaWdobGlnaHRUZXh0KTtcblx0dGV4dC5hcHBlbmRDaGlsZChzZW50ZW5jZSk7XG5cdHNlY29uZERpdlRleHQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cdHNlY29uZERpdi5hcHBlbmRDaGlsZChzZWNvbmREaXZUZXh0KTtcblxuXHRjb25zdCBjYXJvdXNlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNhcm91c2VsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1jb250YWluZXJcIik7XG5cblx0Y29uc3QgY2Fyb3VzZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjYXJvdXNlbERpdi5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtZGl2XCIpO1xuXG5cdGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRiYWNrQnRuLmNsYXNzTGlzdC5hZGQoXCJiYWNrLWJ0blwiKTtcblx0YmFja0J0bi50ZXh0Q29udGVudCA9IFwiPFwiO1xuXHRjYXJvdXNlbERpdi5hcHBlbmRDaGlsZChiYWNrQnRuKTtcblxuXHRjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNhcm91c2VsLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbFwiKTtcblxuXHRjb25zdCBjYXJvdXNlbEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y2Fyb3VzZWxJdGVtcy5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtaXRlbXNcIik7XG5cblx0Y29uc3QgY2Fyb3VzZWxJdGVtMSA9IGNyZWF0ZUNhcm91c2VsSXRlbShIdG1sLCBcIkhUTUxcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTIgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oQ3NzLCBcIkNTU1wiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMyA9IGNyZWF0ZUNhcm91c2VsSXRlbShKcywgXCJKYXZhU2NyaXB0XCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW00ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEdpdCwgXCJHaXRcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTUgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oTnBtLCBcIk5QTVwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtNiA9IGNyZWF0ZUNhcm91c2VsSXRlbShWc2NvZGUsIFwiVlMgQ29kZVwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtNyA9IGNyZWF0ZUNhcm91c2VsSXRlbShEb2NrZXIsIFwiRG9ja2VyXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW04ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKExpbnV4LCBcIkxpbnV4XCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW05ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKFB5dGhvbiwgXCJQeXRob25cIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTEwID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEphdmEsIFwiSmF2YVwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTEgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oU3FsLCBcIlNRTFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTIgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oV2VicGFjaywgXCJXZWJwYWNrXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xMyA9IGNyZWF0ZUNhcm91c2VsSXRlbShWdWUsIFwiVnVlLmpzXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xNCA9IGNyZWF0ZUNhcm91c2VsSXRlbShCYWJlbCwgXCJCYWJlbFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTUgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oSmVzdCwgXCJKZXN0XCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xNiA9IGNyZWF0ZUNhcm91c2VsSXRlbShQcmV0dGllciwgXCJQcmV0dGllclwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTcgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oRXNsaW50LCBcIkVzbGludFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTggPSBjcmVhdGVDYXJvdXNlbEl0ZW0oQ3lwcmVzcywgXCJDeXByZXNzXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xOSA9IGNyZWF0ZUNhcm91c2VsSXRlbShDLCBcIkMrK1wiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMjAgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oTHVhLCBcIkx1YVwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMjEgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oRWNsaXBzZSwgXCJFY2xpcHNlXCIpO1xuXG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMSk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMik7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMyk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtNCk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtNSk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtNik7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtNyk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtOCk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtOSk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTApO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTExKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xMik7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTMpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTE0KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xNSk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTYpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTE3KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xOCk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTkpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTIwKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0yMSk7XG5cblx0Y2Fyb3VzZWwuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtcyk7XG5cdGNhcm91c2VsRGl2LmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuXHRjYXJvdXNlbERpdi5hcHBlbmRDaGlsZChjYXJvdXNlbCk7XG5cblx0Y29uc3QgZm9yd2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGZvcndhcmRCdG4uY2xhc3NMaXN0LmFkZChcImZvcndhcmQtYnRuXCIpO1xuXHRmb3J3YXJkQnRuLnRleHRDb250ZW50ID0gXCI+XCI7XG5cdGNhcm91c2VsRGl2LmFwcGVuZENoaWxkKGZvcndhcmRCdG4pO1xuXG5cdGNhcm91c2VsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcm91c2VsRGl2KTtcblx0c2Vjb25kRGl2LmFwcGVuZENoaWxkKGNhcm91c2VsQ29udGFpbmVyKTtcblx0YWJvdXRQYWdlLmFwcGVuZENoaWxkKHNlY29uZERpdik7XG5cblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG5cdG1haW4uaW5uZXJIVE1MID0gXCJcIjtcblx0bWFpbi5hcHBlbmRDaGlsZChhYm91dFBhZ2UpO1xuXG5cdGJ1dHRvbnMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgVHlwZWQgZnJvbSBcInR5cGVkLmpzXCI7XG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSBcIi4vaW1nL2NvbXB1dGVyLnBuZ1wiO1xuaW1wb3J0IEhhbmQgZnJvbSBcIi4vaW1nL2hhbmQuc3ZnXCI7XG5pbXBvcnQgSGFja2VyIGZyb20gXCIuL2ltZy9oYWNrZXIuc3ZnXCI7XG5pbXBvcnQgR2l0U29jaWFsIGZyb20gXCIuL2ltZy9naXRTb2NpYWwuc3ZnXCI7XG5pbXBvcnQgTGlua2VkIGZyb20gXCIuL2ltZy9saW5rZWQuc3ZnXCI7XG5cbmZ1bmN0aW9uIGR5bmFtaWNUZXh0KCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0Y29uc3QgdHlwZWQgPSBuZXcgVHlwZWQoXCIjdHlwZWQtdGV4dFwiLCB7XG5cdFx0Ly8gU3RyaW5ncyB0byBkaXNwbGF5XG5cdFx0c3RyaW5nczogW1xuXHRcdFx0XCJGdWxsIFN0YWNrIERldmVsb3BlclwiLFxuXHRcdFx0XCJDcmVhdGl2ZSBDb2RlclwiLFxuXHRcdFx0XCJDb21wdXRlciBTY2llbmNlIFN0dWRlbnRcIixcblx0XHRcdFwiTWF0aGVtYXRpY3MgU3R1ZGVudFwiLFxuXHRcdFx0XCJBc3BpcmluZyBTb2Z0d2FyZSBEZXZlbG9wZXJcIixcblx0XHRcdFwiRW1lcmdpbmcgRnVsbCBTdGFjayBEZXZlbG9wZXJcIixcblx0XHRcdFwiUHJvZ3JhbW1pbmcgRW50aHVzaWFzdFwiLFxuXHRcdFx0XCJGdXR1cmUgVGVjaCBQcm9mZXNzaW9uYWxcIixcblx0XHRcdFwiU3R1ZGVudCBvZiBTb2Z0d2FyZSBFbmdpbmVlcmluZ1wiLFxuXHRcdFx0XCJDb2RpbmcgSG9iYnlpc3RcIixcblx0XHRcdFwiU29mdHdhcmUgRW5naW5lZXIgaW4gVHJhaW5pbmdcIixcblx0XHRcdFwiU29mdHdhcmUgRW5naW5lZXIgaW4gdGhlIE1ha2luZ1wiLFxuXHRcdFx0XCJTb2Z0d2FyZSBFbmdpbmVlciBpbiB0aGUgV29ya3NcIixcblx0XHRdLFxuXG5cdFx0Ly8gU3BlZWQgc2V0dGluZ3Ncblx0XHR0eXBlU3BlZWQ6IDUwLFxuXHRcdGJhY2tTcGVlZDogMjUsXG5cdFx0Ly8gVGltZSBiZWZvcmUgdHlwaW5nIHN0YXJ0c1xuXHRcdHN0YXJ0RGVsYXk6IDEwMDAsXG5cdFx0Ly8gVGltZSBiZWZvcmUgZXJhc2luZ1xuXHRcdGJhY2tEZWxheTogMjAwMCxcblx0XHQvLyBMb29wIHRoZSBhbmltYXRpb25cblx0XHRsb29wOiB0cnVlLFxuXHRcdC8vIFNob3cgY3Vyc29yXG5cdFx0c2hvd0N1cnNvcjogdHJ1ZSxcblx0XHQvLyBDaGFyYWN0ZXIgZm9yIGN1cnNvclxuXHRcdGN1cnNvckNoYXI6IFwifFwiLFxuXHRcdC8vIEF0dHJpYnV0ZSB0byB0eXBlIChudWxsID09IHRleHQpXG5cdFx0YXR0cjogbnVsbCxcblx0XHQvLyBXaGV0aGVyIHRvIHN0YXJ0IHR5cGluZyBhdXRvbWF0aWNhbGx5XG5cdFx0YXV0b0luc2VydENzczogdHJ1ZSxcblx0XHQvLyBEZWZhdWx0IGNvbnRlbnQgYmVmb3JlIHR5cGluZ1xuXHRcdGNvbnRlbnRUeXBlOiBcImh0bWxcIixcblx0fSk7XG59XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXHRjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcblx0bWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG5cdGNvbnN0IGZpcnN0QmxvY2tIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Zmlyc3RCbG9ja0hvbWUuY2xhc3NMaXN0LmFkZChcImZpcnN0LWJsb2NrLWhvbWVcIik7XG5cblx0Y29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRleHQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IHN1YlRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzdWJUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdWItdGV4dC1jb250YWluZXJcIik7XG5cblx0Y29uc3QgZmlyc3RUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Zmlyc3RUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmaXJzdC10ZXh0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBmaXJzdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdGZpcnN0VGV4dC50ZXh0Q29udGVudCA9IFwiSGksIFRoZXJlIVwiO1xuXHRmaXJzdFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RUZXh0KTtcblxuXHRjb25zdCB3YXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0d2F2ZS5jbGFzc0xpc3QuYWRkKFwid2F2ZVwiKTtcblx0d2F2ZS5zcmMgPSBIYW5kO1xuXHR3YXZlLmFsdCA9IFwiV2F2ZVwiO1xuXHRmaXJzdFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQod2F2ZSk7XG5cblx0Y29uc3Qgc2Vjb25kVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNlY29uZFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlY29uZC10ZXh0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBzZWNvbmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuXHRzZWNvbmRUZXh0LnRleHRDb250ZW50ID0gXCJJJ20gXCI7XG5cdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0bmFtZS50ZXh0Q29udGVudCA9IFwiU2hhaGlyIEFobWVkXCI7XG5cdG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG5cdHNlY29uZFRleHQuYXBwZW5kQ2hpbGQobmFtZSk7XG5cdHNlY29uZFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kVGV4dCk7XG5cblx0c3ViVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdFRleHRDb250YWluZXIpO1xuXHRzdWJUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZFRleHRDb250YWluZXIpO1xuXG5cdGNvbnN0IHR5cGVkVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHR5cGVkVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidHlwZWQtdGV4dC1jb250YWluZXJcIik7XG5cblx0Y29uc3QgdHlwZWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHR5cGVkVGV4dC5jbGFzc0xpc3QuYWRkKFwidHlwZWQtdGV4dFwiKTtcblx0dHlwZWRUZXh0LmlkID0gXCJ0eXBlZC10ZXh0XCI7XG5cblx0dHlwZWRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHR5cGVkVGV4dCk7XG5cblx0dGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJUZXh0Q29udGFpbmVyKTtcblx0dGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0eXBlZFRleHRDb250YWluZXIpO1xuXG5cdGZpcnN0QmxvY2tIb21lLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuXG5cdGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0aW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImltYWdlLWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGltYWdlLnNyYyA9IENvbXB1dGVyO1xuXHRpbWFnZS5hbHQgPSBcIkNvbXB1dGVyXCI7XG5cdGltYWdlLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlclwiKTtcblx0aW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG5cdGZpcnN0QmxvY2tIb21lLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcblxuXHRtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0QmxvY2tIb21lKTtcblxuXHRjb25zdCBzZWNvbmRCbG9ja0hvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzZWNvbmRCbG9ja0hvbWUuY2xhc3NMaXN0LmFkZChcInNlY29uZC1ibG9jay1ob21lXCIpO1xuXG5cdGNvbnN0IHNlY29uZEJsb2NrVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNlY29uZEJsb2NrVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLWJsb2NrLXRleHQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWRpdlwiKTtcblxuXHRjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHR0ZXh0LnRleHRDb250ZW50ID0gXCJJZiBvcHBvcnR1bml0eSBkb2Vzbid0IGtub2NrLCBcIjtcblxuXHRjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdHNwYW4udGV4dENvbnRlbnQgPSBcImJ1aWxkIGEgZG9vci5cIjtcblx0c3Bhbi5jbGFzc0xpc3QuYWRkKFwic3Bhbi1kb29yXCIpO1xuXG5cdHRleHQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cdHRleHREaXYuYXBwZW5kQ2hpbGQodGV4dCk7XG5cdGNvbnN0IHN1YkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHN1YkRpdi5jbGFzc0xpc3QuYWRkKFwic3ViLWRpdlwiKTtcblx0Y29uc3QgaGlnaGxpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGhpZ2hsaWdodC50ZXh0Q29udGVudCA9XG5cdFx0XCJFbWJyYWNpbmcgY2hhbGxlbmdlcyB3aXRoIGlubm92YXRpb24gYW5kIGRldGVybWluYXRpb24sIFwiO1xuXHRoaWdobGlnaHQuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcblxuXHRjb25zdCBzdWJUZXh0QWZ0ZXJIaWdobGlnaHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcblx0XHRcIkkgY2hhbm5lbCBteSBwYXNzaW9uIGZvciBjb2RpbmcgaW50byBjcmFmdGluZyBzb2x1dGlvbnMgd2hlcmUgbm9uZSBleGlzdGVkIGJlZm9yZS4gSW4gdGhlIGV2ZXItZXZvbHZpbmcgd29ybGQgb2Ygd2ViIGRldmVsb3BtZW50LCBJJ20gY29tbWl0dGVkIHRvIHR1cm5pbmcgb2JzdGFjbGVzIGludG8gc3RlcHBpbmcgc3RvbmVzIGZvciBncm93dGggYW5kIGxlYXJuaW5nLlwiLFxuXHQpO1xuXHRjb25zdCBzdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHN1YlRleHQuY2xhc3NMaXN0LmFkZChcInN1Yi10ZXh0XCIpO1xuXG5cdHN1YlRleHQuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0KTtcblx0c3ViVGV4dC5hcHBlbmRDaGlsZChzdWJUZXh0QWZ0ZXJIaWdobGlnaHQpO1xuXG5cdGNvbnN0IHN1YnN1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0c3Vic3ViVGV4dC50ZXh0Q29udGVudCA9XG5cdFx0XCJXaXRoIGV2ZXJ5IGxpbmUgb2YgY29kZSwgSSBhaW0gdG8gYnVpbGQgd2ViIGFwcGxpY2F0aW9ucyB0aGF0IGFyZSBpbnR1aXRpdmUgYW5kIGVmZmljaWVudC4gTXkgZ29hbCBpcyB0byBjcmVhdGUgdG9vbHMgdGhhdCBub3Qgb25seSBmdW5jdGlvbiBzbW9vdGhseSBidXQgYWxzbyBlbmhhbmNlIHRoZSB1c2VyIGV4cGVyaWVuY2UuIEl0J3MgYWJvdXQgcGF2aW5nIG5ldyBwYXRod2F5cyB0byBzdWNjZXNzIGFuZCBlbnN1cmluZyB0aGV5IGxlYWQgdG8gbWVhbmluZ2Z1bCByZXN1bHRzIGZvciBib3RoIHVzZXJzIGFuZCBidXNpbmVzc2VzXCI7XG5cdHN1YnN1YlRleHQuY2xhc3NMaXN0LmFkZChcInN1Yi10ZXh0XCIpO1xuXHRzdWJEaXYuYXBwZW5kQ2hpbGQoc3ViVGV4dCk7XG5cdHN1YkRpdi5hcHBlbmRDaGlsZChzdWJzdWJUZXh0KTtcblx0dGV4dERpdi5hcHBlbmRDaGlsZChzdWJEaXYpO1xuXHRzZWNvbmRCbG9ja1RleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dERpdik7XG5cblx0Y29uc3QgaGFja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0aGFja2VyLmNsYXNzTGlzdC5hZGQoXCJoYWNrZXJcIik7XG5cdGhhY2tlci5zcmMgPSBIYWNrZXI7XG5cdGhhY2tlci5hbHQgPSBcIkhhY2tlclwiO1xuXHRzZWNvbmRCbG9ja1RleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaGFja2VyKTtcblxuXHRjb25zdCBzb2NpYWxCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNvY2lhbEJsb2NrLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtYmxvY2tcIik7XG5cblx0Y29uc3Qgc29jaWFsVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNvY2lhbFRleHREaXYuY2xhc3NMaXN0LmFkZChcInNvY2lhbC10ZXh0LWRpdlwiKTtcblxuXHRjb25zdCBzb2NpYWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRzb2NpYWxUZXh0LnRleHRDb250ZW50ID0gXCJGSU5EIE1FIE9OXCI7XG5cblx0Y29uc3QgdGV4dEJlZm9yZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiRmVlbCBmcmVlIHRvIFwiKTtcblx0Y29uc3QgdGV4dEFmdGVyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgd2l0aCBtZVwiKTtcblxuXHRjb25zdCBzcGFuQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRzcGFuQ29udGVudC50ZXh0Q29udGVudCA9IFwiY29ubmVjdFwiO1xuXG5cdGNvbnN0IHNvY2lhbFN1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0c29jaWFsU3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic29jaWFsLXN1Yi10ZXh0XCIpO1xuXHRzb2NpYWxTdWJUZXh0LmFwcGVuZENoaWxkKHRleHRCZWZvcmUpO1xuXHRzb2NpYWxTdWJUZXh0LmFwcGVuZENoaWxkKHNwYW5Db250ZW50KTtcblx0c29jaWFsU3ViVGV4dC5hcHBlbmRDaGlsZCh0ZXh0QWZ0ZXIpO1xuXG5cdHNvY2lhbFRleHREaXYuYXBwZW5kQ2hpbGQoc29jaWFsVGV4dCk7XG5cdHNvY2lhbFRleHREaXYuYXBwZW5kQ2hpbGQoc29jaWFsU3ViVGV4dCk7XG5cblx0Y29uc3Qgc29jaWFsSWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzb2NpYWxJY29ucy5jbGFzc0xpc3QuYWRkKFwic29jaWFsLWljb25zXCIpO1xuXG5cdGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0Z2l0TGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3XCI7XG5cdGdpdExpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblx0Z2l0TGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcblx0Y29uc3QgZ2l0U29jaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Z2l0U29jaWFsLnNyYyA9IEdpdFNvY2lhbDtcblx0Z2l0U29jaWFsLmFsdCA9IFwiR2l0SHViXCI7XG5cdGdpdFNvY2lhbC5jbGFzc0xpc3QuYWRkKFwic29jaWFsLWljb25cIik7XG5cdGdpdExpbmsuYXBwZW5kQ2hpbGQoZ2l0U29jaWFsKTtcblx0c29jaWFsSWNvbnMuYXBwZW5kQ2hpbGQoZ2l0TGluayk7XG5cblx0Y29uc3QgbGlua2VkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRsaW5rZWRMaW5rLmhyZWYgPSBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zaGFoaXI0Ny9cIjtcblx0bGlua2VkTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXHRsaW5rZWRMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuXHRjb25zdCBsaW5rZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRsaW5rZWQuc3JjID0gTGlua2VkO1xuXHRsaW5rZWQuYWx0ID0gXCJMaW5rZWRJblwiO1xuXHRsaW5rZWQuY2xhc3NMaXN0LmFkZChcInNvY2lhbC1pY29uXCIpO1xuXHRsaW5rZWRMaW5rLmFwcGVuZENoaWxkKGxpbmtlZCk7XG5cdHNvY2lhbEljb25zLmFwcGVuZENoaWxkKGxpbmtlZExpbmspO1xuXG5cdHNvY2lhbEJsb2NrLmFwcGVuZENoaWxkKHNvY2lhbFRleHREaXYpO1xuXHRzb2NpYWxCbG9jay5hcHBlbmRDaGlsZChzb2NpYWxJY29ucyk7XG5cblx0c2Vjb25kQmxvY2tIb21lLmFwcGVuZENoaWxkKHNlY29uZEJsb2NrVGV4dENvbnRhaW5lcik7XG5cdHNlY29uZEJsb2NrSG9tZS5hcHBlbmRDaGlsZChzb2NpYWxCbG9jayk7XG5cblx0bWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRCbG9ja0hvbWUpO1xuXG5cdGR5bmFtaWNUZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vaW1nL3RvZG8ucG5nXCI7XG5pbXBvcnQgQmF0dGxlc2hpcCBmcm9tIFwiLi9pbWcvYmF0dGxlc2hpcC5wbmdcIjtcbmltcG9ydCBXZWF0aGVyIGZyb20gXCIuL2ltZy93ZWF0aGVyLnBuZ1wiO1xuaW1wb3J0IFRpY3RhYyBmcm9tIFwiLi9pbWcvdGljdGFjLnBuZ1wiO1xuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSBcIi4vaW1nL2NhbGN1bGF0b3IucG5nXCI7XG5pbXBvcnQgUmVzdGF1cmFudCBmcm9tIFwiLi9pbWcvcmVzdGF1cmFudC5wbmdcIjtcbmltcG9ydCBFdGNoIGZyb20gXCIuL2ltZy9ldGNoLnBuZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SXRlbShpbWFnZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBsaXZlRGVtbywgc291cmNlQ29kZSkge1xuXHRjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XG5cblx0Y29uc3QgcHJvamVjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0cHJvamVjdEltYWdlLnNyYyA9IGltYWdlO1xuXHRwcm9qZWN0SW1hZ2UuYWx0ID0gdGl0bGU7XG5cdHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJbWFnZSk7XG5cblx0Y29uc3QgcHJvamVjdEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0SXRlbURpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtLWRpdlwiKTtcblxuXHRjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG5cdGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuXHRjb25zdCBwcm9qZWN0TGlua0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RMaW5rRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpbmstZGl2XCIpO1xuXG5cdGNvbnN0IHByb2plY3RMaXZlRGVtbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRwcm9qZWN0TGl2ZURlbW8uaHJlZiA9IGxpdmVEZW1vO1xuXHRwcm9qZWN0TGl2ZURlbW8udGV4dENvbnRlbnQgPSBcIkxpdmUgRGVtb1wiO1xuXHRwcm9qZWN0TGlua0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGl2ZURlbW8pO1xuXG5cdGNvbnN0IHByb2plY3RTb3VyY2VDb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdHByb2plY3RTb3VyY2VDb2RlLmhyZWYgPSBzb3VyY2VDb2RlO1xuXHRwcm9qZWN0U291cmNlQ29kZS50ZXh0Q29udGVudCA9IFwiU291cmNlIENvZGVcIjtcblx0cHJvamVjdExpbmtEaXYuYXBwZW5kQ2hpbGQocHJvamVjdFNvdXJjZUNvZGUpO1xuXG5cdHByb2plY3RJdGVtRGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cdHByb2plY3RJdGVtRGl2LmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG5cdHByb2plY3RJdGVtRGl2LmFwcGVuZENoaWxkKHByb2plY3RMaW5rRGl2KTtcblx0cHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1EaXYpO1xuXG5cdHJldHVybiBwcm9qZWN0SXRlbTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdCgpIHtcblx0Y29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGl2XCIpO1xuXHRjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcblx0cHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG5cdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCB0b2RvID0gY3JlYXRlUHJvamVjdEl0ZW0oXG5cdFx0VG9kbyxcblx0XHRcIlRvZG8gTGlzdFwiLFxuXHRcdFwiVG9kbyBMaXN0IGlzIGEgcG93ZXJmdWwgdGFzayBtYW5hZ2VtZW50IGFwcGxpY2F0aW9uIHRoYXQgaGVscHMgeW91IHN0YXkgb3JnYW5pemVkIGFuZCBwcm9kdWN0aXZlLiBNYW5hZ2UgdGFza3MsIHByb2plY3RzLCBhbmQgbm90ZXMgZWZmb3J0bGVzc2x5LiBGZWF0dXJlcyBpbmNsdWRlIHByaW9yaXR5IGxldmVscywgZHVlIGRhdGVzLCBzZWFyY2ggZnVuY3Rpb25hbGl0eSwgYW5kIGRhcmsvbGlnaHQgdGhlbWUuIEdldCBzdGFydGVkIGFuZCBib29zdCB5b3VyIHByb2R1Y3Rpdml0eSB0b2RheSFcIixcblx0XHRcImh0dHBzOi8vc2hhaGlyLTQ3LmdpdGh1Yi5pby9Ub2RvLUxpc3QvXCIsXG5cdFx0XCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L1RvZG8tTGlzdFwiLFxuXHQpO1xuXG5cdGNvbnN0IGJhdHRsZXNoaXAgPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRCYXR0bGVzaGlwLFxuXHRcdFwiQmF0dGxlc2hpcFwiLFxuXHRcdFwiQSB3ZWItYmFzZWQgQmF0dGxlc2hpcCBnYW1lIHdpdGggYSBzdHJhdGVnaWMgQUkuIFBsYXllcnMgZW5nYWdlIGluIGNsYXNzaWMgbmF2YWwgd2FyZmFyZSBhZ2FpbnN0IGEgY29tcHV0ZXIuIENvZGUgaXMgb3BlbiBmb3IgY29udHJpYnV0aW9ucyBhbmQgdGVzdHMgZW5zdXJlIHJvYnVzdCBnYW1lcGxheS5QbGF5IG5vdyFcIixcblx0XHRcImh0dHBzOi8vc2hhaGlyLTQ3LmdpdGh1Yi5pby9CYXR0bGVzaGlwL1wiLFxuXHRcdFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00Ny9CYXR0bGVzaGlwXCIsXG5cdCk7XG5cblx0Y29uc3Qgd2VhdGhlciA9IGNyZWF0ZVByb2plY3RJdGVtKFxuXHRcdFdlYXRoZXIsXG5cdFx0XCJXZWF0aGVyIEFwcFwiLFxuXHRcdFwiV2VhdGhlciBXaGl6IGlzIGEgd2ViIGFwcCBwcm92aWRpbmcgY3VycmVudCB3ZWF0aGVyLCBob3VybHkgJiAyLWRheSBmb3JlY2FzdHMgZm9yIGRpZmZlcmVudCBsb2NhdGlvbnMuIFN3aXRjaCBiZXR3ZWVuIGltcGVyaWFsICYgbWV0cmljIHVuaXRzLiBCdWlsdCB3aXRoIEhUTUwsIENTUywgSlMsIFdlYnBhY2ssIEJhYmVsLCBFU0xpbnQgJiBQcmV0dGllci4gQVBJczogT3BlbldlYXRoZXIgJiBNYXBib3guIFN0YXkgcHJlcGFyZWQgd2l0aCBhY2N1cmF0ZSB3ZWF0aGVyIGRhdGEhXCIsXG5cdFx0XCJodHRwczovL3NoYWhpci00Ny5naXRodWIuaW8vV2VhdGhlci1XaGl6L1wiLFxuXHRcdFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00Ny9XZWF0aGVyLVdoaXpcIixcblx0KTtcblxuXHRjb25zdCB0aWN0YWMgPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRUaWN0YWMsXG5cdFx0XCJUaWMgVGFjIFRvZVwiLFxuXHRcdFwiRW5qb3kgdGhlIGNsYXNzaWMgVGljIFRhYyBUb2UgZ2FtZSB3aXRoIGN1c3RvbWl6YWJsZSBtYXJrZXJzLCBjb2xvcnMsIGFuZCBwbGF5ZXIgbmFtZXMuIFBsYXkgYWdhaW5zdCBhIGZyaWVuZCBvciBjaGFsbGVuZ2luZyBBSS4gUmVzcG9uc2l2ZSBkZXNpZ24sIHZpc3VhbGx5IGFwcGVhbGluZyBpbnRlcmZhY2UuIFNvdXJjZSBjb2RlIGZvciBIVE1MLCBDU1MsIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24uIEV4cGVyaWVuY2UgaG91cnMgb2YgaW50ZXJhY3RpdmUgYW5kIGFkZGljdGl2ZSBmdW4hXCIsXG5cdFx0XCJodHRwczovL3NoYWhpci00Ny5naXRodWIuaW8vVGljLVRhYy1Ub2UvXCIsXG5cdFx0XCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L1RpYy1UYWMtdG9lXCIsXG5cdCk7XG5cblx0Y29uc3QgY2FsY3VsYXRvciA9IGNyZWF0ZVByb2plY3RJdGVtKFxuXHRcdENhbGN1bGF0b3IsXG5cdFx0XCJDYWxjdWxhdG9yXCIsXG5cdFx0XCJUaGlzIGlzIGEgc2ltcGxlIGNhbGN1bGF0b3IgYXBwbGljYXRpb24gd2l0aCBrZXlib2FyZCBzdXBwb3J0LiBJdCBhbGxvd3MgeW91IHRvIHBlcmZvcm0gYmFzaWMgYXJpdGhtZXRpYyBvcGVyYXRpb25zIHN1Y2ggYXMgYWRkaXRpb24sIHN1YnRyYWN0aW9uLCBtdWx0aXBsaWNhdGlvbiwgYW5kIGRpdmlzaW9uLiBJdCBhbHNvIGluY2x1ZGVzIGFkZGl0aW9uYWwgZmVhdHVyZXMgbGlrZSBjYWxjdWxhdGluZyB0aGUgZmFjdG9yaWFsIGFuZCBleHBvbmVudGlhdGlvbi5cIixcblx0XHRcImh0dHBzOi8vc2hhaGlyLTQ3LmdpdGh1Yi5pby9DYWxjdWxhdG9yL1wiLFxuXHRcdFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00Ny9DYWxjdWxhdG9yXCIsXG5cdCk7XG5cblx0Y29uc3QgcmVzdGF1cmFudCA9IGNyZWF0ZVByb2plY3RJdGVtKFxuXHRcdFJlc3RhdXJhbnQsXG5cdFx0XCJSZXN0YXVyYW50IFBhZ2VcIixcblx0XHRcIkEgd2ViLWJhc2VkIHBsYXRmb3JtIHRoYXQgcHJvdmlkZXMgaW5mb3JtYXRpb24gYW5kIGZlYXR1cmVzIHJlbGF0ZWQgdG8gYSBmaWN0aW9uYWwgcmVzdGF1cmFudCBjYWxsZWQgdGhlIEdhbGFjdGljIENhbnRpbmEuIFRoZSBhcHBsaWNhdGlvbiBhbGxvd3MgdXNlcnMgdG8gZXhwbG9yZSB2YXJpb3VzIHNlY3Rpb25zIHN1Y2ggYXMgdGhlIGhvbWUgcGFnZSwgbWVudSBwYWdlLCBjb250YWN0IHBhZ2UsIGFib3V0IHVzIHBhZ2UsIHJldmlldyBwYWdlLCBhbmQgRkFRIHBhZ2UuXCIsXG5cdFx0XCJodHRwczovL3NoYWhpci00Ny5naXRodWIuaW8vUmVzdGF1cmFudC1QYWdlL1wiLFxuXHRcdFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00Ny9SZXN0YXVyYW50LVBhZ2VcIixcblx0KTtcblxuXHRjb25zdCBldGNoID0gY3JlYXRlUHJvamVjdEl0ZW0oXG5cdFx0RXRjaCxcblx0XHRcIkV0Y2ggYSBTa2V0Y2hcIixcblx0XHRcIkV4cGVyaWVuY2UgdGhlIGNsYXNzaWMgRXRjaC1hLVNrZXRjaCBmdW4gb25saW5lISBEcmF3IGFuZCBjcmVhdGUgbWFzdGVycGllY2VzIHdpdGggdGhpcyBzaW1wbGUgd2ViIGFwcGxpY2F0aW9uLiBCdWlsdCB1c2luZyBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0LlwiLFxuXHRcdFwiaHR0cHM6Ly9zaGFoaXItNDcuZ2l0aHViLmlvL0V0Y2gtYS1Ta2V0Y2gvXCIsXG5cdFx0XCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L0V0Y2gtYS1Ta2V0Y2gvXCIsXG5cdCk7XG5cblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvKTtcblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChiYXR0bGVzaGlwKTtcblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVyKTtcblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWN0YWMpO1xuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhbGN1bGF0b3IpO1xuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnQpO1xuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGV0Y2gpO1xuXG5cdHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xuXHRtYWluLmlubmVySFRNTCA9IFwiXCI7XG5cdG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7XG4iLCJpbXBvcnQgSWNvbiBmcm9tIFwiLi9pbWcvaWNvbi5zdmdcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2ltZy9ob21lLnN2Z1wiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL2ltZy9hYm91dC5zdmdcIjtcbmltcG9ydCBDb2RlIGZyb20gXCIuL2ltZy9jb2RlLnN2Z1wiO1xuaW1wb3J0IERvYyBmcm9tIFwiLi9pbWcvZG9jLnN2Z1wiO1xuaW1wb3J0IEdpdEh1YiBmcm9tIFwiLi9pbWcvZ2l0U29jaWFsLnN2Z1wiO1xuaW1wb3J0IGhhbWJ1cmdlckltZyBmcm9tIFwiLi9pbWcvaGFtYnVyZ2VyLnN2Z1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVOYXZCYXIoKSB7XG5cdGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cdGJhci5jbGFzc0xpc3QuYWRkKFwibmF2LWJhclwiKTtcblxuXHRjb25zdCBsb2dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRsb2dDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZy1jb250YWluZXJcIik7XG5cdGNvbnN0IGxvZ29Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRsb2dvQm94LmNsYXNzTGlzdC5hZGQoXCJsb2dvLWJveFwiKTtcblx0Y29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGxvZ28uc3JjID0gSWNvbjtcblx0bG9nby5hbHQgPSBcImxvZ29cIjtcblx0Y29uc3QgbG9nb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bG9nb0xpbmsuYXBwZW5kQ2hpbGQobG9nbyk7XG5cdGxvZ29Cb3guYXBwZW5kQ2hpbGQobG9nb0xpbmspO1xuXHRjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0bG9nb1RleHQudGV4dENvbnRlbnQgPSBcIlNoYWhpciBBaG1lZFwiO1xuXHRjb25zdCBsb2dvTGluazIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bG9nb0xpbmsyLmFwcGVuZENoaWxkKGxvZ29UZXh0KTtcblx0bG9nb0JveC5hcHBlbmRDaGlsZChsb2dvTGluazIpO1xuXG5cdGxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvQm94KTtcblxuXHRjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG5hdkxpbmtzLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlua3NcIik7XG5cblx0Y29uc3QgaG9tZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGhvbWVCb3guY2xhc3NMaXN0LmFkZChcIm5hdi1ib3hcIik7XG5cdGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGhvbWVMaW5rLmhyZWYgPSBcIiNcIjtcblx0aG9tZUxpbmsudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblx0aG9tZUJveC5hcHBlbmRDaGlsZChob21lTGluayk7XG5cblx0Y29uc3QgaG9tZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRob21lSWNvbi5zcmMgPSBIb21lO1xuXHRob21lSWNvbi5hbHQgPSBcImhvbWVcIjtcblx0aG9tZUJveC5hcHBlbmRDaGlsZChob21lSWNvbik7XG5cblx0bmF2TGlua3MuYXBwZW5kQ2hpbGQoaG9tZUJveCk7XG5cblx0Y29uc3QgbWVudUxpbmtib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRtZW51TGlua2JveC5jbGFzc0xpc3QuYWRkKFwibmF2LWJveFwiKTtcblx0Y29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bWVudUxpbmsuaHJlZiA9IFwiI1wiO1xuXHRtZW51TGluay50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcblx0bWVudUxpbmtib3guYXBwZW5kQ2hpbGQobWVudUxpbmspO1xuXG5cdGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0bWVudUljb24uc3JjID0gQWJvdXQ7XG5cdG1lbnVJY29uLmFsdCA9IFwiYWJvdXRcIjtcblx0bWVudUxpbmtib3guYXBwZW5kQ2hpbGQobWVudUljb24pO1xuXHRuYXZMaW5rcy5hcHBlbmRDaGlsZChtZW51TGlua2JveCk7XG5cblx0Y29uc3QgY29udGFjdExpbmtib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb250YWN0TGlua2JveC5jbGFzc0xpc3QuYWRkKFwibmF2LWJveFwiKTtcblx0Y29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0Y29udGFjdExpbmsuaHJlZiA9IFwiI1wiO1xuXHRjb250YWN0TGluay50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcblx0Y29udGFjdExpbmtib3guYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xuXG5cdGNvbnN0IGNvbnRhY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Y29udGFjdEljb24uc3JjID0gQ29kZTtcblx0Y29udGFjdEljb24uYWx0ID0gXCJwcm9qZWN0c1wiO1xuXHRjb250YWN0TGlua2JveC5hcHBlbmRDaGlsZChjb250YWN0SWNvbik7XG5cdG5hdkxpbmtzLmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rYm94KTtcblxuXHRjb25zdCBBYm91dExpbmtib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRBYm91dExpbmtib3guY2xhc3NMaXN0LmFkZChcIm5hdi1ib3hcIik7XG5cblx0Y29uc3QgQWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdEFib3V0TGluay5ocmVmID0gXCIjXCI7XG5cdEFib3V0TGluay50ZXh0Q29udGVudCA9IFwiUmVzdW1lXCI7XG5cdEFib3V0TGlua2JveC5hcHBlbmRDaGlsZChBYm91dExpbmspO1xuXG5cdGNvbnN0IEFib3V0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdEFib3V0SWNvbi5zcmMgPSBEb2M7XG5cdEFib3V0SWNvbi5hbHQgPSBcInJlc3VtZVwiO1xuXHRBYm91dExpbmtib3guYXBwZW5kQ2hpbGQoQWJvdXRJY29uKTtcblx0bmF2TGlua3MuYXBwZW5kQ2hpbGQoQWJvdXRMaW5rYm94KTtcblxuXHQvLyBoYW1idXJnZXIgbWVudVxuXHRjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRoYW1idXJnZXIuY2xhc3NMaXN0LmFkZChcImhhbWJ1cmdlclwiKTtcblx0Y29uc3QgaGFtYnVyZ2VySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGhhbWJ1cmdlckljb24uc3JjID0gaGFtYnVyZ2VySW1nO1xuXHRoYW1idXJnZXJJY29uLmFsdCA9IFwiaGFtYnVyZ2VyXCI7XG5cdGhhbWJ1cmdlci5hcHBlbmRDaGlsZChoYW1idXJnZXJJY29uKTtcblxuXHRjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0aGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKFwiaGFtYnVyZ2VyLW1lbnVcIik7XG5cdGNvbnN0IGhhbWJ1cmdlck1lbnVIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGhhbWJ1cmdlck1lbnVIb21lLmhyZWYgPSBcIiNcIjtcblx0aGFtYnVyZ2VyTWVudUhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblx0aGFtYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChoYW1idXJnZXJNZW51SG9tZSk7XG5cdGNvbnN0IGhhbWJ1cmdlck1lbnVBYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRoYW1idXJnZXJNZW51QWJvdXQuaHJlZiA9IFwiI1wiO1xuXHRoYW1idXJnZXJNZW51QWJvdXQudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG5cdGhhbWJ1cmdlck1lbnUuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudUFib3V0KTtcblx0Y29uc3QgaGFtYnVyZ2VyTWVudVByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGhhbWJ1cmdlck1lbnVQcm9qZWN0cy5ocmVmID0gXCIjXCI7XG5cdGhhbWJ1cmdlck1lbnVQcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcblx0aGFtYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChoYW1idXJnZXJNZW51UHJvamVjdHMpO1xuXHRjb25zdCBoYW1idXJnZXJNZW51UmVzdW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGhhbWJ1cmdlck1lbnVSZXN1bWUuaHJlZiA9IFwiI1wiO1xuXHRoYW1idXJnZXJNZW51UmVzdW1lLnRleHRDb250ZW50ID0gXCJSZXN1bWVcIjtcblx0aGFtYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChoYW1idXJnZXJNZW51UmVzdW1lKTtcblxuXHRoYW1idXJnZXIuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyTWVudSk7XG5cdG5hdkxpbmtzLmFwcGVuZENoaWxkKGhhbWJ1cmdlcik7XG5cblx0YmFyLmFwcGVuZENoaWxkKGxvZ0NvbnRhaW5lcik7XG5cdGJhci5hcHBlbmRDaGlsZChuYXZMaW5rcyk7XG5cblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChiYXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG5cdGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cdGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG5cdGNvbnN0IGdpdEh1YlByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0Z2l0SHViUHJvZmlsZS5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3XCI7XG5cblx0Y29uc3QgZ2l0SHViUHJvZmlsZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGdpdEh1YlByb2ZpbGVJbWcuc3JjID0gR2l0SHViO1xuXHRnaXRIdWJQcm9maWxlSW1nLmFsdCA9IFwiZ2l0SHViIExvZ29cIjtcblxuXHRjb25zdCBnaXRIdWJQcm9maWxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBhdFN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRhdFN5bWJvbC5jbGFzc0xpc3QuYWRkKFwiYXQtc3ltYm9sXCIpO1xuXHRhdFN5bWJvbC50ZXh0Q29udGVudCA9IFwiQFwiO1xuXHRjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHR1c2VybmFtZS50ZXh0Q29udGVudCA9IFwiU2hhaGlyLTQ3XCI7XG5cdGdpdEh1YlByb2ZpbGVUZXh0LmFwcGVuZENoaWxkKGF0U3ltYm9sKTtcblx0Z2l0SHViUHJvZmlsZVRleHQuYXBwZW5kQ2hpbGQodXNlcm5hbWUpO1xuXG5cdGdpdEh1YlByb2ZpbGUuYXBwZW5kQ2hpbGQoZ2l0SHViUHJvZmlsZUltZyk7XG5cdGdpdEh1YlByb2ZpbGUuYXBwZW5kQ2hpbGQoZ2l0SHViUHJvZmlsZVRleHQpO1xuXG5cdGNvbnN0IHNlcGVyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRzZXBlcmF0b3IudGV4dENvbnRlbnQgPSBcInxcIjtcblxuXHRjb25zdCBnaXRIdWJSZXBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGdpdEh1YlJlcG8uaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00Ny9Qb3J0Zm9saW8tV2Vic2l0ZVwiO1xuXHRnaXRIdWJSZXBvLnRleHRDb250ZW50ID0gXCJTb3VyY2UgQ29kZVwiO1xuXG5cdGZvb3Rlci5hcHBlbmRDaGlsZChnaXRIdWJQcm9maWxlKTtcblx0Zm9vdGVyLmFwcGVuZENoaWxkKHNlcGVyYXRvcik7XG5cdGZvb3Rlci5hcHBlbmRDaGlsZChnaXRIdWJSZXBvKTtcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBQYWdlKCkge1xuXHRjcmVhdGVOYXZCYXIoKTtcblx0Y29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGFpbmVyXCIpO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2I2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cdGNyZWF0ZUZvb3RlcigpO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG5cdFx0Y29uc3QgbmF2QmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYmFyXCIpO1xuXHRcdGlmICh3aW5kb3cuc2Nyb2xsWSA+IDApIHtcblx0XHRcdG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2LWJhci1zY3JvbGxlZFwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmF2QmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJuYXYtYmFyLXNjcm9sbGVkXCIpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gaGFtYnVyZ2VyIG1lbnVcblx0Y29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIik7XG5cdGNvbnN0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlci1tZW51XCIpO1xuXHRoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcblx0XHRcdGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHRcdGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuXHRcdH0gZWxzZSBpZiAoaGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJpbmFjdGl2ZVwiKSkge1xuXHRcdFx0aGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG5cdFx0XHRoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHR9XG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXR1cFBhZ2U7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuXG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbiAqL1xuXG5odG1sIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG59XG5cbi8qIFNlY3Rpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIFJlbmRlciB0aGUgXFxgbWFpblxcYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cbiAqL1xuXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gXFxgaDFcXGAgZWxlbWVudHMgd2l0aGluIFxcYHNlY3Rpb25cXGAgYW5kXG4gKiBcXGBhcnRpY2xlXFxgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAqL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAqL1xuXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qIEVtYmVkZGVkIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5pbWcge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQgeyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbixcbnNlbGVjdCB7IC8qIDEgKi9cbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5bdHlwZT1cImJ1dHRvblwiXSxcblt0eXBlPVwicmVzZXRcIl0sXG5bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICovXG5cbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcblt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBJRS5cbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcbiAqICAgIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5sZWdlbmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICovXG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gKi9cblxuW3R5cGU9XCJjaGVja2JveFwiXSxcblt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gKi9cblxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4gKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLyogSW50ZXJhY3RpdmVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKiBNaXNjXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAqL1xuXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztFQUtFOztBQUVGO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcblx0Y29sb3I6ICNlMGUwZTA7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcblx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbmRpdiNjb250ZW50IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5hdi1iYXIge1xuXHRwb3NpdGlvbjogc3RpY2t5O1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDEuNXJlbSAzcmVtO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXHR6LWluZGV4OiA5OTk7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBObyBiYWNrZ3JvdW5kIGluaXRpYWxseSAqL1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCk7IC8qIE5vIGJsdXIgaW5pdGlhbGx5ICovXG5cdGJveC1zaGFkb3c6XG5cdFx0MCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxuXHRcdDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG5cbi5uYXYtYmFyLXNjcm9sbGVkIHtcblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpOyAvKiBBZGp1c3QgdGhlIGJsdXIgdmFsdWUgYXMgbmVlZGVkICovXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoXG5cdFx0NzksXG5cdFx0MjA5LFxuXHRcdDE5Nyxcblx0XHQwLjE1XG5cdCk7IC8qIFJHQkEgY29sb3IgZm9yIHRyYW5zbHVjZW50IHRlYWwgKi9cbn1cblxuLmxvZ28tYm94IHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAxcmVtO1xufVxuXG4ubG9nby1ib3ggaW1nIHtcblx0d2lkdGg6IDNyZW07XG5cdGhlaWdodDogYXV0bztcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nLWNvbnRhaW5lcjpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ28tYm94IGEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5sb2ctY29udGFpbmVyOmhvdmVyOmFmdGVyIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5sb2ctY29udGFpbmVyOmhvdmVyIC5sb2dvLWJveCBhIGgxIHtcblx0Y29sb3I6ICNmZmZmZmZmZjtcbn1cblxuLmxvZy1jb250YWluZXI6aG92ZXIgLmxvZ28tYm94IGltZyB7XG5cdGZpbHRlcjogYnJpZ2h0bmVzcygzKTtcbn1cblxuLmxvZy1jb250YWluZXI6YWZ0ZXIge1xuXHRiYWNrZ3JvdW5kOiAjNGZkMWM1O1xuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRib3R0b206IDFweDtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGhlaWdodDogNXB4O1xuXHRsZWZ0OiAwO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xuXHR3aWR0aDogMDtcblx0ei1pbmRleDogLTE7XG59XG5cbi5sb2dvLWJveCBhIGgxIHtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdG1hcmdpbjogMDtcbn1cblxuLm5hdi1saW5rcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMnJlbTtcbn1cblxuLm5hdi1saW5rcyBhIHtcblx0Y29sb3I6ICNlMGUwZTA7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRmb250LXdlaWdodDogMTAwO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXYtbGlua3MgYTpob3ZlciB7XG5cdGNvbG9yOiAjZmZmZmZmZmY7XG59XG5cbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXIge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXIgYSB7XG5cdGNvbG9yOiAjZmZmZmZmZmY7XG59XG5cbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXIgaW1nIHtcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDMpO1xufVxuXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyOmFmdGVyIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtbGlua3MgLm5hdi1ib3gge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXYtbGlua3MgLm5hdi1ib3g6YWZ0ZXIge1xuXHRiYWNrZ3JvdW5kOiAjNGZkMWM1O1xuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHRib3R0b206IC01cHg7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRoZWlnaHQ6IDVweDtcblx0bGVmdDogMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcblx0d2lkdGg6IDA7XG5cdHotaW5kZXg6IC0xO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDdyZW07XG59XG5cbi5maXJzdC1ibG9jay1ob21lIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcblx0cGFkZGluZzogMCAzcmVtO1xuXHRnYXA6IDFyZW07XG59XG5cbi50ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zdWItdGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDFyZW07XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuXHR3aWR0aDogNzUlO1xufVxuXG4uY29tcHV0ZXIge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4uZmlyc3QtdGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRnYXA6IDFyZW07XG59XG5cbi50eXBlZC10ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuI3R5cGVkLXRleHQge1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiAjNGZkMWM1O1xufVxuXG4udHlwZWQtY3Vyc29yIHtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjb2xvcjogIzRmZDFjNTtcblx0YW5pbWF0aW9uOiBibGluayAwLjdzIGluZmluaXRlO1xufVxuXG4ubmF2LWJveCB7XG5cdHBhZGRpbmc6IDAuMjVyZW0gMHJlbTtcbn1cblxuLndhdmUge1xuXHR3aWR0aDogMnJlbTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRhbmltYXRpb24tbmFtZTogd2F2ZS1hbmltYXRpb247XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMi41cztcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG5cdHRyYW5zZm9ybS1vcmlnaW46IDcwJSA3MCU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG59XG5cbkBrZXlmcmFtZXMgd2F2ZS1hbmltYXRpb24ge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0MTAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuXHR9XG5cdDIwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xuXHR9XG5cdDMwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcblx0fVxuXHQ0MCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDlkZWcpO1xuXHR9XG5cdDUwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cbn1cblxuLm5hbWUge1xuXHRmb250LXNpemU6IDNyZW07XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGNvbG9yOiAjNGZkMWM1O1xufVxuXG4ubmF2LWJveCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcblx0Z2FwOiAwLjVyZW07XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uYXYtYm94IGltZyB7XG5cdHdpZHRoOiAycmVtO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5zZWNvbmQtdGV4dC1jb250YWluZXIgaDUge1xuXHRtYXJnaW46IDA7XG59XG5cbi5maXJzdC10ZXh0LWNvbnRhaW5lciBoMyB7XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0bWFyZ2luOiAwO1xufVxuXG4uc2Vjb25kLXRleHQtY29udGFpbmVyIGg1IHtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4uc2Vjb25kLWJsb2NrLWhvbWUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwYWRkaW5nOiAwIDNyZW07XG5cdG1hcmdpbjogMCA1cmVtO1xuXHRnYXA6IDVyZW07XG59XG5cbi5zZWNvbmQtYmxvY2stdGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGFja2VyIHtcblx0d2lkdGg6IDM1JTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4udGV4dC1kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDNyZW07XG59XG5cbi50ZXh0LWRpdiBoMyB7XG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxLjlyZW07XG5cdG1hcmdpbjogMDtcbn1cblxuLmhpZ2hsaWdodCxcbi50ZXh0LWRpdiBoMyBzcGFuIHtcblx0Y29sb3I6ICM0ZmQxYzU7XG59XG5cbi5zdWItZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAycmVtO1xufVxuXG4uc3ViLXRleHQge1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRtYXJnaW46IDA7XG59XG5cbi5zb2NpYWwtaWNvbnMgaW1nIHtcblx0d2lkdGg6IDIuNXJlbTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNvY2lhbC1pY29ucyBpbWc6aG92ZXIge1xuXHRmaWx0ZXI6IGludmVydCgxKTtcblx0Ym94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSg3OSwgMjA5LCAxOTcsIDAuNSk7XG59XG5cbi5zb2NpYWwtdGV4dC1kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNXJlbTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNvY2lhbC10ZXh0LWRpdiBoMyB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNvY2lhbC10ZXh0LWRpdiAqIHtcblx0bWFyZ2luOiAwO1xufVxuXG4uc29jaWFsLWljb25zIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGdhcDogMnJlbTtcbn1cblxuLnNvY2lhbC1zdWItdGV4dCB7XG5cdGZvbnQtc2l6ZTogMC44cmVtO1xuXHRmb250LXdlaWdodDogNTUwO1xufVxuXG4uc29jaWFsLWJsb2NrIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAycmVtO1xufVxuXG4uc29jaWFsLXN1Yi10ZXh0IHNwYW4ge1xuXHRjb2xvcjogIzRmZDFjNTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZvb3RlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmZvb3RlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDFyZW07XG5cdGhlaWdodDogMi41cmVtO1xuXHRtYXJnaW4tdG9wOiAycmVtO1xuXHRwYWRkaW5nOiAwLjI1cmVtIDNyZW07XG5cdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7XG59XG5cbmZvb3RlciBhIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAwLjVyZW07XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Zm9udC1zaXplOiAxLjNyZW07XG5cdGZvbnQtd2VpZ2h0OiAxMDA7XG5cdGNvbG9yOiAjZmFmYWZhO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG5mb290ZXIgcCB7XG5cdG1hcmdpbjogMC41cmVtIDA7XG59XG5cbmZvb3RlciBhOmhvdmVyLFxuZm9vdGVyIGE6YWN0aXZlIHtcblx0Y29sb3I6ICNiMDJlMzk7XG59XG5cbmZvb3RlciBhIGltZyB7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuZm9vdGVyIGE6aG92ZXIgaW1nLFxuZm9vdGVyIGE6YWN0aXZlIGltZyB7XG5cdGZpbHRlcjogaW52ZXJ0KDEpO1xuXHRib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDc5LCAyMDksIDE5NywgMC41KTtcbn1cblxuLmF0LXN5bWJvbCB7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbmZvb3RlciBpbWcge1xuXHR3aWR0aDogMnJlbTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4vKiBTdHlsZXMgdGhlIHNjcm9sbGJhciB0cmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7IC8qIEEgZGFya2VyIHNoYWRlIGZvciBjb250cmFzdCAqL1xufVxuXG4vKiBTdHlsZXMgdGhlIHNjcm9sbGJhciBoYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1OyAvKiBUaGUgY29sb3IgeW91IHByb3ZpZGVkIGZvciB0aGUgaGFuZGxlICovXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgdGhlIGhhbmRsZSAqL1xufVxuXG4vKiBTdHlsZXMgdGhlIHNjcm9sbGJhciBpdHNlbGYgKGluY2x1ZGluZyB0aGUgdHJhY2spICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcblx0d2lkdGg6IDEycHg7IC8qIEFkanVzdCB0byB0aGUgc2l6ZSB5b3UgcHJlZmVyICovXG59XG5cbi8qIE9wdGlvbmFsOiBzdHlsZXMgdGhlIHNjcm9sbGJhciBoYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2E5ZDliOyAvKiBBIHNsaWdodGx5IGRhcmtlciBzaGFkZSBvZiB0aGUgaGFuZGxlIGNvbG9yIGZvciBob3ZlciAqL1xufVxuXG4vKiBGaXJlZm94ICovXG5odG1sIHtcblx0c2Nyb2xsYmFyLWNvbG9yOiAjNGZkMWM1ICMyYzNlNTA7XG5cdHNjcm9sbGJhci13aWR0aDogdGhpbjsgLyogWW91IGNhbiB1c2UgJ2F1dG8nIG9yICd0aGluJyAqL1xufVxuXG4uYWJvdXQtcGFnZSB7XG5cdHBhZGRpbmc6IDByZW0gM3JlbTtcblx0cGFkZGluZy1ib3R0b206IDJyZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogNXJlbTtcbn1cblxuLmFib3V0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMnJlbTtcbn1cblxuLmFib3V0LXRleHQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hYm91dC1tZSBzcGFuIHtcblx0Y29sb3I6ICM0ZmQxYzU7XG59XG5cbi5hYm91dC1tZS1kaXYge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uYWJvdXQtbWUtcGljdHVyZSB7XG5cdHdpZHRoOiA3NSU7XG5cdGhlaWdodDogYXV0bztcbn1cblxuLmFib3V0LW1lLXRleHQtZGl2IHtcblx0Zm9udC1zaXplOiAxLjFyZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMXJlbTtcbn1cblxuLmFib3V0LW1lLXRleHQ6bnRoLW9mLXR5cGUoMSkge1xuXHRtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFbmQgb2YgRm9vdGVyIHN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi5jYXJvdXNlbC1pdGVtIGltZyB7XG5cdHdpZHRoOiAzcmVtO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5zZWNvbmQtZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAzcmVtO1xuXHRwYWRkaW5nOiAwIDNyZW07XG59XG5cbi5zZWNvbmQtZGl2LXRleHQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiAxcmVtO1xufVxuXG4uc2Vjb25kLWRpdi10ZXh0IHAge1xuXHRmb250LXNpemU6IDJyZW07XG5cdG1hcmdpbjogMDtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmNhcm91c2VsLWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGJvcmRlcjogM3B4IHNvbGlkICNkZGRkZGQ7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5iYWNrLWJ0bixcbi5mb3J3YXJkLWJ0biB7XG5cdGZvbnQtc2l6ZTogMi41cmVtO1xuXHRjb2xvcjogIzE1MjAyYjtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcblx0Ym9yZGVyOiBub25lO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJvdXNlbCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdG92ZXJmbG93LXg6IGF1dG87XG5cdGdhcDogMnJlbTtcblx0cGFkZGluZzogMXJlbTtcblx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcblx0bWFyZ2luLXRvcDogMC4ycmVtO1xuXHRtYXJnaW4tbGVmdDogMXJlbTtcblx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uY2Fyb3VzZWwtaXRlbSB7XG5cdG1pbi13aWR0aDogN3JlbTtcblx0bWluLWhlaWdodDogMTByZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRnYXA6IDFyZW07XG5cdHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYxNztcbn1cblxuLmNhcm91c2VsLWl0ZW0gcCB7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRtYXJnaW46IDA7XG59XG5cbi5jYXJvdXNlbC1pdGVtcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRnYXA6IDJyZW07XG59XG5cbi8qIFN0eWxlIHRoZSBzY3JvbGxiYXIgKi9cbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuXHR3aWR0aDogNXB4OyAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBzY3JvbGxiYXIgKi9cblx0aGVpZ2h0OiAxMHB4OyAvKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgc2Nyb2xsYmFyICovXG59XG5cbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIHRodW1iICovXG5cdGJvcmRlci1yYWRpdXM6IDVweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciB0aGUgc2Nyb2xsYmFyIHRodW1iICovXG59XG5cbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIHRodW1iIG9uIGhvdmVyICovXG59XG5cbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0cmFjayAqL1xufVxuXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIGNvcm5lciAqL1xufVxuXG4ucHJvamVjdC1kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDJyZW07XG5cdHBhZGRpbmc6IDAgM3JlbTtcbn1cblxuLnByb2plY3QtZGl2IGgxIHtcblx0Y29sb3I6ICM0ZmQxYzU7XG59XG5cbi5wcm9qZWN0LWl0ZW0gaW1nIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bztcbn1cblxuLnByb2plY3QtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cdGdhcDogMnJlbTtcbn1cblxuLnByb2plY3QtaXRlbSB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAycmVtO1xuXHRwYWRkaW5nOiAxcmVtO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMTc7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG59XG5cbi5wcm9qZWN0LWxpbmstZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAxcmVtO1xufVxuXG4ucHJvamVjdC1saW5rLWRpdiBhIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjb2xvcjogIzRmZDFjNTtcblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM0ZmQxYzU7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4ucHJvamVjdC1saW5rLWRpdiBhOmhvdmVyIHtcblx0Y29sb3I6ICNlMGUwZTA7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7XG59XG5cbi5wcm9qZWN0LWl0ZW0tZGl2IHAge1xuXHRmb250LXNpemU6IDEuMXJlbTtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogLi4uZXhpc3Rpbmcgc3R5bGVzICovXG5cbi5oYW1idXJnZXItbWVudSB7XG5cdGRpc3BsYXk6IG5vbmU7XG5cdHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcbn1cblxuLmhhbWJ1cmdlciB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuXHQuc2Vjb25kLWJsb2NrLWhvbWUge1xuXHRcdG1hcmdpbjogMDtcblx0fVxuXG5cdC5sb2dvLWJveCBpbWcge1xuXHRcdHdpZHRoOiAyLjVyZW07XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHR9XG5cblx0LmxvZ28tYm94IGEgaDEge1xuXHRcdGZvbnQtc2l6ZTogMS41cmVtO1xuXHR9XG5cblx0ZGl2LmhhbWJ1cmdlci1tZW51LmluYWN0aXZlLFxuXHRkaXYuaGFtYnVyZ2VyLW1lbnUuYWN0aXZlIHtcblx0XHRtYXJnaW4tdG9wOiAxLjJyZW07XG5cdH1cblxuXHQubWFpbi1jb250YWluZXIge1xuXHRcdGdhcDogMXJlbTtcblx0fVxuXG5cdC50ZXh0LWRpdiB7XG5cdFx0Z2FwOiAxcmVtO1xuXHR9XG5cblx0LnRleHQtZGl2IGgzIHtcblx0XHRmb250LXNpemU6IDEuMjVyZW07XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XG5cdC5oYW1idXJnZXIge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG5cblx0LmhhbWJ1cmdlciBpbWcge1xuXHRcdHdpZHRoOiAycmVtO1xuXHRcdGhlaWdodDogYXV0bztcblx0fVxuXG5cdC5oYW1idXJnZXIgaW1nOmhvdmVyIHtcblx0XHRmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XG5cdH1cblxuXHQubmF2LWJveCB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdC5sb2ctY29udGFpbmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Z2FwOiAxcmVtO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXG5cdC5oYW1idXJnZXItbWVudS5hY3RpdmUge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1O1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHotaW5kZXg6IDk5OTtcblx0XHRhbmltYXRpb246IGV4cGFuZCA1MDBtcyBlYXNlLWluLW91dDtcblx0XHRtYXJnaW4tdG9wOiAycmVtO1xuXHRcdGdhcDogMXJlbTtcblx0XHRwYWRkaW5nLXRvcDogMXJlbTtcblx0XHQvKiBkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRtYXJnaW4tdG9wOiAyLjVyZW07XG5cdFx0Z2FwOiAxcmVtOyAqL1xuXHR9XG5cblx0QGtleWZyYW1lcyBleHBhbmQge1xuXHRcdDAlIHtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGVZKDApO1xuXHRcdH1cblxuXHRcdDcwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlWSgxLjEpO1xuXHRcdH1cblxuXHRcdDEwMCUge1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZVkoMSk7XG5cdFx0fVxuXHR9XG5cblx0LmluYWN0aXZlIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR6LWluZGV4OiA5OTk7XG5cdFx0YW5pbWF0aW9uOiBjb2xsYXBzZSAwLjVzIGZvcndhcmRzO1xuXHRcdG1hcmdpbi10b3A6IDJyZW07XG5cdFx0Z2FwOiAxcmVtO1xuXHRcdHBhZGRpbmctdG9wOiAxcmVtO1xuXHR9XG5cblx0LyogLmluYWN0aXZlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHR0cmFuc2Zvcm06IHNjYWxlWSgwKTtcblx0XHR0cmFuc2l0aW9uOlxuXHRcdFx0dHJhbnNmb3JtIDAuNXMsXG5cdFx0XHRvcGFjaXR5IDAuNXMsXG5cdFx0XHR2aXNpYmlsaXR5IDBzIDBzO1xuXHR9ICovXG5cblx0QGtleWZyYW1lcyBjb2xsYXBzZSB7XG5cdFx0MCUge1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZVkoMSk7XG5cdFx0fVxuXHRcdDcwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlWSgxLjEpO1xuXHRcdH1cblx0XHQxMDAlIHtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGVZKDApO1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHR9XG5cdH1cblxuXHQuaGFtYnVyZ2VyLW1lbnUgYSB7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMS41cHggc29saWQgI2UwZTBlMDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHQuaGFtYnVyZ2VyLW1lbnUgYTpudGgtb2YtdHlwZSg0KSB7XG5cdFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcblx0fVxuXG5cdC5oYW1idXJnZXItbWVudSBhIHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0XHRwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuXHR9XG5cblx0LmZpcnN0LXRleHQtY29udGFpbmVyIGgzIHtcblx0XHRmb250LXNpemU6IDEuNXJlbTtcblx0fVxuXG5cdC5uYW1lIHtcblx0XHRmb250LXNpemU6IDJyZW07XG5cdH1cblxuXHQjdHlwZWQtdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAxLjVyZW07XG5cdH1cblxuXHQuc2Vjb25kLWJsb2NrLXRleHQtY29udGFpbmVyIHtcblx0XHRnYXA6IDNyZW07XG5cdH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxjQUFjO0NBQ2QseUJBQXlCO0NBQ3pCLHlEQUE0QztDQUM1QyxtQ0FBbUM7Q0FDbkMsdUNBQXVDO0NBQ3ZDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsTUFBTTtDQUNOLE9BQU87Q0FDUCxRQUFRO0NBQ1IsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osNkJBQTZCLEVBQUUsNEJBQTRCO0NBQzNELHdCQUF3QixFQUFFLHNCQUFzQjtDQUNoRDs7b0NBRW1DO0FBQ3BDOztBQUVBO0NBQ0MsMkJBQTJCLEVBQUUsb0NBQW9DO0NBQ2pFOzs7OztFQUtDLEVBQUUsb0NBQW9DO0FBQ3hDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsV0FBVztD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QVE7RUFDUixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsaUJBQWlCO0NBQ2xCOztDQUVBOzs7Ozs7OztJQVFHOztDQUVIO0VBQ0M7R0FDQyxvQkFBb0I7RUFDckI7RUFDQTtHQUNDLHNCQUFzQjtFQUN2QjtFQUNBO0dBQ0Msb0JBQW9CO0dBQ3BCLGFBQWE7RUFDZDtDQUNEOztDQUVBO0VBQ0Msa0NBQWtDO0VBQ2xDLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGlCQUFpQjtFQUNqQixzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQyxpQkFBaUI7Q0FDbEI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsU0FBUztDQUNWO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuXFx0Y29sb3I6ICNlMGUwZTA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2JhY2tncm91bmQuanBnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmRpdiNjb250ZW50IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uYXYtYmFyIHtcXG5cXHRwb3NpdGlvbjogc3RpY2t5O1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMS41cmVtIDNyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG5cXHR6LWluZGV4OiA5OTk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIE5vIGJhY2tncm91bmQgaW5pdGlhbGx5ICovXFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDApOyAvKiBObyBibHVyIGluaXRpYWxseSAqL1xcblxcdGJveC1zaGFkb3c6XFxuXFx0XFx0MCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxcblxcdFxcdDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxufVxcblxcbi5uYXYtYmFyLXNjcm9sbGVkIHtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7IC8qIEFkanVzdCB0aGUgYmx1ciB2YWx1ZSBhcyBuZWVkZWQgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcblxcdFxcdDc5LFxcblxcdFxcdDIwOSxcXG5cXHRcXHQxOTcsXFxuXFx0XFx0MC4xNVxcblxcdCk7IC8qIFJHQkEgY29sb3IgZm9yIHRyYW5zbHVjZW50IHRlYWwgKi9cXG59XFxuXFxuLmxvZ28tYm94IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4ubG9nby1ib3ggaW1nIHtcXG5cXHR3aWR0aDogM3JlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lcjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9nby1ib3ggYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lcjpob3ZlcjphZnRlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5sb2ctY29udGFpbmVyOmhvdmVyIC5sb2dvLWJveCBhIGgxIHtcXG5cXHRjb2xvcjogI2ZmZmZmZmZmO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lcjpob3ZlciAubG9nby1ib3ggaW1nIHtcXG5cXHRmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XFxufVxcblxcbi5sb2ctY29udGFpbmVyOmFmdGVyIHtcXG5cXHRiYWNrZ3JvdW5kOiAjNGZkMWM1O1xcblxcdGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuXFx0Ym90dG9tOiAxcHg7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0aGVpZ2h0OiA1cHg7XFxuXFx0bGVmdDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XFxuXFx0d2lkdGg6IDA7XFxuXFx0ei1pbmRleDogLTE7XFxufVxcblxcbi5sb2dvLWJveCBhIGgxIHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2LWxpbmtzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG5cXG4ubmF2LWxpbmtzIGEge1xcblxcdGNvbG9yOiAjZTBlMGUwO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubmF2LWxpbmtzIGE6aG92ZXIge1xcblxcdGNvbG9yOiAjZmZmZmZmZmY7XFxufVxcblxcbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciBhIHtcXG5cXHRjb2xvcjogI2ZmZmZmZmZmO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyIGltZyB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDMpO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyOmFmdGVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hdi1saW5rcyAubmF2LWJveCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94OmFmdGVyIHtcXG5cXHRiYWNrZ3JvdW5kOiAjNGZkMWM1O1xcblxcdGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuXFx0Ym90dG9tOiAtNXB4O1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGhlaWdodDogNXB4O1xcblxcdGxlZnQ6IDA7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xcblxcdHdpZHRoOiAwO1xcblxcdHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDdyZW07XFxufVxcblxcbi5maXJzdC1ibG9jay1ob21lIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcblxcdHBhZGRpbmc6IDAgM3JlbTtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi50ZXh0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc3ViLXRleHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG5cXHR3aWR0aDogNzUlO1xcbn1cXG5cXG4uY29tcHV0ZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLmZpcnN0LXRleHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4udHlwZWQtdGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDJyZW07XFxufVxcblxcbiN0eXBlZC10ZXh0IHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLnR5cGVkLWN1cnNvciB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxuXFx0YW5pbWF0aW9uOiBibGluayAwLjdzIGluZmluaXRlO1xcbn1cXG5cXG4ubmF2LWJveCB7XFxuXFx0cGFkZGluZzogMC4yNXJlbSAwcmVtO1xcbn1cXG5cXG4ud2F2ZSB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdGFuaW1hdGlvbi1uYW1lOiB3YXZlLWFuaW1hdGlvbjtcXG5cXHRhbmltYXRpb24tZHVyYXRpb246IDIuNXM7XFxuXFx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogNzAlIDcwJTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcblxcbkBrZXlmcmFtZXMgd2F2ZS1hbmltYXRpb24ge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFx0MTAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcblxcdH1cXG5cXHQyMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDEyZGVnKTtcXG5cXHR9XFxuXFx0MzAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcblxcdH1cXG5cXHQ0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDlkZWcpO1xcblxcdH1cXG5cXHQ1MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxufVxcblxcbi5uYW1lIHtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLm5hdi1ib3gge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcblxcdGdhcDogMC41cmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYm94IGltZyB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2Vjb25kLXRleHQtY29udGFpbmVyIGg1IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5maXJzdC10ZXh0LWNvbnRhaW5lciBoMyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uc2Vjb25kLXRleHQtY29udGFpbmVyIGg1IHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNlY29uZC1ibG9jay1ob21lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogMCAzcmVtO1xcblxcdG1hcmdpbjogMCA1cmVtO1xcblxcdGdhcDogNXJlbTtcXG59XFxuXFxuLnNlY29uZC1ibG9jay10ZXh0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhhY2tlciB7XFxuXFx0d2lkdGg6IDM1JTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi50ZXh0LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogM3JlbTtcXG59XFxuXFxuLnRleHQtZGl2IGgzIHtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjlyZW07XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uaGlnaGxpZ2h0LFxcbi50ZXh0LWRpdiBoMyBzcGFuIHtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLnN1Yi1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDJyZW07XFxufVxcblxcbi5zdWItdGV4dCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5zb2NpYWwtaWNvbnMgaW1nIHtcXG5cXHR3aWR0aDogMi41cmVtO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zb2NpYWwtaWNvbnMgaW1nOmhvdmVyIHtcXG5cXHRmaWx0ZXI6IGludmVydCgxKTtcXG5cXHRib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDc5LCAyMDksIDE5NywgMC41KTtcXG59XFxuXFxuLnNvY2lhbC10ZXh0LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMC41cmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zb2NpYWwtdGV4dC1kaXYgaDMge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc29jaWFsLXRleHQtZGl2ICoge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnNvY2lhbC1pY29ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLnNvY2lhbC1zdWItdGV4dCB7XFxuXFx0Zm9udC1zaXplOiAwLjhyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDU1MDtcXG59XFxuXFxuLnNvY2lhbC1ibG9jayB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLnNvY2lhbC1zdWItdGV4dCBzcGFuIHtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZvb3RlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGhlaWdodDogMi41cmVtO1xcblxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0cGFkZGluZzogMC4yNXJlbSAzcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbmZvb3RlciBhIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0Y29sb3I6ICNmYWZhZmE7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuZm9vdGVyIHAge1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyLFxcbmZvb3RlciBhOmFjdGl2ZSB7XFxuXFx0Y29sb3I6ICNiMDJlMzk7XFxufVxcblxcbmZvb3RlciBhIGltZyB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIGltZyxcXG5mb290ZXIgYTphY3RpdmUgaW1nIHtcXG5cXHRmaWx0ZXI6IGludmVydCgxKTtcXG5cXHRib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDc5LCAyMDksIDE5NywgMC41KTtcXG59XFxuXFxuLmF0LXN5bWJvbCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBTdHlsZXMgdGhlIHNjcm9sbGJhciB0cmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7IC8qIEEgZGFya2VyIHNoYWRlIGZvciBjb250cmFzdCAqL1xcbn1cXG5cXG4vKiBTdHlsZXMgdGhlIHNjcm9sbGJhciBoYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1OyAvKiBUaGUgY29sb3IgeW91IHByb3ZpZGVkIGZvciB0aGUgaGFuZGxlICovXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciB0aGUgaGFuZGxlICovXFxufVxcblxcbi8qIFN0eWxlcyB0aGUgc2Nyb2xsYmFyIGl0c2VsZiAoaW5jbHVkaW5nIHRoZSB0cmFjaykgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5cXHR3aWR0aDogMTJweDsgLyogQWRqdXN0IHRvIHRoZSBzaXplIHlvdSBwcmVmZXIgKi9cXG59XFxuXFxuLyogT3B0aW9uYWw6IHN0eWxlcyB0aGUgc2Nyb2xsYmFyIGhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzYTlkOWI7IC8qIEEgc2xpZ2h0bHkgZGFya2VyIHNoYWRlIG9mIHRoZSBoYW5kbGUgY29sb3IgZm9yIGhvdmVyICovXFxufVxcblxcbi8qIEZpcmVmb3ggKi9cXG5odG1sIHtcXG5cXHRzY3JvbGxiYXItY29sb3I6ICM0ZmQxYzUgIzJjM2U1MDtcXG5cXHRzY3JvbGxiYXItd2lkdGg6IHRoaW47IC8qIFlvdSBjYW4gdXNlICdhdXRvJyBvciAndGhpbicgKi9cXG59XFxuXFxuLmFib3V0LXBhZ2Uge1xcblxcdHBhZGRpbmc6IDByZW0gM3JlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiA1cmVtO1xcbn1cXG5cXG4uYWJvdXQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG5cXG4uYWJvdXQtdGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hYm91dC1tZSBzcGFuIHtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLmFib3V0LW1lLWRpdiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hYm91dC1tZS1waWN0dXJlIHtcXG5cXHR3aWR0aDogNzUlO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLmFib3V0LW1lLXRleHQtZGl2IHtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4uYWJvdXQtbWUtdGV4dDpudGgtb2YtdHlwZSgxKSB7XFxuXFx0bWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRW5kIG9mIEZvb3RlciBzdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5jYXJvdXNlbC1pdGVtIGltZyB7XFxuXFx0d2lkdGg6IDNyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2Vjb25kLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogM3JlbTtcXG5cXHRwYWRkaW5nOiAwIDNyZW07XFxufVxcblxcbi5zZWNvbmQtZGl2LXRleHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4uc2Vjb25kLWRpdi10ZXh0IHAge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmNhcm91c2VsLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCAjZGRkZGRkO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5iYWNrLWJ0bixcXG4uZm9yd2FyZC1idG4ge1xcblxcdGZvbnQtc2l6ZTogMi41cmVtO1xcblxcdGNvbG9yOiAjMTUyMDJiO1xcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2Fyb3VzZWwge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG5cXHRnYXA6IDJyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHQtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHRtYXJnaW4tdG9wOiAwLjJyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uY2Fyb3VzZWwtaXRlbSB7XFxuXFx0bWluLXdpZHRoOiA3cmVtO1xcblxcdG1pbi1oZWlnaHQ6IDEwcmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHQtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjE3O1xcbn1cXG5cXG4uY2Fyb3VzZWwtaXRlbSBwIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5jYXJvdXNlbC1pdGVtcyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLyogU3R5bGUgdGhlIHNjcm9sbGJhciAqL1xcbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiA1cHg7IC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbGJhciAqL1xcblxcdGhlaWdodDogMTBweDsgLyogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIHNjcm9sbGJhciAqL1xcbn1cXG5cXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIHRodW1iICovXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHRoZSBzY3JvbGxiYXIgdGh1bWIgKi9cXG59XFxuXFxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0aHVtYiBvbiBob3ZlciAqL1xcbn1cXG5cXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0cmFjayAqL1xcbn1cXG5cXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgY29ybmVyICovXFxufVxcblxcbi5wcm9qZWN0LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMnJlbTtcXG5cXHRwYWRkaW5nOiAwIDNyZW07XFxufVxcblxcbi5wcm9qZWN0LWRpdiBoMSB7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gaW1nIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDJyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYxNztcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWxpbmstZGl2IGEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICM0ZmQxYzU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rLWRpdiBhOmhvdmVyIHtcXG5cXHRjb2xvcjogI2UwZTBlMDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0tZGl2IHAge1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi8qIC4uLmV4aXN0aW5nIHN0eWxlcyAqL1xcblxcbi5oYW1idXJnZXItbWVudSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxufVxcblxcbi5oYW1idXJnZXIge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcblxcdC5zZWNvbmQtYmxvY2staG9tZSB7XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdH1cXG5cXG5cXHQubG9nby1ib3ggaW1nIHtcXG5cXHRcXHR3aWR0aDogMi41cmVtO1xcblxcdFxcdGhlaWdodDogYXV0bztcXG5cXHR9XFxuXFxuXFx0LmxvZ28tYm94IGEgaDEge1xcblxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdH1cXG5cXG5cXHRkaXYuaGFtYnVyZ2VyLW1lbnUuaW5hY3RpdmUsXFxuXFx0ZGl2LmhhbWJ1cmdlci1tZW51LmFjdGl2ZSB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMS4ycmVtO1xcblxcdH1cXG5cXG5cXHQubWFpbi1jb250YWluZXIge1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LnRleHQtZGl2IHtcXG5cXHRcXHRnYXA6IDFyZW07XFxuXFx0fVxcblxcblxcdC50ZXh0LWRpdiBoMyB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjI1cmVtO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XFxuXFx0LmhhbWJ1cmdlciB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0fVxcblxcblxcdC5oYW1idXJnZXIgaW1nIHtcXG5cXHRcXHR3aWR0aDogMnJlbTtcXG5cXHRcXHRoZWlnaHQ6IGF1dG87XFxuXFx0fVxcblxcblxcdC5oYW1idXJnZXIgaW1nOmhvdmVyIHtcXG5cXHRcXHRmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XFxuXFx0fVxcblxcblxcdC5uYXYtYm94IHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXG5cXHQubG9nLWNvbnRhaW5lciB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0fVxcblxcblxcdC5oYW1idXJnZXItbWVudS5hY3RpdmUge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1O1xcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdHotaW5kZXg6IDk5OTtcXG5cXHRcXHRhbmltYXRpb246IGV4cGFuZCA1MDBtcyBlYXNlLWluLW91dDtcXG5cXHRcXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHRcXHRwYWRkaW5nLXRvcDogMXJlbTtcXG5cXHRcXHQvKiBkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0cmlnaHQ6IDA7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRtYXJnaW4tdG9wOiAyLjVyZW07XFxuXFx0XFx0Z2FwOiAxcmVtOyAqL1xcblxcdH1cXG5cXG5cXHRAa2V5ZnJhbWVzIGV4cGFuZCB7XFxuXFx0XFx0MCUge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGVZKDApO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQ3MCUge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGVZKDEuMSk7XFxuXFx0XFx0fVxcblxcblxcdFxcdDEwMCUge1xcblxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0LmluYWN0aXZlIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTtcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0XFx0bGVmdDogMDtcXG5cXHRcXHRyaWdodDogMDtcXG5cXHRcXHR6LWluZGV4OiA5OTk7XFxuXFx0XFx0YW5pbWF0aW9uOiBjb2xsYXBzZSAwLjVzIGZvcndhcmRzO1xcblxcdFxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0XFx0Z2FwOiAxcmVtO1xcblxcdFxcdHBhZGRpbmctdG9wOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQvKiAuaW5hY3RpdmUge1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0XFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGVZKDApO1xcblxcdFxcdHRyYW5zaXRpb246XFxuXFx0XFx0XFx0dHJhbnNmb3JtIDAuNXMsXFxuXFx0XFx0XFx0b3BhY2l0eSAwLjVzLFxcblxcdFxcdFxcdHZpc2liaWxpdHkgMHMgMHM7XFxuXFx0fSAqL1xcblxcblxcdEBrZXlmcmFtZXMgY29sbGFwc2Uge1xcblxcdFxcdDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG5cXHRcXHR9XFxuXFx0XFx0NzAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgxLjEpO1xcblxcdFxcdH1cXG5cXHRcXHQxMDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG5cXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0LmhhbWJ1cmdlci1tZW51IGEge1xcblxcdFxcdGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICNlMGUwZTA7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyLW1lbnUgYTpudGgtb2YtdHlwZSg0KSB7XFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LmhhbWJ1cmdlci1tZW51IGEge1xcblxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuXFx0fVxcblxcblxcdC5maXJzdC10ZXh0LWNvbnRhaW5lciBoMyB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0fVxcblxcblxcdC5uYW1lIHtcXG5cXHRcXHRmb250LXNpemU6IDJyZW07XFxuXFx0fVxcblxcblxcdCN0eXBlZC10ZXh0IHtcXG5cXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LnNlY29uZC1ibG9jay10ZXh0LWNvbnRhaW5lciB7XFxuXFx0XFx0Z2FwOiAzcmVtO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHQoKXtyZXR1cm4gdD1PYmplY3QuYXNzaWduP09iamVjdC5hc3NpZ24uYmluZCgpOmZ1bmN0aW9uKHQpe2Zvcih2YXIgcz0xO3M8YXJndW1lbnRzLmxlbmd0aDtzKyspe3ZhciBlPWFyZ3VtZW50c1tzXTtmb3IodmFyIG4gaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmKHRbbl09ZVtuXSl9cmV0dXJuIHR9LHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBzPXtzdHJpbmdzOltcIlRoZXNlIGFyZSB0aGUgZGVmYXVsdCB2YWx1ZXMuLi5cIixcIllvdSBrbm93IHdoYXQgeW91IHNob3VsZCBkbz9cIixcIlVzZSB5b3VyIG93biFcIixcIkhhdmUgYSBncmVhdCBkYXkhXCJdLHN0cmluZ3NFbGVtZW50Om51bGwsdHlwZVNwZWVkOjAsc3RhcnREZWxheTowLGJhY2tTcGVlZDowLHNtYXJ0QmFja3NwYWNlOiEwLHNodWZmbGU6ITEsYmFja0RlbGF5OjcwMCxmYWRlT3V0OiExLGZhZGVPdXRDbGFzczpcInR5cGVkLWZhZGUtb3V0XCIsZmFkZU91dERlbGF5OjUwMCxsb29wOiExLGxvb3BDb3VudDpJbmZpbml0eSxzaG93Q3Vyc29yOiEwLGN1cnNvckNoYXI6XCJ8XCIsYXV0b0luc2VydENzczohMCxhdHRyOm51bGwsYmluZElucHV0Rm9jdXNFdmVudHM6ITEsY29udGVudFR5cGU6XCJodG1sXCIsb25CZWdpbjpmdW5jdGlvbih0KXt9LG9uQ29tcGxldGU6ZnVuY3Rpb24odCl7fSxwcmVTdHJpbmdUeXBlZDpmdW5jdGlvbih0LHMpe30sb25TdHJpbmdUeXBlZDpmdW5jdGlvbih0LHMpe30sb25MYXN0U3RyaW5nQmFja3NwYWNlZDpmdW5jdGlvbih0KXt9LG9uVHlwaW5nUGF1c2VkOmZ1bmN0aW9uKHQscyl7fSxvblR5cGluZ1Jlc3VtZWQ6ZnVuY3Rpb24odCxzKXt9LG9uUmVzZXQ6ZnVuY3Rpb24odCl7fSxvblN0b3A6ZnVuY3Rpb24odCxzKXt9LG9uU3RhcnQ6ZnVuY3Rpb24odCxzKXt9LG9uRGVzdHJveTpmdW5jdGlvbih0KXt9fSxlPW5ldygvKiNfX1BVUkVfXyovZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7fXZhciBuPWUucHJvdG90eXBlO3JldHVybiBuLmxvYWQ9ZnVuY3Rpb24oZSxuLGkpe2lmKGUuZWw9XCJzdHJpbmdcIj09dHlwZW9mIGk/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpKTppLGUub3B0aW9ucz10KHt9LHMsbiksZS5pc0lucHV0PVwiaW5wdXRcIj09PWUuZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpLGUuYXR0cj1lLm9wdGlvbnMuYXR0cixlLmJpbmRJbnB1dEZvY3VzRXZlbnRzPWUub3B0aW9ucy5iaW5kSW5wdXRGb2N1c0V2ZW50cyxlLnNob3dDdXJzb3I9IWUuaXNJbnB1dCYmZS5vcHRpb25zLnNob3dDdXJzb3IsZS5jdXJzb3JDaGFyPWUub3B0aW9ucy5jdXJzb3JDaGFyLGUuY3Vyc29yQmxpbmtpbmc9ITAsZS5lbENvbnRlbnQ9ZS5hdHRyP2UuZWwuZ2V0QXR0cmlidXRlKGUuYXR0cik6ZS5lbC50ZXh0Q29udGVudCxlLmNvbnRlbnRUeXBlPWUub3B0aW9ucy5jb250ZW50VHlwZSxlLnR5cGVTcGVlZD1lLm9wdGlvbnMudHlwZVNwZWVkLGUuc3RhcnREZWxheT1lLm9wdGlvbnMuc3RhcnREZWxheSxlLmJhY2tTcGVlZD1lLm9wdGlvbnMuYmFja1NwZWVkLGUuc21hcnRCYWNrc3BhY2U9ZS5vcHRpb25zLnNtYXJ0QmFja3NwYWNlLGUuYmFja0RlbGF5PWUub3B0aW9ucy5iYWNrRGVsYXksZS5mYWRlT3V0PWUub3B0aW9ucy5mYWRlT3V0LGUuZmFkZU91dENsYXNzPWUub3B0aW9ucy5mYWRlT3V0Q2xhc3MsZS5mYWRlT3V0RGVsYXk9ZS5vcHRpb25zLmZhZGVPdXREZWxheSxlLmlzUGF1c2VkPSExLGUuc3RyaW5ncz1lLm9wdGlvbnMuc3RyaW5ncy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQudHJpbSgpfSksZS5zdHJpbmdzRWxlbWVudD1cInN0cmluZ1wiPT10eXBlb2YgZS5vcHRpb25zLnN0cmluZ3NFbGVtZW50P2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS5vcHRpb25zLnN0cmluZ3NFbGVtZW50KTplLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQsZS5zdHJpbmdzRWxlbWVudCl7ZS5zdHJpbmdzPVtdLGUuc3RyaW5nc0VsZW1lbnQuc3R5bGUuY3NzVGV4dD1cImNsaXA6IHJlY3QoMCAwIDAgMCk7Y2xpcC1wYXRoOmluc2V0KDUwJSk7aGVpZ2h0OjFweDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7d2hpdGUtc3BhY2U6bm93cmFwO3dpZHRoOjFweDtcIjt2YXIgcj1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZS5zdHJpbmdzRWxlbWVudC5jaGlsZHJlbiksbz1yLmxlbmd0aDtpZihvKWZvcih2YXIgYT0wO2E8bzthKz0xKWUuc3RyaW5ncy5wdXNoKHJbYV0uaW5uZXJIVE1MLnRyaW0oKSl9Zm9yKHZhciB1IGluIGUuc3RyUG9zPTAsZS5jdXJyZW50RWxDb250ZW50PXRoaXMuZ2V0Q3VycmVudEVsQ29udGVudChlKSxlLmN1cnJlbnRFbENvbnRlbnQmJmUuY3VycmVudEVsQ29udGVudC5sZW5ndGg+MCYmKGUuc3RyUG9zPWUuY3VycmVudEVsQ29udGVudC5sZW5ndGgtMSxlLnN0cmluZ3MudW5zaGlmdChlLmN1cnJlbnRFbENvbnRlbnQpKSxlLnNlcXVlbmNlPVtdLGUuc3RyaW5ncyllLnNlcXVlbmNlW3VdPXU7ZS5hcnJheVBvcz0wLGUuc3RvcE51bT0wLGUubG9vcD1lLm9wdGlvbnMubG9vcCxlLmxvb3BDb3VudD1lLm9wdGlvbnMubG9vcENvdW50LGUuY3VyTG9vcD0wLGUuc2h1ZmZsZT1lLm9wdGlvbnMuc2h1ZmZsZSxlLnBhdXNlPXtzdGF0dXM6ITEsdHlwZXdyaXRlOiEwLGN1clN0cmluZzpcIlwiLGN1clN0clBvczowfSxlLnR5cGluZ0NvbXBsZXRlPSExLGUuYXV0b0luc2VydENzcz1lLm9wdGlvbnMuYXV0b0luc2VydENzcyxlLmF1dG9JbnNlcnRDc3MmJih0aGlzLmFwcGVuZEN1cnNvckFuaW1hdGlvbkNzcyhlKSx0aGlzLmFwcGVuZEZhZGVPdXRBbmltYXRpb25Dc3MoZSkpfSxuLmdldEN1cnJlbnRFbENvbnRlbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQuYXR0cj90LmVsLmdldEF0dHJpYnV0ZSh0LmF0dHIpOnQuaXNJbnB1dD90LmVsLnZhbHVlOlwiaHRtbFwiPT09dC5jb250ZW50VHlwZT90LmVsLmlubmVySFRNTDp0LmVsLnRleHRDb250ZW50fSxuLmFwcGVuZEN1cnNvckFuaW1hdGlvbkNzcz1mdW5jdGlvbih0KXt2YXIgcz1cImRhdGEtdHlwZWQtanMtY3Vyc29yLWNzc1wiO2lmKHQuc2hvd0N1cnNvciYmIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbXCIrcytcIl1cIikpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtlLnNldEF0dHJpYnV0ZShzLFwidHJ1ZVwiKSxlLmlubmVySFRNTD1cIlxcbiAgICAgICAgLnR5cGVkLWN1cnNvcntcXG4gICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIH1cXG4gICAgICAgIC50eXBlZC1jdXJzb3IudHlwZWQtY3Vyc29yLS1ibGlua3tcXG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICB9XFxuICAgICAgICBAa2V5ZnJhbWVzIHR5cGVkanNCbGlua3tcXG4gICAgICAgICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XFxuICAgICAgICB9XFxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XFxuICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICB9XFxuICAgICAgXCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKX19LG4uYXBwZW5kRmFkZU91dEFuaW1hdGlvbkNzcz1mdW5jdGlvbih0KXt2YXIgcz1cImRhdGEtdHlwZWQtZmFkZW91dC1qcy1jc3NcIjtpZih0LmZhZGVPdXQmJiFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW1wiK3MrXCJdXCIpKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7ZS5zZXRBdHRyaWJ1dGUocyxcInRydWVcIiksZS5pbm5lckhUTUw9XCJcXG4gICAgICAgIC50eXBlZC1mYWRlLW91dHtcXG4gICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnR5cGVkLWN1cnNvci50eXBlZC1jdXJzb3ItLWJsaW5rLnR5cGVkLWZhZGUtb3V0e1xcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogMDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiAwO1xcbiAgICAgICAgfVxcbiAgICAgIFwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZSl9fSxlfSgpKSxuPW5ldygvKiNfX1BVUkVfXyovZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXZhciBzPXQucHJvdG90eXBlO3JldHVybiBzLnR5cGVIdG1sQ2hhcnM9ZnVuY3Rpb24odCxzLGUpe2lmKFwiaHRtbFwiIT09ZS5jb250ZW50VHlwZSlyZXR1cm4gczt2YXIgbj10LnN1YnN0cmluZyhzKS5jaGFyQXQoMCk7aWYoXCI8XCI9PT1ufHxcIiZcIj09PW4pe3ZhciBpO2ZvcihpPVwiPFwiPT09bj9cIj5cIjpcIjtcIjt0LnN1YnN0cmluZyhzKzEpLmNoYXJBdCgwKSE9PWkmJiEoMSsgKytzPnQubGVuZ3RoKTspO3MrK31yZXR1cm4gc30scy5iYWNrU3BhY2VIdG1sQ2hhcnM9ZnVuY3Rpb24odCxzLGUpe2lmKFwiaHRtbFwiIT09ZS5jb250ZW50VHlwZSlyZXR1cm4gczt2YXIgbj10LnN1YnN0cmluZyhzKS5jaGFyQXQoMCk7aWYoXCI+XCI9PT1ufHxcIjtcIj09PW4pe3ZhciBpO2ZvcihpPVwiPlwiPT09bj9cIjxcIjpcIiZcIjt0LnN1YnN0cmluZyhzLTEpLmNoYXJBdCgwKSE9PWkmJiEoLS1zPDApOyk7cy0tfXJldHVybiBzfSx0fSgpKSxpPS8qI19fUFVSRV9fKi9mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxzKXtlLmxvYWQodGhpcyxzLHQpLHRoaXMuYmVnaW4oKX12YXIgcz10LnByb3RvdHlwZTtyZXR1cm4gcy50b2dnbGU9ZnVuY3Rpb24oKXt0aGlzLnBhdXNlLnN0YXR1cz90aGlzLnN0YXJ0KCk6dGhpcy5zdG9wKCl9LHMuc3RvcD1mdW5jdGlvbigpe3RoaXMudHlwaW5nQ29tcGxldGV8fHRoaXMucGF1c2Uuc3RhdHVzfHwodGhpcy50b2dnbGVCbGlua2luZyghMCksdGhpcy5wYXVzZS5zdGF0dXM9ITAsdGhpcy5vcHRpb25zLm9uU3RvcCh0aGlzLmFycmF5UG9zLHRoaXMpKX0scy5zdGFydD1mdW5jdGlvbigpe3RoaXMudHlwaW5nQ29tcGxldGV8fHRoaXMucGF1c2Uuc3RhdHVzJiYodGhpcy5wYXVzZS5zdGF0dXM9ITEsdGhpcy5wYXVzZS50eXBld3JpdGU/dGhpcy50eXBld3JpdGUodGhpcy5wYXVzZS5jdXJTdHJpbmcsdGhpcy5wYXVzZS5jdXJTdHJQb3MpOnRoaXMuYmFja3NwYWNlKHRoaXMucGF1c2UuY3VyU3RyaW5nLHRoaXMucGF1c2UuY3VyU3RyUG9zKSx0aGlzLm9wdGlvbnMub25TdGFydCh0aGlzLmFycmF5UG9zLHRoaXMpKX0scy5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5yZXNldCghMSksdGhpcy5vcHRpb25zLm9uRGVzdHJveSh0aGlzKX0scy5yZXNldD1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD0hMCksY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXQpLHRoaXMucmVwbGFjZVRleHQoXCJcIiksdGhpcy5jdXJzb3ImJnRoaXMuY3Vyc29yLnBhcmVudE5vZGUmJih0aGlzLmN1cnNvci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY3Vyc29yKSx0aGlzLmN1cnNvcj1udWxsKSx0aGlzLnN0clBvcz0wLHRoaXMuYXJyYXlQb3M9MCx0aGlzLmN1ckxvb3A9MCx0JiYodGhpcy5pbnNlcnRDdXJzb3IoKSx0aGlzLm9wdGlvbnMub25SZXNldCh0aGlzKSx0aGlzLmJlZ2luKCkpfSxzLmJlZ2luPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLm9wdGlvbnMub25CZWdpbih0aGlzKSx0aGlzLnR5cGluZ0NvbXBsZXRlPSExLHRoaXMuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCh0aGlzKSx0aGlzLmluc2VydEN1cnNvcigpLHRoaXMuYmluZElucHV0Rm9jdXNFdmVudHMmJnRoaXMuYmluZEZvY3VzRXZlbnRzKCksdGhpcy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXswPT09dC5zdHJQb3M/dC50eXBld3JpdGUodC5zdHJpbmdzW3Quc2VxdWVuY2VbdC5hcnJheVBvc11dLHQuc3RyUG9zKTp0LmJhY2tzcGFjZSh0LnN0cmluZ3NbdC5zZXF1ZW5jZVt0LmFycmF5UG9zXV0sdC5zdHJQb3MpfSx0aGlzLnN0YXJ0RGVsYXkpfSxzLnR5cGV3cml0ZT1mdW5jdGlvbih0LHMpe3ZhciBlPXRoaXM7dGhpcy5mYWRlT3V0JiZ0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmZhZGVPdXRDbGFzcykmJih0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5mYWRlT3V0Q2xhc3MpLHRoaXMuY3Vyc29yJiZ0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKSk7dmFyIGk9dGhpcy5odW1hbml6ZXIodGhpcy50eXBlU3BlZWQpLHI9MTshMCE9PXRoaXMucGF1c2Uuc3RhdHVzP3RoaXMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cz1uLnR5cGVIdG1sQ2hhcnModCxzLGUpO3ZhciBpPTAsbz10LnN1YnN0cmluZyhzKTtpZihcIl5cIj09PW8uY2hhckF0KDApJiYvXlxcXlxcZCsvLnRlc3Qobykpe3ZhciBhPTE7YSs9KG89L1xcZCsvLmV4ZWMobylbMF0pLmxlbmd0aCxpPXBhcnNlSW50KG8pLGUudGVtcG9yYXJ5UGF1c2U9ITAsZS5vcHRpb25zLm9uVHlwaW5nUGF1c2VkKGUuYXJyYXlQb3MsZSksdD10LnN1YnN0cmluZygwLHMpK3Quc3Vic3RyaW5nKHMrYSksZS50b2dnbGVCbGlua2luZyghMCl9aWYoXCJgXCI9PT1vLmNoYXJBdCgwKSl7Zm9yKDtcImBcIiE9PXQuc3Vic3RyaW5nKHMrcikuY2hhckF0KDApJiYocisrLCEocytyPnQubGVuZ3RoKSk7KTt2YXIgdT10LnN1YnN0cmluZygwLHMpLHA9dC5zdWJzdHJpbmcodS5sZW5ndGgrMSxzK3IpLGM9dC5zdWJzdHJpbmcocytyKzEpO3Q9dStwK2Msci0tfWUudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS50b2dnbGVCbGlua2luZyghMSkscz49dC5sZW5ndGg/ZS5kb25lVHlwaW5nKHQscyk6ZS5rZWVwVHlwaW5nKHQscyxyKSxlLnRlbXBvcmFyeVBhdXNlJiYoZS50ZW1wb3JhcnlQYXVzZT0hMSxlLm9wdGlvbnMub25UeXBpbmdSZXN1bWVkKGUuYXJyYXlQb3MsZSkpfSxpKX0saSk6dGhpcy5zZXRQYXVzZVN0YXR1cyh0LHMsITApfSxzLmtlZXBUeXBpbmc9ZnVuY3Rpb24odCxzLGUpezA9PT1zJiYodGhpcy50b2dnbGVCbGlua2luZyghMSksdGhpcy5vcHRpb25zLnByZVN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsdGhpcykpO3ZhciBuPXQuc3Vic3RyaW5nKDAscys9ZSk7dGhpcy5yZXBsYWNlVGV4dChuKSx0aGlzLnR5cGV3cml0ZSh0LHMpfSxzLmRvbmVUeXBpbmc9ZnVuY3Rpb24odCxzKXt2YXIgZT10aGlzO3RoaXMub3B0aW9ucy5vblN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsdGhpcyksdGhpcy50b2dnbGVCbGlua2luZyghMCksdGhpcy5hcnJheVBvcz09PXRoaXMuc3RyaW5ncy5sZW5ndGgtMSYmKHRoaXMuY29tcGxldGUoKSwhMT09PXRoaXMubG9vcHx8dGhpcy5jdXJMb29wPT09dGhpcy5sb29wQ291bnQpfHwodGhpcy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmJhY2tzcGFjZSh0LHMpfSx0aGlzLmJhY2tEZWxheSkpfSxzLmJhY2tzcGFjZT1mdW5jdGlvbih0LHMpe3ZhciBlPXRoaXM7aWYoITAhPT10aGlzLnBhdXNlLnN0YXR1cyl7aWYodGhpcy5mYWRlT3V0KXJldHVybiB0aGlzLmluaXRGYWRlT3V0KCk7dGhpcy50b2dnbGVCbGlua2luZyghMSk7dmFyIGk9dGhpcy5odW1hbml6ZXIodGhpcy5iYWNrU3BlZWQpO3RoaXMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cz1uLmJhY2tTcGFjZUh0bWxDaGFycyh0LHMsZSk7dmFyIGk9dC5zdWJzdHJpbmcoMCxzKTtpZihlLnJlcGxhY2VUZXh0KGkpLGUuc21hcnRCYWNrc3BhY2Upe3ZhciByPWUuc3RyaW5nc1tlLmFycmF5UG9zKzFdO2Uuc3RvcE51bT1yJiZpPT09ci5zdWJzdHJpbmcoMCxzKT9zOjB9cz5lLnN0b3BOdW0/KHMtLSxlLmJhY2tzcGFjZSh0LHMpKTpzPD1lLnN0b3BOdW0mJihlLmFycmF5UG9zKyssZS5hcnJheVBvcz09PWUuc3RyaW5ncy5sZW5ndGg/KGUuYXJyYXlQb3M9MCxlLm9wdGlvbnMub25MYXN0U3RyaW5nQmFja3NwYWNlZCgpLGUuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCgpLGUuYmVnaW4oKSk6ZS50eXBld3JpdGUoZS5zdHJpbmdzW2Uuc2VxdWVuY2VbZS5hcnJheVBvc11dLHMpKX0saSl9ZWxzZSB0aGlzLnNldFBhdXNlU3RhdHVzKHQscywhMSl9LHMuY29tcGxldGU9ZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMub25Db21wbGV0ZSh0aGlzKSx0aGlzLmxvb3A/dGhpcy5jdXJMb29wKys6dGhpcy50eXBpbmdDb21wbGV0ZT0hMH0scy5zZXRQYXVzZVN0YXR1cz1mdW5jdGlvbih0LHMsZSl7dGhpcy5wYXVzZS50eXBld3JpdGU9ZSx0aGlzLnBhdXNlLmN1clN0cmluZz10LHRoaXMucGF1c2UuY3VyU3RyUG9zPXN9LHMudG9nZ2xlQmxpbmtpbmc9ZnVuY3Rpb24odCl7dGhpcy5jdXJzb3ImJih0aGlzLnBhdXNlLnN0YXR1c3x8dGhpcy5jdXJzb3JCbGlua2luZyE9PXQmJih0aGlzLmN1cnNvckJsaW5raW5nPXQsdD90aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKFwidHlwZWQtY3Vyc29yLS1ibGlua1wiKTp0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKFwidHlwZWQtY3Vyc29yLS1ibGlua1wiKSkpfSxzLmh1bWFuaXplcj1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKnQvMikrdH0scy5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkPWZ1bmN0aW9uKCl7dGhpcy5zaHVmZmxlJiYodGhpcy5zZXF1ZW5jZT10aGlzLnNlcXVlbmNlLnNvcnQoZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5yYW5kb20oKS0uNX0pKX0scy5pbml0RmFkZU91dD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7cmV0dXJuIHRoaXMuZWwuY2xhc3NOYW1lKz1cIiBcIit0aGlzLmZhZGVPdXRDbGFzcyx0aGlzLmN1cnNvciYmKHRoaXMuY3Vyc29yLmNsYXNzTmFtZSs9XCIgXCIrdGhpcy5mYWRlT3V0Q2xhc3MpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LmFycmF5UG9zKyssdC5yZXBsYWNlVGV4dChcIlwiKSx0LnN0cmluZ3MubGVuZ3RoPnQuYXJyYXlQb3M/dC50eXBld3JpdGUodC5zdHJpbmdzW3Quc2VxdWVuY2VbdC5hcnJheVBvc11dLDApOih0LnR5cGV3cml0ZSh0LnN0cmluZ3NbMF0sMCksdC5hcnJheVBvcz0wKX0sdGhpcy5mYWRlT3V0RGVsYXkpfSxzLnJlcGxhY2VUZXh0PWZ1bmN0aW9uKHQpe3RoaXMuYXR0cj90aGlzLmVsLnNldEF0dHJpYnV0ZSh0aGlzLmF0dHIsdCk6dGhpcy5pc0lucHV0P3RoaXMuZWwudmFsdWU9dDpcImh0bWxcIj09PXRoaXMuY29udGVudFR5cGU/dGhpcy5lbC5pbm5lckhUTUw9dDp0aGlzLmVsLnRleHRDb250ZW50PXR9LHMuYmluZEZvY3VzRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLmlzSW5wdXQmJih0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLGZ1bmN0aW9uKHMpe3Quc3RvcCgpfSksdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLGZ1bmN0aW9uKHMpe3QuZWwudmFsdWUmJjAhPT10LmVsLnZhbHVlLmxlbmd0aHx8dC5zdGFydCgpfSkpfSxzLmluc2VydEN1cnNvcj1mdW5jdGlvbigpe3RoaXMuc2hvd0N1cnNvciYmKHRoaXMuY3Vyc29yfHwodGhpcy5jdXJzb3I9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksdGhpcy5jdXJzb3IuY2xhc3NOYW1lPVwidHlwZWQtY3Vyc29yXCIsdGhpcy5jdXJzb3Iuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwhMCksdGhpcy5jdXJzb3IuaW5uZXJIVE1MPXRoaXMuY3Vyc29yQ2hhcix0aGlzLmVsLnBhcmVudE5vZGUmJnRoaXMuZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jdXJzb3IsdGhpcy5lbC5uZXh0U2libGluZykpKX0sdH0oKTtleHBvcnR7aSBhcyBkZWZhdWx0fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVkLm1vZHVsZS5qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgc2V0dXBQYWdlIGZyb20gXCIuL3NldHVwXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZXBhZ2VcIjtcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zb2xlLmxvZyhcIlRlc3QgYnVpbGRcIik7XG5zZXR1cFBhZ2UoKTtcbkhvbWVQYWdlKCk7XG5cbmNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYm94Om50aC1vZi10eXBlKDEpXCIpO1xuY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYm94Om50aC1vZi10eXBlKDIpXCIpO1xuY29uc3QgcHJvamVjdHNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYm94Om50aC1vZi10eXBlKDMpXCIpO1xuY29uc3QgcmVzdW1lTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJveDpudGgtb2YtdHlwZSg0KVwiKTtcblxuY29uc3QgbW9iaWxlSG9tZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcIi5oYW1idXJnZXItbWVudSA+IGE6bnRoLW9mLXR5cGUoMSlcIixcbik7XG5jb25zdCBtb2JpbGVBYm91dExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcIi5oYW1idXJnZXItbWVudSA+IGE6bnRoLW9mLXR5cGUoMilcIixcbik7XG5jb25zdCBtb2JpbGVQcm9qZWN0c0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcIi5oYW1idXJnZXItbWVudSA+IGE6bnRoLW9mLXR5cGUoMylcIixcbik7XG5jb25zdCBtb2JpbGVSZXN1bWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XCIuaGFtYnVyZ2VyLW1lbnUgPiBhOm50aC1vZi10eXBlKDQpXCIsXG4pO1xuXG5ob21lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRIb21lUGFnZSgpO1xufSk7XG5cbm1vYmlsZUhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdEhvbWVQYWdlKCk7XG59KTtcblxuYWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGFib3V0KCk7XG59KTtcblxubW9iaWxlQWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGFib3V0KCk7XG59KTtcblxucHJvamVjdHNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdHByb2plY3QoKTtcbn0pO1xuXG5tb2JpbGVQcm9qZWN0c0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0cHJvamVjdCgpO1xufSk7XG5cbnJlc3VtZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0d2luZG93Lm9wZW4oXG5cdFx0XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4Q1pTbTRLM3RjN19ocUhoeklxUU1zNkVfQ3otNnFVZy92aWV3P3VzcD1zaGFyaW5nXCIsXG5cdCk7XG59KTtcblxubW9iaWxlUmVzdW1lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHR3aW5kb3cub3Blbihcblx0XHRcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMXhDWlNtNEszdGM3X2hxSGh6SXFRTXM2RV9Dei02cVVnL3ZpZXc/dXNwPXNoYXJpbmdcIixcblx0KTtcbn0pO1xuIl0sIm5hbWVzIjpbIlNoYWhpciIsIkdpdFNvY2lhbCIsIkxpbmtlZCIsIkRvY2tlciIsIlNxbCIsIkVjbGlwc2UiLCJMdWEiLCJWdWUiLCJDeXByZXNzIiwiVnNjb2RlIiwiQyIsIk5wbSIsIkJhYmVsIiwiUHJldHRpZXIiLCJFc2xpbnQiLCJXZWJwYWNrIiwiSmVzdCIsIkdpdCIsIlB5dGhvbiIsIkphdmEiLCJMaW51eCIsIkh0bWwiLCJDc3MiLCJKcyIsImNyZWF0ZUNhcm91c2VsSXRlbSIsImltYWdlIiwidGl0bGUiLCJjYXJvdXNlbEl0ZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYXJvdXNlbEltYWdlIiwic3JjIiwiYWx0IiwiY2Fyb3VzZWxUaXRsZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJidXR0b25zIiwiY2Fyb3VzZWwiLCJxdWVyeVNlbGVjdG9yIiwiYmFja0J0biIsImZvcndhcmRCdG4iLCJpc1Njcm9sbGluZyIsInNjcm9sbERpcmVjdGlvbiIsInNjcm9sbFN0ZXAiLCJhbmltYXRlU2Nyb2xsIiwic2Nyb2xsRGlzdGFuY2UiLCJzY3JvbGxMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJzY3JvbGxXaWR0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFJpZ2h0Iiwic3RvcFNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhYm91dCIsImFib3V0UGFnZSIsImFib3V0Q29udGFpbmVyIiwiYWJvdXRUZXh0Q29udGFpbmVyIiwiYWJvdXRNZSIsImFib3V0TWVTcGFuIiwiYWJvdXRNZURpdiIsImFib3V0TWVUZXh0RGl2IiwicGFyYWdyYXBoIiwiYWJvdXRNZVRleHQiLCJhYm91dE1lVGV4dDIiLCJhYm91dE1lVGV4dDMiLCJhYm91dE1lVGV4dDQiLCJzb2NpYWxJY29ucyIsImdpdExpbmsiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiZ2l0U29jaWFsIiwibGlua2VkTGluayIsImxpbmtlZCIsInBpY3R1cmUiLCJzZWNvbmREaXYiLCJzZWNvbmREaXZUZXh0IiwiaGlnaGxpZ2h0IiwiYW5kIiwiY3JlYXRlVGV4dE5vZGUiLCJoaWdobGlnaHRUZXh0Iiwic2VudGVuY2UiLCJ0ZXh0IiwiY2Fyb3VzZWxDb250YWluZXIiLCJjYXJvdXNlbERpdiIsImNhcm91c2VsSXRlbXMiLCJjYXJvdXNlbEl0ZW0xIiwiY2Fyb3VzZWxJdGVtMiIsImNhcm91c2VsSXRlbTMiLCJjYXJvdXNlbEl0ZW00IiwiY2Fyb3VzZWxJdGVtNSIsImNhcm91c2VsSXRlbTYiLCJjYXJvdXNlbEl0ZW03IiwiY2Fyb3VzZWxJdGVtOCIsImNhcm91c2VsSXRlbTkiLCJjYXJvdXNlbEl0ZW0xMCIsImNhcm91c2VsSXRlbTExIiwiY2Fyb3VzZWxJdGVtMTIiLCJjYXJvdXNlbEl0ZW0xMyIsImNhcm91c2VsSXRlbTE0IiwiY2Fyb3VzZWxJdGVtMTUiLCJjYXJvdXNlbEl0ZW0xNiIsImNhcm91c2VsSXRlbTE3IiwiY2Fyb3VzZWxJdGVtMTgiLCJjYXJvdXNlbEl0ZW0xOSIsImNhcm91c2VsSXRlbTIwIiwiY2Fyb3VzZWxJdGVtMjEiLCJtYWluIiwiaW5uZXJIVE1MIiwiVHlwZWQiLCJDb21wdXRlciIsIkhhbmQiLCJIYWNrZXIiLCJkeW5hbWljVGV4dCIsInR5cGVkIiwic3RyaW5ncyIsInR5cGVTcGVlZCIsImJhY2tTcGVlZCIsInN0YXJ0RGVsYXkiLCJiYWNrRGVsYXkiLCJsb29wIiwic2hvd0N1cnNvciIsImN1cnNvckNoYXIiLCJhdHRyIiwiYXV0b0luc2VydENzcyIsImNvbnRlbnRUeXBlIiwiSG9tZVBhZ2UiLCJtYWluQ29udGFpbmVyIiwiZmlyc3RCbG9ja0hvbWUiLCJ0ZXh0Q29udGFpbmVyIiwic3ViVGV4dENvbnRhaW5lciIsImZpcnN0VGV4dENvbnRhaW5lciIsImZpcnN0VGV4dCIsIndhdmUiLCJzZWNvbmRUZXh0Q29udGFpbmVyIiwic2Vjb25kVGV4dCIsIm5hbWUiLCJ0eXBlZFRleHRDb250YWluZXIiLCJ0eXBlZFRleHQiLCJpZCIsImltYWdlQ29udGFpbmVyIiwic2Vjb25kQmxvY2tIb21lIiwic2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyIiwidGV4dERpdiIsInNwYW4iLCJzdWJEaXYiLCJzdWJUZXh0QWZ0ZXJIaWdobGlnaHQiLCJzdWJUZXh0Iiwic3Vic3ViVGV4dCIsImhhY2tlciIsInNvY2lhbEJsb2NrIiwic29jaWFsVGV4dERpdiIsInNvY2lhbFRleHQiLCJ0ZXh0QmVmb3JlIiwidGV4dEFmdGVyIiwic3BhbkNvbnRlbnQiLCJzb2NpYWxTdWJUZXh0IiwiVG9kbyIsIkJhdHRsZXNoaXAiLCJXZWF0aGVyIiwiVGljdGFjIiwiQ2FsY3VsYXRvciIsIlJlc3RhdXJhbnQiLCJFdGNoIiwiY3JlYXRlUHJvamVjdEl0ZW0iLCJkZXNjcmlwdGlvbiIsImxpdmVEZW1vIiwic291cmNlQ29kZSIsInByb2plY3RJdGVtIiwicHJvamVjdEltYWdlIiwicHJvamVjdEl0ZW1EaXYiLCJwcm9qZWN0VGl0bGUiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJwcm9qZWN0TGlua0RpdiIsInByb2plY3RMaXZlRGVtbyIsInByb2plY3RTb3VyY2VDb2RlIiwicHJvamVjdCIsInByb2plY3REaXYiLCJwcm9qZWN0Q29udGFpbmVyIiwidG9kbyIsImJhdHRsZXNoaXAiLCJ3ZWF0aGVyIiwidGljdGFjIiwiY2FsY3VsYXRvciIsInJlc3RhdXJhbnQiLCJldGNoIiwiSWNvbiIsIkhvbWUiLCJBYm91dCIsIkNvZGUiLCJEb2MiLCJHaXRIdWIiLCJoYW1idXJnZXJJbWciLCJjcmVhdGVOYXZCYXIiLCJiYXIiLCJsb2dDb250YWluZXIiLCJsb2dvQm94IiwibG9nbyIsImxvZ29MaW5rIiwibG9nb1RleHQiLCJsb2dvTGluazIiLCJuYXZMaW5rcyIsImhvbWVCb3giLCJob21lTGluayIsImhvbWVJY29uIiwibWVudUxpbmtib3giLCJtZW51TGluayIsIm1lbnVJY29uIiwiY29udGFjdExpbmtib3giLCJjb250YWN0TGluayIsImNvbnRhY3RJY29uIiwiQWJvdXRMaW5rYm94IiwiQWJvdXRMaW5rIiwiQWJvdXRJY29uIiwiaGFtYnVyZ2VyIiwiaGFtYnVyZ2VySWNvbiIsImhhbWJ1cmdlck1lbnUiLCJoYW1idXJnZXJNZW51SG9tZSIsImhhbWJ1cmdlck1lbnVBYm91dCIsImhhbWJ1cmdlck1lbnVQcm9qZWN0cyIsImhhbWJ1cmdlck1lbnVSZXN1bWUiLCJjb250ZW50IiwiY3JlYXRlRm9vdGVyIiwiZm9vdGVyIiwiZ2l0SHViUHJvZmlsZSIsImdpdEh1YlByb2ZpbGVJbWciLCJnaXRIdWJQcm9maWxlVGV4dCIsImF0U3ltYm9sIiwidXNlcm5hbWUiLCJzZXBlcmF0b3IiLCJnaXRIdWJSZXBvIiwic2V0dXBQYWdlIiwid2luZG93IiwibmF2QmFyIiwic2Nyb2xsWSIsInJlbW92ZSIsImNvbnRhaW5zIiwiY29uc29sZSIsImxvZyIsImFib3V0TGluayIsInByb2plY3RzTGluayIsInJlc3VtZUxpbmsiLCJtb2JpbGVIb21lTGluayIsIm1vYmlsZUFib3V0TGluayIsIm1vYmlsZVByb2plY3RzTGluayIsIm1vYmlsZVJlc3VtZUxpbmsiLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==