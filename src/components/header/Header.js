import { NavLink } from 'react-router-dom';
import { 
    Container,
    Row, 
    Col
} from 'reactstrap';

const Header = () => {

    return (
        <Container fluid className='header px-0 d-flex flex-column align-items-center justify-content-center'>
            <Row>
                <Col xs='6' className='brand header-content p-0'>
                    <p className='mb-0'>
                        <NavLink to='/about'>
                            <span className='span-green'>dmk</span>
                            <span className='span-yellow'>.</span>
                            <span className='span-magenta'>codes</span>
                            <span className='span-yellow'>/</span>
                        </NavLink>
                    </p>
                </Col>
                <Col xs='6' className='header-content p-0'>
                    <p className='cv-txt float-end mb-0'>
                        <a href='dkissack-resume.pdf' download>
                            cv.
                        </a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;