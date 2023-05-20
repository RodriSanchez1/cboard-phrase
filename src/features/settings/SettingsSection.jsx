import { Fragment } from 'react';
import {
  Paper,
  List,
  ListItem,
  ListSubheader,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from '@mui/material';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

SettingsSection.propTypes = {
  subheader: PropTypes.object.isRequired,
  settings: PropTypes.array,
};

SettingsSection.defaultProps = {
  settings: [],
};

export default function SettingsSection({ subheader, settings }) {
  return (
    <Paper className="Settings__section" elevation={3} sx={{ mt: 1 }}>
      <List
        subheader={
          <ListSubheader>
            <FormattedMessage {...subheader} />
          </ListSubheader>
        }
      >
        {settings.map((item, index, newSettings) => {
          const listItemProps = {
            button: true,
            onClick: item.onClick,
          };

          if (item.url) {
            listItemProps.component = Link;
            listItemProps.to = item.url;
          }

          return (
            <Fragment key={index}>
              <ListItem {...listItemProps}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={<FormattedMessage {...item.text} />}
                  secondary={item.secondary}
                />
                {/* </div> */}
                {item.rightContent && (
                  <ListItemSecondaryAction className="Settings__section--secondaryAction">
                    {item.rightContent}
                  </ListItemSecondaryAction>
                )}
              </ListItem>

              {index !== newSettings.length - 1 && <Divider variant="inset" />}
            </Fragment>
          );
        })}
      </List>
    </Paper>
  );
}
