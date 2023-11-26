"use client"
import { loginUser } from '@/app/api/auth'
import { AcceptTerms, Container, FormContainer, GoogleBtn, InputContainer, InputWrapper, LogoWrapper, Or, QControl, SubmitButton } from '@/app/styles/auth.style'
import { setLoading, setUser, useDispatch } from '@/lib/redux'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);

    const router = useRouter();
    const dispatch = useDispatch();

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      if(!email || !password) {
        toast.error("Fill in required fields", {
          position: toast.POSITION.TOP_RIGHT
        });
        return;
      }
      dispatch(setLoading(true));
      loginUser({
        emailAddress: email,
        password,
      }).then((res) => {
        dispatch(setUser(res.data.data))
        localStorage.setItem("bmdao-token", res.data.data.accessToken);
        router.push("/dashboard");
        dispatch(setLoading(false));
      }).catch((e: any) => {
        if(e?.response?.data.error[0].message) {
          toast.error(e?.response?.data.error[0].message, {
            position: toast.POSITION.TOP_RIGHT
          });
          dispatch(setLoading(false));
          return;
        }
        if(e?.message) {
          toast.error(e?.message, {
            position: toast.POSITION.TOP_RIGHT
          });
          dispatch(setLoading(false));
          return;
        }
      })
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
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email Address"/>
          </InputContainer>
        </InputWrapper>
        <InputWrapper>
          <label>Password</label>
          <InputContainer>
            <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
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
        <SubmitButton onClick={handleLogin}>Sign in</SubmitButton>
        <AcceptTerms>
            <p style={{ textAlign: "center", width: "100%" }}>Don&apos;t have an account? <Link href="/register" legacyBehavior>Create account</Link></p>
        </AcceptTerms>
      </FormContainer>
    </Container>
  )
}

export default Login