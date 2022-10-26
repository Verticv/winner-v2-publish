import React from 'react'
import '../RadioButton.css'
import FootballIcon from '../../../images/myPage/betHistory/football.png'
import USFlagIcon from '../../../images/myPage/betHistory/us_flag.png'
import UKFlagIcon from '../../../images/myPage/betHistory/uk_flag_rec.png'
import SpainFlagIcon from '../../../images/myPage/betHistory/spain_flag.png'
import ClockIcon from '../../../images/myPage/betHistory/clock_v2.png'
import UpIcon from '../../../images/myPage/betHistory/UP.png'
import DownIcon from '../../../images/myPage/betHistory/DOWN.png'

const SportsBetHistoryPanel = ({
    id = 0,
    type = 0,
    time = "2021-06-29 15:45",
    amount = "5,000원",
    ratio = "4.34",
    predictedPrice = "21,715원",
    winAmount = "0",
    ticketNumber = "1891241599",
    checkedState = null,
    setCheckedState = null,
    setPopupOpen = null,
    isPopup = false,
    isAttached = false,
    setAttachedArray = null,
    attachedArray = null,
    noButtons = false,
    width = '',
    isFullPage = false
}) => {

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }; 

    const addEntryClick = () => {
        setAttachedArray(oldArray => [...oldArray, id]);
    };

    const handleRemoveItem = (id) => {
        setAttachedArray(attachedArray.filter(item => item !== id));
    };
    
    const CardContent = ({
        bet, 
        result, 
        choice, 
        score, 
        team1, 
        team2, 
        stat1, 
        stat2, 
        stat3,
        hasUp = false,
        hasDown = false
    }) => (
        <div className="flex items-center w-full h-54px" style={{background:'#323231'}}>
        <div
          style={{ width: isAttached ? "127px" : "120px", marginLeft: isAttached ? "16px" : "0px" }}
          className="-space-y-4px flex flex-col items-center justify-center h-54px font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8">
          <span>승무패</span> 
          <span>(연장포함)</span>
        </div>
        <div className="flex space-x-4px">
          <button 
            style={{
              width: isAttached ? "365px" : "285px",
              textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",
              background: bet === "left" ? "linear-gradient(to bottom, #4f4a41, #2f2c28)" : "linear-gradient(to bottom, #4f4a41, #2f2c28)",
            }} 
              className="flex items-center justify-center h-36px rounded-4px shadow-btn p-px"
            >
            <div 
              style={{width: isAttached ? "363px" : "283px", background: bet === "left" ? "linear-gradient(to bottom, #987959, #634d38 )" : ""}}
              className={`${
                bet === "left" 
                ? "text-golden-highLight  from-red-ff535f via-red-ff535f to-red-ee4e5a" 
                : "bg-dark-252525 text-gray-c8c8c8"} 
                flex items-center justify-between h-34px rounded-3px cursor-pointer px-10px pt-px`
              }>
                <span className={`${isAttached? 'w-290px': hasUp ?'w-210px':'w-223px'} truncate text-left font-spoqaMedium tracking-tight text-14px text-shadow overflow-ellipsis`}>{team1}</span>
                <div className="flex items-center space-x-5px">
                    {hasUp && <img className="object-none" src={UpIcon} alt="" /> }
                    <span className="font-roboto tracking-tight text-14px text-shadow">{stat1}</span>
                </div>
            </div>
          </button>

            <button
                style={{textShadow: bet === "middle" ? "1px 1px 1px #00000070" : "",background: bet === "middle" ? "" : "linear-gradient(to bottom, #4f4a41, #2f2c28)",}} 
                className={`flex group items-center justify-center w-81px h-36px rounded-4px  shadow-btn p-px ${bet === "middle" ? "bg-red-cb4343" : ""}`}
            >
                <div className={`${
                    bet === "middle" 
                    ? "text-white border-red-ff7982 from-red-ff535f via-red-ff535f to-red-ee4e5a" 
                    : "bg-dark-252525 text-gray-c8c8c8"}
                    pt-px flex items-center justify-center h-34px w-79px rounded-3px  cursor-pointer`}
                >
                    <span className="font-roboto tracking-tight text-14px text-shadow">{stat2}</span>
                </div>
            </button>

              <button style={{
                width: isAttached ? "365px" : "285px",
                background: bet === "right" ? "linear-gradient(to bottom, #4f4a41, #2f2c28)" : "linear-gradient(to bottom, #4f4a41, #2f2c28)"
              }} className={`${bet === "right" ? "" : ""} flex group items-center justify-center h-36px rounded-4px p-px shadow-btn`}>
                <div
                style={{
                    width: isAttached ? "363px" : "283px",
                    textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",
                    background: bet === "right" ? "linear-gradient(to bottom, #987959, #634d38 )" : ""
                }} 
                className={`${
                    bet === "right" 
                    ? "text-golden-highLight " 
                    : "bg-dark-252525 text-gray-c8c8c8"} 
                    pt-px flex items-center justify-between h-34px rounded-3px  cursor-pointer px-10px`}
                >
                    <div className="flex items-center space-x-5px">
                      <span className="font-roboto tracking-tight text-14px">{stat3}</span>
                        {hasDown && <img className="object-none" src={DownIcon} alt="" /> }
                    </div>
                    <span className={`${isAttached? 'w-290px': hasDown ?'w-210px':'w-223px'} truncate font-spoqaMedium tracking-tight text-14px text-right text-shadow overflow-ellipsis`}>{team2}</span>
                </div>
            </button>
        </div>

        <div className="flex ml-10px font-spoqaMedium tracking-tight text-14px text-center">
            <div style={{width: isAttached && "90px"}} className="font-roboto w-99px text-gray-c8c8c8">{score}</div>
            <div style={{width: isAttached && "59px"}} className="w-61px text-gray-c8c8c8">{choice === "home" ? "홈팀 승" : "원정팀 승"}</div>
            <div 
            style={{marginRight:isAttached && "5px",WebkitTextStroke:"0.2px"}}
            className={`${
                result === "win" 
                ? "text-red-e65454" 
                : result === "lose" 
                ? "text-gray-c8c8c8" 
                : result === "cancel" 
                ? "text-blue-4c98ff" 
                : "text-gray-c8c8c8"}
                ${
                    isPopup ? "w-63px" : "w-70px"
                }
                `}
            >{
                result === "win" 
                ? "승" 
                : result === "lose" 
                ? "패" 
                : result === "cancel" 
                ? "취소" 
                : "결과없음"}</div>
        </div> 
        </div>
    )


    const Cards0 = ({bet = "right"}) => (
        <div className="w-full rounded-4px overflow-hidden shadow-subNavbar border-2 border-gray-473b35">
            <div className={`flex items-center justify-between h-54px w-full ${isFullPage ?'px-20px':' pl-17px pr-19px'}`} style={{background:'linear-gradient( to right, rgb(108,85,62) 0%, rgb(71,59,53) 100%)'}}>
                <div className="flex items-center">
                    <img src={FootballIcon} alt="" />
                    <img className="ml-5px" src={USFlagIcon} alt="" />
                    <span className="ml-4px font-spoqaMedium text-20px tracking-tight text-golden-highLight pt-3px truncate" style={{maxWidth : width === 'full'||isFullPage?'910px':'760px'}}>MLS</span>
                </div>
                <div className="flex items-center">
                    <img src={ClockIcon} alt="" className='-mt-2px'/>
                    <span className="ml-5px font-spoqa text-16px tracking-tight text-golden-highLight">
                        2021-06-29 15:45
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-full  border-gray-dddddd" style={{background:'#323231'}}>
                <CardContent 
                    bet={bet} 
                    result="cancel" 
                    choice="away" 
                    score="4 : 4"
                    team1="CF파추카"
                    team2="과달하라 차바스"
                    stat1="2.26"
                    stat2="2.96"
                    stat3="3.47"
                />
            </div>
        </div>
    )

    const Cards1 = ({hasUp = true, hasDown = true}) => (
        <div className="w-full rounded-4px overflow-hidden shadow-subNavbar border-2 border-gray-473b35">
            <div className="flex items-center justify-between h-54px w-full px-20px" style={{background:'linear-gradient( to right, rgb(108,85,62) 0%, rgb(71,59,53) 100%)'}}>
                <div className="flex items-center">
                    <img src={FootballIcon} alt="" />
                    <img className="ml-5px" src={UKFlagIcon} alt="" />
                    <span className="ml-4px font-spoqaMedium text-20px tracking-tight text-golden-highLight pt-3px truncate" style={{maxWidth : width === 'full' || isFullPage ?'910px':'760px'}}>EPL</span>
                </div>
                <div className="flex items-center">
                    <img src={ClockIcon} alt="" className='-mt-2px'/>
                    <span className="ml-5px font-spoqa text-16px tracking-tight text-golden-highLight">
                        2021-06-29 15:45
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-full bg-gray-fefefe border-gray-dddddd" style={{background:'#323231'}}>
                <CardContent 
                    bet="left" 
                    result="win" 
                    choice="home" 
                    score="5 : 2"
                    team1="맨유"
                    team2="첼시"
                    stat1="2.95"
                    stat2="4.62"
                    stat3="1.39"
          />
          <div className=" w-full  border-t border-gray-252525">
                <CardContent 
                    bet="right" 
                    result="win" 
                    choice="away"
                    score="0 : 3"
                    team1="아스널"
                    team2="맨시티"
                    stat1="2.95"
                    stat2="3.32"
                    stat3="2.50"
                    hasDown={hasDown}
                    hasUp={hasUp}
            />
            </div>

            </div>
        </div>
    )

    const Cards2 = () => (
        <div className="w-full rounded-4px overflow-hidden shadow-subNavbar border-2 border-gray-473b35">
            <div className="flex items-center justify-between h-54px w-full  px-20px" style={{background:'linear-gradient( to right, rgb(108,85,62) 0%, rgb(71,59,53) 100%)'}}>
                <div className="flex items-center">
                    <img src={FootballIcon} alt="" />
                    <img className="ml-5px" src={UKFlagIcon} alt="" />
                    <span className="ml-4px font-spoqaMedium text-20px tracking-tight text-golden-highLight pt-3px truncate" style={{maxWidth : width === 'full' || isFullPage ?'910px':'760px'}}>EPL</span>
                </div>
                <div className="flex items-center">
                    <img src={ClockIcon} alt=""  className='-mt-2px'/>
                    <span className="ml-5px font-spoqa text-16px tracking-tight text-golden-highLight">
                        2021-06-29 15:45
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-full bg-gray-fefefe border-gray-dddddd">
                <CardContent 
                    bet="left" 
                    result="win" 
                    choice="home" 
                    score="5 : 2"
                    team1="맨유"
                    team2="첼시"
                    stat1="2.95"
                    stat2="4.62"
                    stat3="1.39"
                />
            </div>
        </div>
    )

    const Cards3 = () => (
        <div className="w-full rounded-4px overflow-hidden shadow-subNavbar border-2 border-gray-473b35">
            <div className="flex items-center justify-between h-54px w-full  px-20px" style={{background:'linear-gradient( to right, rgb(108,85,62) 0%, rgb(71,59,53) 100%)'}}>
                <div className="flex items-center">
                    <img src={FootballIcon} alt=""/>
                    <img className="ml-5px" src={SpainFlagIcon} alt="" />
                    <span className="ml-4px font-spoqaMedium text-20px tracking-tight text-golden-highLight pt-3px truncate" style={{maxWidth : width === 'full' || isFullPage?'910px':'760px'}}>라리가</span>
                </div>
                <div className="flex items-center">
                    <img src={ClockIcon} alt="" className='-mt-2px'/>
                    <span className="ml-5px font-spoqa text-16px tracking-tight text-golden-highLight">
                        2021-06-29 15:45
                    </span>
                </div>
            </div>
            <div className="flex flex-col w-full bg-gray-fefefe border-gray-dddddd">
                <CardContent 
                    bet="left" 
                    result="lose" 
                    choice="away" 
                    score="1 : 2"
                    team1="바르셀로나"
                    team2="레알마드리드"
                    stat1="1.80"
                    stat2="3.32"
                    stat3="1.90"
                />
            </div>
        </div>
    )




  return (
    <div className="w-full shadow-table p-px rounded-4px"
      style={{ background: 'linear-gradient(to top,rgb(31,31,30) 0% ,rgb(31,31,30) 80% , rgb(52,52,52) 100%)' }}>
        <div className="w-full bg-gray-2b2b2a rounded-3px pb-10px">
            <div className="flex h-54px w-full font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6">
                <div style={{width: isAttached === true ? isFullPage? "160px":"162px" : "120px", marginLeft: width === 'full'?"":isFullPage?"0":"10px"}} className="h-full flex items-center justify-center">베팅구분</div>
                <div style={{width: isAttached === true ? isFullPage? "312px":"315px" : "283px"}} className="h-full flex items-center justify-center">승(홈)</div>
                <div style={{width: isAttached === true ? "139px" : "91px"}} className="h-full flex items-center justify-center">무</div>
                <div style={{width: isAttached === true ? "317px" : "283px"}} className="h-full flex items-center justify-center">패(원정)</div>
                <div style={{width: isAttached === true ? isFullPage? "90px":"85px" : "114px", paddingLeft:  isPopup ? '9px':!isAttached ? '7px':isFullPage?'4px':'5px' ,marginLeft:  isAttached === true ? isFullPage ?"32px":"40px" : "0px"}} className="h-full flex items-center justify-center">스코어</div>
                <div style={{width: isAttached === true ? "66px" : "53px"}} className="h-full flex items-center justify-center">선택</div>
                <div style={{width: isAttached === true ? "58px" : "79px", marginRight:  isAttached === true ? isFullPage ?"20px":"25px" : "4px"}} className="h-full flex items-center justify-center">결과</div>
            </div>

            <div className="w-full px-8px space-y-10px">
                {type === 0 
                ? <Cards0 />
                : type === 1 
                ? <Cards1 />
                : type === 2 
                ? <><Cards2 /><Cards3 /></>
                : type === 3
                ? <><Cards0 bet="middle" /><Cards1 hasDown={false} hasUp={false} /></>
                : type === 4 
                ? <Cards0 bet="middle" />
                : <></>
                }
                </div>
            
            <div className={`flex w-full px-8px ${isPopup ? 'mt-11px' : 'mt-10px'} space-x-10px`}>
                <table>
                    <div style={{backgroundColor: 'rgb(55,55,55)'}} className={`${isPopup && "pt-px"} flex w-auto h-36px rounded-4px bg-dark-252525 font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 overflow-hidden`}>
                        {(isAttached === false) && (
                            <div style={{backgroundColor: 'rgb(55,55,55)'}} className="w-45px h-full flex items-center justify-center">선택</div>
                        )}
                        {(isAttached === false && isPopup === false) && (
                            <div className="w-116px h-full flex items-center justify-center border-l border-gray-2b2b2a">베팅번호</div>
                        )}
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "151px" : "151px"}} className="h-full flex items-center justify-center border-l border-gray-2b2b2a">베팅시간</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "150px"}} className="h-full flex items-center justify-center border-l border-gray-2b2b2a">베팅금액</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "78px" : "178px" }} className="h-full flex items-center justify-center border-l border-gray-2b2b2a">배당률</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "165px"}} className="h-full flex items-center justify-center border-l border-gray-2b2b2a">예상적중금액</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "178px"}} className="h-full flex items-center justify-center border-l border-gray-2b2b2a">당첨금</div>
                        
                    </div>
                    <div className={`flex w-auto h-36px font-spoqa text-14px tracking-tight text-gray-c8c8c8 ${isPopup && "pt-2px"}`}>
                        {(isAttached === false) && checkedState && (
                            <div className="w-45px h-full flex items-center justify-center">
                                <input 
                                    className="radio" 
                                    type="checkbox" 
                                    name="radio" 
                                    checked={checkedState[type]}
                                    onChange={() => handleOnChange(type)}
                                />
                            </div>
                        )}
                        {(isAttached === false && isPopup === false) && (
                            <div className="w-116px h-full flex items-center justify-center ">{ticketNumber}</div>
                        )}
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "151px" : "151px"}} className="h-full flex items-center justify-center ">{time}</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "150px"}} className="h-full flex items-center justify-end  pr-5px">{amount}</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "78px" : "178px"}} className="h-full flex items-center justify-center ">{ratio}</div>
                        <div style={{width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "165px"}} className="h-full flex items-center justify-end  pr-5px">{predictedPrice}</div>
                        <div style={{WebkitTextStroke:winAmount.includes("+") &&"0.2px",width: noButtons === true ? "236px" : isAttached === true ? "212px" : isPopup === false ? "131px" : "200px"}} className="h-full flex items-center justify-end  pr-5px"><p className={`${winAmount.includes("+") && "text-red-e65454"}`}>{winAmount}</p><p style={{WebkitTextStroke:"0px"}}>원</p></div>
                    </div>
                </table>
                
                <div className="flex space-x-4px">
                    {isAttached === false && (
                        <button 
                            onClick={() => {
                                setPopupOpen && setPopupOpen(false)
                                setAttachedArray && addEntryClick()
                            }} 
                            className="flex items-center justify-center w-112px h-73px rounded-4px bg-gradient-to-b from-blue-88d9e8  to-blue-3d4a8d hover:brightness-125 filter shadow-link" 
                        >
                            <div className="pt-px flex items-center justify-center h-71px w-110px rounded-3px bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-blue-d6f3ff text-shadow-5">내역올리기</span>
                            </div>
                        </button>
                    )}
                    
                    {(isPopup === false && noButtons === false) && (
                        <button onClick={() => setAttachedArray && handleRemoveItem(id) } className="flex items-center justify-center w-112px h-73px rounded-4px bg-gradient-to-t from-red-4b0923 to-red-e88895  hover:brightness-125 filter shadow-link">
                            <div className="pt-px flex items-center justify-center h-71px w-110px rounded-3px  bg-gradient-to-b from-red-e06446  to-red-96341d cursor-pointer">
                                <span className="font-spoqaMedium tracking-tight text-14px text-red-ffd2d2 text-shadow-5">내역삭제</span>
                            </div>
                        </button>
                    )}
                </div>
            </div>
        </div>
    </div>
    )
}

export default SportsBetHistoryPanel
