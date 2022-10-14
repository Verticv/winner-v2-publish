import React from 'react'

const CouponHistoryTable = () => {
    return (
        <div
          style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
          className="rounded-4px shadow-table overflow-hidden p-px">
            <table className="rounded-3px overflow-hidden">
                <thead className="font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px  border-b border-dark-252525 bg-dark-2e2e2e ">
                <tr>
                    <td style={{maxWidth:'292px',}}  className="w-292px text-center pl-10px pr-4px">쿠폰명</td>
                    <td className="w-119px text-center">쿠폰금액</td>
                    <td className="w-140px text-center">받는회원아이디</td>
                    <td className="w-137px text-center">보낸일시</td>
                    <td className="w-141px text-center">처리상태</td>
                    <td className="w-88px text-center">발급일</td>
                    <td className="w-124px text-center">만료일</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-323232">
                    <td style={{ maxWidth: '292px' }} className="w-292px text-center">
                        <div style={{ maxWidth: '292px' }} className="w-292px text-center truncate pl-10px pr-4px">테스트쿠폰</div>
                    </td>
                    <td className="w-119px text-right text-red-e9441d font-robotoRegular pr-10px">10,000</td>
                    <td className="w-140px text-center"><div className='w-140px truncate px-10px'>eric123</div></td>
                    <td className="w-137px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{color:"#e16eff"}} className="w-141px text-center">선물완료</td>
                    <td className="w-88px text-center font-robotoRegular">2021-06-29</td>
                    <td className="w-124px text-center font-robotoRegular">2021-07-29</td>
                </tr>
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px  border-b border-dark-252525 bg-dark-2e2e2e">
                    <td style={{ maxWidth: '292px' }} className="w-292px text-center">
                        <div style={{ maxWidth: '292px' }} className="w-292px text-center truncate pl-10px pr-4px">테스트쿠폰</div>
                    </td>
                    <td className="w-119px text-right text-red-e9441d font-robotoRegular pr-10px">10,000</td>
                    <td className="w-140px text-center"><div className='w-140px truncate px-10px'>eric123</div></td>
                    <td className="w-137px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{color:"#e16eff"}} className="w-141px text-center">선물완료</td>
                    <td className="w-88px text-center font-robotoRegular">2021-06-29</td>
                    <td className="w-124px text-center font-robotoRegular">2021-07-29</td>
                </tr>
                <tr className="font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px bg-dark-323232">
                    <td style={{ maxWidth: '292px' }} className="w-292px text-center">
                        <div style={{ maxWidth: '292px' }} className="w-292px text-center truncate pl-10px pr-4px">테스트쿠폰</div>
                    </td>
                    <td className="w-119px text-right text-red-e9441d font-robotoRegular pr-10px">10,000</td>
                    <td className="w-140px text-center"><div className='w-140px truncate px-10px'>eric123</div></td>
                    <td className="w-137px text-center font-robotoRegular">2021-06-29 15:45:41</td>
                    <td style={{color:"#e16eff"}} className="w-141px text-center">선물완료</td>
                    <td className="w-88px text-center font-robotoRegular">2021-06-29</td>
                    <td className="w-124px text-center font-robotoRegular">2021-07-29</td>
                </tr>
            </tbody>
        </table>
      </div>        
    )
}

export default CouponHistoryTable
