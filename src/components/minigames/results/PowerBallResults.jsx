import React from 'react'

const PowerBallResults = ({array}) => {

    function Cells({ items }) {
        return items.map(item => (
            <tr 
                style={{height: "62px", backgroundColor: item.count % 2 === 0 ? "#323232" : "#2e2e2e"}} 
                className="rounded-3xl font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-62px w-full border-b border-gray-252525 last:border-b-0 pr-4px"
            >
                <td style={{width: "156px"}} className="text-center">{item.count}</td>
                <td style={{width: "225px"}} className="text-center">{item.chosenNum}</td>
                <td style={{width: "127px"}} className="text-center">{item.numberSum}</td>
                <td style={{width: "173px", color:"#e65454"}} className="text-center">{item.odd ? "홀" : "짝"}</td>
                <td style={{width: "110px"}} className="text-center">{item.powerball}</td>
                <td style={{width: "172px", color:"#4c98ff"}} className="text-center">{item.powerballOdd ? "홀" : "짝"}</td>
                <td style={{width: "132px"}} className="text-center">{item.size}</td>
                <td style={{width: "172px"}} className="text-left pl-60px">{item.range}</td>
            </tr>
        ));
    }

    return (

        <table className="w-full">
            <thead className="bg-gray-2e2e2e rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-55px border-b border-gray-252525">
                <tr>
                    <td style={{width: "156px"}} className="text-center">회차</td>
                    <td style={{width: "225px"}} className="text-center">당첨번호결과</td>
                    <td style={{width: "127px"}} className="text-center">숫자 합</td>
                    <td style={{width: "173px"}} className="text-center">홀/짝</td>
                    <td style={{width: "110px"}} className="text-center">파워볼</td>
                    <td style={{width: "174px"}} className="text-center">파워볼 홀/짝</td>
                    <td style={{width: "132px"}} className="text-center">대/중/소</td>
                    <td style={{width: "172px"}} className="text-left pl-46px">파워볼 구간</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                <Cells items={array} />
            </tbody>
        </table>      
    )
}

export default PowerBallResults
