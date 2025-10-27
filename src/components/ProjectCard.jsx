
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imageUrl, link }) => {
    if (link) {
        console.log(link);
        return (
            <Col sm={6} md={4}>
                <a href={link} style={{ color: "white" }} target="_blink">
                    <div className="proj-imgbx">
                        <img src={imageUrl} alt="nothing" />
                        <div className="proj-txtx">
                            <h4>{title}</h4>
                            <span>{description}</span>
                        </div>
                    </div>
                </a>
            </Col>
        );
    }
    else {
        return (
            <Col sm={6} md={4}>
                <div className="proj-imgbx">
                    <img src={imageUrl} alt="Nothing :( " />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </Col>
        );
    }




}