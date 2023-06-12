import Grid from './Grid/Grid';
import './AppGrid.css';
import { useDispatch, useSelector } from 'react-redux';
import Tile from './Tile/Tile';
import { selectPhrases } from '../category/categorySlice';
import { addPhrase } from '../output/ouputSlice';
import { SM, MD, LG } from '../display/Display.constants';
import { useMemo } from 'react';

export default function AppGrid() {
  const dispatch = useDispatch();
  const gridSize = useSelector((state) => state.display.gridSize);

  const phrases = useSelector(selectPhrases);
  const handleTileClick = (event) => {
    const phrase = event.target.textContent;
    dispatch(addPhrase(phrase));
  };

  function getCols(gridSize) {
    if (gridSize === SM) return { lg: 2, md: 2, sm: 2, xs: 1, xxs: 1 };
    if (gridSize === MD) return { lg: 3, md: 3, sm: 3, xs: 2, xxs: 2 };
    if (gridSize === LG) return { lg: 4, md: 4, sm: 4, xs: 3, xxs: 3 };
  }

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

  const cols = useMemo(() => getCols(gridSize), [gridSize]);

  return (
    <div className="GridSection">
      <Grid cols={cols}>{renderTiles()}</Grid>
    </div>
  );
}
