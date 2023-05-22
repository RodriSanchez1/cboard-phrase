//generate the imports for all material ui components in one line

import { Box, Button, CircularProgress, Typography } from '@mui/material';
import propTypes from 'prop-types';

FetchButton.propTypes = {
  isLoading: propTypes.bool,
  isError: propTypes.bool,
  isSuccess: propTypes.bool,
  fetchError: propTypes.object,
  name: propTypes.string.isRequired,
};

export default function FetchButton({
  isLoading,
  isError,
  isSuccess,
  fetchError,
  name,
}) {
  console.log(isError);
  const visibility = isError ? 'visible' : 'hidden';

  return (
    <>
      <Typography
        variant="caption"
        gutterBottom
        color="red"
        // sx={{ visibility: visibility }}
        visibility={visibility}
      >
        {fetchError?.data?.message || 'Something went wrong. Try again later.'}
      </Typography>
      <Box sx={{ mt: 1, mb: 2, position: 'relative' }}>
        <Button
          sx={{
            ...(isSuccess && {
              bgcolor: 'green',
              '&:hover': {
                bgcolor: 'green',
              },
            }),
          }}
          disabled={isLoading}
          type="submit"
          fullWidth
          variant="contained"
        >
          {name}
        </Button>
        {isLoading && (
          <CircularProgress
            size={24}
            sx={{
              color: 'blue',
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </>
  );
}
