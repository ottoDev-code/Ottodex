"use client"
import HeadingCard from '@/app/components/heading-card/heading-card'
import { Container } from '@/app/styles/dashboard.style'
import React from 'react'

const ChatEngangers = () => {
  return (
    <Container>
        <HeadingCard heading={"Tasks"} sub={"Chat Engagers"} />
    </Container>
  )
}

export default ChatEngangers