import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import RecentJobs from '../components/RecentJobs'


const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCards />
    {/* <AllJobs/> */}
    <RecentJobs/>
    </>
  )
}

export default HomePage