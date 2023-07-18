"use client"
import HeadingCard from '@/app/components/heading-card/heading-card'
import { Container } from '@/app/styles/dashboard.style'
import React from 'react'

const CollabManagers = () => {
  return (
    <Container>
        <HeadingCard heading={"Tasks"} sub={"Collab Managers"} />
    </Container>
  )
}

export default CollabManagers;