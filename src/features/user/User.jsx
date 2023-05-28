import { ListItemIcon, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser, updateUserData } from './userSlice';
import { FormattedMessage } from 'react-intl';
import messages from './User.messages';
import { TextField } from '@mui/material';
import { ListItemText } from '@mui/material';
import { ListItemSecondaryAction } from '@mui/material';
import { ListItem } from '@mui/material';
import { List } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import FullScreenDialog from '../../components/FullScreenDialog/FullScreenDialog';
import { useNavigate } from 'react-router-dom';
import { logout } from './userSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useUpdateUserMutation } from './userApi';
import AlertSnackbar from '../../components/AlertSnackbar/AlertSnackbar';
import {
  ERROR,
  SAVING,
  INFO,
  SUCCESS,
} from '../../components/AlertSnackbar/AlertSnackbar.constants';
import useAlertSnackbar from '../../hooks/useAlertSnackbar';

export default function User() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateUserApi, { isSuccess, isLoading, isError, error: fetchError }] =
    useUpdateUserMutation();

  const { isOpen, onCloseAlertSnackbar, severity, setSeverityAndToggle } =
    useAlertSnackbar();

  const [name, setName] = useState(user.name || 'Guest');
  const isLogged = user.isLogged;

  const handleSubmit = async () => {
    try {
      console.log(name);
      setSeverityAndToggle(INFO);
      await updateUserApi({ id: user.id, name: name }).unwrap();
      dispatch(updateUserData({ name }));
      setSeverityAndToggle(SUCCESS);
    } catch (e) {
      console.error(e);
      setSeverityAndToggle(ERROR);
    }
  };

  const handleLogOutClick = () => {
    dispatch(logout());
  };

  const onClose = () => {
    // if (isModified) {
    //   setIsOpenCancelModal(true);
    //   return;
    // }
    navigate('/settings');
  };

  return (
    <div className="People">
      <FullScreenDialog
        open
        title={<FormattedMessage {...messages.user} />}
        onClose={onClose}
        onSave={handleSubmit}
        enableSave={isLogged}
      >
        <Paper>
          <List>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={name} />
              <ListItemSecondaryAction className="Settings--secondaryAction">
                <Button
                  disabled={!isLogged}
                  variant="outlined"
                  color="primary"
                  onClick={handleLogOutClick}
                  component={Link}
                  to="/"
                >
                  <FormattedMessage {...messages.logout} />
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<FormattedMessage {...messages.name} />}
                secondary={<FormattedMessage {...messages.nameSecondary} />}
              />
              <ListItemSecondaryAction className="Settings--secondaryAction">
                <TextField
                  disabled={!isLogged}
                  id="user-name"
                  label={<FormattedMessage {...messages.name} />}
                  value={name}
                  margin="normal"
                  onChange={(event) => setName(event.target.value)}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={<FormattedMessage {...messages.email} />}
                secondary={<FormattedMessage {...messages.emailSecondary} />}
              />
              <ListItemSecondaryAction className="Settings--secondaryAction">
                <TextField
                  className="Settings--secondaryAction--textField"
                  disabled={true} // Replace with `{!isLogged}` untill fix issue #140 on cboard-api
                  id="user-email"
                  label={<FormattedMessage {...messages.email} />}
                  value={user.email}
                  margin="normal"
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Paper>
        <AlertSnackbar
          severity={severity}
          open={isOpen}
          onClose={onCloseAlertSnackbar}
        />
      </FullScreenDialog>
    </div>
  );
}
