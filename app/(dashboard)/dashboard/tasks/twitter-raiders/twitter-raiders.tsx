"use client";

import HeadingCard from "@/app/components/heading-card/heading-card";
import { Container } from "@/app/styles/dashboard.style";
import React, { useEffect, useState } from "react";
import NotRegistered from "../../../../components/not-registered/not-registered";
import TaskDetailsNew from "./tasks-details-new";
import { getIsLoading, setLoading, useDispatch, useSelector } from "@/lib/redux";
import { getAllRaiderServices } from "@/app/api/service";
import { toast } from "react-toastify";

const TwitterRaiders = () => {
    const dispatch = useDispatch();
    const [hasRaidService, setHasRaidService] = useState(false);
    const loading = useSelector(getIsLoading);
    const fetchRaiderServices = () => {
        getAllRaiderServices()
        .then((res) => {
          setHasRaidService(!!res.data.data.userServices.filter((s: any) => s.accountType === "raider").length);
          dispatch(setLoading(false));
        }).catch((e: any) => {
          toast.error(e?.response?.data.error[0].message, {
            position: toast.POSITION.TOP_RIGHT
          });
          dispatch(setLoading(false));
        })
      }
    useEffect(() => {
        fetchRaiderServices();
    }, [])
    return (
        <Container>
            <HeadingCard heading={"Tasks"} sub={"Twitter Raiders"} />
            {
                !loading && hasRaidService ?  <TaskDetailsNew /> : <NotRegistered taskSub={"Twitter Raiders"}  update={fetchRaiderServices} />
            }
        </Container>
    );
};
export default TwitterRaiders;
