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
                            <h3>Um... Sorry about this but...</h3>
                            <br/>
                            <p>I don't actually have a website deployed for this 
                                project yet...</p>
                            <br/>
                            <p>Here's the link for code in Github.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectError;