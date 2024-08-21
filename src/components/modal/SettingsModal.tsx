import React from "react";
import { Modal, Button } from "react-bootstrap";
import FontSizeToggle from "../settings/FontSizeToggle";
import FontFamilyToggle from "../settings/FontFamilyToggle";
import ThemeToggleButton from "../settings/ThemeToggle";

const SettingsModal: React.FC<{ show: boolean; handleClose: () => void }> = ({ show, handleClose }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            aria-labelledby="settingsModalLabel"
            dialogClassName="custom-modal"
            contentClassName="custom-modal-content"
            >
            <Modal.Header closeButton>
                <Modal.Title id="settingsModalLabel">
                    Settings
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <FontFamilyToggle />
                <FontSizeToggle />
                <ThemeToggleButton />
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
