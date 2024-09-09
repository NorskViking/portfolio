import React, { useRef } from "react";
import { Container, Card } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "../../styles/skillMarquee.scss";

interface SkillsMarqueeProps {
    skills: {
        id: string;
        logo: string;
    }[];
}

const SkillsMarquee: React.FC<SkillsMarqueeProps> = ({ skills }) => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    // Function to manage focus
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const focusableElements = marqueeRef.current?.querySelectorAll(".icon-card");
        const focusableArray = Array.from(focusableElements || []);
        const currentIndex = focusableArray.indexOf(document.activeElement as HTMLElement);

        if (e.key === "Tab") {
            if (e.shiftKey) {
                if (currentIndex === 0) {
                    marqueeRef.current?.focus(); // Focus back to marquee container if at the first element
                    //e.preventDefault(); // Prevent default to avoid jumping out of the marquee
                }
            }
            // Handle tab (forward navigation)
            else {
                if (currentIndex === focusableArray.length -1) {
                    return;
                }
            }
        }
    };

    return (
        <Container
            fluid
            className="skill-icons-marquee"
            aria-live="polite"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            ref={marqueeRef}
        >
            <Marquee
                gradient={false}
                speed={40}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                autoFill={true}
                direction="left"
                aria-label="Skills Marquee"
            >
                <div
                    className="scrolling-wrapper"
                    role="list"
                    aria-label="List of skills"
                >
                        {skills.map((skill, index) => (
                            <Card
                                key={index}
                                className="icon-card"
                                role="list-item"
                                tabIndex={0}
                                aria-labelledby={`skill-${index}`}
                                >
                                <Card.Img
                                    variant="top"
                                    src={skill.logo}
                                    alt={skill.id}
                                    id={`skill-${index}`}
                                />
                                <Card.Text className="skill-id">{skill.id}</Card.Text>
                            </Card>
                        ))}
                </div>
            </Marquee>
        </Container>
    )
}

export default SkillsMarquee;