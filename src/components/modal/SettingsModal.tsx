import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rootstate } from "../../store/rootReducer";
import { toggleFontFamily } from "../../store/fontFamilySlice";
import { toggleFontSize } from "../../store/fontSizeSlice";
import { toggleTheme } from "../../store/themeSlice";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../styles/settingsModal.css";

interface SettingsModalProps {
    onClose: () => void;
}

const fontOptions = [
    'Open Sans',
    'Kosugi',
    'Kosugi Maru',
    'Alef',
    'Merriweather Sans',
    'Oxygen',
    'Barlow Semi Condensed',
    'Quicksand',
    'Work Sans',
    'Roboto',
    'Concert One',
    'Comfortaa'
];

const fontSizeOptions = [
    "small",
    "medium",
    "large",
    "xl",
    "xxl"
];

const SettingsModal: React.FC<{ show: boolean; handleClose: () => void }> = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const currentFontSize = useSelector((state: Rootstate) => state.fontSize.fontSize);
    const currentFontFamily = useSelector((state: Rootstate) => state.fontFamily.fontFamily);
    const isDarkMode = useSelector((state: Rootstate) => state.theme.isDarkMode);

    const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(toggleFontFamily(event.target.value));
    };

    const handleFontSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(toggleFontSize(event.target.value));
    };

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <Modal show={show} onHide={handleClose} id="settingsModal" aria-labelledby="settingsModalLabel">
            <Modal.Header closeButton>
                <Modal.Title id="settingsModalLabel">
                    Settings
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="fontFamilySelect">
                        Font Family
                    </Form.Label>
                    <Form.Select id="fontFamilySelect" value={currentFontFamily} onChange={handleFontChange}>
                        {fontOptions.map((font) => (
                            <option key={font} value={font}>{font}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="fontSizeSelect">
                        Font Size
                    </Form.Label>
                    <Form.Select id="fontSizeSelect" value={currentFontSize} onChange={handleFontSizeChange}>
                        {fontSizeOptions.map((size) => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="themeToggle">
                    <Form.Label>Theme Mode</Form.Label>
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SettingsModal;