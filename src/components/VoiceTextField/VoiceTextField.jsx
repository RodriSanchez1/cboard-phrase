import TextField from '@mui/material/TextField';
import './VoiceTextField.css';
import propTypes from 'prop-types';

VoiceTextField.propTypes = {
  onChange: propTypes.func.isRequired,
  outputText: propTypes.string.isRequired,
};

export default function VoiceTextField({ onChange, outputText }) {
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
        onChange={onChange}
        value={outputText}
      />
    </div>
  );
}
