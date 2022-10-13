import React from 'react'
import Image3 from '../../images/tvBet/3.png'
import Image4 from '../../images/tvBet/4.png'
import Dot from '../../images/esports/dot.png'
import TitleIcon from '../../images/title-icon.png'

const TvBetHowTo = () => {

    const TitleText = ({number = "01", title = "화면구성"}) => (
        <div className="flex items-center">
        {/* <div style={{background: "linear-gradient(120deg, #2087f0, #1873cf", borderRadius:"3px"}} className="w-8px h-20px"></div> */}
            <img className="z-10 object-none" src={TitleIcon} alt="" />
            <span className="text-22px font-spoqaMedium tracking-tight text-gray-ccc2b6 ml-10px h-22px flex items-center">{title}</span>
            {number !== "0" && (
              <div style={{backgroundColor:"#494745", borderRadius:"100%"}} className="w-36px h-36px ml-5px flex items-center justify-center text-gray-ccc2b6 text-22px font-roboto">
                {number}
              </div>
            )}
        </div>
    )

    const Item = ({number = "1.", title="보유머니", text="본인의 보유머니가 표시됩니다.", text2=null, text3=null, text4=null, text5=null, color1=null, color2=null, color3=null}) => (
        <div className="flex flex-col space-y-4px">
            <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px  h-18px items-center">
                {number !== "0" && <span className="text-golden-gradLight">{number}</span>}
                
                <span className="text-gray-ccc2b6">{title}</span>
            </div>
            <span style={{color:"#828282"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium mt-px">{text} <p className="ml-2px text-blue-2980b9">{color1}</p><p style={{color:"#e65454"}} className="mr-2px">{color2}</p></span>
            {color3 && (
              <span style={{color:"#828282"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium"><p style={{color:"#e65454"}} className="mr-2px">{color3}</p></span>
            )}
            {text2 && (
                <span style={{color:"#828282"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium">{text2}</span>
            )}
            {text3 && (
                <span style={{color:"#828282"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium">{text3}</span>
            )}
            {text4 && (
                <span style={{color:"#828282"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium">{text4}</span>
            )}
            {text5 && (
                <span style={{color:"#828282"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium">{text5}</span>
            )}
        </div>
    )

    const LongItem = ({no3rd=false, no4th=false, no5th=false, number = "4.", title="메뉴", text="결과 : 경기결과 확인 가능", text2="팀 : 팀 순위 확인 가능", text3="T&C : 베팅규정 확인 가능", text4="공지 : 게임 공지 확인 가능", text5="", text11=null, text22=null, text33=null}) => (
        <div className="flex flex-col space-y-4px">
            <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px flex h-18px items-center">
                <span className="text-golden-gradLight">{number}</span>
                <span className="text-gray-ccc2b6">{title}</span>
            </div>
            <div className="flex mt-px">
                <img src={Dot} className="object-none mr-4px" alt="" />
                <span style={{color:"#828282"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text}</span>
            </div>
            {text11 && (
              <div className="flex mt-px">
                  <img src={Dot} className="object-none mr-4px opacity-0" alt="" />
                  <span style={{color:"#828282"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text11}</span>
              </div>
            )}

            <div className="flex mt-px">
                <img src={Dot} className="object-none mr-4px" alt="" />
                <span style={{color:"#828282"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text2}</span>
            </div>
            {text22 && (
              <div className="flex mt-px">
                  <img src={Dot} className="object-none mr-4px opacity-0" alt="" />
                  <span style={{color:"#828282"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text22}</span>
              </div>
            )}
            {!no3rd && (
              <div className="flex mt-px">
                  <img src={Dot} className="object-none mr-4px" alt="" />
                  <span style={{color:"#828282"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text3}</span>
              </div>
            )}
            {text33 && (
              <div className="flex mt-px">
                  <img src={Dot} className="object-none mr-4px opacity-0" alt="" />
                  <span style={{color:"#828282"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text33}</span>
              </div>
            )}
            {!no4th && (
              <div className="flex mt-px">
                <img src={Dot} className="object-none mr-4px" alt="" />
                <span style={{color:"#828282"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text4}</span>
              </div>
            )}
            {!no5th && (
              <div className="flex mt-px">
                <img src={Dot} className="object-none mr-4px" alt="" />
                <span style={{color:"#828282"}} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text5}</span>
              </div>
            )}
        </div>
    )

    return (
        // <div style={{borderRadius:"1em"}} className="w-full bg-gray-fafafa border border-gray-dddddd p-30px space-y-30px">
        <div className="w-full shadow-table overflow-hidden rounded-4px p-px"
          style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}>
          <div  className="w-full bg-gray-323232 rounded-4px overflow-hidden p-30px space-y-30px">
            <div className="flex space-x-20px items-start">
                <img className="object-none" src={Image3} alt="" />
                <div style={{backgroundColor:"#2b2b2a", height:"390px"}} className="w-full h-full rounded-xl p-20px">

                  <TitleText number='01' title="베팅방법" />

                  <div className="mt-19px w-full h-px bg-gray-dddddd"  style={{background:'#494745'}}></div>
                    <div className="space-y-23px pt-20px">
                        <LongItem no3rd no4th no5th title='게임 및 배당선택' number='1.' text='① 게임종류를 선택합니다.' text2='원하는 ② ③ 배당을 선택합니다.'/>
                        <Item number="0" title="알아두세요!" text="※ ④ [이벤트정보] 화면에서 현재 '라이브'" text2={"중인 게임과 '예정된'"} text3="게임이벤트를 확인할 수 있습니다." text4="원하는 이벤트를 선택하면 '배당판'이" text5={"활성화되며 배당을 선택하면 베팅이 가능합니다."} />
                        <Item number="0" title="알아두세요!" text="※ ⑤ [플레이방법] 메뉴에서 각 게임별" text2={"이용방법과 규정 등 확인 가능합니다."} />
                        
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-gray-494745"  style={{background:'#494745'}}/>
            
            <div className="flex space-x-20px items-start">
              <img className="object-none" src={Image4} alt="" />
              <div style={{backgroundColor:"#2b2b2a", height:"230px"}} className="w-full h-full rounded-xl p-20px">
                <TitleText number='02' title="베팅방법" />

                <div className="mt-19px w-full h-px bg-gray-dddddd"  style={{background:'#494745'}}></div>
                  <div className="space-y-23px pt-20px">
                    <LongItem no4th no5th title='금액입력 및 베팅완료' number='2.' text='① 베팅금액을 입력합니다.' text2='② [베팅하기] 버튼을 누르면' text22={"베팅이 완료됩니다."} text3='③ [베팅기록] 메뉴에서 베팅내역을' text33="확인할 수 있습니다." />
                </div>

              </div>
            </div>

          </div>
        </div>
    )
}

export default TvBetHowTo
