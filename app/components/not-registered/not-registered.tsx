import {
    Button,
    ImageHolder,
    Text,
    Wrapper,
} from "@/app/components/not-registered/not-registered.styles";
import Image from "next/image";
import React, { useState } from "react";

import image from "../../../public/not-registered.png";
import { subscribeToServiceRaider } from "@/app/api/service";
import { setUser } from "@/lib/redux";
import { getUserProfile } from "@/app/api/auth";
import { useDispatch } from "react-redux";
import { Modal, ModalCard } from "@/app/styles/profile.style";

interface Props {
    taskSub: string;
}

const NotRegistered: React.FC<Props> = ({ taskSub }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const fetchProfile = () => {
        getUserProfile()
        .then((res) => {
          dispatch(setUser(res.data.data))
        })
        .catch((e) => {
          console.log(e)
        })
      }
    const handleSubscribeToService = () => {
        if(taskSub === "Twitter Raiders") {
            subscribeToServiceRaider({
                accountType: "raider"
            })
            .then(() => {
                fetchProfile();
            })
            .catch((e) => {
                console.log(e)
            })
        }
    }
    return (
        <Wrapper>
            <ImageHolder>
                <Image src={image} alt="" />
            </ImageHolder>
            <Text>
                Register as a <span>{taskSub}</span> to have access to this
                Dashboard
            </Text>
            <Button onClick={handleSubscribeToService}>Register</Button>
            {
                showModal &&
                (<Modal>
                    <ModalCard>
                        <p>You are about to subscribe for a {(taskSub === "Twitter Raiders") && "raid"} package for $10</p>
                        <div>
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                        <button onClick={handleSubscribeToService}>Confirm</button>
                        </div>
                    </ModalCard>
                </Modal>)
            }
        </Wrapper>
    );
};

export default NotRegistered;
