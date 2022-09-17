import CouponGiftPopupTable from 'components/myPage/tables/CouponGiftPopupTable'
import React from 'react'
import CloseIcon from '../../images/popups/close_icon.png'
import Step1 from '../../images/popups/step1_v2.png'
import Step2 from '../../images/popups/step2_v2.png'

const CouponGiftPopup = ({setPopupOpen}) => {
  return (
    <div className="h-722px w-610px flex flex-col rounded-10px overflow-hidden p-px shadow-table"
    style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}>
      <div className="h-full w-full flex flex-col rounded-10px overflow-hidden bg-gray-323231"
        // style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
      >
            <div className="relative h-61px bg-gray-272726 flex items-center justify-center flex-shrink-0 rounded-t-10px">
                <label className="font-spoqaBold text-yellow-ad9e8c tracking-tight text-24px">쿠폰 선물하기</label>
                <button className="absolute right-0 mr-21px cursor-pointer z-20" onClick={()=> setPopupOpen(false)}>
                    <img src={CloseIcon} alt="close_icon" />
                </button>
            </div>

            <div className="w-full h-full bg-white1 pl-33px pr-37px">
                <div className="flex items-center h-19px mt-36px space-x-8px">
                    <img src={Step1} alt="" />
                    <span className="font-spoqaMedium text-16px tracking-tight text-gray-929292 pt-3px">선물로 보낼 쿠폰을 확인하세요.</span>
                </div>

                 <div className="mt-17px h-64px w-full bg-gray-252525 rounded-4px flex items-center font-spoqaMedium text-14px tracking-tight ">
                    <span className="ml-76px text-gray-ccc2b6 leading-none">선물할 쿠폰</span>
                    <div className="w-311px h-42px ml-10px bg-dark-1a1a1a  border border-gray-404040 rounded-2px flex items-center">
                      <span className="text-gray-r8c8c8c ml-11px leading-none">쿠폰테스트</span>
                    </div>
                </div>

                <div className="flex items-center h-19px mt-40px space-x-8px">
                    <img src={Step2} alt="" />
                    <span className="font-spoqaMedium text-16px tracking-tight text-gray-929292 pt-3px">쿠폰받을 회원을 선택하세요.</span>
                </div>

               <div className="mt-17px w-550px h-337px  items-center flex justify-center">
                    <CouponGiftPopupTable />
                </div>

                <div className="w-full flex items-center justify-center mt-21px">
                    <button className="flex items-center justify-center h-52px w-192px rounded-4px bg-gradient-to-t from-blue-3d4a8d to-blue-88d9e8 p-px shadow-link filter hover:brightness-125" onClick={()=> setPopupOpen(false)}>
                        <div 
                        className="flex items-center justify-center h-50px w-190px rounded-4px bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-16px text-blue-d6f3ff pt-px text-shadow-5">쿠폰발송</span>
                        </div>
                    </button>
                </div>
                 
            </div>
            
        </div>
    </div>
    )
}

export default CouponGiftPopup
