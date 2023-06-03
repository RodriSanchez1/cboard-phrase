import ReactGA from 'react-ga4';

const startSpeech = (phrase) =>
  ReactGA.event({
    action: 'Start Speech',
    category: 'Speech',
    label: phrase,
  });

const gaEvents = {
  startSpeech,
};

export { gaEvents };
