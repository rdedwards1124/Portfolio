import React from "react";
import "../AddingStyle/Education.css";
import CalPolyImg from "../AddingPhotos/calpolybroncos.png";
import Csulbimg from "../AddingPhotos/CSULB.jpg"

function Education() {
    return (
        <>
            <div className="Home-Main">
                <div className="pic">
                    <img className="img" src={Csulbimg}></img>
                </div>
                <div className="div">
                    <h3>School:</h3>
                    <p>California State University Long Beach</p>
                    <br />
                    <h3>Coursework:</h3>
                    <p>
                        Back-End Development & APIs, React & Redux, SQL & Data
                        Modeling, Programming with Python
                    </p>
                    <br />
                    <h3>Personal Experience: </h3>
                    <p>
                        Dedicated and certified software developer from CSU Long
                        Beach with a background in mechanical engineering.
                        Working towards a thriving software development career,
                        leveraging skills in HTML, CSS, JavaScript, React,
                        MongoDB, PostgreSQL, and more. Passionate about
                        volunteering and have leadership experience as the
                        President of the NSBE chapter at Cal Poly Pomona.
                    </p>
                </div>
                <div className="pic">
                    <img className="img" src={CalPolyImg}></img>
                </div>
                <div className="div">
                    <h3>School:</h3>
                    <p>California Polytechnic State University Pomona</p>
                    <br />
                    <h3>Coursework:</h3>
                    <p>Mechanical Engineering</p>
                    <br />
                    <h3>Personal Experience:</h3>
                    <p>
                        Dedicated and certified software developer from CSU Long
                        Beach with a background in mechanical engineering.
                        Working towards a thriving software development career,
                        leveraging skills in HTML, CSS, JavaScript, React,
                        MongoDB, PostgreSQL, and more. Passionate about
                        volunteering and have leadership experience as the
                        President of the NSBE chapter at Cal Poly Pomona.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Education;
