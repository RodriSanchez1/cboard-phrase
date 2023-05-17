import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { selectSpeechLanguages, setLang } from '../speechSlice';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function SpeechLanguageSelect() {
  const dispatch = useDispatch();
  const languages = useSelector(selectSpeechLanguages);
  const lang = useSelector((state) => state.speech.options.lang);

  function handleChange(event) {
    const lang = event.target.value;
    dispatch(setLang(lang));
  }

  return (
    <FormControl sx={{ minWidth: '80%' }}>
      <InputLabel id="language-select-label">Speech language</InputLabel>
      <Select
        label="Speech language"
        labelId="language-select-label"
        value={lang}
        onChange={handleChange}
      >
        {languages?.map(({ lang, name }) => (
          <MenuItem key={lang} value={lang}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
