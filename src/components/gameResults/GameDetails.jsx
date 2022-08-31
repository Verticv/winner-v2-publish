import React from 'react'
import FootballIcon from '../../images/myPage/betHistory/football.png'
import BasketballIcon from '../../images/myPage/betHistory/basketball.png'
import USFlagIcon from '../../images/myPage/betHistory/us_flag.png'

const GameDetails = () => {

    const Options = ({
        bet,
        team1 = "CF파추카",
        team2 = "과달하라 차바스",
        stat1 = "2.26",
        stat2 = "2.96",
        stat3 = "3.47"
    }) => (
        <div className="flex space-x-4px">
            <button 
                style={{textShadow: bet === "left" ? "1px 1px 1px #00000070" : "", background:"linear-gradient(to bottom, #4f4a41, #2f2c28)"}}
                className={`flex items-center justify-center w-285px h-36px rounded-4px shadow-btn p-px`}
            >
          <div
            style={{background:bet === "left" 
                    ? "linear-gradient(to bottom, #987959, #634d38 )":""}}
                  className={`${
                    bet === "left" 
                    ? "text-golden-highLight" 
                    : "bg-dark-252525 text-gray-c8c8c8"} 
                    flex items-center justify-between h-34px w-283px rounded-3px cursor-pointer px-10px pt-px`
                }>
                    <span className="truncate w-108px text-left font-spoqaMedium tracking-tight text-14px">{team1}</span>
                    <span className="font-roboto tracking-tight text-14px">{stat1}</span>
                </div>
            </button>

            <button
                style={{textShadow: bet === "middle" ? "1px 1px 1px #00000070" : "",background: bet === "middle" ?'linear-gradient(to bottom, #4f4a41, #2f2c28)':''}}
                className={`flex group items-center justify-center w-81px h-36px shadow-btn rounded-4px p-px`}
            >
              <div style={{background: bet === "middle" ? "linear-gradient(to bottom, #987959, #634d38 )" : ""}}
                className={`${
                    bet === "middle" 
                    ? "text-golden-highLight" 
                    : "bg-dark-252525 text-gray-c8c8c8"}
                    pt-px flex items-center justify-center h-34px w-79px rounded-3px cursor-pointer`}
                >
                    <span className="font-roboto tracking-tight text-14px">{stat2}</span>
                </div>
            </button>

            <button 
                style={{textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",background:"linear-gradient(to bottom, #4f4a41, #2f2c28)"}}
                className={` flex group items-center justify-center w-285px h-36px rounded-4px shadow-btn p-px`}
            >
              <div
                style={{background:bet === "right" 
                    ? "linear-gradient(to bottom, #987959, #634d38 )":""}}className={`${
                    bet === "right" 
                    ? "text-golden-highLight" 
                    : "bg-dark-252525 text-gray-c8c8c8"} 
                    pt-px flex items-center justify-between h-34px w-283px rounded-3px cursor-pointer px-10px`}
                >
                    <span className="font-roboto tracking-tight text-14px">{stat3}</span>
                    <span className="truncate w-108px font-spoqaMedium tracking-tight text-14px text-right">{team2}</span>
                </div>
            </button>
        </div>
    )

    const SingleCard = () => (
        <div className="w-full h-112px rounded-4px overflow-hidden shadow-subNavbar border-2 border-gray-473b35">
          <div className="flex items-center justify-between h-54px w-full px-18px"
          style={{background:'linear-gradient( to right, rgb(108,85,62) 0%, rgb(71,59,53) 100%)'}}>
                <div className="flex items-center">
                    <img src={FootballIcon} alt="" />
                    <img className="ml-5px" src={USFlagIcon} alt="" />
                    <span className="ml-5px font-spoqaMedium text-20px tracking-tight text-golden-highLight pt-2px">MLS</span>
                </div>
            </div>            
            <div className="w-full h-54px bg-gray-323231 flex items-center tracking-tight">
                <div className="w-164px flex items-center justify-center font-roboto text-14px text-gray-c8c8c8">2021-06-29 15:45</div>
                <div className="w-27px flex items-center justify-center font-spoqaMedium text-14px text-gray-c8c8c8 ">축구</div>
                
                <div style={{marginLeft: "30px"}}>
                    <Options bet="middle" />
                </div>
                
                <div className="ml-35px font-roboto text-14px text-gray-c8c8c8">4 : 4</div>
                <div className="ml-35px font-spoqaMedium text-14px text-green-45bc61">무</div>

            </div>
        </div>
    )

    const DoubleCard = () => (
        <div className="w-full h-168px rounded-4px overflow-hidden shadow-subNavbar border-2 border-gray-473b35"
          style={{background:'linear-gradient( to right, rgb(108,85,62) 0%, rgb(71,59,53) 100%)'}}>
            <div className="flex items-center justify-between h-54px w-full px-18px">
                <div className="flex items-center">
                    <img src={BasketballIcon} alt="" />
                    <img className="ml-5px" src={USFlagIcon} alt="" />
                    <span className="ml-5px font-spoqaMedium text-20px tracking-tight text-golden-highLight pt-2px">NBA</span>
                </div>
            </div>   

            <div className="w-full h-54px bg-gray-323231 border-b border-gray-252525 flex items-center tracking-tight">
                <div className="w-164px flex items-center justify-center font-roboto text-14px text-gray-c8c8c8">2021-06-29 15:45</div>
                <div className="w-27px flex items-center justify-center font-spoqaMedium text-14px text-gray-c8c8c8 ">축구</div>
                
                <div style={{marginLeft: "30px"}}>
                    <Options bet="left" team1="LA레이커스" team2="피닉스" stat1="2.95" stat2="VS" stat3="1.39" />
                </div>
                
                <div className="ml-20px font-roboto text-14px text-gray-c8c8c8">222 : 222</div>
                <div style={{color: "#e65454"}} className="ml-22px font-spoqaMedium text-14px">승</div>
            </div>

            <div className="w-full h-54px bg-gray-323231 flex items-center tracking-tight">
                <div className="w-165px flex items-center justify-center font-roboto text-14px text-gray-c8c8c8">2021-06-29 15:45</div>
                <div className="w-28px flex items-center justify-center font-spoqaMedium text-14px text-gray-c8c8c8 ">축구</div>
                
                <div style={{marginLeft: "31px"}}>
                    <Options bet="right" team1="세크라멘토" team2="오클라호마" stat1="2.95" stat2="VS" stat3="2.25" />
                </div>
                
                <div className="ml-20px font-roboto text-14px text-gray-c8c8c8">222 : 222</div>
                <div className="ml-22px font-spoqaMedium text-14px text-gray-c8c8c8">패</div>
            </div>

        </div>
    )

    return (
      <div
        style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
        className="rounded-4px shadow-table overflow-hidden p-px">
        <div className="w-full rounded-4px bg-gray-323232 overflow-hidden">
            <div className="h-53px w-full font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 flex items-center">
              <div style={{marginLeft: "65px"}} className="h-14px flex items-center">경기일시</div>
              <div style={{marginLeft: "61px"}} className="h-14px flex items-center">종목</div>
              <div style={{marginLeft: "156px"}} className="h-14px flex items-center">승(홈)</div>
              <div style={{marginLeft: "164px"}} className="h-14px flex items-center">무</div>
              <div style={{marginLeft: "157px"}} className="h-14px flex items-center">패(원정)</div>
              <div style={{marginLeft: "148px"}} className="h-14px flex items-center">스코어</div>
              <div style={{marginLeft: "25px"}} className="h-14px flex items-center">결과</div>
            </div>

            <div className="px-9px pb-10px space-y-10px">
              <SingleCard />
              <DoubleCard />
            </div>
          </div>
        </div>
    )
}

export default GameDetails
