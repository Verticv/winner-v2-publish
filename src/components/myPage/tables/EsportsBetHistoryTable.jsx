import React from 'react'

const EsportsBetHistoryTable = () => {

  return (
      <div
        style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
        className="rounded-4px shadow-table overflow-hidden p-px">
          <div className="rounded-3px overflow-hidden">
              <div className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-55px flex items-center border-b border-dark-252525 bg-dark-2e2e2e">
                  <div style={{width: "92px"}} className="text-center">선택</div>
                  <div style={{width: "72px"}} className="text-center">베팅번호</div>
                  <div style={{width: "185px"}} className="text-center">베팅시간</div>
                  <div style={{width: "140px"}} className="text-center">게임종류</div>
                  <div style={{width: "118px"}} className="text-center">게임구분</div>
                  <div style={{width: "135px"}} className="text-center">베팅금액</div>
                  <div style={{width: "135px"}} className="text-center">적중/손실금액</div>
                  <div style={{width: "51px"}} className="text-center">상태</div>
                  <div style={{width: "110px"}} className="text-center">보기</div>
              </div>
              <div className="w-full text-gray-c8c8c8 text-14px tracking-tight font-spoqa h-55px items-center flex h-full justify-center bg-dark-323232">
                  <div className="flex items-center justify-center h-56px">베팅내역이 없습니다.</div>
              </div>
          </div>      
      </div>
    )
}

export default EsportsBetHistoryTable
