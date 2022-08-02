import React from 'react'

const CouponRequestTable = () => {

    const ExampleArray = [
        {
            id: 0,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 1,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용완료",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 2,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "기간만료",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 3,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "회수쿠폰",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 4,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 5,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 6,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 7,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 8,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 9,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            state: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
    ]

    function Cells({ items }) {
        return items.map((item,index) => (
            <tr 
                className={`${
                index%2===0
                  ? "bg-dark-323232" 
                  : "bg-dark-2e2e2e"
                } font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525`}
            >
                <td style={{WebkitTextStroke:"0.2px"}} className="w-292px text-center">{item.name}</td>
                <td style={{WebkitTextStroke:"0.2px"}} className="w-119px text-right text-red-e65454 font-robotoRegular pr-20px">{item.amount}</td>
                <td style={{WebkitTextStroke:"0.2px"}} className="w-140px text-center">{item.username}</td>
                <td 
                    style={{
                        color: item.state === "사용가능" 
                        ? "#ff1237"
                        : item.state ==="사용완료"
                        ? "#0056a6"
                        : item.state === "회수쿠폰"
                        ? "#279140"
                        : "#454545"
                        , WebkitTextStroke:"0.2px"
                    }} 
                    className="w-141px text-center"
                >
                    {item.state}
                </td>
                <td style={{WebkitTextStroke:"0.2px"}} className="w-88px text-center font-robotoRegular">{item.date}</td>
                <td style={{WebkitTextStroke:"0.2px"}} className="w-124px text-center font-robotoRegular">{item.expireDate}</td>
            </tr>
        ));
    }

    return (
        <table className="rounded-4px shadow-navbar overflow-hidden">
            <thead className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px  border-b border-dark-252525 bg-dark-2e2e2e ">
                <tr>
                    <td style={{width: "371px"}} className="w-292px text-center">쿠폰명</td>
                    <td style={{width: "163px"}} className="w-119px text-center">쿠폰금액</td>
                    <td style={{width: "135px"}} className="w-140px text-center">보낸회원아이디</td>
                    <td style={{width: "118px"}} className="w-141px text-center">처리상태</td>
                    <td style={{width: "135px"}} className="w-88px text-center">발급일</td>
                    <td style={{width: "121px"}} className="w-124px text-center">만료일</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <Cells items={ExampleArray} />
            </tbody>
        </table> 
    )
}

export default CouponRequestTable
