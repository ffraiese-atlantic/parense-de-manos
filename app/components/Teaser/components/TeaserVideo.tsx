"use client";
import { useEffect, useState } from "react";

export default function TeaserVideo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const src = "https://www.youtube.com/embed/1J2pyysEoZA?si=QD_tmOsqANpK_G0Y";

  return (
    <iframe
      className="w-full h-full rounded-[35px] mx-4 my-3 py-2"
      src={src}
      title="Parense de Manos 2 - Teaser"
      allowFullScreen
    />
  );
}
