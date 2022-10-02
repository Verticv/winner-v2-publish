import React from 'react'
import SignedUpIcon from '../../images/signedUp/signed_up_icon.png'
import img1 from '../../images/signedUp/signed_up_1.png'
import img2 from '../../images/signedUp/signed_up_2.png'
import img3 from '../../images/signedUp/signed_up_3.png'

const SignedUpPopup = ({ setToLogin }) => {
	return (
		<div style={{ height: '630px', width: '770px', borderWidth: '1px', borderColor: '#1f1f1e', backgroundColor: '#323231', borderRadius: '10px' }} className="relative mt-60px shadow-popup flex flex-col items-center">
			<div style={{ marginTop: '-64px' }} className="absolute w-full flex justify-center">
				<img src={SignedUpIcon} alt="login_icon" />
			</div>


			<label style={{ marginTop: '105px', color: '#ad9e8c', letterSpacing: '-0.005em' }} className="text-30px h-30px flex items-center font-spoqaBold">가입 신청이 완료 되었습니다.</label>
			<label style={{ color: '#c8c8c8', letterSpacing: '-0.005em' }} className="flex font-spoqaMedium text-30px h-30px items-center mt-13px">관리자 <label style={{ color: '#1ca7ec' }} className="font-spoqaBold pl-4px">승인 대기중</label> 입니다.</label>

			<div style={{ marginTop: '42px', color: '#c8c8c8' }} className="text-20px font-spoqaMedium flex flex-col items-center justify-center tracking-tighter">
				<span style={{ height: '20px' }} className="flex items-center">관리자 승인 후 로그인 하시면 정상적으로 서비스 이용이 가능합니다.</span>
				<span style={{ height: '20px' }} className="flex items-center mt-5px">당사 사이트는 깨끗하고 안전한 운영을 자랑합니다. </span>
			</div>

			{/* BREAK */}
			<div style={{ marginTop: '51px' }} className="flex space-x-5px">
				<div style={{ height: '190px', width: '234px', backgroundColor: '#272726', borderRadius: '5px' }} className="flex flex-col items-center justify-between">
					<img className="mt-32px" src={img1} alt="" />
					<div style={{ color: '#c8c8c8' }} className="mb-30px flex flex-col items-center">
						<div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center">회원님의 모든 데이터는</div>
						<div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center mt-3px">암호화되어 안전하게 </div>
						<div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center mt-3px">보관됩니다.</div>
					</div>
				</div>
				<div style={{ height: '190px', width: '234px', backgroundColor: '#272726', borderRadius: '5px' }} className="flex flex-col items-center justify-between">
					<img style={{ marginTop: '31px' }} src={img2} alt="" />
					<div style={{ color: '#c8c8c8' }} className="mb-30px flex flex-col items-center">
						<div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center">아이디/비밀번호를</div>
						<div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center mt-3px">분실되지 않도록 보안에</div>
						<div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center mt-3px">신경 써 주세요.</div>
					</div>
				</div>
				<div style={{ height: '190px', width: '234px', backgroundColor: '#272726', borderRadius: '5px' }} className="flex flex-col items-center justify-between">
					<img className="mt-30px" src={img3} alt="" />
					<div style={{ color: '#c8c8c8' }} className="mb-30px flex flex-col items-center">
						<div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center">회원 탈퇴 후</div>
						<div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center mt-3px">회원님의 정보는</div>
						<div className="font-spoqaMedium text-16px tracking-tight h-16px flex items-center mt-3px">완전히 삭제됩니다.</div>
					</div>
				</div>
			</div>
			<button
				style={{ height: '58px', width: '390px', borderRadius: '2px', boxShadow: "0 2px 6px #00000090", textShadow: "0 0 6px #000000", color: '#ffdfbd', background: 'linear-gradient(to bottom, #a67c52, #7f5f3f)' }}
				className="mt-30px flex items-center justify-center text-20px tracking-tighter font-spoqaMedium shadow-lg pt-px hover:brightness-125 filter"
				onClick={() => setToLogin(true)}
			>
				로그인
			</button>
		</div>
	)
}

export default SignedUpPopup
