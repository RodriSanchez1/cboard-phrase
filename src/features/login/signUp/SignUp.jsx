import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';
import { useState } from 'react';
import { FormControl, FormHelperText } from '@mui/material';
import { validate } from './validateSchema';

export default function SignUp() {
  const [validation, setValidation] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptedTerms: false,
    },
    validate,
    validateOnBlur: validation,
    validateOnChange: validation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formik.values);
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: '16px' }}>
          Sign up
        </Typography>
        <form onSubmit={onSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Name"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name ? true : false}
                helperText={formik.errors.name}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email ? true : false}
                helperText={formik.errors.email}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.errors.password ? true : false}
                helperText={formik.errors.password}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                error={formik.errors.confirmPassword ? true : false}
                helperText={formik.errors.confirmPassword}
                onBlur={formik.handleBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                error={formik.errors.acceptedTerms ? true : false}
                required
              >
                <FormControlLabel
                  required
                  control={
                    <Checkbox
                      color="primary"
                      name={'acceptedTerms'}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  }
                  label={
                    <FormHelperText>
                      {'I accept the Terms of Service and Privacy Policy.'}
                    </FormHelperText>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Container>
  );
}
