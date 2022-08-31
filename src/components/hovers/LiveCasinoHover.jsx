import React, { useState } from 'react'

import Img1_1 from '../../images/navbarHover/1_1.png'
import Img1_2 from '../../images/navbarHover/1_2.png'
import Img1_3 from '../../images/navbarHover/1_3.png'
import Img1_4 from '../../images/navbarHover/1_4.png'
import Img1_5 from '../../images/navbarHover/1_5.png'
import Img1_6 from '../../images/navbarHover/1_6.png'
import Img1_7 from '../../images/navbarHover/1_7.png'

import Img1_1_hl from '../../images/navbarHover/1_1_hl.png'
import Img1_2_hl from '../../images/navbarHover/1_2_hl.png'
import Img1_3_hl from '../../images/navbarHover/1_3_hl.png'
import Img1_4_hl from '../../images/navbarHover/1_4_hl.png'
import Img1_5_hl from '../../images/navbarHover/1_5_hl.png'
import Img1_6_hl from '../../images/navbarHover/1_6_hl.png'
import Img1_7_hl from '../../images/navbarHover/1_7_hl.png'

import Expand from 'react-expand-animated'
import { useHistory } from 'react-router'

const LiveCasinoHover = ({selection}) => {

	const history = useHistory()
	const [isHover, setHover] = useState(null)

	const gamesArray = [
			{ id: 0, background: Img1_1, highlight: Img1_1_hl, imgText: "에볼루션", btnText: "게임시작", class: "bg-opacity-25" },
			{ id: 1, background: Img1_2, highlight: Img1_2_hl, imgText: "프레그메틱플레이", btnText: "게임시작", class: "bg-opacity-25" },
			{ id: 2, background: Img1_3, highlight: Img1_3_hl, imgText: "로얄지", btnText: "게임시작", class: "bg-opacity-25" },
			{ id: 3, background: Img1_4, highlight: Img1_4_hl, imgText: "아시아게이밍", btnText: "게임시작", class: "bg-opacity-25" },
			{ id: 4, background: Img1_5, highlight: Img1_5_hl, imgText: "드림게이밍", btnText: "게임시작", class: "bg-opacity-25" },
			{ id: 5, background: Img1_6, highlight: Img1_6_hl, imgText: "섹시게이밍", btnText: "게임시작", class: "bg-opacity-25" },
			{ id: 6, background: Img1_7, highlight: Img1_7_hl, imgText: "빅게이밍", btnText: "게임시작", class: "bg-opacity-25" }
	];

	function GamesList({ items }) {
		return items.map(item => (
			<div 
				key={item.id} 
				className={`group relative cursor-pointer flex flex-col items-center justify-end`}
				style={{width:'235px'}}
				onClick={() => history.push('/live-casino')}
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
			open={selection === 0} 
			duration={200}
			className="absolute w-full h-262px border-b border-t border-brown-r796657" 	
		>
			<div onMouseLeave={() => setHover(null)} className="h-262px w-full flex justify-center bg-black bg-opacity-85">
				<div style={{width:'1260px'}} className="flex">
					<GamesList items={gamesArray} />
				</div>
			</div>
		</Expand>
	)
}

export default LiveCasinoHover
