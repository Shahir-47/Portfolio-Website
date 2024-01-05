import Icon from "./img/icon.svg";
import Home from "./img/home.svg";
import About from "./img/about.svg";
import Code from "./img/code.svg";
import Doc from "./img/doc.svg";
import GitHub from "./img/gitSocial.svg";

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

function createFooter() {
	const footer = document.createElement("footer");
	footer.classList.add("footer");

	const gitHubProfile = document.createElement("a");
	gitHubProfile.href = "https://github.com/Shahir-47";

	const gitHubProfileImg = document.createElement("img");
	gitHubProfileImg.src = GitHub;
	gitHubProfileImg.alt = "gitHub Logo";

	const gitHubProfileText = document.createElement("p");
	const atSymbol = document.createElement("span");
	atSymbol.classList.add("at-symbol");
	atSymbol.textContent = "@";
	const username = document.createElement("span");
	username.textContent = "Shahir-47";
	gitHubProfileText.appendChild(atSymbol);
	gitHubProfileText.appendChild(username);

	gitHubProfile.appendChild(gitHubProfileImg);
	gitHubProfile.appendChild(gitHubProfileText);

	const seperator = document.createElement("p");
	seperator.textContent = "|";

	const gitHubRepo = document.createElement("a");
	gitHubRepo.href = "https://github.com/Shahir-47/Portfolio-Website";
	gitHubRepo.textContent = "Source Code";

	footer.appendChild(gitHubProfile);
	footer.appendChild(seperator);
	footer.appendChild(gitHubRepo);

	document.querySelector("div#content").appendChild(footer);
}

function setupPage() {
	createNavBar();
	const mainContainer = document.createElement("div");
	mainContainer.classList.add("main-container");
	document.querySelector("div#content").appendChild(mainContainer);
	createFooter();
	window.addEventListener("scroll", () => {
		const navBar = document.querySelector(".nav-bar");
		if (window.scrollY > 0) {
			navBar.classList.add("nav-bar-scrolled");
		} else {
			navBar.classList.remove("nav-bar-scrolled");
		}
	});
}

export default setupPage;
