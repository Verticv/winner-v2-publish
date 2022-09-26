import React, { useState } from 'react'

const HorizontalMenu8 = ({
    itemsArray, 
    selectedTab = 0,
    setSelectedTab,
    setSelectedSubTab
}) => {

    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
      return items.map(item => (
          <div className='relative w-full'>
            <button 
                key={item.id} 
                style={{
                    height:"80px",
                    background: selectedTab === item.id 
                      ?'linear-gradient( to top, #62553f, #dabe82)'
                      : 'linear-gradient( to top, rgb(41,41,41) 0%, rgb(80,80,78) 100%)',
                    boxShadow: '0 5px 5px -2px rgba(0,0,0,0.5) '
                }}
                className={`relative overflow-hidden h-78px w-full rounded-4px flex items-end`} 
                onClick={() => {
                    setSelectedTab(item.id)
                    setSelectedSubTab(0)
                }}
                onMouseOver={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
            >
                <div 
                    style={{
                        height:"78px", 
                        width:"100%", 
                        background: selectedTab === item.id 
                        ? 'linear-gradient(to top, #a6926f, #f9f0d3)'
                        : 'linear-gradient(to top, rgb(57,56,53) 0%, rgb(107,104,101) 100%)'
                    }} 
                    className={`w-full flex h-75px absolute top-0 p-px rounded-4px`}
                >
                    <div 
                        style={{
                             background: selectedTab === item.id
                              ? 'linear-gradient(to top, #8d7752, #dabe82)'
                              :isHover === item.id
                              ?'#54544f'
                              :'linear-gradient( to top, rgb(50,50,49) 0%, rgb(84,84,82) 100%)'
                          }} className={` w-full rounded-3px flex flex-col justify-end items-center pb-3px relative hover:filter hover:brightness-90`}>
                      
                        <img className=" object-none" src={selectedTab === item.id ? item.iconHighlight : item.icon} alt="" />
                       <span className={`${
                          selectedTab === item.id
                          ? "text-black"
                          : "text-golden-ccc2b6"} 
                          text-14px font-spoqaMedium tracking-tight mt-3px`} >{item.text}</span>
                    </div>
                </div>
            </button>
            {(selectedTab !== 2  && selectedTab !== 4  && selectedTab !== 8 && selectedTab === item.id) && (
              <div className={`absolute bottom-0 left-46px w-20px -mb-12px overflow-hidden inline-block `}>
                <div style={{
                  background:'#2b2b2a'
                }} className="h-15px w-15px bg-gradient-to-br from-gray-d2dfea via-gray-eff3f6 to-gray-eff3f6 rotate-45 transform origin-bottom-left"></div>
              </div>
            )}
          </div>
          ));
          
    }

    return (
        <div className="flex w-full h-80px space-x-3px px-4px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu8
