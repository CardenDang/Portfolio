import { Link } from "react-router-dom";

function About() {
    return(
        <div className="about-style">
            <p className="about-caption">
                HI
            </p>

            <Link to="/" className="backhome-btn">
                Home
            </Link>
        </div>
    );
}

export default About;