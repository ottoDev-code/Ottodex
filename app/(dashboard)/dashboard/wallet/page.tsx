import React from "react";
import Wallet from "./wallet";
import ClientWallet from "./client-wallet";

const Page = () => {
    return (
        <>
            {/* <Wallet /> */}
            <ClientWallet />
        </>
    );
};

export const metadata = {
    title: "BM DAO | Wallet",
};

export default Page;
