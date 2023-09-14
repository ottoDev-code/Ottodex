"use client";
import { getIsLoading, useSelector } from "@/lib/redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { LoadingContainer } from "../styles/auth.style";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const token = typeof window !== "undefined" && localStorage.getItem("bmdao-token");
    const router = useRouter();
    const loading = useSelector(getIsLoading)
    useEffect(() => {
     if(token) {
        router.replace("/dashboard")
     }
    }, [])
    
    return (
        <div>
           {!token ? children : null } 
           {loading ? <LoadingContainer>
                <div>
                    <Image src={"/logo-i.svg"} alt="logo" width={44} height={36} />
                    <h3>LOADING...</h3>
                </div>
           </LoadingContainer> : null}
        </div>
    );
};

export default AuthLayout;
