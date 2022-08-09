import React from 'react'

const SubHorizontalMenu = ({
    itemsArray, 
    isState = 0, 
    setState
}) => {

    //const [isHover, setHover] = useState(null)

    function TabsList({ items }) {
        return items.map(item => (
            <button 
              key={item.id} 
              style={{
                background: 'linear-gradient( to top, rgb(30,30,29) 0%, rgb(81,80,78) 100%)'
              }}
              className={`${
                  isState === item.id
                  ? "" 
                  : ""
              } overflow-hidden h-81px w-full rounded-4px flex justify-end border border-gray-2a2a2a`} 
              onClick={() => setState(item.id)}
              // onMouseOver={() => setHover(item.id)}
              // onMouseLeave={() => setHover(null)}
          >
            <div style={{
                background: 'linear-gradient( to top, rgb(57,56,53) 0%, rgb(107,104,101) 100%)'
              }} className={` h-79px w-full flex flex-col items-center justify-center p-px`}>
              <div

                // style={{
                //     background: isState === item.id 
                //     ? "linear-gradient(to bottom, #b9dcff, #d2f6ff)"
                //     : isHover === item.id 
                //     ? "linear-gradient(to bottom, #daf2ff, #ecffff 60%)"
                //     : "linear-gradient(to bottom, #d0dbe4, #ffffff 60%)"
                // }}
                  className={`h-77px w-full rounded-3px flex flex-col items-center justify-end bg-gradient-to-t from-gray-323231 to-gray-545452`}
                  >
                      <img className="mt-8px ml-2px object-none h-40px" src={item.icon} alt="" />
                      <span className={`text-13px font-spoqaMedium tracking-tight text-golden-ccc2b6 mb-10px mt-2px ${item.custom}`} >{item.text}</span>
                  </div>
              </div>
            </button>
        ));
    }

    return (
        <>
          {itemsArray.length < 10 ? (
            <div className="flex w-full h-80px space-x-4px">
                <TabsList items={itemsArray} />
            </div>
          ) : (
            <div className="grid grid-cols-8 gap-px w-full">
                <TabsList items={itemsArray} />
            </div>
          )}
            
        </>
    )
}

export default SubHorizontalMenu
