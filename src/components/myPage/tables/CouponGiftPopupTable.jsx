import React, { useState } from 'react'

const CouponGiftPopupTable = () => {
    const [isChecked , setChecked] = useState(null)

    const RadioButton = ({id}) => (
        <input 
            className="radio" 
            type="radio" 
            name="radio" 
            checked={isChecked === id}
            onChange={() => setChecked(id)}
        />
    )

  return (
    <div className="overflow-auto  shadow-table w-550px h-330px rounded-4px ">
      <div className="flex flex-col justify-center rounded-4px p-px"
      style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}>
        <div className='flex flex-col justify-center rounded-4px  bg-gray-323231'>
            <div className="bg-gray-2b2b2a rounded-t-4px font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px border-b border-gray-252525 flex items-center">
                <div>
                    <td className="w-143px text-center">선택</td>
                    <td className="w-198px text-center">아이디</td>
                    <td className="w-199px text-center">별명</td>
                </div>
            </div>
            <div style={{height:"280px"}} className="w-full text-585858 text-14px tracking-tight font-spoqa">
                <div className="bg-gray-2e2e2e font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-gray-252525 flex items-center">
                    <td className="w-143px text-center pt-6px"><RadioButton id={0}/></td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
                <div className="bg-gray-2b2b2a font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-gray-252525 flex items-center">
                    <td className="w-143px text-center pt-6px"><RadioButton id={1}/></td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
                <div className="bg-gray-2e2e2e font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-gray-252525 flex items-center">
                    <td className="w-143px text-center pt-6px"><RadioButton id={2}/></td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
                <div className="bg-gray-2b2b2a font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-gray-252525 flex items-center">
                    <td className="w-143px text-center pt-6px"><RadioButton id={3}/></td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
                <div className="bg-gray-2e2e2e font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-gray-252525 flex items-center">
                    <td className="w-143px text-center pt-6px"><RadioButton id={4}/></td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
                <div className="bg-gray-2b2b2a font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-gray-252525 flex items-center">
                    <td className="w-143px text-center pt-6px"><RadioButton id={5}/></td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
                <div className="bg-gray-2e2e2e font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-gray-252525 flex items-center">
                    <td className="w-143px text-center pt-6px"><RadioButton id={6}/></td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
                <div className="bg-gray-2b2b2a font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full flex items-center">
                    <td className="w-143px text-center pt-6px"><RadioButton id={7}/></td>
                    <td className="w-198px text-center">louie32</td>
                    <td className="w-199px text-center">위너테스트2</td>
                </div>
            </div>
        </div> 
      </div>
    </div>
    )
}

export default CouponGiftPopupTable
