import axios from "axios";

const getToken = () => {
    return localStorage.getItem('accessToken')
  }

export const addTransaction = async (transactionObj : {
    baseAmount: number,
    tokenQuantity : number,
    transactionHash: string,
    token : string,
  }) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/tx/add-transaction-history`,
        transactionObj,
        {
            headers: {
              Authorization : `Bearer ${getToken()}`
            }
        }
  );
  return res;
};

export const userTransactions = async (skip:number) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/tx/user-transactions`,{
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