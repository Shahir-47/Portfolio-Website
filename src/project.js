function createProjectItem(image, title, description) {
	const projectItem = document.createElement("div");
	projectItem.classList.add("project-item");

	const projectImage = document.createElement("img");
	projectImage.src = image;
}

function project() {
	const projectDiv = document.createElement("div");
	projectDiv.classList.add("project-div");
	const projectTitle = document.createElement("h1");
	projectTitle.textContent = "Projects";
	projectDiv.appendChild(projectTitle);
}
