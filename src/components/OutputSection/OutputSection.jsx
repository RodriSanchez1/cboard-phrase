import './OutputSection.css';
import TextInput from './TextInput/TextInput';
import CommandBlock from './CommandBlock/CommandBlock';

export default function OutputSection() {
  return (
    <div className="OutputSection_Container">
      <TextInput />
      <CommandBlock />
    </div>
  );
}
