import { Box, Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ClearIcon from '@mui/icons-material/Clear';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import BackspaceIcon from '@mui/icons-material/Backspace';
import './CommandBlock.css';

import { useDispatch, useSelector } from 'react-redux';
import { speak } from '../../../features/speech/speechSlice';
import {
  selectText,
  clear as clearOutput,
  backSpace,
} from '../../output/ouputSlice';
import { useNavigate } from 'react-router-dom';
import { gaEvents } from '../../analytics/gaEvents';
import { selectUser } from '../../user/userSlice';
import { useTrackEventMutation } from '../../reports/reportApi';

export default function CommandBlock() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const output = useSelector(selectText);

  const user = useSelector(selectUser);
  const [trackEvent] = useTrackEventMutation();

  const commandBlockItems = [
    {
      name: 'Speak',
      icon: <VolumeUpIcon />,
      onClick: () => {
        dispatch(speak(output));
        gaEvents.startSpeech(output);
        if (user.isLogged) {
          trackEvent({
            userId: user.id,
            event: {
              action: 'Start Speech',
              category: 'Speech',
              label: output,
            },
          });
        }
      },
    },
    {
      name: 'User',
      icon: <PersonIcon />,
      onClick: () => {
        if (user.isLogged) {
          navigate('settings/user');
          return;
        }
        navigate('login');
      },
    },
    {
      name: 'Clear',
      icon: <ClearIcon />,
      onClick: () => {
        dispatch(clearOutput());
      },
    },
    {
      name: 'Settings',
      icon: <SettingsIcon />,
      onClick: () => {
        navigate('settings');
      },
    },
    {
      name: 'Backspace',
      icon: <BackspaceIcon />,
      onClick: () => {
        dispatch(backSpace());
      },
    },
    {
      name: 'Edit',
      icon: <EditIcon />,
      onClick: () => {
        navigate('edit');
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
