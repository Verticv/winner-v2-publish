import React, { useState } from 'react'
import Expand from 'react-expand-animated'
import { useHistory } from 'react-router-dom'
import img1 from '../../images/navbarHover/9_1.png'
import img1hl from '../../images/navbarHover/9_1_hl.png'
import img2 from '../../images/navbarHover/9_2.png'
import img2hl from '../../images/navbarHover/9_2_hl.png'
import img3 from '../../images/navbarHover/9_3.png'
import img3hl from '../../images/navbarHover/9_3_hl.png'

const TvBetHover = ({ selection }) => {
	const [isHover, setHover] = useState(null)

	const history = useHistory()
	const gamesArray = [
		{ id: 0, background: img1, highlight: img1hl, imgText: "티비벳", color: "group-hover:bg-blue-r3384ca", btnText: "게임시작", class: "bg-opacity-25" },
		{ id: 1, background: img2, highlight: img2hl, imgText: "화면구성설명", color: "group-hover:bg-blue-r3384ca", btnText: "설명보기", class: "bg-opacity-25", path: '/tvbet/structure' },
		{ id: 2, background: img3, highlight: img3hl, imgText: "베팅방법", color: "group-hover:bg-blue-r3384ca", btnText: "설명보기", class: "bg-opacity-25", path: '/tvbet/how-to' }
	];

	function GamesList({ items }) {
		return items.map(item => (
			<div
				key={item.id}
				className={`group relative cursor-pointer flex flex-col items-center justify-end flex-shrink-0 h-262px`}
				// style={{ width: '235px' }}
				onMouseEnter={() => setHover(item.id)}
				onClick={() => history.push(item.path)}
			>
				<p style={{ color: '#ffdfbd', marginBottom: '70px' }} className={`absolute bottom-0 z-20 text-13px tracking-tighter font-spoqa h-13px items-center flex`}>{item.imgText}</p>
				<div style={{ marginBottom: '31px' }} className={`absolute z-20`}>
					<button style={{ width: '89px', height: '26px', borderRadius: '2px', background: 'linear-gradient(to bottom, #e8b888, #4e3d0b)' }} className={`p-px filter hover:brightness-125`}>
						<div style={{ borderRadius: '2px', background: isHover === item.id ? 'linear-gradient(to bottom, #f38d27, #b55b01)' : 'linear-gradient(to bottom, #a67c52, #805f3f)' }} className='w-full h-full flex items-center justify-center'>
							<p style={{ color: '#ffdfbd', textShadow: "0 0 3px #00000090" }} className="text-13px font-spoqaMedium tracking-tight">{item.btnText}</p>
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
			open={selection === 8}
			duration={200}
			className="absolute w-full h-262px border-b border-t border-brown-r796657"
		>
			<div onMouseLeave={() => setHover(null)} style={{ minHeight: '262px' }} className="h-full w-full flex justify-center bg-black bg-opacity-85">
				<div style={{ width: '540px' }} className="grid grid-cols-3">
					<GamesList items={gamesArray} />
				</div>
			</div>
		</Expand>
	)
}

export default TvBetHover
