import Footer from 'components/mainPage/Footer'
import QuickMenu from 'components/QuickMenu'
import FreeBoardCompose from 'components/freeBoard/FreeBoardCompose'
import FreeBoardMain from 'components/freeBoard/FreeBoardMain'
import FreeBoardView from 'components/freeBoard/FreeBoardView'
import DirectoryComponent from 'components/myPage/DirectoryComponent'
import Navbar from 'components/mainPage/Navbar'
import React, { useEffect, useState } from 'react'
import { Route } from 'react-router'
import FreeBoardBanner from '../images/freeBoard/free_board_banner_v2.png'
import FreeBoardView2 from 'components/freeBoard/FreeBoardView2'

const Freeboard = ({isAuthenticated, setAuthenticated}) => {
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
    <div className="relative flex flex-col justify-center items-center limit1920:overflow-x-hidden bg-gray-1e1e1e">
      <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
        <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
      </div>
      <div style={{ width: '1496px',top: scrollPosition>200?'235px':'430px' }} className={`right-208px fixed z-20 flex justify-end`}>
        <QuickMenu scrollPosition={scrollPosition}/>
      </div>
      <div className="flex flex-col items-start limit:items-center mt-104px w-full h-full">
        <Route exact path="/freeboard">
          <DirectoryComponent 
            branch1="게시판" 
            mainPath="/freeboard"
          />
        </Route>
        <Route path="/freeboard/view">
          <DirectoryComponent 
            branch1="게시판" 
            branch2="뷰"
            mainPath="/freeboard/view"
          />
        </Route>
        <Route path="/freeboard/view2">
          <DirectoryComponent 
            branch1="게시판" 
            branch2="뷰"
            mainPath="/freeboard/view"
          />
        </Route>
        <Route path="/freeboard/compose">
          <DirectoryComponent 
            branch1="게시판" 
            branch2="작성하기"
            mainPath="/freeboard/compose"
          />
        </Route>
        <div className="relative w-default h-125px">
          <img className="z-10 mt-px" src={FreeBoardBanner} alt="" />
          <div className='font-spoqaMedium z-20 absolute top-0 text-28px w-full h-full flex items-center justify-center' style={{ color: '#ffdfbd'}}><span className='leading-none mt-2px'>게시판</span></div>
        </div>

         <div className="mt-20px w-default z-30">
          <Route exact path="/freeboard">
            <FreeBoardMain />
          </Route>
          <Route path="/freeboard/view">
            <FreeBoardView />
          </Route>
          <Route path="/freeboard/view2">
            <FreeBoardView2 />
          </Route>
          <Route path="/freeboard/compose">
            <FreeBoardCompose />
          </Route>
        </div> 
        <div>
          <Footer />
        </div> 

      </div>
    </div>
  )
}

export default Freeboard
