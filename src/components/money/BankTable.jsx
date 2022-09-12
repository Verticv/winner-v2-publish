import React from 'react'
import Bank1 from '../../images/money/banks/bank1.png'
import Bank2 from '../../images/money/banks/bank2.png'
import Bank3 from '../../images/money/banks/bank3.png'
import Bank4 from '../../images/money/banks/bank4.png'
import Bank5 from '../../images/money/banks/bank5.png'
import Bank6 from '../../images/money/banks/bank6.png'
import Bank7 from '../../images/money/banks/bank7.png'
import Bank8 from '../../images/money/banks/bank8.png'
import Bank9 from '../../images/money/banks/bank9.png'
import Bank10 from '../../images/money/banks/bank10.png'
import Bank11 from '../../images/money/banks/bank11.png'
import Bank12 from '../../images/money/banks/bank12.png'
import Bank13 from '../../images/money/banks/bank13.png'
import Bank14 from '../../images/money/banks/bank14.png'
import Bank15 from '../../images/money/banks/bank15.png'
import Bank16 from '../../images/money/banks/bank16.png'
import Bank17 from '../../images/money/banks/bank17.png'
import Bank18 from '../../images/money/banks/bank18.png'
import Bank19 from '../../images/money/banks/bank19.png'
import Bank20 from '../../images/money/banks/bank20.png'
import Bank21 from '../../images/money/banks/bank21.png'
import Bank22 from '../../images/money/banks/bank22.png'
import Bank23 from '../../images/money/banks/bank23.png'
import Bank24 from '../../images/money/banks/bank24.png'
import Bank25 from '../../images/money/banks/bank25.png'
import Bank26 from '../../images/money/banks/bank26.png'
import Bank27 from '../../images/money/banks/bank27.png'
import Bank28 from '../../images/money/banks/bank28.png'

const BankTable = () => {
  return (
      <div
        style={{ height: "533px",background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)" }}
        className="w-full rounded-4px  overflow-hidden p-px mb-60px -mt-20px">
        <div className="h-full relative w-full rounded-4px flex flex-col bg-gray-323232 pt-23px pb-20px" >
            <div className="h-full pl-53px flex">
                <div style={{width:"293px"}} className="flex h-full space-x-20px">
                    <div style={{width: "147px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank1} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">00:00 ~ 00:20</p>
                    </div>
                </div> 
                <div style={{width:"320px"}} className="h-full ml-13px flex space-x-20px">
                    <div style={{width: "160px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank2} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">11:50 ~ 01:00</p>
                    </div>
                </div>
                <div style={{width:"284px"}} className="h-full ml-23px flex space-x-20px">
                    <div style={{width: "138px"}} className="flex items-center justify-end h-full pb-4px" >
                        <img src={Bank3} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">00:00 ~ 00:20</p>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: "#2e2e2e"}} className="flex h-full pl-53px"> 
                <div style={{width:"293px"}} className="flex h-full space-x-20px">
                    <div style={{width: "147px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank4} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex flex-col items-start justify-center h-full -space-y-2px" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">04:00 ~ 05:00</p>
                        {/* <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">(금 00:00 ~ 00:40)</p> */}
                    </div>
                </div> 
                <div style={{width:"320px"}} className="h-full ml-13px flex space-x-20px">
                    <div style={{width: "160px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank5} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex flex-col items-start justify-center h-full -space-y-2px" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">00:00 ~ 00:10</p>
                        {/* <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">(일 00:00 ~ 08:00)</p> */}
                    </div>
                </div>
                <div style={{width:"284px"}} className="h-full ml-23px flex space-x-20px">
                    <div style={{width: "138px"}} className="flex items-center justify-end h-full pb-4px" >
                        <img src={Bank6} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">00:00 ~ 00:20</p>
                    </div>
                </div>
            </div>
            <div className="flex h-full pl-53px">
                <div style={{width:"293px"}} className="flex h-full space-x-20px">
                    <div style={{width: "147px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank7} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex flex-col items-start justify-center h-full -space-y-2px" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">23:50 ~ 00:30</p>
                        {/* <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">(타행이체불가)</p> */}
                    </div>
                </div> 
                <div style={{width:"320px"}} className="h-full ml-13px flex space-x-20px">
                    <div style={{width: "160px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank8} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">23:40 ~ 00:05</p>
                    </div>
                </div>
                <div style={{width:"284px"}} className="h-full ml-23px flex space-x-20px">
                    <div style={{width: "138px"}} className="flex items-center justify-end h-full pb-4px" >
                        <img src={Bank9} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">00:00 ~ 00:10</p>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: "#2e2e2e"}} className="flex h-full pl-53px">
                <div style={{width:"293px"}} className="flex h-full space-x-20px">
                    <div style={{width: "147px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank10} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex flex-col items-start justify-center h-full -space-y-2px" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">00:00 ~ 00:10</p>
                        {/* <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">(일 00:00 ~ 08:00)</p> */}
                    </div>
                </div> 
                <div style={{width:"320px"}} className="h-full ml-13px flex space-x-20px">
                    <div style={{width: "160px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank11} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">23:55 ~ 00:10</p>
                    </div>
                </div>
                <div style={{width:"284px"}} className="h-full ml-23px flex space-x-20px">
                    <div style={{width: "138px"}} className="flex items-center justify-end h-full pb-4px" >
                        <img src={Bank12} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex flex-col items-start justify-center h-full -space-y-2px" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">00:00 ~ 00:20</p>
                        {/* <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">(04:00 ~ 05:00)</p> */}
                    </div>
                </div>
            </div>
            <div className="flex h-full pl-53px">
                <div style={{width:"293px"}} className="flex h-full space-x-20px">
                    <div style={{width: "147px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank13} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">23:50 ~ 01:00 </p>
                    </div>
                </div> 
                <div style={{width:"320px"}} className="h-full ml-13px flex space-x-20px">
                    <div style={{width: "160px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank14} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">00:00 ~ 00:10</p>
                    </div>
                </div>
                <div style={{width:"284px"}} className="h-full ml-23px flex space-x-20px">
                    <div style={{width: "138px"}} className="flex items-center justify-end h-full pb-4px" >
                        <img src={Bank15} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">00:00 ~ 00:20</p>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: "#2e2e2e"}} className="flex h-full pl-53px">
                <div style={{width:"293px"}} className="flex h-full space-x-20px">
                    <div style={{width: "147px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank16} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">23:50 ~ 00:30</p>
                    </div>
                </div> 
                <div style={{width:"320px"}} className="h-full ml-13px flex space-x-20px">
                    <div style={{width: "160px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank17} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">23:50 ~ 00:30</p>
                    </div>
                  </div>
                  <div style={{width:"284px"}} className="h-full ml-23px flex space-x-20px">
                    <div style={{width: "138px"}} className="flex items-center justify-end h-full pb-4px" >
                        <img src={Bank18} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">23:50 ~ 00:30</p>
                    </div>
                </div>
            </div>
            <div className="flex h-full pl-53px">
                <div style={{width:"293px"}} className="flex h-full space-x-20px">
                    <div style={{width: "147px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank19} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">23:50 ~ 01:00 </p>
                    </div>
                </div> 
                <div style={{width:"320px"}} className="h-full ml-13px flex space-x-20px">
                    <div style={{width: "160px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank20} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">23:55 ~ 00:35</p>
                    </div>
                </div>
                <div style={{width:"284px"}} className="h-full ml-23px flex space-x-20px">
                    <div style={{width: "138px"}} className="flex items-center justify-end h-full pb-4px" >
                        <img src={Bank21} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">00:05 ~ 00:20</p>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: "#2e2e2e"}} className="flex h-full pl-53px">
                <div style={{width:"293px"}} className="flex h-full space-x-20px">
                    <div style={{width: "147px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank22} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">23:50 ~ 00:05</p>
                    </div>
                </div> 
                <div style={{width:"320px"}} className="h-full ml-13px flex space-x-20px">
                    <div style={{width: "160px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank23} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">00:00 ~ 00:10</p>
                    </div>
                  </div>
                  <div style={{width:"284px"}} className="h-full ml-23px flex space-x-20px">
                    <div style={{width: "138px"}} className="flex items-center justify-end h-full pb-4px" >
                        <img src={Bank24} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">00:00 ~ 00:20</p>
                    </div>
                </div>
              </div>
              <div className="flex h-full pl-53px">
                <div style={{width:"293px"}} className="flex h-full space-x-20px">
                    <div style={{width: "147px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank25} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">00:00 ~ 00:05 </p>
                    </div>
                </div> 
                <div style={{width:"320px"}} className="h-full ml-13px flex space-x-20px">
                    <div style={{width: "160px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank26} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">23:50 ~ 00:30</p>
                    </div>
                </div>
                <div style={{width:"284px"}} className="h-full ml-23px flex space-x-20px">
                    <div style={{width: "138px"}} className="flex items-center justify-end h-full pb-4px" >
                        <img src={Bank27} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">23:50 ~ 00:30</p>
                    </div>
                </div>
              </div>
              <div style={{backgroundColor: "#2e2e2e"}} className="flex h-full pl-53px">
                <div style={{width:"293px"}} className="flex h-full space-x-20px">
                    <div style={{width: "147px"}} className="flex items-center justify-end h-full" >
                        <img src={Bank28} alt="" />
                    </div>
                    <div style={{width: "126px"}} className="flex items-center justify-start h-full" >
                        <p className="text-13px font-spoqaMedium tracking-tight text-gray-c8c8c8">23:50 ~ 00:30</p>
                    </div>
                </div> 
                
                  
              </div>
            <div style={{height: "484px", marginLeft: "358px"}} className="w-px bg-gray-252525 absolute"></div>
            <div style={{height: "484px", marginRight: "358px"}} className="w-px bg-gray-252525 absolute right-0" />
        </div>
    </div>
    )
}

export default BankTable
