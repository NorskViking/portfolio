import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import IconButton from "../buttons/IconButton";
import "bootstrap-icons/font/bootstrap-icons.css";

interface ScrollContainerProps {
    children: React.ReactNode;
    scrollAmount?: number;
    ariaLabelLeft?: string;
    ariaLabelRight?: string;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({
    children,
    scrollAmount = 300,
    ariaLabelLeft = "Scroll left",
    ariaLabelRight = "Scroll right",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollValue = direction === "left" ? -scrollAmount : scrollAmount;
            container.scrollBy({ left: scrollValue, behavior: "smooth" });
        }
    };

    return (
        <Container className="scroll-container">
            <IconButton
                iconStandard="bi bi-chevron-left"
                iconHover="bi bi-chevron-double-left"
                ariaLabel={ariaLabelLeft}
                title={ariaLabelLeft}
                onClick={() => scroll("left")}
            />
            <Container className="scroll-content" ref={containerRef}>
                {children}
            </Container>
            <IconButton
                iconStandard="bi bi-chevron-right"
                iconHover="bi bi-chevron-double-right"
                ariaLabel={ariaLabelRight}
                title={ariaLabelRight}
                onClick={() => scroll("right")}
            />
        </Container>
    )
}

export default ScrollContainer;