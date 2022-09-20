import React, { useState } from 'react'
import { useHistory } from 'react-router';
import ClockIcon from '../../images/minigames/clock_brown.png'
import ClockIconWhite from '../../images/minigames/clock_gray.png'
import Reflect from '../../images/myPage/betHistory/Reflect.png'

const HorizontalMenu3 = ({
    itemsArray, 
    selectedTab = "", 
    setSelectedTab,
    setSelectedTab1,
    setSelectedOption,
}) => {

    const history = useHistory();
    const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
      return items.map(item => (
        <button 
          key={item.id} 
          style={{
            height:"59px",
            background: selectedTab === item.path 
            ?'linear-gradient( to top, #62553f, #dabe82)'
            :'linear-gradient( to top, rgb(41,41,41) 0%, rgb(80,80,78) 100%)',
            boxShadow: '0 5px 5px -2px rgba(0,0,0,0.5)'
          }}
          className={`relative overflow-hidden h-59px w-full flex items-end p-px rounded-4px`} 
          onClick={() => {
            setSelectedTab(item.path)
            setSelectedTab1(0)
            history.push(item.path)
            setSelectedOption([
              {
                type: "",
                name: "",
                selection: "",
                buttonType: "",
                subtitle: null
              }
            ])
          }}
          onMouseOver={() => setHover(item.path)}
          onMouseLeave={() => setHover(null)}
        >
          <div 
            style={{
              height:"56px", 
              width:"100%", 
              background: selectedTab === item.path
              ? 'linear-gradient(to top, #a6926f, #f9f0d3)'
              : 'linear-gradient(to top, rgb(57,56,53) 0%, rgb(107,104,101) 100%)',
            }} 
            className={`flex w-full justify-end items-end absolute top-0 left-0 p-px rounded-4px`}>
            <div 
              style={{
                height: "54px",
                background: selectedTab === item.path
                ? 'linear-gradient(to top, #8d7752, #dabe82)'
                :isHover === item.path
                ?'#54544f'
                : 'linear-gradient( to top, rgb(50,50,49) 0%, rgb(84,84,82) 100%)',
                boxShadow:selectedTab === item.path?"rgba(255, 240, 214, 15%) 1px 2px 5px 6px inset":''
              }}
              className={`w-full rounded-3px flex items-center justify-between pr-20px pt-4px relative hover:filter hover:brightness-90`}>
              <div className={`flex items-center`}>
                <img 
                  className={`
                  ${
                    item.id === 0 
                    ? "ml-15px"
                    : item.id === 1 
                    ? "ml-12px"
                    : item.id === 2
                    ? "ml-18px"
                    : "ml-20px"
                  }`} 
                  src={item.img} 
                  alt="" 
                />
                {selectedTab === item.path&&<img className="absolute top-0 left-0" src={Reflect} alt="" />}
                <span 
                  style={{color: selectedTab === item.path ? "black" : "#ccc2b6"}} 
                  className={`
                  ${
                    item.id === 0 
                    ? "ml-4px"
                    : item.id === 1 
                    ? "ml-6px"
                    : item.id === 2
                    ? "ml-8px"
                    : "ml-7px"         
                  } text-20px tracking-tight font-spoqaBold pt-px`}>
                    {item.text}
                </span>
              </div>
              
              <div className="flex items-center pt-px">
                <img className="mr-4px object-none mb-4px mt-px" src={selectedTab === item.path ? ClockIconWhite : ClockIcon} alt="" />
                <div 
                  style={{color: selectedTab === item.path ? "#473e35" : "#ad9e8c"}}
                  className="text-24px tracking-tight font-swagger flex h-24px items-center">
                    {item.time}
                </div>
              </div>
            </div>
          </div>
        </button>
      ));
    }

    return (
      <div className="flex w-full h-59px space-x-2px">
        <TabsList items={itemsArray} />
      </div>
    )
}

export default HorizontalMenu3
