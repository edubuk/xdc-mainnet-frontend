import React from 'react'
import forbes from './MediaImages/forbes.png'
import et from './MediaImages/Economic.png'
import cnn from './MediaImages/cnn.png'
import inc from './MediaImages/inc42.png'
import yourStory from './MediaImages/yourstory.png'
import alexa from './MediaImages/alexa.png'
import ft from './MediaImages/ftimes.png'
import coinDCX from './MediaImages/coinDCX.png'
import seedStar from './MediaImages/seedstars.png'
import streetInsider from './MediaImages/SI.jpeg'
import birla from './MediaImages/birla.png'
import telangnaToday from './MediaImages/TelToday.png'
import hydStartUp from './MediaImages/hydStartUp.png'
import cnbc from './MediaImages/cnbc.png'
import taim from './MediaImages/TAIM.png'
import metaverse from './MediaImages/metaVerse.png'
import theHindu from './MediaImages/TheHindu.png'
import einpresswire from './MediaImages/einpresswire.svg'
import raiseMoney from './MediaImages/RaiseMoney.png'
import xdcAcc from './MediaImages/xdcAcc.jpeg'
import './media.css'
import Footer from '../Footer/Footer'
const MediaMention = () => {
    const mediaImages = [
        {
            imgSrc:forbes,
            link:"https://drive.google.com/file/d/1R1XwmSk-f08gatS0pcATIixO-ycrT6ZP/view",
        },
        {
            imgSrc:theHindu,
            link:"https://www.thehindu.com/news/cities/Hyderabad/award-for-t-aim-startups-at-g20-din/article65853769.ece"
        },
        {
            imgSrc:et,
            link:"https://government.economictimes.indiatimes.com/news/governance/t-aim-startups-win-awards-at-g20-digital-innovation-network-held-in-indonesia/94018890",
        },
        {
            imgSrc:cnn,
            link:"https://www.youtube.com/watch?v=cXttJZqkSfw&t=145s",
        },
        {
            imgSrc:cnbc,
            link:"https://www.linkedin.com/posts/edubuk-ai-driven-decentralized-skilling-ecosystem-on-blockchain_glad-to-update-that-edubuk-is-recognized-activity-7148561934357807105-M258/?utm_source=share&utm_medium=member_desktop",
         },
        {
            imgSrc:inc,
            link:"https://inc42.com/startups/30-startups-to-watch-the-startups-that-caught-our-eye-in-may-2022/",
        },
        {
            imgSrc:yourStory,
            link:"https://yourstory.com/2022/04/experts-reimagining-edtech",
        },
        {
            imgSrc:alexa,
            link:"https://alexablockchain-com.cdn.ampproject.org/c/s/alexablockchain.com/edubuk-concordium-secure-academic-credentials/?amp=1",
        },
        {
            imgSrc:ft,
            link:"https://www.linkedin.com/posts/edubuk-ai-driven-decentralized-skilling-ecosystem-on-blockchain_seedstars-ftxsdgchallenge-activity-6863546274097037312-TLic/?utm_source=share&utm_medium=member_desktop",
        },
        {
            imgSrc:coinDCX,
            link:"https://x.com/CoinDCX/status/1633444957691191297?s=20",
        },
        {
            imgSrc:seedStar,
            link:"https://x.com/Seedstars/status/1562736045912834049",
        },
        {
            imgSrc:streetInsider,
            link:"https://www.streetinsider.com/Press+Releases/G20+Digital+Innovation+Network+%28DIN%29%3A+Catalyst+for+Digital+Economy+Growth+in+Indonesia/20597605.html",
        },
        {
            imgSrc:birla,
            link:"https://www.birlatmtsteel.com/birla-young-indian-awards-2020/",
        },
        {
            imgSrc:telangnaToday,
            link:"https://telanganatoday.com/we-hub-western-digital-select-8-startups-for-accelerator",
        },
        {
            imgSrc:hydStartUp,
            link:"https://startuphyderabad.com/srix-innovation-x-1-0-preliminary-jury-round/",
        },
         {
            imgSrc:raiseMoney,
            link:"https://www.linkedin.com/posts/raise-money_pitchfriday-startupcompetition-innovation-activity-7033687319370940416-6w6u?utm_source=share&utm_medium=member_desktop"
         },
         {
            imgSrc:taim,
            link:"https://ai.telangana.gov.in/revv-up/cohort-1/"
         },
         {
            imgSrc:metaverse,
            link:"https://mpost.io/edubuk-partners-concordium-to-tackle-fake-credentials-with-blockchain-verification/"
         },
         {
            imgSrc:xdcAcc,
            link:"https://www.linkedin.com/posts/xinfinxdcnetwork_xdcaccelerator-xdcnetwork-blockchainstartups-activity-7228661977194102784-7CGh"
         },
         {
            imgSrc:einpresswire,
            link:"https://www.einpresswire.com/article/692558064/international-education-evaluations-and-edubuk-partner-to-eliminate-fake-credentials-with-blockchain-verification"
         },
        ]
  return (
    <>
    <div className='media-container'>
    <h1>Media Mentions</h1>
    <div className='media-image-box'>
        {
            mediaImages?.map((images,i)=>(
                <div className='media-image'>
                <img src={images.imgSrc} key={i+1} alt='pr-img'></img>
                <a href={images.link} target='_blank' rel='noreferrer'>Learn More</a>
                </div>
            ))
        }
    </div>
    </div>
    <Footer />
    </>
  )
}

export default MediaMention
