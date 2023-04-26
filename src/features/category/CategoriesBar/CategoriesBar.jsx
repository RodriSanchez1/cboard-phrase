import { Box } from '@mui/material';
import { Button } from '@mui/material';
import './CategoriesBar.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectActiveCategoryId,
  selectAllCategories,
  setActiveCategoryId,
} from '../categorySlice';

export default function CategoriesBar() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const activeCategoryId = useSelector(selectActiveCategoryId);

  const handleClick = (category) => {
    dispatch(setActiveCategoryId(category.id));
  };

  return (
    <div className="categoriesBar">
      <Box
        sx={{
          width: '97%',
          height: '50px',
          backgroundColor: '#FFF',
          borderRadius: 1,
          display: 'flex',
          overflowX: 'hidden',
          alignItems: 'center',
        }}
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            color="secondary"
            variant={
              category.id === activeCategoryId ? 'contained' : 'outlined'
            }
            onClick={() => handleClick(category)}
            sx={{ margin: '0 5px', whiteSpace: 'nowrap', minWidth: '150px' }}
          >
            {category.name}
          </Button>
        ))}
      </Box>
    </div>
  );
}
