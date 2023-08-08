import './CategoriesBar.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllCategories,
  setActiveCategoryId,
  selectActiveCategoryId,
} from '../categorySlice';
import { Box, Tab, Tabs, tabsClasses } from '@mui/material';

import { useState, useEffect } from 'react';

import { styled } from '@mui/material/styles';

const StyledTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    display: 'none',
    backgroundColor: 'rgb(237, 108, 2)',
    transition: '1s',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'uppercase',
    transition: '0.5s',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: '3px',
    color: 'rgba(0, 0, 0, 0.85)',
    borderRadius: '15px',
    '&:hover': {
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#FFF',
      fontWeight: theme.typography.fontWeightRegular,
      backgroundColor: 'rgb(237, 108, 2)',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  })
);

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
        <StyledTabs
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
            <StyledTab
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
        </StyledTabs>
      </Box>
    </div>
  );
}
