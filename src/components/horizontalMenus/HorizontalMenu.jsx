import React, {useState} from 'react'
import { useHistory } from 'react-router';
import Reflect from '../../images/myPage/betHistory/Reflect.png'
const HorizontalMenu = ({
    itemsArray, 
    setSelectedSubTab = null,
    showSub = true,
  hasRows = false,
      
}) => {

    const history = useHistory();
    const pathname = window.location.pathname
    const [isHover, setHover] = useState(null)
    const [selectedTab, setSelectedTab] = useState(0)
  
    function TabsList({ items }) {
      return items.map(item => (
        <div className='relative w-full'>
          <button
          key={item.id}
          style={{
            background: pathname === item.path 
              ?'linear-gradient( to top, #62553f, #dabe82)'
              :'linear-gradient( to top, rgb(41,41,41) 0%, rgb(80,80,78) 100%)',
            boxShadow: '0 5px 5px -2px rgba(0,0,0,0.5)'
          }}
          className={`${
              pathname === item.path
              ? "flex-shrink" 
              : "flex-shrink"
          } relative overflow-hidden h-78px w-full flex items-end rounded-4px`} 
          onClick={() => {
              history.push(item.path)
              setSelectedTab(item.id)
              if (setSelectedSubTab !== null) {
                  setSelectedSubTab(0)
              }
            }}
            onMouseOver={() => setHover(item.id)}
            onMouseLeave={() => setHover(null)}
        >
          <div style={{
              background: pathname === item.path
              ? 'linear-gradient(to top, #a6926f, #f9f0d3)'
              : 'linear-gradient(to top, rgb(57,56,53) 0%, rgb(107,104,101) 100%)'
      
            }}
              // 'linear-gradient(to bottom, #aba8a0, #686052)'
            className={`w-full flex h-75px absolute top-0 p-px rounded-4px`}>
            <div style={{
                background: pathname === item.path
                  ? 'linear-gradient(to top, #8d7752, #dabe82)'
                  :isHover === item.id
                  ?'#54544f'
                  :'linear-gradient( to top, rgb(50,50,49) 0%, rgb(84,84,82) 100%)'
              }} className={` w-full rounded-3px flex flex-col justify-end items-center pb-3px relative hover:filter hover:brightness-90`}>
              <img className='object-none h-40px'  src={pathname === item.path ? item.iconHighlight : item.icon} alt="" />
              {pathname === item.path&&<img className="absolute top-0 left-0" src={Reflect} alt="" />}
              <span className={`${
                  pathname === item.path 
                  ? "text-black"
                  : "text-golden-ccc2b6"} 
                  text-14px font-spoqaMedium tracking-tight mt-2px`} >{item.text}</span>
            </div>
          </div>
          </button>
          {(showSub && selectedTab !== 0 && selectedTab !== 3 && selectedTab !== 5  && selectedTab !== 9 && selectedTab === item.id) && (
          <div className={`absolute bottom-0 left-40px w-20px -mb-12px overflow-hidden inline-block `}>
            <div style={{
              background:'#323231'
            }} className="h-15px w-15px bg-gradient-to-br from-gray-d2dfea via-gray-eff3f6 to-gray-eff3f6 rotate-45 transform origin-bottom-left"></div>
          </div>
        )}
        </div>
        ));
    }


  return (
    <>
    {!hasRows ? (
      <div className="flex justify-start w-full h-78px space-x-3px pl-4px pr-4px">
          <TabsList items={itemsArray} />
      </div>
    ) : (
      <div className="grid grid-cols-8 gap-3px justify-between w-full pl-4px pr-5px">
          <TabsList items={itemsArray} />
      </div>
    )}
      
  </>
        // <div className="flex justify-between w-full h-78px space-x-3px pl-4px pr-4px">
        //   <TabsList items={itemsArray} />
        // </div>
    )
}

export default HorizontalMenu


