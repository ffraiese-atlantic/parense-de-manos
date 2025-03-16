"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { LuLogIn, LuSwords } from "react-icons/lu";
import { TbCrystalBall } from "react-icons/tb";
import { signIn, signOut } from "next-auth/react";
import { useUser } from "@/context/userContext";
import { useState } from "react";
import glove from "@/assets/images/icons/whiteGlove.png";

interface MenuProps {
  setIsOpen: () => void; // Close navbar menu
  isOpen: boolean;
}
/**
 *
 * @param setIsOpen // Close navbar menu and enable scrolling
 * @returns
 */
const Menu: React.FC<MenuProps> = ({ setIsOpen, isOpen }) => {
  // * Hooks
  const router = useRouter();
  const { user } = useUser();
  const [isPicBroken, setIsPicBroken] = useState(false);

  const items = [
    {
      id: "menuItem1",
      label: "Ingresar",
      href: "login",
      icon: () => <LuLogIn size={22} />,
      show: user?.name ? false : true,
    },
    {
      id: "menuItem3",
      label: "Ganadores",
      href: "#ganadores",
      icon: () => <LuSwords size={22} />,
      show: true,
    },
    {
      id: "menuItem2",
      label: "Luchadores",
      href: "#luchadores",
      icon: () => <img className="w-[22px]" src={glove.src} alt="guante" />,
      show: true,
    },
    {
      id: "menuItem4",
      label: "Mis predicciones",
      href: "/mis-predicciones",
      icon: () => <TbCrystalBall size={22} />,
      show: true,
    },
    {
      id: "menuItem6",
      label: "Salir",
      href: "logout",
      icon: () => <LuLogIn style={{ transform: "scaleX(-1)" }} size={22} />,
      show: !!user,
    },
  ];

  // * Methods
  const handleClick = async (link: string) => {
    if (link === "login") {
      signIn("google");
      return;
    }

    if (link === "logout") {
      signOut({ callbackUrl: "/" });
      return;
    }

    if (link === "/mis-predicciones") {
      if (user) {
        setIsOpen();
        router.push(link);
      } else signIn("google", { callbackUrl: "/mis-predicciones" });
      return;
    }

    // If the link is not "special"
    // just close menu and scroll to the section
    router.push(link);
    setIsOpen();
  };

  const generateName = (name: string) => {
    const firstName = name.split(" ")[0];
    return firstName[0];
  };

  return (
    <>
      <motion.div
        className="absolute z-40 top-6 right-6 bg-[#030303] rounded-2xl text-lg"
        transition={{ duration: 0.6, ease: "backOut" }}
        initial={{ opacity: 0, x: "150%" }}
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : "150%",
        }}
      >
        <div className="flex justify-end px-4 py-4">
          <div onClick={setIsOpen} className="cursor-pointer">
            <IoClose size={32} />
          </div>
        </div>

        {user && (
          <div className="px-10 py-5 flex items-center gap-2">
            {user.image ? (
              isPicBroken ? (
                <div className="w-12 h-12 mr-2 rounded-full bg-purple flex justify-center items-center">
                  <h3 className="text-xl font-semibold">
                    {generateName(user.name!)}
                  </h3>
                </div>
              ) : (
                <div className="w-12 mr-2">
                  <img
                    className="w-full h-full rounded-full"
                    src={user.image}
                    alt="foto de perfil"
                    onError={() => setIsPicBroken(true)}
                  />
                </div>
              )
            ) : (
              <LuLogIn size={22} />
            )}
            <span>{user.name?.split(" ")[0]}</span>
          </div>
        )}
        {/* Dividing line */}
        {user && <hr className="border-white opacity-30 my-2" />}

        <div className="list-none">
          {items.map(
            (item) =>
              item.show && (
                <li
                  onClick={() => handleClick(item.href)}
                  className="bg-transparent hover:bg-purple py-5 px-10 cursor-pointer flex items-center gap-2"
                  key={item.id}
                >
                  {item.icon()}
                  {item.label}
                </li>
              )
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
