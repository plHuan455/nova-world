/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';

import mapModifiers from 'utils/functions';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
  error?:string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ error, ...props }, ref) => (
  <div className={mapModifiers('a-textarea', error && 'error')}>
    <textarea ref={ref} {...props} />
    {error && <p className="a-textarea_message">{error}</p>}
  </div>
));

export default TextArea;
