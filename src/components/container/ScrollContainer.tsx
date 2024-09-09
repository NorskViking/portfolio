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
    const [cardsPerPage, setCardsPerPage] = useState(1);
    const totalCards = React.Children.count(children);
    const totalPages = Math.ceil(totalCards / cardsPerPage);

    // Handle screen breakpoints and adjust the number of visible cards
    const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 1200) setCardsPerPage(3);
        else if (width >= 768) setCardsPerPage(2);
        else setCardsPerPage(1);
    };

    // Scroll left or right
    const scroll = (direction: "left" | "right") => {
        if (containerRef.current) {
        const container = containerRef.current;
        const scrollValue = direction === "left" ? -scrollAmount * cardsPerPage : scrollAmount * cardsPerPage;
        container.scrollBy({ left: scrollValue, behavior: "smooth" });

        const newIndex =
            direction === "left"
            ? Math.max(0, currentIndex - cardsPerPage)
            : Math.min(totalCards - cardsPerPage, currentIndex + cardsPerPage);
        setCurrentIndex(newIndex);
        }
    };

    useEffect(() => {
        handleResize();
        const checkOverflow = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            const isOverflow = container.scrollWidth > container.clientWidth;
            setIsOverflowing(isOverflow);
        }
        };

        checkOverflow();
        window.addEventListener("resize", handleResize);
        window.addEventListener("resize", checkOverflow);

        return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("resize", checkOverflow);
        };
    }, [children, cardsPerPage]);

    useEffect(() => {
        if (containerRef.current) {
        const container = containerRef.current;

        const handleScroll = () => {
            const { scrollLeft, clientWidth } = container;
            const newCurrentIndex = Math.round(scrollLeft / (clientWidth / cardsPerPage));
            setCurrentIndex(newCurrentIndex);
        };

        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
        }
    }, [containerRef, cardsPerPage]);

    const handlePageClick = (pageIndex: number) => {
        if (containerRef.current) {
        const container = containerRef.current;
        const clientWidth = container.clientWidth;
        container.scrollTo({
            left: pageIndex * clientWidth,
            behavior: "smooth",
        });
        setCurrentIndex(pageIndex * cardsPerPage);
        }
    };

    const showControls = isOverflowing && totalCards > cardsPerPage;

    return (
        <Container className={`scroll-container ${!showControls ? "no-overflow" : ""}`}>
        <div className="scroll-wrapper" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            {showControls && (
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
            {showControls && (
            <IconButton
                iconStandard="bi bi-chevron-right"
                iconHover="bi bi-chevron-double-right"
                ariaLabel={ariaLabelRight}
                title={ariaLabelRight}
                onClick={() => scroll("right")}
                disabled={currentIndex >= totalCards - cardsPerPage}
                className="scroll-button scroll-right"
            />
            )}
        </div>
        {showControls && (
            <Pagination className="pagination-indicator">
            {Array.from({ length: totalPages }).map((_, index) => (
                <Pagination.Item
                key={index}
                active={index === Math.floor(currentIndex / cardsPerPage)}
                onClick={() => handlePageClick(index)}
                >
                {index + 1}
                </Pagination.Item>
            ))}
            </Pagination>
        )}
        </Container>
    );
};

export default ScrollContainer;
