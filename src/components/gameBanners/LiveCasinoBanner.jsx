import React from 'react'
import EvolutionBg from '../../images/cardBg/evo_bg.png'
import AsiaBg from '../../images/cardBg/asia_bg.png'
import PragmaticBg from '../../images/cardBg/prag_bg.png'
import DgBg from '../../images/cardBg/dg_bg.png'
import SexyBg from '../../images/cardBg/sexy_bg.png'
import BigBg from '../../images/cardBg/big_bg.png'
import WinnerBg from '../../images/cardBg/winner_bg.png'
import './GameBanners.css'
import { useHistory } from 'react-router-dom'

const LiveCasinoBanner = () => {

    const history = useHistory()
    const cardClass = "group relative flex justify-end w-300px h-185px border border-gray-afafaf rounded-lg shadow-plain1 transition cursor-pointer border border-gray-afafaf overflow-hidden"

    const gamesArray = [
        { id: 0, img: EvolutionBg, color: "bg-teal-r4eb2ba", btnText: "게임시작", class: "" },
        { id: 1, img: AsiaBg, color: "bg-blue-r3384ca", btnText: "게임시작", class: "" },
        { id: 2, img: PragmaticBg, color: "bg-purple-d03ab7", btnText: "게임시작", class: "" },
        { id: 3, img: DgBg, color: "bg-orange-e39e90", btnText: "게임시작", class: "" },
        { id: 4, img: SexyBg, color: "bg-red-db4a4a", btnText: "게임시작", class: "" },
        { id: 5, img: BigBg, color: "bg-yellow-e3ba3c", btnText: "게임시작", class: "" },
        { id: 6, img: WinnerBg, color: "bg-gray-b2b2b2", btnText: "준비중", class: "" },
        { id: 7, img: WinnerBg, color: "bg-gray-b2b2b2", btnText: "준비중", class: "" },
    ];

    function CardList({ items }) {
        return items.map(item => (
            <div 
                key={item.id} 
                className={`${cardClass} ${item.id !==6 && item.id !==7 && "angled-gradient"}`} 
                onClick={() => item.id !==6 && item.id !==7 && history.push('/live-casino')}
            >
                <img className="z-20 object-none" src={item.img} alt="background" />
                <div className={`${item.id !== 6 && item.id !== 7 && "group-hover:shadow-plain3 "} absolute z-20 left-0 bottom-0 ml-19px mb-19px w-85px h-34px rounded-full flex items-center justify-center text-white font-spoqaBold text-14px pt-px ${item.color}`}>{item.btnText}</div>
            </div>
        ));
    }

    return (
        <div className="grid grid-cols-4 w-full gap-x-20px gap-y-17px">
            <CardList items={gamesArray} />
        </div>
    )
}

export default LiveCasinoBanner
