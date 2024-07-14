import { Pagination } from '@/components/ui/pagination/Pagination';
import { getSome } from '@/lib/getSome';
import { Search } from '@/components/ui/search/Search';
import { THead } from '@/components/ui/Table/THead';
import { NoResults } from '@/components/ui/search/NoResults';
import { TBody } from '../../users/ui/tbody/TBody';
import { AllStatistics } from '../../users/ui/admin/AllStatistics';
import { CountDropdown } from '@/components/ui/dropdown/CountDropdown';

type DashboardProps = {
  locale: string;
  accessToken: string | null | undefined;
  page: string | undefined;
  search: string | undefined;
  count: string | undefined;
};

export const AdminDashboard = async (props: DashboardProps) => {
  const select = {
    token: props.accessToken ?? '',
    params: `?page=${props.page ?? 1}&count=${props.count ?? 10}&search=${props.search ?? ''}`,
    base: '/users/',
    id: '',
  };

  const users = await getSome(select);

  const countB = users?.data?.pagination.total;
  const totalPages = users?.data?.pagination.pages;

  return (
    <>
      <div className='container mx-auto my-20 text-gray-500'>
        <h2 className='text-lg font-medium leading-6 text-textSecondary mb-8 uppercase font-weight-bold'>
          list
        </h2>
        <AllStatistics accessToken={props.accessToken} count={countB} />
      </div>
      <div className='container mx-auto my-20  text-gray-500'>
        <div className='relative overflow-x-auto'>
          <div className='flex flex-column sm:flex-row align-items-end flex-wrap space-y-4 sm:space-y-0 items-end justify-between pb-4 px-1 sm:px-0'>
            <div className='flex gap-10'>
              <CountDropdown count={props.count ?? '0'} />
            </div>

            <label htmlFor='table-search' className='sr-only'>
              Search
            </label>
            <Search route={'/dashboard/'} search={'list'} />
          </div>
          {users.ok && !!users.data.users[0] ? (
            <table className='w-full text-sm text-left rtl:text-right shadow-custom1 mx-1 sm:mx-0'>
              <THead data={['Nombre', 'Estado', 'Rol', 'Acciones']} />
              <TBody users={users?.data?.users} />
            </table>
          ) : (
            <NoResults
              info={'No hay resultados'}
              list={'Listar'}
              route={'/dashboard'}
            />
          )}
          <nav
            className='flex flex-column flex-wrap md:flex-row justify-between py-4 px-1 sm:px-0'
            aria-label='Table navigation'
          >
            <Pagination
              totalPages={totalPages ?? 0}
              total={countB ?? 0}
              from={1}
              sho={'Mostrando'}
              of={'de'}
              next={'Siguiente'}
              previous={'Anterior'}
            />{' '}
          </nav>
        </div>
      </div>
    </>
  );
};
