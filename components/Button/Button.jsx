import React from 'react';

export const Button = ({ primary, label, ...props }) => {
  const mode = primary ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500';
  return (
    <button
      type="button"
      className={['py-2 px-4 font-bold relative rounded-full w-min', mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};