import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css";
import LandingPortrait from "../assets/png/cartoon_it_glasses_guy.png" 
import SkillsPage from "./SkillsSection";

const LandingPage: React.FC = () => {
    return (
        <Container fluid id="landingPage" role="main">
            <Row className="gx-4">
                {/* Landing Portrait */}
                <Col xs={12} md={6} className="d-flex justify-content-center mb-3 mb-md-0">
                    <Image
                        src={LandingPortrait}
                        alt="Cartoon portrait of Jørgen Stockfleth Baumann wearing glasses"
                        className="img-fluid"
                    />
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
                                <h2>Frontend Developer</h2>
                            </Col>
                        </Row>
                        <Row id="poem" className="mb-3">
                            <Col>
                                <article aria-labelledby="poemHeading">
                                    <h3 id="poemHeading">A Developer's Poem</h3>
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
                                    aria-label="LinkedIn Profile of Jørgen Stocfleth Baumann"
                                    tabIndex={0}
                                >
                                    <i className="bi bi-linkedin me-3" aria-hidden="true"></i>
                                </a>
                                <a
                                    href="https://github.com/norskviking"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-link ms-3"
                                    aria-label="Github Profile of Jørgen Stockfleth Baumann"
                                    tabIndex={0}
                                >
                                    <i className="bi bi-github" aria-hidden="true"></i>
                                </a>
                            </Col>
                        </Row>
                        <SkillsPage />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default LandingPage;
