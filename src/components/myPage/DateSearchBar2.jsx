import React, { useState } from 'react'
import DropDownControls from 'components/dropdowns/DropDownControls';
import ArrowDownGray from '../../images/arrows/arrow_down_gray.png'

import CustomDatePicker from 'components/CustomDatePicker'

const DateSearchBar2 = () => {

    const LeagueExampleArray = [
        {id: 0, text: "200"},
        {id: 1, text: "201"},
        {id: 2, text: "202"},
        {id: 3, text: "203"},
        {id: 4, text: "204"},
        {id: 5, text: "205"},
        {id: 6, text: "206"},
        {id: 7, text: "207"},
        {id: 8, text: "208"},
        {id: 9, text: "209"},
    ]


    // const [startDate, setStartDate] = useState(new Date())
    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const [selectedCarrier, setSelectedCarrier] = useState("전체회차")

    const dropDownCellClass = "flex w-full h-30px py-2px bg-gray-1f1f1e items-center hover:bg-brown-r3d3934 px-12px"

    const gameResultButton = (
        <div className="flex items-center justify-between placeholder-gray-r8c8c8c outline-none w-138px h-42px rounded-2px border border-gray-404040 text-gray-ccc2b6 bg-dark-1a1a1a px-10px font-spoqaMedium text-15px tracking-tight " >
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
        <div style={{height:"249px"}} className="mt-4px flex flex-col items-center justify-center w-138px overflow-hidden  rounded-2px border border-gray-404040 text-gray-ccc2b6 bg-dark-1a1a1a font-spoqaMedium text-14px tracking-tight">
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
        <div className="h-64px w-full bg-gray-2e2e2e mt-20px rounded-4px flex items-center justify-center space-x-10px">

                <div className="flex space-x-10px items-center h-full justify-center">
                <div className="relative">
                    <CustomDatePicker classes={`pt-px mt-px flex-shrink-0 outline-none w-138px h-42px rounded-2px bg-dark-1a1a1a border border-gray-404040 px-10px font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 focus:ml-10px`} />
                    </div>
                    <div className="pt-px">{InboxSearch}</div>
                    <div className="flex items-center justify-center h-42px w-75px rounded-4px shadow-link hover:filter hover:brightness-125"
                      style={{ background: 'linear-gradient(to top, #4b3b09, #e8b888)'}}>
                      <div className="flex items-center justify-center h-40px w-73px rounded-4px cursor-pointer"
                      style={{background: 'linear-gradient(0deg, rgba(128,96,62,1) 0%, rgba(129,96,64,1) 5%, rgba(165,124,82,1) 97%)'}}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight text-shadow-5 pt-px">검색</span>
                        </div>
                    </div>
                </div>
             
            </div>
    )
}

export default DateSearchBar2
