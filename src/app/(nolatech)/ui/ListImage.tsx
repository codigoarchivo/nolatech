import { Carrousel } from '@/components';
import { listImages } from '@/databases';

export const ListImage = () => {
  return (
    <Carrousel
      list={listImages}
    />
  );
};
