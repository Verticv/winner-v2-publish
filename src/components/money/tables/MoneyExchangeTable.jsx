import React from 'react'

const MoneyExchangeTable = () => {
  return (
      <div
        style={{ width: "1040px",background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
        className="rounded-4px shadow-table overflow-hidden p-px">
        <table className="w-full rounded-4px overflow-hidden">
            <thead className="bg-gray-2e2e2e font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-55px border-b border-gray-252525">
                <tr>
                    <td style={{width: "258px"}} className="text-center flex-shrink-0">신청일시</td>
                    <td style={{width: "284px"}} className="text-center">환전금액</td>
                    <td style={{width: "247px"}} className="text-center">처리일시</td>
                    <td style={{width: "204px"}} className="text-center">처리상태</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <tr className="bg-gray-323232 font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-gray-252525">
                    <td style={{width: "258px"}} className="font-robotoRegular h-56px text-center flex-shrink-0">2021-06-29 15:45:41</td>
                    <td style={{width: "284px"}} className="h-56px text-right pr-100px font-robotoRegular">12,000</td>
                    <td style={{width: "247px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width: "204px"}} className="h-56px text-center text-blue-4c98ff">완료</td>
                </tr>
                <tr className="bg-gray-2e2e2e font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-gray-252525">
                    <td style={{width: "258px"}} className="font-robotoRegular h-56px text-center flex-shrink-0">2021-06-29 15:45:41</td>
                    <td style={{width: "284px"}} className="h-56px text-right pr-100px font-robotoRegular">100,000</td>
                    <td style={{width: "247px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width: "204px"}} className="h-56px text-center">취소</td>
                </tr>
                <tr className="bg-gray-323232 font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full">
                    <td style={{width: "258px"}} className="font-robotoRegular h-56px text-center flex-shrink-0">2021-06-29 15:45:41</td>
                    <td style={{width: "284px"}} className="h-56px text-right pr-100px font-robotoRegular">50,000</td>
                    <td style={{width: "247px"}} className="h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{width: "204px"}} className="h-56px text-center text-blue-4c98ff">완료</td>
                </tr>
            
            </tbody>
      </table>
      </div>
    )
}

export default MoneyExchangeTable
