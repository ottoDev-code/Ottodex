"use client"
import { getUser, useSelector } from '@/lib/redux'
import React from 'react'
import ClientDashboard from "./client-dashboard";
import UserDashboard from './user-dashboard';

const Dashboard = () => {
  const user = useSelector(getUser);
  return (
    <div>{user.accountType === "client" ? <ClientDashboard /> : <UserDashboard />}</div>
  )
}

export default Dashboard;
