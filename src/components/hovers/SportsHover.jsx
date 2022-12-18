import React, { useState } from 'react'
import LebronBanner from '../../images/navbarHover/3_1.png'
import LebronBannerHighlight from '../../images/navbarHover/3_1_hl.png'
import TennisBanner from '../../images/navbarHover/3_2.png'
import TennisBannerHighlight from '../../images/navbarHover/3_2_hl.png'
import MessiBanner from '../../images/navbarHover/3_3.png'
import MessiBannerHighlight from '../../images/navbarHover/3_3_hl.png'
import Expand from 'react-expand-animated'
import { useHistory } from 'react-router-dom'

const SportsHover = ({ selection }) => {

  const [isHover, setHover] = useState(null)
  const history = useHistory()

  const gamesArray = [
    {
      id: 0,
      background: LebronBanner,
      highlight: LebronBannerHighlight,
      imgText: "라이브베팅",
      btnText: "게임시작",
      class: "bg-opacity-25",
    },
    {
      id: 1,
      background: TennisBanner,
      highlight: TennisBannerHighlight,
      imgText: "조합베팅",
      btnText: "게임시작",
      class: "bg-opacity-25",
      path: "/bet-combination"
    },
    {
      id: 2,
      background: MessiBanner,
      highlight: MessiBannerHighlight,
      imgText: "스페셜베팅",
      btnText: "게임시작",
      class: "bg-opacity-25",
      path: "/bet-combination"
    }
  ];

  function GamesList({ items }) {
    return items.map(item => (
      <div
        key={item.id}
        className={`group relative cursor-pointer flex flex-col items-center justify-end`}
        // style={{ width: '235px' }}
        onMouseEnter={() => setHover(item.id)}
        onClick={() => history.push(item.path)}
      >
        <p style={{ color: '#ffdfbd', marginBottom: '70px' }} className={`absolute bottom-0 z-20 text-13px tracking-tighter font-spoqa h-13px items-center flex`}>{item.imgText}</p>
        <div style={{ marginBottom: '31px' }} className={`absolute z-20`}>
          <button style={{ width: '89px', height: '26px', borderRadius: '2px', background: 'linear-gradient(to bottom, #e8b888, #4e3d0b)' }} className={`p-px filter hover:brightness-125`}>
            <div style={{ borderRadius: '2px', background: isHover === item.id ? 'linear-gradient(to bottom, #f38d27, #b55b01)' : 'linear-gradient(to bottom, #a67c52, #805f3f)' }} className='w-full h-full flex items-center justify-center'>
              <p style={{ color: '#ffdfbd', textShadow: "0 0 3px #00000090" }} className="text-13px font-spoqaMedium tracking-tight">게임시작</p>
            </div>
          </button>
        </div>
        <img className={`${isHover === item.id ? "opacity-0" : "opacity-100"} absolute bottom-0 object-none h-full mb-13px`} src={item.background} alt="game_image" />
        <img className={`${isHover === item.id ? "opacity-100" : "opacity-0"} absolute bottom-0 object-none h-full mb-13px`} src={item.highlight} alt="game_image" />
      </div>
    ))
  }

  return (
    <Expand
      open={selection === 2}
      duration={200}
      className="absolute w-full h-262px border-b border-t border-brown-r796657"
    >
      <div onMouseLeave={() => setHover(null)} className="h-262px w-full flex justify-center bg-black bg-opacity-85">
        <div style={{ width: '540px' }} className="grid grid-cols-3">
          <GamesList items={gamesArray} />
        </div>
      </div>
    </Expand>
  )
}

export default SportsHover
