import React from 'react';
import './AddingStyle/Footer.css';

function Footer (){
    const phone = process.env.REACT_APP_MyPhone
    return (
        <footer>
            <div className="footer-div">
                <h2>Contact Information</h2>
                <h4>Email: rashondaedwards@aol.com</h4>
                <h4>Phone Number: {phone}</h4>
                <h4></h4>
            </div>
            <div className="footer-div">
                <h2>Websites</h2>
                <h4> <a className="custom-link" href="https://www.linkedin.com/in/rashondaedwards/">LinkedIn</a></h4>
                <h4> <a className="custom-link" href="https://github.com/rdedwards1124">GitHub</a></h4>
            </div>
        </footer>
    );
}

export default Footer