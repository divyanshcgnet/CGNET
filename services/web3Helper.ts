import Web3 from "web3";
// import {
//   vestingAbi,
//   vestingContractAddress,
// } from "../utils/config";

import { readContract, writeContract } from '@wagmi/core'
import { waitForTransaction } from "wagmi/actions";
import {createPublicClientLocal } from "./web3Service";
import { ico } from "@/utils/icoDetails";
import { tokenAbi } from "@/utils/token-abi";
import { decodeEventLog, parseEther, zeroAddress } from "viem";
import { currencies } from "@/utils/currencies";

const executeWriteFunction = async (txObj:any, userAddress:string) => {
  const publicClient = createPublicClientLocal()
  try {
    await publicClient.estimateContractGas({ ...txObj, account: userAddress})
  } catch (error) {
    throw error
  }
  let hash: any;
  try {
     hash = await writeContract(txObj);
  } catch (error) {
    throw error
  }
  return await waitForTransaction({
    hash: hash.hash
  })
}


export const getUsdcAndUsdtTokenAddresses = async () => {
  const publicClient = createPublicClientLocal()
  const usdt:any = publicClient.readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "usdt",
    args : []
  });
  const usdc:any = publicClient.readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "usdc",
    args : []
  });
  return { usdt: await usdt, usdc: await usdc };
};

export const maxSeedSaleBuyAmountUser = async (address:any) => {
  const publicClient = createPublicClientLocal()
  const usdInvestedByUser:any = publicClient.readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "seedSaleUsdInvestedByUser",
    args : [address]
  });
  return await usdInvestedByUser ;
};

export const preRegisterationUsdInvestedByUser = async (address:any) => {
  const publicClient = createPublicClientLocal()
  const usdInvestedByUser:any = publicClient.readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "preRegisterationUsdInvestedByUser",
    args : [address]
  });
  return await usdInvestedByUser ;
};


export const getAmountRaised = async () => {
  const publicClient = createPublicClientLocal()
  const amountRaised = await publicClient.readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "amountRaised",
    args: []
  });
  return  (Number(amountRaised)/Math.pow(10,18)).toFixed(4)
};

export const getTokenPrice = async () => {
  const publicClient = createPublicClientLocal()
  const tokenPrice = await publicClient.readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "tokenPrice",
    args: []
  });
  
  return  Number(tokenPrice)/Math.pow(10,8)
};

export const getETHPrice = async () => {
  const publicClient = createPublicClientLocal()
  const tokenPrice:any = await publicClient.readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "getPrice",
    args: []
  });
  
  return [
    Number(tokenPrice[0])/Math.pow(10,8),
    Number(tokenPrice[1])/Math.pow(10,8),
    Number(tokenPrice[2])/Math.pow(10,8),
  ]};

export const getTokenAmount = async (address: any, amount:any) => {
  let amountToPass ;
  const publicClient = createPublicClientLocal()
  if(currencies[0].address.toLowerCase() !== address?.toLowerCase()){
    try {
      const decimals:any = await publicClient.readContract({
        address: address,
        abi: tokenAbi,
        functionName: "decimals",
        args: []
      });
      amountToPass = Number(decimals) === 18? parseEther(Number(amount).toFixed(18).toString()): amount * Math.pow(10, Number(decimals))
    } catch (error) {
      console.log({error})
    }
  } else{
    amountToPass = parseEther(Number(amount).toFixed(18).toString())
  }
  const price = await publicClient.readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "getTokenAmount",
    args: [amountToPass, address]
  });

  return Number((Number(price)/Math.pow(10,18)).toFixed(4))
};

export const referalIncome = async (address: any) => {
  const publicClient = createPublicClientLocal()
  const price = await publicClient.readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "referalIncome",
    args: [address]
  });

  return Number(price)/Math.pow(10,18)
};

export const getTokenBalance = async (
  userAddress: string
) => {
  const publicClient = createPublicClientLocal()
  const tokenAddresses: any = await getUsdcAndUsdtTokenAddresses();
  const usdtBalance = await publicClient.readContract({
    address: tokenAddresses.usdt,
    abi: tokenAbi,
    functionName: "balanceOf",
    args: [userAddress],
  });
  const usdcBalance = await publicClient.readContract({
    address: tokenAddresses.usdc,
    abi: tokenAbi,
    functionName: "balanceOf",
    args: [userAddress],
  });
  const usdtDecimals:any = await publicClient.readContract({
    address: tokenAddresses.usdt,
    abi: tokenAbi,
    functionName: "decimals",
    args: []
  });
  const usdcDecimals:any = await publicClient.readContract({
    address: tokenAddresses.usdc,
    abi: tokenAbi,
    functionName: "decimals",
    args: []
  });

  return {
    usdtBalance: (
      Number(usdtBalance) / Math.pow(10, usdtDecimals)
    ).toFixed(4),
    usdcBalance: (
      Number(usdcBalance) / Math.pow(10, usdcDecimals)
    ).toFixed(4),
  };
};

export const estimateFees = async (
  tokenType: string,
  amount: any,
  address: any
) => {
  const tokens = await getUsdcAndUsdtTokenAddresses();
  const tokenAddresss = tokenType.toUpperCase() === "USDT" ? tokens.usdt : tokens.usdc;
  const web3 = new Web3()
  const amountInWei = web3.utils.toWei(amount?.toString(),"ether")
  const publicClient = createPublicClientLocal()
  const gasPrice = await publicClient.getGasPrice() 
  try {
    const fees = await publicClient.estimateContractGas({
      address: ico.address as any,
      abi: ico.abi,
      functionName: "buyToken",
      account: address,
      args: [tokenAddresss, amountInWei],
    })
    return ((Number(fees) * Number(gasPrice)) / Math.pow(10, 18)).toFixed(4);
  } catch (error) {
    throw error
  }
};

const approveToken = async (tokenAddress: any, address: string) => {
  const txObj:any ={
    address: tokenAddress,
    abi: tokenAbi,
    functionName: "approve",
    args: [ico.address, "100000000000000000000000000000"]
  }
  try {
    return await executeWriteFunction(txObj, address)
  } catch (error) {
    throw error
  }
};

export const getDecimals = async(tokenAddress: string) => {
  if(currencies[0].address.toLowerCase() === tokenAddress?.toLowerCase())
    return 18
    const publicClient = createPublicClientLocal()
  const decimals:any = await publicClient.readContract({
    address: tokenAddress as any,
    abi: tokenAbi,
    functionName: "decimals",
    args: []
  });
  return Number(decimals)
}

export const buyToken = async (
  amount: any,
  address: any,
  referrer: any,
  token: any
) => {
  let amountInWei;

  if (token !== currencies[0].address){
    const publicClient = createPublicClientLocal()
    const decimals:any = await publicClient.readContract({
      address: token as any,
      abi: tokenAbi,
      functionName: "decimals",
      args: []
    });
    if(Number(decimals) === 18)
      amountInWei = parseEther(Number(amount).toFixed(18).toString())
    else
      amountInWei = amount * Math.pow(10, Number(decimals))
  }
  else {
    amountInWei = parseEther(Number(amount).toFixed(18).toString())
  }

  let txObj:any = {
    address: ico.address as any,
    abi: ico.abi,
    functionName: "buyToken",
    args: [token, amountInWei, referrer?referrer:zeroAddress],
  }
  if (token !== currencies[0].address){
    const allowanceToIco = await allowance(token, address)
    if(allowanceToIco < Number(amount))
      await approveToken(token, address)
  }
  else 
    txObj = {...txObj, value: parseEther(Number(amount).toFixed(18).toString())}

  try {
    return await executeWriteFunction(txObj, address)
  } catch (error) {
    throw error
  }
};

export const allowance = async (
  token: string,
  address: string
) => {
  const publicClient = createPublicClientLocal()
  const allowance = await publicClient.readContract({
    address: token as any,
    abi: tokenAbi,
    functionName: "allowance",
    args: [address, ico.address as any],
  });
  return Number(allowance) / Math.pow(10, 18);
};

export const cgBougth = async (address: any) => {
  const publicClient = createPublicClientLocal()
  const bnqBalance = await publicClient.readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "tokenBoughtUser",
    args: [address],
  });
  return (Number(bnqBalance) / Math.pow(10, 18)).toFixed(4);
};

export const getElegiebleAmout = async (address: string) => {
  const publicClient = createPublicClientLocal()
  const poolAndAmount = await publicClient.readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "getPoolAndAmount",
    args: [address],
  });
  return poolAndAmount
};

export const endSaleTime = async () => {
  const publicClient = createPublicClientLocal()
  const phase1StartTime = await publicClient.readContract({
      address: ico.address as any,
      abi: ico.abi,
      functionName: "endTime",
      args: []
  });
return Number(phase1StartTime)
};

export const startSaleTime = async () => {
  const publicClient = createPublicClientLocal()
  const phase1StartTime = await publicClient.readContract({
      address: ico.address as any,
      abi: ico.abi,
      functionName: "startime",
      args: []
  });
return Number(phase1StartTime)
};

export const getEventValue = async (result: any, eventName:string) => {
  console.log({eventName})
  try {
    let tokenBought :any;
    console.log({result})
    for(let i=0; i< result.logs.length; i++){
      try {
        const log = decodeEventLog({
          abi: ico.abi,
          data: result.logs[i].data,
          topics: result.logs[i].topics
        })
        console.log({log})
        if(log.eventName === eventName){
          tokenBought = log.args;
        }
      } catch (error) {
        console.log({error})
      }
    }
    return tokenBought;
  } catch (error) {
    console.log({error})
  }
}

export const getEventReferralDistributed = async (result: any) => {
  try {
    let referalIncomeDistributed :any = [];
    for(let i=0; i< result.logs.length; i++){
      try {
        const log = decodeEventLog({
          abi: ico.abi,
          data: result.logs[i].data,
          topics: result.logs[i].topics
        })
        if(log.eventName === "ReferalIncomeDistributed"){
          referalIncomeDistributed.push(log.args);
        }
      } catch (error) {
        console.log({error})
      }
    }
    return referalIncomeDistributed;
  } catch (error) {
    console.log({error})
  }
}
export const claimToken = async(address :any) =>{
  let txObj:any = {
    address: ico.address as any,
    abi: ico.abi,
    functionName: "claimReward",
    args: [],
  }
  try {
    return await executeWriteFunction(txObj, address)
  } catch (error) {
    throw error
  }
}

export const rewards = async(address: string, userAddress:any) => {
  const publicClient = createPublicClientLocal()
  const rewards = await publicClient.readContract({
    address: ico.address as any,
    abi: ico.abi,
    functionName: "userRewardBalance",
    args: [userAddress, address]
  });
  return rewards
}