import React from 'react'
import { useHistory } from 'react-router'
import SportsBanner1 from '../../images/gameBanner/sports_banner_1.png'
import SportsBanner2 from '../../images/gameBanner/sports_banner_2.png'
import SportsBanner3 from '../../images/gameBanner/sports_banner_3.png'
import './GameBanners.css'

const SportsBanner = () => {

    const history = useHistory();

    const gamesArray = [
        { id: 0, background: SportsBanner1, color: "bg-yellow-e3ba3c", btnText: "게임시작", class: "" },
        { id: 1, background: SportsBanner2, color: "bg-blue-r3384ca", btnText: "게임시작", class: "", path: "/bet-combination" },
        { id: 2, background: SportsBanner3, color: "bg-orange-e39e90", btnText: "게임시작", class: "", path: "/bet-combination" },
    ];

    function BannerList({ items }) {
        return items.map(item => (
            <>
                {item.link ? (
                    <a 
                        href={item.link}
                        key={item.id} 
                        className="angled-gradient relative group flex w-407px h-387px object-contain border border-gray-afafaf justify-end rounded-lg shadow-plain1 transition cursor-pointer overflow-hidden" 
                    >
                        <img className="z-20 object-none" src={item.background} alt="background" />
                        <div className={`absolute z-20 left-0 bottom-0 ml-30px mb-34px w-124px h-44px rounded-full flex items-center justify-center text-white font-spoqaBold text-18px group-hover:shadow-plain3 ${item.color}`}>{item.btnText}</div>
                    </a>
                ) : (
                    <button 
                        onClick={() => history.push(item.path)}
                        key={item.id} 
                        className="angled-gradient relative group flex w-407px h-387px object-contain border border-gray-afafaf justify-end rounded-lg shadow-plain1 transition cursor-pointer overflow-hidden" 
                    >
                        <img className="z-20 object-none" src={item.background} alt="background" />
                        <div className={`absolute z-20 left-0 bottom-0 ml-30px mb-34px w-124px h-44px rounded-full flex items-center justify-center text-white font-spoqaBold text-18px group-hover:shadow-plain3 ${item.color}`}>{item.btnText}</div>
                    </button>
                )}
            
            </>
        ));
    }

    return (
        <div className="flex bg-white h-387px w-full justify-between rounded">
            <BannerList items={gamesArray} />
        </div>
    )
}

export default SportsBanner
