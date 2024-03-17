'use client';

import React from 'react';

interface AlertProps {
  type: 'success' | 'error';
  message: string;
  error: string | undefined;
}

export const AlertForm: React.FC<AlertProps> = ({ type, message, error }) => {
  const alertClasses = `p-1 mt-1 rounded-md shadow-custom1 ${
    type === 'success'
      ? 'bg-green-200 text-green-800'
      : 'bg-red-200 text-red-800'
  }`;

  return (
    error === 'required' && (
      <div className={alertClasses}>
        {type === 'success' ? '✔️' : '❌'} {`${message}`}
      </div>
    )
  );
};
