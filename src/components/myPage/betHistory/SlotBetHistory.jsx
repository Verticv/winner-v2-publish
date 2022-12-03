import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar'
import SubHorizontalMenu from './SubHorizontalMenu'
import LiveCasinoBetHistoryTable from '../tables/LiveCasinoBetHistoryTable'
import AllIcon from '../../../images/myPage/betHistory/all_v2.png'
import Sub1 from '../../../images/myPage/betHistory/slotGame/sub1.png'
import Sub2 from '../../../images/myPage/betHistory/slotGame/sub2_v2.png'
import Sub3 from '../../../images/myPage/betHistory/slotGame/sub3_v2.png'
import Sub4 from '../../../images/myPage/betHistory/slotGame/sub4_v2.png'
import Sub5 from '../../../images/myPage/betHistory/slotGame/sub5_v2.png'
import Sub6 from '../../../images/myPage/betHistory/slotGame/sub6_v2.png'
import Sub7 from '../../../images/myPage/betHistory/slotGame/sub7_v2.png'
import Sub8 from '../../../images/myPage/betHistory/slotGame/sub8.png'
import Sub9 from '../../../images/myPage/betHistory/slotGame/sub9_v2.png'
import Sub10 from '../../../images/myPage/betHistory/slotGame/sub10_v2.png'
import Sub11 from '../../../images/myPage/betHistory/slotGame/sub11_v2.png'
import Sub12 from '../../../images/myPage/betHistory/slotGame/sub12_v2.png'
import Sub13 from '../../../images/myPage/betHistory/slotGame/sub13_v2.png'
import Sub14 from '../../../images/myPage/betHistory/slotGame/sub14_v2.png'
import Sub15 from '../../../images/myPage/betHistory/slotGame/sub15_v2.png'
import Sub16 from '../../../images/myPage/betHistory/slotGame/sub16_v2.png'
import Sub17 from '../../../images/myPage/betHistory/slotGame/sub17_v2.png'
import Sub18 from '../../../images/myPage/betHistory/slotGame/sub18_v2.png'
import Sub19 from '../../../images/myPage/betHistory/slotGame/sub19_v2.png'
import Sub20 from '../../../images/myPage/betHistory/slotGame/sub20_v2.png'
import Sub21 from '../../../images/myPage/betHistory/slotGame/sub21_v2.png'
import Sub22 from '../../../images/myPage/betHistory/slotGame/sub22_v2.png'


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
    { text: "엘리시움", icon: Sub12, id: 12 },
    { text: "플레이앤고", icon: Sub13, id: 13 },
    { text: "YL게이밍", icon: Sub14, id: 14 },
    { text: "레드타이거", icon: Sub15, id: 15 },
    { text: "플레이텍", icon: Sub16, id: 16 },
    { text: "스카이윈드", icon: Sub17, id: 17 },
    { text: "씨큐나인", icon: Sub18, id: 18 },
    { text: "올웨이스핀", icon: Sub19, id: 19 },
    { text: "와즈단", icon: Sub20, id: 20 },
    { text: "PG소프트", icon: Sub21, id: 21 },
    { text: "로얄슬롯게이밍", icon: Sub22, id: 22 },
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

const SlotBetHistory = ({isState, setState, showSub = true, isPopup = false}) => {

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
                  <div className="mt-10px w-full px-4px py-3px rounded-4px bg-gray-323231">
                      <SubHorizontalMenu itemsArray={subTabsArray} isState={isState} setState={setState} />
                  </div>
                </>
            )}
            <DateSearchBar isLeagueSearch={false} isPopup={isPopup} />


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
                        className="flex items-center justify-center w-90px h-36px rounded-4px  hover:filter hover:brightness-125 shadow-link" 
                        onClick={() => allSelectButtonPressed()}
                    >
                        <div 
                            style={{
                                background: "linear-gradient(0deg, rgba(128,96,62,1) 0%, rgba(129,96,64,1) 5%, rgba(165,124,82,1) 97%)",
                                }}
                                className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-shadow-5">{isAllSelected ? "선택해제" : "전체선택"}</span>
                        </div>
                    </button>
                    <button 
                         style={{background:'linear-gradient(to bottom, rgba(232,136,149,1) 0%, rgba(75,9,35,1) 98%)'}}
                            className="flex items-center justify-center w-90px h-36px rounded-4px  hover:filter hover:brightness-125 shadow-link"
                    >
                        <div 
                            style={{
                              background: "linear-gradient(180deg, rgba(224,101,70,1) 0%, rgba(221,98,69,1) 6%, rgba(152,53,30,1) 97%, rgba(152,52,28,1) 100%)",
                            
                            }}
                            className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-14px text-red-ffd2d2 pt-px text-shadow-5">선택삭제</span>
                        </div>
                    </button>
                </div>
                <button className="flex items-center justify-center w-159px h-36px rounded-4px bg-gradient-to-b from-blue-88d9e8 to-blue-3d4a8d p-px shadow-link hover:filter hover:brightness-125">
                    <div className="flex items-center justify-center h-34px w-157px rounded-4px bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer">
                        <span className="font-spoqaMedium tracking-tight text-14px text-blue-d6f3ff pt-px text-shadow-5">게시판에 내역올리기</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SlotBetHistory
