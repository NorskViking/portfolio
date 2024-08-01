import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import logoLight from "../../assets/png/logo-lightblue.png";
import logoDark from "../../assets/png/Logo-darkblue.png";
import darkBlue from "../../assets/png/darkBlue-Logo.png";
import lightBlue from "../../assets/png/lightBlue-logo.png"

function navbar() {
    return (
        <Navbar sticky="top" className="bg-body-tertiary justify-content-between">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={lightBlue} roundedCircle alt="navbar logo image, with the text: Jørgen Baumann." />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
            </Container>
        </Navbar>
    )
}
export default navbar;