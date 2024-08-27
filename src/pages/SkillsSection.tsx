import React from "react";
import { Container } from "react-bootstrap";
import SkillsMarquee from "../components/marquee/SkillMarquee";
import { skillsData } from "../data/skillsData";

const SkillSection: React.FC = () => {
    return (
        <Container>
            <SkillsMarquee skills={skillsData} />
        </Container>
    )
}

export default SkillSection;