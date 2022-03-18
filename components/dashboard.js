import Head from 'next/head'
import { desiredDaysRange, getWeekDday } from '../utilities';
import { useState, useEffect } from 'react'
import Staff from './staff';
import DashboardHead from './dashboardHead';

export default function Home({ activeNav }) {
  const [ percentCompletion, setPercentCompletion ] = useState(0)
  const arr = desiredDaysRange();
  const days = arr.map(each => each.day);

  const isToday = (date) => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const today = new Date();
    const d = new Date(year, month, date);

    return today.toDateString() === d.toDateString() ? true : false;
  };

  const tasks = [
    {
      start: 15,
      end: 22,
      completedColor:'bg-orange-600',
      incompleteColor: 'bg-orange-300',
      textColor: 'text-orange-500',
      workTitle: 'Flow swift transfer'
    },
    {
      start: 13,
      end: 17,
      completedColor:'bg-yellow-700',
      incompleteColor: 'bg-yellow-400',
      textColor: 'text-yellow-800',
      workTitle: 'Calendar enhacer'
    },
    {
      start: 16,
      end: 23,
      completedColor:'bg-slate-800',
      incompleteColor: 'bg-slate-300',
      textColor: 'text-slate-800',
      workTitle: 'User profille'
    },
    {
      start: 15,
      end: 22,
      completedColor:'bg-slate-800',
      incompleteColor: 'bg-slate-300',
      textColor: 'text-slate-900',
      workTitle: 'Transfers by phone number'
    },
    {
      start: 14,
      end: 24,
      completedColor:'bg-blue-700',
      incompleteColor: 'bg-blue-300',
      textColor: 'text-blue-900',
      workTitle: 'Chat bot'
    },
    {
      start: 15,
      end: 24,
      completedColor:'bg-orange-800',
      incompleteColor: 'bg-orange-300',
      textColor: 'text-orange-900',
      workTitle: 'Transaction analysis'
    },
    {
      start: 12,
      end: 18,
      completedColor:'bg-lime-900',
      incompleteColor: 'bg-lime-300',
      textColor: 'text-lime-900',
      workTitle: 'Transfers by phone number'
    },
    {
      start: 15,
      end: 22,
      completedColor:'bg-purple-900',
      incompleteColor: 'bg-purple-300',
      textColor: 'text-purple-900',
      workTitle: 'Transfers by email'
    },
    {
      start: 14,
      end: 24,
      completedColor:'bg-pink-900',
      incompleteColor: 'bg-pink-300',
      textColor: 'text-pink-900',
      workTitle: 'Mobile app redesign'
    },
    {
      start: 18,
      end: 22,
      completedColor:'bg-indigo-900',
      incompleteColor: 'bg-indigo-300',
      textColor: 'text-indigo-900',
      workTitle: 'Push notification'
    },
  ];

  const unit = 12;

  useEffect(() => {
    const interval =  setInterval(() => setPercentCompletion(init => init + 10), 10000);
    return () => {
      clearInterval(interval)
    }
  }, []);
  

  return (
    <div className='w-full h-full overflow-y-scroll pl-12 py-8'>
      <Head>
        <title>All For Team Management</title>
        <meta name="description" content="Built by Omo Osaze" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      <DashboardHead activeNav={activeNav} percentageIncrease={percentCompletion} />
      <div className='flex'>
        {arr.map((each, index) => (
            <div key={index} className={`${isToday(each.day) && 'bg-blue-500 text-white text-opacity-80 px-2 py-1 rounded-lg'} w-12 px-2 py-1 h-full flex justify-center my-4 font-semibold space-x-1`}> 
              <span className='text-dark text-opacity-30'> {getWeekDday(each)} </span>
              <span className=''> {each.day} </span>
            </div>
          ))}
      </div>
      <div className='flex h-full relative'>
        {arr.map((each, index) => {
          return (
          <div key={index} className={`${index > 3 ? ' border-r-2' : 'border-none'} ${isToday(each.day) && 'bg-blue-600 z-20 w-0.5 h-full rounded-t-full'} border-opacity-5 border-dark w-12 h-auto`}> 
            {
                isToday(each.day) && <div className='bg-blue-600 z-20 w-1' />
            }
            <span className='hidden'> {each.day} </span>
          </div>
        )})}
            
          {tasks.map((each, index) => {
            const { completedColor, incompleteColor, textColor } = each;
            const startIndex = days.indexOf(each.start);
            const endIndex = days.indexOf(each.end) +1
            const difference = (endIndex - (startIndex))
            const completedWidth = (difference * unit *4 )
            const startPosition = (startIndex * unit *4).toString();
            const topPosition = index === 0 ? ((index +1) * 4 * 4).toString() : ((index + .2) * 12 *2 * 4).toString()
            return (
              <div key={index}>
                <div
                  style={{
                    width: `${completedWidth}px`,
                    top: `${topPosition}px`,
                    left: `${startPosition}px`
                  }}
                  className={`flex items-center justify-between h-12 ${incompleteColor} absolute rounded-tr-3xl rounded-br-3xl rounded-tl-3xl rounded-bl-3xl`} 
                >
                    <div style={{width:`${percentCompletion}%`}} className={`flex items-center justify-between transition-all duration-200 ease-in-out h-full ${completedColor} rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl`}>
                      <div className='flex items-center space-x-3'>
                        <div className={`flex justify-center items-center ml-4 w-6 h-6 rounded-full ${percentCompletion < 40 ? '' : 'bg-white bg-opacity-30'} `}>
                          <div className='animate-pulse w-2 h-2 rounded-full bg-white' />
                        </div>
                        <span className='text-xs text-white'> {each.workTitle} </span>
                      </div>
                      <span className={`text-sm pr-3 font-bold ${percentCompletion >= 100 ? 'block text-white' : 'hidden'}`}> {'100%'} </span>
                    </div>
                  
                    <span className={`text-sm pr-3 font-bold ${textColor} ${percentCompletion >= 100 && 'hidden'}`}> {percentCompletion}% </span>
                </div>
              </div>
            )
          })}
          <Staff />
          
      </div>
    </div>
  )
}
