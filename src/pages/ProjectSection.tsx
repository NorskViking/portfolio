import React, { useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { projectData } from "../data/projectData";
import ProjectCard from "../components/cards/ProjectCard";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./projectSection.scss"
//import { BsChevronLeft, BsChevronRight } from "react-icons/bs"; // Import icons for the arrows

const ProjectSection: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Adjust the scroll amount as needed
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Adjust the scroll amount as needed
        }
    };

    return (
        <Container fluid id="projects" className="position-relative">
            <Button
                variant="outline-secondary"
                className="scroll-button-left"
                onClick={scrollLeft}
                aria-label="Scroll Left"
            >
                <i className="bi bi-caret-left"></i>
            </Button>

            <Button
                variant="outline-secondary"
                className="scroll-button-right"
                onClick={scrollRight}
                aria-label="Scroll Right"
            >
                <i className="bi bi-caret-right"></i>
            </Button>

            <div className="scroll-container" ref={scrollRef}>
                <Row className="flex-nowrap">
                    {projectData.map((project) => (
                        <Col
                            md={4}
                            key={project.id}
                            className="project-col"
                        >
                            <ProjectCard {...project} />
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
};

export default ProjectSection;
