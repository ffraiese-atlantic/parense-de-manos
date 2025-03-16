"use client";

import { PopupType, useUser } from "@/context/userContext";
import { handleOverflow } from "@/utils/handleOverflow";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import LoginContent from "./components/LoginContent";
import TicketContent from "./components/TicketsContent";

export default function Popup() {
  const { isOpen, setIsOpen, popupType } = useUser();

  const closePopup = () => {
    setIsOpen(false);
    handleOverflow();
  };

  useEffect(() => {
    if (isOpen) {
      handleOverflow();
    }
  }, [isOpen]);

  return isOpen ? (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 z-50 flex justify-center items-center">
        {/* Black layout */}
        <motion.div
          onClick={closePopup}
          transition={{ duration: 0.6, ease: "backOut" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          className={`w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-[2px] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        />

        {/* Popup */}
        <div className="popup-shadow w-3/4 sm:w-[400px] flex justify-center items-center relative bg-[#1E1E1E] rounded-2xl p-4 text-xl">
          {/* Close icon */}
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={closePopup}
          >
            <IoClose size={32} className="text-purple" />
          </div>

          {/* Content */}
          {popupType === PopupType.LOGIN ? <LoginContent /> : <TicketContent />}
        </div>
      </div>
    </>
  ) : null;
}
