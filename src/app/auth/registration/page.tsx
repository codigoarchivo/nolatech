import { Registration } from '../ui/Registration';

type RegistesProps = {
  params: { locale: string };
};
export default async function AuthPage({ params: { locale } }: RegistesProps) {
  return (
    <section className='container mx-auto  w-full flex justify-center items-center'>
      <div className='h-full my-20 w-full sm:w-2/3 md:w-1/2'>
        <Registration />
      </div>
    </section>
  );
}
