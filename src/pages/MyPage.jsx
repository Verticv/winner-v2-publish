import Navbar from 'components/mainPage/Navbar'
import QuickMenu from 'components/QuickMenu'
import React, { useState, useEffect } from 'react'
import MyPageBanner from '../images/myPage/mypage_banner_v2.png'
import LeftMenu from 'components/myPage/LeftMenu'
import Footer from 'components/mainPage/Footer'
import { Route } from 'react-router-dom'
import BetHistory from 'components/myPage/BetHistory'
import DirectoryComponent from 'components/myPage/DirectoryComponent'
import ChargeHistory from 'components/myPage/ChargeHistory'
import ExchangeHistory from 'components/myPage/ExchangeHistory'
import WinLoseSettlement from 'components/myPage/WinLoseSettlement'
import CouponUsage from 'components/myPage/CouponUsage'
import CouponGift from 'components/myPage/CouponGift'
import CouponHistory from 'components/myPage/CouponHistory'
import PointsApply from 'components/myPage/PointsApply'
import PointsAccumulate from 'components/myPage/PointsAccumulate'
import PointsTransaction from 'components/myPage/PointsTransaction'
import EditInfo from 'components/myPage/EditInfo'
import Inbox from 'components/myPage/Inbox'
import InboxView from 'components/myPage/InboxView'
import { useLocation } from 'react-router-dom'
import Icon1 from '../images/myPage/leftMenu/menuIcons/menuL_icon_01.png'
import Icon2 from '../images/myPage/leftMenu/menuIcons/menuL_icon_02.png'
import Icon3 from '../images/myPage/leftMenu/menuIcons/menuL_icon_03.png'
import Icon4 from '../images/myPage/leftMenu/menuIcons/menuL_icon_04.png'
import Icon5 from '../images/myPage/leftMenu/menuIcons/menuL_icon_05.png'
import Icon6 from '../images/myPage/leftMenu/menuIcons/menuL_icon_06.png'
import Icon7 from '../images/myPage/leftMenu/menuIcons/menuL_icon_07.png'
import Icon8 from '../images/myPage/leftMenu/menuIcons/menuL_icon_08.png'

const MyPage = ({isAuthenticated, setAuthenticated}) => {
 
    const LeftMenuArray = [
        { text: "베팅내역", icon: Icon1, iconHighlight: Icon1, id: 0, path: "/mypage/bet-history", mainPath:"/mypage/bet-history" },
        { 
            text: "충/환전내역", 
            icon: Icon2, 
            iconHighlight: Icon2, 
            id: 1, 
            path: "/mypage/transaction/charge-history", 
            sub1: "충전내역", 
            sub2: "환전내역",
            path2: "/mypage/transaction/exchange-history",
            mainPath: "/mypage/transaction"
        },
        { text: "총판페이지", icon: Icon3, iconHighlight: Icon3, id: 2, path: "/distributor-page", mainPath:"/distributor-page" },
        { text: "윈루즈정산", icon: Icon4, iconHighlight: Icon4, id: 3, path: "/mypage/win-lose-settlement", mainPath:"/mypage/win-lose-settlement" },
        { 
            text: "쿠폰관리",
            icon: Icon5, 
            iconHighlight: Icon5, 
            id: 4, 
            path: "/mypage/coupon/coupon-usage", 
            sub1: "쿠폰사용",
            sub2: "쿠폰선물",
            sub3: "쿠폰내역",
            path2: "/mypage/coupon/coupon-gift", 
            path3: "/mypage/coupon/coupon-history/received",
            path3_1: "/mypage/coupon/coupon-history/sent",
            mainPath: "/mypage/coupon"
        },
        { 
            text: "포인트", 
            icon: Icon6, 
            iconHighlight: Icon6, 
            id: 5, 
            path: "/mypage/points/points-apply", 
            sub1: "포인트전환신청",
            sub2: "포인트적립내역",
            sub3: "포인트전환내역",
            path2: "/mypage/points/points-accumulate-history", 
            path3: "/mypage/points/points-transaction-history",
            mainPath: "/mypage/points"
        },
        { text: "쪽지관리", icon: Icon7, iconHighlight: Icon7, id: 6, path: "/mypage/inbox", inboxCount: "3", mainPath:"/mypage/inbox" },
        { text: "회원정보수정", icon: Icon8, iconHighlight: Icon8, id: 7, path: "/mypage/edit-info", mainPath:"/mypage/edit-info" }
    ];

    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(location.pathname)
    const [selectedSubTab, setSelectedSubTab] = useState(location.pathname)
    console.log('selectedTab', selectedTab, selectedSubTab)
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
        <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center bg-black">
          <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
        </div>
        <div style={{width: '1496px'}} className={`${scrollPosition > 100 ? "top-235px":"top-428px"} fixed z-20 flex justify-end`}>
          <QuickMenu scrollPosition={scrollPosition} />
        </div>
        <div className="flex flex-col items-start limit:items-center mt-104px w-full h-full">
         
          <Route path="/mypage/bet-history">
            <DirectoryComponent 
              setSelectedTab={setSelectedTab}
              setSelectedSubTab={setSelectedSubTab}
              branch2="베팅내역" 
              mainPath="/mypage/bet-history"
            />
          </Route>
          <Route path="/mypage/transaction/charge-history">
            <DirectoryComponent 
              setSelectedTab={setSelectedTab} 
              setSelectedSubTab={setSelectedSubTab}
              branch2="충/환전내역" 
              branch3="충전내역"
              mainPath="/mypage/transaction/charge-history"
            />
          </Route>
          <Route path="/mypage/transaction/exchange-history">
            <DirectoryComponent 
              setSelectedTab={setSelectedTab} 
              setSelectedSubTab={setSelectedSubTab}
              branch2="충/환전내역"
              branch3="환전내역" 
              mainPath="/mypage/transaction/charge-history"
            />
          </Route>
          <Route path="/mypage/win-lose-settlement">
            <DirectoryComponent 
              setSelectedTab={setSelectedTab} 
              setSelectedSubTab={setSelectedSubTab}
              branch2="윈루즈정산" 
              mainPath="/mypage/win-lose-settlement"
            />
          </Route>
          <Route path="/mypage/coupon/coupon-usage">
            <DirectoryComponent 
              setSelectedTab={setSelectedTab} 
              setSelectedSubTab={setSelectedSubTab}
              branch2="쿠폰관리" 
              branch3="쿠폰사용" 
              mainPath="/mypage/coupon/coupon-usage"
            />
          </Route>
          <Route path="/mypage/coupon/coupon-gift">
            <DirectoryComponent 
              setSelectedTab={setSelectedTab} 
              setSelectedSubTab={setSelectedSubTab}
              branch2="쿠폰관리" 
              branch3="쿠폰선물" 
              mainPath="/mypage/coupon/coupon-usage"
            />
          </Route>
          <Route path="/mypage/coupon/coupon-history">
            <DirectoryComponent 
              setSelectedTab={setSelectedTab} 
              setSelectedSubTab={setSelectedSubTab}
              branch2="쿠폰관리" 
              branch3="쿠폰내역" 
              mainPath="/mypage/coupon/coupon-usage"
            />
          </Route>
          <Route path="/mypage/points/points-apply">
            <DirectoryComponent 
              setSelectedTab={setSelectedTab} 
              setSelectedSubTab={setSelectedSubTab}
              branch2="포인트" 
              branch3="포인트전환신청" 
              mainPath="/mypage/points/points-apply"
            />
          </Route>
          <Route path="/mypage/points/points-accumulate-history">
            <DirectoryComponent 
              setSelectedTab={setSelectedTab} 
              setSelectedSubTab={setSelectedSubTab}
              branch2="포인트" 
              branch3="포인트적립내역" 
              mainPath="/mypage/points/points-apply"
            />
          </Route>
          <Route path="/mypage/points/points-transaction-history">
            <DirectoryComponent 
              setSelectedTab={setSelectedTab} 
              setSelectedSubTab={setSelectedSubTab}
              branch2="포인트" 
              branch3="포인트전환내역" 
              mainPath="/mypage/points/points-apply"
            />
          </Route>
          <Route exact path="/mypage/inbox">
            <DirectoryComponent 
              setSelectedTab={setSelectedTab} 
              setSelectedSubTab={setSelectedSubTab}
              branch2="쪽지관리" 
              mainPath="/mypage/inbox"
            />
          </Route>
          <Route path="/mypage/inbox/*">
            <DirectoryComponent 
              setSelectedTab={setSelectedTab} 
              setSelectedSubTab={setSelectedSubTab}
              branch2="쪽지관리" 
              branch3="뷰" 
              mainPath="/mypage/inbox"
            />
          </Route>
          <Route path="/mypage/edit-info">
            <DirectoryComponent 
              setSelectedTab={setSelectedTab} 
              setSelectedSubTab={setSelectedSubTab}
              branch2="회원정보수정" 
              mainPath="/mypage/edit-info"
            />
          </Route>

          <div className="h-125px w-default relative">
            <img className="z-10" src={MyPageBanner} alt="" />
            <div className='font-spoqaMedium z-20 absolute top-0 text-28px w-full h-full flex items-center justify-center' style={{ color: '#ffdfbd'}}><span className='leading-none mt-2px'>마이페이지</span></div>
          </div>

          <div className="flex mt-20px w-default z-30">
            <div>
              <LeftMenu 
                selectedTab={selectedTab} 
                setSelectedTab={setSelectedTab} 
                selectedSubTab={selectedSubTab} 
                setSelectedSubTab={setSelectedSubTab}
                array={LeftMenuArray}
              />
            </div>

            <div className="ml-20px w-1040px">
              <Route path="/mypage/bet-history">
                <BetHistory />
              </Route>
              <Route path="/mypage/transaction/charge-history">
                <ChargeHistory />
              </Route>
              <Route path="/mypage/transaction/exchange-history">
                <ExchangeHistory />
              </Route>
              <Route path="/mypage/win-lose-settlement">
                <WinLoseSettlement />
              </Route>
              <Route path="/mypage/coupon/coupon-usage">
                <CouponUsage />
              </Route>
              <Route path="/mypage/coupon/coupon-gift">
                <CouponGift />
              </Route>
              <Route path="/mypage/coupon/coupon-history">
                  <CouponHistory />
              </Route>
              <Route path="/mypage/points/points-apply">
                <PointsApply />
              </Route>
              <Route path="/mypage/points/points-accumulate-history">
                <PointsAccumulate />
              </Route>
              <Route path="/mypage/points/points-transaction-history">
                <PointsTransaction />
              </Route>
              <Route exact path="/mypage/inbox">
                <Inbox />
              </Route>
              <Route path="/mypage/inbox/*">
                <InboxView />
              </Route>
              <Route path="/mypage/edit-info">
                <EditInfo />
              </Route>
              <Route path="*">
              </Route> 
            </div>
          </div>

          <div>
            <Footer />
          </div>

        </div>
      </div>
    )
}

export default MyPage


