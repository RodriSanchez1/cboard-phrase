import FullScreenDialog from '../../components/FullScreenDialog/FullScreenDialog';
import {
  Paper,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  IconButton,
  ListItemButton,
} from '@mui/material';
import ClassIcon from '@mui/icons-material/Class';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import LanguageIcon from '@mui/icons-material/Language';
import { useNavigate } from 'react-router';
import { FormattedMessage } from 'react-intl';

const peopleSettings = [
  {
    icon: (
      <div className="Settings__UserIcon__Container">
        <UserIcon link={false} accountIcon={PersonIcon} />
      </div>
    ),
    secondary: isLogged ? user.name : null,
    text: isLogged ? messages.username : messages.guest,
    url: '/settings/people',
    rightContent: isLogged ? (
      <Button color="primary" onClick={handleLogOutClick} variant="outlined">
        <FormattedMessage {...messages.logout} />
      </Button>
    ) : (
      <Button
        color="primary"
        variant="outlined"
        component={Link}
        to="/login-signup"
      >
        <FormattedMessage {...messages.loginSignup} />
      </Button>
    ),
  },
];

export default function Settings() {
  const navigate = useNavigate();

  const onClose = () => {
    navigate(-1);
  };

  const onSave = () => {
    navigate(-1);
  };
  return (
    <FullScreenDialog
      title="Settings"
      open={true}
      onSave={onSave}
      onClose={onClose}
    >
      <Paper elevation={3}>
        <List subheader={<ListSubheader disableSticky>User</ListSubheader>}>
          <ListItem button>Profile</ListItem>
        </List>
      </Paper>
      <Paper elevation={3} sx={{ mt: 1 }}>
        <List subheader={<ListSubheader disableSticky>Language</ListSubheader>}>
          <ListItemButton onClick={() => {}}>
            <ListItemIcon>
              <RecordVoiceOverIcon />
            </ListItemIcon>
            <ListItemText primary={'Language'} />
          </ListItemButton>
          <ListItemButton onClick={() => {}}>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary={'Speech'} />
          </ListItemButton>
        </List>
      </Paper>
    </FullScreenDialog>
  );
}
