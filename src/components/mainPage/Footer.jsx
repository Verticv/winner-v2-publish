import React, { useState } from 'react'
import Telegram from '../../images/telegram.png'
import Kakao from '../../images/kakao.png'
import Plus18 from '../../images/18.png'
import Footer1 from '../../images/footer/footer1.png'
import Footer2 from '../../images/footer/footer2.png'
import Footer3 from '../../images/footer/footer3.png'
import Footer4 from '../../images/footer/footer4.png'
import Footer5 from '../../images/footer/footer5.png'
import Footer6 from '../../images/footer/footer6.png'
import Footer7 from '../../images/footer/footer7.png'
import Footer8 from '../../images/footer/footer8.png'
import Footer9 from '../../images/footer/footer9.png'
import Footer10 from '../../images/footer/footer10.png'
import Footer11 from '../../images/footer/footer11.png'
import Footer12 from '../../images/footer/footer12.png'
import Footer13 from '../../images/footer/footer13.png'
import Footer14 from '../../images/footer/footer14.png'
import Footer15 from '../../images/footer/footer15.png'
import Footer16 from '../../images/footer/footer16.png'
import { useHistory } from 'react-router-dom'
import PopupControls from 'components/popups/PopupControls'
import ReauthenticatePopup from 'components/popups/ReauthenticatePopup'

const Footer = ({ fullWidth = false }) => {

	const history = useHistory()
	const [isPopupOpen, setPopupOpen] = useState(true)

	const FirstRow = () => (
		<div className='flex items-center mr-36px'>
			<img src={Footer1} className="object-none" alt="" />
			<img src={Footer2} className="object-none ml-50px" alt="" />
			<img src={Footer3} className="object-none ml-43px" alt="" />
			<img style={{ marginLeft: '51px' }} src={Footer4} className="object-none" alt="" />
			<img src={Footer5} className="object-none ml-70px" alt="" />
		</div>
	)

	const SecondRow = () => (
		<div className='flex items-center mr-26px mt-25px'>
			<img src={Footer6} className="object-none" alt="" />
			<img src={Footer7} className="object-none ml-40px" alt="" />
			<img src={Footer8} className="object-none ml-55px" alt="" />
			<img style={{ marginLeft: '74px' }} src={Footer9} className="object-none" alt="" />
			<img src={Footer10} className="object-none ml-57px" alt="" />
		</div>
	)

	const ThirdRow = () => (
		<div className='flex items-center mr-40px mt-27px'>
			<img src={Footer11} className="object-none" alt="" />
			<img src={Footer12} className="object-none ml-50px" alt="" />
			<img src={Footer13} className="object-none ml-19px" alt="" />
			<img style={{ marginLeft: '35px' }} src={Footer14} className="object-none" alt="" />
			<img style={{ marginLeft: '51px' }} src={Footer15} className="object-none" alt="" />
			<img style={{ marginLeft: '68px' }} src={Footer16} className="object-none" alt="" />
		</div>
	)

	return (
		<div style={{ height: '313px', backgroundColor: '#252525' }} className={`flex flex-col items-center flex-shrink-0 ${fullWidth ? "w-1836px limit1836:w-screen" : "w-1300 limit:w-screen"}`}>
			<div style={{ height: '221px', paddingTop: '32px' }} className="flex w-default flex-shrink-0">
				<div style={{ width: '221px', height: '158px' }} className="flex-shrink-0">
					<p className="font-spoqa text-14px h-14px tracking-tigther text-white mb-23px">마이페이지</p>
					<p onClick={() => history.push('/mypage/bet-history')} className="font-spoqa text-14px h-14px tracking-tigther mb-23px text-gray-r828282 hover:text-gray-300 cursor-pointer">베팅내역</p>
					<p onClick={() => history.push('/mypage/coupon/coupon-usage')} className="font-spoqa text-14px h-14px tracking-tigther mb-23px text-gray-r828282 hover:text-gray-300 cursor-pointer">쿠폰관리</p>
					<p onClick={() => history.push('/mypage/points/points-apply')} className="font-spoqa text-14px h-14px tracking-tigther mb-23px text-gray-r828282 hover:text-gray-300 cursor-pointer">포인트</p>
					<PopupControls
						buttonChild={<p style={{marginLeft:'-169px'}} onClick={() => history.push('/')} className="font-spoqa text-14px h-14px tracking-tigther text-gray-r828282 hover:text-gray-300 cursor-pointer">회원정보</p>}
						isPopupOpen={isPopupOpen}
						setPopupOpen={setPopupOpen}
					>
						<ReauthenticatePopup setPopupOpen={setPopupOpen} />
					</PopupControls>
				</div>

				<div style={{ width: '221px', height: '158px' }} className="flex-shrink-0">
					<p className="font-spoqa text-14px h-14px tracking-tigther text-white mb-23px">고객센터</p>
					<p onClick={() => history.push('/cscenter/contact/all')} className="font-spoqa text-14px h-14px tracking-tigther mb-23px text-gray-r828282 hover:text-gray-300 cursor-pointer">문의하기</p>
					<p onClick={() => history.push('/cscenter/announcement/all')} className="font-spoqa text-14px h-14px tracking-tigther mb-23px text-gray-r828282 hover:text-gray-300 cursor-pointer">공지사항</p>
					<p onClick={() => history.push('/cscenter/faq/all')} className="font-spoqa text-14px h-14px tracking-tigther mb-23px text-gray-r828282 hover:text-gray-300 cursor-pointer">자주묻는질문</p>
					<p onClick={() => history.push('/cscenter/policy/sportsgame/soccer')} className="font-spoqa text-14px h-14px tracking-tigther text-gray-r828282 hover:text-gray-300 cursor-pointer">베팅규정</p>
				</div>

				<div className='w-full flex flex-col items-end'>
					<FirstRow />
					<SecondRow />
					<ThirdRow />
				</div>
			</div>
			<div style={{ backgroundColor: '#383838' }} className='h-px w-default flex-shrink-0' />


			<div style={{ height: '91px' }} className="w-default flex justify-between flex-shrink-0 items-center">
				<div className='flex items-center'>
					<img src={Plus18} className="object-none mr-20px" alt="" />
					<div style={{ backgroundColor: '#383838' }} className='h-25px w-px flex-shrink-0'></div>
					<img src={Kakao} className="object-none ml-20px mr-5px" alt="" />
					<p className='text-14px font-spoqa text-gray-r828282'>test1234</p>
					<img src={Telegram} className="object-none ml-8px mr-5px" alt="" />
					<p className='text-14px font-spoqa text-gray-r828282'>test1234</p>
				</div>

				<p className='text-14px font-spoqa text-gray-r828282'>Copyright © WINNER. All rights reserved.</p>
			</div>


		</div>
	)
}

export default Footer
