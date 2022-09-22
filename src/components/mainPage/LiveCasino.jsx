import React, { useState } from 'react'
import Meun1 from '../../images/liveCasino/menu1.png'
import Meun2 from '../../images/liveCasino/menu2.png'
import Meun3 from '../../images/liveCasino/menu3.png'
import Meun4 from '../../images/liveCasino/menu4.png'
import Meun5 from '../../images/liveCasino/menu5.png'
import Meun6 from '../../images/liveCasino/menu6.png'
import Meun7 from '../../images/liveCasino/menu7.png'
import Meun8 from '../../images/liveCasino/menu8.png'
import Meun1Hl from '../../images/liveCasino/menu1_hl.png'
import Meun2Hl from '../../images/liveCasino/menu2_hl.png'
import Meun3Hl from '../../images/liveCasino/menu3_hl.png'
import Meun4Hl from '../../images/liveCasino/menu4_hl.png'
import Meun5Hl from '../../images/liveCasino/menu5_hl.png'
import Meun6Hl from '../../images/liveCasino/menu6_hl.png'
import Meun7Hl from '../../images/liveCasino/menu7_hl.png'
import { useHistory } from 'react-router-dom'

const LiveCasino = () => {

  const history = useHistory()

  const Card = ({ bg, bgHover, comingSoon = false }) => {
    const [isHover, setHover] = useState(false)

    if (comingSoon) return (
      <div className='relative flex' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <img src={isHover ? bgHover : bg} className="object-none" alt="" />
        <button style={{ width: '106px', height: '30px', borderRadius: '2px', background: 'linear-gradient(to bottom, #ada299, #5a554f)' }} className='absolute bottom-15px right-35px p-px'>
          <div style={{ borderRadius: '2px', background: 'linear-gradient(to bottom, #8a8179, #6b655e)' }} className='w-full h-full flex items-center justify-center cursor-default'>
            <p style={{ color: '#cccccc', textShadow: "0 0 6px #000000" }} className="text-14px font-spoqaMedium tracking-tight cursor-default">준비중</p>
          </div>
        </button>
        <p style={{ marginBottom: '108px', textShadow: "0 0 3px #00000090", color: '#847361' }} className='absolute bottom-0 right-48px tracking-tight text-14px font-spoqaMedium cursor-default'>Coming Soon</p>
      </div>
    )

    return (
      <div className='relative flex cursor-pointer' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <img src={isHover ? bgHover : bg} className="object-none" alt="" />
        <button onClick={() => history.push("/live-casino")} style={{ width: '106px', height: '30px', borderRadius: '2px', background: 'linear-gradient(to bottom, #e8b888, #4e3d0b)' }} className='absolute bottom-15px right-35px p-px filter hover:brightness-125'>
          <div style={{ borderRadius: '2px', background: isHover ? 'linear-gradient(to bottom, #f38d27, #b55b01)' : 'linear-gradient(to bottom, #a67c52, #805f3f)' }} className='w-full h-full flex items-center justify-center'>
            <p style={{ color: '#ffdfbd', textShadow: "0 0 6px #000000" }} className="text-14px font-spoqaMedium tracking-tight">게임시작</p>
          </div>
        </button>
      </div>
    )
  }

  return (
    <div style={{ height: '413px', width: '1260px' }} className="flex flex-col items-center w-full">
      <div style={{ height: '203px' }} className='flex w-full space-x-8px items-end'>
        <Card bg={Meun1} bgHover={Meun1Hl} />
        <Card bg={Meun2} bgHover={Meun2Hl} />
        <Card bg={Meun3} bgHover={Meun3Hl} />
        <Card bg={Meun4} bgHover={Meun4Hl} />
      </div>

      <div style={{ height: '199px' }} className='flex w-full space-x-8px items-end mt-11px'>
        <Card bg={Meun5} bgHover={Meun5Hl} />
        <Card bg={Meun6} bgHover={Meun6Hl} />
        <Card bg={Meun7} bgHover={Meun7Hl} />
        <Card bg={Meun8} bgHover={Meun8} comingSoon={true} />
      </div>
    </div>
  )
}

export default LiveCasino
