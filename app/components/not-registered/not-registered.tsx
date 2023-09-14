import {
    Button,
    ImageHolder,
    Text,
    Wrapper,
} from "@/app/components/not-registered/not-registered.styles";
import Image from "next/image";
import React from "react";

import image from "../../../public/not-registered.png";
import { subscribeToService } from "@/app/api/service";
import { setUser } from "@/lib/redux";
import { getUserProfile } from "@/app/api/auth";
import { useDispatch } from "react-redux";

interface Props {
    taskSub: string;
}

const NotRegistered: React.FC<Props> = ({ taskSub }) => {
    const dispatch = useDispatch();
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
            subscribeToService({
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
        </Wrapper>
    );
};

export default NotRegistered;
