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
                        <History>
                            <div className="first">
                                <h2>Task History</h2>
                                <button onClick={() => setShowModal(true)}>
                                    Upload Task
                                </button>
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
                        </History>
                    </HistoryContainer>
                </ModWrapper>
            </Container>
            {showModal && <UploadTask setShowModal={setShowModal} />}
        </>
    );
};

export default ClientModerators;
