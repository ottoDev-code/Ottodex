import { CourseLeft, CourseRight, CourseWrapper, ProgressWrapper } from '@/app/styles/academy.style'
import Image from 'next/image'
import React from 'react'

const CollabManagers = () => {
  return (
    <CourseWrapper>
    <CourseLeft>
        <h2>Introduction to Course</h2>
        <p>We are decentralized autonomous organization that provides a range of services to help you build, grow and promote your crypto and NFT project. Whether you need Collab Managers, Chat Engagers, Moderators or Twitter Raiders, we have the expertise and experience to revolutionize your community engagement. We are decentralized autonomous organization that provides a range of services to help you build, grow and promote your crypto and NFT project. Whether you need Collab Managers, Chat Engagers, Moderators or Twitter Raiders, we have the expertise and experience to revolutionize your community engagement. We are decentralized autonomous organization that provides a range of services to help you build, grow and promote your crypto and NFT project. Whether you need Collab Managers, </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Ades3pQbeh8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className='control'>
            <button><Image src="/expand-left.svg" alt={"arrow"} height={24} width={24} /><span>Previous</span></button>
            <button><span>Next</span><Image src="/expand-right.svg" alt={"arrow"}  height={24} width={24} /></button>
        </div>
    </CourseLeft>
    <CourseRight>
        <h2>Course Overview</h2>
        <p>Each level of the referral program will offer different reward percentages for referral earnings. When a new member signs up using the referral link or code, they will be associated with the referring member and placed in the corresponding level of hte referral program.</p>
        <div className='dash'></div>
        <h2>Curriculum</h2>
        <ProgressWrapper>
            <div><p>Introduction to Course</p><Image src="/complete.svg" alt={"arrow"}  height={24} width={24} /></div>
            <div><p>Introduction to Course</p><Image src="/complete.svg" alt={"arrow"}  height={24} width={24} /></div>
            <div><p>Introduction to Course</p><Image src="/complete.svg" alt={"arrow"}  height={24} width={24} /></div>
            <div><p>Introduction to Course</p><Image src="/complete.svg" alt={"arrow"}  height={24} width={24} /></div>
            <div><p>Introduction to Course</p><Image src="/complete.svg" alt={"arrow"}  height={24} width={24} /></div>
            <div><p>Introduction to Course</p><Image src="/complete.svg" alt={"arrow"}  height={24} width={24} /></div>
            <div><p>Introduction to Course</p><Image src="/incomplete.svg" alt={"arrow"}  height={24} width={24} /></div>
            <div><p>Introduction to Course</p><Image src="/incomplete.svg" alt={"arrow"}  height={24} width={24} /></div>
            <div><p>Introduction to Course</p><Image src="/incomplete.svg" alt={"arrow"}  height={24} width={24} /></div>
            <div><p>Introduction to Course</p><Image src="/incomplete.svg" alt={"arrow"}  height={24} width={24} /></div>
            <div><p>Introduction to Course</p><Image src="/incomplete.svg" alt={"arrow"}  height={24} width={24} /></div>
        </ProgressWrapper>
    </CourseRight>
</CourseWrapper>
  )
}

export default CollabManagers