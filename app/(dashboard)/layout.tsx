"use client"
import React from "react"
import { Container, Wrapper } from "../styles/dashboard-layout.style"
import Sidebar from "../components/sidebar/sidebar"
import Nav from "../components/dashbord-nav"

const LandingLayout = ({
  children,
}: {
  children: React.ReactNode
})  => {
  return (
    <Container>
      <Sidebar />
      <Nav />
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )
}

export default LandingLayout