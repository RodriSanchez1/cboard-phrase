import { useState } from 'react';

const useAlertSnackbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [severity, setSeverity] = useState('success');

  function onCloseAlertSnackbar() {
    setIsOpen(false);
  }

  function setSeverityAndToggle(severity) {
    setSeverity(severity);
    setIsOpen(true);
  }

  return {
    isOpen,
    severity,
    onCloseAlertSnackbar,
    setSeverityAndToggle,
  };
};

export default useAlertSnackbar;
