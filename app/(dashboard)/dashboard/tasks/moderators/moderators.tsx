"use client";

import HeadingCard from "@/app/components/heading-card/heading-card";
import { Container } from "@/app/styles/dashboard.style";
import React from "react";
import NotRegistered from "../../../../components/not-registered/not-registered";
import TaskDetails from "./task-details";

const Moderators = () => {
    return (
        <Container>
            <HeadingCard heading={"Tasks"} sub={"Moderators"} />
            {/* <NotRegistered taskSub={"Moderator"} /> */}
            <TaskDetails />
        </Container>
    );
};
export default Moderators;
