import React, { useState } from 'react'
import LolBanner from '../../images/navbarHover/5_1.png'
import LolBannerHighlight from '../../images/navbarHover/5_1_hl.png'
import SuddenAttackBanner from '../../images/navbarHover/5_2.png'
import SuddenAttackBannerHighlight from '../../images/navbarHover/5_2_hl.png'
import OverwatchBanner from '../../images/navbarHover/5_3.png'
import OverwatchBannerHighlight from '../../images/navbarHover/5_3_hl.png'
import PubgBanner from '../../images/navbarHover/5_4.png'
import PubgBannerHighlight from '../../images/navbarHover/5_4_hl.png'
import Expand from 'react-expand-animated'
import { useHistory } from 'react-router-dom'

const EsportsHover = ({ selection }) => {

	const [isHover, setHover] = useState(null)
	const history = useHistory()

	const gamesArray = [
		{ id: 0, background: LolBanner, highlight: LolBannerHighlight, imgText: "e-스포츠", color: "group-hover:bg-purple-a898ee", btnText: "게임시작", class: "bg-opacity-25" },
		{ id: 1, background: SuddenAttackBanner, highlight: SuddenAttackBannerHighlight, imgText: "화면구성설명", color: "group-hover:bg-red-db4a4a", btnText: "설명보기", class: "bg-opacity-25", path: "/esports/structure" },
		{ id: 2, background: OverwatchBanner, highlight: OverwatchBannerHighlight, imgText: "단폴더베팅방법", color: "group-hover:bg-blue-r3384ca", btnText: "설명보기", class: "bg-opacity-25", path: "/esports/single" },
		{ id: 3, background: PubgBanner, highlight: PubgBannerHighlight, imgText: "다폴더베팅방법", color: "group-hover:bg-teal-r4eb2ba", btnText: "설명보기", class: "bg-opacity-25", path: "/esports/multi" }
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
					<button style={{ width: '89px', height: '26px', borderRadius: '2px', background: 'linear-gradient(to bottom, #e8b888, #4e3d0b)' }} className={`p-px  filter hover:brightness-125`}>
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
			open={selection === 4}
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

export default EsportsHover
