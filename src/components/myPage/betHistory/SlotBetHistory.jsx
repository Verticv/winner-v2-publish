import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import SubHorizontalMenu from './SubHorizontalMenu'
import LiveCasinoBetHistoryTable from '../tables/LiveCasinoBetHistoryTable'
import AllIcon from '../../../images/myPage/betHistory/all.png'
import Sub1 from '../../../images/myPage/betHistory/slotGame/sub1.png'
import Sub2 from '../../../images/myPage/betHistory/slotGame/sub2.png'
import Sub3 from '../../../images/myPage/betHistory/slotGame/sub3.png'
import Sub4 from '../../../images/myPage/betHistory/slotGame/sub4.png'
import Sub5 from '../../../images/myPage/betHistory/slotGame/sub5.png'
import Sub6 from '../../../images/myPage/betHistory/slotGame/sub6.png'
import Sub7 from '../../../images/myPage/betHistory/slotGame/sub7.png'
import Sub8 from '../../../images/myPage/betHistory/slotGame/sub8.png'
import Sub9 from '../../../images/myPage/betHistory/slotGame/sub9.png'
import Sub10 from '../../../images/myPage/betHistory/slotGame/sub10.png'
import Sub11 from '../../../images/myPage/betHistory/slotGame/sub11.png'
import Sub12 from '../../../images/myPage/betHistory/slotGame/sub12.png'
import Sub13 from '../../../images/myPage/betHistory/slotGame/sub13.png'
import Sub14 from '../../../images/myPage/betHistory/slotGame/sub14.png'
import Sub15 from '../../../images/myPage/betHistory/slotGame/sub15.png'


const subTabsArray = [
    { text: "전체", icon: AllIcon, id: 0 },
    { text: "마이크로게이밍", icon: Sub1, id: 1 },
    { text: "YGG드라실", icon: Sub2, id: 2 },
    { text: "드라군소프트", icon: Sub3, id: 3, custom: "mt-8px" },
    { text: "분고", icon: Sub4, id: 4 },
    { text: "플레이슨", icon: Sub5, id: 5 },
    { text: "넷엔트", icon: Sub6, id: 6 },
    { text: "프레그메틱플레이", icon: Sub7, id: 7 },
    { text: "퀵스핀", icon: Sub8, id: 8 },
    { text: "스페이드", icon: Sub9, id: 9 },
    { text: "하바네로", icon: Sub10, id: 10 },
    { text: "월드매치", icon: Sub11, id: 11 },
    { text: "메버릭", icon: Sub12, id: 12 },
    { text: "플레이앤고", icon: Sub13, id: 13 },
    { text: "YL게이밍", icon: Sub14, id: 14 },
    { text: "레드타이거", icon: Sub15, id: 15 },
];

const tableArray = [
    {
        id: 0,
        number: 7193915,
        time: "2021-06-29 15:46:13",
        type: "레드타이거",
        name: "Dragon's Luck",
        amount: "12,000",
        profit: "-12,000",
        status: "패"
    },
    {
        id: 1,
        number: 7193914,
        time: "2021-06-29 15:45:41",
        type: "레드타이거",
        name: "Dragon's Luck",
        amount: "900,000,000",
        profit: "+900,000,000",
        status: "승"
    },
    {
        id: 2,
        number: 7193913,
        time: "2021-06-29 15:45:41",
        type: "프레그메틱플레이",
        name: "Starz Megaways",
        amount: "800,000",
        profit: "-800,000",
        status: "패"
    },
];

const SlotBetHistory = ({isState, setState, showSub = true}) => {

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
                  <div className="mt-10px w-full p-5px rounded-4px bg-gray-323231">
                      <SubHorizontalMenu itemsArray={subTabsArray} isState={isState} setState={setState} />
                  </div>
                </>
            )}
            <DateSearchBar isLeagueSearch={false} />


            <div className={`w-full h-full mt-20px`}>
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
                            <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">{isAllSelected ? "선택해제" : "전체선택"}</span>
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
                            <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">선택삭제</span>
                        </div>
                    </button>
                </div>
                <button className="flex items-center justify-center w-159px h-36px rounded-4px bg-gradient-to-b from-blue-88d9e8 to-blue-3d4a8d p-px shadow-link hover:opacity-75">
                    <div className="flex items-center justify-center h-34px w-157px rounded-4px bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-14px text-white pt-px">게시판에 내역올리기</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SlotBetHistory
