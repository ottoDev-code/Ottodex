"use client";

import {
    Heading,
    TaskContent,
    TasksText,
    Wrapper,
    ImageHolder,
} from "./taskbox.styles";

import React from "react";
import Image from "next/image";
import documentIcon from "../../../public/document-icon.png";

interface Props {
    heading: string;
    tasksNub: number;
}

const TaskBox: React.FC<Props> = ({ tasksNub, heading }) => {
    return (
        <Wrapper>
            <ImageHolder>
                <Image src={documentIcon} alt=" Document Icon" />
            </ImageHolder>
            <TaskContent>
                <Heading>{heading}</Heading>
                <TasksText>
                    <span>{tasksNub} </span>
                    Tasks
                </TasksText>
            </TaskContent>
        </Wrapper>
    );
};

export default TaskBox;
