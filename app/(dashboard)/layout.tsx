"use client"
import React, { useEffect, useState } from "react"
import { Container, Wrapper } from "../styles/dashboard-layout.style"
import Sidebar from "../components/sidebar/sidebar"
import Nav from "../components/dashbord-nav"
import { useRouter } from "next/navigation"
import { LoadingContainer } from "../styles/auth.style"
import { getIsLoading, setUser, useDispatch, useSelector } from "@/lib/redux"
import Image from "next/image"
import { getUserProfile } from "../api/auth"

const LandingLayout = ({
  children,
}: {
  children: React.ReactNode
})  => {
    const token = typeof window !== "undefined" && localStorage.getItem("bmdao-token");
    const [loaded, setLoaded] = useState(false);
    const router = useRouter();
    const loading = useSelector(getIsLoading);
    const dispatch = useDispatch();
    const fetchProfile = () => {
      getUserProfile()
      .then((res) => {
        dispatch(setUser(res.data.data))
      })
      .catch((e) => {
        console.log(e)
      })
    }
    useEffect(() => {
     if(!token) {
      router.replace("/login")
     } else {
      fetchProfile();
     }
     setLoaded(true);
    }, [token])
  return (
    <Container>
      <Sidebar />
      <Nav />
      <Wrapper>
        { loaded ? children : null }
      </Wrapper>
      {loading ? <LoadingContainer>
            <div>
                <Image src={"/logo-i.svg"} alt="logo" width={44} height={36} />
                <h3>LOADING...</h3>
            </div>
        </LoadingContainer> : null}
    </Container>
  )
}

export default LandingLayout