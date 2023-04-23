import TextField from '@mui/material/TextField';
import './VoiceTextField.css';

export default function VoiceTextField() {
  return (
    <div className="VoiceTextField">
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
