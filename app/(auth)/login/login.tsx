"use client"
import { AcceptTerms, Container, FormContainer, GoogleBtn, InputContainer, InputWrapper, LogoWrapper, Or, QControl, SubmitButton } from '@/app/styles/auth.style'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);

    const router = useRouter();

    const handlePasswordToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }
    const handleRememberToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setRemember(!remember);
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
        <h1>Welcome Back</h1>
        <p>Please Enter your details to Sign in</p>
        <GoogleBtn>
            <Image src={"./google.svg"} alt="logo" width={24} height={24} />
            <span>Sign in with Google</span>
        </GoogleBtn>
        <Or />
        <InputWrapper>
          <label>Email Address</label>
          <InputContainer>
            <input type="email" placeholder="Enter your Email Address"/>
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <label>Password</label>
          <InputContainer>
            <input type={showPassword ? "text" : "password"} placeholder="Enter your password"/>
            <button onClick={handlePasswordToggle}><Image src={showPassword ? "eye-slash.svg" : "eye-open.svg"} alt="eye" height={24} width={24}/></button>
          </InputContainer>
        </InputWrapper>
        <QControl>
            <AcceptTerms style={{ width: "auto" }}>
                <button onClick={handleRememberToggle}><Image src={remember ? "checkbox-checked.svg" : "checkbox-unchecked.svg"} alt="eye" height={24} width={24}/></button>
                <p>Remember me</p>
            </AcceptTerms>
            <AcceptTerms style={{ width: "auto" }}>
                <Link href="/terms" legacyBehavior>Forget password?</Link>
            </AcceptTerms>
        </QControl>
        <SubmitButton>Sign in</SubmitButton>
        <AcceptTerms>
            <p style={{ textAlign: "center", width: "100%" }}>Don&apos;t have an account? <Link href="/register" legacyBehavior>Create account</Link></p>
        </AcceptTerms>
      </FormContainer>
    </Container>
  )
}

export default Login