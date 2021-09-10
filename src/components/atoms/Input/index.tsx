/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';

import mapModifiers from 'utils/functions';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  modifiers?: ('dark')[];
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  error,
  modifiers,
  ...rest
}, ref) => (
  <div className={mapModifiers('a-input', modifiers, error && 'error')}>
    <input
      className="a-input_input"
      ref={ref}
      {...rest}
    />
    {error && <p className="a-input_message">{error}</p>}
  </div>
));

export const InputNumber = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, ...props }, ref) => {
    const onChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value.match(/\D+/)) {
        // eslint-disable-next-line no-param-reassign
        event.target.value = event.target.value.replace(/\D+/g, '');
      }
      if (onChange) onChange(event);
    };
    return (
      <Input ref={ref} onChange={onChangeNumber} {...props} />
    );
  },
);

export default Input;
