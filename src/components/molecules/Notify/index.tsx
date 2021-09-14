import React from 'react';

import Text from 'components/atoms/Text';
import mapModifiers from 'utils/functions';

interface NotifyProps {
  type?: 'warning' | 'success';
  message?: string;
  isOpen?: boolean;
}

const Notify: React.FC<NotifyProps> = ({
  message, type, isOpen,
}) => (
  <div className={mapModifiers('m-notify', type, isOpen && 'show')}>
    <div className="m-notify_layer" />
    <div className="m-notify_body">
      <div className="m-notify_icon" />
      {message && (
        <div className="m-notify_message">
          <Text modifiers={['700', 'white', 'center']}>{message}</Text>
        </div>
      )}
    </div>
  </div>
);

export default Notify;
