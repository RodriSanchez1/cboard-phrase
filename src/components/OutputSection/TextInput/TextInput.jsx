import TextField from '@mui/material/TextField';
import './TextInput.css';

export default function TextInput() {
  return (
    <div className="TextInput">
      <TextField
        id="outlined-multiline-static"
        InputProps={{
          style: { backgroundColor: '#fff' },
        }}
        multiline
        rows={4}
        fullWidth
      />
    </div>
  );
}
