import React, { useState } from 'react'
import Powerball from '../../images/navbarHover/6_1.png'
import PowerballHighlight from '../../images/navbarHover/6_1_hl.png'
import PowerLadder from '../../images/navbarHover/6_2.png'
import PowerLadderHighlight from '../../images/navbarHover/6_2_hl.png'
import Speedkino from '../../images/navbarHover/6_3.png'
import SpeedkinoHighlight from '../../images/navbarHover/6_3_hl.png'
import KinoLadder from '../../images/navbarHover/6_4.png'
import KinoLadderHighlight from '../../images/navbarHover/6_4_hl.png'
import Expand from 'react-expand-animated'
import { useHistory } from 'react-router-dom'

const MinigamesHover = ({ selection }) => {

	const [isHover, setHover] = useState(null)
	const history = useHistory()

	const gamesArray = [
		{ id: 0, background: Powerball, highlight: PowerballHighlight, imgText: "파워볼", color: "bg-purple-d03ab7 text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25", path: "/minigame/powerball" },
		{ id: 1, background: PowerLadder, highlight: PowerLadderHighlight, imgText: "파워사다리", color: "bg-blue-r3384ca text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25", path: "/minigame/powerladder" },
		{ id: 2, background: Speedkino, highlight: SpeedkinoHighlight, imgText: "스피드키노", color: "bg-red-db4a4a text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25", path: "/minigame/speedkino" },
		{ id: 3, background: KinoLadder, highlight: KinoLadderHighlight, imgText: "키노사다리", color: "bg-green-e3ba3c text-white shadow-plain4", btnText: "게임시작", class: "bg-opacity-25", path: "/minigame/kinoladder" }
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
					<button style={{ width: '89px', height: '26px', borderRadius: '2px', background: 'linear-gradient(to bottom, #e8b888, #4e3d0b)' }} className={`p-px hover:opacity-90`}>
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
			open={selection === 5}
			duration={200}
			className="absolute w-full h-262px border-b border-t border-brown-r796657"
		>
			<div onMouseLeave={() => setHover(null)} style={{ minHeight: '262px' }} className="h-full w-full flex justify-center bg-black bg-opacity-85">
				<div style={{ width: '720px' }} className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 limit:grid-cols-4">
					<GamesList items={gamesArray} />
				</div>
			</div>
		</Expand>
	)
}

export default MinigamesHover
