// eslint-disable-next-line import/no-extraneous-dependencies
import Typed from "typed.js";
import Computer from "./img/computer.png";
import Hand from "./img/hand.svg";
import Hacker from "./img/hacker.svg";
import GitSocial from "./img/gitSocial.svg";
import Linked from "./img/linked.svg";

// Type.js to write dynamically changing text
function dynamicText() {
	// eslint-disable-next-line no-unused-vars
	const typed = new Typed("#typed-text", {
		// Strings to display
		strings: [
			"Full Stack Developer",
			"Creative Coder",
			"Computer Science Student",
			"Mathematics Student",
			"Aspiring Software Developer",
			"Emerging Full Stack Developer",
			"Programming Enthusiast",
			"Future Tech Professional",
			"Student of Software Engineering",
			"Coding Hobbyist",
			"Software Engineer in Training",
			"Software Engineer in the Making",
			"Software Engineer in the Works",
		],

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
		contentType: "html",
	});
}

// loads the home page
function HomePage() {
	const mainContainer = document.querySelector(".main-container");
	mainContainer.innerHTML = "";

	const firstBlockHome = document.createElement("div");
	firstBlockHome.classList.add("first-block-home");

	const textContainer = document.createElement("div");
	textContainer.classList.add("text-container");

	const subTextContainer = document.createElement("div");
	subTextContainer.classList.add("sub-text-container");

	const firstTextContainer = document.createElement("div");
	firstTextContainer.classList.add("first-text-container");

	const firstText = document.createElement("h3");
	firstText.textContent = "Hi, There!";
	firstTextContainer.appendChild(firstText);

	const wave = document.createElement("img");
	wave.classList.add("wave");
	wave.src = Hand;
	wave.alt = "Wave";
	firstTextContainer.appendChild(wave);

	const secondTextContainer = document.createElement("div");
	secondTextContainer.classList.add("second-text-container");

	const secondText = document.createElement("h5");
	secondText.textContent = "I'm ";
	const name = document.createElement("span");
	name.textContent = "Shahir Ahmed";
	name.classList.add("name");
	secondText.appendChild(name);
	secondTextContainer.appendChild(secondText);

	subTextContainer.appendChild(firstTextContainer);
	subTextContainer.appendChild(secondTextContainer);

	const typedTextContainer = document.createElement("div");
	typedTextContainer.classList.add("typed-text-container");

	const typedText = document.createElement("p");
	typedText.classList.add("typed-text");
	typedText.id = "typed-text";

	typedTextContainer.appendChild(typedText);

	textContainer.appendChild(subTextContainer);
	textContainer.appendChild(typedTextContainer);

	firstBlockHome.appendChild(textContainer);

	const imageContainer = document.createElement("div");
	imageContainer.classList.add("image-container");

	const image = document.createElement("img");
	image.src = Computer;
	image.alt = "Computer";
	image.classList.add("computer");
	imageContainer.appendChild(image);

	firstBlockHome.appendChild(imageContainer);

	mainContainer.appendChild(firstBlockHome);

	const secondBlockHome = document.createElement("div");
	secondBlockHome.classList.add("second-block-home");

	const secondBlockTextContainer = document.createElement("div");
	secondBlockTextContainer.classList.add("second-block-text-container");

	const textDiv = document.createElement("div");
	textDiv.classList.add("text-div");

	const text = document.createElement("h3");
	text.textContent = "If opportunity doesn't knock, ";

	const span = document.createElement("span");
	span.textContent = "build a door.";
	span.classList.add("span-door");

	text.appendChild(span);
	textDiv.appendChild(text);
	const subDiv = document.createElement("div");
	subDiv.classList.add("sub-div");
	const highlight = document.createElement("span");
	highlight.textContent =
		"Embracing challenges with innovation and determination, ";
	highlight.classList.add("highlight");

	const subTextAfterHighlight = document.createTextNode(
		"I channel my passion for coding into crafting solutions where none existed before. In the ever-evolving world of web development, I'm committed to turning obstacles into stepping stones for growth and learning.",
	);
	const subText = document.createElement("p");
	subText.classList.add("sub-text");

	subText.appendChild(highlight);
	subText.appendChild(subTextAfterHighlight);

	const subsubText = document.createElement("p");
	subsubText.textContent =
		"With every line of code, I aim to build web applications that are intuitive and efficient. My goal is to create tools that not only function smoothly but also enhance the user experience. It's about paving new pathways to success and ensuring they lead to meaningful results for both users and businesses";
	subsubText.classList.add("sub-text");
	subDiv.appendChild(subText);
	subDiv.appendChild(subsubText);
	textDiv.appendChild(subDiv);
	secondBlockTextContainer.appendChild(textDiv);

	const hacker = document.createElement("img");
	hacker.classList.add("hacker");
	hacker.src = Hacker;
	hacker.alt = "Hacker";
	secondBlockTextContainer.appendChild(hacker);

	const socialBlock = document.createElement("div");
	socialBlock.classList.add("social-block");

	const socialTextDiv = document.createElement("div");
	socialTextDiv.classList.add("social-text-div");

	const socialText = document.createElement("h3");
	socialText.textContent = "FIND ME ON";

	const textBefore = document.createTextNode("Feel free to ");
	const textAfter = document.createTextNode(" with me");

	const spanContent = document.createElement("span");
	spanContent.textContent = "connect";

	const socialSubText = document.createElement("p");
	socialSubText.classList.add("social-sub-text");
	socialSubText.appendChild(textBefore);
	socialSubText.appendChild(spanContent);
	socialSubText.appendChild(textAfter);

	socialTextDiv.appendChild(socialText);
	socialTextDiv.appendChild(socialSubText);

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

	socialBlock.appendChild(socialTextDiv);
	socialBlock.appendChild(socialIcons);

	secondBlockHome.appendChild(secondBlockTextContainer);
	secondBlockHome.appendChild(socialBlock);

	mainContainer.appendChild(secondBlockHome);

	dynamicText(); // Type.js
}

export default HomePage;
