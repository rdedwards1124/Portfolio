import React from "react";
import "../AddingStyle/Education.css";
// import "../AddingStyle/Experience.css";
import CalPolyImg from "../AddingPhotos/calpolybroncos.png";
import Csulbimg from "../AddingPhotos/CSULB.jpg";


import uscImg from "../AddingPhotos/USC.png";
import cppMepImg from "../AddingPhotos/cpp-mep.jpg";
import archesImg from "../AddingPhotos/arches.png";
import fedexImg from "../AddingPhotos/fedex.jpg";
import targetImg from "../AddingPhotos/target.png";


function Experience() {

    return (
        <>
            <div className="Home-Main">
                <div className="pic">
                    <img className="img" src={targetImg}></img>
                </div>
                <div className="div">
                    <h3>Role:</h3>
                    <p>California State University Long Beach</p>
                    <br />
                    <h3>Company:</h3>
                    <p>
                        Back-End Development & APIs, React & Redux, SQL & Data
                        Modeling, Programming with Python
                    </p>
                    <br />
                    <h3>Timeframe:</h3>
                    <p>June 2010 - August 2010</p>
                    <br/>
                    <h3>Skills/Experience: </h3>
                    <p>
                        HTML, CSS, JavaScript, React,
                        MongoDB, PostgreSQL, Cybersecurity, Git, GitHub
                    </p>
                </div>
                <div className="pic">
                    <img className="img" src={fedexImg}></img>
                </div>
                <div className="div">
                    <h3>Role:</h3>
                    <p>California Polytechnic State University Pomona</p>
                    <br />
                    <h3>Company:</h3>
                    <p>Mechanical Engineering</p>
                    <br />
                    <h3>Timeframe:</h3>
                    <p>June 2010 - August 2010</p>
                    <br/>
                    <h3>Skills/Experience:</h3>
                    <ul>
                        <li>SolidWorks, VisualBasic for Excel, MatLab</li>
                        <li>Advanced Mathematics, Physics, Vector Mechanics</li>
                    </ul>
                </div>
                <div className="pic">
                    <img className="img" src={archesImg}></img>
                </div>
                <div className="div">
                    <h3>Role:</h3>
                    <p>California State University Long Beach</p>
                    <br />
                    <h3>Company:</h3>
                    <p>
                        Back-End Development & APIs, React & Redux, SQL & Data
                        Modeling, Programming with Python
                    </p>
                    <br />
                    <h3>Timeframe:</h3>
                    <p>June 2010 - August 2010</p>
                    <br/>
                    <h3>Skills/Experience: </h3>
                    <p>
                        HTML, CSS, JavaScript, React,
                        MongoDB, PostgreSQL, Cybersecurity, Git, GitHub
                    </p>
                </div>
                <div className="pic">
                    <img className="img" src={cppMepImg}></img>
                </div>
                <div className="div">
                    <h3>Role:</h3>
                    <p>
                        Math Workshop Facilitator
                    </p>
                    <br />
                    <h3>Company:</h3>
                    <p>
                        California Polytechnic State University Pomona,
                        MEP(Maximizing Engineering Potential) Program
                    </p>
                    <br />
                    <h3>Timeframe:</h3>
                    <p>June 2010 - August 2010</p>
                    <br/>
                    <h3>Skills/Experience:</h3>
                    <p>
                        Leadership, Collaboration, Teaching/Tutoring, 
                        Event Planning
                    </p>
                </div>
                <div className="pic">
                    <img className="img" src={uscImg}></img>
                </div>
                <div className="div">
                    <h3>Role:</h3>
                    <p>Office Assistant/Student Worker</p>
                    <br />
                    <h3>Company:</h3>
                    <p>
                        University of Southern California, 
                        MBA Career Resource Center
                    </p>
                    <br />
                    <h3>Timeframe:</h3>
                    <p>June 2010 - August 2010</p>
                    <br/>
                    <h3>Skills/Experience: </h3>
                    <p>
                        Telephone etiquette, Customer service, Microsoft Office, 
                        Clerical
                    </p>
                </div>
            </div>
        </>
    );
}

export default Experience;