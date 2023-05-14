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
import './EditCategoryModal.css';

EditCategoryModal.propTypes = {
  open: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired,
  category: propTypes.object.isRequired,
  handleSave: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
};

export default function EditCategoryModal({
  open,
  onClose,
  category,
  handleSave,
  title,
}) {
  const [editingCategory, setEditingCategory] = useState({ ...category });

  const handleClose = () => {
    onClose(false);
  };

  const handleTextChange = (event) => {
    setEditingCategory({ ...editingCategory, name: event.target.value });
  };

  const onSave = () => {
    const newCategory = { ...editingCategory };
    if (editingCategory.name !== category.name) {
      newCategory.nameKey = '';
    }
    handleSave(newCategory);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth={true}>
      <DialogTitle>{title} Category</DialogTitle>
      <DialogContent>
        <DialogContentText>Name</DialogContentText>
        <TextField
          margin="dense"
          id="phrase"
          fullWidth
          variant="standard"
          defaultValue={editingCategory.name}
          onChange={handleTextChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
