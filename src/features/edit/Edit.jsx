import FullScreenDialog from '../../components/FullScreenDialog/FullScreenDialog';
import { useState } from 'react';
import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  ListSubheader,
  OutlinedInput,
  TextField,
  IconButton,
  DeleteIcon,
  Divider,
} from '@mui/material';
import TextsmsIcon from '@mui/icons-material/Textsms';
import EditIcon from '@mui/icons-material/Edit';

import './Edit.css';
import { useSelector } from 'react-redux';
import {
  selectAllCategories,
  selectActiveCategoryId,
} from '../category/categorySlice';

export default function Edit() {
  const activeCategoryId = useSelector(selectActiveCategoryId);
  const categories = useSelector(selectAllCategories);

  const activeCategory = categories.find(
    (category) => category.id === activeCategoryId
  );

  const [editingCategory, setEditingCategory] = useState(activeCategory);

  const handleChange = (event) => {
    console.log(event.target.value);
    setEditingCategory(event.target.value);
  };

  return (
    <FullScreenDialog title="Edit" open={true}>
      <Paper elevation={3}>
        <List
          subheader={<ListSubheader disableSticky>Categories</ListSubheader>}
        >
          <ListItem>
            <FormControl sx={{ minWidth: 300 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={editingCategory || {}}
                label={editingCategory.name || ''}
                onChange={handleChange}
                input={<OutlinedInput label="Category" />}
              >
                {categories.map((category) => {
                  return (
                    <MenuItem key={category.id} value={category}>
                      {category.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} sx={{ mt: 1 }}>
        <List
          subheader={
            <ListSubheader disableSticky>Selected category</ListSubheader>
          }
        >
          <ListItem>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              defaultValue={editingCategory.name}
            />
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} sx={{ mt: 1, mb: 2 }}>
        <List subheader={<ListSubheader disableSticky>Phrases</ListSubheader>}>
          {editingCategory.phrases.map((phrase, index) => {
            return (
              <div key={phrase.id}>
                <ListItem key={phrase.id}>
                  <ListItemIcon>
                    <TextsmsIcon />
                  </ListItemIcon>
                  <ListItemText primary={phrase.label} />
                  <ListItemIcon sx={{ minWidth: '25px' }}>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </ListItemIcon>
                  <ListItemIcon sx={{ minWidth: '25px' }}>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemIcon>
                </ListItem>
                {index < editingCategory.phrases.length - 1 && <Divider />}
              </div>
            );
          })}
        </List>
      </Paper>
    </FullScreenDialog>
  );
}
