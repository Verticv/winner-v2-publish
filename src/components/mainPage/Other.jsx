import React from 'react'
import Menu1 from '../../images/menu1.png'
import Menu2 from '../../images/menu2.png'
import Menu3 from '../../images/menu3.png'
import Menu4 from '../../images/menu4.png'
import Menu5 from '../../images/menu5.png'

const Other = () => {

  const Card = ({img, imgHover, text}) => (
    <div className='relative flex flex-col items-center'>
      <img src={img} alt="" />

      <p style={{color:'#ad9e8c'}} className='absolute z-20 bottom-65px tracking-tighter font-spoqaMedium text-14px h-14px flex items-center'>게임시작</p>
      <p style={{color:'#ffdfbd', marginBottom:'94px', textShadow: "0 0 7px #00000080"}} className='absolute z-20 bottom-0 font-spoqaMedium text-16px h-16px flex items-center'>{text}</p>
    </div>
  )

  return (
    <div className='flex space-x-20px'>
      <Card img={Menu1} text={"e-스포츠"}/>
      <Card img={Menu2} text={"미니게임"} />
      <Card img={Menu3} text={"키론가상게임"} />
      <Card img={Menu4} text={"피싱게임"} />
      <Card img={Menu5} text={"티비벳"} />
    </div>
  )
}

export default Other