import {
    LastItem,
    UploadContainer,
    Buttons,
    Wrapper,
} from "@/app/styles/upload-tasks.style";
import Image from "next/image";
import React, { useState } from "react";

import dropdon_icon from "../../../../../public/dropdown.svg";
import {
    BorderedButton,
    ColoredButton,
} from "@/app/styles/task-details.styles";

interface Props {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UploadTask: React.FC<Props> = ({ setShowModal }) => {
    const [taskType, setTaskType] = useState<string>("chat-engager");

    const changeTaskType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTaskType(e.target.value);
    };

    return (
        <Wrapper>
            <div>
                <UploadContainer>
                    <h3>Upload Task</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="task-type">
                                <h4>Task Type</h4>
                                <div className="select">
                                    <select
                                        name="task-type"
                                        id="task-type"
                                        onChange={(e) => changeTaskType(e)}
                                    >
                                        <option value="chat-engager">
                                            Chat Engager
                                        </option>
                                        <option value="collab-manager">
                                            Collab Manager
                                        </option>
                                        <option value="twitter-raider">
                                            Twitter Raider
                                        </option>
                                        <option value="moderator">
                                            Moderator
                                        </option>
                                    </select>
                                    <Image
                                        src={dropdon_icon}
                                        alt="Dropdown Icon"
                                    />
                                </div>
                            </label>

                            <label htmlFor="select-level">
                                <h4>Select Level</h4>
                                <div className="select">
                                    <select
                                        name="select-level"
                                        id="select-level"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </select>
                                    <Image
                                        src={dropdon_icon}
                                        alt="Dropdown Icon"
                                    />
                                </div>
                            </label>
                        </div>

                        {taskType === "chat-engager" && (
                            <>
                                <div>
                                    <label htmlFor="hours-of-engagement">
                                        <h4>Hours of Engagement per day</h4>

                                        <input
                                            id="hours-of-engagement"
                                            type="text"
                                            placeholder=""
                                        />
                                    </label>

                                    <label htmlFor="campaign-day">
                                        <h4>Campaign day</h4>

                                        <input
                                            id="campaign-day"
                                            type="text"
                                            placeholder=""
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="active-chatters">
                                        <h4>Number of Active Chatters</h4>
                                        <div className="select">
                                            <select
                                                name="active-chatters"
                                                id="active-chatters"
                                            >
                                                <option value="1">1</option>
                                                <option value="2">5</option>
                                                <option value="3">15</option>
                                                <option value="4">20</option>
                                            </select>
                                            <Image
                                                src={dropdon_icon}
                                                alt="Dropdown Icon"
                                            />
                                        </div>
                                    </label>

                                    <label htmlFor="social-media">
                                        <h4>Social Media</h4>
                                        <div className="select">
                                            <select
                                                name="social-media"
                                                id="social-media"
                                            >
                                                <option value="1">
                                                    Twitter
                                                </option>
                                                <option value="2">
                                                    Facebook
                                                </option>
                                                <option value="3">
                                                    Instagram
                                                </option>
                                                <option value="4">
                                                    WeChat
                                                </option>
                                            </select>
                                            <Image
                                                src={dropdon_icon}
                                                alt="Dropdown Icon"
                                            />
                                        </div>
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="community-link"
                                        className="full-width"
                                    >
                                        <h4>Community link</h4>

                                        <input
                                            id="community-link"
                                            type="text"
                                            placeholder=""
                                        />
                                    </label>
                                </div>
                            </>
                        )}

                        {taskType === "collab-manager" && (
                            <>
                                <div>
                                    <label htmlFor="no-of-collab">
                                        <h4>No of Collab per day</h4>

                                        <input
                                            id="no-of-collab"
                                            type="text"
                                            placeholder=""
                                        />
                                    </label>

                                    <label htmlFor="campaign-day">
                                        <h4>Campaign day</h4>

                                        <input
                                            id="campaign-day"
                                            type="text"
                                            placeholder=""
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="community-minimum"
                                        className="full-width"
                                    >
                                        <h4>Community minimum member</h4>

                                        <input
                                            id="community-link"
                                            type="text"
                                            placeholder=""
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="allow-collaboration">
                                        <h4>Allow Re-Collaboration</h4>
                                        <div className="select">
                                            <select
                                                name="allow-collaboration"
                                                id="allow-collaboration"
                                            >
                                                <option value="1">1</option>
                                                <option value="2">5</option>
                                                <option value="3">15</option>
                                                <option value="4">20</option>
                                            </select>
                                            <Image
                                                src={dropdon_icon}
                                                alt="Dropdown Icon"
                                            />
                                        </div>
                                    </label>

                                    <label htmlFor="social-media">
                                        <h4>Social Media</h4>
                                        <div className="select">
                                            <select
                                                name="social-media"
                                                id="social-media"
                                            >
                                                <option value="1">
                                                    Twitter
                                                </option>
                                                <option value="2">
                                                    Facebook
                                                </option>
                                                <option value="3">
                                                    Instagram
                                                </option>
                                                <option value="4">
                                                    WeChat
                                                </option>
                                            </select>
                                            <Image
                                                src={dropdon_icon}
                                                alt="Dropdown Icon"
                                            />
                                        </div>
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="community-link"
                                        className="full-width"
                                    >
                                        <h4>Community link</h4>

                                        <input
                                            id="community-link"
                                            type="text"
                                            placeholder=""
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="collab-template"
                                        className="full-width"
                                    >
                                        <h4>Your Collab Template</h4>

                                        <textarea
                                            name="collab-template"
                                            id="collab-template"
                                        />
                                    </label>
                                </div>
                            </>
                        )}

                        {taskType == "twitter-raider" && (
                            <>
                                <div className="actions">
                                    <h4>Actions</h4>
                                    <div>
                                        <label htmlFor="follow-account">
                                            <input
                                                type="checkbox"
                                                name=""
                                                value=""
                                                id="follow-account"
                                            />
                                            Follow Account
                                        </label>

                                        <label htmlFor="like-post">
                                            <input
                                                type="checkbox"
                                                name=""
                                                value=""
                                                id="like-post"
                                            />
                                            Like Post
                                        </label>

                                        <label htmlFor="retweet-post">
                                            <input
                                                type="checkbox"
                                                name=""
                                                value=""
                                                id="retweet-post"
                                            />
                                            Retweet Post
                                        </label>

                                        <label htmlFor="comment-on-post">
                                            <input
                                                type="checkbox"
                                                name=""
                                                value=""
                                                id="comment-on-post"
                                            />
                                            Comment on Post
                                        </label>

                                        <label htmlFor="create-tweet">
                                            <input
                                                type="checkbox"
                                                name=""
                                                value=""
                                                id="create-tweet"
                                            />
                                            Create Tweet
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className="full-width">
                                        <h4>No of Followers</h4>

                                        <div className="select">
                                            <select name="" id="">
                                                <option value="4">4</option>
                                                <option value="3">3</option>
                                                <option value="2">2</option>
                                                <option value="1">1</option>
                                            </select>
                                            <Image
                                                src={dropdon_icon}
                                                alt="Dropdown Icon"
                                            />
                                        </div>
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="" className="full-width">
                                        <h4>No of Tweets</h4>

                                        <div className="select">
                                            <select name="" id="">
                                                <option value="4">4</option>
                                                <option value="3">3</option>
                                                <option value="2">2</option>
                                                <option value="1">1</option>
                                            </select>
                                            <Image
                                                src={dropdon_icon}
                                                alt="Dropdown Icon"
                                            />
                                        </div>
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="" className="full-width">
                                        <h4>No of Likes</h4>

                                        <div className="select">
                                            <select name="" id="">
                                                <option value="4">4</option>
                                                <option value="3">3</option>
                                                <option value="2">2</option>
                                                <option value="1">1</option>
                                            </select>
                                            <Image
                                                src={dropdon_icon}
                                                alt="Dropdown Icon"
                                            />
                                        </div>
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="" className="full-width">
                                        <h4>No of Retweets</h4>

                                        <div className="select">
                                            <select name="" id="">
                                                <option value="4">4</option>
                                                <option value="3">3</option>
                                                <option value="2">2</option>
                                                <option value="1">1</option>
                                            </select>
                                            <Image
                                                src={dropdon_icon}
                                                alt="Dropdown Icon"
                                            />
                                        </div>
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="" className="full-width">
                                        <h4>No of Comments</h4>

                                        <div className="select">
                                            <select name="" id="">
                                                <option value="4">4</option>
                                                <option value="3">3</option>
                                                <option value="2">2</option>
                                                <option value="1">1</option>
                                            </select>
                                            <Image
                                                src={dropdon_icon}
                                                alt="Dropdown Icon"
                                            />
                                        </div>
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="" className="full-width">
                                        <h4>
                                            Upload the media you want to be
                                            posted
                                        </h4>
                                        <div className="input">
                                            <input
                                                id=""
                                                type="text"
                                                placeholder="Add URL"
                                            />

                                            <button type="submit">
                                                Upload
                                            </button>
                                        </div>
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="" className="full-width">
                                        <h4>Raid Link</h4>

                                        <input
                                            id=""
                                            type="text"
                                            placeholder=""
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="campaign-caption"
                                        className="full-width"
                                    >
                                        <h4>Enter Campaign Caption</h4>

                                        <textarea
                                            name="campaign-caption"
                                            id="campaign-caption"
                                        />
                                    </label>
                                </div>
                            </>
                        )}

                        {taskType === "moderator" && (
                            <>
                                <div>
                                    <label htmlFor="" className="full-width">
                                        <h4>Hours of Community Moderation</h4>

                                        <input
                                            id=""
                                            type="text"
                                            placeholder=""
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="" className="full-width">
                                        <h4>Campaign days</h4>

                                        <input
                                            id=""
                                            type="text"
                                            placeholder=""
                                        />
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="active-chatters">
                                        <h4>Number of Active Chatters</h4>
                                        <div className="select">
                                            <select
                                                name="active-chatters"
                                                id="active-chatters"
                                            >
                                                <option value="1">1</option>
                                                <option value="2">5</option>
                                                <option value="3">15</option>
                                                <option value="4">20</option>
                                            </select>
                                            <Image
                                                src={dropdon_icon}
                                                alt="Dropdown Icon"
                                            />
                                        </div>
                                    </label>

                                    <label htmlFor="social-media">
                                        <h4>Social Media</h4>
                                        <div className="select">
                                            <select
                                                name="social-media"
                                                id="social-media"
                                            >
                                                <option value="1">
                                                    Twitter
                                                </option>
                                                <option value="2">
                                                    Facebook
                                                </option>
                                                <option value="3">
                                                    Instagram
                                                </option>
                                                <option value="4">
                                                    WeChat
                                                </option>
                                            </select>
                                            <Image
                                                src={dropdon_icon}
                                                alt="Dropdown Icon"
                                            />
                                        </div>
                                    </label>
                                </div>

                                <div>
                                    <label
                                        htmlFor="community-link"
                                        className="full-width"
                                    >
                                        <h4>Community link</h4>

                                        <input
                                            id="community-link"
                                            type="text"
                                            placeholder=""
                                        />
                                    </label>
                                </div>
                            </>
                        )}
                    </form>

                    <LastItem>
                        <div>
                            <p>Service Cost</p>
                            <p className="right">10,000 BMT</p>
                        </div>
                        <div>
                            <p>Transaction Fee</p> <p className="right">2%</p>
                        </div>
                        <div>
                            <p>Total</p> <p className="right">10,200 BMT</p>
                        </div>
                    </LastItem>

                    <Buttons>
                        <BorderedButton onClick={() => setShowModal(false)}>
                            Cancel
                        </BorderedButton>
                        <ColoredButton>Pay</ColoredButton>
                    </Buttons>
                </UploadContainer>
            </div>
        </Wrapper>
    );
};

export default UploadTask;
