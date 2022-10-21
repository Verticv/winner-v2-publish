import MyPageTitle from 'components/myPage/MyPageTitle'
import React from 'react'
import { useHistory } from 'react-router'
import WinnerLogo from '../../images/freeBoard/winner_small2.png'

const AnnouncementView = () => {

    const TitleText = "농구[쿼터] / 배구[세트] 스페셜 규정"
    const SubtitleText = "스페셜 - 1쿼터 및 3쿼터 실시간 (3쿼터는 2쿼터 종료 후 업데이트됩니다.)  1,3쿼터 [핸디캡] 양 팀의 "
    const BodyText1 = "1,3쿼터 [핸디캡] \n 양 팀의 1,3쿼터 승패를 맞추는 게임입니다. \n 1,3쿼터 [오버/언더] \n 1,3쿼터 양 팀 득점 총합의 언더/오버를 맞추는 게임입니다. \n 1쿼터 핸디 + 언더/오버 + 첫2 + 첫3 + 첫자 크로스 베팅 가능"
    const BodyText2 = "1쿼터/3쿼터 핸디캡[1Q], 1쿼터 언더/오버[1Q 언더/오버] 종목 대상경기의 1쿼터 경기기록만을 기준점에 따라 핸디캡과 언더/오버 규칙에 \n 적용하는 방식입니다. 기준점 오류 및 배당 오류로 잘못 업데이트된 경기는 적중특례 처리 되니 이점 참고 바랍니다. \n 모든 결과값은 공식 홈페이지 기준으로 결과 처리됩니다. \n https://www.nba.com \n https://www.kbl.or.kr \n https://www.wkbl.or.kr/main/index.asp"
    const BodyText3 = "[첫 블로킹 득점] \n 처음으로 블로킹 득점을 기록한 팀을 맞추는 게임 입니다.   블로킹으로 점수를 획득한 팀으로 마감 처리됩니다."
    const BodyText4 = "[첫 서브 득점] \n 처음으로 서브 득점을 기록한 팀을 맞추는 게임 입니다.   서브로 점수를 획득한 팀으로 마감 처리됩니다. \n 세트 핸디캡 및 오버/언더 [세트] 종목은 대상경기의 [세트] 양 팀의 총 득점의 합산으로 경기결과가 적용됩니다. \n WINNER 크로스베팅의 경우 세트별 오버/언더로 업데이트 되지만, [세트]의 경우 양팀 합산 [세트] 점수로 결과값이  적용된다는점 참고 바랍니다."
    const BodyText5 = "[세트] 핸디 + 오버/언더 크로스베팅 가능 \n [세트 핸디 및 오버/언더]  + [첫 서브 득점] +  [첫 블로킹 득점] 크로스베팅 가능 \n 1세트 / 2세트 / 3세트 /4세트 실시간 업데이트 진행 기준점 오류 및 배당 오류로 잘못 업데이트된 경기는 적중특례 처리 되니 이점 참고 바랍니다."
    const BodyText6 = "모든 결과값은 공식 홈페이지 기준으로 결과 처리됩니다."
    const BodyText7 = "https://www.kovo.co.kr/main.asp"

    const history = useHistory();

    const NewLabel = (
        <div className="mt-px w-17px h-17px bg-red-e9441d rounded-4px text-12px text-white flex items-center justify-center font-roboto pt-px flex-shrink-0">
            N
        </div>
    )

    return (
        <div>
            <MyPageTitle title="공지사항"/>

            <div className="shadow-table w-full overflow-hidden rounded-4px p-px mt-20px" style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
            > 
                <div  className="w-full bg-gray-2e2e2e rounded-4px overflow-hidden">
                {/* TITLE */}
                <div className="pt-18px pb-15px w-full flex items-start px-19px space-x-10px border-b border-gray-252525">
                    <p className="text-14px font-spoqaMedium tracking-tight flex flex-shrink-0" style={{color:'#4a90f0'}}>스포츠북</p>
                    
                    <div  className="font-spoqaMedium text-15px tracking-tight text-gray-c8c8c8 ">
                        <h1 className='align-top -mt-px'>{TitleText} <span className='inline-block align-top mt-px ml-10px'>{NewLabel}</span></h1> 
                    </div >
                </div>
                {/* SENDER */}
                <div className="h-56px w-full flex px-19px space-x-10px border-b border-gray-252525 items-center">
                    <img className="h-17px w-72px object-contain mb-4px" src={WinnerLogo} alt=""/>
                    <div className="w-px h-11px" style={{background: '#4c4c4c'}} />
                    <div className="text-14px font-spoqaMedium tracking-tight h-12px  flex items-center flex-shrink-0 text-gray-929292">2021.06.29</div>
                </div>
                <div className="w-full bg-gray-323232 flex flex-col px-19px border-b border-gray-252525 py-18px">
                    <p className="font-spoqaMedium text-16px tracking-tight text-gray-c8c8c8 ">
                        {SubtitleText}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 space-y-10px mt-39px">
                        {BodyText1.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center">{item}</p>
                        )}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 space-y-10px mt-39px">
                        {BodyText2.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center">{item}</p>
                        )}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 space-y-10px mt-39px">
                        {BodyText3.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center">{item}</p>
                        )}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 space-y-10px mt-39px">
                        {BodyText4.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center">{item}</p>
                        )}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 space-y-10px mt-39px">
                        {BodyText5.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center">{item}</p>
                        )}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 space-y-10px mt-39px">
                        {BodyText6.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center">{item}</p>
                        )}
                    </p>
                    <p className="font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 space-y-10px mt-39px">
                        {BodyText7.split('\n').map((item, i) => 
                            <p key={i} className="flex items-center">{item}</p>
                        )}
                    </p>
                    </div>
                </div>
            </div>

            <div className="mt-20px mb-60px flex items-start justify-between">
                <button className="flex items-center justify-center h-36px w-90px rounded-4px p-px shadow-link hover:filter hover:brightness-125" style={{ background: 'linear-gradient(to top, #4b3b09, #e8b888)'}}>
                    <div 
                        style={{background: 'linear-gradient(to bottom,  #a67c52, #7f5f3f)'}}
                        className="flex items-center justify-center h-34px w-88px bg-black rounded-4px cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-shadow-5">이전</span>
                    </div>
                </button>

                <button 
                    style={{ background: 'linear-gradient(to top, #4b3b09, #e8b888)'}}
                   className="flex items-center justify-center h-52px w-192px rounded-4px p-px shadow-link hover:filter hover:brightness-125"
                    onClick={() => history.goBack()}
                >
                    <div
                        style={{background: 'linear-gradient(to bottom,  #a67c52, #7f5f3f)'}}
                        className="flex items-center justify-center h-50px w-190px  rounded-4px cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-16px text-golden-highLight pt-px text-shadow-5">목록보기</span>
                    </div>
                </button>

                <button className="flex items-center justify-center h-36px w-90px p-px rounded-4px  shadow-link hover:filter hover:brightness-125"
                style={{ background: 'linear-gradient(to top, #4b3b09, #e8b888)'}}>
                    <div 
                        style={{background: 'linear-gradient(to bottom,  #a67c52, #7f5f3f)'}}
                        className="flex items-center justify-center h-34px w-88px bg-black rounded-4px  cursor-pointer"
                    >
                        <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-shadow-5">다음</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default AnnouncementView
