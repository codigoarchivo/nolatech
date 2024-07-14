import React from 'react';
import { Statistics } from './Statistics';

interface IAllStatistics {
  count: number;
  accessToken: string | null | undefined;
}

export const AllStatistics = async (props: IAllStatistics) => {
  return (
    <Statistics
      data={[
        {
          title: 'Usuarios',
          quantity: props.count,
          name: 'Total',
        },
      ]}
    />
  );
};
