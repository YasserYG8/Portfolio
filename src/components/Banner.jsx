import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Headerimg from '../assets/header-img.svg';
import "bootstrap-icons/font/bootstrap-icons.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDel, setDel] = useState(false);
    const toRotate = ["web developer", "DevOps", "Football player"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(50);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) };
    }, [text, delta]);
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDel ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDel) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDel && updatedText === fullText) {
            setDel(true);
            setIndex(previndex => previndex - 1)
            setDelta(period);
        }
        else if (isDel && updatedText === "") {
            setDel(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }
        else {
            setIndex(previndex => previndex + 1);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({isVisible})=>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{"Hi I'm Yasser Gombra"} <br></br> <span className="txt-rotate" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                                <button onClick={() => { console.log("connect") }}>Lt's connect <ArrowRightCircle size={25} />  </button>
                                <p>Hey there! I'm Yasser Gombra ,  I'm 20 years old and currently studying at ISET Nabeul in Tunisia I'm a passionate self-taught developer specializing in modern web technologies. I'm still learning : </p>
                                <ul>
                                    <li>Frontend development with React and Next.js ...</li>
                                    <li>Backend development using Express and MongoDB ...</li>
                                    <li>DevOps and DevSecOps through the <a href="https://www.facebook.com/groups/441377287284354" target="_blink">Le Bon Developer</a> platform</li>
                                </ul>
                            </div>    
                            }
                            
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <img src={Headerimg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>


        </section>


    );




}