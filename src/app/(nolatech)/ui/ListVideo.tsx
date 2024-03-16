import { listVideo } from '@/databases';
import { ItemVideo } from './ItemVideo';
export const ListVideo = () => {
  return (
    <div className='relative mx-auto max-w-7xl'>
      <div className='grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none'>
        {listVideo.map((item, key) => (
          <ItemVideo {...item} key={key} />
        ))}
      </div>
    </div>
  );
};
