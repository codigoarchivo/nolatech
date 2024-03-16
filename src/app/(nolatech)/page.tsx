import Image from 'next/image';
import Pic1 from '../../../public/assets/Pic1.png';
import Pic5a from '../../../public/assets/Pic5a.png';
import Pic6 from '../../../public/assets/Pic6.png';
import JoinUs from '../../../public/assets/Join Us.png';
import { Carrousel } from '@/components';
import { SelectProducts } from './ui/SelectProducts';
import { ListVideo } from './ui/ListVideo';
import { Register } from './ui/Register';

export default function Home() {
  return (
    <>
      <ul className='social fixed z-50 top-1/3'>
        <li>
          <a className='fa fa-facebook' href='#'>
            <span>Facebook</span>
          </a>
        </li>

        <li>
          <a className='fa fa-twitter' href='#'>
            <span>Twitter</span>
          </a>
        </li>

        <li>
          <a className='fa fa-dribbble' href='#'>
            <span>Dribbble</span>
          </a>
        </li>

        <li>
          <a className='fa fa-google-plus' href='#'>
            <span>Google Plus</span>
          </a>
        </li>
      </ul>{' '}
      <section>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div className='grid gap-2 md:gap-10'>
              <h2 className='grid text-3xl font-bold sm:text-4xl  md:text-5xl lg:text-6xl'>
                <span>Lorem ipsum </span>{' '}
                <span className='text-primary'>dolor sit amet</span>
              </h2>

              <p className='mt-4 text-gray-500'>
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
        <div className='container mx-auto bg-white p-10 lg:p-20 shadow-custom1'>
          {' '}
          <div className='grid gap-5 text-center mb-20 '>
            <h2 className='text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl'>
              <span>Lorem</span> <span className='text-primary'>ipsum</span>
            </h2>
            <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s'>
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
            <button className='uppercase bg-transparent shadow-custom1 hover:bg-primary text-secondary font-semibold hover:text-white py-4 px-12 border border-primary transition duration-500 ease-in-out transform  hover:border-transparent rounded'>
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
      <section className='bg-primary my-40'>
        <div className='overflow-hidden lg:order-last lg:h-full'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div className='col-span-1 md:col-span-1'>
              <div className='grid min-h-min w-full md:w-2/3 py-20 px-5 sm:px-0 mx-auto justify-center'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl grid gap-2 md:gap-5 text-left title-font mb-4 text-secondary'>
                  <strong className='text-white'>
                    Lorem{' '}
                    <span className='text-secondary'>ipsum dolor sit</span>{' '}
                    amet, consetetur
                  </strong>{' '}
                </h2>
                <div className='grid gap-4 mt-16'>
                  <button className='uppercase inline-block rounded-md bg-white px-8 py-6 shadow-custom1 text-center text-sm font-semibold text-secondary hover:text-white outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base'>
                    Lorem ipsum
                  </button>

                  <button className='uppercase bg-transparent shadow-custom1 text-white font-semibold hover:text-secondary py-6 px-8 border border-white hover:border-secondary transition duration-500 ease-in-out transform  hover:border-transparent rounded'>
                    Lorem ipsum
                  </button>
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
        <div className='container mx-auto bg-white p-10 lg:p-20 shadow-custom1'>
          <div className='text-center mb-20'>
            <h2 className='sm:text-7xl text-2xl font-bold title-font text-gray-900 mb-4'>
              <span>Latest</span> <span className='text-primary'>videos</span>
            </h2>
          </div>

          <ListVideo />
          <div className='w-full text-center'>
            <button className='uppercase  w-max inline-block rounded-md bg-primary px-8 py-3 shadow-custom1 text-center text-sm font-semibold text-white outline-none transition duration-500 ease-in-out transform hover:bg-tertiary focus-visible:ring active:bg-secondary md:text-base'>
              WHAT IS NEXT
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className='relative'>
          <Image
            src={JoinUs}
            className='w-full h-full object-fill absolute z-[-1]'
            alt={'prb_header'}
            title={'Prb_Header'}
            width='0'
            height='0'
            quality={100}
            sizes='100vw'
          />

          <div className='container mx-auto py-10'>
            <div className='grid grid-cols-6 gap-6 py-20'>
              <div className='col-span-6 md:col-span-3'></div>
              <div className='col-span-6 md:col-span-3'>
                <div className='w-full text-white my-auto grid gap-5 p-5'>
                  <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold'>
                    JOIN <span className='text-primary'>US</span>
                  </h2>
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
      <section className='mb-56'>
        <div className='relative'>
          <Image
            src={Pic6}
            className='h-full w-full object-fill absolute z-[-1]'
            alt={'prb_header'}
            title={'Prb_Header'}
            width='0'
            height='0'
            quality={100}
            sizes='100vw'
          />

          <div className='container mx-auto grid grid-cols-6 gap-36 py-52'>
            <div className='col-span-6 md:col-span-4'>
              <div className='grid gap-8 p-4'>
                <div className='p-6 grid gap-14'>
                  <h2 className='grid gap-8 text-secondary font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl '>
                    <span>Lorem ipsum</span>{' '}
                    <span className='text-primary'>dolor sit amet</span>
                  </h2>
                  <p className='text-lg'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>

                  <button className='uppercase w-max inline-block rounded-md bg-primary px-16 py-6 shadow-custom1 text-center text-sm font-semibold text-white outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base'>
                    VIEW ALL
                  </button>
                </div>
              </div>
            </div>
            <div className='col-span-6 md:col-span-2'></div>
          </div>
        </div>
      </section>
      <section>
        <div className='relative bg-gradient-to-b from-gray-900 to-gray-600 '>
          <div className='container mx-auto py-20'>
            <div className='flex items-center justify-center'>
              <div className=''>
                <h2 className='text-white text-center font-bold my-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
                  <span>Lorem ipsum </span>{' '}
                  <span className='text-primary'>dolor sit amet</span>
                </h2>

                <Carrousel
                  images={[
                    '/assets/Pic1.png',
                    '/assets/Pic2.png',
                    '/assets/Pic3.png',
                    '/assets/Pic4.png',
                    '/assets/Pic5.png',
                    '/assets/Pic6.png',
                  ]}
                />
              </div>
            </div>
            <div className='flex w-full justify-center py-10'>
              <button className='uppercase w-max inline-block rounded-md bg-primary px-16 py-6 shadow-custom1 text-center text-sm font-semibold text-white outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base'>
                VIEW ALL
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
