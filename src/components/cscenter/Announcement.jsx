import DropDownControls from 'components/dropdowns/DropDownControls'
import MyPageTitle from 'components/myPage/MyPageTitle'
import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
import DownArrowIcon from '../../images/down_arrow_icon.png'
import SearchIcon from '../../images/myPage/search.png'
import AnnouncementTable from './tables/AnnouncementTable'

const Announcement = () => {

    const [page, setPage] = useState(0)
    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const [selectedCarrier, setSelectedCarrier] = useState("제목")

    const dropDownCellClass = "flex w-120px h-40px py-2px bg-gray-1f1f1e items-center hover:bg-brown-r3d3934 px-14px"



    const searchDropdown = (
        <div className="mt-4px flex flex-col items-center justify-center w-120px overflow-hidden bg-white rounded-md border border-gray-dddddd shadow-plain5 text-gray-r393e41 font-spoqaMedium text-14px tracking-tight">
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("제목")
                setDropdownOpen(false)
            }}>
                제목
            </button>
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("본문")
                setDropdownOpen(false)
            }}>
                본문
            </button>
        </div>
    )

    const dropdownButton = (
        <div className="flex w-120px h-42px bg-dark-1a1a1a rounded-4px border border-gray-404040 group">
            <input  className="w-0 text-16px"/>
            <div
                className="flex w-full text-gray-ccc2b6 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight" 
            >
                <label className="ml-14px cursor-pointer group-hover:text-gray-r8c8c8c">{selectedCarrier}</label>
                <img className="w-10px h-6px object-contain mr-10px" src={DownArrowIcon} alt="arrow" /> 
            </div>
        </div>
    )

    const InboxSearch = (
        <div className="h-64px w-full bg-gray-2e2e2e rounded-4px  flex items-center justify-center space-x-10px">
            <DropDownControls 
                buttonChild={dropdownButton} 
                isDropdownOpen={isDropdownOpen} 
                setDropdownOpen={setDropdownOpen}
            >
                {searchDropdown}
            </DropDownControls>

            <div className="flex w-381px h-42px bg-dark-1a1a1a rounded-4px border border-gray-404040">
                <input 
                    className="pl-11px rounded-md placeholder-gray-r7c7c7c w-full text-gray-r393e41 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight bg-dark-1a1a1a"
                    placeholder="검색어를 입력해 주세요"
                />
                <button className="flex items-center justify-center w-42px h-42px rounded-4px bg-gradient-to-b from-gray-a57b51  to-gray-4b3b09 -mt-px -mr-px flex-shrink-0  hover:opacity-75 p-px overflow-hidden">
                  <div className="flex items-center justify-center w-full  h-40px rounded-4px bg-gradient-to-b from-gray-e6b786  to-gray-80603f">
                    <img src={SearchIcon} alt="" />
                  </div>
                </button>
            </div>
        </div>
    )

    return (
        <div>
            <MyPageTitle title="공지사항" />

            <div className="mt-20px" />
            <AnnouncementTable />

            <div className="flex w-full justify-center mt-60px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

            <div className="-mt-30px mb-60px">
                {InboxSearch}
            </div>

        </div>
    )
}

export default Announcement
