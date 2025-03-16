import teaserImage from "@/assets/images/TEASER.png";
import TeaserVideo from "./components/TeaserVideo";
import "./Teaser.scss";

export default function Teaser() {
  return (
    <section
      className="w-screen h-[80vh] lg:h-screen hidden 2xs:flex justify-center items-center lg:mt-60"
      id="teaser"
    >
      <div className="container flex flex-col justify-center items-center">
        <div className="w-full h-full relative 2xs:px-2 xs:px-4 sm:px-7 md:px-10 lg:px-0 pt-14 xs:pt-16 sm:pt-[75px] md:pt-20 lg:pt-24 xl:pt-28 2xl:pt-36 3xl:pt-44 flex justify-center">
          <img
            className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-5/6 xs:w-3/4 sm:w-2/3 md:w-7/12 lg:w-1/2"
            src={teaserImage.src}
            alt="teaser"
          />
          <div className="flex w-full lg:w-5/6 xl:w-5/6 2xl:w-3/4 3xl:2/3 max-w-[1250px] justify-center video-border aspect-video px-1">
            <TeaserVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
