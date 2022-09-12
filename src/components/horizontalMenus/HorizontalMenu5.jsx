import React from 'react'

const HorizontalMenu5 = ({
    itemsArray, 
    selectedTab = 0, 
    setSelectedTab
}) => {


    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                style={{
                    height:"41px",
                    background: selectedTab === item.id
                    ?'linear-gradient( to top, #62553f, #dabe82)'
                    :'linear-gradient( to top, rgb(41,41,41) 0%, rgb(80,80,78) 100%)',
                    boxShadow: '0 5px 5px -2px rgba(0,0,0,0.5)'
                }}
                className="relative overflow-hidden w-full rounded-4px flex items-end p-px "
                onClick={() => setSelectedTab(item.id)}
            >
                <div 
                    style={{
                        height: "38px",
                        background: selectedTab === item.id 
                        ? 'linear-gradient(to top, #a6926f, #f9f0d3)'
                        : 'linear-gradient(to top, rgb(57,56,53) 0%, rgb(107,104,101) 100%)',
                    }}
                    className="w-full absolute top-0 left-0 p-px rounded-4px flex items-center justify-center"
                >
                    <div
                        style={{
                            height: "36px",
                            background: selectedTab === item.id
                            ? 'linear-gradient(to top, #8d7752, #dabe82)'
                           
                            : 'linear-gradient( to top, rgb(50,50,49) 0%, rgb(84,84,82) 100%)',
                            boxShadow:selectedTab === item.id?"rgba(255, 240, 214, 15%) 1px 2px 5px 6px inset":''
                        }} className="w-full rounded-3px flex items-center justify-center  pt-4px relative hover:filter hover:brightness-90" >
                        
                        <div 
                            style={{color: selectedTab === item.id ? "black" : "#ccc2b6"}}
                            className="text-14px tracking-tight font-spoqaMedium flex h-14px items-center "
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

export default HorizontalMenu5
