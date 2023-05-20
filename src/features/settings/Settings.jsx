import FullScreenDialog from '../../components/FullScreenDialog/FullScreenDialog';
import { Button } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NavigationIcon from '@mui/icons-material/Navigation';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import SettingsSection from './SettingsSection';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router';
import { FormattedMessage } from 'react-intl';
import messages from './Settings.messages';
import propTypes from 'prop-types';

Settings.propTypes = {
  isLogged: propTypes.bool.isRequired,
  logout: propTypes.func.isRequired,
  user: propTypes.object.isRequired,
};

Settings.defaultProps = {
  isLogged: false,
  logout: () => {},
  user: {
    name: 'Guest',
  },
};

export default function Settings({ isLogged, logout, user }) {
  const navigate = useNavigate();

  const getSettingsSections = () => {
    function handleLogOutClick() {
      logout();
    }

    const peopleSettings = [
      {
        icon: (
          <div className="Settings__UserIcon__Container">
            <PersonIcon />
          </div>
        ),
        secondary: isLogged ? user.name : null,
        text: isLogged ? messages.username : messages.guest,
        url: '/settings/people',
        rightContent: isLogged ? (
          <Button
            color="primary"
            onClick={handleLogOutClick}
            variant="outlined"
          >
            <FormattedMessage {...messages.logout} />
          </Button>
        ) : (
          <Button
            color="primary"
            variant="outlined"
            component={Link}
            to="/login"
          >
            <FormattedMessage {...messages.loginSignup} />
          </Button>
        ),
      },
    ];

    const systemSettings = [
      {
        icon: <VisibilityIcon />,
        text: messages.display,
        url: '/settings/display',
      },
      {
        icon: <NavigationIcon />,
        text: messages.navigation,
        url: '/settings/navigation',
      },
    ];

    return [
      {
        subheader: messages.people,
        settings: peopleSettings,
      },
      {
        subheader: messages.language,
        settings: [
          {
            icon: <LanguageIcon />,
            text: messages.language,
            url: '/settings/language',
          },
          {
            icon: <RecordVoiceOverIcon />,
            text: messages.speech,
            url: '/settings/speech',
          },
        ],
      },
      {
        subheader: messages.system,
        settings: systemSettings,
      },
      {
        subheader: messages.help,
        settings: [
          {
            icon: <HelpIcon />,
            text: messages.userHelp,
            url: '/settings/help',
          },
          {
            icon: <InfoOutlinedIcon />,
            text: messages.about,
            url: '/settings/about',
          },
          // {
          //   icon: <MonetizationOnIcon />,
          //   text: messages.donate,
          //   onClick: this.handleDonateClick,
          // },
          // {
          //   icon: <FeedbackIcon />,
          //   text: messages.feedback,
          //   onClick: this.handleFeedbackClick,
          // },
        ],
      },
    ];
  };

  const onClose = () => {
    navigate('/');
  };

  return (
    <FullScreenDialog title="Settings" open={true} onClose={onClose}>
      {getSettingsSections().map(({ subheader, settings }, index) => (
        <SettingsSection
          subheader={subheader}
          settings={settings}
          key={index}
        />
      ))}
    </FullScreenDialog>
  );
}
