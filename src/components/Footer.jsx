import { Container,Row ,Col} from "react-bootstrap";
import { MailchimpForme } from "./MailChimpForm.jsx";
import logo from '../assets/YG8.png'
import navi1 from '../assets/nav-icon1.svg';
import navi2 from '../assets/nav-icon2.svg';
import navi3 from '../assets/nav-icon3.svg';
export const Footer = () => {
    
    
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForme/>
                    <Col sm={6} size={12}>
                        <img src={logo} alt="logo" style={{height:"100px",width:"100px"}} />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/gombra-yasser-a8ab46274/" target="_blink"><img src={navi1} alt="icon" /></a>
                            <a href="https://www.facebook.com/yasser.gombra/" target="_blink"><img src={navi2} alt="icon" /></a>
                            <a href="https://www.instagram.com/yasser.gom/" target="_blink"><img src={navi3} alt="icon" /></a>   
                        </div>
                        <p>CopyRight 2025. All Right Reserved</p>
                    </Col>

                </Row>
            </Container>
        </footer>

    );


}