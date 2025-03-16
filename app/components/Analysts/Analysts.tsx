import analystsImage from "@/assets/images/ANALISTAS.png";

export default function Analysts() {
  return (
    <section className="w-screen h-[70vh] xs:h-[80vh] lg:h-screen flex justify-center lg:mt-48" id="analysts">
      <div className="container flex justify-center items-center w-full">
        <div className="w-5/6 xs:w-3/4 sm:w-[70%] md:w-2/3 lg:w-1/2 2xl:w-1/2 3xl:w-2/5 h-full flex flex-col justify-center items-center gap-3 xs:gap-5 lg:gap-7 2xl:gap-10">
          <img src={analystsImage.src} className="w-full h-auto" alt="hosts" />
          <div className="relative w-full flex flex-col justify-start items-center">
            <h1 className="w-full text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] 2xl:text-[88px] 3xl:text-8xl italic font-bold absolute -top-9 xs:-top-12 sm:-top-14 md:-top-16 lg:-top-20 xl:-top-24 2xl:-top-28 left-1/2 -translate-x-1/2 z-10 text-center text-nowrap">
              ANALISTAS
            </h1>
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-[34px] 2xl:text-4xl 3xl:text-[40px]  italic">
              SHELAO - VIRUZZ
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
