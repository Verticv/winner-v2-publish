import React, { useState } from 'react'
import Koreaflag from '../../images/korea_flag.png'
import UKflag from '../../images/uk_flag.png'
import LogoutIcon from '../../images/logout.png'
import DropDownControls from '../dropdowns/DropDownControls'
import CountryDropDown from '../dropdowns/CountryDropDown'
import PopupControls from '../popups/PopupControls'
import LoginPopup from '../popups/LoginPopup'
import Nav13 from '../../images/navBar/1_3.png'
import Nav2 from '../../images/navBar/2.png'
import Nav3 from '../../images/navBar/3.png'
import Nav4 from '../../images/navBar/4.png'
import Nav5 from '../../images/navBar/5.png'
import NavbarHover from '../hovers/NavbarHover'
import SignupPopup from '../popups/SignupPopup'
import { useHistory } from 'react-router-dom'
import ArrowDown from '../../images/arrows/arrow_dn.png'

import TopLogo from '../../images/top_logo.png'


const Navbar = ({ isAuthenticated, setAuth }) => {

	const history = useHistory();

	const [selectedTab, setSelectedTab] = useState()
	const [hoveredTab, setHoveredTab] = useState()
	const [country, setCountry] = useState("KR")
	const [isCountryOpen, setCountryOpen] = useState()
	const [isPopupOpen, setPopupOpen] = useState(true)

	const tabClass = "flex-shrink-0 text-yellow-ad9e8c hover:text-white relative flex flex-col items-center justify-center h-45px px-13px cursor-pointer"
	const selectedTabClass = "flex-shrink-0 relative flex flex-col items-center justify-center px-13px cursor-pointer h-45px text-white cursor-pointer"
	const lineClass = "absolute bottom-0 h-2px w-full bg-clear"
	const selectedLineClass = "absolute bottom-0 h-2px w-full bg-white"

	const tabsArray = [
		{ text: "라이브카지노", id: 0 },
		{ text: "슬롯게임", id: 1 },
		{ text: "스포츠", id: 2 },
		{ text: "호텔카지노", id: 3 },
		{ text: "e-스포츠", id: 4 },
		{ text: "미니게임", id: 5 },
		{ text: "키론가상게임", id: 6 },
		{ text: "피싱게임", id: 7 },
		{ text: "티비벳", id: 8 },
	];

	function TabsList({ items }) {
		return items.map(item => (
			<button
				key={item.id}
				style={{ color: selectedTab === item.id ? "#fcd6a8" : "#ad9e8c" }}
				className={selectedTab === item.id ? selectedTabClass : tabClass}
				onClick={() => {
					setSelectedTab(item.id)
					history.push(item.path)
				}}
				onMouseOver={() => {
					setHoveredTab(item.id)
					setSelectedTab(item.id)
				}}
			>
				<span style={{ marginBottom: '3px' }} className="cursor-pointer font-spoqaMedium text-14px tracking-tighter">{item.text}</span>
				<div style={{ backgroundColor: selectedTab === item.id ? "#fcd6a8" : "" }} className={selectedTab === item.id ? selectedLineClass : lineClass}></div>
			</button>
		));
	}

	const CountryButton = (
		<div style={{ height: '22px', color: '#ffdfbd' }} className="flex items-center px-6px hover:brightness-110 filter text-12px text-yellow-ad9e8c cursor-pointer -mt-px">
			<img className="object-none mr-7px" src={country === "KR" ? Koreaflag : UKflag} alt="flag"></img>
			<label className="font-spoqaBold cursor-pointer">{country}</label>
			<img className="object-none ml-2px" src={ArrowDown} alt="flag"></img>
		</div>
	)

	const LoginButton = (
		<button
			style={{ width: '104px', height: '28px', borderRadius: '2px', background: "linear-gradient(to bottom, #a67c52, #826140)", textShadow: '0px 0px 6px #000000', color: '#ffdfbd' }}
			className="flex items-center justify-center text-white text-14px font-spoqaMedium pt-px hover:brightness-125 filter"
		>
			로그인
		</button>
	)

	const SignupButton = (
		<button
			style={{ width: '104px', height: '28px', borderRadius: '2px', background: "linear-gradient(to bottom, #a67c52, #826140)", textShadow: '0px 0px 6px #000000', color: '#ffdfbd' }}
			className="flex items-center justify-center text-white text-14px font-spoqaMedium pt-px hover:brightness-125 filter"
		>
			회원가입
		</button>
	)

	const LoggedInComponent = () => (
		<div className='space-x-5px flex'>
			<button className='flex items-center h-12px' onClick={() => history.push("/mypage/bet-history")}>
				<img src={Nav13} alt="" className='mr-3px object-none' />
				<p style={{ color: '#ad9e8c', WebkitTextStroke: "0.2px" }} className="text-12px h-12px flex items-center tracking-tighter font-spoqaMedium">
					Lv3 마이프로틴화이팅님
				</p>
			</button>
			<div style={{ backgroundColor: '#36322c' }} className='w-px h-12px' />
			<button className='flex items-center h-12px' onClick={() => history.push("/mypage/transaction/charge-history")}>
				<img src={Nav2} alt="" className=' object-none' />
				<p style={{ color: '#ad9e8c', WebkitTextStroke: "0.2px" }} className="text-12px h-12px flex items-center tracking-tighter font-spoqaMedium">
					10,000,000원
				</p>
			</button>
			<div style={{ backgroundColor: '#36322c' }} className='w-px h-12px' />
			<button className='flex items-center h-12px' onClick={() => history.push("/mypage/points/points-apply")}>
				<img src={Nav3} alt="" className=' object-none' />
				<p style={{ color: '#ad9e8c', WebkitTextStroke: "0.2px" }} className="text-12px h-12px flex items-center tracking-tighter font-spoqaMedium">
					12,500P
				</p>
			</button>
			<div style={{ backgroundColor: '#36322c' }} className='w-px h-12px'/>
			<button className='flex items-center h-12px'  onClick={() => history.push("/mypage/inbox")}>
				<img src={Nav4} alt="" className=' object-none' />
				<p style={{ color: '#ad9e8c', WebkitTextStroke: "0.2px" }} className="text-12px h-12px flex items-center tracking-tighter font-spoqaMedium">
					쪽지 2
				</p>
			</button>
			<div style={{ backgroundColor: '#36322c' }} className='w-px h-12px' />
			<button className='flex items-center h-12px'  onClick={() => history.push("/mypage/coupon/coupon-usage")}>
				<img src={Nav5} alt="" className=' object-none' />
				<p style={{ color: '#ad9e8c', WebkitTextStroke: "0.2px" }} className="text-12px h-12px flex items-center tracking-tighter font-spoqaMedium">
					쿠폰 3
				</p>
			</button>
		</div>
	)

	return (
		<div style={{ borderBottomWidth: '1px', borderBottomColor: '#414141' }} className='w-full z-50 bg-black bg-opacity-85 flex flex-col items-start limit1600:items-center limit1920:items-center'>
			<div style={{ width: '1260px' }} className="z-50">

				<div style={{ height: '103px' }} className="">
					<div style={{ height: '59px', paddingTop: '16px' }} className="block justify-center relative">
						<img style={{ margin: 'auto' }} className="cursor-pointer object-none" src={TopLogo} alt="logo" onClick={() => history.push('/')} />

						{isAuthenticated ? (
							<div className='absolute right-0 bottom-0 flex items-center -mb-3px'>
								<button
									onClick={() => history.push("/distributor-page")}
									style={{ width: '104px', height: '28px', borderRadius: '2px', background: "linear-gradient(to bottom, #a67c52, #826140)", textShadow: '0px 0px 6px #000000', color: '#ffdfbd' }}
									className="flex items-center justify-center text-white text-14px font-spoqaMedium filter hover:brightness-125 mr-5px"
								>
									총판페이지
								</button>
								<div style={{ backgroundColor: '#36322c' }} className='w-px h-12px -mr-px' />
								<DropDownControls buttonChild={CountryButton} onClick={() => setCountryOpen(!isCountryOpen)} onClose={() => setCountryOpen(false)} >
									<div className="z-40"><CountryDropDown setCountry={setCountry} country={country} /></div>
								</DropDownControls>
								<div style={{ backgroundColor: '#36322c' }} className='w-px h-12px -ml-2px' />
								<button onClick={() => setAuth(false)}>
									<img src={LogoutIcon} alt="" className='object-none ml-11px mr-4px cursor-pointer' />
								</button>
							</div>
						) : (
							<div className='absolute right-0 bottom-px'>
								<DropDownControls buttonChild={CountryButton} onClick={() => setCountryOpen(!isCountryOpen)} onClose={() => setCountryOpen(false)} >
									<div className="z-40"><CountryDropDown setCountry={setCountry} country={country} /></div>
								</DropDownControls>
							</div>
						)}

					</div>
					<div style={{ height: '44px' }} className="relative flex justify-between flex-row flex-shrink-0 -mt-px">
						<div className="flex items-center flex-shrink-0 -ml-13px">
							<TabsList items={tabsArray} />
						</div>

						<div className="flex justify-end">
							{isAuthenticated ? (
								<div className="mt-16px mr-5px">
									<LoggedInComponent />
								</div>
							) : (
								<div className="flex space-x-10px flex-shrink-0 mt-8px">
									<PopupControls buttonChild={LoginButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
										<LoginPopup setAuth={setAuth} setPopupOpen={setPopupOpen} />
									</PopupControls>
									<PopupControls buttonChild={SignupButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
										<SignupPopup setAuth={setAuth} setPopupOpen={setPopupOpen} />
									</PopupControls>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className='bg-black bg-opacity-85 w-screen -mt-px'>
				<NavbarHover selection={hoveredTab} setHoveredTab={setHoveredTab} setSelectedTab={setSelectedTab} />
			</div>

		</div>
	)
}

export default Navbar
