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
} from "../../../../../styles/task-details.styles";
import TaskBox from "../../../../../components/taskbox/TaskBox";
import { getSingleTask, startRaidTask } from "@/app/api/task";
import { getUser, setLoading, useDispatch, useSelector } from "@/lib/redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getAllModeratorServices, getAllRaiderServices } from "@/app/api/service";
import { moderateTask } from "@/app/api/moderator";
import { formatLink } from "@/lib/utils";
import Link from "next/link";

interface IProps {
    id: string
}

const TaskDetails: React.FC<IProps> = ({ id }) => {
    const [services, setServices] = useState<any[]>([]);
    const [currentService, setCurrentService] = useState("");
    const [task, setTask] = useState<any>(null);
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    const router = useRouter();
    const handleStartTask = () => {
            if(!currentService) {
                toast.error("Please select a service to use for this task.", {
                    position: toast.POSITION.TOP_RIGHT
                });
                return;
            }
            
            dispatch(setLoading(true));
            moderateTask({
                taskId: id,
                serviceId: currentService,
            }).then((res) => {
                toast.success("Moderation started successfully", {
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
        getSingleTask(id)
        .then((res) => {
            setTask(res.data.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }
    const fetchModeratorServices = () => {
        getAllModeratorServices()
        .then((res) => {
          console.log(res.data.data.userServices)
          setServices(res.data.data.userServices.filter((s: any) => s.accountType === "moderators"));
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
      fetchModeratorServices();
    }, [])
    

    return (
        <Wrapper>
            <LeftColumn>
                <TaskWrapper style={{ top: "30px" }}>
                    <TaskBox heading={"Available Tasks"} tasksNub={user.moderatorService?.analytics.availableTask ?? 0} />
                    <TaskBox heading={"Pending Tasks"} tasksNub={user.moderatorService?.analytics.pendingTask ?? 0} />
                    <TaskBox heading={"Completed Tasks"} tasksNub={user.moderatorService?.analytics.completedTask ?? 0} />
                </TaskWrapper>
            </LeftColumn>

            <RightColumn style={{ marginTop: "10px" }}>
                <TaskSub>Moderators</TaskSub>
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
                    <h4>Select Service</h4>
                    <TextInput style={{ marginTop: "10px" }}>
                        <select
                            value={currentService}
                            onChange={(event) =>
                                setCurrentService(event.target.value)
                            }
                        >
                            <option value={""}>Select a service</option>
                            {
                                services.filter((s: any) => (s?.subscriptionStatus === "ACTIVE")).map((raid: any, i: number) => (
                                    <option key={i} value={raid.id}>Moderator Service {i + 1}</option>
                                ))
                            }
                        </select>
                    </TextInput>
                </div>
                <StartButton onClick={handleStartTask}>
                    Moderate Task
                </StartButton>
            </RightColumn>
        </Wrapper>
    );
};

export default TaskDetails;
