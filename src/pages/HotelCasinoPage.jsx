import Footer from 'components/mainPage/Footer';
import DirectoryComponent from 'components/myPage/DirectoryComponent';
import Navbar from 'components/mainPage/Navbar'
import QuickMenu from 'components/QuickMenu'
import React, { useState, useEffect } from 'react'
import { Route } from 'react-router';
import HorizontalMenu9 from 'components/horizontalMenus/HorizontalMenu9';
import HotelCasinoStructure from 'components/hotelCasino/HotelCasinoStructure';

const HotelCasino = ({isAuthenticated, setAuthenticated}) => {
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
    const MenuArray = [
        { text: "보타 이용가이드", id: 0, path: "/hotel-casino/structure" },
    ];

    const [, setSelectedTab] = useState(0)

    return (
        <div className="relative flex flex-col justify-center items-center limit1920:overflow-x-hidden bg-gray-1e1e1e">

            <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>
            <div style={{ width: '1496px', height: 'calc(100vh - 497px)' }} className={`${scrollPosition > 497 ? "top-235px" : "top-356px"} fixed z-20 flex justify-end`}>
                <QuickMenu scrollPosition={scrollPosition} />
            </div>

            <div className="flex flex-col items-start limit:items-center mt-103px w-full h-full">

                <Route path="/hotel-casino/structure">
                    <DirectoryComponent 
                        branch1="호텔카지노"
                        branch2="보타 이용가이드" 
                        mainPath="/hotel-casino/structure"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>

                

                <div className="w-default -mt-5px z-30">
                    <Route path="/hotel-casino/structure">
                        <HorizontalMenu9 itemsArray={MenuArray} setSelectedTab={setSelectedTab} />
                    </Route>
                </div>
                
                <div className="flex mt-20px mb-60px w-default z-30">
                        <Route path="/hotel-casino/structure">
                            <HotelCasinoStructure />
                        </Route>
                        <Route path="*">
                        </Route>
                </div>

                <div>
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default HotelCasino
