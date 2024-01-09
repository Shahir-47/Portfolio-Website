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
		border-bottom: 2px solid #e0e0e0;
		text-align: center;
	}

	.hamburger-menu a:nth-of-type(4) {
		border-bottom: none;
	}

	.hamburger-menu a {
		font-size: 2rem;
		padding-bottom: 1rem;
	}
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n\tcolor: #e0e0e0;\n\tbackground-color: #000000;\n\tbackground-image: url(../img/background.jpg);\n\tbackground-size: contain !important;\n\tbackground-repeat: no-repeat !important;\n\tfont-family: sans-serif;\n}\n\ndiv#content {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.nav-bar {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1.5rem 3rem;\n\ttransition: all 0.3s ease;\n\tz-index: 999;\n\tbackground-color: transparent; /* No background initially */\n\tbackdrop-filter: blur(0); /* No blur initially */\n\tbox-shadow:\n\t\t0 4px 6px -1px rgba(0, 0, 0, 0.1),\n\t\t0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.nav-bar-scrolled {\n\tbackdrop-filter: blur(10px); /* Adjust the blur value as needed */\n\tbackground-color: rgba(\n\t\t79,\n\t\t209,\n\t\t197,\n\t\t0.15\n\t); /* RGBA color for translucent teal */\n}\n\n.logo-box {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.logo-box img {\n\twidth: 3rem;\n\theight: auto;\n\tcursor: pointer;\n}\n\n.log-container:hover {\n\tcursor: pointer;\n}\n\n.logo-box a {\n\ttext-decoration: none;\n}\n\n.log-container:hover:after {\n\twidth: 100%;\n}\n\n.log-container:hover .logo-box a h1 {\n\tcolor: #ffffffff;\n}\n\n.log-container:hover .logo-box img {\n\tfilter: brightness(3);\n}\n\n.log-container:after {\n\tbackground: #4fd1c5;\n\tborder-radius: 16px;\n\tbottom: 1px;\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 5px;\n\tleft: 0;\n\tposition: relative;\n\ttransition: all 0.3s ease-out 0s;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.logo-box a h1 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcursor: pointer;\n\tmargin: 0;\n}\n\n.nav-links {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 2rem;\n}\n\n.nav-links a {\n\tcolor: #e0e0e0;\n\tfont-size: 1.5rem;\n\tfont-weight: 100;\n\ttext-decoration: none;\n}\n\n.nav-links a:hover {\n\tcolor: #ffffffff;\n}\n\n.nav-links .nav-box:hover {\n\tcursor: pointer;\n}\n\n.nav-links .nav-box:hover a {\n\tcolor: #ffffffff;\n}\n\n.nav-links .nav-box:hover img {\n\tfilter: brightness(3);\n}\n\n.nav-links .nav-box:hover:after {\n\twidth: 100%;\n}\n\n.nav-links .nav-box {\n\tposition: relative;\n}\n\n.nav-links .nav-box:after {\n\tbackground: #4fd1c5;\n\tborder-radius: 16px;\n\tbottom: -5px;\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 5px;\n\tleft: 0;\n\tposition: absolute;\n\ttransition: all 0.3s ease-out 0s;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.main-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 7rem;\n}\n\n.first-block-home {\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tpadding: 0 3rem;\n\tgap: 1rem;\n}\n\n.text-container {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.sub-text-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.image-container {\n\twidth: 75%;\n}\n\n.computer {\n\twidth: 100%;\n\theight: auto;\n}\n\n.first-text-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 1rem;\n}\n\n.typed-text-container {\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 2rem;\n}\n\n#typed-text {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcolor: #4fd1c5;\n}\n\n.typed-cursor {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcolor: #4fd1c5;\n\tanimation: blink 0.7s infinite;\n}\n\n.nav-box {\n\tpadding: 0.25rem 0rem;\n}\n\n.wave {\n\twidth: 2rem;\n\theight: auto;\n\tanimation-name: wave-animation;\n\tanimation-duration: 2.5s;\n\tanimation-iteration-count: infinite;\n\ttransform-origin: 70% 70%;\n\tdisplay: inline-block;\n\tfilter: brightness(0.9);\n}\n\n@keyframes wave-animation {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t10% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t20% {\n\t\ttransform: rotate(12deg);\n\t}\n\t30% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t40% {\n\t\ttransform: rotate(9deg);\n\t}\n\t50% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(0deg);\n\t}\n}\n\n.name {\n\tfont-size: 3rem;\n\tfont-weight: 700;\n\tcolor: #4fd1c5;\n}\n\n.nav-box {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tgap: 0.5rem;\n\talign-items: center;\n}\n\n.nav-box img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n.second-text-container h5 {\n\tmargin: 0;\n}\n\n.first-text-container h3 {\n\tfont-weight: 500;\n\tfont-size: 2rem;\n\tmargin: 0;\n}\n\n.second-text-container h5 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n}\n\n.second-block-home {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 0 3rem;\n\tmargin: 0 5rem;\n\tgap: 5rem;\n}\n\n.second-block-text-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tjustify-items: center;\n\talign-items: center;\n}\n\n.hacker {\n\twidth: 35%;\n\theight: auto;\n}\n\n.text-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 3rem;\n}\n\n.text-div h3 {\n\talign-self: center;\n\tfont-size: 1.9rem;\n\tmargin: 0;\n}\n\n.highlight,\n.text-div h3 span {\n\tcolor: #4fd1c5;\n}\n\n.sub-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.sub-text {\n\tfont-weight: 600;\n\tmargin: 0;\n}\n\n.social-icons img {\n\twidth: 2.5rem;\n\theight: auto;\n\tcursor: pointer;\n\ttransition: all 0.3s ease;\n\tborder-radius: 50%;\n}\n\n.social-icons img:hover {\n\tfilter: invert(1);\n\tbox-shadow: 0 4px 8px 0 rgba(79, 209, 197, 0.5);\n}\n\n.social-text-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n\talign-items: center;\n}\n\n.social-text-div h3 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n}\n\n.social-text-div * {\n\tmargin: 0;\n}\n\n.social-icons {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 2rem;\n}\n\n.social-sub-text {\n\tfont-size: 0.8rem;\n\tfont-weight: 550;\n}\n\n.social-block {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.social-sub-text span {\n\tcolor: #4fd1c5;\n}\n\n/* --------------------------------------- Footer ------------------------------------------------------- */\n\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n\theight: 2.5rem;\n\tmargin-top: 2rem;\n\tpadding: 0.25rem 3rem;\n\tbackground-color: #4fd1c5;\n}\n\nfooter a {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\ttext-decoration: none;\n\tfont-size: 1.3rem;\n\tfont-weight: 100;\n\tcolor: #fafafa;\n\ttransition: all 0.3s ease;\n}\n\nfooter p {\n\tmargin: 0.5rem 0;\n}\n\nfooter a:hover,\nfooter a:active {\n\tcolor: #b02e39;\n}\n\nfooter a img {\n\tborder-radius: 50%;\n\ttransition: all 0.3s ease;\n}\n\nfooter a:hover img,\nfooter a:active img {\n\tfilter: invert(1);\n\tbox-shadow: 0 4px 8px 0 rgba(79, 209, 197, 0.5);\n}\n\n.at-symbol {\n\tfont-weight: 900;\n}\n\nfooter img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n/* Styles the scrollbar track */\n::-webkit-scrollbar-track {\n\tbackground-color: #2c3e50; /* A darker shade for contrast */\n}\n\n/* Styles the scrollbar handle */\n::-webkit-scrollbar-thumb {\n\tbackground-color: #4fd1c5; /* The color you provided for the handle */\n\tborder-radius: 10px; /* Rounded corners for the handle */\n}\n\n/* Styles the scrollbar itself (including the track) */\n::-webkit-scrollbar {\n\twidth: 12px; /* Adjust to the size you prefer */\n}\n\n/* Optional: styles the scrollbar handle on hover */\n::-webkit-scrollbar-thumb:hover {\n\tbackground-color: #3a9d9b; /* A slightly darker shade of the handle color for hover */\n}\n\n/* Firefox */\nhtml {\n\tscrollbar-color: #4fd1c5 #2c3e50;\n\tscrollbar-width: thin; /* You can use 'auto' or 'thin' */\n}\n\n.about-page {\n\tpadding: 0rem 3rem;\n\tpadding-bottom: 2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5rem;\n}\n\n.about-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.about-text-container {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.about-me span {\n\tcolor: #4fd1c5;\n}\n\n.about-me-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tjustify-items: center;\n}\n\n.about-me-picture {\n\twidth: 75%;\n\theight: auto;\n}\n\n.about-me-text-div {\n\tfont-size: 1.1rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.about-me-text:nth-of-type(1) {\n\tmargin-top: 0.5rem;\n}\n\n/* --------------------------------------- End of Footer styles ------------------------------------------------------- */\n\n.carousel-item img {\n\twidth: 3rem;\n\theight: auto;\n}\n\n.second-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 3rem;\n\tpadding: 0 3rem;\n}\n\n.second-div-text {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 1rem;\n}\n\n.second-div-text p {\n\tfont-size: 2rem;\n\tmargin: 0;\n\tfont-weight: 900;\n}\n\n.carousel-div {\n\tdisplay: flex;\n\tborder: 3px solid #dddddd;\n\tborder-radius: 10px;\n}\n\n.back-btn,\n.forward-btn {\n\tfont-size: 2.5rem;\n\tcolor: #15202b;\n\tfont-weight: 900;\n\tbackground-color: #dddddd;\n\tborder: none;\n\tcursor: pointer;\n}\n\n.carousel {\n\tdisplay: flex;\n\toverflow-x: auto;\n\tgap: 2rem;\n\tpadding: 1rem;\n\ttransform: rotateX(180deg);\n\t-ms-transform: rotateX(180deg);\n\t-webkit-transform: rotateX(180deg);\n\tmargin-top: 0.2rem;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n}\n\n.carousel-item {\n\tmin-width: 7rem;\n\tmin-height: 10rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 1rem;\n\ttransform: rotateX(180deg);\n\t-ms-transform: rotateX(180deg);\n\t-webkit-transform: rotateX(180deg);\n\tborder: 1px solid #dddddd;\n\tborder-radius: 15px;\n\tbackground-color: #ffffff17;\n}\n\n.carousel-item p {\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.carousel-items {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 2rem;\n}\n\n/* Style the scrollbar */\n.carousel::-webkit-scrollbar {\n\twidth: 5px; /* Set the width of the scrollbar */\n\theight: 10px; /* Set the height of the scrollbar */\n}\n\n.carousel::-webkit-scrollbar-thumb {\n\tbackground-color: #4fd1c5; /* Color of the scrollbar thumb */\n\tborder-radius: 5px; /* Rounded corners for the scrollbar thumb */\n}\n\n.carousel::-webkit-scrollbar-thumb:hover {\n\tbackground-color: #4fd1c5; /* Color of the scrollbar thumb on hover */\n}\n\n.carousel::-webkit-scrollbar-track {\n\tbackground-color: transparent; /* Color of the scrollbar track */\n}\n\n.carousel::-webkit-scrollbar-corner {\n\tbackground-color: transparent; /* Color of the scrollbar corner */\n}\n\n.project-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n\tpadding: 0 3rem;\n}\n\n.project-div h1 {\n\tcolor: #4fd1c5;\n}\n\n.project-item img {\n\twidth: 100%;\n\theight: auto;\n}\n\n.project-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tgap: 2rem;\n}\n\n.project-item {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 2fr;\n\talign-items: center;\n\tgap: 2rem;\n\tpadding: 1rem;\n\tborder-radius: 10px;\n\tbackground-color: #ffffff17;\n\tborder: 1px solid #dddddd;\n}\n\n.project-link-div {\n\tdisplay: flex;\n\tgap: 1rem;\n}\n\n.project-link-div a {\n\ttext-decoration: none;\n\tcolor: #4fd1c5;\n\tfont-size: 1.5rem;\n\tfont-weight: 500;\n\tborder: 1px solid #4fd1c5;\n\tborder-radius: 10px;\n\tpadding: 0.5rem 1rem;\n\ttransition: all 0.3s ease;\n}\n\n.project-link-div a:hover {\n\tcolor: #e0e0e0;\n\tborder: 1px solid #e0e0e0;\n\tbackground-color: #4fd1c5;\n}\n\n.project-item-div p {\n\tfont-size: 1.1rem;\n\tfont-weight: 600;\n}\n\n/* ...existing styles */\n\n.hamburger-menu {\n\tdisplay: none;\n\ttransform-origin: top;\n}\n\n.hamburger {\n\tdisplay: none;\n}\n\n@media (max-width: 870px) {\n\t.hamburger {\n\t\tdisplay: block;\n\t}\n\n\t.hamburger img {\n\t\twidth: 2rem;\n\t\theight: auto;\n\t}\n\n\t.hamburger img:hover {\n\t\tfilter: brightness(3);\n\t}\n\n\t.nav-box {\n\t\tdisplay: none;\n\t}\n\n\t.log-container {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tgap: 1rem;\n\t\tjustify-content: space-between;\n\t}\n\n\t.hamburger-menu.active {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\tbackground-color: #4fd1c5;\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tz-index: 999;\n\t\tanimation: expand 500ms ease-in-out;\n\t\tmargin-top: 2rem;\n\t\tgap: 1rem;\n\t\tpadding-top: 1rem;\n\t\t/* display: flex;\n\t\tflex-direction: column;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tright: 0;\n\t\talign-items: center;\n\t\tmargin-top: 2.5rem;\n\t\tgap: 1rem; */\n\t}\n\n\t@keyframes expand {\n\t\t0% {\n\t\t\ttransform: scaleY(0);\n\t\t}\n\n\t\t70% {\n\t\t\ttransform: scaleY(1.1);\n\t\t}\n\n\t\t100% {\n\t\t\ttransform: scaleY(1);\n\t\t}\n\t}\n\n\t.inactive {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\tbackground-color: #4fd1c5;\n\t\tposition: fixed;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tz-index: 999;\n\t\tanimation: collapse 0.5s forwards;\n\t\tmargin-top: 2rem;\n\t\tgap: 1rem;\n\t\tpadding-top: 1rem;\n\t}\n\n\t/* .inactive {\n\t\topacity: 0;\n\t\tvisibility: hidden;\n\t\ttransform: scaleY(0);\n\t\ttransition:\n\t\t\ttransform 0.5s,\n\t\t\topacity 0.5s,\n\t\t\tvisibility 0s 0s;\n\t} */\n\n\t@keyframes collapse {\n\t\t0% {\n\t\t\ttransform: scaleY(1);\n\t\t}\n\t\t70% {\n\t\t\ttransform: scaleY(1.1);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scaleY(0);\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t.hamburger-menu a {\n\t\tborder-bottom: 2px solid #e0e0e0;\n\t\ttext-align: center;\n\t}\n\n\t.hamburger-menu a:nth-of-type(4) {\n\t\tborder-bottom: none;\n\t}\n\n\t.hamburger-menu a {\n\t\tfont-size: 2rem;\n\t\tpadding-bottom: 1rem;\n\t}\n}\n"],"sourceRoot":""}]);
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
homeLink.addEventListener("click", function () {
  (0,_homepage__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
aboutLink.addEventListener("click", function () {
  (0,_about__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
projectsLink.addEventListener("click", function () {
  (0,_project__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
resumeLink.addEventListener("click", function () {
  window.open("https://drive.google.com/file/d/1xCZSm4K3tc7_hqHhzIqQMs6E_Cz-6qUg/view?usp=sharing");
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sTUFBTSxPQUFPLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLHNCQUFzQixxQkFBcUIsdUJBQXVCLHFCQUFxQixPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxzVkFBc1YsdUJBQXVC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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYixlQUFlO0FBQ2Y7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvRkFBb0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyx3QkFBd0IseUJBQXlCLE9BQU8sT0FBTyxPQUFPLEtBQUssd0JBQXdCLFVBQVUsaUJBQWlCLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sd0JBQXdCLE9BQU8sWUFBWSxNQUFNLHdCQUF3Qix5QkFBeUIsT0FBTyxZQUFZLE1BQU0sc0JBQXNCLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixPQUFPLFVBQVUsS0FBSyxZQUFZLHlCQUF5QixPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyx3QkFBd0IseUJBQXlCLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxLQUFLLHdCQUF3QixPQUFPLEtBQUssd0JBQXdCLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFB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Ozs7Ozs7Ozs7OztBQ0E2QjtBQUNKO0FBQ087QUFDRTtBQUNOO0FBQ0k7QUFFaENNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztBQUN6QlAsa0RBQVMsQ0FBQyxDQUFDO0FBQ1h6RyxxREFBUSxDQUFDLENBQUM7QUFFVixJQUFNNkUsUUFBUSxHQUFHakwsUUFBUSxDQUFDWSxhQUFhLENBQUMseUJBQXlCLENBQUM7QUFDbEUsSUFBTXlNLFNBQVMsR0FBR3JOLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLHlCQUF5QixDQUFDO0FBQ25FLElBQU0wTSxZQUFZLEdBQUd0TixRQUFRLENBQUNZLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztBQUN0RSxJQUFNMk0sVUFBVSxHQUFHdk4sUUFBUSxDQUFDWSxhQUFhLENBQUMseUJBQXlCLENBQUM7QUFFcEVxSyxRQUFRLENBQUN2SixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUN4QzBFLHFEQUFRLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQztBQUVGaUgsU0FBUyxDQUFDM0wsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDekNDLGtEQUFLLENBQUMsQ0FBQztBQUNSLENBQUMsQ0FBQztBQUVGMkwsWUFBWSxDQUFDNUwsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDNUM0SCxvREFBTyxDQUFDLENBQUM7QUFDVixDQUFDLENBQUM7QUFFRmlFLFVBQVUsQ0FBQzdMLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQzFDb0wsTUFBTSxDQUFDVSxJQUFJLENBQ1Ysb0ZBQ0QsQ0FBQztBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9zZXR1cC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzcz82ZDU0Iiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3R5cGVkLmpzL2Rpc3QvdHlwZWQubW9kdWxlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoYWhpciBmcm9tIFwiLi9pbWcvc2hhaGlyLlBOR1wiO1xuaW1wb3J0IEdpdFNvY2lhbCBmcm9tIFwiLi9pbWcvZ2l0U29jaWFsLnN2Z1wiO1xuaW1wb3J0IExpbmtlZCBmcm9tIFwiLi9pbWcvbGlua2VkLnN2Z1wiO1xuaW1wb3J0IERvY2tlciBmcm9tIFwiLi9pbWcvZG9ja2VyLnN2Z1wiO1xuaW1wb3J0IFNxbCBmcm9tIFwiLi9pbWcvc3FsLnN2Z1wiO1xuaW1wb3J0IEVjbGlwc2UgZnJvbSBcIi4vaW1nL2VjbGlwc2Uuc3ZnXCI7XG5pbXBvcnQgTHVhIGZyb20gXCIuL2ltZy9sdWEuc3ZnXCI7XG5pbXBvcnQgVnVlIGZyb20gXCIuL2ltZy92dWUuc3ZnXCI7XG5pbXBvcnQgQ3lwcmVzcyBmcm9tIFwiLi9pbWcvY3lwcmVzcy5zdmdcIjtcbmltcG9ydCBWc2NvZGUgZnJvbSBcIi4vaW1nL3ZzY29kZS5zdmdcIjtcbmltcG9ydCBDIGZyb20gXCIuL2ltZy9jLnN2Z1wiO1xuaW1wb3J0IE5wbSBmcm9tIFwiLi9pbWcvbnBtLnN2Z1wiO1xuaW1wb3J0IEJhYmVsIGZyb20gXCIuL2ltZy9iYWJlbC5zdmdcIjtcbmltcG9ydCBQcmV0dGllciBmcm9tIFwiLi9pbWcvcHJldHRpZXIuc3ZnXCI7XG5pbXBvcnQgRXNsaW50IGZyb20gXCIuL2ltZy9lc2xpbnQuc3ZnXCI7XG5pbXBvcnQgV2VicGFjayBmcm9tIFwiLi9pbWcvd2VicGFjay5zdmdcIjtcbmltcG9ydCBKZXN0IGZyb20gXCIuL2ltZy9qZXN0LnN2Z1wiO1xuaW1wb3J0IEdpdCBmcm9tIFwiLi9pbWcvZ2l0LnN2Z1wiO1xuaW1wb3J0IFB5dGhvbiBmcm9tIFwiLi9pbWcvcHl0aG9uLnN2Z1wiO1xuaW1wb3J0IEphdmEgZnJvbSBcIi4vaW1nL2phdmEuc3ZnXCI7XG5pbXBvcnQgTGludXggZnJvbSBcIi4vaW1nL2xpbnV4LnN2Z1wiO1xuaW1wb3J0IEh0bWwgZnJvbSBcIi4vaW1nL2h0bWwuc3ZnXCI7XG5pbXBvcnQgQ3NzIGZyb20gXCIuL2ltZy9jc3Muc3ZnXCI7XG5pbXBvcnQgSnMgZnJvbSBcIi4vaW1nL2pzLnN2Z1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVDYXJvdXNlbEl0ZW0oaW1hZ2UsIHRpdGxlKSB7XG5cdGNvbnN0IGNhcm91c2VsSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNhcm91c2VsSXRlbS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtaXRlbVwiKTtcblxuXHRjb25zdCBjYXJvdXNlbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Y2Fyb3VzZWxJbWFnZS5zcmMgPSBpbWFnZTtcblx0Y2Fyb3VzZWxJbWFnZS5hbHQgPSB0aXRsZTtcblx0Y2Fyb3VzZWxJbWFnZS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtaW1hZ2VcIik7XG5cblx0Y29uc3QgY2Fyb3VzZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjYXJvdXNlbFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC10aXRsZVwiKTtcblx0Y2Fyb3VzZWxUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG5cdGNhcm91c2VsSXRlbS5hcHBlbmRDaGlsZChjYXJvdXNlbEltYWdlKTtcblx0Y2Fyb3VzZWxJdGVtLmFwcGVuZENoaWxkKGNhcm91c2VsVGl0bGUpO1xuXG5cdHJldHVybiBjYXJvdXNlbEl0ZW07XG59XG5cbi8vIGFkZCBidXR0b25zIHRvIHRoZSBjYXJvdXNlbCBhbmQgY29udHJvbCB0aGUgc2Nyb2xsaW5nXG5mdW5jdGlvbiBidXR0b25zKCkge1xuXHRjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWxcIik7XG5cdGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2stYnRuXCIpO1xuXHRjb25zdCBmb3J3YXJkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3J3YXJkLWJ0blwiKTtcblx0bGV0IGlzU2Nyb2xsaW5nID0gZmFsc2U7IC8vIFRoaXMgdmFyaWFibGUgd2lsbCBiZSB1c2VkIHRvIGluZGljYXRlIHNjcm9sbGluZyBzdGF0dXNcblx0bGV0IHNjcm9sbERpcmVjdGlvbiA9IDA7IC8vIDAgZm9yIGxlZnQsIDEgZm9yIHJpZ2h0XG5cdGNvbnN0IHNjcm9sbFN0ZXAgPSA4OyAvLyBUaGlzIHZhbHVlIGNvbnRyb2xzIHRoZSBzbW9vdGhuZXNzIG9mIHRoZSBzY3JvbGxcblxuXHQvLyBzbW9vdGggc2Nyb2xsIGFuaW1hdGlvblxuXHRjb25zdCBhbmltYXRlU2Nyb2xsID0gKCkgPT4ge1xuXHRcdC8vIGlmIHNjcm9sbGluZyBpcyBzdGlsbCBpbiBwcm9ncmVzcywgdGhlbiBjb250aW51ZSBzY3JvbGxpbmdcblx0XHRpZiAoIWlzU2Nyb2xsaW5nKSByZXR1cm47XG5cblx0XHQvLyBzY3JvbGwgYnkgdGhlIHNjcm9sbFN0ZXBcblx0XHRjb25zdCBzY3JvbGxEaXN0YW5jZSA9IHNjcm9sbERpcmVjdGlvbiA9PT0gMCA/IC1zY3JvbGxTdGVwIDogc2Nyb2xsU3RlcDtcblx0XHRjYXJvdXNlbC5zY3JvbGxMZWZ0ICs9IHNjcm9sbERpc3RhbmNlO1xuXG5cdFx0Ly8gaWYgdGhlIHNjcm9sbCBpcyBub3QgYXQgdGhlIGVuZCwgdGhlbiBjb250aW51ZSBzY3JvbGxpbmdcblx0XHRpZiAoXG5cdFx0XHQoc2Nyb2xsRGlyZWN0aW9uID09PSAwICYmIGNhcm91c2VsLnNjcm9sbExlZnQgPiAwKSB8fFxuXHRcdFx0KHNjcm9sbERpcmVjdGlvbiA9PT0gMSAmJlxuXHRcdFx0XHRjYXJvdXNlbC5zY3JvbGxMZWZ0ICsgY2Fyb3VzZWwub2Zmc2V0V2lkdGggPCBjYXJvdXNlbC5zY3JvbGxXaWR0aClcblx0XHQpIHtcblx0XHRcdC8vIGFuaW1hdGUgdGhlIHNjcm9sbCBhdCA2MCBmcmFtZXMgcGVyIHNlY29uZFxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVTY3JvbGwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBvdGhlcndpc2UsIHN0b3Agc2Nyb2xsaW5nXG5cdFx0XHRpc1Njcm9sbGluZyA9IGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHQvLyBzY3JvbGwgbGVmdCB3aGVuIHRoZSBiYWNrIGJ1dHRvbiBpcyBjbGlja2VkXG5cdGNvbnN0IHNjcm9sbExlZnQgPSAoKSA9PiB7XG5cdFx0Ly8gaWYgdGhlIHNjcm9sbCBpcyBub3QgaW4gcHJvZ3Jlc3MsIHRoZW4gc3RhcnQgc2Nyb2xsaW5nXG5cdFx0aWYgKCFpc1Njcm9sbGluZykge1xuXHRcdFx0c2Nyb2xsRGlyZWN0aW9uID0gMDsgLy8gMCBmb3IgbGVmdFxuXHRcdFx0aXNTY3JvbGxpbmcgPSB0cnVlOyAvLyB0aGUgc2Nyb2xsIGlzIGluIHByb2dyZXNzXG5cdFx0XHRhbmltYXRlU2Nyb2xsKCk7IC8vIHN0YXJ0IHNjcm9sbGluZ1xuXHRcdH1cblx0fTtcblxuXHQvLyBzY3JvbGwgcmlnaHQgd2hlbiB0aGUgbmV4dCBidXR0b24gaXMgY2xpY2tlZFxuXHRjb25zdCBzY3JvbGxSaWdodCA9ICgpID0+IHtcblx0XHQvLyBpZiB0aGUgc2Nyb2xsIGlzIG5vdCBpbiBwcm9ncmVzcywgdGhlbiBzdGFydCBzY3JvbGxpbmdcblx0XHRpZiAoIWlzU2Nyb2xsaW5nKSB7XG5cdFx0XHRzY3JvbGxEaXJlY3Rpb24gPSAxOyAvLyAxIGZvciByaWdodFxuXHRcdFx0aXNTY3JvbGxpbmcgPSB0cnVlOyAvLyB0aGUgc2Nyb2xsIGlzIGluIHByb2dyZXNzXG5cdFx0XHRhbmltYXRlU2Nyb2xsKCk7IC8vIHN0YXJ0IHNjcm9sbGluZ1xuXHRcdH1cblx0fTtcblxuXHQvLyBzdG9wIHNjcm9sbGluZyB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIGJ1dHRvblxuXHRjb25zdCBzdG9wU2Nyb2xsID0gKCkgPT4ge1xuXHRcdGlzU2Nyb2xsaW5nID0gZmFsc2U7IC8vIHRoZSBzY3JvbGwgaXMgbm90IGluIHByb2dyZXNzXG5cdH07XG5cblx0Ly8gYWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgYnV0dG9uc1xuXHRiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNjcm9sbExlZnQpOyAvLyBTY3JvbGwgbGVmdCBvbiBtb3VzZSBlbnRlclxuXHRiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BTY3JvbGwpOyAvLyBTdG9wIHNjcm9sbGluZyBvbiBtb3VzZSBsZWF2ZVxuXHRmb3J3YXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNjcm9sbFJpZ2h0KTsgLy8gU2Nyb2xsIHJpZ2h0IG9uIG1vdXNlIGVudGVyXG5cdGZvcndhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFNjcm9sbCk7IC8vIFN0b3Agc2Nyb2xsaW5nIG9uIG1vdXNlIGxlYXZlXG59XG5cbmZ1bmN0aW9uIGFib3V0KCkge1xuXHRjb25zdCBhYm91dFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRhYm91dFBhZ2UuY2xhc3NMaXN0LmFkZChcImFib3V0LXBhZ2VcIik7XG5cblx0Y29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IGFib3V0VGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGFib3V0VGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdGV4dC1jb250YWluZXJcIik7XG5cdGNvbnN0IGFib3V0TWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdGFib3V0TWUudGV4dENvbnRlbnQgPSBcIkFib3V0IFwiO1xuXHRjb25zdCBhYm91dE1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRhYm91dE1lU3Bhbi50ZXh0Q29udGVudCA9IFwiTWVcIjtcblx0YWJvdXRNZS5hcHBlbmRDaGlsZChhYm91dE1lU3Bhbik7XG5cdGFib3V0TWUuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lXCIpO1xuXHRhYm91dFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZSk7XG5cdGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0VGV4dENvbnRhaW5lcik7XG5cblx0Y29uc3QgYWJvdXRNZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGFib3V0TWVEaXYuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLWRpdlwiKTtcblxuXHRjb25zdCBhYm91dE1lVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGFib3V0TWVUZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZS10ZXh0LWRpdlwiKTtcblxuXHRjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcInBhcmFncmFwaFwiKTtcblxuXHRjb25zdCBhYm91dE1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRhYm91dE1lVGV4dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbWUtdGV4dFwiKTtcblx0YWJvdXRNZVRleHQudGV4dENvbnRlbnQgPVxuXHRcdFwiSGVsbG8sIEknbSBTaGFoaXIsIGEgZGVkaWNhdGVkIENvbXB1dGVyIFNjaWVuY2UgYW5kIE1hdGhlbWF0aWNzIHN0dWRlbnQgYXQgRGlja2luc29uIENvbGxlZ2Ugd2l0aCBhIGRlZXAgcGFzc2lvbiBmb3Igd2ViIGRldmVsb3BtZW50LiBNeSBhY2FkZW1pYyBhbmQgc2VsZi10YXVnaHQgam91cm5leSBpbiBwcm9ncmFtbWluZyBoYXMgZXF1aXBwZWQgbWUgd2l0aCB0aGUgc2tpbGxzIHRvIGNyYWZ0IGVmZmljaWVudCwgc2NhbGFibGUgc29mdHdhcmUgc29sdXRpb25zLiBJIHRocml2ZSBvbiB0aGUgY2hhbGxlbmdlcyB0aGF0IGNvbWUgd2l0aCBkZXZlbG9waW5nIGNsZWFuLCBpbnR1aXRpdmUgdXNlciBpbnRlcmZhY2VzIGFuZCByb2J1c3QgYmFja2VuZCBmdW5jdGlvbmFsaXRpZXMuIE15IGdvYWwgaXMgdG8gY29udGludW91c2x5IGV4cGFuZCBteSBmdWxsLXN0YWNrIGRldmVsb3BtZW50IGV4cGVydGlzZSBhbmQgY29udHJpYnV0ZSB0byBtZWFuaW5nZnVsIHByb2plY3RzIGluIGEgZHluYW1pYyB0ZWFtIGVudmlyb25tZW50LlwiO1xuXG5cdGNvbnN0IGFib3V0TWVUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRhYm91dE1lVGV4dDIuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLXRleHRcIik7XG5cdGFib3V0TWVUZXh0Mi50ZXh0Q29udGVudCA9IGBXaGVuIEkgc3RlcCBhd2F5IGZyb20gdGhlIGtleWJvYXJkLCB5b3UnbGwgZmluZCBtZSBpbmR1bGdpbmcgaW4gYSB2YXJpZXR5IG9mIGludGVyZXN0cyB0aGF0IGtlZXAgbWUgYmFsYW5jZWQgYW5kIGluc3BpcmVkLiBJJ20gYW4gYXZpZCBzb2NjZXIgZmFuLCB3aXRoIFJlYWwgTWFkcmlkJ3MgZ2FtZXMgcHVuY3R1YXRpbmcgdGhlIGNhbGVuZGFyIG9mIG15IHBlcnNvbmFsIGxpZmUuIEluIHRoZSB3b3JsZCBvZiBtaXhlZCBtYXJ0aWFsIGFydHMsIEkgYWRtaXJlIHRoZSBzdHJhdGVnaWMgcHJvd2VzcyBvZiBmaWdodGVycyBsaWtlIHRoZSByZXRpcmVkIEtoYWJpYiBOdXJtYWdvbWVkb3YuIE15IHRhc3RlIGluIGVudGVydGFpbm1lbnQgcmFuZ2VzIGZyb20gdGhlIGNhcHRpdmF0aW5nIG5hcnJhdGl2ZXMgb2YgXCJUaGUgU2hhd3NoYW5rIFJlZGVtcHRpb25cIiB0byB0aGUgY29tcGxleCBsZWdhbCBkcmFtYXMgb2YgXCJCZXR0ZXIgQ2FsbCBTYXVsLlwiIEdhbWluZyBpcyBhbm90aGVyIHBhc3Npb24g4oCUIGltbWVyc2luZyBteXNlbGYgaW4gcmljaCwgc3RvcnktZHJpdmVuIHdvcmxkcyBsaWtlIHRob3NlIG9mIFJlZCBEZWFkIFJlZGVtcHRpb24gMiwgTEEgTm9pcmUsIGFuZCBTbGVlcGluZyBEb2dzIHByb3ZpZGVzIG5vdCBqdXN0IHJlY3JlYXRpb24sIGJ1dCBjcmVhdGl2ZSBpbnNwaXJhdGlvbi5gO1xuXG5cdGNvbnN0IGFib3V0TWVUZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRhYm91dE1lVGV4dDMuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLXRleHRcIik7XG5cdGFib3V0TWVUZXh0My50ZXh0Q29udGVudCA9XG5cdFx0XCJJbiBhZGRpdGlvbiB0byBteSBzdHVkaWVzIGFuZCBob2JiaWVzLCBJIHNlcnZlIGFzIGEgUmVzaWRlbnQgQWR2aXNvciwgYSByb2xlIHRoYXQgaGFzIHJlZmluZWQgbXkgaW50ZXJwZXJzb25hbCBza2lsbHMgYW5kIGFiaWxpdHkgdG8gZm9zdGVyIGNvbW11bml0eSBhbW9uZyBkaXZlcnNlIGdyb3Vwcy4gSXQncyBhIHJvbGUgdGhhdCBjb21wbGVtZW50cyBteSB0ZWNobmljYWwgYXNwaXJhdGlvbnMgYnkgZW1waGFzaXppbmcgZW1wYXRoeSwgbGVhZGVyc2hpcCwgYW5kIGNvbGxhYm9yYXRpb24uXCI7XG5cblx0Y29uc3QgYWJvdXRNZVRleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGFib3V0TWVUZXh0NC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbWUtdGV4dFwiKTtcblx0YWJvdXRNZVRleHQ0LnRleHRDb250ZW50ID1cblx0XHRcIkknbSBleGNpdGVkIHRvIGVtYmFyayBvbiB0aGUgbmV4dCBzdGFnZSBvZiBteSBjYXJlZXIgam91cm5leSBhbmQgYW0gYWN0aXZlbHkgc2Vla2luZyBpbnRlcm5zaGlwIG9wcG9ydHVuaXRpZXMgdGhhdCB3aWxsIGxldmVyYWdlIG15IHRlY2huaWNhbCBza2lsbHMgYW5kIHdvcmsgZXRoaWMuIElmIHlvdSdyZSBsb29raW5nIGZvciBzb21lb25lIHdobyBicmluZ3MgYSBjb21iaW5hdGlvbiBvZiBjb2RpbmcgcHJvZmljaWVuY3kgYW5kIGEgd2VsbC1yb3VuZGVkIHBlcnNwZWN0aXZlIHRvIHlvdXIgdGVhbSwgbGV0J3MgY29ubmVjdC5cIjtcblxuXHRwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoYWJvdXRNZVRleHQpO1xuXHRwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoYWJvdXRNZVRleHQyKTtcblx0cGFyYWdyYXBoLmFwcGVuZENoaWxkKGFib3V0TWVUZXh0Myk7XG5cdHBhcmFncmFwaC5hcHBlbmRDaGlsZChhYm91dE1lVGV4dDQpO1xuXHRhYm91dE1lVGV4dERpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG5cdGNvbnN0IHNvY2lhbEljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c29jaWFsSWNvbnMuY2xhc3NMaXN0LmFkZChcInNvY2lhbC1pY29uc1wiKTtcblxuXHRjb25zdCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGdpdExpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00N1wiO1xuXHRnaXRMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cdGdpdExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5cdGNvbnN0IGdpdFNvY2lhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGdpdFNvY2lhbC5zcmMgPSBHaXRTb2NpYWw7XG5cdGdpdFNvY2lhbC5hbHQgPSBcIkdpdEh1YlwiO1xuXHRnaXRTb2NpYWwuY2xhc3NMaXN0LmFkZChcInNvY2lhbC1pY29uXCIpO1xuXHRnaXRMaW5rLmFwcGVuZENoaWxkKGdpdFNvY2lhbCk7XG5cdHNvY2lhbEljb25zLmFwcGVuZENoaWxkKGdpdExpbmspO1xuXG5cdGNvbnN0IGxpbmtlZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bGlua2VkTGluay5ocmVmID0gXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2hhaGlyNDcvXCI7XG5cdGxpbmtlZExpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblx0bGlua2VkTGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcblx0Y29uc3QgbGlua2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0bGlua2VkLnNyYyA9IExpbmtlZDtcblx0bGlua2VkLmFsdCA9IFwiTGlua2VkSW5cIjtcblx0bGlua2VkLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvblwiKTtcblx0bGlua2VkTGluay5hcHBlbmRDaGlsZChsaW5rZWQpO1xuXHRzb2NpYWxJY29ucy5hcHBlbmRDaGlsZChsaW5rZWRMaW5rKTtcblxuXHRhYm91dE1lVGV4dERpdi5hcHBlbmRDaGlsZChzb2NpYWxJY29ucyk7XG5cdGFib3V0TWVEaXYuYXBwZW5kQ2hpbGQoYWJvdXRNZVRleHREaXYpO1xuXG5cdGNvbnN0IHBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRwaWN0dXJlLnNyYyA9IFNoYWhpcjtcblx0cGljdHVyZS5hbHQgPSBcIlNoYWhpclwiO1xuXHRwaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZS1waWN0dXJlXCIpO1xuXHRhYm91dE1lRGl2LmFwcGVuZENoaWxkKHBpY3R1cmUpO1xuXG5cdGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVEaXYpO1xuXHRhYm91dFBhZ2UuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xuXG5cdGNvbnN0IHNlY29uZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNlY29uZERpdi5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLWRpdlwiKTtcblxuXHRjb25zdCBzZWNvbmREaXZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2Vjb25kRGl2VGV4dC5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLWRpdi10ZXh0XCIpO1xuXG5cdGNvbnN0IGhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRoaWdobGlnaHQuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcblx0aGlnaGxpZ2h0LnRleHRDb250ZW50ID0gXCJUb29sc1wiO1xuXG5cdGNvbnN0IGFuZCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIGFuZFwiKTtcblxuXHRjb25zdCBoaWdobGlnaHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGhpZ2hsaWdodFRleHQudGV4dENvbnRlbnQgPSBcIiBUZWNobm9sb2dpZXNcIjtcblx0aGlnaGxpZ2h0VGV4dC5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuXG5cdGNvbnN0IHNlbnRlbmNlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgSSd2ZSB3b3JrZWQgd2l0aFwiKTtcblxuXHRjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHRleHQuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG5cdHRleHQuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0KTtcblx0dGV4dC5hcHBlbmRDaGlsZChhbmQpO1xuXHR0ZXh0LmFwcGVuZENoaWxkKGhpZ2hsaWdodFRleHQpO1xuXHR0ZXh0LmFwcGVuZENoaWxkKHNlbnRlbmNlKTtcblx0c2Vjb25kRGl2VGV4dC5hcHBlbmRDaGlsZCh0ZXh0KTtcblx0c2Vjb25kRGl2LmFwcGVuZENoaWxkKHNlY29uZERpdlRleHQpO1xuXG5cdGNvbnN0IGNhcm91c2VsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y2Fyb3VzZWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBjYXJvdXNlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNhcm91c2VsRGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1kaXZcIik7XG5cblx0Y29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGJhY2tCdG4uY2xhc3NMaXN0LmFkZChcImJhY2stYnRuXCIpO1xuXHRiYWNrQnRuLnRleHRDb250ZW50ID0gXCI8XCI7XG5cdGNhcm91c2VsRGl2LmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuXG5cdGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y2Fyb3VzZWwuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsXCIpO1xuXG5cdGNvbnN0IGNhcm91c2VsSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjYXJvdXNlbEl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1pdGVtc1wiKTtcblxuXHRjb25zdCBjYXJvdXNlbEl0ZW0xID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEh0bWwsIFwiSFRNTFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMiA9IGNyZWF0ZUNhcm91c2VsSXRlbShDc3MsIFwiQ1NTXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0zID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEpzLCBcIkphdmFTY3JpcHRcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTQgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oR2l0LCBcIkdpdFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtNSA9IGNyZWF0ZUNhcm91c2VsSXRlbShOcG0sIFwiTlBNXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW02ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKFZzY29kZSwgXCJWUyBDb2RlXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW03ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKERvY2tlciwgXCJEb2NrZXJcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTggPSBjcmVhdGVDYXJvdXNlbEl0ZW0oTGludXgsIFwiTGludXhcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTkgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oUHl0aG9uLCBcIlB5dGhvblwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTAgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oSmF2YSwgXCJKYXZhXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xMSA9IGNyZWF0ZUNhcm91c2VsSXRlbShTcWwsIFwiU1FMXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xMiA9IGNyZWF0ZUNhcm91c2VsSXRlbShXZWJwYWNrLCBcIldlYnBhY2tcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTEzID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKFZ1ZSwgXCJWdWUuanNcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTE0ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEJhYmVsLCBcIkJhYmVsXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xNSA9IGNyZWF0ZUNhcm91c2VsSXRlbShKZXN0LCBcIkplc3RcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTE2ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKFByZXR0aWVyLCBcIlByZXR0aWVyXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xNyA9IGNyZWF0ZUNhcm91c2VsSXRlbShFc2xpbnQsIFwiRXNsaW50XCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xOCA9IGNyZWF0ZUNhcm91c2VsSXRlbShDeXByZXNzLCBcIkN5cHJlc3NcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTE5ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEMsIFwiQysrXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0yMCA9IGNyZWF0ZUNhcm91c2VsSXRlbShMdWEsIFwiTHVhXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0yMSA9IGNyZWF0ZUNhcm91c2VsSXRlbShFY2xpcHNlLCBcIkVjbGlwc2VcIik7XG5cblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0yKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0zKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW00KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW01KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW02KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW03KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW04KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW05KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xMCk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTEpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTEyKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xMyk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTQpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTE1KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xNik7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTcpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTE4KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xOSk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMjApO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTIxKTtcblxuXHRjYXJvdXNlbC5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW1zKTtcblx0Y2Fyb3VzZWxEaXYuYXBwZW5kQ2hpbGQoYmFja0J0bik7XG5cdGNhcm91c2VsRGl2LmFwcGVuZENoaWxkKGNhcm91c2VsKTtcblxuXHRjb25zdCBmb3J3YXJkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Zm9yd2FyZEJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9yd2FyZC1idG5cIik7XG5cdGZvcndhcmRCdG4udGV4dENvbnRlbnQgPSBcIj5cIjtcblx0Y2Fyb3VzZWxEaXYuYXBwZW5kQ2hpbGQoZm9yd2FyZEJ0bik7XG5cblx0Y2Fyb3VzZWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxEaXYpO1xuXHRzZWNvbmREaXYuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxDb250YWluZXIpO1xuXHRhYm91dFBhZ2UuYXBwZW5kQ2hpbGQoc2Vjb25kRGl2KTtcblxuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcblx0bWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuXHRtYWluLmFwcGVuZENoaWxkKGFib3V0UGFnZSk7XG5cblx0YnV0dG9ucygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYm91dDtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBUeXBlZCBmcm9tIFwidHlwZWQuanNcIjtcbmltcG9ydCBDb21wdXRlciBmcm9tIFwiLi9pbWcvY29tcHV0ZXIucG5nXCI7XG5pbXBvcnQgSGFuZCBmcm9tIFwiLi9pbWcvaGFuZC5zdmdcIjtcbmltcG9ydCBIYWNrZXIgZnJvbSBcIi4vaW1nL2hhY2tlci5zdmdcIjtcbmltcG9ydCBHaXRTb2NpYWwgZnJvbSBcIi4vaW1nL2dpdFNvY2lhbC5zdmdcIjtcbmltcG9ydCBMaW5rZWQgZnJvbSBcIi4vaW1nL2xpbmtlZC5zdmdcIjtcblxuZnVuY3Rpb24gZHluYW1pY1RleHQoKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRjb25zdCB0eXBlZCA9IG5ldyBUeXBlZChcIiN0eXBlZC10ZXh0XCIsIHtcblx0XHQvLyBTdHJpbmdzIHRvIGRpc3BsYXlcblx0XHRzdHJpbmdzOiBbXG5cdFx0XHRcIkZ1bGwgU3RhY2sgRGV2ZWxvcGVyXCIsXG5cdFx0XHRcIkNyZWF0aXZlIENvZGVyXCIsXG5cdFx0XHRcIkNvbXB1dGVyIFNjaWVuY2UgU3R1ZGVudFwiLFxuXHRcdFx0XCJNYXRoZW1hdGljcyBTdHVkZW50XCIsXG5cdFx0XHRcIkFzcGlyaW5nIFNvZnR3YXJlIERldmVsb3BlclwiLFxuXHRcdFx0XCJFbWVyZ2luZyBGdWxsIFN0YWNrIERldmVsb3BlclwiLFxuXHRcdFx0XCJQcm9ncmFtbWluZyBFbnRodXNpYXN0XCIsXG5cdFx0XHRcIkZ1dHVyZSBUZWNoIFByb2Zlc3Npb25hbFwiLFxuXHRcdFx0XCJTdHVkZW50IG9mIFNvZnR3YXJlIEVuZ2luZWVyaW5nXCIsXG5cdFx0XHRcIkNvZGluZyBIb2JieWlzdFwiLFxuXHRcdFx0XCJTb2Z0d2FyZSBFbmdpbmVlciBpbiBUcmFpbmluZ1wiLFxuXHRcdFx0XCJTb2Z0d2FyZSBFbmdpbmVlciBpbiB0aGUgTWFraW5nXCIsXG5cdFx0XHRcIlNvZnR3YXJlIEVuZ2luZWVyIGluIHRoZSBXb3Jrc1wiLFxuXHRcdF0sXG5cblx0XHQvLyBTcGVlZCBzZXR0aW5nc1xuXHRcdHR5cGVTcGVlZDogNTAsXG5cdFx0YmFja1NwZWVkOiAyNSxcblx0XHQvLyBUaW1lIGJlZm9yZSB0eXBpbmcgc3RhcnRzXG5cdFx0c3RhcnREZWxheTogMTAwMCxcblx0XHQvLyBUaW1lIGJlZm9yZSBlcmFzaW5nXG5cdFx0YmFja0RlbGF5OiAyMDAwLFxuXHRcdC8vIExvb3AgdGhlIGFuaW1hdGlvblxuXHRcdGxvb3A6IHRydWUsXG5cdFx0Ly8gU2hvdyBjdXJzb3Jcblx0XHRzaG93Q3Vyc29yOiB0cnVlLFxuXHRcdC8vIENoYXJhY3RlciBmb3IgY3Vyc29yXG5cdFx0Y3Vyc29yQ2hhcjogXCJ8XCIsXG5cdFx0Ly8gQXR0cmlidXRlIHRvIHR5cGUgKG51bGwgPT0gdGV4dClcblx0XHRhdHRyOiBudWxsLFxuXHRcdC8vIFdoZXRoZXIgdG8gc3RhcnQgdHlwaW5nIGF1dG9tYXRpY2FsbHlcblx0XHRhdXRvSW5zZXJ0Q3NzOiB0cnVlLFxuXHRcdC8vIERlZmF1bHQgY29udGVudCBiZWZvcmUgdHlwaW5nXG5cdFx0Y29udGVudFR5cGU6IFwiaHRtbFwiLFxuXHR9KTtcbn1cblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG5cdGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xuXHRtYWluQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cblx0Y29uc3QgZmlyc3RCbG9ja0hvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRmaXJzdEJsb2NrSG9tZS5jbGFzc0xpc3QuYWRkKFwiZmlyc3QtYmxvY2staG9tZVwiKTtcblxuXHRjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dC1jb250YWluZXJcIik7XG5cblx0Y29uc3Qgc3ViVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHN1YlRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Yi10ZXh0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBmaXJzdFRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRmaXJzdFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZpcnN0LXRleHQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IGZpcnN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0Zmlyc3RUZXh0LnRleHRDb250ZW50ID0gXCJIaSwgVGhlcmUhXCI7XG5cdGZpcnN0VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdFRleHQpO1xuXG5cdGNvbnN0IHdhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHR3YXZlLmNsYXNzTGlzdC5hZGQoXCJ3YXZlXCIpO1xuXHR3YXZlLnNyYyA9IEhhbmQ7XG5cdHdhdmUuYWx0ID0gXCJXYXZlXCI7XG5cdGZpcnN0VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh3YXZlKTtcblxuXHRjb25zdCBzZWNvbmRUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2Vjb25kVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLXRleHQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IHNlY29uZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG5cdHNlY29uZFRleHQudGV4dENvbnRlbnQgPSBcIkknbSBcIjtcblx0Y29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRuYW1lLnRleHRDb250ZW50ID0gXCJTaGFoaXIgQWhtZWRcIjtcblx0bmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcblx0c2Vjb25kVGV4dC5hcHBlbmRDaGlsZChuYW1lKTtcblx0c2Vjb25kVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRUZXh0KTtcblxuXHRzdWJUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0VGV4dENvbnRhaW5lcik7XG5cdHN1YlRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kVGV4dENvbnRhaW5lcik7XG5cblx0Y29uc3QgdHlwZWRUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dHlwZWRUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0eXBlZC10ZXh0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCB0eXBlZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0dHlwZWRUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0eXBlZC10ZXh0XCIpO1xuXHR0eXBlZFRleHQuaWQgPSBcInR5cGVkLXRleHRcIjtcblxuXHR0eXBlZFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodHlwZWRUZXh0KTtcblxuXHR0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1YlRleHRDb250YWluZXIpO1xuXHR0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHR5cGVkVGV4dENvbnRhaW5lcik7XG5cblx0Zmlyc3RCbG9ja0hvbWUuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cblx0Y29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRpbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0aW1hZ2Uuc3JjID0gQ29tcHV0ZXI7XG5cdGltYWdlLmFsdCA9IFwiQ29tcHV0ZXJcIjtcblx0aW1hZ2UuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyXCIpO1xuXHRpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG5cblx0Zmlyc3RCbG9ja0hvbWUuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuXG5cdG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RCbG9ja0hvbWUpO1xuXG5cdGNvbnN0IHNlY29uZEJsb2NrSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNlY29uZEJsb2NrSG9tZS5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLWJsb2NrLWhvbWVcIik7XG5cblx0Y29uc3Qgc2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtYmxvY2stdGV4dC1jb250YWluZXJcIik7XG5cblx0Y29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRleHREaXYuY2xhc3NMaXN0LmFkZChcInRleHQtZGl2XCIpO1xuXG5cdGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHRleHQudGV4dENvbnRlbnQgPSBcIklmIG9wcG9ydHVuaXR5IGRvZXNuJ3Qga25vY2ssIFwiO1xuXG5cdGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0c3Bhbi50ZXh0Q29udGVudCA9IFwiYnVpbGQgYSBkb29yLlwiO1xuXHRzcGFuLmNsYXNzTGlzdC5hZGQoXCJzcGFuLWRvb3JcIik7XG5cblx0dGV4dC5hcHBlbmRDaGlsZChzcGFuKTtcblx0dGV4dERpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcblx0Y29uc3Qgc3ViRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c3ViRGl2LmNsYXNzTGlzdC5hZGQoXCJzdWItZGl2XCIpO1xuXHRjb25zdCBoaWdobGlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0aGlnaGxpZ2h0LnRleHRDb250ZW50ID1cblx0XHRcIkVtYnJhY2luZyBjaGFsbGVuZ2VzIHdpdGggaW5ub3ZhdGlvbiBhbmQgZGV0ZXJtaW5hdGlvbiwgXCI7XG5cdGhpZ2hsaWdodC5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuXG5cdGNvbnN0IHN1YlRleHRBZnRlckhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuXHRcdFwiSSBjaGFubmVsIG15IHBhc3Npb24gZm9yIGNvZGluZyBpbnRvIGNyYWZ0aW5nIHNvbHV0aW9ucyB3aGVyZSBub25lIGV4aXN0ZWQgYmVmb3JlLiBJbiB0aGUgZXZlci1ldm9sdmluZyB3b3JsZCBvZiB3ZWIgZGV2ZWxvcG1lbnQsIEknbSBjb21taXR0ZWQgdG8gdHVybmluZyBvYnN0YWNsZXMgaW50byBzdGVwcGluZyBzdG9uZXMgZm9yIGdyb3d0aCBhbmQgbGVhcm5pbmcuXCIsXG5cdCk7XG5cdGNvbnN0IHN1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0c3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViLXRleHRcIik7XG5cblx0c3ViVGV4dC5hcHBlbmRDaGlsZChoaWdobGlnaHQpO1xuXHRzdWJUZXh0LmFwcGVuZENoaWxkKHN1YlRleHRBZnRlckhpZ2hsaWdodCk7XG5cblx0Y29uc3Qgc3Vic3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRzdWJzdWJUZXh0LnRleHRDb250ZW50ID1cblx0XHRcIldpdGggZXZlcnkgbGluZSBvZiBjb2RlLCBJIGFpbSB0byBidWlsZCB3ZWIgYXBwbGljYXRpb25zIHRoYXQgYXJlIGludHVpdGl2ZSBhbmQgZWZmaWNpZW50LiBNeSBnb2FsIGlzIHRvIGNyZWF0ZSB0b29scyB0aGF0IG5vdCBvbmx5IGZ1bmN0aW9uIHNtb290aGx5IGJ1dCBhbHNvIGVuaGFuY2UgdGhlIHVzZXIgZXhwZXJpZW5jZS4gSXQncyBhYm91dCBwYXZpbmcgbmV3IHBhdGh3YXlzIHRvIHN1Y2Nlc3MgYW5kIGVuc3VyaW5nIHRoZXkgbGVhZCB0byBtZWFuaW5nZnVsIHJlc3VsdHMgZm9yIGJvdGggdXNlcnMgYW5kIGJ1c2luZXNzZXNcIjtcblx0c3Vic3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3ViLXRleHRcIik7XG5cdHN1YkRpdi5hcHBlbmRDaGlsZChzdWJUZXh0KTtcblx0c3ViRGl2LmFwcGVuZENoaWxkKHN1YnN1YlRleHQpO1xuXHR0ZXh0RGl2LmFwcGVuZENoaWxkKHN1YkRpdik7XG5cdHNlY29uZEJsb2NrVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcblxuXHRjb25zdCBoYWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRoYWNrZXIuY2xhc3NMaXN0LmFkZChcImhhY2tlclwiKTtcblx0aGFja2VyLnNyYyA9IEhhY2tlcjtcblx0aGFja2VyLmFsdCA9IFwiSGFja2VyXCI7XG5cdHNlY29uZEJsb2NrVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChoYWNrZXIpO1xuXG5cdGNvbnN0IHNvY2lhbEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c29jaWFsQmxvY2suY2xhc3NMaXN0LmFkZChcInNvY2lhbC1ibG9ja1wiKTtcblxuXHRjb25zdCBzb2NpYWxUZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c29jaWFsVGV4dERpdi5jbGFzc0xpc3QuYWRkKFwic29jaWFsLXRleHQtZGl2XCIpO1xuXG5cdGNvbnN0IHNvY2lhbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHNvY2lhbFRleHQudGV4dENvbnRlbnQgPSBcIkZJTkQgTUUgT05cIjtcblxuXHRjb25zdCB0ZXh0QmVmb3JlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJGZWVsIGZyZWUgdG8gXCIpO1xuXHRjb25zdCB0ZXh0QWZ0ZXIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiB3aXRoIG1lXCIpO1xuXG5cdGNvbnN0IHNwYW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdHNwYW5Db250ZW50LnRleHRDb250ZW50ID0gXCJjb25uZWN0XCI7XG5cblx0Y29uc3Qgc29jaWFsU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRzb2NpYWxTdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtc3ViLXRleHRcIik7XG5cdHNvY2lhbFN1YlRleHQuYXBwZW5kQ2hpbGQodGV4dEJlZm9yZSk7XG5cdHNvY2lhbFN1YlRleHQuYXBwZW5kQ2hpbGQoc3BhbkNvbnRlbnQpO1xuXHRzb2NpYWxTdWJUZXh0LmFwcGVuZENoaWxkKHRleHRBZnRlcik7XG5cblx0c29jaWFsVGV4dERpdi5hcHBlbmRDaGlsZChzb2NpYWxUZXh0KTtcblx0c29jaWFsVGV4dERpdi5hcHBlbmRDaGlsZChzb2NpYWxTdWJUZXh0KTtcblxuXHRjb25zdCBzb2NpYWxJY29ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNvY2lhbEljb25zLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvbnNcIik7XG5cblx0Y29uc3QgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDdcIjtcblx0Z2l0TGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXHRnaXRMaW5rLnJlbCA9IFwibm9vcGVuZXIgbm9yZWZlcnJlclwiO1xuXHRjb25zdCBnaXRTb2NpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRnaXRTb2NpYWwuc3JjID0gR2l0U29jaWFsO1xuXHRnaXRTb2NpYWwuYWx0ID0gXCJHaXRIdWJcIjtcblx0Z2l0U29jaWFsLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvblwiKTtcblx0Z2l0TGluay5hcHBlbmRDaGlsZChnaXRTb2NpYWwpO1xuXHRzb2NpYWxJY29ucy5hcHBlbmRDaGlsZChnaXRMaW5rKTtcblxuXHRjb25zdCBsaW5rZWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGxpbmtlZExpbmsuaHJlZiA9IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NoYWhpcjQ3L1wiO1xuXHRsaW5rZWRMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cdGxpbmtlZExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5cdGNvbnN0IGxpbmtlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGxpbmtlZC5zcmMgPSBMaW5rZWQ7XG5cdGxpbmtlZC5hbHQgPSBcIkxpbmtlZEluXCI7XG5cdGxpbmtlZC5jbGFzc0xpc3QuYWRkKFwic29jaWFsLWljb25cIik7XG5cdGxpbmtlZExpbmsuYXBwZW5kQ2hpbGQobGlua2VkKTtcblx0c29jaWFsSWNvbnMuYXBwZW5kQ2hpbGQobGlua2VkTGluayk7XG5cblx0c29jaWFsQmxvY2suYXBwZW5kQ2hpbGQoc29jaWFsVGV4dERpdik7XG5cdHNvY2lhbEJsb2NrLmFwcGVuZENoaWxkKHNvY2lhbEljb25zKTtcblxuXHRzZWNvbmRCbG9ja0hvbWUuYXBwZW5kQ2hpbGQoc2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyKTtcblx0c2Vjb25kQmxvY2tIb21lLmFwcGVuZENoaWxkKHNvY2lhbEJsb2NrKTtcblxuXHRtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZEJsb2NrSG9tZSk7XG5cblx0ZHluYW1pY1RleHQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi9pbWcvdG9kby5wbmdcIjtcbmltcG9ydCBCYXR0bGVzaGlwIGZyb20gXCIuL2ltZy9iYXR0bGVzaGlwLnBuZ1wiO1xuaW1wb3J0IFdlYXRoZXIgZnJvbSBcIi4vaW1nL3dlYXRoZXIucG5nXCI7XG5pbXBvcnQgVGljdGFjIGZyb20gXCIuL2ltZy90aWN0YWMucG5nXCI7XG5pbXBvcnQgQ2FsY3VsYXRvciBmcm9tIFwiLi9pbWcvY2FsY3VsYXRvci5wbmdcIjtcbmltcG9ydCBSZXN0YXVyYW50IGZyb20gXCIuL2ltZy9yZXN0YXVyYW50LnBuZ1wiO1xuaW1wb3J0IEV0Y2ggZnJvbSBcIi4vaW1nL2V0Y2gucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RJdGVtKGltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24sIGxpdmVEZW1vLCBzb3VyY2VDb2RlKSB7XG5cdGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcblxuXHRjb25zdCBwcm9qZWN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRwcm9qZWN0SW1hZ2Uuc3JjID0gaW1hZ2U7XG5cdHByb2plY3RJbWFnZS5hbHQgPSB0aXRsZTtcblx0cHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQocHJvamVjdEltYWdlKTtcblxuXHRjb25zdCBwcm9qZWN0SXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RJdGVtRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW0tZGl2XCIpO1xuXG5cdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0cHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cblx0Y29uc3QgcHJvamVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG5cdGNvbnN0IHByb2plY3RMaW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdExpbmtEaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGluay1kaXZcIik7XG5cblx0Y29uc3QgcHJvamVjdExpdmVEZW1vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdHByb2plY3RMaXZlRGVtby5ocmVmID0gbGl2ZURlbW87XG5cdHByb2plY3RMaXZlRGVtby50ZXh0Q29udGVudCA9IFwiTGl2ZSBEZW1vXCI7XG5cdHByb2plY3RMaW5rRGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXZlRGVtbyk7XG5cblx0Y29uc3QgcHJvamVjdFNvdXJjZUNvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0cHJvamVjdFNvdXJjZUNvZGUuaHJlZiA9IHNvdXJjZUNvZGU7XG5cdHByb2plY3RTb3VyY2VDb2RlLnRleHRDb250ZW50ID0gXCJTb3VyY2UgQ29kZVwiO1xuXHRwcm9qZWN0TGlua0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0U291cmNlQ29kZSk7XG5cblx0cHJvamVjdEl0ZW1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblx0cHJvamVjdEl0ZW1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdERlc2NyaXB0aW9uKTtcblx0cHJvamVjdEl0ZW1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdExpbmtEaXYpO1xuXHRwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbURpdik7XG5cblx0cmV0dXJuIHByb2plY3RJdGVtO1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0KCkge1xuXHRjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kaXZcIik7XG5cdGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0cHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXHRwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cblx0Y29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IHRvZG8gPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRUb2RvLFxuXHRcdFwiVG9kbyBMaXN0XCIsXG5cdFx0XCJUb2RvIExpc3QgaXMgYSBwb3dlcmZ1bCB0YXNrIG1hbmFnZW1lbnQgYXBwbGljYXRpb24gdGhhdCBoZWxwcyB5b3Ugc3RheSBvcmdhbml6ZWQgYW5kIHByb2R1Y3RpdmUuIE1hbmFnZSB0YXNrcywgcHJvamVjdHMsIGFuZCBub3RlcyBlZmZvcnRsZXNzbHkuIEZlYXR1cmVzIGluY2x1ZGUgcHJpb3JpdHkgbGV2ZWxzLCBkdWUgZGF0ZXMsIHNlYXJjaCBmdW5jdGlvbmFsaXR5LCBhbmQgZGFyay9saWdodCB0aGVtZS4gR2V0IHN0YXJ0ZWQgYW5kIGJvb3N0IHlvdXIgcHJvZHVjdGl2aXR5IHRvZGF5IVwiLFxuXHRcdFwiaHR0cHM6Ly9zaGFoaXItNDcuZ2l0aHViLmlvL1RvZG8tTGlzdC9cIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvVG9kby1MaXN0XCIsXG5cdCk7XG5cblx0Y29uc3QgYmF0dGxlc2hpcCA9IGNyZWF0ZVByb2plY3RJdGVtKFxuXHRcdEJhdHRsZXNoaXAsXG5cdFx0XCJCYXR0bGVzaGlwXCIsXG5cdFx0XCJBIHdlYi1iYXNlZCBCYXR0bGVzaGlwIGdhbWUgd2l0aCBhIHN0cmF0ZWdpYyBBSS4gUGxheWVycyBlbmdhZ2UgaW4gY2xhc3NpYyBuYXZhbCB3YXJmYXJlIGFnYWluc3QgYSBjb21wdXRlci4gQ29kZSBpcyBvcGVuIGZvciBjb250cmlidXRpb25zIGFuZCB0ZXN0cyBlbnN1cmUgcm9idXN0IGdhbWVwbGF5LlBsYXkgbm93IVwiLFxuXHRcdFwiaHR0cHM6Ly9zaGFoaXItNDcuZ2l0aHViLmlvL0JhdHRsZXNoaXAvXCIsXG5cdFx0XCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L0JhdHRsZXNoaXBcIixcblx0KTtcblxuXHRjb25zdCB3ZWF0aGVyID0gY3JlYXRlUHJvamVjdEl0ZW0oXG5cdFx0V2VhdGhlcixcblx0XHRcIldlYXRoZXIgQXBwXCIsXG5cdFx0XCJXZWF0aGVyIFdoaXogaXMgYSB3ZWIgYXBwIHByb3ZpZGluZyBjdXJyZW50IHdlYXRoZXIsIGhvdXJseSAmIDItZGF5IGZvcmVjYXN0cyBmb3IgZGlmZmVyZW50IGxvY2F0aW9ucy4gU3dpdGNoIGJldHdlZW4gaW1wZXJpYWwgJiBtZXRyaWMgdW5pdHMuIEJ1aWx0IHdpdGggSFRNTCwgQ1NTLCBKUywgV2VicGFjaywgQmFiZWwsIEVTTGludCAmIFByZXR0aWVyLiBBUElzOiBPcGVuV2VhdGhlciAmIE1hcGJveC4gU3RheSBwcmVwYXJlZCB3aXRoIGFjY3VyYXRlIHdlYXRoZXIgZGF0YSFcIixcblx0XHRcImh0dHBzOi8vc2hhaGlyLTQ3LmdpdGh1Yi5pby9XZWF0aGVyLVdoaXovXCIsXG5cdFx0XCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L1dlYXRoZXItV2hpelwiLFxuXHQpO1xuXG5cdGNvbnN0IHRpY3RhYyA9IGNyZWF0ZVByb2plY3RJdGVtKFxuXHRcdFRpY3RhYyxcblx0XHRcIlRpYyBUYWMgVG9lXCIsXG5cdFx0XCJFbmpveSB0aGUgY2xhc3NpYyBUaWMgVGFjIFRvZSBnYW1lIHdpdGggY3VzdG9taXphYmxlIG1hcmtlcnMsIGNvbG9ycywgYW5kIHBsYXllciBuYW1lcy4gUGxheSBhZ2FpbnN0IGEgZnJpZW5kIG9yIGNoYWxsZW5naW5nIEFJLiBSZXNwb25zaXZlIGRlc2lnbiwgdmlzdWFsbHkgYXBwZWFsaW5nIGludGVyZmFjZS4gU291cmNlIGNvZGUgZm9yIEhUTUwsIENTUywgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbi4gRXhwZXJpZW5jZSBob3VycyBvZiBpbnRlcmFjdGl2ZSBhbmQgYWRkaWN0aXZlIGZ1biFcIixcblx0XHRcImh0dHBzOi8vc2hhaGlyLTQ3LmdpdGh1Yi5pby9UaWMtVGFjLVRvZS9cIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvVGljLVRhYy10b2VcIixcblx0KTtcblxuXHRjb25zdCBjYWxjdWxhdG9yID0gY3JlYXRlUHJvamVjdEl0ZW0oXG5cdFx0Q2FsY3VsYXRvcixcblx0XHRcIkNhbGN1bGF0b3JcIixcblx0XHRcIlRoaXMgaXMgYSBzaW1wbGUgY2FsY3VsYXRvciBhcHBsaWNhdGlvbiB3aXRoIGtleWJvYXJkIHN1cHBvcnQuIEl0IGFsbG93cyB5b3UgdG8gcGVyZm9ybSBiYXNpYyBhcml0aG1ldGljIG9wZXJhdGlvbnMgc3VjaCBhcyBhZGRpdGlvbiwgc3VidHJhY3Rpb24sIG11bHRpcGxpY2F0aW9uLCBhbmQgZGl2aXNpb24uIEl0IGFsc28gaW5jbHVkZXMgYWRkaXRpb25hbCBmZWF0dXJlcyBsaWtlIGNhbGN1bGF0aW5nIHRoZSBmYWN0b3JpYWwgYW5kIGV4cG9uZW50aWF0aW9uLlwiLFxuXHRcdFwiaHR0cHM6Ly9zaGFoaXItNDcuZ2l0aHViLmlvL0NhbGN1bGF0b3IvXCIsXG5cdFx0XCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L0NhbGN1bGF0b3JcIixcblx0KTtcblxuXHRjb25zdCByZXN0YXVyYW50ID0gY3JlYXRlUHJvamVjdEl0ZW0oXG5cdFx0UmVzdGF1cmFudCxcblx0XHRcIlJlc3RhdXJhbnQgUGFnZVwiLFxuXHRcdFwiQSB3ZWItYmFzZWQgcGxhdGZvcm0gdGhhdCBwcm92aWRlcyBpbmZvcm1hdGlvbiBhbmQgZmVhdHVyZXMgcmVsYXRlZCB0byBhIGZpY3Rpb25hbCByZXN0YXVyYW50IGNhbGxlZCB0aGUgR2FsYWN0aWMgQ2FudGluYS4gVGhlIGFwcGxpY2F0aW9uIGFsbG93cyB1c2VycyB0byBleHBsb3JlIHZhcmlvdXMgc2VjdGlvbnMgc3VjaCBhcyB0aGUgaG9tZSBwYWdlLCBtZW51IHBhZ2UsIGNvbnRhY3QgcGFnZSwgYWJvdXQgdXMgcGFnZSwgcmV2aWV3IHBhZ2UsIGFuZCBGQVEgcGFnZS5cIixcblx0XHRcImh0dHBzOi8vc2hhaGlyLTQ3LmdpdGh1Yi5pby9SZXN0YXVyYW50LVBhZ2UvXCIsXG5cdFx0XCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L1Jlc3RhdXJhbnQtUGFnZVwiLFxuXHQpO1xuXG5cdGNvbnN0IGV0Y2ggPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRFdGNoLFxuXHRcdFwiRXRjaCBhIFNrZXRjaFwiLFxuXHRcdFwiRXhwZXJpZW5jZSB0aGUgY2xhc3NpYyBFdGNoLWEtU2tldGNoIGZ1biBvbmxpbmUhIERyYXcgYW5kIGNyZWF0ZSBtYXN0ZXJwaWVjZXMgd2l0aCB0aGlzIHNpbXBsZSB3ZWIgYXBwbGljYXRpb24uIEJ1aWx0IHVzaW5nIEhUTUwsIENTUywgYW5kIEphdmFTY3JpcHQuXCIsXG5cdFx0XCJodHRwczovL3NoYWhpci00Ny5naXRodWIuaW8vRXRjaC1hLVNrZXRjaC9cIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvRXRjaC1hLVNrZXRjaC9cIixcblx0KTtcblxuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pO1xuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJhdHRsZXNoaXApO1xuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpY3RhYyk7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FsY3VsYXRvcik7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudCk7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZXRjaCk7XG5cblx0cHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG5cdG1haW4uaW5uZXJIVE1MID0gXCJcIjtcblx0bWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcbiIsImltcG9ydCBJY29uIGZyb20gXCIuL2ltZy9pY29uLnN2Z1wiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaW1nL2hvbWUuc3ZnXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vaW1nL2Fib3V0LnN2Z1wiO1xuaW1wb3J0IENvZGUgZnJvbSBcIi4vaW1nL2NvZGUuc3ZnXCI7XG5pbXBvcnQgRG9jIGZyb20gXCIuL2ltZy9kb2Muc3ZnXCI7XG5pbXBvcnQgR2l0SHViIGZyb20gXCIuL2ltZy9naXRTb2NpYWwuc3ZnXCI7XG5pbXBvcnQgaGFtYnVyZ2VySW1nIGZyb20gXCIuL2ltZy9oYW1idXJnZXIuc3ZnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcblx0Y29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblx0YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyXCIpO1xuXG5cdGNvbnN0IGxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGxvZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgbG9nb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGxvZ29Cb3guY2xhc3NMaXN0LmFkZChcImxvZ28tYm94XCIpO1xuXHRjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0bG9nby5zcmMgPSBJY29uO1xuXHRsb2dvLmFsdCA9IFwibG9nb1wiO1xuXHRjb25zdCBsb2dvTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRsb2dvTGluay5hcHBlbmRDaGlsZChsb2dvKTtcblx0bG9nb0JveC5hcHBlbmRDaGlsZChsb2dvTGluayk7XG5cdGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRsb2dvVGV4dC50ZXh0Q29udGVudCA9IFwiU2hhaGlyIEFobWVkXCI7XG5cdGNvbnN0IGxvZ29MaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRsb2dvTGluazIuYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuXHRsb2dvQm94LmFwcGVuZENoaWxkKGxvZ29MaW5rMik7XG5cblx0bG9nQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29Cb3gpO1xuXG5cdGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bmF2TGlua3MuY2xhc3NMaXN0LmFkZChcIm5hdi1saW5rc1wiKTtcblxuXHRjb25zdCBob21lQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0aG9tZUJveC5jbGFzc0xpc3QuYWRkKFwibmF2LWJveFwiKTtcblx0Y29uc3QgaG9tZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0aG9tZUxpbmsuaHJlZiA9IFwiI1wiO1xuXHRob21lTGluay50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXHRob21lQm94LmFwcGVuZENoaWxkKGhvbWVMaW5rKTtcblxuXHRjb25zdCBob21lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGhvbWVJY29uLnNyYyA9IEhvbWU7XG5cdGhvbWVJY29uLmFsdCA9IFwiaG9tZVwiO1xuXHRob21lQm94LmFwcGVuZENoaWxkKGhvbWVJY29uKTtcblxuXHRuYXZMaW5rcy5hcHBlbmRDaGlsZChob21lQm94KTtcblxuXHRjb25zdCBtZW51TGlua2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1lbnVMaW5rYm94LmNsYXNzTGlzdC5hZGQoXCJuYXYtYm94XCIpO1xuXHRjb25zdCBtZW51TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRtZW51TGluay5ocmVmID0gXCIjXCI7XG5cdG1lbnVMaW5rLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuXHRtZW51TGlua2JveC5hcHBlbmRDaGlsZChtZW51TGluayk7XG5cblx0Y29uc3QgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRtZW51SWNvbi5zcmMgPSBBYm91dDtcblx0bWVudUljb24uYWx0ID0gXCJhYm91dFwiO1xuXHRtZW51TGlua2JveC5hcHBlbmRDaGlsZChtZW51SWNvbik7XG5cdG5hdkxpbmtzLmFwcGVuZENoaWxkKG1lbnVMaW5rYm94KTtcblxuXHRjb25zdCBjb250YWN0TGlua2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnRhY3RMaW5rYm94LmNsYXNzTGlzdC5hZGQoXCJuYXYtYm94XCIpO1xuXHRjb25zdCBjb250YWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRjb250YWN0TGluay5ocmVmID0gXCIjXCI7XG5cdGNvbnRhY3RMaW5rLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXHRjb250YWN0TGlua2JveC5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG5cblx0Y29uc3QgY29udGFjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRjb250YWN0SWNvbi5zcmMgPSBDb2RlO1xuXHRjb250YWN0SWNvbi5hbHQgPSBcInByb2plY3RzXCI7XG5cdGNvbnRhY3RMaW5rYm94LmFwcGVuZENoaWxkKGNvbnRhY3RJY29uKTtcblx0bmF2TGlua3MuYXBwZW5kQ2hpbGQoY29udGFjdExpbmtib3gpO1xuXG5cdGNvbnN0IEFib3V0TGlua2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdEFib3V0TGlua2JveC5jbGFzc0xpc3QuYWRkKFwibmF2LWJveFwiKTtcblxuXHRjb25zdCBBYm91dExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0QWJvdXRMaW5rLmhyZWYgPSBcIiNcIjtcblx0QWJvdXRMaW5rLnRleHRDb250ZW50ID0gXCJSZXN1bWVcIjtcblx0QWJvdXRMaW5rYm94LmFwcGVuZENoaWxkKEFib3V0TGluayk7XG5cblx0Y29uc3QgQWJvdXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0QWJvdXRJY29uLnNyYyA9IERvYztcblx0QWJvdXRJY29uLmFsdCA9IFwicmVzdW1lXCI7XG5cdEFib3V0TGlua2JveC5hcHBlbmRDaGlsZChBYm91dEljb24pO1xuXHRuYXZMaW5rcy5hcHBlbmRDaGlsZChBYm91dExpbmtib3gpO1xuXG5cdC8vIGhhbWJ1cmdlciBtZW51XG5cdGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGhhbWJ1cmdlci5jbGFzc0xpc3QuYWRkKFwiaGFtYnVyZ2VyXCIpO1xuXHRjb25zdCBoYW1idXJnZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0aGFtYnVyZ2VySWNvbi5zcmMgPSBoYW1idXJnZXJJbWc7XG5cdGhhbWJ1cmdlckljb24uYWx0ID0gXCJoYW1idXJnZXJcIjtcblx0aGFtYnVyZ2VyLmFwcGVuZENoaWxkKGhhbWJ1cmdlckljb24pO1xuXG5cdGNvbnN0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJoYW1idXJnZXItbWVudVwiKTtcblx0Y29uc3QgaGFtYnVyZ2VyTWVudUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0aGFtYnVyZ2VyTWVudUhvbWUuaHJlZiA9IFwiI1wiO1xuXHRoYW1idXJnZXJNZW51SG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXHRoYW1idXJnZXJNZW51LmFwcGVuZENoaWxkKGhhbWJ1cmdlck1lbnVIb21lKTtcblx0Y29uc3QgaGFtYnVyZ2VyTWVudUFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGhhbWJ1cmdlck1lbnVBYm91dC5ocmVmID0gXCIjXCI7XG5cdGhhbWJ1cmdlck1lbnVBYm91dC50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcblx0aGFtYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChoYW1idXJnZXJNZW51QWJvdXQpO1xuXHRjb25zdCBoYW1idXJnZXJNZW51UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0aGFtYnVyZ2VyTWVudVByb2plY3RzLmhyZWYgPSBcIiNcIjtcblx0aGFtYnVyZ2VyTWVudVByb2plY3RzLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXHRoYW1idXJnZXJNZW51LmFwcGVuZENoaWxkKGhhbWJ1cmdlck1lbnVQcm9qZWN0cyk7XG5cdGNvbnN0IGhhbWJ1cmdlck1lbnVSZXN1bWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0aGFtYnVyZ2VyTWVudVJlc3VtZS5ocmVmID0gXCIjXCI7XG5cdGhhbWJ1cmdlck1lbnVSZXN1bWUudGV4dENvbnRlbnQgPSBcIlJlc3VtZVwiO1xuXHRoYW1idXJnZXJNZW51LmFwcGVuZENoaWxkKGhhbWJ1cmdlck1lbnVSZXN1bWUpO1xuXG5cdGhhbWJ1cmdlci5hcHBlbmRDaGlsZChoYW1idXJnZXJNZW51KTtcblx0bmF2TGlua3MuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyKTtcblxuXHRiYXIuYXBwZW5kQ2hpbGQobG9nQ29udGFpbmVyKTtcblx0YmFyLmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKGJhcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcblx0Y29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblx0Zm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cblx0Y29uc3QgZ2l0SHViUHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRIdWJQcm9maWxlLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDdcIjtcblxuXHRjb25zdCBnaXRIdWJQcm9maWxlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Z2l0SHViUHJvZmlsZUltZy5zcmMgPSBHaXRIdWI7XG5cdGdpdEh1YlByb2ZpbGVJbWcuYWx0ID0gXCJnaXRIdWIgTG9nb1wiO1xuXG5cdGNvbnN0IGdpdEh1YlByb2ZpbGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGF0U3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGF0U3ltYm9sLmNsYXNzTGlzdC5hZGQoXCJhdC1zeW1ib2xcIik7XG5cdGF0U3ltYm9sLnRleHRDb250ZW50ID0gXCJAXCI7XG5cdGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdHVzZXJuYW1lLnRleHRDb250ZW50ID0gXCJTaGFoaXItNDdcIjtcblx0Z2l0SHViUHJvZmlsZVRleHQuYXBwZW5kQ2hpbGQoYXRTeW1ib2wpO1xuXHRnaXRIdWJQcm9maWxlVGV4dC5hcHBlbmRDaGlsZCh1c2VybmFtZSk7XG5cblx0Z2l0SHViUHJvZmlsZS5hcHBlbmRDaGlsZChnaXRIdWJQcm9maWxlSW1nKTtcblx0Z2l0SHViUHJvZmlsZS5hcHBlbmRDaGlsZChnaXRIdWJQcm9maWxlVGV4dCk7XG5cblx0Y29uc3Qgc2VwZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHNlcGVyYXRvci50ZXh0Q29udGVudCA9IFwifFwiO1xuXG5cdGNvbnN0IGdpdEh1YlJlcG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0Z2l0SHViUmVwby5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L1BvcnRmb2xpby1XZWJzaXRlXCI7XG5cdGdpdEh1YlJlcG8udGV4dENvbnRlbnQgPSBcIlNvdXJjZSBDb2RlXCI7XG5cblx0Zm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlByb2ZpbGUpO1xuXHRmb290ZXIuYXBwZW5kQ2hpbGQoc2VwZXJhdG9yKTtcblx0Zm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlJlcG8pO1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5mdW5jdGlvbiBzZXR1cFBhZ2UoKSB7XG5cdGNyZWF0ZU5hdkJhcigpO1xuXHRjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblx0Y3JlYXRlRm9vdGVyKCk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcblx0XHRjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1iYXJcIik7XG5cdFx0aWYgKHdpbmRvdy5zY3JvbGxZID4gMCkge1xuXHRcdFx0bmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyLXNjcm9sbGVkXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuYXZCYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1iYXItc2Nyb2xsZWRcIik7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBoYW1idXJnZXIgbWVudVxuXHRjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhhbWJ1cmdlclwiKTtcblx0Y29uc3QgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGFtYnVyZ2VyLW1lbnVcIik7XG5cdGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmIChoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuXHRcdFx0aGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuXHRcdFx0aGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG5cdFx0fSBlbHNlIGlmIChoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5jb250YWlucyhcImluYWN0aXZlXCIpKSB7XG5cdFx0XHRoYW1idXJnZXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcblx0XHRcdGhhbWJ1cmdlck1lbnUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aGFtYnVyZ2VyTWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdH1cblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNldHVwUGFnZTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBcXGBtYWluXFxgIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxuICovXG5cbm1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBcXGBoMVxcYCBlbGVtZW50cyB3aXRoaW4gXFxgc2VjdGlvblxcYCBhbmRcbiAqIFxcYGFydGljbGVcXGAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxuICovXG5cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC42N2VtIDA7XG59XG5cbi8qIEdyb3VwaW5nIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG5cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXG4gKi9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4gKiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyogRm9ybXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCB7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uLFxuc2VsZWN0IHsgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcblt0eXBlPVwiYnV0dG9uXCJdLFxuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gKi9cblxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmxlZ2VuZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAqL1xuXG5bdHlwZT1cImNoZWNrYm94XCJdLFxuW3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiAqL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXG4gKi9cblxuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qIE1pc2NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICovXG5cbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cbiAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuXHRjb2xvcjogI2UwZTBlMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuZGl2I2NvbnRlbnQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubmF2LWJhciB7XG5cdHBvc2l0aW9uOiBzdGlja3k7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZzogMS41cmVtIDNyZW07XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cdHotaW5kZXg6IDk5OTtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIE5vIGJhY2tncm91bmQgaW5pdGlhbGx5ICovXG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cigwKTsgLyogTm8gYmx1ciBpbml0aWFsbHkgKi9cblx0Ym94LXNoYWRvdzpcblx0XHQwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksXG5cdFx0MCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLm5hdi1iYXItc2Nyb2xsZWQge1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7IC8qIEFkanVzdCB0aGUgYmx1ciB2YWx1ZSBhcyBuZWVkZWQgKi9cblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYShcblx0XHQ3OSxcblx0XHQyMDksXG5cdFx0MTk3LFxuXHRcdDAuMTVcblx0KTsgLyogUkdCQSBjb2xvciBmb3IgdHJhbnNsdWNlbnQgdGVhbCAqL1xufVxuXG4ubG9nby1ib3gge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDFyZW07XG59XG5cbi5sb2dvLWJveCBpbWcge1xuXHR3aWR0aDogM3JlbTtcblx0aGVpZ2h0OiBhdXRvO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2ctY29udGFpbmVyOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9nby1ib3ggYSB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxvZy1jb250YWluZXI6aG92ZXI6YWZ0ZXIge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmxvZy1jb250YWluZXI6aG92ZXIgLmxvZ28tYm94IGEgaDEge1xuXHRjb2xvcjogI2ZmZmZmZmZmO1xufVxuXG4ubG9nLWNvbnRhaW5lcjpob3ZlciAubG9nby1ib3ggaW1nIHtcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDMpO1xufVxuXG4ubG9nLWNvbnRhaW5lcjphZnRlciB7XG5cdGJhY2tncm91bmQ6ICM0ZmQxYzU7XG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdGJvdHRvbTogMXB4O1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiBibG9jaztcblx0aGVpZ2h0OiA1cHg7XG5cdGxlZnQ6IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG5cdHdpZHRoOiAwO1xuXHR6LWluZGV4OiAtMTtcbn1cblxuLmxvZ28tYm94IGEgaDEge1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0bWFyZ2luOiAwO1xufVxuXG4ubmF2LWxpbmtzIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAycmVtO1xufVxuXG4ubmF2LWxpbmtzIGEge1xuXHRjb2xvcjogI2UwZTBlMDtcblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdGZvbnQtd2VpZ2h0OiAxMDA7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLm5hdi1saW5rcyBhOmhvdmVyIHtcblx0Y29sb3I6ICNmZmZmZmZmZjtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciB7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciBhIHtcblx0Y29sb3I6ICNmZmZmZmZmZjtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciBpbWcge1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XG59XG5cbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXI6YWZ0ZXIge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveDphZnRlciB7XG5cdGJhY2tncm91bmQ6ICM0ZmQxYzU7XG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdGJvdHRvbTogLTVweDtcblx0Y29udGVudDogXCJcIjtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGhlaWdodDogNXB4O1xuXHRsZWZ0OiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xuXHR3aWR0aDogMDtcblx0ei1pbmRleDogLTE7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogN3JlbTtcbn1cblxuLmZpcnN0LWJsb2NrLWhvbWUge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuXHRwYWRkaW5nOiAwIDNyZW07XG5cdGdhcDogMXJlbTtcbn1cblxuLnRleHQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnN1Yi10ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMXJlbTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciB7XG5cdHdpZHRoOiA3NSU7XG59XG5cbi5jb21wdXRlciB7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5maXJzdC10ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGdhcDogMXJlbTtcbn1cblxuLnR5cGVkLXRleHQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAycmVtO1xufVxuXG4jdHlwZWQtdGV4dCB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6ICM0ZmQxYzU7XG59XG5cbi50eXBlZC1jdXJzb3Ige1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiAjNGZkMWM1O1xuXHRhbmltYXRpb246IGJsaW5rIDAuN3MgaW5maW5pdGU7XG59XG5cbi5uYXYtYm94IHtcblx0cGFkZGluZzogMC4yNXJlbSAwcmVtO1xufVxuXG4ud2F2ZSB7XG5cdHdpZHRoOiAycmVtO1xuXHRoZWlnaHQ6IGF1dG87XG5cdGFuaW1hdGlvbi1uYW1lOiB3YXZlLWFuaW1hdGlvbjtcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAyLjVzO1xuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcblx0dHJhbnNmb3JtLW9yaWdpbjogNzAlIDcwJTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbn1cblxuQGtleWZyYW1lcyB3YXZlLWFuaW1hdGlvbiB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxuXHQxMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG5cdH1cblx0MjAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgxMmRlZyk7XG5cdH1cblx0MzAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuXHR9XG5cdDQwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoOWRlZyk7XG5cdH1cblx0NTAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxufVxuXG4ubmFtZSB7XG5cdGZvbnQtc2l6ZTogM3JlbTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Y29sb3I6ICM0ZmQxYzU7XG59XG5cbi5uYXYtYm94IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXHRnYXA6IDAuNXJlbTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdi1ib3ggaW1nIHtcblx0d2lkdGg6IDJyZW07XG5cdGhlaWdodDogYXV0bztcbn1cblxuLnNlY29uZC10ZXh0LWNvbnRhaW5lciBoNSB7XG5cdG1hcmdpbjogMDtcbn1cblxuLmZpcnN0LXRleHQtY29udGFpbmVyIGgzIHtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRtYXJnaW46IDA7XG59XG5cbi5zZWNvbmQtdGV4dC1jb250YWluZXIgaDUge1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zZWNvbmQtYmxvY2staG9tZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdHBhZGRpbmc6IDAgM3JlbTtcblx0bWFyZ2luOiAwIDVyZW07XG5cdGdhcDogNXJlbTtcbn1cblxuLnNlY29uZC1ibG9jay10ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oYWNrZXIge1xuXHR3aWR0aDogMzUlO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi50ZXh0LWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogM3JlbTtcbn1cblxuLnRleHQtZGl2IGgzIHtcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRmb250LXNpemU6IDEuOXJlbTtcblx0bWFyZ2luOiAwO1xufVxuXG4uaGlnaGxpZ2h0LFxuLnRleHQtZGl2IGgzIHNwYW4ge1xuXHRjb2xvcjogIzRmZDFjNTtcbn1cblxuLnN1Yi1kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDJyZW07XG59XG5cbi5zdWItdGV4dCB7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdG1hcmdpbjogMDtcbn1cblxuLnNvY2lhbC1pY29ucyBpbWcge1xuXHR3aWR0aDogMi41cmVtO1xuXHRoZWlnaHQ6IGF1dG87XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc29jaWFsLWljb25zIGltZzpob3ZlciB7XG5cdGZpbHRlcjogaW52ZXJ0KDEpO1xuXHRib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDc5LCAyMDksIDE5NywgMC41KTtcbn1cblxuLnNvY2lhbC10ZXh0LWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC41cmVtO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc29jaWFsLXRleHQtZGl2IGgzIHtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4uc29jaWFsLXRleHQtZGl2ICoge1xuXHRtYXJnaW46IDA7XG59XG5cbi5zb2NpYWwtaWNvbnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiAycmVtO1xufVxuXG4uc29jaWFsLXN1Yi10ZXh0IHtcblx0Zm9udC1zaXplOiAwLjhyZW07XG5cdGZvbnQtd2VpZ2h0OiA1NTA7XG59XG5cbi5zb2NpYWwtYmxvY2sge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDJyZW07XG59XG5cbi5zb2NpYWwtc3ViLXRleHQgc3BhbiB7XG5cdGNvbG9yOiAjNGZkMWM1O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRm9vdGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZm9vdGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMXJlbTtcblx0aGVpZ2h0OiAyLjVyZW07XG5cdG1hcmdpbi10b3A6IDJyZW07XG5cdHBhZGRpbmc6IDAuMjVyZW0gM3JlbTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTtcbn1cblxuZm9vdGVyIGEge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDAuNXJlbTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmb250LXNpemU6IDEuM3JlbTtcblx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0Y29sb3I6ICNmYWZhZmE7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbmZvb3RlciBwIHtcblx0bWFyZ2luOiAwLjVyZW0gMDtcbn1cblxuZm9vdGVyIGE6aG92ZXIsXG5mb290ZXIgYTphY3RpdmUge1xuXHRjb2xvcjogI2IwMmUzOTtcbn1cblxuZm9vdGVyIGEgaW1nIHtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG5mb290ZXIgYTpob3ZlciBpbWcsXG5mb290ZXIgYTphY3RpdmUgaW1nIHtcblx0ZmlsdGVyOiBpbnZlcnQoMSk7XG5cdGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoNzksIDIwOSwgMTk3LCAwLjUpO1xufVxuXG4uYXQtc3ltYm9sIHtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuZm9vdGVyIGltZyB7XG5cdHdpZHRoOiAycmVtO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi8qIFN0eWxlcyB0aGUgc2Nyb2xsYmFyIHRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDsgLyogQSBkYXJrZXIgc2hhZGUgZm9yIGNvbnRyYXN0ICovXG59XG5cbi8qIFN0eWxlcyB0aGUgc2Nyb2xsYmFyIGhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7IC8qIFRoZSBjb2xvciB5b3UgcHJvdmlkZWQgZm9yIHRoZSBoYW5kbGUgKi9cblx0Ym9yZGVyLXJhZGl1czogMTBweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciB0aGUgaGFuZGxlICovXG59XG5cbi8qIFN0eWxlcyB0aGUgc2Nyb2xsYmFyIGl0c2VsZiAoaW5jbHVkaW5nIHRoZSB0cmFjaykgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuXHR3aWR0aDogMTJweDsgLyogQWRqdXN0IHRvIHRoZSBzaXplIHlvdSBwcmVmZXIgKi9cbn1cblxuLyogT3B0aW9uYWw6IHN0eWxlcyB0aGUgc2Nyb2xsYmFyIGhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzYTlkOWI7IC8qIEEgc2xpZ2h0bHkgZGFya2VyIHNoYWRlIG9mIHRoZSBoYW5kbGUgY29sb3IgZm9yIGhvdmVyICovXG59XG5cbi8qIEZpcmVmb3ggKi9cbmh0bWwge1xuXHRzY3JvbGxiYXItY29sb3I6ICM0ZmQxYzUgIzJjM2U1MDtcblx0c2Nyb2xsYmFyLXdpZHRoOiB0aGluOyAvKiBZb3UgY2FuIHVzZSAnYXV0bycgb3IgJ3RoaW4nICovXG59XG5cbi5hYm91dC1wYWdlIHtcblx0cGFkZGluZzogMHJlbSAzcmVtO1xuXHRwYWRkaW5nLWJvdHRvbTogMnJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiA1cmVtO1xufVxuXG4uYWJvdXQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAycmVtO1xufVxuXG4uYWJvdXQtdGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFib3V0LW1lIHNwYW4ge1xuXHRjb2xvcjogIzRmZDFjNTtcbn1cblxuLmFib3V0LW1lLWRpdiB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hYm91dC1tZS1waWN0dXJlIHtcblx0d2lkdGg6IDc1JTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4uYWJvdXQtbWUtdGV4dC1kaXYge1xuXHRmb250LXNpemU6IDEuMXJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxcmVtO1xufVxuXG4uYWJvdXQtbWUtdGV4dDpudGgtb2YtdHlwZSgxKSB7XG5cdG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVuZCBvZiBGb290ZXIgc3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLmNhcm91c2VsLWl0ZW0gaW1nIHtcblx0d2lkdGg6IDNyZW07XG5cdGhlaWdodDogYXV0bztcbn1cblxuLnNlY29uZC1kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDNyZW07XG5cdHBhZGRpbmc6IDAgM3JlbTtcbn1cblxuLnNlY29uZC1kaXYtdGV4dCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRnYXA6IDFyZW07XG59XG5cbi5zZWNvbmQtZGl2LXRleHQgcCB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0bWFyZ2luOiAwO1xuXHRmb250LXdlaWdodDogOTAwO1xufVxuXG4uY2Fyb3VzZWwtZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0Ym9yZGVyOiAzcHggc29saWQgI2RkZGRkZDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJhY2stYnRuLFxuLmZvcndhcmQtYnRuIHtcblx0Zm9udC1zaXplOiAyLjVyZW07XG5cdGNvbG9yOiAjMTUyMDJiO1xuXHRmb250LXdlaWdodDogOTAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuXHRib3JkZXI6IG5vbmU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcm91c2VsIHtcblx0ZGlzcGxheTogZmxleDtcblx0b3ZlcmZsb3cteDogYXV0bztcblx0Z2FwOiAycmVtO1xuXHRwYWRkaW5nOiAxcmVtO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcblx0LW1zLXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHRtYXJnaW4tdG9wOiAwLjJyZW07XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xuXHRtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcblx0bWluLXdpZHRoOiA3cmVtO1xuXHRtaW4taGVpZ2h0OiAxMHJlbTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGdhcDogMXJlbTtcblx0dHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG5cdC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjE3O1xufVxuXG4uY2Fyb3VzZWwtaXRlbSBwIHtcblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdG1hcmdpbjogMDtcbn1cblxuLmNhcm91c2VsLWl0ZW1zIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGdhcDogMnJlbTtcbn1cblxuLyogU3R5bGUgdGhlIHNjcm9sbGJhciAqL1xuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhciB7XG5cdHdpZHRoOiA1cHg7IC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbGJhciAqL1xuXHRoZWlnaHQ6IDEwcHg7IC8qIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBzY3JvbGxiYXIgKi9cbn1cblxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgdGh1bWIgKi9cblx0Ym9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHRoZSBzY3JvbGxiYXIgdGh1bWIgKi9cbn1cblxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgdGh1bWIgb24gaG92ZXIgKi9cbn1cblxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIHRyYWNrICovXG59XG5cbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgY29ybmVyICovXG59XG5cbi5wcm9qZWN0LWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMnJlbTtcblx0cGFkZGluZzogMCAzcmVtO1xufVxuXG4ucHJvamVjdC1kaXYgaDEge1xuXHRjb2xvcjogIzRmZDFjNTtcbn1cblxuLnByb2plY3QtaXRlbSBpbWcge1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcblx0Z2FwOiAycmVtO1xufVxuXG4ucHJvamVjdC1pdGVtIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDJyZW07XG5cdHBhZGRpbmc6IDFyZW07XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYxNztcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbn1cblxuLnByb2plY3QtbGluay1kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDFyZW07XG59XG5cbi5wcm9qZWN0LWxpbmstZGl2IGEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiAjNGZkMWM1O1xuXHRmb250LXNpemU6IDEuNXJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Ym9yZGVyOiAxcHggc29saWQgIzRmZDFjNTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0cGFkZGluZzogMC41cmVtIDFyZW07XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5wcm9qZWN0LWxpbmstZGl2IGE6aG92ZXIge1xuXHRjb2xvcjogI2UwZTBlMDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTtcbn1cblxuLnByb2plY3QtaXRlbS1kaXYgcCB7XG5cdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuXG4vKiAuLi5leGlzdGluZyBzdHlsZXMgKi9cblxuLmhhbWJ1cmdlci1tZW51IHtcblx0ZGlzcGxheTogbm9uZTtcblx0dHJhbnNmb3JtLW9yaWdpbjogdG9wO1xufVxuXG4uaGFtYnVyZ2VyIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XG5cdC5oYW1idXJnZXIge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHR9XG5cblx0LmhhbWJ1cmdlciBpbWcge1xuXHRcdHdpZHRoOiAycmVtO1xuXHRcdGhlaWdodDogYXV0bztcblx0fVxuXG5cdC5oYW1idXJnZXIgaW1nOmhvdmVyIHtcblx0XHRmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XG5cdH1cblxuXHQubmF2LWJveCB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuXG5cdC5sb2ctY29udGFpbmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Z2FwOiAxcmVtO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXG5cdC5oYW1idXJnZXItbWVudS5hY3RpdmUge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1O1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRsZWZ0OiAwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHotaW5kZXg6IDk5OTtcblx0XHRhbmltYXRpb246IGV4cGFuZCA1MDBtcyBlYXNlLWluLW91dDtcblx0XHRtYXJnaW4tdG9wOiAycmVtO1xuXHRcdGdhcDogMXJlbTtcblx0XHRwYWRkaW5nLXRvcDogMXJlbTtcblx0XHQvKiBkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRtYXJnaW4tdG9wOiAyLjVyZW07XG5cdFx0Z2FwOiAxcmVtOyAqL1xuXHR9XG5cblx0QGtleWZyYW1lcyBleHBhbmQge1xuXHRcdDAlIHtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGVZKDApO1xuXHRcdH1cblxuXHRcdDcwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlWSgxLjEpO1xuXHRcdH1cblxuXHRcdDEwMCUge1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZVkoMSk7XG5cdFx0fVxuXHR9XG5cblx0LmluYWN0aXZlIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0bGVmdDogMDtcblx0XHRyaWdodDogMDtcblx0XHR6LWluZGV4OiA5OTk7XG5cdFx0YW5pbWF0aW9uOiBjb2xsYXBzZSAwLjVzIGZvcndhcmRzO1xuXHRcdG1hcmdpbi10b3A6IDJyZW07XG5cdFx0Z2FwOiAxcmVtO1xuXHRcdHBhZGRpbmctdG9wOiAxcmVtO1xuXHR9XG5cblx0LyogLmluYWN0aXZlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHR0cmFuc2Zvcm06IHNjYWxlWSgwKTtcblx0XHR0cmFuc2l0aW9uOlxuXHRcdFx0dHJhbnNmb3JtIDAuNXMsXG5cdFx0XHRvcGFjaXR5IDAuNXMsXG5cdFx0XHR2aXNpYmlsaXR5IDBzIDBzO1xuXHR9ICovXG5cblx0QGtleWZyYW1lcyBjb2xsYXBzZSB7XG5cdFx0MCUge1xuXHRcdFx0dHJhbnNmb3JtOiBzY2FsZVkoMSk7XG5cdFx0fVxuXHRcdDcwJSB7XG5cdFx0XHR0cmFuc2Zvcm06IHNjYWxlWSgxLjEpO1xuXHRcdH1cblx0XHQxMDAlIHtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGVZKDApO1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHR9XG5cdH1cblxuXHQuaGFtYnVyZ2VyLW1lbnUgYSB7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMGUwZTA7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cblx0LmhhbWJ1cmdlci1tZW51IGE6bnRoLW9mLXR5cGUoNCkge1xuXHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdH1cblxuXHQuaGFtYnVyZ2VyLW1lbnUgYSB7XG5cdFx0Zm9udC1zaXplOiAycmVtO1xuXHRcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xuXHR9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsY0FBYztDQUNkLHlCQUF5QjtDQUN6Qix5REFBNEM7Q0FDNUMsbUNBQW1DO0NBQ25DLHVDQUF1QztDQUN2Qyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLE1BQU07Q0FDTixPQUFPO0NBQ1AsUUFBUTtDQUNSLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQix5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLDZCQUE2QixFQUFFLDRCQUE0QjtDQUMzRCx3QkFBd0IsRUFBRSxzQkFBc0I7Q0FDaEQ7O29DQUVtQztBQUNwQzs7QUFFQTtDQUNDLDJCQUEyQixFQUFFLG9DQUFvQztDQUNqRTs7Ozs7RUFLQyxFQUFFLG9DQUFvQztBQUN4Qzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsU0FBUztBQUNWOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsV0FBVztDQUNYLE9B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a0I7Q0FDbkI7O0NBRUE7RUFDQyxtQkFBbUI7Q0FDcEI7O0NBRUE7RUFDQyxlQUFlO0VBQ2Ysb0JBQW9CO0NBQ3JCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuXFx0Y29sb3I6ICNlMGUwZTA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2JhY2tncm91bmQuanBnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbmRpdiNjb250ZW50IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uYXYtYmFyIHtcXG5cXHRwb3NpdGlvbjogc3RpY2t5O1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMS41cmVtIDNyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG5cXHR6LWluZGV4OiA5OTk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIE5vIGJhY2tncm91bmQgaW5pdGlhbGx5ICovXFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDApOyAvKiBObyBibHVyIGluaXRpYWxseSAqL1xcblxcdGJveC1zaGFkb3c6XFxuXFx0XFx0MCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxcblxcdFxcdDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxufVxcblxcbi5uYXYtYmFyLXNjcm9sbGVkIHtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7IC8qIEFkanVzdCB0aGUgYmx1ciB2YWx1ZSBhcyBuZWVkZWQgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxcblxcdFxcdDc5LFxcblxcdFxcdDIwOSxcXG5cXHRcXHQxOTcsXFxuXFx0XFx0MC4xNVxcblxcdCk7IC8qIFJHQkEgY29sb3IgZm9yIHRyYW5zbHVjZW50IHRlYWwgKi9cXG59XFxuXFxuLmxvZ28tYm94IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4ubG9nby1ib3ggaW1nIHtcXG5cXHR3aWR0aDogM3JlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lcjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9nby1ib3ggYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lcjpob3ZlcjphZnRlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5sb2ctY29udGFpbmVyOmhvdmVyIC5sb2dvLWJveCBhIGgxIHtcXG5cXHRjb2xvcjogI2ZmZmZmZmZmO1xcbn1cXG5cXG4ubG9nLWNvbnRhaW5lcjpob3ZlciAubG9nby1ib3ggaW1nIHtcXG5cXHRmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XFxufVxcblxcbi5sb2ctY29udGFpbmVyOmFmdGVyIHtcXG5cXHRiYWNrZ3JvdW5kOiAjNGZkMWM1O1xcblxcdGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuXFx0Ym90dG9tOiAxcHg7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0aGVpZ2h0OiA1cHg7XFxuXFx0bGVmdDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XFxuXFx0d2lkdGg6IDA7XFxuXFx0ei1pbmRleDogLTE7XFxufVxcblxcbi5sb2dvLWJveCBhIGgxIHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4ubmF2LWxpbmtzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG5cXG4ubmF2LWxpbmtzIGEge1xcblxcdGNvbG9yOiAjZTBlMGUwO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubmF2LWxpbmtzIGE6aG92ZXIge1xcblxcdGNvbG9yOiAjZmZmZmZmZmY7XFxufVxcblxcbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXIge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciBhIHtcXG5cXHRjb2xvcjogI2ZmZmZmZmZmO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyIGltZyB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDMpO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyOmFmdGVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLm5hdi1saW5rcyAubmF2LWJveCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94OmFmdGVyIHtcXG5cXHRiYWNrZ3JvdW5kOiAjNGZkMWM1O1xcblxcdGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuXFx0Ym90dG9tOiAtNXB4O1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGhlaWdodDogNXB4O1xcblxcdGxlZnQ6IDA7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xcblxcdHdpZHRoOiAwO1xcblxcdHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDdyZW07XFxufVxcblxcbi5maXJzdC1ibG9jay1ob21lIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcblxcdHBhZGRpbmc6IDAgM3JlbTtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi50ZXh0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc3ViLXRleHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4uaW1hZ2UtY29udGFpbmVyIHtcXG5cXHR3aWR0aDogNzUlO1xcbn1cXG5cXG4uY29tcHV0ZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLmZpcnN0LXRleHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4udHlwZWQtdGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDJyZW07XFxufVxcblxcbiN0eXBlZC10ZXh0IHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLnR5cGVkLWN1cnNvciB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxuXFx0YW5pbWF0aW9uOiBibGluayAwLjdzIGluZmluaXRlO1xcbn1cXG5cXG4ubmF2LWJveCB7XFxuXFx0cGFkZGluZzogMC4yNXJlbSAwcmVtO1xcbn1cXG5cXG4ud2F2ZSB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdGFuaW1hdGlvbi1uYW1lOiB3YXZlLWFuaW1hdGlvbjtcXG5cXHRhbmltYXRpb24tZHVyYXRpb246IDIuNXM7XFxuXFx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuXFx0dHJhbnNmb3JtLW9yaWdpbjogNzAlIDcwJTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcblxcbkBrZXlmcmFtZXMgd2F2ZS1hbmltYXRpb24ge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxuXFx0MTAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcblxcdH1cXG5cXHQyMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDEyZGVnKTtcXG5cXHR9XFxuXFx0MzAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xcblxcdH1cXG5cXHQ0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDlkZWcpO1xcblxcdH1cXG5cXHQ1MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG5cXHR9XFxufVxcblxcbi5uYW1lIHtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLm5hdi1ib3gge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcblxcdGdhcDogMC41cmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYm94IGltZyB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2Vjb25kLXRleHQtY29udGFpbmVyIGg1IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5maXJzdC10ZXh0LWNvbnRhaW5lciBoMyB7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uc2Vjb25kLXRleHQtY29udGFpbmVyIGg1IHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnNlY29uZC1ibG9jay1ob21lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogMCAzcmVtO1xcblxcdG1hcmdpbjogMCA1cmVtO1xcblxcdGdhcDogNXJlbTtcXG59XFxuXFxuLnNlY29uZC1ibG9jay10ZXh0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhhY2tlciB7XFxuXFx0d2lkdGg6IDM1JTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi50ZXh0LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogM3JlbTtcXG59XFxuXFxuLnRleHQtZGl2IGgzIHtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjlyZW07XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uaGlnaGxpZ2h0LFxcbi50ZXh0LWRpdiBoMyBzcGFuIHtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLnN1Yi1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDJyZW07XFxufVxcblxcbi5zdWItdGV4dCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5zb2NpYWwtaWNvbnMgaW1nIHtcXG5cXHR3aWR0aDogMi41cmVtO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zb2NpYWwtaWNvbnMgaW1nOmhvdmVyIHtcXG5cXHRmaWx0ZXI6IGludmVydCgxKTtcXG5cXHRib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDc5LCAyMDksIDE5NywgMC41KTtcXG59XFxuXFxuLnNvY2lhbC10ZXh0LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMC41cmVtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zb2NpYWwtdGV4dC1kaXYgaDMge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc29jaWFsLXRleHQtZGl2ICoge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnNvY2lhbC1pY29ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLnNvY2lhbC1zdWItdGV4dCB7XFxuXFx0Zm9udC1zaXplOiAwLjhyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDU1MDtcXG59XFxuXFxuLnNvY2lhbC1ibG9jayB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLnNvY2lhbC1zdWItdGV4dCBzcGFuIHtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZvb3RlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGhlaWdodDogMi41cmVtO1xcblxcdG1hcmdpbi10b3A6IDJyZW07XFxuXFx0cGFkZGluZzogMC4yNXJlbSAzcmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbmZvb3RlciBhIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFx0Y29sb3I6ICNmYWZhZmE7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuZm9vdGVyIHAge1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyLFxcbmZvb3RlciBhOmFjdGl2ZSB7XFxuXFx0Y29sb3I6ICNiMDJlMzk7XFxufVxcblxcbmZvb3RlciBhIGltZyB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbmZvb3RlciBhOmhvdmVyIGltZyxcXG5mb290ZXIgYTphY3RpdmUgaW1nIHtcXG5cXHRmaWx0ZXI6IGludmVydCgxKTtcXG5cXHRib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDc5LCAyMDksIDE5NywgMC41KTtcXG59XFxuXFxuLmF0LXN5bWJvbCB7XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiBTdHlsZXMgdGhlIHNjcm9sbGJhciB0cmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7IC8qIEEgZGFya2VyIHNoYWRlIGZvciBjb250cmFzdCAqL1xcbn1cXG5cXG4vKiBTdHlsZXMgdGhlIHNjcm9sbGJhciBoYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1OyAvKiBUaGUgY29sb3IgeW91IHByb3ZpZGVkIGZvciB0aGUgaGFuZGxlICovXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDsgLyogUm91bmRlZCBjb3JuZXJzIGZvciB0aGUgaGFuZGxlICovXFxufVxcblxcbi8qIFN0eWxlcyB0aGUgc2Nyb2xsYmFyIGl0c2VsZiAoaW5jbHVkaW5nIHRoZSB0cmFjaykgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5cXHR3aWR0aDogMTJweDsgLyogQWRqdXN0IHRvIHRoZSBzaXplIHlvdSBwcmVmZXIgKi9cXG59XFxuXFxuLyogT3B0aW9uYWw6IHN0eWxlcyB0aGUgc2Nyb2xsYmFyIGhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzYTlkOWI7IC8qIEEgc2xpZ2h0bHkgZGFya2VyIHNoYWRlIG9mIHRoZSBoYW5kbGUgY29sb3IgZm9yIGhvdmVyICovXFxufVxcblxcbi8qIEZpcmVmb3ggKi9cXG5odG1sIHtcXG5cXHRzY3JvbGxiYXItY29sb3I6ICM0ZmQxYzUgIzJjM2U1MDtcXG5cXHRzY3JvbGxiYXItd2lkdGg6IHRoaW47IC8qIFlvdSBjYW4gdXNlICdhdXRvJyBvciAndGhpbicgKi9cXG59XFxuXFxuLmFib3V0LXBhZ2Uge1xcblxcdHBhZGRpbmc6IDByZW0gM3JlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiA1cmVtO1xcbn1cXG5cXG4uYWJvdXQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG5cXG4uYWJvdXQtdGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hYm91dC1tZSBzcGFuIHtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLmFib3V0LW1lLWRpdiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hYm91dC1tZS1waWN0dXJlIHtcXG5cXHR3aWR0aDogNzUlO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLmFib3V0LW1lLXRleHQtZGl2IHtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4uYWJvdXQtbWUtdGV4dDpudGgtb2YtdHlwZSgxKSB7XFxuXFx0bWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRW5kIG9mIEZvb3RlciBzdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5jYXJvdXNlbC1pdGVtIGltZyB7XFxuXFx0d2lkdGg6IDNyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2Vjb25kLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogM3JlbTtcXG5cXHRwYWRkaW5nOiAwIDNyZW07XFxufVxcblxcbi5zZWNvbmQtZGl2LXRleHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcbn1cXG5cXG4uc2Vjb25kLWRpdi10ZXh0IHAge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmNhcm91c2VsLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCAjZGRkZGRkO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5iYWNrLWJ0bixcXG4uZm9yd2FyZC1idG4ge1xcblxcdGZvbnQtc2l6ZTogMi41cmVtO1xcblxcdGNvbG9yOiAjMTUyMDJiO1xcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2Fyb3VzZWwge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0b3ZlcmZsb3cteDogYXV0bztcXG5cXHRnYXA6IDJyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHQtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHRtYXJnaW4tdG9wOiAwLjJyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uY2Fyb3VzZWwtaXRlbSB7XFxuXFx0bWluLXdpZHRoOiA3cmVtO1xcblxcdG1pbi1oZWlnaHQ6IDEwcmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHQtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjE3O1xcbn1cXG5cXG4uY2Fyb3VzZWwtaXRlbSBwIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5jYXJvdXNlbC1pdGVtcyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLyogU3R5bGUgdGhlIHNjcm9sbGJhciAqL1xcbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiA1cHg7IC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNjcm9sbGJhciAqL1xcblxcdGhlaWdodDogMTBweDsgLyogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIHNjcm9sbGJhciAqL1xcbn1cXG5cXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIHRodW1iICovXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHRoZSBzY3JvbGxiYXIgdGh1bWIgKi9cXG59XFxuXFxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0aHVtYiBvbiBob3ZlciAqL1xcbn1cXG5cXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0cmFjayAqL1xcbn1cXG5cXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgY29ybmVyICovXFxufVxcblxcbi5wcm9qZWN0LWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMnJlbTtcXG5cXHRwYWRkaW5nOiAwIDNyZW07XFxufVxcblxcbi5wcm9qZWN0LWRpdiBoMSB7XFxuXFx0Y29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0gaW1nIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDJyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYxNztcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWxpbmstZGl2IGEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICM0ZmQxYzU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rLWRpdiBhOmhvdmVyIHtcXG5cXHRjb2xvcjogI2UwZTBlMDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0tZGl2IHAge1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi8qIC4uLmV4aXN0aW5nIHN0eWxlcyAqL1xcblxcbi5oYW1idXJnZXItbWVudSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XFxufVxcblxcbi5oYW1idXJnZXIge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NzBweCkge1xcblxcdC5oYW1idXJnZXIge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyIGltZyB7XFxuXFx0XFx0d2lkdGg6IDJyZW07XFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyIGltZzpob3ZlciB7XFxuXFx0XFx0ZmlsdGVyOiBicmlnaHRuZXNzKDMpO1xcblxcdH1cXG5cXG5cXHQubmF2LWJveCB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LmxvZy1jb250YWluZXIge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRnYXA6IDFyZW07XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyLW1lbnUuYWN0aXZlIHtcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTtcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0XFx0bGVmdDogMDtcXG5cXHRcXHRyaWdodDogMDtcXG5cXHRcXHR6LWluZGV4OiA5OTk7XFxuXFx0XFx0YW5pbWF0aW9uOiBleHBhbmQgNTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFx0XFx0bWFyZ2luLXRvcDogMnJlbTtcXG5cXHRcXHRnYXA6IDFyZW07XFxuXFx0XFx0cGFkZGluZy10b3A6IDFyZW07XFxuXFx0XFx0LyogZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0bWFyZ2luLXRvcDogMi41cmVtO1xcblxcdFxcdGdhcDogMXJlbTsgKi9cXG5cXHR9XFxuXFxuXFx0QGtleWZyYW1lcyBleHBhbmQge1xcblxcdFxcdDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0NzAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgxLjEpO1xcblxcdFxcdH1cXG5cXG5cXHRcXHQxMDAlIHtcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC5pbmFjdGl2ZSB7XFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7XFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0cmlnaHQ6IDA7XFxuXFx0XFx0ei1pbmRleDogOTk5O1xcblxcdFxcdGFuaW1hdGlvbjogY29sbGFwc2UgMC41cyBmb3J3YXJkcztcXG5cXHRcXHRtYXJnaW4tdG9wOiAycmVtO1xcblxcdFxcdGdhcDogMXJlbTtcXG5cXHRcXHRwYWRkaW5nLXRvcDogMXJlbTtcXG5cXHR9XFxuXFxuXFx0LyogLmluYWN0aXZlIHtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdFxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG5cXHRcXHR0cmFuc2l0aW9uOlxcblxcdFxcdFxcdHRyYW5zZm9ybSAwLjVzLFxcblxcdFxcdFxcdG9wYWNpdHkgMC41cyxcXG5cXHRcXHRcXHR2aXNpYmlsaXR5IDBzIDBzO1xcblxcdH0gKi9cXG5cXG5cXHRAa2V5ZnJhbWVzIGNvbGxhcHNlIHtcXG5cXHRcXHQwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuXFx0XFx0fVxcblxcdFxcdDcwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZVkoMS4xKTtcXG5cXHRcXHR9XFxuXFx0XFx0MTAwJSB7XFxuXFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZVkoMCk7XFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdC5oYW1idXJnZXItbWVudSBhIHtcXG5cXHRcXHRib3JkZXItYm90dG9tOiAycHggc29saWQgI2UwZTBlMDtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcblxcdC5oYW1idXJnZXItbWVudSBhOm50aC1vZi10eXBlKDQpIHtcXG5cXHRcXHRib3JkZXItYm90dG9tOiBub25lO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyLW1lbnUgYSB7XFxuXFx0XFx0Zm9udC1zaXplOiAycmVtO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHQoKXtyZXR1cm4gdD1PYmplY3QuYXNzaWduP09iamVjdC5hc3NpZ24uYmluZCgpOmZ1bmN0aW9uKHQpe2Zvcih2YXIgcz0xO3M8YXJndW1lbnRzLmxlbmd0aDtzKyspe3ZhciBlPWFyZ3VtZW50c1tzXTtmb3IodmFyIG4gaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmKHRbbl09ZVtuXSl9cmV0dXJuIHR9LHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBzPXtzdHJpbmdzOltcIlRoZXNlIGFyZSB0aGUgZGVmYXVsdCB2YWx1ZXMuLi5cIixcIllvdSBrbm93IHdoYXQgeW91IHNob3VsZCBkbz9cIixcIlVzZSB5b3VyIG93biFcIixcIkhhdmUgYSBncmVhdCBkYXkhXCJdLHN0cmluZ3NFbGVtZW50Om51bGwsdHlwZVNwZWVkOjAsc3RhcnREZWxheTowLGJhY2tTcGVlZDowLHNtYXJ0QmFja3NwYWNlOiEwLHNodWZmbGU6ITEsYmFja0RlbGF5OjcwMCxmYWRlT3V0OiExLGZhZGVPdXRDbGFzczpcInR5cGVkLWZhZGUtb3V0XCIsZmFkZU91dERlbGF5OjUwMCxsb29wOiExLGxvb3BDb3VudDpJbmZpbml0eSxzaG93Q3Vyc29yOiEwLGN1cnNvckNoYXI6XCJ8XCIsYXV0b0luc2VydENzczohMCxhdHRyOm51bGwsYmluZElucHV0Rm9jdXNFdmVudHM6ITEsY29udGVudFR5cGU6XCJodG1sXCIsb25CZWdpbjpmdW5jdGlvbih0KXt9LG9uQ29tcGxldGU6ZnVuY3Rpb24odCl7fSxwcmVTdHJpbmdUeXBlZDpmdW5jdGlvbih0LHMpe30sb25TdHJpbmdUeXBlZDpmdW5jdGlvbih0LHMpe30sb25MYXN0U3RyaW5nQmFja3NwYWNlZDpmdW5jdGlvbih0KXt9LG9uVHlwaW5nUGF1c2VkOmZ1bmN0aW9uKHQscyl7fSxvblR5cGluZ1Jlc3VtZWQ6ZnVuY3Rpb24odCxzKXt9LG9uUmVzZXQ6ZnVuY3Rpb24odCl7fSxvblN0b3A6ZnVuY3Rpb24odCxzKXt9LG9uU3RhcnQ6ZnVuY3Rpb24odCxzKXt9LG9uRGVzdHJveTpmdW5jdGlvbih0KXt9fSxlPW5ldygvKiNfX1BVUkVfXyovZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7fXZhciBuPWUucHJvdG90eXBlO3JldHVybiBuLmxvYWQ9ZnVuY3Rpb24oZSxuLGkpe2lmKGUuZWw9XCJzdHJpbmdcIj09dHlwZW9mIGk/ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpKTppLGUub3B0aW9ucz10KHt9LHMsbiksZS5pc0lucHV0PVwiaW5wdXRcIj09PWUuZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpLGUuYXR0cj1lLm9wdGlvbnMuYXR0cixlLmJpbmRJbnB1dEZvY3VzRXZlbnRzPWUub3B0aW9ucy5iaW5kSW5wdXRGb2N1c0V2ZW50cyxlLnNob3dDdXJzb3I9IWUuaXNJbnB1dCYmZS5vcHRpb25zLnNob3dDdXJzb3IsZS5jdXJzb3JDaGFyPWUub3B0aW9ucy5jdXJzb3JDaGFyLGUuY3Vyc29yQmxpbmtpbmc9ITAsZS5lbENvbnRlbnQ9ZS5hdHRyP2UuZWwuZ2V0QXR0cmlidXRlKGUuYXR0cik6ZS5lbC50ZXh0Q29udGVudCxlLmNvbnRlbnRUeXBlPWUub3B0aW9ucy5jb250ZW50VHlwZSxlLnR5cGVTcGVlZD1lLm9wdGlvbnMudHlwZVNwZWVkLGUuc3RhcnREZWxheT1lLm9wdGlvbnMuc3RhcnREZWxheSxlLmJhY2tTcGVlZD1lLm9wdGlvbnMuYmFja1NwZWVkLGUuc21hcnRCYWNrc3BhY2U9ZS5vcHRpb25zLnNtYXJ0QmFja3NwYWNlLGUuYmFja0RlbGF5PWUub3B0aW9ucy5iYWNrRGVsYXksZS5mYWRlT3V0PWUub3B0aW9ucy5mYWRlT3V0LGUuZmFkZU91dENsYXNzPWUub3B0aW9ucy5mYWRlT3V0Q2xhc3MsZS5mYWRlT3V0RGVsYXk9ZS5vcHRpb25zLmZhZGVPdXREZWxheSxlLmlzUGF1c2VkPSExLGUuc3RyaW5ncz1lLm9wdGlvbnMuc3RyaW5ncy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHQudHJpbSgpfSksZS5zdHJpbmdzRWxlbWVudD1cInN0cmluZ1wiPT10eXBlb2YgZS5vcHRpb25zLnN0cmluZ3NFbGVtZW50P2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS5vcHRpb25zLnN0cmluZ3NFbGVtZW50KTplLm9wdGlvbnMuc3RyaW5nc0VsZW1lbnQsZS5zdHJpbmdzRWxlbWVudCl7ZS5zdHJpbmdzPVtdLGUuc3RyaW5nc0VsZW1lbnQuc3R5bGUuY3NzVGV4dD1cImNsaXA6IHJlY3QoMCAwIDAgMCk7Y2xpcC1wYXRoOmluc2V0KDUwJSk7aGVpZ2h0OjFweDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7d2hpdGUtc3BhY2U6bm93cmFwO3dpZHRoOjFweDtcIjt2YXIgcj1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZS5zdHJpbmdzRWxlbWVudC5jaGlsZHJlbiksbz1yLmxlbmd0aDtpZihvKWZvcih2YXIgYT0wO2E8bzthKz0xKWUuc3RyaW5ncy5wdXNoKHJbYV0uaW5uZXJIVE1MLnRyaW0oKSl9Zm9yKHZhciB1IGluIGUuc3RyUG9zPTAsZS5jdXJyZW50RWxDb250ZW50PXRoaXMuZ2V0Q3VycmVudEVsQ29udGVudChlKSxlLmN1cnJlbnRFbENvbnRlbnQmJmUuY3VycmVudEVsQ29udGVudC5sZW5ndGg+MCYmKGUuc3RyUG9zPWUuY3VycmVudEVsQ29udGVudC5sZW5ndGgtMSxlLnN0cmluZ3MudW5zaGlmdChlLmN1cnJlbnRFbENvbnRlbnQpKSxlLnNlcXVlbmNlPVtdLGUuc3RyaW5ncyllLnNlcXVlbmNlW3VdPXU7ZS5hcnJheVBvcz0wLGUuc3RvcE51bT0wLGUubG9vcD1lLm9wdGlvbnMubG9vcCxlLmxvb3BDb3VudD1lLm9wdGlvbnMubG9vcENvdW50LGUuY3VyTG9vcD0wLGUuc2h1ZmZsZT1lLm9wdGlvbnMuc2h1ZmZsZSxlLnBhdXNlPXtzdGF0dXM6ITEsdHlwZXdyaXRlOiEwLGN1clN0cmluZzpcIlwiLGN1clN0clBvczowfSxlLnR5cGluZ0NvbXBsZXRlPSExLGUuYXV0b0luc2VydENzcz1lLm9wdGlvbnMuYXV0b0luc2VydENzcyxlLmF1dG9JbnNlcnRDc3MmJih0aGlzLmFwcGVuZEN1cnNvckFuaW1hdGlvbkNzcyhlKSx0aGlzLmFwcGVuZEZhZGVPdXRBbmltYXRpb25Dc3MoZSkpfSxuLmdldEN1cnJlbnRFbENvbnRlbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQuYXR0cj90LmVsLmdldEF0dHJpYnV0ZSh0LmF0dHIpOnQuaXNJbnB1dD90LmVsLnZhbHVlOlwiaHRtbFwiPT09dC5jb250ZW50VHlwZT90LmVsLmlubmVySFRNTDp0LmVsLnRleHRDb250ZW50fSxuLmFwcGVuZEN1cnNvckFuaW1hdGlvbkNzcz1mdW5jdGlvbih0KXt2YXIgcz1cImRhdGEtdHlwZWQtanMtY3Vyc29yLWNzc1wiO2lmKHQuc2hvd0N1cnNvciYmIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbXCIrcytcIl1cIikpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtlLnNldEF0dHJpYnV0ZShzLFwidHJ1ZVwiKSxlLmlubmVySFRNTD1cIlxcbiAgICAgICAgLnR5cGVkLWN1cnNvcntcXG4gICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIH1cXG4gICAgICAgIC50eXBlZC1jdXJzb3IudHlwZWQtY3Vyc29yLS1ibGlua3tcXG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICB9XFxuICAgICAgICBAa2V5ZnJhbWVzIHR5cGVkanNCbGlua3tcXG4gICAgICAgICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XFxuICAgICAgICB9XFxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XFxuICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICB9XFxuICAgICAgXCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlKX19LG4uYXBwZW5kRmFkZU91dEFuaW1hdGlvbkNzcz1mdW5jdGlvbih0KXt2YXIgcz1cImRhdGEtdHlwZWQtZmFkZW91dC1qcy1jc3NcIjtpZih0LmZhZGVPdXQmJiFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW1wiK3MrXCJdXCIpKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7ZS5zZXRBdHRyaWJ1dGUocyxcInRydWVcIiksZS5pbm5lckhUTUw9XCJcXG4gICAgICAgIC50eXBlZC1mYWRlLW91dHtcXG4gICAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzO1xcbiAgICAgICAgfVxcbiAgICAgICAgLnR5cGVkLWN1cnNvci50eXBlZC1jdXJzb3ItLWJsaW5rLnR5cGVkLWZhZGUtb3V0e1xcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogMDtcXG4gICAgICAgICAgYW5pbWF0aW9uOiAwO1xcbiAgICAgICAgfVxcbiAgICAgIFwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZSl9fSxlfSgpKSxuPW5ldygvKiNfX1BVUkVfXyovZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXZhciBzPXQucHJvdG90eXBlO3JldHVybiBzLnR5cGVIdG1sQ2hhcnM9ZnVuY3Rpb24odCxzLGUpe2lmKFwiaHRtbFwiIT09ZS5jb250ZW50VHlwZSlyZXR1cm4gczt2YXIgbj10LnN1YnN0cmluZyhzKS5jaGFyQXQoMCk7aWYoXCI8XCI9PT1ufHxcIiZcIj09PW4pe3ZhciBpO2ZvcihpPVwiPFwiPT09bj9cIj5cIjpcIjtcIjt0LnN1YnN0cmluZyhzKzEpLmNoYXJBdCgwKSE9PWkmJiEoMSsgKytzPnQubGVuZ3RoKTspO3MrK31yZXR1cm4gc30scy5iYWNrU3BhY2VIdG1sQ2hhcnM9ZnVuY3Rpb24odCxzLGUpe2lmKFwiaHRtbFwiIT09ZS5jb250ZW50VHlwZSlyZXR1cm4gczt2YXIgbj10LnN1YnN0cmluZyhzKS5jaGFyQXQoMCk7aWYoXCI+XCI9PT1ufHxcIjtcIj09PW4pe3ZhciBpO2ZvcihpPVwiPlwiPT09bj9cIjxcIjpcIiZcIjt0LnN1YnN0cmluZyhzLTEpLmNoYXJBdCgwKSE9PWkmJiEoLS1zPDApOyk7cy0tfXJldHVybiBzfSx0fSgpKSxpPS8qI19fUFVSRV9fKi9mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxzKXtlLmxvYWQodGhpcyxzLHQpLHRoaXMuYmVnaW4oKX12YXIgcz10LnByb3RvdHlwZTtyZXR1cm4gcy50b2dnbGU9ZnVuY3Rpb24oKXt0aGlzLnBhdXNlLnN0YXR1cz90aGlzLnN0YXJ0KCk6dGhpcy5zdG9wKCl9LHMuc3RvcD1mdW5jdGlvbigpe3RoaXMudHlwaW5nQ29tcGxldGV8fHRoaXMucGF1c2Uuc3RhdHVzfHwodGhpcy50b2dnbGVCbGlua2luZyghMCksdGhpcy5wYXVzZS5zdGF0dXM9ITAsdGhpcy5vcHRpb25zLm9uU3RvcCh0aGlzLmFycmF5UG9zLHRoaXMpKX0scy5zdGFydD1mdW5jdGlvbigpe3RoaXMudHlwaW5nQ29tcGxldGV8fHRoaXMucGF1c2Uuc3RhdHVzJiYodGhpcy5wYXVzZS5zdGF0dXM9ITEsdGhpcy5wYXVzZS50eXBld3JpdGU/dGhpcy50eXBld3JpdGUodGhpcy5wYXVzZS5jdXJTdHJpbmcsdGhpcy5wYXVzZS5jdXJTdHJQb3MpOnRoaXMuYmFja3NwYWNlKHRoaXMucGF1c2UuY3VyU3RyaW5nLHRoaXMucGF1c2UuY3VyU3RyUG9zKSx0aGlzLm9wdGlvbnMub25TdGFydCh0aGlzLmFycmF5UG9zLHRoaXMpKX0scy5kZXN0cm95PWZ1bmN0aW9uKCl7dGhpcy5yZXNldCghMSksdGhpcy5vcHRpb25zLm9uRGVzdHJveSh0aGlzKX0scy5yZXNldD1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD0hMCksY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXQpLHRoaXMucmVwbGFjZVRleHQoXCJcIiksdGhpcy5jdXJzb3ImJnRoaXMuY3Vyc29yLnBhcmVudE5vZGUmJih0aGlzLmN1cnNvci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY3Vyc29yKSx0aGlzLmN1cnNvcj1udWxsKSx0aGlzLnN0clBvcz0wLHRoaXMuYXJyYXlQb3M9MCx0aGlzLmN1ckxvb3A9MCx0JiYodGhpcy5pbnNlcnRDdXJzb3IoKSx0aGlzLm9wdGlvbnMub25SZXNldCh0aGlzKSx0aGlzLmJlZ2luKCkpfSxzLmJlZ2luPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLm9wdGlvbnMub25CZWdpbih0aGlzKSx0aGlzLnR5cGluZ0NvbXBsZXRlPSExLHRoaXMuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCh0aGlzKSx0aGlzLmluc2VydEN1cnNvcigpLHRoaXMuYmluZElucHV0Rm9jdXNFdmVudHMmJnRoaXMuYmluZEZvY3VzRXZlbnRzKCksdGhpcy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXswPT09dC5zdHJQb3M/dC50eXBld3JpdGUodC5zdHJpbmdzW3Quc2VxdWVuY2VbdC5hcnJheVBvc11dLHQuc3RyUG9zKTp0LmJhY2tzcGFjZSh0LnN0cmluZ3NbdC5zZXF1ZW5jZVt0LmFycmF5UG9zXV0sdC5zdHJQb3MpfSx0aGlzLnN0YXJ0RGVsYXkpfSxzLnR5cGV3cml0ZT1mdW5jdGlvbih0LHMpe3ZhciBlPXRoaXM7dGhpcy5mYWRlT3V0JiZ0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmZhZGVPdXRDbGFzcykmJih0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5mYWRlT3V0Q2xhc3MpLHRoaXMuY3Vyc29yJiZ0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKSk7dmFyIGk9dGhpcy5odW1hbml6ZXIodGhpcy50eXBlU3BlZWQpLHI9MTshMCE9PXRoaXMucGF1c2Uuc3RhdHVzP3RoaXMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cz1uLnR5cGVIdG1sQ2hhcnModCxzLGUpO3ZhciBpPTAsbz10LnN1YnN0cmluZyhzKTtpZihcIl5cIj09PW8uY2hhckF0KDApJiYvXlxcXlxcZCsvLnRlc3Qobykpe3ZhciBhPTE7YSs9KG89L1xcZCsvLmV4ZWMobylbMF0pLmxlbmd0aCxpPXBhcnNlSW50KG8pLGUudGVtcG9yYXJ5UGF1c2U9ITAsZS5vcHRpb25zLm9uVHlwaW5nUGF1c2VkKGUuYXJyYXlQb3MsZSksdD10LnN1YnN0cmluZygwLHMpK3Quc3Vic3RyaW5nKHMrYSksZS50b2dnbGVCbGlua2luZyghMCl9aWYoXCJgXCI9PT1vLmNoYXJBdCgwKSl7Zm9yKDtcImBcIiE9PXQuc3Vic3RyaW5nKHMrcikuY2hhckF0KDApJiYocisrLCEocytyPnQubGVuZ3RoKSk7KTt2YXIgdT10LnN1YnN0cmluZygwLHMpLHA9dC5zdWJzdHJpbmcodS5sZW5ndGgrMSxzK3IpLGM9dC5zdWJzdHJpbmcocytyKzEpO3Q9dStwK2Msci0tfWUudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS50b2dnbGVCbGlua2luZyghMSkscz49dC5sZW5ndGg/ZS5kb25lVHlwaW5nKHQscyk6ZS5rZWVwVHlwaW5nKHQscyxyKSxlLnRlbXBvcmFyeVBhdXNlJiYoZS50ZW1wb3JhcnlQYXVzZT0hMSxlLm9wdGlvbnMub25UeXBpbmdSZXN1bWVkKGUuYXJyYXlQb3MsZSkpfSxpKX0saSk6dGhpcy5zZXRQYXVzZVN0YXR1cyh0LHMsITApfSxzLmtlZXBUeXBpbmc9ZnVuY3Rpb24odCxzLGUpezA9PT1zJiYodGhpcy50b2dnbGVCbGlua2luZyghMSksdGhpcy5vcHRpb25zLnByZVN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsdGhpcykpO3ZhciBuPXQuc3Vic3RyaW5nKDAscys9ZSk7dGhpcy5yZXBsYWNlVGV4dChuKSx0aGlzLnR5cGV3cml0ZSh0LHMpfSxzLmRvbmVUeXBpbmc9ZnVuY3Rpb24odCxzKXt2YXIgZT10aGlzO3RoaXMub3B0aW9ucy5vblN0cmluZ1R5cGVkKHRoaXMuYXJyYXlQb3MsdGhpcyksdGhpcy50b2dnbGVCbGlua2luZyghMCksdGhpcy5hcnJheVBvcz09PXRoaXMuc3RyaW5ncy5sZW5ndGgtMSYmKHRoaXMuY29tcGxldGUoKSwhMT09PXRoaXMubG9vcHx8dGhpcy5jdXJMb29wPT09dGhpcy5sb29wQ291bnQpfHwodGhpcy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmJhY2tzcGFjZSh0LHMpfSx0aGlzLmJhY2tEZWxheSkpfSxzLmJhY2tzcGFjZT1mdW5jdGlvbih0LHMpe3ZhciBlPXRoaXM7aWYoITAhPT10aGlzLnBhdXNlLnN0YXR1cyl7aWYodGhpcy5mYWRlT3V0KXJldHVybiB0aGlzLmluaXRGYWRlT3V0KCk7dGhpcy50b2dnbGVCbGlua2luZyghMSk7dmFyIGk9dGhpcy5odW1hbml6ZXIodGhpcy5iYWNrU3BlZWQpO3RoaXMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cz1uLmJhY2tTcGFjZUh0bWxDaGFycyh0LHMsZSk7dmFyIGk9dC5zdWJzdHJpbmcoMCxzKTtpZihlLnJlcGxhY2VUZXh0KGkpLGUuc21hcnRCYWNrc3BhY2Upe3ZhciByPWUuc3RyaW5nc1tlLmFycmF5UG9zKzFdO2Uuc3RvcE51bT1yJiZpPT09ci5zdWJzdHJpbmcoMCxzKT9zOjB9cz5lLnN0b3BOdW0/KHMtLSxlLmJhY2tzcGFjZSh0LHMpKTpzPD1lLnN0b3BOdW0mJihlLmFycmF5UG9zKyssZS5hcnJheVBvcz09PWUuc3RyaW5ncy5sZW5ndGg/KGUuYXJyYXlQb3M9MCxlLm9wdGlvbnMub25MYXN0U3RyaW5nQmFja3NwYWNlZCgpLGUuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZCgpLGUuYmVnaW4oKSk6ZS50eXBld3JpdGUoZS5zdHJpbmdzW2Uuc2VxdWVuY2VbZS5hcnJheVBvc11dLHMpKX0saSl9ZWxzZSB0aGlzLnNldFBhdXNlU3RhdHVzKHQscywhMSl9LHMuY29tcGxldGU9ZnVuY3Rpb24oKXt0aGlzLm9wdGlvbnMub25Db21wbGV0ZSh0aGlzKSx0aGlzLmxvb3A/dGhpcy5jdXJMb29wKys6dGhpcy50eXBpbmdDb21wbGV0ZT0hMH0scy5zZXRQYXVzZVN0YXR1cz1mdW5jdGlvbih0LHMsZSl7dGhpcy5wYXVzZS50eXBld3JpdGU9ZSx0aGlzLnBhdXNlLmN1clN0cmluZz10LHRoaXMucGF1c2UuY3VyU3RyUG9zPXN9LHMudG9nZ2xlQmxpbmtpbmc9ZnVuY3Rpb24odCl7dGhpcy5jdXJzb3ImJih0aGlzLnBhdXNlLnN0YXR1c3x8dGhpcy5jdXJzb3JCbGlua2luZyE9PXQmJih0aGlzLmN1cnNvckJsaW5raW5nPXQsdD90aGlzLmN1cnNvci5jbGFzc0xpc3QuYWRkKFwidHlwZWQtY3Vyc29yLS1ibGlua1wiKTp0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKFwidHlwZWQtY3Vyc29yLS1ibGlua1wiKSkpfSxzLmh1bWFuaXplcj1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKnQvMikrdH0scy5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkPWZ1bmN0aW9uKCl7dGhpcy5zaHVmZmxlJiYodGhpcy5zZXF1ZW5jZT10aGlzLnNlcXVlbmNlLnNvcnQoZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5yYW5kb20oKS0uNX0pKX0scy5pbml0RmFkZU91dD1mdW5jdGlvbigpe3ZhciB0PXRoaXM7cmV0dXJuIHRoaXMuZWwuY2xhc3NOYW1lKz1cIiBcIit0aGlzLmZhZGVPdXRDbGFzcyx0aGlzLmN1cnNvciYmKHRoaXMuY3Vyc29yLmNsYXNzTmFtZSs9XCIgXCIrdGhpcy5mYWRlT3V0Q2xhc3MpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0LmFycmF5UG9zKyssdC5yZXBsYWNlVGV4dChcIlwiKSx0LnN0cmluZ3MubGVuZ3RoPnQuYXJyYXlQb3M/dC50eXBld3JpdGUodC5zdHJpbmdzW3Quc2VxdWVuY2VbdC5hcnJheVBvc11dLDApOih0LnR5cGV3cml0ZSh0LnN0cmluZ3NbMF0sMCksdC5hcnJheVBvcz0wKX0sdGhpcy5mYWRlT3V0RGVsYXkpfSxzLnJlcGxhY2VUZXh0PWZ1bmN0aW9uKHQpe3RoaXMuYXR0cj90aGlzLmVsLnNldEF0dHJpYnV0ZSh0aGlzLmF0dHIsdCk6dGhpcy5pc0lucHV0P3RoaXMuZWwudmFsdWU9dDpcImh0bWxcIj09PXRoaXMuY29udGVudFR5cGU/dGhpcy5lbC5pbm5lckhUTUw9dDp0aGlzLmVsLnRleHRDb250ZW50PXR9LHMuYmluZEZvY3VzRXZlbnRzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0aGlzLmlzSW5wdXQmJih0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLGZ1bmN0aW9uKHMpe3Quc3RvcCgpfSksdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLGZ1bmN0aW9uKHMpe3QuZWwudmFsdWUmJjAhPT10LmVsLnZhbHVlLmxlbmd0aHx8dC5zdGFydCgpfSkpfSxzLmluc2VydEN1cnNvcj1mdW5jdGlvbigpe3RoaXMuc2hvd0N1cnNvciYmKHRoaXMuY3Vyc29yfHwodGhpcy5jdXJzb3I9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksdGhpcy5jdXJzb3IuY2xhc3NOYW1lPVwidHlwZWQtY3Vyc29yXCIsdGhpcy5jdXJzb3Iuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwhMCksdGhpcy5jdXJzb3IuaW5uZXJIVE1MPXRoaXMuY3Vyc29yQ2hhcix0aGlzLmVsLnBhcmVudE5vZGUmJnRoaXMuZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jdXJzb3IsdGhpcy5lbC5uZXh0U2libGluZykpKX0sdH0oKTtleHBvcnR7aSBhcyBkZWZhdWx0fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVkLm1vZHVsZS5qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiLi9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgc2V0dXBQYWdlIGZyb20gXCIuL3NldHVwXCI7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vaG9tZXBhZ2VcIjtcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zb2xlLmxvZyhcIlRlc3QgYnVpbGRcIik7XG5zZXR1cFBhZ2UoKTtcbkhvbWVQYWdlKCk7XG5cbmNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYm94Om50aC1vZi10eXBlKDEpXCIpO1xuY29uc3QgYWJvdXRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYm94Om50aC1vZi10eXBlKDIpXCIpO1xuY29uc3QgcHJvamVjdHNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtYm94Om50aC1vZi10eXBlKDMpXCIpO1xuY29uc3QgcmVzdW1lTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJveDpudGgtb2YtdHlwZSg0KVwiKTtcblxuaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0SG9tZVBhZ2UoKTtcbn0pO1xuXG5hYm91dExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0YWJvdXQoKTtcbn0pO1xuXG5wcm9qZWN0c0xpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0cHJvamVjdCgpO1xufSk7XG5cbnJlc3VtZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0d2luZG93Lm9wZW4oXG5cdFx0XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzF4Q1pTbTRLM3RjN19ocUhoeklxUU1zNkVfQ3otNnFVZy92aWV3P3VzcD1zaGFyaW5nXCIsXG5cdCk7XG59KTtcbiJdLCJuYW1lcyI6WyJTaGFoaXIiLCJHaXRTb2NpYWwiLCJMaW5rZWQiLCJEb2NrZXIiLCJTcWwiLCJFY2xpcHNlIiwiTHVhIiwiVnVlIiwiQ3lwcmVzcyIsIlZzY29kZSIsIkMiLCJOcG0iLCJCYWJlbCIsIlByZXR0aWVyIiwiRXNsaW50IiwiV2VicGFjayIsIkplc3QiLCJHaXQiLCJQeXRob24iLCJKYXZhIiwiTGludXgiLCJIdG1sIiwiQ3NzIiwiSnMiLCJjcmVhdGVDYXJvdXNlbEl0ZW0iLCJpbWFnZSIsInRpdGxlIiwiY2Fyb3VzZWxJdGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2Fyb3VzZWxJbWFnZSIsInNyYyIsImFsdCIsImNhcm91c2VsVGl0bGUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiYnV0dG9ucyIsImNhcm91c2VsIiwicXVlcnlTZWxlY3RvciIsImJhY2tCdG4iLCJmb3J3YXJkQnRuIiwiaXNTY3JvbGxpbmciLCJzY3JvbGxEaXJlY3Rpb24iLCJzY3JvbGxTdGVwIiwiYW5pbWF0ZVNjcm9sbCIsInNjcm9sbERpc3RhbmNlIiwic2Nyb2xsTGVmdCIsIm9mZnNldFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzY3JvbGxSaWdodCIsInN0b3BTY3JvbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiYWJvdXQiLCJhYm91dFBhZ2UiLCJhYm91dENvbnRhaW5lciIsImFib3V0VGV4dENvbnRhaW5lciIsImFib3V0TWUiLCJhYm91dE1lU3BhbiIsImFib3V0TWVEaXYiLCJhYm91dE1lVGV4dERpdiIsInBhcmFncmFwaCIsImFib3V0TWVUZXh0IiwiYWJvdXRNZVRleHQyIiwiYWJvdXRNZVRleHQzIiwiYWJvdXRNZVRleHQ0Iiwic29jaWFsSWNvbnMiLCJnaXRMaW5rIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImdpdFNvY2lhbCIsImxpbmtlZExpbmsiLCJsaW5rZWQiLCJwaWN0dXJlIiwic2Vjb25kRGl2Iiwic2Vjb25kRGl2VGV4dCIsImhpZ2hsaWdodCIsImFuZCIsImNyZWF0ZVRleHROb2RlIiwiaGlnaGxpZ2h0VGV4dCIsInNlbnRlbmNlIiwidGV4dCIsImNhcm91c2VsQ29udGFpbmVyIiwiY2Fyb3VzZWxEaXYiLCJjYXJvdXNlbEl0ZW1zIiwiY2Fyb3VzZWxJdGVtMSIsImNhcm91c2VsSXRlbTIiLCJjYXJvdXNlbEl0ZW0zIiwiY2Fyb3VzZWxJdGVtNCIsImNhcm91c2VsSXRlbTUiLCJjYXJvdXNlbEl0ZW02IiwiY2Fyb3VzZWxJdGVtNyIsImNhcm91c2VsSXRlbTgiLCJjYXJvdXNlbEl0ZW05IiwiY2Fyb3VzZWxJdGVtMTAiLCJjYXJvdXNlbEl0ZW0xMSIsImNhcm91c2VsSXRlbTEyIiwiY2Fyb3VzZWxJdGVtMTMiLCJjYXJvdXNlbEl0ZW0xNCIsImNhcm91c2VsSXRlbTE1IiwiY2Fyb3VzZWxJdGVtMTYiLCJjYXJvdXNlbEl0ZW0xNyIsImNhcm91c2VsSXRlbTE4IiwiY2Fyb3VzZWxJdGVtMTkiLCJjYXJvdXNlbEl0ZW0yMCIsImNhcm91c2VsSXRlbTIxIiwibWFpbiIsImlubmVySFRNTCIsIlR5cGVkIiwiQ29tcHV0ZXIiLCJIYW5kIiwiSGFja2VyIiwiZHluYW1pY1RleHQiLCJ0eXBlZCIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJiYWNrU3BlZWQiLCJzdGFydERlbGF5IiwiYmFja0RlbGF5IiwibG9vcCIsInNob3dDdXJzb3IiLCJjdXJzb3JDaGFyIiwiYXR0ciIsImF1dG9JbnNlcnRDc3MiLCJjb250ZW50VHlwZSIsIkhvbWVQYWdlIiwibWFpbkNvbnRhaW5lciIsImZpcnN0QmxvY2tIb21lIiwidGV4dENvbnRhaW5lciIsInN1YlRleHRDb250YWluZXIiLCJmaXJzdFRleHRDb250YWluZXIiLCJmaXJzdFRleHQiLCJ3YXZlIiwic2Vjb25kVGV4dENvbnRhaW5lciIsInNlY29uZFRleHQiLCJuYW1lIiwidHlwZWRUZXh0Q29udGFpbmVyIiwidHlwZWRUZXh0IiwiaWQiLCJpbWFnZUNvbnRhaW5lciIsInNlY29uZEJsb2NrSG9tZSIsInNlY29uZEJsb2NrVGV4dENvbnRhaW5lciIsInRleHREaXYiLCJzcGFuIiwic3ViRGl2Iiwic3ViVGV4dEFmdGVySGlnaGxpZ2h0Iiwic3ViVGV4dCIsInN1YnN1YlRleHQiLCJoYWNrZXIiLCJzb2NpYWxCbG9jayIsInNvY2lhbFRleHREaXYiLCJzb2NpYWxUZXh0IiwidGV4dEJlZm9yZSIsInRleHRBZnRlciIsInNwYW5Db250ZW50Iiwic29jaWFsU3ViVGV4dCIsIlRvZG8iLCJCYXR0bGVzaGlwIiwiV2VhdGhlciIsIlRpY3RhYyIsIkNhbGN1bGF0b3IiLCJSZXN0YXVyYW50IiwiRXRjaCIsImNyZWF0ZVByb2plY3RJdGVtIiwiZGVzY3JpcHRpb24iLCJsaXZlRGVtbyIsInNvdXJjZUNvZGUiLCJwcm9qZWN0SXRlbSIsInByb2plY3RJbWFnZSIsInByb2plY3RJdGVtRGl2IiwicHJvamVjdFRpdGxlIiwicHJvamVjdERlc2NyaXB0aW9uIiwicHJvamVjdExpbmtEaXYiLCJwcm9qZWN0TGl2ZURlbW8iLCJwcm9qZWN0U291cmNlQ29kZSIsInByb2plY3QiLCJwcm9qZWN0RGl2IiwicHJvamVjdENvbnRhaW5lciIsInRvZG8iLCJiYXR0bGVzaGlwIiwid2VhdGhlciIsInRpY3RhYyIsImNhbGN1bGF0b3IiLCJyZXN0YXVyYW50IiwiZXRjaCIsIkljb24iLCJIb21lIiwiQWJvdXQiLCJDb2RlIiwiRG9jIiwiR2l0SHViIiwiaGFtYnVyZ2VySW1nIiwiY3JlYXRlTmF2QmFyIiwiYmFyIiwibG9nQ29udGFpbmVyIiwibG9nb0JveCIsImxvZ28iLCJsb2dvTGluayIsImxvZ29UZXh0IiwibG9nb0xpbmsyIiwibmF2TGlua3MiLCJob21lQm94IiwiaG9tZUxpbmsiLCJob21lSWNvbiIsIm1lbnVMaW5rYm94IiwibWVudUxpbmsiLCJtZW51SWNvbiIsImNvbnRhY3RMaW5rYm94IiwiY29udGFjdExpbmsiLCJjb250YWN0SWNvbiIsIkFib3V0TGlua2JveCIsIkFib3V0TGluayIsIkFib3V0SWNvbiIsImhhbWJ1cmdlciIsImhhbWJ1cmdlckljb24iLCJoYW1idXJnZXJNZW51IiwiaGFtYnVyZ2VyTWVudUhvbWUiLCJoYW1idXJnZXJNZW51QWJvdXQiLCJoYW1idXJnZXJNZW51UHJvamVjdHMiLCJoYW1idXJnZXJNZW51UmVzdW1lIiwiY29udGVudCIsImNyZWF0ZUZvb3RlciIsImZvb3RlciIsImdpdEh1YlByb2ZpbGUiLCJnaXRIdWJQcm9maWxlSW1nIiwiZ2l0SHViUHJvZmlsZVRleHQiLCJhdFN5bWJvbCIsInVzZXJuYW1lIiwic2VwZXJhdG9yIiwiZ2l0SHViUmVwbyIsInNldHVwUGFnZSIsIndpbmRvdyIsIm5hdkJhciIsInNjcm9sbFkiLCJyZW1vdmUiLCJjb250YWlucyIsImNvbnNvbGUiLCJsb2ciLCJhYm91dExpbmsiLCJwcm9qZWN0c0xpbmsiLCJyZXN1bWVMaW5rIiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=