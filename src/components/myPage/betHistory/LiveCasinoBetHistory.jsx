import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import SubHorizontalMenu from './SubHorizontalMenu'
import LiveCasinoBetHistoryTable from '../tables/LiveCasinoBetHistoryTable'
import AllIcon from '../../../images/myPage/betHistory/all_v2.png'
import EvoIcon from '../../../images/myPage/betHistory/evolution_v2.png'
import AsiaIcon from '../../../images/myPage/betHistory/asia_v2.png'
import PragIcon from '../../../images/myPage/betHistory/pragmatic_v2.png'
import DgIcon from '../../../images/myPage/betHistory/dg_v2.png'
import SexyIcon from '../../../images/myPage/betHistory/sexy_v2.png'
import BigIcon from '../../../images/myPage/betHistory/big_v2.png'

const subTabsArray = [
    { text: "전체", icon: AllIcon, id: 0 },
    { text: "에볼루션", icon: EvoIcon, id: 1 },
    { text: "아시아게이밍", icon: AsiaIcon, id: 2 },
    { text: "프레그메틱플레이", icon: PragIcon, id: 3, custom: "mt-8px" },
    { text: "드림게이밍", icon: DgIcon, id: 4 },
    { text: "섹시게이밍", icon: SexyIcon, id: 5 },
    { text: "빅게이밍", icon: BigIcon, id: 6 },
];

const tableArray = [
    {
        id: 0,
        number: 7193915,
        time: "2021-06-29 15:46:13",
        type: "에볼루션",
        name: "바카라",
        amount: "12,000",
        profit: "-12,000",
        status: "패"
    },
    {
        id: 1,
        number: 7193914,
        time: "2021-06-29 15:45:41",
        type: "에볼루션",
        name: "바카라",
        amount: "900,000,000",
        profit: "+900,000,000",
        status: "승"
    },
    {
        id: 2,
        number: 7193913,
        time: "2021-06-29 15:45:41",
        type: "프레그메틱플레이",
        name: "블랙잭",
        amount: "800,000",
        profit: "-800,000",
        status: "패"
    },
];

const LiveCasinoBetHistory = ({isState, setState, showSub = true}) => {

    const [checkedState, setCheckedState] = useState(new Array(3).fill(false))
    const [isAllSelected, setAllSelected] = useState(false)
    const [isPopupOpen, setPopupOpen] = useState(true)

    function allSelectButtonPressed() {
        if (isAllSelected) {
            setCheckedState(Array(3).fill(false))
        } else {
            setCheckedState(Array(3).fill(true))
        }
        setAllSelected(!isAllSelected)
    }

    return (
        <div className="w-full">
            {showSub === true && (
              <>
                <div className="mt-10px h-88px w-full p-4px rounded-4px bg-gray-323231">
                  <SubHorizontalMenu itemsArray={subTabsArray} isState={isState} setState={setState} />
                </div>
                  {/* <DateSearchBar isLeagueSearch={false} /> */}
              </>

            )}
            
            <DateSearchBar isLeagueSearch={false} />


            <div className="w-full h-full mt-20px">
                <LiveCasinoBetHistoryTable 
                    array={tableArray} 
                    checkedState={checkedState} 
                    setCheckedState={setCheckedState}
                    isPopupOpen={isPopupOpen}
                    setPopupOpen={setPopupOpen}
                />   
            </div>

            <div className="mt-40px h-36px w-full flex items-center justify-between">
              <div className="flex space-x-2px">
                <button 
                    style={{background:'linear-gradient(to bottom, rgba(232,184,136,1) 0%, rgba(75,59,9,1) 98%)'}}
                    className="flex items-center justify-center w-90px h-36px rounded-4px  hover:opacity-75 shadow-link" 
                    onClick={() => allSelectButtonPressed()}
                        >
                            <div 
                                style={{
                                    background: "linear-gradient(0deg, rgba(128,96,62,1) 0%, rgba(129,96,64,1) 5%, rgba(165,124,82,1) 97%)",
                                }}
                                className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
                            >
                                <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px">{isAllSelected ? "선택해제" : "전체선택"}</span>
                            </div>
                        </button>
                        <button 
                            style={{background:'linear-gradient(to bottom, rgba(232,136,149,1) 0%, rgba(75,9,35,1) 98%)'}}
                            className="flex items-center justify-center w-90px h-36px rounded-4px  hover:opacity-75 shadow-link"
                        >
                            <div 
                                style={{
                                  background: "linear-gradient(180deg, rgba(224,101,70,1) 0%, rgba(221,98,69,1) 6%, rgba(152,53,30,1) 97%, rgba(152,52,28,1) 100%)",
                               
                                }}
                                className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
                            >
                                <span className="font-spoqaMedium tracking-tight text-14px text-red-ffd2d2 pt-px">선택삭제</span>
                            </div>
                        </button>
                    </div>
                    <button className="flex items-center justify-center w-159px h-36px rounded-4px hover:opacity-75 bg-gradient-to-b from-blue-88d9e8 to-blue-3d4a8d p-px shadow-link">
                        <div className="flex items-center justify-center h-34px w-157px rounded-4px bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-blue-d6f3ff pt-px">게시판에 내역올리기</span>
                        </div>
                    </button>
                </div>
        </div>
    )
}

export default LiveCasinoBetHistory
