"use client";

export default function Burger({ setIsOpen }: { setIsOpen: () => void }) {
  return (
    <div
      onClick={setIsOpen}
      className="group flex flex-col w-6 lg:w-10 h-fit gap-1 cursor-pointer"
    >
      <div className="w-2/3 h-[2px] lg:h-1 bg-white rounded-xl group-hover:w-full transition-all duration-300 ease-linear self-end" />
      <div className="w-full h-[2px] lg:h-1 bg-white rounded-xl" />
      <div className="w-2/3 h-[2px] lg:h-1 bg-white rounded-xl group-hover:w-full transition-all duration-300 ease-linear" />
    </div>
  );
}
