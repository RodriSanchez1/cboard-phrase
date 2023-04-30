export const MIN_PITCH = 0;
export const MAX_PITCH = 2;
export const DEFAULT_PITCH = 1;

export const MIN_RATE = 0;
export const MAX_RATE = 2;
export const DEFAULT_RATE = 1;

export const MIN_VOLUME = 0;
export const MAX_VOLUME = 1;
export const DEFAULT_VOLUME = 1;

const synth = window.speechSynthesis;

export const webSpeech = {
  getVoices: () => {
    return new Promise((resolve) => {
      const voices = synth.getVoices();

      if (voices?.length) {
        resolve(voices);
      } else {
        synth.onvoiceschanged = () => {
          const voices = synth.getVoices();
          resolve(voices);
        };
      }
    });
  },
  speak: (text, { voiceURI, ...options }) => {
    return new Promise((resolve, reject) => {
      webSpeech.getVoices().then((voices) => {
        const voice = voices.find((voice) => voice.voiceURI === voiceURI);

        synth.cancel();

        const utterance = Object.assign(
          new window.SpeechSynthesisUtterance(text),
          options,
          {
            voice,
            onend: (event) => resolve(event),
            onerror: (event) => reject(event),
          }
        );

        synth.speak(utterance);
      });
    });
  },
  cancel: () => {
    synth.cancel();
  },
};
