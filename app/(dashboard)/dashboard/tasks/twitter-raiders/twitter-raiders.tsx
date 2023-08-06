"use client";

import HeadingCard from "@/app/components/heading-card/heading-card";
import { Container } from "@/app/styles/dashboard.style";
import React from "react";
import NotRegistered from "../../../../components/not-registered/not-registered";
import TaskDetails from "./task-details";
import TaskDetailsNew from "./tasks-details-new";

const TwitterRaiders = () => {
    return (
        <Container>
            <HeadingCard heading={"Tasks"} sub={"Twitter Raiders"} />
            {/* <NotRegistered taskSub={"Twitter Raiders"} /> */}
            {/* <TaskDetails /> */}
            <TaskDetailsNew />
        </Container>
    );
};
export default TwitterRaiders;
