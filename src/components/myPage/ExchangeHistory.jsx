import React, { useState } from 'react'
import DateSearchBar from './DateSearchBar'
import MyPageTitle from './MyPageTitle'
import Pagination from './Pagination'
import ExchangeHistoryTable from './tables/ExchangeHistoryTable'

const ExchangeHistory = () => {

    const [page, setPage] = useState(0)
    const [checkedState, setCheckedState] = useState(
        new Array(3).fill(false)
    );
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
        <div className="flex flex-col w-full items-center">
            <MyPageTitle title="환전내역" />
            <DateSearchBar has3MonthSearch={true} />

            <div className="mt-20px">
                <ExchangeHistoryTable checkedState={checkedState} setCheckedState={setCheckedState} />
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
                        <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight text-shadow-5">{isAllSelected ? "선택해제" : "전체선택"}</span>
                    </div>
                </button>
                <button 
                    style={{background:'linear-gradient(to bottom, rgba(232,136,149,1) 0%, rgba(75,9,35,1) 98%)'}}
                    className="flex items-center justify-center w-90px h-36px rounded-4px  hover:opacity-75 shadow-link"
                >
                    <div 
                        style={{
                          background: "linear-gradient(180deg, rgba(224,101,70,1) 0%, rgba(221,98,69,1) 6%, rgba(152,53,30,1) 97%, rgba(152,52,28,1) 100%)"
                        }}
                        className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-14px text-red-ffd2d2 text-shadow-5">선택삭제</span>
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

export default ExchangeHistory
