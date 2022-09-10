import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Reflect from '../../images/esports/esports_reflect.png'

const HorizontalMenu9 = ({
    itemsArray, 
    setSelectedTab,
    setSelectedSubTab = null
}) => {

    const history = useHistory();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)

    console.log(pathname)

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                style={{
                    height:"57px",
                    background: pathname === item.path 
                    ?'linear-gradient( to top, #62553f, #dabe82)'
                    : 'linear-gradient( to top, rgb(41,41,41) 0%, rgb(80,80,78) 100%)',
                    boxShadow: '0 5px 5px -2px rgba(0,0,0,0.5) '
                }}
                className='relative overflow-hidden h-78px w-full flex items-end rounded-4px'
                onClick={() => {
                    history.push(item.path)
                    setSelectedTab(item.id)
                    if (setSelectedSubTab !== null) {
                        setSelectedSubTab(0)
                    }
                }}
                onMouseOver={() => setHover(item.path)}
                onMouseLeave={() => setHover(null)}
            >
                <div 
                    style={{
                      height:"54px", 
                      background: pathname === item.path
                      ? 'linear-gradient(to top, #a6926f, #f9f0d3)'
                      : 'linear-gradient(to top, rgb(57,56,53) 0%, rgb(107,104,101) 100%)'
                
                    }}
                    className='w-full flex h-54px absolute top-0 p-px rounded-4px'
                >
                    <div 
                        style={{
                          background: pathname === item.path
                          ? 'linear-gradient(to top, #8d7752, #dabe82)'
                          :isHover === item.path
                          ?'#54544f'
                          :'linear-gradient( to top, rgb(50,50,49) 0%, rgb(84,84,82) 100%)'
                        }}
                      className={`w-full rounded-3px flex flex-col justify-start pt-14px items-center relative hover:filter hover:brightness-90`}
                      >
                      {pathname === item.path&&<img className="absolute top-0 left-0" src={Reflect} alt="" />}
                        <span 
                          className={`${
                          pathname === item.path
                          ? "text-gray-252525"
                          : "text-golden-ccc2b6" }
                          text-20px font-spoqaBold tracking-tight`}
                        >{item.text}</span>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full space-x-4px pr-3px pl-px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu9
