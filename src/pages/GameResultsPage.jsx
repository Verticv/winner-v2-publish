import Footer from 'components/mainPage/Footer';
import DirectoryComponent from 'components/myPage/DirectoryComponent';
import LeftMenu from 'components/myPage/LeftMenu';
import Navbar from 'components/mainPage/Navbar';
import QuickMenu from 'components/QuickMenu'
import React, { useState, useEffect } from 'react'
import { Route, useLocation } from 'react-router';
import Icon1 from '../images/gameResults/leftMenu/icon_1_v2.png'
import Icon2 from '../images/gameResults/leftMenu/icon_2_v2.png'
import GameResultsBanner from '../images/gameResults/game_results_banner_v2.png'
import WinDrawLose from 'components/gameResults/WinDrawLose';
import MinigameResults from 'components/gameResults/MinigameResults';

const GameResultsPage = ({isAuthenticated, setAuthenticated}) => {

    const LeftMenuArray = [
        { 
            text: "스포츠", 
            icon: Icon1, 
            iconHighlight: Icon1, 
            id: 0, 
            path: "/gameresults/sports/win-draw-lose", 
            sub1: "승무패",
            sub2: "핸디캡",
            sub3: "언오버",
            sub4: "스페셜",
            path2: "/gameresults/sports/handicap",
            path3: "/gameresults/sports/unover",
            path4: "/gameresults/sports/special",
            mainPath: "/gameresults/sports"
        },
        { 
            text: "미니게임", 
            icon: Icon2, 
            iconHighlight: Icon2, 
            id: 1, 
            path: "/gameresults/minigame/powerball", 
            mainPath: "/gameresults/minigame"
        },
    ];

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
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
        
        <div className="relative flex flex-col justify-center items-center limit1920:overflow-x-hidden bg-gray-1e1e1e">

            <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
                <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
            </div>
            <div style={{ width: '1496px' }} className={`${scrollPosition > 200 ? "top-235px" : "top-428px"} fixed z-20 flex justify-end`}>
                <QuickMenu scrollPosition={scrollPosition}/>
            </div>

            <div className="flex flex-col items-start limit:items-center mt-104px w-full h-full">

                <Route exact path="/gameresults/sports/win-draw-lose">
                    <DirectoryComponent 
                        branch1="경기결과"
                        branch2="스포츠" 
                        branch3="승무패"
                        mainPath="/gameresults/sports/win-draw-lose"
                        setSelectedTab={setSelectedTab}
                        setSelectedSubTab={setSelectedSubTab}
                    />
                </Route>
                <Route exact path="/gameresults/sports/handicap">
                    <DirectoryComponent 
                        branch1="경기결과"
                        branch2="스포츠" 
                        branch3="핸디캡"
                        mainPath="/gameresults/sports/win-draw-lose"
                        setSelectedTab={setSelectedTab}
                        setSelectedSubTab={setSelectedSubTab}
                    />
                </Route>
                <Route exact path="/gameresults/sports/unover">
                    <DirectoryComponent 
                        branch1="경기결과"
                        branch2="스포츠" 
                        branch3="언오버"
                        mainPath="/gameresults/sports/win-draw-lose"
                        setSelectedTab={setSelectedTab}
                        setSelectedSubTab={setSelectedSubTab}
                    />
                </Route>
                <Route exact path="/gameresults/sports/special">
                    <DirectoryComponent 
                        branch1="경기결과"
                        branch2="스포츠" 
                        branch3="스페셜"
                        mainPath="/gameresults/sports/win-draw-lose"
                        setSelectedTab={setSelectedTab}
                        setSelectedSubTab={setSelectedSubTab}
                    />
                </Route>

                <Route path="/gameresults/minigame">
                    <DirectoryComponent 
                        branch1="경기결과"
                        branch2="미니게임" 
                        mainPath="/gameresults/minigame"
                        setSelectedTab={setSelectedTab}
                        setSelectedSubTab={setSelectedSubTab}
                    />
                </Route>

                <div className="relative w-default h-125px">
                    <img className="z-10" src={GameResultsBanner} alt="" />
                    <div className='font-spoqaMedium z-20 absolute top-0 text-28px w-full h-full flex items-center justify-center' style={{ color: '#ffdfbd' }}>
                        <span className='leading-none mt-2px'>경기결과</span>
                    </div>
                </div>
                
                <div className="flex mt-20px w-default z-30">
                    <div>
                        <LeftMenu
                            selectedTab={selectedTab} 
                            setSelectedTab={setSelectedTab} 
                            selectedSubTab={selectedSubTab} 
                            setSelectedSubTab={setSelectedSubTab}
                            array={LeftMenuArray}
                        />
                    </div>

                    <div className="ml-20px w-1040px">
                        <Route exact path="/gameresults/sports/win-draw-lose">
                            <WinDrawLose />
                        </Route>
                        <Route exact path="/gameresults/sports/handicap">
                            <WinDrawLose pageTitle="핸디캡" />
                        </Route>
                        <Route exact path="/gameresults/sports/unover">
                            <WinDrawLose pageTitle="언오버" />
                        </Route>
                        <Route exact path="/gameresults/sports/special">
                            <WinDrawLose pageTitle="스페셜" />
                        </Route>
                        <Route path="/gameresults/minigame">
                            <MinigameResults />
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

export default GameResultsPage
