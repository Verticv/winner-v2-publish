import React, { useState } from 'react'
import BlueButton from '../../../images/minigames/blue_sq.png'
import RedButton from '../../../images/minigames/red_sq.png'
import BlueSMButton from '../../../images/minigames/blue_sm.png'
import RedSMButton from '../../../images/minigames/red_sm.png'
import BlueButtonPressed from '../../../images/minigames/test/blue_rec_pressed.png'
import RedButtonPressed from '../../../images/minigames/test/red_rec_pressed.png'
import RedSMButtonPressed from '../../../images/minigames/test/red_pressed.png'
import BlueSMButtonPressed from '../../../images/minigames/test/blue_pressed.png'
import TitleIcon from '../../../images/minigames/title_icon.png'

const PowerLadderGame = ({setSelectedOption}) => {

    const [state, setstate] = useState("")

    const PanelTitle = ({title}) => (
        <div className="w-full h-30px flex items-center pl-3px space-x-5px">
          <img className="z-10 object-none -ml-px" src={TitleIcon} alt="" />
          <p style={{color:"#ccc2b6"}} className="font-spoqaMedium text-14px tracking-tight pt-2px">{title}</p>
        </div>
    )

    const BetOptions = ({
        width = 310, 
        height = 168,
        gradient1 = "#698195",
        gradient2 = "#445463",
        titleBg = "linear-gradient(to bottom, #48555b, #455156)",
        titleNumber = 1,
        subText = "홀짝",
        subText2 = null,
        subText3 = "3/4줄",
    }) => (
        <div
            style={{
                width: width + "px", 
                height: height+ "px",
                background: "linear-gradient(to bottom, #b5bdca, #222b33)",
                borderRadius:"4px"
            }}
            className={`flex justify-center items-center flex-shrink-0 overflow-hidden`} 
        >
            <div
                style={{
                    width: width - 2 + "px", 
                    height: height - 2 + "px",
                    borderRadius:"4px"
                }}
                className={`flex items-center`} 
            >
                <div 
                    style={{
                        background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,
                        borderRadius: "4px"
                    }}
                    className="w-full h-full rounded-3px flex items-start justify-start pt-2px"
                >

                    <div className="w-42px h-full flex flex-col  flex-shrink-0">
                        <div 
                            style={{height:"36px", background: titleBg}} 
                            className="flex-shrink-0 shadow-plain2 w-38px rounded-4px ml-2px flex flex-col items-center justify-center text-12px tracking-tight text-white -space-y-4px"
                        >
                            <p className="font-spoqaMedium">{titleNumber}</p>
                            <p className="font-spoqa">게임</p>
                        </div>

                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <div className="text-12px tracking-tight text-white font-spoqaMedium h-12px flex items-center">{subText}</div>
                            {subText2 !== null && (
                                <>
                                    <div className="text-12px tracking-tight text-white font-spoqaMedium h-12px flex items-center mt-2px">{subText2}</div>
                                    <div className="text-12px tracking-tight text-white font-spoqaMedium h-12px flex items-center mt-2px">{subText3}</div>
                                </>
                            )}
                        </div>
                    </div>

                    <div style={{height:"162px", width:"2px"}} className="flex flex-shrink-0">
                        <div style={{backgroundColor:"#313f4c"}} className="h-full w-px"></div>
                        <div style={{backgroundColor:"#b5bdca"}} className="h-full w-px"></div>
                    </div>

                    {titleNumber === 1 || titleNumber === 2 || titleNumber === 3 ? (
                        <div className="flex justify-center w-full h-full items-start">
                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setstate(`${titleNumber}-1`)
                                        if (titleNumber === 1) {
                                            setSelectedOption([{type:"파워사다리", name:"홀짝", selection: "홀", buttonType: "blue_sq"}])
                                        } else if (titleNumber === 2) {
                                            setSelectedOption([{type:"파워사다리", name:"출발점", selection: "좌", buttonType: "blue_sq"}])
                                        } else {
                                            setSelectedOption([{type:"파워사다리", name:"줄갯수", selection: "3줄", buttonType: "blue_sq"}])
                                        }
                                    }} 
                                    style={{width:"121px", height:"127px", marginTop:"14px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img className={`absolute  ${state === `${titleNumber}-1` ? "object-contain mb-3px" : "object-none"}`} src={state === `${titleNumber}-1` ? BlueButtonPressed : BlueButton} alt="" />
                                    <p 
                                        style={{textShadow: "2px 2px 2px #00000050", fontSize: "48px"}} 
                                        className="z-20 font-swagger text-white"
                                    >
                                        {titleNumber === 1 ? "홀" : titleNumber === 2 ? "좌" : "3줄"}
                                    </p>
                                </div>
                                <div className="text-12px font-robotoRegular tracking-tight text-white mt-4px h-12px flex items-center -ml-2px">1.95</div>
                            </div>

                            <div className="flex flex-col items-center">
                                <div 
                                    onClick={() => {
                                        setstate(`${titleNumber}-2`)
                                        if (titleNumber === 1) {
                                            setSelectedOption([{type:"파워사다리", name:"홀짝", selection: "짝", buttonType: "red_sq"}])
                                        } else if (titleNumber === 2) {
                                            setSelectedOption([{type:"파워사다리", name:"출발점", selection: "우", buttonType: "red_sq"}])
                                        } else {
                                            setSelectedOption([{type:"파워사다리", name:"줄갯수", selection: "4줄", buttonType: "red_sq"}])
                                        }
                                    }} 
                                    style={{width:"121px", height:"127px", marginTop: "14px"}} 
                                    className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                >
                                    <img className={`absolute  ${state === `${titleNumber}-2` ? "object-contain mb-3px" : "object-none"}`} src={state === `${titleNumber}-2` ? RedButtonPressed : RedButton} alt="" />
                                    <p 
                                        style={{textShadow: "2px 2px 2px #00000050", fontSize: "48px"}} 
                                        className="z-20 font-swagger text-white text-20px"
                                    >
                                        {titleNumber === 1 ? "짝" : titleNumber === 2 ? "우" : "4줄"}
                                    </p>
                                </div>
                                <p className="text-12px font-robotoRegular tracking-tight text-white mt-4px h-12px flex items-center -ml-2px">1.95</p>
                            </div>
                        </div>
                    ) : titleNumber === 4 ? (
                        <div className="flex flex-col items-center w-full h-full">
                            <div className="flex space-x-18px pt-7px"> 
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setstate(`${titleNumber}-1`)
                                            setSelectedOption([{type:"파워사다리", name:"좌우출발3/4줄", selection: "짝", buttonType: "red", tailSide:"left", tail:"3"}])
                                        }} 
                                        style={{width:"68px", height:"59px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img className={`absolute  ${state === `${titleNumber}-1` ? "object-contain mb-3px" : "object-none"}`} src={state === `${titleNumber}-1` ? RedSMButtonPressed : RedSMButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">짝</p>
                                        <div className="absolute w-22px h-22px rounded-full bg-black z-20 left-6px top-0 flex items-center justify-center">
                                            <div className="text-white text-12px tracking-tight font-spoqaMedium">3</div>
                                        </div>
                                    </div>
                                    <div className="text-12px font-robotoRegular tracking-tight text-white h-12px flex items-center -ml-2px">3.80</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setstate(`${titleNumber}-2`)
                                            setSelectedOption([{type:"파워사다리", name:"좌우출발3/4줄", selection: "홀", buttonType: "blue", tailSide:"right", tail:"3"}])
                                        }} 
                                        style={{width:"68px", height:"59px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img className={`absolute  ${state === `${titleNumber}-2` ? "object-contain mb-3px" : "object-none"}`} src={state === `${titleNumber}-2` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">홀</p>
                                        <div className="absolute w-22px h-22px rounded-full bg-black z-20 right-6px top-0 flex items-center justify-center">
                                            <div className="text-white text-12px tracking-tight font-spoqaMedium">3</div>
                                        </div>
                                    </div>
                                    <div className="text-12px font-robotoRegular tracking-tight text-white h-12px flex items-center -ml-2px">3.80</div>
                                </div>
                            </div>
                            <div className="flex space-x-18px mt-10px"> 
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setstate(`${titleNumber}-3`)
                                            setSelectedOption([{type:"파워사다리", name:"좌우출발3/4줄", selection: "홀", buttonType: "blue", tailSide:"left", tail:"4"}])
                                        }} 
                                        style={{width:"68px", height:"59px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img className={`absolute  ${state === `${titleNumber}-3` ? "object-contain mb-3px" : "object-none"}`} src={state === `${titleNumber}-3` ? BlueSMButtonPressed : BlueSMButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">홀</p>
                                        <div className="absolute w-22px h-22px rounded-full bg-black z-20 left-6px top-0 flex items-center justify-center">
                                            <div className="text-white text-12px tracking-tight font-spoqaMedium">4</div>
                                        </div>
                                    </div>
                                    <div className="text-12px font-robotoRegular tracking-tight text-white h-12px flex items-center -ml-2px">3.80</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div 
                                        onClick={() => {
                                            setstate(`${titleNumber}-4`)
                                            setSelectedOption([{type:"파워사다리", name:"좌우출발3/4줄", selection: "짝", buttonType: "red", tailSide:"right", tail:"4"}])
                                        }} 
                                        style={{width:"68px", height:"59px"}} 
                                        className="relative flex items-center justify-center cursor-pointer hover:opacity-75"
                                    >
                                        <img className={`absolute  ${state === `${titleNumber}-4` ? "object-contain mb-3px" : "object-none"}`} src={state === `${titleNumber}-4` ? RedSMButtonPressed : RedSMButton} alt="" />
                                        <p style={{textShadow: "2px 2px 2px #00000050"}} className="z-20 font-swagger text-white text-20px">짝</p>
                                        <div className="absolute w-22px h-22px rounded-full bg-black z-20 right-6px top-0 flex items-center justify-center">
                                            <div className="text-white text-12px tracking-tight font-spoqaMedium">4</div>
                                        </div>
                                    </div>
                                    <div className="text-12px font-robotoRegular tracking-tight text-white h-12px flex items-center -ml-2px">3.80</div>
                                </div>
                            </div>
                        </div>
                    ) : <></> }
                    
                </div>
            </div>
        </div>
    )

    return (
        <div 
            style={{height: "205px"}}
            className="flex w-full px-7px pb-7px"
        >
            <div className="w-full flex flex-col">
                <PanelTitle title="파워사다리" />
                <div className="flex justify-between space-x-2px">
                    <div className="flex space-x-2px">
                        <BetOptions width={309} titleNumber={1} subText="홀짝" />
                        <BetOptions titleNumber={2} subText="출발점"/>
                    </div>
                    <div className="flex space-x-2px">
                        <BetOptions width={309} titleNumber={3} subText="줄갯수" />
                        <BetOptions titleNumber={4} subText="좌우" subText2="출발" subText3="3/4줄" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PowerLadderGame
