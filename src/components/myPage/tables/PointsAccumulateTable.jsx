import React from 'react'

const PointsAccumulateTable = () => {
    return (
        <div
        style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
          className="rounded-4px shadow-table overflow-hidden p-px">
            <table className="rounded-3px overflow-hidden">
                <thead className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px  border-b border-dark-252525 bg-dark-2e2e2e ">
                <tr>
                    <td className="w-152px text-center">적립일</td>
                    <td className="w-133px text-center">제목</td>
                    <td className="w-129px text-center">아이디</td>
                    <td className="w-136px text-center">종류</td>
                    <td className="w-141px text-center">베팅금액</td>
                    <td className="w-116px text-center">퍼센트</td>
                    <td className="w-102px text-center">보너스퍼센트</td>
                    <td className="w-133px text-center pr-15px">적립포인트</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-323232">
                    <td className="w-152px text-center font-robotoRegular">2021-06-30</td>
                    <td className="w-133px text-center"><div className='w-133px truncate'>Rolling Bonus</div></td>
                    <td className="w-129px text-center"><div className='w-129px truncate'>louie3</div></td>
                    <td className="w-136px text-center">스포츠</td>
                    <td className="w-141px text-right pr-14px font-robotoRegular">5,000</td>
                    <td className="w-116px text-center font-robotoRegular">1.00%</td>
                    <td className="w-102px text-center font-robotoRegular">100%</td>
                    <td className="w-133px text-center font-robotoRegular text-blue-4c98ff pr-15px">50P</td>
                </tr>
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-2e2e2e">
                    <td className="w-152px text-center font-robotoRegular">2021-06-30</td>
                    <td className="w-133px text-center"><div className='w-133px truncate'>Rolling Bonus</div></td>
                    <td className="w-129px text-center"><div className='w-129px truncate'>louie3</div></td>
                    <td className="w-136px text-center">스포츠</td>
                    <td className="w-141px text-right pr-14px font-robotoRegular">5,000</td>
                    <td className="w-116px text-center font-robotoRegular">1.00%</td>
                    <td className="w-102px text-center font-robotoRegular">100%</td>
                    <td className="w-133px text-center font-robotoRegular text-blue-4c98ff pr-15px">50P</td>
                </tr>
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px bg-dark-323232">
                    <td className="w-152px text-center font-robotoRegular">2021-06-30</td>
                    <td className="w-133px text-center"><div className='w-133px truncate'>Rolling Bonus</div></td>
                    <td className="w-129px text-center"><div className='w-129px truncate'>louie3</div></td>
                    <td className="w-136px text-center">스포츠</td>
                    <td className="w-141px text-right pr-14px font-robotoRegular">5,000</td>
                    <td className="w-116px text-center font-robotoRegular">1.00%</td>
                    <td className="w-102px text-center font-robotoRegular">100%</td>
                    <td className="w-133px text-center font-robotoRegular text-blue-4c98ff pr-15px">50P</td>
                </tr>
            </tbody>
        </table> 
        </div>
    )
}

export default PointsAccumulateTable
