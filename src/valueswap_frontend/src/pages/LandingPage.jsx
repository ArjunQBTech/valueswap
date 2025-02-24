import React from 'react'
import Hero from '../components/landingPageComponents/Hero'
import About from '../components/landingPageComponents/About'
import Partnership from '../components/landingPageComponents/Partnership'
import Methods from '../components/landingPageComponents/Methods'
import WhitePaper from '../components/landingPageComponents/WhitePaper'
import LiquidityInfo from '../components/landingPageComponents/LiquidityInfo'
import Footer from '../components/footer/Footer'
import { FloatingIcons } from '../components/landingPageComponents/FloatingIcons'
// import DialogBox from '../Modals/Dialouge'
// import Navbar from '../navbar/Navbar'
// import { LandingPageNavbarData } from '../TextData'
// import MobileNavbar from '../navbar/MobileNavbar'
// import { useState } from 'react'
const LandingPage = ({ setClickConnectWallet }) => {


    return (
        <div className=''>

            <div className='mx-4'>
                <div className='relative min-h-screen h-auto'>
                    <Hero setClickConnectWallet={setClickConnectWallet} />
                    <FloatingIcons/>
                </div>

                {/* <About /> */}
                <LiquidityInfo />
                {/* <Partnership /> */}
                {/* <Methods /> */}

                <div className='mt-4'>
                    <WhitePaper />
                </div>

             
            </div>
        </div>
    )
}

export default LandingPage
