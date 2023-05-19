import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material';
import FullScreenDialog from '../../components/FullScreenDialog/FullScreenDialog';
import { useNavigate } from 'react-router';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';

export default function LanguageSettings() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/settings');
  };
  return (
    <FullScreenDialog
      title="Language"
      open={true}
      // onSave={handleSave}
      onClose={handleClose}
    >
      <Paper
        elevation={3}
        sx={{
          m: 1,
        }}
      >
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="languageIcon">
                <CheckCircleIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText primary="English" />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    </FullScreenDialog>
  );
}
