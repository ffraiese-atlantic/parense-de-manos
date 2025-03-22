import {
  Navbar,
  Hero,
  Battles,
  Fighters,
  Hosts,
  Analysts,
  Footer,
  Popup,
  Recap,
  Replay,
} from "./components";
import bg from "./assets/images/background.png";

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen fixed top-0 left-0 -z-50">
        <img
          className="w-full h-full object-cover"
          src={bg.src}
          alt="background"
        />
      </div>
      <Navbar />
      <Hero />
      <Recap />
      <Battles />
      <Fighters />
      <Hosts />
      <Analysts />
      <Replay />
      <Footer />
      <Popup />
    </main>
  );
}
