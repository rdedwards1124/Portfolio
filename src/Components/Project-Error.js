import React from "react";
import "../AddingStyle/Project-Error.css";
import PikaPic from "../AddingPhotos/pika.jpg";

function ProjectError() {
    return (
        <>
            <div className="HomeMain">
                <div className="ErrorPage">
                    <div className="ErrorPageInside">
                        <img src={PikaPic}></img>
                        <div className="whitespace">
                            <h3>Um... this is embarrassing but...</h3>
                            <br/>
                            <p>I don't actually have a website deployed for this 
                                project yet... Sorry.</p>
                            <br/>
                            {/* <p>Here's the link for code in Github. <a href = ""></a></p> */}
                            <h4><a href="/Projects">Go back to projects</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectError;