import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/landingPage.css"
import LandingPortrait from "../assets/png/cartoon_it_glasses_guy.png" 

const LandingPage: React.FC = () => {
    return (
        <Container fluid id="landingPage">
            <Row className="gx-4">
                {/* Landing Portrait */}
                <Col xs={12} md={6} className="d-flex justify-content-center mb-3 mb-md-0">
                    <Image src={LandingPortrait} alt="Landing Portrait" className="img-fluid" />
                </Col>

                {/* Landing Description */}
                <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
                    <div id="landingDescription" className="text-center">
                        <Row id="landing-info" className="mb-3 text-center">
                            <Col>
                                <h1 id="mainHeading">Jørgen Stockfleth Baumann</h1>
                            </Col>
                        </Row>
                        <Row id="job-title" className="mb-3">
                            <Col>
                                <h3>Frontend Developer</h3>
                            </Col>
                        </Row>
                        <Row id="poem" className="mb-3">
                            <Col>
                                <article aria-labelledby="poemHeading">
                                    <p>"Logic in each line,</p>
                                    <p>Bugs hide, then errors.</p>
                                    <p>Unwind,</p>
                                    <p>Coffee fuels the fix."</p>
                                </article>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center justify-content-md-center">
                                <a
                                    href="https://www.linkedin.com/in/jorgen-s-baumann/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-link"
                                    aria-label="LinkedIn Profile"
                                >
                                    <i className="bi bi-linkedin me-3" aria-hidden="true"></i>
                                </a>
                                <a
                                    href="https://github.com/norskviking"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-link ms-3"
                                    aria-label="Github Profile"
                                >
                                    <i className="bi bi-github" aria-hidden="true"></i>
                                </a>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default LandingPage;
