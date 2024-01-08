import Todo from "./img/todo.png";
import Battleship from "./img/battleship.png";
import Weather from "./img/weather.png";
import Tictac from "./img/tictac.png";
import Calculator from "./img/calculator.png";
import Restaurant from "./img/restaurant.png";
import Etch from "./img/etch.png";

function createProjectItem(image, title, description) {
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
	projectLiveDemo.href = "#";
	projectLiveDemo.textContent = "Live Demo";
	projectLinkDiv.appendChild(projectLiveDemo);

	const projectSourceCode = document.createElement("a");
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
		"A simple todo list app made with vanilla javascript",
	);

	const battleship = createProjectItem(
		Battleship,
		"Battleship",
		"A battleship game made with vanilla javascript",
	);

	const weather = createProjectItem(
		Weather,
		"Weather App",
		"A weather app made with vanilla javascript",
	);

	const tictac = createProjectItem(
		Tictac,
		"Tic Tac Toe",
		"A tic tac toe game made with vanilla javascript",
	);

	const calculator = createProjectItem(
		Calculator,
		"Calculator",
		"A calculator made with vanilla javascript",
	);

	const restaurant = createProjectItem(
		Restaurant,
		"Restaurant Page",
		"A restaurant page made with vanilla javascript",
	);

	const etch = createProjectItem(
		Etch,
		"Etch a Sketch",
		"A etch a sketch made with vanilla javascript",
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
