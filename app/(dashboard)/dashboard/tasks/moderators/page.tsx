import React from "react";
import Moderators from "./moderators";
import ClientModerators from "./client-moderator";

const Page = () => {
    return (
        <>
            {/* <Moderators /> */}
            <ClientModerators />
        </>
    );
};

export const metadata = {
    title: "BM DAO | Moderators",
};

export default Page;
