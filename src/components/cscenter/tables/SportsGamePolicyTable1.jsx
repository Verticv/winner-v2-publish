import React from 'react'

const SportsGamePolicyTable1 = ({array}) => {

    const Cell = ({
        type, 
        typeColor, 
        overtime, 
        ruleText, 
        ruleText2 = null
    }) => (
        <tr className={`${ruleText2 ? "h-73px" : "h-56px"} bg-gray-323232 font-spoqa text-14px tracking-tight text-gray-c8c8c8  w-full border-b border-gray-252525 last:border-b-0 pt-px`}>
            <td style={{width: "162px", color: typeColor}} className="font-spoqaMedium w-235px h-56px text-center">{type}</td>
            <td style={{width: "86px", color: overtime === null ? "#ffcc00" : overtime === true ? "#dbae00" : "#929292"}} className="font-spoqaMedium h-56px text-center">{overtime === null ? "연장포함" : overtime === true ? "연장제외" : "연장없음"}</td>
            <td style={{width: "792px"}} className={`${ruleText2 ? "-space-y-4px" : ""} h-56px pl-20px`}>
                <p>{ruleText}</p>
                <p>{ruleText2}</p>
            </td>
        </tr>
    )

    function Cells({ items }) {     
        return items.map(item => (
            <Cell type={item.type} typeColor={item.typeColor} overtime={item.overtime} ruleText={item.ruleText} ruleText2={item.ruleText2} />           
        )
    )}

  return (
      <div className="shadow-table w-full overflow-hidden rounded-4px p-px"
          style={{ background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)"}}
        >
        <table className="w-full bg-gray-323232 rounded-4px overflow-hidden">
            <thead className="bg-gray-2e2e2e font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-55px border-b border-gray-252525 pt-px mt-px">
                <tr>
                    <td style={{width: "162px"}} className="text-center">베팅타입</td>
                    <td style={{width: "86px"}} className="w-170px text-center">적용시간</td>
                    <td style={{width: "772px"}} className="w-170px text-center"><span className='-ml-17px'>베팅룰</span></td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqa">       
                                     
                <Cells items={array} />        

            </tbody>
        </table> 
      </div>    
    )
}

export default SportsGamePolicyTable1
