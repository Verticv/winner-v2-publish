import React from 'react'
import Telegram from '../../images/telegram.png'
import Kakao from '../../images/kakao.png'
import Plus18 from '../../images/18.png'

const Footer = ({fullWidth = false}) => {

    return (
			<div style={{height:'313px', backgroundColor:'#252525'}}  className={`flex flex-col items-center flex-shrink-0 ${fullWidth ? "w-1836px limit1836:w-screen" : "w-1300 limit:w-screen"}`}>
				<div style={{height:'221px', paddingTop:'32px'}} className="flex w-default flex-shrink-0">
						
						<div style={{width:'221px', height:'158px'}} className="flex-shrink-0">
							<p className="font-spoqa text-14px h-14px tracking-tigther text-white mb-23px">마이페이지</p>
							<p className="font-spoqa text-14px h-14px tracking-tigther mb-23px text-gray-r828282 hover:text-gray-300 cursor-pointer">베팅내역</p>
							<p className="font-spoqa text-14px h-14px tracking-tigther mb-23px text-gray-r828282 hover:text-gray-300 cursor-pointer">쿠폰관리</p>
							<p className="font-spoqa text-14px h-14px tracking-tigther mb-23px text-gray-r828282 hover:text-gray-300 cursor-pointer">포인트</p>
							<p className="font-spoqa text-14px h-14px tracking-tigther text-gray-r828282 hover:text-gray-300 cursor-pointer">회원정보</p>
						</div>

						<div style={{width:'221px', height:'158px'}} className="flex-shrink-0">
							<p className="font-spoqa text-14px h-14px tracking-tigther text-white mb-23px">고객센터</p>
							<p className="font-spoqa text-14px h-14px tracking-tigther mb-23px text-gray-r828282 hover:text-gray-300 cursor-pointer">문의하기</p>
							<p className="font-spoqa text-14px h-14px tracking-tigther mb-23px text-gray-r828282 hover:text-gray-300 cursor-pointer">공지사항</p>
							<p className="font-spoqa text-14px h-14px tracking-tigther mb-23px text-gray-r828282 hover:text-gray-300 cursor-pointer">자주묻는질문</p>
							<p className="font-spoqa text-14px h-14px tracking-tigther text-gray-r828282 hover:text-gray-300 cursor-pointer">베팅규정</p>
						</div>
						
						<div className='w-full bg-gray-100 h-24'></div>
				</div>
				<div style={{backgroundColor:'#383838'}} className='h-px w-default flex-shrink-0' />


				<div style={{height:'91px'}} className="w-default flex justify-between flex-shrink-0 items-center">
					<div className='flex items-center'>
						<img src={Plus18} className="object-none mr-20px"  alt="" />
						<div style={{backgroundColor:'#383838'}} className='h-25px w-px flex-shrink-0'></div>
						<img src={Kakao} className="object-none ml-20px mr-5px" alt="" />
						<p className='text-12px font-spoqa text-gray-r828282'>test1234</p>
						<img src={Telegram} className="object-none ml-8px mr-5px" alt="" />
						<p className='text-12px font-spoqa text-gray-r828282'>test1234</p>
					</div>

					<p className='text-14px font-spoqa text-gray-r828282'>Copyright © WINNER. All rights reserved.</p>
				</div>


			</div>
    )
}

export default Footer
