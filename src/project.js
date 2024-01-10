import Todo from "./img/todo.png";
import Battleship from "./img/battleship.png";
import Weather from "./img/weather.png";
import Tictac from "./img/tictac.png";
import Calculator from "./img/calculator.png";
import Restaurant from "./img/restaurant.png";
import Etch from "./img/etch.png";

function createProjectItem(image, title, description, liveDemo, sourceCode) {
	const projectItem = document.createElement("div");
	projectItem.classList.add("project-item");

	const projectImage = document.createElement("img");
	projectImage.src = image;
	projectImage.alt = title;
	projectItem.appendChild(projectImage);

	const projectItemDiv = document.createElement("div");
	projectItemDiv.classList.add("project-item-div");

	const projectTitle = document.createElement("h1");
	projectTitle.textContent = title;

	const projectDescription = document.createElement("p");
	projectDescription.textContent = description;

	const projectLinkDiv = document.createElement("div");
	projectLinkDiv.classList.add("project-link-div");

	const projectLiveDemo = document.createElement("a");
	projectLiveDemo.href = liveDemo;
	projectLiveDemo.textContent = "Live Demo";
	projectLinkDiv.appendChild(projectLiveDemo);

	const projectSourceCode = document.createElement("a");
	projectSourceCode.href = sourceCode;
	projectSourceCode.textContent = "Source Code";
	projectLinkDiv.appendChild(projectSourceCode);

	projectItemDiv.appendChild(projectTitle);
	projectItemDiv.appendChild(projectDescription);
	projectItemDiv.appendChild(projectLinkDiv);
	projectItem.appendChild(projectItemDiv);

	return projectItem;
}

// loads the project page
function project() {
	const projectDiv = document.createElement("div");
	projectDiv.classList.add("project-div");
	const projectTitle = document.createElement("h1");
	projectTitle.textContent = "Projects";
	projectDiv.appendChild(projectTitle);

	const projectContainer = document.createElement("div");
	projectContainer.classList.add("project-container");

	const todo = createProjectItem(
		Todo,
		"Todo List",
		"Todo List is a powerful task management application that helps you stay organized and productive. Manage tasks, projects, and notes effortlessly. Features include priority levels, due dates, search functionality, and dark/light theme. Get started and boost your productivity today!",
		"https://shahir-47.github.io/Todo-List/",
		"https://github.com/Shahir-47/Todo-List",
	);

	const battleship = createProjectItem(
		Battleship,
		"Battleship",
		"A web-based Battleship game with a strategic AI. Players engage in classic naval warfare against a computer. Code is open for contributions and tests ensure robust gameplay.Play now!",
		"https://shahir-47.github.io/Battleship/",
		"https://github.com/Shahir-47/Battleship",
	);

	const weather = createProjectItem(
		Weather,
		"Weather App",
		"Weather Whiz is a web app providing current weather, hourly & 2-day forecasts for different locations. Switch between imperial & metric units. Built with HTML, CSS, JS, Webpack, Babel, ESLint & Prettier. APIs: OpenWeather & Mapbox. Stay prepared with accurate weather data!",
		"https://shahir-47.github.io/Weather-Whiz/",
		"https://github.com/Shahir-47/Weather-Whiz",
	);

	const tictac = createProjectItem(
		Tictac,
		"Tic Tac Toe",
		"Enjoy the classic Tic Tac Toe game with customizable markers, colors, and player names. Play against a friend or challenging AI. Responsive design, visually appealing interface. Source code for HTML, CSS, JavaScript implementation. Experience hours of interactive and addictive fun!",
		"https://shahir-47.github.io/Tic-Tac-Toe/",
		"https://github.com/Shahir-47/Tic-Tac-toe",
	);

	const calculator = createProjectItem(
		Calculator,
		"Calculator",
		"This is a simple calculator application with keyboard support. It allows you to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It also includes additional features like calculating the factorial and exponentiation.",
		"https://shahir-47.github.io/Calculator/",
		"https://github.com/Shahir-47/Calculator",
	);

	const restaurant = createProjectItem(
		Restaurant,
		"Restaurant Page",
		"A web-based platform that provides information and features related to a fictional restaurant called the Galactic Cantina. The application allows users to explore various sections such as the home page, menu page, contact page, about us page, review page, and FAQ page.",
		"https://shahir-47.github.io/Restaurant-Page/",
		"https://github.com/Shahir-47/Restaurant-Page",
	);

	const etch = createProjectItem(
		Etch,
		"Etch a Sketch",
		"Experience the classic Etch-a-Sketch fun online! Draw and create masterpieces with this simple web application. Built using HTML, CSS, and JavaScript.",
		"https://shahir-47.github.io/Etch-a-Sketch/",
		"https://github.com/Shahir-47/Etch-a-Sketch/",
	);

	projectContainer.appendChild(todo);
	projectContainer.appendChild(battleship);
	projectContainer.appendChild(weather);
	projectContainer.appendChild(tictac);
	projectContainer.appendChild(calculator);
	projectContainer.appendChild(restaurant);
	projectContainer.appendChild(etch);

	projectDiv.appendChild(projectContainer);
	const main = document.querySelector(".main-container");
	main.innerHTML = "";
	main.appendChild(projectDiv);
}

export default project;
