"use client"
import HeadingCard from '@/app/components/heading-card/heading-card'
import { InputContainer, InputWrapper } from '@/app/styles/auth.style'
import { Container } from '@/app/styles/dashboard.style'
import { Form, InputFlex, RoleCapsule, RoleWrapper, UserCard, UserDetails, UserImage, UserSection, UserWrap, Wrapper } from '@/app/styles/profile.style'
import Image from 'next/image'
import React from 'react'

const Profile = () => {
  return (
    <Container>
      <HeadingCard heading={"Profile"} />
      <Wrapper>
        <Form>
          <h3>Personal Information</h3>
          <InputWrapper>
            <label>Full Name</label>
            <InputContainer>
              <input type="text" placeholder="Enter fullname"/>
            </InputContainer>
          </InputWrapper>
          <InputFlex>
            <InputWrapper>
              <label>Email Address</label>
              <InputContainer>
                <input type="email" placeholder="Enter your email address"/>
              </InputContainer>
            </InputWrapper>
            <InputWrapper>
              <label>Phone Number</label>
              <InputContainer>
                <input type="tel" placeholder="Enter your phone number"/>
              </InputContainer>
            </InputWrapper>
          </InputFlex>
          <InputWrapper>
            <label>Country/Region</label>
            <InputContainer>
              <select>
                <option>Select Country/Region</option>
                <option>Nigeria</option>
                <option>USA</option>
                <option>Canada</option>
              </select>
            </InputContainer>
          </InputWrapper>
          <h3>Role</h3>
          <InputWrapper>
            <label>Moderator</label>
            <InputContainer>
              <input type="text" placeholder="Level 1"/>
              <button className={'level'}>Level Up</button>
            </InputContainer>
          </InputWrapper>
          <InputWrapper>
            <label>Collab Manager</label>
            <InputContainer>
              <input type="text" placeholder="Level 1"/>
              <button className={'level'}>Level Up</button>
            </InputContainer>
          </InputWrapper>
          <InputWrapper>
            <label>Chat Engager</label>
            <InputContainer>
              <input type="text" placeholder="Level 1"/>
              <button className={'level'}>Level Up</button>
            </InputContainer>
          </InputWrapper>
          <InputWrapper>
            <label>Twitter Raider</label>
            <InputContainer>
              <input type="text" placeholder="Level 1"/>
              <button className={'level'}>Level Up</button>
            </InputContainer>
          </InputWrapper>
          <h3>Payment Method</h3>
          <InputWrapper>
            <label>Full Name</label>
            <InputContainer>
              <input type="text" placeholder="Enter fullname"/>
            </InputContainer>
          </InputWrapper>
          <InputFlex>
            <InputWrapper>
              <label>Binance Pay ID</label>
              <InputContainer>
                <input type="text" placeholder="Enter your Binance pay ID"/>
              </InputContainer>
            </InputWrapper>
            <InputWrapper>
              <label>BEP-20 Wallet Address</label>
              <InputContainer>
                <input type="tel" placeholder="Enter your wallet address"/>
              </InputContainer>
            </InputWrapper>
          </InputFlex>
        </Form>
        <UserSection>
          <UserWrap>
            <UserCard>
              <UserImage>
                <Image src={"/user-1.png"} alt="user"  objectFit="cover" objectPosition="center" layout="fill" />
              </UserImage>
              <UserDetails>
                <h3>Gemma Sandra</h3>
                <p>gemmasandra@gmail.com</p>
              </UserDetails>
            </UserCard>
            <RoleWrapper>
              <RoleCapsule>Moderator</RoleCapsule>
              <RoleCapsule>Collab Manager</RoleCapsule>
              <RoleCapsule>Chat Engager</RoleCapsule>
              <RoleCapsule>Twitter Raider</RoleCapsule>
            </RoleWrapper>
            <button>Edit Profile</button>
          </UserWrap>
        </UserSection>
      </Wrapper>
    </Container>
  )
}

export default Profile
