import React from "react";
import myImage from "./AddingPhotos/me.png";

function Home() {
    return (
        <>
            <div className="Home-Main">
                <div className="Profile-Pic column">
                    <img src={myImage}></img>
                </div>
                <div className="Basic-Info column">
                    <h3>Name:</h3>
                    <p>Rashonda Edwards</p>
                    <h3>Occupation:</h3>
                    <p>Software Developer</p>
                    <h3>Skills:</h3>
                    <p>
                        <ul>
                            <li>
                                Programming Languages - Javascript, Python, SQL
                            </li>
                            <li>
                                Tools - React, Node.js, Express, PSQL, Git,
                                GitHub
                            </li>
                            <li>Databases - Postgres, MongoDB</li>
                            <li>
                                Knowledge - HTTP operations, RESTful APIs,
                                Cybersecurity
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="Paragraph">
                    <h3>My Personal Statement:</h3>
                    <p>
                        Dedicated and certified software developer from CSU Long
                        Beach with a background in mechanical engineering.
                        Working towards a thriving software development career,
                        leveraging skills in HTML, CSS, JavaScript, React,
                        MongoDB, PostgreSQL, and more. Passionate about
                        volunteering and have leadership experience as the
                        President of the NSBE chapter at Cal Poly Pomona.
                        Excited to contribute and create impactful coding
                        projects and grow program knowledge.{" "}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;
