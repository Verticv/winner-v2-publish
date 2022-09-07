import MyPageTitle from 'components/myPage/MyPageTitle'
import Pagination from 'components/myPage/Pagination'
import React, { useState } from 'react'
import AlertIcon from '../../images/myPage/alert.png'
import BankTable from './BankTable'
import MoneyExchangeTable from './tables/MoneyExchangeTable'

const MoneyExchange = () => {
    
    const [page, setPage] = useState(0)
    const [inputValue, setInputValue] = useState(null)
    const [passwordValue, setPasswordValue] = useState("")
    const [inputClicked, setInputClicked] = useState(null)
    var nf = new Intl.NumberFormat();

    const Title = ({text}) => (
        <div style={{width: "201px"}} className="bg-gray-272726 space-y-14px flex-shrink-0 h-44px pl-10px flex items-center rounded-4px">
            <div className="h-16px text-gray-ccc2b6 font-spoqaMedium text-16px">{text}</div>
        </div>
    )
    
    return (
        <div className="flex flex-col items-center">
            
            <MyPageTitle title="보유머니 환전" />

            <div className="mt-20px w-full h-157px rounded-4px border border-red-594c49 bg-red-413937 px-19px pt-17px">
                <div className="flex items-center h-26px space-x-10px">
                    <img src={AlertIcon} alt="" />
                    <span className="text-red-e65454 font-spoqaMedium text-20px tracking-tight">확인/필독사항</span>
                </div>
                <div className="mt-18px flex flex-col space-y-14px text-gray-ccc2b6 tracking-tight font-spoqaMedium text-16px">
                    <span className="h-14px"><span className="font-bold mr-5px">✓</span>  환전 신청 시 현재 보유머니에서 차감되며, 회원님의 계좌번호로 입금됩니다.</span>
                    <span className="h-14px"><span className="font-bold mr-5px">✓</span>  입금이 지연될 수 있으니 은행 점검 시간을 확인하신 후 점검 시간을 피해 신청해 주시기 바랍니다.</span>
                    <span className="h-14px"><span className="font-bold mr-5px">✓</span>  자세한 문의사항은 고객센터를 이용해 주시기 바랍니다.</span>
                </div>
            </div>

            <div style={{height: "474px",background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }} className="rounded-4px shadow-table overflow-hidden p-px mt-20px w-full">
              <div className='h-full w-full rounded-3px overflow-hidden bg-gray-323232 p-10px'>
                <div style={{height: "128px"}} className="w-full rounded-4px border border-gray-404040 bg-gray-252525">
                    <div className="text-20px font-spoqaMedium tracking-tight text-golden-highLight h-19px flex items-center mt-30px ml-55px">환전금액 입력</div>
                    <div className="text-16px font-spoqaMedium tracking-tight text-gray-c8c8c8 h-16px flex items-center ml-55px mt-14px" >
                        환전 신청을 완료하게 되면 보유머니에서 신청한 금액만큼 차감되며
                    </div>
                    <div className="text-16px font-spoqaMedium tracking-tight text-gray-c8c8c8 h-16px flex items-center ml-55px mt-3px" >
                        고객님의 계좌번호로 입금됩니다.
                    </div>
                </div>

                <div style={{width: "906px"}} className="ml-66px mt-27px flex flex-col">
                    <div className=" w-full flex space-x-10px ">
                        <Title text="현재 보유머니" />
                        <div style={{ background: '#191817', boxShadow: 'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)' }}
                          className="h-44px space-y-2px w-full flex items-center overflow-hidden text-gray-c8c8c8 rounded-4px">
                            <div className="h-16px font-spoqaMedium text-16px text-gray-c8c8c8 pl-9px">
                                <span className="font-spoqaBold text-red-e9441d">487,240</span>
                                <span style={{color:'#bfbfbf'}}>원</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-10px mt-50px">
                        <Title text="환전금액 입력" />
                        <div className="space-y-5px w-full h-44px overflow-hidden rounded-4px" style={{ background: '#191817' }}>
                            <form autoComplete="off">
                                <input 
                                    style={{ background: '#191817',  boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)', }}                      
                                    className="w-full text-gray-c8c8c8 font-spoqaMedium text-16px outline-none pl-9px placeholder-gray-c8c8c8 h-42px"
                                    placeholder="직접 입력시 숫자만 입력해 주세요."
                                    value={inputValue !==null ? nf.format(inputValue) : ""}
                                    onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                                    onFocus={() => setInputClicked(0)}
                                    onBlur={() => setInputClicked(null)}
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                /> 
                            </form>
                            <div className={`${inputClicked === 0 ? "bg-blue-r1ca7ec h-2px" : " h-px bg-gray-bebebe"} w-full`}></div>
                        </div>
                    </div>
                </div>

                <div style={{marginLeft: "277px"}} className={`${inputClicked === 0 ? "mt-19px" : "mt-20px"} flex space-x-5px w-full justify-start pr-115px`}>
                    <button 
                        style={{background:'linear-gradient(to top, #3f3d37, #a69685)'}}
                        className="flex items-center justify-center h-42px w-75px rounded-2px hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 10000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px rounded-2px cursor-pointer"style={{background:'linear-gradient(to top, #786d62, #4b4742)'}}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight">1만원</span>
                        </div>
                    </button>

                    <button 
                      style={{background:'linear-gradient(to top, #3f3d37, #a69685)'}}
                        className="flex items-center justify-center h-42px w-75px rounded-2px hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 30000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px rounded-2px cursor-pointer"style={{background:'linear-gradient(to top, #786d62, #4b4742)'}}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight">3만원</span>
                        </div>
                    </button>

                    <button 
                      style={{background:'linear-gradient(to top, #3f3d37, #a69685)'}}
                        className="flex items-center justify-center h-42px w-75px rounded-2px hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 50000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px rounded-2px cursor-pointer"style={{background:'linear-gradient(to top, #786d62, #4b4742)'}}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight">5만원</span>
                        </div>
                    </button>

                  <button 
                    style={{background:'linear-gradient(to top, #3f3d37, #a69685)'}}
                        className="flex items-center justify-center h-42px w-75px rounded-2px hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 100000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px rounded-2px cursor-pointer" style={{background:'linear-gradient(to top, #786d62, #4b4742)'}}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight">10만원</span>
                        </div>
                    </button>

                <button 
                  style={{background:'linear-gradient(to top, #3f3d37, #a69685)'}}
                        className="flex items-center justify-center h-42px w-75px rrounded-2px hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 300000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px rounded-2px cursor-pointer" style={{background:'linear-gradient(to top, #786d62, #4b4742)'}}>>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight">30만원</span>
                        </div>
                    </button>

                <button 
                  style={{background:'linear-gradient(to top, #3f3d37, #a69685)'}}
                        className="flex items-center justify-center h-42px w-75px rounded-2px hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 500000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px rounded-2px cursor-pointer" style={{background:'linear-gradient(to top, #786d62, #4b4742)'}}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight">50만원</span>
                        </div>
                    </button>

                <button 
                  style={{background:'linear-gradient(to top, #3f3d37, #a69685)'}}
                        className="flex items-center justify-center h-42px w-75px rounded-2px hover:opacity-75"
                        onClick={() => setInputValue(inputValue + 1000000)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px rounded-2px cursor-pointer" style={{background:'linear-gradient(to top, #786d62, #4b4742)'}}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight">100만원</span>
                        </div>
                    </button>

                    <button 
                className="flex items-center justify-center h-42px w-75px rounded-4px bg-gray-r171a1d hover:opacity-75" style={{ background: 'linear-gradient(to top, #4b3b09, #e8b888)' }}
                        onClick={() => setInputValue(0)}
                    >
                        <div className="flex items-center justify-center h-40px w-73px rounded-2px cursor-pointer" style={{background:'linear-gradient(to top, #a67c52, #7f5f3f)'}}>
                            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight">정정</span>
                        </div>
                    </button>
                </div>

                <div style={{width: "906px"}} className="ml-66px mt-42px flex flex-col">
                    <div className="flex space-x-10px">
                        <Title text="출금 비밀번호" />
                        <div className="space-y-5px w-full  h-44px overflow-hidden rounded-4px">
                            <input 
                                style={{ background: '#191817',  boxShadow:'inset 1px 1px 1px 0px rgba(0, 0, 0, 0.5)', }}                      
                                    className="w-full text-gray-c8c8c8 font-spoqaMedium text-16px outline-none pl-9px placeholder-gray-c8c8c8 h-42px"
                                placeholder="비밀번호를 입력하세요."
                                value={passwordValue}
                                onChange={e => setPasswordValue(e.target.value)}
                                onFocus={() => setInputClicked(1)}
                                onBlur={() => setInputClicked(null)}
                                type="password"
                            />
                            <div className={`${inputClicked === 1 ? "bg-blue-r1ca7ec h-2px" : " h-px bg-gray-bebebe"} w-full`}></div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <button style={{width: "228px",background: 'linear-gradient(to top, #3d4a8d, #88d9e8)'}} className={`mt-20px flex items-center justify-center h-52px rounded-2px hover:opacity-75`}>
                <div style={{width: "226px",background: 'linear-gradient(to top, #528ccd, #396084)'}} className="flex items-center justify-center h-50px rounded-2px cursor-pointer">
                    <span className="font-spoqaMedium tracking-tight text-16px text-blue-d6f3ff">신청하기</span>
                </div>
            </button>

            <div className="mt-40px">
                <MoneyExchangeTable />
            </div>

            <div className="mt-20px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

            <BankTable />
        </div>
    )
}

export default MoneyExchange
