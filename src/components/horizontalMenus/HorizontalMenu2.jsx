import React, { useState } from 'react'

const HorizontalMenu2 = ({
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
                    height:"56px",
                    background: isState === item.id 
                    ?'linear-gradient( to top, #62553f, #dabe82)'
                    :'linear-gradient( to top, rgb(41,41,41) 0%, rgb(80,80,78) 100%)',
                    boxShadow: '0 5px 5px -2px rgba(0,0,0,0.5)'
                }}
                className={` relative overflow-hidden w-full flex items-end rounded-4px`} 
                onClick={() => setState(item.id)}
                onMouseOver={() => setHover(item.id)}
                onMouseLeave={() => setHover(null)}
            >
                <div 
                    style={{
                        height:"53px", 
                        width:"100%", 
                        background: isState === item.id 
                        ? 'linear-gradient(to top, #a6926f, #f9f0d3)'
                        : 'linear-gradient(to top, rgb(57,56,53) 0%, rgb(107,104,101) 100%)'
                    }} 
                    className={`flex w-full absolute top-0 p-px rounded-4px`}
                >
                    <div 
                        style={{
                            height: "51px",
                           background: isState === item.id 
                            ? 'linear-gradient(to top, #8d7752, #dabe82)'
                            :isHover === item.id
                            ?'#54544f'
                            :'linear-gradient( to top, rgb(50,50,49) 0%, rgb(84,84,82) 100%)'
                        }}
                        className={` w-full rounded-4px flex items-center justify-center space-x-4px`}
                    >
                        <img className={`${item.id === 0 ? "mb-px" : "" } object-none`} src={isState === item.id ? item.iconHighlight : item.icon} alt="" />
                        <div 
                            className={`${
                                isState === item.id
                                ? "text-black"
                                : "text-golden-ccc2b6" }
                                text-16px font-spoqaMedium tracking-tight h-16px flex items-center mt-px`}
                        >
                            {item.text}
                        </div>

                        <div 
                          className={`absolute top-3px right-3px h-22px w-22px border rounded-full flex items-center justify-center shadow-plain1`
                          }
                          style={{
                              borderColor: "#f7efd1",
                              background: isState === item.id ?'linear-gradient(to top, #8a2a13, #e9441d)' :'linear-gradient(to top, #26303a, #4c6782)'
                          }}>
                            <p className=" font-roboto text-12px text-white">{item.number}</p>
                        </div>

                    </div>
                </div>
            </button>
        ));
    }

    return (
        <div className="flex w-full space-x-3px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu2
