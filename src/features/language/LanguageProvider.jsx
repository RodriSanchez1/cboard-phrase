import { IntlProvider } from 'react-intl';
import React from 'react';
import PropTypes from 'prop-types';
import cboardPhrase from '../../translations/src/cboardPhrase.json';

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function LanguageProvider({ children }) {
  return (
    <IntlProvider locale="en" defaultLocale="en" messages={cboardPhrase}>
      {React.Children.only(children)}
    </IntlProvider>
  );
}
