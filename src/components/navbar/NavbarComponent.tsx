// Importing Bootstrap Components
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
// Import of components
import SettingsButton from "../buttons/SettingsButton";
// Import of assets
import logoLight from "../../assets/png/Logo - LightBlue.png"
import logoDark from "../../assets/png/Logo - DarkBlue.png"
import "bootstrap-icons/font/bootstrap-icons.css";
// Import of Redux logic
import { useSelector } from "react-redux";
import { Rootstate } from "../../store/rootReducer";
import { useEffect, useState } from "react";

function NavbarComponent() {
    const isDarkMode = useSelector((state: Rootstate) => state.theme.isDarkMode);
    const [logo, setLogo] = useState(logoLight);

    useEffect(() => {
        setLogo(isDarkMode ? logoDark : logoLight);
    }, [isDarkMode]);

    return (
        <Navbar 
            sticky="top"
            id="navbar"
            role="navigation"
            aria-current="page"
        >
            <Container fluid className="justify-content-between mx-auto">
                <Navbar.Brand className="justify-content-start">
                    <Image
                        className="navbar-logo"
                        src={logo}
                        alt="navbar logo image, with the text: Jørgen Baumann."
                        aria-label="Jørgen Baumann Logo"
                    />
                </Navbar.Brand>
                <Nav className="d-flex align-items-center justify-content-end">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto"/>
                    <Nav.Link href="#landingPage">
                        <i className="bi bi-house-fill"> </i>
                        Home
                    </Nav.Link>
                    <Nav.Link href="#projects">
                        <i className="bi bi-journal-code"> </i>
                        Projects
                    </Nav.Link>
                    <Nav.Link href="#about">
                        <i className="bi bi-person-circle"> </i>
                        About
                    </Nav.Link>
                    <Nav.Item>
                        <SettingsButton />
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavbarComponent;