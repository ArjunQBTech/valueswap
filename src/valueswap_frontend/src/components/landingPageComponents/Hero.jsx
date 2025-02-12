import React from 'react'
import { LandingPageData } from '../../TextData'
import GradientButton from '../../buttons/GradientButton'
import BorderGradientButton from '../../buttons/BorderGradientButton'
import { useNavigate } from 'react-router-dom'
import ParticlesBackground from '../particles/Particles'
import { useSelector } from 'react-redux'
import { useAuth } from '../utils/useAuthClient'
const Hero = ({ setClickConnectWallet }) => {

    const navigate = useNavigate();
    // const {isConnected} = useSelector(state => state.wallet)
    const {isAuthenticated, logout}   = useAuth()

    return (

        <div id='beng' className=' flex flex-col justify-evenly relative pt-28'>
            {/* <ParticlesBackground /> */}
            <div className=' items-center  text-center'>
                <div className='inline-block px-6 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg mb-8'>
                    <div className='font-gilroy font-normal leading-5 text-sm'>
                        {LandingPageData.HeroSection.BottomLine}
                    </div>
                </div>
                <div className='font-gilroy font-semibold md:text-6xl text-4xl pb-5 m-2 md:m-0'>
                    <span>
                        {LandingPageData.HeroSection.HeadLineWordOne}
                    </span>
                    <div>
                        <i className='px-2 bg-gradient-to-r from-[#F2A851] via-[#8F7CFF] to-[#003EC6] text-transparent bg-clip-text'>{LandingPageData.HeroSection.HeadLineWordTwo}</i>
                        <span > {LandingPageData.HeroSection.HeadLineWordThree}</span>
                    </div>
                </div>
                <span className='font-gilroy text-lg '>
                    {LandingPageData.HeroSection.Tagline}
                </span>

                <div className='flex mt-5 gap-4 justify-center '>
                    <div onClick={() => {
                        navigate('/valueswap/pool')
                    }}>
                        <GradientButton CustomCss={`w-[120px] z-10`}>
                            {LandingPageData.HeroSection.ExploreButton}
                        </GradientButton>
                    </div>
                    <div onClick={() => {
                     isAuthenticated ? logout() : setClickConnectWallet(true)
                    }}>
                        <BorderGradientButton customCss={`bg-[#000711] z-10`}>
                            {isAuthenticated ? (
                                <div>
                                    {LandingPageData.HeroSection.DisconnectButton}
                                </div>
                            ) : (
                                <div>
                                    {LandingPageData.HeroSection.ConnectButton}
                                </div>
                            )}

                        </BorderGradientButton>
                    </div>
                </div>
            </div>
            {/*  */}

            {/* <div className='relative'>
                <img src="/image/rectangle.png" alt="Main" className=' scale-[1.1356] w-[91vw] bg-cover backgroundHero' />
                <div className='bg-gradient-radial from-[#C8C008] to-transparent w-[20%] h-[20vw] opacity-[1] absolute right-[78%] blur-[165px] top-[25%] rounded-2xl'></div>
                <div className='bg-gradient-radial from-[#00308E] to-transparent w-[20%] h-[20vw] opacity-[1] absolute left-[78%] blur-[165px] top-[25%] rounded-2xl'></div>
                <div class="absolute md:flex justify-between left-[8%] w-[81%] lg:w-[80%] top-[37%] hidden   overflow-x-hidden">
                    <div id="c1" className="h-40 w-28 flex  flex-col gap-y-4  z-10 relative ">
                        <img className="h-10 w-10 lg:h-16 lg:w-16 animate-spin" src="/image/ckBTC.svg" alt="ICP Icon" />
                        <img className="h-10 w-10 lg:h-16 lg:w-16 absolute top-10 right-24 lg:top-16 lg:right-20 animate-spin" src="/image/ckETH.svg" alt="Dragginz Icon" />
                    </div>
                    <div id="c2" className="flex h-40 w-28 flex-col gap-y-4  z-10">
                        <img className="h-10 w-10 lg:h-16 lg:w-16 animate-spin" src="/image/icp.svg" alt="ICP Icon" />
                        <img className="h-10 w-10 lg:h-16 lg:w-16 absolute top-11 lg:top-[4.3rem] left-5 animate-spin" src="/image/Dragginz.png" alt="Dragginz Icon" />
                    </div>
                </div>
            </div> */}


          
        </div>

    )
}

export default Hero
