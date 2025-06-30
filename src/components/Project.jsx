import { Container, Row, Col, TabContainer, TabContent, Nav, TabPane } from "react-bootstrap";
import { ProjectCard } from './ProjectCard.jsx';
import ColorSharp2 from '../assets/color-sharp2.png';
import Photo from "../assets/YG8.png";
import design_think from '../assets/CVs/design_thinking.jpeg';
import h4g from '../assets/CVs/hack4good.jpeg';
import imset from '../assets/CVs/imset.jpeg';
import pic from '../assets/CVs/pic.jpeg';
import takwira from '../assets/CVs/takwira.png';
import TrackVisibility from "react-on-screen";

export const Project = () => {
    const Projects = [
        {
            title: "Desgin thinking",
            description: "learn how to think in business model and learn about BMC model (Business Model Canvas)",
            imageUrl: design_think,
            link: false,
        },
        {
            title: "Hack4Good",
            description: `It's a event to share about business idea (Takwira TN)`,
            imageUrl: h4g,
            link: false,


        },
        {
            title: "tournament algorithm",
            description: "It's also event about tournament algorithm",
            imageUrl: imset,
            link: false,
        },
        {
            title: "Takwira TN",
            description: "Takwira TN is  online platform for organizing sports like football and basketball, where people can play with friends and book fields. so we make sure to provide this idea now a days (you can click here to see it)",
            imageUrl: takwira,
            link: true,

        },
        {
            title: "'Etudiant Entrepreneur'",
            description: "The university of Carthage organize a event that students can share about there ideas here",
            imageUrl: pic,
            link: false,
        },
        {
            title: "Business start up",
            description: "Design & developement",
            imageUrl: "",
            link: false,

        },
    ];


    return (
        <section className="project" id="project">

            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Here in this Year i participate with many events and many porjects </p>
                                </div>

                            }
                        </TrackVisibility>
                        <TabContainer id="projects-tabs" defaultActiveKey="first" >
                            <Nav variant="pills" defaultActiveKey="" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Tap One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tap Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" > Tap Third </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <TabContent>
                                <TabPane eventKey="first">
                                    <Row>
                                        {Projects.map((element, index) => {
                                            return (
                                                <ProjectCard key={index} {...element} />
                                            );
                                        })}
                                    </Row>
                                </TabPane>
                                <TabPane eventKey="second">Nothing :( </TabPane>
                                <TabPane eventKey="third"> Nothing :( </TabPane>
                            </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
            <img src={ColorSharp2} alt="" className="background-image-right" />
        </section>
    );


}