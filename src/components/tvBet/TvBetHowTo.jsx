import React from 'react'
import Image3 from '../../images/tvBet/3.png'
import Image4 from '../../images/tvBet/4.png'
import Dot from '../../images/esports/dot.png'

const TvBetHowTo = () => {

  const LongItem = ({ no3rd = false, no4th = false, no5th = false, number = "4.", title = "메뉴", text = "결과 : 경기결과 확인 가능", text2 = "팀 : 팀 순위 확인 가능", text3 = "T&C : 베팅규정 확인 가능", text4 = "공지 : 게임 공지 확인 가능", text5 = "", text11 = null, text22 = null, text33 = null }) => (
    <div className="flex flex-col space-y-4px">
      <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px h-18px items-center">
        <span className="text-golden-gradLight">{number}</span>
        <span className="text-gray-ccc2b6">{title}</span>
      </div>
      <div className="flex mt-px">
        <img src={Dot} className="object-none mr-4px" alt="" />
        <span style={{ color: "#828282" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text}</span>
      </div>
      {text11 && (
        <div className="flex mt-px">
          <img src={Dot} className="object-none mr-4px opacity-0" alt="" />
          <span style={{ color: "#828282" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text11}</span>
        </div>
      )}

      <div className="flex mt-px">
        <img src={Dot} className="object-none mr-4px" alt="" />
        <span style={{ color: "#828282" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text2}</span>
      </div>
      {text22 && (
        <div className="flex mt-px">
          <img src={Dot} className="object-none mr-4px opacity-0" alt="" />
          <span style={{ color: "#828282" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text22}</span>
        </div>
      )}
      {!no3rd && (
        <div className="flex mt-px">
          <img src={Dot} className="object-none mr-4px" alt="" />
          <span style={{ color: "#828282" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text3}</span>
        </div>
      )}
      {text33 && (
        <div className="flex mt-px">
          <img src={Dot} className="object-none mr-4px opacity-0" alt="" />
          <span style={{ color: "#828282" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text33}</span>
        </div>
      )}
      {!no4th && (
        <div className="flex mt-px">
          <img src={Dot} className="object-none mr-4px" alt="" />
          <span style={{ color: "#828282" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text4}</span>
        </div>
      )}
      {!no5th && (
        <div className="flex mt-px">
          <img src={Dot} className="object-none mr-4px" alt="" />
          <span style={{ color: "#828282" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text5}</span>
        </div>
      )}
    </div>
  )

  return (
    // <div style={{borderRadius:"1em"}} className="w-full bg-gray-fafafa border border-gray-dddddd p-30px space-y-30px">
    <div className="w-full shadow-table overflow-hidden rounded-4px p-px"
      style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}>
      <div className="w-full bg-gray-323232 rounded-4px overflow-hidden p-30px space-y-30px">
        <div className="flex space-x-20px items-start">
          <img className="object-none" src={Image3} alt="" />
          <div style={{ backgroundColor: "#2b2b2a", height: "484px" }} className="w-full h-full rounded-xl p-20px">
            <div className="space-y-23px">
              <LongItem no3rd no4th no5th title='게임 및 배당선택' number='1.' text='① 게임종류를 선택합니다.' text2='원하는 ② ③ 배당을 선택합니다.' />

              <div>
                <div style={{ width: "97px", height: "25px", backgroundColor: "#f45400" }} className="text-white flex items-center justify-center font-spoqaBold text-18px tracking-tight pt-px">알아두세요!</div>
                <div className="flex items-center">
                  <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-7px">※ ④ [이벤트정보] 화면에서 현재 '라이브'</span>
                </div>
                <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-7px">중인 게임과 '예정된' 게임이벤트를 확인할 수 있습니다.</span>
                <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-7px">원하는 이벤트를 선택하면 '배당판'이 활성화되며</span>
                <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-7px">배당을 선택하면 베팅이 가능합니다.</span>
              </div>

              <div>
                <div className="flex items-center">
                  <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-7px">※ ⑤ [플레이방법] 메뉴에서 각 게임별 이용방법과</span>
                </div>
                <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-7px">규정 등 확인 가능합니다.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-494745" style={{ background: '#494745' }} />

        <div className="flex space-x-20px items-start">
          <img className="object-none" src={Image4} alt="" />
          <div style={{ backgroundColor: "#2b2b2a", height: "502px" }} className="w-full h-full rounded-xl p-20px">
            <div className="space-y-23px">
              <LongItem no4th no5th title='금액입력 및 베팅완료' number='2.' text='① 베팅금액을 입력합니다.' text2='② [베팅하기] 버튼을 누르면' text22={"베팅이 완료됩니다."} text3='③ [베팅기록] 메뉴에서 베팅내역을' text33="확인할 수 있습니다." />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default TvBetHowTo
