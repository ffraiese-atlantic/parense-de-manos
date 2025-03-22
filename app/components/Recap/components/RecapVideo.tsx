"use client";
import { useEffect, useState } from "react";

const RecapVideo = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const src = "https://www.youtube.com/embed/kl-lXxcsHgc?si=LAC32wpislec8vVR";

  return (
    <iframe
      className="w-full h-full rounded-[35px] mx-4 py-2"
      src={src}
      title="Parense de Manos 2 - Teaser"
      allowFullScreen
    />
  );
};

export default RecapVideo;
