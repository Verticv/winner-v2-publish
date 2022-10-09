import React, { useEffect, useState } from 'react'
import ClockIcon from '../../images/minigames/clock_gold.png'
import RefreshIcon from '../../images/minigames/refresh_icon.png'
import SelectionBg from '../../images/minigames/selection_bg_v2.png'
import CheckIcon from '../../images/minigames/checkbox.png'
import BetIcon from '../../images/betCombination/bet_icon.png'
import LockIcon from '../../images/minigames/lock.png'
import BlueButton from '../../images/minigames/blue.png'
import RedButton from '../../images/minigames/red_v2.png'
import YellowButton from '../../images/minigames/yellow_v2.png'
import GreenButton from '../../images/minigames/green_v2.png'
import BlueButtonSq from '../../images/minigames/blue_sq_v2.png'
import RedButtonSq from '../../images/minigames/red_sq_v2.png'
import { format } from 'date-fns'
import { ko } from "date-fns/locale"

const MinigamesRightPanel = ({
  selectedGame,
  selectedOption
}) => {

  const [inputValue, setInputValue] = useState(null)
  var nf = new Intl.NumberFormat();
  const [buttonClicked, setButtonClicked] = useState("")

  const BetAmountButton = ({amount}) => (
      <button 
          style={{
            width:"108px", 
            background:"linear-gradient(to bottom, #6b6865, #393835)" ,
          }} 
          className="flex items-center h-44px justify-center rounded-2px flex-shrink-0 p-px filter hover:brightness-125 shadow-link"
          onPointerDown={() => setButtonClicked(amount)}
          onPointerUp={() => {
              setInputValue(inputValue + amount)
              setButtonClicked(null)
          }}
          onPointerOut={() => setButtonClicked(null)}
      >
        <div 
          style={{
            width:"106px", 
            borderRadius:"2px",
            background:  buttonClicked === amount ? "linear-gradient(to bottom, #545452, #323231)" : "linear-gradient(to bottom, #545452, #323231)",
          }} 
            className="flex items-center justify-center h-42px  rounded-2px cursor-pointer pt-px">
            <span className="font-roboto tracking-tight text-16px text-golden-highLight pt-px text-shadow-5">{nf.format(amount)}</span>
        </div>
      </button>
  )
  const BetFixedAmountButton = ({amount, text}) => (
      <button 
          style={{
              width:"108px",
              background: "linear-gradient(to bottom, #e8b888, #4b3b09)",
          }} 
          className="flex items-center justify-center h-44px rounded-2px p-px flex-shrink-0  shadow-link filter hover:brightness-125"
          onClick={() => setInputValue(amount)}
      >

          <div 
              style={{
                  width:"106px", 
                  borderRadius:"2px",
                  background: "linear-gradient(to top, #7f5f3f, #a67c52)",
                  borderColor:"#747679"
              }} 
              className="flex items-center justify-center h-42px  cursor-pointer rounded-2px  pt-px">
              <span className="font-spoqaMedium tracking-tight text-16px text-golden-highLight text-shadow-5">{text}</span>
          </div>
      </button>
  )

  const dateFormat = "MM월 dd일"
  const dateFormat1 = "H:mm:ss"

  const [time, setTime] = useState(Date.now());
    
  useEffect(() => {
      const interval = setInterval(() => setTime(Date.now()), 1000);
      return () => {
          clearInterval(interval);
      };
  }, []);

  return (
    <div 
      style={{width: "348px", height:"509px",background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)"}}
      className="relative rounded-4px shadow-table overflow-hidden p-px"
      >
      <div className="rounded-3px overflow-hidden flex flex-col bg-gray-323232">
        <div 
          style={{ height: "130px", background: '#262626'}}
          className="border-b border-gray-252525 bg-gray-262626 pl-7px pr-6px pt-7px pb-5px space-y-4px"
        >
          <div 
            style={{
              background: "linear-gradient(to top, #3a300f, #a98d70", 
              boxShadow:'inset 1px 2px 1px 0px rgba(0, 0, 0, 0.2)'
            }} 
            className="h-52px w-full rounded-4px flex justify-between items-center p-px">
            <div style={{
              background: "linear-gradient(to right, #6c553e, #473b35",
            }} className='h-full w-full rounded-4px flex justify-between items-center pr-2px'>
            <div className="flex flex-col pl-6px pr-5px space-y-5px mt-4px">
              <div className="text-16px font-spoqaMedium tracking-tight text-gray-ccc2b6 h-16px flex items-center">
                {format(time, dateFormat, { locale : ko })} {format(time, dateFormat1, { locale : ko })} <p style={{color:"#ffe699"}} className="ml-3px">[216회차]</p>
              </div>
              <div style={{color:"#ffdfbd"}} className="flex space-x-4px text-18px font-spoqaBold tracking-tight h-18px items-center">
                <img className="object-none mb-3px ml-px" src={ClockIcon} alt="" />
                <p>02:16</p>
              </div>
            </div>
            <img src={RefreshIcon} alt="" className="mt-3px cursor-pointer hover:filter hover:brightness-125" />  
          </div>
        </div>

        <div style={{height: "62px"}} className="relative w-full rounded-sm flex">
            <img className="absolute object-none z-10" src={SelectionBg} alt="" />
            <div style={{width:"106px"}} className="ml-9px h-full z-20 flex items-center justify-center space-x-px pt-1px pr-8px">
              <img className="mt-px" src={CheckIcon} alt="" />
              <p style={{color:"#ffdfbd"}} className="text-16px tracking-tight font-spoqaBold mt-px">게임선택</p>
            </div>
            <div style={{width:"90px"}} className="ml-18px flex h-full z-20 items-center justify-center pr-2px flex-col space-y-4px">
                {(selectedOption[0].type === "일반볼" || selectedOption[0].type === "파워볼") && (
                    <p  className="text-gray-c8c8c8 text-12px tracking-tight font-spoqaMedium flex items-center h-12px">{selectedOption[0].type}</p>
                )}
                {(selectedOption[0].type === "일반볼" || selectedOption[0].type === "파워볼") ? (
                    <p style={{color:"#4c98ff"}} className="text-14px tracking-tight font-spoqaMedium flex items-center h-12px">{selectedOption[0].name}</p>
                ) :(
                    <p style={{color:"#4c98ff"}} className="text-12px tracking-tight font-spoqaMedium flex items-center h-12px">{selectedOption[0].name}</p>
                )}
            </div>
            <div style={{width:"81px"}} className="ml-20px flex h-full z-20 items-center justify-center">
                {selectedOption[0].buttonType && (
                    <div 
                        style={{width:"59px", height:(selectedOption[0].buttonType === "blue_sq" || selectedOption[0].buttonType === "red_sq") ? "52px" : "52px"}} 
                        className="relative flex items-center justify-center cursor-pointer pt-2px"
                    >
                        <img 
                            className={`${
                                (selectedOption[0].buttonType === "blue_sq" || selectedOption[0].buttonType === "red_sq") ? "h-59px" : "h-59px"
                            } w-full absolute object-none`} 
                            src={
                                selectedOption[0].buttonType === "blue" 
                                ? BlueButton
                                : selectedOption[0].buttonType === "red"
                                ? RedButton
                                : selectedOption[0].buttonType === "yellow"
                                ? YellowButton
                                : selectedOption[0].buttonType === "green"
                                ? GreenButton
                                : selectedOption[0].buttonType === "blue_sq"
                                ? BlueButtonSq
                                : RedButtonSq
                            } 
                            alt="" 
                        />
                        <div className="flex flex-col items-center -space-y-6px">
                            <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">{selectedOption[0].selection}</p>
                            {selectedOption[0].subtitle && (
                                <p style={{fontSize:"10px"}} className="z-20 font-spoqa text-white tracking-tight">
                                    {selectedOption[0].subtitle}
                                </p>
                            )}
                        </div> 
                        {selectedOption[0].tailSide && (
                            <div className={`${selectedOption[0].tailSide === "left" ? "left-0" : "right-0"} absolute w-22px h-22px rounded-full bg-black z-20 top-0 flex items-center justify-center`}>
                                <div className="text-white text-12px tracking-tight font-spoqaMedium">{selectedOption[0].tail}</div>
                            </div>
                        )}   
                    </div>
                )}
            </div>
        </div>

      </div>

        <div className="h-43px border-b border-gray-252525 flex items-center justify-between pl-14px pr-19px ">
            <p className="text-16px font-spoqaMedium tracking-tight text-gray-c8c8c8 pt-2px">보유금액</p>
            <p className="text-16px font-robotoBold tracking-tight text-blue-4c98ff pt-px">3,522,170</p>
        </div>
        <div className="h-43px border-b border-gray-252525 flex items-center justify-between pl-14px pr-19px">
            <p className="text-16px font-spoqaMedium tracking-tight text-gray-c8c8c8 pt-px">배당률</p>
            <p style={{color:"#ff8352"}} className="text-16px font-roboto tracking-tight pt-px">1.95</p>
        </div>
        <div className="h-43px border-b border-gray-252525 flex items-center justify-between pl-14px pr-13px">
            <p className="text-16px font-spoqaMedium tracking-tight text-gray-c8c8c8 pt-px">베팅금액</p>

            <input 
                style={{color: "#e65454", width: "216px", height: "32px", backgroundColor: "#1a1a1a"}} 
                className="flex items-center justify-end px-5px border rounded-4px border-gray-404040 text-16px font-roboto tracking-tight text-blue-r0056a6 text-right"
                placeholder="0"
                value={nf.format(inputValue)}
                onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }}
            />
        </div>
        <div className="h-41px border-b border-gray-252525 flex items-center justify-between pl-14px pr-19px" style={{height: "41px"}} >
            <p className="text-16px font-spoqaMedium tracking-tight text-gray-c8c8c8 pt-px">적중금액</p>
            <p className="text-16px font-roboto tracking-tight text-blue-4c98ff pt-px">19,500</p>
        </div>
        
        <div style={{height:"208px",background: '#262626'}} className="w-full p-7px">

            <div className="flex flex-col space-y-4px">
                <div className="flex space-x-4px">
                    <BetAmountButton amount={5000}/>
                    <BetAmountButton amount={10000}/>
                    <BetAmountButton amount={50000}/>
                </div>
                <div className="flex space-x-4px">
                    <BetAmountButton amount={100000}/>
                    <BetAmountButton amount={500000}/>
                    <BetAmountButton amount={1000000}/>
                </div>
                <div className="flex space-x-4px">
                    <BetFixedAmountButton amount={22170} text="잔돈" />
                    <BetFixedAmountButton amount={null} text="초기화" />
                    <BetFixedAmountButton amount={3522170} text="최대" />
                </div>
            </div>

            

            <button style={{width:"331px"}} className="mt-6px flex items-center justify-center h-46px rounded-2px bg-gradient-to-t from-blue-3d4a8d to-blue-88d9e8 p-px hover:filter hover:brightness-125 shadow-link">
                <div style={{width:"329px", borderRadius:"3px"}} className="flex items-center justify-center h-44px rounded-2px bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer pt-px">
                    <img src={BetIcon} alt="" className='mt-2px' />
                    <span className="ml-2px mt-px font-spoqaMedium tracking-tight text-16px text-blue-d6f3ff pt-px text-shadow-5">베팅하기</span>
                </div>
            </button>

        </div>

        {(selectedGame === "/minigame/speedkino" || selectedGame === "/minigame/kinoladder") && (
            <div className="absolute w-full h-full bg-black bg-opacity-70 z-20 flex justify-center"> 
                <div className="flex flex-col items-center justify-center">
                    <img className="object-none" src={LockIcon} alt="" />
                    <div 
                        style={{textShadow: "2px 4px 4px #00000080"}} 
                        className="text-white font-spoqaMedium text-18px tracking-tight mt-20px"
                    >지금은 베팅할 수 없습니다.</div>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default MinigamesRightPanel
