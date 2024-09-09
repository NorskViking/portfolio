import React, { useRef, useState, useEffect } from "react";
import { Container, Pagination } from "react-bootstrap";
import IconButton from "../components/buttons/IconButton";
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const totalCards = React.Children.count(children);

    const checkOverflow = () => {
        if (containerRef.current) {
            setIsOverflowing(containerRef.current.scrollWidth > containerRef.current.clientWidth);
        }
    };

    const scroll = (direction: "left" | "right") => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollValue = direction === "left" ? -scrollAmount : scrollAmount;
            container.scrollBy({ left: scrollValue, behavior: "smooth" });

            // Calculate new index based on scroll position
            const newScrollLeft = container.scrollLeft + scrollValue;
            const newCurrentIndex = Math.round(newScrollLeft / container.clientWidth);
            setCurrentIndex(newCurrentIndex);
        }
    };

    const handlePageClick = (pageIndex: number) => {
        if (containerRef.current) {
            const container = containerRef.current;
            const clientWidth = container.clientWidth;
            container.scrollTo({ left: pageIndex * clientWidth, behavior: "smooth" });
            setCurrentIndex(pageIndex);
        }
    };

    useEffect(() => {
        checkOverflow();
        window.addEventListener("resize", checkOverflow);
        return () => window.removeEventListener("resize", checkOverflow);
    }, [children]);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                const newCurrentIndex = Math.round(container.scrollLeft / container.clientWidth);
                setCurrentIndex(newCurrentIndex);
            }
        };

        if (containerRef.current) {
            containerRef.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <Container className={`scroll-container ${!isOverflowing ? "no-overflow" : ""}`}>
            {isOverflowing && (
                <IconButton
                    iconStandard="bi bi-chevron-left"
                    iconHover="bi bi-chevron-double-left"
                    ariaLabel={ariaLabelLeft}
                    title={ariaLabelLeft}
                    onClick={() => scroll("left")}
                    className="scroll-button scroll-left"
                    disabled={currentIndex === 0}
                />
            )}
            <Container className="scroll-content" ref={containerRef}>
                {children}
            </Container>
            {isOverflowing && (
                <IconButton
                    iconStandard="bi bi-chevron-right"
                    iconHover="bi bi-chevron-double-right"
                    ariaLabel={ariaLabelRight}
                    title={ariaLabelRight}
                    onClick={() => scroll("right")}
                    className="scroll-button scroll-right"
                    disabled={currentIndex === totalCards - 1}
                />
            )}
            <Pagination className="pagination-indicator">
                {Array.from({ length: totalCards }).map((_, index) => (
                    <Pagination.Item
                        key={index}
                        active={index === currentIndex}
                        onClick={() => handlePageClick(index)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </Container>
    );
};

export default ScrollContainer;
