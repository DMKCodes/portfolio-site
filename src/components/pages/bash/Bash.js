import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import Typewriter from 'typewriter-effect';

const Bash = ({ setShowHeader, setShowFooter, setShowFooterLinks }) => {
    const navigate = useNavigate();

    useEffect(() => {
        setShowHeader(false);
        setShowFooter(false);
        setShowFooterLinks(false);
    }, []);

    const clearTypewriter = () => {
        document.getElementsByClassName('Typewriter__wrapper')[0].innerHTML = '';
        return;
    };

    return (
        <Container className='page bash'>
            <Row className='bash-row'>
                <Col xs='12'>
                    <span className='span-green'>Codes@DMK</span>
                    <span className='span-magenta'>&nbsp;MINGW64</span>
                    <span className='span-yellow'>&nbsp;&nbsp;~</span>
                </Col>
            </Row>
            <Row className='bash-row'>
                <Col xs='1'>$</Col>
                <Col xs='11'>
                    <Typewriter
                        delay={50}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Hi, I'm Duog")
                                .pauseFor(500)
                                .deleteChars(4)
                                .typeString('Doug. ')
                                .pauseFor(500)
                                .typeString("Let's make a web app.")
                                .pauseFor(1000)
                                .callFunction(() => clearTypewriter())
                                .pauseFor(500)
                                .typeString('npx create-react-app dmkcodes')
                                .pauseFor(1000)
                                .callFunction(() => clearTypewriter())
                                .pauseFor(500)
                                .typeString('mkdir components')
                                .pauseFor(1000)
                                .callFunction(() => clearTypewriter())
                                .pauseFor(500)
                                .typeString('touch components/Header.js')
                                .pauseFor(250)
                                .callFunction(() => setShowHeader(true))
                                .pauseFor(1000)
                                .callFunction(() => clearTypewriter())
                                .pauseFor(500)
                                .typeString('touch components/Footer.js')
                                .pauseFor(250)
                                .callFunction(() => setShowFooter(true))
                                .pauseFor(1000)
                                .callFunction(() => clearTypewriter())
                                .pauseFor(500)
                                .typeString('mkdir pages')
                                .pauseFor(1000)
                                .callFunction(() => clearTypewriter())
                                .pauseFor(500)
                                .typeString('touch pages/\n{AboutPage.js,\nProjectsPage.js,\nContactPage.js}')
                                .pauseFor(250)
                                .callFunction(() => setShowFooterLinks(true))
                                .pauseFor(1000)
                                .callFunction(() => clearTypewriter())
                                .pauseFor(500)
                                .typeString('cd pages/about && exit')
                                .pauseFor(1000)
                                .callFunction(() => {
                                    const path = '/about';
                                    navigate(path);
                                })
                                .start();
                        }}
                    />
                </Col>
            </Row>
            <Row className='button-row d-flex justify-content-center'>
                <Button 
                    className='button bash-button' 
                    onClick={() => {
                        setShowHeader(true);
                        setShowFooter(true);
                        setShowFooterLinks(true);
                        const path = '/about';
                        navigate(path);
                    }}
                >
                    Skip
                </Button>
            </Row>
        </Container>
    );
};

export default Bash;