import React from 'react'

const SportsGamePolicyTable2 = ({array}) => {

    function Cells({ items }) {     
        return items.map(item => (
            <tr className="bg-gray-323232 font-spoqa text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-gray-252525 pt-2px last:border-b-0">
                <td style={{width: "248px"}} className="font-spoqaMedium h-54px text-center pl-20px flex justify-around items-center">
                    <p style={{color: item.color}}>{item.title}</p>
                    {item.title2 && (
                        <p style={{color: '#929292'}}>{item.title2}</p>
                    )}
                </td>
                <td style={{width: "792px", WebkitTextStroke:"0.2px"}} className={`${item.text2 ? "-space-y-4px" : ""}  h-54px pl-20px`}>
                    <p>{item.text}</p>
                    <p>{item.text2}</p>
                </td>
            </tr>
        )
    )}

    
    return (
        <div className="shadow-table w-full overflow-hidden rounded-4px p-px"
          style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)"}}
        >
          <table className="w-full bg-gray-323232 rounded-4px overflow-hidden">
              <thead className="bg-gray-2e2e2e font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px border-b border-gray-252525 pt-px">
                  <tr>
                      <td style={{width: "248px"}} className="text-center pl-20px">타입 및 경기시간</td>
                      <td style={{width: "792px"}} className="text-center">결과적용기준</td>
                  </tr>
              </thead>
              <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">
                  <Cells items={array} />
              </tbody>
          </table>     
        </div>
    )
}

export default SportsGamePolicyTable2
