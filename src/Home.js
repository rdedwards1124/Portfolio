import React from 'react';
import myImage from './me.png';

function Home (){
    return(
        <>
            <div className="Home-Main">
                <div className="Profile-Pic">
                    <img src={myImage}></img>
                </div>
                <div className="Basic-Info">
                    <ul>
                        <li>Name: Rashonda Edwards</li>
                        <br/>
                        <li>Occupation: Software Developer</li>
                        <br/>
                        <li>Skills:
                            <ul>
                                <li>Programming Languages - Javascript, Python, SQL</li>
                                <li>Tools - React, Node.js, Express, PSQL, Git, GitHub</li>
                                <li>Databases - Postgres, MongoDB</li>
                                <li>Knowledge - HTTP operations, RESTful APIs, Cybersecurity</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="Paragraph">My Personal Statement: Dedicated and certified software developer from CSU Long Beach with a background in mechanical engineering. Working towards a thriving software development career, leveraging skills in HTML, CSS, JavaScript, React, MongoDB, PostgreSQL, and more. Passionate about volunteering and have leadership experience as the President of the NSBE chapter at Cal Poly Pomona. Excited to contribute and create impactful coding projects and grow program knowledge. </div>
            </div>
        </>
    )
}

export default Home