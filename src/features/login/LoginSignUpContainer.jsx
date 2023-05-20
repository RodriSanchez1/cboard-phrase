import React, { useState } from 'react';
import { Paper, Box, Tabs, Tab, Typography } from '@mui/material';
import { Container } from '@mui/material';
import Login from './login/Login';
import Signup from './signUp/SignUp';
import './LoginSignUpContainer.css';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function LoginSignUpContainer() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCloseClick = () => {
    navigate(-1);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  }

  return (
    <div className="LoginSignUp_Container">
      <IconButton
        label="close"
        onClick={handleCloseClick}
        sx={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
      >
        <CloseIcon />
      </IconButton>
      <Container maxWidth="xs">
        <Paper
          sx={{
            // maxWidth: '680px',
            margin: '0 auto',
            pb: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            // backgroundColor: '#fff',
          }}
        >
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={{ mb: '16px' }}
          >
            <Tab label="Login" {...a11yProps(0)} />
            <Tab label="Sign Up" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Login handleChange={handleChange} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Signup />
          </TabPanel>
        </Paper>
      </Container>
    </div>
  );
}
