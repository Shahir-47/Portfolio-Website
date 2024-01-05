function about () {
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('about-page');

    const aboutContainer = document.createElement('div');
    aboutContainer.classList.add('about-container');

    const aboutTextContainer = document.createElement('div');
    aboutTextContainer.classList.add('about-text-container');
    const aboutMe = document.createElement('h1');
    aboutMe.textContent = "About Me";
    aboutMe.classList.add('about-me');
    aboutTextContainer.appendChild(aboutMe);
    aboutContainer.appendChild(aboutTextContainer);

    const aboutMeDiv = document.createElement('div');
    aboutMeDiv.classList.add('about-me-div');

    const aboutMeTextDiv = document.createElement('div');
    aboutMeTextDiv.classList.add('about-me-text-div');

    const paragraph = document.createElement('div');
    paragraph.classList.add('paragraph');


    const aboutMeText = document.createElement('p');
    aboutMeText.classList.add('about-me-text');
    aboutMeText.textContent = "Hello, I'm Shahir, a dedicated Computer Science and Mathematics student at Dickinson College with a deep passion for web development. My academic and self-taught journey in programming has equipped me with the skills to craft efficient, scalable software solutions. I thrive on the challenges that come with developing clean, intuitive user interfaces and robust backend functionalities. My goal is to continuously expand my full-stack development expertise and contribute to meaningful projects in a dynamic team environment.";

    const aboutMeText2 = document.createElement('p');
    aboutMeText2.classList.add('about-me-text');
    aboutMeText2.textContent = "When I step away from the keyboard, you'll find me indulging in a variety of interests that keep me balanced and inspired. I'm an avid soccer fan, with Real Madrid's games punctuating the calendar of my personal life. In the world of mixed martial arts, I admire the strategic prowess of fighters like the retired Khabib Nurmagomedov. My taste in entertainment ranges from the captivating narratives of "The Shawshank Redemption" to the complex legal dramas of "Better Call Saul." Gaming is another passion — immersing myself in rich, story-driven worlds like those of Red Dead Redemption 2, LA Noire, and Sleeping Dogs provides not just recreation, but creative inspiration.";

    const aboutMeText3 = document.createElement('p');
    aboutMeText3.classList.add('about-me-text');
    aboutMeText3.textContent = "In addition to my studies and hobbies, I serve as a Resident Advisor, a role that has refined my interpersonal skills and ability to foster community among diverse groups. It's a role that complements my technical aspirations by emphasizing empathy, leadership, and collaboration.";

    const aboutMeText4 = document.createElement('p');
    aboutMeText4.classList.add('about-me-text');
    aboutMeText4.textContent = "I'm excited to embark on the next stage of my career journey and am actively seeking internship opportunities that will leverage my technical skills and work ethic. If you're looking for someone who brings a combination of coding proficiency and a well-rounded perspective to your team, let's connect.";

    paragraph.appendChild(aboutMeText);
    paragraph.appendChild(aboutMeText2);
    paragraph.appendChild(aboutMeText3);
    paragraph.appendChild(aboutMeText4);
    aboutMeTextDiv.appendChild(paragraph);

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

    aboutMeTextDiv.appendChild(socialIcons);
    aboutMeDiv.appendChild(aboutMeTextDiv);
    
    const picture = document.createElement("img");
    picture.src = Shahir;
    picture.alt = "Shahir";
    picture.classList.add("about-me-picture");
    aboutMeDiv.appendChild(picture);

    aboutContainer.appendChild(aboutMeDiv);
    aboutPage.appendChild(aboutContainer);

    // second half of about me




}