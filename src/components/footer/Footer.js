import { NavLink } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { footerIcons } from '../../media/ICONS';

const Footer = ({ showFooterLinks }) => {
    return (
        <Navbar className='footer navbar-dark fixed-bottom' expand='md'>
            <Nav navbar className='d-flex flex-row align-items-center'>
                {showFooterLinks &&
                    <>
                        <NavItem className='footer-link'>
                            <NavLink className='nav-link pe-3' to='/about'>
                                about/
                            </NavLink>
                        </NavItem>
                        <NavItem className='footer-link'>
                            <NavLink className='nav-link pe-3' to='/projects'>
                                projects/
                            </NavLink>
                        </NavItem>
                        <NavItem className='footer-link'>
                            <NavLink className='nav-link' to='/contact'>
                                contact/
                            </NavLink>
                        </NavItem>
                    </>
                }
            </Nav>
            <div className='icon-container'>
                <a 
                    href='https://github.com/DMKCodes' 
                    target='_blank' 
                    rel='noreferrer'
                    className='footer-content'
                >
                    <FontAwesomeIcon 
                        icon={footerIcons[0]} 
                        size='xl' 
                        className='nav-icon pe-3'
                    />
                </a>
                <a 
                    href='https://www.linkedin.com/in/douglas-kissack/' 
                    target='_blank' 
                    rel='noreferrer'
                    className='footer-content'
                >
                    <FontAwesomeIcon 
                        icon={footerIcons[1]} 
                        size='xl' 
                        className='nav-icon'
                    />
                </a>
            </div>
        </Navbar>
    );
};


export default Footer;