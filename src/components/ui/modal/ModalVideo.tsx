'use client';

import { useState } from 'react';

interface IModalVideo {
  title: string | JSX.Element;
  cancel: string;
  className: string;
}

export const ModalVideo = (props: IModalVideo) => {
  const [isOpenVideo, setIsOpenVideo] = useState(false);
  return (
    <>
      <div>
        {isOpenVideo && (
          <div
            className='relative z-30'
            aria-labelledby='modal-title'
            role='dialog'
            aria-modal='true'
          >
            <div className='fixed inset-0 bg-gray-800 bg-opacity-25 transition-opacity'></div>

            <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
              <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
                <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-custom1 transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                  <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
                    <div className='mt-3 text-center  sm:mt-0 sm:text-left'>
                      <h4
                        className='text-base font-semibold leading-6 text-gray-900'
                        id='modal-title'
                      >
                        {props.title}
                      </h4>
                      <div className='mt-2'>
                        <video className='w-full' controls preload='none'>
                          <source src='/path/to/video.mp4' type='video/mp4' />
                          <track
                            src='/path/to/captions.vtt'
                            kind='subtitles'
                            srcLang='en'
                            label='English'
                          />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                  <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                    <button
                      onClick={() => setIsOpenVideo(!isOpenVideo)}
                      type='button'
                      className='inline-flex text-white justify-center py-2 px-4 border border-transparent shadow-custom1 text-sm font-medium rounded-md text-textPrimary bg-primary hover:bg-secondary transition duration-500 ease-in-out transform'
                    >
                      {props.cancel}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <button
        onClick={() => setIsOpenVideo(!isOpenVideo)}
        className={props.className}
      >
        {props.title}
      </button>
    </>
  );
};
