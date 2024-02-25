import React from 'react';
import './AddingStyle/Navigation.css';

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
                    <a href="/Education" className="custom-link" onClick={()=>{}}>
                        Education
                    </a>
                </li>
                <li>
                    <a href="/Experience" className="custom-link" onClick={()=>{}}>
                        Experience
                    </a>
                </li>
                <li>
                    <a href="/Projects" className="custom-link" onClick={()=>{}}>
                        Projects
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation