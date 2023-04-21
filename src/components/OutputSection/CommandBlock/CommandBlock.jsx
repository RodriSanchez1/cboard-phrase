import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ClearIcon from '@mui/icons-material/Clear';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import BackspaceIcon from '@mui/icons-material/Backspace';
import './CommandBlock.css';

import { useDispatch } from 'react-redux';
import { speak } from '../../../features/speech/speechSlice';

export default function CommandBlock() {
  const dispatch = useDispatch();

  const commandBlockItems = [
    {
      name: 'Speak',
      icon: <VolumeUpIcon />,
      onClick: () => {
        dispatch(speak('Hola que tal'));
      },
    },
    {
      name: 'Clear',
      icon: <ClearIcon />,
      onClick: () => {
        console.log('Clear');
      },
    },
    {
      name: 'User',
      icon: <PersonIcon />,
      onClick: () => {
        console.log('User');
      },
    },
    {
      name: 'Settings',
      icon: <SettingsIcon />,
      onClick: () => {
        console.log('Settings');
      },
    },
    {
      name: 'Edit',
      icon: <EditIcon />,
      onClick: () => {
        console.log('Edit');
      },
    },
    {
      name: 'Backspace',
      icon: <BackspaceIcon />,
      onClick: () => {
        console.log('Backspace');
      },
    },
  ];
  return (
    <div className="CommandBlock_Container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          //   spacing={{ xs: 1, md: 1 }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {commandBlockItems.map((item, index) => (
            <Grid
              xs={2}
              sm={4}
              md={6}
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                aria-label={item.name}
                onClick={item.onClick}
                variant="contained"
                color="warning"
                size="large"
              >
                {item.icon}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
