import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { projectData } from "../data/projectData";
import ProjectCard from "../components/cards/ProjectCard";

const Projects: React.FC = () => {
    const groupedProjects = projectData.reduce((result, project, index) => {
        const chunkIndex = Math.floor(index / 3);
        if (!result[chunkIndex]) {
            result[chunkIndex] = [];
        }
        result[chunkIndex].push(project);
        return result;
    }, [] as Array<typeof projectData>);
    
    return (
        <Container fluid id="projects">
            <Carousel>
                {groupedProjects.map((group, index) => (
                    <Carousel.Item key={index}>
                        <Row className="d-flex justify-content-center">
                            {group.map((project) => 
                                <Col md={4} key={project.id}>
                                    <ProjectCard {...project}/>
                                </Col>
                            )}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    )
}

export default Projects;
