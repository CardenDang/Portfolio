import { Link } from "react-router-dom";
import "../styles/styling.css";
import CDlogo from "../assets/logo_cd_silver_transparent.png";
import me from "../assets/me_circular.png";
import ibm from "../assets/ibm.png";
import sjbay from "../assets/sjbay.png";

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
                        Software Engineer | Agentic AI | Cloud Services | Fullstack Web Applications
                    </p>
                </div>
            </section>

            <section className="overview-section">
                <h1 className="overview-title">
                    Education
                </h1>

                <div className="overview-desc"> 
                    <div className="sjsu">
                       <p className="college-title">
                            Bachelor in Software Engineering
                        </p>
                        <p className="college-desc">
                            @ San José State University
                        </p> 
                        <p className="college-date">
                            Aug 2024 - Aug 2028
                        </p>
                    </div>
                </div>
            </section>

            <section className="featured-work">
                <h2>
                    Featured Work
                </h2>

                <div className="projects-grid">
                    <article className="ibm-card">
                        <img
                            src={ibm}
                            alt="AI Personal Financial Advisor project"
                            className="ibm-photo"
                        />

                        <div className="project-info">
                            <h3>
                                AI Personal Financial Advisor
                            </h3>
                            <p>
                                blah blah blah
                            </p>
                        </div>
                    </article>

                    <article className="resume-card">


                    </article>
                </div>
            </section>
        </main>
    );
}

export default Home;