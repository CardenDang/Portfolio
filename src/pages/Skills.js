import PageLayout from "../components/PageLayout";

const skillGroups = [
    { id: "languages", title: "Languages", skills: ["JavaScript", "Java", "SQL", "HTML", "CSS"] },
    { id: "frontend", title: "Frontend", skills: ["React", "HTML", "CSS"] },
    { id: "backend", title: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
    { id: "cloud", title: "Databases & Cloud", skills: ["AWS", "Firebase", "Firestore", "Firebase Auth", "Amazon Bedrock"] },
    { id: "tools", title: "Tools", skills: ["Git", "GitHub", "IBM watsonx Orchestrate", "AWS", "REST APIs"] },
    { id: "ai", title: "AI & Machine Learning", skills: ["IBM watsonx", "Retrieval-Augmented Generation (RAG)", "Agentic Workflows", "Multi-Agent Systems", "Machine Learning", "Resume Extraction & Analysis"] },
    { id: "other", title: "Other", skills: ["Hand Soldering"] },
];

const behavioralSkillGroups = [
    { id: "management", title: "Project Management & Leadership", skills: ["Project Management", "Leadership", "Task Delegation", "Prioritization", "Time Management", "Ownership & Accountability"] },
    { id: "collaboration", title: "Engineering Collaboration", skills: ["Teamwork", "Technical Communication", "Requirements Clarification", "Knowledge Sharing", "Giving & Receiving Feedback"] },
    { id: "problem-solving", title: "Problem Solving & Delivery", skills: ["Analytical Thinking", "Breaking Down Complex Problems", "Attention to Detail", "Adaptability", "Continuous Learning", "User-Focused Thinking"] },
];

function Skills() {
    return (
        <PageLayout title="Skills">
            <section aria-labelledby="technical-skills-title">
                <h2 className="technical-skills-title" id="technical-skills-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillGroups.map(group => (
                        <article className="skill-card" key={group.id} aria-labelledby={`${group.id}-title`}>
                            <h3 id={`${group.id}-title`}>{group.title}</h3>
                            <ul className="skill-list">
                                {group.skills.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
            <section aria-labelledby="behavioral-skills-title">
                <h2 className="technical-skills-title" id="behavioral-skills-title">Behavioral Skills</h2>
                <div className="skills-grid">
                    {behavioralSkillGroups.map(group => (
                        <article className="skill-card" key={group.id} aria-labelledby={`${group.id}-title`}>
                            <h3 id={`${group.id}-title`}>{group.title}</h3>
                            <ul className="skill-list">
                                {group.skills.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
        </PageLayout>
    );
}

export default Skills;
