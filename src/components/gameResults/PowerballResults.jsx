import React from 'react'
import PowerballIcon from '../../images/gameResults/minigame/powerball_icon.png'

const PowerballResults = () => {

    const ExampleArray = [
        {id:0, result:"파워볼 홀/짝 (홀)", percentage: "1.95"},
        {id:1, result:"파워볼 숫자 (2)", percentage: "9.00"},
        {id:2, result:"파워볼 구간 A (0~2)", percentage: "3.15"},
        {id:3, result:"파워볼 언오버 (짝 언더)", percentage: "3.15"},
        {id:4, result:"일반볼 홀/짝 (짝)", percentage: "1.95"},
        {id:5, result:"일반볼 구간 (중)", percentage: "2.90"},
    ]

    function Cells({ items, count }) {
        return items.map(item => (
            <div 
                key={item.id} 
                style={{backgroundColor: item.id % 2 === 0 ? "#323231" : "#2e2e2e"}} 
                className="flex items-center text-14px tracking-tight text-gray-c8c8c8 h-54px w-full border-b border-gray-252525 font-roboto last:border-b-0"
            >
                <div style={{marginLeft:"45px", width:"136px"}} className="flex justify-center">2021-06-29 15:45</div>
                <div style={{marginLeft:"140px", width:"90px"}} className="flex justify-center">{count}</div>
                <div style={{marginLeft:"120px", width:"220px"}} className="font-spoqaMedium text-blue-4c98ff flex justify-center">{item.result}</div>
                <div style={{marginLeft:"130px", width:"74px"}} className="flex justify-center">{item.percentage}</div>
            </div>
        ))
    }

    const Table = ({count}) => (
        <div className="flex flex-col rounded-4px shadow-subNavbar border-2 border-gray-473b35 overflow-hidden">
            <div style={{background:"linear-gradient( to right, rgb(108,85,62) 0%, rgb(71,59,53) 100%)"}} className="h-54px flex items-center">    
                <img src={PowerballIcon} alt="" className="ml-16px" />
                <span className="text-golden-highLight font-spoqaMedium text-20px ml-4px pt-3px">파워볼</span>
            </div>
            <Cells items={ExampleArray} count={count} />
        </div>
    )

    return (
      <div
        style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
        className="rounded-4px shadow-table overflow-hidden p-px">
        <div className="w-full rounded-4px bg-gray-323232 overflow-hidden">
          <div style={{height:"53px"}} className="w-full flex items-center text-14px font-spoqaMedium tracking-tight text-gray-ccc2b6">
            <div style={{marginLeft:"96px"}}>경기일시</div>
            <div style={{marginLeft:"218px"}}>회차</div>
            <div style={{marginLeft:"250px"}}>결과</div>
            <div style={{marginLeft:"244px"}}>배당률</div>
          </div>
          <div className="px-10px space-y-10px pb-12px">
            <Table count="211" />
            <Table count="212" />
          </div>
        </div>
      </div>
    )
}

export default PowerballResults
