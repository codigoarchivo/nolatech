import { useRouter } from 'next/navigation';
import { IDropdownItem } from './interface';
import { logout } from '@/actions/auth/logout';

export const DropdownItem = (props: IDropdownItem) => {
  const router = useRouter();
  const select = async () => {
    props.setIsDropdownOpen(false);
    router.push(props?.asing!);
    props.title === 'Logout' && await logout();
  };

  return (
    <li>
      <div>
        <button
          onClick={select}
          className='inline-flex items-center w-full px-4 py-2 text-base text-textSecondary hover:text-primary transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-50'
        >
          <svg
            className='w-5 h-5 mx-3 text-primary'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 13l4 4L19 7'
            />
          </svg>
          <span className='ml-4 text-xs'>{props.title}</span>
        </button>
      </div>
      {props.last ? <div className='border-t border-gray-300 my-1'></div> : ''}
    </li>
  );
};
