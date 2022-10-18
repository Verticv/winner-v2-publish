import HotelCasino from 'components/mainPage/HotelCasino'
import LiveCasino from 'components/mainPage/LiveCasino'
import Other from 'components/mainPage/Other'
import SlotGame from 'components/mainPage/SlotGame'
import Sports from 'components/mainPage/Sports'
import Tabs from 'components/mainPage/Tabs'
import QuickMenu from 'components/QuickMenu'
import React, { useEffect, useState } from 'react'
import Carousel from '../components/mainPage/Carousel'
import Footer from '../components/mainPage/Footer'
import Navbar from '../components/mainPage/Navbar'
import SubtitleLeft from '../images/subtitle_left.png'
import SubtitleRight from '../images/subtitle_right.png'

const MainPage = ({ isAuthenticated, setAuthenticated }) => {

	function useWindowSize() {
		// Initialize state with undefined width/height so server and client renders match
		// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
		const [windowSize, setWindowSize] = useState({
			width: undefined,
			height: undefined,
		});
		useEffect(() => {
			// Handler to call on window resize
			function handleResize() {
				// Set window width/height to state
				setWindowSize({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			}
			// Add event listener
			window.addEventListener("resize", handleResize);
			// Call handler right away so state gets updated with initial window size
			handleResize();
			// Remove event listener on cleanup
			return () => window.removeEventListener("resize", handleResize);
		}, []); // Empty array ensures that effect is only run on mount
		return windowSize;
	}

	const size = useWindowSize();

	const SubComp = ({ text }) => (
		<div className='flex justify-center h-22px items-center space-x-29px flex-shrink-0'>
			<img src={SubtitleLeft} className="object-none flex-shrink-0 mt-3px" alt="" />
			<h3 style={{ color: '#ad9e8c', fontSize: '24px' }} className="font-spoqaBold h-22px flex items-center flex-shrink-0">{text}</h3>
			<img src={SubtitleRight} className="object-none flex-shrink-0 mt-3px" alt="" />
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
		<div style={{ backgroundColor: '#1e1e1e' }} className="w-full relative flex flex-col justify-center items-start limit:items-center limit1920:overflow-x-hidden">

			<div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
				<Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
			</div>

			<div style={{ width: '1496px', height: 'calc(100vh - 497px)' }} className={`${scrollPosition > 497 ? "top-235px" : "bottom-0"} fixed z-20 flex justify-end`}>
				<QuickMenu scrollPosition={scrollPosition} />
			</div>

			<div style={{marginLeft: size.width < 1261 ? '-324px' : '0px'}} className="flex items-center justify-start limit:justify-center w-screen">
				<Carousel />
			</div>

			<div className="flex flex-col items-start limit:items-center h-full relative z-30">

				<div style={{ marginTop: '31px' }}>
					<Tabs />
				</div>

				<div style={{ marginTop: '20px' }}>
					<SubComp text="슬롯게임" />
				</div>

				<SlotGame />

				<div style={{ marginTop: '29px' }}>
					<SubComp text="라이브카지노" />
				</div>

				<div style={{ marginTop: '7px' }}>
					<LiveCasino />
				</div>

				<div style={{ marginTop: '27px' }}>
					<SubComp text="스포츠" />
				</div>

				<div style={{ marginTop: '27px' }}>
					<Sports />
				</div>

				<div style={{ marginTop: '27px' }}>
					<SubComp text="호텔카지노" />
				</div>

				<div style={{ marginTop: '27px' }}>
					<HotelCasino />
				</div>

				<div style={{ marginTop: '24px' }}>
					<SubComp text="기타게임" />
				</div>

				<div style={{ marginTop: '30px', marginBottom: '92px' }}>
					<Other />
				</div>
			</div>

			<Footer />

		</div>
	)
}

export default MainPage
