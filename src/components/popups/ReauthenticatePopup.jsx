import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import CloseIcon from '../../images/popups/close_icon.png'
import LoginIcon from '../../images/popups/edit_info_icon.png'
import Username from '../../images/popups/username.png'
import Password from '../../images/popups/password.png'

const ReauthenticatePopup = ({ setPopupOpen, setSelectedTab }) => {

    const history = useHistory();
    const [selectedInput, setSelectedInput] = useState()

    const username = "Louie3examplelength"
    return (
        <div style={{ height: '526px', width: '450px', backgroundColor: '#323231', borderRadius: '10px', borderWidth: '1px', borderColor: '#1f1f1e' }} className="relative shadow-popup flex flex-col items-center">
            <button className="absolute top-0 right-0 mt-22px mr-22px cursor-pointer z-20 hover:opacity-75" onClick={() => setPopupOpen(false)}>
                <img src={CloseIcon} alt="close_icon" />
            </button>
            <div style={{ marginTop: '-64px' }} className="absolute w-630px -mt-79px flex justify-center">
                <div className="flex items-center justify-center h-158px w-158px">
                    <img src={LoginIcon} alt="login_icon" />
                </div>
            </div>
            {/* BREAK */}
            <div className="w-full h-full flex flex-col items-center pt-110px space-y-40px">

                <div className="flex flex-col items-center justify-center font-spoqaMedium text-20px space-y-5px">
                    <div className="flex items-center h-19px">
                        <p style={{ maxWidth: '160px', textOverflow: 'unset', whiteSpace: 'nowrap', overflow: 'hidden' }} className="text-golden-aa9264 font-spoqaBold">{username.length > 12 ? `${username.slice(0, 12)}...` : username}</p>
                        <span className='text-gray-c8c8c8'>님의 회원정보를 수정합니다.</span>
                    </div>

                    <div className="flex items-center h-19px text-gray-c8c8c8">비밀번호를 다시 입력해 주세요.</div>
                </div>

                <div style={{ width: '390px', height: '64px', backgroundColor: '#191817', borderRadius: '4px', boxShadow: 'inset 1px 1px 1px 0px rgba(0, 0, 0, 1)' }} className="flex items-center flex-shrink-0 mt-48px py-4px">
                    <img src={Username} alt="" className="ml-19px" />
                    <div
                        style={{ color: '#948d81', backgroundColor: '#191817', lineHeight: '1.15' }}
                        className="flex items-center text-20px outline-none font-spoqa w-full h-full pl-18px placeholder-gray-r948d81 pt-3px rounded-4px"
                        onFocus={(e) => {
                            e.target.placeholder = ""
                            setSelectedInput(0)
                        }}
                        onBlur={(e) => {
                            e.target.placeholder = "아이디"
                            setSelectedInput(false)
                        }}
                    >
                        <p style={{maxWidth: '314px', textOverflow: 'unset', whiteSpace: 'nowrap', overflow: 'hidden'}}>{username}</p></div>
                    {/* <div className={`${selectedInput === 0 ? "bg-blue-r1ca7ec h-2px -mb-px" : "bg-gray-bebebe h-px"} w-full`} /> */}
                </div>
                <div style={{ width: '390px', height: '64px', backgroundColor: '#191817', borderRadius: '4px', boxShadow: 'inset 1px 1px 1px 0px rgba(0, 0, 0, 1)' }} className="relative flex items-center flex-shrink-0 mt-20px py-4px overflow-hidden">
                    <img src={Password} alt="" className="ml-21px" />

                    <input
                        style={{ color: '#948d81', backgroundColor: '#191817', borderRadius: '4px' }}
                        className="text-20px outline-none font-spoqa w-full h-full pl-19px placeholder-gray-r948d81 pt-3px"
                        placeholder={"비밀번호"}
                        type="password"
                        onFocus={(e) => {
                            e.target.placeholder = ""
                            setSelectedInput(1)
                        }}
                        onBlur={(e) => {
                            e.target.placeholder = "비밀번호"
                            setSelectedInput(false)
                        }}
                    />
                    <div style={{ backgroundColor: selectedInput === 1 ? "#a67c52" : "#191817" }} className={`absolute bottom-0 w-full h-2px`} />

                </div>
                <button
                    style={{ height: '58px', width: '390px', borderRadius: '2px', boxShadow: "0 2px 6px #00000090", textShadow: "0 0 6px #000000", color: '#ffdfbd', background: 'linear-gradient(to bottom, #a67c52, #80603f)' }}
                    className="text-20px tracking-tighter font-spoqaMedium text-white hover:opacity-75 mt-40px flex-shrink-0"
                    onClick={() => {
                        history.push("/mypage/edit-info")
                        setSelectedTab("/mypage/edit-info")
                    }}
                >
                    확인
                </button>
            </div>
        </div>
    )
}

export default ReauthenticatePopup
