import React from 'react'
import Image1 from '../../images/hotelCasino/1.png'
import Image2 from '../../images/hotelCasino/2.png'
import Image3 from '../../images/hotelCasino/3.png'
import Image4 from '../../images/hotelCasino/4.png'
import Dot from '../../images/esports/dot.png'
import TitleIcon from '../../images/title-icon.png'

const HotelCasinoStructure = () => {

  const TitleText = ({ number = "01", title = "화면구성" }) => (
    <div className="flex items-center">
      {/* <div style={{background: "linear-gradient(120deg, #2087f0, #1873cf", borderRadius:"3px"}} className="w-8px h-20px"></div> */}
      <img className="z-10 object-none" src={TitleIcon} alt="" />
      <span className="text-22px font-spoqaMedium tracking-tight text-gray-ccc2b6 ml-10px h-22px flex items-center">{title}</span>
      {number !== "0" && (
        <div style={{ backgroundColor: "#494745", borderRadius: "100%" }} className="w-36px h-36px ml-5px flex items-center justify-center text-gray-ccc2b6 text-22px font-roboto">
          {number}
        </div>
      )}
    </div>
  )

  const Item = ({ number = "1.", title = "보유머니", text = null, text2 = null, text3 = null, color1 = null, color2 = null, color3 = null, exceptionText = null }) => (
    <div className="flex flex-col space-y-4px">
      <div className="flex text-18px tracking-tight font-spoqaBold space-x-2px  h-18px items-center">
        {number !== "0" && <span className="text-golden-gradLight">{number}</span>}
        <span className="text-gray-ccc2b6">{title}</span>
      </div>
      {text !== null && (
        <span style={{ color: "#828282" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium mt-px">{text} <p className="ml-2px text-blue-2980b9">{color1}</p><p className='ml-2px'>{exceptionText}</p><p style={{ color: "#e65454" }} className="mr-2px">{color2}</p></span>
      )}
      {color3 && (
        <span style={{ color: "#828282" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium"><p style={{ color: "#e65454" }} className="mr-2px">{color3}</p></span>
      )}
      {text2 && (
        <span style={{ color: "#828282" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium">{text2}</span>
      )}
      {text3 && (
        <span style={{ color: "#828282" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium">{text3}</span>
      )}
    </div>
  )

  const LongItem = ({ no3rd = false, no4th = false, no5th = false, number = "4.", title = "메뉴", text = "결과 : 경기결과 확인 가능", text2 = "팀 : 팀 순위 확인 가능", text3 = "T&C : 베팅규정 확인 가능", text4 = "공지 : 게임 공지 확인 가능", text5 = "", text11 = null }) => (
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
      {!no3rd && (
        <div className="flex mt-px">
          <img src={Dot} className="object-none mr-4px" alt="" />
          <span style={{ color: "#828282" }} className="flex h-16px items-center text-16px tracking-tight font-spoqaMedium ">{text3}</span>
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
          <img className="object-none" src={Image1} alt="" />
          <div style={{ backgroundColor: "#2b2b2a", height: "592px" }} className="w-full h-full rounded-xl p-20px">
            <TitleText number='0' title="로비화면" />

            <div className="mt-19px w-full h-px bg-gray-dddddd" style={{ background: '#494745' }}></div>
            <div className="pt-20px space-y-23px">
              <Item title="아이디&보유머니" text="본인의 아이디와 보유머니 표시" />
              <Item number="2." title="언어설정" text="한국어, 중국어, 영어, 일본어 설정 가능" />
              <LongItem no5th={true} no4th={true} title='메뉴' number='3.' text='게임방법 : 게임 이용가이드 제공' text2='화면설정 : 전체화면/축소화면 설정 가능' text3='메인으로 : 메인으로 이동 가능' />
              <Item number="4." title="업체별 정렬" text="카지노 업체별 테이블 정렬 가능" />
              <Item number="5." title="베팅한도" text="테이블의 '베팅한도' 부분에 마우스 커서를" text2='올리면 해당 테이블의 상세 베팅한도 확인 가능' />
              <Item number="6." title="게임입장" text="원하는 테이블의 [입장] 버튼을 누르면" text2='게임테이블로 이동됩니다.' />
              <div>
                <div style={{ width: "97px", height: "25px", backgroundColor: "#f45400" }} className="text-white flex items-center justify-center font-spoqaBold text-18px tracking-tight pt-px">알아두세요!</div>
                <div className="flex items-center">
                  <span style={{ color: "#8c8c8c" }} className="flex h-16px items-center text-14px tracking-tight font-spoqaMedium mt-7px">※ 스피드게임 : 45초 베팅시간 제공</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gray-494745" style={{ background: '#494745' }} />

        <div className="flex space-x-20px items-start">
          <img className="object-none" src={Image2} alt="" />
          <div style={{ backgroundColor: "#2b2b2a", height: "680px" }} className="w-full h-full rounded-xl p-20px">
            <TitleText number="01" title='게임화면' />

            <div className="mt-20px w-full h-px bg-gray-494745" style={{ background: '#494745' }}></div>

            <div className="pt-20px space-y-23px">
              <Item title="라이브 딜러영상" text="실제 호텔카지노의 라이브영상 제공" />
              <Item number="2." title="테이블정보" text="카지노업체, 게임회차, 베팅한도, 보유머니 등" text2="다양한 게임정보가 표시됩니다." />
              <Item number="3." title="스코어보드" text="6매, 본매, 중국점(1군~3군) 등" text2={"다양한 종류 제공"} />
              <Item number="4." title="슈통계" text="현재 슈를 토대로 한 다음 통계 표시" />
              <Item number="5." title="로드탐구표" text="다음 라운드에서 뱅커 또는 플레이어가" text2="이길 경우 세 개의 중국점에 추가되는" text3="아이콘 표시" />
              <Item number="6." title="금액표시" text="베팅금액/이긴금액/보유금액 표시" />
              <LongItem title='메뉴' number='7.' text='테이블이동 : 다른 테이블로 이동 가능' text2='화면설정 : 전체화면/축소화면 설정 가능' text3='베팅내역 : 상세 베팅내역 확인 가능' text4='로비이동 : 로비로 이동 가능' text5='새로고침 : 현재 화면 새로고침 가능' />
            </div>

          </div>
        </div>

        <div className="h-px w-full bg-gray-494745" style={{ background: '#494745' }} />

        <div className="flex space-x-20px items-start">
          <img className="object-none" src={Image3} alt="" />
          <div style={{ backgroundColor: "#2b2b2a", height: "662px" }} className="w-full h-full rounded-xl p-20px">
            <TitleText number="02" title='게임화면' />

            <div className="mt-20px w-full h-px bg-gray-494745" style={{ background: '#494745' }}></div>

            <div className="pt-20px space-y-23px">
              <Item title="베팅구역" text="" color1="플레이어, 뱅커, 타이, 플레이어페어, 뱅커페어" exceptionText={"등"} text2={"각 베팅구역을 누르면 베팅이 가능합니다."} />
              <Item number="2." title="베팅시간" text="베팅 가능한 시간을 표시합니다." text2="" color3="※ 45초 베팅시간 제공" />
              <Item number="3." title="베팅칩" text="베팅 시 칩을 선택할 수 있습니다." />
              <LongItem no4th no5th no3rd title='버튼' number='4.' text='베팅하기 : ① 베팅구역에 베팅한 후' text11={"해당 버튼을 누르면 베팅이 완료됩니다."} text2='베팅취소 : 베팅을 취소할 수 있습니다.' />
              <Item number="5." title="칩설정" text="테이블에 표시되는" text2="③ 칩을 설정할 수 있습니다." />
              <Item number="6." title="음향설정" text="게임 음향 ON/OFF 설정 가능" />
              <Item number="7." title="사이드 패널버튼" text="버튼을 누르면 측면 패널이 오픈되며" text2={"베팅금액, 이긴금액, 보유머니 등"} text3="다양한 정보가 표시됩니다." />
            </div>

          </div>
        </div>

        <div className="h-px w-full bg-gray-494745" style={{ background: '#494745' }} />

        <div className="flex space-x-20px items-start">
          <img className="object-none" src={Image4} alt="" />
          <div style={{ backgroundColor: "#2b2b2a", height: "480px" }} className="w-full h-full rounded-xl p-20px">
            <TitleText number="03" title='게임화면' />

            <div className="mt-20px w-full h-px bg-gray-494745" style={{ background: '#494745' }}></div>

            <div className="pt-20px space-y-23px">
              <Item number='0' title="간편 베팅기능 사용방법" />
              <Item title="설정버튼" text="게임설정 버튼을 선택합니다." />
              <Item number="2." title="[S]버튼" text="[S]버튼을 선택합니다." />
              <Item number="3." title="환경설정" text="각 항목에 원하는 금액을 설정합니다." text2={"- 1번~5번 항목 금액입력(③ 예시화면 참조)"} />
              <Item number="4." title="확인버튼" text="[확인] 버튼을 누릅니다." />
              <Item number="5." title="베팅하기" text="숫자(1~5)버튼 선택 시 베팅이 가능합니다." text2={"- 예) 1번 버튼 선택 시 플레이어 10,000 베팅"} />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelCasinoStructure
