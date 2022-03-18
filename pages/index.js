import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.ico';
import Dashboard from '../components/dashboard'
import { AiOutlineDashboard } from "react-icons/ai";
import { MdTrendingUp } from "react-icons/md";
import { MdOutlineConstruction } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { IoIosFolder } from "react-icons/io";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { BiArrowFromRight } from "react-icons/bi";
import { BiArrowFromLeft } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";
import picture1 from '../public/profile-pic-01.png'

const navItems = [
    {
      label: 'Dashboard',
      icon: MdTrendingUp,
    },
    {
      label: 'Analytics',
      icon: IoIosStats,
    },
    {
      label: 'Project',
      icon: IoIosFolder,
    },
    {
      label: 'Tracking',
      icon: MdOutlineDirectionsBike,
    },
    {
      label: 'History',
      icon: AiOutlineDashboard,
    },
    {
      label: 'Settings',
      icon:  MdOutlineConstruction
    }
  ];

function Main() {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(true);
    const [ activeNavIndex, setActiveNavIndex ] = useState(0);

    const activeNav = navItems[activeNavIndex].label

    const NavItem = ({ navItem, navIndex }) => {
        const classes = `
          px-2 sm:px-6 justify-center sm:justify-start py-3 rounded-full flex cursor-pointer font-semibold
          ${activeNavIndex === navIndex ? 
            'bg-gradient text-gray-100 shadow-lg' :
            'text-gray-600 hover:text-blue-500 transform hover:translate-x-1 transition ease-in-out duration-100'
        }`;

        return (
          <div onClick={() => setActiveNavIndex(navIndex)} className={classes}>
            <div className="flex items-center">
              <div className={`${isSidebarOpen ? 'mr-4' : 'mr-0'}`}>
                  <navItem.icon />
              </div>
              <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                {navItem.label}
              </span>
            </div>
          </div>
        );
    };

    const NavItemContainer = ({ children }) => (
        <div>{children}</div>
    );

    return (
        <div className="bg-gray-200 w-full h-[140vh] grid place-items-center p-12">
            <div className="bg-white w-4/5 h-full rounded-2xl flex"> 

                {/* Sidebar */}
                <div 
                    className={
                        `p-8 bg-gray-100 h-full rounded-l-2xl transition-all duration-200 ease-in-out
                        ${isSidebarOpen ? 'w-[20vw]' : 'w-[8vw]'} `
                    }
                >
                    <div>
                        <div className='flex justify-between items-center'>
                            <span className='flex space-x-2 items-center'>
                                <Image src={logo} alt='logo' className='text-xs w-2' width={36} height={36} />
                                <h1 className='text-4xl font-bold  text-black text-opacity-70'> PJ </h1>
                            </span>
                            <span onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`${isSidebarOpen ? 'flex justify-center items-center hover:bg-gray-200 rounded-[100%] px-3 py-3.5 text-2xl cursor-pointer' : 'hidden'}`}> 
                                <BiArrowFromRight />
                            </span>
                        </div>
                        <div onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`${!isSidebarOpen ? 'flex justify-center items-center hover:bg-gray-200 rounded-[100%] px-2 py-3 text-2xl cursor-pointer mt-8 ml-2' : 'hidden'}`}> 
                            <BiArrowFromLeft />
                        </div>
                        <div className="mt-10">
                            {navItems.map((navItem, index) => (
                                <NavItemContainer key={index}>
                                    <NavItem navItem={navItem} navIndex={index} />
                                </NavItemContainer>
                            ))}
                        </div>
                        {isSidebarOpen ?
                        <div className='mt-16 bg-blue-100 cursor-pointer bg-opacity-70 rounded-3xl w-11/12 py-4 px-5 text-dark text-opacity-70 font-semibold flex items-center space-x-5'>
                            <span> Create new task</span>
                            <div className='px-2 py-2 bg-blue-600 flex justify-center items-center text-white font-bold rounded-[100%]'>
                                <span> <HiPlus /> </span>
                            </div>
                        </div> :
                        <div className='px-0 py-3.5 mt-16 cursor-pointer bg-blue-600 text-xl flex justify-center items-center text-white font-bold rounded-[100%]'>
                            <span className='text-white'> <HiPlus /> </span>
                        </div>
                        }

                        <div className='flex justify-between items-center space-x-4 mt-32 w-full'>
                            <div className={`flex space-x-2 items-center`}>
                                <Image src={picture1} alt='pic1' className='text-xs' />
                                <div className={`${isSidebarOpen ? '' : 'hidden'}`}>
                                  <div className='font-bold text-sm text-dark text-opacity-70'> Finna A. </div>
                                  <div className='font-semibold text-dark text-opacity-30 text-xs'> finina@iksg.com </div>
                                </div>
                            </div>
                                  <span className='text-dark text-opacity-40 font-bold cursor-pointer'>
                                      <HiChevronUp />
                                  </span>
                                </div>
                            </div>
                        </div>

                {/* Main Domain */}
                <Dashboard activeNav={activeNav} />
            </div>
        </div>
    )
}

export default Main
