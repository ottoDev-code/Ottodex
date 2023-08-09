import React from "react";
import ClientWallet from "./client-wallet";
import Wallet from "./wallet";

const Page = () => {
    return (
        <>
            <Wallet />
            {/* <ClientWallet /> */}
        </>
    );
};

export const metadata = {
    title: "BM DAO | Wallet",
};

export default Page;
