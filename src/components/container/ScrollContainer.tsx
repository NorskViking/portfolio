import React, { useRef, useState, useEffect } from "react";
import { Container, Pagination } from "react-bootstrap";
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const totalCards = React.Children.count(children);

    const scroll = (direction: "left" | "right") => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollValue = direction === "left" ? -scrollAmount : scrollAmount;
            container.scrollBy({ left: scrollValue, behavior: "smooth" });

            const newIndex = direction === "left" 
                ? Math.max(0, currentIndex -1)
                : Math.min(totalCards -1, currentIndex +1);
            setCurrentIndex(newIndex);
        }
    };

    useEffect(() => {
        const checkOverflow = () => {
            if (containerRef.current) {
                const container = containerRef.current;
                const isOverflow = container.scrollWidth > container.clientWidth;
                setIsOverflowing(isOverflow);
            }
        };

        checkOverflow();

        window.addEventListener("resize", checkOverflow)

        return ()=> {
            window.removeEventListener("resize", checkOverflow);
        }
    }, [children]);

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;

            const handleScroll = () => {
                const { scrollLeft, clientWidth } = container;
                const newCurrentIndex = Math.round(scrollLeft / clientWidth);
                setCurrentIndex(newCurrentIndex);
            };

            container.addEventListener("scroll", handleScroll);

            return () => {
                container.removeEventListener("scroll", handleScroll);
            };
        }
    }, [containerRef]);

    const handlePageClick = (pageIndex: number) => {
        if (containerRef.current) {
            const container = containerRef.current;
            const clientWidth = container.clientWidth;
            container.scrollTo({ left: pageIndex * clientWidth, behavior: "smooth" });
            setCurrentIndex(pageIndex);
        }
    };

    return (
        <Container className={`scroll-container ${!isOverflowing ? "no-overflow" : ""}`}>
            {isOverflowing && (
                <IconButton
                iconStandard="bi bi-chevron-left"
                iconHover="bi bi-chevron-double-left"
                ariaLabel={ariaLabelLeft}
                title={ariaLabelLeft}
                onClick={() => scroll("left")}
                disabled={currentIndex === 0}
                className="scroll-button scroll-left"
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
                disabled={currentIndex === totalCards - 1}
                className="scroll-button scroll-right"
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
    )
}

export default ScrollContainer;