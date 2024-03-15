import Image from "next/image";
import Link from "next/link";
import Prb_Header from "../../public/assets/Prb_Header.png";
import icongrab from "../../public/assets/icongrab.png";
import Pic1 from "../../public/assets/Pic1.png";
import Pic5 from "../../public/assets/Pic5.png";
import Pic6 from "../../public/assets/Pic6.png";
import JoinUs from "../../public/assets/Join Us.png";
import { Carrousel } from "@/components";

export default function Home() {
  return (
    <>
      {/* <div className="menuLateral">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-tiktok"></i>
      </div> */}

      <header className="shadow-custom1 bg-primary h-14 fixed top-0 w-full">
        <div className="h-full flex justify-center items-center gap-6 text-white text-2xl">
          <span className="bg-fourdary h-full font-weight-bold flex justify-center items-center px-1 uppercase shadow-custom1">
            Live &nbsp;&nbsp;<i className="fa-solid fa-satellite-dish"></i>
          </span>
          <span className="font-weight-light"> Lorem ipsu dolor sit amet </span>
          <span className="bg-tertiary text-white font-weight-normal font-weight-bold text-lg h-full flex justify-center items-center  px-4">
            {" "}
            Join Now &nbsp;&nbsp;<i className="fa-solid fa-circle-play"></i>
          </span>
        </div>
      </header>
      <nav className="w-full h-full">
        <div className="relative h-screen">
          <Image
            src={Prb_Header}
            className="h-full w-full object-cover object-top absolute z-[-1]"
            alt={"prb_header"}
            title={"Prb_Header"}
            width="0"
            height="0"
            quality={100}
            sizes="100vw"
          />
          <div className="w-full flex gap-5 justify-around items-center text-white py-16">
            <Image
              src={icongrab}
              className="h-20 w-48"
              alt={"grab"}
              title={"icongrab"}
              width="0"
              height="0"
              quality={100}
              sizes="100vw"
            />
            <div className="flex justify-between gap-5 font-bold">
              <a href="" className="route">
                LOREM IPSUM
              </a>
              <a href="" className="route">
                LOREM IPSUM
              </a>
              <a href="" className="route">
                LOREM IPSUM
              </a>
              <a href="" className="route">
                LOREM IPSUM
              </a>
              <a href="" className="route">
                LOREM IPSUM
              </a>
              <a href="" className="route">
                LOREM IPSUM
              </a>{" "}
            </div>
          </div>
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-2"></div>
            <div className="col-span-6 sm:col-span-4">
              <div className="grid gap-8 text-7xl w-max leading-[0.7]">
                <h2 className="text-white font-bold">LOREM IPSUM</h2>
                <h1 className="text-secondary bg-white font-bold max-w-fit p-3 shadow-custom1">
                  LOREM IPSUM DOLOR &nbsp;
                </h1>
                <h2 className="text-white font-bold">LOREM IPSUM</h2>
                <button className=" w-max inline-block rounded-md bg-primary px-8 py-3 shadow-custom1 text-center text-sm font-semibold text-white outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base">
                  WHAT IS NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-primary text-white grid grid-cols-6 gap-6 px-14 items-center h-40">
          <div className="text-2xl font-bold col-span-6 sm:col-span-2">
            <p>Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <div className="flex justify-center gap-10">
              <div className="grid text-center">
                <span className="font-bold text-6xl">170</span>
                <span className="text-1xl text-white/50">days</span>
              </div>
              <hr className="divide-y-2" />
              <div className="grid text-center">
                <span className="font-bold text-6xl">13</span>
                <span className="text-1xl text-white/50">Hour</span>
              </div>
              <hr className="divider" />
              <div className="grid text-center">
                <span className="font-bold text-6xl">39</span>
                <span className="text-1xl text-white/50">Minutes</span>
              </div>
              <hr className="divider" />
              <div className="grid text-center">
                <span className="font-bold text-6xl">29</span>
                <span className="text-1xl text-white/50">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-96 overflow-hidden sm:h-80 lg:order-last lg:h-full shadow-custom1">
              <Image
                src={Pic1}
                className="absolute inset-0 h-full w-full object-cover"
                alt={"prb_header"}
                title={"Prb_Header"}
                width="0"
                height="0"
                quality={100}
                sizes="100vw"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Lorem ipsum dolor sit amet
              </h2>

              <p className="mt-4 text-gray-600">
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
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Lorem ipsum
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col mb-12 overflow-hidden cursor-pointer shadow-custom1">
              <a href="/blog-post">
                <div className="flex-shrink-0">
                  <Image
                    src={Pic1}
                    className="w-full h-64"
                    alt={"grab"}
                    title={"icongrab"}
                    width="0"
                    height="0"
                    quality={100}
                    sizes="100vw"
                  />
                </div>
              </a>
              <div className="flex flex-col justify-between flex-1 bg-primary p-5 text-center">
                <h3 className="text-2xl font-semibold leading-none tracking-tighter text-white">
                  Lorem ipsum
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <button className="bg-transparent shadow-custom1 hover:bg-primary text-secondary font-semibold hover:text-white py-2 px-12 border border-secondary hover:border-transparent rounded">
            LEARN MORE
          </button>
        </div>
      </section>
      <section className="bg-primary my-40 pt-28">
        <div className="relative h-96 overflow-hidden sm:h-80 lg:order-last lg:h-full">
          <Image
            src={Prb_Header}
            className="h-full w-full object-cover object-top absolute z-[-20]"
            alt={"prb_header"}
            title={"Prb_Header"}
            width="0"
            height="0"
            quality={100}
            sizes="100vw"
          />
          <div className=" mx-auto max-w-screen-xl px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative overflow-hidden lg:order-last">
                <Image
                  src={Pic5}
                  className="absolute inset-0 h-full w-full object-fill"
                  alt={"prb_header"}
                  title={"Prb_Header"}
                  width="0"
                  height="0"
                  quality={100}
                  sizes="100vw"
                />
              </div>

              <div className="lg:py-24">
                <div className="grid min-h-min w-full md:w-2/3 p-5 md:p-0">
                  <h2 className="grid gap-2 md:gap-5 text-left title-font md:text-5xl text-2xl mb-4 font-medium text-secondary">
                    <strong className="text-secondary">
                      Lorem ipsum dolor sit amet, consetetur
                    </strong>{" "}
                  </h2>
                  <div className="grid gap-4">
                    <button className="inline-block rounded-md bg-white px-8 py-3 shadow-custom1 text-center text-sm font-semibold text-secondary outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base">
                      WHAT IS NEXT
                    </button>

                    <button className="bg-transparent shadow-custom1 hover:bg-primary text-secondary font-semibold hover:text-white py-2 px-12 border border-secondary hover:border-transparent rounded">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-20">
          <h2 className="sm:text-7xl text-2xl font-bold title-font text-gray-900 mb-4">
            Latest videos
          </h2>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col mb-12 overflow-hidden cursor-pointer shadow-custom1">
              <div className="flex-shrink-0 relative flex justify-center items-center">
                <i className="fa-solid fa-play absolute text-white"></i>
                <Image
                  src={Pic1}
                  className="w-full h-64"
                  alt={"grab"}
                  title={"icongrab"}
                  width="0"
                  height="0"
                  quality={100}
                  sizes="100vw"
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-5">
                <h3 className="text-1xl font-semibold leading-none tracking-tighter text-secondary">
                  Lorem ipsum dolor sit amet, consetetur
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <button className="inline-block rounded-md bg-primary px-16 py-3 shadow-custom1 text-center text-sm font-semibold text-white outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base">
            WHAT IS NEXT
          </button>
        </div>
      </section>
      <section className="my-36 container-fluid">
        <div className="relative h-screen">
          <Image
            src={JoinUs}
            className="h-full w-full object-fill absolute z-[-1]"
            alt={"prb_header"}
            title={"Prb_Header"}
            width="0"
            height="0"
            quality={100}
            sizes="100vw"
          />

          <div className="container mx-auto py-10">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3"></div>
              <div className="col-span-6 sm:col-span-3">
                <div className="w-full text-white">
                  <h2 className="text-7xl font-bold">JOIN US</h2>
                  <h3 className="my-10">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  </h3>
                  <form>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <input
                          className="w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <input
                          className="w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md"
                          type="text"
                          placeholder="Username"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <input
                          className="w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md"
                          type="text"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <input
                          className="w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md"
                          type="text"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-span-6">
                        <input
                          className="w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md"
                          type="text"
                          placeholder="Departamen"
                        />
                      </div>
                      <div className="col-span-6">
                        <textarea
                          className="w-full rounded-md border shadow-custom1 border-textPrimary bg-white py-3 px-6 text-base font-medium text-gray-500 outline-none focus:border-primary transition duration-500 ease-in-out transform  focus:shadow-md"
                          placeholder="Mensajse"
                        ></textarea>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <button
                          type="submit"
                          className="inline-block rounded-md bg-primary px-16 py-3 shadow-custom1 text-center text-sm font-semibold text-white outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base"
                        >
                          I’M IN
                        </button>
                      </div>
                      <div className="col-span-6">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="relative h-screen flex items-center">
          <Image
            src={Pic6}
            className="h-full w-full object-cover object-top absolute z-[-1]"
            alt={"prb_header"}
            title={"Prb_Header"}
            width="0"
            height="0"
            quality={100}
            sizes="100vw"
          />

          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <div className="grid gap-8 text-7xl w-max p-4">
                <div className="w-1/2 p-6 grid gap-10">
                  <h2 className="text-secondary font-bold">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>

                  <button className="w-max inline-block rounded-md bg-primary px-16 py-6 shadow-custom1 text-center text-sm font-semibold text-white outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base">
                    VIEW ALL
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3"></div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="flex items-center justify-center">
          <div className="relative">
            <h2 className="text-white text-7xl text-center font-bold my-20">
              Lorem ipsum dolor sit amet
            </h2>

            <Image
              src={Prb_Header}
              className="h-full w-full object-cover object-top absolute z-[-1]"
              alt={"prb_header"}
              title={"Prb_Header"}
              width="0"
              height="0"
              quality={100}
              sizes="100vw"
            />
            <Carrousel
              images={[
                "/assets/Pic1.png",
                "/assets/Pic2.png",
                "/assets/Pic3.png",
                "/assets/Pic4.png",
                "/assets/Pic5.png",
                "/assets/Pic6.png",
              ]}
            />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className="my-20 w-max inline-block rounded-md bg-white px-16 py-6 shadow-custom1 text-center text-sm font-semibold text-secondary outline-none transition duration-500 ease-in-out transform hover:bg-secondary focus-visible:ring active:bg-secondary md:text-base">
            VIEW ALL
          </button>
        </div>
      </section>
      <footer className="container mx-auto">
        <div className="grid grid-cols-9 gap-10 py-10">
          <p className="col-span-9 sm:col-span-3 font-bold">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <div className="col-span-9 sm:col-span-3 flex justify-center">
            <Image
              src={icongrab}
              className="h-20 w-48"
              alt={"grab"}
              title={"icongrab"}
              width="0"
              height="0"
              quality={100}
              sizes="100vw"
            />
          </div>
          <p className="col-span-9 sm:col-span-3 font-bold">
            All rights reserved to Lorem Ipsum© 2022
          </p>
        </div>
      </footer>
    </>
  );
}
