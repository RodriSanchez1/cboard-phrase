import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import propTypes from 'prop-types';

DeleteModal.propTypes = {
  open: propTypes.bool.isRequired,
  setIsOpenDeleteModal: propTypes.func.isRequired,
  onDeleteElement: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};

export default function DeleteModal({
  open,
  setIsOpenDeleteModal,
  name,
  type,
  onDeleteElement,
}) {
  const handleCancel = () => {
    setIsOpenDeleteModal(false);
  };

  const handleDelete = () => {
    onDeleteElement();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete the {type.toLowerCase()}:
          <b> {name}</b> ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </DialogActions>
    </Dialog>
  );
}
