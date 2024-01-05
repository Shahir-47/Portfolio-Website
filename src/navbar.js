import Icon from "./img/icon.svg";
import Home from "./img/home.svg";
import About from "./img/about.svg";
import Code from "./img/code.svg";
import Doc from "./img/doc.svg";

function createNavBar() {
	const bar = document.createElement("nav");
	bar.classList.add("nav-bar");

	const logContainer = document.createElement("div");
	logContainer.classList.add("log-container");
	const logoBox = document.createElement("div");
	logoBox.classList.add("logo-box");
	const logo = document.createElement("img");
	logo.src = Icon;
	logo.alt = "logo";
	const logoLink = document.createElement("a");
	logoLink.appendChild(logo);
	logoBox.appendChild(logoLink);
	const logoText = document.createElement("h1");
	logoText.textContent = "Shahir Ahmed";
	const logoLink2 = document.createElement("a");
	logoLink2.appendChild(logoText);
	logoBox.appendChild(logoLink2);
	logContainer.appendChild(logoBox);

	const navLinks = document.createElement("div");
	navLinks.classList.add("nav-links");

	const homeBox = document.createElement("div");
	homeBox.classList.add("nav-box");
	const homeLink = document.createElement("a");
	homeLink.href = "#";
	homeLink.textContent = "Home";
	homeBox.appendChild(homeLink);

	const homeIcon = document.createElement("img");
	homeIcon.src = Home;
	homeIcon.alt = "home";
	homeBox.appendChild(homeIcon);

	navLinks.appendChild(homeBox);

	const menuLinkbox = document.createElement("div");
	menuLinkbox.classList.add("nav-box");
	const menuLink = document.createElement("a");
	menuLink.href = "#";
	menuLink.textContent = "About";
	menuLinkbox.appendChild(menuLink);

	const menuIcon = document.createElement("img");
	menuIcon.src = About;
	menuIcon.alt = "about";
	menuLinkbox.appendChild(menuIcon);
	navLinks.appendChild(menuLinkbox);

	const contactLinkbox = document.createElement("div");
	contactLinkbox.classList.add("nav-box");
	const contactLink = document.createElement("a");
	contactLink.href = "#";
	contactLink.textContent = "Projects";
	contactLinkbox.appendChild(contactLink);

	const contactIcon = document.createElement("img");
	contactIcon.src = Code;
	contactIcon.alt = "projects";
	contactLinkbox.appendChild(contactIcon);
	navLinks.appendChild(contactLinkbox);

	const AboutLinkbox = document.createElement("div");
	AboutLinkbox.classList.add("nav-box");

	const AboutLink = document.createElement("a");
	AboutLink.href = "#";
	AboutLink.textContent = "Resume";
	AboutLinkbox.appendChild(AboutLink);

	const AboutIcon = document.createElement("img");
	AboutIcon.src = Doc;
	AboutIcon.alt = "resume";
	AboutLinkbox.appendChild(AboutIcon);
	navLinks.appendChild(AboutLinkbox);

	bar.appendChild(logContainer);
	bar.appendChild(navLinks);

	const content = document.querySelector("div#content");
	content.appendChild(bar);
}

function setupPage() {
	createNavBar();
}

export default setupPage;
