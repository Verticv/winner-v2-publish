import BetCombinationPanel from 'components/betCombination/BetCombinationPanel'
import BetCombinationRightPanel from 'components/betCombination/BetCombinationRightPanel'
import Footer from 'components/mainPage/Footer'
import DirectoryComponent from 'components/myPage/DirectoryComponent'
import Navbar from 'components/mainPage/Navbar'
import QuickMenu from 'components/QuickMenu'
import React, { useState, useEffect } from 'react'
import { Route } from 'react-router'
import Icon1 from '../images/gameResults/horizontalMenu/icon_1_v2.png'
import Icon2 from '../images/gameResults/horizontalMenu/icon_2_v2.png'
import Icon3 from '../images/gameResults/horizontalMenu/icon_3_v2.png'
import Icon4 from '../images/gameResults/horizontalMenu/icon_4_v2.png'
import Icon5 from '../images/gameResults/horizontalMenu/icon_5_v2.png'
import Icon6 from '../images/gameResults/horizontalMenu/icon_6_v2.png'
import Icon7 from '../images/gameResults/horizontalMenu/icon_7_v2.png'
import Icon8 from '../images/gameResults/horizontalMenu/icon_8_v2.png'
import Icon10 from '../images/gameResults/horizontalMenu/icon_10_v2.png'
import Icon11 from '../images/gameResults/horizontalMenu/icon_11_v2.png'
import HorizontalMenu6 from 'components/horizontalMenus/HorizontalMenu6'

const BetCombinationPage = ({isAuthenticated, setAuthenticated}) => {

    const tabsArray = [
        { text: "전체", icon: Icon1, id: 0, number: 854 },
        { text: "축구", icon: Icon2, id: 1, number: 567 },
        { text: "농구", icon: Icon3, id: 2, number: 227 },
        { text: "야구", icon: Icon4, id: 3, number: 407 },
        { text: "배구", icon: Icon5, id: 4, number: 0 },
        { text: "테니스", icon: Icon10, id: 5, number: 0 },
        { text: "배드민턴", icon: Icon11, id: 6, number: 0 },
        { text: "하키", icon: Icon6, id: 7, number: 0 },
        { text: "미식축구", icon: Icon7, id: 8, number: 0 },
        { text: "격투기", icon: Icon8, id: 9, number: 9 },
    ];

    const filterArray = [
        { text: "러시아", id: 0 },
        { text: "중국", id: 1 },
        { text: "터키", id: 2 },
        { text: "브라질", id: 3 },
        { text: "칠레", id: 4 },
        { text: "요르단", id: 5 },
        { text: "폴란드", id: 6 },
        { text: "아르헨티나", id: 7 },
        { text: "헝가리", id: 8 },
        { text: "이스라엘", id: 9 },
        { text: "덴마크", id: 10 },
        { text: "독일", id: 11 },
        { text: "스웨덴", id: 12 },
        { text: "루마니아", id: 13 },
        { text: "잉글랜드", id: 14 },
        { text: "북아일랜드", id: 15 },
        { text: "스페인", id: 16 },
        { text: "프랑스", id: 17 },
        { text: "콜롬비아", id: 18 },
        { text: "에콰도르", id: 19 },
        { text: "미국", id: 20 },
    ];


    const cardsArray = []

    const [selectedTab, setSelectedTab] = useState(0)
    const [isPanelFixed, setPanelFixed] = useState(true)
    const [addedCard, setAddedCard] = useState(cardsArray)
    const [checkedState, setCheckedState] = useState(
        new Array(filterArray.length).fill(false)
  );
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
      <div className="relative flex flex-col justify-center items-center w-full bg-gray-1e1e1e">
        <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
          <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
        </div>
        <div style={{ width: '1496px'}} className={`${scrollPosition > 200 ? "top-235px" : "top-282px"} fixed z-20 flex justify-end`}>
            <QuickMenu scrollPosition={scrollPosition}/>
        </div>
        <div className="flex flex-col items-start limit:items-center mt-104px w-full h-full">
          <Route path="/bet-combination">
            <DirectoryComponent
              branch1="스포츠" 
              branch2="조합베팅"
              mainPath="/mypage/bet-history"
            />
          </Route>

          <div className=" relative flex w-default space-x-20px -mt-px z-30">
            <div style={{width: "933px"}}>
              <div style={{width: "935px", marginLeft:"-1px"}}>
                <HorizontalMenu6 itemsArray={tabsArray} isState={selectedTab} setState={setSelectedTab} />
              </div>
              <div className="mt-15px">
                <BetCombinationPanel 
                  addedCard={addedCard} 
                  setAddedCard={setAddedCard} 
                  filterArray={filterArray} 
                  checkedState={checkedState}
                  setCheckedState={setCheckedState}
                />
              </div>
            </div>
              
            <div style={{width: "309px", left:"0px", position:"-webkit-sticky", top: "150px", height: isPanelFixed ? "100%" : ""}} className={`${isPanelFixed && "sticky bottom-0 flex"} mb-60px`}>
                <BetCombinationRightPanel 
                    addedCard={addedCard} 
                    setAddedCard={setAddedCard} 
                    isPanelFixed={isPanelFixed} 
                    setPanelFixed={setPanelFixed} 
                />
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    )
}

export default BetCombinationPage
