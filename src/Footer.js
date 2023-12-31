import React from 'react';
import './AddingStyle/Footer.css';

function Footer (){
    return (
        <footer>
            <div className="footer-div">
                <h2>Contact Information</h2>
                <h4>Email: rashondaedwards@aol.com</h4>
                <h4>Phone Number: (xxx)xxx-xxxx</h4>
            </div>
            <div className="footer-div">
                <h2>Websites</h2>
                <h4>LinkedIn: <a className="custom-link" href="https://www.linkedin.com/in/rashondaedwards/">https://www.linkedin.com/in/rashondaedwards/</a></h4>
                <h4>GitHub: <a className="custom-link" href="https://github.com/rdedwards1124">https://github.com/rdedwards1124</a></h4>
            </div>
        </footer>
    );
}

export default Footer