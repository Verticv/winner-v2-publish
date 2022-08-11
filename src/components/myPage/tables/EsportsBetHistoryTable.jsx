import React from 'react'

const EsportsBetHistoryTable = () => {

    return (
        <div className="shadow-navbar rounded-4px overflow-hidden">
            <div style={{height:"57px"}} className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px flex items-center pt-px border-b border-dark-252525 bg-dark-2e2e2e">
                <div style={{width: "92px"}} className="text-center">선택</div>
                <div style={{width: "74px"}} className="text-center">베팅번호</div>
                <div style={{width: "183px"}} className="text-center">베팅시간</div>
                <div style={{width: "146px"}} className="text-center">게임종류</div>
                <div style={{width: "115px"}} className="text-center">게임구분</div>
                <div style={{width: "119px"}} className="text-center">베팅금액</div>
                <div style={{width: "140px"}} className="text-center">적중/손실금액</div>
                <div style={{width: "87px"}} className="text-center">상태</div>
                <div style={{width: "90px"}} className="text-center pr-17px">보기</div>
            </div>
            <div className="w-full text-gray-c8c8c8 text-14px tracking-tight font-spoqa h-56px items-center flex h-full justify-center bg-dark-323232">
                <div className="flex items-center justify-center h-56px">베팅내역이 없습니다.</div>
            </div>
        </div>      
    )
}

export default EsportsBetHistoryTable
