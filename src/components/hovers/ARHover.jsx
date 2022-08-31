import React, { useState } from 'react'
import Expand from 'react-expand-animated'
import AugBanner from '../../images/navbarHover/7_1.png'
import AugBannerHighlight from '../../images/navbarHover/7_1_hl.png'

const ARHover = ({ selection }) => {
  const [isHover, setHover] = useState(null)

  const gamesArray = [
    { id: 0, background: AugBanner, highlight: AugBannerHighlight, imgText: "키론가상게임", color: "group-hover:bg-green-r7bd26a", btnText: "게임시작", class: "bg-opacity-25" }
  ];

  function GamesList({ items }) {
		return items.map(item => (
			<div 
				key={item.id} 
				className={`group relative cursor-pointer flex flex-col items-center justify-end`}
				style={{width:'235px'}}
				onMouseEnter={() => setHover(item.id)}
			>
				<p style={{color:'#ffdfbd', marginBottom:'70px'}} className={`absolute bottom-0 z-20 text-13px tracking-tighter font-spoqa h-13px items-center flex`}>{item.imgText}</p>
				<div style={{marginBottom:'31px'}} className={`absolute z-20`}>
					<button style={{width:'89px', height:'26px', borderRadius:'2px', background:'linear-gradient(to bottom, #e8b888, #4e3d0b)'}} className={`p-px filter hover:brightness-125`}>
						<div style={{borderRadius:'2px', background: isHover === item.id ? 'linear-gradient(to bottom, #f38d27, #b55b01)' : 'linear-gradient(to bottom, #a67c52, #805f3f)'}} className='w-full h-full flex items-center justify-center'>
							<p style={{color:'#ffdfbd', textShadow: "0 0 3px #00000090"}} className="text-13px font-spoqaMedium tracking-tight">게임시작</p>
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
      open={selection === 6}
      duration={200}
      className="absolute w-full h-262px border-b border-t border-brown-r796657"
    >
      <div onMouseLeave={() => setHover(null)} className="h-262px w-full flex justify-center bg-black bg-opacity-85 -space-x-12">
        <GamesList items={gamesArray} />
      </div>
    </Expand>
  )
}

export default ARHover
