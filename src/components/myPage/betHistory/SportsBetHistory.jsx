import React, { useState } from 'react'
import DateSearchBar from '../DateSearchBar';
import SportsBetHistoryPanel from './SportsBetHistoryPanel'

const SportsBetHistory = ({checkedState, setCheckedState , showSub = true, attachedArray, setAttachedArray, setPopupOpen, isPopup = false}) => {

    const [isAllSelected, setAllSelected] = useState(false)

    const AllSelectButtonPressed = () => {

        if (isAllSelected === false) {
            setAllSelected(true)
            setCheckedState(Array(3).fill(true))
        } else {
            setAllSelected(false)
            setCheckedState(Array(3).fill(false))
        }
    };

    return (
        <div className="w-full">

            <DateSearchBar isGameResultsSearch={true}  isPopup={isPopup}/>


        <div className="w-full h-full mt-20px rounded-4px">
          <div className="space-y-15px">
            <SportsBetHistoryPanel isPopup={!showSub} type={0} checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
            <SportsBetHistoryPanel isPopup={!showSub} type={1} winAmount="+900,000,000" checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
            <SportsBetHistoryPanel isPopup={!showSub} type={2} checkedState={checkedState} setCheckedState={setCheckedState} attachedArray={attachedArray} setAttachedArray={setAttachedArray} setPopupOpen={setPopupOpen}/>
          </div>
          <div className="mt-40px h-36px w-full flex items-center justify-between">
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
                          <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-shadow-5">{isAllSelected ? "선택해제" : "전체선택"}</span>
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
                          <span className="font-spoqaMedium tracking-tight text-14px text-red-ffd2d2 pt-px text-shadow-5">선택삭제</span>
                      </div>
                  </button>
              </div>
              <button className="flex items-center justify-center w-159px h-36px rounded-4px bg-gradient-to-t from-blue-3d4a8d to-blue-88d9e8 p-px hover:filter hover:brightness-125 shadow-link">
                  <div className="flex items-center justify-center h-34px w-157px rounded-4px bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer">
                      <span className="font-spoqaMedium tracking-tight text-14px text-blue-d6f3ff pt-px text-shadow-5">게시판에 내역올리기</span>
                  </div>
              </button>
          </div>
      </div>
            
        </div>
    )
}

export default SportsBetHistory
