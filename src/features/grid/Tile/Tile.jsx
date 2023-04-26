import PropTypes from 'prop-types';
import './Tile.css';

Tile.propTypes = {
  phrase: PropTypes.object.isRequired,
};

export default function Tile({ phrase }) {
  return (
    <button
      style={{
        backgroundColor: phrase.backgroundColor,
      }}
      className="Tile"
      type="button"
      onClick={() => console.log('clicked')}
    >
      {phrase.label}
    </button>
  );
}
