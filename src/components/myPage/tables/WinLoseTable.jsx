import React from 'react'

const WinLoseTable = ({
    checkedState,
    setCheckedState
}) => {

    const ExampleArray = [
        {
            id: 0,
            number: 1,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "스포츠",
            amount: "78,308",
            status: "진행중인 금액"
        },
        {
            id: 1,
            number: 2,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "미니게임",
            amount: "+9,900",
            status: "정산완료"
        },
        {
            id: 2,
            number: 3,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "스포츠",
            amount: "+32,510",
            status: "정산완료"
        },
        {
            id: 3,
            number: 4,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "에볼루션",
            amount: "-560,500",
            status: "정산완료"
        },
        {
            id: 4,
            number: 5,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "미니게임",
            amount: "+78,308",
            status: "정산완료"
        },
        {
            id: 5,
            number: 6,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "스포츠",
            amount: "-78,308",
            status: "정산완료"
        },
        {
            id: 6,
            number: 7,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "스포츠",
            amount: "+78,308",
            status: "정산완료"
        },
        {
            id: 7,
            number: 8,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "스포츠",
            amount: "+78,308",
            status: "정산완료"
        },
        {
            id: 8,
            number: 9,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "스포츠",
            amount: "+78,308",
            status: "정산완료"
        },
        {
            id: 9,
            number: 10,
            startDate: "2021-06-29",
            endDate: "2021-07-29",
            type: "스포츠",
            amount: "+78,308",
            status: "정산완료"
        },
    ]

    const RadioButton = ({id}) => (
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

    function Cells({ items }) {
        return items.map((item,index) => (
            <tr 
                className={`${
                index%2===0
                  ? "bg-dark-323232" 
                  : "bg-dark-2e2e2e"
                } font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-55px  border-b border-dark-252525`}>
                <td className="font-robotoRegular h-55px text-center flex items-center justify-center pt-3px"><RadioButton id={item.id}/></td>
                <td className="h-55px text-center font-robotoRegular pt-2px">{item.number}</td>
                <td className="h-55px text-center font-robotoRegular pt-2px">{item.startDate}</td>
                <td className="h-55px text-center font-robotoRegular pt-2px">{item.endDate}</td>
                <td className="h-55px text-center pt-2px">{item.type}</td>
               <td 
                    style={{color: item.amount.includes("+") ? "#e65454" : item.amount.includes("-") ? "#4c98ff" : "#c8c8c8"}}
                    className="h-55px text-right font-robotoRegular pt-2px pr-82px"
                >
                    {item.amount}
                </td>
                <td className="h-55px text-center pt-2px">{item.status}</td> 
            </tr>
        ));
    }

    return (
      <div
        style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
          className="rounded-4px shadow-table overflow-hidden p-px flex flex-col">
            <table className="rounded-3px overflow-hidden rounded-b-none table-auto w-full">
                <thead className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-55px border-b border-dark-252525 bg-dark-2e2e2e ">
                    <tr>
                        <td className="text-center pt-2px" style={{width:"96px"}}>선택</td>
                        <td className="text-center pt-2px" style={{width:"67px"}}>번호</td>
                        <td className="text-center pt-2px" style={{width:"176px"}}>정산시작일</td>
                        <td className="text-center pt-2px" style={{width:"122px"}}>정산종료일</td>
                        <td className="text-center pt-2px" style={{width:"288px"}}>분류</td>
                        <td className="flextext-left pt-2px pl-18px" style={{width:"164px"}}>금액</td>
                       <td className="text-center pt-2px" style={{width:"125px"}}>처리상태</td>
                    </tr>
                </thead>
                <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                    <Cells items={ExampleArray} />
                </tbody>
            </table>
            <div className="flex bg-gray-323232 font-spoqaMedium text-14px tracking-tight text-gray-r454545 h-55px rounded-b-3px">
                <div className="w-full bg-gray-414141 h-55px flex items-center justify-center font-spoqaMedium text-16px tracking-tight text-gray-ccc2b6 border-r border-dark-252525 rounded-b-3px rounded-br-none">합계</div>
                <div className="w-full h-55px text-center flex items-center justify-center font-roboto tracking-tight text-red-e65454 text-16px rounded-b-3px rounded-tl-none"><span className='flex ml-40px'>+120,718</span></div>
            </div>
        </div>
    )
}

export default WinLoseTable
