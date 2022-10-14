import React from 'react'
import ClockIcon from '../../images/myPage/betHistory/clock_v2.png'

const PowerladderResults = ({title="파워사다리", icon}) => {

    const ExampleArray = [
        {id:0, team1: "홀 [211회]", team2: "[211회] 짝", bet:"left"},
        {id:1, team1: "3줄 [211회]", team2: "[211회] 4줄", bet:"left"},
        {id:2, team1: "좌 [211회]", team2: "[211회] 우", bet:"right"},
    ]
    const ExampleArray2 = [
        {id:0, team1: "홀 [211회]", team2: "[211회] 짝", bet:"right"},
        {id:1, team1: "3줄 [211회]", team2: "[211회] 4줄", bet:"left"},
        {id:2, team1: "좌 [211회]", team2: "[211회] 우", bet:"right"},
    ]
    const ExampleArray3 = [
        {id:0, team1: "홀 [211회]", team2: "[211회] 짝", bet:"left"},
        {id:1, team1: "3줄 [211회]", team2: "[211회] 4줄", bet:"left"},
        {id:2, team1: "좌 [211회]", team2: "[211회] 우", bet:"left"},
    ]

    const ExampleArray4 = [
        {id:0, team1: "언더 [211회]", team2: "[211회] 오버", bet:"left"},
        {id:1, team1: "홀 [211회]", team2: "[211회] 짝", bet:"right"},
    ]
    const ExampleArray5 = [
        {id:0, team1: "언더 [211회]", team2: "[211회] 오버", bet:"right"},
        {id:1, team1: "홀 [211회]", team2: "[211회] 짝", bet:"left"},
    ]
    const ExampleArray6 = [
        {id:0, team1: "언더 [211회]", team2: "[211회] 오버", bet:"left"},
        {id:1, team1: "홀 [211회]", team2: "[211회] 짝", bet:"left"},
    ]

    const CardContent = ({
        bet, 
        team1, 
        team2, 
        stat1 ="1.95", 
        stat3 ="1.95",
    }) => (
        <div className="flex items-center w-full h-54px">
            <div style={{width:"75px"}} className="flex justify-center font-roboto text-14 tracking-tight text-gray-c8c8c8 mt-3px">211</div>
              <div className="flex space-x-4px">
                <button 
                  style={{
                    width: "424px",
                    textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",
                    background:"linear-gradient(to bottom, #4f4a41, #2f2c28)"
                  }} 
                  className="flex items-center justify-center h-36px rounded-4px shadow-btn p-px"
                >
                  <div 
                  style={{
                    width: "422px",
                    background: bet === "left" 
                    ? "linear-gradient(to bottom, #987959, #634d38 )":""}}
                    className={`${
                      bet === "left" 
                      ? "text-golden-highLight" 
                      : "bg-dark-252525 text-gray-c8c8c8"} 
                      flex items-center justify-between h-34px rounded-3px px-8px pt-px`
                  }>
                      <span className="truncate w-323px text-left font-spoqaMedium tracking-tight text-14px">{team1}</span>
                      <div className="flex items-center space-x-5px">
                          <span className="font-roboto tracking-tight text-14px pt-2px">{stat1}</span>
                      </div>
                  </div>
                </button>

                <button
                    style={{textShadow: bet === "middle" ? "1px 1px 1px #00000070" : "",background:"linear-gradient(to bottom, #4f4a41, #2f2c28)"}} 
                    className={`flex group items-center justify-center w-82px h-36px rounded-4px shadow-btn `}
                >
                  <div
                    style={{background: bet === "middle" ? "linear-gradient(to bottom, #987959, #634d38 )" : ""}}
                    className={`${
                      bet === "middle" 
                      ? "text-golden-highLight" 
                      : "bg-dark-252525 text-gray-c8c8c8"}
                      pt-px flex items-center justify-center h-34px w-80px rounded-3px cursor-pointer`}
                    >
                        <span className="font-spoqaMedium  tracking-tight text-14px">VS</span>
                    </div>
                </button>

                <button style={{width: "424px",background:"linear-gradient(to bottom, #4f4a41, #2f2c28)"}} className={`flex group items-center justify-center h-36px rounded-4px shadow-btn`}>
                    <div
                    style={{
                        width: "422px",
                        textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",
                        background: bet === "right" ? "linear-gradient(to bottom, #987959, #634d38 )":""
                    }} 
                    className={`${
                        bet === "right" 
                        ? "text-golden-highLight" 
                    : "bg-dark-252525 text-gray-c8c8c8"} 
                        pt-px flex items-center justify-between h-34px rounded-3px cursor-pointer px-8px pl-9px`}
                    >
                        <div className="flex items-center space-x-5px">
                            <span className="font-roboto tracking-tight text-14px pt-2px">{stat3}</span>
                        </div>
                        <span className="truncate w-323px font-spoqaMedium tracking-tight text-14px text-right">{team2}</span>
                    </div>
                </button>
            </div>
        </div>
    )

    function Cells({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                style={{background: item.id % 2 === 0 ? "#323231" : "#2e2e2e"}} 
                className="flex items-center   text-gray-c8c8c8 h-55px w-full border-b border-gray-252525 text-14px font-roboto tracking-tight "
            >
                <CardContent bet={item.bet} team1={item.team1} team2={item.team2} />
            </div>
        ))
    }

    const Table = ({array}) => (
        <div className="flex flex-col rounded-4px shadow-plain11 border-2 border-gray-473b35 overflow-hidden">
            <div style={{background:"linear-gradient( to right, rgb(108,85,62) 0%, rgb(71,59,53) 100%)"}} className="h-54px flex items-center justify-between pr-20px">    
                <div className="flex items-center -mt-px">
                    <img src={icon} alt="" className="ml-16px object-none" />
                    <span className="text-golden-highLight font-spoqaMedium text-20px ml-3px pt-3px truncate" style={{maxWidth: "790px"}}>{title}</span>
                </div>
                

                <div className="flex items-center flex-shrink-0">
                    <img src={ClockIcon} alt="" className='-mt-2px' />
                    <span 
                        className="ml-5px font-spoqa text-16px tracking-tight text-golden-highLight"
                    >
                        2021-06-29 15:45
                    </span>
                </div>
            </div>
            <Cells items={array} />
        </div>
    )

    return (
      <div
        style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
        className="rounded-4px shadow-table overflow-hidden p-px">
        <div className="w-full rounded-4px bg-gray-2b2b2a overflow-hidden">
            <div style={{height:"54px"}} className="px-11px w-full flex items-center text-14px font-spoqaMedium tracking-tight text-gray-ccc2b6">
                <div style={{width:"75px",marginLeft:"0"}} className='flex justify-center'>회차</div>
                <div style={{width:"424px",marginLeft:"0"}} className='flex justify-center'>승(홈)</div>
                <div style={{width:"82px",marginLeft:"4px"}} className='flex justify-center'>VS</div>
                <div style={{width:"424px",marginLeft:"4px"}} className='flex justify-center'>패(원정)</div>
            </div>
            <div className="px-9px space-y-10px pb-12px -mt-px">
                <Table array={title === "스피드키노" ? ExampleArray4 : ExampleArray} />
                <Table array={title === "스피드키노" ? ExampleArray5 : ExampleArray2} />
                <Table array={title === "스피드키노" ? ExampleArray6 : ExampleArray3} />
            </div>
        </div>
        </div>
    )
}

export default PowerladderResults
