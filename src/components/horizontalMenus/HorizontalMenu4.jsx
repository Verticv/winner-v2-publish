import React, { useState } from 'react'
import Reflect from '../../images/myPage/betHistory/Reflect.png'

const HorizontalMenu4 = ({
    itemsArray, 
    selectedTab = 0, 
    setSelectedTab
}) => {

    const [isHover, setHover] = useState(null)
    console.log(isHover)
    function TabsList({ items }) {
        return items.map(item => (
            <button 
              key={item.id} 
              style={{
                background: selectedTab === item.id
                  ? 'linear-gradient(to top, #a6926f, #f9f0d3)'
                  :'linear-gradient(to top, #393835, #4f4f4f)'
              }} 
                className={`relative overflow-hidden h-47px w-full rounded-t-4px flex justify-center p-px`} 
                onClick={() => setSelectedTab(item.id)}
                onMouseOver={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
            >
                <div 
                  style={{
                    height: "45px",
                    background: selectedTab === item.id 
                    ? "linear-gradient(to top, #a1885d, #dabe82)" 
                    :'linear-gradient(to top, #4a4a4a, #5f5f5f)',
                    borderBottomLeftRadius:"4px",
                    borderBottomRightRadius:"4px",
                  }}
                  className="w-full rounded-b-md rounded-t-4px flex items-start justify-center pt-9px"
                  >
                    {selectedTab === item.id && <img className="absolute top-0 left-0" src={Reflect} alt="" />}
                    <div className="flex items-center">
                        <div 
                            style={{color: selectedTab === item.id ? "black" : "#c8c8c8"}}
                            className="text-16px tracking-tight font-spoqaMedium flex h-16px items-center pt-3px"
                        >
                            {item.text}
                        </div>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full h-47px space-x-3px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu4
