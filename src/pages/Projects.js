import PageLayout from "../components/PageLayout";

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

function Projects() {
    return (
        <PageLayout title="Projects">
            <section aria-labelledby="featured-projects-title">
                <h2 className="featured-projects-title" id="featured-projects-title">Featured Work</h2>
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
        </PageLayout>
    );
}

export default Projects;
