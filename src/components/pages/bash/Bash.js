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

        // eslint-disable-next-line
    }, []);

    const clearTypewriter = () => {
        document.getElementsByClassName('Typewriter__wrapper')[0].innerHTML = '';
        return;
    };

    const cd = () => {
        document.getElementsByClassName('directory')[0].innerHTML = '&nbsp;&nbsp;~/dmkcodes'
    };

    return (
        <Container className='page bash'>
            <Row className='bash-row'>
                <Col xs='10'>
                    <span className='span-green'>Codes@DMK</span>
                    <span className='span-magenta'>&nbsp;MINGW64</span>
                    <span className='directory span-yellow'>&nbsp;&nbsp;~</span>
                </Col>
            </Row>
            <Row className='bash-row'>
                <Col xs='1'>$</Col>
                <Col xs='11'>
                    <Typewriter
                        delay={10}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Hi, I'm Duog")
                                .pauseFor(400)
                                .deleteChars(4)
                                .typeString('Doug. ')
                                .pauseFor(400)
                                .typeString("Let's make a web app.")
                                .pauseFor(800)
                                .callFunction(() => clearTypewriter())
                                .pauseFor(400)
                                .typeString('npx create-react-app dmkcodes')
                                .pauseFor(800)
                                .callFunction(() => clearTypewriter())
                                .pauseFor(400)
                                .typeString('cd dmkcodes')
                                .pauseFor(200)
                                .callFunction(() => cd())
                                .pauseFor(400)
                                .callFunction(() => clearTypewriter())
                                .pauseFor(400)
                                .typeString('mkdir components')
                                .pauseFor(800)
                                .callFunction(() => clearTypewriter())
                                .pauseFor(400)
                                .typeString('touch components/Header.js')
                                .pauseFor(200)
                                .callFunction(() => setShowHeader(true))
                                .pauseFor(800)
                                .callFunction(() => clearTypewriter())
                                .pauseFor(400)
                                .typeString('touch components/Footer.js')
                                .pauseFor(200)
                                .callFunction(() => setShowFooter(true))
                                .pauseFor(800)
                                .callFunction(() => clearTypewriter())
                                .pauseFor(400)
                                .typeString('touch components/{About.js,\nProjects.js,\nContact.js}')
                                .pauseFor(200)
                                .callFunction(() => setShowFooterLinks(true))
                                .pauseFor(800)
                                .callFunction(() => clearTypewriter())
                                .pauseFor(800)
                                .typeString('npm start')
                                .pauseFor(800)
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