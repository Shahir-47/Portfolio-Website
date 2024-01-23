import "./css/normalize.css";
import "./css/style.css";
import setupPage from "./setup";
import HomePage from "./homepage";
import about from "./about";
import project from "./project";

// sets up the header and footer and then loads the home page
setupPage();
HomePage();

const homeLink = document.querySelector(".nav-box:nth-of-type(1)");
const aboutLink = document.querySelector(".nav-box:nth-of-type(2)");
const projectsLink = document.querySelector(".nav-box:nth-of-type(3)");
const resumeLink = document.querySelector(".nav-box:nth-of-type(4)");

// links if navbar switches to hamburger menu
const mobileHomeLink = document.querySelector(
	".hamburger-menu > a:nth-of-type(1)",
);
const mobileAboutLink = document.querySelector(
	".hamburger-menu > a:nth-of-type(2)",
);
const mobileProjectsLink = document.querySelector(
	".hamburger-menu > a:nth-of-type(3)",
);
const mobileResumeLink = document.querySelector(
	".hamburger-menu > a:nth-of-type(4)",
);

// logo
const logo = document.querySelector(".logo-box");

homeLink.addEventListener("click", () => {
	HomePage();
});

mobileHomeLink.addEventListener("click", () => {
	HomePage();
});

// if clicked on logo, load home page
logo.addEventListener("click", () => {
	HomePage();
});

aboutLink.addEventListener("click", () => {
	about();
});

mobileAboutLink.addEventListener("click", () => {
	about();
});

projectsLink.addEventListener("click", () => {
	project();
});

mobileProjectsLink.addEventListener("click", () => {
	project();
});

resumeLink.addEventListener("click", () => {
	window.open(
		"https://drive.google.com/file/d/1TVE1Oby9Es6bRFjeTVHstWJvQX0bowEI/view?usp=sharing",
	);
});

mobileResumeLink.addEventListener("click", () => {
	window.open(
		"https://drive.google.com/file/d/1TVE1Oby9Es6bRFjeTVHstWJvQX0bowEI/view?usp=sharing",
	);
});
