import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getVoices } from './speechSlice';

export default function SpeechProvider(props) {
  const { children } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVoices());
  }, [dispatch]);

  return <div>{children}</div>;
}

SpeechProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
