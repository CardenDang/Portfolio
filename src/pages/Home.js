import "../styles/styling.css";
import me from "../assets/me_circular.png";
import { motion } from "motion/react"


const projects = [
    {
        id: "financial-advisor",
        title: "AI Personal Financial Advisor",
        description: "IBM watsonX multi-agent system geared towards guiding users in making informed investment decisions.",
    },
    {
        id: "sharkai",
        title: "SharkAI Resume Reviewer",
        description: "Amazon Bedrock AI automatically extracts and analyzes resumes; can filter through keywords and provide suggestions under secure AWS cloud.",
    },
    {
        id: "sjsu-marketplace",
        title: "SJSU Marketplace",
        description: "Buyer and seller marketplace created by SJSU students for SJSU students.",
    },
    {
        id: "sleep-quality",
        title: "Sleep Quality Monitor",
        description: "Monitors conditions important to quality of sleep. Data is combined with a Machine Learning model to optimize sleeping conditions.",
    },
];

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

                        <div className="education-details">
                            <p>
                                <strong>GPA:</strong> 3.50
                            </p>
                            <p>
                                <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Programming in Java, Database Management Systems, Software Engineering Process Management
                            </p>
                            <p>
                                <strong>Extracurriculars:</strong> Club Tennis, Vietnamese Student Association
                            </p>
                        </div>
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

                <div className="featured-projects-grid">
                    {projects.map(project => (
                        <article className="featured-project-card" key={project.id} aria-labelledby={`${project.id}-title`}>
                            <div className="project-image-placeholder" aria-label={`Image placeholder for ${project.title}`}>
                                <span>Project image coming soon</span>
                            </div>
                            <div className="featured-project-details">
                                <h3 id={`${project.id}-title`}>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;
