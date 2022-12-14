import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import ko from 'date-fns/locale/ko';
import CalendarIcon from '../images/myPage/betHistory/calendar_v2.png'
import '../components/myPage/DatePicker.css'
import { getMonth, getYear } from 'date-fns';
import range from "lodash/range";
import DropDownControls from 'components/dropdowns/DropDownControls';

registerLocale('ko', ko)

const CustomDatePicker = ({classes}) => {
  const months = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  
  const [selectedYear, setSelectedYear] = useState(getYear(new Date()))
  const [selectedMonth, setSelectedMonth] = useState(months[getMonth(new Date())])
  const [startDate, setStartDate] = useState(new Date());
  const years = range(getYear(new Date()) - 100, getYear(new Date()) + 1, 1);

  const [isDropdownOpen, setDropdownOpen] = useState(true)

  const dropDownCellClass = "flex w-170px h-40px py-4px items-center hover:bg-white hover:bg-opacity-10 px-10px"
  
	
  const yearButton = (
		<div style={{backgroundColor:'#3b3b3b', borderColor:'transparent'}} className="flex items-center justify-between  placeholder-gray-r8c8c8c outline-none border px-px font-spoqa text-13px font-bold tracking-tight   border-gray-2e2e2e text-gray-ccc2b6 bg-gray-2e2e2e" >
		<p className='-mt-px'>{selectedYear}년</p>
	</div>
  )
  
	const monthButton = (
		<div style={{backgroundColor:'#3b3b3b', borderColor:'transparent'}} className="flex items-center justify-between  placeholder-gray-r8c8c8c outline-none border px-px font-spoqa text-13px font-bold tracking-tight   border-gray-2e2e2e text-gray-ccc2b6 bg-gray-2e2e2e" >
		<p className='-mt-px'>{selectedMonth}월</p>
	</div>
	)


  return (
    <div>
      <DatePicker
        onCalendarOpen={() => {
          setSelectedYear(getYear(new Date()))
          setSelectedMonth(months[getMonth(new Date())])
          setStartDate(new Date())
        }}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
      }) => (
            
        <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
          >
            <button type="button" className="react-datepicker__navigation react-datepicker__navigation--next" aria-label="Next Month"
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}>
                <span className="react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
              >Next Month</span></button> 
            <DropDownControls buttonChild={yearButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen} classes={'sm:mt-20px'}>
              <div style={{height:"249px"}} className="w-70px mt-4px flex flex-col items-center justify-center overflow-hidden rounded-2px border font-spoqaMedium text-14px tracking-tight border-gray-404040 text-gray-ccc2b6 bg-dark-1a1a1a">
                  <div className="w-full mt-2px h-full overflow-y-scroll overflow-x-hidden border-gray-2c2c2c">
                  {years.slice(0).reverse().map(item => (
                    <button className={dropDownCellClass} onClick={() => {
                        setSelectedYear(item)
                        changeYear(item)
                        setDropdownOpen(false)
                    }}>
                        {item}
                    </button>
                  ))}
                  </div>
                </div>
            </DropDownControls>
            <DropDownControls buttonChild={monthButton} isDropdownOpen={isDropdownOpen} setDropdownOpen={setDropdownOpen} classes={'sm:mt-20px'}>
              <div style={{height:"249px"}} className="w-50px mt-4px flex flex-col items-center justify-center overflow-hidden rounded-2px border font-spoqaMedium text-14px tracking-tight border-gray-404040 text-gray-ccc2b6 bg-dark-1a1a1a">
                  <div className="w-full mt-2px h-full overflow-y-scroll overflow-x-hidden border-gray-2c2c2c">
                  {months.map(item => (
                    <button className={dropDownCellClass} onClick={() => {
                      setSelectedMonth(months[months.indexOf(item)])
                      changeMonth(months.indexOf(item))
                        setDropdownOpen(false)
                    }}>
                        {item}
                    </button>
                  ))}
                  </div>
                </div>
              </DropDownControls>
            <button type="button"  className="react-datepicker__navigation react-datepicker__navigation--previous" aria-label="Previous Month"
                onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}>
              <span  className="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">Previous Month</span>
            </button> 
          </div>
            )}
              className={classes}
              locale="ko" 
              selected={startDate} 
              onChange={(date) => {
                setStartDate(date)
                setSelectedYear(getYear(date))
                setSelectedMonth(months[getMonth(date)])
                }
              }
              onMonthChange={(date) => {
                setSelectedMonth(months[getMonth(date)])
                setSelectedYear(getYear(date))
                }
              }
              onYearChange={(date) => setSelectedYear(getYear(date))}
              dateFormat="yyyy-MM-dd"
              dateFormatCalendar="yyyy년 MM월"
          />
          <img src={CalendarIcon} alt="" className="absolute top-0 right-0 mt-12px mr-10px" />
    </div>
    
  )
}

export default CustomDatePicker


