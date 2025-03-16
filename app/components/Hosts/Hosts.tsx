import hostsImage from "@/assets/images/HOSTS.png";

export default function Hosts() {
  return (
    <section
      className="w-screen h-[70vh] xs:h-[80vh] lg:h-screen flex justify-center lg:mt-60"
      id="hosts"
    >
      <div className="container flex justify-center items-center w-full">
        <div className="w-11/12 xs:w-5/6 md:w-3/4 lg:w-3/5 2xl:w-2/3 3xl:w-3/5 h-full flex flex-col justify-center items-center gap-3 xs:gap-5 lg:gap-7 2xl:gap-10">
          <img src={hostsImage.src} className="w-full h-auto" alt="hosts" />
          <div className="relative w-full flex flex-col justify-start items-center">
            <h1 className="w-full text-2xl 2xs:3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[84px] 3xl:text-8xl italic font-bold absolute -top-8 2xs:-top-10 xs:-top-12 sm:-top-14 md:-top-16 lg:-top-20 xl:-top-24 2xl:-top-28 left-1/2 -translate-x-1/2 z-10 text-center text-nowrap">
              HOSTS DEL EVENTO
            </h1>
            <h2 className="text-sm 2xs:text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-[34px] 3xl:text-4xl italic">
              ALFRE - LUQUITA - GERMÁN - JOAQUÍN
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
