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
import React, { useEffect, useState } from "react";

import dropdown_icon from "../../../../public/dropdown.svg";
import { getUser, setUser, useDispatch, useSelector } from "@/lib/redux";
import { getUserProfile } from "@/app/api/auth";
import { getUserTransactionHistory } from "@/app/api/wallet";

const ClientWallet = () => {
    const [changeCurrency, setChangeCurrency] = useState<boolean>(false);
    const [history, setHistory] = useState<any>([]);
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    const fetchProfile = () => {
        getUserProfile()
        .then((res) => {
          dispatch(setUser(res.data.data));
        })
        .catch((e) => {
          console.log(e)
        })
      }
    const fetchHistory = () => {
        getUserTransactionHistory()
        .then((res) => {
          setHistory(res.data.data.transactions)
        })
        .catch((e) => {
          console.log(e)
        })
      }
    useEffect(() => {
      fetchHistory();
    }, [])
    return (
        <Container>
            <HeadingCard heading={"Wallet"} />
            <BalanceContainer>
                <MobileBalanceCard>
                    <div className="top">
                        <div>
                            <p>Wallet Balance</p>
                            <h1>{user?.wallet?.balance?.totalBalance}</h1>
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
                            <Amount>${user?.wallet?.balance?.walletBalance}</Amount>
                        </div>
                    </BalanceCard>

                    <BalanceCard>
                        <p>BMT</p>
                        <div>
                            <p>Available Balance</p>
                            <Amount>0 BMT</Amount>
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
                            <Amount>0 BMT</Amount>
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
                    <p className="bold">0 BMT</p>
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

                    {
                        history.map((val: any, i: number) => (
                            <div key={i}>
                                <p className="tittle">{val?.name}</p>
                                <p className="date">{(new Date(val?.createdAt)).toDateString()}</p>
                                <p className="hidden-mobile">{val?.status}</p>
                                <p
                                    className={`bmt ${
                                        changeCurrency ? "none" : "block"
                                    } `}
                                >
                                    ${val?.amount}
                                </p>
                                <p
                                    className={`usd ${
                                        changeCurrency ? "block" : "none"
                                    }`}
                                >
                                    ${val?.amount}
                                </p>
                            </div>
                        ))
                    }
                </HistoryDetails>
            </History>
        </Container>
    );
};

export default ClientWallet;
