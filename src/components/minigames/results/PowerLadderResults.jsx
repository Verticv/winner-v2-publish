import React from 'react'

const PowerLadderResults = ({array}) => {

    function Strip({items}) {
        return items.map(item => (
            <div 
                style={{
                    width:"61px",
                    backgroundColor: item.id % 2 === 0 ? "#2e2e2e" : "#2e2e2e",
                }}
                className="border-r border-gray-252525 flex-shrink-0"
            >
                <div  className="flex items-center justify-center h-56px border-b border-gray-252525">
                    <p 
                        className="text-14px tracking-tight font-spoqaMedium"
                        style={{color: item.id % 2 === 0 ? "#e65454" : "#4c98ff"}}
                    >
                        {item.id % 2 === 0 ? "짝" : "홀"}
                    </p>
                </div>

                <div 
                    style={{height:"62px", backgroundColor: "#323232"}} 
                    className="flex items-center justify-center border-b border-gray-252525"
                >
                    {item.row1 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row1}
                            <div className={`${
                                item.row1Direction === "right" ? "-right-5px" : "-left-5px"
                                } absolute rounded-full h-22px w-22px bg-black flex items-center justify-center pt-2px pr-2px -top-5px`}
                            >{item.row1Sub}</div>
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#2e2e2e"}} 
                    className="flex items-center justify-center border-b border-gray-252525"
                >
                    {item.row2 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row2}
                            <div className={`${
                                item.row2Direction === "right" ? "-right-5px" : "-left-5px"
                                } absolute rounded-full h-22px w-22px bg-black flex items-center justify-center pt-2px pr-2px -top-5px`}
                            >{item.row2Sub}</div>
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#323232"}} 
                    className="flex items-center justify-center border-b border-gray-252525"
                >
                    {item.row3 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row3}
                            <div className={`${
                                item.row3Direction === "right" ? "-right-5px" : "-left-5px"
                                } absolute rounded-full h-22px w-22px bg-black flex items-center justify-center pt-2px pr-2px -top-5px`}
                            >{item.row3Sub}</div>
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#2e2e2e"}} 
                    className="flex items-center justify-center border-b border-gray-252525"
                >
                    {item.row4 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row4}
                            <div className={`${
                                item.row4Direction === "right" ? "-right-5px" : "-left-5px"
                                } absolute rounded-full h-22px w-22px bg-black flex items-center justify-center pt-2px pr-2px -top-5px`}
                            >{item.row4Sub}</div>
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#323232"}} 
                    className="flex items-center justify-center border-b border-gray-252525"
                >
                    {item.row5 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row5}
                            <div className={`${
                                item.row5Direction === "right" ? "-right-5px" : "-left-5px"
                                } absolute rounded-full h-22px w-22px bg-black flex items-center justify-center pt-2px pr-2px -top-5px`}
                            >{item.row5Sub}</div>
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#2e2e2e"}} 
                    className="flex items-center justify-center border-b border-gray-252525"
                >
                    {item.row6 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row6}
                            <div className={`${
                                item.row6Direction === "right" ? "-right-5px" : "-left-5px"
                                } absolute rounded-full h-22px w-22px bg-black flex items-center justify-center pt-2px pr-2px -top-5px`}
                            >{item.row6Sub}</div>
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#323232"}} 
                    className="flex items-center justify-center border-b border-gray-252525"
                >
                    {item.row7 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row7}
                            <div className={`${
                                item.row7Direction === "right" ? "-right-5px" : "-left-5px"
                                } absolute rounded-full h-22px w-22px bg-black flex items-center justify-center pt-2px pr-2px -top-5px`}
                            >{item.row7Sub}</div>
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#2e2e2e"}} 
                    className="flex items-center justify-center border-b border-gray-252525"
                >
                    {item.row8 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row8}
                            <div className={`${
                                item.row8Direction === "right" ? "-right-5px" : "-left-5px"
                                } absolute rounded-full h-22px w-22px bg-black flex items-center justify-center pt-2px pr-2px -top-5px`}
                            >{item.row8Sub}</div>
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#323232"}} 
                    className="flex items-center justify-center border-b border-gray-252525"
                >
                    {item.row9 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row9}
                            <div className={`${
                                item.row9Direction === "right" ? "-right-5px" : "-left-5px"
                                } absolute rounded-full h-22px w-22px bg-black flex items-center justify-center pt-2px pr-2px -top-5px`}
                            >{item.row9Sub}</div>
                        </div>
                    )}
                </div>
                <div 
                    style={{height:"62px", backgroundColor: "#2e2e2e"}} 
                    className="flex items-center justify-center border-b border-gray-252525"
                >
                    {item.row10 && (
                        <div 
                            style={{width: "44px", height: "44px", backgroundColor: item.id % 2 === 0 ? "#d52e2e" : "#2e6dd5"}}
                            className="relative rounded-full text-white font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-2px pr-px"
                        >
                            {item.row10}
                            <div className={`${
                                item.row10Direction === "right" ? "-right-5px" : "-left-5px"
                                } absolute rounded-full h-22px w-22px bg-black flex items-center justify-center pt-2px pr-2px -top-5px`}
                            >{item.row10Sub}</div>
                        </div>
                    )}
                </div>
            </div>
        ))
    }

    return (
        <div style={{height: "686px"}} className="border border-gray-252525 flex w-full overflow-x-scroll">
            <Strip items={array} />
        </div>
    )
}

export default PowerLadderResults
