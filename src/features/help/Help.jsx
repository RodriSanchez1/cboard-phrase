import FullScreenDialog from '../../components/FullScreenDialog/FullScreenDialog';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';

export default function Help() {
  const navigate = useNavigate();

  const onClose = () => {
    navigate('/settings');
  };

  return (
    <FullScreenDialog title="User Help" open={true} onClose={onClose}>
      <Paper elevation={3}>
        <Typography variant="h4" component="h2" mt={1}>
          User Help
        </Typography>
      </Paper>
    </FullScreenDialog>
  );
}
