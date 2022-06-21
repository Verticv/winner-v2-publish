import React from 'react'
import LotteryBanner from '../../images/gameBanner/lottery_game_banner.png'
import LiveCasinoBanner from './LiveCasinoBanner'
import SlotsBanner from './SlotsBanner'
import SportsBanner from './SportsBanner'
import EsportsBanner from './EsportsBanner'
import MinigameBanner from './MinigameBanner'
import ARgameBanner from './ARgameBanner'
import FishingGameBanner from './FishingGameBanner'

const GameBanner = ({selection}) => {
    return (
        <>
            <div className={`w-full h-387px absolute ${selection === 0 ? "opacity-100" : "opacity-0"}`}><LiveCasinoBanner /></div>
            <div className={`w-full h-387px absolute ${selection === 1 ? "opacity-100" : "opacity-0"}`}><SlotsBanner /></div>
            <div className={`w-full h-387px absolute ${selection === 2 ? "opacity-100" : "opacity-0"}`}><SportsBanner /></div>
            <div className={`w-full h-387px absolute ${selection === 3 ? "opacity-100" : "opacity-0"}`}><EsportsBanner /></div>
            <div className={`w-full h-387px absolute ${selection === 4 ? "opacity-100" : "opacity-0"}`}><MinigameBanner /></div>
            <div className={`w-full h-387px absolute ${selection === 5 ? "opacity-100" : "opacity-0"}`}><ARgameBanner /></div>
            <div className={`w-full h-387px absolute ${selection === 6 ? "opacity-100" : "opacity-0"}`}><FishingGameBanner /></div>
            <div className={`w-full h-387px absolute ${selection === 7 ? "opacity-100" : "opacity-0"}`}>
                <div className="relative flex w-full h-387px border border-gray-afafaf justify-end rounded-lg shadow-plain1 transition bg-gradient-to-br from-white via-white to-gray-300 cursor-pointer overflow-hidden">
                    <img className="w-full h-auto pl-20" src={LotteryBanner} alt="game_banner" />
                    <div className={`absolute left-0 bottom-0 ml-80px mb-36px w-242px h-74px rounded-full flex items-center justify-center text-white font-spoqaBold text-30px bg-gray-b2b2b2`}>준비중</div>
                </div>    
            </div>
        </>
    )
}

export default GameBanner
