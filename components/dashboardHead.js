import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import { IoMdChatbubbles } from "react-icons/io";
import { RiNotification3Fill } from "react-icons/ri";
import { RiBitCoinFill } from "react-icons/ri";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineChevronLeft } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";

import picture1 from '../public/profile-pic-01.png'
import picture2 from '../public/profile-pic-02.png'
import picture3 from '../public/profile-pic-03.png'
import DropDownIcon from '../svgs/dropDownIcon';

function DashboardHead({ percentageIncrease, activeNav }) {
  return (
    <div>
        <div className='w-full pr-16'>
            <div className='flex justify-between'>
                <div className='flex space-x-3 items-center'>
                    <span className='text-sm font-bold text-dark text-opacity-70'> {activeNav} </span>
                    <span className='text-xs'> <IoIosArrowForward /> </span>
                    <span className='text-sm text-dark text-opacity-30 font-bold'> GSE Banking App </span>
                </div>
                <div className='flex items-center space-x-7'>
                    <span> <IoMdChatbubbles /> </span>
                    <span> <RiNotification3Fill /> </span>
                    <span className='h-7 border border-dark border-opacity-10'></span>
                    <div className='flex items-center space-x-4'>
                        <span className='text-5xl'> <RiBitCoinFill /> </span>
                        <span className='font-bold text-sm text-dark text-opacity-80'> RonasIt</span>
                        <span> <RiArrowDownSLine /> </span>
                    </div>
                </div>
            </div>
            <div className='mt-10 flex justify-between w-full'>
                <div>
                    <span className='text-2xl font-bold text-dark text-opacity-70'> GSE Banking app </span>
                    <div className='flex items-center space-x-2 mt-1.5'>
                        <div className='text-dark text-opacity-25 font-semibold text-sm'> {percentageIncrease < 100 ? percentageIncrease : 100}% </div>
                        <div
                            style={{
                                width: `${70}px`,
                            }}
                            className={`flex items-center justify-between h-1 bg-blue-200 rounded-tr-full rounded-br-full rounded-tl-full rounded-bl-full`} 
                        >

                            <div style={{width:`${percentageIncrease}%`}} className={`flex items-center justify-between transition-all duration-200 ease-in-out h-full bg-blue-700 rounded-tl-full rounded-bl-full rounded-tr-full rounded-br-full`} />
                        </div>
                    </div>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='border-dotted border-2 border-dark border-opacity-40 px-7 py-1 rounded-2xl flex space-x-2.5 items-center justify-center text-sm text-dark text-opacity-40'>
                        <span className='text-2xl font-semibold text-dark text-opacity-40'> + </span>
                        <span className='text-sm font-semibold text-dark text-opacity-40'> Invite </span>
                    </div>
                    <div className='flex'>
                        <span className='rounded-[100%] w-8 h-8 object-contain relative'>
                            <Image src={picture1} alt='user1' layout='fill'/>
                        </span>
                        <span className='-ml-4 rounded-[100%] h-8 w-8 border border-white object-contain relative'>
                            <Image src={picture2} alt='user1' layout='fill'/>
                        </span>
                        <span className='-ml-4 rounded-[100%] h-8 w-8 border border-white object-contain relative'>
                            <Image src={picture3} alt='user1' layout='fill'/>
                        </span>
                        <span className='-ml-4 rounded-[100%] h-8 w-8 border border-white flex justify-center items-center text-white text-opacity-90 relative bg-dark'>
                            <span className='w-full h-full flex items-center justify-center font-semibold text-center text-xs'> +15 </span>
                        </span>
                    </div>
                </div>
            </div>
            <div className='mt-6 flex justify-between items-center'>
                <div className='flex items-center space-x-5 font-semibold text-base text-dark text-opacity-60'>
                    <span> February 2021 </span>
                    <div className='flex space-x-4'>
                        <span> <MdOutlineChevronLeft /> </span>
                        <span> <MdOutlineChevronRight /> </span>
                    </div>
                </div>
                <div className='flex items-center space-x-12'>
                    <span> <MdOutlineYoutubeSearchedFor /> </span>
                    <div className='border border-dark border-opacity-20 rounded-3xl text-dark text-opacity-50 flex justify-between space-x-8 items-center py-2.5 px-5'>
                        <span className='text-xs font-bold'> Month </span>
                        <span> <DropDownIcon /> </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardHead