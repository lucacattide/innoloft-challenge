// Module Start
// JS imports
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// SASS imports
import '../sass/Notification/notification.scss';

// Notification
const Notification = (props) => {
  return (
    <aside
      className={clsx('notification', {
        active: props.message,
      })}
    >
      <h2 className="notification__title">{props.message}</h2>
    </aside>
  );
};

// Properties validation
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

// Module export
export default Notification;
// Module End
