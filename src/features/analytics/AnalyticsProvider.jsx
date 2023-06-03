import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { selectUser, selectIsLogged } from '../user/userSlice';
import { useSelector } from 'react-redux';
import ReactGA from 'react-ga4';

export default function AnalyticsProvider(props) {
  const { children } = props;

  const isLogged = useSelector(selectIsLogged);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (isLogged) {
      ReactGA.set({ userId: user.id });
    } else {
      ReactGA.set({ userId: null });
    }
  }, [isLogged, user]);

  return <div>{children}</div>;
}

AnalyticsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
