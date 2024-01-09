import Shahir from "./img/shahir.PNG";
import GitSocial from "./img/gitSocial.svg";
import Linked from "./img/linked.svg";
import Docker from "./img/docker.svg";
import Sql from "./img/sql.svg";
import Eclipse from "./img/eclipse.svg";
import Lua from "./img/lua.svg";
import Vue from "./img/vue.svg";
import Cypress from "./img/cypress.svg";
import Vscode from "./img/vscode.svg";
import C from "./img/c.svg";
import Npm from "./img/npm.svg";
import Babel from "./img/babel.svg";
import Prettier from "./img/prettier.svg";
import Eslint from "./img/eslint.svg";
import Webpack from "./img/webpack.svg";
import Jest from "./img/jest.svg";
import Git from "./img/git.svg";
import Python from "./img/python.svg";
import Java from "./img/java.svg";
import Linux from "./img/linux.svg";
import Html from "./img/html.svg";
import Css from "./img/css.svg";
import Js from "./img/js.svg";

function createCarouselItem(image, title) {
	const carouselItem = document.createElement("div");
	carouselItem.classList.add("carousel-item");

	const carouselImage = document.createElement("img");
	carouselImage.src = image;
	carouselImage.alt = title;
	carouselImage.classList.add("carousel-image");

	const carouselTitle = document.createElement("p");
	carouselTitle.classList.add("carousel-title");
	carouselTitle.textContent = title;

	carouselItem.appendChild(carouselImage);
	carouselItem.appendChild(carouselTitle);

	return carouselItem;
}

// add buttons to the carousel and control the scrolling
function buttons() {
	const carousel = document.querySelector(".carousel");
	const backBtn = document.querySelector(".back-btn");
	const forwardBtn = document.querySelector(".forward-btn");
	let isScrolling = false; // This variable will be used to indicate scrolling status
	let scrollDirection = 0; // 0 for left, 1 for right
	const scrollStep = 8; // This value controls the smoothness of the scroll

	// smooth scroll animation
	const animateScroll = () => {
		// if scrolling is still in progress, then continue scrolling
		if (!isScrolling) return;

		// scroll by the scrollStep
		const scrollDistance = scrollDirection === 0 ? -scrollStep : scrollStep;
		carousel.scrollLeft += scrollDistance;

		// if the scroll is not at the end, then continue scrolling
		if (
			(scrollDirection === 0 && carousel.scrollLeft > 0) ||
			(scrollDirection === 1 &&
				carousel.scrollLeft + carousel.offsetWidth < carousel.scrollWidth)
		) {
			// animate the scroll at 60 frames per second
			requestAnimationFrame(animateScroll);
		} else {
			// otherwise, stop scrolling
			isScrolling = false;
		}
	};

	// scroll left when the back button is clicked
	const scrollLeft = () => {
		// if the scroll is not in progress, then start scrolling
		if (!isScrolling) {
			scrollDirection = 0; // 0 for left
			isScrolling = true; // the scroll is in progress
			animateScroll(); // start scrolling
		}
	};

	// scroll right when the next button is clicked
	const scrollRight = () => {
		// if the scroll is not in progress, then start scrolling
		if (!isScrolling) {
			scrollDirection = 1; // 1 for right
			isScrolling = true; // the scroll is in progress
			animateScroll(); // start scrolling
		}
	};

	// stop scrolling when the mouse leaves the button
	const stopScroll = () => {
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
	const aboutPage = document.createElement("div");
	aboutPage.classList.add("about-page");

	const aboutContainer = document.createElement("div");
	aboutContainer.classList.add("about-container");

	const aboutTextContainer = document.createElement("div");
	aboutTextContainer.classList.add("about-text-container");
	const aboutMe = document.createElement("h1");
	aboutMe.textContent = "About ";
	const aboutMeSpan = document.createElement("span");
	aboutMeSpan.textContent = "Me";
	aboutMe.appendChild(aboutMeSpan);
	aboutMe.classList.add("about-me");
	aboutTextContainer.appendChild(aboutMe);
	aboutContainer.appendChild(aboutTextContainer);

	const aboutMeDiv = document.createElement("div");
	aboutMeDiv.classList.add("about-me-div");

	const aboutMeTextDiv = document.createElement("div");
	aboutMeTextDiv.classList.add("about-me-text-div");

	const paragraph = document.createElement("div");
	paragraph.classList.add("paragraph");

	const aboutMeText = document.createElement("p");
	aboutMeText.classList.add("about-me-text");
	aboutMeText.textContent =
		"Hello, I'm Shahir, a dedicated Computer Science and Mathematics student at Dickinson College with a deep passion for web development. My academic and self-taught journey in programming has equipped me with the skills to craft efficient, scalable software solutions. I thrive on the challenges that come with developing clean, intuitive user interfaces and robust backend functionalities. My goal is to continuously expand my full-stack development expertise and contribute to meaningful projects in a dynamic team environment.";

	const aboutMeText2 = document.createElement("p");
	aboutMeText2.classList.add("about-me-text");
	aboutMeText2.textContent = `When I step away from the keyboard, you'll find me indulging in a variety of interests that keep me balanced and inspired. I'm an avid soccer fan, with Real Madrid's games punctuating the calendar of my personal life. In the world of mixed martial arts, I admire the strategic prowess of fighters like the retired Khabib Nurmagomedov. My taste in entertainment ranges from the captivating narratives of "The Shawshank Redemption" to the complex legal dramas of "Better Call Saul." Gaming is another passion — immersing myself in rich, story-driven worlds like those of Red Dead Redemption 2, LA Noire, and Sleeping Dogs provides not just recreation, but creative inspiration.`;

	const aboutMeText3 = document.createElement("p");
	aboutMeText3.classList.add("about-me-text");
	aboutMeText3.textContent =
		"In addition to my studies and hobbies, I serve as a Resident Advisor, a role that has refined my interpersonal skills and ability to foster community among diverse groups. It's a role that complements my technical aspirations by emphasizing empathy, leadership, and collaboration.";

	const aboutMeText4 = document.createElement("p");
	aboutMeText4.classList.add("about-me-text");
	aboutMeText4.textContent =
		"I'm excited to embark on the next stage of my career journey and am actively seeking internship opportunities that will leverage my technical skills and work ethic. If you're looking for someone who brings a combination of coding proficiency and a well-rounded perspective to your team, let's connect.";

	paragraph.appendChild(aboutMeText);
	paragraph.appendChild(aboutMeText2);
	paragraph.appendChild(aboutMeText3);
	paragraph.appendChild(aboutMeText4);
	aboutMeTextDiv.appendChild(paragraph);

	const socialIcons = document.createElement("div");
	socialIcons.classList.add("social-icons");

	const gitLink = document.createElement("a");
	gitLink.href = "https://github.com/Shahir-47";
	gitLink.target = "_blank";
	gitLink.rel = "noopener noreferrer";
	const gitSocial = document.createElement("img");
	gitSocial.src = GitSocial;
	gitSocial.alt = "GitHub";
	gitSocial.classList.add("social-icon");
	gitLink.appendChild(gitSocial);
	socialIcons.appendChild(gitLink);

	const linkedLink = document.createElement("a");
	linkedLink.href = "https://www.linkedin.com/in/shahir47/";
	linkedLink.target = "_blank";
	linkedLink.rel = "noopener noreferrer";
	const linked = document.createElement("img");
	linked.src = Linked;
	linked.alt = "LinkedIn";
	linked.classList.add("social-icon");
	linkedLink.appendChild(linked);
	socialIcons.appendChild(linkedLink);

	aboutMeTextDiv.appendChild(socialIcons);
	aboutMeDiv.appendChild(aboutMeTextDiv);

	const picture = document.createElement("img");
	picture.src = Shahir;
	picture.alt = "Shahir";
	picture.classList.add("about-me-picture");
	aboutMeDiv.appendChild(picture);

	aboutContainer.appendChild(aboutMeDiv);
	aboutPage.appendChild(aboutContainer);

	const secondDiv = document.createElement("div");
	secondDiv.classList.add("second-div");

	const secondDivText = document.createElement("div");
	secondDivText.classList.add("second-div-text");

	const highlight = document.createElement("span");
	highlight.classList.add("highlight");
	highlight.textContent = "Tools";

	const and = document.createTextNode(" and");

	const highlightText = document.createElement("span");
	highlightText.textContent = " Technologies";
	highlightText.classList.add("highlight");

	const sentence = document.createTextNode(" I've worked with");

	const text = document.createElement("p");
	text.classList.add("text");
	text.appendChild(highlight);
	text.appendChild(and);
	text.appendChild(highlightText);
	text.appendChild(sentence);
	secondDivText.appendChild(text);
	secondDiv.appendChild(secondDivText);

	const carouselContainer = document.createElement("div");
	carouselContainer.classList.add("carousel-container");

	const carouselDiv = document.createElement("div");
	carouselDiv.classList.add("carousel-div");

	const backBtn = document.createElement("button");
	backBtn.classList.add("back-btn");
	backBtn.textContent = "<";
	carouselDiv.appendChild(backBtn);

	const carousel = document.createElement("div");
	carousel.classList.add("carousel");

	const carouselItems = document.createElement("div");
	carouselItems.classList.add("carousel-items");

	const carouselItem1 = createCarouselItem(Html, "HTML");
	const carouselItem2 = createCarouselItem(Css, "CSS");
	const carouselItem3 = createCarouselItem(Js, "JavaScript");
	const carouselItem4 = createCarouselItem(Git, "Git");
	const carouselItem5 = createCarouselItem(Npm, "NPM");
	const carouselItem6 = createCarouselItem(Vscode, "VS Code");
	const carouselItem7 = createCarouselItem(Docker, "Docker");
	const carouselItem8 = createCarouselItem(Linux, "Linux");
	const carouselItem9 = createCarouselItem(Python, "Python");
	const carouselItem10 = createCarouselItem(Java, "Java");
	const carouselItem11 = createCarouselItem(Sql, "SQL");
	const carouselItem12 = createCarouselItem(Webpack, "Webpack");
	const carouselItem13 = createCarouselItem(Vue, "Vue.js");
	const carouselItem14 = createCarouselItem(Babel, "Babel");
	const carouselItem15 = createCarouselItem(Jest, "Jest");
	const carouselItem16 = createCarouselItem(Prettier, "Prettier");
	const carouselItem17 = createCarouselItem(Eslint, "Eslint");
	const carouselItem18 = createCarouselItem(Cypress, "Cypress");
	const carouselItem19 = createCarouselItem(C, "C++");
	const carouselItem20 = createCarouselItem(Lua, "Lua");
	const carouselItem21 = createCarouselItem(Eclipse, "Eclipse");

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

	const forwardBtn = document.createElement("button");
	forwardBtn.classList.add("forward-btn");
	forwardBtn.textContent = ">";
	carouselDiv.appendChild(forwardBtn);

	carouselContainer.appendChild(carouselDiv);
	secondDiv.appendChild(carouselContainer);
	aboutPage.appendChild(secondDiv);

	const main = document.querySelector(".main-container");
	main.innerHTML = "";
	main.appendChild(aboutPage);

	buttons();
}

export default about;
