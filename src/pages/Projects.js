import PageLayout from "../components/PageLayout";
import projects from "../data/projects";
import ProjectDetails from "../components/ProjectDetails";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function Projects() {
    const { hash } = useLocation();

    useLayoutEffect(() => {
        if (hash) {
            document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
        }
    }, [hash]);

    return (
        <PageLayout title="Projects">
            <p className="subtitle projects-subtitle">Take a more detailed look at my projects!</p>
            <div className="experience-list">
                {projects.map(project => (
                    <article id={project.id} className="experience-card" key={project.id} aria-labelledby={`${project.id}-title`}>
                        <h2 id={`${project.id}-title`}>{project.title}</h2>
                        <img className="project-preview" src={project.image} alt={project.imageAlt} loading="lazy" />
                        <section className="experience-description" aria-labelledby={`${project.id}-description`}>
                            <h3 id={`${project.id}-description`}>{project.detailsHeading ?? (project.detailsMarkdown ? "Project details" : "Description")}</h3>
                            {project.detailsMarkdown ? <ProjectDetails markdown={project.detailsMarkdown} /> : (
                            <p>
                                {(project.projectDescription ?? project.description)
                                    .split(/(^[\t ]*Features[\t ]*\r?$)/m)
                                    .map((text, index) => text.trim() === "Features"
                                        ? <strong className="project-features-title" key={index}>{text}</strong>
                                        : text)}
                            </p>
                            )}
                            {project.features && (
                                <div className="project-details project-section-divider">
                                    <h3>Features</h3>
                                    <ul>
                                        {project.features.map(feature => <li key={feature}>{feature}</li>)}
                                    </ul>
                                </div>
                            )}
                            {project.agents && (
                                <div className="project-table-wrapper">
                                    <table className="project-agent-table" aria-label={`${project.title} agent responsibilities`}>
                                        <thead>
                                            <tr>
                                                <th scope="col">Agent</th>
                                                <th scope="col">Responsibility</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {project.agents.map(agent => (
                                                <tr key={agent.name}>
                                                    <th scope="row">{agent.name}</th>
                                                    <td>{agent.responsibility}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            {project.impactDescription && (
                                <div className="project-impact project-section-divider">
                                    <h3>Impact</h3>
                                    <p>{project.impactDescription}</p>
                                    {project.benefits && (
                                        <ul>
                                            {project.benefits.map(benefit => (
                                                <li key={benefit.label}>
                                                    <strong>{benefit.label}</strong> — {benefit.description}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}
                        </section>
                        {project.enclosureImage && (
                            <figure className="project-enclosure">
                                <img className="project-preview" src={project.enclosureImage} alt="Sleep Quality Monitor hardware in a black ventilated enclosure with sensor wiring visible" loading="lazy" />
                                <figcaption>Sleep Quality Monitor enclosure</figcaption>
                            </figure>
                        )}
                    </article>
                ))}
            </div>
        </PageLayout>
    );
}

export default Projects;
