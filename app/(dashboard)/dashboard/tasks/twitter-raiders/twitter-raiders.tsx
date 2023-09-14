"use client";

import HeadingCard from "@/app/components/heading-card/heading-card";
import { Container } from "@/app/styles/dashboard.style";
import React from "react";
import NotRegistered from "../../../../components/not-registered/not-registered";
import TaskDetails from "./[id]/task-details";
import TaskDetailsNew from "./tasks-details-new";
import { getUser, useSelector } from "@/lib/redux";

const TwitterRaiders = () => {
    const user = useSelector(getUser);
    return (
        <Container>
            <HeadingCard heading={"Tasks"} sub={"Twitter Raiders"} />
            {
                !user.raiderService ?  <TaskDetailsNew /> : <NotRegistered taskSub={"Twitter Raiders"} />
            }
        </Container>
    );
};
export default TwitterRaiders;
