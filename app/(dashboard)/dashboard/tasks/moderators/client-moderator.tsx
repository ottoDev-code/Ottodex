"use client";

import HeadingCard from "@/app/components/heading-card/heading-card";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    DocumentIcon,
} from "@/app/components/svg-icons";
import {
    History,
    HistoryCard,
    HistoryCardItem,
} from "@/app/styles/client-dashboard.style";
import {
    HistoryContainer,
    ModWrapper,
    Pagination,
    Tasks,
    TaskCard,
    ClientHistory,
} from "@/app/styles/client-moderators.style";
import { Container, StatsCard } from "@/app/styles/dashboard.style";
import React, { useState } from "react";
import UploadTask from "./upload-task";

const ClientModerators = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            <Container>
                <HeadingCard heading={"Tasks"} sub={"Moderators"} />

                <ModWrapper>
                    <Tasks>
                        <TaskCard>
                            <div className="top">
                                <h2>Moderator</h2>
                            </div>
                            <div className="bottom">
                                <StatsCard>
                                    <div>
                                        <DocumentIcon />
                                        <p>Uploaded</p>
                                    </div>
                                    <h2>232</h2>
                                </StatsCard>
                                <div className="divider"></div>
                                <StatsCard>
                                    <div>
                                        <DocumentIcon />
                                        <p>Completed</p>
                                    </div>
                                    <h2>230</h2>
                                </StatsCard>
                            </div>
                        </TaskCard>

                        <TaskCard>
                            <div className="top">
                                <h2>Collab Manager</h2>
                            </div>
                            <div className="bottom">
                                <StatsCard>
                                    <div>
                                        <DocumentIcon />
                                        <p>Uploaded</p>
                                    </div>
                                    <h2>232</h2>
                                </StatsCard>
                                <div className="divider"></div>
                                <StatsCard>
                                    <div>
                                        <DocumentIcon />
                                        <p>Completed</p>
                                    </div>
                                    <h2>230</h2>
                                </StatsCard>
                            </div>
                        </TaskCard>

                        <TaskCard>
                            <div className="top">
                                <h2>Twitter Raider</h2>
                            </div>
                            <div className="bottom">
                                <StatsCard>
                                    <div>
                                        <DocumentIcon />
                                        <p>Uploaded</p>
                                    </div>
                                    <h2>232</h2>
                                </StatsCard>
                                <div className="divider"></div>
                                <StatsCard>
                                    <div>
                                        <DocumentIcon />
                                        <p>Completed</p>
                                    </div>
                                    <h2>230</h2>
                                </StatsCard>
                            </div>
                        </TaskCard>

                        <TaskCard>
                            <div className="top">
                                <h2>Chat Engagers</h2>
                            </div>
                            <div className="bottom">
                                <StatsCard>
                                    <div>
                                        <DocumentIcon />
                                        <p>Uploaded</p>
                                    </div>
                                    <h2>232</h2>
                                </StatsCard>
                                <div className="divider"></div>
                                <StatsCard>
                                    <div>
                                        <DocumentIcon />
                                        <p>Completed</p>
                                    </div>
                                    <h2>230</h2>
                                </StatsCard>
                            </div>
                        </TaskCard>
                    </Tasks>
                    <HistoryContainer>
                        <ClientHistory>
                            <div className="first">
                                <h2>Task History</h2>
                                <button
                                    className="desktop"
                                    onClick={() => setShowModal(true)}
                                >
                                    Upload Task
                                </button>
                            </div>
                            <HistoryCard>
                                <HistoryCardItem>
                                    <p className="title">
                                        <span>#</span> Task
                                    </p>
                                    <p className="date">Date</p>
                                    <p className="status">Status</p>
                                    <p className="price">Amount</p>
                                </HistoryCardItem>

                                <HistoryCardItem>
                                    <p className="title">
                                        <span>1</span> Twitter Raider
                                    </p>
                                    <p className="date">26/06/2023</p>
                                    <p className="status">Pending</p>
                                    <p className="price">500 BMT</p>
                                </HistoryCardItem>

                                <HistoryCardItem>
                                    <p className="title">
                                        <span>2</span> Collab Manager
                                    </p>
                                    <p className="date">26/06/2023</p>
                                    <p className="status">Completed</p>
                                    <p className="price">500 BMT</p>
                                </HistoryCardItem>

                                <HistoryCardItem>
                                    <p className="title">
                                        <span>3</span> Twitter Raider
                                    </p>
                                    <p className="date">26/06/2023</p>
                                    <p className="status">Completed</p>
                                    <p className="price">500 BMT</p>
                                </HistoryCardItem>

                                <HistoryCardItem>
                                    <p className="title">
                                        <span>4</span> Twitter Raider
                                    </p>
                                    <p className="date">26/06/2023</p>
                                    <p className="status">Completed</p>
                                    <p className="price">500 BMT</p>
                                </HistoryCardItem>

                                <HistoryCardItem>
                                    <p className="title">
                                        <span>5</span> Twitter Raider
                                    </p>
                                    <p className="date">26/06/2023</p>
                                    <p className="status">Completed</p>
                                    <p className="price">500 BMT</p>
                                </HistoryCardItem>

                                <HistoryCardItem>
                                    <p className="title">
                                        <span>6</span> Twitter Raider
                                    </p>
                                    <p className="date">26/06/2023</p>
                                    <p className="status">Completed</p>
                                    <p className="price">500 BMT</p>
                                </HistoryCardItem>

                                <HistoryCardItem>
                                    <p className="title">
                                        <span>7</span> Chat Engagers
                                    </p>
                                    <p className="date">26/06/2023</p>
                                    <p className="status">Completed</p>
                                    <p className="price">500 BMT</p>
                                </HistoryCardItem>

                                <HistoryCardItem>
                                    <p className="title">
                                        <span>8</span> Chat Engagers
                                    </p>
                                    <p className="date">26/06/2023</p>
                                    <p className="status">Completed</p>
                                    <p className="price">500 BMT</p>
                                </HistoryCardItem>

                                <HistoryCardItem>
                                    <p className="title">
                                        <span>9</span> Chat Engagers
                                    </p>
                                    <p className="date">26/06/2023</p>
                                    <p className="status">Completed</p>
                                    <p className="price">500 BMT</p>
                                </HistoryCardItem>

                                <HistoryCardItem>
                                    <p className="title">
                                        <span>10</span> Twitter Raider
                                    </p>
                                    <p className="date">26/06/2023</p>
                                    <p className="status">Completed</p>
                                    <p className="price">500 BMT</p>
                                </HistoryCardItem>
                            </HistoryCard>

                            <Pagination>
                                <ArrowLeftIcon />
                                <div>
                                    <p>1</p>
                                    <p>2</p>
                                    <p className="active">3</p>
                                    <p>...</p>
                                    <p>12</p>
                                </div>
                                <ArrowRightIcon />
                            </Pagination>

                            <button
                                className="mobile"
                                onClick={() => setShowModal(true)}
                            >
                                Upload Task
                            </button>
                        </ClientHistory>
                    </HistoryContainer>
                </ModWrapper>
            </Container>
            {showModal && <UploadTask setShowModal={setShowModal} />}
        </>
    );
};

export default ClientModerators;
