import React from "react";
import { Card, Container, Badge } from "react-bootstrap";
import IconButton from "../buttons/IconButton";
import "bootstrap-icons/font/bootstrap-icons.css";

interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    tags: string[];
    code: string;
    demo: string;
    logo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, tags, code, demo, logo }) => {
    return (
        <Card key={id} className="project-card mb-4 shadow-sm">
            <Container className="project-logo-container">
                {logo && (
                    <Card.Img 
                        variant="top"
                        src={logo}
                        className="project-card-logo"
                        alt={`${title} logo`}
                    />
                )}
            </Container>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {tags.join(", ")}
                </Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-2 text-center">
                <IconButton
                    href={code}
                    iconStandard="bi bi-file-code"
                    iconHover="bi bi-file-code-fill"
                    title={`${title} - github project folder`}
                />
                <IconButton 
                    href={demo}
                    iconStandard="bi bi-file-play"
                    iconHover="bi bi-file-play-fill"
                    title={`${title} - demo page`}
                />
            </Card.Footer>
        </Card>
    )
}

export default ProjectCard;