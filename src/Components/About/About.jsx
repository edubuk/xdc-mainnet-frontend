import React from 'react'
import './about.css'
import team1 from '../../assets/Team/team1.svg'
import team2 from '../../assets/Team/team2.svg'
import team3 from '../../assets/Team/team3.png'
import advisor1 from '../../assets/Advisor/advisor1.jpg'
import advisor2 from '../../assets/Advisor/advisor2.jpg'
import advisor3 from '../../assets/Advisor/advisor3.jpg'
import { FaLinkedin, FaTelegram } from 'react-icons/fa6'
import { MdOutlineMail } from "react-icons/md";
import Footer from '../Footer/Footer'
const About = () => {
  
  const teamsData = [
    {
      id:1,
      imgSrc:team1,
      name:"Shivani Mehrotra Bajaj",
      tag: "Co-Founder & COO",
      about:"10+ years of Experience in the Education Industry as Professor, UGC NET Qualified University Topper, Top 30 young Indian in Education, National VP, Emerging Technologies Wing, WICCI Finalists: Women in AI APAC- 2024 award, Dean, European Digital University.",
      linkedInLink:"https://www.linkedin.com/in/shivani-mehrotra-edubuk/",
      teligramLink:"https://web.telegram.org/k/#@shivaanimehrotrabajaj",
      mailId:"apoorva@edubukeseal.org"
    },
    {
      id:2,
      imgSrc:team2,
      name:"Apoorva Bajaj, CFA",
      tag: "Co-Founder & CEO",
      about:"10+ years Exp. in Finance + Technology IIT, IIM, Gold-Medalist, ex-Goldman Sachs, DE Shaw, JP Morgan, Quant Hedge Funds, Trained in AI, Blockchain & Data Analytics by Google, IBM, Microsoft Experts Global Trainer in Gen AI, AI, ML, Blockchain & Emerging Technologies.",
      linkedInLink:"https://www.linkedin.com/in/apoorva-bajaj-iit-iim-cfa-edubuk/",
      teligramLink:"https://web.telegram.org/k/#@apoorvabajajcfa",
      mailId:"shivani@edubukeseal.org"
    },

    {
      id:3,
      imgSrc:team3,
      name:"Ajeet Ram Verma",
      tag: "Blockchain Tech Lead",
      about:"A passionate software engineer with hands-on experience in blockchain development, web3 technologies, and full-stack development. Gaining expertise in smart contracts, decentralized applications and staying updated with the latest tech trends.",
      linkedInLink:"https://www.linkedin.com/in/ajeet-ram-verma-953605244",
      teligramLink:"https://web.telegram.org/k/#@Ajeet_edubuk",
      mailId:"ajeet@edubukeseal.org"
    }
  ]
  const advisorData = [
    {
      id:1,
      imgSrc:advisor1,
      name:"Ish Anand",
      tag: "Serial Entrepreneur, Advisor in Startups, Global Citizen",
      linkedInLink:"https://www.linkedin.com/in/ishanand/",
    },
    {
      id:2,
      imgSrc:advisor2,
      name:"Dr. Narsing Rao, GS",
      tag: "Former VC at ICFAI University",
      linkedInLink:"https://www.linkedin.com/in/dr-narsing-rao-gs-a318735/",
    },

    {
      id:3,
      imgSrc:advisor3,
      name:"Dr. Sindhu Bhaskar",
      tag: "Co-Founder, EST Global,Forbes Council Member",
      linkedInLink:"https://www.linkedin.com/in/dr-sindhu-bhaskar-55a84568/",
    }
  ]
  return (
    <div className='about-container'>
    <div className='about-box'>
    <h1>About Edubuk</h1>
    <p>Our Platform bridges the gap between education and employment by providing emerging tech courses, verifiable academic & professional credentials and intelligent job matching leveraging AI and Blockchain Tech.</p>
    <p><strong>Vision:</strong> One-Stop Platform for global academic & professional credentials verification</p>
    <p><strong>Mission:</strong> To provide a secure platform for global verification of academic and professional credentials, thereby eliminating fraud and empowering universities, employers, students and professionals globally.</p>
    </div>
    <div className='about-box'>
    <h1>Meet our Team</h1>
    <div className='team-member' id='team-info'>
    {
      teamsData?.map((data,i)=>(
        <div className='profile-card' key={data.id}>
        <img src={data?.imgSrc} alt='team-member'></img>
        <h3>{data?.name}</h3>
        <h3>{data?.tag}</h3>
        <div className='social-icon'>
        <a href={data?.linkedInLink} target='_blank' rel='noreferrer'><FaLinkedin id='icon'/></a>
        <a href={data?.teligramLink} target='_blank' rel='noreferrer'><FaTelegram id='icon' /></a>
        <a href={`mailto:${data?.mailId}`} target='_blank' rel='noreferrer'><MdOutlineMail id='icon'/></a>
        </div>
        <p>{data?.about}</p>
        </div>
      ))
    }
    </div>
    </div>
    <div className='about-box'>
    <h1>Meet our Advisors</h1>
    <div className='team-member'>
    {
      advisorData?.map((data,i)=>(
        <div className='profile-card' key={data.id}>
        <img src={data?.imgSrc} alt='team-member'></img>
        <h3>{data?.name}</h3>
        <h4>{data?.tag}</h4>
        <div className='social-icon'>
        <a href={data?.linkedInLink} target='_blank' rel='noreferrer'><FaLinkedin id='icon' /></a>
        </div>
        </div>
      ))
    }
    </div>
    </div>
    <Footer />
    </div>
  )
}

export default About
