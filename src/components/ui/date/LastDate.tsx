'use client';

import { formatRelative } from 'date-fns';

interface IlastDate {
  dateCreated: string | Date;
}

export const LastDate = (props: IlastDate) => {
  const currentDate = new Date();

  return <div>{formatRelative(props?.dateCreated, currentDate)}</div>;
};
