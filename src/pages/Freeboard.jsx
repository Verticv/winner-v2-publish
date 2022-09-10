import Footer from 'components/mainPage/Footer'
import QuickMenu from 'components/QuickMenu'
import FreeBoardCompose from 'components/freeBoard/FreeBoardCompose'
import FreeBoardMain from 'components/freeBoard/FreeBoardMain'
import FreeBoardView from 'components/freeBoard/FreeBoardView'
import DirectoryComponent from 'components/myPage/DirectoryComponent'
import Navbar from 'components/mainPage/Navbar'
import React from 'react'
import { Route } from 'react-router'
import FreeBoardBanner from '../images/freeBoard/free_board_banner_v2.png'
import FreeBoardView2 from 'components/freeBoard/FreeBoardView2'

const Freeboard = ({isAuthenticated, setAuthenticated}) => {

  return (
    <div className="relative flex flex-col justify-center limit:overflow-x-hidden bg-gray-1e1e1e">
      <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
        <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
      </div>
      <div style={{top: '430px',right: '208px'}} className={`right-208px fixed z-20 flex justify-end`}>
        <QuickMenu />
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
        </div>

         <div className="mt-20px w-default">
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
