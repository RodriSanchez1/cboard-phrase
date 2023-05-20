import InputLabel from '@mui/material/InputLabel';
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { setVoiceURI, selectVoicesByLang } from '../speechSlice';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function VoiceSelect() {
  const dispatch = useDispatch();
  const voicesByLang = useSelector(selectVoicesByLang);
  const voiceURI = useSelector((state) => state.speech.options.voiceURI);

  function handleChange(event) {
    const voiceURI = event.target.value;
    dispatch(setVoiceURI(voiceURI));
  }

  return (
    <FormControl sx={{ minWidth: '80%' }}>
      <InputLabel id="voice-select-label">Voice</InputLabel>
      <Select
        label="Voice"
        labelId="voice-select-label"
        value={voiceURI}
        onChange={handleChange}
        input={<OutlinedInput label="Voice" />}
      >
        {Object.entries(voicesByLang).map(([lang, voices]) => [
          <ListSubheader key={lang}>{lang}</ListSubheader>,
          voices.map((voice) => (
            <MenuItem key={voice.voiceURI} value={voice.voiceURI}>
              {voice.name}
            </MenuItem>
          )),
        ])}
      </Select>
    </FormControl>
  );
}
