import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

CancelModal.propTypes = {
  open: propTypes.bool.isRequired,
  setIsOpenCancelModal: propTypes.func.isRequired,
};

export default function CancelModal({ open, setIsOpenCancelModal }) {
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsOpenCancelModal(false);
  };

  const handleOk = () => {
    navigate(-1);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Unsaved Changes</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have unsaved changes. Are you sure you want to leave this page?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
