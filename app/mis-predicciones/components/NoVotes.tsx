import pdmLogo from "@/assets/logo.svg";
import twitterLogo from "@/assets/images/my-predictions/twitter.svg";
import shareLogo from "@/assets/images/my-predictions/share.svg";
import "./NoVotes.scss";
import Link from "next/link";

export default function NoVotes() {
  return (
    <section className="w-screen h-screen flex justify-center">
      <div className="container flex flex-col items-center">
        <div className="w-full xl:w-5/6 flex justify-evenly xs:justify-between items-center py-4 xs:py-3 sm:py-4 md:py-6 lg:py-7 xl:py-8 2xl:py-10 px-5 xl:px-0">
          <div className="w-1/2 2xs:w-1/3">
            <Link href="/">
              <img
                className="w-12 xs:w-16 sm:w-20 md:w-24 lg:w-28 xl:w-36"
                src={pdmLogo.src}
                alt="pdm-logo"
              />
            </Link>
          </div>
          <div className="hidden 2xs:flex w-1/3 justify-center">
            <h1 className="text-center text-sm xs:text-base md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-nowrap">
              Mis predicciones
            </h1>
          </div>
          <div className="w-1/2 2xs:w-1/3 flex justify-end">
            <button className="share-container contain-content px-2 xs:px-3 md:px-4 lg:px-5 xl:px-7 py-1 sm:py-2 xl:py-3 flex justify-center items-center gap-1 xl:gap-2 cursor-pointer hover:scale-105 transition-all duration-300">
              <img
                src={shareLogo.src}
                className="w-2 sm:w-3 md:w-3 xl:w-4 h-2 sm:h-2 md:h-3 xl:h-4"
                alt="compartir"
              />
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl font-medium text-white text-nowrap">
                Compartir en
              </h2>
              <img
                src={twitterLogo.src}
                className="w-2 sm:w-3 md:w-4 xl:w-5 h-2 sm:h-3 md:h-4 xl:h-5"
                alt="twitter"
              />
            </button>
          </div>
        </div>
        <div className="w-full px-5 xs:px-10 sm:px-16 md:px-24 lg:px-36 xl:px-48 2xl:px-56">
          <div className="predictions-container w-full flex flex-col justify-start 2xs:justify-center pt-5 2xs:pt-0 items-center gap-10 h-[50vh] sm:h-[70vh]">
            <h1 className="text-sm 2xs:hidden mb-10 xs:mb-0 font-bold">
              Mis predicciones
            </h1>
            <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl xl:text-3xl font-semibold">
              Aún no hay resultados
            </h1>
            <Link href="/#versus" className="cursor-pointer">
              <button className="go-to-vote-button px-4 sm:px-5 md:px-6 xl:px-7 py-1 xs:py-2 lg:py-3 xl:py-4 text-base xs:text-lg sm:text-xl md:text-2xl xl:text-3xl font-medium">
                Votar
              </button>
            </Link>
            <div className="hidden 2xs:flex h-2 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
