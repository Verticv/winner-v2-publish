import React, { useEffect, useState } from 'react'
import visual2 from '../../images/carousel/visual2.png'
import visual3 from '../../images/carousel/visual3.png'
import LeftArrow from '../../images/arrows/gold_arrow_left.png'
import RightArrow from '../../images/arrows/gold_arrow_right.png'
import NoticeBanner from './NoticeBanner'
import { useHistory } from 'react-router-dom'

const images = [visual2, visual3]
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']
// images must be an array of urls , if using Next JS this could something like
// const images = ['/img/img1.png', '/img/img2.png', '/img/img3.png']


const Carousel = () => {

	// We will start by storing the index of the current image in the state.
	const [currentImage, setCurrentImage] = useState(0);
	const [isHover, setHover] = useState(false);

	const history = useHistory()
	// Some validation for checking the array length could be added if needed
	const totalImages = images.length;

	// Below functions will assure that after last image we'll scroll back to the start,
	// or another way round - first to last in previousImage method.
	const nextImage = () => {
		if (currentImage >= totalImages - 1) {
			setCurrentImage(0);
		} else {
			setCurrentImage(currentImage + 1);
		}
	};

	const previousImage = () => {
		if (currentImage === 0) {
			setCurrentImage(totalImages - 1);
		} else {
			setCurrentImage(currentImage - 1);
		}
	};

	// Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
	const arrowStyle = "absolute z-10 hover:brightness-125 filter"

	// Let's create dynamic buttons. It can be either left or right. Using
	// isLeft boolean we can determine which side we'll be rendering our button
	// as well as change its position and content.

	const leftArrow = (
		<img className="object-none" src={LeftArrow} alt="arrow" />

	)

	const rightArrow = (
		<img className="object-none" src={RightArrow} alt="arrow" />
	)

	const sliderControl = isLeft => (
		<button
			type="button"
			onClick={isLeft ? previousImage : nextImage}
			style={{ left: isLeft && '295px', right: !isLeft && "295px" }}
			className={`${arrowStyle} mb-minus105 hover:opacity-50 filter opacity-30`}
		>
			{isLeft ? leftArrow : rightArrow}
		</button>
	);

	const positionIndicator = (
		<div style={{ marginBottom: '65px' }} className="absolute z-10 w-full flex justify-center bottom-0 space-x-3px">
			{images.map((img, i) => (
				<button key={i} className="w-14px h-14px bg-black rounded-full p-2px" onClick={() => setCurrentImage(i)}>
					{currentImage === i && (
						<div style={{ backgroundColor: '#a67c52' }} className="w-full h-full rounded-full bg-blue-gradDark" />
					)}
				</button>
			))}
		</div>
	)

	const imagesDisplay = (
		<>
			{images.map((img, i) => (
				<img onClick={() => currentImage === i ? history.push('/live-casino') : history.push('/bet-combination')} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} key={i} src={images[i]} className={`${currentImage === i ? "opacity-100" : "opacity-0"} ${i === 1 && "absolute top-0"} w-full object-none transition duration-300 cursor-pointer`} alt={"banner_images"} />
			))}
		</>
	)

	useEffect(
		() => {
			let timer1 = setTimeout(() => {
				if (isHover === false) {
					if (currentImage === 0) {
						setCurrentImage(1)
					} else {
						setCurrentImage(0)
					}
				}

			}, 5000);
			return () => {
				clearTimeout(timer1);
			};
		},
		[currentImage, isHover]
	);

	return (

		<div className="flex w-1920 flex-shrink-0  h-491px">
			<div className="relative w-1920 h-491px flex items-center justify-center">
				{sliderControl(true)}
				{imagesDisplay}
				{sliderControl()}
				{positionIndicator}
				<div className="absolute bottom-0 mb-10px flex-shrink-0 z-30 flex items-end justify-center">
					<NoticeBanner />
				</div>
			</div>
		</div>
	)
}

export default Carousel
