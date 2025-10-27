import { Container, Row, Col, TabContainer, Nav, TabContent, TabPane } from "react-bootstrap";
import { ProjectCard } from './ProjectCard.jsx';
import ColorSharp2 from '../assets/color-sharp2.png';
import TrackVisibility from "react-on-screen";
import { Certificates } from "../data/certificates.js";
import { Projects } from "../data/projects.js";

export const Project = () => (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col size={12}>
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h2 className="text-center">Projects & Certificates</h2>
                                <p className="text-center mb-5">
                                    A selection of things I built and earned this year.
                                </p>
                            </div>
                        )}
                    </TrackVisibility>

                    <TabContainer id="projects-tabs" defaultActiveKey="cert">
                        <Nav
                            variant="pills"
                            className="nav-pills mb-4 justify-content-center"
                            id="pills-tab"
                        >
                            <Nav.Item>
                                <Nav.Link eventKey="cert">Certificates</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="proj">Projects</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <TabContent>
                            <TabPane eventKey="cert">
                                <Row className="g-4">
                                    {Certificates.map((c, i) => (
                                        <ProjectCard key={i} {...c} />
                                    ))}
                                </Row>
                            </TabPane>

                            <TabPane eventKey="proj">
                                <Row className="g-4">
                                    {Projects.map((p, i) => (
                                        <ProjectCard key={i} {...p} />
                                    ))}
                                </Row>
                            </TabPane>
                        </TabContent>
                    </TabContainer>
                </Col>
            </Row>
        </Container>

        <img
            src={ColorSharp2}
            alt=""
            className="background-image-right"
        />
    </section>
);