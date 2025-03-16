"use client";

import { useEffect, useState } from "react";
import { fighterItem, fighterList } from "./fighterList";
import FightersDesktop from "./components/FightersDesktop";
import { useMediaQuery } from "react-responsive";
import FightersMobile from "./components/FightersMobile";

const preloadImages = () => {
  fighterList.forEach((fighter: fighterItem) => {
    const img = new Image();
    img.src = fighter.image;
  });
};

export default function Fighters() {
  const [selected, setSelected] = useState<fighterItem>(fighterList[0]);
  const [isClient, setIsClient] = useState(false);
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  // * Life Cycle
  useEffect(() => {
    preloadImages();
    setIsClient(true);
  }, []);

  return (
    isClient &&
    (isLargeScreen ? (
      <FightersDesktop selected={selected} setSelected={setSelected} />
    ) : (
      <FightersMobile selected={selected} setSelected={setSelected} />
    ))
  );
}
