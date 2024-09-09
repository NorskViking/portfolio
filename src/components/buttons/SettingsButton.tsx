import React, { useState } from "react";
import { Button } from "react-bootstrap";
import SettingsModal from "../modal/SettingsModal";
import "bootstrap-icons/font/bootstrap-icons.css";
import IconButton from "./IconButton";

const SettingsButton: React.FC = () => {
    const [showModal, toggleShowModal] = useState(false);

    const handleShow = () => toggleShowModal(true);
    const handleClose = () => toggleShowModal(false);

    return (
        <>
            <IconButton
                variant="primary"
                onClick={handleShow}
                title="SettingsButton"
                iconStandard="bi bi-gear"
                iconHover="bi bi-gear-fill"
                ariaLabel="Settings button"
            />
            {<SettingsModal show={showModal} handleClose={handleClose} />}
        </>
    )
}

export default SettingsButton;