import React, { useState } from 'react'
import DateSearchBar from './DateSearchBar'
import MyPageTitle from './MyPageTitle'
import Pagination from './Pagination'
import Diamond from '../../images/myPage/diamond.png'
import WinLoseTable from './tables/WinLoseTable'

const WinLoseSettlement = () => {

    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(10).fill(false)
    );
    const [isAllSelected, setAllSelected] = useState(false)

    const AllSelectButtonPressed = () => {

        if (isAllSelected === false) {
            setAllSelected(true)
            setCheckedState(Array(10).fill(true))
        } else {
            setAllSelected(false)
            setCheckedState(Array(10).fill(false))
        }
    };

    return (
        <div className="flex flex-col items-center w-full">
            <MyPageTitle title="윈루즈정산" />
            <DateSearchBar isLeagueSearch={false} has3MonthSearch={true} />

             <div className="flex h-48px w-full mt-20px space-x-12px">
                <div className="w-255px h-48px rounded-full border-2 border-gray-635f5b bg-dark-2e2e2e flex items-center justify-center font-spoqaMedium text-16px">
                    <img className="-ml-2px" src={Diamond} alt="" />
                    <div className="flex items-center space-x-4px pt-2px ml-14px">
                      <span className="text-white tracking-tight">진행중인 금액 :</span>
                      <span className="text-yellow-ffd200">78,308</span>
                    </div>
                </div>

                <div className="w-255px h-48px rounded-full border-2 border-gray-635f5b bg-dark-2e2e2e flex items-center justify-center font-spoqaMedium text-16px">
                    <img className="-ml-2px" src={Diamond} alt="" />
                    <div className="flex items-center space-x-4px pt-2px ml-14px">
                        <span className="text-white tracking-tight">정산 총 금액 :</span>
                        <span className="text-yellow-ffd200">24,393,246</span>
                    </div>
                </div>

            </div>

            <div className="mt-20px">
                <WinLoseTable checkedState={checkedState} setCheckedState={setCheckedState}/>
            </div>

            <div className="mt-20px h-36px w-full flex items-center justify-between">
                <div className="flex space-x-2px">
                    <button 
                        style={{background:'linear-gradient(to bottom, rgba(232,184,136,1) 0%, rgba(75,59,9,1) 98%)'}}
                        className="flex items-center justify-center w-90px h-36px rounded-4px  hover:filter hover:brightness-125 shadow-link"
                        onClick={() => AllSelectButtonPressed()}
                    >
                        <div 
                            style={{
                        background: "linear-gradient(0deg, rgba(128,96,62,1) 0%, rgba(129,96,64,1) 5%, rgba(165,124,82,1) 97%)",
                      }}
                        className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight text-shadow-5 mt-px">{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                    <button 
                       style={{background:'linear-gradient(to bottom, rgba(232,136,149,1) 0%, rgba(75,9,35,1) 98%)'}}
                    className="flex items-center justify-center w-90px h-36px rounded-4px  hover:filter hover:brightness-125 shadow-link"
                    >
                        <div 
                             style={{
                          background: "linear-gradient(180deg, rgba(224,101,70,1) 0%, rgba(221,98,69,1) 6%, rgba(152,53,30,1) 97%, rgba(152,52,28,1) 100%)"
                        }}
                        className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-14px text-red-ffd2d2 text-shadow-5 mt-px">선택삭제</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex w-full justify-center mt-4px mb-60px">
                <Pagination page={page} setPage={setPage}/>   
            </div> 
            
        </div>
    )
}

export default WinLoseSettlement
