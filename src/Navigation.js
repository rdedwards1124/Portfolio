import React from 'react';
import './Navigation.css';

function Navigation (){
    return (
        <nav>
            <ul>
                <li>
                    <a href="/" className="custom-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="custom-link">
                        About Me
                    </a>
                </li>
                <li>
                    <a href="/Education" className="custom-link" onClick={()=>{}}>
                        Education
                    </a>
                </li>
                <li>
                    <a href="#" className="custom-link" onClick={()=>{}}>
                        Experience
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation