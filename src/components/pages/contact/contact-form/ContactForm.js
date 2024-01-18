import { Col, Button, FormGroup } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser';
import { validateContactForm } from './validateContactForm';

const ContactForm = (setMailSent) => {
    const sendEmail = (object) => {
        emailjs.send('service_983vqe9', 'contact_form', object, 'bAfvh5Tg7dQQkLpxN')
    };

    const handleSubmit = (values) => {
        setTimeout(() => {
            sendEmail(values);
            setMailSent.setMailSent(true);
        }, 1000);
    };

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                message: ''
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
            <Form>
                <FormGroup row>
                    <Col xs='6' className='pe-1'>
                        <Field
                            name='name'
                            placeholder='name'
                            className='form-control'
                            aria-label='name'
                        />
                        <ErrorMessage name='name'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                    <Col xs='6' className='ps-1'>
                        <Field
                            name='email'
                            placeholder='email'
                            type='email'
                            className='form-control'
                            aria-label='email'
                        />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md='12'>
                        <Field
                            name='message'
                            as='textarea'
                            placeholder='message...'
                            rows='8'
                            className='form-control'
                            aria-label='message'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md='12'>
                        <Button type='submit' className='button'>
                            Send
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};

export default ContactForm;