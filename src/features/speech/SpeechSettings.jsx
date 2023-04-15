import Stack from '@mui/material/Stack';
import SpeechLanguageSelect from './controls/SpeechLanguageSelect';
import VoiceSelect from './controls/VoiceSelect';
import RateSlider from './controls/RateSlider';
import VolumeSlider from './controls/VolumeSlider';
import PitchSlider from './controls/PitchSlider';
import PlaySampleButton from './controls/PlaySampleButton';

export default function SpeechSettings() {
  return (
    <Stack maxWidth="280px" p={2} gap={2}>
      <SpeechLanguageSelect />
      <VoiceSelect />
      <RateSlider />
      <VolumeSlider />
      <PitchSlider />
      <PlaySampleButton />
    </Stack>
  );
}
