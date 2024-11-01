import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.png";
import "./home.css";
import feature1 from "../../assets/learners1.svg";
import feature2 from "../../assets/learners2.svg";
import feature3 from "../../assets/learners3.svg";
import feature4 from "../../assets/learners4.svg";
import feature5 from "../../assets/learners5.svg";
import feature6 from "../../assets/learners6.svg";
import award from "../../assets/award.png";
import colab from "../../assets/collab-big.png";
import mou1 from "../../assets/7_Galgotias University.png";
import mou2 from "../../assets/mou2.jpg";
import mou3 from "../../assets/mou3.jpg";
import mou4 from "../../assets/mou4.jpg";
import mou5 from "../../assets/mou5.jpg";
import mou6 from "../../assets/5_NPGC_Edubuk.jpeg";
import mou7 from "../../assets/mou7.jpg";
import mou8 from "../../assets/mou8.jpg";
import Footer from "../Footer/Footer";
import grouppic from "../../assets/grouppic.png";
import colabpic from "../../assets/collabsbig.svg";
import ieee from "../../assets/iee.png";
import nsdc from "../../assets/ndsc.jpg";
import est from "../../assets/est.png";
import acc1 from "../../assets/Accelerated Program/seedstars.png";
import acc2 from "../../assets/Accelerated Program/Tenity.jpeg";
import acc3 from "../../assets/Accelerated Program/awsEdStart.jpeg";
import acc4 from "../../assets/Accelerated Program/googleStartup.jpeg";
import acc5 from "../../assets/Accelerated Program/T-Aim.jpeg";
import sdg1 from "../../assets/sdg/sdg1.svg";
import sdg2 from "../../assets/sdg/sdg2.svg";
import sdg3 from "../../assets/sdg/sdg3.png";
import sdg4 from "../../assets/sdg/sdg4.svg";

const Home = () => {
  const images = [mou1, mou2, mou3, mou4, mou5, mou6, mou7, mou8];
  const features = [feature1, feature2, feature3, feature4, feature5, feature6];
  const accePrograms = [acc1, acc2, acc3, acc4, acc5];
  const sdgs = [sdg1, sdg2,sdg4, sdg3];
  const cardsData = [
    {
      id: 1,
      image: ieee,
      text: "Collaborated and MoU signed with World’s 4th Largest NACES (National Association of Credential Evaluation Services) Member: IEE (International Educational Evaluation) in the US. Transcript verification and transcript evaluation reports to be stored on the blockchain using Edubuk’s e-Seal application for study abroad applicant.",
      href:"https://www.einpresswire.com/article/692558064/international-education-evaluations-and-edubuk-partner-to-eliminate-fake-credentials-with-blockchain-verification"
    },
    {
      id: 2,
      image: nsdc,
      text: "Collaborated with NSDC (National Skills Development Corporation, Govt. of India) under Skill India Digital Accelerator Program along with HDFC Bank Grants Program and Facilitated by T-Hub. Selected as top 10 Startups across India basis our CETA Program and eSealing of Educational & Work-Experience Certificates on the Blockchain.",
      href:"https://www.linkedin.com/posts/apoorva-bajaj-iit-iim-cfa-edubuk_innovationecosystem-innovatewiththub-hdfcbank-activity-7193233564765728768--d0o?utm_source=share&utm_medium=member_android"
    },
    {
      id: 3,
      image: est,
      text: "Collaborated and MoU signed with EST Global and EST FAB giving for upskilling, reskilling and certifying learner's in Emerging Technologies including AI & Blockchain giving us access to thousands of students across the globe with ETS' vast Network of FAB (Fintech & Blockchain Association in the US and globally).",
      href:"https://www.linkedin.com/posts/dr-sindhu-bhaskar-55a84568_with-great-excitement-i-announce-the-coming-activity-7174682311538413569-uLA6?utm_source=share&utm_medium=member_android"
    },
  ];

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="home-image-container">
          <img src={hero} alt="hero" className="home-hero-image" />
        </div>
        <div className="home-content">
          <h1 className="home-introduction">INTRODUCING</h1>
          <h1 className="home-title">EDUBUK</h1>
          <div className="home-description">
            <p>
              Digitally Record & Verify Educational Transcripts and
              Work-Experience Certificates on Blockchain, making the Background
              Verification Process Significantly Cheaper & Faster.
            </p>
          </div>
          <div className="home-button-container">
            <Link to="/issuer" className="home-issue-button">
              Issue A Credential
            </Link>
            <Link to="/verifier" className="home-verify-button">
              Verify Certificates
            </Link>
          </div>
        </div>
      </div>
      <div className="edubuk-feature" id="learnerprofile">
        <h1>Learner's Edubuk Profile On The Blockchain</h1>
        <div className="box">
          {features.map((imgSrc, index) => (
            <span key={index} style={{ "--i": index + 1 }}>
              <img src={imgSrc} alt={`img-${index + 1}`} />
            </span>
          ))}
        </div>
      </div>
      <div className="edubuk-feature"  id="awardRecog">
        <h1>Awards & Recognitions</h1>
        <div className="award-image-container">
          <img src={colab} alt="award-img"></img>
        </div>
      </div>
      <div className="edubuk-feature">
        <img src={award} alt="award-img" id="award-img"></img>
        <h3>
          Winner, G20 Conference, Indonesia 2022: Best Startup, Jury's Choice
        </h3>
      </div>
      <div className="edubuk-feature" id="collabNSupport">
        <h1>Collaborators & Supporters</h1>
        <div className="collaborator-section">
          <img src={grouppic} alt="award-img"></img>
          <img src={colabpic} alt="award-img"></img>
        </div>
      </div>
      <div className="edubuk-feature">
        <h1>MoUs Signed with Universities</h1>
        <div className="box">
          {images.map((imgSrc, index) => (
            <span key={index} style={{ "--i": index + 1 }}>
              <img src={imgSrc} alt={`img-${index + 1}`} />
            </span>
          ))}
        </div>
      </div>
      <div className="edubuk-feature" id="accProgram">
        <h1>Completed Accelerator Programs</h1>
        <div className="acc-program">
          {accePrograms?.map((imgSrc, i) => (
            <img src={imgSrc} key={i + 1} alt="accProgram"></img>
          ))}
        </div>
      </div>
      <div className="edubuk-feature">
        <div className="card-grid-container">
          {cardsData.map((card) => (
            <div className="acc-card" key={card.id}>
              <img src={card.image} alt={card.title} className="card-image" />
              <h2 className="card-title">{card.title}</h2>
              <p className="card-text">{card.text}</p>
              <a href={card.href} target="_blank" rel="noreferrer" className="learn-more-btn">Learn More</a>
            </div>
          ))}
        </div>
      </div>
      <div className="edubuk-feature" id="unSDG">
        <h1>
          Edubuk is committed and aligned towards
        </h1>
        <h1 id='unsdg'>United Nation's Sustainable
        Development Goals (UN SDGs)</h1>
        <div className="sdg">
          {sdgs?.map((imgSrc, i) => (
            <img src={imgSrc} key={i + 1} alt="sdg"></img>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
