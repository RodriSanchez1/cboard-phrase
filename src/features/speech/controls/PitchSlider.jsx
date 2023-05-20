import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { setPitch } from '../speechSlice';
import { MAX_PITCH, MIN_PITCH } from '../tts-engines/webSpeech';
import './controls.css';

export default function PitchSlider() {
  const dispatch = useDispatch();
  const pitch = useSelector((state) => state.speech.options.pitch);

  function handlePitchChange(event) {
    const pitch = event.target.value;
    dispatch(setPitch(pitch));
  }

  return (
    <div className="Speech_Slider">
      <Typography id="pitch-slider" gutterBottom>
        Speaking pitch
      </Typography>

      <Slider
        min={MIN_PITCH}
        max={MAX_PITCH}
        step={0.2}
        value={pitch}
        onChange={handlePitchChange}
        aria-labelledby="pitch-slider"
      />
    </div>
  );
}
