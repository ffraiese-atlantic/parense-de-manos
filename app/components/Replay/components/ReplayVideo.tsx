"use client";
import { useEffect, useState } from "react";

const ReplayVideo = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const src = "https://www.youtube.com/embed/Ft6GN_BMMwI?si=W4_X8RUTzcOf_eMa";

  return (
    <iframe
      className="w-full h-full rounded-[35px] mx-4 py-2"
      src={src}
      title="Parense de Manos 2 - Teaser"
      allowFullScreen
    />
  );
};

export default ReplayVideo;
