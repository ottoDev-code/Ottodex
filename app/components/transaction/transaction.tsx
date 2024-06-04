import {
    Button,
    ImageHolder,
    Text,
    Wrapper,
} from "@/app/components/transaction/transaction.styles";
import { ActivityCard, ActivityWrapper, BalanceCard, BottomWrapper, Card, CardWrapper, Container, CopyContainer, StatsCard, StatsContainer, StreakBox, StreakCard, TaskCard } from '@/app/styles/dashboard.style'
import Image from "next/image";
import React, { useState } from "react";

import image from "../../../public/not-registered.png";
import { subscribeToServiceModerator, subscribeToServiceRaider , subscribeToServiceChatter } from "@/app/api/service";
import { Modal, ModalCard } from "@/app/styles/profile.style";
import { InputContainer, InputWrapper } from "@/app/styles/auth.style";
import { toast } from 'react-toastify'
import { ArrowDownIcon, CopyIcon, DocumentIcon } from '@/app/components/svg-icons'
interface Props {
    transactionType: string;
    cancel : any
}

const Transaction: React.FC<Props> = ({ transactionType, cancel }) => {
    const [showModal, setShowModal] = useState(true);
    const [amount, setAmount] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const  handleCancel = () => {
       setAmount('')
       setWalletAddress('')
       cancel()
    }

    const handleLinkCopy = (content: string) => {
        navigator.clipboard.writeText(content);
        toast.success("Wallet Address copied to clipboard", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
   
    // const handleSubscribeToService = () => {
        
    //     if(taskSub === "Moderators") {
    //         subscribeToServiceModerator({
    //             accountType: "moderator"
    //         })
    //         .then(() => {
    //             update();
    //             setShowModal(false);
    //         })
    //         .catch((e) => {
    //             console.log(e)
    //         })
    //     }
    //     if(taskSub === "Chatters") {
    //       subscribeToServiceChatter({
    //           accountType: "chatter"
    //       })
    //       .then(() => {
    //           update();
    //           setShowModal(false);
    //       })
    //       .catch((e) => {
    //           console.log(e)
    //       })
    //   }
    // }
    return (
        <Wrapper>
            {
                transactionType == 'deposit' &&
                (<Modal>
                    <ModalCard>
                        <h3 style={{paddingBottom:'1rem'}}>Deposit</h3>
                        <p>Transfer the amount you will like to deposit to this address +0.01 Matic</p>
                        {
                          <div style={{ display: "flex", flexDirection: "column", margin: "20px 0", textAlign: "left" }}>
                            <InputWrapper>
                              <label>Wallet Address</label>
                              <CopyContainer>
                                    <div>
                                        <p onClick={() => handleLinkCopy(`0x5dfA86554d45E4f2d8a7676da85B24C4475f3Ec6`)}>0x5dfA86554d45E4f2d8a7676da85B24</p>
                                        <button onClick={() => handleLinkCopy(`0x5dfA86554d45E4f2d8a7676da85B24C4475f3Ec6`)}>
                                            <CopyIcon />
                                        </button>
                                    </div>
                                </CopyContainer>
                            </InputWrapper>
                            <InputWrapper>
                              <label>Network</label>
                              <CopyContainer>
                                    <div>
                                        <p >Polygon</p>
                                    </div>
                                </CopyContainer>
                            </InputWrapper>
                            <InputWrapper>
                              <label>Amount</label>
                              <InputContainer>
                                <input type="text" value={amount}  onChange={(e) => setAmount(e.target.value)} placeholder="500BMT"/>
                              </InputContainer>
                            </InputWrapper>
                          </div>
                        }
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <button style={{background:'white', border:'solid 1px'}} onClick={() => {handleCancel()}}>Cancel</button>
                          <button>Deposit</button>
                        </div>
                    </ModalCard>
                </Modal>)
            }
            {
                transactionType == 'withdraw' &&
                (<Modal>
                    <ModalCard>
                        <h3>Withdraw</h3>
                        {                      
                          <div style={{ display: "flex", flexDirection: "column", margin: "20px 0", textAlign: "left" }}>
                            <InputWrapper>
                              <label>Wallet Address</label>
                              <InputContainer>
                                <input type="text" value={walletAddress}  onChange={(e) => setWalletAddress(e.target.value)} placeholder="0x5dfA86554d45E4f2d8a7676da85B24C4475f3Ec6"/>
                              </InputContainer>
                            </InputWrapper>
                            <InputWrapper>
                              <label>Network</label>
                              <CopyContainer>
                                    <div>
                                        <p >Polygon</p>
                                    </div>
                                </CopyContainer>
                            </InputWrapper>
                            <InputWrapper>
                              <label>Amount</label>
                              <InputContainer>
                                <input type="text" value={amount}  onChange={(e) => setAmount(e.target.value)} placeholder="500BMT"/>
                              </InputContainer>
                            </InputWrapper>
                          </div>
                        }
                        <div style={{ display: "flex", justifyContent: "space-between"}}>
                          <button style={{background:'white', border:'solid 1px'}} onClick={() => {handleCancel()}}>Cancel</button>
                          <button>Withdraw</button>
                        </div>
                    </ModalCard>
                </Modal>)
            }
        </Wrapper>
    );
};

export default Transaction;
