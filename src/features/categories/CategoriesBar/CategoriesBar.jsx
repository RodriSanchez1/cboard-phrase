import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';
import './CategoriesBar.css';

const initialCategories = [
  { id: 1, name: 'Common phrases', active: true },
  { id: 2, name: 'Going shopping', active: false },
  { id: 3, name: 'Doctor visit', active: false },
  { id: 4, name: 'At the restaurant', active: false },
  { id: 5, name: 'At the hotel', active: false },
  { id: 6, name: 'At the airport', active: false },
];

export default function CategoriesBar() {
  const [categories, setCategories] = useState(initialCategories);

  const handleClick = (category) => {
    const updatedCategories = categories.map((c) => ({
      ...c,
      active: c.id === category.id,
    }));
    setCategories(updatedCategories);
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
          overflowX: 'auto',
          alignItems: 'center',
        }}
      >
        {categories.map((category) => (
          <Button
            key={category.id}
            color="secondary"
            variant={category.active ? 'contained' : 'outlined'}
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
