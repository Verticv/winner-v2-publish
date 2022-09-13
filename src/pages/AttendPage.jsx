import Footer from 'components/mainPage/Footer'
// import DirectoryComponent from 'components/myPage/DirectoryComponent'
import Navbar from 'components/mainPage/Navbar'
import QuickMenu from 'components/QuickMenu'
import React, { useState, useEffect } from 'react'
// import { Route } from 'react-router'
import MyPageBanner from '../images/attendance/attendance_banner.png'
import AttendanceCalendar from 'components/attendance/AttendanceCalendar'


const AttendPage = ({isAuthenticated, setAuthenticated}) => {

    const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
    return (
        <div className="relative flex flex-col justify-center limit:overflow-x-hidden bg-gray-1e1e1e">

            <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>
            <div style={{right: '208px'}} className={`${scrollPosition > 297 ? "top-235px" : "top-428px"} fixed z-20 flex justify-end`}>
                <QuickMenu />
            </div>

            <div className="flex flex-col items-start limit:items-center  mt-160px w-full h-full">

                {/* <Route path="/attendance">
                    <DirectoryComponent 
                        branch1="출석부" 
                        mainPath="/mypage/bet-history"
                    />
                </Route> */}

                <div className="relative w-default h-125px">
                    
                    <img className="z-10" src={MyPageBanner} alt="" />
                </div>

                <div className="flex mt-20px w-default justify-center">
                    <AttendanceCalendar />                
                </div>

                <div>
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default AttendPage
