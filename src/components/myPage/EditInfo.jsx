import React, { useState } from 'react'
import MyPageTitle from './MyPageTitle'

const EditInfo = () => {

    const [selectedInput, setSelectedInput] = useState()

    const Title = ({text}) => (
        <div className="w-140px space-y-2 flex-shrink-0 bg-gray-272726 h-44px pl-10px flex items-center rounded-4px">
            <label className="text-gray-ccc2b6 font-spoqaMedium text-16px mt-3px">{text}</label>
            {/* <div className="border-b w-full border-gray-bebebe"></div> */}
        </div>
    )

    return (
        <div>
            <MyPageTitle title="회원정보수정" />

            <div className="mt-15px">
                <div className="flex flex-col items-center justify-center font-spoqaMedium text-20px space-y-5px text-gray-c8c8c8">
                    <div className="flex items-center h-19px">
                        <span className="text-golden-aa9264 font-spoqaBold mr-4px">Louie3</span>
                        <span>님의 회원정보를 수정합니다.</span>
                    </div>
                    <div className="flex items-center h-19px">아이디와 비밀번호 보안에 신경써주십시오.</div>
                </div>

                <div className="h-752px w-full rounded-4px shadow-card mt-30px p-px"
                  style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}>
                  <div className='h-full w-full bg-dark-323232 pt-40px px-175px'> 
                    <div className="w-full flex flex-col space-y-8px">
                        <div className="flex space-x-10px w-full">
                            <Title text="아이디" />
                            <div className="h-44px w-540px space-y-2 flex items-center flex-shrink-0 text-gray-c8c8c8 rounded-4px"
                              style={{ background: '#191817', boxShadow: 'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)' }}>
                                <label className=" font-spoqa text-16px pl-10px">louie3</label>
                                {/* <div className="border-b w-full border-gray-bebebe"></div> */}
                            </div>
                        </div>
                    </div>
                    {/* BREAK */}
                    <div className="w-full flex flex-col space-y-12px mt-39px">
                        <div className="flex space-x-10px w-full">
                            <Title text="비밀번호" />
                            <div className={`w-full h-44px overflow-hidden rounded-4px`} style={{ background: '#191817' }}>
                                  <input
                                    style={{ background: '#191817',  boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)', }}                      
                                    className="w-full font-spoqa text-16px outline-none text-gray-c8c8c8 pl-9px placeholder-gray-c8c8c8 h-42px rounded-4px " 
                                    onFocus={(e) => setSelectedInput(0)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    type="password"
                                />
                                <div style={{backgroundColor: selectedInput === 0 ? "#a67c52" : "#191817"}} className={`w-full h-2px`} />
                            </div>
                        </div>
                        <div className="h-13px flex items-center text-14px font-spoqaMedium text-gray-828282 ml-150px tracking-minus05">영문과 숫자 그리고 특수문자(ex. !@#$%^&)를 반드시 포함하여 6~16자로 입력해야 합니다.</div>
                    </div>
                    {/* BREAK */}
                    <div className="w-full flex flex-col space-y-10px mt-14px">
                        <div className="flex space-x-10px w-full">
                            <Title text="비밀번호 확인" />
                            <div className={` w-full h-44px overflow-hidden rounded-4px`} style={{ background: '#191817' }}>
                                <input 
                                    style={{ background: '#191817', boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)' }}                      
                                    className="w-full font-spoqa text-16px outline-none text-gray-c8c8c8 pl-9px placeholder-gray-c8c8c8 h-42px rounded-4px "  
                                    onFocus={(e) => setSelectedInput(1)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    type="password"
                                />
                                <div style={{backgroundColor: selectedInput === 1 ? "#a67c52" : "#191817"}} className={`w-full h-2px`} />
                            </div>
                        </div>
                    </div>
                    {/* BREAK */}
                    <div className="w-full flex flex-col space-y-12px mt-38px">
                        <div className="flex space-x-10px w-full overflow-hidden rounded-4px">
                            <Title text="환전 비밀번호" />
                            <div className={`w-full h-44px overflow-hidden`} style={{ background: '#191817' }}>
                                <input 
                                    style={{ background: '#191817', boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)' }}                      
                                    className="w-full font-spoqa text-16px outline-none text-gray-c8c8c8 pl-9px placeholder-gray-c8c8c8 h-42px rounded-4px overflow-hidden" 
                                    onFocus={(e) => setSelectedInput(2)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    type="password"
                                />
                                <div style={{backgroundColor: selectedInput === 2 ? "#a67c52" : "#191817"}} className={`w-full h-2px`} />
                            </div>
                        </div>
                        <div className="h-13px flex items-center text-14px font-spoqa text-gray-828282 ml-150px tracking-minus05">영문과 숫자 6~8자로 입력해야 합니다. (특수문자 포함시 변경불가)</div>
                    </div>
                    {/* BREAK */}
                    <div className="w-full flex flex-col space-y-10px mt-14px">
                        <div className="flex space-x-10px w-full">
                            <Title text="환전 비밀번호" />
                            <div className={`w-full h-44px overflow-hidden rounded-4px`} style={{ background: '#191817' }}>
                                <input 
                                    style={{ background: '#191817', boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)' }}                      
                                    className="w-full font-spoqa text-16px outline-none text-gray-c8c8c8 pl-9px placeholder-gray-c8c8c8 h-42px rounded-4px overflow-hidden"  
                                    onFocus={(e) => setSelectedInput(3)}
                                    onBlur={(e) => setSelectedInput(false)}
                                    type="password"
                                />
                                <div style={{backgroundColor: selectedInput === 3 ? "#a67c52" : "#191817"}} className={`w-full h-2px`} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full space-y-9px mt-39px ">
                        <div className="w-full flex flex-col space-y-9px">
                            <div className="flex space-x-10px w-full">
                                <Title text="레벨" />
                                <div className="h-44px w-540px space-y-2 flex items-center flex-shrink-0 text-gray-c8c8c8 rounded-4px"
                                  style={{ background: '#191817', boxShadow: 'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)' }}>
                                    <label className="font-spoqa text-16px pl-10px ">레벨 LV.1 (점수: 0) / 다음레벨 LV.2 (점수: 20)</label>
                                    {/* <div className="border-b w-full border-gray-bebebe"></div> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-9px">
                            <div className="flex space-x-10px w-full">
                                <Title text="스포츠" />
                                <div className="h-44px w-540px space-y-2 flex items-center flex-shrink-0 text-gray-c8c8c8 rounded-4px"
                                  style={{ background: '#191817', boxShadow: 'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)' }}>
                                    <label className="font-spoqa text-16px pl-10px ">Bronze</label>
                                    {/* <div className="border-b w-full border-gray-bebebe"></div> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-9px">
                            <div className="flex space-x-10px w-full">
                                <Title text="카지노" />
                                <div className="h-44px w-540px space-y-2 flex items-center flex-shrink-0 text-gray-c8c8c8 rounded-4px"
                                  style={{ background: '#191817', boxShadow: 'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)' }}>
                                    <label className=" font-spoqa text-16px pl-10px ">Bronze</label>
                                    {/* <div className="border-b w-full border-gray-bebebe"></div> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-9px">
                            <div className="flex space-x-10px w-full">
                                <Title text="슬롯" />
                                <div className="h-44px w-540px space-y-2 flex items-center flex-shrink-0 text-gray-c8c8c8 rounded-4px"
                                  style={{ background: '#191817', boxShadow: 'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)' }}>
                                    <label className=" font-spoqa text-16px pl-10px ">Bronze</label>
                                    {/* <div className="border-b w-full border-gray-bebebe"></div> */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col space-y-9px">
                            <div className="flex space-x-10px w-full">
                                <Title text="미니게임" />
                                <div className="h-44px w-540px space-y-2 flex items-center flex-shrink-0 text-gray-c8c8c8 rounded-4px"
                                  style={{ background: '#191817', boxShadow: 'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)' }}>
                                    <label className=" font-spoqa text-16px pl-10px ">Bronze</label>
                                    {/* <div className="border-b w-full border-gray-bebebe"></div> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
              </div>
                <div className="mt-20px w-full flex items-center justify-center mb-60px">
                    <button className="flex items-center justify-center w-192px h-52px rounded-2px bg-gradient-to-t from-red-4b0923 to-red-e88895  hover:filter hover:brightness-125 shadow-link">
                        <div className="flex items-center justify-center h-50px w-190px rounded-2px  bg-gradient-to-b from-red-e06446  to-red-96341d cursor-pointer">
                            <span className="font-spoqaMedium tracking-tight text-16px text-red-ffd2d2 text-shadow-5">수정하기</span>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default EditInfo
