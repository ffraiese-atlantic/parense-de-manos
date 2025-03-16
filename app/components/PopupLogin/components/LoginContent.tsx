import warningIcon from "@/assets/images/icons/warning.png";
import googleIcon from "@/assets/images/icons/google.png";
import { signIn } from "next-auth/react";

export default function LoginContent() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Warning img */}
      <div className="w-14 mt-6">
        <img
          className="w-full h-full object-contain"
          src={warningIcon.src}
          alt="advertencia"
        />
      </div>
      {/* Text */}
      <div className="w-full flex justify-center text-center mt-6">
        <p className="w-2/3 md:w-1/2 text-base lg:text-lg">
          Para poder votar, ingresá a tu cuenta
        </p>
      </div>
      {/* Google button */}
      <button
        onClick={() => signIn("google")}
        className="w-fit flex justify-center items-center mt-8 mb-6 rounded-2xl py-2 px-6"
        style={{ border: "1px solid #582fb8" }}
      >
        <div className="w-6 lg:w-8">
          <img
            className="w-full h-full object-contain"
            src={googleIcon.src}
            alt="google"
          />
        </div>
        <p className="ml-2 text-sm xs:text-base lg:text-lg">
          Ingresar con Google
        </p>
      </button>
    </div>
  );
}
