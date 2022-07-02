import React, { useState } from 'react'
import Koreaflag from '../../images/korea_flag.png'
import UKflag from '../../images/uk_flag.png'
import DropDownControls from '../dropdowns/DropDownControls'
import CountryDropDown from '../dropdowns/CountryDropDown'
import PopupControls from '../popups/PopupControls'
import LoginPopup from '../popups/LoginPopup'
import WalletDropDown from '../dropdowns/WalletDropDown'
import ProfileDropDown from '../dropdowns/ProfileDropDown'
import PersonIcon from '../../images/person_icon.png'
import ArrowUp from '../../images/arrows/arrow_up.png'
import ArrowUpWhite from '../../images/arrows/arrow_up_white.png'
import ArrowDown from '../../images/arrows/arrow_down.png'
import ArrowDownWhite from '../../images/arrows/arrow_down_white.png'
import InboxIcon from '../../images/inbox_icon.png'
import NavbarHover from '../hovers/NavbarHover'
import SignupPopup from '../popups/SignupPopup'
import { useHistory } from 'react-router-dom'

import TopLogo from '../../images/top_logo.png'


const Navbar = ({ isAuthenticated, setAuth }) => {

	const history = useHistory();

	const [selectedTab, setSelectedTab] = useState()
	const [hoveredTab, setHoveredTab] = useState()
	const [country, setCountry] = useState("KR")
	const [isProfileOpen, setProfileOpen] = useState()
	const [isWalletOpen, setWalletOpen] = useState()
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
				className={selectedTab === item.id ? selectedTabClass : tabClass} 
				onClick={() => {
					setSelectedTab(item.id)
					history.push(item.path)
				}}
				onMouseOver={() => {
					setHoveredTab(item.id)
					setSelectedTab(item.id)
				}}
				onMouseLeave={() => {
					item.id > 6 
					&& setSelectedTab(null)
				}}
			>
				<span className="cursor-pointer font-spoqaMedium text-14px tracking-tighter">{item.text}</span>
				<div className={selectedTab === item.id ? selectedLineClass : lineClass}></div>
			</button>
		));
	}
	
	const DropdownArrow = ({isOpen, isWhite}) => (
			<>
			{isWhite ? (
				<img src={isOpen ? ArrowUpWhite : ArrowDownWhite} alt="arrow" />
			) : (
				<img src={isOpen ? ArrowUp : ArrowDown} alt="arrow" />
			)}
			</>
	)

	const CountryButton = (
		<div style={{height:'22px'}} className="flex items-center px-7px hover:opacity-75 text-12px text-yellow-ad9e8c cursor-pointer">
			<img className="object-none mr-7px" src={country === "KR" ? Koreaflag : UKflag} alt="flag"></img>
			<label className="font-spoqaBold cursor-pointer">{country}</label>
			<label className="font-spoqaBold cursor-pointer">{' >'}</label>
		</div>
	)

	const WalletButton = (
			<div className="flex items-center space-x-10px h-40px flex-shrink-0">
					<div className="flex limit1600:flex-col limit1600:-space-y-6px limit1600:space-x-0 space-y-0 space-x-4px items-end  group">
							<div className="">
									<label className="text-blue-r2087f0 cursor-pointer font-spoqaMedium mr-3px group-hover:text-blue-700">₩</label>
									<label className="text-blue-r2087f0 cursor-pointer font-roboto group-hover:text-blue-700">100,000</label>
									<label className="text-blue-r2087f0 cursor-pointer font-spoqaMedium group-hover:text-blue-700">원</label>
							</div>
							<label className="text-orange-ff7e00 cursor-pointer font-roboto group-hover:text-yellow-700">12,500 P</label>
					</div>
					<DropdownArrow isOpen={isWalletOpen}/>
			</div>
	)
	
	const profileButton = (
			<div className="flex-shrink-0 flex items-center justify-center space-x-10px  hover:opacity-75">
					<div className="relative flex items-center justify-center limit1600:h-40px limit1600:w-40px w-30px h-30px rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2">
							<img className="mt-2px ml-2px limit1600:object-none object-contain  limit1600:h-40px limit1600:w-40px w-20px h-20px" src={PersonIcon} alt="person" />
					</div>
					<DropdownArrow isOpen={isProfileOpen}/>
			</div>  
	)

	const LoginButton = (
		<button 
			style={{width:'104px', height:'28px', borderRadius:'2px', background:"linear-gradient(to bottom right, #a67c52, #826140)", textShadow:'0px 0px 6px #00000090'}} 
			className="flex items-center justify-center text-white text-14px font-spoqaMedium shadow-plain2 pt-px hover:opacity-90"
		>
			로그인
		</button>
	)

	const SignupButton = (
		<button 
			style={{width:'104px', height:'28px', borderRadius:'2px', background:"linear-gradient(to bottom right, #a67c52, #826140)", textShadow:'0px 0px 6px #00000090'}} 
			className="flex items-center justify-center text-white text-14px font-spoqaMedium shadow-plain2 pt-px hover:opacity-90"
		>
			회원가입
		</button>
	)

	const InboxButton = (
			<button 
					onClick={() => history.push("/mypage/inbox")} 
					className="flex-shrink-0 relative flex items-center justify-center text-white rounded-full bg-gradient-to-br from-blue-gradLight to-blue-gradDark shadow-plain2 hover:opacity-75 limit1600:h-40px limit1600:w-40px w-30px h-30px"
			>
					<img className="ml-2px mt-2px limit1600:object-none object-contain  limit1600:h-40px limit1600:w-40px w-20px h-20px" src={InboxIcon} alt="inbox_icon" />
					<div className="absolute flex items-center justify-center w-20px h-20px bg-red-notification top-0 right-0 -mr-6px -mt-3px rounded-full shadow-plain6">
							<label className="text-12px font-roboto mt-2px ml-px">1</label>
					</div>
			</button>
	)

	return (
		<div style={{borderBottomWidth:'1px', borderBottomColor:'#414141'}} className='w-full z-50 bg-black bg-opacity-75 flex flex-col items-start limit1920:items-center'>
			<div style={{width:'1260px'}} className="z-50">

				<div style={{height:'104px'}} className="">
					<div style={{height:'59px', paddingTop:'17px'}} className="block justify-center relative">
						<img style={{margin:'auto'}} className="cursor-pointer object-none" src={TopLogo} alt="logo" onClick={() => history.push('/')} />

						<div className='absolute right-0 bottom-0'>
							<DropDownControls buttonChild={CountryButton} onClick={() => setCountryOpen(!isCountryOpen)} onClose={() => setCountryOpen(false)} >
								<div className="z-40"><CountryDropDown setCountry={setCountry} country={country} /></div>
							</DropDownControls>
						</div>
						
					</div>
					<div style={{height:'44px'}} className="relative flex justify-between flex-row flex-shrink-0">
						<div className="flex items-center flex-shrink-0 -ml-13px">
							<TabsList items={tabsArray} />
						</div>
						
						<div className="flex justify-end">
							{isAuthenticated ? (
									<div className="flex space-x-20px items-center flex-shrink-0 limit1600:mt-0 mt-8px">
											{/* BREAK */} 
											<DropDownControls buttonChild={profileButton} onClick={() => setProfileOpen(!isProfileOpen)} onClose={() => setProfileOpen(false)}>
													<div className="mt-4"><ProfileDropDown setAuth={setAuth}/></div>
											</DropDownControls>
											{/* BREAK */}
											<DropDownControls buttonChild={WalletButton} onClick={() => setWalletOpen(!isWalletOpen)} onClose={() => setWalletOpen(false)}>
													<div className="mt-4"><WalletDropDown /></div>
											</DropDownControls>
											{/* BREAK */}
											{InboxButton}
											{/* BREAK */}
											<DropDownControls buttonChild={CountryButton} onClick={() => setCountryOpen(!isCountryOpen)} onClose={() => setCountryOpen(false)}>
													<div className="mt-4"><CountryDropDown setCountry={setCountry} country={country} /></div>
											</DropDownControls>
									</div>

							) : (
								<div className="flex space-x-10px flex-shrink-0 mt-8px">
									<PopupControls buttonChild={LoginButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
										<LoginPopup setAuth={setAuth} setPopupOpen={setPopupOpen}/>
									</PopupControls>  
									<PopupControls buttonChild={SignupButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
										<SignupPopup setAuth={setAuth} setPopupOpen={setPopupOpen}/>
									</PopupControls>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className='bg-white w-screen'>
				<NavbarHover selection={hoveredTab} setHoveredTab={setHoveredTab} setSelectedTab={setSelectedTab}/>
			</div>

		</div>
	)
}

export default Navbar
