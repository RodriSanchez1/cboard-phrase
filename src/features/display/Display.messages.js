import { defineMessages } from 'react-intl';
import { SM, MD, LG } from './Display.constants';

export default defineMessages({
  display: {
    id: 'cboard.components.Settings.Display.display',
    defaultMessage: 'Display',
  },
  [SM]: {
    id: 'cboard.components.Settings.Display.Small',
    defaultMessage: 'Small',
  },
  [MD]: {
    id: 'cboard.components.Settings.Display.Medium',
    defaultMessage: 'Medium',
  },
  [LG]: {
    id: 'cboard.components.Settings.Display.Large',
    defaultMessage: 'Large',
  },
  gridSize: {
    id: 'cboard.components.Settings.Display.gridSize',
    defaultMessage: 'Grid size',
  },
  gridSizeSecondary: {
    id: 'cboard.components.Settings.Display.gridSizeSecondary',
    defaultMessage: 'Small: 3 columns, Medium: 4 columns, Large: 5 columns',
  },
});
