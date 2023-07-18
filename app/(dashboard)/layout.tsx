"use client"
import React from "react"
import { Container, Wrapper } from "../styles/dashboard-layout.style"
import Sidebar from "../components/sidebar/sidebar"

const LandingLayout = ({
  children,
}: {
  children: React.ReactNode
})  => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )
}

export default LandingLayout