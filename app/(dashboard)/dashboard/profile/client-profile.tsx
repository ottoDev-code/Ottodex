"use client";

import HeadingCard from "@/app/components/heading-card/heading-card";
import { InputContainer, InputWrapper } from "@/app/styles/auth.style";
import { Container } from "@/app/styles/dashboard.style";
import {
    Form,
    InputFlex,
    RoleCapsule,
    RoleWrapper,
    UserCard,
    UserDetails,
    UserImage,
    UserSection,
    UserWrap,
    Wrapper,
} from "@/app/styles/profile.style";
import Image from "next/image";
import React from "react";

const ClientProfile = () => {
    return (
        <Container>
            <HeadingCard heading={"Profile"} />
            <Wrapper>
                <Form>
                    <h3>Personal Information</h3>
                    <InputWrapper>
                        <label>Full Name</label>
                        <InputContainer>
                            <input type="text" placeholder="Gemma Sandra" />
                        </InputContainer>
                    </InputWrapper>
                    <InputFlex>
                        <InputWrapper>
                            <label>Email Address</label>
                            <InputContainer>
                                <input
                                    type="email"
                                    placeholder="gemmasandra@gmail.com"
                                />
                            </InputContainer>
                        </InputWrapper>
                        <InputWrapper>
                            <label>Phone Number</label>
                            <InputContainer>
                                <input
                                    type="tel"
                                    placeholder="+09 345 346 46"
                                />
                            </InputContainer>
                        </InputWrapper>
                    </InputFlex>
                    <InputWrapper>
                        <label>Country/Region</label>
                        <InputContainer>
                            <select>
                                {/* <option>Nigeria</option> */}
                                <option>Nigeria</option>
                                <option>USA</option>
                                <option>Canada</option>
                            </select>
                        </InputContainer>
                    </InputWrapper>

                    <h3>Payment Method</h3>
                    <InputWrapper>
                        <label>Card Number</label>
                        <InputContainer>
                            <input
                                type="text"
                                placeholder="**** **** **** 1234"
                            />
                        </InputContainer>
                    </InputWrapper>
                    <InputFlex>
                        <InputWrapper>
                            <label>Expiration</label>
                            <InputContainer>
                                <input type="text" placeholder="08/25" />
                            </InputContainer>
                        </InputWrapper>
                        <InputWrapper>
                            <label>CVV</label>
                            <InputContainer>
                                <input type="text" placeholder="825" />
                            </InputContainer>
                        </InputWrapper>
                    </InputFlex>
                </Form>
                <UserSection>
                    <UserWrap>
                        <UserCard>
                            <UserImage>
                                <Image
                                    src={"/user-1.png"}
                                    alt="user"
                                    objectFit="cover"
                                    objectPosition="center"
                                    layout="fill"
                                />
                            </UserImage>
                            <UserDetails>
                                <h3>Gemma Sandra</h3>
                                <p>gemmasandra@gmail.com</p>
                            </UserDetails>
                        </UserCard>

                        <button>Edit Profile</button>
                    </UserWrap>
                </UserSection>
            </Wrapper>
        </Container>
    );
};

export default ClientProfile;
