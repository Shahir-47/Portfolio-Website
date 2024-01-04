import Typed from "typed.js";
import Computer from "./img/computer.png";

function HomePage() {
	const mainContainer = document.createElement("div");
	mainContainer.classList.add("main-container");
	mainContainer.id = "home";

	const firstBlockHome = document.createElement("div");
	firstBlockHome.classList.add("first-block-home");

	const textContainer = document.createElement("div");
	textContainer.classList.add("text-container");

	const subTextContainer = document.createElement("div");
	subTextContainer.classList.add("sub-text-container");

	const firstTextContainer = document.createElement("div");
	firstTextContainer.classList.add("first-text-container");

	const firstText = document.createElement("h3");
	firstText.textContent = "Hello, I'm";
	firstTextContainer.appendChild(firstText);

	const wave = document.createElement("span");
	wave.classList.add("wave");
	wave.textContent = `👋`;
	firstTextContainer.appendChild(wave);

	const secondTextContainer = document.createElement("div");
	secondTextContainer.classList.add("second-text-container");

	const secondText = document.createElement("h5");
	secondText.textContent = "Shahir Ahmed";
	secondTextContainer.appendChild(secondText);

	subTextContainer.appendChild(firstTextContainer);
	subTextContainer.appendChild(secondTextContainer);

	const typedText = document.createElement("p");
	typedText.classList.add("typed-text");
	typedText.id = "typed-text";

	textContainer.appendChild(subTextContainer);
	textContainer.appendChild(typedText);

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

	const content = document.querySelector("div#content");
	content.appendChild(mainContainer);
}

function dynamicText() {
	const typed = new Typed("#typed-text", {
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
		contentType: "html",
	});
}

export default HomePage;
