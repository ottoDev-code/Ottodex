"use client";

import React, { ChangeEvent, DragEvent, useEffect, useState } from "react";
import {
    Wrapper,
    LeftColumn,
    RightColumn,
    TaskSub,
    Details,
    BoldP,
    Instructions,
    StartButton,
    TextInput,
    TaskWrapper,
    Tasks,
    Task,
} from "../../../../../../styles/task-details.styles";
import TaskBox from "../../../../../../components/taskbox/TaskBox";
import { getSingleTask, startRaidTask } from "@/app/api/task";
import { getUser, setLoading, useDispatch, useSelector } from "@/lib/redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getAllModeratorServices, getAllModeratorTaskRaids, getAllRaiderServices } from "@/app/api/service";
import { getModeratorSingleTask, markTaskCompleted, moderateTask } from "@/app/api/moderator";
import { formatLink } from "@/lib/utils";
import Link from "next/link";

interface IProps {
    id: string
}

const TaskDetails: React.FC<IProps> = ({ id }) => {
    const [raids, setRaids] = useState<any[]>([]);
    const [currentService, setCurrentService] = useState("");
    const [task, setTask] = useState<any>(null);
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    const router = useRouter();
    const handleMarkAsComplete = () => {
            dispatch(setLoading(false));
            markTaskCompleted({
                taskId: id,
            }).then((res) => {
                toast.success("Task completed successfully", {
                    position: toast.POSITION.TOP_RIGHT
                });
                dispatch(setLoading(false));
                router.push("/dashboard/tasks/moderators")
            }).catch((e: any) => {
                toast.error(e?.response?.data.error[0].message, {
                  position: toast.POSITION.TOP_RIGHT
                });
                dispatch(setLoading(false));
            })
    }
    const fetchTask = () => {
        getModeratorSingleTask(id)
        .then((res) => {
            setTask(res.data.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }
    const fetchTaskRaids = () => {
        getAllModeratorTaskRaids(id)
        .then((res) => {
          setRaids(res.data.data.raids);
          dispatch(setLoading(false));
        }).catch((e: any) => {
          toast.error(e?.response?.data.error[0].message, {
            position: toast.POSITION.TOP_RIGHT
          });
          dispatch(setLoading(false));
        })
      }
    useEffect(() => {
      fetchTask();
      fetchTaskRaids();
    }, [])
    

    return (
        <Wrapper>
            <LeftColumn>
                <TaskWrapper style={{ marginTop: "60px" }}>
                    <TaskBox heading={"Available Tasks"} tasksNub={user.moderatorService?.analytics.availableTask ?? 0} />
                    <TaskBox heading={"Pending Tasks"} tasksNub={user.moderatorService?.analytics.pendingTask ?? 0} />
                    <TaskBox heading={"Completed Tasks"} tasksNub={user.moderatorService?.analytics.completedTask ?? 0} />
                </TaskWrapper>
            </LeftColumn>

            <RightColumn style={{ marginTop: "10px" }}>
                <TaskSub>Task</TaskSub>
                <Details>
                    <div>
                        <p>Task created at:</p>
                        <BoldP>{(new Date(task?.startedAt)).toUTCString()}</BoldP>
                    </div>

                    <div>
                        <p>Task to end before:</p>
                        <BoldP>{(new Date(task?.endedAt)).toUTCString()}</BoldP>
                    </div>

                    <div>
                        <p>Raid Link</p>
                        <Link href={formatLink(task?.raidInformation?.raidLink ?? "")} legacyBehavior>
                            <a style={{ color: "#f1c618", fontWeight: 500 }} target="_blank" href={formatLink(task?.raidInformation?.raidLink ?? "")} title={task?.raidInformation?.raidLink}>{(task?.raidInformation?.raidLink ?? "").substring(0, 20)}</a>
                        </Link>
                    </div>

                    <div>
                        <p>Action</p>
                        <BoldP>
                            {task?.raidInformation?.action }
                        </BoldP>
                    </div>
                </Details>
                {
                    task?.raidInformation?.campaignCaption && (
                        <Instructions>
                                <h4>Caption</h4>
                                <div className="instruction-grid">
                                    <p>{task?.raidInformation?.campaignCaption}</p>
                                </div>
                        </Instructions>
                    )
                }
                <div>
                    <h3>Raids</h3>
                    <Tasks>
                        {
                            raids.map((raid) => (
                                <Task key={raid.id}>
                                    <div>
                                        <h3 style={{ marginBottom: "0px"}}>Raid</h3>
                                        <div className="reward">
                                            <p>
                                                <span style={{ marginRight: "10px" }}>Raid status: </span>{raid.taskStatus}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="claim">
                                        <button onClick={() => router.push(`/dashboard/tasks/moderators/task/raid/${raid?.id}`)}>View</button>
                                    </div>
                                </Task>
                            ))
                        }
                    </Tasks>
                </div>
                <StartButton onClick={handleMarkAsComplete}>
                    Mark as complete
                </StartButton>
            </RightColumn>
        </Wrapper>
    );
};

export default TaskDetails;
