import React, { useState } from 'react'
import LeftIcon from '../../images/myPage/betHistory/left_v2.png'
import RightIcon from '../../images/myPage/betHistory/right_v2.png'
import DoubleLeftIcon from '../../images/myPage/betHistory/double_left_v2.png'
import DoubleRightIcon from '../../images/myPage/betHistory/double_right_v2.png'
import './Pagination.css'

const Pagination = ({page, setPage}) => {

    const LeftArrow = () => (
        <button 
            style={{backgroundColor:selectedPage !==1 && "#fff"}} 
            className="flex items-center justify-center w-32px h-32px rounded-4px  hover:opacity-75"
            onClick={() => selectedPage !== 1 && setSelectedPage(selectedPage - 1)}
        >
            <img src={LeftIcon} alt="arrow" />
        </button>
    )
    const RightArrow = () => (
        <button 
            style={{backgroundColor:selectedPage !==1 && "#fff"}} 
            className="flex items-center justify-center w-32px h-32px rounded-4px  hover:opacity-75"
            onClick={() => selectedPage !== 5 && setSelectedPage(selectedPage + 1)}
        >
            <img src={RightIcon} alt="arrow" />
        </button>
    )

    const [selectedPage, setSelectedPage] = useState(1)

    return (
        <div className="relative flex h-32px mb-60px items-center justify-center space-x-6px">
            <button 
                className="flex items-center justify-center w-32px h-32px rounded-4px  hover:opacity-75"
                onClick={() => setSelectedPage(1)}
            >
                <img className="cursor-pointer h-32px object-none hover:bg-blend-darken" src={DoubleLeftIcon} alt="" />
            </button>
                <LeftArrow />
                <div className="space-x-px flex items-center">
                    <button 
                        style={{background: selectedPage ===1 && "linear-gradient(to top, #4b3b09, #e8b888)" }} 
                        className="flex items-center justify-center w-32px h-32px rounded-4px hover:opacity-75"
                        onClick={() => setSelectedPage(1)}
                    >
                    <div style={{ background: selectedPage === 1 && "linear-gradient(to bottom,  #a67c52, #7f5f3f)" }}
                        className={` flex items-center justify-center h-30px w-30px rounded-3px  cursor-pointer`}>
                            <span className={`text-gray-activeText font-roboto tracking-tight text-14px pt-2px`}>1</span>
                        </div>
                    </button>
                    <button 
                         style={{background: selectedPage === 2 && "linear-gradient(to top, #4b3b09, #e8b888)" }} 
                        className="flex items-center justify-center w-32px h-32px rounded-4px hover:opacity-75"
                        onClick={() => setSelectedPage(2)}
                    >
                        <div style={{ background: selectedPage === 2 && "linear-gradient(to bottom,  #a67c52, #7f5f3f)" }}
                          className={` flex items-center justify-center h-30px w-30px rounded-3px  cursor-pointer`}>
                            <span className={`text-gray-activeText font-roboto tracking-tight text-14px pt-2px`}>2</span>
                        </div>
                    </button>
                    <button 
                        style={{backgroundColor:selectedPage ===3 && "linear-gradient(to top, #4b3b09, #e8b888)"}} 
                        className="flex items-center justify-center w-32px h-32px rounded-4px hover:opacity-75"
                        onClick={() => setSelectedPage(3)}
                    >
                        <div style={{ background: selectedPage === 3 && "linear-gradient(to bottom,  #a67c52, #7f5f3f)" }}
                          className={` flex items-center justify-center h-30px w-30px rounded-3px  cursor-pointer`}>
                            <span className={`text-gray-activeText font-roboto tracking-tight text-14px pt-2px`}>3</span>
                        </div>
                    </button>
                    <button 
                        style={{backgroundColor:selectedPage ===4 && "linear-gradient(to top, #4b3b09, #e8b888)"}} 
                        className="flex items-center justify-center w-32px h-32px rounded-4px hover:opacity-75"
                        onClick={() => setSelectedPage(4)}
                    >
                      <div style={{ background: selectedPage === 4&& "linear-gradient(to bottom,  #a67c52, #7f5f3f)" }}
                        className={` flex items-center justify-center h-30px w-30px rounded-43x  cursor-pointer`}>
                            <span className={`text-gray-activeText font-roboto tracking-tight text-14px pt-2px`}>4</span>
                        </div>
                    </button>
                    <button 
                        style={{backgroundColor:selectedPage ===5 && "linear-gradient(to top, #4b3b09, #e8b888)"}} 
                        className="flex items-center justify-center w-32px h-32px rounded-4px hover:opacity-75"
                        onClick={() => setSelectedPage(5)}
                    >
                      <div style={{ background: selectedPage === 5 && "linear-gradient(to bottom,  #a67c52, #7f5f3f)" }}
                        className={`flex items-center justify-center h-30px w-30px rounded-3px  cursor-pointer`}>
                          <span className={`text-gray-activeText font-roboto tracking-tight text-14px pt-2px`}>5</span>
                        </div>
                    </button>
                </div>
                

                <RightArrow />                
                <button 
                    className="flex items-center justify-center w-32px h-32px rounded-4px  hover:opacity-75"
                    onClick={() => setSelectedPage(5)}
                >
                    <img className=" cursor-pointer h-32px object-none hover:bg-blend-darken" src={DoubleRightIcon} alt="" />
                </button>
            </div>
    )
}

export default Pagination
