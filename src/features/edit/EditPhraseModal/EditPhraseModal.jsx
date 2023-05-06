import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';

import { useState } from 'react';
import propTypes from 'prop-types';
import './EditPhraseModal.css';
import { CirclePicker } from 'react-color';

EditPhraseModal.propTypes = {
  open: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  phrase: propTypes.object.isRequired,
  handleSaveEditPhrase: propTypes.func.isRequired,
};

const colors = [
  '#FFFFFF',
  '#FF6900',
  '#FCB900',
  '#7BDCB5',
  '#00D084',
  '#8ED1FC',
  '#0693E3',
  '#ABB8C3',
  '#EB144C',
  '#F78DA7',
];
export default function EditPhraseModal({
  open,
  onClose,
  phrase,
  handleSaveEditPhrase,
}) {
  const [editingPhrase, setEditingPhrase] = useState({ ...phrase });

  const handleClose = () => {
    onClose(false);
  };

  const [colorValue, setColorValue] = useState(
    editingPhrase.backgroundColor || '#FFFFFF'
  );

  const handleTextChange = (event) => {
    setEditingPhrase({ ...editingPhrase, label: event.target.value });
  };

  const handleColorChange = (color) => {
    setColorValue(color.hex);
    setEditingPhrase({ ...editingPhrase, backgroundColor: color.hex });
  };

  const handleSave = () => {
    const newPhrase = { ...editingPhrase };
    if (editingPhrase.label !== phrase.label) {
      newPhrase.labelKey = '';
    }
    handleSaveEditPhrase(newPhrase);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth={true}>
      <DialogTitle>Edit Phrase</DialogTitle>
      <DialogContent>
        <DialogContentText>Phrase</DialogContentText>
        <TextField
          margin="dense"
          id="phrase"
          fullWidth
          variant="standard"
          defaultValue={editingPhrase.label}
          onChange={handleTextChange}
        />
        <DialogContentText sx={{ mt: '8px', mb: '8px' }}>
          Color
        </DialogContentText>
        <div className="colorContainer">
          <CirclePicker
            width="100%"
            colors={colors}
            color={colorValue}
            onChangeComplete={handleColorChange}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
