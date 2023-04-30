import './AppHeader.css';
import Output from '../output/Output';
import CommandBlock from './CommandBlock/CommandBlock';

export default function AppHeader() {
  return (
    <div className="AppHeader_Container">
      <Output />
      <CommandBlock />
    </div>
  );
}
