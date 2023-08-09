"use client";

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
    MobileBalanceCard,
    MobileTotalCard,
} from "@/app/styles/client-wallet.style";
import { Container } from "@/app/styles/dashboard.style";
import Image from "next/image";
import React, { useState } from "react";

import dropdown_icon from "../../../../public/dropdown.svg";

const ClientWallet = () => {
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
                            <span>USD</span>
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

                    <BalanceCard>
                        <div className="button">
                            <p>BMT</p>
                            <button>
                                <span>BMT</span>
                                <ArrowDownIcon />
                            </button>
                        </div>
                        <div>
                            <p>Total Amount Spent</p>
                            <Amount>15,500 BMT</Amount>
                        </div>
                    </BalanceCard>
                </BalanceCards>

                <Buttons>
                    <button>
                        <WithdrawIcon /> Withdraw
                    </button>
                    <button>
                        <DepositIcon /> Deposit
                    </button>
                </Buttons>

                <MobileTotalCard>
                    <p>Total Amount Spent</p>
                    <p className="bold">15,500 BMT</p>
                </MobileTotalCard>
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

export default ClientWallet;
