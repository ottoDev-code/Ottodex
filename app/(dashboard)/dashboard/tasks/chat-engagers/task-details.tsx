"use client";

import React from "react";
import {
    Wrapper,
    LeftColumn,
    RightColumn,
    TaskSub,
    Details,
    BoldP,
    Instructions,
    StartButton,
} from "../../../../styles/task-details.styles";
import TaskBox from "../../../../components/taskbox/TaskBox";

const TaskDetails: React.FC = () => {
    return (
        <Wrapper>
            <LeftColumn>
                <TaskBox heading={"Available Tasks"} tasksNub={1} />
                <TaskBox heading={"Pending Tasks"} tasksNub={5} />
                <TaskBox heading={"Completed Tasks"} tasksNub={50} />
            </LeftColumn>

            <RightColumn>
                <TaskSub>Chat Engagers</TaskSub>
                <Details>
                    <div>
                        <p>Time Left to start Task:</p>
                        <BoldP>01:12:01</BoldP>
                    </div>

                    <div>
                        <p>Time Left to start Task:</p>
                        <BoldP>00:30:00</BoldP>
                    </div>

                    <div>
                        <p>Minimum Message Count:</p>
                        <BoldP>25</BoldP>
                    </div>

                    <div>
                        <p>Task Reward:</p>
                        <BoldP>500 BMT</BoldP>
                    </div>

                    <div>
                        <p>Number of Screenshots to Upload:</p>
                        <BoldP>2</BoldP>
                    </div>

                    <div>
                        <p>Social Media:</p>
                        <BoldP>Discord</BoldP>
                    </div>

                    <div>
                        <p>Client’s Community Link:</p>
                        <BoldP>www.BMDAO.com</BoldP>
                    </div>
                </Details>

                <Instructions>
                    <h4>Task Instruction</h4>
                    <p>
                        1. Join the Client’s Discord Community using the
                        provided invite link.
                    </p>
                    <p>
                        2. Engage in conversations and contribute at least 25
                        meaningful messages within the allocated time.
                    </p>
                    <p>
                        3. Ensure that your messages are relevant, respectful,
                        and add value to the community discussions.
                    </p>
                    <p>
                        4. Be active and responsive during the task duration to
                        encourage interactions and build connections.
                    </p>
                    <p>5. Take screenshots as proof of completing the tasks.</p>
                </Instructions>

                <StartButton> Start Task</StartButton>
            </RightColumn>
        </Wrapper>
    );
};

export default TaskDetails;
