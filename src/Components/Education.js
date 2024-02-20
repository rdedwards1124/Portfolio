import React from "react";
import "../AddingStyle/Education.css";
import CalPolyImg from "../AddingPhotos/calpolybroncos.png";
import Csulbimg from "../AddingPhotos/CSULB.jpg";

function Education() {

    return (
        <>
            
            <div className="Home-Main">
            <div className="header"><h1>Education</h1></div>
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
                    <h3>Skills/Experience: </h3>
                    <p>
                        HTML, CSS, JavaScript, React,
                        MongoDB, PostgreSQL, Cybersecurity, Git, GitHub
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
                    <h3>Skills/Experience:</h3>
                    <ul>
                        <li>SolidWorks, VisualBasic for Excel, MatLab</li>
                        <li>Advanced Mathematics, Physics, Vector Mechanics</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Education;
