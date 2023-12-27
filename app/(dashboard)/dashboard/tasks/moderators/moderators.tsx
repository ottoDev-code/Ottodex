"use client";

import HeadingCard from "@/app/components/heading-card/heading-card";
import { Container } from "@/app/styles/dashboard.style";
import React, { useEffect, useState } from "react";
import NotRegistered from "../../../../components/not-registered/not-registered";
import TaskDetailsNew from "./task-details";
import { getIsLoading, getUser, setLoading, useDispatch, useSelector } from "@/lib/redux";
import { getAllModeratorServices } from "@/app/api/service";
import { toast } from "react-toastify";

const TwitterRaiders = () => {
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    const [hasModService, setHasModService] = useState(false);
    const loading = useSelector(getIsLoading);
    const fetchModeratorServices = () => {
        getAllModeratorServices()
        .then((res) => {
          setHasModService(!!res.data.data.userServices.filter((s: any) => s.accountType === "moderators").length);
          dispatch(setLoading(false));
        }).catch((e: any) => {
          toast.error(e?.response?.data.error[0].message, {
            position: toast.POSITION.TOP_RIGHT
          });
          dispatch(setLoading(false));
        })
      }
    useEffect(() => {
        fetchModeratorServices();
    }, [])
    
    return (
        <Container>
            <HeadingCard heading={"Tasks"} sub={"Moderators"} />
            {
                !loading && hasModService ? <TaskDetailsNew /> : <NotRegistered taskSub={"Moderators"} />
            }
        </Container>
    );
};
export default TwitterRaiders;
