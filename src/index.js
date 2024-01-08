import "./css/normalize.css";
import "./css/style.css";
import setupPage from "./setup";
import HomePage from "./homepage";
import about from "./about";
import project from "./project";

console.log("Test build");
setupPage();
HomePage();

const homeLink = document.querySelector(".nav-box:nth-of-type(1)");
const aboutLink = document.querySelector(".nav-box:nth-of-type(2)");
const projectsLink = document.querySelector(".nav-box:nth-of-type(3)");
// const resumeLink = document.querySelector(".nav-box:nth-of-type(4)");

homeLink.addEventListener("click", () => {
	HomePage();
});

aboutLink.addEventListener("click", () => {
	about();
});

projectsLink.addEventListener("click", () => {
	project();
});
