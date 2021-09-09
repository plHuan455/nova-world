/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';

import mapModifiers from 'utils/functions';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  error?:string;
  modifiers?: ('dark')[];
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((
  { modifiers, error, ...props }, ref,
) => (
  <div className={mapModifiers('a-textarea', modifiers, error && 'error')}>
    <textarea ref={ref} {...props} />
    {error && <p className="a-textarea_message">{error}</p>}
  </div>
));

export default TextArea;
