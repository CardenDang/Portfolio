import { Link } from "react-router-dom";

function Skills() {
    return(
        <div className="skills-style">
            <p className="skills-caption">
                HI
            </p>

            <Link to="/" className="backhome-btn">
                Home
            </Link>
        </div>
    );
}

export default Skills;