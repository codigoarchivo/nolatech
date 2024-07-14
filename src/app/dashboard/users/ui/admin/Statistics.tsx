'use client';

type I = {
  title: string;
  name: string;
  quantity: number;
};

interface IStatistics {
  data: I[];
}

export const Statistics = ({ data }: IStatistics) => {
  return (
    <div className='grid grid-cols-4 gap-2'>
      {data?.map(({ title, quantity, name }: I, index) => (
        <div key={index} className='col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-1'>
          <div className='w-full bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-custom1 hover:shadow-md transition duration-500 transform hover:scale-100 cursor-pointer'>
            <div className='h-20 p-3 bg-primary text-white flex items-center justify-between'>
              <p className='mr-0 text-lg'>{title}</p>
            </div>
            <div className='flex justify-between px-5 pt-6 mb-2 text-sm text-textSecondary uppercase'>
              <p>{name}</p>
            </div>
            <p className='py-4 text-3xl ml-5'>{quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
