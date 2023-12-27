"use client";

import { getAllModeratorOngoingTask, getAllModeratorTask } from "@/app/api/moderator";
import { getAllRaidTask, getAllRaids } from "@/app/api/task";
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
import { getUser, useSelector } from "@/lib/redux";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const TaskDetailsNew = () => {
    const [tasks, setTasks] = useState<any>([]);
    const [raids, setRaids] = useState<any>([]);
    const [currentTask, setCurrentTask] = useState(2);
    const router = useRouter();
    const user = useSelector(getUser);

    const fetchTasks = () => {
        getAllModeratorTask(20, 1)
        .then((res) => {
            setTasks(res.data.data.tasks);
        })
        .catch((res) => {

        })
    }
    const fetchRaids = () => {
        getAllModeratorOngoingTask(20, 1)
        .then((res) => {
            setRaids(res.data.data.tasks);
        })
        .catch((res) => {
        })
    }
    useEffect(() => {
      fetchRaids();
      fetchTasks();
    }, [])
    
    return (
        <Wrapper>
            <LeftColumn>
                <TaskWrapper>
                    <TaskBox heading={"Available Tasks"} tasksNub={user?.moderatorService?.analytics.availableTask ?? 0} />
                    <TaskBox heading={"Pending Tasks"} tasksNub={user?.moderatorService?.analytics.pendingTask ?? 0} />
                    <TaskBox heading={"Completed Tasks"} tasksNub={user?.moderatorService?.analytics.completedTask ?? 0} />
                </TaskWrapper>
            </LeftColumn>

            <RightColumn>
                <TaskNav>
                    <TaskNavItem isActive={currentTask === 1} onClick={() => setCurrentTask(1)}>Moderating</TaskNavItem>
                    <TaskNavItem isActive={currentTask === 2} onClick={() => setCurrentTask(2)}>Available</TaskNavItem>
                    <TaskNavItem isActive={currentTask === 3} onClick={() => setCurrentTask(3)}>Completed</TaskNavItem>
                </TaskNav>

                <Tasks>
                {
                       currentTask === 1 && raids?.map((raid: any) => (
                            <Task>
                                <div>
                                    <h3>Moderator</h3>
                                    <p className="task-text">
                                        <span>Task action: </span>{raid?.raidInformation.action}
                                    </p>
                                    <div className="reward">
                                        <p>
                                            <span>Completed raids: </span>{raid?.completedRaids}/{raid.totalRaids}
                                        </p>
                                    </div>
                                </div>
                                <div className="claim">
                                    <button onClick={() => router.push(`/dashboard/tasks/moderators/task/${raid?.id}`)}>View</button>
                                </div>
                            </Task>
                        ))
                    }
                    {
                       currentTask === 2 && tasks?.map((task: any) => (
                            <Task>
                                <div>
                                    <h3>{task?.raidInformation?.action}</h3>
                                    <p className="task-text">
                                       {task?.raidInformation?.campaignCaption}
                                    </p>
                                    <div className="reward">
                                        <p>
                                            <span>Raiders needed: </span>{task?.raidInformation?.amount}
                                        </p>
                                    </div>
                                </div>
        
                                <div className="claim">
                                    <button onClick={() => router.push(`/dashboard/tasks/moderators/${task?.id}`)}>Moderate</button>
                                    <p>{task?.completedRaids}/{task?.totalRaids} left</p>
                                </div>
                            </Task>
                        ))
                    }
                </Tasks>
            </RightColumn>
        </Wrapper>
    );
};

export default TaskDetailsNew;
