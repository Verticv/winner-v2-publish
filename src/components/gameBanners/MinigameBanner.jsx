import React from 'react'
import { useHistory } from 'react-router'
import MinigameBanner1 from '../../images/gameBanner/minigame_banner_1.png'
import MinigameBanner2 from '../../images/gameBanner/minigame_banner_2.png'
import MinigameBanner3 from '../../images/gameBanner/minigame_banner_3.png'
import MinigameBanner4 from '../../images/gameBanner/minigame_banner_4.png'
import './GameBanners.css'

const MinigameBanner = () => {
    const history = useHistory();

    const gamesArray = [
        { id: 0, background: MinigameBanner1, color: "bg-purple-d03ab7", btnText: "게임시작", class: "", path: "/minigame/powerball" },
        { id: 1, background: MinigameBanner2, color: "bg-blue-r77a4e0", btnText: "게임시작", class: "", path: "/minigame/powerladder" },
        { id: 2, background: MinigameBanner3, color: "bg-orange-e39e90", btnText: "게임시작", class: "", path: "/minigame/speedkino" },
        { id: 3, background: MinigameBanner4, color: "bg-green-e3ba3c", btnText: "게임시작", class: "", path: "/minigame/kinoladder" }
    ];

    function CardList({ items }) {
        return items.map(item => (
            <div 
                onClick={() => history.push(item.path)}
                key={item.id} 
                className="angled-gradient relative group flex justify-end w-620px h-185px border border-gray-afafaf rounded-lg shadow-plain1 transition cursor-pointer overflow-hidden"
            >
                <img className="z-20" src={item.background} alt="background" />
                <div className={`absolute left-0 bottom-0 ml-20px mb-20px w-115px h-34px rounded-full flex items-center justify-center text-white font-spoqaBold text-14px group-hover:shadow-plain3 ${item.color}`}>{item.btnText}</div>
            </div>
        ));
    }

    return (
        <div className="h-384px grid gap-0 grid-cols-2 gap-x-21px gap-y-17px">
            <CardList items={gamesArray} />
        </div>
    )
}

export default MinigameBanner
