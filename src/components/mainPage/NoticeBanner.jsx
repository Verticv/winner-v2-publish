import React from 'react'
import SpeakerIcon from '../../images/speaker.png'
import './NoticeBanner.css'

const NoticeBanner = () => {
    return (
        <div style={{width:'1260px', boxShadow: '0 0 7px #aa9264'}} className="flex items-center bg-black bg-opacity-75 h-35px w-full overflow-x-hidden rounded-full flex-shrink-0">
            <div className="z-20 bg-black px-15px flex -mt-px"><img className='object-none' src={SpeakerIcon} alt="speakerIcon"/></div>
            <span id="banner" style={{color:'#aa9264'}} className="font-spoqa text-15px text-white z-10 mt-px">입금하시기전 계좌문의 후 입금해 주시기 바랍니다.</span>
        </div>
    )
}

export default NoticeBanner
