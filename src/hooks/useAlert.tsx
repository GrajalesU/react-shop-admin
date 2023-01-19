import { useState } from 'react';

type Alert = {
  active?: boolean;
  message?: string;
  type?: string;
  autoClose?: boolean;
};

export default function useAlert(options?: Alert) {
  const defaultOptions: Alert = {
    active: false,
    message: '',
    type: '',
    autoClose: true,
  };

  const [alert, setAlert] = useState<Alert>({ ...defaultOptions, ...options });

  const toggleAlert = () => {
    setAlert((prev) => ({
      ...prev,
      active: !prev.active,
    }));
  };

  return {
    alert,
    setAlert,
    toggleAlert,
  };
}
