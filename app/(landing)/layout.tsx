"use client"
import React from "react"
import Nav from "../components/nav"
import Footer from "../components/footer/footer"
import { Container, Wrapper } from "../styles/landing-layout.style"

const LandingLayout = ({
  children,
}: {
  children: React.ReactNode
})  => {
  return (
    <Container>
      <Nav />
      <Wrapper>
        {children}
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default LandingLayout