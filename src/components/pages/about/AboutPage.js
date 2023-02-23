import { useState } from 'react'; 
import {
    Container, 
    Row, 
    Col,
    Accordion, 
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skillIcons, aboutIcons } from '../../../media/ICONS';

const AboutPage = () => {
    const [open, setOpen] = useState(null);

    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <Container className='page about-page d-flex justify-content-center'>
            <Row className='about-body align-items-center justify-content-around'>
                <Col xs='12' lg='6'>
                    <h2 className='pb-1'>about/</h2>
                    <Accordion flush open={open} toggle={toggle}>
                        <AccordionItem>
                            <AccordionHeader targetId='1'>
                                <FontAwesomeIcon 
                                        icon={aboutIcons[0]} 
                                        size='lg'
                                        fixedWidth
                                        className='pe-3'
                                />
                                the-developer/
                            </AccordionHeader>
                            <AccordionBody accordionId='1' className='pt-0'>
                                <div className='subheader'>developer.txt</div>
                                I'm an honors graduate of Nucamp's Full Stack Software Engineering Bootcamp. My priority is to deliver clean, responsive, and performant code using time-tested practices, but I don't shy from taking risks to deliver a memorable user experience. Currently, I most enjoy building web and mobile apps with React, React Native, Redux, and Node. 
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId='2'>
                                <FontAwesomeIcon 
                                        icon={aboutIcons[1]} 
                                        size='lg'
                                        fixedWidth
                                        className='pe-3'
                                />
                                the-veteran/
                            </AccordionHeader>
                            <AccordionBody accordionId='2'>
                                <div className='subheader'>veteran.txt</div>
                                I'm a United States Navy veteran who served as an Aegis Computer Network Technician from 2010 to 2014. My military service helped shape me into the person I am today. I strive to embody its core values of honor, commitment, and integrity in my craft as well as my daily life.
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId='3'>
                                <FontAwesomeIcon 
                                        icon={aboutIcons[2]} 
                                        size='lg'
                                        fixedWidth
                                        className='pe-3'
                                />
                                the-environmentalist/
                            </AccordionHeader>
                            <AccordionBody accordionId='3'>
                                <div className='subheader'>environmentalist.txt</div>
                                I hold a bachelor's degree in environmental science. I'm passionate about protecting the environment through conservation, volunteerism, and community outreach.
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId='4'>
                                <FontAwesomeIcon 
                                        icon={aboutIcons[3]} 
                                        size='lg'
                                        fixedWidth
                                        className='pe-3'
                                />
                                the-ally/
                            </AccordionHeader>
                            <AccordionBody accordionId='4'>
                                <div className='subheader'>ally.txt</div>
                                My son, Toby, is on the autism spectrum. Raising Toby and engaging with the neurodivergent community are some of my most fulfilling experiences. Diversity is essential to personal and professional success, and I challenge myself to make the world a more inclusive place. 
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </Col>
                <Col xs='12' lg='4'>
                    <div className='subheader'>SkillsList.js</div>
                    <Row className='text-center'>
                        {skillIcons.map((icon) => {
                            return (
                                <Col 
                                    xs='4' 
                                    className='skill-col text-center pt-3 pb-3'
                                    key={icon.id}
                                >
                                    <FontAwesomeIcon 
                                        icon={icon.icon} 
                                        size='2x'
                                    />
                                    <p>{icon.text}</p>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;