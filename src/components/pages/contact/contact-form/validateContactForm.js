export const validateContactForm = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!values.email.includes('@')) {
        errors.email = 'Invalid email address'
    }

    return errors;
};