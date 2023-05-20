import SpeechLanguageSelect from './controls/SpeechLanguageSelect';
import VoiceSelect from './controls/VoiceSelect';
import RateSlider from './controls/RateSlider';
import VolumeSlider from './controls/VolumeSlider';
import PitchSlider from './controls/PitchSlider';
import PlaySampleButton from './controls/PlaySampleButton';
import FullScreenDialog from '../../components/FullScreenDialog/FullScreenDialog';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router';

export default function SpeechSettings() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/settings');
  };

  return (
    <FullScreenDialog
      title="Speech"
      open={true}
      // onSave={handleSave}
      onClose={handleClose}
    >
      <Paper
        elevation={3}
        sx={{
          m: 1,
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <SpeechLanguageSelect />
        <VoiceSelect />
        <RateSlider />
        <VolumeSlider />
        <PitchSlider />
        <PlaySampleButton />
      </Paper>
    </FullScreenDialog>
  );
}
