import { Alert } from 'react-bootstrap';
import React from 'react';

const ErrorAlert = (props) => {
  const { isError, onCloseError, msg, type } = props;
  const variant = type || 'danger';
  return isError ? (
    <Alert variant={variant} onClose={() => onCloseError()} dismissible>
      <p>{msg}</p>
    </Alert>
  ) : (
      <></>
    );
};

export default ErrorAlert;
