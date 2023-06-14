import { Paper } from '@mui/material';
import FullScreenDialog from '../../components/FullScreenDialog/FullScreenDialog';
import { useNavigate } from 'react-router';
import { FormattedMessage } from 'react-intl';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import messages from './Display.messages';
import { SM, MD, LG } from './Display.constants';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateDisplay } from './displaySlice';

export default function Display() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleGoBack = () => {
    navigate('/settings');
  };

  const selectGridSize = useSelector((state) => state.display.gridSize);

  const [gridSize, setGridSize] = useState(selectGridSize);

  function onDisplaySettingsChange(name, e) {
    if (name === 'gridSize') {
      setGridSize(e.target.value);
    }
  }

  function handleSave() {
    dispatch(updateDisplay({ gridSize }));
    navigate('/settings');
  }

  function renderSelect(name) {
    return (
      <FormControl>
        <Select
          aria-label={name}
          id={name}
          name={name}
          value={gridSize}
          onChange={(e) => onDisplaySettingsChange(name, e)}
        >
          <MenuItem value={SM}>
            <FormattedMessage {...messages[SM]} />
          </MenuItem>
          <MenuItem value={MD}>
            <FormattedMessage {...messages[MD]} />
          </MenuItem>
          <MenuItem value={LG}>
            <FormattedMessage {...messages[LG]} />
          </MenuItem>
        </Select>
      </FormControl>
    );
  }

  return (
    <FullScreenDialog
      title="Display"
      open={true}
      onClose={handleGoBack}
      enableSave
      onSave={handleSave}
    >
      <Paper className="Display" elevation={3} sx={{ mt: 1 }}>
        <List>
          <ListItem>
            <ListItemText
              primary={<FormattedMessage {...messages.gridSize} />}
              secondary={<FormattedMessage {...messages.gridSizeSecondary} />}
            />
            <ListItemSecondaryAction className="Display__Options">
              {renderSelect('gridSize')}
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Paper>
    </FullScreenDialog>
  );
}
