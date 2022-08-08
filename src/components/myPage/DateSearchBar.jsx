import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from  "react-datepicker";
import ko from 'date-fns/locale/ko';
import CalendarIcon from '../../images/myPage/betHistory/calendar.png'
import DropDownControls from 'components/dropdowns/DropDownControls';
import ArrowDownGray from '../../images/arrows/arrow_down_gray.png'
import './DatePicker.css'
registerLocale('ko', ko)

const DateSearchBar = ({
    isLeagueSearch = false, 
    hasIdSearch = false,
    has3MonthSearch = false,
    isGameResultsSearch = false
}) => {

    const LeagueExampleArray = [
        {id: 0, text: "League1"},
        {id: 1, text: "League2"},
        {id: 2, text: "League3"},
        {id: 3, text: "League4"},
        {id: 4, text: "League5"},
        {id: 5, text: "League6"},
        {id: 6, text: "League7"},
        {id: 7, text: "League8"},
        {id: 8, text: "League9"},
        {id: 9, text: "League10"},
    ]


    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const [selectedCarrier, setSelectedCarrier] = useState("리그선택")

    const dropDownCellClass = "flex w-full h-30px py-2px bg-white items-center hover:bg-blue-lightGradLight px-10px"

    const gameResultButton = (
        <div className="flex items-center justify-between  placeholder-gray-r8c8c8c outline-none w-138px h-42px rounded-md border  px-10px font-spoqaMedium text-15px tracking-tight  hover:text-gray-r585858 border-gray-404040 text-gray-ccc2b6 bg-dark-1a1a1a" >
          <p className="mt-px">{selectedCarrier}</p>
          <img src={ArrowDownGray} alt="" />
        </div>
    )

    function DropdownCells({ items }) {
        return items.map(item => (
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier(item.text)
                setDropdownOpen(false)
            }}>
                {item.text}
            </button>
        ));
    }


    const searchDropdown = (
        <div style={{height:"249px"}} className="mt-4px flex flex-col items-center justify-center w-138px overflow-hidden rounded-md border  font-spoqaMedium text-14px tracking-tight border-gray-404040 text-gray-ccc2b6 bg-dark-1a1a1a">
            <div style={{width:"134px"}} className="pt-4px mt-2px h-full overflow-y-scroll overflow-x-hidden">
                <DropdownCells items={LeagueExampleArray} />
            </div>
        </div>
    )

    const InboxSearch = (
        <DropDownControls
            buttonChild={gameResultButton} 
            isDropdownOpen={isDropdownOpen} 
            setDropdownOpen={setDropdownOpen}
        >
            {searchDropdown}
        </DropDownControls>
    )



    return (
      <div className="h-65px w-full  mt-20px  flex items-center justify-center space-x-10px rounded-4px bg-gray-2e2e2e">
                
                {isLeagueSearch === true && (
                    <div className="space-x-5px">
                        <input 
                            placeholder="리그선택"
                            className="pt-px mt-px placeholder-gray-r8c8c8c flex-shrink-0 outline-none w-138px h-42px rounded-md border  px-10px font-spoqaMedium text-15px tracking-tight border-gray-404040 text-gray-ccc2b6 bg-dark-1a1a1a" 
                        />
                        <input
                            placeholder="팀명검색" 
                            className="pt-px mt-px placeholder-gray-r8c8c8c flex-shrink-0 outline-none w-138px h-42px rounded-md border  px-10px font-spoqaMedium text-15px tracking-tight border-gray-404040 text-gray-ccc2b6 bg-dark-1a1a1a" />
                    </div>
                )}

                {isGameResultsSearch === true && (
                    <div className="space-x-5px flex">
                        <div className="pt-px">{InboxSearch}</div>
                        <input
                            placeholder="팀명검색" 
                            className="pt-px mt-px placeholder-gray-r8c8c8c flex-shrink-0 outline-none w-138px h-42px rounded-md border  px-10px font-spoqaMedium text-15px tracking-tight  border-gray-404040 text-gray-ccc2b6 bg-dark-1a1a1a" />
                    </div>
                )}

                <div className="flex space-x-10px items-center w-304px h-full">
                    <div className="relative">
                  <DatePicker 
                            
                            className="pt-px mt-px flex-shrink-0 outline-none w-138px h-42px rounded-md bg-dark-1a1a1a border border-gray-404040 px-10px font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 focus:ml-10px"
                            locale="ko" 
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy-MM-dd"
                            dateFormatCalendar="yyyy년 MM월"
                        />
                        <img src={CalendarIcon} alt="" className="absolute top-0 right-0 mt-14px mr-10px" />
                    </div>
                    <span className="font-spoqaMedium text-14px text-gray-8e8780 mt-px">~</span>
                    <div className="relative">
                        <DatePicker 
                            className="pt-px mt-px flex-shrink-0 outline-none bg-dark-1a1a1a w-138px h-42px rounded-md border border-gray-404040 px-10px font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6" 
                            locale="ko"
                            selected={endDate} 
                            onChange={(date) => setEndDate(date)}
                            dateFormat="yyyy-MM-dd"
                            dateFormatCalendar="yyyy년 MM월"
                        />
                        <img src={CalendarIcon} alt="" className="absolute top-0 right-0 mt-14px mr-10px" />
                    </div>
                </div>
                <div className="flex h-full space-x-6px items-center">
                    <div className="flex items-center justify-center h-42px w-75px rounded-4px  hover:opacity-75">
                        <div className="flex items-center justify-center h-40px w-73px rounded-4px  cursor-pointer" style={{background: 'linear-gradient(0deg, rgba(76,72,65,1) 0%, rgba(77,72,68,1) 5%, rgba(119,109,98,1) 97%)'}}>
                            <span className="font-spoqaMedium tracking-tight text-14px  pt-px text-golden-highLight" >오늘</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-42px w-75px rounded-4px  hover:opacity-75">
                        <div className="flex items-center justify-center h-40px w-73px rounded-4px cursor-pointer" style={{background: 'linear-gradient(0deg, rgba(76,72,65,1) 0%, rgba(77,72,68,1) 5%, rgba(119,109,98,1) 97%)'}}>
                            <span className="font-spoqaMedium tracking-tight text-14px  pt-px text-golden-highLight">1주일</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-42px w-75px rounded-4px  hover:opacity-75">
                        <div className="flex items-center justify-center h-40px w-73px rounded-4px cursor-pointer" style={{background: 'linear-gradient(0deg, rgba(76,72,65,1) 0%, rgba(77,72,68,1) 5%, rgba(119,109,98,1) 97%)'}}>
                            <span className="font-spoqaMedium tracking-tight text-14px  pt-px text-golden-highLight">15일</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center h-42px w-75px rounded-4px  hover:opacity-75">
                        <div className="flex items-center justify-center h-40px w-73px rounded-4px cursor-pointer "style={{background: 'linear-gradient(0deg, rgba(76,72,65,1) 0%, rgba(77,72,68,1) 5%, rgba(119,109,98,1) 97%)'}}>
                            <span className="font-spoqaMedium tracking-tight text-14px  pt-px text-golden-highLight" >1개월</span>
                        </div>
                    </div>

                    {has3MonthSearch && (
                        <div className="flex items-center justify-center h-42px w-75px rounded-4px  hover:opacity-75">
                            <div className="flex items-center justify-center h-40px w-73px  rounded-4px cursor-pointer " style={{background: 'linear-gradient(0deg, rgba(76,72,65,1) 0%, rgba(77,72,68,1) 5%, rgba(119,109,98,1) 97%)'}}>
                                <span className="font-spoqaMedium tracking-tight text-14px pt-px text-golden-highLight"> 3개월</span>
                            </div>
                        </div>
                    )}

                    {!hasIdSearch ? (
                        <div className="flex items-center justify-center h-42px w-75px rounded-4px  hover:opacity-75" style={{background: 'linear-gradient(0deg, rgba(128,96,62,1) 0%, rgba(129,96,64,1) 5%, rgba(165,124,82,1) 97%)'}}>
                            <div className="flex items-center justify-center h-40px w-73px rounded-4px cursor-pointer">
                              <span className="font-spoqaMedium tracking-tight text-14px  pt-px text-golden-highLight">검색</span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-42px w-75px rounded-4px  hover:opacity-75">
                            <div className="flex items-center justify-center h-40px w-73px  rounded-4px cursor-pointer " style={{background: 'linear-gradient(0deg, rgba(76,72,65,1) 0%, rgba(77,72,68,1) 5%, rgba(119,109,98,1) 97%)'}}>
                                <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px">3개월</span>
                            </div>
                        </div>
                    )}
                    
                </div>
                
                {hasIdSearch && (
                    <div className="flex space-x-5px">
                        <input 
                            className="w-138px h-42px rounded-4px border outline-none text-15px font-spoqaMedium tracking-tight px-10px border-gray-404040 text-gray-828282 bg-dark-1a1a1a" 
                            placeholder="아이디" 
                        />
                        <div 
                            style={{
                                width:"75px",
                                height:"42px",
                                borderRadius: "4px",
                                background: 'linear-gradient(0deg, rgb(128, 96, 62) 0%, rgb(129, 96, 64) 5%, rgb(165, 124, 82) 97%)'
                            }} 
                            className="flex items-center justify-center rounded-4px  hover:opacity-75"
                        >
                            <div 
                                style={{
                                    width:"73px", 
                                    height:"40px",
                                    // background: "linear-gradient(0deg, rgba(76,72,65,1) 0%, rgba(77,72,68,1) 5%, rgba(119,109,98,1) 97%)",
                                    borderRadius: "4px"
                                }} 
                                className="flex items-center justify-center rounded-4px  cursor-pointer"
                            >
                                <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight">검색</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
    )
}

export default DateSearchBar
