import FullScreenDialog from '../../components/FullScreenDialog/FullScreenDialog';
import { Button } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NavigationIcon from '@mui/icons-material/Navigation';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import SettingsSection from './SettingsSection';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router';
import { FormattedMessage } from 'react-intl';
import messages from './Settings.messages';
import propTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser, selectIsLogged, logout } from '../user/userSlice';

export default function Settings() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLogged = useSelector(selectIsLogged);
  const user = useSelector(selectUser);

  const getSettingsSections = () => {
    function handleLogOutClick() {
      dispatch(logout());
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
        url: '/settings/user',
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
      {
        icon: <AnalyticsIcon />,
        text: messages.reports,
        url: '/report',
      },
    ];

    const systemSettings = [
      {
        icon: <VisibilityIcon />,
        text: messages.display,
        url: '/settings/display',
      },
      // {
      //   icon: <NavigationIcon />,
      //   text: messages.navigation,
      //   url: '/settings/navigation',
      // },
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
            onClick: () => window.open('https://www.cboard.io', '_blank'),
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
