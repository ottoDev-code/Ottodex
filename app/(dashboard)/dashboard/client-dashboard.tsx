"use client";

import HeadingCard from "@/app/components/heading-card/heading-card";
import { ArrowDownIcon, DocumentIcon } from "@/app/components/svg-icons";
import {
    ActivityCard,
    ActivitiesCard,
    ClientCardWrapper,
    ClientGridContainer,
    History,
    HistoryCard,
    HistoryCardItem,
    LeftContainer,
} from "@/app/styles/client-dashboard.style";

import {
    ActivityWrapper,
    BalanceCard,
    Container,
    StatsCard,
    TaskCard,
} from "@/app/styles/dashboard.style";
import React from "react";

const Dashboard = () => {
    return (
        <Container>
            <HeadingCard
                heading={"Hello, Dave 👋"}
                sub={"Perform daily tasks and track your records!"}
            />
            <ClientGridContainer>
                <LeftContainer>
                    <ClientCardWrapper>
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
                            <div className="top">
                                <h2>Tasks</h2>
                            </div>
                            <div className="bottom">
                                <StatsCard>
                                    <div>
                                        <DocumentIcon />
                                        <p>Completed</p>
                                    </div>
                                    <h2>232</h2>
                                </StatsCard>
                                <div className="divider"></div>
                                <StatsCard>
                                    <div>
                                        <DocumentIcon />
                                        <p>In Progress</p>
                                    </div>
                                    <h2>20</h2>
                                </StatsCard>
                            </div>
                        </TaskCard>
                    </ClientCardWrapper>

                    <History>
                        <div className="first">
                            <h2>Task History</h2>
                            <button>View All</button>
                        </div>
                        <HistoryCard>
                            <HistoryCardItem>
                                <p>
                                    <span>#</span> Task
                                </p>
                                <p>Date</p>
                                <p>Status</p>
                                <p>Amount</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p>
                                    <span>1</span> Twitter Raider
                                </p>
                                <p>26/06/2023</p>
                                <p>Pending</p>
                                <p>500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p>
                                    <span>2</span> Collab Manager
                                </p>
                                <p>26/06/2023</p>
                                <p>Completed</p>
                                <p>500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p>
                                    <span>3</span> Twitter Raider
                                </p>
                                <p>26/06/2023</p>
                                <p>Completed</p>
                                <p>500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p>
                                    <span>4</span> Twitter Raider
                                </p>
                                <p>26/06/2023</p>
                                <p>Completed</p>
                                <p>500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p>
                                    <span>5</span> Twitter Raider
                                </p>
                                <p>26/06/2023</p>
                                <p>Completed</p>
                                <p>500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p>
                                    <span>6</span> Twitter Raider
                                </p>
                                <p>26/06/2023</p>
                                <p>Completed</p>
                                <p>500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p>
                                    <span>7</span> Chat Engagers
                                </p>
                                <p>26/06/2023</p>
                                <p>Completed</p>
                                <p>500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p>
                                    <span>8</span> Chat Engagers
                                </p>
                                <p>26/06/2023</p>
                                <p>Completed</p>
                                <p>500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p>
                                    <span>9</span> Chat Engagers
                                </p>
                                <p>26/06/2023</p>
                                <p>Completed</p>
                                <p>500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p>
                                    <span>10</span> Twitter Raider
                                </p>
                                <p>26/06/2023</p>
                                <p>Completed</p>
                                <p>500 BMT</p>
                            </HistoryCardItem>
                        </HistoryCard>
                    </History>
                </LeftContainer>

                <ActivitiesCard>
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
                                <p>20 BMT</p>
                                <p>26 June, 2023</p>
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
                                <p>20 BMT</p>
                                <p>26 June, 2023</p>
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
                                <p>20 BMT</p>
                                <p>26 June, 2023</p>
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
                                <p>20 BMT</p>
                                <p>26 June, 2023</p>
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
                                <p>20 BMT</p>
                                <p>26 June, 2023</p>
                            </div>
                        </ActivityCard>
                    </ActivityWrapper>
                </ActivitiesCard>
            </ClientGridContainer>
        </Container>
    );
};

export default Dashboard;
