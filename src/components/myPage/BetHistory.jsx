import React, { useState } from 'react'
import HorizontalMenu from '../horizontalMenus/HorizontalMenu'
import Icon1 from '../../images/myPage/betHistory/ico_1_v2.png'
import Icon2 from '../../images/myPage/betHistory/ico_2_v2.png'
import Icon3 from '../../images/myPage/betHistory/ico_3_v2.png'
import Icon4 from '../../images/myPage/betHistory/ico_4_v2.png'
import Icon5 from '../../images/myPage/betHistory/ico_5_v2.png'
import Icon6 from '../../images/myPage/betHistory/ico_6_v2.png'
import Icon7 from '../../images/myPage/betHistory/ico_7_v2.png'
import Icon8 from '../../images/myPage/betHistory/ico_8_v2.png'
import Icon9 from '../../images/myPage/betHistory/ico_9_v2.png'
import Icon10 from '../../images/myPage/betHistory/ico_10_v2.png'
import IconHighlight1 from '../../images/myPage/betHistory/Icon1_On.png'
import IconHighlight2 from '../../images/myPage/betHistory/Icon2_On.png'
import IconHighlight3 from '../../images/myPage/betHistory/Icon3_On.png'
import IconHighlight4 from '../../images/myPage/betHistory/Icon4_On.png'
import IconHighlight5 from '../../images/myPage/betHistory/Icon5_On.png'
import IconHighlight6 from '../../images/myPage/betHistory/Icon6_On.png'
import IconHighlight7 from '../../images/myPage/betHistory/Icon7_On.png'
import IconHighlight8 from '../../images/myPage/betHistory/Icon8_On.png'
import IconHighlight9 from '../../images/myPage/betHistory/Icon9_On.png'
import IconHighlight10 from '../../images/myPage/betHistory/Icon10_On.png'
import Pagination from './Pagination'
import MyPageTitle from './MyPageTitle'
import LiveCasinoBetHistory from './betHistory/LiveCasinoBetHistory'
import SportsBetHistory from './betHistory/SportsBetHistory'
import AllBetHistory from './betHistory/AllBetHistory'
import SlotBetHistory from './betHistory/SlotBetHistory'
import MinigameBetHistory from './betHistory/MinigameBetHistory'
import ARGameBetHistory from './betHistory/ARGameBetHistory'
import HotelCasinoBetHistory from './betHistory/HotelCasinoBetHistory'
import { Route } from 'react-router'
import ESportsBetHistory from './betHistory/ESportsBetHistory'

const tabsArray = [
    { text: "전체", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/mypage/bet-history" },
    { text: "라이브카지노", icon: Icon2, iconHighlight: IconHighlight2, id: 1, path: "/mypage/bet-history/live-casino" },
    { text: "슬롯게임", icon: Icon3, iconHighlight: IconHighlight3, id: 2, path: "/mypage/bet-history/slot-game" },
    { text: "스포츠", icon: Icon4, iconHighlight: IconHighlight4, id: 3, path: "/mypage/bet-history/sports" },
    { text: "호텔카지노", icon: Icon5, iconHighlight: IconHighlight5,id: 4, path: "/mypage/bet-history/hotel-casino" },
    { text: "e-스포츠", icon: Icon6, iconHighlight: IconHighlight6, id: 5, path: "/mypage/bet-history/e-sports" },
    { text: "미니게임", icon: Icon7, iconHighlight: IconHighlight7, id: 6, path: "/mypage/bet-history/minigame" },
    { text: "키론가상게임", icon: Icon8, iconHighlight: IconHighlight8, id: 7,  path: "/mypage/bet-history/ar-game" },
    { text: "피싱게임", icon: Icon9, iconHighlight: IconHighlight9, id: 8, path: "/mypage/bet-history/fishing-game" },
    { text: "티비벳", icon: Icon10, iconHighlight: IconHighlight10, id: 9, path: "/mypage/bet-history/bet" },
];


const BetHistory = () => {
    // const [selectedTab, setSelectedTab] = useState(0)
    const [selectedSubTab, setSelectedSubTab] = useState(0)
    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(3).fill(false)
    );
 
    return (
        <div className="flex flex-col items-center">
            
            <MyPageTitle title="베팅내역" />
            
             <div className="relative w-full mt-20px">
                <HorizontalMenu itemsArray={tabsArray} setSelectedSubTab={setSelectedSubTab}/>
            </div>
            
            <Route exact path="/mypage/bet-history">
                <>
                    <AllBetHistory />
                    <div className='mt-4px mb-60px'>
                        <Pagination page={page} setPage={setPage} />   
                    </div>
                </>
            </Route>
            <Route path="/mypage/bet-history/live-casino">
                <>
                    <LiveCasinoBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                    <div className='mt-4px mb-60px'>
                        <Pagination page={page} setPage={setPage} />   
                    </div>
                </>
            </Route>
            <Route path="/mypage/bet-history/slot-game">
                <>
                    <SlotBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                    <div className='mt-4px mb-60px'>
                        <Pagination page={page} setPage={setPage} />   
                    </div>
                </>
            </Route>
            <Route path="/mypage/bet-history/sports">
                <>
                    <SportsBetHistory checkedState={checkedState} setCheckedState={setCheckedState} />
                    <div className='mt-4px mb-60px'>
                        <Pagination page={page} setPage={setPage} />  
                    </div>    
                </>
            </Route>
            <Route path="/mypage/bet-history/e-sports">
                <>
                    <ESportsBetHistory />
                </>
            </Route>
            <Route path="/mypage/bet-history/minigame">
                <>
                    <MinigameBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                    <div className='mt-4px mb-60px'>
                        <Pagination page={page} setPage={setPage} />   
                    </div>
                </>
            </Route>
            <Route path="/mypage/bet-history/ar-game">
                <>
                    <ARGameBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                    <div className='mt-4px mb-60px'>
                        <Pagination page={page} setPage={setPage} />  
                    </div>    
                </>
            </Route>
            <Route path="/mypage/bet-history/fishing-game">
                <>
                    <SlotBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                    <div className='mt-4px mb-60px'>
                        <Pagination page={page} setPage={setPage} />   
                    </div>
                </>
            </Route>
            <Route path="/mypage/bet-history/hotel-casino">
                <>
                    <HotelCasinoBetHistory isState={selectedSubTab} setState={setSelectedSubTab} />
                    <div className='mt-4px mb-60px'>
                        <Pagination page={page} setPage={setPage} />
                    </div>
                    
                </>
            </Route> 
            <Route exact path="/mypage/bet-history/bet">
              <>
                <AllBetHistory />
                <div className='mt-4px mb-60px'>
                  <Pagination page={page} setPage={setPage} />   
                </div>
                
              </>
            </Route>

        </div>
    )
}

export default BetHistory
