import React from 'react';
import './ceta.css'; // Import CSS for styling

// Import images for courses
import ai from './TechImages/ai.jpg';
import blockchain from './TechImages/blockchain.jpg';
import dataScience from './TechImages/datascience.jpg';
import cloud from './TechImages/cloud.jpg';
import security from './TechImages/security.jpg'
import drone from './TechImages/drone.jpg'
import iot from  './TechImages/iot.jpg'
import arvr from './TechImages/arvr.jpg'
import threeDPrinting from './TechImages/3dprinting.jpg'
import level from './TechImages/expert.svg'
import prImg1 from './TechImages/programImage1.jpeg'
import prImg2 from './TechImages/programImage2.jpg'
import prImg3 from './TechImages/programImage3.jpeg'
import prImg4 from './TechImages/programImage4.jpeg'
import prImg5 from './TechImages/programImage5.jpg'
import prImg6 from './TechImages/programImage6.jpeg'
import Footer from '../Footer/Footer';

const Ceta = () => {

    const programImages = [prImg1,prImg2,prImg4,prImg5,prImg3,prImg6]
  const courses = [
    {
      name: "Artificial Intelligence (AI) & Machine Learning",
      image: ai,
    },
    {
      name: "Blockchain & Distributed Ledger Technology (Web3, NFTs, Asset Tokenization)",
      image: blockchain,
    },
    {
      name: "Cybersecurity",
      image: security,
    },
    {
      name: "Cloud Computing",
      image: cloud,
    },
    {
      name: "Data Science",
      image: dataScience,
    },
    {
      name: "Robotics & Drones",
      image: drone,
    },
    {
      name: "Internet of Things (IoT) & Internet of Behavior (IoB)",
      image: iot,
    },
    {
      name: "Augmented Reality (AR), Virtual Reality (VR), Mixed Reality (MR) & Metaverse",
      image: arvr,
    },
    {
      name: "3D Printing",
      image: threeDPrinting,
    },
    
    
  ];

  return (
    <div className='ceta-container'>
      <div className='ceta-program-box'>
        <h1>CETA Program</h1>
        <p>Certified Emerging Technologies Analyst</p>
        <div className='program-btn'>
        <a href='https://edubuk.co.in/' target='_blank' rel='noreferrer'>
          <button>Explore More</button>
          </a>
        <a href='https://edubuk.co.in/#form-9' target='_blank' rel='noreferrer'>
          <button>Enroll Now</button>
          </a>
        </div>
        <p>
          Edubuk's CETA Program offers combined and standalone courses in the
          following highly in-demand Emerging Technologies:
        </p>
        <div className='courses-container'>
          {courses.map((course, index) => (
            <div
              key={index}
              className='course-card'
              style={{ backgroundImage: `url(${course.image})` }}
            >
              <div className='course-card-content'>
                <h2>{course.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='ceta-program-box'>
      <p>Our Comprehensive Certified Emerging Technologies Analyst (CETA) Program is carefully designed across three progressive levels:</p>
        <img src={level} alt='steps'></img>
        <iframe src="https://www.youtube.com/embed/9NVqhfgZBtE" title='Edubuk-Program'></iframe>
        <span id="video-desc">One of the key highlights of the CETA Certification is its accessibility to learners (age 15 years to 60 years+) from all academic backgrounds. You don't need any prior coding or computer science experience to participate and excel in this program. Our primary focus lies in empowering learners with no-code and low-code modules, enabling them to harness the power of emerging technologies without getting bogged down in complex programming. Our curriculum includes modules on no-code based groundbreaking generative AI applications such as ChatGPT (Text to Text, AI), MidJourney (Text to Image AI), Synthesia, and Wave.Video (Text to Video AI), WIX (Text to Website, AI).</span>
        <div className='program-images'>
        {
            programImages?.map((imgSrc,i)=>(
                <img src={imgSrc} key={i+1} alt='pr-img'></img>
            ))
        }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ceta;
