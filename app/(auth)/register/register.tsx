"use client"
import { AcceptTerms, Container, FormContainer, GoogleBtn, InputContainer, InputWrapper, LogoWrapper, Or, SubmitButton } from '@/app/styles/auth.style'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const Register = () => {
    const [terms, setTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const handlePasswordToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }
    const handleTermToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setTerms(!terms)
    }
    const handleGoHome = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        router.push("/")
    }
  return (
    <Container>
      <FormContainer>
        <LogoWrapper onClick={handleGoHome}>
          <Image src={"./logo-i.svg"} alt="logo" width={44} height={36} />
        </LogoWrapper>
        <h1>Create your Account</h1>
        <p>Please Enter your details to Sign up</p>
        <GoogleBtn>
            <Image src={"./google.svg"} alt="logo" width={24} height={24} />
            <span>Sign up with Google</span>
        </GoogleBtn>
        <Or />
        <InputWrapper>
          <label>Full Name</label>
          <InputContainer>
            <input type="text" placeholder="Enter your Full Name"/>
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <label>Email Address</label>
          <InputContainer>
            <input type="email" placeholder="Enter your email address"/>
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <label>Username</label>
          <InputContainer>
            <input type="text" placeholder="Enter your username"/>
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <label>Password</label>
          <InputContainer>
            <input type={showPassword ? "text" : "password"} placeholder="Enter your password"/>
            <button onClick={handlePasswordToggle}><Image src={showPassword ? "eye-slash.svg" : "eye-open.svg"} alt="eye" height={24} width={24}/></button>
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <label>Country/Region</label>
          <InputContainer>
            <select>
                <option>Select your country/region</option>
                <option>9ja</option>
            </select>
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <label>Account Type</label>
          <InputContainer>
            <select>
                <option>Select your account type</option>
                <option>Moderator</option>
            </select>
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <label>Referral Code</label>
          <InputContainer>
            <input type="text" placeholder="Enter your referral code"/>
          </InputContainer>
        </InputWrapper>
        <AcceptTerms>
            <button onClick={handleTermToggle}><Image src={terms ? "checkbox-checked.svg" : "checkbox-unchecked.svg"} alt="eye" height={24} width={24}/></button>
            <p>Accept <Link href="/terms" legacyBehavior>Terms &amp; Condition</Link></p>
        </AcceptTerms>
        <SubmitButton>Create Account</SubmitButton>
        <AcceptTerms>
            <p style={{ textAlign: "center", width: "100%" }}>Already have an account? <Link href="/login" legacyBehavior>Login</Link></p>
        </AcceptTerms>
      </FormContainer>
    </Container>
  )
}

export default Register