import React from 'react'
import '../RadioButton.css'

const ExchangeHistoryTable = ({
    checkedState,
    setCheckedState
}) => {

    const RadioButton =({id}) => (
        <input 
            className="radio" 
            type="checkbox" 
            name="radio" 
            checked={checkedState[id]}
            onChange={() => handleOnChange(id)}
        />
    )

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }; 

    return (
        <table className="rounded-4px shadow-subNavbar overflow-hidden">
            <thead className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px border-b border-dark-252525 bg-dark-2e2e2e">
                <tr>
                    <td className="w-132px text-center pl-3px">선택</td>
                    <td className="w-242px text-center">신청일시</td>
                    <td className="w-268px text-center">환전금액</td>
                    <td className="w-170px text-center">처리일시</td>
                    <td className="w-170px text-center pl-12px">처리상태</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-dark-252525 bg-dark-323232">
                    <td className="w-132px font-robotoRegular h-56px text-center pl-2px pt-7px"><RadioButton id={0}/></td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-242px h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-268px h-56px text-right pr-70px font-robotoRegular">12,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-242px h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-157px h-56px text-center text-blue-r0056a6 pl-12px">완료</td>
                </tr>
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px border-b border-dark-252525 bg-dark-2e2e2e">
                    <td className="w-132px font-robotoRegular h-56px text-center pl-2px pt-7px"><RadioButton id={1}/></td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-242px h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-268px h-56px text-right pr-70px font-robotoRegular">100,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-242px h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-157px h-56px text-center pl-12px">취소</td>
                </tr>
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full bg-dark-323232">
                    <td className="w-132px font-robotoRegular h-56px text-center pl-2px pt-7px"><RadioButton id={2}/></td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-242px h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-268px h-56px text-right pr-70px font-robotoRegular">50,000</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-242px h-56px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{WebkitTextStroke:"0.2px"}} className="w-157px h-56px text-center text-blue-r0056a6 pl-12px">완료</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ExchangeHistoryTable
