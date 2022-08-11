import React from 'react'

const PointsAccumulateTable = () => {
    return (
        <table className="rounded-4px shadow-navbar overflow-hidden">
            <thead className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px  border-b border-dark-252525 bg-dark-2e2e2e ">
                <tr>
                    <td className="w-152px text-center">적립일</td>
                    <td className="w-133px text-center">제목</td>
                    <td className="w-129px text-center">아이디</td>
                    <td className="w-136px text-center">종류</td>
                    <td className="w-141px text-center">베팅금액</td>
                    <td className="w-116px text-center">퍼센트</td>
                    <td className="w-102px text-center">보너스퍼센트</td>
                    <td className="w-133px text-center">적립포인트</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-323232">
                    <td className="w-152px text-center font-robotoRegular">2021-06-30</td>
                    <td className="w-133px text-center">Rolling Bonus</td>
                    <td className="w-129px text-center">louie3</td>
                    <td className="w-136px text-center">스포츠</td>
                    <td className="w-141px text-right pr-14px font-robotoRegular">5,000</td>
                    <td className="w-116px text-center font-robotoRegular">1.00%</td>
                    <td className="w-102px text-center font-robotoRegular">100%</td>
                    <td className="w-133px text-center font-robotoRegular text-blue-r0056a6">50P</td>
                </tr>
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-2e2e2e">
                    <td className="w-152px text-center font-robotoRegular">2021-06-30</td>
                    <td className="w-133px text-center">Rolling Bonus</td>
                    <td className="w-129px text-center">louie3</td>
                    <td className="w-136px text-center">스포츠</td>
                    <td className="w-141px text-right pr-14px font-robotoRegular">5,000</td>
                    <td className="w-116px text-center font-robotoRegular">1.00%</td>
                    <td className="w-102px text-center font-robotoRegular">100%</td>
                    <td className="w-133px text-center font-robotoRegular text-blue-r0056a6">50P</td>
                </tr>
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-323232">
                    <td className="w-152px text-center font-robotoRegular">2021-06-30</td>
                    <td className="w-133px text-center">Rolling Bonus</td>
                    <td className="w-129px text-center">louie3</td>
                    <td className="w-136px text-center">스포츠</td>
                    <td className="w-141px text-right pr-14px font-robotoRegular">5,000</td>
                    <td className="w-116px text-center font-robotoRegular">1.00%</td>
                    <td className="w-102px text-center font-robotoRegular">100%</td>
                    <td className="w-133px text-center font-robotoRegular text-blue-r0056a6">50P</td>
                </tr>
            </tbody>
        </table> 
    )
}

export default PointsAccumulateTable
