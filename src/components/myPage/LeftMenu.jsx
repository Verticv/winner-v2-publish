import React, { useState } from 'react'
// import ArrowDown from '../../images/myPage/leftMenu/arr_down.png'
import ArrowDown from '../../images/myPage/leftMenu/arr_down_v2.png'
import ArrowOn from '../../images/myPage/leftMenu/arrow_on.png'

import { useHistory } from 'react-router-dom'
import PopupControls from '../popups/PopupControls'
import ReauthenticatePopup from 'components/popups/ReauthenticatePopup'

const LeftMenu = ({
    selectedTab,
    setSelectedTab,
    selectedSubTab = null,
    setSelectedSubTab = null,
    array,
    isBig = false
}) => {
    const pathname = window.location.pathname
    const history = useHistory();
    const [isPopupOpen, setPopupOpen] = useState(true)
    const [isExpanded, setExpanded] = useState(window.location.pathname)
    const [isMouseHover, setMouseHover] = useState("")

    console.log(pathname)
    function buttonPressed(text, path) {
        if (text === "총판페이지") {
            window.open('/distributor-page');
        } else {
            history.push(path)
            setSelectedTab(path)
            if (setSelectedSubTab !== null) {
                setSelectedSubTab(path)
            }
            
            if (isExpanded === path) {
                setExpanded(path + "closed")
            } else {
                setExpanded(path)
            }
        }
    }

    function mouseHover(path) {
        setMouseHover(path)
    }

    function mouseLeave(path) {
        setMouseHover("")
    }
      
  const EditProfileButton = ({ path, text, icon, iconHighlight, selectedTab }) => (
    <div className='flex w-full items-center flex-col'>
        <button 
            className={`${
                pathname.includes(path)
                ? "bg-gradient-to-b from-golden-gradLight to-golden-gradDark shadow-link" 
                : ""
            } flex w-full items-center h-48px rounded-4px hover:bg-gray-4e4941`} 
            onClick={() => {
                buttonPressed(path)
                setPopupOpen(true)
            }}
        >
            <div 
                className={`
               w-50px flex items-center justify-center flex-shrink-0`} 
            >
                <img 
                    className="flex items-center justify-center object-contain" 
                    src={(pathname.includes(path)) ? iconHighlight : icon} 
                    alt="icon" />
            </div>
            <div className="w-full flex mr-18px ml-8px justify-between items-center">
              <div className="flex items-center">              
                <label className={`${(pathname.includes(path)) ? "text-gray-activeText" : "text-gray-ccc2b6"} font-spoqaMedium text-16px cursor-pointer tracking-tight`}>{text}</label>
              </div>
          </div>
        </button>
    </div>
    )

    function MenuList({ items }) {

        return items.map(item => (
            <div key={item.id}>
            {item.text === "회원정보수정" ? (
                <PopupControls 
                    buttonChild={(
                        <EditProfileButton 
                            path={item.path} 
                            text={item.text} 
                            icon={item.icon} 
                            iconHighlight={item.iconHighlight} 
                            selectedTab={selectedTab}
                        />
                    ) }
                    isPopupOpen={isPopupOpen} 
                    setPopupOpen={setPopupOpen}
                >
                    <ReauthenticatePopup setPopupOpen={setPopupOpen} setSelectedTab={setSelectedTab}/>
                </PopupControls>              
                ) : (
                    <div className='flex flex-col w-full items-center'>
                      <button 
                        className={`${
                          pathname.includes(item.mainPath)
                          ? "bg-gradient-to-b from-golden-gradLight to-golden-gradDark shadow-link" 
                          :''
                        } flex w-full items-center h-48px rounded-4px hover:bg-gray-4e4941`} 
                        onClick={(e) => buttonPressed(item.text, item.path)}
                        onMouseEnter={() => mouseHover(item.path)}
                        onMouseLeave={() => mouseLeave(item.path)}
                      >
                        <div>
                          <div 
                            className={`w-50px flex items-center justify-start flex-shrink-0 pl-7px`} 
                          >
                            <img 
                                className={`${isBig ? '-mt-2px' : 'mt-3px'} flex items-center justify-start object-contain`} 
                              src={pathname.includes(item.mainPath) ? item.iconHighlight : item.icon} 
                                alt="icon" />
                          </div>
                        </div>
                        <div className="w-full flex mr-18px ml-8px justify-between items-center">
                          <div className="flex items-center">
                            <label
                              className={`${
                                  pathname.includes(item.mainPath)
                                  ? "text-golden-highLight" 
                                  : isMouseHover === item.path
                                  ? 'text-golden-ccc2b6'
                                  : "text-golden-ccc2b6"
                              }  font-spoqaMedium text-16px cursor-pointer tracking-tight mt-3px`}
                            >
                              {item.text}
                            </label>
                            {item.inboxCount && (
                              <div className="bg-red-e9441d ml-10px h-17px w-17px rounded-4px text-white flex items-center justify-center text-12px font-roboto pt-px pr-px">
                                {item.inboxCount}
                              </div>
                            )}
                      </div>
                      
                      {item.sub1 && (
                        
                            <img 
                                 className={isExpanded !== item.path + "closed" && pathname.includes(item.mainPath) && "transform rotate-180"} 
                                src={
                                    pathname.includes(item.mainPath) 
                                    ? ArrowOn
                                    : ArrowDown
                                } 
                                alt="" 
                            />
                            )}
                        </div>
                      </button>
                            
                        <div className={`${
                            pathname.includes(item.mainPath) 
                            && isExpanded !== item.path + "closed" 
                            && isExpanded !== item.path2 + "closed"
                            && isExpanded !== item.path3 + "closed" 
                            ? item.sub1||item.sub2||item.sub3||item.sub4?'bg-gray-2c2c2c mt-px pl-px pr-px pb-px':'' : "hidden"

                            } w-full font-spoqaMedium text-16px cursor-pointer tracking-tight rounded-b-4px overflow-hidden`} 
                        >
                            {item.sub1 && (
                                <button 
                                    onClick={() => {
                                        setSelectedSubTab(item.path)
                                        history.push(item.path)
                                    }}
                                    className={`${
                                        pathname === item.path || pathname === item.path_1 
                                        || pathname === item.path_2 || pathname === item.path_3 
                                        || pathname === item.path_4 || pathname === item.path_5 
                                        || pathname === item.path_6 || pathname === item.path_7 || pathname === item.path_8 
                                        ? "text-gray-f1e7d5 bg-gray-4e4941" 
                                        : "text-gray-7e7564 hover:bg-gray-44423e  hover:text-gray-c8c8c8  hover:opacity-50"
                                    } flex items-center h-47px w-full pl-57px `}>
                                        {item.sub1}
                                </button>
                            )}
                            {item.sub2 && (
                                <button 
                                    onClick={() => {
                                        setSelectedSubTab(item.path2)
                                        setSelectedTab(item.path2)
                                        history.push(item.path2)
                                    }}
                                    className={`${
                                        pathname === item.path2 || pathname === item.path2_1 || pathname === item.path2_2 || pathname === item.path2_3
                                        ? "text-gray-f1e7d5 bg-gray-4e4941" 
                                        : "text-gray-7e7564 hover:bg-gray-44423e  hover:text-gray-c8c8c8  hover:opacity-50"
                                    }  flex items-center h-47px w-full pl-57px `}>
                                        {item.sub2}
                                </button>
                            )}
                            {item.sub3 && (
                                <button 
                                    onClick={() => {
                                        setSelectedSubTab(item.path3)
                                        setSelectedTab(item.path3)
                                        history.push(item.path3)
                                    }}
                                    className={`${
                                        pathname === item.path3 || pathname === item.path3_1
                                        ? "text-gray-f1e7d5 bg-gray-4e4941" 
                                        : "text-gray-7e7564 hover:bg-gray-44423e  hover:text-gray-c8c8c8  hover:opacity-50"
                                    } ${item.sub3 === "키론가상게임" && "rounded-b-3xl"} flex items-center h-47px w-full  pl-57px `}>
                                        {item.sub3}
                                </button>
                            )}

                            {item.sub4 && (
                                <button 
                                    onClick={() => {
                                        setSelectedSubTab(item.path4)
                                        setSelectedTab(item.path4)
                                        history.push(item.path4)
                                    }}
                                    className={`${
                                        pathname === item.path4
                                        ? "text-gray-f1e7d5 bg-gray-4e4941 " 
                                        : "text-gray-7e7564 hover:bg-gray-44423e  hover:text-gray-c8c8c8  hover:opacity-50"
                                    } ${item.text === "미니게임" && "rounded-b-3xl"} flex items-center h-47px w-full  pl-57px `}>
                                        {item.sub4}
                                </button>
                            )}
                        </div>

                    </div>
               )} 
                
            </div>
        ));
    }

  return (
    <div className="w-200px rounded-6px mb-180px p-px shadow-table overflow-hidden flex flex-col items-center"
      style={{ background: 'linear-gradient(to top,rgb(31,31,30) 0% ,rgb(31,31,30) 80% , rgb(52,52,52) 100%)' }}
    >
      <div className="rounded-6px bg-gray-323232 overflow-hidden w-full p-5px pb-6px space-y-6px">
        <MenuList items={array} />
      </div>
    </div>
  )
}

export default LeftMenu


