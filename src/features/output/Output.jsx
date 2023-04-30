import { useDispatch, useSelector } from 'react-redux';
import { setValue, selectText } from './ouputSlice';
import { TextField } from '@mui/material';
import './Output.css';

export default function Output() {
  const dispatch = useDispatch();
  const text = useSelector(selectText);

  const handleChange = (event) => {
    dispatch(setValue(event.target.value));
  };

  return (
    <div className="Output">
      <TextField
        id="outlined-multiline-static"
        InputProps={{
          style: { backgroundColor: '#fff' },
        }}
        multiline
        rows={4}
        fullWidth
        onChange={handleChange}
        value={text}
      />
    </div>
  );
}
