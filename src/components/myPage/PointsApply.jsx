import React, { useState } from 'react'
import MyPageTitle from './MyPageTitle'
import AlertIcon from '../../images/myPage/alert.png'

const PointsApply = () => {

    const [inputValue, setInputValue] = useState(null)
    const [inputClicked, setInputClicked] = useState(false)
    // const [selectedInput, setSelectedInput] = useState()
    var nf = new Intl.NumberFormat();

    const Title = ({text}) => (
        <div className="space-y-14px w-140px flex-shrink-0 bg-gray-272726 h-44px pl-10px flex items-center rounded-4px">
            <div className=" text-gray-ccc2b6 font-spoqaMedium text-16px mt-3px tracking-tight">{text}</div>
            {/* <div className="h-px w-full bg-gray-bebebe"></div> */}
        </div>
    )

    const PopupButton = (
        <button className="flex items-center justify-center h-52px w-212px rounded-4px bg-gradient-to-t from-blue-3d4a8d to-blue-88d9e8 p-px hover:filter hover:brightness-125 shadow-link">
            <div className="flex items-center justify-center h-50px w-210px rounded-4px  bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer">
                <span className="font-spoqaMedium tracking-tight text-16px text-blue-d6f3ff text-shadow-5">신청하기</span>
            </div>
        </button>
    )

    return (
        <div className="w-full flex flex-col items-center">
            <MyPageTitle title="포인트전환신청" />

            <div className="mt-20px w-full h-157px rounded-4px border border-red-594c49 bg-red-413937 px-19px pt-17px">
                <div className="flex items-center h-26px space-x-9px">
                    <img src={AlertIcon} alt="" />
                    <span className="text-red-e65454 font-spoqaMedium text-20px tracking-tight mt-px" style={{WebkitTextStroke:"0.2px"}}>확인 / 필독사항</span>
                </div>
                <div className="mt-16px flex flex-col space-y-14px text-gray-ccc2b6 tracking-tight font-spoqaMedium text-16px">
                    <span className="h-15px"><span className="font-bold mr-4px">✓</span>  포인트 전환 시 보유머니로 충전됩니다.</span>
                    <span className="h-15px"><span className="font-bold mr-4px">✓</span>  최소 10,000P 이상 신청 가능합니다.</span>
                    <span className="h-15px"><span className="font-bold mr-4px">✓</span>  자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.</span>
                </div>
            </div>

        <div className="mt-20px w-full h-573px shadow-table p-px rounded-4px"
          style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}>
          <div className='bg-gray-323232 p-9px rounded-4px flex flex-col  w-full h-full'>
                <div style={{height: '128px'}} className="w-full rounded-4px bg-gray-252525 border border-gray-404040">
                    <div className="ml-114px mt-37px flex flex-col font-spoqaMedium tracking-tight">
                        <span className="text-20px h-19px text-gray-ccc2b6">전환 포인트 입력</span>
                        <span className="text-16px text-gray-c8c8c8 mt-15px">
                            현재 포인트가 보유머니로 전환되며, 최소 
                            <span className="text-blue-2980b9 ml-2px font-spoqaBold">10,000</span>P
                             부터 신청 가능합니다.</span>
                    </div>
                </div>

                <div className="w-785px ml-117px mt-37px flex flex-col space-y-38px">
                    <div className="flex space-x-10px items-center">
                        <Title text="현재 잔여 포인트" />
                        <div className="w-full h-44px">
                          <div className="h-full font-spoqaMedium text-16px text-gray-c8c8c8 pl-9px rounded-4px" style={{ background: '#191817', boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)' }}>
                            <div className='h-full w-full flex items-center'>
                              <span className="font-spoqaBold text-blue-2980b9 mt-3px">278</span>
                              <span className='mt-3px'>P</span>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="flex space-x-10px">
                      <Title text="전환 예정 포인트" />
                      <div className="h-44px w-full">
                        <div className="h-full font-spoqaMedium text-16px text-gray-c8c8c8 pl-9px rounded-4px" style={{ background: '#191817', boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)' }}>
                          <div className='h-full w-full flex items-center'>
                            <span className="font-spoqaBold text-gray-c8c8c8 mt-3px">0</span>
                            <span className='mt-3px'>P</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-10px">
                      <Title text="전환 후 잔여 포인트" />
                      <div className="h-44px  w-full">
                        <div className="h-full font-spoqaMedium text-16px text-gray-c8c8c8 pl-9px rounded-4px" style={{ background: '#191817', boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)' }}>
                          <div className='h-full w-full flex items-center'>
                            <span className="font-spoqaBold text-gray-c8c8c8 mt-3px">0</span>
                            <span className='mt-3px'>P</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-10px">
                        <Title text="전환 포인트 입력" />
                        <div className="h-44px w-full overflow-hidden rounded-4px">
                              <input 
                                style={{ background: '#191817',boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)', }}
                                className="w-full  font-spoqaMedium text-16px text-gray-r828282 outline-none pl-9px placeholder-gray-r828282 h-42px"
                                placeholder="직접 입력시 숫자만 입력해 주세요."
                                value={inputValue !==null ? nf.format(inputValue) : ""}
                                onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                                onFocus={() => setInputClicked(true)}
                                onBlur={() => setInputClicked(false)}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                            />
                             <div style={{backgroundColor: inputClicked ? "#a67c52" : "#191817"}} className={`w-full h-2px`} />
                        </div>
                    </div>
                </div>

                <div className={`mt-20px flex space-x-5px w-full justify-end pr-117px`}>
                    <button 
                      className="flex items-center justify-center h-42px w-75px p-px  rounded-4px shadow-link hover:filter hover:brightness-125"
                      style={{ background: 'linear-gradient(to top, #3f3d37, #a69685)'}}
                        onClick={() => setInputValue(inputValue + 1000)}
                    >
                    <div className="flex items-center justify-center h-40px w-73px  rounded-4px  cursor-pointer"
                    style={{ background: 'linear-gradient(0deg, rgba(76,72,65,1) 0%, rgba(77,72,68,1) 5%, rgba(119,109,98,1) 97%)' }}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight text-shadow-5">1천P</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px p-px rounded-4px shadow-link hover:filter hover:brightness-125"
                        style={{ background: 'linear-gradient(to top, #3f3d37, #a69685)'}}
                        onClick={() => setInputValue(inputValue + 5000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px  rounded-4px  cursor-pointer"
                          style={{ background: 'linear-gradient(0deg, rgba(76,72,65,1) 0%, rgba(77,72,68,1) 5%, rgba(119,109,98,1) 97%)' }}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight text-shadow-5">5천P</span>
                        </div>
                    </button>

                    <button 
                      className="flex items-center justify-center h-42px w-75px p-px rounded-4px shadow-link hover:filter hover:brightness-125"
                      style={{ background: 'linear-gradient(to top, #3f3d37, #a69685)'}}
                        onClick={() => setInputValue(inputValue + 10000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px  rounded-4px  cursor-pointer"
                          style={{ background: 'linear-gradient(0deg, rgba(76,72,65,1) 0%, rgba(77,72,68,1) 5%, rgba(119,109,98,1) 97%)' }}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight text-shadow-5">1만P</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px p-px rounded-4px bg-blue-r2068b2 shadow-link hover:filter hover:brightness-125"
                        style={{ background: 'linear-gradient(to top, #3f3d37, #a69685)'}}
                        onClick={() => setInputValue(inputValue + 50000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px  rounded-4px  cursor-pointer"
                          style={{ background: 'linear-gradient(0deg, rgba(76,72,65,1) 0%, rgba(77,72,68,1) 5%, rgba(119,109,98,1) 97%)' }}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight text-shadow-5">5만P</span>
                        </div>
                    </button>

                    <button 
                      className="flex items-center justify-center h-42px w-75px p-px rounded-4px bg-blue-r286fce shadow-link hover:filter hover:brightness-125"
                      style={{ background: 'linear-gradient(to top, #3f3d37, #a69685)'}}
                        onClick={() => setInputValue(inputValue + 100000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px  rounded-4px  cursor-pointer"
                          style={{ background: 'linear-gradient(0deg, rgba(76,72,65,1) 0%, rgba(77,72,68,1) 5%, rgba(119,109,98,1) 97%)' }}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight text-shadow-5">10만P</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px p-px rounded-4px bg-blue-r286fce shadow-link hover:filter hover:brightness-125"
                        style={{ background: 'linear-gradient(to top, #3f3d37, #a69685)'}}
                        onClick={() => setInputValue(inputValue + 500000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px  rounded-4px  cursor-pointer"
                          style={{ background: 'linear-gradient(0deg, rgba(76,72,65,1) 0%, rgba(77,72,68,1) 5%, rgba(119,109,98,1) 97%)' }}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight text-shadow-5">50만P</span>
                        </div>
                    </button>

                    <button 
                        className="flex items-center justify-center h-42px w-75px p-px rounded-4px bg-blue-r177cce shadow-link hover:filter hover:brightness-125"
                        style={{ background: 'linear-gradient(to top, #3f3d37, #a69685)'}}
                        onClick={() => setInputValue(inputValue + 1000000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px  rounded-4px  cursor-pointer"
                          style={{ background: 'linear-gradient(0deg, rgba(76,72,65,1) 0%, rgba(77,72,68,1) 5%, rgba(119,109,98,1) 97%)' }}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight text-shadow-5">100만P</span>
                        </div>
                    </button>

                    <button 
                      className="flex items-center justify-center h-42px w-75px p-px rounded-4px  shadow-link hover:filter hover:brightness-125"
                      style={{ background: 'linear-gradient(to top, #4b3b09, #e8b888)'}}
                        onClick={() => setInputValue(null)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px  rounded-4px cursor-pointer"
                          style={{background: 'linear-gradient(0deg, rgba(128,96,62,1) 0%, rgba(129,96,64,1) 5%, rgba(165,124,82,1) 97%)'}}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight text-shadow-5">정정</span>
                        </div>
                    </button>
                </div>

            </div>
        </div>
            <div className="mt-20px mb-60px">
                {PopupButton}
            </div>
        
            

        </div>
    )
}

export default PointsApply
