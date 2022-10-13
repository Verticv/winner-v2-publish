import React, { useState } from 'react'
import Menu1 from '../../images/menu1.png'
import Menu2 from '../../images/menu2.png'
import Menu3 from '../../images/menu3.png'
import Menu4 from '../../images/menu4.png'
import Menu5 from '../../images/menu5.png'
import Menu1Hl from '../../images/menu1_hl.png'
import Menu2Hl from '../../images/menu2_hl.png'
import Menu3Hl from '../../images/menu3_hl.png'
import Menu4Hl from '../../images/menu4_hl.png'
import Menu5Hl from '../../images/menu5_hl.png'
import OtherBg from '../../images/other_bg.png'
import OtherBgHl from '../../images/other_bg_hl.png'
import { useHistory } from 'react-router-dom'


const Other = () => {
  const history = useHistory()

  const Card = ({ img, imgHover, text, path }) => {

    const [isHover, setHover] = useState(false)
    return (
      <button className='relative flex flex-col items-center cursor-pointer' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => history.push(path)}>
        <img src={isHover ? imgHover : img} alt="" />

        <img src={isHover ? OtherBgHl : OtherBg} className="z-10 absolute bottom-56px" alt="" />
        <p style={{ color: isHover ? '#ffdfbd' : '#ad9e8c' }} className='absolute z-20 bottom-66px tracking-tighter font-spoqaMedium text-14px h-14px flex items-center cursor-pointer'>게임시작</p>
        <p style={{ color: '#ffdfbd', marginBottom: '94px', textShadow: "0 0 7px #00000080" }} className='absolute z-20 bottom-0 font-spoqaMedium text-16px h-16px flex items-center cursor-pointer'>{text}</p>
      </button>
    )
  }

  return (
    <div className='flex space-x-10px'>
      <Card img={Menu1} text={"e-스포츠"} imgHover={Menu1Hl} path="/" />
      <Card img={Menu2} text={"미니게임"} imgHover={Menu2Hl} path="/minigame/powerball" />
      <Card img={Menu3} text={"키론가상게임"} imgHover={Menu3Hl} path="/" />
      <Card img={Menu4} text={"피싱게임"} imgHover={Menu4Hl} path="/" />
      <Card img={Menu5} text={"티비벳"} imgHover={Menu5Hl} path="/" />
    </div>
  )
}

export default Other