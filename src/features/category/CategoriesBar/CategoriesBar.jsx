import './CategoriesBar.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllCategories,
  setActiveCategoryId,
  selectActiveCategoryId,
} from '../categorySlice';
import { Box, Tab, Tabs, tabsClasses } from '@mui/material';

import { useState, useEffect } from 'react';

export default function CategoriesBar() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const activeCategoryId = useSelector(selectActiveCategoryId);

  useEffect(() => {
    if (categories.length) {
      const activeTab = categories.findIndex((category) =>
        category.id === activeCategoryId ? true : false
      );
      return activeTab !== -1 && setValue(activeTab);
    }
  }, [activeCategoryId, categories]);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          indicatorColor="secondary"
          textColor="secondary"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          {categories.map((category) => (
            <Tab
              key={category.id}
              onClick={() => handleClick(category)}
              sx={{
                minWidth: '150px',
                // ...(category.id === activeCategoryId && {
                //   border: '3px solid #ce93d8',
                // }),
              }}
              label={category.name}
              wrapped
            />
          ))}
        </Tabs>
      </Box>
    </div>
  );
}
