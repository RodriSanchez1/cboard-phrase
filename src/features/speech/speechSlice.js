import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { webSpeech } from './tts-engines/webSpeech';

const initialState = {
  voices: [],
  options: {
    lang: '',
    voiceURI: '',
    pitch: 1,
    rate: 1,
    volume: 1,
  },
  isSpeaking: false,
};

export const speechSlice = createSlice({
  name: 'speech',
  initialState,
  reducers: {
    setRate: (state, action) => {
      state.options.rate = action.payload;
    },
    setPitch: (state, action) => {
      state.options.pitch = action.payload;
    },
    setVolume: (state, action) => {
      state.options.volume = action.payload;
    },
    setLang: (state, action) => {
      state.options.lang = action.payload;
      state.options.voiceURI = '';
    },
    setVoiceURI: (state, action) => {
      state.options.voiceURI = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVoices.fulfilled, (state, action) => {
      state.voices = action.payload;
    });
    builder.addCase(speak.pending, (state) => {
      state.isSpeaking = true;
    });
    builder.addCase(speak.fulfilled, (state) => {
      state.isSpeaking = false;
    });
    builder.addCase(speak.rejected, (state) => {
      state.isSpeaking = false;
    });
    builder.addCase('output/clear', () => {
      webSpeech.cancel();
    });
  },
});

export const { setRate, setPitch, setVolume, setLang, setVoiceURI } =
  speechSlice.actions;

export const getVoices = createAsyncThunk('speech/getVoices', async () => {
  const voices = await webSpeech.getVoices();

  return voices.map((voice) => ({
    default: voice.default,
    lang: voice.lang,
    localService: voice.localService,
    name: voice.name,
    voiceURI: voice.voiceURI,
  }));
});

export const speak = createAsyncThunk(
  'speech/speak',
  async (text, thunkAPI) => {
    const { speech } = thunkAPI.getState();
    await webSpeech.speak(text, speech.options);
  }
);

export function selectSpeechLanguages(state) {
  const languageNamesInEnglish = new Intl.DisplayNames(['en'], {
    type: 'language',
  });

  const langs = state.speech.voices.map((voice) => voice.lang.split('-')[0]);

  const uniqueLangs = [...new Set(langs)].map((lang) => ({
    lang,
    name: languageNamesInEnglish.of(lang),
  }));

  return uniqueLangs;
}

const selectSpeech = (state) => state.speech;

export const selectVoicesByLang = createSelector([selectSpeech], (speech) =>
  speech.voices
    .filter((voice) => {
      const langCode = voice.lang.split('-')[0];
      const speechLanguageCode = speech.options.lang.split('-')[0];

      return langCode === speechLanguageCode;
    })
    .reduce((acc, voice) => {
      if (!acc[voice.lang]) {
        acc[voice.lang] = [];
      }
      acc[voice.lang].push(voice);
      return acc;
    }, {})
);

export default speechSlice.reducer;
