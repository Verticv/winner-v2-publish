import React, { useState } from 'react'
import CloseIcon from '../../images/popups/close_icon.png'
import Icon2 from '../../images/myPage/betHistory/ico_2_v2.png'
import Icon3 from '../../images/myPage/betHistory/ico_3_v2.png'
import Icon4 from '../../images/myPage/betHistory/ico_4_v2.png'
import Icon5 from '../../images/myPage/betHistory/ico_5_v2.png'
import Icon6 from '../../images/myPage/betHistory/ico_6_v2.png'
import Icon7 from '../../images/myPage/betHistory/ico_7_v2.png'
import Icon8 from '../../images/myPage/betHistory/ico_8_v2.png'
import Icon9 from '../../images/myPage/betHistory/ico_9_v2.png'
import Icon10 from '../../images/myPage/betHistory/ico_10_v2.png'
import IconHighlight2 from '../../images/myPage/betHistory/Icon2_On.png'
import IconHighlight3 from '../../images/myPage/betHistory/Icon3_On.png'
import IconHighlight4 from '../../images/myPage/betHistory/Icon4_On.png'
import IconHighlight5 from '../../images/myPage/betHistory/Icon5_On.png'
import IconHighlight6 from '../../images/myPage/betHistory/Icon6_On.png'
import IconHighlight7 from '../../images/myPage/betHistory/Icon7_On.png'
import IconHighlight8 from '../../images/myPage/betHistory/Icon8_On.png'
import IconHighlight9 from '../../images/myPage/betHistory/Icon9_On.png'
import IconHighlight10 from '../../images/myPage/betHistory/Icon10_On.png'
import SportsBetHistory from 'components/myPage/betHistory/SportsBetHistory'
import HorizontalMenu8 from 'components/horizontalMenus/HorizontalMenu8'
import SubHorizontalMenu from 'components/myPage/betHistory/SubHorizontalMenu'

import AllIcon from '../../images/myPage/betHistory/all_v2.png'
import EvoIcon from '../../images/myPage/betHistory/evolution_v2.png'
import AsiaIcon from '../../images/myPage/betHistory/asia_v2.png'
import PragIcon from '../../images/myPage/betHistory/pragmatic_v2.png'
import DgIcon from '../../images/myPage/betHistory/dg_v2.png'
import SexyIcon from '../../images/myPage/betHistory/sexy_v2.png'
import BigIcon from '../../images/myPage/betHistory/big_v2.png'
import RoyalIcon from '../../images/myPage/betHistory/royal_v2.png'
import OrientalIcon from '../../images/myPage/betHistory/oriental_v2.png'
import IzugiIcon from '../../images/myPage/betHistory/izugi.png'

import Sub1 from '../../images/myPage/betHistory/slotGame/sub1.png'
import Sub2 from '../../images/myPage/betHistory/slotGame/sub2_v2.png'
import Sub3 from '../../images/myPage/betHistory/slotGame/sub3_v2.png'
import Sub4 from '../../images/myPage/betHistory/slotGame/sub4_v2.png'
import Sub5 from '../../images/myPage/betHistory/slotGame/sub5_v2.png'
import Sub6 from '../../images/myPage/betHistory/slotGame/sub6_v2.png'
import Sub7 from '../../images/myPage/betHistory/slotGame/sub7_v2.png'
import Sub8 from '../../images/myPage/betHistory/slotGame/sub8.png'
import Sub9 from '../../images/myPage/betHistory/slotGame/sub9_v2.png'
import Sub10 from '../../images/myPage/betHistory/slotGame/sub10_v2.png'
import Sub11 from '../../images/myPage/betHistory/slotGame/sub11_v2.png'
import Sub12 from '../../images/myPage/betHistory/slotGame/sub12_v2.png'
import Sub13 from '../../images/myPage/betHistory/slotGame/sub13_v2.png'
import Sub14 from '../../images/myPage/betHistory/slotGame/sub14_v2.png'
import Sub15 from '../../images/myPage/betHistory/slotGame/sub15_v2.png'
import Sub16 from '../../images/myPage/betHistory/slotGame/sub16_v2.png'
import Sub17 from '../../images/myPage/betHistory/slotGame/sub17_v2.png'
import Sub18 from '../../images/myPage/betHistory/slotGame/sub18_v2.png'
import Sub19 from '../../images/myPage/betHistory/slotGame/sub19_v2.png'
import Sub20 from '../../images/myPage/betHistory/slotGame/sub20_v2.png'
import Sub21 from '../../images/myPage/betHistory/slotGame/sub21_v2.png'
import Sub21_1 from '../../images/myPage/betHistory/slotGame/sub22_v2.png'

import Sub22 from '../../images/myPage/betHistory/minigame/sub1.png'
import Sub23 from '../../images/myPage/betHistory/minigame/sub2.png'
import Sub24 from '../../images/myPage/betHistory/minigame/sub3.png'
import Sub25 from '../../images/myPage/betHistory/minigame/sub4.png'

import HIcon1 from '../../images/myPage/betHistory/h_icon1.png'
import HIcon2 from '../../images/myPage/betHistory/h_icon2.png'
import HIcon3 from '../../images/myPage/betHistory/h_icon3.png'

// import Sub22 from '../../images/myPage/betHistory/ARGame/sub3.png'
// import Sub23 from '../../images/myPage/betHistory/ARGame/sub4.png'
// import Sub24 from '../../images/myPage/betHistory/ARGame/sub5.png'
// import Sub25 from '../../images/myPage/betHistory/ARGame/sub6.png'
import ARSub1 from '../../images/myPage/betHistory/ARGame/sub1_v2.png'
import ARSub2 from '../../images/myPage/betHistory/ARGame/sub2_v2.png'
import ARSub3 from '../../images/myPage/betHistory/ARGame/sub3_v2.png'
import ARSub4 from '../../images/myPage/betHistory/ARGame/sub4.png'
import ARSub5 from '../../images/myPage/betHistory/ARGame/sub5.png'
import ARSub6 from '../../images/myPage/betHistory/ARGame/sub6.png'
import ARSub7 from '../../images/myPage/betHistory/ARGame/sub7.png'
import ARSub8 from '../../images/myPage/betHistory/ARGame/sub8.png'
import ARSub9 from '../../images/myPage/betHistory/ARGame/sub9.png'
import ARSub10 from '../../images/myPage/betHistory/ARGame/sub10.png'
import ARSub11 from '../../images/myPage/betHistory/ARGame/sub11.png'

import LiveCasinoBetHistory from 'components/myPage/betHistory/LiveCasinoBetHistory'
import SlotBetHistory from 'components/myPage/betHistory/SlotBetHistory'
import MinigameBetHistory from 'components/myPage/betHistory/MinigameBetHistory'
import ARGameBetHistory from 'components/myPage/betHistory/ARGameBetHistory'
import ESportsBetHistory from 'components/myPage/betHistory/ESportsBetHistory'
import Pagination from 'components/myPage/Pagination'
import AllBetHistory from 'components/myPage/betHistory/AllBetHistory'
import HotelCasinoBetHistory from 'components/myPage/betHistory/HotelCasinoBetHistory'

const BetHistoryPopup = ({setPopupOpen, setAttachedArray, attachedArray}) => {

    const tabsArray = [
    { text: "라이브카지노", icon: Icon2, iconHighlight: IconHighlight2, id: 0, path: "/mypage/bet-history/live-casino" },
    { text: "슬롯게임", icon: Icon3, iconHighlight: IconHighlight3, id: 1, path: "/mypage/bet-history/slot-game" },
    { text: "스포츠", icon: Icon4, iconHighlight: IconHighlight4, id: 2, path: "/mypage/bet-history/sports" },
    { text: "호텔카지노", icon: Icon5, iconHighlight: IconHighlight5,id: 3, path: "/mypage/bet-history/lottery-game" },
    { text: "e-스포츠", icon: Icon6, iconHighlight: IconHighlight6, id: 4, path: "/mypage/bet-history/e-sports" },
    { text: "미니게임", icon: Icon7, iconHighlight: IconHighlight7, id: 5, path: "/mypage/bet-history/minigame" },
    { text: "키론가상게임", icon: Icon8, iconHighlight: IconHighlight8, id: 6,  path: "/mypage/bet-history/ar-game" },
    { text: "피싱게임", icon: Icon9, iconHighlight: IconHighlight9, id: 7, path: "/mypage/bet-history/fishing-game" },
    { text: "티비벳", icon: Icon10, iconHighlight: IconHighlight10, id: 8, path: "/mypage/bet-history/tv-bet" },
];
    const subTabsArray1 = [
      { text: "전체", icon: AllIcon, id: 0 },
      { text: "프레그메틱플레이", icon: PragIcon, id: 3, custom: "mt-8px" },
      { text: "에볼루션", icon: EvoIcon, id: 1 },
      { text: "로얄지", icon: RoyalIcon, id: 4 },
      { text: "아시아게이밍", icon: AsiaIcon, id: 5 },
      { text: "드림게이밍", icon: DgIcon, id: 6 },
      { text: "섹시게이밍", icon: SexyIcon, id: 7 },
      { text: "빅게이밍", icon: BigIcon, id: 8 },
      { text: "오리엔탈게임", icon: OrientalIcon, id: 9 },
      { text: "이주기", icon: IzugiIcon, id: 10 },
      { text: "마이크로게이밍", icon: Sub1, id: 11 },
    ];

    const subTabsArray2 = [
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
        { text: "로얄슬롯게이밍", icon: Sub21_1, id: 22 },
    ];

    const subTabsArray3 = [
        { text: "전체", icon: AllIcon, id: 0 },
        { text: "파워볼", icon: Sub22, id: 1 },
        { text: "파워사다리", icon: Sub23, id: 2 },
        { text: "스피드키노", icon: Sub24, id: 3, custom: "mt-8px" },
        { text: "키노사다리", icon: Sub25, id: 4 },
    ];
    
    const subTabsArray4 = [
       { text: "전체", icon: AllIcon, id: 0 },
        { text: "축구", icon: ARSub1, id: 1 },
        { text: "경마", icon: ARSub2, id: 2 },
        { text: "개경주", icon: ARSub3, id: 3 },
        { text: "레이싱", icon: ARSub4, id: 4 },
        { text: "탁구", icon: ARSub5, id: 5 },
        { text: "배드민턴", icon: ARSub6, id: 6 },
        { text: "양궁", icon: ARSub7, id: 7 },
        { text: "마구", icon: ARSub8, id: 8 },
        { text: "레이싱룰렛", icon: ARSub9, id: 9 },
        { text: "농구", icon: ARSub10, id: 10 },
        { text: "아이스하키", icon: ARSub11, id: 11 },
    ];
    const subTabsArray5 = [
        { text: "전체", icon: AllIcon, id: 0 },
        { text: "두윈카지노", icon: HIcon3, id: 3 },
        { text: "보타카지노", icon: HIcon1, id: 1 },
        { text: "준비중", icon: HIcon2, id: 4 },
    ]
    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [page, setPage] = useState(0)

    const [checkedState, setCheckedState] = useState(
        new Array(3).fill(false)
    );

  return (
      <div className="shadow-table w-full overflow-hidden rounded-10px p-px"
          style={{ height:"900px", width: "1110px",background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}>
          <div  className="w-full h-full flex flex-col rounded-10px overflow-hidden">
              <div className="relative h-61px bg-gray-272726 flex items-center justify-center flex-shrink-0" >
                  <label className="font-spoqaMedium text-yellow-ad9e8c tracking-tight text-24px">베팅내역</label>
                  <button className="absolute right-0 mr-22px cursor-pointer z-20" onClick={() => setPopupOpen(false)}>
                      <img src={CloseIcon} alt="close_icon" />
                  </button>
              </div>
              
              <div className="w-full h-full bg-gray-323231 pt-30px pb-40px">
                  
                  <div className="pl-32px pr-36px relative">
                      <HorizontalMenu8 itemsArray={tabsArray} selectedTab={selectedTab} setSelectedTab={setSelectedTab} setSelectedSubTab={setSelectedSubTab} />
                

                      {(selectedTab !== 2  && selectedTab !== 4 && selectedTab !== 8) && (
                          <div className={`mt-10px w-full px-4px py-3px rounded-4px bg-gray-2b2b2a ${selectedTab===0||selectedTab===3||selectedTab===5?'pb-4px':''}`}>
                              <SubHorizontalMenu 
                                  itemsArray={
                                      selectedTab === 0
                                      ? subTabsArray1
                                      : selectedTab === 2
                                      ? subTabsArray2
                                      : selectedTab === 3
                                      ? subTabsArray5
                                      : selectedTab === 5
                                      ? subTabsArray3
                                      : selectedTab === 6
                                      ? subTabsArray4

                                      : subTabsArray2
                                  } 
                                  isState={selectedSubTab} 
                                  setState={setSelectedSubTab} 
                              />
                          </div>
                      )}
                  </div>

                  

                  <div className={`w-full pl-24px -mt-10px ${selectedTab === 2 || selectedTab === 1 || selectedTab === 7?'pr-21px':'pr-30px'}`}>
                      <div 
                          style={{
                              height: 
                              (selectedTab === 2)
                              ? "665px" 
                              : (selectedTab === 4 || selectedTab === 8)
                              ? "666px" 
                              : (selectedTab === 6)
                              ? "484px" 
                              : (selectedTab === 0  || selectedTab === 5 || selectedTab === 3)
                              ? "568px" 
                              : "400px"
                          }} 
                          className="overflow-y-auto mt-30px py-5px px-6px space-y-28px -pt-10px"
                      >
                          {selectedTab === 0 ? (
                              <div className="-mt-20px">
                                  <LiveCasinoBetHistory isState={selectedSubTab} setState={setSelectedSubTab} showSub={false} isPopup={true} />
                                    <div className='mt-4px'>
                                      <Pagination page={page} setPage={setPage} />   
                                    </div>
                              </div>
                          ) : selectedTab === 1 ? (
                              <div className="-mt-20px">
                                <SlotBetHistory isState={selectedSubTab} setState={setSelectedSubTab} showSub={false} isPopup={true} />
                                <div className='mt-4px'>
                                    <Pagination page={page} setPage={setPage} /> 
                                </div>    
                              </div>
                          ) : selectedTab === 2 ? (
                              <div className="-mt-20px space-y-20px">
                                <SportsBetHistory checkedState={checkedState} setCheckedState={setCheckedState} showSub={false} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen} isPopup={true} />
                                <div className='mt-4px'>
                                    <Pagination page={page} setPage={setPage} />   
                                </div>
                              </div>
                          ) : selectedTab === 3 ? (
                                <div className="-mt-20px">
                                    <HotelCasinoBetHistory isState={selectedSubTab} setState={setSelectedSubTab} showSub={false} isPopup={true} />
                                    <div className='mt-4px'>
                                        <Pagination page={page} setPage={setPage} />   
                                    </div>
                                </div>
                          ) : selectedTab === 4 ? (
                            <div className="-mt-20px">
                                <ESportsBetHistory isPopup={true} />  
                            </div>
                          ) : selectedTab === 5 ? (
                            <div className="-mt-20px">
                                <MinigameBetHistory isState={selectedSubTab} setState={setSelectedSubTab} showSub={false}  attachedArray={attachedArray} 
                                    setAttachedArray={setAttachedArray} setPopupOpen1={setPopupOpen} isPopup={true} />
                                <div className='mt-4px'>
                                    <Pagination page={page} setPage={setPage} />   
                                </div>
                              </div>
                          ) : selectedTab === 6 ? (
                              <div className="-mt-20px">
                                <ARGameBetHistory isState={selectedSubTab} setState={setSelectedSubTab} showSub={false} isPopup={true} />
                                <div className='mt-4px'>
                                    <Pagination page={page} setPage={setPage} />   
                                </div>
                              </div>
                            ) : selectedTab === 7 ? (
                              <div className="-mt-20px">
                                <SlotBetHistory isState={selectedSubTab} setState={setSelectedSubTab} showSub={false} isPopup={true} />
                                <div className='mt-4px'>
                                    <Pagination page={page} setPage={setPage} />
                                </div>  
                              </div>
                          ) : selectedTab === 8 ? (
                              <div className="-mt-20px">
                                <AllBetHistory isPopup={true} />
                                <div className='mt-4px'>
                                    <Pagination page={page} setPage={setPage} />  
                                </div>
                              </div>
                          ) :(
                              <>
                              </>
                          )}
                          
                      </div>
                  </div>
              </div>

              
          </div>
      </div>
    )
}

export default BetHistoryPopup
