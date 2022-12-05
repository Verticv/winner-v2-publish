import HorizontalMenu1 from 'components/horizontalMenus/HorizontalMenu1';
import DateSearchBar from 'components/myPage/DateSearchBar';
import MyPageTitle from 'components/myPage/MyPageTitle'
import Pagination from 'components/myPage/Pagination';
import React, { useState } from 'react'
import Icon1 from '../../images/gameResults/horizontalMenu/icon_1_v2.png'
import Icon2 from '../../images/gameResults/horizontalMenu/icon_2_v2.png'
import Icon3 from '../../images/gameResults/horizontalMenu/icon_3_v2.png'
import Icon4 from '../../images/gameResults/horizontalMenu/icon_4_v2.png'
import Icon5 from '../../images/gameResults/horizontalMenu/icon_5_v2.png'
import Icon6 from '../../images/gameResults/horizontalMenu/icon_6_v2.png'
import Icon7 from '../../images/gameResults/horizontalMenu/icon_7_v2.png'
import Icon8 from '../../images/gameResults/horizontalMenu/icon_8_v2.png'
import Icon10 from '../../images/gameResults/horizontalMenu/icon_10_v2.png'
import Icon11 from '../../images/gameResults/horizontalMenu/icon_11_v2.png'
import GameDetails from './GameDetails';

const WinDrawLose = ({pageTitle = "승무패"}) => {

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

    const [selectedTab, setSelectedTab] = useState(0)
    const [page, setPage] = useState(0)

    return (
        <div>
            <MyPageTitle title={pageTitle} />
            <div className="relative w-full mt-20px">
                <HorizontalMenu1 itemsArray={tabsArray} isState={selectedTab} setState={setSelectedTab} />
            </div>
            <div className='-mt-9px'>
                <DateSearchBar isGameResultsSearch={true} />
            </div>

            <div className="mt-20px"/>
            <GameDetails />

            <div className="flex w-full justify-center mt-60px mb-60px">
                <Pagination page={page} setPage={setPage}/>   
            </div>

        </div>
    )
}

export default WinDrawLose
