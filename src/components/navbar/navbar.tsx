import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
//import Button from "react-bootstrap/Button";

import SettingsButton from "../buttons/SettingsButton";

//import logoLight from "../../assets/png/logo-lightblue.png";
//import logoDark from "../../assets/png/Logo-darkblue.png";
//import darkBlue from "../../assets/png/darkBlue-Logo.png";
import lightBlue from "../../assets/png/lightBlue-logo.png"

function navbar() {
    return (
        <Navbar 
            sticky="top" 
            className="bg-body-tertiary" 
            id="navbar"
            role="navigation"
            aria-current="page"
            data-theme=""
        >
            <Container fluid className="justify-content-between mx-auto">
                <Navbar.Brand className="justify-content-start">
                    <Image src={lightBlue} roundedCircle alt="navbar logo image, with the text: Jørgen Baumann." width={90} height={90}/>
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Item>
                        <SettingsButton />
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default navbar;