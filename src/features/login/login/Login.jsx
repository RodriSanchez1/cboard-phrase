import { Box } from '@mui/system';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useLoginMutation } from '../loginApi';
import { validate } from './validateSchema';
import FetchButton from '../../../components/FetchButton/FetchButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../user/userSlice';

import './Login.css';

export default function Login() {
  const [validation, setValidation] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginApi, { isSuccess, isLoading, isError, error: fetchError }] =
    useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    validateOnBlur: validation,
    validateOnChange: validation,
    onSubmit: (formValues) => {
      handleLogIn(formValues);
    },
  });

  async function handleLogIn(formValues) {
    try {
      const user = await loginApi(formValues).unwrap();
      dispatch(login(user));
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setValidation(true);
    return formik.handleSubmit();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <form onSubmit={onSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email ? true : false}
            helperText={formik.errors.email}
            onBlur={formik.handleBlur}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.password ? true : false}
            onBlur={formik.handleBlur}
            helperText={formik.errors.password}
          />
          <FetchButton
            isLoading={isLoading}
            isError={isError}
            isSuccess={isSuccess}
            fetchError={fetchError}
            name={'Login'}
          />
        </form>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
