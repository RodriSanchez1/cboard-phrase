import Grid from './Grid/Grid';
import './AppGrid.css';
import { useDispatch, useSelector } from 'react-redux';
import Tile from './Tile/Tile';
import { selectPhrases } from '../category/categorySlice';
import { addPhrase } from '../output/ouputSlice';

export default function AppGrid() {
  const dispatch = useDispatch();

  const phrases = useSelector(selectPhrases);
  const handleTileClick = (event) => {
    const phrase = event.target.textContent;
    dispatch(addPhrase(phrase));
  };

  function renderTiles() {
    return phrases.map((phrase) => {
      return (
        <div key={phrase.id}>
          <Tile
            backgroundColor={phrase.backgroundColor}
            onClick={handleTileClick}
            label={phrase.label}
          />
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
