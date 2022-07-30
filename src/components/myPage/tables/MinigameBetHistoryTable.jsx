import PopupControls from 'components/popups/PopupControls';
import React from 'react'
import LiveCasinoHistoryDetailPopup from '../popups/LiveCasinoHistoryDetailPopup';

const MinigameBetHistoryTable = ({array, checkedState, setCheckedState, isPopupOpen, setPopupOpen}) => {

    function Cells({ items }) {

        const detailButton = (
            <button 
                style={{height:"29px", width: "73px",background: 'linear-gradient(0deg, rgba(128,96,62,1) 0%, rgba(129,96,64,1) 5%, rgba(165,124,82,1) 97%)'}} 
                className="rounded-4px text-white font-spoqaMedium text-14px tracking-tight pt-2px hover:opacity-75 flex-shrink-0"
            >
                상세보기
            </button>
        ) 

        const handleOnChange = (position) => {
            const updatedCheckedState = checkedState.map((item, index) =>
              index === position ? !item : item
            );
            setCheckedState(updatedCheckedState);
        }; 

        return items.map((item,index) => (
            <div className={`${
                 index%2===0
                  ? "bg-dark-323232" 
                  : "bg-dark-2e2e2e"
                } font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full  flex items-center border-b border-dark-252525`}>
                <div style={{width: "51px"}} className="ml-20px text-center flex justify-center items-center">
                    <input
                        type="checkbox"
                        checked={checkedState[item.id]}
                        onChange={() => handleOnChange(item.id)}
                    />
                </div>
                <div style={{width: "86px", WebkitTextStroke:"0.2px"}} className="font-robotoRegular text-center">{item.number}</div>
                <div style={{width: "111px", WebkitTextStroke:"0.2px"}} className="font-robotoRegular text-center">{item.time}</div>
                <div style={{width: "98px", WebkitTextStroke:"0.2px"}} className="text-center">{item.type}</div>
                <div style={{width: "119px", WebkitTextStroke:"0.2px"}} className="text-center">{item.name}</div>
                <div style={{width: "84px", WebkitTextStroke:"0.2px"}} className="text-center">{item.history}</div>
                <div style={{width: "108px", WebkitTextStroke:"0.2px"}} className="font-robotoRegular text-right">{item.amount}</div>
                <div style={{width: "79px", WebkitTextStroke:"0.2px"}} className="text-center">{item.percentage}</div>
                <div style={{width: "123px", WebkitTextStroke:"0.2px", color: item.profit.includes("+") ? "#d52e2e" : "#585858"}} className="font-robotoRegular text-right">{item.profit}</div>
                <div style={{width: "80px", WebkitTextStroke:"0.2px", color: item.status === "승" ? "#d52e2e" : "#585858"}} className="text-center">{item.status}</div>
                <div style={{width: "90px"}} className="text-center pr-18px">
                    <PopupControls buttonChild={detailButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                        <LiveCasinoHistoryDetailPopup setPopupOpen={setPopupOpen} />
                    </PopupControls> 
                </div>
            </div>
        ))
    }

    return (
        <div className="shadow-subNavbar rounded-4px overflow-hidden">
            <div style={{height:"56px"}} className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px flex items-center pt-px border-b border-dark-252525 bg-dark-2e2e2e">
                <div style={{width: "51px"}} className="ml-20px text-center">선택</div>
                <div style={{width: "86px"}} className="text-center">베팅번호</div>
                <div style={{width: "111px"}} className="text-center">베팅시간</div>
                <div style={{width: "98px"}} className="text-center">게임종류</div>
                <div style={{width: "119px"}} className="text-center">게임구분</div>
                <div style={{width: "84px"}} className="text-center">베팅내역</div>
                <div style={{width: "108px"}} className="text-center">베팅금액</div>
                <div style={{width: "79px"}} className="text-center">배당률</div>
                <div style={{width: "123px"}} className="text-center">적중/손실금액</div>
                <div style={{width: "80px"}} className="text-center">상태</div>
                <div style={{width: "90px"}} className="text-center pr-18px">보기</div>
            </div>
            <div className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <Cells items={array} />
            </div>
        </div>      
    )
}

export default MinigameBetHistoryTable
