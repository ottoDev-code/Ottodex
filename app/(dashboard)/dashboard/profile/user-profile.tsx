"use client"
import HeadingCard from '@/app/components/heading-card/heading-card'
import { InputContainer, InputWrapper } from '@/app/styles/auth.style'
import { Container } from '@/app/styles/dashboard.style'
import { Form, InputFlex, Modal, ModalCard, RoleCapsule, RoleWrapper, ServiceBtn, TaskNav, UserCard, UserDetails, UserImage, UserSection, UserWrap, Wrapper } from '@/app/styles/profile.style'
import Image from 'next/image'
import { Country, ICountry }  from 'country-state-city';
import React, { useEffect, useState } from 'react'
import { getUserProfile, updateProfile } from '@/app/api/auth'
import { toast } from 'react-toastify'
import { getUser, setLoading, setUser, useDispatch, useSelector } from '@/lib/redux'
import { Task, TaskNavItem, Tasks } from '@/app/styles/task-details.styles'
import { getAllModeratorServices, getAllRaiderServices, resubscribeToServiceModerator, resubscribeToServiceRaider, subscribeToServiceModerator, subscribeToServiceRaider } from '@/app/api/service'

const Profile = () => {
  const [countryList] = useState<ICountry[]>(Country.getAllCountries());
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const user = useSelector(getUser);
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [currentTask, setCurrentTask] = useState(1);
  const [services, setServices] = useState([]);
  const [modServices, setModServices] = useState([]);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [twitter, setTwitter] = useState("");
  const [youtube, setYoutube] = useState("");
  const [reddit, setReddit] = useState("");
  const [discord, setDiscord] = useState("");
  const [instagram, setInstagram] = useState("");
  const [thread, setThread] = useState("");
  const [telegram, setTelegram] = useState("");
  const [tiktok, setTiktok] = useState("");
  const fetchProfile = () => {
    getUserProfile()
    .then((res) => {
      const resData = res.data.data
      setEmail(resData.emailAddress);
      setName(resData.name);
      setCountry(resData.country);
      setPhone(resData.phoneNumber ?? "");
      dispatch(setUser(res.data.data));
      dispatch(setLoading(false));
    })
    .catch((e) => {
      console.log(e)
    })
  }
  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(!country || !phone || !name) {
      toast.error("Fill in required fields", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
    dispatch(setLoading(true));
    updateProfile({
      country,
      phoneNumber: phone,
      name,
    }).then((res) => {
      // dispatch(setUser(res.data.data))
      fetchProfile();
      dispatch(setLoading(false));
    }).catch((e: any) => {
      toast.error(e?.response?.data.error[0].message, {
        position: toast.POSITION.TOP_RIGHT
      });
      dispatch(setLoading(false));
    })
  }
  const fetchRaiderServices = () => {
    getAllRaiderServices()
    .then((res) => {
      setServices(res.data.data.userServices);
      dispatch(setLoading(false));
    }).catch((e: any) => {
      toast.error(e?.response?.data.error[0].message, {
        position: toast.POSITION.TOP_RIGHT
      });
      dispatch(setLoading(false));
    })
  }
  const fetchModeratorServices = () => {
    getAllModeratorServices()
    .then((res) => {
      setModServices(res.data.data.userServices);
      dispatch(setLoading(false));
    }).catch((e: any) => {
      toast.error(e?.response?.data.error[0].message, {
        position: toast.POSITION.TOP_RIGHT
      });
      dispatch(setLoading(false));
    })
  }
  const subscribeToService = () => {
        dispatch(setLoading(true));
        if(currentTask === 1) {
          subscribeToServiceRaider({
              accountType: "raider",
              handles: {
                twitter,
                reddit,
                tiktok,
                instagram,
                telegram,
                thread,
                discord,
                youtube,
            }
          })
          .then(() => {
              fetchRaiderServices();
              dispatch(setLoading(false));
              setShowModal(false);
              toast.success("Subscribed to new raider service successfully", {
                position: toast.POSITION.TOP_RIGHT
              });
          })
          .catch((e) => {
            toast.error(e?.response?.data.error[0].message, {
              position: toast.POSITION.TOP_RIGHT
            });
            dispatch(setLoading(false));
          })
        }
        if(currentTask === 2) {
          subscribeToServiceModerator({
              accountType: "moderator"
          })
          .then(() => {
              fetchModeratorServices();
              dispatch(setLoading(false));
              toast.success("Subscribed to new moderator service successfully", {
                position: toast.POSITION.TOP_RIGHT
              });
          })
          .catch((e) => {
            toast.error(e?.response?.data.error[0].message, {
              position: toast.POSITION.TOP_RIGHT
            });
            dispatch(setLoading(false));
          })
        }
  }
  const resubscribeToService = (id: string) => {
    if(currentTask === 1) {
      resubscribeToServiceRaider({
        userServiceId: id
      })
      .then(() => {
        fetchRaiderServices();
        dispatch(setLoading(false));
        toast.error("Service resubscribed successfully", {
          position: toast.POSITION.TOP_RIGHT
        });
      })
      .catch((e) => {
        toast.error(e?.response?.data.error[0].message, {
          position: toast.POSITION.TOP_RIGHT
        });
        dispatch(setLoading(false));
      })
    }
    if(currentTask === 2) {
      resubscribeToServiceModerator({
        userServiceId: id
      })
      .then(() => {
        fetchRaiderServices();
        dispatch(setLoading(false));
        toast.error("Service resubscribed successfully", {
          position: toast.POSITION.TOP_RIGHT
        });
      })
      .catch((e) => {
        toast.error(e?.response?.data.error[0].message, {
          position: toast.POSITION.TOP_RIGHT
        });
        dispatch(setLoading(false));
      })
    }
}
  useEffect(() => {
    fetchProfile();
    fetchRaiderServices();
    fetchModeratorServices();
  }, [])
  
  return (
    <Container>
      <HeadingCard heading={"Profile"} />
      <Wrapper>
        <Form>
          <h3>Personal Information</h3>
          <InputWrapper>
            <label>Full Name</label>
            <InputContainer>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter fullname"/>
            </InputContainer>
          </InputWrapper>
          <InputFlex>
            <InputWrapper>
              <label>Email Address</label>
              <InputContainer>
                <input type="email" value={email} placeholder="Enter your email address"/>
              </InputContainer>
            </InputWrapper>
            <InputWrapper>
              <label>Phone Number</label>
              <InputContainer>
                <input type="tel" value={phone}  onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number"/>
              </InputContainer>
            </InputWrapper>
          </InputFlex>
          <InputWrapper>
            <label>Country/Region</label>
            <InputContainer>
              <select value={country} onChange={(e) => setCountry(e.target.value)}>
                <option>Select your country/region</option>
                {
                  countryList.map(country => (
                    <option value={country.name}>{country.name}</option>
                  ))
                }
              </select>
            </InputContainer>
          </InputWrapper>
          <h3>Sevices</h3>
                <TaskNav>
                    <TaskNavItem isActive={currentTask === 1} onClick={() => setCurrentTask(1)}>Raider</TaskNavItem>
                    <TaskNavItem isActive={currentTask === 2} onClick={() => setCurrentTask(2)}>Moderator</TaskNavItem>
                    <TaskNavItem isActive={currentTask === 3} onClick={() => setCurrentTask(3)}>Chatter</TaskNavItem>
                </TaskNav>

                <Tasks style={{ marginBottom: "20px" }}>
                    {
                       currentTask === 1 && services.filter((s: any) => s.accountType === "raider").map((raid: any, i: number) => (
                            <Task style={{ alignItems: "center"}} key={i}>
                                <div>
                                    <h3 style={{ marginBottom: "0px"}}>Raider Service</h3>
                                    <p className="task-text">
                                        <span>Subscribed on: </span>{(new Date(raid?.createdAt)).toDateString()}
                                    </p>
                                    <div className="reward">
                                      <p>
                                          <span style={{ marginRight: "10px" }}>Subscription status: </span>{raid?.subscriptionStatus}
                                      </p>
                                    </div>
                                </div>
                                {
                                  (raid?.subscriptionStatus !== "ACTIVE") &&  (
                                    <div className="claim">
                                        <button onClick={() => resubscribeToService(raid?.id)}>Resubscribe</button>
                                    </div>
                                  )
                                }
                            </Task>
                        ))
                    }
                    {
                       currentTask === 2 && modServices.filter((s: any) => s.accountType === "moderators").map((raid: any, i: number) => (
                            <Task style={{ alignItems: "center"}} key={i}>
                                <div>
                                    <h3 style={{ marginBottom: "0px"}}>Moderator Service</h3>
                                    <p className="task-text">
                                        <span>Subscribed on: </span>{(new Date(raid?.createdAt)).toDateString()}
                                    </p>
                                    <div className="reward">
                                      <p>
                                          <span style={{ marginRight: "10px" }}>Subscription status: </span>{raid?.subscriptionStatus}
                                      </p>
                                    </div>
                                </div>
                                {
                                  (raid?.subscriptionStatus !== "ACTIVE") &&  (
                                    <div className="claim">
                                        <button onClick={() => resubscribeToService(raid?.id)}>Resubscribe</button>
                                    </div>
                                  )
                                }
                            </Task>
                        ))
                    }
                </Tasks>
                {currentTask === 1 && (<ServiceBtn onClick={() => setShowModal(true)}>New Raider Service</ServiceBtn>)}
                {currentTask === 2 && !modServices.length && (<ServiceBtn onClick={() => setShowModal(true)}>New Moderator Service</ServiceBtn>)}
                {currentTask === 3 && (<ServiceBtn>New Chatter Service</ServiceBtn>)}
        </Form>
        <UserSection>
          <UserWrap>
            <UserCard>
              <UserImage>
                <Image src={"/user-1.png"} alt="user"  objectFit="cover" objectPosition="center" layout="fill" />
              </UserImage>
              <UserDetails>
                <h3>{user?.name}</h3>
                <p>{user?.emailAddress}</p>
              </UserDetails>
            </UserCard>
            {/* <RoleWrapper>
              <RoleCapsule>Moderator</RoleCapsule>
              <RoleCapsule>Collab Manager</RoleCapsule>
              <RoleCapsule>Chat Engager</RoleCapsule>
              <RoleCapsule>Twitter Raider</RoleCapsule>
            </RoleWrapper> */}
            <button onClick={handleUpdate}>Update Profile</button>
          </UserWrap>
        </UserSection>
      </Wrapper>
      {
        showModal &&
        (<Modal>
          <ModalCard>
            <p>You are about to subscribe for a {(currentTask === 1) && "raid"}{(currentTask === 2) && "moderator"} package for $10</p>
            <div style={{ display: "flex", flexDirection: "column", margin: "20px 0", textAlign: "left" }}>
              <InputWrapper>
                <label>Twitter</label>
                <InputContainer>
                  <input type="text" value={twitter}  onChange={(e) => setTwitter(e.target.value)} placeholder="Enter your twitter handle"/>
                </InputContainer>
              </InputWrapper>
              <InputWrapper>
                <label>Instagram</label>
                <InputContainer>
                  <input type="text" value={instagram}  onChange={(e) => setInstagram(e.target.value)} placeholder="Enter your instagram handle"/>
                </InputContainer>
              </InputWrapper>
              <InputWrapper>
                <label>TikTok</label>
                <InputContainer>
                  <input type="text" value={tiktok}  onChange={(e) => setTiktok(e.target.value)} placeholder="Enter your tiktok handle"/>
                </InputContainer>
              </InputWrapper>
              <InputWrapper>
                <label>Reddit</label>
                <InputContainer>
                  <input type="text" value={reddit}  onChange={(e) => setReddit(e.target.value)} placeholder="Enter your reddit handle"/>
                </InputContainer>
              </InputWrapper>
              <InputWrapper>
                <label>Thread</label>
                <InputContainer>
                  <input type="text" value={thread}  onChange={(e) => setThread(e.target.value)} placeholder="Enter your thread handle"/>
                </InputContainer>
              </InputWrapper>
              <InputWrapper>
                <label>Telegram</label>
                <InputContainer>
                  <input type="text" value={telegram}  onChange={(e) => setTelegram(e.target.value)} placeholder="Enter your telegram handle"/>
                </InputContainer>
              </InputWrapper>
              <InputWrapper>
                <label>Discord</label>
                <InputContainer>
                  <input type="text" value={discord}  onChange={(e) => setDiscord(e.target.value)} placeholder="Enter your discord handle"/>
                </InputContainer>
              </InputWrapper>
              <InputWrapper>
                <label>Youtube</label>
                <InputContainer>
                  <input type="text" value={youtube}  onChange={(e) => setYoutube(e.target.value)} placeholder="Enter your youtube handle"/>
                </InputContainer>
              </InputWrapper>
            </div>
            <div className="btn-wrapper">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={subscribeToService}>Confirm</button>
            </div>
          </ModalCard>
        </Modal>)
      }
    </Container>
  )
}

export default Profile
