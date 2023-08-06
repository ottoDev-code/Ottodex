import {
    Button,
    ImageHolder,
    Text,
    Wrapper,
} from "@/app/components/not-registered/not-registered.styles";
import Image from "next/image";
import React from "react";

import image from "../../../public/not-registered.png";

interface Props {
    taskSub: string;
}

const NotRegistered: React.FC<Props> = ({ taskSub }) => {
    return (
        <Wrapper>
            <ImageHolder>
                <Image src={image} alt="" />
            </ImageHolder>
            <Text>
                Register as a <span>{taskSub}</span> to have access to this
                Dashboard
            </Text>
            <Button>Register</Button>
        </Wrapper>
    );
};

export default NotRegistered;
