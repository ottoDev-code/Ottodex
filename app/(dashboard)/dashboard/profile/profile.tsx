"use client"
import { getUser, useSelector } from '@/lib/redux'
import React from 'react'
import ClientProfile from "./client-profile";
import UserProfile from './user-profile';

const Profile = () => {
  const user = useSelector(getUser);
  return (
    <div>{user.accountType === "client" ? <ClientProfile /> : <UserProfile />}</div>
  )
}

export default Profile;
