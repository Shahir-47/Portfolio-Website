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







function createProjectItem(image, title, description) {
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
  projectLiveDemo.href = "#";
  projectLiveDemo.textContent = "Live Demo";
  projectLinkDiv.appendChild(projectLiveDemo);
  var projectSourceCode = document.createElement("a");
  projectSourceCode.href = "#";
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
  var todo = createProjectItem(_img_todo_png__WEBPACK_IMPORTED_MODULE_0__, "Todo List", "A simple todo list app made with vanilla javascript");
  var battleship = createProjectItem(_img_battleship_png__WEBPACK_IMPORTED_MODULE_1__, "Battleship", "A battleship game made with vanilla javascript");
  var weather = createProjectItem(_img_weather_png__WEBPACK_IMPORTED_MODULE_2__, "Weather App", "A weather app made with vanilla javascript");
  var tictac = createProjectItem(_img_tictac_png__WEBPACK_IMPORTED_MODULE_3__, "Tic Tac Toe", "A tic tac toe game made with vanilla javascript");
  var calculator = createProjectItem(_img_calculator_png__WEBPACK_IMPORTED_MODULE_4__, "Calculator", "A calculator made with vanilla javascript");
  var restaurant = createProjectItem(_img_restaurant_png__WEBPACK_IMPORTED_MODULE_5__, "Restaurant Page", "A restaurant page made with vanilla javascript");
  var etch = createProjectItem(_img_etch_png__WEBPACK_IMPORTED_MODULE_6__, "Etch a Sketch", "A etch a sketch made with vanilla javascript");
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
	width: 3rem;
	height: auto;
}

.project-container {
	display: flex;
	flex-direction: column;
	align-items: stretch;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n\tcolor: #e0e0e0;\n\tbackground-color: #000000;\n\tbackground-image: url(../img/background.jpg);\n\tbackground-size: contain !important;\n\tbackground-repeat: no-repeat !important;\n\tfont-family: sans-serif;\n}\n\ndiv#content {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.nav-bar {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tpadding: 1.5rem 3rem;\n\ttransition: all 0.3s ease;\n\tz-index: 999;\n\tbackground-color: transparent; /* No background initially */\n\tbackdrop-filter: blur(0); /* No blur initially */\n\tbox-shadow:\n\t\t0 4px 6px -1px rgba(0, 0, 0, 0.1),\n\t\t0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.nav-bar-scrolled {\n\tbackdrop-filter: blur(10px); /* Adjust the blur value as needed */\n\tbackground-color: rgba(\n\t\t79,\n\t\t209,\n\t\t197,\n\t\t0.15\n\t); /* RGBA color for translucent teal */\n}\n\n.logo-box {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n}\n\n.logo-box img {\n\twidth: 3rem;\n\theight: auto;\n\tcursor: pointer;\n}\n\n.log-container:hover {\n\tcursor: pointer;\n}\n\n.logo-box a {\n\ttext-decoration: none;\n}\n\n.log-container:hover:after {\n\twidth: 100%;\n}\n\n.log-container:hover .logo-box a h1 {\n\tcolor: #ffffffff;\n}\n\n.log-container:hover .logo-box img {\n\tfilter: brightness(3);\n}\n\n.log-container:after {\n\tbackground: #4fd1c5;\n\tborder-radius: 16px;\n\tbottom: 1px;\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 5px;\n\tleft: 0;\n\tposition: relative;\n\ttransition: all 0.3s ease-out 0s;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.logo-box a h1 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcursor: pointer;\n\tmargin: 0;\n}\n\n.nav-links {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 2rem;\n}\n\n.nav-links a {\n\tcolor: #e0e0e0;\n\tfont-size: 1.5rem;\n\tfont-weight: 100;\n\ttext-decoration: none;\n}\n\n.nav-links a:hover {\n\tcolor: #ffffffff;\n}\n\n.nav-links .nav-box:hover {\n\tcursor: pointer;\n}\n\n.nav-links .nav-box:hover a {\n\tcolor: #ffffffff;\n}\n\n.nav-links .nav-box:hover img {\n\tfilter: brightness(3);\n}\n\n.nav-links .nav-box:hover:after {\n\twidth: 100%;\n}\n\n.nav-links .nav-box {\n\tposition: relative;\n}\n\n.nav-links .nav-box:after {\n\tbackground: #4fd1c5;\n\tborder-radius: 16px;\n\tbottom: -5px;\n\tcontent: \"\";\n\tdisplay: block;\n\theight: 5px;\n\tleft: 0;\n\tposition: absolute;\n\ttransition: all 0.3s ease-out 0s;\n\twidth: 0;\n\tz-index: -1;\n}\n\n.main-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 7rem;\n}\n\n.first-block-home {\n\tdisplay: grid;\n\tjustify-items: center;\n\talign-items: center;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tpadding: 0 3rem;\n\tgap: 1rem;\n}\n\n.text-container {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.sub-text-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.image-container {\n\twidth: 75%;\n}\n\n.computer {\n\twidth: 100%;\n\theight: auto;\n}\n\n.first-text-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 1rem;\n}\n\n.typed-text-container {\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: 2rem;\n}\n\n#typed-text {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcolor: #4fd1c5;\n}\n\n.typed-cursor {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tcolor: #4fd1c5;\n\tanimation: blink 0.7s infinite;\n}\n\n.nav-box {\n\tpadding: 0.25rem 0rem;\n}\n\n.wave {\n\twidth: 2rem;\n\theight: auto;\n\tanimation-name: wave-animation;\n\tanimation-duration: 2.5s;\n\tanimation-iteration-count: infinite;\n\ttransform-origin: 70% 70%;\n\tdisplay: inline-block;\n\tfilter: brightness(0.9);\n}\n\n@keyframes wave-animation {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t10% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t20% {\n\t\ttransform: rotate(12deg);\n\t}\n\t30% {\n\t\ttransform: rotate(-10deg);\n\t}\n\t40% {\n\t\ttransform: rotate(9deg);\n\t}\n\t50% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(0deg);\n\t}\n}\n\n.name {\n\tfont-size: 3rem;\n\tfont-weight: 700;\n\tcolor: #4fd1c5;\n}\n\n.nav-box {\n\tdisplay: flex;\n\tflex-direction: row-reverse;\n\tgap: 0.5rem;\n\talign-items: center;\n}\n\n.nav-box img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n.second-text-container h5 {\n\tmargin: 0;\n}\n\n.first-text-container h3 {\n\tfont-weight: 500;\n\tfont-size: 2rem;\n\tmargin: 0;\n}\n\n.second-text-container h5 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n}\n\n.second-block-home {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 0 3rem;\n\tmargin: 0 5rem;\n\tgap: 5rem;\n}\n\n.second-block-text-container {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tjustify-items: center;\n\talign-items: center;\n}\n\n.hacker {\n\twidth: 35%;\n\theight: auto;\n}\n\n.text-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 3rem;\n}\n\n.text-div h3 {\n\talign-self: center;\n\tfont-size: 1.9rem;\n\tmargin: 0;\n}\n\n.highlight,\n.text-div h3 span {\n\tcolor: #4fd1c5;\n}\n\n.sub-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.sub-text {\n\tfont-weight: 600;\n\tmargin: 0;\n}\n\n.social-icons img {\n\twidth: 2.5rem;\n\theight: auto;\n\tcursor: pointer;\n\ttransition: all 0.3s ease;\n\tborder-radius: 50%;\n}\n\n.social-icons img:hover {\n\tfilter: invert(1);\n\tbox-shadow: 0 4px 8px 0 rgba(79, 209, 197, 0.5);\n}\n\n.social-text-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n\talign-items: center;\n}\n\n.social-text-div h3 {\n\tfont-size: 2rem;\n\tfont-weight: 500;\n}\n\n.social-text-div * {\n\tmargin: 0;\n}\n\n.social-icons {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 2rem;\n}\n\n.social-sub-text {\n\tfont-size: 0.8rem;\n\tfont-weight: 550;\n}\n\n.social-block {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.social-sub-text span {\n\tcolor: #4fd1c5;\n}\n\n/* --------------------------------------- Footer ------------------------------------------------------- */\n\nfooter {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n\theight: 2.5rem;\n\tmargin-top: 2rem;\n\tpadding: 0.25rem 3rem;\n\tbackground-color: #4fd1c5;\n}\n\nfooter a {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\ttext-decoration: none;\n\tfont-size: 1.3rem;\n\tfont-weight: 100;\n\tcolor: #fafafa;\n\ttransition: all 0.3s ease;\n}\n\nfooter p {\n\tmargin: 0.5rem 0;\n}\n\nfooter a:hover,\nfooter a:active {\n\tcolor: #b02e39;\n}\n\nfooter a img {\n\tborder-radius: 50%;\n\ttransition: all 0.3s ease;\n}\n\nfooter a:hover img,\nfooter a:active img {\n\tfilter: invert(1);\n\tbox-shadow: 0 4px 8px 0 rgba(79, 209, 197, 0.5);\n}\n\n.at-symbol {\n\tfont-weight: 900;\n}\n\nfooter img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n/* Styles the scrollbar track */\n::-webkit-scrollbar-track {\n\tbackground-color: #2c3e50; /* A darker shade for contrast */\n}\n\n/* Styles the scrollbar handle */\n::-webkit-scrollbar-thumb {\n\tbackground-color: #4fd1c5; /* The color you provided for the handle */\n\tborder-radius: 10px; /* Rounded corners for the handle */\n}\n\n/* Styles the scrollbar itself (including the track) */\n::-webkit-scrollbar {\n\twidth: 12px; /* Adjust to the size you prefer */\n}\n\n/* Optional: styles the scrollbar handle on hover */\n::-webkit-scrollbar-thumb:hover {\n\tbackground-color: #3a9d9b; /* A slightly darker shade of the handle color for hover */\n}\n\n/* Firefox */\nhtml {\n\tscrollbar-color: #4fd1c5 #2c3e50;\n\tscrollbar-width: thin; /* You can use 'auto' or 'thin' */\n}\n\n.about-page {\n\tpadding: 0rem 3rem;\n\tpadding-bottom: 2rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 5rem;\n}\n\n.about-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n}\n\n.about-text-container {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.about-me span {\n\tcolor: #4fd1c5;\n}\n\n.about-me-div {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n\tjustify-items: center;\n}\n\n.about-me-picture {\n\twidth: 75%;\n\theight: auto;\n}\n\n.about-me-text-div {\n\tfont-size: 1.1rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n}\n\n.about-me-text:nth-of-type(1) {\n\tmargin-top: 0.5rem;\n}\n\n/* --------------------------------------- End of Footer styles ------------------------------------------------------- */\n\n.carousel-item img {\n\twidth: 3rem;\n\theight: auto;\n}\n\n.second-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 3rem;\n\tpadding: 0 3rem;\n}\n\n.second-div-text {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 1rem;\n}\n\n.second-div-text p {\n\tfont-size: 2rem;\n\tmargin: 0;\n\tfont-weight: 900;\n}\n\n.carousel-div {\n\tdisplay: flex;\n\tborder: 3px solid #dddddd;\n\tborder-radius: 10px;\n}\n\n.back-btn,\n.forward-btn {\n\tfont-size: 2.5rem;\n\tcolor: #15202b;\n\tfont-weight: 900;\n\tbackground-color: #dddddd;\n\tborder: none;\n\tcursor: pointer;\n}\n\n.carousel {\n\tdisplay: flex;\n\toverflow-x: auto;\n\tgap: 2rem;\n\tpadding: 1rem;\n\ttransform: rotateX(180deg);\n\t-ms-transform: rotateX(180deg);\n\t-webkit-transform: rotateX(180deg);\n\tmargin-top: 0.2rem;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n}\n\n.carousel-item {\n\tmin-width: 7rem;\n\tmin-height: 10rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 1rem;\n\ttransform: rotateX(180deg);\n\t-ms-transform: rotateX(180deg);\n\t-webkit-transform: rotateX(180deg);\n\tborder: 1px solid #dddddd;\n\tborder-radius: 15px;\n\tbackground-color: #ffffff17;\n}\n\n.carousel-item p {\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.carousel-items {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 2rem;\n}\n\n/* Style the scrollbar */\n.carousel::-webkit-scrollbar {\n\twidth: 5px; /* Set the width of the scrollbar */\n\theight: 10px; /* Set the height of the scrollbar */\n}\n\n.carousel::-webkit-scrollbar-thumb {\n\tbackground-color: #4fd1c5; /* Color of the scrollbar thumb */\n\tborder-radius: 5px; /* Rounded corners for the scrollbar thumb */\n}\n\n.carousel::-webkit-scrollbar-thumb:hover {\n\tbackground-color: #4fd1c5; /* Color of the scrollbar thumb on hover */\n}\n\n.carousel::-webkit-scrollbar-track {\n\tbackground-color: transparent; /* Color of the scrollbar track */\n}\n\n.carousel::-webkit-scrollbar-corner {\n\tbackground-color: transparent; /* Color of the scrollbar corner */\n}\n\n.project-div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2rem;\n\tpadding: 0 3rem;\n}\n\n.project-div h1 {\n\tcolor: #4fd1c5;\n}\n\n.project-item img {\n\twidth: 3rem;\n\theight: auto;\n}\n\n.project-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n}\n"],"sourceRoot":""}]);
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
// const resumeLink = document.querySelector(".nav-box:nth-of-type(4)");

homeLink.addEventListener("click", function () {
  (0,_homepage__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
aboutLink.addEventListener("click", function () {
  (0,_about__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
projectsLink.addEventListener("click", function () {
  (0,_project__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNNO0FBQ047QUFDQTtBQUNOO0FBQ1E7QUFDUjtBQUNBO0FBQ1E7QUFDRjtBQUNWO0FBQ0k7QUFDSTtBQUNNO0FBQ0o7QUFDRTtBQUNOO0FBQ0Y7QUFDTTtBQUNKO0FBQ0U7QUFDRjtBQUNGO0FBQ0Y7QUFFOUIsU0FBU3dCLGtCQUFrQkEsQ0FBQ0MsS0FBSyxFQUFFQyxLQUFLLEVBQUU7RUFDekMsSUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbERGLFlBQVksQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBRTNDLElBQU1DLGFBQWEsR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ25ERyxhQUFhLENBQUNDLEdBQUcsR0FBR1IsS0FBSztFQUN6Qk8sYUFBYSxDQUFDRSxHQUFHLEdBQUdSLEtBQUs7RUFDekJNLGFBQWEsQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFFN0MsSUFBTUksYUFBYSxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDakRNLGFBQWEsQ0FBQ0wsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFDN0NJLGFBQWEsQ0FBQ0MsV0FBVyxHQUFHVixLQUFLO0VBRWpDQyxZQUFZLENBQUNVLFdBQVcsQ0FBQ0wsYUFBYSxDQUFDO0VBQ3ZDTCxZQUFZLENBQUNVLFdBQVcsQ0FBQ0YsYUFBYSxDQUFDO0VBRXZDLE9BQU9SLFlBQVk7QUFDcEI7O0FBRUE7QUFDQSxTQUFTVyxPQUFPQSxDQUFBLEVBQUc7RUFDbEIsSUFBTUMsUUFBUSxHQUFHWCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFDcEQsSUFBTUMsT0FBTyxHQUFHYixRQUFRLENBQUNZLGFBQWEsQ0FBQyxXQUFXLENBQUM7RUFDbkQsSUFBTUUsVUFBVSxHQUFHZCxRQUFRLENBQUNZLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFDekQsSUFBSUcsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO0VBQ3pCLElBQUlDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUN6QixJQUFNQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0VBRXRCO0VBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDM0I7SUFDQSxJQUFJLENBQUNILFdBQVcsRUFBRTs7SUFFbEI7SUFDQSxJQUFNSSxjQUFjLEdBQUdILGVBQWUsS0FBSyxDQUFDLEdBQUcsQ0FBQ0MsVUFBVSxHQUFHQSxVQUFVO0lBQ3ZFTixRQUFRLENBQUNTLFVBQVUsSUFBSUQsY0FBYzs7SUFFckM7SUFDQSxJQUNFSCxlQUFlLEtBQUssQ0FBQyxJQUFJTCxRQUFRLENBQUNTLFVBQVUsR0FBRyxDQUFDLElBQ2hESixlQUFlLEtBQUssQ0FBQyxJQUNyQkwsUUFBUSxDQUFDUyxVQUFVLEdBQUdULFFBQVEsQ0FBQ1UsV0FBVyxHQUFHVixRQUFRLENBQUNXLFdBQVksRUFDbEU7TUFDRDtNQUNBQyxxQkFBcUIsQ0FBQ0wsYUFBYSxDQUFDO0lBQ3JDLENBQUMsTUFBTTtNQUNOO01BQ0FILFdBQVcsR0FBRyxLQUFLO0lBQ3BCO0VBQ0QsQ0FBQzs7RUFFRDtFQUNBLElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDeEI7SUFDQSxJQUFJLENBQUNMLFdBQVcsRUFBRTtNQUNqQkMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ3JCRCxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7TUFDcEJHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQjtFQUNELENBQUM7O0VBRUQ7RUFDQSxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3pCO0lBQ0EsSUFBSSxDQUFDVCxXQUFXLEVBQUU7TUFDakJDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztNQUNyQkQsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDO01BQ3BCRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEI7RUFDRCxDQUFDOztFQUVEO0VBQ0EsSUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUN4QlYsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDO0VBQ3RCLENBQUM7O0VBRUQ7RUFDQUYsT0FBTyxDQUFDYSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVOLFVBQVUsQ0FBQyxDQUFDLENBQUM7RUFDcERQLE9BQU8sQ0FBQ2EsZ0JBQWdCLENBQUMsWUFBWSxFQUFFRCxVQUFVLENBQUMsQ0FBQyxDQUFDO0VBQ3BEWCxVQUFVLENBQUNZLGdCQUFnQixDQUFDLFlBQVksRUFBRUYsV0FBVyxDQUFDLENBQUMsQ0FBQztFQUN4RFYsVUFBVSxDQUFDWSxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVELFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDeEQ7QUFFQSxTQUFTRSxLQUFLQSxDQUFBLEVBQUc7RUFDaEIsSUFBTUMsU0FBUyxHQUFHNUIsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQy9DMkIsU0FBUyxDQUFDMUIsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0VBRXJDLElBQU0wQixjQUFjLEdBQUc3QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDcEQ0QixjQUFjLENBQUMzQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUUvQyxJQUFNMkIsa0JBQWtCLEdBQUc5QixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDeEQ2QixrQkFBa0IsQ0FBQzVCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0VBQ3hELElBQU00QixPQUFPLEdBQUcvQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDNUM4QixPQUFPLENBQUN2QixXQUFXLEdBQUcsUUFBUTtFQUM5QixJQUFNd0IsV0FBVyxHQUFHaEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQ2xEK0IsV0FBVyxDQUFDeEIsV0FBVyxHQUFHLElBQUk7RUFDOUJ1QixPQUFPLENBQUN0QixXQUFXLENBQUN1QixXQUFXLENBQUM7RUFDaENELE9BQU8sQ0FBQzdCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUNqQzJCLGtCQUFrQixDQUFDckIsV0FBVyxDQUFDc0IsT0FBTyxDQUFDO0VBQ3ZDRixjQUFjLENBQUNwQixXQUFXLENBQUNxQixrQkFBa0IsQ0FBQztFQUU5QyxJQUFNRyxVQUFVLEdBQUdqQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDaERnQyxVQUFVLENBQUMvQixTQUFTLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7RUFFeEMsSUFBTStCLGNBQWMsR0FBR2xDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNwRGlDLGNBQWMsQ0FBQ2hDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0VBRWpELElBQU1nQyxTQUFTLEdBQUduQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDL0NrQyxTQUFTLENBQUNqQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFFcEMsSUFBTWlDLFdBQVcsR0FBR3BDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMvQ21DLFdBQVcsQ0FBQ2xDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUMxQ2lDLFdBQVcsQ0FBQzVCLFdBQVcsR0FDdEIsZ2hCQUFnaEI7RUFFamhCLElBQU02QixZQUFZLEdBQUdyQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDaERvQyxZQUFZLENBQUNuQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7RUFDM0NrQyxZQUFZLENBQUM3QixXQUFXLGlyQkFBd3FCO0VBRWhzQixJQUFNOEIsWUFBWSxHQUFHdEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ2hEcUMsWUFBWSxDQUFDcEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0VBQzNDbUMsWUFBWSxDQUFDOUIsV0FBVyxHQUN2QiwwUkFBMFI7RUFFM1IsSUFBTStCLFlBQVksR0FBR3ZDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNoRHNDLFlBQVksQ0FBQ3JDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUMzQ29DLFlBQVksQ0FBQy9CLFdBQVcsR0FDdkIsK1NBQStTO0VBRWhUMkIsU0FBUyxDQUFDMUIsV0FBVyxDQUFDMkIsV0FBVyxDQUFDO0VBQ2xDRCxTQUFTLENBQUMxQixXQUFXLENBQUM0QixZQUFZLENBQUM7RUFDbkNGLFNBQVMsQ0FBQzFCLFdBQVcsQ0FBQzZCLFlBQVksQ0FBQztFQUNuQ0gsU0FBUyxDQUFDMUIsV0FBVyxDQUFDOEIsWUFBWSxDQUFDO0VBQ25DTCxjQUFjLENBQUN6QixXQUFXLENBQUMwQixTQUFTLENBQUM7RUFFckMsSUFBTUssV0FBVyxHQUFHeEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2pEdUMsV0FBVyxDQUFDdEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBRXpDLElBQU1zQyxPQUFPLEdBQUd6QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDM0N3QyxPQUFPLENBQUNDLElBQUksR0FBRyw4QkFBOEI7RUFDN0NELE9BQU8sQ0FBQ0UsTUFBTSxHQUFHLFFBQVE7RUFDekJGLE9BQU8sQ0FBQ0csR0FBRyxHQUFHLHFCQUFxQjtFQUNuQyxJQUFNQyxTQUFTLEdBQUc3QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDL0M0QyxTQUFTLENBQUN4QyxHQUFHLEdBQUdoQywrQ0FBUztFQUN6QndFLFNBQVMsQ0FBQ3ZDLEdBQUcsR0FBRyxRQUFRO0VBQ3hCdUMsU0FBUyxDQUFDM0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQ3RDc0MsT0FBTyxDQUFDaEMsV0FBVyxDQUFDb0MsU0FBUyxDQUFDO0VBQzlCTCxXQUFXLENBQUMvQixXQUFXLENBQUNnQyxPQUFPLENBQUM7RUFFaEMsSUFBTUssVUFBVSxHQUFHOUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzlDNkMsVUFBVSxDQUFDSixJQUFJLEdBQUcsdUNBQXVDO0VBQ3pESSxVQUFVLENBQUNILE1BQU0sR0FBRyxRQUFRO0VBQzVCRyxVQUFVLENBQUNGLEdBQUcsR0FBRyxxQkFBcUI7RUFDdEMsSUFBTUcsTUFBTSxHQUFHL0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzVDOEMsTUFBTSxDQUFDMUMsR0FBRyxHQUFHL0IsNENBQU07RUFDbkJ5RSxNQUFNLENBQUN6QyxHQUFHLEdBQUcsVUFBVTtFQUN2QnlDLE1BQU0sQ0FBQzdDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztFQUNuQzJDLFVBQVUsQ0FBQ3JDLFdBQVcsQ0FBQ3NDLE1BQU0sQ0FBQztFQUM5QlAsV0FBVyxDQUFDL0IsV0FBVyxDQUFDcUMsVUFBVSxDQUFDO0VBRW5DWixjQUFjLENBQUN6QixXQUFXLENBQUMrQixXQUFXLENBQUM7RUFDdkNQLFVBQVUsQ0FBQ3hCLFdBQVcsQ0FBQ3lCLGNBQWMsQ0FBQztFQUV0QyxJQUFNYyxPQUFPLEdBQUdoRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDN0MrQyxPQUFPLENBQUMzQyxHQUFHLEdBQUdqQyw0Q0FBTTtFQUNwQjRFLE9BQU8sQ0FBQzFDLEdBQUcsR0FBRyxRQUFRO0VBQ3RCMEMsT0FBTyxDQUFDOUMsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7RUFDekM4QixVQUFVLENBQUN4QixXQUFXLENBQUN1QyxPQUFPLENBQUM7RUFFL0JuQixjQUFjLENBQUNwQixXQUFXLENBQUN3QixVQUFVLENBQUM7RUFDdENMLFNBQVMsQ0FBQ25CLFdBQVcsQ0FBQ29CLGNBQWMsQ0FBQztFQUVyQyxJQUFNb0IsU0FBUyxHQUFHakQsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQy9DZ0QsU0FBUyxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0VBRXJDLElBQU0rQyxhQUFhLEdBQUdsRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbkRpRCxhQUFhLENBQUNoRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUU5QyxJQUFNZ0QsU0FBUyxHQUFHbkQsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQ2hEa0QsU0FBUyxDQUFDakQsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0VBQ3BDZ0QsU0FBUyxDQUFDM0MsV0FBVyxHQUFHLE9BQU87RUFFL0IsSUFBTTRDLEdBQUcsR0FBR3BELFFBQVEsQ0FBQ3FELGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFFM0MsSUFBTUMsYUFBYSxHQUFHdEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQ3BEcUQsYUFBYSxDQUFDOUMsV0FBVyxHQUFHLGVBQWU7RUFDM0M4QyxhQUFhLENBQUNwRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFFeEMsSUFBTW9ELFFBQVEsR0FBR3ZELFFBQVEsQ0FBQ3FELGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztFQUU3RCxJQUFNRyxJQUFJLEdBQUd4RCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDeEN1RCxJQUFJLENBQUN0RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFDMUJxRCxJQUFJLENBQUMvQyxXQUFXLENBQUMwQyxTQUFTLENBQUM7RUFDM0JLLElBQUksQ0FBQy9DLFdBQVcsQ0FBQzJDLEdBQUcsQ0FBQztFQUNyQkksSUFBSSxDQUFDL0MsV0FBVyxDQUFDNkMsYUFBYSxDQUFDO0VBQy9CRSxJQUFJLENBQUMvQyxXQUFXLENBQUM4QyxRQUFRLENBQUM7RUFDMUJMLGFBQWEsQ0FBQ3pDLFdBQVcsQ0FBQytDLElBQUksQ0FBQztFQUMvQlAsU0FBUyxDQUFDeEMsV0FBVyxDQUFDeUMsYUFBYSxDQUFDO0VBRXBDLElBQU1PLGlCQUFpQixHQUFHekQsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3ZEd0QsaUJBQWlCLENBQUN2RCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztFQUVyRCxJQUFNdUQsV0FBVyxHQUFHMUQsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2pEeUQsV0FBVyxDQUFDeEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBRXpDLElBQU1VLE9BQU8sR0FBR2IsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQ2hEWSxPQUFPLENBQUNYLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUNqQ1UsT0FBTyxDQUFDTCxXQUFXLEdBQUcsR0FBRztFQUN6QmtELFdBQVcsQ0FBQ2pELFdBQVcsQ0FBQ0ksT0FBTyxDQUFDO0VBRWhDLElBQU1GLFFBQVEsR0FBR1gsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzlDVSxRQUFRLENBQUNULFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUVsQyxJQUFNd0QsYUFBYSxHQUFHM0QsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ25EMEQsYUFBYSxDQUFDekQsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFFN0MsSUFBTXlELGFBQWEsR0FBR2hFLGtCQUFrQixDQUFDSCwyQ0FBSSxFQUFFLE1BQU0sQ0FBQztFQUN0RCxJQUFNb0UsYUFBYSxHQUFHakUsa0JBQWtCLENBQUNGLDBDQUFHLEVBQUUsS0FBSyxDQUFDO0VBQ3BELElBQU1vRSxhQUFhLEdBQUdsRSxrQkFBa0IsQ0FBQ0QseUNBQUUsRUFBRSxZQUFZLENBQUM7RUFDMUQsSUFBTW9FLGFBQWEsR0FBR25FLGtCQUFrQixDQUFDUCwwQ0FBRyxFQUFFLEtBQUssQ0FBQztFQUNwRCxJQUFNMkUsYUFBYSxHQUFHcEUsa0JBQWtCLENBQUNiLDBDQUFHLEVBQUUsS0FBSyxDQUFDO0VBQ3BELElBQU1rRixhQUFhLEdBQUdyRSxrQkFBa0IsQ0FBQ2YsNENBQU0sRUFBRSxTQUFTLENBQUM7RUFDM0QsSUFBTXFGLGFBQWEsR0FBR3RFLGtCQUFrQixDQUFDckIsNENBQU0sRUFBRSxRQUFRLENBQUM7RUFDMUQsSUFBTTRGLGFBQWEsR0FBR3ZFLGtCQUFrQixDQUFDSiw0Q0FBSyxFQUFFLE9BQU8sQ0FBQztFQUN4RCxJQUFNNEUsYUFBYSxHQUFHeEUsa0JBQWtCLENBQUNOLDZDQUFNLEVBQUUsUUFBUSxDQUFDO0VBQzFELElBQU0rRSxjQUFjLEdBQUd6RSxrQkFBa0IsQ0FBQ0wsMkNBQUksRUFBRSxNQUFNLENBQUM7RUFDdkQsSUFBTStFLGNBQWMsR0FBRzFFLGtCQUFrQixDQUFDcEIseUNBQUcsRUFBRSxLQUFLLENBQUM7RUFDckQsSUFBTStGLGNBQWMsR0FBRzNFLGtCQUFrQixDQUFDVCw4Q0FBTyxFQUFFLFNBQVMsQ0FBQztFQUM3RCxJQUFNcUYsY0FBYyxHQUFHNUUsa0JBQWtCLENBQUNqQix5Q0FBRyxFQUFFLFFBQVEsQ0FBQztFQUN4RCxJQUFNOEYsY0FBYyxHQUFHN0Usa0JBQWtCLENBQUNaLDRDQUFLLEVBQUUsT0FBTyxDQUFDO0VBQ3pELElBQU0wRixjQUFjLEdBQUc5RSxrQkFBa0IsQ0FBQ1IsMkNBQUksRUFBRSxNQUFNLENBQUM7RUFDdkQsSUFBTXVGLGNBQWMsR0FBRy9FLGtCQUFrQixDQUFDWCwrQ0FBUSxFQUFFLFVBQVUsQ0FBQztFQUMvRCxJQUFNMkYsY0FBYyxHQUFHaEYsa0JBQWtCLENBQUNWLDZDQUFNLEVBQUUsUUFBUSxDQUFDO0VBQzNELElBQU0yRixjQUFjLEdBQUdqRixrQkFBa0IsQ0FBQ2hCLDZDQUFPLEVBQUUsU0FBUyxDQUFDO0VBQzdELElBQU1rRyxjQUFjLEdBQUdsRixrQkFBa0IsQ0FBQ2Qsd0NBQUMsRUFBRSxLQUFLLENBQUM7RUFDbkQsSUFBTWlHLGNBQWMsR0FBR25GLGtCQUFrQixDQUFDbEIseUNBQUcsRUFBRSxLQUFLLENBQUM7RUFDckQsSUFBTXNHLGNBQWMsR0FBR3BGLGtCQUFrQixDQUFDbkIsNkNBQU8sRUFBRSxTQUFTLENBQUM7RUFFN0RrRixhQUFhLENBQUNsRCxXQUFXLENBQUNtRCxhQUFhLENBQUM7RUFDeENELGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ29ELGFBQWEsQ0FBQztFQUN4Q0YsYUFBYSxDQUFDbEQsV0FBVyxDQUFDcUQsYUFBYSxDQUFDO0VBQ3hDSCxhQUFhLENBQUNsRCxXQUFXLENBQUNzRCxhQUFhLENBQUM7RUFDeENKLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ3VELGFBQWEsQ0FBQztFQUN4Q0wsYUFBYSxDQUFDbEQsV0FBVyxDQUFDd0QsYUFBYSxDQUFDO0VBQ3hDTixhQUFhLENBQUNsRCxXQUFXLENBQUN5RCxhQUFhLENBQUM7RUFDeENQLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQzBELGFBQWEsQ0FBQztFQUN4Q1IsYUFBYSxDQUFDbEQsV0FBVyxDQUFDMkQsYUFBYSxDQUFDO0VBQ3hDVCxhQUFhLENBQUNsRCxXQUFXLENBQUM0RCxjQUFjLENBQUM7RUFDekNWLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQzZELGNBQWMsQ0FBQztFQUN6Q1gsYUFBYSxDQUFDbEQsV0FBVyxDQUFDOEQsY0FBYyxDQUFDO0VBQ3pDWixhQUFhLENBQUNsRCxXQUFXLENBQUMrRCxjQUFjLENBQUM7RUFDekNiLGFBQWEsQ0FBQ2xELFdBQVcsQ0FBQ2dFLGNBQWMsQ0FBQztFQUN6Q2QsYUFBYSxDQUFDbEQsV0FBVyxDQUFDaUUsY0FBYyxDQUFDO0VBQ3pDZixhQUFhLENBQUNsRCxXQUFXLENBQUNrRSxjQUFjLENBQUM7RUFDekNoQixhQUFhLENBQUNsRCxXQUFXLENBQUNtRSxjQUFjLENBQUM7RUFDekNqQixhQUFhLENBQUNsRCxXQUFXLENBQUNvRSxjQUFjLENBQUM7RUFDekNsQixhQUFhLENBQUNsRCxXQUFXLENBQUNxRSxjQUFjLENBQUM7RUFDekNuQixhQUFhLENBQUNsRCxXQUFXLENBQUNzRSxjQUFjLENBQUM7RUFDekNwQixhQUFhLENBQUNsRCxXQUFXLENBQUN1RSxjQUFjLENBQUM7RUFFekNyRSxRQUFRLENBQUNGLFdBQVcsQ0FBQ2tELGFBQWEsQ0FBQztFQUNuQ0QsV0FBVyxDQUFDakQsV0FBVyxDQUFDSSxPQUFPLENBQUM7RUFDaEM2QyxXQUFXLENBQUNqRCxXQUFXLENBQUNFLFFBQVEsQ0FBQztFQUVqQyxJQUFNRyxVQUFVLEdBQUdkLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUNuRGEsVUFBVSxDQUFDWixTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDdkNXLFVBQVUsQ0FBQ04sV0FBVyxHQUFHLEdBQUc7RUFDNUJrRCxXQUFXLENBQUNqRCxXQUFXLENBQUNLLFVBQVUsQ0FBQztFQUVuQzJDLGlCQUFpQixDQUFDaEQsV0FBVyxDQUFDaUQsV0FBVyxDQUFDO0VBQzFDVCxTQUFTLENBQUN4QyxXQUFXLENBQUNnRCxpQkFBaUIsQ0FBQztFQUN4QzdCLFNBQVMsQ0FBQ25CLFdBQVcsQ0FBQ3dDLFNBQVMsQ0FBQztFQUVoQyxJQUFNZ0MsSUFBSSxHQUFHakYsUUFBUSxDQUFDWSxhQUFhLENBQUMsaUJBQWlCLENBQUM7RUFDdERxRSxJQUFJLENBQUNDLFNBQVMsR0FBRyxFQUFFO0VBQ25CRCxJQUFJLENBQUN4RSxXQUFXLENBQUNtQixTQUFTLENBQUM7RUFFM0JsQixPQUFPLENBQUMsQ0FBQztBQUNWO0FBRUEsaUVBQWVpQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pUcEI7QUFDNkI7QUFDYTtBQUNSO0FBQ0k7QUFDTTtBQUNOO0FBRXRDLFNBQVM0RCxXQUFXQSxDQUFBLEVBQUc7RUFDdEIsSUFBTUMsS0FBSyxHQUFHLElBQUlMLGdEQUFLLENBQUMsYUFBYSxFQUFFO0lBQ3RDO0lBQ0FNLE9BQU8sRUFBRSxDQUNSLHNCQUFzQixFQUN0QixnQkFBZ0IsRUFDaEIsMEJBQTBCLEVBQzFCLHFCQUFxQixFQUNyQiw2QkFBNkIsRUFDN0IsK0JBQStCLEVBQy9CLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDMUIsaUNBQWlDLEVBQ2pDLGlCQUFpQixFQUNqQiwrQkFBK0IsRUFDL0IsaUNBQWlDLEVBQ2pDLGdDQUFnQyxDQUNoQztJQUVEO0lBQ0FDLFNBQVMsRUFBRSxFQUFFO0lBQ2JDLFNBQVMsRUFBRSxFQUFFO0lBQ2I7SUFDQUMsVUFBVSxFQUFFLElBQUk7SUFDaEI7SUFDQUMsU0FBUyxFQUFFLElBQUk7SUFDZjtJQUNBQyxJQUFJLEVBQUUsSUFBSTtJQUNWO0lBQ0FDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCO0lBQ0FDLFVBQVUsRUFBRSxHQUFHO0lBQ2Y7SUFDQUMsSUFBSSxFQUFFLElBQUk7SUFDVjtJQUNBQyxhQUFhLEVBQUUsSUFBSTtJQUNuQjtJQUNBQyxXQUFXLEVBQUU7RUFDZCxDQUFDLENBQUM7QUFDSDtBQUVBLFNBQVNDLFFBQVFBLENBQUEsRUFBRztFQUNuQixJQUFNQyxhQUFhLEdBQUdyRyxRQUFRLENBQUNZLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztFQUMvRHlGLGFBQWEsQ0FBQ25CLFNBQVMsR0FBRyxFQUFFO0VBRTVCLElBQU1vQixjQUFjLEdBQUd0RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDcERxRyxjQUFjLENBQUNwRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztFQUVoRCxJQUFNb0csYUFBYSxHQUFHdkcsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ25Ec0csYUFBYSxDQUFDckcsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFFN0MsSUFBTXFHLGdCQUFnQixHQUFHeEcsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3REdUcsZ0JBQWdCLENBQUN0RyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztFQUVwRCxJQUFNc0csa0JBQWtCLEdBQUd6RyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDeER3RyxrQkFBa0IsQ0FBQ3ZHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLHNCQUFzQixDQUFDO0VBRXhELElBQU11RyxTQUFTLEdBQUcxRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDOUN5RyxTQUFTLENBQUNsRyxXQUFXLEdBQUcsWUFBWTtFQUNwQ2lHLGtCQUFrQixDQUFDaEcsV0FBVyxDQUFDaUcsU0FBUyxDQUFDO0VBRXpDLElBQU1DLElBQUksR0FBRzNHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMxQzBHLElBQUksQ0FBQ3pHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUMxQndHLElBQUksQ0FBQ3RHLEdBQUcsR0FBR2dGLDBDQUFJO0VBQ2ZzQixJQUFJLENBQUNyRyxHQUFHLEdBQUcsTUFBTTtFQUNqQm1HLGtCQUFrQixDQUFDaEcsV0FBVyxDQUFDa0csSUFBSSxDQUFDO0VBRXBDLElBQU1DLG1CQUFtQixHQUFHNUcsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3pEMkcsbUJBQW1CLENBQUMxRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztFQUUxRCxJQUFNMEcsVUFBVSxHQUFHN0csUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQy9DNEcsVUFBVSxDQUFDckcsV0FBVyxHQUFHLE1BQU07RUFDL0IsSUFBTXNHLElBQUksR0FBRzlHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUMzQzZHLElBQUksQ0FBQ3RHLFdBQVcsR0FBRyxjQUFjO0VBQ2pDc0csSUFBSSxDQUFDNUcsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBQzFCMEcsVUFBVSxDQUFDcEcsV0FBVyxDQUFDcUcsSUFBSSxDQUFDO0VBQzVCRixtQkFBbUIsQ0FBQ25HLFdBQVcsQ0FBQ29HLFVBQVUsQ0FBQztFQUUzQ0wsZ0JBQWdCLENBQUMvRixXQUFXLENBQUNnRyxrQkFBa0IsQ0FBQztFQUNoREQsZ0JBQWdCLENBQUMvRixXQUFXLENBQUNtRyxtQkFBbUIsQ0FBQztFQUVqRCxJQUFNRyxrQkFBa0IsR0FBRy9HLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN4RDhHLGtCQUFrQixDQUFDN0csU0FBUyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7RUFFeEQsSUFBTTZHLFNBQVMsR0FBR2hILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM3QytHLFNBQVMsQ0FBQzlHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztFQUNyQzZHLFNBQVMsQ0FBQ0MsRUFBRSxHQUFHLFlBQVk7RUFFM0JGLGtCQUFrQixDQUFDdEcsV0FBVyxDQUFDdUcsU0FBUyxDQUFDO0VBRXpDVCxhQUFhLENBQUM5RixXQUFXLENBQUMrRixnQkFBZ0IsQ0FBQztFQUMzQ0QsYUFBYSxDQUFDOUYsV0FBVyxDQUFDc0csa0JBQWtCLENBQUM7RUFFN0NULGNBQWMsQ0FBQzdGLFdBQVcsQ0FBQzhGLGFBQWEsQ0FBQztFQUV6QyxJQUFNVyxjQUFjLEdBQUdsSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDcERpSCxjQUFjLENBQUNoSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztFQUUvQyxJQUFNTixLQUFLLEdBQUdHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMzQ0osS0FBSyxDQUFDUSxHQUFHLEdBQUcrRSw4Q0FBUTtFQUNwQnZGLEtBQUssQ0FBQ1MsR0FBRyxHQUFHLFVBQVU7RUFDdEJULEtBQUssQ0FBQ0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQy9CK0csY0FBYyxDQUFDekcsV0FBVyxDQUFDWixLQUFLLENBQUM7RUFFakN5RyxjQUFjLENBQUM3RixXQUFXLENBQUN5RyxjQUFjLENBQUM7RUFFMUNiLGFBQWEsQ0FBQzVGLFdBQVcsQ0FBQzZGLGNBQWMsQ0FBQztFQUV6QyxJQUFNYSxlQUFlLEdBQUduSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDckRrSCxlQUFlLENBQUNqSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztFQUVsRCxJQUFNaUgsd0JBQXdCLEdBQUdwSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDOURtSCx3QkFBd0IsQ0FBQ2xILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixDQUFDO0VBRXJFLElBQU1rSCxPQUFPLEdBQUdySCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDN0NvSCxPQUFPLENBQUNuSCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7RUFFakMsSUFBTXFELElBQUksR0FBR3hELFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztFQUN6Q3VELElBQUksQ0FBQ2hELFdBQVcsR0FBRyxnQ0FBZ0M7RUFFbkQsSUFBTThHLElBQUksR0FBR3RILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUMzQ3FILElBQUksQ0FBQzlHLFdBQVcsR0FBRyxlQUFlO0VBQ2xDOEcsSUFBSSxDQUFDcEgsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0VBRS9CcUQsSUFBSSxDQUFDL0MsV0FBVyxDQUFDNkcsSUFBSSxDQUFDO0VBQ3RCRCxPQUFPLENBQUM1RyxXQUFXLENBQUMrQyxJQUFJLENBQUM7RUFDekIsSUFBTStELE1BQU0sR0FBR3ZILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM1Q3NILE1BQU0sQ0FBQ3JILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztFQUMvQixJQUFNZ0QsU0FBUyxHQUFHbkQsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQ2hEa0QsU0FBUyxDQUFDM0MsV0FBVyxHQUNwQiwwREFBMEQ7RUFDM0QyQyxTQUFTLENBQUNqRCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFFcEMsSUFBTXFILHFCQUFxQixHQUFHeEgsUUFBUSxDQUFDcUQsY0FBYyxDQUNwRCxvTkFDRCxDQUFDO0VBQ0QsSUFBTW9FLE9BQU8sR0FBR3pILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUMzQ3dILE9BQU8sQ0FBQ3ZILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUVqQ3NILE9BQU8sQ0FBQ2hILFdBQVcsQ0FBQzBDLFNBQVMsQ0FBQztFQUM5QnNFLE9BQU8sQ0FBQ2hILFdBQVcsQ0FBQytHLHFCQUFxQixDQUFDO0VBRTFDLElBQU1FLFVBQVUsR0FBRzFILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM5Q3lILFVBQVUsQ0FBQ2xILFdBQVcsR0FDckIsa1RBQWtUO0VBQ25Ua0gsVUFBVSxDQUFDeEgsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQ3BDb0gsTUFBTSxDQUFDOUcsV0FBVyxDQUFDZ0gsT0FBTyxDQUFDO0VBQzNCRixNQUFNLENBQUM5RyxXQUFXLENBQUNpSCxVQUFVLENBQUM7RUFDOUJMLE9BQU8sQ0FBQzVHLFdBQVcsQ0FBQzhHLE1BQU0sQ0FBQztFQUMzQkgsd0JBQXdCLENBQUMzRyxXQUFXLENBQUM0RyxPQUFPLENBQUM7RUFFN0MsSUFBTU0sTUFBTSxHQUFHM0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzVDMEgsTUFBTSxDQUFDekgsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQzlCd0gsTUFBTSxDQUFDdEgsR0FBRyxHQUFHaUYsNENBQU07RUFDbkJxQyxNQUFNLENBQUNySCxHQUFHLEdBQUcsUUFBUTtFQUNyQjhHLHdCQUF3QixDQUFDM0csV0FBVyxDQUFDa0gsTUFBTSxDQUFDO0VBRTVDLElBQU1DLFdBQVcsR0FBRzVILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNqRDJILFdBQVcsQ0FBQzFILFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUV6QyxJQUFNMEgsYUFBYSxHQUFHN0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ25ENEgsYUFBYSxDQUFDM0gsU0FBUyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7RUFFOUMsSUFBTTJILFVBQVUsR0FBRzlILFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztFQUMvQzZILFVBQVUsQ0FBQ3RILFdBQVcsR0FBRyxZQUFZO0VBRXJDLElBQU11SCxVQUFVLEdBQUcvSCxRQUFRLENBQUNxRCxjQUFjLENBQUMsZUFBZSxDQUFDO0VBQzNELElBQU0yRSxTQUFTLEdBQUdoSSxRQUFRLENBQUNxRCxjQUFjLENBQUMsVUFBVSxDQUFDO0VBRXJELElBQU00RSxXQUFXLEdBQUdqSSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUM7RUFDbERnSSxXQUFXLENBQUN6SCxXQUFXLEdBQUcsU0FBUztFQUVuQyxJQUFNMEgsYUFBYSxHQUFHbEksUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ2pEaUksYUFBYSxDQUFDaEksU0FBUyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7RUFDOUMrSCxhQUFhLENBQUN6SCxXQUFXLENBQUNzSCxVQUFVLENBQUM7RUFDckNHLGFBQWEsQ0FBQ3pILFdBQVcsQ0FBQ3dILFdBQVcsQ0FBQztFQUN0Q0MsYUFBYSxDQUFDekgsV0FBVyxDQUFDdUgsU0FBUyxDQUFDO0VBRXBDSCxhQUFhLENBQUNwSCxXQUFXLENBQUNxSCxVQUFVLENBQUM7RUFDckNELGFBQWEsQ0FBQ3BILFdBQVcsQ0FBQ3lILGFBQWEsQ0FBQztFQUV4QyxJQUFNMUYsV0FBVyxHQUFHeEMsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2pEdUMsV0FBVyxDQUFDdEMsU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBRXpDLElBQU1zQyxPQUFPLEdBQUd6QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDM0N3QyxPQUFPLENBQUNDLElBQUksR0FBRyw4QkFBOEI7RUFDN0NELE9BQU8sQ0FBQ0UsTUFBTSxHQUFHLFFBQVE7RUFDekJGLE9BQU8sQ0FBQ0csR0FBRyxHQUFHLHFCQUFxQjtFQUNuQyxJQUFNQyxTQUFTLEdBQUc3QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDL0M0QyxTQUFTLENBQUN4QyxHQUFHLEdBQUdoQywrQ0FBUztFQUN6QndFLFNBQVMsQ0FBQ3ZDLEdBQUcsR0FBRyxRQUFRO0VBQ3hCdUMsU0FBUyxDQUFDM0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0VBQ3RDc0MsT0FBTyxDQUFDaEMsV0FBVyxDQUFDb0MsU0FBUyxDQUFDO0VBQzlCTCxXQUFXLENBQUMvQixXQUFXLENBQUNnQyxPQUFPLENBQUM7RUFFaEMsSUFBTUssVUFBVSxHQUFHOUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzlDNkMsVUFBVSxDQUFDSixJQUFJLEdBQUcsdUNBQXVDO0VBQ3pESSxVQUFVLENBQUNILE1BQU0sR0FBRyxRQUFRO0VBQzVCRyxVQUFVLENBQUNGLEdBQUcsR0FBRyxxQkFBcUI7RUFDdEMsSUFBTUcsTUFBTSxHQUFHL0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzVDOEMsTUFBTSxDQUFDMUMsR0FBRyxHQUFHL0IsNENBQU07RUFDbkJ5RSxNQUFNLENBQUN6QyxHQUFHLEdBQUcsVUFBVTtFQUN2QnlDLE1BQU0sQ0FBQzdDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztFQUNuQzJDLFVBQVUsQ0FBQ3JDLFdBQVcsQ0FBQ3NDLE1BQU0sQ0FBQztFQUM5QlAsV0FBVyxDQUFDL0IsV0FBVyxDQUFDcUMsVUFBVSxDQUFDO0VBRW5DOEUsV0FBVyxDQUFDbkgsV0FBVyxDQUFDb0gsYUFBYSxDQUFDO0VBQ3RDRCxXQUFXLENBQUNuSCxXQUFXLENBQUMrQixXQUFXLENBQUM7RUFFcEMyRSxlQUFlLENBQUMxRyxXQUFXLENBQUMyRyx3QkFBd0IsQ0FBQztFQUNyREQsZUFBZSxDQUFDMUcsV0FBVyxDQUFDbUgsV0FBVyxDQUFDO0VBRXhDdkIsYUFBYSxDQUFDNUYsV0FBVyxDQUFDMEcsZUFBZSxDQUFDO0VBRTFDNUIsV0FBVyxDQUFDLENBQUM7QUFDZDtBQUVBLGlFQUFlYSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqT1c7QUFDWTtBQUNOO0FBQ0Y7QUFDUTtBQUNBO0FBQ1o7QUFFbEMsU0FBU3NDLGlCQUFpQkEsQ0FBQzdJLEtBQUssRUFBRUMsS0FBSyxFQUFFNkksV0FBVyxFQUFFO0VBQ3JELElBQU1DLFdBQVcsR0FBRzVJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNqRDJJLFdBQVcsQ0FBQzFJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUV6QyxJQUFNMEksWUFBWSxHQUFHN0ksUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2xENEksWUFBWSxDQUFDeEksR0FBRyxHQUFHUixLQUFLO0VBQ3hCZ0osWUFBWSxDQUFDdkksR0FBRyxHQUFHUixLQUFLO0VBQ3hCOEksV0FBVyxDQUFDbkksV0FBVyxDQUFDb0ksWUFBWSxDQUFDO0VBRXJDLElBQU1DLGNBQWMsR0FBRzlJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNwRDZJLGNBQWMsQ0FBQzVJLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0VBRWhELElBQU00SSxZQUFZLEdBQUcvSSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDakQ4SSxZQUFZLENBQUN2SSxXQUFXLEdBQUdWLEtBQUs7RUFFaEMsSUFBTWtKLGtCQUFrQixHQUFHaEosUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ3REK0ksa0JBQWtCLENBQUN4SSxXQUFXLEdBQUdtSSxXQUFXO0VBRTVDLElBQU1NLGNBQWMsR0FBR2pKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNwRGdKLGNBQWMsQ0FBQy9JLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0VBRWhELElBQU0rSSxlQUFlLEdBQUdsSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDbkRpSixlQUFlLENBQUN4RyxJQUFJLEdBQUcsR0FBRztFQUMxQndHLGVBQWUsQ0FBQzFJLFdBQVcsR0FBRyxXQUFXO0VBQ3pDeUksY0FBYyxDQUFDeEksV0FBVyxDQUFDeUksZUFBZSxDQUFDO0VBRTNDLElBQU1DLGlCQUFpQixHQUFHbkosUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQ3JEa0osaUJBQWlCLENBQUN6RyxJQUFJLEdBQUcsR0FBRztFQUM1QnlHLGlCQUFpQixDQUFDM0ksV0FBVyxHQUFHLGFBQWE7RUFDN0N5SSxjQUFjLENBQUN4SSxXQUFXLENBQUMwSSxpQkFBaUIsQ0FBQztFQUU3Q0wsY0FBYyxDQUFDckksV0FBVyxDQUFDc0ksWUFBWSxDQUFDO0VBQ3hDRCxjQUFjLENBQUNySSxXQUFXLENBQUN1SSxrQkFBa0IsQ0FBQztFQUM5Q0YsY0FBYyxDQUFDckksV0FBVyxDQUFDd0ksY0FBYyxDQUFDO0VBQzFDTCxXQUFXLENBQUNuSSxXQUFXLENBQUNxSSxjQUFjLENBQUM7RUFFdkMsT0FBT0YsV0FBVztBQUNuQjtBQUVBLFNBQVNRLE9BQU9BLENBQUEsRUFBRztFQUNsQixJQUFNQyxVQUFVLEdBQUdySixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDaERvSixVQUFVLENBQUNuSixTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDdkMsSUFBTTRJLFlBQVksR0FBRy9JLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztFQUNqRDhJLFlBQVksQ0FBQ3ZJLFdBQVcsR0FBRyxVQUFVO0VBQ3JDNkksVUFBVSxDQUFDNUksV0FBVyxDQUFDc0ksWUFBWSxDQUFDO0VBRXBDLElBQU1PLGdCQUFnQixHQUFHdEosUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3REcUosZ0JBQWdCLENBQUNwSixTQUFTLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztFQUVuRCxJQUFNb0osSUFBSSxHQUFHYixpQkFBaUIsQ0FDN0JQLDBDQUFJLEVBQ0osV0FBVyxFQUNYLHFEQUNELENBQUM7RUFFRCxJQUFNcUIsVUFBVSxHQUFHZCxpQkFBaUIsQ0FDbkNOLGdEQUFVLEVBQ1YsWUFBWSxFQUNaLGdEQUNELENBQUM7RUFFRCxJQUFNcUIsT0FBTyxHQUFHZixpQkFBaUIsQ0FDaENMLDZDQUFPLEVBQ1AsYUFBYSxFQUNiLDRDQUNELENBQUM7RUFFRCxJQUFNcUIsTUFBTSxHQUFHaEIsaUJBQWlCLENBQy9CSiw0Q0FBTSxFQUNOLGFBQWEsRUFDYixpREFDRCxDQUFDO0VBRUQsSUFBTXFCLFVBQVUsR0FBR2pCLGlCQUFpQixDQUNuQ0gsZ0RBQVUsRUFDVixZQUFZLEVBQ1osMkNBQ0QsQ0FBQztFQUVELElBQU1xQixVQUFVLEdBQUdsQixpQkFBaUIsQ0FDbkNGLGdEQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLGdEQUNELENBQUM7RUFFRCxJQUFNcUIsSUFBSSxHQUFHbkIsaUJBQWlCLENBQzdCRCwwQ0FBSSxFQUNKLGVBQWUsRUFDZiw4Q0FDRCxDQUFDO0VBRURhLGdCQUFnQixDQUFDN0ksV0FBVyxDQUFDOEksSUFBSSxDQUFDO0VBQ2xDRCxnQkFBZ0IsQ0FBQzdJLFdBQVcsQ0FBQytJLFVBQVUsQ0FBQztFQUN4Q0YsZ0JBQWdCLENBQUM3SSxXQUFXLENBQUNnSixPQUFPLENBQUM7RUFDckNILGdCQUFnQixDQUFDN0ksV0FBVyxDQUFDaUosTUFBTSxDQUFDO0VBQ3BDSixnQkFBZ0IsQ0FBQzdJLFdBQVcsQ0FBQ2tKLFVBQVUsQ0FBQztFQUN4Q0wsZ0JBQWdCLENBQUM3SSxXQUFXLENBQUNtSixVQUFVLENBQUM7RUFDeENOLGdCQUFnQixDQUFDN0ksV0FBVyxDQUFDb0osSUFBSSxDQUFDO0VBRWxDUixVQUFVLENBQUM1SSxXQUFXLENBQUM2SSxnQkFBZ0IsQ0FBQztFQUN4QyxJQUFNckUsSUFBSSxHQUFHakYsUUFBUSxDQUFDWSxhQUFhLENBQUMsaUJBQWlCLENBQUM7RUFDdERxRSxJQUFJLENBQUNDLFNBQVMsR0FBRyxFQUFFO0VBQ25CRCxJQUFJLENBQUN4RSxXQUFXLENBQUM0SSxVQUFVLENBQUM7QUFDN0I7QUFFQSxpRUFBZUQsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSFk7QUFDQTtBQUNFO0FBQ0Y7QUFDRjtBQUNTO0FBRXpDLFNBQVNnQixZQUFZQSxDQUFBLEVBQUc7RUFDdkIsSUFBTUMsR0FBRyxHQUFHckssUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3pDb0ssR0FBRyxDQUFDbkssU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBRTVCLElBQU1tSyxZQUFZLEdBQUd0SyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDbERxSyxZQUFZLENBQUNwSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7RUFDM0MsSUFBTW9LLE9BQU8sR0FBR3ZLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3Q3NLLE9BQU8sQ0FBQ3JLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUNqQyxJQUFNcUssSUFBSSxHQUFHeEssUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzFDdUssSUFBSSxDQUFDbkssR0FBRyxHQUFHeUosMENBQUk7RUFDZlUsSUFBSSxDQUFDbEssR0FBRyxHQUFHLE1BQU07RUFDakIsSUFBTW1LLFFBQVEsR0FBR3pLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM1Q3dLLFFBQVEsQ0FBQ2hLLFdBQVcsQ0FBQytKLElBQUksQ0FBQztFQUMxQkQsT0FBTyxDQUFDOUosV0FBVyxDQUFDZ0ssUUFBUSxDQUFDO0VBQzdCLElBQU1DLFFBQVEsR0FBRzFLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztFQUM3Q3lLLFFBQVEsQ0FBQ2xLLFdBQVcsR0FBRyxjQUFjO0VBQ3JDLElBQU1tSyxTQUFTLEdBQUczSyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDN0MwSyxTQUFTLENBQUNsSyxXQUFXLENBQUNpSyxRQUFRLENBQUM7RUFDL0JILE9BQU8sQ0FBQzlKLFdBQVcsQ0FBQ2tLLFNBQVMsQ0FBQztFQUM5QkwsWUFBWSxDQUFDN0osV0FBVyxDQUFDOEosT0FBTyxDQUFDO0VBRWpDLElBQU1LLFFBQVEsR0FBRzVLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM5QzJLLFFBQVEsQ0FBQzFLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFdBQVcsQ0FBQztFQUVuQyxJQUFNMEssT0FBTyxHQUFHN0ssUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzdDNEssT0FBTyxDQUFDM0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBQ2hDLElBQU0ySyxRQUFRLEdBQUc5SyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDNUM2SyxRQUFRLENBQUNwSSxJQUFJLEdBQUcsR0FBRztFQUNuQm9JLFFBQVEsQ0FBQ3RLLFdBQVcsR0FBRyxNQUFNO0VBQzdCcUssT0FBTyxDQUFDcEssV0FBVyxDQUFDcUssUUFBUSxDQUFDO0VBRTdCLElBQU1DLFFBQVEsR0FBRy9LLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM5QzhLLFFBQVEsQ0FBQzFLLEdBQUcsR0FBRzBKLDBDQUFJO0VBQ25CZ0IsUUFBUSxDQUFDekssR0FBRyxHQUFHLE1BQU07RUFDckJ1SyxPQUFPLENBQUNwSyxXQUFXLENBQUNzSyxRQUFRLENBQUM7RUFFN0JILFFBQVEsQ0FBQ25LLFdBQVcsQ0FBQ29LLE9BQU8sQ0FBQztFQUU3QixJQUFNRyxXQUFXLEdBQUdoTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDakQrSyxXQUFXLENBQUM5SyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFDcEMsSUFBTThLLFFBQVEsR0FBR2pMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM1Q2dMLFFBQVEsQ0FBQ3ZJLElBQUksR0FBRyxHQUFHO0VBQ25CdUksUUFBUSxDQUFDekssV0FBVyxHQUFHLE9BQU87RUFDOUJ3SyxXQUFXLENBQUN2SyxXQUFXLENBQUN3SyxRQUFRLENBQUM7RUFFakMsSUFBTUMsUUFBUSxHQUFHbEwsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzlDaUwsUUFBUSxDQUFDN0ssR0FBRyxHQUFHMkosMkNBQUs7RUFDcEJrQixRQUFRLENBQUM1SyxHQUFHLEdBQUcsT0FBTztFQUN0QjBLLFdBQVcsQ0FBQ3ZLLFdBQVcsQ0FBQ3lLLFFBQVEsQ0FBQztFQUNqQ04sUUFBUSxDQUFDbkssV0FBVyxDQUFDdUssV0FBVyxDQUFDO0VBRWpDLElBQU1HLGNBQWMsR0FBR25MLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNwRGtMLGNBQWMsQ0FBQ2pMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztFQUN2QyxJQUFNaUwsV0FBVyxHQUFHcEwsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQy9DbUwsV0FBVyxDQUFDMUksSUFBSSxHQUFHLEdBQUc7RUFDdEIwSSxXQUFXLENBQUM1SyxXQUFXLEdBQUcsVUFBVTtFQUNwQzJLLGNBQWMsQ0FBQzFLLFdBQVcsQ0FBQzJLLFdBQVcsQ0FBQztFQUV2QyxJQUFNQyxXQUFXLEdBQUdyTCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFDakRvTCxXQUFXLENBQUNoTCxHQUFHLEdBQUc0SiwwQ0FBSTtFQUN0Qm9CLFdBQVcsQ0FBQy9LLEdBQUcsR0FBRyxVQUFVO0VBQzVCNkssY0FBYyxDQUFDMUssV0FBVyxDQUFDNEssV0FBVyxDQUFDO0VBQ3ZDVCxRQUFRLENBQUNuSyxXQUFXLENBQUMwSyxjQUFjLENBQUM7RUFFcEMsSUFBTUcsWUFBWSxHQUFHdEwsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ2xEcUwsWUFBWSxDQUFDcEwsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0VBRXJDLElBQU1vTCxTQUFTLEdBQUd2TCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDN0NzTCxTQUFTLENBQUM3SSxJQUFJLEdBQUcsR0FBRztFQUNwQjZJLFNBQVMsQ0FBQy9LLFdBQVcsR0FBRyxRQUFRO0VBQ2hDOEssWUFBWSxDQUFDN0ssV0FBVyxDQUFDOEssU0FBUyxDQUFDO0VBRW5DLElBQU1DLFNBQVMsR0FBR3hMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQ3VMLFNBQVMsQ0FBQ25MLEdBQUcsR0FBRzZKLHlDQUFHO0VBQ25Cc0IsU0FBUyxDQUFDbEwsR0FBRyxHQUFHLFFBQVE7RUFDeEJnTCxZQUFZLENBQUM3SyxXQUFXLENBQUMrSyxTQUFTLENBQUM7RUFDbkNaLFFBQVEsQ0FBQ25LLFdBQVcsQ0FBQzZLLFlBQVksQ0FBQztFQUVsQ2pCLEdBQUcsQ0FBQzVKLFdBQVcsQ0FBQzZKLFlBQVksQ0FBQztFQUM3QkQsR0FBRyxDQUFDNUosV0FBVyxDQUFDbUssUUFBUSxDQUFDO0VBRXpCLElBQU1hLE9BQU8sR0FBR3pMLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUNyRDZLLE9BQU8sQ0FBQ2hMLFdBQVcsQ0FBQzRKLEdBQUcsQ0FBQztBQUN6QjtBQUVBLFNBQVNxQixZQUFZQSxDQUFBLEVBQUc7RUFDdkIsSUFBTUMsTUFBTSxHQUFHM0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0VBQy9DMEwsTUFBTSxDQUFDekwsU0FBUyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBRTlCLElBQU15TCxhQUFhLEdBQUc1TCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDakQyTCxhQUFhLENBQUNsSixJQUFJLEdBQUcsOEJBQThCO0VBRW5ELElBQU1tSixnQkFBZ0IsR0FBRzdMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN0RDRMLGdCQUFnQixDQUFDeEwsR0FBRyxHQUFHOEosK0NBQU07RUFDN0IwQixnQkFBZ0IsQ0FBQ3ZMLEdBQUcsR0FBRyxhQUFhO0VBRXBDLElBQU13TCxpQkFBaUIsR0FBRzlMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNyRCxJQUFNOEwsUUFBUSxHQUFHL0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsTUFBTSxDQUFDO0VBQy9DOEwsUUFBUSxDQUFDN0wsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0VBQ25DNEwsUUFBUSxDQUFDdkwsV0FBVyxHQUFHLEdBQUc7RUFDMUIsSUFBTXdMLFFBQVEsR0FBR2hNLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztFQUMvQytMLFFBQVEsQ0FBQ3hMLFdBQVcsR0FBRyxXQUFXO0VBQ2xDc0wsaUJBQWlCLENBQUNyTCxXQUFXLENBQUNzTCxRQUFRLENBQUM7RUFDdkNELGlCQUFpQixDQUFDckwsV0FBVyxDQUFDdUwsUUFBUSxDQUFDO0VBRXZDSixhQUFhLENBQUNuTCxXQUFXLENBQUNvTCxnQkFBZ0IsQ0FBQztFQUMzQ0QsYUFBYSxDQUFDbkwsV0FBVyxDQUFDcUwsaUJBQWlCLENBQUM7RUFFNUMsSUFBTUcsU0FBUyxHQUFHak0sUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzdDZ00sU0FBUyxDQUFDekwsV0FBVyxHQUFHLEdBQUc7RUFFM0IsSUFBTTBMLFVBQVUsR0FBR2xNLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUM5Q2lNLFVBQVUsQ0FBQ3hKLElBQUksR0FBRyxnREFBZ0Q7RUFDbEV3SixVQUFVLENBQUMxTCxXQUFXLEdBQUcsYUFBYTtFQUV0Q21MLE1BQU0sQ0FBQ2xMLFdBQVcsQ0FBQ21MLGFBQWEsQ0FBQztFQUNqQ0QsTUFBTSxDQUFDbEwsV0FBVyxDQUFDd0wsU0FBUyxDQUFDO0VBQzdCTixNQUFNLENBQUNsTCxXQUFXLENBQUN5TCxVQUFVLENBQUM7RUFFOUJsTSxRQUFRLENBQUNZLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQ0gsV0FBVyxDQUFDa0wsTUFBTSxDQUFDO0FBQzFEO0FBRUEsU0FBU1EsU0FBU0EsQ0FBQSxFQUFHO0VBQ3BCL0IsWUFBWSxDQUFDLENBQUM7RUFDZCxJQUFNL0QsYUFBYSxHQUFHckcsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ25Eb0csYUFBYSxDQUFDbkcsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7RUFDN0NILFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDSCxXQUFXLENBQUM0RixhQUFhLENBQUM7RUFDaEVxRixZQUFZLENBQUMsQ0FBQztFQUNkVSxNQUFNLENBQUMxSyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtJQUN2QyxJQUFNMkssTUFBTSxHQUFHck0sUUFBUSxDQUFDWSxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQ2pELElBQUl3TCxNQUFNLENBQUNFLE9BQU8sR0FBRyxDQUFDLEVBQUU7TUFDdkJELE1BQU0sQ0FBQ25NLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0lBQ3pDLENBQUMsTUFBTTtNQUNOa00sTUFBTSxDQUFDbk0sU0FBUyxDQUFDcU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDO0lBQzVDO0VBQ0QsQ0FBQyxDQUFDO0FBQ0g7QUFFQSxpRUFBZUosU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakp4QjtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQixhQUFhO0FBQ2IscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUI7QUFDdkIsOEJBQThCO0FBQzlCLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIscUJBQXFCO0FBQ3JCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQixrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixjQUFjO0FBQ2QsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakMsd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnR0FBZ0csTUFBTSxRQUFRLFFBQVEsTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQix1QkFBdUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLE1BQU0sT0FBTyxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sU0FBUyxzQkFBc0IscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxTQUFTLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsc1ZBQXNWLHVCQUF1QiwyQ0FBMkMsVUFBVSw4SkFBOEosY0FBYyxHQUFHLHdFQUF3RSxtQkFBbUIsR0FBRyxzSkFBc0osbUJBQW1CLHFCQUFxQixHQUFHLG9OQUFvTiw2QkFBNkIsc0JBQXNCLDhCQUE4QixVQUFVLHVKQUF1Six1Q0FBdUMsMkJBQTJCLFVBQVUseUxBQXlMLGtDQUFrQyxHQUFHLDBKQUEwSix5QkFBeUIsdUNBQXVDLDhDQUE4QyxVQUFVLHlGQUF5Rix3QkFBd0IsR0FBRyxxS0FBcUssdUNBQXVDLDJCQUEyQixVQUFVLHNFQUFzRSxtQkFBbUIsR0FBRyxvSEFBb0gsbUJBQW1CLG1CQUFtQix1QkFBdUIsNkJBQTZCLEdBQUcsU0FBUyxvQkFBb0IsR0FBRyxTQUFTLGdCQUFnQixHQUFHLHFMQUFxTCx1QkFBdUIsR0FBRyw0UEFBNFAsMEJBQTBCLDRCQUE0Qiw4QkFBOEIsc0JBQXNCLFVBQVUsZ0dBQWdHLDZCQUE2QixHQUFHLHFLQUFxSyxnQ0FBZ0MsR0FBRyx5SkFBeUosK0JBQStCLEdBQUcsK01BQStNLHVCQUF1QixlQUFlLEdBQUcsd01BQXdNLG1DQUFtQyxHQUFHLDhEQUE4RCxtQ0FBbUMsR0FBRyx3UUFBd1EsNEJBQTRCLDJCQUEyQiwyQkFBMkIsNEJBQTRCLHVCQUF1QixnQ0FBZ0MsVUFBVSxnR0FBZ0csNkJBQTZCLEdBQUcsK0VBQStFLG1CQUFtQixHQUFHLHdJQUF3SSw0QkFBNEIsdUJBQXVCLFVBQVUsd0xBQXdMLGlCQUFpQixHQUFHLHVJQUF1SSxtQ0FBbUMsaUNBQWlDLFVBQVUsMEhBQTBILDZCQUE2QixHQUFHLDZLQUE2SyxnQ0FBZ0MsMEJBQTBCLFVBQVUsc0xBQXNMLG1CQUFtQixHQUFHLHFFQUFxRSx1QkFBdUIsR0FBRyw4SkFBOEosa0JBQWtCLEdBQUcsZ0VBQWdFLGtCQUFrQixHQUFHLHFCQUFxQjtBQUNsMlE7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFd2QztBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0QyxzSEFBd0M7QUFDcEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1DQUFtQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRC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WUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSx3QkFBd0IsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLHlCQUF5QixPQUFPLFlBQVksTUFBTSxzQkFBc0IsT0FBTyxZQUFZLE1BQU0sd0JBQXdCLE9BQU8sVUFBVSxLQUFLLFlBQVkseUJBQXlCLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sWUFBWSxNQUFNLHNCQUFzQix1QkFBdUIsT0FBTyxLQUFLLHdCQUF3Qix5QkFBeUIsT0FBTyxLQUFLLHdCQUF3QixPQUFPLEtBQUssd0JBQXdCLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsZ0NBQWdDLG1C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QUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E2QjtBQUNKO0FBQ087QUFDRTtBQUNOO0FBQ0k7QUFFaENLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztBQUN6Qk4sa0RBQVMsQ0FBQyxDQUFDO0FBQ1gvRixxREFBUSxDQUFDLENBQUM7QUFFVixJQUFNMEUsUUFBUSxHQUFHOUssUUFBUSxDQUFDWSxhQUFhLENBQUMseUJBQXlCLENBQUM7QUFDbEUsSUFBTThMLFNBQVMsR0FBRzFNLFFBQVEsQ0FBQ1ksYUFBYSxDQUFDLHlCQUF5QixDQUFDO0FBQ25FLElBQU0rTCxZQUFZLEdBQUczTSxRQUFRLENBQUNZLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztBQUN0RTs7QUFFQWtLLFFBQVEsQ0FBQ3BKLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3hDMEUscURBQVEsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBRUZzRyxTQUFTLENBQUNoTCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUN6Q0Msa0RBQUssQ0FBQyxDQUFDO0FBQ1IsQ0FBQyxDQUFDO0FBRUZnTCxZQUFZLENBQUNqTCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUM1QzBILG9EQUFPLENBQUMsQ0FBQztBQUNWLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9zZXR1cC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzcz82ZDU0Iiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL3R5cGVkLmpzL2Rpc3QvdHlwZWQubW9kdWxlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8td2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNoYWhpciBmcm9tIFwiLi9pbWcvc2hhaGlyLlBOR1wiO1xuaW1wb3J0IEdpdFNvY2lhbCBmcm9tIFwiLi9pbWcvZ2l0U29jaWFsLnN2Z1wiO1xuaW1wb3J0IExpbmtlZCBmcm9tIFwiLi9pbWcvbGlua2VkLnN2Z1wiO1xuaW1wb3J0IERvY2tlciBmcm9tIFwiLi9pbWcvZG9ja2VyLnN2Z1wiO1xuaW1wb3J0IFNxbCBmcm9tIFwiLi9pbWcvc3FsLnN2Z1wiO1xuaW1wb3J0IEVjbGlwc2UgZnJvbSBcIi4vaW1nL2VjbGlwc2Uuc3ZnXCI7XG5pbXBvcnQgTHVhIGZyb20gXCIuL2ltZy9sdWEuc3ZnXCI7XG5pbXBvcnQgVnVlIGZyb20gXCIuL2ltZy92dWUuc3ZnXCI7XG5pbXBvcnQgQ3lwcmVzcyBmcm9tIFwiLi9pbWcvY3lwcmVzcy5zdmdcIjtcbmltcG9ydCBWc2NvZGUgZnJvbSBcIi4vaW1nL3ZzY29kZS5zdmdcIjtcbmltcG9ydCBDIGZyb20gXCIuL2ltZy9jLnN2Z1wiO1xuaW1wb3J0IE5wbSBmcm9tIFwiLi9pbWcvbnBtLnN2Z1wiO1xuaW1wb3J0IEJhYmVsIGZyb20gXCIuL2ltZy9iYWJlbC5zdmdcIjtcbmltcG9ydCBQcmV0dGllciBmcm9tIFwiLi9pbWcvcHJldHRpZXIuc3ZnXCI7XG5pbXBvcnQgRXNsaW50IGZyb20gXCIuL2ltZy9lc2xpbnQuc3ZnXCI7XG5pbXBvcnQgV2VicGFjayBmcm9tIFwiLi9pbWcvd2VicGFjay5zdmdcIjtcbmltcG9ydCBKZXN0IGZyb20gXCIuL2ltZy9qZXN0LnN2Z1wiO1xuaW1wb3J0IEdpdCBmcm9tIFwiLi9pbWcvZ2l0LnN2Z1wiO1xuaW1wb3J0IFB5dGhvbiBmcm9tIFwiLi9pbWcvcHl0aG9uLnN2Z1wiO1xuaW1wb3J0IEphdmEgZnJvbSBcIi4vaW1nL2phdmEuc3ZnXCI7XG5pbXBvcnQgTGludXggZnJvbSBcIi4vaW1nL2xpbnV4LnN2Z1wiO1xuaW1wb3J0IEh0bWwgZnJvbSBcIi4vaW1nL2h0bWwuc3ZnXCI7XG5pbXBvcnQgQ3NzIGZyb20gXCIuL2ltZy9jc3Muc3ZnXCI7XG5pbXBvcnQgSnMgZnJvbSBcIi4vaW1nL2pzLnN2Z1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVDYXJvdXNlbEl0ZW0oaW1hZ2UsIHRpdGxlKSB7XG5cdGNvbnN0IGNhcm91c2VsSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNhcm91c2VsSXRlbS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtaXRlbVwiKTtcblxuXHRjb25zdCBjYXJvdXNlbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Y2Fyb3VzZWxJbWFnZS5zcmMgPSBpbWFnZTtcblx0Y2Fyb3VzZWxJbWFnZS5hbHQgPSB0aXRsZTtcblx0Y2Fyb3VzZWxJbWFnZS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWwtaW1hZ2VcIik7XG5cblx0Y29uc3QgY2Fyb3VzZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjYXJvdXNlbFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC10aXRsZVwiKTtcblx0Y2Fyb3VzZWxUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG5cdGNhcm91c2VsSXRlbS5hcHBlbmRDaGlsZChjYXJvdXNlbEltYWdlKTtcblx0Y2Fyb3VzZWxJdGVtLmFwcGVuZENoaWxkKGNhcm91c2VsVGl0bGUpO1xuXG5cdHJldHVybiBjYXJvdXNlbEl0ZW07XG59XG5cbi8vIGFkZCBidXR0b25zIHRvIHRoZSBjYXJvdXNlbCBhbmQgY29udHJvbCB0aGUgc2Nyb2xsaW5nXG5mdW5jdGlvbiBidXR0b25zKCkge1xuXHRjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWxcIik7XG5cdGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2stYnRuXCIpO1xuXHRjb25zdCBmb3J3YXJkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3J3YXJkLWJ0blwiKTtcblx0bGV0IGlzU2Nyb2xsaW5nID0gZmFsc2U7IC8vIFRoaXMgdmFyaWFibGUgd2lsbCBiZSB1c2VkIHRvIGluZGljYXRlIHNjcm9sbGluZyBzdGF0dXNcblx0bGV0IHNjcm9sbERpcmVjdGlvbiA9IDA7IC8vIDAgZm9yIGxlZnQsIDEgZm9yIHJpZ2h0XG5cdGNvbnN0IHNjcm9sbFN0ZXAgPSA4OyAvLyBUaGlzIHZhbHVlIGNvbnRyb2xzIHRoZSBzbW9vdGhuZXNzIG9mIHRoZSBzY3JvbGxcblxuXHQvLyBzbW9vdGggc2Nyb2xsIGFuaW1hdGlvblxuXHRjb25zdCBhbmltYXRlU2Nyb2xsID0gKCkgPT4ge1xuXHRcdC8vIGlmIHNjcm9sbGluZyBpcyBzdGlsbCBpbiBwcm9ncmVzcywgdGhlbiBjb250aW51ZSBzY3JvbGxpbmdcblx0XHRpZiAoIWlzU2Nyb2xsaW5nKSByZXR1cm47XG5cblx0XHQvLyBzY3JvbGwgYnkgdGhlIHNjcm9sbFN0ZXBcblx0XHRjb25zdCBzY3JvbGxEaXN0YW5jZSA9IHNjcm9sbERpcmVjdGlvbiA9PT0gMCA/IC1zY3JvbGxTdGVwIDogc2Nyb2xsU3RlcDtcblx0XHRjYXJvdXNlbC5zY3JvbGxMZWZ0ICs9IHNjcm9sbERpc3RhbmNlO1xuXG5cdFx0Ly8gaWYgdGhlIHNjcm9sbCBpcyBub3QgYXQgdGhlIGVuZCwgdGhlbiBjb250aW51ZSBzY3JvbGxpbmdcblx0XHRpZiAoXG5cdFx0XHQoc2Nyb2xsRGlyZWN0aW9uID09PSAwICYmIGNhcm91c2VsLnNjcm9sbExlZnQgPiAwKSB8fFxuXHRcdFx0KHNjcm9sbERpcmVjdGlvbiA9PT0gMSAmJlxuXHRcdFx0XHRjYXJvdXNlbC5zY3JvbGxMZWZ0ICsgY2Fyb3VzZWwub2Zmc2V0V2lkdGggPCBjYXJvdXNlbC5zY3JvbGxXaWR0aClcblx0XHQpIHtcblx0XHRcdC8vIGFuaW1hdGUgdGhlIHNjcm9sbCBhdCA2MCBmcmFtZXMgcGVyIHNlY29uZFxuXHRcdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVTY3JvbGwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBvdGhlcndpc2UsIHN0b3Agc2Nyb2xsaW5nXG5cdFx0XHRpc1Njcm9sbGluZyA9IGZhbHNlO1xuXHRcdH1cblx0fTtcblxuXHQvLyBzY3JvbGwgbGVmdCB3aGVuIHRoZSBiYWNrIGJ1dHRvbiBpcyBjbGlja2VkXG5cdGNvbnN0IHNjcm9sbExlZnQgPSAoKSA9PiB7XG5cdFx0Ly8gaWYgdGhlIHNjcm9sbCBpcyBub3QgaW4gcHJvZ3Jlc3MsIHRoZW4gc3RhcnQgc2Nyb2xsaW5nXG5cdFx0aWYgKCFpc1Njcm9sbGluZykge1xuXHRcdFx0c2Nyb2xsRGlyZWN0aW9uID0gMDsgLy8gMCBmb3IgbGVmdFxuXHRcdFx0aXNTY3JvbGxpbmcgPSB0cnVlOyAvLyB0aGUgc2Nyb2xsIGlzIGluIHByb2dyZXNzXG5cdFx0XHRhbmltYXRlU2Nyb2xsKCk7IC8vIHN0YXJ0IHNjcm9sbGluZ1xuXHRcdH1cblx0fTtcblxuXHQvLyBzY3JvbGwgcmlnaHQgd2hlbiB0aGUgbmV4dCBidXR0b24gaXMgY2xpY2tlZFxuXHRjb25zdCBzY3JvbGxSaWdodCA9ICgpID0+IHtcblx0XHQvLyBpZiB0aGUgc2Nyb2xsIGlzIG5vdCBpbiBwcm9ncmVzcywgdGhlbiBzdGFydCBzY3JvbGxpbmdcblx0XHRpZiAoIWlzU2Nyb2xsaW5nKSB7XG5cdFx0XHRzY3JvbGxEaXJlY3Rpb24gPSAxOyAvLyAxIGZvciByaWdodFxuXHRcdFx0aXNTY3JvbGxpbmcgPSB0cnVlOyAvLyB0aGUgc2Nyb2xsIGlzIGluIHByb2dyZXNzXG5cdFx0XHRhbmltYXRlU2Nyb2xsKCk7IC8vIHN0YXJ0IHNjcm9sbGluZ1xuXHRcdH1cblx0fTtcblxuXHQvLyBzdG9wIHNjcm9sbGluZyB3aGVuIHRoZSBtb3VzZSBsZWF2ZXMgdGhlIGJ1dHRvblxuXHRjb25zdCBzdG9wU2Nyb2xsID0gKCkgPT4ge1xuXHRcdGlzU2Nyb2xsaW5nID0gZmFsc2U7IC8vIHRoZSBzY3JvbGwgaXMgbm90IGluIHByb2dyZXNzXG5cdH07XG5cblx0Ly8gYWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgYnV0dG9uc1xuXHRiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNjcm9sbExlZnQpOyAvLyBTY3JvbGwgbGVmdCBvbiBtb3VzZSBlbnRlclxuXHRiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHN0b3BTY3JvbGwpOyAvLyBTdG9wIHNjcm9sbGluZyBvbiBtb3VzZSBsZWF2ZVxuXHRmb3J3YXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNjcm9sbFJpZ2h0KTsgLy8gU2Nyb2xsIHJpZ2h0IG9uIG1vdXNlIGVudGVyXG5cdGZvcndhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFNjcm9sbCk7IC8vIFN0b3Agc2Nyb2xsaW5nIG9uIG1vdXNlIGxlYXZlXG59XG5cbmZ1bmN0aW9uIGFib3V0KCkge1xuXHRjb25zdCBhYm91dFBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRhYm91dFBhZ2UuY2xhc3NMaXN0LmFkZChcImFib3V0LXBhZ2VcIik7XG5cblx0Y29uc3QgYWJvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRhYm91dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IGFib3V0VGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGFib3V0VGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdGV4dC1jb250YWluZXJcIik7XG5cdGNvbnN0IGFib3V0TWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdGFib3V0TWUudGV4dENvbnRlbnQgPSBcIkFib3V0IFwiO1xuXHRjb25zdCBhYm91dE1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRhYm91dE1lU3Bhbi50ZXh0Q29udGVudCA9IFwiTWVcIjtcblx0YWJvdXRNZS5hcHBlbmRDaGlsZChhYm91dE1lU3Bhbik7XG5cdGFib3V0TWUuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lXCIpO1xuXHRhYm91dFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRNZSk7XG5cdGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0VGV4dENvbnRhaW5lcik7XG5cblx0Y29uc3QgYWJvdXRNZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGFib3V0TWVEaXYuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLWRpdlwiKTtcblxuXHRjb25zdCBhYm91dE1lVGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGFib3V0TWVUZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZS10ZXh0LWRpdlwiKTtcblxuXHRjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcInBhcmFncmFwaFwiKTtcblxuXHRjb25zdCBhYm91dE1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRhYm91dE1lVGV4dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbWUtdGV4dFwiKTtcblx0YWJvdXRNZVRleHQudGV4dENvbnRlbnQgPVxuXHRcdFwiSGVsbG8sIEknbSBTaGFoaXIsIGEgZGVkaWNhdGVkIENvbXB1dGVyIFNjaWVuY2UgYW5kIE1hdGhlbWF0aWNzIHN0dWRlbnQgYXQgRGlja2luc29uIENvbGxlZ2Ugd2l0aCBhIGRlZXAgcGFzc2lvbiBmb3Igd2ViIGRldmVsb3BtZW50LiBNeSBhY2FkZW1pYyBhbmQgc2VsZi10YXVnaHQgam91cm5leSBpbiBwcm9ncmFtbWluZyBoYXMgZXF1aXBwZWQgbWUgd2l0aCB0aGUgc2tpbGxzIHRvIGNyYWZ0IGVmZmljaWVudCwgc2NhbGFibGUgc29mdHdhcmUgc29sdXRpb25zLiBJIHRocml2ZSBvbiB0aGUgY2hhbGxlbmdlcyB0aGF0IGNvbWUgd2l0aCBkZXZlbG9waW5nIGNsZWFuLCBpbnR1aXRpdmUgdXNlciBpbnRlcmZhY2VzIGFuZCByb2J1c3QgYmFja2VuZCBmdW5jdGlvbmFsaXRpZXMuIE15IGdvYWwgaXMgdG8gY29udGludW91c2x5IGV4cGFuZCBteSBmdWxsLXN0YWNrIGRldmVsb3BtZW50IGV4cGVydGlzZSBhbmQgY29udHJpYnV0ZSB0byBtZWFuaW5nZnVsIHByb2plY3RzIGluIGEgZHluYW1pYyB0ZWFtIGVudmlyb25tZW50LlwiO1xuXG5cdGNvbnN0IGFib3V0TWVUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRhYm91dE1lVGV4dDIuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLXRleHRcIik7XG5cdGFib3V0TWVUZXh0Mi50ZXh0Q29udGVudCA9IGBXaGVuIEkgc3RlcCBhd2F5IGZyb20gdGhlIGtleWJvYXJkLCB5b3UnbGwgZmluZCBtZSBpbmR1bGdpbmcgaW4gYSB2YXJpZXR5IG9mIGludGVyZXN0cyB0aGF0IGtlZXAgbWUgYmFsYW5jZWQgYW5kIGluc3BpcmVkLiBJJ20gYW4gYXZpZCBzb2NjZXIgZmFuLCB3aXRoIFJlYWwgTWFkcmlkJ3MgZ2FtZXMgcHVuY3R1YXRpbmcgdGhlIGNhbGVuZGFyIG9mIG15IHBlcnNvbmFsIGxpZmUuIEluIHRoZSB3b3JsZCBvZiBtaXhlZCBtYXJ0aWFsIGFydHMsIEkgYWRtaXJlIHRoZSBzdHJhdGVnaWMgcHJvd2VzcyBvZiBmaWdodGVycyBsaWtlIHRoZSByZXRpcmVkIEtoYWJpYiBOdXJtYWdvbWVkb3YuIE15IHRhc3RlIGluIGVudGVydGFpbm1lbnQgcmFuZ2VzIGZyb20gdGhlIGNhcHRpdmF0aW5nIG5hcnJhdGl2ZXMgb2YgXCJUaGUgU2hhd3NoYW5rIFJlZGVtcHRpb25cIiB0byB0aGUgY29tcGxleCBsZWdhbCBkcmFtYXMgb2YgXCJCZXR0ZXIgQ2FsbCBTYXVsLlwiIEdhbWluZyBpcyBhbm90aGVyIHBhc3Npb24g4oCUIGltbWVyc2luZyBteXNlbGYgaW4gcmljaCwgc3RvcnktZHJpdmVuIHdvcmxkcyBsaWtlIHRob3NlIG9mIFJlZCBEZWFkIFJlZGVtcHRpb24gMiwgTEEgTm9pcmUsIGFuZCBTbGVlcGluZyBEb2dzIHByb3ZpZGVzIG5vdCBqdXN0IHJlY3JlYXRpb24sIGJ1dCBjcmVhdGl2ZSBpbnNwaXJhdGlvbi5gO1xuXG5cdGNvbnN0IGFib3V0TWVUZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRhYm91dE1lVGV4dDMuY2xhc3NMaXN0LmFkZChcImFib3V0LW1lLXRleHRcIik7XG5cdGFib3V0TWVUZXh0My50ZXh0Q29udGVudCA9XG5cdFx0XCJJbiBhZGRpdGlvbiB0byBteSBzdHVkaWVzIGFuZCBob2JiaWVzLCBJIHNlcnZlIGFzIGEgUmVzaWRlbnQgQWR2aXNvciwgYSByb2xlIHRoYXQgaGFzIHJlZmluZWQgbXkgaW50ZXJwZXJzb25hbCBza2lsbHMgYW5kIGFiaWxpdHkgdG8gZm9zdGVyIGNvbW11bml0eSBhbW9uZyBkaXZlcnNlIGdyb3Vwcy4gSXQncyBhIHJvbGUgdGhhdCBjb21wbGVtZW50cyBteSB0ZWNobmljYWwgYXNwaXJhdGlvbnMgYnkgZW1waGFzaXppbmcgZW1wYXRoeSwgbGVhZGVyc2hpcCwgYW5kIGNvbGxhYm9yYXRpb24uXCI7XG5cblx0Y29uc3QgYWJvdXRNZVRleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGFib3V0TWVUZXh0NC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtbWUtdGV4dFwiKTtcblx0YWJvdXRNZVRleHQ0LnRleHRDb250ZW50ID1cblx0XHRcIkknbSBleGNpdGVkIHRvIGVtYmFyayBvbiB0aGUgbmV4dCBzdGFnZSBvZiBteSBjYXJlZXIgam91cm5leSBhbmQgYW0gYWN0aXZlbHkgc2Vla2luZyBpbnRlcm5zaGlwIG9wcG9ydHVuaXRpZXMgdGhhdCB3aWxsIGxldmVyYWdlIG15IHRlY2huaWNhbCBza2lsbHMgYW5kIHdvcmsgZXRoaWMuIElmIHlvdSdyZSBsb29raW5nIGZvciBzb21lb25lIHdobyBicmluZ3MgYSBjb21iaW5hdGlvbiBvZiBjb2RpbmcgcHJvZmljaWVuY3kgYW5kIGEgd2VsbC1yb3VuZGVkIHBlcnNwZWN0aXZlIHRvIHlvdXIgdGVhbSwgbGV0J3MgY29ubmVjdC5cIjtcblxuXHRwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoYWJvdXRNZVRleHQpO1xuXHRwYXJhZ3JhcGguYXBwZW5kQ2hpbGQoYWJvdXRNZVRleHQyKTtcblx0cGFyYWdyYXBoLmFwcGVuZENoaWxkKGFib3V0TWVUZXh0Myk7XG5cdHBhcmFncmFwaC5hcHBlbmRDaGlsZChhYm91dE1lVGV4dDQpO1xuXHRhYm91dE1lVGV4dERpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuXG5cdGNvbnN0IHNvY2lhbEljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c29jaWFsSWNvbnMuY2xhc3NMaXN0LmFkZChcInNvY2lhbC1pY29uc1wiKTtcblxuXHRjb25zdCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGdpdExpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00N1wiO1xuXHRnaXRMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cdGdpdExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5cdGNvbnN0IGdpdFNvY2lhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGdpdFNvY2lhbC5zcmMgPSBHaXRTb2NpYWw7XG5cdGdpdFNvY2lhbC5hbHQgPSBcIkdpdEh1YlwiO1xuXHRnaXRTb2NpYWwuY2xhc3NMaXN0LmFkZChcInNvY2lhbC1pY29uXCIpO1xuXHRnaXRMaW5rLmFwcGVuZENoaWxkKGdpdFNvY2lhbCk7XG5cdHNvY2lhbEljb25zLmFwcGVuZENoaWxkKGdpdExpbmspO1xuXG5cdGNvbnN0IGxpbmtlZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bGlua2VkTGluay5ocmVmID0gXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2hhaGlyNDcvXCI7XG5cdGxpbmtlZExpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblx0bGlua2VkTGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcblx0Y29uc3QgbGlua2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0bGlua2VkLnNyYyA9IExpbmtlZDtcblx0bGlua2VkLmFsdCA9IFwiTGlua2VkSW5cIjtcblx0bGlua2VkLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvblwiKTtcblx0bGlua2VkTGluay5hcHBlbmRDaGlsZChsaW5rZWQpO1xuXHRzb2NpYWxJY29ucy5hcHBlbmRDaGlsZChsaW5rZWRMaW5rKTtcblxuXHRhYm91dE1lVGV4dERpdi5hcHBlbmRDaGlsZChzb2NpYWxJY29ucyk7XG5cdGFib3V0TWVEaXYuYXBwZW5kQ2hpbGQoYWJvdXRNZVRleHREaXYpO1xuXG5cdGNvbnN0IHBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRwaWN0dXJlLnNyYyA9IFNoYWhpcjtcblx0cGljdHVyZS5hbHQgPSBcIlNoYWhpclwiO1xuXHRwaWN0dXJlLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1tZS1waWN0dXJlXCIpO1xuXHRhYm91dE1lRGl2LmFwcGVuZENoaWxkKHBpY3R1cmUpO1xuXG5cdGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0TWVEaXYpO1xuXHRhYm91dFBhZ2UuYXBwZW5kQ2hpbGQoYWJvdXRDb250YWluZXIpO1xuXG5cdGNvbnN0IHNlY29uZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNlY29uZERpdi5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLWRpdlwiKTtcblxuXHRjb25zdCBzZWNvbmREaXZUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2Vjb25kRGl2VGV4dC5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLWRpdi10ZXh0XCIpO1xuXG5cdGNvbnN0IGhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRoaWdobGlnaHQuY2xhc3NMaXN0LmFkZChcImhpZ2hsaWdodFwiKTtcblx0aGlnaGxpZ2h0LnRleHRDb250ZW50ID0gXCJUb29sc1wiO1xuXG5cdGNvbnN0IGFuZCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIGFuZFwiKTtcblxuXHRjb25zdCBoaWdobGlnaHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGhpZ2hsaWdodFRleHQudGV4dENvbnRlbnQgPSBcIiBUZWNobm9sb2dpZXNcIjtcblx0aGlnaGxpZ2h0VGV4dC5jbGFzc0xpc3QuYWRkKFwiaGlnaGxpZ2h0XCIpO1xuXG5cdGNvbnN0IHNlbnRlbmNlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgSSd2ZSB3b3JrZWQgd2l0aFwiKTtcblxuXHRjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHRleHQuY2xhc3NMaXN0LmFkZChcInRleHRcIik7XG5cdHRleHQuYXBwZW5kQ2hpbGQoaGlnaGxpZ2h0KTtcblx0dGV4dC5hcHBlbmRDaGlsZChhbmQpO1xuXHR0ZXh0LmFwcGVuZENoaWxkKGhpZ2hsaWdodFRleHQpO1xuXHR0ZXh0LmFwcGVuZENoaWxkKHNlbnRlbmNlKTtcblx0c2Vjb25kRGl2VGV4dC5hcHBlbmRDaGlsZCh0ZXh0KTtcblx0c2Vjb25kRGl2LmFwcGVuZENoaWxkKHNlY29uZERpdlRleHQpO1xuXG5cdGNvbnN0IGNhcm91c2VsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y2Fyb3VzZWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsLWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBjYXJvdXNlbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNhcm91c2VsRGl2LmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1kaXZcIik7XG5cblx0Y29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGJhY2tCdG4uY2xhc3NMaXN0LmFkZChcImJhY2stYnRuXCIpO1xuXHRiYWNrQnRuLnRleHRDb250ZW50ID0gXCI8XCI7XG5cdGNhcm91c2VsRGl2LmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuXG5cdGNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y2Fyb3VzZWwuY2xhc3NMaXN0LmFkZChcImNhcm91c2VsXCIpO1xuXG5cdGNvbnN0IGNhcm91c2VsSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjYXJvdXNlbEl0ZW1zLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbC1pdGVtc1wiKTtcblxuXHRjb25zdCBjYXJvdXNlbEl0ZW0xID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEh0bWwsIFwiSFRNTFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMiA9IGNyZWF0ZUNhcm91c2VsSXRlbShDc3MsIFwiQ1NTXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0zID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEpzLCBcIkphdmFTY3JpcHRcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTQgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oR2l0LCBcIkdpdFwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtNSA9IGNyZWF0ZUNhcm91c2VsSXRlbShOcG0sIFwiTlBNXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW02ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKFZzY29kZSwgXCJWUyBDb2RlXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW03ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKERvY2tlciwgXCJEb2NrZXJcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTggPSBjcmVhdGVDYXJvdXNlbEl0ZW0oTGludXgsIFwiTGludXhcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTkgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oUHl0aG9uLCBcIlB5dGhvblwiKTtcblx0Y29uc3QgY2Fyb3VzZWxJdGVtMTAgPSBjcmVhdGVDYXJvdXNlbEl0ZW0oSmF2YSwgXCJKYXZhXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xMSA9IGNyZWF0ZUNhcm91c2VsSXRlbShTcWwsIFwiU1FMXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xMiA9IGNyZWF0ZUNhcm91c2VsSXRlbShXZWJwYWNrLCBcIldlYnBhY2tcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTEzID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKFZ1ZSwgXCJWdWUuanNcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTE0ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEJhYmVsLCBcIkJhYmVsXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xNSA9IGNyZWF0ZUNhcm91c2VsSXRlbShKZXN0LCBcIkplc3RcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTE2ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKFByZXR0aWVyLCBcIlByZXR0aWVyXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xNyA9IGNyZWF0ZUNhcm91c2VsSXRlbShFc2xpbnQsIFwiRXNsaW50XCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0xOCA9IGNyZWF0ZUNhcm91c2VsSXRlbShDeXByZXNzLCBcIkN5cHJlc3NcIik7XG5cdGNvbnN0IGNhcm91c2VsSXRlbTE5ID0gY3JlYXRlQ2Fyb3VzZWxJdGVtKEMsIFwiQysrXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0yMCA9IGNyZWF0ZUNhcm91c2VsSXRlbShMdWEsIFwiTHVhXCIpO1xuXHRjb25zdCBjYXJvdXNlbEl0ZW0yMSA9IGNyZWF0ZUNhcm91c2VsSXRlbShFY2xpcHNlLCBcIkVjbGlwc2VcIik7XG5cblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0yKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0zKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW00KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW01KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW02KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW03KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW04KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW05KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xMCk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTEpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTEyKTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xMyk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTQpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTE1KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xNik7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMTcpO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTE4KTtcblx0Y2Fyb3VzZWxJdGVtcy5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW0xOSk7XG5cdGNhcm91c2VsSXRlbXMuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxJdGVtMjApO1xuXHRjYXJvdXNlbEl0ZW1zLmFwcGVuZENoaWxkKGNhcm91c2VsSXRlbTIxKTtcblxuXHRjYXJvdXNlbC5hcHBlbmRDaGlsZChjYXJvdXNlbEl0ZW1zKTtcblx0Y2Fyb3VzZWxEaXYuYXBwZW5kQ2hpbGQoYmFja0J0bik7XG5cdGNhcm91c2VsRGl2LmFwcGVuZENoaWxkKGNhcm91c2VsKTtcblxuXHRjb25zdCBmb3J3YXJkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Zm9yd2FyZEJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9yd2FyZC1idG5cIik7XG5cdGZvcndhcmRCdG4udGV4dENvbnRlbnQgPSBcIj5cIjtcblx0Y2Fyb3VzZWxEaXYuYXBwZW5kQ2hpbGQoZm9yd2FyZEJ0bik7XG5cblx0Y2Fyb3VzZWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxEaXYpO1xuXHRzZWNvbmREaXYuYXBwZW5kQ2hpbGQoY2Fyb3VzZWxDb250YWluZXIpO1xuXHRhYm91dFBhZ2UuYXBwZW5kQ2hpbGQoc2Vjb25kRGl2KTtcblxuXHRjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRhaW5lclwiKTtcblx0bWFpbi5pbm5lckhUTUwgPSBcIlwiO1xuXHRtYWluLmFwcGVuZENoaWxkKGFib3V0UGFnZSk7XG5cblx0YnV0dG9ucygpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYm91dDtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBUeXBlZCBmcm9tIFwidHlwZWQuanNcIjtcbmltcG9ydCBDb21wdXRlciBmcm9tIFwiLi9pbWcvY29tcHV0ZXIucG5nXCI7XG5pbXBvcnQgSGFuZCBmcm9tIFwiLi9pbWcvaGFuZC5zdmdcIjtcbmltcG9ydCBIYWNrZXIgZnJvbSBcIi4vaW1nL2hhY2tlci5zdmdcIjtcbmltcG9ydCBHaXRTb2NpYWwgZnJvbSBcIi4vaW1nL2dpdFNvY2lhbC5zdmdcIjtcbmltcG9ydCBMaW5rZWQgZnJvbSBcIi4vaW1nL2xpbmtlZC5zdmdcIjtcblxuZnVuY3Rpb24gZHluYW1pY1RleHQoKSB7XG5cdGNvbnN0IHR5cGVkID0gbmV3IFR5cGVkKFwiI3R5cGVkLXRleHRcIiwge1xuXHRcdC8vIFN0cmluZ3MgdG8gZGlzcGxheVxuXHRcdHN0cmluZ3M6IFtcblx0XHRcdFwiRnVsbCBTdGFjayBEZXZlbG9wZXJcIixcblx0XHRcdFwiQ3JlYXRpdmUgQ29kZXJcIixcblx0XHRcdFwiQ29tcHV0ZXIgU2NpZW5jZSBTdHVkZW50XCIsXG5cdFx0XHRcIk1hdGhlbWF0aWNzIFN0dWRlbnRcIixcblx0XHRcdFwiQXNwaXJpbmcgU29mdHdhcmUgRGV2ZWxvcGVyXCIsXG5cdFx0XHRcIkVtZXJnaW5nIEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXCIsXG5cdFx0XHRcIlByb2dyYW1taW5nIEVudGh1c2lhc3RcIixcblx0XHRcdFwiRnV0dXJlIFRlY2ggUHJvZmVzc2lvbmFsXCIsXG5cdFx0XHRcIlN0dWRlbnQgb2YgU29mdHdhcmUgRW5naW5lZXJpbmdcIixcblx0XHRcdFwiQ29kaW5nIEhvYmJ5aXN0XCIsXG5cdFx0XHRcIlNvZnR3YXJlIEVuZ2luZWVyIGluIFRyYWluaW5nXCIsXG5cdFx0XHRcIlNvZnR3YXJlIEVuZ2luZWVyIGluIHRoZSBNYWtpbmdcIixcblx0XHRcdFwiU29mdHdhcmUgRW5naW5lZXIgaW4gdGhlIFdvcmtzXCIsXG5cdFx0XSxcblxuXHRcdC8vIFNwZWVkIHNldHRpbmdzXG5cdFx0dHlwZVNwZWVkOiA1MCxcblx0XHRiYWNrU3BlZWQ6IDI1LFxuXHRcdC8vIFRpbWUgYmVmb3JlIHR5cGluZyBzdGFydHNcblx0XHRzdGFydERlbGF5OiAxMDAwLFxuXHRcdC8vIFRpbWUgYmVmb3JlIGVyYXNpbmdcblx0XHRiYWNrRGVsYXk6IDIwMDAsXG5cdFx0Ly8gTG9vcCB0aGUgYW5pbWF0aW9uXG5cdFx0bG9vcDogdHJ1ZSxcblx0XHQvLyBTaG93IGN1cnNvclxuXHRcdHNob3dDdXJzb3I6IHRydWUsXG5cdFx0Ly8gQ2hhcmFjdGVyIGZvciBjdXJzb3Jcblx0XHRjdXJzb3JDaGFyOiBcInxcIixcblx0XHQvLyBBdHRyaWJ1dGUgdG8gdHlwZSAobnVsbCA9PSB0ZXh0KVxuXHRcdGF0dHI6IG51bGwsXG5cdFx0Ly8gV2hldGhlciB0byBzdGFydCB0eXBpbmcgYXV0b21hdGljYWxseVxuXHRcdGF1dG9JbnNlcnRDc3M6IHRydWUsXG5cdFx0Ly8gRGVmYXVsdCBjb250ZW50IGJlZm9yZSB0eXBpbmdcblx0XHRjb250ZW50VHlwZTogXCJodG1sXCIsXG5cdH0pO1xufVxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcblx0Y29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG5cdG1haW5Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRjb25zdCBmaXJzdEJsb2NrSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGZpcnN0QmxvY2tIb21lLmNsYXNzTGlzdC5hZGQoXCJmaXJzdC1ibG9jay1ob21lXCIpO1xuXG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBzdWJUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c3ViVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3ViLXRleHQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IGZpcnN0VGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGZpcnN0VGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmlyc3QtdGV4dC1jb250YWluZXJcIik7XG5cblx0Y29uc3QgZmlyc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRmaXJzdFRleHQudGV4dENvbnRlbnQgPSBcIkhpLCBUaGVyZSFcIjtcblx0Zmlyc3RUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0VGV4dCk7XG5cblx0Y29uc3Qgd2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdHdhdmUuY2xhc3NMaXN0LmFkZChcIndhdmVcIik7XG5cdHdhdmUuc3JjID0gSGFuZDtcblx0d2F2ZS5hbHQgPSBcIldhdmVcIjtcblx0Zmlyc3RUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHdhdmUpO1xuXG5cdGNvbnN0IHNlY29uZFRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzZWNvbmRUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtdGV4dC1jb250YWluZXJcIik7XG5cblx0Y29uc3Qgc2Vjb25kVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcblx0c2Vjb25kVGV4dC50ZXh0Q29udGVudCA9IFwiSSdtIFwiO1xuXHRjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdG5hbWUudGV4dENvbnRlbnQgPSBcIlNoYWhpciBBaG1lZFwiO1xuXHRuYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuXHRzZWNvbmRUZXh0LmFwcGVuZENoaWxkKG5hbWUpO1xuXHRzZWNvbmRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZFRleHQpO1xuXG5cdHN1YlRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RUZXh0Q29udGFpbmVyKTtcblx0c3ViVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRUZXh0Q29udGFpbmVyKTtcblxuXHRjb25zdCB0eXBlZFRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0eXBlZFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInR5cGVkLXRleHQtY29udGFpbmVyXCIpO1xuXG5cdGNvbnN0IHR5cGVkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHR0eXBlZFRleHQuY2xhc3NMaXN0LmFkZChcInR5cGVkLXRleHRcIik7XG5cdHR5cGVkVGV4dC5pZCA9IFwidHlwZWQtdGV4dFwiO1xuXG5cdHR5cGVkVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0eXBlZFRleHQpO1xuXG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViVGV4dENvbnRhaW5lcik7XG5cdHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodHlwZWRUZXh0Q29udGFpbmVyKTtcblxuXHRmaXJzdEJsb2NrSG9tZS5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcblxuXHRjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1jb250YWluZXJcIik7XG5cblx0Y29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRpbWFnZS5zcmMgPSBDb21wdXRlcjtcblx0aW1hZ2UuYWx0ID0gXCJDb21wdXRlclwiO1xuXHRpbWFnZS5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXJcIik7XG5cdGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcblxuXHRmaXJzdEJsb2NrSG9tZS5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG5cblx0bWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdEJsb2NrSG9tZSk7XG5cblx0Y29uc3Qgc2Vjb25kQmxvY2tIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2Vjb25kQmxvY2tIb21lLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtYmxvY2staG9tZVwiKTtcblxuXHRjb25zdCBzZWNvbmRCbG9ja1RleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzZWNvbmRCbG9ja1RleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlY29uZC1ibG9jay10ZXh0LWNvbnRhaW5lclwiKTtcblxuXHRjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGV4dERpdi5jbGFzc0xpc3QuYWRkKFwidGV4dC1kaXZcIik7XG5cblx0Y29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0dGV4dC50ZXh0Q29udGVudCA9IFwiSWYgb3Bwb3J0dW5pdHkgZG9lc24ndCBrbm9jaywgXCI7XG5cblx0Y29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRzcGFuLnRleHRDb250ZW50ID0gXCJidWlsZCBhIGRvb3IuXCI7XG5cdHNwYW4uY2xhc3NMaXN0LmFkZChcInNwYW4tZG9vclwiKTtcblxuXHR0ZXh0LmFwcGVuZENoaWxkKHNwYW4pO1xuXHR0ZXh0RGl2LmFwcGVuZENoaWxkKHRleHQpO1xuXHRjb25zdCBzdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzdWJEaXYuY2xhc3NMaXN0LmFkZChcInN1Yi1kaXZcIik7XG5cdGNvbnN0IGhpZ2hsaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRoaWdobGlnaHQudGV4dENvbnRlbnQgPVxuXHRcdFwiRW1icmFjaW5nIGNoYWxsZW5nZXMgd2l0aCBpbm5vdmF0aW9uIGFuZCBkZXRlcm1pbmF0aW9uLCBcIjtcblx0aGlnaGxpZ2h0LmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRcIik7XG5cblx0Y29uc3Qgc3ViVGV4dEFmdGVySGlnaGxpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG5cdFx0XCJJIGNoYW5uZWwgbXkgcGFzc2lvbiBmb3IgY29kaW5nIGludG8gY3JhZnRpbmcgc29sdXRpb25zIHdoZXJlIG5vbmUgZXhpc3RlZCBiZWZvcmUuIEluIHRoZSBldmVyLWV2b2x2aW5nIHdvcmxkIG9mIHdlYiBkZXZlbG9wbWVudCwgSSdtIGNvbW1pdHRlZCB0byB0dXJuaW5nIG9ic3RhY2xlcyBpbnRvIHN0ZXBwaW5nIHN0b25lcyBmb3IgZ3Jvd3RoIGFuZCBsZWFybmluZy5cIixcblx0KTtcblx0Y29uc3Qgc3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRzdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzdWItdGV4dFwiKTtcblxuXHRzdWJUZXh0LmFwcGVuZENoaWxkKGhpZ2hsaWdodCk7XG5cdHN1YlRleHQuYXBwZW5kQ2hpbGQoc3ViVGV4dEFmdGVySGlnaGxpZ2h0KTtcblxuXHRjb25zdCBzdWJzdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHN1YnN1YlRleHQudGV4dENvbnRlbnQgPVxuXHRcdFwiV2l0aCBldmVyeSBsaW5lIG9mIGNvZGUsIEkgYWltIHRvIGJ1aWxkIHdlYiBhcHBsaWNhdGlvbnMgdGhhdCBhcmUgaW50dWl0aXZlIGFuZCBlZmZpY2llbnQuIE15IGdvYWwgaXMgdG8gY3JlYXRlIHRvb2xzIHRoYXQgbm90IG9ubHkgZnVuY3Rpb24gc21vb3RobHkgYnV0IGFsc28gZW5oYW5jZSB0aGUgdXNlciBleHBlcmllbmNlLiBJdCdzIGFib3V0IHBhdmluZyBuZXcgcGF0aHdheXMgdG8gc3VjY2VzcyBhbmQgZW5zdXJpbmcgdGhleSBsZWFkIHRvIG1lYW5pbmdmdWwgcmVzdWx0cyBmb3IgYm90aCB1c2VycyBhbmQgYnVzaW5lc3Nlc1wiO1xuXHRzdWJzdWJUZXh0LmNsYXNzTGlzdC5hZGQoXCJzdWItdGV4dFwiKTtcblx0c3ViRGl2LmFwcGVuZENoaWxkKHN1YlRleHQpO1xuXHRzdWJEaXYuYXBwZW5kQ2hpbGQoc3Vic3ViVGV4dCk7XG5cdHRleHREaXYuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcblx0c2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHREaXYpO1xuXG5cdGNvbnN0IGhhY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGhhY2tlci5jbGFzc0xpc3QuYWRkKFwiaGFja2VyXCIpO1xuXHRoYWNrZXIuc3JjID0gSGFja2VyO1xuXHRoYWNrZXIuYWx0ID0gXCJIYWNrZXJcIjtcblx0c2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhhY2tlcik7XG5cblx0Y29uc3Qgc29jaWFsQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzb2NpYWxCbG9jay5jbGFzc0xpc3QuYWRkKFwic29jaWFsLWJsb2NrXCIpO1xuXG5cdGNvbnN0IHNvY2lhbFRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzb2NpYWxUZXh0RGl2LmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtdGV4dC1kaXZcIik7XG5cblx0Y29uc3Qgc29jaWFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0c29jaWFsVGV4dC50ZXh0Q29udGVudCA9IFwiRklORCBNRSBPTlwiO1xuXG5cdGNvbnN0IHRleHRCZWZvcmUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkZlZWwgZnJlZSB0byBcIik7XG5cdGNvbnN0IHRleHRBZnRlciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIHdpdGggbWVcIik7XG5cblx0Y29uc3Qgc3BhbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0c3BhbkNvbnRlbnQudGV4dENvbnRlbnQgPSBcImNvbm5lY3RcIjtcblxuXHRjb25zdCBzb2NpYWxTdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHNvY2lhbFN1YlRleHQuY2xhc3NMaXN0LmFkZChcInNvY2lhbC1zdWItdGV4dFwiKTtcblx0c29jaWFsU3ViVGV4dC5hcHBlbmRDaGlsZCh0ZXh0QmVmb3JlKTtcblx0c29jaWFsU3ViVGV4dC5hcHBlbmRDaGlsZChzcGFuQ29udGVudCk7XG5cdHNvY2lhbFN1YlRleHQuYXBwZW5kQ2hpbGQodGV4dEFmdGVyKTtcblxuXHRzb2NpYWxUZXh0RGl2LmFwcGVuZENoaWxkKHNvY2lhbFRleHQpO1xuXHRzb2NpYWxUZXh0RGl2LmFwcGVuZENoaWxkKHNvY2lhbFN1YlRleHQpO1xuXG5cdGNvbnN0IHNvY2lhbEljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c29jaWFsSWNvbnMuY2xhc3NMaXN0LmFkZChcInNvY2lhbC1pY29uc1wiKTtcblxuXHRjb25zdCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGdpdExpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL1NoYWhpci00N1wiO1xuXHRnaXRMaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cdGdpdExpbmsucmVsID0gXCJub29wZW5lciBub3JlZmVycmVyXCI7XG5cdGNvbnN0IGdpdFNvY2lhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGdpdFNvY2lhbC5zcmMgPSBHaXRTb2NpYWw7XG5cdGdpdFNvY2lhbC5hbHQgPSBcIkdpdEh1YlwiO1xuXHRnaXRTb2NpYWwuY2xhc3NMaXN0LmFkZChcInNvY2lhbC1pY29uXCIpO1xuXHRnaXRMaW5rLmFwcGVuZENoaWxkKGdpdFNvY2lhbCk7XG5cdHNvY2lhbEljb25zLmFwcGVuZENoaWxkKGdpdExpbmspO1xuXG5cdGNvbnN0IGxpbmtlZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bGlua2VkTGluay5ocmVmID0gXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2hhaGlyNDcvXCI7XG5cdGxpbmtlZExpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcblx0bGlua2VkTGluay5yZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIjtcblx0Y29uc3QgbGlua2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0bGlua2VkLnNyYyA9IExpbmtlZDtcblx0bGlua2VkLmFsdCA9IFwiTGlua2VkSW5cIjtcblx0bGlua2VkLmNsYXNzTGlzdC5hZGQoXCJzb2NpYWwtaWNvblwiKTtcblx0bGlua2VkTGluay5hcHBlbmRDaGlsZChsaW5rZWQpO1xuXHRzb2NpYWxJY29ucy5hcHBlbmRDaGlsZChsaW5rZWRMaW5rKTtcblxuXHRzb2NpYWxCbG9jay5hcHBlbmRDaGlsZChzb2NpYWxUZXh0RGl2KTtcblx0c29jaWFsQmxvY2suYXBwZW5kQ2hpbGQoc29jaWFsSWNvbnMpO1xuXG5cdHNlY29uZEJsb2NrSG9tZS5hcHBlbmRDaGlsZChzZWNvbmRCbG9ja1RleHRDb250YWluZXIpO1xuXHRzZWNvbmRCbG9ja0hvbWUuYXBwZW5kQ2hpbGQoc29jaWFsQmxvY2spO1xuXG5cdG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kQmxvY2tIb21lKTtcblxuXHRkeW5hbWljVGV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiIsImltcG9ydCBUb2RvIGZyb20gXCIuL2ltZy90b2RvLnBuZ1wiO1xuaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSBcIi4vaW1nL2JhdHRsZXNoaXAucG5nXCI7XG5pbXBvcnQgV2VhdGhlciBmcm9tIFwiLi9pbWcvd2VhdGhlci5wbmdcIjtcbmltcG9ydCBUaWN0YWMgZnJvbSBcIi4vaW1nL3RpY3RhYy5wbmdcIjtcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gXCIuL2ltZy9jYWxjdWxhdG9yLnBuZ1wiO1xuaW1wb3J0IFJlc3RhdXJhbnQgZnJvbSBcIi4vaW1nL3Jlc3RhdXJhbnQucG5nXCI7XG5pbXBvcnQgRXRjaCBmcm9tIFwiLi9pbWcvZXRjaC5wbmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEl0ZW0oaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbikge1xuXHRjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XG5cblx0Y29uc3QgcHJvamVjdEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0cHJvamVjdEltYWdlLnNyYyA9IGltYWdlO1xuXHRwcm9qZWN0SW1hZ2UuYWx0ID0gdGl0bGU7XG5cdHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJbWFnZSk7XG5cblx0Y29uc3QgcHJvamVjdEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0SXRlbURpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtLWRpdlwiKTtcblxuXHRjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG5cdGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRwcm9qZWN0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuXHRjb25zdCBwcm9qZWN0TGlua0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RMaW5rRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpbmstZGl2XCIpO1xuXG5cdGNvbnN0IHByb2plY3RMaXZlRGVtbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRwcm9qZWN0TGl2ZURlbW8uaHJlZiA9IFwiI1wiO1xuXHRwcm9qZWN0TGl2ZURlbW8udGV4dENvbnRlbnQgPSBcIkxpdmUgRGVtb1wiO1xuXHRwcm9qZWN0TGlua0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGl2ZURlbW8pO1xuXG5cdGNvbnN0IHByb2plY3RTb3VyY2VDb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdHByb2plY3RTb3VyY2VDb2RlLmhyZWYgPSBcIiNcIjtcblx0cHJvamVjdFNvdXJjZUNvZGUudGV4dENvbnRlbnQgPSBcIlNvdXJjZSBDb2RlXCI7XG5cdHByb2plY3RMaW5rRGl2LmFwcGVuZENoaWxkKHByb2plY3RTb3VyY2VDb2RlKTtcblxuXHRwcm9qZWN0SXRlbURpdi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXHRwcm9qZWN0SXRlbURpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuXHRwcm9qZWN0SXRlbURpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGlua0Rpdik7XG5cdHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHByb2plY3RJdGVtRGl2KTtcblxuXHRyZXR1cm4gcHJvamVjdEl0ZW07XG59XG5cbmZ1bmN0aW9uIHByb2plY3QoKSB7XG5cdGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRpdlwiKTtcblx0Y29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cdHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcblxuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG5cblx0Y29uc3QgdG9kbyA9IGNyZWF0ZVByb2plY3RJdGVtKFxuXHRcdFRvZG8sXG5cdFx0XCJUb2RvIExpc3RcIixcblx0XHRcIkEgc2ltcGxlIHRvZG8gbGlzdCBhcHAgbWFkZSB3aXRoIHZhbmlsbGEgamF2YXNjcmlwdFwiLFxuXHQpO1xuXG5cdGNvbnN0IGJhdHRsZXNoaXAgPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRCYXR0bGVzaGlwLFxuXHRcdFwiQmF0dGxlc2hpcFwiLFxuXHRcdFwiQSBiYXR0bGVzaGlwIGdhbWUgbWFkZSB3aXRoIHZhbmlsbGEgamF2YXNjcmlwdFwiLFxuXHQpO1xuXG5cdGNvbnN0IHdlYXRoZXIgPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRXZWF0aGVyLFxuXHRcdFwiV2VhdGhlciBBcHBcIixcblx0XHRcIkEgd2VhdGhlciBhcHAgbWFkZSB3aXRoIHZhbmlsbGEgamF2YXNjcmlwdFwiLFxuXHQpO1xuXG5cdGNvbnN0IHRpY3RhYyA9IGNyZWF0ZVByb2plY3RJdGVtKFxuXHRcdFRpY3RhYyxcblx0XHRcIlRpYyBUYWMgVG9lXCIsXG5cdFx0XCJBIHRpYyB0YWMgdG9lIGdhbWUgbWFkZSB3aXRoIHZhbmlsbGEgamF2YXNjcmlwdFwiLFxuXHQpO1xuXG5cdGNvbnN0IGNhbGN1bGF0b3IgPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRDYWxjdWxhdG9yLFxuXHRcdFwiQ2FsY3VsYXRvclwiLFxuXHRcdFwiQSBjYWxjdWxhdG9yIG1hZGUgd2l0aCB2YW5pbGxhIGphdmFzY3JpcHRcIixcblx0KTtcblxuXHRjb25zdCByZXN0YXVyYW50ID0gY3JlYXRlUHJvamVjdEl0ZW0oXG5cdFx0UmVzdGF1cmFudCxcblx0XHRcIlJlc3RhdXJhbnQgUGFnZVwiLFxuXHRcdFwiQSByZXN0YXVyYW50IHBhZ2UgbWFkZSB3aXRoIHZhbmlsbGEgamF2YXNjcmlwdFwiLFxuXHQpO1xuXG5cdGNvbnN0IGV0Y2ggPSBjcmVhdGVQcm9qZWN0SXRlbShcblx0XHRFdGNoLFxuXHRcdFwiRXRjaCBhIFNrZXRjaFwiLFxuXHRcdFwiQSBldGNoIGEgc2tldGNoIG1hZGUgd2l0aCB2YW5pbGxhIGphdmFzY3JpcHRcIixcblx0KTtcblxuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pO1xuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJhdHRsZXNoaXApO1xuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpY3RhYyk7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FsY3VsYXRvcik7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudCk7XG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZXRjaCk7XG5cblx0cHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIik7XG5cdG1haW4uaW5uZXJIVE1MID0gXCJcIjtcblx0bWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcbiIsImltcG9ydCBJY29uIGZyb20gXCIuL2ltZy9pY29uLnN2Z1wiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaW1nL2hvbWUuc3ZnXCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4vaW1nL2Fib3V0LnN2Z1wiO1xuaW1wb3J0IENvZGUgZnJvbSBcIi4vaW1nL2NvZGUuc3ZnXCI7XG5pbXBvcnQgRG9jIGZyb20gXCIuL2ltZy9kb2Muc3ZnXCI7XG5pbXBvcnQgR2l0SHViIGZyb20gXCIuL2ltZy9naXRTb2NpYWwuc3ZnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcblx0Y29uc3QgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcblx0YmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyXCIpO1xuXG5cdGNvbnN0IGxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGxvZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgbG9nb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGxvZ29Cb3guY2xhc3NMaXN0LmFkZChcImxvZ28tYm94XCIpO1xuXHRjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0bG9nby5zcmMgPSBJY29uO1xuXHRsb2dvLmFsdCA9IFwibG9nb1wiO1xuXHRjb25zdCBsb2dvTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRsb2dvTGluay5hcHBlbmRDaGlsZChsb2dvKTtcblx0bG9nb0JveC5hcHBlbmRDaGlsZChsb2dvTGluayk7XG5cdGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRsb2dvVGV4dC50ZXh0Q29udGVudCA9IFwiU2hhaGlyIEFobWVkXCI7XG5cdGNvbnN0IGxvZ29MaW5rMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRsb2dvTGluazIuYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuXHRsb2dvQm94LmFwcGVuZENoaWxkKGxvZ29MaW5rMik7XG5cdGxvZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvQm94KTtcblxuXHRjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG5hdkxpbmtzLmNsYXNzTGlzdC5hZGQoXCJuYXYtbGlua3NcIik7XG5cblx0Y29uc3QgaG9tZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGhvbWVCb3guY2xhc3NMaXN0LmFkZChcIm5hdi1ib3hcIik7XG5cdGNvbnN0IGhvbWVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGhvbWVMaW5rLmhyZWYgPSBcIiNcIjtcblx0aG9tZUxpbmsudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblx0aG9tZUJveC5hcHBlbmRDaGlsZChob21lTGluayk7XG5cblx0Y29uc3QgaG9tZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRob21lSWNvbi5zcmMgPSBIb21lO1xuXHRob21lSWNvbi5hbHQgPSBcImhvbWVcIjtcblx0aG9tZUJveC5hcHBlbmRDaGlsZChob21lSWNvbik7XG5cblx0bmF2TGlua3MuYXBwZW5kQ2hpbGQoaG9tZUJveCk7XG5cblx0Y29uc3QgbWVudUxpbmtib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRtZW51TGlua2JveC5jbGFzc0xpc3QuYWRkKFwibmF2LWJveFwiKTtcblx0Y29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0bWVudUxpbmsuaHJlZiA9IFwiI1wiO1xuXHRtZW51TGluay50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcblx0bWVudUxpbmtib3guYXBwZW5kQ2hpbGQobWVudUxpbmspO1xuXG5cdGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0bWVudUljb24uc3JjID0gQWJvdXQ7XG5cdG1lbnVJY29uLmFsdCA9IFwiYWJvdXRcIjtcblx0bWVudUxpbmtib3guYXBwZW5kQ2hpbGQobWVudUljb24pO1xuXHRuYXZMaW5rcy5hcHBlbmRDaGlsZChtZW51TGlua2JveCk7XG5cblx0Y29uc3QgY29udGFjdExpbmtib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb250YWN0TGlua2JveC5jbGFzc0xpc3QuYWRkKFwibmF2LWJveFwiKTtcblx0Y29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0Y29udGFjdExpbmsuaHJlZiA9IFwiI1wiO1xuXHRjb250YWN0TGluay50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcblx0Y29udGFjdExpbmtib3guYXBwZW5kQ2hpbGQoY29udGFjdExpbmspO1xuXG5cdGNvbnN0IGNvbnRhY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Y29udGFjdEljb24uc3JjID0gQ29kZTtcblx0Y29udGFjdEljb24uYWx0ID0gXCJwcm9qZWN0c1wiO1xuXHRjb250YWN0TGlua2JveC5hcHBlbmRDaGlsZChjb250YWN0SWNvbik7XG5cdG5hdkxpbmtzLmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rYm94KTtcblxuXHRjb25zdCBBYm91dExpbmtib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRBYm91dExpbmtib3guY2xhc3NMaXN0LmFkZChcIm5hdi1ib3hcIik7XG5cblx0Y29uc3QgQWJvdXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdEFib3V0TGluay5ocmVmID0gXCIjXCI7XG5cdEFib3V0TGluay50ZXh0Q29udGVudCA9IFwiUmVzdW1lXCI7XG5cdEFib3V0TGlua2JveC5hcHBlbmRDaGlsZChBYm91dExpbmspO1xuXG5cdGNvbnN0IEFib3V0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdEFib3V0SWNvbi5zcmMgPSBEb2M7XG5cdEFib3V0SWNvbi5hbHQgPSBcInJlc3VtZVwiO1xuXHRBYm91dExpbmtib3guYXBwZW5kQ2hpbGQoQWJvdXRJY29uKTtcblx0bmF2TGlua3MuYXBwZW5kQ2hpbGQoQWJvdXRMaW5rYm94KTtcblxuXHRiYXIuYXBwZW5kQ2hpbGQobG9nQ29udGFpbmVyKTtcblx0YmFyLmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcblxuXHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdiNjb250ZW50XCIpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKGJhcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcblx0Y29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblx0Zm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cblx0Y29uc3QgZ2l0SHViUHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRIdWJQcm9maWxlLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDdcIjtcblxuXHRjb25zdCBnaXRIdWJQcm9maWxlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Z2l0SHViUHJvZmlsZUltZy5zcmMgPSBHaXRIdWI7XG5cdGdpdEh1YlByb2ZpbGVJbWcuYWx0ID0gXCJnaXRIdWIgTG9nb1wiO1xuXG5cdGNvbnN0IGdpdEh1YlByb2ZpbGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGF0U3ltYm9sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGF0U3ltYm9sLmNsYXNzTGlzdC5hZGQoXCJhdC1zeW1ib2xcIik7XG5cdGF0U3ltYm9sLnRleHRDb250ZW50ID0gXCJAXCI7XG5cdGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdHVzZXJuYW1lLnRleHRDb250ZW50ID0gXCJTaGFoaXItNDdcIjtcblx0Z2l0SHViUHJvZmlsZVRleHQuYXBwZW5kQ2hpbGQoYXRTeW1ib2wpO1xuXHRnaXRIdWJQcm9maWxlVGV4dC5hcHBlbmRDaGlsZCh1c2VybmFtZSk7XG5cblx0Z2l0SHViUHJvZmlsZS5hcHBlbmRDaGlsZChnaXRIdWJQcm9maWxlSW1nKTtcblx0Z2l0SHViUHJvZmlsZS5hcHBlbmRDaGlsZChnaXRIdWJQcm9maWxlVGV4dCk7XG5cblx0Y29uc3Qgc2VwZXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHNlcGVyYXRvci50ZXh0Q29udGVudCA9IFwifFwiO1xuXG5cdGNvbnN0IGdpdEh1YlJlcG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0Z2l0SHViUmVwby5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vU2hhaGlyLTQ3L1BvcnRmb2xpby1XZWJzaXRlXCI7XG5cdGdpdEh1YlJlcG8udGV4dENvbnRlbnQgPSBcIlNvdXJjZSBDb2RlXCI7XG5cblx0Zm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlByb2ZpbGUpO1xuXHRmb290ZXIuYXBwZW5kQ2hpbGQoc2VwZXJhdG9yKTtcblx0Zm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlJlcG8pO1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5mdW5jdGlvbiBzZXR1cFBhZ2UoKSB7XG5cdGNyZWF0ZU5hdkJhcigpO1xuXHRjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250YWluZXJcIik7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYjY29udGVudFwiKS5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblx0Y3JlYXRlRm9vdGVyKCk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcblx0XHRjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1iYXJcIik7XG5cdFx0aWYgKHdpbmRvdy5zY3JvbGxZID4gMCkge1xuXHRcdFx0bmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyLXNjcm9sbGVkXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuYXZCYXIuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1iYXItc2Nyb2xsZWRcIik7XG5cdFx0fVxuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0dXBQYWdlO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xufVxuXG4vKiBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIFxcYG1haW5cXGAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gKi9cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIFxcYGgxXFxgIGVsZW1lbnRzIHdpdGhpbiBcXGBzZWN0aW9uXFxgIGFuZFxuICogXFxgYXJ0aWNsZVxcYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5wcmUge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuICogUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAqIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuaW1nIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5cbmJ1dHRvbixcbmlucHV0IHsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b24sXG5zZWxlY3QgeyAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuW3R5cGU9XCJidXR0b25cIl0sXG5bdHlwZT1cInJlc2V0XCJdLFxuW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuXG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gSUUuXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gKiAgICBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cbiAqL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICovXG5cblt0eXBlPVwiY2hlY2tib3hcIl0sXG5bdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuICovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qIEludGVyYWN0aXZlXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cbiAqL1xuXG5kZXRhaWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLyogTWlzY1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXG4gKi9cblxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxuICovXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsU0FBUyxFQUFFLE1BQU07RUFDakIsaUJBQWlCLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsbUJBQW1CLEVBQUUsTUFBTTtFQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDM0M7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRTs7QUFFRjs7O0VBR0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7Ozs7RUFLRSxvQkFBb0IsRUFBRSxNQUFNO0VBQzVCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLGlCQUFpQixFQUFFLE1BQU07RUFDekIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1FBQ1EsTUFBTTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7U0FDUyxNQUFNO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7RUFLRTs7QUFFRjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG5cdGNvbG9yOiAjZTBlMGUwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG5cdGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG5cdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG5kaXYjY29udGVudCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uYXYtYmFyIHtcblx0cG9zaXRpb246IHN0aWNreTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRwYWRkaW5nOiAxLjVyZW0gM3JlbTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblx0ei1pbmRleDogOTk5O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogTm8gYmFja2dyb3VuZCBpbml0aWFsbHkgKi9cblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDApOyAvKiBObyBibHVyIGluaXRpYWxseSAqL1xuXHRib3gtc2hhZG93OlxuXHRcdDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcblx0XHQwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuXG4ubmF2LWJhci1zY3JvbGxlZCB7XG5cdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsgLyogQWRqdXN0IHRoZSBibHVyIHZhbHVlIGFzIG5lZWRlZCAqL1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKFxuXHRcdDc5LFxuXHRcdDIwOSxcblx0XHQxOTcsXG5cdFx0MC4xNVxuXHQpOyAvKiBSR0JBIGNvbG9yIGZvciB0cmFuc2x1Y2VudCB0ZWFsICovXG59XG5cbi5sb2dvLWJveCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMXJlbTtcbn1cblxuLmxvZ28tYm94IGltZyB7XG5cdHdpZHRoOiAzcmVtO1xuXHRoZWlnaHQ6IGF1dG87XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZy1jb250YWluZXI6aG92ZXIge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dvLWJveCBhIHtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubG9nLWNvbnRhaW5lcjpob3ZlcjphZnRlciB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ubG9nLWNvbnRhaW5lcjpob3ZlciAubG9nby1ib3ggYSBoMSB7XG5cdGNvbG9yOiAjZmZmZmZmZmY7XG59XG5cbi5sb2ctY29udGFpbmVyOmhvdmVyIC5sb2dvLWJveCBpbWcge1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XG59XG5cbi5sb2ctY29udGFpbmVyOmFmdGVyIHtcblx0YmFja2dyb3VuZDogIzRmZDFjNTtcblx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0Ym90dG9tOiAxcHg7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRoZWlnaHQ6IDVweDtcblx0bGVmdDogMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcblx0d2lkdGg6IDA7XG5cdHotaW5kZXg6IC0xO1xufVxuXG4ubG9nby1ib3ggYSBoMSB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRtYXJnaW46IDA7XG59XG5cbi5uYXYtbGlua3Mge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDJyZW07XG59XG5cbi5uYXYtbGlua3MgYSB7XG5cdGNvbG9yOiAjZTBlMGUwO1xuXHRmb250LXNpemU6IDEuNXJlbTtcblx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubmF2LWxpbmtzIGE6aG92ZXIge1xuXHRjb2xvcjogI2ZmZmZmZmZmO1xufVxuXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyIGEge1xuXHRjb2xvcjogI2ZmZmZmZmZmO1xufVxuXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyIGltZyB7XG5cdGZpbHRlcjogYnJpZ2h0bmVzcygzKTtcbn1cblxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlcjphZnRlciB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LWxpbmtzIC5uYXYtYm94IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmF2LWxpbmtzIC5uYXYtYm94OmFmdGVyIHtcblx0YmFja2dyb3VuZDogIzRmZDFjNTtcblx0Ym9yZGVyLXJhZGl1czogMTZweDtcblx0Ym90dG9tOiAtNXB4O1xuXHRjb250ZW50OiBcIlwiO1xuXHRkaXNwbGF5OiBibG9jaztcblx0aGVpZ2h0OiA1cHg7XG5cdGxlZnQ6IDA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG5cdHdpZHRoOiAwO1xuXHR6LWluZGV4OiAtMTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiA3cmVtO1xufVxuXG4uZmlyc3QtYmxvY2staG9tZSB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG5cdHBhZGRpbmc6IDAgM3JlbTtcblx0Z2FwOiAxcmVtO1xufVxuXG4udGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3ViLXRleHQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxcmVtO1xufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcblx0d2lkdGg6IDc1JTtcbn1cblxuLmNvbXB1dGVyIHtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bztcbn1cblxuLmZpcnN0LXRleHQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0Z2FwOiAxcmVtO1xufVxuXG4udHlwZWQtdGV4dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LXNpemU6IDJyZW07XG59XG5cbiN0eXBlZC10ZXh0IHtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjb2xvcjogIzRmZDFjNTtcbn1cblxuLnR5cGVkLWN1cnNvciB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Y29sb3I6ICM0ZmQxYzU7XG5cdGFuaW1hdGlvbjogYmxpbmsgMC43cyBpbmZpbml0ZTtcbn1cblxuLm5hdi1ib3gge1xuXHRwYWRkaW5nOiAwLjI1cmVtIDByZW07XG59XG5cbi53YXZlIHtcblx0d2lkdGg6IDJyZW07XG5cdGhlaWdodDogYXV0bztcblx0YW5pbWF0aW9uLW5hbWU6IHdhdmUtYW5pbWF0aW9uO1xuXHRhbmltYXRpb24tZHVyYXRpb246IDIuNXM7XG5cdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuXHR0cmFuc2Zvcm0tb3JpZ2luOiA3MCUgNzAlO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xufVxuXG5Aa2V5ZnJhbWVzIHdhdmUtYW5pbWF0aW9uIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR9XG5cdDEwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcblx0fVxuXHQyMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDEyZGVnKTtcblx0fVxuXHQzMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG5cdH1cblx0NDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg5ZGVnKTtcblx0fVxuXHQ1MCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR9XG59XG5cbi5uYW1lIHtcblx0Zm9udC1zaXplOiAzcmVtO1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRjb2xvcjogIzRmZDFjNTtcbn1cblxuLm5hdi1ib3gge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG5cdGdhcDogMC41cmVtO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2LWJveCBpbWcge1xuXHR3aWR0aDogMnJlbTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4uc2Vjb25kLXRleHQtY29udGFpbmVyIGg1IHtcblx0bWFyZ2luOiAwO1xufVxuXG4uZmlyc3QtdGV4dC1jb250YWluZXIgaDMge1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LXNpemU6IDJyZW07XG5cdG1hcmdpbjogMDtcbn1cblxuLnNlY29uZC10ZXh0LWNvbnRhaW5lciBoNSB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNlY29uZC1ibG9jay1ob21lIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0cGFkZGluZzogMCAzcmVtO1xuXHRtYXJnaW46IDAgNXJlbTtcblx0Z2FwOiA1cmVtO1xufVxuXG4uc2Vjb25kLWJsb2NrLXRleHQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhhY2tlciB7XG5cdHdpZHRoOiAzNSU7XG5cdGhlaWdodDogYXV0bztcbn1cblxuLnRleHQtZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAzcmVtO1xufVxuXG4udGV4dC1kaXYgaDMge1xuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMS45cmVtO1xuXHRtYXJnaW46IDA7XG59XG5cbi5oaWdobGlnaHQsXG4udGV4dC1kaXYgaDMgc3BhbiB7XG5cdGNvbG9yOiAjNGZkMWM1O1xufVxuXG4uc3ViLWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMnJlbTtcbn1cblxuLnN1Yi10ZXh0IHtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0bWFyZ2luOiAwO1xufVxuXG4uc29jaWFsLWljb25zIGltZyB7XG5cdHdpZHRoOiAyLjVyZW07XG5cdGhlaWdodDogYXV0bztcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zb2NpYWwtaWNvbnMgaW1nOmhvdmVyIHtcblx0ZmlsdGVyOiBpbnZlcnQoMSk7XG5cdGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoNzksIDIwOSwgMTk3LCAwLjUpO1xufVxuXG4uc29jaWFsLXRleHQtZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjVyZW07XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtdGV4dC1kaXYgaDMge1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zb2NpYWwtdGV4dC1kaXYgKiB7XG5cdG1hcmdpbjogMDtcbn1cblxuLnNvY2lhbC1pY29ucyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRnYXA6IDJyZW07XG59XG5cbi5zb2NpYWwtc3ViLXRleHQge1xuXHRmb250LXNpemU6IDAuOHJlbTtcblx0Zm9udC13ZWlnaHQ6IDU1MDtcbn1cblxuLnNvY2lhbC1ibG9jayB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMnJlbTtcbn1cblxuLnNvY2lhbC1zdWItdGV4dCBzcGFuIHtcblx0Y29sb3I6ICM0ZmQxYzU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGb290ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mb290ZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAxcmVtO1xuXHRoZWlnaHQ6IDIuNXJlbTtcblx0bWFyZ2luLXRvcDogMnJlbTtcblx0cGFkZGluZzogMC4yNXJlbSAzcmVtO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1O1xufVxuXG5mb290ZXIgYSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMC41cmVtO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGZvbnQtc2l6ZTogMS4zcmVtO1xuXHRmb250LXdlaWdodDogMTAwO1xuXHRjb2xvcjogI2ZhZmFmYTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuZm9vdGVyIHAge1xuXHRtYXJnaW46IDAuNXJlbSAwO1xufVxuXG5mb290ZXIgYTpob3ZlcixcbmZvb3RlciBhOmFjdGl2ZSB7XG5cdGNvbG9yOiAjYjAyZTM5O1xufVxuXG5mb290ZXIgYSBpbWcge1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbmZvb3RlciBhOmhvdmVyIGltZyxcbmZvb3RlciBhOmFjdGl2ZSBpbWcge1xuXHRmaWx0ZXI6IGludmVydCgxKTtcblx0Ym94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSg3OSwgMjA5LCAxOTcsIDAuNSk7XG59XG5cbi5hdC1zeW1ib2wge1xuXHRmb250LXdlaWdodDogOTAwO1xufVxuXG5mb290ZXIgaW1nIHtcblx0d2lkdGg6IDJyZW07XG5cdGhlaWdodDogYXV0bztcbn1cblxuLyogU3R5bGVzIHRoZSBzY3JvbGxiYXIgdHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmMzZTUwOyAvKiBBIGRhcmtlciBzaGFkZSBmb3IgY29udHJhc3QgKi9cbn1cblxuLyogU3R5bGVzIHRoZSBzY3JvbGxiYXIgaGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTsgLyogVGhlIGNvbG9yIHlvdSBwcm92aWRlZCBmb3IgdGhlIGhhbmRsZSAqL1xuXHRib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHRoZSBoYW5kbGUgKi9cbn1cblxuLyogU3R5bGVzIHRoZSBzY3JvbGxiYXIgaXRzZWxmIChpbmNsdWRpbmcgdGhlIHRyYWNrKSAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG5cdHdpZHRoOiAxMnB4OyAvKiBBZGp1c3QgdG8gdGhlIHNpemUgeW91IHByZWZlciAqL1xufVxuXG4vKiBPcHRpb25hbDogc3R5bGVzIHRoZSBzY3JvbGxiYXIgaGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzNhOWQ5YjsgLyogQSBzbGlnaHRseSBkYXJrZXIgc2hhZGUgb2YgdGhlIGhhbmRsZSBjb2xvciBmb3IgaG92ZXIgKi9cbn1cblxuLyogRmlyZWZveCAqL1xuaHRtbCB7XG5cdHNjcm9sbGJhci1jb2xvcjogIzRmZDFjNSAjMmMzZTUwO1xuXHRzY3JvbGxiYXItd2lkdGg6IHRoaW47IC8qIFlvdSBjYW4gdXNlICdhdXRvJyBvciAndGhpbicgKi9cbn1cblxuLmFib3V0LXBhZ2Uge1xuXHRwYWRkaW5nOiAwcmVtIDNyZW07XG5cdHBhZGRpbmctYm90dG9tOiAycmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDVyZW07XG59XG5cbi5hYm91dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDJyZW07XG59XG5cbi5hYm91dC10ZXh0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWJvdXQtbWUgc3BhbiB7XG5cdGNvbG9yOiAjNGZkMWM1O1xufVxuXG4uYWJvdXQtbWUtZGl2IHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmFib3V0LW1lLXBpY3R1cmUge1xuXHR3aWR0aDogNzUlO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5hYm91dC1tZS10ZXh0LWRpdiB7XG5cdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDFyZW07XG59XG5cbi5hYm91dC1tZS10ZXh0Om50aC1vZi10eXBlKDEpIHtcblx0bWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRW5kIG9mIEZvb3RlciBzdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uY2Fyb3VzZWwtaXRlbSBpbWcge1xuXHR3aWR0aDogM3JlbTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4uc2Vjb25kLWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogM3JlbTtcblx0cGFkZGluZzogMCAzcmVtO1xufVxuXG4uc2Vjb25kLWRpdi10ZXh0IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGdhcDogMXJlbTtcbn1cblxuLnNlY29uZC1kaXYtdGV4dCBwIHtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRtYXJnaW46IDA7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5jYXJvdXNlbC1kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRib3JkZXI6IDNweCBzb2xpZCAjZGRkZGRkO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYmFjay1idG4sXG4uZm9yd2FyZC1idG4ge1xuXHRmb250LXNpemU6IDIuNXJlbTtcblx0Y29sb3I6ICMxNTIwMmI7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG5cdGJvcmRlcjogbm9uZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2Fyb3VzZWwge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRvdmVyZmxvdy14OiBhdXRvO1xuXHRnYXA6IDJyZW07XG5cdHBhZGRpbmc6IDFyZW07XG5cdHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XG5cdG1hcmdpbi10b3A6IDAuMnJlbTtcblx0bWFyZ2luLWxlZnQ6IDFyZW07XG5cdG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmNhcm91c2VsLWl0ZW0ge1xuXHRtaW4td2lkdGg6IDdyZW07XG5cdG1pbi1oZWlnaHQ6IDEwcmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiAxcmVtO1xuXHR0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcblx0LW1zLXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMTc7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHAge1xuXHRmb250LXNpemU6IDEuNXJlbTtcblx0bWFyZ2luOiAwO1xufVxuXG4uY2Fyb3VzZWwtaXRlbXMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Z2FwOiAycmVtO1xufVxuXG4vKiBTdHlsZSB0aGUgc2Nyb2xsYmFyICovXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcblx0d2lkdGg6IDVweDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsYmFyICovXG5cdGhlaWdodDogMTBweDsgLyogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIHNjcm9sbGJhciAqL1xufVxuXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0aHVtYiAqL1xuXHRib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgdGhlIHNjcm9sbGJhciB0aHVtYiAqL1xufVxuXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciB0aHVtYiBvbiBob3ZlciAqL1xufVxuXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgdHJhY2sgKi9cbn1cblxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciBjb3JuZXIgKi9cbn1cblxuLnByb2plY3QtZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAycmVtO1xuXHRwYWRkaW5nOiAwIDNyZW07XG59XG5cbi5wcm9qZWN0LWRpdiBoMSB7XG5cdGNvbG9yOiAjNGZkMWM1O1xufVxuXG4ucHJvamVjdC1pdGVtIGltZyB7XG5cdHdpZHRoOiAzcmVtO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5wcm9qZWN0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIseURBQTRDO0NBQzVDLG1DQUFtQztDQUNuQyx1Q0FBdUM7Q0FDdkMsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixNQUFNO0NBQ04sT0FBTztDQUNQLFFBQVE7Q0FDUixhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtDQUNuQixvQkFBb0I7Q0FDcEIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWiw2QkFBNkIsRUFBRSw0QkFBNEI7Q0FDM0Qsd0JBQXdCLEVBQUUsc0JBQXNCO0NB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Q2xFOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG9CQUFvQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG5cXHRjb2xvcjogI2UwZTBlMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvYmFja2dyb3VuZC5qcGcpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xcblxcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcXG5cXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuZGl2I2NvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5hdi1iYXIge1xcblxcdHBvc2l0aW9uOiBzdGlja3k7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxLjVyZW0gM3JlbTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcblxcdHotaW5kZXg6IDk5OTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogTm8gYmFja2dyb3VuZCBpbml0aWFsbHkgKi9cXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMCk7IC8qIE5vIGJsdXIgaW5pdGlhbGx5ICovXFxuXFx0Ym94LXNoYWRvdzpcXG5cXHRcXHQwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksXFxuXFx0XFx0MCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG59XFxuXFxuLm5hdi1iYXItc2Nyb2xsZWQge1xcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsgLyogQWRqdXN0IHRoZSBibHVyIHZhbHVlIGFzIG5lZWRlZCAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoXFxuXFx0XFx0NzksXFxuXFx0XFx0MjA5LFxcblxcdFxcdDE5NyxcXG5cXHRcXHQwLjE1XFxuXFx0KTsgLyogUkdCQSBjb2xvciBmb3IgdHJhbnNsdWNlbnQgdGVhbCAqL1xcbn1cXG5cXG4ubG9nby1ib3gge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5sb2dvLWJveCBpbWcge1xcblxcdHdpZHRoOiAzcmVtO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2ctY29udGFpbmVyOmhvdmVyIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2dvLWJveCBhIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5sb2ctY29udGFpbmVyOmhvdmVyOmFmdGVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxvZy1jb250YWluZXI6aG92ZXIgLmxvZ28tYm94IGEgaDEge1xcblxcdGNvbG9yOiAjZmZmZmZmZmY7XFxufVxcblxcbi5sb2ctY29udGFpbmVyOmhvdmVyIC5sb2dvLWJveCBpbWcge1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcygzKTtcXG59XFxuXFxuLmxvZy1jb250YWluZXI6YWZ0ZXIge1xcblxcdGJhY2tncm91bmQ6ICM0ZmQxYzU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTZweDtcXG5cXHRib3R0b206IDFweDtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRoZWlnaHQ6IDVweDtcXG5cXHRsZWZ0OiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcXG5cXHR3aWR0aDogMDtcXG5cXHR6LWluZGV4OiAtMTtcXG59XFxuXFxuLmxvZ28tYm94IGEgaDEge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5uYXYtbGlua3Mge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDJyZW07XFxufVxcblxcbi5uYXYtbGlua3MgYSB7XFxuXFx0Y29sb3I6ICNlMGUwZTA7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDEwMDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5uYXYtbGlua3MgYTpob3ZlciB7XFxuXFx0Y29sb3I6ICNmZmZmZmZmZjtcXG59XFxuXFxuLm5hdi1saW5rcyAubmF2LWJveDpob3ZlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94OmhvdmVyIGEge1xcblxcdGNvbG9yOiAjZmZmZmZmZmY7XFxufVxcblxcbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXIgaW1nIHtcXG5cXHRmaWx0ZXI6IGJyaWdodG5lc3MoMyk7XFxufVxcblxcbi5uYXYtbGlua3MgLm5hdi1ib3g6aG92ZXI6YWZ0ZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubmF2LWxpbmtzIC5uYXYtYm94IHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5uYXYtbGlua3MgLm5hdi1ib3g6YWZ0ZXIge1xcblxcdGJhY2tncm91bmQ6ICM0ZmQxYzU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTZweDtcXG5cXHRib3R0b206IC01cHg7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0aGVpZ2h0OiA1cHg7XFxuXFx0bGVmdDogMDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XFxuXFx0d2lkdGg6IDA7XFxuXFx0ei1pbmRleDogLTE7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogN3JlbTtcXG59XFxuXFxuLmZpcnN0LWJsb2NrLWhvbWUge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuXFx0cGFkZGluZzogMCAzcmVtO1xcblxcdGdhcDogMXJlbTtcXG59XFxuXFxuLnRleHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zdWItdGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5pbWFnZS1jb250YWluZXIge1xcblxcdHdpZHRoOiA3NSU7XFxufVxcblxcbi5jb21wdXRlciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uZmlyc3QtdGV4dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi50eXBlZC10ZXh0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI3R5cGVkLXRleHQge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGNvbG9yOiAjNGZkMWM1O1xcbn1cXG5cXG4udHlwZWQtY3Vyc29yIHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG5cXHRhbmltYXRpb246IGJsaW5rIDAuN3MgaW5maW5pdGU7XFxufVxcblxcbi5uYXYtYm94IHtcXG5cXHRwYWRkaW5nOiAwLjI1cmVtIDByZW07XFxufVxcblxcbi53YXZlIHtcXG5cXHR3aWR0aDogMnJlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxuXFx0YW5pbWF0aW9uLW5hbWU6IHdhdmUtYW5pbWF0aW9uO1xcblxcdGFuaW1hdGlvbi1kdXJhdGlvbjogMi41cztcXG5cXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXG5cXHR0cmFuc2Zvcm0tb3JpZ2luOiA3MCUgNzAlO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXG59XFxuXFxuQGtleWZyYW1lcyB3YXZlLWFuaW1hdGlvbiB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG5cXHQxMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuXFx0fVxcblxcdDIwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMTJkZWcpO1xcblxcdH1cXG5cXHQzMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XFxuXFx0fVxcblxcdDQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoOWRlZyk7XFxuXFx0fVxcblxcdDUwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcblxcdH1cXG59XFxuXFxuLm5hbWUge1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiAjNGZkMWM1O1xcbn1cXG5cXG4ubmF2LWJveCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuXFx0Z2FwOiAwLjVyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1ib3ggaW1nIHtcXG5cXHR3aWR0aDogMnJlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5zZWNvbmQtdGV4dC1jb250YWluZXIgaDUge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmZpcnN0LXRleHQtY29udGFpbmVyIGgzIHtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5zZWNvbmQtdGV4dC1jb250YWluZXIgaDUge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4uc2Vjb25kLWJsb2NrLWhvbWUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiAwIDNyZW07XFxuXFx0bWFyZ2luOiAwIDVyZW07XFxuXFx0Z2FwOiA1cmVtO1xcbn1cXG5cXG4uc2Vjb25kLWJsb2NrLXRleHQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGFja2VyIHtcXG5cXHR3aWR0aDogMzUlO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLnRleHQtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAzcmVtO1xcbn1cXG5cXG4udGV4dC1kaXYgaDMge1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDEuOXJlbTtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5oaWdobGlnaHQsXFxuLnRleHQtZGl2IGgzIHNwYW4ge1xcblxcdGNvbG9yOiAjNGZkMWM1O1xcbn1cXG5cXG4uc3ViLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMnJlbTtcXG59XFxuXFxuLnN1Yi10ZXh0IHtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnNvY2lhbC1pY29ucyBpbWcge1xcblxcdHdpZHRoOiAyLjVyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnNvY2lhbC1pY29ucyBpbWc6aG92ZXIge1xcblxcdGZpbHRlcjogaW52ZXJ0KDEpO1xcblxcdGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoNzksIDIwOSwgMTk3LCAwLjUpO1xcbn1cXG5cXG4uc29jaWFsLXRleHQtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAwLjVyZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNvY2lhbC10ZXh0LWRpdiBoMyB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zb2NpYWwtdGV4dC1kaXYgKiB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uc29jaWFsLWljb25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG5cXG4uc29jaWFsLXN1Yi10ZXh0IHtcXG5cXHRmb250LXNpemU6IDAuOHJlbTtcXG5cXHRmb250LXdlaWdodDogNTUwO1xcbn1cXG5cXG4uc29jaWFsLWJsb2NrIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG5cXG4uc29jaWFsLXN1Yi10ZXh0IHNwYW4ge1xcblxcdGNvbG9yOiAjNGZkMWM1O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRm9vdGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0aGVpZ2h0OiAyLjVyZW07XFxuXFx0bWFyZ2luLXRvcDogMnJlbTtcXG5cXHRwYWRkaW5nOiAwLjI1cmVtIDNyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuZm9vdGVyIGEge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDAuNXJlbTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxLjNyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDEwMDtcXG5cXHRjb2xvcjogI2ZhZmFmYTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuXFx0bWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIsXFxuZm9vdGVyIGE6YWN0aXZlIHtcXG5cXHRjb2xvcjogI2IwMmUzOTtcXG59XFxuXFxuZm9vdGVyIGEgaW1nIHtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuZm9vdGVyIGE6aG92ZXIgaW1nLFxcbmZvb3RlciBhOmFjdGl2ZSBpbWcge1xcblxcdGZpbHRlcjogaW52ZXJ0KDEpO1xcblxcdGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoNzksIDIwOSwgMTk3LCAwLjUpO1xcbn1cXG5cXG4uYXQtc3ltYm9sIHtcXG5cXHRmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG5cXHR3aWR0aDogMnJlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIFN0eWxlcyB0aGUgc2Nyb2xsYmFyIHRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzJjM2U1MDsgLyogQSBkYXJrZXIgc2hhZGUgZm9yIGNvbnRyYXN0ICovXFxufVxcblxcbi8qIFN0eWxlcyB0aGUgc2Nyb2xsYmFyIGhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7IC8qIFRoZSBjb2xvciB5b3UgcHJvdmlkZWQgZm9yIHRoZSBoYW5kbGUgKi9cXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4OyAvKiBSb3VuZGVkIGNvcm5lcnMgZm9yIHRoZSBoYW5kbGUgKi9cXG59XFxuXFxuLyogU3R5bGVzIHRoZSBzY3JvbGxiYXIgaXRzZWxmIChpbmNsdWRpbmcgdGhlIHRyYWNrKSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiAxMnB4OyAvKiBBZGp1c3QgdG8gdGhlIHNpemUgeW91IHByZWZlciAqL1xcbn1cXG5cXG4vKiBPcHRpb25hbDogc3R5bGVzIHRoZSBzY3JvbGxiYXIgaGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNhOWQ5YjsgLyogQSBzbGlnaHRseSBkYXJrZXIgc2hhZGUgb2YgdGhlIGhhbmRsZSBjb2xvciBmb3IgaG92ZXIgKi9cXG59XFxuXFxuLyogRmlyZWZveCAqL1xcbmh0bWwge1xcblxcdHNjcm9sbGJhci1jb2xvcjogIzRmZDFjNSAjMmMzZTUwO1xcblxcdHNjcm9sbGJhci13aWR0aDogdGhpbjsgLyogWW91IGNhbiB1c2UgJ2F1dG8nIG9yICd0aGluJyAqL1xcbn1cXG5cXG4uYWJvdXQtcGFnZSB7XFxuXFx0cGFkZGluZzogMHJlbSAzcmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAycmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDVyZW07XFxufVxcblxcbi5hYm91dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDJyZW07XFxufVxcblxcbi5hYm91dC10ZXh0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0LW1lIHNwYW4ge1xcblxcdGNvbG9yOiAjNGZkMWM1O1xcbn1cXG5cXG4uYWJvdXQtbWUtZGl2IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFib3V0LW1lLXBpY3R1cmUge1xcblxcdHdpZHRoOiA3NSU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uYWJvdXQtbWUtdGV4dC1kaXYge1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5hYm91dC1tZS10ZXh0Om50aC1vZi10eXBlKDEpIHtcXG5cXHRtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFbmQgb2YgRm9vdGVyIHN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLmNhcm91c2VsLWl0ZW0gaW1nIHtcXG5cXHR3aWR0aDogM3JlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5zZWNvbmQtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAzcmVtO1xcblxcdHBhZGRpbmc6IDAgM3JlbTtcXG59XFxuXFxuLnNlY29uZC1kaXYtdGV4dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxufVxcblxcbi5zZWNvbmQtZGl2LXRleHQgcCB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdG1hcmdpbjogMDtcXG5cXHRmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uY2Fyb3VzZWwtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJvcmRlcjogM3B4IHNvbGlkICNkZGRkZGQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmJhY2stYnRuLFxcbi5mb3J3YXJkLWJ0biB7XFxuXFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0Y29sb3I6ICMxNTIwMmI7XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXJvdXNlbCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcblxcdGdhcDogMnJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xcblxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xcblxcdG1hcmdpbi10b3A6IDAuMnJlbTtcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5jYXJvdXNlbC1pdGVtIHtcXG5cXHRtaW4td2lkdGg6IDdyZW07XFxuXFx0bWluLWhlaWdodDogMTByZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xcblxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmMTc7XFxufVxcblxcbi5jYXJvdXNlbC1pdGVtIHAge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmNhcm91c2VsLWl0ZW1zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAycmVtO1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgc2Nyb2xsYmFyICovXFxuLmNhcm91c2VsOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDVweDsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsYmFyICovXFxuXFx0aGVpZ2h0OiAxMHB4OyAvKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgc2Nyb2xsYmFyICovXFxufVxcblxcbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM0ZmQxYzU7IC8qIENvbG9yIG9mIHRoZSBzY3JvbGxiYXIgdGh1bWIgKi9cXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7IC8qIFJvdW5kZWQgY29ybmVycyBmb3IgdGhlIHNjcm9sbGJhciB0aHVtYiAqL1xcbn1cXG5cXG4uY2Fyb3VzZWw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGZkMWM1OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIHRodW1iIG9uIGhvdmVyICovXFxufVxcblxcbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiBDb2xvciBvZiB0aGUgc2Nyb2xsYmFyIHRyYWNrICovXFxufVxcblxcbi5jYXJvdXNlbDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogQ29sb3Igb2YgdGhlIHNjcm9sbGJhciBjb3JuZXIgKi9cXG59XFxuXFxuLnByb2plY3QtZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAycmVtO1xcblxcdHBhZGRpbmc6IDAgM3JlbTtcXG59XFxuXFxuLnByb2plY3QtZGl2IGgxIHtcXG5cXHRjb2xvcjogIzRmZDFjNTtcXG59XFxuXFxuLnByb2plY3QtaXRlbSBpbWcge1xcblxcdHdpZHRoOiAzcmVtO1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiB0KCl7cmV0dXJuIHQ9T2JqZWN0LmFzc2lnbj9PYmplY3QuYXNzaWduLmJpbmQoKTpmdW5jdGlvbih0KXtmb3IodmFyIHM9MTtzPGFyZ3VtZW50cy5sZW5ndGg7cysrKXt2YXIgZT1hcmd1bWVudHNbc107Zm9yKHZhciBuIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbikmJih0W25dPWVbbl0pfXJldHVybiB0fSx0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgcz17c3RyaW5nczpbXCJUaGVzZSBhcmUgdGhlIGRlZmF1bHQgdmFsdWVzLi4uXCIsXCJZb3Uga25vdyB3aGF0IHlvdSBzaG91bGQgZG8/XCIsXCJVc2UgeW91ciBvd24hXCIsXCJIYXZlIGEgZ3JlYXQgZGF5IVwiXSxzdHJpbmdzRWxlbWVudDpudWxsLHR5cGVTcGVlZDowLHN0YXJ0RGVsYXk6MCxiYWNrU3BlZWQ6MCxzbWFydEJhY2tzcGFjZTohMCxzaHVmZmxlOiExLGJhY2tEZWxheTo3MDAsZmFkZU91dDohMSxmYWRlT3V0Q2xhc3M6XCJ0eXBlZC1mYWRlLW91dFwiLGZhZGVPdXREZWxheTo1MDAsbG9vcDohMSxsb29wQ291bnQ6SW5maW5pdHksc2hvd0N1cnNvcjohMCxjdXJzb3JDaGFyOlwifFwiLGF1dG9JbnNlcnRDc3M6ITAsYXR0cjpudWxsLGJpbmRJbnB1dEZvY3VzRXZlbnRzOiExLGNvbnRlbnRUeXBlOlwiaHRtbFwiLG9uQmVnaW46ZnVuY3Rpb24odCl7fSxvbkNvbXBsZXRlOmZ1bmN0aW9uKHQpe30scHJlU3RyaW5nVHlwZWQ6ZnVuY3Rpb24odCxzKXt9LG9uU3RyaW5nVHlwZWQ6ZnVuY3Rpb24odCxzKXt9LG9uTGFzdFN0cmluZ0JhY2tzcGFjZWQ6ZnVuY3Rpb24odCl7fSxvblR5cGluZ1BhdXNlZDpmdW5jdGlvbih0LHMpe30sb25UeXBpbmdSZXN1bWVkOmZ1bmN0aW9uKHQscyl7fSxvblJlc2V0OmZ1bmN0aW9uKHQpe30sb25TdG9wOmZ1bmN0aW9uKHQscyl7fSxvblN0YXJ0OmZ1bmN0aW9uKHQscyl7fSxvbkRlc3Ryb3k6ZnVuY3Rpb24odCl7fX0sZT1uZXcoLyojX19QVVJFX18qL2Z1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe312YXIgbj1lLnByb3RvdHlwZTtyZXR1cm4gbi5sb2FkPWZ1bmN0aW9uKGUsbixpKXtpZihlLmVsPVwic3RyaW5nXCI9PXR5cGVvZiBpP2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaSk6aSxlLm9wdGlvbnM9dCh7fSxzLG4pLGUuaXNJbnB1dD1cImlucHV0XCI9PT1lLmVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSxlLmF0dHI9ZS5vcHRpb25zLmF0dHIsZS5iaW5kSW5wdXRGb2N1c0V2ZW50cz1lLm9wdGlvbnMuYmluZElucHV0Rm9jdXNFdmVudHMsZS5zaG93Q3Vyc29yPSFlLmlzSW5wdXQmJmUub3B0aW9ucy5zaG93Q3Vyc29yLGUuY3Vyc29yQ2hhcj1lLm9wdGlvbnMuY3Vyc29yQ2hhcixlLmN1cnNvckJsaW5raW5nPSEwLGUuZWxDb250ZW50PWUuYXR0cj9lLmVsLmdldEF0dHJpYnV0ZShlLmF0dHIpOmUuZWwudGV4dENvbnRlbnQsZS5jb250ZW50VHlwZT1lLm9wdGlvbnMuY29udGVudFR5cGUsZS50eXBlU3BlZWQ9ZS5vcHRpb25zLnR5cGVTcGVlZCxlLnN0YXJ0RGVsYXk9ZS5vcHRpb25zLnN0YXJ0RGVsYXksZS5iYWNrU3BlZWQ9ZS5vcHRpb25zLmJhY2tTcGVlZCxlLnNtYXJ0QmFja3NwYWNlPWUub3B0aW9ucy5zbWFydEJhY2tzcGFjZSxlLmJhY2tEZWxheT1lLm9wdGlvbnMuYmFja0RlbGF5LGUuZmFkZU91dD1lLm9wdGlvbnMuZmFkZU91dCxlLmZhZGVPdXRDbGFzcz1lLm9wdGlvbnMuZmFkZU91dENsYXNzLGUuZmFkZU91dERlbGF5PWUub3B0aW9ucy5mYWRlT3V0RGVsYXksZS5pc1BhdXNlZD0hMSxlLnN0cmluZ3M9ZS5vcHRpb25zLnN0cmluZ3MubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0LnRyaW0oKX0pLGUuc3RyaW5nc0VsZW1lbnQ9XCJzdHJpbmdcIj09dHlwZW9mIGUub3B0aW9ucy5zdHJpbmdzRWxlbWVudD9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUub3B0aW9ucy5zdHJpbmdzRWxlbWVudCk6ZS5vcHRpb25zLnN0cmluZ3NFbGVtZW50LGUuc3RyaW5nc0VsZW1lbnQpe2Uuc3RyaW5ncz1bXSxlLnN0cmluZ3NFbGVtZW50LnN0eWxlLmNzc1RleHQ9XCJjbGlwOiByZWN0KDAgMCAwIDApO2NsaXAtcGF0aDppbnNldCg1MCUpO2hlaWdodDoxcHg7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3doaXRlLXNwYWNlOm5vd3JhcDt3aWR0aDoxcHg7XCI7dmFyIHI9QXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGUuc3RyaW5nc0VsZW1lbnQuY2hpbGRyZW4pLG89ci5sZW5ndGg7aWYobylmb3IodmFyIGE9MDthPG87YSs9MSllLnN0cmluZ3MucHVzaChyW2FdLmlubmVySFRNTC50cmltKCkpfWZvcih2YXIgdSBpbiBlLnN0clBvcz0wLGUuY3VycmVudEVsQ29udGVudD10aGlzLmdldEN1cnJlbnRFbENvbnRlbnQoZSksZS5jdXJyZW50RWxDb250ZW50JiZlLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoPjAmJihlLnN0clBvcz1lLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoLTEsZS5zdHJpbmdzLnVuc2hpZnQoZS5jdXJyZW50RWxDb250ZW50KSksZS5zZXF1ZW5jZT1bXSxlLnN0cmluZ3MpZS5zZXF1ZW5jZVt1XT11O2UuYXJyYXlQb3M9MCxlLnN0b3BOdW09MCxlLmxvb3A9ZS5vcHRpb25zLmxvb3AsZS5sb29wQ291bnQ9ZS5vcHRpb25zLmxvb3BDb3VudCxlLmN1ckxvb3A9MCxlLnNodWZmbGU9ZS5vcHRpb25zLnNodWZmbGUsZS5wYXVzZT17c3RhdHVzOiExLHR5cGV3cml0ZTohMCxjdXJTdHJpbmc6XCJcIixjdXJTdHJQb3M6MH0sZS50eXBpbmdDb21wbGV0ZT0hMSxlLmF1dG9JbnNlcnRDc3M9ZS5vcHRpb25zLmF1dG9JbnNlcnRDc3MsZS5hdXRvSW5zZXJ0Q3NzJiYodGhpcy5hcHBlbmRDdXJzb3JBbmltYXRpb25Dc3MoZSksdGhpcy5hcHBlbmRGYWRlT3V0QW5pbWF0aW9uQ3NzKGUpKX0sbi5nZXRDdXJyZW50RWxDb250ZW50PWZ1bmN0aW9uKHQpe3JldHVybiB0LmF0dHI/dC5lbC5nZXRBdHRyaWJ1dGUodC5hdHRyKTp0LmlzSW5wdXQ/dC5lbC52YWx1ZTpcImh0bWxcIj09PXQuY29udGVudFR5cGU/dC5lbC5pbm5lckhUTUw6dC5lbC50ZXh0Q29udGVudH0sbi5hcHBlbmRDdXJzb3JBbmltYXRpb25Dc3M9ZnVuY3Rpb24odCl7dmFyIHM9XCJkYXRhLXR5cGVkLWpzLWN1cnNvci1jc3NcIjtpZih0LnNob3dDdXJzb3ImJiFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW1wiK3MrXCJdXCIpKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7ZS5zZXRBdHRyaWJ1dGUocyxcInRydWVcIiksZS5pbm5lckhUTUw9XCJcXG4gICAgICAgIC50eXBlZC1jdXJzb3J7XFxuICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgICAgICAudHlwZWQtY3Vyc29yLnR5cGVkLWN1cnNvci0tYmxpbmt7XFxuICAgICAgICAgIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgfVxcbiAgICAgICAgQGtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XFxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxcbiAgICAgICAgfVxcbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHR5cGVkanNCbGlua3tcXG4gICAgICAgICAgMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxcbiAgICAgICAgICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgfVxcbiAgICAgIFwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZSl9fSxuLmFwcGVuZEZhZGVPdXRBbmltYXRpb25Dc3M9ZnVuY3Rpb24odCl7dmFyIHM9XCJkYXRhLXR5cGVkLWZhZGVvdXQtanMtY3NzXCI7aWYodC5mYWRlT3V0JiYhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltcIitzK1wiXVwiKSl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2Uuc2V0QXR0cmlidXRlKHMsXCJ0cnVlXCIpLGUuaW5uZXJIVE1MPVwiXFxuICAgICAgICAudHlwZWQtZmFkZS1vdXR7XFxuICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cztcXG4gICAgICAgIH1cXG4gICAgICAgIC50eXBlZC1jdXJzb3IudHlwZWQtY3Vyc29yLS1ibGluay50eXBlZC1mYWRlLW91dHtcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDA7XFxuICAgICAgICAgIGFuaW1hdGlvbjogMDtcXG4gICAgICAgIH1cXG4gICAgICBcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGUpfX0sZX0oKSksbj1uZXcoLyojX19QVVJFX18qL2Z1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe312YXIgcz10LnByb3RvdHlwZTtyZXR1cm4gcy50eXBlSHRtbENoYXJzPWZ1bmN0aW9uKHQscyxlKXtpZihcImh0bWxcIiE9PWUuY29udGVudFR5cGUpcmV0dXJuIHM7dmFyIG49dC5zdWJzdHJpbmcocykuY2hhckF0KDApO2lmKFwiPFwiPT09bnx8XCImXCI9PT1uKXt2YXIgaTtmb3IoaT1cIjxcIj09PW4/XCI+XCI6XCI7XCI7dC5zdWJzdHJpbmcocysxKS5jaGFyQXQoMCkhPT1pJiYhKDErICsrcz50Lmxlbmd0aCk7KTtzKyt9cmV0dXJuIHN9LHMuYmFja1NwYWNlSHRtbENoYXJzPWZ1bmN0aW9uKHQscyxlKXtpZihcImh0bWxcIiE9PWUuY29udGVudFR5cGUpcmV0dXJuIHM7dmFyIG49dC5zdWJzdHJpbmcocykuY2hhckF0KDApO2lmKFwiPlwiPT09bnx8XCI7XCI9PT1uKXt2YXIgaTtmb3IoaT1cIj5cIj09PW4/XCI8XCI6XCImXCI7dC5zdWJzdHJpbmcocy0xKS5jaGFyQXQoMCkhPT1pJiYhKC0tczwwKTspO3MtLX1yZXR1cm4gc30sdH0oKSksaT0vKiNfX1BVUkVfXyovZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQscyl7ZS5sb2FkKHRoaXMscyx0KSx0aGlzLmJlZ2luKCl9dmFyIHM9dC5wcm90b3R5cGU7cmV0dXJuIHMudG9nZ2xlPWZ1bmN0aW9uKCl7dGhpcy5wYXVzZS5zdGF0dXM/dGhpcy5zdGFydCgpOnRoaXMuc3RvcCgpfSxzLnN0b3A9ZnVuY3Rpb24oKXt0aGlzLnR5cGluZ0NvbXBsZXRlfHx0aGlzLnBhdXNlLnN0YXR1c3x8KHRoaXMudG9nZ2xlQmxpbmtpbmcoITApLHRoaXMucGF1c2Uuc3RhdHVzPSEwLHRoaXMub3B0aW9ucy5vblN0b3AodGhpcy5hcnJheVBvcyx0aGlzKSl9LHMuc3RhcnQ9ZnVuY3Rpb24oKXt0aGlzLnR5cGluZ0NvbXBsZXRlfHx0aGlzLnBhdXNlLnN0YXR1cyYmKHRoaXMucGF1c2Uuc3RhdHVzPSExLHRoaXMucGF1c2UudHlwZXdyaXRlP3RoaXMudHlwZXdyaXRlKHRoaXMucGF1c2UuY3VyU3RyaW5nLHRoaXMucGF1c2UuY3VyU3RyUG9zKTp0aGlzLmJhY2tzcGFjZSh0aGlzLnBhdXNlLmN1clN0cmluZyx0aGlzLnBhdXNlLmN1clN0clBvcyksdGhpcy5vcHRpb25zLm9uU3RhcnQodGhpcy5hcnJheVBvcyx0aGlzKSl9LHMuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMucmVzZXQoITEpLHRoaXMub3B0aW9ucy5vbkRlc3Ryb3kodGhpcyl9LHMucmVzZXQ9ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9ITApLGNsZWFySW50ZXJ2YWwodGhpcy50aW1lb3V0KSx0aGlzLnJlcGxhY2VUZXh0KFwiXCIpLHRoaXMuY3Vyc29yJiZ0aGlzLmN1cnNvci5wYXJlbnROb2RlJiYodGhpcy5jdXJzb3IucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmN1cnNvciksdGhpcy5jdXJzb3I9bnVsbCksdGhpcy5zdHJQb3M9MCx0aGlzLmFycmF5UG9zPTAsdGhpcy5jdXJMb29wPTAsdCYmKHRoaXMuaW5zZXJ0Q3Vyc29yKCksdGhpcy5vcHRpb25zLm9uUmVzZXQodGhpcyksdGhpcy5iZWdpbigpKX0scy5iZWdpbj1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5vcHRpb25zLm9uQmVnaW4odGhpcyksdGhpcy50eXBpbmdDb21wbGV0ZT0hMSx0aGlzLnNodWZmbGVTdHJpbmdzSWZOZWVkZWQodGhpcyksdGhpcy5pbnNlcnRDdXJzb3IoKSx0aGlzLmJpbmRJbnB1dEZvY3VzRXZlbnRzJiZ0aGlzLmJpbmRGb2N1c0V2ZW50cygpLHRoaXMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7MD09PXQuc3RyUG9zP3QudHlwZXdyaXRlKHQuc3RyaW5nc1t0LnNlcXVlbmNlW3QuYXJyYXlQb3NdXSx0LnN0clBvcyk6dC5iYWNrc3BhY2UodC5zdHJpbmdzW3Quc2VxdWVuY2VbdC5hcnJheVBvc11dLHQuc3RyUG9zKX0sdGhpcy5zdGFydERlbGF5KX0scy50eXBld3JpdGU9ZnVuY3Rpb24odCxzKXt2YXIgZT10aGlzO3RoaXMuZmFkZU91dCYmdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5mYWRlT3V0Q2xhc3MpJiYodGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZmFkZU91dENsYXNzKSx0aGlzLmN1cnNvciYmdGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcykpO3ZhciBpPXRoaXMuaHVtYW5pemVyKHRoaXMudHlwZVNwZWVkKSxyPTE7ITAhPT10aGlzLnBhdXNlLnN0YXR1cz90aGlzLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3M9bi50eXBlSHRtbENoYXJzKHQscyxlKTt2YXIgaT0wLG89dC5zdWJzdHJpbmcocyk7aWYoXCJeXCI9PT1vLmNoYXJBdCgwKSYmL15cXF5cXGQrLy50ZXN0KG8pKXt2YXIgYT0xO2ErPShvPS9cXGQrLy5leGVjKG8pWzBdKS5sZW5ndGgsaT1wYXJzZUludChvKSxlLnRlbXBvcmFyeVBhdXNlPSEwLGUub3B0aW9ucy5vblR5cGluZ1BhdXNlZChlLmFycmF5UG9zLGUpLHQ9dC5zdWJzdHJpbmcoMCxzKSt0LnN1YnN0cmluZyhzK2EpLGUudG9nZ2xlQmxpbmtpbmcoITApfWlmKFwiYFwiPT09by5jaGFyQXQoMCkpe2Zvcig7XCJgXCIhPT10LnN1YnN0cmluZyhzK3IpLmNoYXJBdCgwKSYmKHIrKywhKHMrcj50Lmxlbmd0aCkpOyk7dmFyIHU9dC5zdWJzdHJpbmcoMCxzKSxwPXQuc3Vic3RyaW5nKHUubGVuZ3RoKzEscytyKSxjPXQuc3Vic3RyaW5nKHMrcisxKTt0PXUrcCtjLHItLX1lLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe2UudG9nZ2xlQmxpbmtpbmcoITEpLHM+PXQubGVuZ3RoP2UuZG9uZVR5cGluZyh0LHMpOmUua2VlcFR5cGluZyh0LHMsciksZS50ZW1wb3JhcnlQYXVzZSYmKGUudGVtcG9yYXJ5UGF1c2U9ITEsZS5vcHRpb25zLm9uVHlwaW5nUmVzdW1lZChlLmFycmF5UG9zLGUpKX0saSl9LGkpOnRoaXMuc2V0UGF1c2VTdGF0dXModCxzLCEwKX0scy5rZWVwVHlwaW5nPWZ1bmN0aW9uKHQscyxlKXswPT09cyYmKHRoaXMudG9nZ2xlQmxpbmtpbmcoITEpLHRoaXMub3B0aW9ucy5wcmVTdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLHRoaXMpKTt2YXIgbj10LnN1YnN0cmluZygwLHMrPWUpO3RoaXMucmVwbGFjZVRleHQobiksdGhpcy50eXBld3JpdGUodCxzKX0scy5kb25lVHlwaW5nPWZ1bmN0aW9uKHQscyl7dmFyIGU9dGhpczt0aGlzLm9wdGlvbnMub25TdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLHRoaXMpLHRoaXMudG9nZ2xlQmxpbmtpbmcoITApLHRoaXMuYXJyYXlQb3M9PT10aGlzLnN0cmluZ3MubGVuZ3RoLTEmJih0aGlzLmNvbXBsZXRlKCksITE9PT10aGlzLmxvb3B8fHRoaXMuY3VyTG9vcD09PXRoaXMubG9vcENvdW50KXx8KHRoaXMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZS5iYWNrc3BhY2UodCxzKX0sdGhpcy5iYWNrRGVsYXkpKX0scy5iYWNrc3BhY2U9ZnVuY3Rpb24odCxzKXt2YXIgZT10aGlzO2lmKCEwIT09dGhpcy5wYXVzZS5zdGF0dXMpe2lmKHRoaXMuZmFkZU91dClyZXR1cm4gdGhpcy5pbml0RmFkZU91dCgpO3RoaXMudG9nZ2xlQmxpbmtpbmcoITEpO3ZhciBpPXRoaXMuaHVtYW5pemVyKHRoaXMuYmFja1NwZWVkKTt0aGlzLnRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3M9bi5iYWNrU3BhY2VIdG1sQ2hhcnModCxzLGUpO3ZhciBpPXQuc3Vic3RyaW5nKDAscyk7aWYoZS5yZXBsYWNlVGV4dChpKSxlLnNtYXJ0QmFja3NwYWNlKXt2YXIgcj1lLnN0cmluZ3NbZS5hcnJheVBvcysxXTtlLnN0b3BOdW09ciYmaT09PXIuc3Vic3RyaW5nKDAscyk/czowfXM+ZS5zdG9wTnVtPyhzLS0sZS5iYWNrc3BhY2UodCxzKSk6czw9ZS5zdG9wTnVtJiYoZS5hcnJheVBvcysrLGUuYXJyYXlQb3M9PT1lLnN0cmluZ3MubGVuZ3RoPyhlLmFycmF5UG9zPTAsZS5vcHRpb25zLm9uTGFzdFN0cmluZ0JhY2tzcGFjZWQoKSxlLnNodWZmbGVTdHJpbmdzSWZOZWVkZWQoKSxlLmJlZ2luKCkpOmUudHlwZXdyaXRlKGUuc3RyaW5nc1tlLnNlcXVlbmNlW2UuYXJyYXlQb3NdXSxzKSl9LGkpfWVsc2UgdGhpcy5zZXRQYXVzZVN0YXR1cyh0LHMsITEpfSxzLmNvbXBsZXRlPWZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLm9uQ29tcGxldGUodGhpcyksdGhpcy5sb29wP3RoaXMuY3VyTG9vcCsrOnRoaXMudHlwaW5nQ29tcGxldGU9ITB9LHMuc2V0UGF1c2VTdGF0dXM9ZnVuY3Rpb24odCxzLGUpe3RoaXMucGF1c2UudHlwZXdyaXRlPWUsdGhpcy5wYXVzZS5jdXJTdHJpbmc9dCx0aGlzLnBhdXNlLmN1clN0clBvcz1zfSxzLnRvZ2dsZUJsaW5raW5nPWZ1bmN0aW9uKHQpe3RoaXMuY3Vyc29yJiYodGhpcy5wYXVzZS5zdGF0dXN8fHRoaXMuY3Vyc29yQmxpbmtpbmchPT10JiYodGhpcy5jdXJzb3JCbGlua2luZz10LHQ/dGhpcy5jdXJzb3IuY2xhc3NMaXN0LmFkZChcInR5cGVkLWN1cnNvci0tYmxpbmtcIik6dGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZShcInR5cGVkLWN1cnNvci0tYmxpbmtcIikpKX0scy5odW1hbml6ZXI9ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSp0LzIpK3R9LHMuc2h1ZmZsZVN0cmluZ3NJZk5lZWRlZD1mdW5jdGlvbigpe3RoaXMuc2h1ZmZsZSYmKHRoaXMuc2VxdWVuY2U9dGhpcy5zZXF1ZW5jZS5zb3J0KGZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgucmFuZG9tKCktLjV9KSl9LHMuaW5pdEZhZGVPdXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3JldHVybiB0aGlzLmVsLmNsYXNzTmFtZSs9XCIgXCIrdGhpcy5mYWRlT3V0Q2xhc3MsdGhpcy5jdXJzb3ImJih0aGlzLmN1cnNvci5jbGFzc05hbWUrPVwiIFwiK3RoaXMuZmFkZU91dENsYXNzKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5hcnJheVBvcysrLHQucmVwbGFjZVRleHQoXCJcIiksdC5zdHJpbmdzLmxlbmd0aD50LmFycmF5UG9zP3QudHlwZXdyaXRlKHQuc3RyaW5nc1t0LnNlcXVlbmNlW3QuYXJyYXlQb3NdXSwwKToodC50eXBld3JpdGUodC5zdHJpbmdzWzBdLDApLHQuYXJyYXlQb3M9MCl9LHRoaXMuZmFkZU91dERlbGF5KX0scy5yZXBsYWNlVGV4dD1mdW5jdGlvbih0KXt0aGlzLmF0dHI/dGhpcy5lbC5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyLHQpOnRoaXMuaXNJbnB1dD90aGlzLmVsLnZhbHVlPXQ6XCJodG1sXCI9PT10aGlzLmNvbnRlbnRUeXBlP3RoaXMuZWwuaW5uZXJIVE1MPXQ6dGhpcy5lbC50ZXh0Q29udGVudD10fSxzLmJpbmRGb2N1c0V2ZW50cz1mdW5jdGlvbigpe3ZhciB0PXRoaXM7dGhpcy5pc0lucHV0JiYodGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIixmdW5jdGlvbihzKXt0LnN0b3AoKX0pLHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIixmdW5jdGlvbihzKXt0LmVsLnZhbHVlJiYwIT09dC5lbC52YWx1ZS5sZW5ndGh8fHQuc3RhcnQoKX0pKX0scy5pbnNlcnRDdXJzb3I9ZnVuY3Rpb24oKXt0aGlzLnNob3dDdXJzb3ImJih0aGlzLmN1cnNvcnx8KHRoaXMuY3Vyc29yPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLHRoaXMuY3Vyc29yLmNsYXNzTmFtZT1cInR5cGVkLWN1cnNvclwiLHRoaXMuY3Vyc29yLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsITApLHRoaXMuY3Vyc29yLmlubmVySFRNTD10aGlzLmN1cnNvckNoYXIsdGhpcy5lbC5wYXJlbnROb2RlJiZ0aGlzLmVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuY3Vyc29yLHRoaXMuZWwubmV4dFNpYmxpbmcpKSl9LHR9KCk7ZXhwb3J0e2kgYXMgZGVmYXVsdH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlZC5tb2R1bGUuanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vY3NzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHNldHVwUGFnZSBmcm9tIFwiLi9zZXR1cFwiO1xuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL2hvbWVwYWdlXCI7XG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCBwcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcblxuY29uc29sZS5sb2coXCJUZXN0IGJ1aWxkXCIpO1xuc2V0dXBQYWdlKCk7XG5Ib21lUGFnZSgpO1xuXG5jb25zdCBob21lTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJveDpudGgtb2YtdHlwZSgxKVwiKTtcbmNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJveDpudGgtb2YtdHlwZSgyKVwiKTtcbmNvbnN0IHByb2plY3RzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJveDpudGgtb2YtdHlwZSgzKVwiKTtcbi8vIGNvbnN0IHJlc3VtZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1ib3g6bnRoLW9mLXR5cGUoNClcIik7XG5cbmhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdEhvbWVQYWdlKCk7XG59KTtcblxuYWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGFib3V0KCk7XG59KTtcblxucHJvamVjdHNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdHByb2plY3QoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIlNoYWhpciIsIkdpdFNvY2lhbCIsIkxpbmtlZCIsIkRvY2tlciIsIlNxbCIsIkVjbGlwc2UiLCJMdWEiLCJWdWUiLCJDeXByZXNzIiwiVnNjb2RlIiwiQyIsIk5wbSIsIkJhYmVsIiwiUHJldHRpZXIiLCJFc2xpbnQiLCJXZWJwYWNrIiwiSmVzdCIsIkdpdCIsIlB5dGhvbiIsIkphdmEiLCJMaW51eCIsIkh0bWwiLCJDc3MiLCJKcyIsImNyZWF0ZUNhcm91c2VsSXRlbSIsImltYWdlIiwidGl0bGUiLCJjYXJvdXNlbEl0ZW0iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjYXJvdXNlbEltYWdlIiwic3JjIiwiYWx0IiwiY2Fyb3VzZWxUaXRsZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJidXR0b25zIiwiY2Fyb3VzZWwiLCJxdWVyeVNlbGVjdG9yIiwiYmFja0J0biIsImZvcndhcmRCdG4iLCJpc1Njcm9sbGluZyIsInNjcm9sbERpcmVjdGlvbiIsInNjcm9sbFN0ZXAiLCJhbmltYXRlU2Nyb2xsIiwic2Nyb2xsRGlzdGFuY2UiLCJzY3JvbGxMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJzY3JvbGxXaWR0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbFJpZ2h0Iiwic3RvcFNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhYm91dCIsImFib3V0UGFnZSIsImFib3V0Q29udGFpbmVyIiwiYWJvdXRUZXh0Q29udGFpbmVyIiwiYWJvdXRNZSIsImFib3V0TWVTcGFuIiwiYWJvdXRNZURpdiIsImFib3V0TWVUZXh0RGl2IiwicGFyYWdyYXBoIiwiYWJvdXRNZVRleHQiLCJhYm91dE1lVGV4dDIiLCJhYm91dE1lVGV4dDMiLCJhYm91dE1lVGV4dDQiLCJzb2NpYWxJY29ucyIsImdpdExpbmsiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiZ2l0U29jaWFsIiwibGlua2VkTGluayIsImxpbmtlZCIsInBpY3R1cmUiLCJzZWNvbmREaXYiLCJzZWNvbmREaXZUZXh0IiwiaGlnaGxpZ2h0IiwiYW5kIiwiY3JlYXRlVGV4dE5vZGUiLCJoaWdobGlnaHRUZXh0Iiwic2VudGVuY2UiLCJ0ZXh0IiwiY2Fyb3VzZWxDb250YWluZXIiLCJjYXJvdXNlbERpdiIsImNhcm91c2VsSXRlbXMiLCJjYXJvdXNlbEl0ZW0xIiwiY2Fyb3VzZWxJdGVtMiIsImNhcm91c2VsSXRlbTMiLCJjYXJvdXNlbEl0ZW00IiwiY2Fyb3VzZWxJdGVtNSIsImNhcm91c2VsSXRlbTYiLCJjYXJvdXNlbEl0ZW03IiwiY2Fyb3VzZWxJdGVtOCIsImNhcm91c2VsSXRlbTkiLCJjYXJvdXNlbEl0ZW0xMCIsImNhcm91c2VsSXRlbTExIiwiY2Fyb3VzZWxJdGVtMTIiLCJjYXJvdXNlbEl0ZW0xMyIsImNhcm91c2VsSXRlbTE0IiwiY2Fyb3VzZWxJdGVtMTUiLCJjYXJvdXNlbEl0ZW0xNiIsImNhcm91c2VsSXRlbTE3IiwiY2Fyb3VzZWxJdGVtMTgiLCJjYXJvdXNlbEl0ZW0xOSIsImNhcm91c2VsSXRlbTIwIiwiY2Fyb3VzZWxJdGVtMjEiLCJtYWluIiwiaW5uZXJIVE1MIiwiVHlwZWQiLCJDb21wdXRlciIsIkhhbmQiLCJIYWNrZXIiLCJkeW5hbWljVGV4dCIsInR5cGVkIiwic3RyaW5ncyIsInR5cGVTcGVlZCIsImJhY2tTcGVlZCIsInN0YXJ0RGVsYXkiLCJiYWNrRGVsYXkiLCJsb29wIiwic2hvd0N1cnNvciIsImN1cnNvckNoYXIiLCJhdHRyIiwiYXV0b0luc2VydENzcyIsImNvbnRlbnRUeXBlIiwiSG9tZVBhZ2UiLCJtYWluQ29udGFpbmVyIiwiZmlyc3RCbG9ja0hvbWUiLCJ0ZXh0Q29udGFpbmVyIiwic3ViVGV4dENvbnRhaW5lciIsImZpcnN0VGV4dENvbnRhaW5lciIsImZpcnN0VGV4dCIsIndhdmUiLCJzZWNvbmRUZXh0Q29udGFpbmVyIiwic2Vjb25kVGV4dCIsIm5hbWUiLCJ0eXBlZFRleHRDb250YWluZXIiLCJ0eXBlZFRleHQiLCJpZCIsImltYWdlQ29udGFpbmVyIiwic2Vjb25kQmxvY2tIb21lIiwic2Vjb25kQmxvY2tUZXh0Q29udGFpbmVyIiwidGV4dERpdiIsInNwYW4iLCJzdWJEaXYiLCJzdWJUZXh0QWZ0ZXJIaWdobGlnaHQiLCJzdWJUZXh0Iiwic3Vic3ViVGV4dCIsImhhY2tlciIsInNvY2lhbEJsb2NrIiwic29jaWFsVGV4dERpdiIsInNvY2lhbFRleHQiLCJ0ZXh0QmVmb3JlIiwidGV4dEFmdGVyIiwic3BhbkNvbnRlbnQiLCJzb2NpYWxTdWJUZXh0IiwiVG9kbyIsIkJhdHRsZXNoaXAiLCJXZWF0aGVyIiwiVGljdGFjIiwiQ2FsY3VsYXRvciIsIlJlc3RhdXJhbnQiLCJFdGNoIiwiY3JlYXRlUHJvamVjdEl0ZW0iLCJkZXNjcmlwdGlvbiIsInByb2plY3RJdGVtIiwicHJvamVjdEltYWdlIiwicHJvamVjdEl0ZW1EaXYiLCJwcm9qZWN0VGl0bGUiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJwcm9qZWN0TGlua0RpdiIsInByb2plY3RMaXZlRGVtbyIsInByb2plY3RTb3VyY2VDb2RlIiwicHJvamVjdCIsInByb2plY3REaXYiLCJwcm9qZWN0Q29udGFpbmVyIiwidG9kbyIsImJhdHRsZXNoaXAiLCJ3ZWF0aGVyIiwidGljdGFjIiwiY2FsY3VsYXRvciIsInJlc3RhdXJhbnQiLCJldGNoIiwiSWNvbiIsIkhvbWUiLCJBYm91dCIsIkNvZGUiLCJEb2MiLCJHaXRIdWIiLCJjcmVhdGVOYXZCYXIiLCJiYXIiLCJsb2dDb250YWluZXIiLCJsb2dvQm94IiwibG9nbyIsImxvZ29MaW5rIiwibG9nb1RleHQiLCJsb2dvTGluazIiLCJuYXZMaW5rcyIsImhvbWVCb3giLCJob21lTGluayIsImhvbWVJY29uIiwibWVudUxpbmtib3giLCJtZW51TGluayIsIm1lbnVJY29uIiwiY29udGFjdExpbmtib3giLCJjb250YWN0TGluayIsImNvbnRhY3RJY29uIiwiQWJvdXRMaW5rYm94IiwiQWJvdXRMaW5rIiwiQWJvdXRJY29uIiwiY29udGVudCIsImNyZWF0ZUZvb3RlciIsImZvb3RlciIsImdpdEh1YlByb2ZpbGUiLCJnaXRIdWJQcm9maWxlSW1nIiwiZ2l0SHViUHJvZmlsZVRleHQiLCJhdFN5bWJvbCIsInVzZXJuYW1lIiwic2VwZXJhdG9yIiwiZ2l0SHViUmVwbyIsInNldHVwUGFnZSIsIndpbmRvdyIsIm5hdkJhciIsInNjcm9sbFkiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiYWJvdXRMaW5rIiwicHJvamVjdHNMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==