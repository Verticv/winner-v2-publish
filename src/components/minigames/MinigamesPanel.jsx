import HorizontalMenu4 from 'components/horizontalMenus/HorizontalMenu4'
import React, { useState } from 'react'
import KinoLadderPanel from './KinoLadderPanel'
import PowerballPanel from './PowerballPanel'
import PowerLadderPanel from './PowerLadderPanel'
import SpeedKinoPanel from './SpeedKinoPanel'
import {
    PowerballHistoryArray,
    PowerballResultsArray,
    PowerLadderResultsArray
} from './arrays'
import { Route, useHistory } from 'react-router'

const MinigamesPanel = ({
    selectedGame,
    setSelectedGame,
    selectedTab,
    setSelectedTab,
    setSelectedOption
}) => {

    const [checkedState, setCheckedState] = useState(
        new Array(PowerballHistoryArray.length).fill(false)
    );
    const [isAllSelected, setAllSelected] = useState(false)
    const history = useHistory();

    const MenuArray = [
        { id: 0, text: "게임하기" },
        { id: 1, text: "회차결과" },
        { id: 2, text: "베팅내역" },
    ]

    return (
        <div className="w-full">
            <div className="relative flex z-10 px-3px">
                <HorizontalMenu4 itemsArray={MenuArray} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </div>
              <div className="shadow-table w-full overflow-hidden rounded-4px p-px relative z-20"
              style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}>
                <div className="w-full bg-gray-323232 rounded-4px overflow-hidden  flex relative z-20">
                    <Route path="/minigame/powerball">
                        <PowerballPanel  
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            historyArray={PowerballHistoryArray}
                            resultsArray={PowerballResultsArray}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            setSelectedOption={setSelectedOption}
                        />                    </Route>
                    <Route path="/minigame/powerladder">
                        <PowerLadderPanel 
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            historyArray={PowerballHistoryArray}
                            resultsArray={PowerLadderResultsArray}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            setSelectedOption={setSelectedOption}
                        />
                    </Route>
                    <Route path="/minigame/speedkino">
                        <SpeedKinoPanel
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            historyArray={PowerballHistoryArray}
                            resultsArray={PowerLadderResultsArray}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            setSelectedOption={setSelectedOption}
                        />                    
                    </Route>
                    <Route path="/minigame/kinoladder">
                        <KinoLadderPanel 
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            historyArray={PowerballHistoryArray}
                            resultsArray={PowerLadderResultsArray}
                            checkedState={checkedState}
                            setCheckedState={setCheckedState}
                            setSelectedOption={setSelectedOption}
                        />                   
                    </Route>
                </div>
            </div>

            {selectedTab === 2 && (
                <div className="mt-20px h-36px w-full flex items-center justify-between">
                    <div className="flex space-x-2px">
                        <button 
                            style={{background:'linear-gradient(to bottom, rgba(232,184,136,1) 0%, rgba(75,59,9,1) 98%)'}}
                            className="flex items-center justify-center w-90px h-36px rounded-4px hover:filter hover:brightness-125 shadow-link"
                            onClick={() => {
                                if (isAllSelected === true) {
                                    setCheckedState(Array(PowerballHistoryArray.length).fill(false))
                                } else {
                                    setCheckedState(Array(PowerballHistoryArray.length).fill(true))
                                }
                                setAllSelected(!isAllSelected)
                            }}
                        >
                            <div style={{
                                background: "linear-gradient(0deg, rgba(128,96,62,1) 0%, rgba(129,96,64,1) 5%, rgba(165,124,82,1) 97%)",
                              }}
                                className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
                            >
                                <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-shadow-5">{isAllSelected ? "선택해제" : "전체선택"}</span>
                            </div>
                        </button>
                        <button style={{background:'linear-gradient(to bottom, rgba(232,136,149,1) 0%, rgba(75,9,35,1) 98%)'}}
                            className="flex items-center justify-center w-90px h-36px rounded-4px hover:filter hover:brightness-125 shadow-link">
                            <div style={{
                                  background: "linear-gradient(180deg, rgba(224,101,70,1) 0%, rgba(221,98,69,1) 6%, rgba(152,53,30,1) 97%, rgba(152,52,28,1) 100%)",
                               
                                }}
                                className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
                            >
                                <span className="font-spoqaMedium tracking-tight text-14px text-red-ffd2d2 pt-px text-shadow-5">선택삭제</span>
                            </div>
                        </button>
                    </div>
                    <button 
                        className="flex items-center justify-center h-36px w-114px rounded-4px bg-gradient-to-t from-blue-3d4a8d to-blue-88d9e8 p-px hover:filter hover:brightness-125 shadow-link"
                        onClick={() => history.push('/mypage/bet-history/minigame')}
                    >
                        <div className="flex items-center justify-center h-34px w-112px bg-black rounded-4px bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-14px text-blue-d6f3ff pt-2px text-shadow-5">전체베팅내역</span>
                        </div>
                    </button>
                </div>
            )}
        </div>
    )
}

export default MinigamesPanel
