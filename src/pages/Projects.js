import { Link } from "react-router-dom";

function Projects() {
    return(
        <div className="projects-style">
            <p className="projects-caption">
                HI
            </p>

            <Link to="/" className="backhome-btn">
                Home
            </Link>
        </div>
    );
}

export default Projects;