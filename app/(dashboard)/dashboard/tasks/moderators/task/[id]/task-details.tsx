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
    TaskImageWrapper,
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
    const [startTask, setStartTask] = useState(false)

    return (
        // <Wrapper>
        //     <LeftColumn>
        //         <TaskWrapper style={{ marginTop: "60px" }}>
        //             <TaskBox heading={"Available Tasks"} tasksNub={user.moderatorService?.analytics.availableTask ?? 0} />
        //             <TaskBox heading={"Pending Tasks"} tasksNub={user.moderatorService?.analytics.pendingTask ?? 0} />
        //             <TaskBox heading={"Completed Tasks"} tasksNub={user.moderatorService?.analytics.completedTask ?? 0} />
        //         </TaskWrapper>
        //     </LeftColumn>

        //     <RightColumn style={{ marginTop: "10px" }}>
        //         <TaskSub>Task</TaskSub>
        //         <Details>
        //             <div>
        //                 <p>Task created at:</p>
        //                 <BoldP>{(new Date(task?.startedAt)).toUTCString()}</BoldP>
        //             </div>

        //             <div>
        //                 <p>Task to end before:</p>
        //                 <BoldP>{(new Date(task?.endedAt)).toUTCString()}</BoldP>
        //             </div>

        //             <div>
        //                 <p>Raid Link</p>
        //                 <Link href={formatLink(task?.raidInformation?.raidLink ?? "")} legacyBehavior>
        //                     <a style={{ color: "#f1c618", fontWeight: 500 }} target="_blank" href={formatLink(task?.raidInformation?.raidLink ?? "")} title={task?.raidInformation?.raidLink}>{(task?.raidInformation?.raidLink ?? "").substring(0, 20)}</a>
        //                 </Link>
        //             </div>

        //             <div>
        //                 <p>Action</p>
        //                 <BoldP>
        //                     {task?.raidInformation?.action }
        //                 </BoldP>
        //             </div>
        //         </Details>
        //         {
        //             task?.raidInformation?.campaignCaption && (
        //                 <Instructions>
        //                         <h4>Caption</h4>
        //                         <div className="instruction-grid">
        //                             <p>{task?.raidInformation?.campaignCaption}</p>
        //                         </div>
        //                 </Instructions>
        //             )
        //         }
        //         <div>
        //             <h3>Raids</h3>
        //             <Tasks>
        //                 {
        //                     raids.map((raid) => (
        //                         <Task key={raid.id}>
        //                             <div>
        //                                 <h3 style={{ marginBottom: "0px"}}>Raid</h3>
        //                                 <div className="reward">
        //                                     <p>
        //                                         <span style={{ marginRight: "10px" }}>Raid status: </span>{raid.taskStatus}
        //                                     </p>
        //                                 </div>
        //                             </div>
        //                             <div className="claim">
        //                                 <button onClick={() => router.push(`/dashboard/tasks/moderators/task/raid/${raid?.id}`)}>View</button>
        //                             </div>
        //                         </Task>
        //                     ))
        //                 }
        //             </Tasks>
        //         </div>
        //         <StartButton onClick={handleMarkAsComplete}>
        //             Mark as complete
        //         </StartButton>
        //     </RightColumn>
        // </Wrapper>
        <Wrapper>
        <LeftColumn>
            <TaskImageWrapper style={{ marginTop: "60px" }}>
                <img style={{height: "100%"}} src="/template.png" alt="" />
            </TaskImageWrapper>
            <div style={{ display: "flex", justifyContent: "space-between", gap:"10px" }}>
                    <StartButton>Prev</StartButton>
                    <StartButton>Next</StartButton>
            </div>
        </LeftColumn>

        <RightColumn style={{ marginTop: "10px" }}>
            <TaskSub>Twitter Raiders</TaskSub>
            {/* <Details>
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
            </Details> */}
             <Details>

                <div>
                    <p>Minimum Message Count:</p>
                    <BoldP>25</BoldP>
                </div>

                <div>
                    <p>Task Reward:</p>
                    <BoldP>500 BMT</BoldP>
                </div>

                <div>
                    <p>Social Media:</p>
                    <BoldP>Discord</BoldP>
                </div>
                <div>
                    <p>Social Media Link:</p>
                    <BoldP>http:/ihatejude.com</BoldP>
                </div>
                <div>
                    <p>Number of uploads:</p>
                    <BoldP>2</BoldP>
                </div>
                <div>
                    <p>Client’s Community Link:</p>
                    <BoldP>www.BMDAO.com</BoldP>
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
            {startTask || (
                <Instructions>
                    <h4>Task Instruction</h4>
                    <div className="instruction-grid">
                        <p>1.</p>
                        <p>
                            Join the Client&amp;s Discord Community using the
                            provided invite link.
                        </p>
                    </div>

                    <div className="instruction-grid">
                        <p>2.</p>
                        <p>
                            Engage in conversations and contribute at least
                            25 meaningful messages within the allocated
                            time.
                        </p>
                    </div>

                    <div className="instruction-grid">
                        <p>3.</p>
                        <p>
                            Ensure that your messages are relevant,
                            respectful, and add value to the community
                            discussions.
                        </p>
                    </div>

                    <div className="instruction-grid">
                        <p>4.</p>
                        <p>
                            Be active and responsive during the task
                            duration to encourage interactions and build
                            connections.
                        </p>
                    </div>

                    <div className="instruction-grid">
                        <p>5.</p>
                        <p>
                            Take screenshots as proof of completing the
                            tasks.
                        </p>
                    </div>
                </Instructions>
            )}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <StartButton>Reject</StartButton>
                    <StartButton>Accept</StartButton>
            </div>
        </RightColumn>
    </Wrapper>
    );
};

export default TaskDetails;
