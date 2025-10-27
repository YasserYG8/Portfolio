import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contactimg from '../assets/contact-img.svg';
import TrackVisibility from "react-on-screen";
export const Contact = () => {
    const formeInitial = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',

    }
    const [forme, setForme] = useState(formeInitial);
    const [buttonText, setButtonText] = useState("send");
    const [status, setStatus] = useState({});
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    return (
        <section className="contact">
            <TrackVisibility>
            {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <Container>
                        <Row className="align-items-center">
                            <Col md={6}>
                                <img src={Contactimg} alt="Contact Image" />
                            </Col>
                            <Col>
                                <h2>Get In Touch</h2>
                                <form action="" onSubmit={handleSubmit}>
                                    <Row>
                                        <Col sm={6} className="px-1">
                                            <input type="text" value={forme.firstName} placeholder="First Name : " onChange={(e) => { updateForme('firstName', e.target.value) }} />
                                        </Col>
                                        <Col sm={6} className="px-1">
                                            <input type="text" value={forme.lastName} placeholder="Last Name : " onChange={(e) => { updateForme('lastName', e.target.value) }} />
                                        </Col>
                                        <Col sm={6} className="px-1">
                                            <input type="email" value={forme.email} placeholder="Email : " onChange={(e) => { updateForme('email', e.target.value) }} />
                                        </Col>
                                        <Col sm={6} className="px-1">
                                            <input type="tel" value={forme.phone} placeholder="Phone No : " onChange={(e) => { updateForme('phone', e.target.value) }} />
                                        </Col>
                                        <Col size={12} className="px-1">
                                            <textarea name="" id="" rows="6" value={forme.message} onChange={(e) => { updateForme("message", e.target.value) }} placeholder="Message : "></textarea>
                                            <button type="submit"><span>{buttonText}</span></button>
                                        </Col>
                                        {
                                            status.message &&
                                            <Col>
                                                <p className={status.message === false ? "failed" : "success"}>{status.message}</p>
                                            </Col>
                                        }
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            }
            </TrackVisibility>

        </section>
    )
}
