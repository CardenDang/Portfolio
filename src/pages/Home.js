import { Link } from "react-router-dom";
import "../styles/styling.css";
import CDlogo from "../assets/logo_cd_silver_transparent.png";
import me from "../assets/me_circular.png";

function Home() {
    return (
        <main className="home">
            <div className="banner">
                <h1 className="CD">
                    CD
                </h1>

                <div className="homepage-btns">
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
            </div>
            <section className="mainpage">
                <img
                    src={me}
                    className="me-photo"
                />
                <div className="intro-text">
                    <h1 className="title">
                    Hello, my name is <span className="name-highlight">Carden Dang</span>
                    </h1>
                    <p className="subtitle">
                        I am a Software Enginner studying at San Jose Staté University. I specialize in creating and designing full-stack web applications. Feel free to learn more about what I'm working on here.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Home;