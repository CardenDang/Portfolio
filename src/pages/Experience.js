import PageLayout from "../components/PageLayout";
import ustaLogo from "../assets/usta.png";
import ibmLogo from "../assets/ibm-logo.png";
import starbucksLogo from "../assets/starbucks.svg";
import jambaLogo from "../assets/jamba.svg";

const experiences = [
    {
        id: "usta",
        title: "Tournament Director & Volunteer",
        company: "(USTA) United States Tennis Association",
        type: "Part-time",
        dates: "Jun 2024 - Present",
        location: "San Jose, California, United States · On-site",
        skills: ["Project Management", "Event Planning"],
        logo: ustaLogo,
        description: "I organize and manage USTA-sanctioned tennis tournaments serving 100+ players across various age groups. These tournaments are held at different tournament sites siumultaneously. My responsibilities also include coordinating scheduling, staffing, and player logitstics. In addition, I act as a Court Monitor resolving on-court disputes while enforcing USTA rules to ensure fair tournament play.",
    },
    {
        id: "ibm",
        title: "AI Extern",
        company: "IBM",
        dates: "Feb 2026 - May 2026",
        location: "Remote",
        skills: ["IBM watsonx", "Retrieval-Augmented Generation (RAG)"],
        logo: ibmLogo,
        description: "Collaborated with 3 IBM mentors while acting as the Project Manager in a semester long-externship. We designed and developed an AI-powered financial advisory platform using IBM watsonx technologies to deliver a project over 10 weeks. I applied concepts from the IBM SkillsBuild Learning Plan including Retrieval-Augmented Generation (RAG), agentic workflows, and multi-agent architectures. ",
    },
    {
        id: "starbucks",
        title: "Barista",
        company: "Starbucks",
        type: "Part-time",
        dates: "Oct 2025 - Present",
        location: "San Jose, California, United States · On-site",
        skills: ["Leadership", "Operational Planning"],
        logo: starbucksLogo,
        description: "Collaborated with teammates to deliver accurate orders and consistent customer service in a fast-paced environment. Built strong communication and problem-solving skills by understanding customer needs, adapting to changing priorities, and resolving concerns. Developed attention to detail and reliability—skills I bring to building software and working on technical teams.",
    },
    {
        id: "jamba",
        title: "Shift Lead",
        company: "Jamba",
        type: "Part-time",
        dates: "Feb 2024 - Oct 2025",
        location: "San Jose, California, United States · On-site",
        skills: ["Teamwork", "Communication"],
        logo: jambaLogo,
        description: "Coordinated daily shift operations, delegated tasks, and supported teammates to keep service running smoothly. Strengthened leadership and decision-making skills by balancing competing priorities, addressing customer concerns, and maintaining quality standards. This experience shapes how I approach team projects: communicate clearly, take ownership, and help others succeed.",
    },
];

function Experience() {
    return (
        <PageLayout title="Experience">
            <div className="experience-list">
                {experiences.map(experience => (
                    <article className="experience-card" key={experience.id} aria-labelledby={`${experience.id}-title`}>
                        <div className="experience-heading">
                            <img className="company-logo" src={experience.logo} alt={`${experience.company} logo`} />
                            <div>
                                <h2 id={`${experience.id}-title`}>{experience.title}</h2>
                                <p className="experience-company">{experience.company}{experience.type && ` · ${experience.type}`}</p>
                                <p className="experience-meta">{experience.dates}</p>
                                <p className="experience-meta">{experience.location}</p>
                            </div>
                        </div>
                        <section className="experience-description" aria-labelledby={`${experience.id}-description`}>
                            <h3 id={`${experience.id}-description`}>Description</h3>
                            <p>{experience.description}</p>
                        </section>
                        <ul className="experience-skills" aria-label="Skills">
                            {experience.skills.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                    </article>
                ))}
            </div>
        </PageLayout>
    );
}

export default Experience;
