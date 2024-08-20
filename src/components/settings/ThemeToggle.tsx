import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import { Rootstate } from "../../store/rootReducer";
import Button from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../styles/themeToggleButton.css";

const ThemeToggleButton: React.FC = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: Rootstate) => state.theme.isDarkMode);

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleThemeToggle();
        }
    };

    return (
        <Button
            variant={isDarkMode ? "dark" : "warning"} /* Dark for dark mode, Warning for light mode */
            onClick={handleThemeToggle}
            onKeyDown={handleKeyDown}
            className={`theme-toggle-btn ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
            aria-pressed={isDarkMode}
            aria-label="Toggle theme mode"
        >
            {isDarkMode ? (
                <i className="bi bi-moon-stars-fill"></i>
            ) : (
                <i className="bi bi-sun-fill"></i>
            )}
        </Button>
    );
};

export default ThemeToggleButton;
