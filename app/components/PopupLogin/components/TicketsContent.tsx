"use client";

import { useUser } from "@/context/userContext";
import { handleOverflow } from "@/utils/handleOverflow";

const link = "https://www.tuentrada.com/eventos/detalle/PDM-Velez/771617615452";

export default function TicketContent() {
  const { setIsOpen } = useUser();

  const confirm = () => {
    close();
    window.open(link, "_blank");
  };

  const close = () => {
    setIsOpen(false);
    handleOverflow();
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Title */}
      <h3 className="mt-6">Importante</h3>

      {/* Text */}
      <div className="w-full text-center mt-6 px-2">
        <p className="mb-6">
          El enlace disponible para comprar entradas para
          <strong> Parense de Manos</strong> es solo para fines informativos.
        </p>
        <p>
          Nuestra empresa no se responsabiliza por las transacciones realizadas
          en la página externa, ni por la venta de entradas o cualquier otro
          producto ofrecido en dicha página.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={confirm}
        className="w-fit flex justify-center mt-10 mb-6 rounded-2xl py-2 px-6"
        style={{ border: "1px solid #582fb8" }}
      >
        <p className="px-6">Aceptar y continuar</p>
      </button>
    </div>
  );
}
