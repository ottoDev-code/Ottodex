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
    TaskWrapper,
} from "../../../../../../../styles/task-details.styles";
import TaskBox from "../../../../../../../components/taskbox/TaskBox";
import { completeRaidTask, getSingleModeratorRaid, getSingleRaid, getSingleTask, startRaidTask } from "@/app/api/task";
import { getUser, setLoading, useDispatch, useSelector } from "@/lib/redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { acceptRaidTask, rejectRaidTask } from "@/app/api/moderator";
import { relative } from "path";
import Link from "next/link";
import { formatLink } from "@/lib/utils";

interface IProps {
    id: string
}

const TaskDetails: React.FC<IProps> = ({ id }) => {
    const [startTask, setStartTask] = useState<boolean>(false);
    const [uploadedProofs, setUploadedProofs] = useState<File[]>([]);
    const [url, setUrl] = useState<string>("");
    const [uploadedUrl, setUploadedUrl] = useState<string[]>([]);
    const [raid, setRaid] = useState<any>(null);
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    const router = useRouter();
    const [proof, setProof] = useState("");

    const addUrl = () => {
        if (url === "") {
            return;
        }
        setUploadedUrl([...uploadedUrl, url]);

        setUrl("");
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        console.log("Dropped");
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            setUploadedProofs([...uploadedProofs, file]);
        }
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setUploadedProofs([...uploadedProofs, file]);
        }
    };
    const handleAcceptRaid = () => {
            dispatch(setLoading(true));
            acceptRaidTask({
                raidId: raid?.id
            }).then((res) => {
                toast.success("Raid accepted successfully", {
                    position: toast.POSITION.TOP_RIGHT
                });
                dispatch(setLoading(false));
                router.push("/dashboard/tasks/moderators")
            }).catch((e: any) => {
                if(e?.response?.data?.error[0].message) { 
                    toast.error(e?.response?.data.error[0].message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    dispatch(setLoading(false));
                    return
                }
                if(e?.message) { 
                    toast.error(e.message, {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    dispatch(setLoading(false));
                    return
                }
                dispatch(setLoading(false));
                return
            })
    }
    const handleRejectRaid = () => {
        dispatch(setLoading(true));
        rejectRaidTask({
            raidId: raid?.id,
            serviceId: user.raiderService?._id,
            proofs: [proof]
        }).then((res) => {
            toast.success("Raid completed successfully", {
                position: toast.POSITION.TOP_RIGHT
            });
            dispatch(setLoading(false));
            router.push("/dashboard/tasks/moderators")
        }).catch((e: any) => {
            if(e?.response?.data?.error[0].message) { 
                toast.error(e?.response?.data.error[0].message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                dispatch(setLoading(false));
                return
            }
            if(e?.message) { 
                toast.error(e.message, {
                    position: toast.POSITION.TOP_RIGHT
                });
                dispatch(setLoading(false));
                return
            }
            dispatch(setLoading(false));
            return
        })
}
    const fetchRaid = () => {
        getSingleModeratorRaid(id)
        .then((res) => {
            setRaid(res.data.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }
    useEffect(() => {
      fetchRaid()
    }, [])
    

    return (
        <Wrapper>
            <LeftColumn>
                <TaskWrapper style={{ marginTop: "60px" }}>
                <TaskBox heading={"Available Tasks"} tasksNub={user?.raiderService?.analytics.availableTask ?? 0} />
                    <TaskBox heading={"Pending Tasks"} tasksNub={user?.raiderService?.analytics.pendingTask ?? 0} />
                    <TaskBox heading={"Completed Tasks"} tasksNub={user?.raiderService?.analytics.completedTask ?? 0} />
                </TaskWrapper>
            </LeftColumn>

            <RightColumn style={{ marginTop: "10px" }}>
                <TaskSub>Twitter Raiders</TaskSub>
                <Details>
                    <div>
                        <p>Task status:</p>
                        <BoldP>{raid?.taskStatus}</BoldP>
                    </div>
                    <div>
                        <p>Task created at:</p>
                        <BoldP>{(new Date(raid?.task?.startedAt)).toUTCString()}</BoldP>
                    </div>

                    <div>
                        <p>Task to end before:</p>
                        <BoldP>{(new Date(raid?.task?.endedAt)).toUTCString()}</BoldP>
                    </div>

                    <div>
                        <p>Raid Link</p>
                        <Link href={formatLink(raid?.task?.raidInformation?.raidLink ?? "")} legacyBehavior>
                            <a style={{ color: "#f1c618", fontWeight: 500 }} target="_blank" href={formatLink(raid?.task?.raidInformation?.raidLink ?? "")} title={raid?.task?.raidInformation?.raidLink}>{(raid?.task?.raidInformation?.raidLink ?? "").substring(0, 20)}</a>
                        </Link>
                    </div>
                    <div>
                        <p>Action</p>
                        <BoldP>
                            {
                                raid?.task?.raidInformation?.action
                            }
                        </BoldP>
                    </div>
                </Details>
                <Instructions>
                    <h4>Social Handles</h4>
                    <div style={{ display: "flex", flexWrap: "wrap", columnGap: "20px", rowGap: "10px" }}>
                        
                        { raid?.service?.handles.twitter && (
                            <Link href={`https://twitter.com/${raid?.service?.handles.twitter}`} legacyBehavior>
                                <a style={{ color: "#f1c618", fontWeight: 500 }} target="_blank" title={`@${raid?.service?.handles.twitter}`}>Twitter: @{ raid?.service?.handles.twitter}</a>
                            </Link>
                        )}
                        { raid?.service?.handles.discord && (
                            <Link href={`https://discord.com/${raid?.service?.handles.discord}`} legacyBehavior>
                                <a style={{ color: "#f1c618", fontWeight: 500 }} target="_blank" title={`@${raid?.service?.handles.discord}`}>Discord: @{ raid?.service?.handles.discord}</a>
                            </Link>
                        )}
                        { raid?.service?.handles.youtube && (
                            <Link href={`https://youtube.com/${raid?.service?.handles.youtube}`} legacyBehavior>
                                <a style={{ color: "#f1c618", fontWeight: 500 }} target="_blank" title={`@${raid?.service?.handles.youtube}`}>Youtube: @{ raid?.service?.handles.youtube}</a>
                            </Link>
                        )}
                        { raid?.service?.handles.instagram && (
                            <Link href={`https://instagram.com/${raid?.service?.handles.instagram}`} legacyBehavior>
                                <a style={{ color: "#f1c618", fontWeight: 500 }} target="_blank" title={`@${raid?.service?.handles.instagram}`}>Instagram: @{ raid?.service?.handles.instagram}</a>
                            </Link>
                        )}
                        { raid?.service?.handles.thread && (
                            <Link href={`https://thread.com/${raid?.service?.handles.thread}`} legacyBehavior>
                                <a style={{ color: "#f1c618", fontWeight: 500 }} target="_blank" title={`@${raid?.service?.handles.thread}`}>Thread: @{raid?.service?.handles.thread}</a>
                            </Link>
                        )}
                        { raid?.service?.handles.telegram && (
                            <Link href={`https://telegram.com/${raid?.service?.handles.telegram}`} legacyBehavior>
                                <a style={{ color: "#f1c618", fontWeight: 500 }} target="_blank" title={`@${raid?.service?.handles.telegram}`}>Telegram: @{raid?.service?.handles.telegram}</a>
                            </Link>
                        )}
                        { raid?.service?.handles.reddit && (
                            <Link href={`https://reddit.com/u/${raid?.service?.handles.reddit}`} legacyBehavior>
                                <a style={{ color: "#f1c618", fontWeight: 500 }} target="_blank" title={`@${raid?.service?.handles.reddit}`}>Reddit: @{raid?.service?.handles.reddit}</a>
                            </Link>
                        )}
                        { raid?.service?.handles.tiktok && (
                            <Link href={`https://tiktok.com/${raid?.service?.handles.tiktok}`} legacyBehavior>
                                <a style={{ color: "#f1c618", fontWeight: 500 }} target="_blank" title={`@${raid?.service?.handles.tiktok}`}>TikTok: @{raid?.service?.handles.tiktok}</a>
                            </Link>
                        )}
                    </div>
                </Instructions>
                {
                    raid?.task?.raidInformation?.campaignCaption && (
                        <Instructions>
                                <h4>Caption</h4>
                                <div className="instruction-grid">
                                    <p>{raid?.task?.raidInformation?.campaignCaption}</p>
                                </div>
                        </Instructions>
                    )
                }
                <div>
                    {raid?.proofs.length ? <h4>Proofs</h4> : null}
                    {
                        (raid?.proofs.length > 0) && (
                            raid.proofs.map((proof: string, i: number) => (
                                <div style={{ position: "relative", height: "350px", width: "350px", margin: "15px auto" }}>
                                    <Image src={proof} alt="proof" key={i} fill={true} style={{ objectFit: "contain", objectPosition: "center", borderRadius: "10px" }} />
                                </div>
                            ))
                        ) 
                    }
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <StartButton onClick={handleRejectRaid}>Reject</StartButton>
                    <StartButton onClick={handleAcceptRaid}>Accept</StartButton>
                </div>
            </RightColumn>
        </Wrapper>
    );
};

export default TaskDetails;
