import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    return (
        <main className="home">
            <div className="banner">
                <h1 className="main-title">
                    CD
                </h1>

                <Link to="/about" className="about-btn">
                    about
                </Link>

                <Link to="/experience" className="experience-btn">
                    experience
                </Link>

                <Link to="/projects" className="projects-btn">
                    projects
                </Link>

                <Link to="/skills" className="skills-btn">
                    skills
                </Link>

                <Link to="/contacts" className="contacts-btn">
                    contacts
                </Link>
            </div>
        </main>
    );
}

export default Home;