import React, { useState } from 'react'
import Reflect from '../../images/myPage/betHistory/Reflect.png'

const HorizontalMenu1 = ({
    itemsArray, 
    isState = 0, 
    setState
}) => {

    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                style={{
                  background: isState === item.id
                  ? 'linear-gradient( to top, #62553f, #dabe82)'
                  : 'linear-gradient( to top, rgb(41,41,41) 0%, rgb(80,80,78) 100%)',
                  boxShadow: '0 5px 5px -2px rgba(0,0,0,0.5)'
                }}
                className='h-98px w-full flex items-end  relative overflow-hidden rounded-4px' 
                onClick={() => setState(item.id)}
                onMouseOver={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
            >
                <div 
                    style={{
                        height:"95px", 
                        background: isState === item.id
                        ? 'linear-gradient(to top, #a6926f, #f9f0d3)'
                        : 'linear-gradient(to top, rgb(57,56,53) 0%, rgb(107,104,101) 100%)'
                    }} 
                     className={`w-full flex h-98px absolute top-0 p-px rounded-4px`}>
                    
                    <div 
                        style={{
                            height: "93px",
                             background: isState === item.id
                          ? 'linear-gradient(to top, #8d7752, #dabe82)'
                          :isHover === item.id
                          ?'#54544f'
                          :'linear-gradient( to top, rgb(50,50,49) 0%, rgb(84,84,82) 100%)'
                        }}
                        className={`w-full rounded-3px flex flex-col items-center`}>
                          <img className="mt-6px ml-px object-none" src={item.icon} alt="" />
                          {isState === item.id&&<img className="absolute top-0 left-0" src={Reflect} alt="" />}
                        <div 
                            className={`${
                                isState === item.id
                                ? "text-gray-252525"
                                : "text-golden-ccc2b6"} 
                                text-14px font-spoqaMedium tracking-tight h-14px flex items-center mt-3px`}
                        >
                            {item.text}
                        </div>
                        <div 
                            style={{
                                backgroundColor: isState === item.id 
                                ? "#4b3f2b"
                                : "#1a1a1a"
                            }}
                            className={`text-white text-12px font-roboto tracking-tight px-9px mt-8px h-17px rounded-full flex items-center justify-center`}
                        >
                            {item.number}
                        </div>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full h-98px space-x-3px px-4px ">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu1
