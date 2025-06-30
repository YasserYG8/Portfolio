
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/meter1.svg';
import meter2 from '../assets/meter2.svg';
import meter3 from '../assets/meter3.svg';
import Colorsharp from '../assets/color-sharp.png';
import TrackVisibility from "react-on-screen";
import 'animate.css';
export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <Container>
                            <Row>
                                <Col>
                                    <div className="col-12">
                                        <div className="skill-bx wow ZoomIn">
                                            <h2>Skills</h2>
                                            <p>Here my Skills in Communication (french,english),in developer and in big domaine DevOps</p>
                                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                                <div className="item">
                                                    <img src={meter2} alt="Image" />
                                                    <h5>web developer</h5>
                                                </div>
                                                <div className="item">
                                                    <img src={meter2} alt="Image" />
                                                    <h5>player football</h5>
                                                </div>
                                                <div className="item">
                                                    <img src={meter3} alt="Image" />
                                                    <h5>DevOps</h5>
                                                </div>
                                                <div className="item">
                                                    <img src={meter1} alt="Image" />
                                                    <h5>Communication</h5>
                                                </div>
                                            </Carousel>
                                        </div>
                                    </div>


                                </Col>
                            </Row>
                        </Container>
                        <img className="background-image-left" src={Colorsharp} alt="Image" />
                    </div>
                }
            </TrackVisibility>
        </section>

    );



}