import axios from "axios";

interface IAuthor{
    _id: string,
    name:string
}

export interface ITradeIdeas {
    active: boolean;
    createdAt: string;
    entry: number;
    name: string;
    orderType: string;
    position: string;
    profit: number;
    risk: number;
    stopLoss: number;
    symbol: string;
    tradeImage: string;
    updatedAt: string;
    author: IAuthor
    _id: string;
}
export const getAllTradeIdeas = async () =>{
    try {
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/trade/get-all-trade-ideas`
          )
          console.log(res.data[0].data)
          return res.data[0].data;
    } catch (error) {
        console.log(error)
        return [];
    }
}