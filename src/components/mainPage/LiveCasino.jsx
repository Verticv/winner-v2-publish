import React, { useState } from 'react'
import Meun1 from '../../images/liveCasino/menu1.png'
import Meun2 from '../../images/liveCasino/menu2.png'
import Meun3 from '../../images/liveCasino/menu3.png'
import Meun4 from '../../images/liveCasino/menu4.png'
import Meun5 from '../../images/liveCasino/menu5.png'
import Meun6 from '../../images/liveCasino/menu6.png'
import Meun7 from '../../images/liveCasino/menu7.png'
import Meun8 from '../../images/liveCasino/menu8.png'
import Meun2Hl from '../../images/liveCasino/menu2_hl.png'

const LiveCasino = () => {


  const Card = ({bg, bgHover}) => {
    const [isHover, setHover] = useState(false)
    return (
      <div className='relative flex' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <img src={isHover ? bgHover : bg} className="object-none" alt="" />
        <button style={{width:'106px', height:'30px', borderRadius:'2px', background:'linear-gradient(to bottom, #e8b888, #4e3d0b)'}} className='absolute bottom-15px right-35px p-px hover:opacity-90'>
          <div style={{borderRadius:'2px', background: isHover ? 'linear-gradient(to bottom, #f38d27, #b55b01)' : 'linear-gradient(to bottom, #a67c52, #805f3f)'}} className='w-full h-full flex items-center justify-center'>
            <p style={{color:'#ffdfbd', textShadow: "0 0 3px #00000090"}} className="text-14px font-spoqaMedium tracking-tight">게임시작</p>
          </div>
        </button>
      </div>
    )
  }

  return (
    <div style={{height:'413px',width:'1260px'}} className="flex flex-col bg-white items-center w-full">
      <div style={{height:'203px'}} className='flex w-full space-x-8px items-end'>
        <Card bg={Meun1} bgHover={Meun2Hl}  />
        <Card bg={Meun2} bgHover={Meun2Hl} />
        <Card bg={Meun3} bgHover={Meun2Hl}  />
        <Card bg={Meun4} bgHover={Meun2Hl}  />
      </div>

      <div style={{height:'199px'}} className='flex w-full space-x-8px items-end mt-11px'>
        <Card bg={Meun5} bgHover={Meun2Hl}  />
        <Card bg={Meun6} bgHover={Meun2Hl}  />
        <Card bg={Meun7} bgHover={Meun2Hl}  />
        <Card bg={Meun8} bgHover={Meun2Hl}  />
      </div>
    </div>
  )
}

export default LiveCasino
