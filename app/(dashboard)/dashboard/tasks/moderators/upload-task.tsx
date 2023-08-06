import { UploadContainer, Wrapper } from "@/app/styles/upload-tasks.style";
import React, { useState } from "react";

const UploadTask = () => {
    const [taskType, setTaskType] = useState<string>("");
    console.log(taskType);

    const changeTaskType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTaskType(e.target.value);
    };

    return (
        <Wrapper>
            <UploadContainer>
                <h4>Upload Task</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="task-type">
                        Task Type
                        <select
                            name="task-type"
                            id="task-type"
                            onChange={(e) => changeTaskType(e)}
                        >
                            <option value="chat-engager">Chat Engager</option>
                            <option value="collab-manager">
                                Collab Manager
                            </option>
                            <option value="twitter-raider">
                                Twitter Raider
                            </option>
                            <option value="moderator">Moderator</option>
                        </select>
                    </label>
                </form>
            </UploadContainer>
        </Wrapper>
    );
};

export default UploadTask;
