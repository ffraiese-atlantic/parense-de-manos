import Logo from "./components/Logo";
import heroLeft from "@/assets/images/hero/heroLeft.png";
import heroRight from "@/assets/images/hero/heroRight.png";
import heroMobile from "@/assets/images/hero/grupalMobile.png";
import logoKick from "@/assets/images/hero/logoKick.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="w-screen h-screen flex justify-center items-center flex-col"
      id="hero"
    >
      <div className="container justify-center w-full lg:flex hidden">
        <div className="flex w-full justify-between items-center px-8">
          <div>
            <img src={heroLeft.src} className="w-[650px]" alt="Left Hero" />
          </div>
          <div className="flex flex-col items-center relative">
            <div className="w-full h-screen flex justify-center items-center">
              <Logo />
            </div>
          </div>
          <div>
            <img src={heroRight.src} className="w-[650px]" alt="Right Hero" />
          </div>
        </div>
        <div className="flex flex-row absolute justify-center items-center bottom-9">
          <Link href="https://kick.com/luquitarodriguez" target="_blank">
            <h1 className="font-medium text-3xl pr-5">Vivilo por Kick</h1>
          </Link>
          <Link href="https://kick.com/luquitarodriguez" target="_blank">
            <img src={logoKick.src} className="w-12 ml-5" alt="kick" />
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center w-full lg:hidden px-6">
        <img
          src={heroMobile.src}
          className="h-full max-h-[100vh] py-20"
          alt="Responsive Hero"
        />
      </div>
    </section>
  );
}
