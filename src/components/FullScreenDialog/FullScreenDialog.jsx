import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router';

FullScreenDialog.propTypes = {
  disableSubmit: PropTypes.bool,
  open: PropTypes.bool,
  fullWidth: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// const styles = {
//   appBar: {
//     position: 'static',
//     flexShrink: 0,
//   },
//   title: {
//     flex: 1,
//     whiteSpace: 'nowrap',
//     textOverflow: 'ellipsis',
//     overflow: 'hidden',
//   },
//   container: {
//     background: '#f1f1f1',
//     height: '100%',
//     overflowY: 'auto',
//     WebkitOverflowScrolling: 'touch',
//   },
//   containerDark: {
//     background: '#1111',
//     height: '100%',
//     overflowY: 'auto',
//     WebkitOverflowScrolling: 'touch',
//   },
//   content: {
// maxWidth: '680px',
// margin: '0 auto',
//   },
//   contentFullWidth: {
//     margin: '0 auto',
//   },
// };

function FullScreenDialog(props) {
  const { children, fullWidth, title } = props;

  const navigate = useNavigate();
  // const theme = useTheme();
  //const dark = theme.palette.type === 'dark' ? true : false;

  const handleClose = () => {
    navigate(-1);
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
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {title}
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              save
            </Button>
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

//export default withStyles(styles, { name: 'FullScreenDialog' })(
//   FullScreenDialog
// );
export default FullScreenDialog;
