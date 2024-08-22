import React from "react";
import { Container, Image, Row, Col, Card } from "react-bootstrap";
import { educationData, workData, volunteerData } from "../data/aboutData";
import DataCard from "../components/card/dataCard";

const About: React.FC = () => {
    return (
        <Container fluid id="about">
            <Container id="work-section">
                {workData.map(work => (
                    <Col md={4} key={work.id}>
                    <DataCard {...work}/>
                </Col>
                ))}
            </Container>
            <Container id="education-section">
                {educationData.map(education => (
                    <Col md={4} key={education.id}>
                        <DataCard {...education}/>
                    </Col>
                ))}
            </Container>
            <Container id="volunteer-section">
                {volunteerData.map(volunteer => (
                    <Col md={4} key={volunteer.id}>
                    <DataCard {...volunteer}/>
                </Col>
                ))}
            </Container>
        </Container>
    );
}

export default About;