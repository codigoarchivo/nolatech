import Image from 'next/image';
import Pic1 from '../../../public/assets/Pic1.png';
import Pic5a from '../../../public/assets/Pic5a.png';
import Pic6White from '../../../public/assets/Pic6White.png';
import { SelectProducts } from './ui/SelectProducts';
import { ListVideo } from './ui/ListVideo';
import { Register } from './ui/Register';
import { JoinUs } from './ui/JoinUs';
import { CallMe } from './ui/CallMe';
import { ListImage } from './ui/ListImage';
import { Social } from './ui/Social';

export default function Home() {
  return (
    <>
      <div className='hidden md:block'>
        <Social />
      </div>
      <section>
        <div className='container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div className='grid gap-2 md:gap-6'>
              <h2 className='grid text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl'>
                <span>Lorem ipsum </span>{' '}
                <span className='text-primary'>dolor sit amet</span>
              </h2>

              <p className='mt-4 text-gray-500 indent-8'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit
              </p>
            </div>
            <div className='relative h-96 overflow-hidden sm:h-80 lg:order-last lg:h-full shadow-custom1'>
              <div className='absolute z-[1] inset-0 bg-secondary/35 sm:from-sebg-secondary/95 sm:to-sebg-secondary/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>
              <Image
                src={Pic1}
                className='absolute inset-0 h-full w-full object-cover'
                alt={'prb_header'}
                title={'Prb_Header'}
                width='0'
                height='0'
                quality={100}
                sizes='100vw'
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto p-10 lg:p-20 shadow-custom1 bg-slate-50'>
          {' '}
          <div className='grid gap-5 text-center mb-20 '>
            <h2 className='text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl'>
              <span>Lorem</span> <span className='text-primary'>ipsum</span>
            </h2>
            <p className='text-base leading-relaxed text-gray-500 xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <div className='flex justify-center'>
              <div className='w-16 h-1 rounded-full bg-primary shadow-custom1 inline-flex'></div>
            </div>
          </div>
          <SelectProducts />
          <div className='w-full text-center'>
            <button className=' w-max inline-block rounded-md bg-transparent px-4 md:px-10 py-2 md:py-4 text-xs md:text-base shadow-custom1 text-center font-semibold border border-primary text-primary hover:text-white outline-none transition duration-500 ease-in-out transform hover:bg-tertiary focus-visible:ring active:bg-secondary'>
              WHAT IS NEXT
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className='bg-primary overflow-hidden lg:order-last lg:h-full 2xl:container 2xl:mx-auto'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div className='col-span-1 md:col-span-1'>
              <div className='grid min-h-min w-full md:w-2/3 py-20 px-5 md:px-0 mx-auto justify-center'>
                <h2 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl grid gap-2 md:gap-5 text-left title-font mb-4 text-secondary'>
                  <strong className='text-white'>
                    Lorem{' '}
                    <span className='text-secondary'>ipsum dolor sit</span>{' '}
                    amet, consetetur
                  </strong>{' '}
                </h2>
                <div className='grid gap-4 mt-16'>
                  <button className='w-60 md:w-full inline-block rounded-md bg-white px-4 md:px-10 py-2 md:py-4 text-xs md:text-base shadow-custom1 text-center  font-semibold text-primary outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary'>
                    WHAT IS
                  </button>{' '}
                  <button className='w-60 md:w-full inline-block rounded-md bg-transparent px-4 md:px-10 py-2 md:py-4 text-xs md:text-base shadow-custom1 text-center font-semibold border border-white text-white hover:text-white outline-none transition duration-500 ease-in-out transform hover:bg-tertiary focus-visible:ring active:bg-secondary'>
                    WHAT IS NEXT
                  </button>{' '}
                </div>
              </div>
            </div>
            <div className='col-span-1 md:col-span-1 relative overflow-hidden lg:order-last '>
              <div className='absolute z-[1] inset-0 bg-secondary/35 sm:from-sebg-secondary/95 sm:to-sebg-secondary/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>
              <Image
                src={Pic5a}
                className='absolute inset-0 h-full w-full object-fill'
                alt={'prb_header'}
                title={'Prb_Header'}
                width='0'
                height='0'
                quality={100}
                sizes='100vw'
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container mx-auto bg-slate-50 p-10 lg:p-20 shadow-custom1'>
          <div className='text-center mb-20'>
            <h2 className='sm:text-7xl text-2xl font-bold title-font text-gray-900 mb-4'>
              <span>Latest</span> <span className='text-primary'>videos</span>
            </h2>
          </div>

          <ListVideo />
          <div className='w-full text-center'>
            <button className=' w-max inline-block rounded-md bg-primary px-4 md:px-10 py-2 md:py-4 text-xs md:text-base shadow-custom1 text-center  font-semibold text-white outline-none transition duration-500 ease-in-out transform hover:bg-tertiary focus-visible:ring active:bg-secondary'>
              WHAT IS NEXT
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className='relative 2xl:container 2xl:mx-auto'>
          <div className='absolute z-[-2] inset-0 bg-secondary/35 sm:from-sebg-secondary/95 sm:to-sebg-secondary/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>
          <JoinUs />
          <div className='container mx-auto py-10'>
            <div className='grid grid-cols-6 gap-6 py-0 md:py-20'>
              <div className='col-span-6 lg:col-span-3'></div>
              <div className='col-span-6 lg:col-span-3'>
                <div className='w-full text-white my-auto grid gap-5 p-5'>
                  <h3 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
                    JOIN <span className='text-primary'>US</span>
                  </h3>
                  <h3 className='my-4 md:my-10 text-xl'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  </h3>
                  <Register />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='relative 2xl:container 2xl:mx-auto'>
          <div className='absolute z-[-2] inset-0 bg-slate-50 sm:from-sebg-secondary/95 sm:to-sebg-secondary/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>
          <CallMe />{' '}
          <div>
            <div className='w-full lg:w-2/3 py-20 md:py-32 px-2 md:px-20'>
              <div className='grid gap-8'>
                <div className='p-6 grid gap-10'>
                  <h3 className='grid gap-0 text-secondary font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl '>
                    <span>Lorem ipsum</span>{' '}
                    <span className='text-primary'>dolor sit amet</span>
                  </h3>
                  <p className='text-lg text-gray-500 indent-8'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>

                  <button className=' w-max inline-block rounded-md bg-primary px-4 md:px-10 py-2 md:py-4 text-xs md:text-base shadow-custom1 text-center  font-semibold text-white outline-none transition duration-500 ease-in-out transform hover:bg-tertiary focus-visible:ring active:bg-secondary'>
                    VIEW ALL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=''>
          <div className='container mx-auto py-20 shadow-custom1 p-10 relative'>
            <Image
              src={Pic6White}
              className='absolute inset-0 h-full w-full object-fill z-[-1]'
              alt={'prb_header'}
              title={'Prb_Header'}
              width='0'
              height='0'
              quality={100}
              sizes='100vw'
            />
            <div className='absolute z-[-2] inset-0 bg-slate-50 sm:from-sebg-secondary/95 sm:to-sebg-secondary/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l'></div>
            <div className='flex items-center justify-center'>
              <div className=''>
                <h3 className='text-primary text-center font-bold my-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
                  <span>Lorem ipsum </span>{' '}
                  <span className='text-secondary'>dolor sit amet</span>
                </h3>
                <ListImage />
              </div>
            </div>
            <div className='flex w-full justify-center py-10'>
              <button className=' w-max inline-block rounded-md bg-primary px-4 md:px-10 py-2 md:py-4 text-xs md:text-base shadow-custom1 text-center  font-semibold text-white outline-none transition duration-500 ease-in-out transform hover:bg-tertiary focus-visible:ring active:bg-secondary'>
                VIEW ALL
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
