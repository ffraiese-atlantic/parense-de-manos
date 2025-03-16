import axios from "axios";

export default async function loginWithGoogle(idToken: string) {
  try {
    const headers = { Authorization: `Bearer ${idToken.replace(/"/g, "")}`, host: undefined }; // auth header with bearer token
    const url = `${process.env.NEXT_PUBLIC_SERVER}${"/users/auth/"}`;

    const res = await axios({
      url,
      method: "POST",
      headers
    });
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Error al autenticar con el backend (AxiosError):",
        error.response?.data || error.message
      );
    } else {
      console.error("Error desconocido al autenticar con el backend:", error);
    }
  }
}
