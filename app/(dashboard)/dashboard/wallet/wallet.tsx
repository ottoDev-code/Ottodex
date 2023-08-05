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
} from "@/app/styles/client-wallet.style";
import { Container } from "@/app/styles/dashboard.style";
import React from "react";

const Wallet = () => {
    return (
        <Container>
            <HeadingCard heading={"Wallet"} />
            <BalanceContainer>
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
            </BalanceContainer>

            <History>
                <h3>Transaction History</h3>
                <HistoryDetails>
                    <div>
                        <p>Transaction</p>
                        <p>Date</p>
                        <p>Status</p>
                        <p>Amount in BMT</p>
                        <p>Amount in USD</p>
                    </div>

                    <div>
                        <p>Task Reward</p>
                        <p>26 June, 2023</p>
                        <p>Successful</p>
                        <p>500 BMT</p>
                        <p>$10</p>
                    </div>

                    <div>
                        <p>Withdrawal</p>
                        <p>26 June, 2023</p>
                        <p>Successful</p>
                        <p>10,000 BMT</p>
                        <p>$150</p>
                    </div>

                    <div>
                        <p>Task Reward</p>
                        <p>26 June, 2023</p>
                        <p>Successful</p>
                        <p>500 BMT</p>
                        <p>$10</p>
                    </div>

                    <div>
                        <p>Withdrawal</p>
                        <p>26 June, 2023</p>
                        <p>Failed</p>
                        <p>10,000 BMT</p>
                        <p>$150</p>
                    </div>

                    <div>
                        <p>Task Reward</p>
                        <p>26 June, 2023</p>
                        <p>Successful</p>
                        <p>500 BMT</p>
                        <p>$10</p>
                    </div>

                    <div>
                        <p>Task Reward</p>
                        <p>26 June, 2023</p>
                        <p>Successful</p>
                        <p>500 BMT</p>
                        <p>$10</p>
                    </div>

                    <div>
                        <p>Task Reward</p>
                        <p>26 June, 2023</p>
                        <p>Successful</p>
                        <p>500 BMT</p>
                        <p>$10</p>
                    </div>
                </HistoryDetails>
            </History>
        </Container>
    );
};

export default Wallet;
