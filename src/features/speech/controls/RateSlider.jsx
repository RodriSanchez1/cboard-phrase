import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { setRate } from '../speechSlice';
import { MAX_RATE, MIN_RATE } from '../tts-engines/webSpeech';
import './controls.css';

export default function RateSlider() {
  const dispatch = useDispatch();
  const rate = useSelector((state) => state.speech.options.rate);

  function handleRateChange(event) {
    const rate = event.target.value;
    dispatch(setRate(rate));
  }

  return (
    <div className="Speech_Slider">
      <Typography id="rate-slider" gutterBottom>
        Speaking rate
      </Typography>

      <Slider
        min={MIN_RATE}
        max={MAX_RATE}
        step={0.2}
        value={rate}
        onChange={handleRateChange}
        aria-labelledby="rate-slider"
      />
    </div>
  );
}
