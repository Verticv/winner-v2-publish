import PopupControls from 'components/popups/PopupControls';
import React from 'react'
import LiveCasinoHistoryDetailPopup from '../popups/LiveCasinoHistoryDetailPopup';

const AllHistoryTable = ({array, checkedState, setCheckedState, isPopupOpen, setPopupOpen}) => {

    function Cells({ items }) {

        const detailButton = (
            <button 
                style={{height:"29px", width: "73px",background: '#826140',boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.6)'}} 
                className="rounded-4px text-golden-highLight font-spoqaMedium text-14px tracking-tight pt-2px flex-shrink-0 hover:filter hover:brightness-125"
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
            <tr className={`${
                index%2===0
                  ? "bg-dark-323232" 
                  : "bg-dark-2e2e2e"
                } font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px border-b border-dark-252525 last:border-b-0`}>
                <td style={{width: "92px"}} className="text-center pt-7px">
                    <input
                        type="checkbox"
                        checked={checkedState[item.id]}
                        onChange={() => handleOnChange(item.id)}
                    />
                </td>
                <td style={{width: "74px"}} className="font-robotoRegular text-center">{item.number}</td>
                <td style={{width: "183px"}} className="font-robotoRegular text-center">{item.time}</td>
                <td style={{width: "146px"}} className="text-center">{item.type}</td>
                <td style={{width: "115px"}} className="text-center">{item.name}</td>
                <td style={{width: "119px"}} className="font-robotoRegular text-right">{item.amount}</td>
                <td style={{width: "140px", color: item.profit.includes("+") ? "#e65454" : "#c8c8c8"}} className="font-robotoRegular text-right">{item.profit}</td>
                <td style={{width: "87px", color: item.status === "승" ? "#e65454" : "#c8c8c8"}} className="text-center">{item.status}</td>
                <td style={{width: "90px"}} className="text-center pr-17px">
                    <PopupControls buttonChild={detailButton} isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen}>
                        <LiveCasinoHistoryDetailPopup setPopupOpen={setPopupOpen} />
                    </PopupControls> 
                </td>
            </tr>
        ))
    }

  return (
      <div
        style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
        className="rounded-4px shadow-navbar overflow-hidden p-px">
        <table className="rounded-3px overflow-hidden">
            <thead className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px  border-b border-dark-252525 bg-dark-2e2e2e ">
                <tr>
                    <td style={{width: "92px"}} className="text-center">선택</td>
                    <td style={{width: "74px"}} className="text-center">베팅번호</td>
                    <td style={{width: "183px"}} className="text-center">베팅시간</td>
                    <td style={{width: "146px"}} className="text-center">게임종류</td>
                    <td style={{width: "115px"}} className="text-center">게임구분</td>
                    <td style={{width: "119px"}} className="text-center">베팅금액</td>
                    <td style={{width: "140px"}} className="text-center">적중/손실금액</td>
                    <td style={{width: "87px"}} className="text-center">상태</td>
                    <td style={{width: "90px"}} className="text-center pr-17px">보기</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <Cells items={array} />
            </tbody>
      </table>  
    </div>      
    )
}

export default AllHistoryTable
