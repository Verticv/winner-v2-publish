import React, { useState } from 'react'
import SignupIcon from '../../images/popups/sign_up_icon.png'
import KakaoLogo from '../../images/kakao.png'
import TelegramLogo from '../../images/telegram.png'
import SignedUpPopup from './SignedUpPopup'
import LoginPopup from './LoginPopup'
import CloseIcon from '../../images/popups/close_icon.png'
import DropDownControls from '../dropdowns/DropDownControls'
import DownArrowIcon from '../../images/down_arrow_icon.png'
import CustomDatePicker from 'components/CustomDatePicker'

const SignupPopup = ({setAuth, setPopupOpen}) => {
	
	const [selectedInput, setSelectedInput] = useState(null)
	const [isSignedUp, setSignedUp] = useState(false)
	const [toLogin, setToLogin] = useState()
	const [selectedCarrier, setSelectedCarrier] = useState("통신사선택")
	const [selectedBank, setSelectedBank] = useState("은행선택")
	const [isDropdownOpen, setDropdownOpen] = useState(true)



	const dropDownCellClass = "flex w-170px h-40px py-4px items-center hover:bg-white hover:bg-opacity-10 px-10px"

	const Title = ({text}) => (
		<div style={{height:'42px', backgroundColor:'#272726', borderRadius:'5px'}} className="w-140px space-y-2 flex-shrink-0 flex items-center">
			<label style={{color:'#ccc2b6'}} className="text-gray-r393e41 font-spoqaMedium text-16px ml-10px mt-3px">{text}</label>
		</div>
	)

	const carrierButton = (
		<div style={{height:'42px', backgroundColor:'#191817', borderRadius:'5px'}} className="flex w-170px group cursor-pointer">
			<input className="w-0 text-16px"/>
			<div
				onFocus={() => setSelectedInput(4)}
				onBlur={(e) => setSelectedInput(false)}
				className="flex w-full font-spoqaMedium text-16px outline-none h-full justify-between items-center group"
				style={{color:'#c8c8c8'}} 
			>
				<label className="ml-10px cursor-pointer group-hover:text-gray-100 mt-3px">{selectedCarrier}</label>
				<img className="object-none mr-14px" src={DownArrowIcon} alt="arrow" /> 
			</div>
		</div>
	)
	const bankButton = (

		<div style={{height:'42px', backgroundColor:'#191817', borderRadius:'5px'}} className="flex w-170px group cursor-pointer">
			<input className="w-0 text-16px"/>
			<div
				onFocus={() => setSelectedInput(4)}
				onBlur={(e) => setSelectedInput(false)}
				className="flex w-full font-spoqaMedium text-16px outline-none h-full justify-between items-center group"
				style={{color:'#c8c8c8'}} 
			>
				<label className="ml-10px cursor-pointer group-hover:text-gray-100 mt-3px">{selectedBank}</label>
				<img className="object-none mr-14px" src={DownArrowIcon} alt="arrow" /> 
			</div>
		</div>
	)


	const carrierDropdown = (
		<div style={{backgroundColor:'#272726', color:'#c8c8c8'}} className="flex flex-col items-center justify-center w-170px py-5px rounded shadow-plain5 text-gray-r393e41 font-spoqaMedium text-16px mt-9px">
			<button className={dropDownCellClass} onClick={() => {
				setSelectedCarrier("SKT")
				setDropdownOpen(false)
			}}>
				SKT
			</button>
			<button className={dropDownCellClass} onClick={() => {
				setSelectedCarrier("KT")
				setDropdownOpen(false)
			}}>
				KT
			</button>
			<button className={dropDownCellClass} onClick={() => {
				setSelectedCarrier("LGU+")
				setDropdownOpen(false)
			}}>
					LGU+
			</button>
		</div>
	)
	
	
	const bankDropdown = (
		<div style={{backgroundColor:'#272726', color:'#c8c8c8'}}  className="flex flex-col w-170px h-170px py-5px rounded-lg shadow-plain5 text-gray-r393e41 font-spoqaMedium text-16px overflow-y-scroll overflow-x-hidden mt-9px">
			<button className={dropDownCellClass} onClick={() => {
				setSelectedBank("KEB하나은행")
				setDropdownOpen(false)
			}}>
				KEB하나은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
				setSelectedBank("제주은행")
				setDropdownOpen(false)
			}}>
				제주은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
				setSelectedBank("전북은행")
				setDropdownOpen(false)
			}}>
				전북은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
				setSelectedBank("우체국")
				setDropdownOpen(false)
			}}>
				우체국
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("우리은행");
					setDropdownOpen(false)
			}}>
					우리은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("외환은행")
					setDropdownOpen(false)
			}}>
					외환은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("아메리카")
					setDropdownOpen(false)
			}}>
					아메리카
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("씨티은행")
					setDropdownOpen(false)
			}}>
					씨티은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("신협")
					setDropdownOpen(false)
			}}>
					신협
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("신한은행")
					setDropdownOpen(false)
			}}>
					신한은행
			</button> 
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("수협")
					setDropdownOpen(false)
			}}>
					수협
			</button> 
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("새마을금고")
					setDropdownOpen(false)
			}}>
					새마을금고
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("상호저축은행")
					setDropdownOpen(false)
			}}>
					상호저축은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("산업은행")
					setDropdownOpen(false)
			}}>
					산업은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("부산은행")
					setDropdownOpen(false)
			}}>
					부산은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("미즈호")
					setDropdownOpen(false)
			}}>
					미즈호
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("미쓰비시")
					setDropdownOpen(false)
			}}>
					미쓰비시
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("도이치")
					setDropdownOpen(false)
			}}>
					도이치
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("대구은행")
					setDropdownOpen(false)
			}}>
					대구은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("농협")
					setDropdownOpen(false)
			}}>
					농협
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("기업은행")
					setDropdownOpen(false)
			}}>
					기업은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("국민은행")
					setDropdownOpen(false)
			}}>
					국민은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("광주은행")
					setDropdownOpen(false)
			}}>
					광주은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("경남은행")
					setDropdownOpen(false)
			}}>
					경남은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("SC제일은행")
					setDropdownOpen(false)
			}}>
					SC제일은행
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("JP모간")
					setDropdownOpen(false)
			}}>
					JP모간
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("HSBC")
					setDropdownOpen(false)
			}}>
					HSBC
			</button>
			<button className={dropDownCellClass} onClick={() => {
					setSelectedBank("ABN암로")
					setDropdownOpen(false)
			}}>
					ABN암로
			</button>      
		</div>
	)

	if (toLogin) return (
		<LoginPopup setAuth={setAuth} setPopupOpen={setPopupOpen}/>
	)
	
	else if (isSignedUp) return (
		<SignedUpPopup setToLogin={setToLogin} />
	)
	
	else return (
		<div style={{height:'860px', width:'850px', borderWidth:'1px', borderColor:'#1f1f1e', backgroundColor:'#323231', borderRadius:'10px'}} className="relative mt-60px shadow-popup flex flex-col items-center">
			<button className="w-29 h-29 absolute top-0 right-0 mt-22px mr-22px cursor-pointer z-20 hover:brightness-125 filter" onClick={()=> setPopupOpen(false)}>
				<img src={CloseIcon} alt="close_icon" />
			</button>
			<div style={{marginTop:'-64px'}} className="absolute w-full flex justify-center">
				<img src={SignupIcon} alt="login_icon"/>
			</div>

			<label style={{color:"#ad9e8c"}} className="text-24px h-24px font-spoqaMedium mt-77px">회원가입</label>
			<span style={{color:'#c8c8c8'}} className="text-16px h-16px font-spoqaMedium mt-7px">회원가입 시 모든 항목을 정확하게 기재하시기 바랍니다.</span>
			<span style={{color:'#c8c8c8'}} className="text-16px h-16px font-spoqaMedium mt-3px">회원데이터는 안전한 서버에서 안전하게 보관됩니다. </span>

			{/* BREAK */}
			<div style={{}} className="w-full mt-15px flex flex-col items-center">
				{/* BREAK */}
				<div style={{width:'690px'}} className="w-full flex flex-col">
					<div className="flex space-x-10px w-full">
						<Title text="아이디" />
						<div style={{width:'540px', height:'42px', backgroundColor:'#191817', borderRadius:'5px'}} className="w-full overflow-hidden flex-shrink-0">
							<input 
								style={{width:'540px', height:'42px', backgroundColor:'#191817', color:'#c8c8c8', boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)', borderRadius:'5px'}}
								className="w-full font-spoqaMedium text-16px outline-none px-10px" 
								onFocus={(e) => setSelectedInput(0)}
								onBlur={(e) => setSelectedInput(false)}
							/>
							<div style={{backgroundColor: selectedInput === 0 ? "#a67c52" : "#191817"}} className={`w-full h-2px`} />
						</div>
					</div>
					<span style={{color:'#828282'}} className="text-14px font-spoqa ml-150px h-14px flex items-center mt-6px">영문, 숫자만 입력가능하며 최소 4자이상 입력하세요.</span>
				</div>
				{/* BREAK */}
				<div style={{width:'690px'}} className="w-full flex flex-col mt-7px">
					<div className="flex space-x-10px w-full">
						<Title text="비밀번호" />
						<div style={{width:'540px', height:'42px', backgroundColor:'#191817', borderRadius:'5px'}} className="w-full overflow-hidden flex-shrink-0">
							<input 
								style={{width:'540px', height:'42px', backgroundColor:'#191817', color:'#c8c8c8', boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)', borderRadius:'5px'}}
								className="w-full font-spoqaMedium text-16px outline-none px-10px" 
								onFocus={(e) => setSelectedInput(1)}
								onBlur={(e) => setSelectedInput(false)}
								type="password"
							/>
							<div style={{backgroundColor: selectedInput === 1 ? "#a67c52" : "#191817"}} className={`w-full h-2px`} />
						</div>
					</div>
					<span style={{color:'#828282'}} className="text-14px font-spoqa ml-150px h-14px flex items-center mt-6px">영문 및 숫자를 1자 이상 반드시 포함하여 6~16자 내외로 입력해주세요. (특수문자 사용불가)</span>
				</div>
				{/* BREAK */}
				<div style={{width:'690px'}} className="w-full flex flex-col mt-7px">
					<div className="flex space-x-10px w-full">
						<Title text="환전 비밀번호" />
						<div style={{width:'540px', height:'42px', backgroundColor:'#191817', borderRadius:'5px'}} className="w-full overflow-hidden flex-shrink-0">
							<input 
								style={{width:'540px', height:'42px', backgroundColor:'#191817', color:'#c8c8c8', boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)', borderRadius:'5px'}}
								className="w-full font-spoqaMedium text-16px outline-none px-10px" 
								onFocus={(e) => setSelectedInput(2)}
								onBlur={(e) => setSelectedInput(false)}
								type="password"
							/>
							<div style={{backgroundColor: selectedInput === 2 ? "#a67c52" : "#191817"}} className={`w-full h-2px`} />
						</div>
					</div>
					<span style={{color:'#828282'}} className="text-14px font-spoqa ml-150px h-14px flex items-center mt-6px">영문 및 숫자를 1자 이상 반드시 포함하여 4~8자 내외로 입력해주세요. (특수문자 사용불가)</span>
				</div>
				{/* BREAK */}
				<div style={{width:'690px'}} className="w-full flex flex-col mt-7px">
					<div className="flex space-x-10px w-full">
						<Title text="닉네임" />
						<div style={{width:'540px', height:'42px', backgroundColor:'#191817', borderRadius:'5px'}} className="w-full overflow-hidden flex-shrink-0">
							<input 
								style={{width:'540px', height:'42px', backgroundColor:'#191817', color:'#c8c8c8', boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)', borderRadius:'5px'}}
								className="w-full font-spoqaMedium text-16px outline-none px-10px" 
								onFocus={(e) => setSelectedInput(3)}
								onBlur={(e) => setSelectedInput(false)}
							/>
							<div style={{backgroundColor: selectedInput === 3 ? "#a67c52" : "#191817"}} className={`w-full h-2px`} />
						</div>
					</div>
					<span style={{color:'#828282'}} className="text-14px font-spoqa ml-150px h-14px flex items-center mt-6px">한글, 영문, 숫자를 포함한 4~16자로 입력해주세요.</span>
				</div>
				{/* BREAK */}
				<div style={{width:'690px'}} className="w-full flex flex-col mt-7px">
					<div className="flex space-x-10px w-full">
						<Title text="휴대폰번호" />
						<div className="w-170px flex-shrink-0 space-y-9px">
							<DropDownControls buttonChild={carrierButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen}>
								{carrierDropdown}
							</DropDownControls>
						</div>

						<div style={{width:'360px', height:'42px', backgroundColor:'#191817', borderRadius:'5px'}} className="w-full overflow-hidden flex-shrink-0">
							<input 
								style={{width:'360px', height:'42px', backgroundColor:'#191817', color:'#c8c8c8', boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)', borderRadius:'5px'}}
								className="w-full font-spoqaMedium text-16px outline-none px-10px placeholder-gray-r828282 pt-3px" 
								placeholder="휴대폰번호(숫자만 입력)"
								onFocus={(e) => {
									e.target.placeholder = ""
									setSelectedInput(5)
								}}
								onBlur={(e) => {
									e.target.placeholder = "휴대폰번호(숫자만 입력)"
									setSelectedInput(false)
								}}
							/>
							<div style={{backgroundColor: selectedInput === 5 ? "#a67c52" : "#191817"}} className={`w-full h-2px`} />
						</div>
					</div>
				</div>

				{/* BREAK 1*/}
				<div style={{width:'690px'}} className="w-full flex flex-col mt-10px">
					<div className="flex space-x-10px w-full">
						<Title text="생년월일" />
						<div style={{ width: '540px', height: '42px', backgroundColor: '#191817', borderRadius: '5px' }} className="w-full  flex-shrink-0">
							<div className="relative w-full h-42px custom-date-picker" onClick={()=>setSelectedInput(7)}>

								<CustomDatePicker classes={`flex-shrink-0 outline-none w-full h-42px rounded-4px bg-dark-1a1a1a px-10px font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 focus:ml-10px`} />
							</div>
							
							{/* <div style={{backgroundColor: selectedInput === 7 ? "#a67c52" : "#191817"}} className={`w-full h-2px`} /> */}
						</div>
					</div>
					<span style={{color:'#828282'}} className="text-14px font-spoqa ml-150px h-14px flex items-center mt-6px">수기로 작성시 아이디 생성이 불가합니다. (달력으로 선택해주세요.)</span>
				</div>

				{/* BREAK */}
				<div style={{width:'690px'}} className="w-full flex flex-col mt-11px">
					<div className="flex space-x-10px w-full">
						<Title text="추천인 아이디" />
						<div style={{width:'540px', height:'42px', backgroundColor:'#191817', borderRadius:'5px'}} className="w-full overflow-hidden flex-shrink-0">
							<input 
								style={{width:'540px', height:'42px', backgroundColor:'#191817', color:'#c8c8c8', boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)', borderRadius:'5px'}}
								className="w-full font-spoqaMedium text-16px outline-none px-10px placeholder-gray-r828282 pt-3px" 
								placeholder="가입코드"
								onFocus={(e) => {
										e.target.placeholder = ""
										setSelectedInput(6)
								}} 
								onBlur={(e) => {
										e.target.placeholder = "가입코드"
										setSelectedInput(false)
								}}
							/>
							<div style={{backgroundColor: selectedInput === 6 ? "#a67c52" : "#191817"}} className={`w-full h-2px`} />
						</div>
					</div>
				</div>
				{/* BREAK */}
				<div style={{width:'690px'}} className="w-full flex flex-col mt-12px">
					<div className="flex space-x-10px w-full">
						<Title text="환전 계좌설정" />
						<div className="w-170px flex-shrink-0 space-y-9px">
							<DropDownControls buttonChild={bankButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen} >
								{bankDropdown}
							</DropDownControls>
						</div>

						<div style={{width:'360px', height:'42px', backgroundColor:'#191817', borderRadius:'5px'}} className="w-full overflow-hidden flex-shrink-0">
							<input 
								style={{width:'360px', height:'42px', backgroundColor:'#191817', color:'#c8c8c8', boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)', borderRadius:'5px'}}
								className="w-full font-spoqaMedium text-16px outline-none px-10px placeholder-gray-r828282 pt-3px" 
								placeholder="예금주"
								onFocus={(e) => {
									e.target.placeholder = ""
									setSelectedInput(8)
								}}
								onBlur={(e) => {
									e.target.placeholder = "예금주"
									setSelectedInput(false)
								}}
							/>
							<div style={{backgroundColor: selectedInput === 8 ? "#a67c52" : "#191817"}} className={`w-full h-2px`} />
						</div>
					</div>
				</div>
				{/* BREAK */}
				<div style={{width:'690px'}} className="w-full flex justify-end mt-12px">
					<div style={{width:'540px'}} className="flex">
						<div style={{width:'540px', height:'42px', backgroundColor:'#191817', borderRadius:'5px'}} className="w-full overflow-hidden flex-shrink-0">
							<input 
								style={{width:'540px', height:'42px', backgroundColor:'#191817', color:'#c8c8c8', boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)', borderRadius:'5px'}}
								className="w-full font-spoqaMedium text-16px outline-none px-10px placeholder-gray-r828282 pt-3px" 
								placeholder="계좌번호 (숫자만 입력)"
								onFocus={(e) => {
										e.target.placeholder = ""
										setSelectedInput(9)
									}} 
								onBlur={(e) => {
										e.target.placeholder = "계좌번호 (숫자만 입력)"
										setSelectedInput(false)
								}}
							/>
							<div style={{backgroundColor: selectedInput === 9 ? "#a67c52" : "#191817"}} className={`w-full h-2px`} />
						</div>
					</div>
				</div>
			</div>
			{/* BREAK */}
			<div className="w-full flex flex-col items-center mt-15px">
				<button 
					style={{height:'58px', width:'390px', borderRadius:'2px', boxShadow:"0 2px 6px #00000090", textShadow: "0 0 6px #000000", color:'#ffdfbd', background:'linear-gradient(to bottom, #a67c52, #7f5f3f)'}}
					className="flex items-center justify-center text-20px tracking-tighter font-spoqaMedium shadow-lg pt-px hover:brightness-125 filter"
					onClick={() => setSignedUp(true)}
				>
					회원가입
				</button>

				<div style={{width:'270px'}} className="flex justify-between items-center mt-15px">
					<div className="flex items-center space-x-10px">
						<img className="object-none" src={KakaoLogo} alt="kakao-icon" />
						<span style={{color:'#828282'}} className="font-spoqaMedium text-16px">test1234</span>
					</div>
					<div className="flex items-center space-x-10px">
						<img className="object-none" src={TelegramLogo} alt="kakao-icon" />
						<span style={{color:'#828282'}} className="font-spoqaMedium text-16px">test1234</span>
					</div>
				</div>

			</div>
	</div>
	)
}

export default SignupPopup
