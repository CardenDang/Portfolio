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

                    <details className="education-dropdown">
                        <summary>Details</summary>

                        <div className="education-details">
                            <p>
                                <strong>GPA:</strong> 3.50
                            </p>
                            <p>
                                <strong>Relevant Coursework:</strong> Data Structures & Algorithms
                            </p>
                            <p>
                                <strong>Extracurriculars:</strong> Club Tennis
                            </p>
                        </div>
                    </details>
                </div>
            </section>

            <section className="featured-work">
                <h2 className="featured-title">
                    Featured Work
                </h2>

                <div className="projects-grid">
                    <article className="ibm-card">
                        <div className="project-info1">
                            <h3>
                                AI Personal Financial Advisor
                            </h3>
                            <p>
                                IBM watsonX multi-agent system geared towards guiding users in making informed investment decisions.
                            </p>
                        </div>
                    </article>

                    <article className="resume-card">
                        <div className="project-info2"> 
                            <h3>
                                SharkAI Resume Reviewer
                            </h3>

                            <p>
                                Amazon Bedrock AI automatically extracts and analyzes resumes; can filter through keywords and provide suggestions under secure AWS cloud. 
                            </p>
                        </div> 
                    </article>

                    <article className="sjbay-card">
                        <div className="project-info3">
                            <h4>
                                SJSU Marketplace
                            </h4>

                            <p>
                                Buyer and seller marketplace created by SJSU students for SJSU students.
                            </p>
                        </div>
                    </article>
                </div>


            </section>
        </main>
    );
}

export default Home;