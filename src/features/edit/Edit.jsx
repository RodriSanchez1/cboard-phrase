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
  IconButton,
  Divider,
} from '@mui/material';
import TextsmsIcon from '@mui/icons-material/Textsms';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ClassIcon from '@mui/icons-material/Class';

import './Edit.css';
import { useSelector } from 'react-redux';
import {
  selectAllCategories,
  selectActiveCategoryId,
  updateCategory,
  updateCategories,
} from '../category/categorySlice';
import { useDispatch } from 'react-redux';
import EditPhraseModal from './EditPhraseModal/EditPhraseModal';
import EditCategoryModal from './EditCategoryModal/EditCategoryModal';
import CancelModal from '../../components/CancelModal/CancelModal';
import DeleteModal from './DeleteModal/DeleteModal';
import { useNavigate } from 'react-router';
import { PHRASE, CATEGORY } from './Edit.const';

export default function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeCategoryId = useSelector(selectActiveCategoryId);
  const categories = useSelector(selectAllCategories);

  const [editingCategories, setEditingCategories] = useState([...categories]);

  const activeCategory = editingCategories.find(
    (category) => category.id === activeCategoryId
  );

  const [editingCategory, setEditingCategory] = useState(activeCategory);
  const [editingPhrase, setEditingPhrase] = useState({});
  const [isModified, setIsModified] = useState(false);

  const [isOpenCancelModal, setIsOpenCancelModal] = useState(false);
  const [isOpenEditPhraseModal, setIsOpenEditPhraseModal] = useState(false);
  const [isOpenEditCategoryModal, setIsOpenEditCategoryModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [deletingElement, setDeletingElement] = useState({
    element: {},
    type: '',
  });

  const handleSelectChange = (event) => {
    const selectedCategory = editingCategories.find(
      (cat) => event.target.value === cat.id
    );
    setEditingCategory(selectedCategory);
  };

  const handleEditPhraseClick = (phrase) => {
    const phraseId = phrase.id;
    setEditingPhrase(
      editingCategory.phrases.find((phrase) => phrase.id === phraseId)
    );
    setIsOpenEditPhraseModal(true);
  };

  const handleSaveEditPhrase = (newPhrase) => {
    const newPhrases = editingCategory.phrases.map((phrase) => {
      if (phrase.id === newPhrase.id) {
        const isChanged =
          phrase.name !== newPhrase.name ||
          phrase.backgroundColor !== newPhrase.backgroundColor;
        setIsModified(isChanged);
        return newPhrase;
      }
      return phrase;
    });
    const newCategory = { ...editingCategory, phrases: newPhrases };
    setEditingCategory(newCategory);
    setIsOpenEditPhraseModal(false);
  };

  const handleEditCategoryClick = (category) => {
    setIsOpenEditCategoryModal(true);
  };

  const handleSaveEditCategory = (newCategory) => {
    const isChanged = newCategory.name !== editingCategory.name;
    setIsModified(isChanged);
    setEditingCategory({ ...newCategory });
    setIsOpenEditCategoryModal(false);
  };

  const handleDeleteElementClick = (element, type) => {
    setDeletingElement({ element, type });
    setIsOpenDeleteModal(true);
  };

  const handleDeleteElement = () => {
    if (deletingElement.type === CATEGORY) {
      const newCategories = editingCategories.filter(
        (category) => category.id !== deletingElement.element.id
      );
      setEditingCategories(newCategories);
      setEditingCategory(newCategories[0]);
      setIsModified(false);
    }
    if (deletingElement.type === PHRASE) {
      const newPhrases = editingCategory.phrases.filter(
        (phrase) => phrase.id !== deletingElement.element.id
      );
      setEditingCategory({ ...editingCategory, phrases: newPhrases });
    }
    setIsOpenDeleteModal(false);
  };

  const handleSave = () => {
    if (categories.length === editingCategories.length) {
      const newCategory = { ...editingCategory };
      dispatch(updateCategory(newCategory));
    } else {
      const newCategories = editingCategories.map((category) =>
        category.id === editingCategory.id ? editingCategory : category
      );
      dispatch(updateCategories(newCategories));
    }
    navigate(-1);
  };

  const handleCancel = () => {
    if (isModified) {
      setIsOpenCancelModal(true);
      return;
    }
    navigate(-1);
  };

  return (
    <FullScreenDialog
      title="Edit"
      open={true}
      onSave={handleSave}
      onClose={handleCancel}
    >
      <Paper elevation={3}>
        <List
          subheader={<ListSubheader disableSticky>Categories</ListSubheader>}
        >
          <ListItem>
            <FormControl sx={{ minWidth: 300 }}>
              <InputLabel id="select-category-label">Category</InputLabel>
              <Select
                labelId="select-category-label"
                id="select-category-label-id"
                value={editingCategory?.id || ''}
                label={editingCategory?.name || ''}
                onChange={handleSelectChange}
                input={<OutlinedInput label="Category" />}
                disabled={isModified}
              >
                {editingCategories.map((category) => {
                  return (
                    <MenuItem key={category.id} value={category.id}>
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
            <ListItemIcon>
              <ClassIcon />
            </ListItemIcon>
            <ListItemText primary={editingCategory?.name || 'None'} />
            <ListItemIcon
              sx={{ minWidth: '25px' }}
              phraseid={editingCategory?.id}
            >
              <IconButton
                onClick={() => handleEditCategoryClick(editingCategory)}
              >
                <EditIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemIcon sx={{ minWidth: '25px' }}>
              <IconButton
                onClick={() =>
                  handleDeleteElementClick(editingCategory, CATEGORY)
                }
              >
                <DeleteIcon phraseid={editingCategory?.id} />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} sx={{ mt: 1, mb: 2 }}>
        <List subheader={<ListSubheader disableSticky>Phrases</ListSubheader>}>
          {editingCategory?.phrases.map((phrase, index) => {
            const white = '#ffffff';
            const WHITE = '#FFFFFF';
            const action = 'action';
            const bgColor = [white, WHITE].includes(phrase.backgroundColor)
              ? action
              : phrase.backgroundColor;
            return (
              <div key={phrase.id}>
                <ListItem key={phrase.id}>
                  <ListItemIcon>
                    <TextsmsIcon sx={{ color: bgColor }} />
                  </ListItemIcon>
                  <ListItemText primary={phrase.label} />
                  <ListItemIcon sx={{ minWidth: '25px' }}>
                    <IconButton onClick={() => handleEditPhraseClick(phrase)}>
                      <EditIcon />
                    </IconButton>
                  </ListItemIcon>
                  <ListItemIcon sx={{ minWidth: '25px' }}>
                    <IconButton
                      onClick={() => handleDeleteElementClick(phrase, PHRASE)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemIcon>
                </ListItem>
                {index < editingCategory.phrases.length - 1 && <Divider />}
              </div>
            );
          })}
        </List>
        {isOpenEditPhraseModal && (
          <EditPhraseModal
            open={isOpenEditPhraseModal}
            onClose={setIsOpenEditPhraseModal}
            phrase={editingPhrase}
            handleSaveEditPhrase={handleSaveEditPhrase}
          />
        )}
        {isOpenEditCategoryModal && (
          <EditCategoryModal
            open={isOpenEditCategoryModal}
            onClose={setIsOpenEditCategoryModal}
            category={editingCategory}
            handleSaveEditCategory={handleSaveEditCategory}
          />
        )}

        {isOpenCancelModal && (
          <CancelModal
            open={isOpenCancelModal}
            setIsOpenCancelModal={setIsOpenCancelModal}
          />
        )}
        {isOpenDeleteModal && (
          <DeleteModal
            open={isOpenDeleteModal}
            setIsOpenDeleteModal={setIsOpenDeleteModal}
            onDeleteElement={handleDeleteElement}
            name={deletingElement.element.label || deletingElement.element.name}
            type={deletingElement.type}
          />
        )}
      </Paper>
    </FullScreenDialog>
  );
}
