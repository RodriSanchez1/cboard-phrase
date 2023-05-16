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
import PropTypes from 'prop-types';

SettingsSection.propTypes = {
  settings: PropTypes.array,
};

SettingsSection.defaultProps = {
  settings: [],
};

export default function SettingsSection() {
  const { subheader, settings } = this.props;
  //const settingsLength = settings.length;

  return (
    <Paper className="Settings__section">
      <List
        subheader={
          <ListSubheader>
            {/* <FormattedMessage {...subheader} /> */}
            {subheader}
          </ListSubheader>
        }
      >
        {settings.map((item, index, newSettings) => {
          const listItemProps = {
            button: true,
            onClick: item.onClick,
          };

          //   if (item.url) {
          //     listItemProps.component = Link;
          //     listItemProps.to = item.url;
          //   }

          return (
            <Fragment key={index}>
              <ListItem {...listItemProps}>
                <div
                  className="Settings__Item__Container"
                  id={item.text.defaultMessage}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    // primary={<FormattedMessage {...item.text} />}
                    primary={item.text}
                    secondary={item.secondary}
                  />
                </div>
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
