import React from "react";
import { Container, Image, Row } from "react-bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css";
//import "../styles/landingPage.css"
import LandingPortrait from "../assets/png/cartoon_it_glasses_guy.png" 

const LandingPage: React.FC = () => {
    return (
        <Container id="landingPage" className="p-2 mb-3">
            <Container id="landing-info" className="justify-items-center align-items-center">
                <h1>Jørgen Stockfleth Baumann</h1>
                <i className="bi-bi-linkedin" style={{height: "50px", width: "50px", color: "red"}}/>
                <h3>Frontend Developer</h3>
                <article>
                    <p>"Logic in each in,</p>
                    <p>Bigs hide, then errors,</p>
                    <p>Unwind</p>
                    <p>Coffe fuels the fix."</p>
                </article>
            <Container fluid id="landing-image" style={{height: "200px", width: "200px"}}>
                <Image src={LandingPortrait} alt="" className="landing-portrait" style={{height: "400px", width: "400px"}} />
            </Container>
            <Container id="landing-socials">
                <i className="bi-bi-linkedin" style={{height: "50px", width: "50px", color: "red"}}/>
                <i className="bi-bi-github"></i>
            </Container>
                <p> A B C D E F G H I J K L M N O P Q E R S T U V W X Y Z Æ Å Ø </p>
            </Container>
        </Container>
    )
}

export default LandingPage;