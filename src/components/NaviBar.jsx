import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import logo from '../assets/YG8.png';
import navg1 from '../assets/nav-icon1.svg';
import navg2 from '../assets/nav-icon2.svg';
import navg3 from '../assets/nav-icon3.svg';
export const NavBar = () => {
    const style = { transform: "scale(0.5)" };
    const [active, setActive] = useState('home');
    const [scrolled, setscrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setscrolled(true);
            }
            else {
                setscrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);

    }, [])
    function activeUpdate(value) {
        setActive(value);
    }
    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""} style={{ height: "80px" }} >
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logoIcon" style={style} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={active === "home" ? "active navbar-link" : "navbar-link"} onClick={() => { activeUpdate("home") }} >Home</Nav.Link>
                        <Nav.Link href="#skills" className={active === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => { activeUpdate("skills") }}>Skills</Nav.Link>
                        <Nav.Link href="#project" className={active === "project" ? "active navbar-link" : "navbar-link"} onClick={() => { activeUpdate("Projects") }}>Project</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/gombra-yasser-a8ab46274/" alt="" target="_blink"><img src={navg1} alt="" /></a>
                            <a href="https://www.facebook.com/yasser.gombra/" alt="" target="_blink"><img src={navg2} alt="" /></a>
                            <a href="https://www.instagram.com/yasser.gom/" alt="" target="_blink"> <img src={navg3} alt="" /></a>
                        </div>
                        <button className="vvd" onClick={() => { console.log("connect"); }}>click here</button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}