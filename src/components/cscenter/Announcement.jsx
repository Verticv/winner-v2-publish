import HorizontalMenu from 'components/horizontalMenus/HorizontalMenu';
import DropDownControls from 'components/dropdowns/DropDownControls'
import MyPageTitle from 'components/myPage/MyPageTitle'
import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
import DownArrowIcon from '../../images/down_arrow_icon.png'
import SearchIcon from '../../images/myPage/search.png'
import AnnouncementTable from './tables/AnnouncementTable'
import Icon1 from '../../images/myPage/betHistory/ico_1_v2.png'
import Icon2 from '../../images/myPage/betHistory/ico_2_v2.png'
import Icon3 from '../../images/myPage/betHistory/ico_3_v2.png'
import Icon4 from '../../images/myPage/betHistory/ico_4_v2.png'
import Icon5 from '../../images/myPage/betHistory/ico_5_v2.png'
import Icon6 from '../../images/myPage/betHistory/ico_6_v2.png'
import Icon7 from '../../images/myPage/betHistory/ico_7_v2.png'
import Icon8 from '../../images/cscenter/ico_8.png'
import Icon9 from '../../images/cscenter/ico_9.png'
import Icon10 from '../../images/cscenter/ico_10.png'
import Icon11 from '../../images/cscenter/ico_11.png'
import Icon12 from '../../images/cscenter/ico_12.png'
import Icon13 from '../../images/cscenter/ico_13.png'
import IconHighlight1 from '../../images/myPage/betHistory/Icon1_On.png'
import IconHighlight2 from '../../images/myPage/betHistory/Icon2_On.png'
import IconHighlight3 from '../../images/myPage/betHistory/Icon3_On.png'
import IconHighlight4 from '../../images/myPage/betHistory/Icon4_On.png'
import IconHighlight5 from '../../images/myPage/betHistory/Icon5_On.png'
import IconHighlight6 from '../../images/myPage/betHistory/Icon6_On.png'
import IconHighlight7 from '../../images/myPage/betHistory/Icon7_On.png'
import IconHighlight8 from '../../images/myPage/betHistory/Icon8_On.png'
import IconHighlight9 from '../../images/myPage/betHistory/Icon9_On.png'
import IconHighlight10 from '../../images/myPage/betHistory/Icon10_On.png'
import IconHighlight11 from '../../images/cscenter/Icon11_On.png'
import IconHighlight12 from '../../images/cscenter/Icon12_On.png'
import IconHighlight13 from '../../images/cscenter/Icon13_On.png'

const Announcement = () => {
    const tabsArray = [
        { text: "전체", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/cscenter/announcement/all" },
        { text: "라이브카지노", icon: Icon2, iconHighlight: IconHighlight2, id: 1, path: "/cscenter/announcement/all/live-casino" },
        { text: "슬롯게임", icon: Icon3, iconHighlight: IconHighlight3, id: 2, path: "/cscenter/announcement/all/slot" },
        { text: "스포츠", icon: Icon4, iconHighlight: IconHighlight4, id: 3, path: "/cscenter/announcement/all/sports" },
        { text: "호텔카지노", icon: Icon5, iconHighlight: IconHighlight5, id: 4, path: "/cscenter/announcement/all/hotel-casino" },
        { text: "e-스포츠", icon: Icon6, iconHighlight: IconHighlight6, id: 5, path: "/cscenter/announcement/all/e-sports" },
        { text: "미니게임", icon: Icon7, iconHighlight: IconHighlight7, id: 6, path: "/cscenter/announcement/all/minigame" },
        { text: "키론가상게임", icon: Icon8, iconHighlight: IconHighlight8, id: 7, path: "/cscenter/announcement/all/ar-game" },
        { text: "피싱게임", icon: Icon9, iconHighlight: IconHighlight9, id: 8, path: "/cscenter/announcement/all/phishing-game" },
        { text: "티비벳", icon: Icon10, iconHighlight: IconHighlight10, id: 9, path: "/cscenter/announcement/all/bet" },
        { text: "충전/환전", icon: Icon11, iconHighlight: IconHighlight11, id: 10, path: "/cscenter/announcement/all/transaction" },
        { text: "베팅관련", icon: Icon12, iconHighlight: IconHighlight12, id: 11, path: "/cscenter/announcement/all/about-betting" },
        { text: "기타", icon: Icon13, iconHighlight: IconHighlight13, id: 12, path: "/cscenter/announcement/all/other" },
    ];
    const [page, setPage] = useState(0)
    const [isDropdownOpen, setDropdownOpen] = useState(true)
    const [selectedCarrier, setSelectedCarrier] = useState("제목")

    const dropDownCellClass = "flex w-full h-30px py-2px bg-gray-1f1f1e items-center hover:bg-brown-r3d3934 px-12px"



    const searchDropdown = (
        <div  className="mt-4px flex flex-col items-center justify-center w-120px overflow-hidden rounded-2px border  font-spoqaMedium text-14px tracking-tight border-gray-404040 text-gray-ccc2b6 bg-dark-1a1a1a ">
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

            <div className="flex w-381px h-42px bg-dark-1a1a1a rounded-4px border border-gray-404040 relative">
                <input 
                    className="pl-11px rounded-md placeholder-gray-r7c7c7c w-full font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight bg-dark-1a1a1a text-gray-c8c8c8"
                    placeholder="검색어를 입력해 주세요"
                />
                <button className="flex items-center justify-center w-42px h-42px rounded-4px bg-gradient-to-b from-gray-e8b888  to-gray-4b3b09 flex-shrink-0  filter hover:brightness-125 shadow-btn absolute -right-px -top-px z-10">
                  <div className="flex items-center justify-center w-40px  h-40px rounded-4px bg-gradient-to-b from-golden-gradLight  to-golden-gradDark">
                    <img src={SearchIcon} alt="" />
                  </div>
                </button>
            </div>
        </div>
    )

    return (
        <div>
            <MyPageTitle title="공지사항" />
            <div className="mt-20px"></div>
            <HorizontalMenu itemsArray={tabsArray} hasRows={true}  showSub={false} />
            <div className="mt-20px" />
            <AnnouncementTable />

            <div className="flex w-full justify-center mt-60px mb-60px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

            <div className="-mt-30px mb-60px">
                {InboxSearch}
            </div>

        </div>
    )
}

export default Announcement
