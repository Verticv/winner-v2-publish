import React from 'react'
import { useHistory } from 'react-router';
import Reflect from '../../images/myPage/betHistory/Reflect.png'
const HorizontalMenu = ({
    itemsArray, 
    setSelectedTab,
    setSelectedSubTab = null
}) => {

    const history = useHistory();
    const pathname = window.location.pathname
   // const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
      return items.map(item => (
        <button
          key={item.id}
          style={{
            background:pathname === item.path?'linear-gradient( to top, #62553f, #dabe82)':'linear-gradient( to top, rgb(41,41,41) 0%, rgb(80,80,78) 100%)',
            boxShadow: '0 5px 5px -2px rgba(0,0,0,0.5) ',
          }}
          className={`${
              pathname === item.path
              ? "flex-shrink" 
              : ""
          } relative overflow-hidden h-78px w-full flex items-end rounded-4px`} 
          onClick={() => {
              history.push(item.path)
              setSelectedTab(item.id)
              if (setSelectedSubTab !== null) {
                  setSelectedSubTab(0)
              }
            }}
            // onMouseOver={() => setHover(item.id)}
            // onMouseLeave={() => setHover(null)}
        >
          <div style={{
            background: pathname === item.path?'linear-gradient( to top, #a6926f, #f9f0d3)':'linear-gradient( to top, rgb(57,56,53) 0%, rgb(107,104,101) 100%)',
            }}
            className='w-full flex h-75px absolute top-0 p-px rounded-4px'>
            <div style={{
                background: pathname === item.path?'linear-gradient( to top, #8d7752, #dabe82)':'linear-gradient( to top, rgb(50,50,49) 0%, rgb(84,84,82) 100%)'
                }} className='w-full rounded-3px flex flex-col justify-end items-center pb-4px relative'>
              <img className=" object-none" src={pathname === item.path ? item.iconHighlight : item.icon} alt="" />
              {pathname === item.path&&<img className="absolute top-0 left-0" src={Reflect} alt="" />}
              <span className='text-14px font-spoqaMedium tracking-tight text-golden-ccc2b6 mt-2px'>{item.text}</span>
            </div>
          </div>
        </button>
        ));
    }


    return (
        <div className="flex justify-between w-full h-78px space-x-3px pl-4px pr-4px">
            <TabsList items={itemsArray} />
        </div>
    )
}

export default HorizontalMenu


