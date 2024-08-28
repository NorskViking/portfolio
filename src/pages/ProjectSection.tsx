import React from "react";
import { Container } from "react-bootstrap";
import { projectData } from "../data/projectData";
import ProjectCard from "../components/cards/ProjectCard";
import ScrollContainer from "../components/container/ScrollContainer";

const ProjectSection: React.FC = () => {
    return (
        <Container fluid id="projects" className="position-relative">
            <ScrollContainer>
                {projectData.map(project => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </ScrollContainer>
        </Container>
    );
};

export default ProjectSection;
