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
    ActivitiesCardRight,
    ActivitiesCardLeft,
    ClientTaskCard,
    ClientBalanceCard,
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
                        <ClientBalanceCard>
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
                        </ClientBalanceCard>
                        <ClientTaskCard>
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
                        </ClientTaskCard>
                    </ClientCardWrapper>

                    <ActivitiesCardLeft>
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
                    </ActivitiesCardLeft>

                    <History>
                        <div className="first">
                            <h2>Task History</h2>
                            <button>View All</button>
                        </div>
                        <HistoryCard>
                            <HistoryCardItem>
                                <p className="title">
                                    <span>#</span> Task
                                </p>
                                <p className="date">Date</p>
                                <p className="level">Status</p>
                                <p className="price">Amount</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p className="title">
                                    <span>1</span> Twitter Raider
                                </p>
                                <p className="date">26/06/2023</p>
                                <p className="level">Pending</p>
                                <p className="price">500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p className="title">
                                    <span>2</span> Collab Manager
                                </p>
                                <p className="date">26/06/2023</p>
                                <p className="level">Completed</p>
                                <p className="price">500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p className="title">
                                    <span>3</span> Twitter Raider
                                </p>
                                <p className="date">26/06/2023</p>
                                <p className="level">Completed</p>
                                <p className="price">500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p className="title">
                                    <span>4</span> Twitter Raider
                                </p>
                                <p className="date">26/06/2023</p>
                                <p className="level">Completed</p>
                                <p className="price">500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p className="title">
                                    <span>5</span> Twitter Raider
                                </p>
                                <p className="date">26/06/2023</p>
                                <p className="level">Completed</p>
                                <p className="price">500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p className="title">
                                    <span>6</span> Twitter Raider
                                </p>
                                <p className="date">26/06/2023</p>
                                <p className="level">Completed</p>
                                <p className="price">500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p className="title">
                                    <span>7</span> Chat Engagers
                                </p>
                                <p className="date">26/06/2023</p>
                                <p className="level">Completed</p>
                                <p className="price">500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p className="title">
                                    <span>8</span> Chat Engagers
                                </p>
                                <p className="date">26/06/2023</p>
                                <p className="level">Completed</p>
                                <p className="price">500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p className="title">
                                    <span>9</span> Chat Engagers
                                </p>
                                <p className="date">26/06/2023</p>
                                <p className="level">Completed</p>
                                <p className="price">500 BMT</p>
                            </HistoryCardItem>

                            <HistoryCardItem>
                                <p className="title">
                                    <span>10</span> Twitter Raider
                                </p>
                                <p className="date">26/06/2023</p>
                                <p className="level">Completed</p>
                                <p className="price">500 BMT</p>
                            </HistoryCardItem>
                        </HistoryCard>
                    </History>
                </LeftContainer>

                <ActivitiesCardRight>
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
                </ActivitiesCardRight>
            </ClientGridContainer>
        </Container>
    );
};

export default Dashboard;
