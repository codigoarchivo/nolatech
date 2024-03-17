import { products } from '@/databases';
import { Products } from './Products';

export const SelectProducts = () => {
  return (
    <div className='relative mx-auto max-w-7x1'>
      <div className='grid grid-cols-3 max-w-lg gap-2 md:gap-4 mx-auto mt-12 lg:max-w-none'>
        {products.map((item, key) => (
          <Products {...item} key={key} />
        ))}
      </div>
    </div>
  );
};
