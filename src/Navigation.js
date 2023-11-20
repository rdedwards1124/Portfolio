

function Navigation (){
    return (
        <nav>
            <ul>
                <li>
                    <a href="/" >
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" >
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#" onClick={()=>{}}>
                        Education
                    </a>
                </li>
                <li>
                    <a href="#" onClick={()=>{}}>
                        Experience
                    </a>
                </li>
            </ul>
            <div className="log"></div>
        </nav>
    );
}

export default Navigation