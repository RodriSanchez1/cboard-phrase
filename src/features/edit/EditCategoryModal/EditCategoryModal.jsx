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
  handleSaveEditCategory: propTypes.func.isRequired,
};

export default function EditCategoryModal({
  open,
  onClose,
  category,
  handleSaveEditCategory,
}) {
  const [editingCategory, setEditingCategory] = useState({ ...category });

  const handleClose = () => {
    onClose(false);
  };

  const handleTextChange = (event) => {
    setEditingCategory({ ...editingCategory, name: event.target.value });
  };

  const handleSave = () => {
    const newCategory = { ...editingCategory };
    if (editingCategory.name !== category.name) {
      newCategory.nameKey = '';
    }
    handleSaveEditCategory(newCategory);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth={true}>
      <DialogTitle>Edit Category</DialogTitle>
      <DialogContent>
        <DialogContentText>Category</DialogContentText>
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
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
