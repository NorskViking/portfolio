import React from "react";
import { Container, Card } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "../../styles/skillCarousel.scss";

interface SkillsMarqueeProps {
    skills: {
        id: string;
        logo: string;
    }[];
}

const SkillsMarquee: React.FC<SkillsMarqueeProps> = ({ skills }) => {
    return (
        <Container fluid className="skills-section-container">
            <Container fluid className="skill-icons-marquee" aria-live="polite">
                <Marquee
                    gradient={false}
                    speed={50}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                    aria-label="Skills Marquee"
                >
                    <div className="scrolling-wrapper" role="list" aria-label="List of skills">
                            {skills.map((skill, index) => (
                                <Card
                                    key={index}
                                    className="icon-card"
                                    role="listitem"
                                    aria-labelledby={`skill-${index}`}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={skill.logo}
                                        alt={skill.id}
                                        id={`skill-${index}`}
                                    />
                                </Card>
                            ))}
                    </div>
                </Marquee>
            </Container>
        </Container>
    )
}

export default SkillsMarquee;