import MyPageTitle from 'components/myPage/MyPageTitle'
import React, { useState } from 'react'
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
import HorizontalMenu from 'components/horizontalMenus/HorizontalMenu'
import ArrowDown from '../../images/myPage/leftMenu/arr_down_v2.png'
import QIcon from '../../images/cscenter/q.png'
import AIcon from '../../images/cscenter/a.png'

const Faq = () => {
    const tabsArray = [
        { text: "전체", icon: Icon1, iconHighlight: IconHighlight1, id: 0, path: "/cscenter/faq/all" },
        { text: "라이브카지노", icon: Icon2, iconHighlight: IconHighlight2, id: 1, path: "/cscenter/faq/all/live-casino" },
        { text: "슬롯게임", icon: Icon3, iconHighlight: IconHighlight3, id: 2, path: "/cscenter/faq/all/slot" },
        { text: "스포츠", icon: Icon4, iconHighlight: IconHighlight4, id: 3, path: "/cscenter/faq/all/sports" },
        { text: "호텔카지노", icon: Icon5, iconHighlight: IconHighlight5, id: 4, path: "/cscenter/faq/all/hotel-casino" },
        { text: "e-스포츠", icon: Icon6, iconHighlight: IconHighlight6, id: 5, path: "/cscenter/faq/all/e-sports" },
        { text: "미니게임", icon: Icon7, iconHighlight: IconHighlight7, id: 6, path: "/cscenter/faq/all/minigame" },
        { text: "키론가상게임", icon: Icon8, iconHighlight: IconHighlight8, id: 7, path: "/cscenter/faq/all/ar-game" },
        { text: "피싱게임", icon: Icon9, iconHighlight: IconHighlight9, id: 8, path: "/cscenter/faq/all/phishing-game" },
        { text: "티비벳", icon: Icon10, iconHighlight: IconHighlight10, id: 9, path: "/cscenter/faq/all/bet" },
        { text: "충전/환전", icon: Icon11, iconHighlight: IconHighlight11, id: 10, path: "/cscenter/faq/all/transaction" },
        { text: "베팅관련", icon: Icon12, iconHighlight: IconHighlight12, id: 11, path: "/cscenter/faq/all/about-betting" },
        { text: "기타", icon: Icon13, iconHighlight: IconHighlight13, id: 12, path: "/cscenter/faq/all/other" },
    ];

    const questionArray = [
        { id: 0, type: "충전/환전", text: "첫, 매충 10% 포인트를 받으면 롤링을 어떻게 해야 환전가능한가요?" },
        { id: 1, type: "충전/환전", text: "1,000원 단위도 충전/환전 신청이 가능한가요?" },
        { id: 2, type: "충전/환전", text: "충전시 은행 입금자명이 달라도 처리가 가능한가요?" },
        { id: 3, type: "충전/환전", text: "출금(환전)시 예금주 변경 및 타명의 사용이 가능한가요?" },
        { id: 4, type: "베팅관련", text: "최소 베팅금액, 최대 베팅금액, 최대 적중한도 금액은 얼마인가요?" },
        { id: 5, type: "충전/환전", text: "충전&환전 처리 시간은 어느 정도 소요되나요?" },
        { id: 6, type: "베팅관련", text: "베팅 취소는 가능한가요?" },
        { id: 7, type: "스포츠북", text: "스포츠북 라이브 베팅 목록 중, 경기 도중에 베팅한 경기가 사라지는 경우 베팅한 내역은 어떻게 처리되나요?" },
        { id: 8, type: "기타", text: "Winner 홈페이지에 접속이 잘 되지 않거나 사용도중 에러가 발생하는데 어떻게 해야 하나요?" },
        { id: 9, type: "기타", text: "이 사이트는 안전한가요?" },
        { id: 10, type: "기타", text: "중복 IP 또는 본인 아이디를 공유하여 사용이 가능한가요?" },
    ]

    const BodyText1 = '☞ 첫, 매충 10% 포인트를 받지 않을시 모든게임의 롤링은 단폴, 카지노 베팅 포함 100%만 해주시면 환전가능합니다. \n - 포인트 받지 않기를 원할시 : 충전 --> "보너스받기" 에서 "받지않기" 클릭하시고 충전신청해주시면 됩니다. \n ☞ 첫, 매충 10%포인트를 받았을시 각게임당 아래와 같이 롤링해 주시면 됩니다. '

    const [, setSelectedTab] = useState(0)
    const [openedCell, setOpenedCell] = useState(null)

    const QuestionCell = ({type, text, cellId}) => (
      <>
            <button 
                style={{zIndex: 2,background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)"}}
                className="relative rounded-4px shadow-table w-full  flex items-start p-px  mb-11px  z-20 group hover:shadow-table hover:brightness-125 filter" 

                onClick={() => {
                    if (openedCell === cellId) {
                        setOpenedCell(null) 
                    } else {
                        setOpenedCell(cellId)
                    }
                }}>
                <div  className="w-full bg-gray-2e2e2e rounded-4px overflow-hidden  flex items-start px-19px justify-between pt-11px pb-10px">
                  <img className="object-none relative top-4px" src={QIcon} alt="" />
                  <div className="w-full h-full px-18px flex items-start space-x-7px self-start"> 

                      <div 
                          style={{backgroundColor: "#494745", minWidth: "100px"}} 
                          className="h-29px rounded-full flex items-center justify-center text-gray-ccc2b6 text-14px font-spoqaMedium tracking-tight mt-2px pt-2px px-12px flex-shrink-0"
                      > 
                        <p style={{ }}>{type}</p>
                      </div>
                      <p className="font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8  mt-7px text-left">{text}</p>
                  </div>
                  <img className={`${openedCell === cellId && "transform rotate-180"} self-center`} src={openedCell === cellId ? ArrowDown : ArrowDown} alt="" />
              </div>    
            </button>
            {openedCell === cellId && (
                <div 
                    style={{ zIndex: 1, backgroundColor: "#252525" }} 
                    className="flex h-full items-start justify-start w-full rounded-4px -mt-64px z-0 mb-14px border border-black pb-30px pr-42px"
                >
                    <img 
                        style={{marginTop: "68px"}} 
                        className="ml-30px object-none" 
                        src={AIcon} 
                        alt="" 
                    />
                    <div className="w-full flex flex-col">
                        <div style={{marginTop: "82px",color:'#c1c1c1'}} className=" ml-15px  flex items-center text-16px font-spoqaMedium tracking-tight ">
                            <p style={{color: "#4a90f0"}} className="self-start mr-3px" >
                                No.1
                            </p> 
                            그 이상.! 최고를 넘어선 『 Winner 』입니다.
                            {/* ☞ 첫, 매충 10% 포인트를 받지 않을시 모든게 */}
                        </div>

                        <div style={{color:'#c1c1c1'}} className="font-spoqaMedium text-14px tracking-tight  space-y-10px mt-34px ml-14px">
                            {BodyText1.split('\n').map((item, i) => 
                                <p key={i} className={`flex items-center`}>{item}</p>
                            )}
                        </div>
                        <div style={{color:'#c1c1c1'}} className="font-spoqaMedium text-14px tracking-tight  space-y-10px mt-10px flex items-center ml-14px">
                            - 스포츠 : <p style={{color: "#e65454"}} className="mx-3px">두폴더 이상 </p> 롤링 100% 최대 30만원 
                        </div>
                        <div style={{color:'#c1c1c1'}} className="font-spoqaMedium text-14px tracking-tight  space-y-10px mt-10px flex items-center ml-14px">
                            - 스포츠단폴더, 가상게임, 미니게임, 카지노 : <p style={{color: "#e65454"}} className="mx-3px">이용불가</p>
                        </div>
                        <div style={{color:'#c1c1c1'}} className="font-spoqaMedium text-14px tracking-tight  space-y-10px mt-10px flex items-center ml-14px">
                            - 스포츠 2폴더 이상 100% 롤링 후 이용 가능 스포츠 단폴더, 타 게임 이용 가능하며, 스포츠 2폴더 100% 롤링 전 타게임 이용시 보유금 <p style={{color: "#e65454"}} className="mx-3px">전액 몰수처리</p>
                        </div>
                           
                        <div style={{color:'#c1c1c1'}} className="font-spoqaMedium text-14px tracking-tight  space-y-10px mt-34px flex items-center ml-14px">
                            ※ 모든게임의 롤링적용시점은 게임이 끝나서 마감처리된 때입니다. 이후에 출금신청해주셔야 처리가능합니다.
                        </div>

                        <div style={{color:'#c1c1c1'}} className="font-spoqaMedium text-14px tracking-tight  space-y-10px mt-34px flex items-center ml-14px">
                            언제나 고객에게 최상의 서비스 제공을 할 수 있도록 노력하는 『 Winner 』가 되겠습니다.
                        </div>
                        <div style={{color:'#c1c1c1'}} className="font-spoqaMedium text-14px tracking-tight  space-y-10px mt-10px flex items-center ml-14px">
                            감사합니다.
                        </div>
                    </div>
                    
                </div>
            )}
        </>
    )

    function MenuList({ items }) {
        
        return items.map(item => (
            <QuestionCell type={item.type} text={item.text} cellId={item.id} />
        )
    )}

    return (
        <div>
            <MyPageTitle title="자주묻는질문" />

            <div className="relative w-full mt-20px">
                <HorizontalMenu itemsArray={tabsArray}  hasRows={true} setSelectedTab={setSelectedTab} showSub={false} />
            </div>

            <div className="mt-20px mb-90px">
                <MenuList items={questionArray} />
            </div>

        </div>
    )
}

export default Faq
