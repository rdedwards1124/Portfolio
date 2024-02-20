import React from "react";
import "../AddingStyle/Projects.css";

function Projects() {
    return (
        <>
            <div className="Home-Main">
            <div className="header"><h1>Projects</h1></div>
                <div className="Paragraph">
                    <h3><a href="/ProjectError">Pokemon Pipeline</a></h3>
                    <p>
                        A user-friendly Pokémon themed Web Application for gamers of any level or any Pokémon fan to gather, trade, and share Pokémon knowledge. 
                    </p>
                    <ul>
                        <li>Full-Stack web development application that mainly utilizes React and JavaScript.</li>
                        <li>Languages/tools: React, JavaScript, Node.js, Express, PostgreSQL, Axios, SQL</li>
                        <li>Skills utilized: HTTP operations, RESTful APIs, Cybersecurity with JWT Authentication, problem-solving.</li>
                    </ul>
                    <div className="links">
                        <h4><a href="https://github.com/rdedwards1124/milestone-project-3">Github Link</a></h4>
                    </div>

                    <br/>

                    <h3><a href="/ProjectError">Movie Search Website</a></h3>
                    <p>
                        A Web Application that is a fun search feature for movies, tv shows, and video games. Gather information and store your favorites.
                    </p>
                    <ul>
                        <li>Group project that required extensive team collaboration and communication skills to manage efficiently.</li>
                        <li>Languages/tools: React, JavaScript, MongoDB, Axios</li>
                        <li>Skills utilized: HTTP operations (mostly GET methods), RESTful APIs, problem-solving, communication.</li>
                    </ul>
                    <div className="links">
                        <h4><a href="https://github.com/ARod88/Our-Movie-App">Github Link</a></h4>
                    </div>

                    <br/>

                    <h3><a href="https://rdedwards1124.github.io/Milestone-Project-1/">Maze Craze</a></h3>
                    <p>
                        A quick and fun web browser video game. This is a maze game that has two levels of difficulty and gives you an ending based on which route you take.
                    </p>
                    <ul>
                        <li>Front-End Web Browser game</li>
                        <li>Languages/tools: HTML, CSS, Javascript</li>
                        <li>Skills utilized: Problem-solving, Basic video game knowledge, UX/UI</li>
                    </ul>
                    <div className="links">
                        <h4><a href="https://github.com/rdedwards1124/Milestone-Project-1">GitHub Link</a></h4>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Projects;