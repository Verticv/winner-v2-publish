import React, { useState } from 'react'

const SubHorizontalMenu = ({
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
                background:'linear-gradient( to top, rgb(30,30,29) 0%, rgb(81,80,78) 100%)'
              }}
              className={`${
                  isState === item.id
                  ? "" 
                  : ""
              } overflow-hidden h-82px w-full rounded-4px flex items-start border border-gray-2a2a2a relative`} 
              onClick={() => setState(item.id)}
              onMouseOver={() => setHover(item.id)}
              onMouseLeave={() => setHover(null)}
          >
            <div style={{
                background: 'linear-gradient( to top, #393835, #6b6865)'
              }} className={`overflow-hidden h-79px w-full flex flex-col items-center justify-start p-px absolute top-0 rounded-4px`}>
              <div

                style={{
                  background: isState === item.id 
                    ? "linear-gradient( to top, rgb(77,77,73), rgb(121,121,113)"
                    : isHover === item.id 
                    ? "#4b4b46"
                    : ''
                }}
                  className={`h-77px w-full rounded-3px flex flex-col items-center justify-end bg-gradient-to-t from-gray-323231 to-gray-545452`}
                  >
                      <img className="mt-8px ml-2px object-none h-43px" src={item.icon} alt="" />
                      <span className={`text-13px font-spoqaMedium tracking-tight text-golden-ccc2b6 mb-6px mt-3px ${item.custom}`} >{item.text}</span>
                  </div>
              </div>   
            </button>
        ));
    }

    return (
        <>
          {itemsArray.length < 10 ? (
            <div className="flex w-full h-80px space-x-2px">
                <TabsList items={itemsArray} />
            </div>
          ) : (
            <div className="grid grid-cols-8 gap-2px w-full">
                <TabsList items={itemsArray} />
            </div>
          )}
            
        </>
    )
}

export default SubHorizontalMenu
