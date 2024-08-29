import React from "react";
import { Container, Col } from "react-bootstrap";
import { educationData, workData, volunteerData } from "../data/aboutData";
import DataCard from "../components/cards/DataCard";
import ScrollContainer from "../components/container/ScrollContainer";

const About: React.FC = () => {
    return (
        <Container fluid id="about">
            <Container id="work-section">
                <h2>Arbeidserfaring</h2>
                <ScrollContainer>
                    {workData.map(work => (
                        <DataCard key={work.id} {...work}/>
                    ))}
                </ScrollContainer>
            </Container>
            <Container id="education-section">
                <h2>Utdanning</h2>
                <ScrollContainer>
                    {educationData.map(education => (
                        <DataCard key={education.id} {...education}/>
                    ))}
                </ScrollContainer>
            </Container>
            <Container id="volunteer-section">
                <h2>Frivillig arbeid</h2>
                <ScrollContainer>
                    {volunteerData.map(volunteer => (
                        <DataCard key={volunteer.id} {...volunteer}/>
                    ))}
                </ScrollContainer>
            </Container>
        </Container>
    );
}

export default About;