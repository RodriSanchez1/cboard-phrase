import { Link } from 'react-router-dom';
import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DarkModeSwitch from '../../features/theme/DarkModeSwitch';

export default function AppBar() {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Cboard Phrase
        </Typography>

        <Button component={Link} to="/" sx={{ color: 'inherit' }}>
          Home
        </Button>

        <Button component={Link} to="settings" sx={{ color: 'inherit' }}>
          Settings
        </Button>

        <Button
          onClick={async () => {
            await fetch('/login', {
              method: 'POST',
            });

            const response = await fetch('/user');
            const user = await response.json();
          }}
          sx={{ color: 'inherit' }}
        >
          Fetch user
        </Button>

        <DarkModeSwitch />
      </Toolbar>
    </MuiAppBar>
  );
}
