import Icon from "./img/icon.svg";

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

	const homeLink = document.createElement("a");
	homeLink.href = "#";
	homeLink.textContent = "Home";
	navLinks.appendChild(homeLink);

	const menuLink = document.createElement("a");
	menuLink.href = "#";
	menuLink.textContent = "About";
	navLinks.appendChild(menuLink);

	const contactLink = document.createElement("a");
	contactLink.href = "#";
	contactLink.textContent = "Projects";
	navLinks.appendChild(contactLink);

	const AboutLink = document.createElement("a");
	AboutLink.href = "#";
	AboutLink.textContent = "Resume";
	navLinks.appendChild(AboutLink);

	bar.appendChild(logContainer);
	bar.appendChild(navLinks);

	const content = document.querySelector("div#content");
	content.appendChild(bar);
}

function setupPage() {
	createNavBar();
}

export default setupPage;
