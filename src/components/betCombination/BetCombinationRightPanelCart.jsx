import React, { useState } from 'react'
import CheckboxIcon from '../../images/betCombination/checkbox.png'
import CancelIcon from '../../images/betCombination/cancel.png'
import BetIcon from '../../images/betCombination/bet_icon.png'
import CancelIconGray from '../../images/betCombination/cancel_gray.png'

const BetCombinationRightPanelCart = ({ addedCard, setAddedCard }) => {

    const [showConfirm, setShowConfirm] = useState(false)
    const [inputValue, setInputValue] = useState(null)
    var nf = new Intl.NumberFormat();

    const ConfirmCard = () => (
        <div
            style={{ height: "58px", backgroundColor: "#987959", borderColor: "#fde1a4", borderRadius: "8px" }}
            className="relative w-full rounded-4px border"
        >
            <div className="flex">
                <img src={CheckboxIcon} alt="" className="mt-8px ml-9px" />
                <p className="text-14px text-white tracking-tight font-spoqaMedium h-14px flex items-center mt-11px ml-6px">베팅이 수락되었습니다.</p>
            </div>

            <div className="flex">
                <p className="text-14px text-white tracking-tight font-spoqaMedium h-14px flex items-center mt-7px ml-9px">티켓번호</p>
                <p style={{ color: "#fde1a4" }} className="text-14px text-white tracking-tight font-roboto h-11px flex items-center mt-9px ml-5px">189106964</p>
            </div>

            <img src={CancelIcon} alt="" className="absolute right-10px top-10px cursor-pointer" onClick={() => setShowConfirm(false)} />
        </div>
    )

    const handleRemoveItem = (e) => {
        const id = e.target.getAttribute("name")
        setAddedCard(addedCard.filter(item => item.id !== id));
    };

    function BetCard({ items }) {
        return items.map(item => (
            <div
                style={{ borderRadius: "8px", background: "linear-gradient(to top, #21211f , #7b746d )" }}
                className="w-full p-px"
                key={item.id}
            >
                <div
                    style={{
                        borderRadius: "7px",
                        background: "linear-gradient(to left, #2e2e2e , #4b4b49 )"
                    }}
                    className="relative w-full pt-10px pb-11px"
                >
                    <p
                        style={{ width: "263px", color: item.value === "right" ? "#e65454" : "#ffffff", lineHeight: "1.2" }}
                        className="text-14px font-spoqaBold tracking-tight text-white  flex items-center ml-9px leading-none mt-px break-all"
                    >
                        {item.special === "FK Haugesund" ? 'FK Haugesund' : item.value === "right" ? "SV Kuchl" : "FK Haugesund FK Haugesund FK Haugesund FK Haugesund FK Haugesund FK Haugesund"}
                    </p>
                    <p
                        style={{ width: "263px", color: item.value === "right" ? "#ffffff" : "#e65454", lineHeight: "1.2" }}
                        className="text-14px font-spoqaBold tracking-tight  flex items-center mt-3px ml-8px leading-none break-all"
                    >
                        {item.special === "FK Haugesund" ? '스트룀스고세 IF' : item.value === "right" ? "FC Blau Weiss Linz" : "스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF 스트룀스고세 IF"}
                    </p>
                    <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8  flex items-center mt-13px ml-8px leading-none break-all" style={{ width: "224px", lineHeight: "1.2" }}>
                        {item.special === "FK Haugesund" ? '축구 - 승무패 (게임)'  : item.value === "right" ? '축구 - 승무패 (게임)' : '축구 - 승무패 (게임) 축구 - 승무패 (게임) 축구 - 승무패 (게임) 축구 - 승무패 (게임)축구 - 승무패 (게임)'}
                    </p>

                    <img src={CancelIconGray} alt="" name={item.id} className="absolute top-10px right-8px cursor-pointer hover:opacity-75" onClick={handleRemoveItem} />
                    <div className="flex absolute bottom-12px right-10px text-13px tracking-tight font-spoqaMedium h-13px items-center text-gray-c8c8c8">
                        <p>{item.value === "right" ? "승 @" : "패 @"}</p>
                        <p
                            style={{ color: item.value === "right" ? "#e65454" : "#4c98ff" }}
                            className="ml-2px leading-none"
                        >
                            {item.value === "right" ? "2.26" : "3.47"}
                        </p>
                    </div>
                </div>
            </div>
        ));
    }

    const [buttonClicked, setButtonClicked] = useState("")

    const BetAmountButton = ({ amount, inputValue, setInputValue }) => (
        <button
            style={{
                width: "95px",
                background: "linear-gradient(to bottom, #6b6865, #393835)",
                height: "44px"
            }}
            className="flex items-center justify-center rounded-2px p-px hover:brightness-125 filter shadow-link"
            onPointerDown={() => setButtonClicked(amount)}
            onPointerUp={() => {
                setInputValue(inputValue + amount)
                setButtonClicked(null)
            }}
            onPointerOut={() => setButtonClicked(null)}
        >
            <div
                style={{
                    background: buttonClicked === amount ? "linear-gradient(to bottom, #545452, #323231)" : "linear-gradient(to bottom, #545452, #323231)",
                }}
                className="flex items-center justify-center  rounded-2px cursor-pointer w-full h-full"
            >
                <span className="font-roboto tracking-tight text-16px text-golden-highLight pt-px text-shadow-5">{nf.format(amount)}</span>
            </div>
        </button>
    )


    return (
        <div style={{ width: "307px" }}>
            <div className="bg-gray-262626 pb-6px px-3px flex flex-col">
                {showConfirm && (
                    <>
                        <ConfirmCard />
                        <div className="mb-2px"></div>
                    </>
                )}

                {!addedCard.length ? (
                    <div style={{ height: "38px", backgroundColor: "#1a1a1a" }} className="w-full rounded-md border border-gray-404040 flex items-center px-8px">
                        <p className="text-14px font-spoqaMedium tracking-tight text-gray-929292">베팅을 선택하세요.</p>
                    </div>
                ) : (
                    <div className="space-y-4px">
                        <BetCard items={addedCard} />
                    </div>
                )}
            </div>
            <div className="h-47px border-b border-t border-gray-1e1e1e flex items-center justify-between pl-11px pr-16px pt-px bg-gray-323232">
                <p className="text-16px font-spoqaMedium tracking-tight text-gray-c8c8c8">보유금액</p>
                <p className="text-16px font-robotoBold tracking-tight text-blue-4c98ff">3,522,170</p>
            </div>

            <div className="h-34px border-b border-gray-1e1e1e flex  pl-11px pr-16px items-center justify-between bg-gray-262626 pt-px">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r7b7b7b">베팅 최소금액</p>
                <p style={{ color: "#e65454" }} className="text-14px font-robotoRegular tracking-tight">5,000</p>
            </div>

            <div className="h-34px border-b border-gray-1e1e1e flex pl-11px pr-16px items-center justify-between bg-gray-262626 pt-px">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r7b7b7b">베팅 최대금액</p>
                <p className="text-14px font-robotoRegular tracking-tight text-gray-c8c8c8">7,000,000</p>
            </div>

            <div className="h-34px border-b border-gray-1e1e1e flex pl-11px pr-16px items-center justify-between bg-gray-262626 pt-px">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-r7b7b7b">적중 최대금액</p>
                <p className="text-14px font-robotoRegular tracking-tight text-gray-c8c8c8">20,000,000</p>
            </div>

            <div className="h-47px border-b border-gray-252525 flex items-center justify-between pl-11px pr-16px pt-2px bg-gray-323232">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-c8c8c8">배당률합계</p>
                <p style={{ color: "#f26522" }} className="text-14px font-roboto tracking-tight text-blue-r0056a6">1.00</p>
            </div>

            <div className="h-47px border-b border-gray-252525 flex items-center justify-between pl-11px pr-10px bg-gray-323232">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-c8c8c8 pt-2px">베팅금액</p>
                <input
                    style={{ color: "#e65454", width: "191px", height: "32px", backgroundColor: "#1a1a1a" }}
                    className="flex items-center justify-end px-5px border rounded-4px border-gray-404040 text-14px font-roboto tracking-tight outline-none text-right pt-2px"
                    placeholder="0"
                    value={nf.format(inputValue)}
                    onChange={e => setInputValue(e.target.value.replace(/,/g, ''))}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                />
            </div>

            <div className="h-47px  flex items-center justify-between pl-11px pr-16px pt-2px bg-gray-323232">
                <p className="text-14px font-spoqaMedium tracking-tight text-gray-c8c8c8">적중예상금액</p>
                <p className="text-14px font-roboto tracking-tight text-blue-4c98ff">11,000</p>
            </div>

            <div style={{ height: "213px" }} className="w-full bg-gray-262626 p-10px">

                <div style={{ width: "287px" }} className="flex flex-col space-y-4px w-full">
                    <div className="flex space-x-4px">
                        <BetAmountButton amount={5000} inputValue={inputValue} setInputValue={setInputValue} />
                        <BetAmountButton amount={10000} inputValue={inputValue} setInputValue={setInputValue} />
                        <BetAmountButton amount={50000} inputValue={inputValue} setInputValue={setInputValue} />
                    </div>
                    <div className="flex space-x-4px">
                        <BetAmountButton amount={100000} inputValue={inputValue} setInputValue={setInputValue} />
                        <BetAmountButton amount={500000} inputValue={inputValue} setInputValue={setInputValue} />
                        <BetAmountButton amount={1000000} inputValue={inputValue} setInputValue={setInputValue} />
                    </div>
                </div>

                <div className="flex space-x-4px mt-4px">
                    <button
                        style={{
                            width: "95px",
                            background: "linear-gradient(to bottom, #e8b888, #4b3b09)",
                            height: "46px"
                        }}
                        className="flex items-center justify-center rounded-2px p-px hover:brightness-125 filter shadow-link"
                        onClick={() => setInputValue(inputValue / 2)}
                    >
                        <div
                            style={{
                                borderRadius: "3px",
                                background: "linear-gradient(to top, #7f5f3f, #a67c52)",
                                borderColor: "#747679"
                            }}
                            className="flex items-center justify-center h-full w-full  rounded-2px  pt-px cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-16px  text-golden-highLight  pt-2px text-shadow-5">하프</span>
                        </div>
                    </button>
                    <button
                        style={{
                            width: "95px",
                            background: "linear-gradient(to bottom, #e8b888, #4b3b09)",
                            height: "46px"
                        }}
                        className="flex items-center justify-center rounded-2px p-px hover:brightness-125 filter shadow-link"
                        onClick={() => setInputValue(3522170)}
                    >
                        <div
                            style={{
                                borderRadius: "3px",
                                background: "linear-gradient(to top, #7f5f3f, #a67c52)",
                                borderColor: "#747679"
                            }}
                            className="flex items-center justify-center h-full w-full rounded-2px p-px cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-16px text-golden-highLight pt-2px text-shadow-5">최대</span>
                        </div>
                    </button>
                    <button
                        style={{
                            width: "95px",
                            background: "linear-gradient(to bottom, #e8b888, #4b3b09)",
                            height: "46px"
                        }}
                        className="flex items-center justify-center rounded-2px p-px hover:brightness-125 filter shadow-link"
                        onClick={() => setInputValue(0)}
                    >
                        <div
                            style={{
                                borderRadius: "3px",
                                background: "linear-gradient(to top, #7f5f3f, #a67c52)",
                                borderColor: "#747679"
                            }}
                            className="flex items-center justify-center h-full  rounded-2px w-full  cursor-pointer"
                        >
                            <span className="font-spoqaMedium tracking-tight text-16px text-golden-highLight pt-2px text-shadow-5">정정</span>
                        </div>
                    </button>
                </div>

                <button
                    style={{ width: "287px" }}
                    className="mt-5px flex items-center justify-center h-46px  rounded-2px bg-gradient-to-t from-blue-3d4a8d to-blue-88d9e8 p-px hover:filter hover:brightness-125 shadow-link"
                    onClick={() => {
                        setAddedCard([])
                        setShowConfirm(true)
                    }}
                >
                    <div style={{ width: "285px" }} className="flex items-center justify-center h-44px rounded-2px bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer">
                        <img src={BetIcon} className="mt-2px" alt="" />
                        <span className="ml-2px font-spoqaMedium tracking-tight text-16px text-blue-d6f3ff pt-px text-shadow-5">베팅하기</span>
                    </div>
                </button>

            </div>
        </div>
    )
}

export default BetCombinationRightPanelCart
