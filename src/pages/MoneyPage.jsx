import Footer from 'components/mainPage/Footer'
import MoneyCharge from 'components/money/MoneyCharge'
import MoneyExchange from 'components/money/MoneyExchange'
import DirectoryComponent from 'components/myPage/DirectoryComponent'
import LeftMenu from 'components/myPage/LeftMenu'
import Navbar from 'components/mainPage/Navbar'
import QuickMenu from 'components/QuickMenu'
import React, { useState, useEffect } from 'react'
import { Route, useLocation } from 'react-router'
import MoneyChargeBanner from '../images/money/money_charge.png'
import Icon1 from '../images/money/leftMenu/icon_1.png'
import Icon2 from '../images/money/leftMenu/icon_2.png'

const MoneyPage = ({isAuthenticated, setAuthenticated}) => {

    const LeftMenuArray = [
        { text: "보유머니 충전", icon: Icon1, iconHighlight: Icon1, id: 0, path: "/money/charge", mainPath: "/money/charge" },
        { text: "보유머니 환전", icon: Icon2, iconHighlight: Icon2, id: 1, path: "/money/exchange", mainPath: "/money/exchange" },
    ]

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname)
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

            <div style={{right: '208px'}} className={`${scrollPosition > 397 ? "top-235px" : "top-428px"} fixed z-20 flex justify-end`}>
                <QuickMenu />
            </div>
            <div className="flex flex-col items-start limit:items-center mt-104px w-full h-full">

                <Route path="/money/charge">
                    <DirectoryComponent 
                        branch1="충전/환전"
                        branch2="보유머니 충전" 
                        mainPath="/money/charge"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>
                <Route path="/money/exchange">
                    <DirectoryComponent 
                        branch1="충전/환전"
                        branch2="보유머니 환전" 
                        mainPath="/money/charge"
                        setSelectedTab={setSelectedTab}
                    />
                </Route>

                <Route path="/money/charge">
                    <div className="relative w-default h-125px">
                        <img className="z-10" src={MoneyChargeBanner} alt="" />
                    </div>
                </Route>
                <Route path="/money/exchange">
                    <div className="relative w-default h-125px">
                        <img className="z-10" src={MoneyChargeBanner} alt="" />
                    </div>
                </Route>
                
                <div className="flex mt-20px w-default">
                    <div>
                        <LeftMenu 
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab}
                            array={LeftMenuArray}
                            isBig={true}
                        />
                    </div>

                    <div className="ml-20px w-1040px">
                        <Route path="/money/charge">
                            <MoneyCharge />
                        </Route>
                        <Route path="/money/exchange">
                            <MoneyExchange />
                        </Route>
                        <Route path="*">
                        </Route>
                    </div>
                </div>

                <div>
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default MoneyPage
