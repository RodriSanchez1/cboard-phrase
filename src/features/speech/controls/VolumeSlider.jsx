import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { setVolume } from '../speechSlice';
import { MAX_VOLUME, MIN_VOLUME } from '../tts-engines/webSpeech';

export default function VolumeSlider() {
  const dispatch = useDispatch();
  const volume = useSelector((state) => state.speech.options.volume);

  function handleVolumeChange(event) {
    const volume = event.target.value;
    dispatch(setVolume(volume));
  }

  return (
    <div>
      <Typography id="volume-slider" gutterBottom>
        Speaking volume
      </Typography>

      <Slider
        min={MIN_VOLUME}
        max={MAX_VOLUME}
        step={0.1}
        value={volume}
        onChange={handleVolumeChange}
        aria-labelledby="volume-slider"
      />
    </div>
  );
}
