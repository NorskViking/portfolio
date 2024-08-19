import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/landingPage.css"
import LandingPortrait from "../assets/png/cartoon_it_glasses_guy.png" 

const LandingPage: React.FC = () => {
    return (
        <Container id="landingPage" className="p-2 mb-3">
            <Col id="landing-info" className="justify-content-md-center">
                <Row id="name">
                    <h1>Jørgen Stockfleth Baumann</h1>
                </Row>
                <Row id="job-title">
                    <h3>Frontend Developer</h3>
                </Row>
                <Row id="poem">
                    <article className="justify-content-center">
                        <p>"Logic in each line,</p>
                        <p>Bugs hide, then errors.</p>
                        <p>Unwind,</p>
                        <p>Coffee fuels the fix."</p>
                    </article>
                </Row>
                    <Image src={LandingPortrait} alt="Landing Portrait" />
            </Col>
            <Row className="justify-content-md-center">
                <Col>
                    <i className="bi bi-linkedin"></i>
                </Col>
                <Col>
                    <i className="bi bi-github"></i>
                </Col>
            </Row>
        </Container>
    )
}

export default LandingPage;