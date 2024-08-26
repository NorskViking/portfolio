import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface IconLinkProps {
    href: string;
    iconStandard: string;
    iconHover: string;
    title: string;
}

const IconLink: React.FC<IconLinkProps> = ({ href, iconStandard, iconHover, title }) => {
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
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ position: "relative", display: "inline-block", textDecoration: "none", color: "inherit" }}
            >
                <i className={isACtive ? iconHover : iconStandard}></i>
            </a>
        </OverlayTrigger>
    )
}

export default IconLink;
