import React, { useState } from 'react'
import Koreaflag from '../../images/korea_flag.png'
import UKflag from '../../images/uk_flag.png'

const CountryDropDown = ({setCountry, country}) => {

	const [selectedTab, setSelectedTab] = useState(country === "KR" ? 0 : 1)
	const [hoveredTab, setHoveredTab] = useState(null)

	const countriesArray = [
		{ icon: Koreaflag, text: "KR", id: 0 },
		{ icon: UKflag, text: "EN", id: 1 },
	];

	function CountriesList({ items }) {
		return items.map(item => (
			<button 
				key={item.id}
				className={`${
					(selectedTab === item.id) 
					? "bg-brown-r3d3934" 
					: (hoveredTab === item.id)
					? "bg-opacity-5 bg-white"
					: ""
				} flex w-full items-center h-30px pl-4px`} 
				onMouseOver={() => {setHoveredTab(item.id)}}
				onMouseLeave={() => setHoveredTab(null)}
				onClick={
						() => {setSelectedTab(item.id)
						setCountry(item.text)}
				}
			>
				<img src={item.icon} alt="flag"></img>
				<label style={{color:'#ffdfbd'}} className="font-spoqaBold cursor-pointer text-12px text-yellow-ad9e8c cursor-pointer ml-10px">{item.text}</label>    
			</button>
		));
	}

	return (
		<div 
			style={{height:'62px', width:'78px', borderWidth:'1px', borderColor:'#2c2c2c', borderRadius:'2px', backgroundColor:'#1f1f1e'}} 
			className="flex flex-col shadow-plain -mt-13px -mr-2px"
		>
			<CountriesList items={countriesArray} />
		</div>
	)
}

export default CountryDropDown
