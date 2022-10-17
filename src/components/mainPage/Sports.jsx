import React, { useState } from 'react'
import Ball from '../../images/ball.png'
import Team1 from '../../images/team_icon1.png'
import Team2 from '../../images/team_icon2.png'
import Sports1 from '../../images/sports1.png'
import Sports2 from '../../images/sports2.png'
import Sports3 from '../../images/sports3.png'
import Sports1Hl from '../../images/sports1_hl.png'
import Sports2Hl from '../../images/sports2_hl.png'
import Sports3Hl from '../../images/sports3_hl.png'
import ArrowLeft from '../../images/arrows/sports_arrow_left.png'
import ArrowRight from '../../images/arrows/sports_arrow_right.png'
import { useHistory } from 'react-router-dom'

const Sports = () => {

  const [index, setIndex] = useState(0)
  const history = useHistory()

  const DATA = [
    {
      icon1: Ball,
      icon2: Team1,
      icon3: Team2,
      text1: '축구',
      text2: 'UEFA Champions League longer text',
      text3: '리버풀',
      text4: '비야레알',
      time: '05/25 15:45'
    },
    {
      icon1: Ball,
      icon2: Team1,
      icon3: Team2,
      text1: '미식축구',
      text2: 'Premier League',
      text3: '맨체스터유나이티드',
      text4: '토트넘',
      time: '05/25 15:45'
    },
    {
      icon1: Ball,
      icon2: Team1,
      icon3: Team2,
      text1: 'Basketball',
      text2: 'UEFA Champions League',
      text3: '리버풀',
      text4: '비야레알',
      time: '05/25 15:45'
    },
    {
      icon1: Ball,
      icon2: Team2,
      icon3: Team1,
      text1: 'Volleyball',
      text2: 'UEFA Champions League',
      text3: '리버풀',
      text5: '비야레알',
      time: '05/25 15:45'
    },
    {
      icon1: Ball,
      icon2: Team1,
      icon3: Team2,
      text1: '축구',
      text2: 'UEFA Champions League',
      text3: '리버풀',
      text4: '비야레알',
      time: '05/25 15:45'
    },
    {
      icon1: Ball,
      icon2: Team1,
      icon3: Team2,
      text1: '축구',
      text2: 'UEFA Champions League',
      text3: '리버풀',
      text4: '비야레알',
      time: '05/25 15:45'
    },
    {
      icon1: Ball,
      icon2: Team1,
      icon3: Team2,
      text1: '축구',
      text2: 'UEFA Champions League',
      text3: '리버풀',
      text4: '비야레알',
      time: '05/25 15:45'
    },
    {
      icon1: Ball,
      icon2: Team1,
      icon3: Team2,
      text1: '축구',
      text2: 'UEFA Champions League',
      text3: '리버풀',
      text4: '비야레알',
      time: '05/25 15:45'
    },
  ]

  const Button = ({top,bottom}) => (
    <button className='filter hover:brightness-125' style={{height:'37px', width:'74px', borderRadius:'2px', background:'linear-gradient(to bottom, #4f4a41, #302d29)', padding:'1px', boxShadow:"0 2px 6px #00000090"}}>
      <div className='w-full h-full flex flex-col items-center justify-center' style={{borderRadius:'2px', backgroundColor:'#252525'}}>
        <p style={{color:'#8e8780'}} className="text-12px h-12px flex items-center font-roboto">{top}</p>
        <p style={{color:'#ffffff'}} className="text-12px flex items-center font-roboto h-12px mt-2px">{bottom}</p>
      </div>
    </button>
  )

  const Card = ({
    icon1 = Ball,
    icon2 = Team1,
    icon3 = Team2,
    text1 = '축구',
    text2 = 'UEFA Champions League',
    text3 = '리버풀',
    text4 = '비야레알',
    time = '05/25 15:45'
  }) => {
    return (
      <div style={{width:'313px', height:'170px', borderRadius:'4px', borderWidth:'1px', borderColor:'#151514', backgroundColor:'#3e3e3e'}} className="flex flex-shrink-0">
        <div style={{width:'63px', borderColor:'#151514'}} className="border-r pt-px flex-shrink-0">
          <div style={{backgroundColor:'#302f2e', background:'linear-gradient(to bottom, #302f2e, #252423)'}} className="w-full h-full rounded-tl-4px rounded-bl-3px flex flex-col items-center">
            <div style={{width:'42px', height:'42px', marginTop:'54px', backgroundColor:'#1f1f1f'}} className="rounded-full flex items-center justify-center">
              <img src={icon1} alt="" className='object-none' />
            </div>
            <p style={{color:'#8e8780', maxWidth:'60px', textOverflow: 'unset', whiteSpace: 'nowrap', overflow:'hidden'}} className={`font-spoqa tracking-tighter text-14px`}>{text1.length > 10 ? `${text1.slice(0,10)}...` : text1}</p>
          </div>
        </div>

        <div className="pt-px w-full h-full">
          <div style={{backgroundColor:'#242424', background:'linear-gradient(to bottom, #252525, #1f1e1e)'}} className="w-full h-full rounded-tr-4px flex flex-col items-center">
            <p style={{color:'#645e58', maxWidth:'220px', textOverflow: 'unset', whiteSpace: 'nowrap'}} className="tracking-tighter text-14px font-spoqaMedium flex h-14px items-center mt-10px">{text2.length > 31 ? `${text2.slice(0,31)}...` : text2}</p>

            <div style={{height:'74px', width:'220px'}} className="w-full mt-10px flex justify-between">
              <div style={{width:'58px'}} className="h-full flex flex-col items-center flex-shrink-0">
                <div style={{width:'58px', height:'58px', backgroundColor:'#292929'}} className="rounded-full flex-shrink-0 p-3px flex items-center justify-center">
                  <div className='w-full h-full rounded-full flex items-center justify-center flex-shrink-0' style={{backgroundColor:'#1f1f1f'}}>
                    <img src={icon2} alt="" />
                  </div>
                </div>
                <p style={{maxWidth:'180px', textOverflow: 'unset', whiteSpace: 'nowrap', overflow:'hidden', color:'#8e8780'}} className="font-spoqa tracking-tighter text-14px h-16px w-83px text-center">
                  {text3.length > 6 ? `${text3.slice(0,6)}...` : text3}
                </p>
              </div>

              <div style={{color:'#948d81'}} className='w-full flex flex-col items-center font-spoqa'>
                <p style={{fontSize:'12px'}} className="h-12px flex items-center mt-14px">{time}</p>
                <p style={{}} className="font-spoqaBold text-18px h-18px flex items-center mt-2px">VS</p>
              </div>

              <div style={{width:'58px'}} className="h-full flex flex-col items-center flex-shrink-0">
                <div style={{width:'58px', height:'58px', backgroundColor:'#292929'}} className="rounded-full flex-shrink-0 p-3px flex items-center justify-center">
                  <div className='w-full h-full rounded-full flex items-center justify-center flex-shrink-0' style={{backgroundColor:'#1f1f1f'}}>
                    <img src={icon3} alt="" />
                  </div>
                </div>
                <p style={{color:'#8e8780'}} className="font-spoqa tracking-tighter text-14px h-14px w-80px text-center">
                  {text4.length > 6 ? `${text3.slice(0,6)}...` : text4}
                </p>
              </div>
            </div>

            <div style={{width:'236px'}} className="space-x-7px flex mt-11px">
              <Button top="1" bottom="1.31" />
              <Button top="X" bottom="5.67" />
              <Button top="2" bottom="10.0" />
            </div>
            
          </div>
        </div>

      </div>
    )
  }

  const Card1 = ({img, imgHover,text, path}) => {
    const [isHover, setHover] = useState(false)
    return (
      <button onClick={() => history.push(path)} style={{height:'207px', width: '411px'}} className="flex items-end relative cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <img src={isHover ? imgHover : img} alt="" className='object-none' />
        <button style={{width:'106px', height:'30px', borderRadius:'2px', background:'linear-gradient(to bottom, #e8b888, #4e3d0b)'}} className='absolute bottom-25px right-18px p-px filter hover:brightness-125'>
          <div style={{borderRadius:'2px', background: isHover ? 'linear-gradient(to bottom, #f38d27, #b55b01)' : 'linear-gradient(to bottom, #a67c52, #805f3f)'}} className='w-full h-full flex items-center justify-center'>
            <p style={{color:'#ffdfbd', textShadow: '0px 0px 6px #000000'}} className="text-14px font-spoqaMedium tracking-tight">게임시작</p>
          </div>
        </button>
        <p style={{color:'#ffdfbd', marginBottom:'129px'}} className='z-20 absolute bottom-0 right-18px text-16px tracking-tighter font-spoqa h-16px flex items-center'>{text}</p>
      </button>
    )
  }

  return (
    <div style={{width:'1260px'}}>
      <div className="flex space-x-3px items-center relative -ml-3px">
        <img src={ArrowLeft} className="absolute left-0 -ml-16px cursor-pointer filter hover:brightness-400" alt="" onClick={() => index > 0 && setIndex(index-1)}/>
        {DATA.splice(index, 4).map(item => (
          <Card
            icon1 = {item.icon1}
            icon2 = {item.icon2}
            icon3 = {item.icon3}
            text1 = {item.text1}
            text2 = {item.text2}
            text3 = {item.text3}
            text4 = {item.text4}
            time = {item.time}
          />
        ))}
        <img src={ArrowRight} style={{marginRight:'-23px'}} className="absolute right-0  cursor-pointer filter hover:brightness-400" alt="" onClick={() =>  index < DATA.length && setIndex(index+1)}/>
      </div>

      <div className='mt-11px space-x-19px flex'>
        <Card1 img={Sports1} text="라이브베팅" imgHover={Sports1Hl} path="/" />
        <Card1 img={Sports2} text="조합베팅" imgHover={Sports2Hl} path="/bet-combination"/>
        <Card1 img={Sports3} text="스페셜베팅" imgHover={Sports3Hl} path="/bet-combination" />
      </div>
    </div>
  )
}

export default Sports