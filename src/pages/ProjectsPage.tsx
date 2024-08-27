import React from "react";
import { Container, Col } from "react-bootstrap";
import { projectData } from "../data/projectData";
import ProjectCard from "../components/cards/ProjectCard";

const Projects: React.FC = () => {
    return (
        <Container fluid id="projects">
            <Container>
                {projectData.map(project => (
                    <Col md={4} key={project.id}>
                        <ProjectCard {...project}/>
                    </Col>
                ))}
            </Container>
        </Container>
    )
}

export default Projects;
