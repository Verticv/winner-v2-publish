import React, { useState } from 'react'
import CloseIcon from '../../images/popups/close_icon.png'
import AlertIcon from '../../images/myPage/alert.png'
import { useHistory } from 'react-router'

const PointsApplyPopup = ({setPopupOpen, isQuickMenu = false}) => {

    const history = useHistory()
    var nf = new Intl.NumberFormat();
    const [inputValue, setInputValue] = useState(null)

    return (
        <div className="h-510px w-610px flex flex-col rounded-10px overflow-hidden p-px shadow-table"
            style={{ width: "609px", background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}>
            <div className="h-full w-full flex flex-col rounded-10px overflow-hidden bg-gray-323231">
                <div className="relative pt-20px pb-20px h-61px bg-gray-272726 flex items-center justify-center flex-shrink-0 rounded-t-10px">
                    <label className="font-spoqaBold text-yellow-ad9e8c  text-24px">포인트  전환  신청</label>
                    <button className="absolute top-21px right-21px cursor-pointer z-20" onClick={()=> setPopupOpen(false)}>
                        <img src={CloseIcon} alt="close_icon" />
                    </button>
                </div>        
                <div className="w-full h-full pt-39px pl-34px pr-32px pb-38px">
                    <div className="w-full rounded-4px border border-red-594c49 bg-red-413937 px-19px pt-17px pb-15px">
                        <div className="flex items-center h-26px space-x-9px">
                            <img src={AlertIcon} alt="" />
                            <span className="text-red-e65454 font-spoqaMedium text-20px tracking-tight mt-px" style={{WebkitTextStroke:"0.2px"}}>확인 / 필독사항</span>
                        </div>
                        <div className="mt-14px flex flex-col space-y-6px text-gray-ccc2b6 tracking-tight font-spoqaMedium text-16px">
                            <span ><span className="font-bold mr-4px">✓</span>  포인트 전환 시 보유머니로 충전됩니다.</span>
                            <span ><span className="font-bold mr-4px">✓</span>  최소 10,000P 이상 신청 가능합니다.</span>
                            <span ><span className="font-bold mr-4px">✓</span>  자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.</span>
                        </div>
                    </div>
                    <div className="flex items-center text-16px font-spoqaMedium text-gray-929292 tracking-tight mt-36px">
                        <span>사용 가능한 포인트 : </span>
                        <span className="text-blue-2980b9 ml-2px font-spoqaBold">278</span>
                        <span className="text-gray-ccc2b6">P</span>
                    </div>
                    <div className="h-64px w-full bg-gray-252525 rounded-4px mt-14px flex items-center">
                        <span className="text-14px tracking-tight font-spoqaMedium ml-65px text-gray-ccc2b6 leading-none">전환포인트 입력</span>
                        <input 
                            placeholder="0"
                            className="flex-shrink-0 outline-none w-311px h-42px rounded-2px border border-gray-404040 px-10px font-spoqaMedium text-14px tracking-tight text-gray-828282 bg-dark-1a1a1a ml-9px" 
                            value={inputValue !==null ? nf.format(inputValue) : ""}
                            onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                            onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key)) {
                                    event.preventDefault();
                                }
                            }}
                        />
                    </div>
                    <div className="flex w-full mt-20px space-x-3px">
                        <button className="flex items-center justify-center h-52px w-268px rounded-4px hover:filter hover:brightness-125 shadow-link"
                            style={{background:"linear-gradient(to bottom, #88d9e8, #3d4a8d)"}} >
                            <div 
                                style={{background:"linear-gradient(to top, #396084, #528ccd)"}} 
                                className="flex items-center justify-center h-50px w-266px rounded-4px cursor-pointer"
                            >
                                <span className="font-spoqaMedium tracking-tight text-16px text-blue-d6f3ff text-shadow-5 pt-2px">포인트전환</span>
                            </div>
                        </button>
                        <button 
                            className="flex items-center justify-center h-52px w-268px rounded-4px  hover:filter hover:brightness-125 shadow-link"
                            onClick={() => isQuickMenu ? history.push('/mypage/points/points-apply',setPopupOpen(false)) : history.push('/mypage/points/points-transaction-history',setPopupOpen(false))}
                            style={{background:"linear-gradient(to bottom, #5f80a4, #223348)"}} >
                            <div 
                                style={{background:"linear-gradient(to bottom, #39618e, #27405d)"}} 
                                className="flex items-center justify-center h-50px w-266px rounded-4px cursor-pointer"
                            >
                                <span className="font-spoqaMedium tracking-tight text-16px text-blue-d6f3ff text-shadow-5 pt-2px">상세내역</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>        
        </div>
       
    )
}

export default PointsApplyPopup
