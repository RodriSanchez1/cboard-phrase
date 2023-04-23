import './AppHeader.css';
import VoiceTextField from './VoiceTextField/VoiceTextField';
import CommandBlock from './CommandBlock/CommandBlock';

export default function AppHeader() {
  return (
    <div className="AppHeader_Container">
      <VoiceTextField />
      <CommandBlock />
    </div>
  );
}
