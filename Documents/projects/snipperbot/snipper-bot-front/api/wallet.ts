// import { axiosInstance } from "./axios"

export const baseUrl = 'http://localhost:8081/api/v1'
// export const baseUrl = 'https://build-africa-wallet-server.vercel.app/api/v1'

// export const createWallet = (body: any) => {
//     return axiosInstance().post("/create_account", body);
// }


export const getAccountTokenBalance = async(telegramId: any, mintAdress: any) => {
    const response = await fetch(`${baseUrl}/solana/token/balance?telegramId=${telegramId}&mintAdress=${mintAdress}`, {
        // method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
        },
        // body: JSON.stringify(body),
    });

    return response
}

export const transferToken = async(telegramId: any,mintAdress: any, recipientAddress: string, amount: number) => {
    const response = await fetch(`${baseUrl}/solana/transfer/token`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
        },
        body: JSON.stringify({
            telegramId,
            mintAdress,
            recipientAddress,
            amount
        }),
    });

    return response
}
