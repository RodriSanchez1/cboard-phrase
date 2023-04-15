import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';

export default function ThemeProvider(props) {
  const { children } = props;

  const mode = useSelector((state) => state.theme.mode);
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <MUIThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </MUIThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
