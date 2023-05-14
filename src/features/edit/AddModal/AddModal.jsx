import propTypes from 'prop-types';
import EditCategoryModal from '../EditCategoryModal/EditCategoryModal';
import EditPhraseModal from '../EditPhraseModal/EditPhraseModal';
import { nanoid } from 'nanoid';
import { CATEGORY, PHRASE } from '../Edit.const';

AddModal.propTypes = {
  open: propTypes.bool.isRequired,
  setOpenAddModal: propTypes.func.isRequired,
  onAddElement: propTypes.func.isRequired,
  type: propTypes.string.isRequired,
};

const DEFAULT_CATEGORY = {
  id: '',
  name: '',
  nameKey: '',
  author: 'Cboard',
  email: 'support@cboard.io',
  isPublic: true,
  hidden: false,
  phrases: [],
};

const DEFAULT_PHRASE = {
  id: '',
  label: '',
  labelKey: '',
  backgroundColor: '#FFFFFF',
};

export default function AddModal({
  open,
  setOpenAddModal,
  type,
  onAddElement,
}) {
  if (type === CATEGORY) {
    return (
      <EditCategoryModal
        open={open}
        onClose={setOpenAddModal}
        category={{ ...DEFAULT_CATEGORY, id: nanoid(10) }}
        handleSave={onAddElement}
        title={'Add'}
      />
    );
  }
  if (type === PHRASE)
    return (
      <EditPhraseModal
        open={open}
        onClose={setOpenAddModal}
        phrase={{ ...DEFAULT_PHRASE, id: nanoid(10) }}
        handleSave={onAddElement}
        title={'Add '}
      />
    );
}
