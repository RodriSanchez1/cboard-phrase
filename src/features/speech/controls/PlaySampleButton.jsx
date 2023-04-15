import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { speak } from '../speechSlice';

export default function PlaySampleButton() {
  const dispatch = useDispatch();

  function handleClick() {
    const text = 'Hi, this is my voice';
    dispatch(speak(text));
  }

  return (
    <Button variant="contained" onClick={handleClick}>
      Play Sample
    </Button>
  );
}
