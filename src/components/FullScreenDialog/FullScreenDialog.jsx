import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Slide from '@mui/material/Slide';
//import { useNavigate } from 'react-router';

FullScreenDialog.propTypes = {
  disableSubmit: PropTypes.bool,
  open: PropTypes.bool,
  fullWidth: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
  onSave: PropTypes.func,
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function FullScreenDialog(props) {
  const { children, title, onSave, onClose } = props;

  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    onSave();
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={true}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: '#5c5c5d' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <ArrowBackIcon />
            </IconButton>
            {title && (
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {title}
              </Typography>
            )}
            {onSave && (
              <Button color="inherit" onClick={handleSave}>
                save
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <div>
          <div
            // className={fullWidth ? classes.contentFullWidth : classes.content}
            style={{ maxWidth: '680px', margin: '0 auto' }}
          >
            {children}
          </div>
        </div>
      </Dialog>
    </div>
  );
}
export default FullScreenDialog;
