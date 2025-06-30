
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imageUrl, link }) => {
    if (link) {
        return (
            <Col sm={6} md={4}>
                <a href=" https://yasseryg8.github.io/takwira_tn/Takwira%20TN_main_branch/index.html" style={{ color: "white" }} target="_blink">
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