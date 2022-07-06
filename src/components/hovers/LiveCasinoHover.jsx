import React, { useEffect, useState } from 'react'
import one from '../../images/navbarHover/submenus/submenu_normal_1.png'
import oneHighlight from '../../images/navbarHover/submenus/submenu_hover_1.png'
import two from '../../images/navbarHover/submenus/submenu_normal_2.png'
import twoHighlight from '../../images/navbarHover/submenus/submenu_hover_2.png'
import three from '../../images/navbarHover/submenus/submenu_normal_3.png'
import threeHighlight from '../../images/navbarHover/submenus/submenu_hover_3.png'
import four from '../../images/navbarHover/submenus/submenu_normal_4.png'
import fourHighlight from '../../images/navbarHover/submenus/submenu_hover_4.png'
import five from '../../images/navbarHover/submenus/submenu_normal_5.png'
import fiveHighlight from '../../images/navbarHover/submenus/submenu_hover_5.png'
import six from '../../images/navbarHover/submenus/submenu_normal_6.png'
import sixHighlight from '../../images/navbarHover/submenus/submenu_hover_6.png'
import seven from '../../images/navbarHover/submenus/submenu_normal_7.png'
import sevenHighlight from '../../images/navbarHover/submenus/submenu_hover_7.png'
import eight from '../../images/navbarHover/submenus/submenu_normal_8.png'
import eightHighlight from '../../images/navbarHover/submenus/submenu_hover_8.png'
import Subicon1 from '../../images/navbarHover/submenus/subicon_1.png'
import Subicon2 from '../../images/navbarHover/submenus/subicon_2.png'
import Subicon3 from '../../images/navbarHover/submenus/subicon_3.png'
import Subicon4 from '../../images/navbarHover/submenus/subicon_4.png'
import Subicon5 from '../../images/navbarHover/submenus/subicon_5.png'
import Subicon6 from '../../images/navbarHover/submenus/subicon_6.png'
import Subicon7 from '../../images/navbarHover/submenus/subicon_7.png'
import Subicon8 from '../../images/navbarHover/submenus/subicon_8.png'

import Img1_1 from '../../images/navbarHover/1_1.png'
import Img1_2 from '../../images/navbarHover/1_2.png'
import Img1_3 from '../../images/navbarHover/1_3.png'
import Img1_4 from '../../images/navbarHover/1_4.png'
import Img1_5 from '../../images/navbarHover/1_5.png'
import Img1_6 from '../../images/navbarHover/1_6.png'
import Img1_7 from '../../images/navbarHover/1_7.png'

import Img1_2_hl from '../../images/navbarHover/1_2_hl.png'

import Expand from 'react-expand-animated'
import { useHistory } from 'react-router'

const LiveCasinoHover = ({selection}) => {

	const history = useHistory()
	const [isHover, setHover] = useState(null)

	const gamesArray = [
			{ id: 0, background: Img1_1, highlight: Img1_2_hl, top: "5px", imgText: "에볼루션", btnText: "게임시작", class: "bg-opacity-25" },
			{ id: 1, background: Img1_2, highlight: Img1_2_hl, top: "5px", imgText: "프레그메틱플레이", btnText: "게임시작", class: "bg-opacity-25" },
			{ id: 2, background: Img1_3, highlight: Img1_2_hl, top: "", imgText: "로얄지", btnText: "게임시작", class: "bg-opacity-25" },
			{ id: 3, background: Img1_4, highlight: Img1_2_hl, top: "4px", imgText: "아시아게이밍", btnText: "게임시작", class: "bg-opacity-25" },
			{ id: 4, background: Img1_5, highlight: Img1_2_hl, top: "4px", imgText: "드림게이밍", btnText: "게임시작", class: "bg-opacity-25" },
			{ id: 5, background: Img1_6, highlight: Img1_2_hl, top: "", imgText: "섹시게이밍", btnText: "게임시작", class: "bg-opacity-25" },
			{ id: 6, background: Img1_7, highlight: Img1_2_hl, top: "px", imgText: "빅게이밍", btnText: "게임시작", class: "bg-opacity-25" }
	];

	const itemsArray = [
			{ id: 0, background: one, highlight: oneHighlight, icon: Subicon1, color: "text-submenu-r8b5f5a", btnText: "일인칭 바카라", customCss: "ml-42px mb-px" },
			{ id: 1, background: two, highlight: twoHighlight, icon: Subicon2, color: "text-submenu-r4a6940", btnText: "일인칭 메가볼", customCss: "ml-43px" },
			{ id: 2, background: three, highlight: threeHighlight, icon: Subicon3, color: "text-submenu-r72485c", btnText: "RNG 블랙잭", customCss: "ml-42px" },
			{ id: 3, background: four, highlight: fourHighlight, icon: Subicon4, color: "text-submenu-r58508e", btnText: "RNG 룰렛", customCss: "ml-43px" },
			{ id: 4, background: five, highlight: fiveHighlight, icon: Subicon5, color: "text-submenu-r5a6340", btnText: "일인칭 드림캐쳐", customCss: "ml-42px mb-px" },
			{ id: 5, background: six, highlight: sixHighlight, icon: Subicon6, color: "text-submenu-r5a608b", btnText: "일인칭 라이트닝 룰렛", customCss: "ml-43px" },
			{ id: 6, background: seven, highlight: sevenHighlight, icon: Subicon7, color: "text-submenu-r87409b", btnText: "일인칭 용호", customCss: "ml-42px" },
			{ id: 7, background: eight, highlight: eightHighlight, icon: Subicon8, color: "text-submenu-r9e5959", btnText: "일인칭 탑카드", customCss: "ml-42px" }
	];

	function GamesList({ items }) {
		return items.map(item => (
			<div 
				key={item.id} 
				className={`group relative cursor-pointer flex flex-col items-center pt-${item.top}`}
				onClick={() => history.push('/live-casino')}
				onMouseEnter={() => setHover(item.id)}
			>
				<p style={{color:'#ffdfbd', marginTop:'157px'}} className={`absolute top-0 z-20 text-13px tracking-tighter font-spoqa h-13px items-center flex pb-${item.top}`}>{item.imgText}</p>
				<div style={{marginTop: item.top === "5px" ? '179px' : item.top === "4px" ? '180px' : item.top ==="px" ? '183px' : '184px'}} className={`absolute z-20`}>
					<button style={{width:'89px', height:'26px', borderRadius:'2px', background:'linear-gradient(to bottom, #e8b888, #4e3d0b)'}} className={`p-px hover:opacity-90`}>
						<div style={{borderRadius:'2px', background: isHover === item.id ? 'linear-gradient(to bottom, #f38d27, #b55b01)' : 'linear-gradient(to bottom, #a67c52, #805f3f)'}} className='w-full h-full flex items-center justify-center'>
							<p style={{color:'#ffdfbd', textShadow: "0 0 3px #00000090"}} className="text-13px font-spoqaMedium tracking-tight">게임시작</p>
						</div>
					</button>
				</div>
				<img className={`${isHover === item.id ? "opacity-0" : "opacity-100"} object-none`} src={item.background} alt="game_image" />
				<img className={`${isHover === item.id ? "opacity-100" : "opacity-0"} absolute top-0 object-none`} src={item.highlight} alt="game_image" />
			</div>
		))
	}

	function ItemsList({ items }) {
		return items.map(item => (
			<button key={item.id} className="relative group h-57px flex-shrink-0" onMouseEnter={() => setHover(0)}>
				<div className="z-20 absolute h-57px flex items-center ">
					<img className={item.customCss} src={item.icon} alt="icon" />
					<span className={`font-spoqaMedium ml-4px mt-px text-14px tracking-tight ${item.color}`}>{item.btnText}</span>
				</div>
				<img className={`z-10 group-hover:opacity-0`} src={item.background} alt="game_image" />
				<img className={`z-10 opacity-0 group-hover:opacity-100 absolute top-0`} src={item.highlight} alt="game_image" />
			</button>
		));
	}
	const [isDesktop, setDesktop] = useState(false);

	useEffect(() => {
		if (window.innerWidth > 1600) {
			setDesktop(true);
		} else {
			setDesktop(false);
		}

		const updateMedia = () => {
			if (window.innerWidth > 1600) {
				setDesktop(true);
			} else {
				setDesktop(false);
			}
		};
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	}, []);

	return (
		<Expand 
			open={selection === 0} 
			duration={200}
			className="absolute w-full h-262px bg-black bg-opacity-85 border-b border-t border-brown-r796657 space-y-50px" 	
		>
			<div onMouseLeave={() => setHover(null)}>
				{!isDesktop && (
					<Expand
						open={isHover === 0}
						duration={200}
					>
						<div className={`text-center content-center pt-10px -space-x-33px`}>
							<ItemsList items={itemsArray} />
						</div>
					</Expand>
				)}
				<div className="grid grid-cols-3 lg:grid-cols-4 limit:grid-cols-5 limit1600:flex limit1600:h-262px limit:justify-center justify-start pt-19px space-x-2px pl-7px">
					<GamesList items={gamesArray} />
				</div>
				{isDesktop && (
					<Expand
						open={isHover === 0}
						duration={200}
					>
						<div className={`text-center content-center pt-10px -space-x-33px`}>
							<ItemsList items={itemsArray} />
						</div>
					</Expand>
				)}
			</div>
		</Expand>
	)
}

export default LiveCasinoHover
