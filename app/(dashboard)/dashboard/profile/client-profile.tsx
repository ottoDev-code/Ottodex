"use client";

import { getUserProfile, updateProfile } from "@/app/api/auth";
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
import { getUser, setLoading, setUser, useDispatch, useSelector } from "@/lib/redux";
import { Country, ICountry }  from 'country-state-city';
import Image from "next/image";
import { toast } from 'react-toastify'
import React, { useEffect, useState } from "react";

const ClientProfile = () => {
    const [countryList] = useState<ICountry[]>(Country.getAllCountries());
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const user = useSelector(getUser);
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();
    const fetchProfile = () => {
      getUserProfile()
      .then((res) => {
        const resData = res.data.data
        setEmail(resData.emailAddress);
        setName(resData.name);
        setCountry(resData.country);
        setPhone(resData.phoneNumber ?? "");
        dispatch(setUser(res.data.data));
      })
      .catch((e) => {
        console.log(e)
      })
    }
    const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      if(!country || !phone || !name) {
        toast.error("Fill in required fields", {
          position: toast.POSITION.TOP_RIGHT
        });
        return;
      }
      dispatch(setLoading(true));
      updateProfile({
        country,
        phoneNumber: phone,
        name,
      }).then((res) => {
        // dispatch(setUser(res.data.data))
        fetchProfile();
        dispatch(setLoading(false));
      }).catch((e: any) => {
        toast.error(e.response.data.error[0].message, {
            position: toast.POSITION.TOP_RIGHT
        });
        dispatch(setLoading(false));
      })
    }
  
    useEffect(() => {
      fetchProfile();
    }, [])
    return (
        <Container>
            <HeadingCard heading={"Profile"} />
            <Wrapper>
                <Form>
                <h3>Personal Information</h3>
                <InputWrapper>
                    <label>Full Name</label>
                    <InputContainer>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter fullname"/>
                    </InputContainer>
                </InputWrapper>
                <InputFlex>
                    <InputWrapper>
                    <label>Email Address</label>
                    <InputContainer>
                        <input type="email" value={email} placeholder="Enter your email address"/>
                    </InputContainer>
                    </InputWrapper>
                    <InputWrapper>
                    <label>Phone Number</label>
                    <InputContainer>
                        <input type="tel" value={phone}  onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number"/>
                    </InputContainer>
                    </InputWrapper>
                </InputFlex>
                <InputWrapper>
                    <label>Country/Region</label>
                    <InputContainer>
                    <select value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option>Select your country/region</option>
                        {
                        countryList.map(country => (
                            <option value={country.name}>{country.name}</option>
                        ))
                        }
                    </select>
                    </InputContainer>
                </InputWrapper>

                    {/* <h3>Payment Method</h3>
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
                    </InputFlex> */}
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
                                <h3>{user?.name}</h3>
                                <p>{user?.emailAddress}</p>
                            </UserDetails>
                        </UserCard>

                        <button onClick={handleUpdate}>Edit Profile</button>
                    </UserWrap>
                </UserSection>
            </Wrapper>
        </Container>
    );
};

export default ClientProfile;
