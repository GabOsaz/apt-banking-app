import React from 'react'
import Image from 'next/image'
import picture1 from '../public/profile-pic-01.png'
import picture2 from '../public/profile-pic-02.png'
import picture3 from '../public/profile-pic-03.png'
import picture4 from '../public/profile-pic-04.png'
import picture5 from '../public/profile-pic-05.png'
import { MdOutlineMoreVert } from "react-icons/md";

function Staff() {
    const staffDetails = [
        {
            name: 'Finna A.',
            discipline: 'UX designer',
            profilePicture: picture1
        },
        {
            name: 'Binna A.',
            discipline: 'UX designer',
            profilePicture: picture2
        },
        {
            name: 'Tinna A.',
            discipline: 'UX designer',
            profilePicture: picture3
        },
        {
            name: 'Rinna A.',
            discipline: 'UX designer',
            profilePicture: picture4
        },
        {
            name: 'Ginna A.',
            discipline: 'UX designer',
            profilePicture: picture5
        },
        {
            name: 'Binna A.',
            discipline: 'UX designer',
            profilePicture: picture1
        },
        {
            name: 'Dinna A.',
            discipline: 'UX designer',
            profilePicture: picture2
        },
        {
            name: 'Hinna A.',
            discipline: 'UX designer',
            profilePicture: picture3
        },
        {
            name: 'Jinna A.',
            discipline: 'UX designer',
            profilePicture: picture4
        },
        {
            name: 'Minna A.',
            discipline: 'UX designer',
            profilePicture: picture5
        },
    ];
    
  return (
    <div>
        {
            staffDetails.map((staff, index) => {
                const { name, discipline, profilePicture } = staff;
                return(
                    <div 
                        key={index}
                        style={{
                            top: `${index === 0 ? 0 : index * 24 * 4}px`
                        }}
                        className={`w-56 rounded-2xl border-2 border-gray-100 flex justify-between items-center p-4 absolute left-0 z-20 bg-white`}
                    >
                        <div className='flex space-x-2 items-center'>
                            <Image src={profilePicture} alt='pic1' className='text-xs' />
                            <div>
                                <div className='font-bold text-dark text-opacity-70'> {name} </div>
                                <div className='font-semibold text-dark text-opacity-30 text-xs'> {discipline} </div>
                            </div>
                        </div>
                        <div className='text-dark text-opacity-30'>
                            <div className='flex justify-center items-center p-3 hover:bg-gray-100 transition-colors duration-200 ease-in-out cursor-pointer rounded-full' >
                                <span className=''>
                                    <MdOutlineMoreVert />
                                </span>
                            </div>              
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Staff