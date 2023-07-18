"use client"
import React, { useState } from 'react'
import { Container, LogoWrapper, NavButton, SubNavButton, SubNavWrapper } from './style'
import Image from 'next/image'
import { ArrowDownIcon, BookIcon, DocumentIcon, HomeIcon, UserIcon, WalletIcon } from '../svg-icons'
import { UsersIcon } from '../svg-icons'
import { LogoutIcon } from '../svg-icons'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname()
  return (
    <Container>
        <LogoWrapper>
            <Image src={"/logo.svg"} alt="logo" height={50} width={148} />
        </LogoWrapper>
        <NavButton $isActive={pathname === "/dashboard"}>
            <div>
              <HomeIcon />
              <span>Dashboard</span>
            </div>
        </NavButton>
        <NavButton onClick={() => setShow(!show)} $isActive={pathname.includes("/dashboard/tasks")}>
            <div>
              <DocumentIcon />
              <span>Tasks</span>
            </div>
            <ArrowDownIcon />
        </NavButton>
        {
          show ? (
            <SubNavWrapper>
              <SubNavButton>
                <div>
                  <Image src="/mapper.svg" alt="" height={50} width={24}/>
                </div>
                <span>Moderators</span>
              </SubNavButton>
              <SubNavButton>
                <div>
                  <Image src="/mapper.svg" alt="" height={50} width={24}/>
                </div>
                <span>Collab Managers</span>
              </SubNavButton>
              <SubNavButton>
                <div>
                  <Image src="/mapper.svg" alt="" height={50} width={24}/>
                </div>
                <span>Twitter Raiders</span>
              </SubNavButton>
              <SubNavButton>
                <div>
                  <Image src="/mapper.svg" alt="" height={50} width={24}/>
                </div>
                <span>Chat Engagers</span>
              </SubNavButton>
            </SubNavWrapper>
          ) : null
        }
        <NavButton $isActive={pathname === ("/dashboard/wallet")}>
            <div>
              <WalletIcon />
              <span>Wallet</span>
            </div>
        </NavButton>
        <NavButton $isActive={pathname === "/dashboard/profile"}>
            <div>
              <UserIcon />
              <span>Profile</span>
            </div>
        </NavButton>
        <NavButton $isActive={pathname === "/dashboard/academy"}>
            <div>
              <BookIcon />
              <span>Academy</span>
            </div>
        </NavButton>
        <NavButton $isActive={pathname === "/dashboard/referral"}>
            <div>
              <UsersIcon />
              <span>Referral</span>
            </div>
        </NavButton>
        <NavButton>
            <div>
              <LogoutIcon />
              <span>Logout</span>
            </div>
        </NavButton>
    </Container>
  )
}

export default Sidebar