import React, { useState } from 'react'
import Card from '../../images/subNavbar/card.png'
import Slot from '../../images/subNavbar/slot.png'
import Sport from '../../images/subNavbar/sport.png'
import Esport from '../../images/subNavbar/esport.png'
import Minigame from '../../images/subNavbar/minigame.png'
import AugmentedGame from '../../images/subNavbar/augmented_game.png'
import Fishing from '../../images/subNavbar/fishing.png'
import Lottery from '../../images/subNavbar/lottery.png'
import CardDefualt from '../../images/subNavbar/card_default.png'
import SlotDefault from '../../images/subNavbar/slot_default.png'
import SportDefault from '../../images/subNavbar/sport_default.png'
import EsportDefault from '../../images/subNavbar/esport_default.png'
import MinigameDefault from '../../images/subNavbar/minigame_default.png'
import AugmentedGameDefault from '../../images/subNavbar/augmented_game_default.png'
import FishingDefault from '../../images/subNavbar/fishing_default.png'
import LotteryDefault from '../../images/subNavbar/lottery_default.png'
import GameBanner from '../gameBanners/GameBanner'
import './SubNavbar.css'

const SubNavbar = () => {

    const [selectedTab, setSelectedTab] = useState(0)
    const [isGameBanner, setGameBanner] = useState(0)

    const tabClass = "flex items-center pl-5px space-x-2px w-156px h-60px rounded-full text-gray-subNavbar cursor-pointer z-20 transition duration-300 ease-in-out tracking-tight hover:bg-gray-d8dfea"
    const selectedTabClass = "flex items-center justify-center w-156px h-60px rounded-full text-white cursor-pointer z-20 py-4 transition duration-150 ease-in-out tracking-tight"

    const tabsArray = [
        { text: "라이브카지노", icon: Card, iconDefault: CardDefualt, id: 0, class: "pt-1 mr-4px", classDefault: "pt-6px -mr-3px" },
        { text: "슬롯게임", icon: Slot, iconDefault: SlotDefault, id: 1, class: "pt-1 mr-2px", classDefault: "pt-6px" },
        { text: "스포츠", icon: Sport, iconDefault: SportDefault, id: 2, class: "pt-1 mr-8px", classDefault: "pt-6px" },
        { text: "e-스포츠", icon: Esport, iconDefault: EsportDefault, id: 3, class: "pt-1 mr-6px", classDefault: "pt-6px" },
        { text: "미니게임", icon: Minigame, iconDefault: MinigameDefault, id: 4, class: "pt-1 mr-6px", classDefault: "pt-6px" },
        { text: "키론가상게임", icon: AugmentedGame, iconDefault: AugmentedGameDefault, id: 5, class: "pt-1 mr-6px", classDefault: "pt-6px" },
        { text: "피싱게임", icon: Fishing, iconDefault: FishingDefault, id: 6, class: "pt-1 mr-2px", classDefault: "pt-6px" },
        { text: "로터리게임", icon: Lottery, iconDefault: LotteryDefault, id: 7, class: "pt-1 mr-6px", classDefault: "pt-6px" }
    ];

    function onClickHandle(id) {
        var circle = document.getElementsByClassName("highlight")[0]
        circle.style.transform = "translate3d(" + (id * 157.1) + "px, 0px, 0)"
    }


    function TabsList({ items }) {
        return items.map(item => (
            <button 
                key={item.id} 
                className={selectedTab === item.id ? selectedTabClass : tabClass} 
                onClick={() => {
                    setSelectedTab(item.id)
                    setGameBanner(item.id)
                    onClickHandle(item.id)
                }}
            >
                <img className={`object-none ${selectedTab === item.id ? item.class : item.classDefault}`} src={selectedTab === item.id ? item.icon : item.iconDefault} alt="icon" />
                <label className={"cursor-pointer flex-shrink-0 font-spoqaMedium text-16px pt-px" }>{item.text}</label>
            </button>
        ));
    }

    return (
        <div id="container" className="relative w-full">
            <div className=" flex justify-around w-full rounded-full shadow-subNavbar bg-gradient-to-b from-blue-lightGradLight to-white border-2 border-white">
                <div className="highlight" />
                <TabsList items={tabsArray}/>
            </div>
            <div className="flex w-full h-387px mt-16px">
                <GameBanner selection={isGameBanner}/>
            </div>
        </div>
    )
}

export default SubNavbar
