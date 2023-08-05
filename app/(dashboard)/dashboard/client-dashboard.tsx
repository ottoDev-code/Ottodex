"use client"
import HeadingCard from '@/app/components/heading-card'
import { ArrowDownIcon, DocumentIcon } from '@/app/components/svg-icons'
import { ActivityCard, ActivityWrapper, BalanceCard, BottomWrapper, Card, CardLeft, CardRight, CardWrapper, Container, CopyContainer, StatsCard, StatsContainer, StreakBox, StreakCard, TaskCard } from '@/app/styles/dashboard.style'
import React from 'react'

const ClientDashboard = () => {
  return (
    <Container>
      <HeadingCard heading={"Hello, Dave 👋"} sub={"Perform daily tasks and track your records!"} />
      <BottomWrapper>
        <CardLeft>
            <CardWrapper style={{ marginTop: "0" }}>
                <BalanceCard>
                <div className="top">
                    <div>
                    <p>Wallet Balance</p>
                    <h1>$279.5</h1>
                    </div>
                    <button>
                    <span>BMT</span>
                    <ArrowDownIcon />
                    </button>
                </div>
                <p>BMT Value: 12,345.50</p>
                </BalanceCard>
                <TaskCard>
                <div className='top'>
                    <h2>Tasks</h2>
                    <div>
                    <span></span>
                    <p>20 new available tasks</p>
                    </div>
                </div>
                <div className="bottom">
                    <StatsCard>
                    <div>
                        <DocumentIcon />
                        <p>Completed</p>
                    </div>
                    <h2>232</h2>
                    </StatsCard>
                    <div className='divider'></div>
                    <StatsCard>
                    <div>
                        <DocumentIcon />
                        <p>In Progress</p>
                    </div>
                    <h2>20</h2>
                    </StatsCard>
                </div>
                </TaskCard>
            </CardWrapper>
        </CardLeft>
        <CardRight>
        <h2>Recent Activities</h2>
            <ActivityWrapper>
                <ActivityCard>
                <div className="left">
                    <div className="icon">
                    <DocumentIcon />
                    </div>
                    <div>
                    <h3>Twitter Raiding</h3>
                    <p>Task</p>
                    </div>
                </div>
                <div className="right">
                    <p>26 June, 2023</p>
                    <p>20 BMT</p>
                </div>
                </ActivityCard>
                <ActivityCard>
                <div className="left">
                    <div className="icon">
                    <DocumentIcon />
                    </div>
                    <div>
                    <h3>Twitter Raiding</h3>
                    <p>Task</p>
                    </div>
                </div>
                <div className="right">
                    <p>26 June, 2023</p>
                    <p>20 BMT</p>
                </div>
                </ActivityCard>
                <ActivityCard>
                <div className="left">
                    <div className="icon">
                    <DocumentIcon />
                    </div>
                    <div>
                    <h3>Twitter Raiding</h3>
                    <p>Task</p>
                    </div>
                </div>
                <div className="right">
                    <p>26 June, 2023</p>
                    <p>20 BMT</p>
                </div>
                </ActivityCard>
                <ActivityCard>
                <div className="left">
                    <div className="icon">
                    <DocumentIcon />
                    </div>
                    <div>
                    <h3>Twitter Raiding</h3>
                    <p>Task</p>
                    </div>
                </div>
                <div className="right">
                    <p>26 June, 2023</p>
                    <p>20 BMT</p>
                </div>
                </ActivityCard>
                <ActivityCard>
                <div className="left">
                    <div className="icon">
                    <DocumentIcon />
                    </div>
                    <div>
                    <h3>Twitter Raiding</h3>
                    <p>Task</p>
                    </div>
                </div>
                <div className="right">
                    <p>26 June, 2023</p>
                    <p>20 BMT</p>
                </div>
                </ActivityCard>
            </ActivityWrapper>
        </CardRight>
      </BottomWrapper>
    </Container>
  )
}

export default ClientDashboard;