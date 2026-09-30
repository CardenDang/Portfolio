import "../styles/styling.css";
import CDlogo from "../assets/logo_cd_silver_transparent.png";
import me from "../assets/me_circular.png";
import ibm from "../assets/ibm.png";
import sjbay from "../assets/sjbay.png";
import { motion } from "motion/react"


function Home() {
    return (
        <main className="home">
            <section className="mainpage">
                <motion.img 
                    src={me}
                    className="me-photo"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
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

                <div className="education-cards">
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
                                <strong>Extracurriculars:</strong> Club Tennis, Vietnamese Student Association
                            </p>
                        </div>
                    </details>
                </div>
                <article className="overview-desc skillsbuild-card" aria-labelledby="skillsbuild-title">
                    <h2 id="skillsbuild-title" className="college-title">
                        IBM SkillsBuild AI Learning Lab
                    </h2>
                    <p className="college-desc">Program courses</p>
                    <ul className="skillsbuild-courses">
                        <li>Enterprise Thinking Practitioner</li>
                        <li>Make Agentic AI Work for You</li>
                        <li>Introduction to Retrieval Augmented Generation</li>
                        <li>Unleashing the Power of AI Agents</li>
                    </ul>
                </article>
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

                    <article className="sleepqualitymonitor-card">
                        <div className="project-info3">
                            <h5>
                                Sleep Quality Monitor
                            </h5>

                            <p>
                                Monitors conditions important to quality of sleep. Data is combined with Machine Learning model to optimize sleeping conditions.
                            </p>
                        </div>
                    </article>
                </div>


            </section>
        </main>
    );
}

export default Home;
