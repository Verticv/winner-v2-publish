import React, { useEffect, useState } from 'react'
import Best from '../../images/best.png'

import Img1_1 from '../../images/navbarHover/1_1.png'
import Img1_2 from '../../images/navbarHover/1_2.png'
import Img1_3 from '../../images/navbarHover/1_3.png'
import Img1_4 from '../../images/navbarHover/1_4.png'
import Img1_5 from '../../images/navbarHover/1_5.png'
import Img1_6 from '../../images/navbarHover/1_6.png'
import Img1_7 from '../../images/navbarHover/1_7.png'
import Img1_8 from '../../images/navbarHover/1_8.png'
import Img1_9 from '../../images/navbarHover/1_9.png'
import Img1_10 from '../../images/navbarHover/1_10.png'

import Img1_1_hl from '../../images/navbarHover/1_1_hl.png'
import Img1_2_hl from '../../images/navbarHover/1_2_hl.png'
import Img1_3_hl from '../../images/navbarHover/1_3_hl.png'
import Img1_4_hl from '../../images/navbarHover/1_4_hl.png'
import Img1_5_hl from '../../images/navbarHover/1_5_hl.png'
import Img1_6_hl from '../../images/navbarHover/1_6_hl.png'
import Img1_7_hl from '../../images/navbarHover/1_7_hl.png'
import Img1_8_hl from '../../images/navbarHover/1_8_hl.png'
import Img1_9_hl from '../../images/navbarHover/1_9_hl.png'
import Img1_10_hl from '../../images/navbarHover/1_10_hl.png'

import Expand from 'react-expand-animated'
import { useHistory } from 'react-router'


const LiveCasinoHover = ({ selection }) => {

	const history = useHistory()
	const [isHover, setHover] = useState(null)
	const [width, setWidth]   = useState(window.innerWidth);
	const updateDimensions = () => {
			setWidth(window.innerWidth);
	}
	
	useEffect(() => {
			window.addEventListener("resize", updateDimensions);
			return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	const gamesArray = [
		{ id: 1, background: Img1_2, highlight: Img1_2_hl, imgText: "프레그메틱플레이", btnText: "게임시작", class: "bg-opacity-25", best:true },
		{ id: 0, background: Img1_1, highlight: Img1_1_hl, imgText: "에볼루션", btnText: "게임시작", class: "bg-opacity-25" },
		{ id: 2, background: Img1_3, highlight: Img1_3_hl, imgText: "로얄지", btnText: "게임시작", class: "bg-opacity-25" },
		{ id: 3, background: Img1_4, highlight: Img1_4_hl, imgText: "아시아게이밍", btnText: "게임시작", class: "bg-opacity-25" },
		{ id: 4, background: Img1_5, highlight: Img1_5_hl, imgText: "드림게이밍", btnText: "게임시작", class: "bg-opacity-25" },
		{ id: 5, background: Img1_6, highlight: Img1_6_hl, imgText: "섹시게이밍", btnText: "게임시작", class: "bg-opacity-25" },
		{ id: 6, background: Img1_7, highlight: Img1_7_hl, imgText: "빅게이밍", btnText: "게임시작", class: "bg-opacity-25" },
		{ id: 7, background: Img1_8, highlight: Img1_8_hl, imgText: "오리엔탈게임", btnText: "게임시작", class: "bg-opacity-25" },
		{ id: 8, background: Img1_9, highlight: Img1_9_hl, imgText: "이주기", btnText: "게임시작", class: "bg-opacity-25" },
		{ id: 9, background: Img1_10, highlight: Img1_10_hl, imgText: "마이크로게이밍", btnText: "게임시작", class: "bg-opacity-25" }
	];

	function GamesList({ items }) {
		return items.map(item => (
			<div
				key={item.id}
				className={`group relative cursor-pointer flex flex-col items-center justify-end flex-shrink-0 h-262px`}
				style={{marginTop: width > 1260 &&  item.id > 6 && "-30px"}}
				onClick={() => history.push('/live-casino')}
				onMouseEnter={() => setHover(item.id)}
			>
				{item.best && (
					<img src={Best} alt="" style={{width:'81px', height:'81px',position:'absolute', top:'15px', left:0, zIndex:40}} />
				)}
				<p style={{ color: '#ffdfbd', marginBottom: '70px' }} className={`absolute bottom-0 z-20 text-13px tracking-tighter font-spoqa h-13px items-center flex flex-shrink-0`}>{item.imgText}</p>
				<div style={{ marginBottom: '31px' }} className={`absolute z-20`}>
					<button style={{ width: '89px', height: '26px', borderRadius: '2px', background: 'linear-gradient(to bottom, #e8b888, #4e3d0b)' }} className={`p-px filter hover:brightness-125`}>
						<div style={{ borderRadius: '2px', background: isHover === item.id ? 'linear-gradient(to bottom, #f38d27, #b55b01)' : 'linear-gradient(to bottom, #a67c52, #805f3f)' }} className='w-full h-full flex items-center justify-center'>
							<p style={{ color: '#ffdfbd', textShadow: "0 0 3px #00000090" }} className="text-13px font-spoqaMedium tracking-tight">게임시작</p>
						</div>
					</button>
				</div>
				<img className={`${isHover === item.id ? "opacity-0" : "opacity-100"} absolute bottom-0 object-none h-full mb-13px flex-shrink-0`} src={item.background} alt="game_image" />
				<img className={`${isHover === item.id ? "opacity-100" : "opacity-0"} absolute bottom-0 object-none h-full mb-13px flex-shrink-0`} src={item.highlight} alt="game_image" />
			</div>
		))
	}

	return (
		<Expand
			open={selection === 0}
			duration={200}
			className="absolute w-full h-262px border-b border-t border-brown-r796657"
		>
			<div onMouseLeave={() => setHover(null)} style={{ minHeight: '262px' }} className="h-full w-full flex justify-center bg-black bg-opacity-85">
				<div style={{ width: '1260px' }} className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 limit:grid-cols-7 -gap-y-4">
					<GamesList items={gamesArray} />
				</div>
			</div>
		</Expand>
	)
}

export default LiveCasinoHover
