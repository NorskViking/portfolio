import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SettingsModal from "../modal/SettingsModal";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./settingsButton.css";

const SettingsButton: React.FC = () => {
    const [showModal, toggleShowModal] = useState(false);

    const handleShow = () => toggleShowModal(true);
    const handleClose = () => toggleShowModal(false);

    return (
        <>
            <Button
                variant="primary"
                id="settingsButton"
                onClick={handleShow}
                aria-label="Settings button"
            >
                <i className="bi bi-gear"></i>
            </Button>
            {<SettingsModal show={showModal} handleClose={handleClose} />}
        </>
    )
}

export default SettingsButton;