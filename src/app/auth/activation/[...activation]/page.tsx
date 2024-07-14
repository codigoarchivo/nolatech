import { Activation } from '../../ui/Activation';

type ActivationProps = {
  params: { locale: string; activation: string };
};
export default async function AuthPage({ params }: ActivationProps) {
  return (
    <section className='container mx-auto  min-h-screen w-full flex justify-center items-center'>
      <div className='flex justify-center h-full my-20 w-full sm:w-2/3 md:w-1/2'>
        <Activation
          activation={params.activation}
        />
      </div>
    </section>
  );
}
// 