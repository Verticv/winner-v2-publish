import React from 'react'

const BetCombinationRightPanelHistory = () => {

    const HistoryCard = ({
        title = "노르웨이 - Eliteserien",
        team1 = "FK Haugesund",
        team2 = "스트룀스고세 IF",
        side = "left",
        type = "축구 - 승무패 (게임)",
        time = "2021-06-29 16:00",
        winStatus = "lose"
    }) => (
        <div 
            style={{width:"301px", borderRadius:"6px", background: "linear-gradient(to top, #21211f, #7b746d)"}}
            className="flex flex-col overflow-hidden p-px"
        >
            <div 
                style={{height:"36px", backgroundColor: "#252525"}}
                className="flex flex-shrink-0 items-center pl-7px font-spoqaMedium text-14px h-14px  text-gray-ccc2b6 tracking-tight rounded-t-6px"
            >
                {title}
            </div>

            <div 
                style={{
                    background: "linear-gradient(to right, #4b4b49, #2e2e2e)",
                }}
                className="relative w-full px-9px rounded-b-6px pb-10px"
            >
                <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8 h-13px flex items-center mt-14px">
                    {time}
                </p>
                <p 
                    className="text-14px font-spoqaBold tracking-tight text-gray-r454545 flex items-center mt-7px leading-none break-all"
                    style={{color: side === "left" ? "#ffffff" : "#e65454",lineHeight: "1.2"}}
                >
                    {team1}
                </p>
                <p 
                    className="text-14px font-spoqaBold tracking-tight  flex items-center mt-7px leading-none break-all"
                    style={{color: side === "left" ? "#e65454" : "#ffffff",lineHeight: "1.2"}}
                >
                    {team2}
                </p>
                <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8 flex items-center mt-10px leading-none break-all"  style={{width: "220px",lineHeight: "1.2"}}>{type}</p>
                <div className="flex absolute bottom-8px right-11px text-13px tracking-tight font-spoqaMedium items-center text-gray-c8c8c8">
                    <p>{winStatus === "win" ? "승 @" : "패 @"}</p> 
                    <p 
                        className="ml-2px"
                        style={{color: winStatus === "win" ? "#e65454" : "#4c98ff"}}
                    >
                        {winStatus === "win" ? "2.26" : "00.00"}
                    </p>
                </div>
                <div className="flex absolute top-14px right-10px text-13px tracking-tight font-spoqaMedium h-13px items-center text-blue-4c98ff">
                    대기중
                </div>
            </div>
        </div>
    )

    const ResultsCard = () => (
        <div style={{height:"133px", borderRadius:"6px", background:'#4d4d4d',borderColor:'#3f3f3f'}} className="w-full border  space-y-9px pt-13px">
            <div className="flex justify-between pl-7px pr-11px">
                <p className="font-spoqaMedium text-14px h-14px flex items-center tracking-tight text-gray-c8c8c8">베팅시간</p>
                <p className="font-roboto text-14px h-14px flex items-center tracking-tight text-gray-c8c8c8">2021-06-29 16:00</p>
            </div>
            <div className="flex justify-between pl-7px pr-11px">
                <p className="font-spoqaMedium text-14px h-14px flex items-center tracking-tight text-gray-c8c8c8">베팅금액</p>
                <p className="font-roboto text-14px h-14px flex items-center tracking-tight text-gray-c8c8c8">5,000</p>
            </div>
            <div className="flex justify-between pl-7px pr-11px">
                <p className="font-spoqaMedium text-14px h-14px flex items-center tracking-tight text-gray-c8c8c8">배당률</p>
                <p className="font-roboto text-14px h-14px flex items-center tracking-tight text-gray-c8c8c8">1.00</p>
            </div>
            <div className="flex justify-between pl-7px pr-11px">
                <p className="font-spoqaMedium text-14px h-14px flex items-center tracking-tight text-gray-c8c8c8">적중예상금액</p>
                <p className="font-roboto text-14px h-14px flex items-center tracking-tight text-gray-c8c8c8">11,000.00</p>
            </div>
            <div className="flex justify-between pl-7px pr-11px">
                <p className="font-spoqaMedium text-14px h-14px flex items-center tracking-tight text-gray-c8c8c8">티켓번호</p>
                <p className="font-roboto text-14px h-14px flex items-center tracking-tight text-blue-4c98ff">189106964</p>
            </div>
        </div>
    )

    return (
        <div>
            <div className="bg-gray-262626 border-b border-2px border-gray-1e1e1e pb-12px px-3px flex flex-col">

                <div className="flex flex-col space-y-4px">
                    <HistoryCard 
                        team1="FK Haugesund FK Haugesund FK Haugesund FK Haugesund FK Haugesund FK Haugesund FK Haugesund " 
                        team2="스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF " 
                        side="left" 
                        winStatus="lose" 
                    />
                    <HistoryCard title="오스트리아 - 컵" team1="SV Kuchl" team2="FC Blau Weiss Linz" side="right" winStatus="win" />
                    <ResultsCard />
                </div>

            </div>

            <div className="bg-gray-262626 border-b border-2px border-gray-1e1e1e pt-12px pb-3px px-3px flex flex-col rounded-b-lg">

                <div className="flex flex-col space-y-4px">
                    <HistoryCard title="러시아 - Liga Pro Women" team1="Malahlt" team2="Granat" side="right" type="배구 - 승무패 (게임)" winStatus="win" />
                    <ResultsCard />
                </div>

            </div>
        </div>
    )
}

export default BetCombinationRightPanelHistory
