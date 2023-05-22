export const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Invalid name';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }

  if (!values.acceptedTerms) {
    errors.acceptedTerms = 'Required';
  }

  return errors;
};
