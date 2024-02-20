import React from "react";
import "../AddingStyle/Education.css";

import uscImg from "../AddingPhotos/USC.png";
import cppMepImg from "../AddingPhotos/cpp-mep.jpg";
import archesImg from "../AddingPhotos/arches.png";
import fedexImg from "../AddingPhotos/fedex-g.png";
import targetImg from "../AddingPhotos/target.png";

function Experience() {

    return (
        <>
            <div className="Home-Main">
            <div className="header"><h1>Experience</h1></div>
                <div className="pic">
                    <img className="img" src={targetImg}></img>
                </div>
                <div className="div">
                    <h3>Role:</h3>
                    <p>Sales Floor/Presentation Team Member</p>
                    <br />
                    <h3>Company:</h3>
                    <p>
                        Target, Redondo Beach, CA
                    </p>
                    <br />
                    <h3>Timeframe:</h3>
                    <p>August 2017 - Present</p>
                    <br/>
                    <h3>Skills/Experience: </h3>
                    <p>
                        Teamwork, Collaboration, Time management, Problem solving, 
                        Communication
                    </p>
                </div>
                <div className="pic">
                    <img className="img" src={fedexImg}></img>
                </div>
                <div className="div">
                    <h3>Role:</h3>
                    <p>Warehouse Team Member</p>
                    <br />
                    <h3>Company:</h3>
                    <p>
                        FedEx Ground, San Bernardino, CA
                    </p>
                    <br />
                    <h3>Timeframe:</h3>
                    <p>August 2016 - Febuary 2017</p>
                    <br/>
                    <h3>Skills/Experience: </h3>
                    <p>
                        Teamwork, Collaboration, Fast-Paced Environment
                    </p>
                </div>
                <div className="pic">
                    <img className="img" src={archesImg}></img>
                </div>
                <div className="div">
                    <h3>Role:</h3>
                    <p>Math/Physics/Engineering Tutor</p>
                    <br />
                    <h3>Company:</h3>
                    <p>
                        ARCHES Tutoring Program at
                        California Polytechnic State University Pomona
                    </p>
                    <br />
                    <h3>Timeframe:</h3>
                    <p>October 2014 - June 2015</p>
                    <br/>
                    <h3>Skills/Experience: </h3>
                    <p>
                        Time management, Problem solving, Teaching/Tutoring
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
                        MEP(Maximizing Engineering Potential) Program at
                        California Polytechnic State University Pomona
                    </p>
                    <br />
                    <h3>Timeframe:</h3>
                    <p>September 2012 - March 2013</p>
                    <br/>
                    <h3>Skills/Experience:</h3>
                    <p>
                        Leadership, Collaboration, Teaching/Tutoring, 
                        Event Planning, Time Management
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