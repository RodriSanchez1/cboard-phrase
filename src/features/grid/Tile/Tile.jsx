import PropTypes from 'prop-types';
import './Tile.css';

Tile.propTypes = {
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default function Tile({ backgroundColor, onClick, label }) {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
      }}
      className="Tile"
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
