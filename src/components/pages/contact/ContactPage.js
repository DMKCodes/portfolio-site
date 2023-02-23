import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contactIcons } from '../../../media/ICONS';
import ContactForm from './contact-form/ContactForm';

const ContactPage = () => {
    const [mailSent, setMailSent] = useState(false);

    return (
        <Container className='page contact-page d-flex justify-content-center'>
            <Row className='contact-body'>
                <h2>contact/</h2>
                <Col xs='12' md='6' className='pe-5 contact-content'>
                    <p className='subheader pb-1 mb-0'>lfw.txt</p>
                    <p>Thanks for taking the time to poke around. I'm currently open to entry-level web development roles and freelance projects. If you think I'd be a good fit, please feel free to reach out.</p>
                    <p className='mb-0'>Always learning,</p>
                    <p className='mb-3'>Doug</p>
                    <p className='subheader pb-2 mb-0'>ContactDetails.js</p>
                    <div className='d-flex flex-row'>
                        <FontAwesomeIcon
                            icon={contactIcons[0]}
                            size='lg'
                            fixedWidth
                            className='pb-4'
                        />
                        <a href='callto:+1-475-223-3008'>
                            <p className='ps-4'>+1-475-223-3008</p>
                        </a>
                    </div>
                    <div className='d-flex flex-row'>
                        <FontAwesomeIcon
                            icon={contactIcons[1]}
                            size='lg'
                            fixedWidth
                            className='pb-4'
                        />
                        <a href='mailto:dmkcodes@gmail.com'>
                            <p className='ps-4'>dmkcodes@gmail.com</p>
                        </a>
                    </div>
                    <div className='d-flex flex-row'>
                        <FontAwesomeIcon
                            icon={contactIcons[2]}
                            size='lg'
                            fixedWidth
                            className='pb-4'
                        />
                        <p className='ps-4'>Milford, PA, USA</p>
                    </div>
                </Col>
                { mailSent 
                    ? 
                    <Col xs='12' md='6' className='contact-thanks'>
                        <p className='subheader mb-2'>MailSent.js</p>
                        <h4>Your message has been received.  I'll be in touch!</h4>
                    </Col>
                    : 
                    <Col xs='12' md='6' className='contact-form'>
                        <p className='subheader mb-2'>ContactForm.js</p>
                        <ContactForm setMailSent={setMailSent} />
                    </Col>
                }
            </Row>
        </Container>
    );
};

export default ContactPage;