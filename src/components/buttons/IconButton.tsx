import React, { useState } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

interface IconButtonProps {
    href?: string;
    iconStandard: string;
    iconHover: string;
    title?: string;
    variant?: string;
    onClick?: () => void;
    ariaLabel?: string;
    disabled?: boolean;
    className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
        href, 
        iconStandard, 
        iconHover,
        title,
        variant = 'primary',
        onClick,
        ariaLabel,
        disabled = false,
        className,
    }) => {
    const [isACtive, setIsActive] = useState(false);

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);
    const handleFocus = () => setIsActive(true);
    const handleBlur = () => setIsActive(false);

    return (
        <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${title}`}>{title}</Tooltip>}
        >
            <Button
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onClick={onClick}
                variant={variant}
                disabled={disabled}
                className={className}
                style={{ 
                    position: "relative",
                    display: "inline-block",
                    textDecoration: "none",
                    color: "inherit",
                    fontSize: "1.8em",
                    border: "none"
                }}
            >
                <i className={isACtive ? iconHover : iconStandard}></i>
            </Button>
        </OverlayTrigger>
    )
}

export default IconButton;
