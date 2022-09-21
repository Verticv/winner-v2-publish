import React, { useState } from 'react'
import { useHistory } from 'react-router';
import Reflect from '../../images/myPage/betHistory/Reflect.png'
const HorizontalMenu10 = ({
    itemsArray, 
}) => {

    const history = useHistory();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                style={{
                    height:"78px",
                    background: pathname === item.path 
                    ?'linear-gradient( to top, #62553f, #dabe82)'
                    :'linear-gradient( to top, rgb(41,41,41) 0%, rgb(80,80,78) 100%)',
                    boxShadow: '0 5px 5px -2px rgba(0,0,0,0.5)'
                }}
                className={`relative overflow-hidden h-78px w-full rounded-4px flex items-end`} 
                onClick={() => {
                    history.push(item.path)
                }}
                onMouseOver={() => setHover(item.path)}
                onMouseLeave={() => setHover(null)}
            >
                <div 
                    style={{
                        height:"75px", 
                        width:"100%", 
                        background: pathname === item.path
                        ? 'linear-gradient(to top, #a6926f, #f9f0d3)'
                        : 'linear-gradient(to top, rgb(57,56,53) 0%, rgb(107,104,101) 100%)'
                    }} 
                    className={`flex w-full  absolute top-0 p-px rounded-4px`}
                >
                    <div 
                      style={{
                        background: pathname === item.path
                        ? 'linear-gradient(to top, #8d7752, #dabe82)'
                        :isHover === item.path
                        ?'#54544f'
                        :'linear-gradient( to top, rgb(50,50,49) 0%, rgb(84,84,82) 100%)'
                      }}
                      className={`w-full rounded-4px flex flex-col justify-end items-center pb-3px h-73px relative hover:filter hover:brightness-90`}  
                    >
                    <img className="mt-8px ml-2px object-none" src={item.icon} alt="" />
                    {pathname === item.path&&<img className="absolute top-0 left-0" src={Reflect} alt="" />}
                        <span 
                            className={`${
                              pathname === item.path 
                              ? "text-black"
                              : "text-golden-ccc2b6"} 
                              text-14px font-spoqaMedium tracking-tight mt-4px`}
                        >{item.text}</span>
                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full h-80px space-x-3px justify-between px-4px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu10
