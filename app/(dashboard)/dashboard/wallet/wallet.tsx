"use client";

import chart from "../../../../public/chart.svg";

import HeadingCard from "@/app/components/heading-card/heading-card";
import {
    ArrowDownIcon,
    DepositIcon,
    WithdrawIcon,
} from "@/app/components/svg-icons";
import {
    BalanceCard,
    BalanceContainer,
    Amount,
    BalanceCards,
    Buttons,
    History,
    HistoryDetails,
    TotalCard,
    MobileBalanceCard,
    MobileTotalCard,
    WalletMobileTotalCard,
} from "@/app/styles/client-wallet.style";
import { Container } from "@/app/styles/dashboard.style";
import Image from "next/image";
import React, { useState } from "react";

import dropdown_icon from "../../../../public/dropdown.svg";

const Wallet = () => {
    const [changeCurrency, setChangeCurrency] = useState<boolean>(false);

    return (
        <Container>
            <HeadingCard heading={"Wallet"} />
            <BalanceContainer>
                <MobileBalanceCard>
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
                </MobileBalanceCard>

                <BalanceCards>
                    <BalanceCard>
                        <p>USD</p>
                        <div>
                            <p>Available Balance</p>
                            <Amount>$279.5</Amount>
                        </div>
                    </BalanceCard>

                    <BalanceCard>
                        <p>BMT</p>
                        <div>
                            <p>Available Balance</p>
                            <Amount>15,500 BMT</Amount>
                        </div>
                    </BalanceCard>

                    <TotalCard>
                        <div>
                            <div className="content">
                                <Image src={chart} alt="chart icon" />
                                Total Income
                            </div>

                            <div className="price">$2,789.28</div>
                        </div>

                        <div className="stroke"></div>

                        <div>
                            <div className="content">
                                <Image src={chart} alt="chart icon" />
                                Total Withdrawn
                            </div>

                            <div className="price">$2,510.76</div>
                        </div>
                    </TotalCard>
                </BalanceCards>

                <Buttons>
                    <button>
                        <WithdrawIcon /> Withdraw
                    </button>
                    <button>
                        <DepositIcon /> Deposit
                    </button>
                </Buttons>

                <WalletMobileTotalCard>
                    <div>
                        <div className="content">
                            <Image src={chart} alt="chart icon" />
                            Total Income
                        </div>

                        <div className="price">$2,789.28</div>
                    </div>

                    <div className="stroke"></div>

                    <div>
                        <div className="content">
                            <Image src={chart} alt="chart icon" />
                            Total Withdrawn
                        </div>

                        <div className="price">$2,510.76</div>
                    </div>
                </WalletMobileTotalCard>
            </BalanceContainer>

            <History>
                <div>
                    <h3>Transaction History</h3>
                    <button onClick={() => setChangeCurrency(!changeCurrency)}>
                        <p>{changeCurrency ? "USD" : "BMT"}</p>
                        <Image src={dropdown_icon} alt="Dropdown" />
                    </button>
                </div>
                <HistoryDetails>
                    <div>
                        <p className="tittle">Transaction</p>
                        <p className="date">Date</p>
                        <p className="hidden-mobile">Status</p>
                        <p
                            className={`bmt ${
                                changeCurrency ? "none" : "block"
                            } `}
                        >
                            Amount in BMT
                        </p>
                        <p
                            className={`usd ${
                                changeCurrency ? "block" : "none"
                            }`}
                        >
                            Amount in USD
                        </p>
                    </div>

                    <div>
                        <p className="tittle">Task Reward</p>
                        <p className="date">26 June, 2023</p>
                        <p className="hidden-mobile">Successful</p>
                        <p
                            className={`bmt ${
                                changeCurrency ? "none" : "block"
                            } `}
                        >
                            500 BMT
                        </p>
                        <p
                            className={`usd ${
                                changeCurrency ? "block" : "none"
                            }`}
                        >
                            $10
                        </p>
                    </div>

                    <div>
                        <p className="tittle">Withdrawal</p>
                        <p className="date">26 June, 2023</p>
                        <p className="hidden-mobile">Successful</p>
                        <p
                            className={`bmt ${
                                changeCurrency ? "none" : "block"
                            } `}
                        >
                            10,000 BMT
                        </p>
                        <p
                            className={`usd ${
                                changeCurrency ? "block" : "none"
                            }`}
                        >
                            $150
                        </p>
                    </div>

                    <div>
                        <p className="tittle">Task Reward</p>
                        <p className="date">26 June, 2023</p>
                        <p className="hidden-mobile">Successful</p>
                        <p
                            className={`bmt ${
                                changeCurrency ? "none" : "block"
                            } `}
                        >
                            500 BMT
                        </p>
                        <p
                            className={`usd ${
                                changeCurrency ? "block" : "none"
                            }`}
                        >
                            $10
                        </p>
                    </div>

                    <div>
                        <p className="tittle">Withdrawal</p>
                        <p className="date">26 June, 2023</p>
                        <p className="hidden-mobile">Failed</p>
                        <p
                            className={`bmt ${
                                changeCurrency ? "none" : "block"
                            } `}
                        >
                            10,000 BMT
                        </p>
                        <p
                            className={`usd ${
                                changeCurrency ? "block" : "none"
                            }`}
                        >
                            $150
                        </p>
                    </div>

                    <div>
                        <p className="tittle">Task Reward</p>
                        <p className="date">26 June, 2023</p>
                        <p className="hidden-mobile">Successful</p>
                        <p
                            className={`bmt ${
                                changeCurrency ? "none" : "block"
                            } `}
                        >
                            500 BMT
                        </p>
                        <p
                            className={`usd ${
                                changeCurrency ? "block" : "none"
                            }`}
                        >
                            $10
                        </p>
                    </div>

                    <div>
                        <p className="tittle">Task Reward</p>
                        <p className="date">26 June, 2023</p>
                        <p className="hidden-mobile">Successful</p>
                        <p
                            className={`bmt ${
                                changeCurrency ? "none" : "block"
                            } `}
                        >
                            500 BMT
                        </p>
                        <p
                            className={`usd ${
                                changeCurrency ? "block" : "none"
                            }`}
                        >
                            $10
                        </p>
                    </div>

                    <div>
                        <p className="tittle">Task Reward</p>
                        <p className="date">26 June, 2023</p>
                        <p className="hidden-mobile">Successful</p>
                        <p
                            className={`bmt ${
                                changeCurrency ? "none" : "block"
                            } `}
                        >
                            500 BMT
                        </p>
                        <p
                            className={`usd ${
                                changeCurrency ? "block" : "none"
                            }`}
                        >
                            $10
                        </p>
                    </div>
                </HistoryDetails>
            </History>
        </Container>
    );
};

export default Wallet;
