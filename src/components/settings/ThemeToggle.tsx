import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import { Rootstate } from "../../store/rootReducer";
import { Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const ThemeToggleSwitch: React.FC = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: Rootstate) => state.theme.isDarkMode);

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <Form.Group controlId="themeToggle">
            <Form.Label>
                Theme Mode
            </Form.Label>
            <div className="custom-switch">
                <Form.Check
                    type="switch"
                    checked={isDarkMode}
                    onChange={handleThemeToggle}
                    label=""
                    className="theme-switch-input"
                />
                <span className="theme-switch-handle">
                    <i className="bi bi-sun"></i>
                    <i className="bi bi-moon"></i>
                </span>
            </div>
        </Form.Group>
    )
}

export default ThemeToggleSwitch;