"use client";

import { getAllModeratorCompletedTask, getAllModeratorOngoingTask, getAllModeratorTask } from "@/app/api/moderator";
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

const ChatTaskDetailsNew = () => {
    const [tasks, setTasks] = useState<any>([]);
    const [raids, setRaids] = useState<any>([]);
    const [completedRaids, setCompletedRaids] = useState<any>([]);
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
    const fetchCompletedRaids = () => {
        getAllModeratorCompletedTask(20, 1)
        .then((res) => {
            setCompletedRaids(res.data.data.tasks);
        })
        .catch((res) => {
        })
    }
    useEffect(() => {
      fetchRaids();
      fetchTasks();
      fetchCompletedRaids();
    }, [])
    
    return (
        <Wrapper>
            <RightColumn>         
                <Tasks>
                {
                       currentTask === 2 && raids?.map((raid: any) => (
                            <Task>
                                <div>
                                    <h3>Moderator</h3>
                                    <p className="task-text">
                                        <span>Task action: </span>{raid?.raidInformation.action}
                                    </p>
                                </div>
                                <div className="claim">
                                    <button onClick={() => router.push(`/dashboard/tasks/moderators/task/${raid?.id}`)}>Moderate</button>
                                </div>
                            </Task>
                        ))
                    }
                    {
                       currentTask === 1 && tasks?.map((task: any) => (
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
                                    <p style={{ paddingTop: "10px" }}>{task?.completedRaids} raids completed</p>
                                </div>
                            </Task>
                        ))
                    }
                    {
                       currentTask === 3 && completedRaids?.map((task: any) => (
                            <Task>
                                <div>
                                    <h3>{task?.raidInformation?.action}</h3>
                                    <p className="task-text">
                                       {task?.raidInformation?.campaignCaption}
                                    </p>
                                    <div className="reward">
                                        <p>
                                            <span>Completed raids: </span>{task?.completedRaids}
                                        </p>
                                    </div>
                                </div>
                            </Task>
                        ))
                    }
                </Tasks>
            </RightColumn>
        </Wrapper>
    );
};

export default ChatTaskDetailsNew;
