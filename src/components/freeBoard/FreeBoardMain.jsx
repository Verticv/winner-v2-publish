import DropDownControls from 'components/dropdowns/DropDownControls';
import Pagination from 'components/myPage/Pagination';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import DownArrowIcon from '../../images/arrows/arrow_down_gray.png'
import SearchIcon from '../../images/myPage/search.png'
import BlueSpeaker from '../../images/freeBoard/blue_speaker_v2.png'
import YellowSpeaker from '../../images/freeBoard/yellow_speaker.png'
import WinnerLogo from '../../images/freeBoard/winner_logo_v2.png'
import Rank1 from '../../images/freeBoard/1_v2.png'
import Rank2 from '../../images/freeBoard/2_v2.png'
import Rank3 from '../../images/freeBoard/3_v2.png'
import Rank4 from '../../images/freeBoard/4_v2.png'
import Rank5 from '../../images/freeBoard/5_v2.png'

const FreeBoardMain = () => {

    const cellArray = [
        { 
            id: 0,
            text: "입금규정 필독", 
            isRead: false,
            date: "2021.06.29",
            time: "07:35",
            type: "공지",
            isClicked: true,
            path: '/freeboard/view/0'
        },
        { 
            id: 1,
            text: "메신저 고객센터 사칭주의", 
            isRead: false,
            date: "2021.06.29",
            time: "07:35",
            type: "공지",
            path: '/freeboard/view/1'
        },
        { 
            id: 2,
            text: "슬롯 롤링 보너스 요율 X2배 증가 안내", 
            isRead: false,
            date: "2021.06.29",
            time: "07:35",
            type: "공지",
            path: '/freeboard/view/2'
        },
        { 
            id: 3,
            text: "진행중 이벤트 안내 (2021.06.02)", 
            isRead: true,
            date: "2021.06.29",
            time: "07:35",
            type: "이벤트",
            path: '/freeboard/view/3'
        },
        { 
            id: 4,
            text: "스포츠 미니게임 충전 보너스 (변경 21.05.21)", 
            isRead: true,
            date: "2021.06.29",
            time: "07:35",
            type: "이벤트",
            path: '/freeboard/view/4'
        },
        { 
            id: 5,
            text: "라이브 카지노 충전 보너스", 
            isRead: true,
            date: "2021.06.29",
            time: "07:35",
            type: "이벤트",
            path: '/freeboard/view/5'
        },
        { 
            id: 6,
            text: "다폴더 적중 보너스 지금 (변경 21.04.16)", 
            isRead: true,
            date: "2021.06.29",
            time: "07:35",
            type: "이벤트",
            path: '/freeboard/view/6'
        },
        { 
            id: 7,
            text: "카지노 주간 낙첨 이벤트! (변경 21.06.07)", 
            isRead: true,
            date: "2021.06.29",
            time: "07:35",
            type: "이벤트",
            path: '/freeboard/view/7'
        },
        { 
            id: 8,
            text: "슬롯 충전 남첨 이벤트 (변경 21.06.07)", 
            isRead: true,
            date: "2021.06.29",
            time: "07:35",
            type: "이벤트",
            path: '/freeboard/view/8'
        },
        { 
            id: 9,
            text: "신규 이벤트 가입", 
            isRead: false,
            date: "2021.06.29",
            time: "07:35",
            type: "이벤트",
            path: '/freeboard/view/9'
        },
        { 
            id: 10,
            text: "슬롯 페이백 복구", 
            isRead: false,
            date: "2021.06.29",
            time: "07:35",
            type: "이벤트",
            path: '/freeboard/view/10'
        },
        { 
            id: 2805,
            text: "아챔 올플핸", 
            isRead: true,
            isBetHistory: true,
            replies: 20,
            date: "2021.06.28",
            time: "15:36",
            type: "일반",
            path: '/freeboard/view2/2805',
            author: "필라델피아",
            level: 3
        },
        { 
            id: 2804,
            text: "다폴더 이벤트", 
            isRead: true,
            isBetHistory: true,
            replies: 2,
            date: "2021.06.28",
            time: "15:36",
            type: "일반",
            path: '/freeboard/view2/2804',
            author: "하이도1207",
            level: 1
        },
        { 
            id: 2803,
            text: "다폴더 이벤트 신청합니다.", 
            isRead: true,
            isBetHistory: true,
            date: "2021.06.28",
            time: "15:36",
            type: "일반",
            path: '/freeboard/view2/2803',
            author: "소유",
            level: 1
        },
        { 
            id: 2802,
            text: "다폴드 이벤트 참여", 
            isRead: true,
            isBetHistory: true,
            date: "2021.06.28",
            time: "15:36",
            type: "일반",
            path: '/freeboard/view2/2802',
            author: "보라매유아인",
            level: 1
        },
        { 
            id: 2801,
            text: "다폴더 이벤트 신청합니다.", 
            isRead: true,
            isBetHistory: true,
            date: "2021.06.28",
            time: "15:36",
            type: "일반",
            path: '/freeboard/view2/2801',
            author: "아기히뽀",
            level: 4
        },
        { 
            id: 2800,
            text: "다폴더 이벤트 신청합니다.", 
            isRead: true,
            isBetHistory: true,
            date: "2021.06.28",
            time: "15:36",
            type: "일반",
            path: '/freeboard/view2/2800',
            author: "소유",
            level: 5
        },
        { 
            id: 2799,
            text: "다폴", 
            isRead: true,
            isBetHistory: true,
            date: "2021.06.28",
            time: "15:36",
            type: "일반",
            path: '/freeboard/view2/2799',
            author: "야리직",
            level: 1
        },
        { 
            id: 2798,
            text: "다폴더", 
            isRead: true,
            isBetHistory: true,
            date: "2021.06.28",
            time: "15:36",
            type: "일반",
            path: '/freeboard/view2/2798',
            author: "신풍사우나",
            level: 2
        },
        { 
            id: 2797,
            text: "아챔 올플핸", 
            isRead: true,
            isBetHistory: true,
            date: "2021.06.28",
            time: "15:36",
            type: "일반",
            path: '/freeboard/view2/2797',
            author: "필라델피아",
            level: 3
        },
        { 
            id: 2796,
            text: "다폴더 이벤트", 
            isRead: true,
            isBetHistory: true,
            date: "2021.06.28",
            time: "15:36",
            type: "일반",
            path: '/freeboard/view2/2796',
            author: "하이도1207",
            level: 1
        },
        { 
            id: 2795,
            text: "다폴더 이벤트 신청합니다.", 
            isRead: true,
            isBetHistory: true,
            date: "2021.06.28",
            time: "15:36",
            type: "일반",
            path: '/freeboard/view2/2795',
            author: "소유",
            level: 1
        },
        { 
            id: 2794,
            text: "다폴더 이벤트 참여", 
            isRead: true,
            isBetHistory: true,
            date: "2021.06.28",
            time: "15:36",
            type: "일반",
            path: '/freeboard/view2/2794',
            author: "보라매유아인",
            level: 1
        },
        { 
            id: 2793,
            text: "다폴더 이벤트 신청합니다.", 
            isRead: true,
            isBetHistory: true,
            date: "2021.06.28",
            time: "15:36",
            type: "일반",
            path: '/freeboard/view2/2793',
            author: "아기히뽀",
            level: 4
        },
        { 
            id: 2792,
            text: "다폴더 이벤트 신청합니다.", 
            isRead: true,
            isBetHistory: true,
            date: "2021.06.28",
            time: "15:36",
            type: "일반",
            path: '/freeboard/view2/2792',
            author: "소유",
            level: 5
        },
        
    ];

    const history = useHistory();
    const [page, setPage] = useState(0)
    const [selectedCarrier, setSelectedCarrier] = useState("제목")
    const [isDropdownOpen, setDropdownOpen] = useState(true)

    const dropDownCellClass = "flex w-full h-30px py-2px bg-gray-1f1f1e items-center hover:bg-brown-r3d3934 px-12px"

    const searchDropdown = (
        <div  className="mt-4px flex flex-col items-center justify-center w-120px overflow-hidden rounded-2px border  font-spoqaMedium text-14px tracking-tight border-gray-404040 text-gray-ccc2b6 bg-dark-1a1a1a ">
          <div className="w-full mt-2px h-full overflow-x-hidden border-gray-2c2c2c">
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
            <button className={dropDownCellClass} onClick={() => {
                setSelectedCarrier("작성자")
                setDropdownOpen(false)
            }}>
                작성자
            </button>
          </div>
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
        <div className="h-102px w-full bg-gray-2e2e2e rounded-4px flex items-center justify-center space-x-10px">
            <DropDownControls 
                buttonChild={dropdownButton} 
                isDropdownOpen={isDropdownOpen} 
                setDropdownOpen={setDropdownOpen}
            >
                {searchDropdown}
            </DropDownControls>

            <div className="flex w-381px h-42px bg-dark-1a1a1a rounded-4px border border-gray-404040 relative">
                <input 
                    className="pl-11px placeholder-gray-r7c7c7c w-full text-gray-c8c8c8 font-spoqaMedium text-14px outline-none h-full justify-between items-center tracking-tight bg-dark-1a1a1a" 
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

    function InboxList({ items }) {
        return items.map((item,index) => (
            <button 
                key={item.id} 
                className={`font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 h-56px w-full  group`}
                onClick={() => history.push(item.path)}
            >
                <div 
                    style={{
                        backgroundColor: 
                        item.type === "공지" 
                        ? "#303843" 
                        : item.type === "이벤트" 
                        ? "#473c37" 
                        : item.id % 2 === 0 
                        ? "#2e2e2e"
                        : "#323232",
                        borderBottomWidth: index === items.length-1 ? 0: 1
                        
                    }}
                    className="flex items-center font-spoqaMedium text-14px  text-gray-c8c8c8 h-56px border-b border-gray-252525" >     
                    
                    <div style={{width: "126px"}} className="font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 flex items-center justify-center">
                        {item.type === "공지" 
                        ? <img src={BlueSpeaker} alt="" />
                        : item.type === "이벤트" 
                        ? <img src={YellowSpeaker} alt="" />
                        : <span className='mt-px'>{item.id}</span>
                        }
                    </div>   

                    <div 
                        style={{width: "796px"}}
                        className={`w-612px flex items-center font-spoqaMedium text-gray-c8c8c8 group ml-px tracking-tight`}>
                        {
                            item.type === "공지" 
                            ? <div style={{maxWidth: '92px'}} className="px-10px h-25px rounded-full bg-blue-0469a3 flex items-center justify-center text-white text-12px mr-14px flex-shrink-0">공지</div> 
                            : item.type === "이벤트" 
                            ? <div style={{maxWidth: '92px'}} className="px-10px h-25px rounded-full bg-yellow-c08029 flex items-center justify-center text-white text-12px mr-10px flex-shrink-0">이벤트</div> 
                            : <div></div>
                        }
                        <p
                            className={`${
                                item.type === "공지" 
                                ? "text-blue-6cbbe9 group-hover:text-blue-87eaff mr-11px" 
                                : item.type === "이벤트" 
                                ? "text-yellow-d2b28f group-hover:text-yellow-ffdeb3 mr-9px" 
                                : "group-hover:text-gray-fafafa mr-9px"
                                }  mt-2px truncate text-left`}
                            style={{maxWidth: '680px'}}
                        >
                            {item.text}
                        </p>
                        {item.replies && (
                            <div className="h-17px pl-4px pr-5px rounded-4px flex items-center justify-center text-white font-roboto text-12px bg-red-e9441d mr-10px ml-px flex-shrink-0">
                                <p className='h-12px flex items-center'>{item.replies}</p> 
                            </div>
                        )}
                        {item.isBetHistory === true && (
                            <div style={{backgroundColor: "#41b06c",maxWidth: '92px'}} className="h-25px px-10px rounded-full flex items-center justify-center text-white font-spoqaMedium text-12px flex-shrink-0">베팅내역</div>
                        )}
                        {item.isRead === false && (
                            <div className="w-17px h-17px bg-red-e9441d rounded-4px text-12px text-white flex items-center justify-center font-roboto flex-shrink-0">
                                <p className="flex items-center h-12px -ml-px">N</p>
                            </div>
                        )}
                    </div>

                    <div 
                        style={{width: "135px"}}
                        className={`flex justify-center items-center font-spoqaMedium tracking-tight text-gray-c8c8c8 text-center`} >
                            {item.type !== "일반"
                            ? <img src={WinnerLogo} alt="" className='-mt-5px -ml-3px flex-shrink-0'/>
                            : (
                                <div className="flex space-x-4px flex-shrink-0">
                                    {
                                    item.level === 1 
                                    ? <img src={Rank1} alt="" />
                                    : item.level === 2
                                    ? <img src={Rank2} alt="" />
                                    : item.level === 3 
                                    ? <img src={Rank3} alt="" />
                                    : item.level === 4
                                    ? <img src={Rank4} alt="" />
                                    : <img src={Rank5} alt="" />
                                    }
                                    <p style={{maxWidth: '120px'}}  className='mt-2px truncate'>{item.author}</p>
                                </div>
                            )
                            }
                        </div>
                    <div style={{width: "190px"}} className="flex items-center justify-center text-gray-c8c8c8 font-spoqa">
                        {item.type !== "일반"
                            ? ""
                            : <div>{item.date}    {item.time}</div>
                        }
                    </div>
                    
                </div>
            </button>
        ));
    }

    return (
        <div className="w-full">
          <div className="shadow-table w-full overflow-hidden rounded-4px p-px "
          style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
        >
            <div className=" w-full rounded-4px bg-gray-323232 overflow-hidden">
              <div className="h-56px bg-gray-2e2e2e w-full flex items-center text-14px font-spoqaMedium tracking-tight text-gray-ccc2b6 rounded-t-4px  border-b border-gray-252525">
                <div style={{width: "124px"}} className="flex items-center justify-center mt-px">번호</div>
                <div style={{width: "798px"}} className="flex items-center justify-center mt-px">제목</div>
                <div style={{width: "135px"}} className="flex items-center justify-center mt-px">닉네임</div>
                <div style={{width: "190px"}} className="flex items-center justify-center mt-px">등록일시</div>
              </div>
              <div className="flex flex-col w-full">
                  <InboxList items={cellArray} />
              </div>
            </div>
          </div>


            <div className="mt-19px flex justify-end">
              <button onClick={() => history.push('/freeboard/compose')} className="flex items-center justify-center h-36px w-90px  rounded-4px bg-gradient-to-t from-blue-3d4a8d to-blue-88d9e8 p-px hover:filter hover:brightness-125 shadow-link">
                <div className="flex items-center justify-center h-34px w-88px rounded-4px bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer">
                  <span className="font-spoqaMedium tracking-tight text-14px text-blue-d6f3ff pt-2px text-shadow-5">작성하기</span>
                </div>
              </button>
            </div>
            

            <div className="flex w-full justify-center mt-5px mb-60px">
              <Pagination page={page} setPage={setPage}/>   
            </div>

            <div className="-mt-30px mb-60px">
              {InboxSearch}
            </div>
            
        </div>
    )
}

export default FreeBoardMain
