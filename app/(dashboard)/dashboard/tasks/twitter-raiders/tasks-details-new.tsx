"use client";

import TaskBox from "@/app/components/taskbox/TaskBox";
import {
    LeftColumn,
    RightColumn,
    Task,
    TaskNav,
    TaskNavItem,
    TaskWrapper,
    Tasks,
    Wrapper,
} from "@/app/styles/task-details.styles";
import React from "react";

const TaskDetailsNew = () => {
    return (
        <Wrapper>
            <LeftColumn>
                <TaskWrapper>
                    <TaskBox heading={"Available Tasks"} tasksNub={1} />
                    <TaskBox heading={"Pending Tasks"} tasksNub={5} />
                    <TaskBox heading={"Completed Tasks"} tasksNub={50} />
                </TaskWrapper>
            </LeftColumn>

            <RightColumn>
                <TaskNav>
                    <TaskNavItem isActive={false}>Default Tasks</TaskNavItem>
                    <TaskNavItem isActive={true}>Major Tasks</TaskNavItem>
                    <TaskNavItem isActive={false}>Minor Tasks</TaskNavItem>
                </TaskNav>

                <Tasks>
                    <Task>
                        <div>
                            <h3>Name of Task</h3>
                            <p className="task-text">
                                Lorem ipsum dolor sit amet consectetur. Arcu
                                venenatis adipiscing suspendisse quis elementum
                                et faucibus neque.
                            </p>
                            <div className="reward">
                                <p>
                                    <span>Reward:</span>590 BMT
                                </p>
                            </div>
                        </div>

                        <div className="claim">
                            <button>Claim</button>
                            <p>10/1000 left</p>
                        </div>
                    </Task>

                    <Task>
                        <div>
                            <h3>Name of Task</h3>
                            <p className="task-text">
                                Lorem ipsum dolor sit amet consectetur. Arcu
                                venenatis adipiscing suspendisse quis elementum
                                et faucibus neque.
                            </p>
                            <div className="reward">
                                <p>
                                    <span>Reward:</span>590 BMT
                                </p>
                            </div>
                        </div>

                        <div className="claim">
                            <button>Claim</button>
                            <p>10/1000 left</p>
                        </div>
                    </Task>

                    <Task>
                        <div>
                            <h3>Name of Task</h3>
                            <p className="task-text">
                                Lorem ipsum dolor sit amet consectetur. Arcu
                                venenatis adipiscing suspendisse quis elementum
                                et faucibus neque.
                            </p>
                            <div className="reward">
                                <p>
                                    <span>Reward:</span>590 BMT
                                </p>
                            </div>
                        </div>

                        <div className="claim">
                            <button>Claim</button>
                            <p>10/1000 left</p>
                        </div>
                    </Task>

                    <Task>
                        <div>
                            <h3>Name of Task</h3>
                            <p className="task-text">
                                Lorem ipsum dolor sit amet consectetur. Arcu
                                venenatis adipiscing suspendisse quis elementum
                                et faucibus neque.
                            </p>
                            <div className="reward">
                                <p>
                                    <span>Reward:</span>590 BMT
                                </p>
                            </div>
                        </div>

                        <div className="claim">
                            <button>Claim</button>
                            <p>10/1000 left</p>
                        </div>
                    </Task>
                </Tasks>
            </RightColumn>
        </Wrapper>
    );
};

export default TaskDetailsNew;
