import React, { useContext, useState, useEffect } from 'react';
import { EdubukContexts } from '../../Context/EdubukContext';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose,MdOutlineCheckCircle } from "react-icons/md";
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../assets/EdubukLogo.png';
import WalletInfo from '../WalletInfo/WalletInfo';
import { connectWallet } from '../../Utils/apiFeature';

const Navbar = () => {
  const { openSidebar, setOpenSidebar, account,setAccount } = useContext(EdubukContexts);
  const [activeNav, setActiveNav] = useState("Home");
  const [showWalletInfo , setShowWalletInfo] = useState(false);
  const location = useLocation();

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const navData = [
    { name: "Home", path: "/" },
    { name: "About", path:"/about"},
    { name:"CETA", path:"/ceta"},
    { name: "Issuer", path: "/issuer" },
    { name: "Verifier", path: "/verifier" },
    { name:"Media",path:"/media-mention"},
    { name: "Holder", path: "/holder" },
    { name: "Finder", path: "/finder" },
    { name: "Admin", path: "/admin" },
  ];


  useEffect(() => {
    const currentPath = location.pathname;
    const activeRoute = navData.find((nav) => nav.path === currentPath);
    
    if (activeRoute) {
      setActiveNav(activeRoute.name);
    }
    //eslint-disable-next-line
  }, [location.pathname]); 

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const walletConnectHandler = async()=>{
    const connectedAccount = await connectWallet();
    setAccount(connectedAccount);
  }

  return (
    <>
      <div className='header-container'>
        <div className='nav-logo'>
          <img src={logo} alt='logo' />
          {windowDimensions?.width >= 768 ? (
            <nav>
              {navData.map((data, i) => (
                <Link
                  key={i}
                  to={data.path}
                  onClick={() => setActiveNav(data.name)}
                  className={activeNav === data.name ? "navActive" : ""}
                >
                  {data.name}
                </Link>
              ))}
            </nav>
          ) : !openSidebar ? (
            <GiHamburgerMenu className='menu-btn' onClick={() => setOpenSidebar(true)} />
          ) : (
            <MdClose className='menu-btn' onClick={() => setOpenSidebar(false)} />
          )}
        </div>
        {!account&&
        <button id="connect-btn" onClick={walletConnectHandler}>Connect Wallet</button>
        }
        {account&&
          <button id="connected-icon" onClick={()=>setShowWalletInfo(!showWalletInfo)}><MdOutlineCheckCircle id='icons'/> <span id='account-num'>{account?.substring(0, 6)}...{account?.substring(account?.length - 5)}</span></button>
        }
        {
          showWalletInfo&& <WalletInfo showWalletInfo = {showWalletInfo} setShowWalletInfo={setShowWalletInfo}/>
        }
      </div>
      <div>
      </div>
      {openSidebar && <Sidebar navData={navData} />}
    </>
  );
};

export default Navbar;
