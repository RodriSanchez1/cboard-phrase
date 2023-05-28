import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './AlertSnackbar.messages';
import { INFO, SAVING } from './AlertSnackbar.constants';
import CircularProgress from '@mui/material/CircularProgress';

AlertSnackbar.propTypes = {
  open: propTypes.bool,
  autoHideDuration: propTypes.number,
  onClose: propTypes.func,
  severity: propTypes.string,
  sx: propTypes.object,
  message: propTypes.string,
};

AlertSnackbar.defaultProps = {
  open: false,
  onClose: () => {},
};

export default function AlertSnackbar({
  open,
  autoHideDuration,
  onClose,
  severity,
  sx,
}) {
  const message = severity === INFO ? SAVING : severity;
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert
        iconMapping={{
          info: <CircularProgress size={20} />,
        }}
        onClose={onClose}
        severity={severity}
        sx={{ width: '100%' }}
      >
        <FormattedMessage {...messages[message]} />
      </Alert>
    </Snackbar>
  );
}
