import React from 'react'

const CouponUsageTable = () => {

    const ExampleArray = [
        {
            id: 0,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 1,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 2,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 3,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 4,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 5,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 6,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 7,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 8,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
        {
            id: 9,
            name: "테스트쿠폰",
            amount: "10,000",
            username: "eric123",
            status: "사용가능",
            date: "2021-06-29",
            expireDate: "2021-07-29"
        },
    ]

    const UseButton = () => (
        <button style={{height:"29px", width: "73px",background: 'linear-gradient(0deg, rgba(128,96,62,1) 0%, rgba(129,96,64,1) 5%, rgba(165,124,82,1) 97%)'}} 
                className="rounded-4px text-golden-highLight font-spoqaMedium text-14px tracking-tight pt-2px hover:opacity-75 flex-shrink-0">
            <span className="">사용하기</span>
        </button>
    )

    function Cells({ items }) {
        return items.map((item,index) => (
            <tr 
               className={`${
                index%2===0
                  ? "bg-dark-323232" 
                  : "bg-dark-2e2e2e"
                } font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525`}
            >
                    <td className="w-313px text-center">{item.name}</td>
                    <td className="w-172px text-right text-red-e65454 pr-20px font-robotoRegular">{item.amount}</td>
                    <td className="w-111px text-center">{item.username}</td>
                    <td className="w-108px text-center  text-red-e65454">{item.status}</td>
                    <td className="w-122px text-center font-robotoRegular">{item.date}</td>
                    <td className="w-111px text-center font-robotoRegular">{item.expireDate}</td>
                    <td className="w-103px pl-13px"><UseButton /></td>
                </tr>
        ));
    }
    

    return (
        <table className="rounded-4px shadow-navbar overflow-hidden">
            <thead className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px  border-b border-dark-252525 bg-dark-2e2e2e ">
                <tr>
                    <td className="w-313px text-center">쿠폰명</td>
                    <td className="w-172px text-center">쿠폰금액</td>
                    <td className="w-111px text-center">보낸회원아이디</td>
                    <td className="w-108px text-center">처리상태</td>
                    <td className="w-122px text-center">발급일</td>
                    <td className="w-111px text-center">만료일</td>
                    <td className="w-103px text-center">쿠폰사용</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                <Cells items={ExampleArray} />
            </tbody>
        </table>   
    )
}

export default CouponUsageTable
