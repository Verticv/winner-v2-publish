import React, { useState } from 'react'
import LoginIcon from '../../images/popups/login_icon.png'
import SignupPopup from './SignupPopup'
import CloseIcon from '../../images/popups/close_icon.png'
import Username from '../../images/popups/username.png'
import Password from '../../images/popups/password.png'

const LoginPopup = ({ setAuth, setPopupOpen }) => {

	const [toSignup, setToSignup] = useState(false)
	const [selectedInput, setSelectedInput] = useState()

	if (toSignup) return (
		<SignupPopup setAuth={setAuth} setPopupOpen={setPopupOpen} />
	)

	else return (
		<div style={{ height: '526px', width: '450px', backgroundColor: '#323231', borderRadius: '10px', borderWidth: '1px', borderColor: '#1f1f1e' }} className="relative shadow-popup flex flex-col items-center">
			<button className="absolute top-0 right-0 mt-22px mr-22px cursor-pointer z-20 filter hover:brightness-125" onClick={() => setPopupOpen(false)}>
				<img src={CloseIcon} alt="close_icon" />
			</button>
			<div style={{ marginTop: '-64px' }} className="absolute w-full flex justify-center">
				<img src={LoginIcon} alt="login_icon" />
			</div>
			<div className='w-full flex justify-center'>
				<label style={{ color: '#ad9e8c', marginTop: '92px' }} className='font-spoqaBold text-24px h-14px'>로그인</label>
			</div>

			<div style={{ width: '390px', height: '64px', backgroundColor: '#191817', borderRadius: '4px', boxShadow: 'inset 1px 1px 1px 0px rgba(0, 0, 0, 1)' }} className="relative overflow-hidden flex items-center flex-shrink-0 mt-48px py-4px">
				<img src={Username} alt="" className="ml-19px" />
				<input
					style={{ color: '#948d81', backgroundColor: '#191817', borderRadius: '4px' }}
					className="text-20px outline-none font-spoqa w-full h-full pl-18px placeholder-gray-r948d81 pt-3px"
					placeholder={"아이디"}
					onFocus={(e) => {
						e.target.placeholder = ""
						setSelectedInput(0)
					}}
					onBlur={(e) => {
						e.target.placeholder = "아이디"
						setSelectedInput(false)
					}}
				/>
				<div style={{ backgroundColor: selectedInput === 0 ? "#a67c52" : "#191817" }} className={`absolute bottom-0 w-full h-3px`} />

			</div>

			<div style={{ width: '390px', height: '64px', backgroundColor: '#191817', borderRadius: '4px', boxShadow: 'inset 1px 1px 1px 0px rgba(0, 0, 0, 1)' }} className="relative overflow-hidden flex items-center flex-shrink-0 mt-20px py-4px">
				<img src={Password} alt="" className="ml-21px" />
				<input
					style={{ color: '#948d81', backgroundColor: '#191817', borderRadius: '4px' }}
					className="text-20px outline-none font-spoqa w-full h-full pl-19px placeholder-gray-r948d81 pt-3px"
					placeholder={"비밀번호"}
					type="password"
					onFocus={(e) => {
						e.target.placeholder = ""
						setSelectedInput(1)
					}}
					onBlur={(e) => {
						e.target.placeholder = "비밀번호"
						setSelectedInput(false)
					}}
				/>
				<div style={{ backgroundColor: selectedInput === 1 ? "#a67c52" : "#191817" }} className={`absolute bottom-0 w-full h-3px`} />

			</div>

			<button
				style={{ height: '58px', width: '390px', borderRadius: '2px', boxShadow: "0 2px 6px #00000090", textShadow: "0 0 6px #000000", color: '#ffdfbd', background: 'linear-gradient(to bottom, #a67c52, #7f5f3f)' }}
				className="text-20px tracking-tighter font-spoqaMedium text-white filter hover:brightness-125 mt-40px flex-shrink-0"
				onClick={() => setAuth(true)}
			>
				로그인
			</button>

			<div className="font-spoqaMedium text-16px mt-55px">
				<span style={{ color: '#929292' }}>아이디가 없으신가요?</span>
				<button style={{ color: '#948d81' }} className="filter hover:brightness-125 ml-8px" onClick={() => setToSignup(true)}>
					<p className='h-16px'>회원가입</p>
					<div style={{ width: '60px', height: '1px', backgroundColor: '#948d81' }} className="mt-4px"></div>
				</button>
			</div>
		</div>
	)
}

export default LoginPopup
