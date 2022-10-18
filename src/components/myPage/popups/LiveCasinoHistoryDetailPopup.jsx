import React from 'react'
import CloseIcon from '../../../images/popups/close_icon.png'
import Sample1 from '../../../images/myPage/betHistory/sample1_v2.png'
import Sample2 from '../../../images/myPage/betHistory/sample2_v2.png'

const LiveCasinoHistoryDetailPopup = ({setPopupOpen}) => {

    const username = "WINlouie3asdjakljsdasd"
  return (
      <div 
        style={{ height: "793px",width: "690px", borderRadius: "10px", background:"linear-gradient(to top, #1f1f1e 80%, #343434 100%)",boxShadow: '3.5px 6.062px 7px 0px rgba(0, 0, 0, 0.75)'}}
        className="overflow-hidden p-px"
        >
        <div 
            style={{backgroundColor: 'rgb(50, 50, 49)' }}
            className="h-full overflow-hidden"
        >
            <div className="relative h-61px bg-gray-272726 flex items-center justify-center flex-shrink-0">
                <label className="font-spoqaBold text-yellow-ad9e8c tracking-tight text-24px">거래 상세 내역</label>
                <button className="absolute right-0 mr-26px cursor-pointer z-20" onClick={()=> setPopupOpen(false)}>
                <img src={CloseIcon} alt="close_icon" />
                </button>
            </div>
            
            <div style={{}} className="h-full bg-gray-323231 flex flex-col items-center text-yellow-ad9e8c">
                <div style={{borderRadius: "21px"}}
                  className="text-20px  flex h-42px pr-53px pl-54px items-center mt-18px mb-17px bg-gray-272726 font-spoqaMedium" >
                    <p >플레이어 이름:</p>
                    <p style={{maxWidth:'150px', textOverflow: 'unset', whiteSpace: 'nowrap', overflow:'hidden'}} className=" text-gray-c8c8c8 ml-5px">{username.length > 12 ? `${username.slice(0,12)}...` : username}</p>
                </div>

                {/* <div style={{width:"459px", backgroundColor:"#868686"}} className="h-px mb-22px"></div> */}

                <div 
                    style={{width:"618px", height:"620px", border:'2px solid #473e35',boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.5)'}} 
                    className="rounded-6px overflow-hidden"
                >
 
                    <div className="flex flex-col">
                        <div 
                            style={{backgroundColor:"#473e35",height:"41px"}}
                            className="flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-golden-highLight overflow-hidden"
                        >
                            바카라 on 2021-08-09 17:26:30
                        </div>

                        <div className="flex">
                            <div 
                                style={{backgroundColor:"#252525"}} 
                                className="flex flex-col w-full border-r border-black text-16px font-spoqaMedium tracking-tight text-gray-c8c8c8"
                            >
                                <div 
                                    style={{height:"41px"}} 
                                    className="border-b border-black flex items-center justify-center"
                                >
                                    게임
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="border-b border-black flex items-center justify-center"
                                >
                                    테이블아이디
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="border-b border-black flex items-center justify-center"
                                >
                                    게임상태
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="flex items-center justify-center"
                                >
                                    종료시간
                                </div>

                                <div 
                                    style={{backgroundColor:"#473e35"}}
                                    className="h-40px flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-golden-highLight"
                                >
                                    뱅커 핸드
                                </div>

                                <div 
                                    style={{height:"128px"}} 
                                    className="flex items-center justify-center bg-gray-2b2b2a"
                                >
                                    <img src={Sample1} alt="" />
                                </div>

                                <div style={{height:"41px"}} className="flex border-b border-dark-252525">
                                    <div 
                                        style={{backgroundColor:"#473e35", width:"71px"}}
                                        className="flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-golden-highLight border-r border-black"
                                    >
                                        베팅
                                    </div>
                                    <div 
                                        style={{backgroundColor:"#473e35", width:"119px"}}
                                        className=" flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-golden-highLight border-r border-black"
                                    >
                                        금액
                                    </div>
                                    <div 
                                        style={{backgroundColor:"#473e35", width:"119px"}}
                                        className=" flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-golden-highLight"
                                    >
                                        회원승패
                                    </div>
                                </div>

                                <div style={{height:"41px"}} className="flex font-robotoRegular border-b border-dark-252525 text-gray-c8c8c8">
                                    <div 
                                        style={{ width:"71px"}}
                                        className=" flex items-center justify-center text-16px tracking-tight text- border-r border-black bg-gray-2b2b2a"
                                    >
                                        player
                                    </div>
                                    <div 
                                        style={{ width:"119px"}}
                                        className=" flex items-center justify-center text-16px tracking-tight text- border-r border-black bg-gray-2b2b2a"
                                    >
                                        50,000.00
                                    </div>
                                    <div 
                                        style={{ width:"119px"}}
                                        className=" flex items-center justify-center text-16px tracking-tight text- bg-gray-2b2b2a"
                                    >
                                        10,000.00
                                    </div>
                                </div>

                            </div>
                            
                            <div 
                                style={{backgroundColor:"#2b2b2a"}} 
                                className="flex flex-col w-full  text-16px font-robotoRegular tracking-tight text-gray-c8c8c8"
                            >
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-black flex items-center justify-center"
                                >
                                    28
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-black flex items-center justify-center"
                                >
                                    10103
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px border-b border-black flex items-center justify-center font-spoqa"
                                >
                                    처리됨
                                </div>
                                <div 
                                    style={{height:"41px"}} 
                                    className="h-41px flex items-center justify-center"
                                >
                                    2021-08-09 18:26:47
                                </div>

                                <div 
                                    style={{backgroundColor:"#473e35"}}
                                    className="h-40px flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-golden-highLight"
                                >
                                    플레이어 핸드
                                </div>

                                <div 
                                    style={{height:"128px"}} 
                                    className="flex items-center justify-center"
                                >
                                    <img src={Sample2} alt="" />
                                </div>

                                <div style={{height:"40px"}}  className="flex">
                                    <div 
                                        style={{backgroundColor:"#473e35"}}
                                        className=" flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-golden-highLight  w-full "
                                    >
                                        거래아이디
                                    </div>
                                    <div 
                                        style={{backgroundColor:"#473e35"}}
                                        className=" flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-golden-highLight  w-full "
                                    >
                                        베팅시간
                                    </div>
                                </div>


                                <div style={{height:"41px"}} className="flex font-robotoRegular text-gray-c8c8c8">
                                    <div 
                                        style={{}}
                                        className=" flex items-center justify-center text-16px tracking-tight border-r w-full border-black bg-gray-2b2b2a"
                                    >
                                        85040508001
                                    </div>
                                    <div 
                                        style={{}}
                                        className="flex flex-col -space-y-6px items-center justify-center text-16px tracking-tight w-full bg-gray-2b2b2a"
                                    >
                                        <p>2021-08-09</p>
                                        <p>18:26:27</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div 
                            style={{backgroundColor:"#473e35", height: "40px"}}
                            className="flex items-center justify-center text-16px font-spoqaMedium tracking-tight text-golden-highLight"
                        >
                            게임요약
                        </div>
                        <div className="flex">
                            <div 
                                style={{backgroundColor:"#252525"}} 
                                className="flex flex-col w-full border-r border-black text-16px font-spoqaMedium tracking-tight text-gray-c8c8c8"
                            >
                                <div 
                                    style={{height:"42px"}} 
                                    className="h-41px border-b border-black flex items-center justify-center"
                                >
                                    총 베팅금액
                                </div>
                                <div 
                                    style={{height:"40px"}} 
                                    className="h-41px border-b border-black flex items-center justify-center"
                                >
                                    총 지불금액
                                </div>
                                <div 
                                    style={{height:"39px"}} 
                                    className="flex items-center justify-center"
                                >
                                    총 회원승패
                                </div>
                            </div>
                            <div 
                                style={{backgroundColor:"#2b2b2a"}} 
                                className="flex flex-col w-full  text-16px font-robotoRegular tracking-tight text-gray-c8c8c8"
                            >
                                <div 
                                    style={{height:"42px"}} 
                                    className="h-41px border-b border-black flex items-center justify-end pr-15px"
                                >
                                    5,000.00
                                </div>
                                <div 
                                    style={{height:"40px"}} 
                                    className="h-41px border-b border-black flex items-center justify-end pr-15px"
                                >
                                    10,000.00
                                </div>
                                <div 
                                    style={{height:"40px"}} 
                                    className="flex items-center justify-end pr-15px"
                                >
                                    5,000.00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default LiveCasinoHistoryDetailPopup
