import axios from "axios";

const getToken = () => {
  return localStorage.getItem('accessToken')
}

export const addComission = async (commissionObj : {
    receivingUser :  string,
    level: number,
    token : string,
    comissionedFrom: string,
    comissionAmount: number,
    baseAmount: number,
    transactionHash: string,
    usdPrice: number
  }) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/commission/add-commission`,
        commissionObj
  );
  return res;
};

export const userCommission =async (skip: number) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/commission/user-commissions`,
      {
        skip 
      },
      {
        headers: {
          Authorization : `Bearer ${getToken()}`
        }
      }
  );
  return res.data;
}