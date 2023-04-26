import Grid from './Grid/Grid';
import './AppGrid.css';
import { useSelector } from 'react-redux';
import Tile from './Tile/Tile';
import { selectPhrases } from '../category/categorySlice';

export default function AppGrid() {
  const phrases = useSelector(selectPhrases);

  function renderTiles() {
    return phrases.map((phrase) => {
      return (
        <div key={phrase.id}>
          <Tile phrase={phrase} />
        </div>
      );
    });
  }

  return (
    <div className="GridSection">
      <Grid>{renderTiles()}</Grid>
    </div>
  );
}
