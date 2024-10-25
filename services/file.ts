import axios from "axios";

const getToken = () => {
  return localStorage.getItem('accessToken')
}

export const uploadImage = async (data: FormData) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/image/upload`,
    data,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );
  return res;
};