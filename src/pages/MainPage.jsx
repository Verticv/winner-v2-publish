import LiveCasino from 'components/mainPage/LiveCasino'
import NoticeBanner from 'components/mainPage/NoticeBanner'
import Other from 'components/mainPage/Other'
import SlotGame from 'components/mainPage/SlotGame'
import Sports from 'components/mainPage/Sports'
import Tabs from 'components/mainPage/Tabs'
import QuickMenu from 'components/QuickMenu'
import React, { useEffect, useState } from 'react'
import Carousel from '../components/mainPage/Carousel'
import Footer from '../components/mainPage/Footer'
import Navbar from '../components/mainPage/Navbar'
import Subtitle from '../images/subtitle.png'

const MainPage = ({isAuthenticated, setAuthenticated}) => {

	const SubComp = ({text}) => (
		<div className='relative flex justify-center h-22px items-center'>
			<img src={Subtitle} className="object-none flex-shrink-0" alt="" />
			<h3 style={{color:'#ad9e8c', fontSize:'24px'}} className="font-spoqaBold absolute">{text}</h3>
		</div>
	)

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
		<div style={{backgroundColor:'#1e1e1e'}} className="w-full relative flex flex-col justify-center items-center overflow-x-hidden">
			
			<div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
				<Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
			</div>

			<div style={{width:'1496px', height:'calc(100vh - 497px)'}} className={`${scrollPosition > 497 ? "top-200px" : "bottom-0"} fixed z-20 flex justify-end`}>
				<QuickMenu />
			</div>

			<div className="w-screen flex flex-col z-10">
				<div className="absolute top-0 flex justify-start limit:justify-center items-center w-screen">
					<Carousel />
				</div>

				<div style={{marginTop:'452px'}} className="flex-shrink-0 z-30 flex items-end justify-center">
					<NoticeBanner />
				</div>
			</div>
			
			<div className="flex flex-col items-start limit:items-center h-full relative z-30">	

				<div style={{marginTop:'21px'}}>
					<Tabs />
				</div>

				<div style={{marginTop:'22px'}}>
					<SubComp text="슬롯게임" />
				</div>

				<SlotGame />

				<div style={{marginTop:'29px'}}>
					<SubComp text="라이브카지노" />
				</div>

				<div style={{marginTop:'7px'}}>
					<LiveCasino />
				</div>

				<div style={{marginTop:'27px'}}>
					<SubComp text="스포츠" />
				</div>

				<div style={{marginTop:'27px'}}>
					<Sports />
				</div>

				<div style={{marginTop:'24px'}}>
					<SubComp text="기타게임" />
				</div>

				<div style={{marginTop:'30px', marginBottom:'92px'}}>
					<Other />
				</div>
			</div>

			<Footer />

		</div>
	)
}

export default MainPage
