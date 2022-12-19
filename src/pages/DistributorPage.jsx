import Footer from "components/mainPage/Footer";
import Pagination from "components/myPage/Pagination";
import Navbar from "components/mainPage/Navbar";

import React, { useState } from "react";
import DistributorBanner from "../images/myPage/distributor/distributor_banner_v2.png";
import SummaryIcon from "../images/myPage/distributor/summary_icon_v2.png";
import PieIcon from "../images/myPage/distributor/pie.png";
import DetailIcon from "../images/myPage/distributor/detail.png";
import MemberIcon from "../images/myPage/distributor/member.png";
import RecommendIcon from "../images/myPage/distributor/recommend.png";
import SummaryIcon1 from "../images/myPage/distributor/summary/img1_v2.png";
import SummaryIcon2 from "../images/myPage/distributor/summary/img2_v2.png";
import SummaryIcon3 from "../images/myPage/distributor/summary/img3_v2.png";
import SummaryIcon4 from "../images/myPage/distributor/summary/img4_v2.png";
import SummaryIcon5 from "../images/myPage/distributor/summary/img5_v2.png";
import SummaryIcon6 from "../images/myPage/distributor/summary/img6_v2.png";
import SummaryIcon7 from "../images/myPage/distributor/summary/img7_v2.png";
import SummaryIcon8 from "../images/myPage/distributor/summary/img8_v2.png";
import DateSearchBar from "components/myPage/DateSearchBar";
import Diamond from "../images/myPage/diamond.png";
import SmallDiamond from "../images/myPage/small_diamond.png";
import GrayArrow from "../images/arrows/gray_arrow_distributor.png";
import WhiteArrow from "../images/arrows/white_arrow.png";
import ReplyArrow from "../images/arrows/reply_arrow_v2.png";
import BlueTriangle from "../images/golden_triangle.png";
import DefaultUser from "../images/myPage/distributor/default_v2.png";

const DistributorPage = ({ isAuthenticated, setAuthenticated }) => {
  const username = "Louie3Louie3Louie3Louie3";
  const RecommendedUserArray = [
    {
      id: 0,
      number: 1,
      username: "louie32",
      name: "김선도",
      nickname: "위너테스트2",
      user_count: 3,
      recommended_date: "2021-07-21",
      login_date: "2021-06-03",
      absent_date: "-47일",
      added_amount: 0,
      bonus: 0,
      withdraw_amount: 0,
      added_withdraw_amount: 0,
      bet_amount: 0,
      win_lose: 0,
      point: 0,
      holding_amount: 0,
      hasSubArray: true,
    },
    {
      id: 3,
      number: 2,
      username: "louie32",
      name: "김선도",
      nickname: "위너테스트2",
      user_count: 0,
      recommended_date: "2021-07-21",
      login_date: "2021-06-03",
      absent_date: "-47일",
      added_amount: 0,
      bonus: 0,
      withdraw_amount: 0,
      added_withdraw_amount: 0,
      bet_amount: 0,
      win_lose: 0,
      point: 0,
      holding_amount: 0,
    },
    {
      id: 6,
      number: 3,
      username: "louie32",
      name: "김선도",
      nickname: "위너테스트2",
      user_count: 0,
      recommended_date: "2021-07-21",
      login_date: "2021-06-03",
      absent_date: "-47일",
      added_amount: 0,
      bonus: 0,
      withdraw_amount: 0,
      added_withdraw_amount: 0,
      bet_amount: 0,
      win_lose: 0,
      point: 0,
      holding_amount: 0,
    },
    {
      id: 9,
      number: 4,
      username: "louie32",
      name: "김선도",
      nickname: "위너테스트2",
      user_count: 0,
      recommended_date: "2021-07-21",
      login_date: "2021-06-03",
      absent_date: "-47일",
      added_amount: 0,
      bonus: 0,
      withdraw_amount: 0,
      added_withdraw_amount: 0,
      bet_amount: 0,
      win_lose: 0,
      point: 0,
      holding_amount: 0,
      isLast: true,
    },
  ];

  const RecommendedUserArray2 = [
    {
      id: 12,
      number: 1,
      username: "louie33",
      nickname: "위너테스트3",
      user_count: 0,
      recommended_date: "2021-07-21",
      login_date: "2021-06-03",
      absent_date: "-47일",
      added_amount: 0,
      bonus: 0,
      withdraw_amount: 0,
      added_withdraw_amount: 0,
      bet_amount: 0,
      win_lose: 0,
      point: 0,
      holding_amount: 0,
      hasSubArray: false,
    },
  ];

  const [page, setPage] = useState(0);
  const [isArrowUp, setArrowUp] = useState(new Array(8).fill(false));
  const [viewOnline, setViewOnline] = useState(false);

  const handleOnChange = (position) => {
    const updatedCheckedState = isArrowUp.map((item, index) =>
      index === position ? !item : item
    );
    setArrowUp(updatedCheckedState);
  };

  const SummaryCard = ({ text, img, count }) => (
    <div
      style={{
        background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)",
      }}
      className="w-227px h-165px rounded-10px flex flex-col items-center justify-center overflow-hidden shadow-navbar p-px"
    >
      <div className="w-full h-163px flex flex-col items-center justify-start rounded-10px bg-gray-323232">
        <img className="mt-19px object-none" src={img} alt="" />
        <span className="mt-3px font-spoqaMedium tracking-tight text-18px text-gray-ccc2b6">
          {text}
        </span>
        <span className="mt-2px font-spoqaBold tracking-tight text-26px text-golden-aa9264">
          {count}
        </span>
      </div>
    </div>
  );

  const PercentageCell = ({ innerTable = false }) => (
    <>
      <div className="w-full flex">
        <div className="w-40px mt-10px flex justify-center items-start"></div>
        <div className="w-full flex flex-col overflow-x-auto overflow-y-hidden">
          <div
            style={{
              width: "fit-content",
              paddingRight: innerTable ? "30px" : 0,
            }}
            className="pr-30px flex h-56px border-b border-gray-242424 items-center text-gray-ccc2b6 font-spoqaMedium text-14px tracking-tight bg-gray-242424 flex-shrink-0"
          >
            <div
              style={{ backgroundColor: "rgb(29,30,31)" }}
              className="w-85px h-full flex items-center justify-center bg-gray-1a1b1c"
            >
              <div
                className="h-full flex items-center justify-center"
                style={{ width: "85px" }}
              >
                구분
              </div>
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              스포츠
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              미니게임
            </div>

            <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>프레그메틱</span>
              <span>플레이</span>
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              에볼루션
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              로얄지
            </div>
            <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>아시아</span>
              <span>게이밍</span>
            </div>
            <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>드림</span>
              <span>게이밍</span>
            </div>
            <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>섹시</span>
              <span>게이밍</span>
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              빅게이밍
            </div>
            <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>오리엔탈</span>
              <span>게임</span>
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              이주기
            </div>
            <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>마이크로</span>
              <span>게이밍</span>
            </div>
            <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>YGG</span>
              <span>드라실</span>
            </div>
            <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>드라군</span>
              <span>소프트</span>
            </div>

            <div className="w-81px h-full flex items-center justify-center">
              분고
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              플레이슨
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              넷엔트
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              퀵스핀
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              스페이드
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              하바네로
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              월드매치
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              엘리시움
            </div>
            <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>플레이</span>
              <span>엔고</span>
            </div>
            <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>YL</span>
              <span>게이밍</span>
            </div>
            <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>레드</span>
              <span>타이거</span>
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              플레이텍
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              스카이윈드
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              씨큐나인
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              올웨이스핀
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              와즈단
            </div>
            <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>PG</span>
              <span>소프트</span>
            </div>
            <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>로얄슬롯</span>
              <span>게이밍</span>
            </div>

            <div className="w-81px h-full flex items-center justify-center">
              두윈카지노
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              보타카지노
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              e-스포츠
            </div>
            <div className="w-81px h-full flex flex-col items-center justify-center -space-y-4px mr-2px">
              <span>키론</span>
              <span>가상게임</span>
            </div>
            <div className="w-100px h-full flex items-center justify-center pr-3px">
              관리
            </div>
          </div>
          <div
            style={{
              width: "fit-content",
              paddingRight: innerTable ? "30px" : 0,
            }}
            className="pr-30px flex h-56px items-center text-14px tracking-tight font-roboto text-gray-c8c8c8 border-b border-gray-242424 bg-gray-323232 flex-shrink-0"
          >
            <div
              style={{ backgroundColor: "rgb(44,44,44)" }}
              className="w-85px h-full flex items-center justify-center font-spoqaMedium text-gray-ccc2b6 bg-gray-181a1d"
            >
              <div
                className="h-full flex items-center justify-center"
                style={{ width: "85px" }}
              >
                변경
              </div>
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-81px h-full flex items-center justify-center">
              0.00%
            </div>
            <div className="w-100px h-full flex items-center justify-center mr-4px">
              <button
                style={{
                  width: "65px",
                  background: "linear-gradient(to top, #4b3b09, #e8b888)",
                }}
                className={` flex items-center justify-center h-36px w-87px rounded-4px filter hover:brightness-125 shadow-link`}
              >
                <div
                  style={{
                    width: "63px",
                    background: "linear-gradient(to bottom, #a67c52, #7f5f3f)",
                  }}
                  className={` flex items-center justify-center h-34px w-85px rounded-4px  cursor-pointer space-x-10px`}
                >
                  <span
                    style={{ color: "#ffe8bd" }}
                    className="font-spoqaMedium tracking-tight text-14px text-white text-shadow-5"
                  >
                    수정
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const DetailCell = ({ innerTable = false, innerTable2 }) => (
    <>
      <div className="w-full flex">
        <div className="w-39px mt-10px flex justify-center items-start"></div>
        <div className="w-full flex flex-col border-gray-242424 border-b overflow-x-auto bg-gray-323232">
          <div className="flex h-56px  items-center bg-gray-323232">
            <div className="ml-8px pr-3px w-235px h-38px rounded-full bg-gray-2e2e2e border-2 border-gray-635f5b flex items-center justify-center font-spoqaMedium text-14px tracking-tight">
              <img className="mr-10px" src={SmallDiamond} alt="" />
              <div className="flex items-center space-x-4px">
                <span className="text-white">입금 :</span>
                <span className="text-yellow-ffcc00">000,000,000</span>
              </div>
            </div>
            <div className="ml-5px pr-3px w-235px h-38px rounded-full bg-gray-2e2e2e border-2 border-gray-635f5b flex items-center justify-center font-spoqaMedium text-14px tracking-tight">
              <img className="mr-10px" src={SmallDiamond} alt="" />
              <div className="flex items-center space-x-4px">
                <span className="text-white">보너스 :</span>
                <span className="text-yellow-ffcc00">0</span>
              </div>
            </div>
            <div className="ml-5px pr-20px w-235px h-38px rounded-full bg-gray-2e2e2e border-2 border-gray-635f5b flex items-center justify-center font-spoqaMedium text-14px tracking-tight">
              <img className="mr-10px" src={SmallDiamond} alt="" />
              <div className="flex items-center space-x-4px">
                <span className="text-white">출금 :</span>
                <span className="text-yellow-ffcc00">0</span>
              </div>
            </div>
          </div>

          <div
            style={{
              width: "fit-content",
              paddingRight: innerTable2 ? "40px" : 0,
            }}
            className="flex h-56px border-b border-gray-242424 items-center text-gray-ccc2b6 font-spoqaMedium text-14px tracking-tight bg-gray-242424"
          >
            <div
              style={{ backgroundColor: "rgb(29,30,31)" }}
              className="w-85px h-full flex items-center justify-center bg-gray-1a1b1c border-l border-gray-242424"
            >
              <div
                className="h-full flex items-center justify-center"
                style={{ width: "85px" }}
              >
                구분
              </div>
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              스포츠
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              미니게임
            </div>

            <div className="w-85px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>프레그메틱</span>
              <span>플레이</span>
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              에볼루션
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              로얄지
            </div>
            <div className="w-85px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>아시아</span>
              <span>게이밍</span>
            </div>
            <div className="w-85px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>드림</span>
              <span>게이밍</span>
            </div>
            <div className="w-85px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>섹시</span>
              <span>게이밍</span>
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              빅게이밍
            </div>
            <div className="w-85px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>오리엔탈</span>
              <span>게임</span>
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              이주기
            </div>
            <div className="w-85px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>마이크로</span>
              <span>게이밍</span>
            </div>
            <div className="w-85px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>YGG</span>
              <span>드라실</span>
            </div>
            <div className="w-85px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>드라군</span>
              <span>소프트</span>
            </div>

            <div className="w-85px h-full flex items-center justify-center">
              분고
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              플레이슨
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              넷엔트
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              퀵스핀
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              스페이드
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              하바네로
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              월드매치
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              엘리시움
            </div>
            <div className="w-85px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>플레이</span>
              <span>엔고</span>
            </div>
            <div className="w-85px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>YL</span>
              <span>게이밍</span>
            </div>
            <div className="w-85px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>레드</span>
              <span>타이거</span>
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              플레이텍
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              스카이윈드
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              씨큐나인
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              올웨이스핀
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              와즈단
            </div>
            <div className="w-85px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>PG</span>
              <span>소프트</span>
            </div>
            <div className="w-85px h-full flex flex-col items-center justify-center -space-y-4px">
              <span>로얄슬롯</span>
              <span>게이밍</span>
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              두윈카지노
            </div>
            <div className="w-85px h-full flex items-center justify-center">
              보타카지노
            </div>
            
            <div className="w-85px h-full flex items-center justify-center">
              e-스포츠
            </div>
            <div className="w-85px h-full flex flex-col items-center justify-center -space-y-4px mr-8px">
              <span>키론</span>
              <span>가상게임</span>
            </div>
            <div
              style={{ backgroundColor: "rgb(29,30,31)" }}
              className="w-85px text-center h-full flex items-center justify-center"
            >
              합계
            </div>
          </div>
          <div
            style={{
              width: "fit-content",
              paddingRight: innerTable ? "0px" : 0,
            }}
            className="flex h-56px items-center text-14px tracking-tight font-roboto text-gray-c8c8c8 border-b border-gray-242424 bg-gray-323232"
          >
            <div
              style={{ backgroundColor: "rgb(44,44,44)" }}
              className="w-85px h-full flex items-center justify-center font-spoqaMedium text-gray-ccc2b6 bg-gray-181a1d border-l border-gray-242424"
            >
              <div
                className="h-full flex items-center justify-center"
                style={{ width: "85px" }}
              >
                베팅금
              </div>
            </div>
            <div className="w-85px h-full flex items-center justify-end">
              1.09M
            </div>
            <div className="w-85px h-full flex items-center justify-end">
              33K
            </div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end mr-8px">
              0
            </div>
            <div
              style={{ backgroundColor: "rgb(44,44,44)" }}
              className="w-85px h-full flex items-center justify-end pr-8px"
            >
              7.14M
            </div>
          </div>
          <div
            style={{
              width: "fit-content",
              paddingRight: innerTable ? "0px" : 0,
            }}
            className="flex h-56px items-center text-14px tracking-tight font-roboto text-gray-c8c8c8 border-b border-gray-242424 bg-gray-323232"
          >
            <div
              style={{ backgroundColor: "rgb(44,44,44)" }}
              className="w-85px h-full flex items-center justify-center font-spoqaMedium text-gray-ccc2b6 bg-gray-181a1d border-l border-gray-242424"
            >
              <div
                className="h-full flex items-center justify-center"
                style={{ width: "85px" }}
              >
                승패
              </div>
            </div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end mr-8px">
              0
            </div>
            <div
              style={{ backgroundColor: "rgb(44,44,44)" }}
              className="w-85px h-full flex items-center justify-end pr-8px"
            >
              0
            </div>
          </div>
          <div
            style={{
              width: "fit-content",
              paddingRight: innerTable ? "0px" : 0,
            }}
            className="flex h-56px items-center text-14px tracking-tight font-roboto text-gray-c8c8c8 border-b border-gray-242424 bg-gray-323232"
          >
            <div
              style={{ backgroundColor: "rgb(44,44,44)" }}
              className="w-85px h-full flex items-center justify-center font-spoqaMedium text-gray-ccc2b6 bg-gray-181a1d"
            >
              <div
                className="h-full flex items-center justify-center"
                style={{ width: "85px" }}
              >
                정산금액
              </div>
            </div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end">0</div>
            <div className="w-85px h-full flex items-center justify-end mr-8px">
              0
            </div>
            <div
              style={{ backgroundColor: "rgb(44,44,44)" }}
              className="w-85px h-full flex items-center justify-end pr-8px"
            >
              0
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function RecommendedUserCell({ items }) {
    const [isUserCountOpen, setUserCountOpen] = useState(
      new Array(20).fill(false)
    );
    const [subArrowClicked, setSubArrowClicked] = useState(
      new Array(8).fill(false)
    );
    const handleOnChange1 = (position) => {
      const updatedCheckedState = isUserCountOpen.map((item, index) =>
        index === position ? !item : item
      );
      setUserCountOpen(updatedCheckedState);
    };

    const handleOnChange2 = (position) => {
      const updatedCheckedState = subArrowClicked.map((item, index) =>
        index === position ? !item : item
      );
      setSubArrowClicked(updatedCheckedState);
    };

    return items.map((item) => (
      <>
        <div
          className={`${
            item.id % 2 === 1 ? "bg-gray-242424" : "bg-gray-323231"
          } 
                     ${
                       item.isLast ? "border-b" : ""
                     } w-full h-69px flex items-center justify-start font-roboto text-14px text-gray-c8c8c8 tracking-tight border-l border-r border-gray-252525`}
        >
          <div
            className={`${
              item.name ? "w-90px pr-5px" : "w-138px"
            }  h-full flex items-center justify-center`}
          >
            {item.number}
          </div>
          <div
            className="h-full flex items-center justify-center"
            style={{ maxWidth: item.name ? "136px" : "120px" }}
          >
            <div
              style={{ width: item.name ? "136px" : "120px" }}
              className="text-center truncate"
            >
              {item.username}
            </div>
          </div>
          {item.name && (
            <div className="w-96px h-full flex items-center justify-center font-spoqaMedium">
              <div className="text-center w-96px truncate">{item.name}</div>
            </div>
          )}
          <div
            className="w-144px h-full flex items-center justify-center font-spoqaMedium truncate"
            style={{
              maxWidth: item.name ? "130px" : "132px",
              paddingLeft: item.name ? "7px" : "0",
            }}
          >
            <div
              style={{ width: item.name ? "130px" : "132px" }}
              className="text-center truncate"
            >
              {item.nickname}
            </div>
          </div>
          <div
            className={`${
              item.name ? "justify-center" : "justify-end pr-32px"
            } relative w-88px h-full flex items-center`}
            style={{
              width: item.name ? "108px" : "113px",
              paddingLeft: item.name ? "1px" : "0",
            }}
          >
            {item.user_count === 0 ? (
              <div className="">{item.added_amount}</div>
            ) : (
              <button
                style={{
                  width: "87px",
                  background: isUserCountOpen
                    ? "linear-gradient(to top, #4b3b09, #e8b888)"
                    : "linear-gradient(to top, #4b3b09, #e8b888)",
                }}
                className={`${
                  isUserCountOpen ? "" : ""
                } flex items-center justify-center h-36px w-87px rounded-4px filter hover:brightness-125 p-px shadow-link -ml-19px`}
                onClick={() => {
                  handleOnChange1(item.id);
                }}
              >
                <div
                  style={{
                    width: "85px",
                    background: isUserCountOpen[item.id]
                      ? "linear-gradient(to bottom, #f38d27, #b45a00)"
                      : "linear-gradient(to bottom, #a67c52, #7f5f3f)",
                  }}
                  className={`flex items-center justify-center h-34px w-85px rounded-4px cursor-pointer space-x-10px`}
                >
                  <span
                    style={{ color: "#ffe8bd" }}
                    className="font-spoqaMedium tracking-tight text-14px text-white text-shadow-5"
                  >
                    {isUserCountOpen[item.id] === true ? "접기" : "보기"}{" "}
                    {item.user_count}
                  </span>
                  <img
                    className={
                      isUserCountOpen[0] === false && " transform rotate-180"
                    }
                    src={WhiteArrow}
                    alt=""
                  />
                </div>
              </button>
            )}
            {isUserCountOpen[item.id] === true && (
              <div className="absolute bottom-0 -mb-px left-34px">
                <img src={BlueTriangle} alt="" />
              </div>
            )}
          </div>
          <div
            className={`${
              item.name ? "pl-2px" : "pl-11px"
            } text-center flex flex-col items-center justify-center space-y-3px text-14px tracking-tight font-roboto`}
            style={{ width: item.name ? "125px" : "134px" }}
          >
            <div className="flex items-center h-16px">
              {item.recommended_date}
            </div>
            <div className="flex items-center h-16px">{item.login_date}</div>
            <div className="flex items-center h-16px">({item.absent_date})</div>
          </div>
          <div
            className={`relative w-96px h-full flex items-center justify-end`}
            style={{ width: item.name ? "109px" : "109px" }}
          >
            <button
              style={{
                background: isUserCountOpen
                  ? "linear-gradient(to top, #4b3b09, #e8b888)"
                  : "linear-gradient(to top, #4b3b09, #e8b888)",
              }}
              className={`${isUserCountOpen ? "" : ""} ${
                item.name ? "mr-9px" : ""
              } flex items-center justify-center h-36px w-85px rounded-4px filter hover:brightness-125 p-px shadow-link`}
              onClick={() => {
                handleOnChange1(item.id + 1);
              }}
            >
              <div
                style={{
                  background: isUserCountOpen[item.id + 1]
                    ? "linear-gradient(to bottom, #f38d27, #b45a00)"
                    : "linear-gradient(to bottom, #a67c52, #7f5f3f)",
                }}
                className={` flex items-center justify-center h-34px w-83px rounded-4px cursor-pointer space-x-10px`}
              >
                <span
                  style={{ color: "#ffe8bd" }}
                  className="font-spoqaMedium tracking-tight text-14px text-white text-shadow-5"
                >
                  {isUserCountOpen[item.id + 1] === true ? "접기" : "보기"}
                </span>
                <img
                  className={
                    isUserCountOpen[item.id + 1] === false &&
                    " transform rotate-180"
                  }
                  src={WhiteArrow}
                  alt=""
                />
              </div>
            </button>
            {isUserCountOpen[item.id + 1] === true && (
              <div
                className="absolute bottom-0 -mb-px left-47px"
                style={{ left: item.name ? "47px" : "56px" }}
              >
                <img src={BlueTriangle} alt="" />
              </div>
            )}
          </div>
          <div
            className="h-full flex items-center justify-end text-right"
            style={{ width: "122px", marginLeft: !item.name ? "9px" : "0px" }}
          >
            <p className="pr-39px">{item.added_amount}</p>
          </div>
          <div
            className="h-full flex items-center justify-end text-right"
            style={{ width: "108px", paddingRight: "31px" }}
          >
            <p className="pr-31px">{item.bonus}</p>
          </div>
          <div
            className="h-full flex items-center justify-end text-right"
            style={{ width: "123px" }}
          >
            <p className="pr-38px">{item.withdraw_amount}</p>
          </div>
          <div className="w-110px h-full flex items-center justify-end text-right">
            <p className="pr-30px">{item.added_withdraw_amount}</p>
          </div>
          <div
            className="h-full flex items-center justify-end text-right"
            style={{ width: "120px" }}
          >
            <p className="pr-36px">{item.bet_amount}</p>
          </div>
          <div
            className=" h-full flex items-center justify-end text-right"
            style={{ width: "113px", paddingRight: "33px" }}
          >
            <p>{item.win_lose}</p>
          </div>
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ width: "122px" }}
          >
            <button
              style={{
                background: isUserCountOpen[item.id]
                  ? "linear-gradient(to top, #4b3b09, #e8b888)"
                  : "linear-gradient(to top, #4b3b09, #e8b888)",
              }}
              className={` ${
                item.name ? "ml-9px" : "ml-8px"
              } flex items-center justify-center h-36px w-85px rounded-4px filter hover:brightness-125 p-px shadow-link`}
              onClick={() => {
                handleOnChange1(item.id + 2);
              }}
            >
              <div
                style={{
                  background: isUserCountOpen[item.id + 2]
                    ? "linear-gradient(to bottom, #f38d27, #b45a00)"
                    : "linear-gradient(to bottom, #a67c52, #7f5f3f)",
                }}
                className={`
                           flex items-center justify-center h-34px w-83px rounded-4px cursor-pointer space-x-10px`}
              >
                <span
                  style={{ color: "#ffe8bd" }}
                  className="font-spoqaMedium tracking-tight text-14px text-white text-shadow-5"
                >
                  {isUserCountOpen[item.id + 2] === true ? "접기" : "보기"}
                </span>
                <img
                  className={
                    isUserCountOpen[item.id + 1] === false &&
                    " transform rotate-180"
                  }
                  src={WhiteArrow}
                  alt=""
                />
              </div>
            </button>
            {isUserCountOpen[item.id + 2] === true && (
              <div className="absolute bottom-0 -mb-px left-56px">
                <img src={BlueTriangle} alt="" />
              </div>
            )}
          </div>
          <div className="w-100px h-full flex items-center justify-end">
            <p className="pr-23px">{item.point}</p>
          </div>
          <div
            className="h-full flex items-center justify-end"
            style={{ width: "116px" }}
          >
            <p className="pr-23px">{item.holding_amount}</p>
          </div>
        </div>
        <div
          style={{
            opacity: 0.9,
            borderTop:
              (isUserCountOpen[item.id] === true ||
                isUserCountOpen[item.id + 1] === true ||
                isUserCountOpen[item.id + 2] === true) &&
              "2px solid #a67c52",
          }}
          className={`flex flex-col relative w-full`}
        >
          {(isUserCountOpen[item.id] === true ||
            isUserCountOpen[item.id + 1] === true ||
            isUserCountOpen[item.id + 2] === true) && (
            <div className="absolute w-39px mt-10px flex justify-center items-start ml-2px">
              <img src={ReplyArrow} className="object-none" alt="" />
            </div>
          )}

          {isUserCountOpen[item.id] === true && item.hasSubArray === true && (
            <>
              <div className="w-full flex">
                <div className="w-40px mt-10px flex justify-center items-start flex-shrink-0">
                  {/* <img src={ReplyArrow} className="object-none" alt="" /> */}
                </div>
                <div className=" w-full flex flex-col flex-shrink-0">
                  {/* === Header === */}
                  <div className="h-67px  bg-gray-242424 flex items-center justify-start font-spoqaMedium text-14px text-gray-ccc2b6 tracking-tight">
                    <div
                      className="h-full flex items-center justify-center"
                      style={{ width: "138px" }}
                    >
                      번호
                    </div>
                    <button
                      className="h-full flex items-center justify-center space-x-3px filter hover:brightness-125"
                      style={{ width: "115px" }}
                      onClick={() => handleOnChange2(0)}
                    >
                      <p>아이디</p>
                      <img
                        src={GrayArrow}
                        className={`${
                          subArrowClicked[0] === true
                            ? "transform rotate-180"
                            : ""
                        } w-13px`}
                        alt=""
                      />
                    </button>
                    <div
                      className="h-full flex items-center justify-center"
                      style={{ width: "135px" }}
                    >
                      별명
                    </div>
                    <button
                      className="h-full flex items-center justify-center space-x-3px ml-2px"
                      style={{ width: "120px" }}
                      onClick={() => handleOnChange2(1)}
                    >
                      <div className="flex flex-col items-center justify-center space-y-3px filter hover:brightness-125 ">
                        <div className="flex items-center h-16px">하부</div>
                        <div className="flex items-center h-16px">유저수</div>
                      </div>
                      <img
                        src={GrayArrow}
                        className={`${
                          subArrowClicked[1] === false
                            ? "transform rotate-180"
                            : ""
                        } w-13px`}
                        alt=""
                      />
                    </button>
                    <button
                      className="h-full flex items-center justify-center space-x-3px"
                      style={{ width: "127px" }}
                      onClick={() => handleOnChange2(2)}
                    >
                      <div className="flex flex-col items-center justify-center space-y-3px  filter hover:brightness-125">
                        <div className="flex items-center h-16px">추천일시</div>
                        <div className="flex items-center h-16px">
                          로그인일시
                        </div>
                        <div className="flex items-center h-16px">
                          (미접속일수)
                        </div>
                      </div>
                      <img
                        src={GrayArrow}
                        className={`${
                          subArrowClicked[2] === false
                            ? "transform rotate-180"
                            : ""
                        } w-13px`}
                        alt=""
                      />
                    </button>
                    <div
                      className="h-full flex items-center justify-center"
                      style={{ width: "127px" }}
                    >
                      요율보기
                    </div>
                    <div
                      className="h-full flex items-center justify-center"
                      style={{ width: "101px" }}
                    >
                      입금액
                    </div>
                    <div
                      className="h-full flex items-center justify-center"
                      style={{ width: "132px" }}
                    >
                      보너스
                    </div>
                    <button
                      className=" h-full flex items-center justify-center space-x-3px filter hover:brightness-125"
                      style={{ width: "102px" }}
                      onClick={() => handleOnChange2(3)}
                    >
                      <p>출금액</p>
                      <img
                        src={GrayArrow}
                        className={`${
                          subArrowClicked[3] === false
                            ? "transform rotate-180"
                            : ""
                        } w-13px`}
                        alt=""
                      />
                    </button>
                    <div
                      className=" h-full flex items-center justify-center ml-5px"
                      style={{ width: "118px" }}
                    >
                      입출금액
                    </div>
                    <button
                      className=" h-full flex items-center justify-center space-x-3px filter hover:brightness-125"
                      style={{ width: "114px" }}
                      onClick={() => handleOnChange2(4)}
                    >
                      <p>베팅액</p>
                      <img
                        src={GrayArrow}
                        className={`${
                          subArrowClicked[4] === false
                            ? "transform rotate-180"
                            : ""
                        } w-13px`}
                        alt=""
                      />
                    </button>
                    <button
                      className=" h-full flex items-center justify-center space-x-3px filter hover:brightness-125 ml-4px"
                      style={{ width: "110px" }}
                      onClick={() => handleOnChange2(5)}
                    >
                      <p>윈루즈</p>
                      <img
                        src={GrayArrow}
                        className={`${
                          subArrowClicked[5] === false
                            ? "transform rotate-180"
                            : ""
                        } w-13px`}
                        alt=""
                      />
                    </button>
                    <div
                      className=" h-full flex items-center justify-center ml-6px"
                      style={{ width: "113px" }}
                    >
                      상세내역
                    </div>
                    <button
                      className=" h-full flex items-center justify-center space-x-3px filter hover:brightness-125 ml-5px"
                      style={{ width: "104px" }}
                      onClick={() => handleOnChange2(6)}
                    >
                      <p>포인트</p>
                      <img
                        src={GrayArrow}
                        className={`${
                          subArrowClicked[6] === false
                            ? "transform rotate-180"
                            : ""
                        } w-13px`}
                        alt=""
                      />
                    </button>
                    <button
                      className=" h-full flex items-center justify-center space-x-3px filter hover:brightness-125 ml-15px"
                      style={{ width: "100px" }}
                      onClick={() => handleOnChange2(7)}
                    >
                      <div className="flex flex-col items-center justify-center space-y-3px ">
                        <div className="flex items-center h-16px">보유</div>
                        <div className="flex items-center h-16px">금액</div>
                      </div>
                      <img
                        src={GrayArrow}
                        className={`${
                          subArrowClicked[7] === false
                            ? "transform rotate-180"
                            : ""
                        } w-13px`}
                        alt=""
                      />
                    </button>
                  </div>
                  <RecommendedUserCell items={RecommendedUserArray2} />
                </div>
              </div>
            </>
          )}

          {isUserCountOpen[item.id + 1] === true && (
            <>
              {isUserCountOpen[item.id] === true &&
              item.hasSubArray === true ? (
                <>
                  <div className="h-10px" />
                  <PercentageCell />
                </>
              ) : (
                <PercentageCell innerTable={true} />
              )}
            </>
          )}

          {isUserCountOpen[item.id + 2] === true &&
            ((isUserCountOpen[item.id] === true && item.hasSubArray === true) ||
            isUserCountOpen[item.id + 1] === true ? (
              <>
                <div className="h-10px" />
                <DetailCell
                  innerTable={true}
                  innerTable2={items === RecommendedUserArray2}
                />
              </>
            ) : (
              <>
                <DetailCell
                  innerTable={true}
                  innerTable2={items === RecommendedUserArray2}
                />
              </>
            ))}
        </div>
      </>
    ));
  }

  const UsersOnline = ({ name = "tntwktntwktntwktntwktntwk" }) => (
    <div className="h-48px rounded-full flex items-center justify-center">
      <div
        style={{
          height: "44px",
          background: "linear-gradient(to top, #4b443c, #2f2d29)",
          boxShadow: "rgb(107 107 107) 0px 1px 2px inset",
        }}
        className="pl-9px pr-15px w-full rounded-full flex items-center space-x-5px"
      >
        <img src={DefaultUser} alt="" />
        <span
          style={{
            maxWidth: "140px",
            textOverflow: "unset",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          className="text-gray-ccc2b6 text-20px tracking-tight font-spoqaMedium pt-2px"
        >
          {name.length > 12 ? `${name.slice(0, 12)}...` : name}
        </span>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col justify-center bg-gray-1e1e1e limit1920:overflow-x-hidden">
      <div className="fixed w-full top-0 z-50 flex flex-col items-start limit1920:items-center">
        <Navbar isAuthenticated={isAuthenticated} setAuth={setAuthenticated} />
      </div>

      <div className="relative flex flex-col limit1600:mt-104px mt-104px items-start limit1920:items-center">
        <div className="relative w-default h-125px mt-26px">
          <img className="z-10" src={DistributorBanner} alt="" />
          <div
            className="font-spoqaMedium z-20 absolute top-0 text-28px w-full h-full flex items-center justify-center"
            style={{ color: "#ffdfbd" }}
          >
            <span className="leading-none mt-2px">총판페이지</span>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center limit496:items-center mt-12px">
        <div className="space-x-4px h-50px w-496px flex items-center justify-center text-24px tracking-tight text-gray-c8c8c8 bg-gray-272726 rounded-25px">
          <span
            style={{
              maxWidth: "160px",
              textOverflow: "unset",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
            className="font-spoqaBold text-golden-aa9264"
          >
            {username.length > 12 ? `${username.slice(0, 12)}...` : username}
          </span>
          <span className="font-spoqaMedium">님의 총판 정보입니다.</span>
        </div>
      </div>

      <div className="relative flex flex-col justify-start limit:justify-center">
        <div className="flex flex-col items-start limit1920:items-center w-full h-full">
          <div className="mt-53px w-1836px">
            <div className="h-29px w-full flex items-center space-x-10px text-24px tracking-tight text-gray-ccc2b6 font-spoqaMedium">
              <img src={SummaryIcon} alt="" />
              <span className="mt-2px">총판현황</span>
            </div>
            <div className="flex h-165px w-full mt-20px space-x-4px">
              <SummaryCard img={SummaryIcon1} text="전체 유저" count={5} />
              <SummaryCard
                img={SummaryIcon2}
                text="요율 설정 완료건"
                count={20}
              />
              <SummaryCard
                img={SummaryIcon3}
                text="요율 설정 미완료건"
                count={5}
              />
              <SummaryCard img={SummaryIcon4} text="전체 포인트" count={0} />
              <SummaryCard
                img={SummaryIcon5}
                text="현재까지 사용 포인트"
                count={0}
              />
              <SummaryCard
                img={SummaryIcon6}
                text="현재 나의 포인트"
                count={0}
              />
              <SummaryCard
                img={SummaryIcon7}
                text="진행중인 금액"
                count="78,307.50"
              />
              <SummaryCard
                img={SummaryIcon8}
                text="제휴 금액"
                count="117,515,875.76"
              />
            </div>

            <div className="mt-56px h-29px w-full flex items-center space-x-6px text-24px tracking-tight text-gray-ccc2b6 font-spoqaMedium">
              <img src={PieIcon} alt="" />
              <span className="mt-5px">롤링요율</span>
            </div>

            <div
              style={{
                background:
                  "linear-gradient(to top, #1f1f1e 80%, #343434 100%)",
              }}
              className="mt-20px h-120px w-full shadow-navbar rounded-4px flex items-center p-px overflow-x-auto"
            >
              <table className="w-full overflow-hidden rounded-3px bg-gray-2e2e2e">
                <thead className="h-54px w-full border-b border-gray-252525 bg-gray-2e2e2e font-spoqaMedium text-14px text-gray-ccc2b6 tracking-tight">
                  <tr className="flex items-center h-54px w-full">
                    <td className="w-72px text-center">스포츠</td>
                    <td className="w-72px text-center">미니게임</td>
                    <td className="w-80px text-center flex flex-col pt-2px -space-y-4px">
                      <span>프레그메틱</span>
                      <span>플레이</span>
                    </td>
                    <td className="w-72px text-center">에볼루션</td>
                    <td className="w-72px text-center">로얄지</td>
                    <td className="w-73px text-center flex flex-col pt-2px -space-y-4px">
                      <span>아시아</span>
                      <span>게이밍</span>
                    </td>
                    <td className="w-73px text-center flex flex-col pt-2px -space-y-4px">
                      <span>드림</span>
                      <span>게이밍</span>
                    </td>
                    <td className="w-73px text-center flex flex-col pt-2px -space-y-4px">
                      <span>섹시</span>
                      <span>게이밍</span>
                    </td>
                    <td className="w-72px text-center">빅게이밍</td>
                    <td className="w-73px text-center flex flex-col pt-2px -space-y-4px">
                      <span>오리엔탈</span>
                      <span>게임</span>
                    </td>
                    <td className="w-72px text-center">이주기</td>
                    <td className="w-73px text-center flex flex-col pt-2px -space-y-4px">
                      <span>마이크로</span>
                      <span>게이밍</span>
                    </td>
                    <td className="w-73px text-center flex flex-col pt-2px -space-y-4px">
                      <span>YGG</span>
                      <span>드라실</span>
                    </td>
                    <td className="w-73px text-center flex flex-col pt-2px -space-y-4px">
                      <span>드라군</span>
                      <span>소프트</span>
                    </td>
                    <td className="w-72px text-center">분고</td>
                    <td className="w-72px text-center">플레이슨</td>
                    <td className="w-72px text-center">넷엔트</td>
                    <td className="w-72px text-center">퀵스핀</td>

                    <td className="w-72px text-center">스페이드</td>
                    <td className="w-72px text-center">하바네로</td>
                    <td className="w-72px text-center">월드매치</td>
                    <td className="w-72px text-center">엘리시움</td>

                    <td className="w-70px text-center flex flex-col pt-2px -space-y-4px">
                      <span>플레이</span>
                      <span>엔고</span>
                    </td>
                    <td className="w-70px text-center flex flex-col pt-2px -space-y-4px">
                      <span>YL</span>
                      <span>게이밍</span>
                    </td>
                    <td className="w-70px text-center flex flex-col pt-2px -space-y-4px">
                      <span>레드</span>
                      <span>타이거</span>
                    </td>
                    <td className="w-78px text-center">플레이텍</td>
                    <td className="w-78px text-center">스카이윈드</td>

                    <td className="w-72px text-center">씨큐나인</td>
                    <td className="w-77px text-center">올웨이스핀</td>
                    <td className="w-72px text-center">와즈단</td>
                    <td className="w-85px text-center flex flex-col pt-2px -space-y-4px">
                      <span>PG</span>
                      <span>소프트</span>
                    </td>
                    <td className="w-85px text-center flex flex-col pt-2px -space-y-4px">
                      <span>로얄슬롯</span>
                      <span>게이밍</span>
                    </td>

                    <td className="w-85px text-center">두윈카지노</td>
                    <td className="w-85px text-center">보타카지노</td>
                    <td className="w-72px text-center">e-스포츠 </td>
                    <td className="w-100px text-center flex flex-col pt-2px -space-y-4px">
                      <span>키론</span>
                      <span>가상게임</span>
                    </td>
                    {/* <td className="w-72px text-center">합계</td> */}
                  </tr>
                </thead>
                <tbody className="w-full text-gray-r585858 text-14px tracking-tight font-spoqaMedium border-r border-l border-gray-2e2e2e">
                  <tr className="flex items-center bg-gray-323232 font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 h-54px w-full">
                    <td className="w-72px text-center">0.70%</td>
                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-80px text-center">0.70%</td>
                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-73px text-center">0.00%</td>
                    <td className="w-73px text-center">0.00%</td>
                    <td className="w-73px text-center">0.00%</td>
                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-73px text-center">0.00%</td>
                    <td className="w-73px text-center">0.00%</td>
                    <td className="w-73px text-center">0.00%</td>
                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-72px text-center">0.00%</td>

                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-72px text-center">0.00%</td>

                    <td className="w-70px text-center">0.00%</td>
                    <td className="w-70px text-center">0.00%</td>
                    <td className="w-70px text-center">0.00%</td>
                    <td className="w-78px text-center">0.00%</td>
                    <td className="w-78px text-center">0.00%</td>

                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-77px text-center">0.00%</td>
                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-85px text-center">0.00%</td>
                    <td className="w-85px text-center">0.00%</td>
                    <td className="w-85px text-center">0.00%</td>

                    <td className="w-85px text-center">0.00%</td>
                    <td className="w-72px text-center">0.00%</td>
                    <td className="w-100px text-center">0.00%</td>
                    {/* <td className="w-72px text-center">0.00%</td> */}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-58px h-29px w-full flex items-center space-x-7px text-24px tracking-tight text-gray-ccc2b6 font-spoqaMedium">
              <img src={DetailIcon} alt="" />
              <span>나의 상세내역</span>
            </div>

            <DateSearchBar isLeagueSearch={false} hasIdSearch={true} />

            <div className="flex mt-30px w-full space-x-11px">
              <div className="w-333px h-48px rounded-full border-2 border-gray-635f5b bg-gray-2e2e2e flex items-center justify-center font-spoqaMedium text-20px tracking-tight">
                <img className="mr-14px" src={Diamond} alt="" />
                <div className="flex items-center space-x-4px pt-2px">
                  <span className="text-white">입금 :</span>
                  <span className="text-yellow-ffd200">0</span>
                </div>
              </div>

              <div className="w-333px h-48px rounded-full border-2 border-gray-635f5b bg-gray-2e2e2e flex items-center justify-center font-spoqaMedium text-20px tracking-tight">
                <img className="mr-14px" src={Diamond} alt="" />
                <div className="flex items-center space-x-4px pt-2px">
                  <span className="text-white">보너스 :</span>
                  <span className="text-yellow-ffd200">0</span>
                </div>
              </div>

              <div className="w-333px h-48px rounded-full border-2 border-gray-635f5b bg-gray-2e2e2e flex items-center justify-center font-spoqaMedium text-20px tracking-tight">
                <img className="mr-14px" src={Diamond} alt="" />
                <div className="flex items-center space-x-4px pt-2px">
                  <span className="text-white">출금 :</span>
                  <span className="text-yellow-ffd200">0</span>
                </div>
              </div>

              <div className="w-333px h-48px rounded-full border-2 border-gray-635f5b bg-gray-2e2e2e flex items-center justify-center font-spoqaMedium text-20px tracking-tight">
                <img className="mr-14px" src={Diamond} alt="" />
                <div className="flex items-center space-x-4px pt-2px">
                  <span className="text-white">입출금 합계 :</span>
                  <span className="text-red-ff7f7f">-3,200,000</span>
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  background:
                    "linear-gradient(to top, #1f1f1e 80%, #343434 100%)",
                }}
                className="mt-20px w-full rounded-4px shadow-navbar flex items-center p-px"
              >
                <div className="bg-gray-2e2e2e p-px rounded-4px overflow-x-auto">
                  <table>
                    <thead className="h-54px w-full bg-gray-242424 font-spoqaMedium text-14px text-gray-ccc2b6 tracking-tight border-b border-gray-252525">
                      <tr className="flex items-center h-54px">
                        <td
                          style={{ backgroundColor: "rgb(29,30,31)" }}
                          className="w-84px bg-gray-1a1b1c h-full flex items-center justify-center"
                        >
                          구분
                        </td>
                        <td className="w-83px text-center">스포츠</td>
                        <td className="w-81px text-center ml-4px">미니게임</td>
                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                          <span>프레그메틱</span>
                          <span>플레이</span>
                        </td>
                        <td className="w-85px text-center">에볼루션</td>
                        <td className="w-83px text-center">로얄지</td>
                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                          <span>아시아</span>
                          <span>게이밍</span>
                        </td>
                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                          <span>드림</span>
                          <span>게이밍</span>
                        </td>
                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                          <span>섹시</span>
                          <span>게이밍</span>
                        </td>
                        <td className="w-83px text-center">빅게이밍</td>
                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                          <span>오리엔탈</span>
                          <span>게임</span>
                        </td>
                        <td className="w-83px text-center">이주기</td>

                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                          <span>마이크로</span>
                          <span>게이밍</span>
                        </td>
                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                          <span>YGG</span>
                          <span>드라실</span>
                        </td>
                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                          <span>드라군</span>
                          <span>소프트</span>
                        </td>
                        <td className="w-83px text-center">분고</td>
                        <td className="w-83px text-center">플레이슨</td>
                        <td className="w-83px text-center">넷엔트</td>
                        <td className="w-83px text-center">퀵스핀</td>

                        <td className="w-83px text-center">스페이드</td>
                        <td className="w-83px text-center">하바네로</td>
                        <td className="w-83px text-center">월드매치</td>
                        <td className="w-83px text-center">엘리시움</td>

                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                          <span>플레이</span>
                          <span>엔고</span>
                        </td>
                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                          <span>YL</span>
                          <span>게이밍</span>
                        </td>
                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                          <span>레드</span>
                          <span>타이거</span>
                        </td>
                        <td className="w-83px text-center">플레이텍</td>
                        <td className="w-83px text-center">스카이윈드</td>

                        <td className="w-83px text-center">씨큐나인</td>
                        <td className="w-83px text-center">올웨이스핀</td>
                        <td className="w-83px text-center">와즈단</td>
                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                          <span>PG</span>
                          <span>소프트</span>
                        </td>
                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                          <span>로얄슬롯</span>
                          <span>게이밍</span>
                        </td>

                        <td className="w-83px text-center">두윈카지노</td>
                        <td className="w-83px text-center">보타카지노</td>
                        <td className="w-83px text-center">e-스포츠 </td>
                        <td className="w-83px text-center flex flex-col pt-2px -space-y-4px">
                          <span>키론</span>
                          <span>가상게임</span>
                        </td>
                        <td
                          style={{ backgroundColor: "rgb(29,30,31)" }}
                          className="w-70px text-center h-full flex items-center justify-center"
                        >
                          합계
                        </td>
                      </tr>
                    </thead>
                    <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                      <tr className="flex items-center bg-gray-323232 font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 h-54px w-full border-b border-gray-252525">
                        <td
                          style={{ backgroundColor: "rgb(44,44,44)" }}
                          className="w-83px bg-gray-16181a h-full flex items-center justify-center font-spoqaMedium text-14px text-gray-ccc2b6 tracking-tight"
                        >
                          베팅금
                        </td>
                        <td className="w-83px text-right pr-5px">1.09M</td>
                        <td className="w-83px text-right pr-4px">33K</td>
                        <td className="w-83px text-right pr-5px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-4px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-4px">0</td>
                        <td className="w-85px text-right pr-4px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-5px">0</td>
                        <td className="w-83px text-right pr-2px">0</td>
                        <td className="w-83px text-right pr-2px">0</td>
                        <td className="w-83px text-right pr-7px">0</td>
                        <td className="w-83px text-right pr-2px">0</td>
                        <td className="w-83px text-right pr-6px">0</td>
                        <td className="w-83px text-right">3.06M</td>
                        <td className="w-83px text-right pr-10px">0</td>
                        <td className="w-83px text-right pr-5px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-4px">0</td>
                        <td className="w-83px text-right pr-4px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-4px">0</td>
                        <td className="w-85px text-right pr-4px">0</td>
                        <td className="w-85px text-right pr-4px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-5px">0</td>
                        <td
                          style={{ backgroundColor: "rgb(44,44,44)" }}
                          className="w-70px text-right pr-10px h-full flex items-center justify-end"
                        >
                          7.14M
                        </td>
                      </tr>
                      <tr className="flex items-center bg-gray-2e2e2e font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 h-54px w-full border-b border-gray-252525">
                        <td
                          style={{ backgroundColor: "rgb(44,44,44)" }}
                          className="w-83px bg-gray-16181a h-full flex items-center justify-center font-spoqaMedium text-14px text-gray-ccc2b6 tracking-tight"
                        >
                          승패
                        </td>
                        <td className="w-83px text-right pr-5px">1.09M</td>
                        <td className="w-83px text-right pr-4px">33K</td>
                        <td className="w-83px text-right pr-5px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-4px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-4px">0</td>
                        <td className="w-85px text-right pr-4px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-5px">0</td>
                        <td className="w-83px text-right pr-2px">0</td>
                        <td className="w-83px text-right pr-7px">0</td>
                        <td className="w-83px text-right pr-2px">0</td>
                        <td className="w-83px text-right pr-6px">0</td>
                        <td className="w-83px text-right">3.06M</td>
                        <td className="w-83px text-right pr-10px">0</td>
                        <td className="w-83px text-right pr-5px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-4px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-4px">0</td>
                        <td className="w-85px text-right pr-4px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-5px">0</td>

                        <td
                          style={{ backgroundColor: "rgb(44,44,44)" }}
                          className="w-70px text-right pr-10px h-full flex items-center justify-end"
                        >
                          0
                        </td>
                      </tr>
                      <tr className="flex items-center bg-gray-323232 font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 h-54px w-full">
                        <td
                          style={{ backgroundColor: "rgb(44,44,44)" }}
                          className="w-83px bg-gray-16181a h-full flex items-center justify-center font-spoqaMedium text-14px text-gray-ccc2b6 tracking-tight"
                        >
                          정산금액
                        </td>
                        <td className="w-83px text-right pr-5px">1.09M</td>
                        <td className="w-83px text-right pr-4px">33K</td>
                        <td className="w-83px text-right pr-5px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-4px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-4px">0</td>
                        <td className="w-85px text-right pr-4px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-5px">0</td>
                        <td className="w-83px text-right pr-2px">0</td>
                        <td className="w-83px text-right pr-7px">0</td>
                        <td className="w-83px text-right pr-2px">0</td>
                        <td className="w-83px text-right pr-6px">0</td>
                        <td className="w-83px text-right">3.06M</td>
                        <td className="w-83px text-right pr-10px">0</td>
                        <td className="w-83px text-right pr-5px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-4px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-4px">0</td>
                        <td className="w-85px text-right pr-4px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-3px">0</td>
                        <td className="w-83px text-right pr-5px">0</td>
                        <td
                          style={{ backgroundColor: "rgb(44,44,44)" }}
                          className="w-70px  text-right pr-10px h-full flex items-center justify-end"
                        >
                          0
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-55px h-42px w-full flex items-center space-x-9px text-24px tracking-tight text-gray-ccc2b6 font-spoqaMedium">
              <img src={MemberIcon} alt="" />
              <div>
                접속중인 회원수 :{" "}
                <span className="font-spoqaBold text-gray-c8c8c8 tracking-tight ">
                  2 명
                </span>
              </div>

              <div
                style={{
                  width: "75px",
                  height: "42px",
                  borderRadius: "4px",
                  marginLeft: "14px",
                  background: "linear-gradient(to top, #4b3b09, #e8b888)",
                }}
                className="flex items-center justify-center rounded-4px hover:filter hover:brightness-125 shadow-link"
                onClick={() => setViewOnline(!viewOnline)}
              >
                <div
                  style={{
                    width: "73px",
                    height: "40px",
                    background:
                      "linear-gradient(0deg, rgb(128, 96, 62) 0%, rgb(129, 96, 64) 5%, rgb(165, 124, 82) 97%)",
                    borderRadius: "3px",
                  }}
                  className="flex items-center justify-center rounded-4px cursor-pointer"
                >
                  <span
                    className="font-spoqaMedium tracking-tight text-14px text-shadow-5"
                    style={{ color: "#ffdfbd" }}
                  >
                    {viewOnline ? "닫기" : "보기"}
                  </span>
                </div>
              </div>
            </div>

            {viewOnline && (
              <div
                style={{ height: "66px" }}
                className="flex bg-gray-2e2e2e rounded-md mt-13px px-8px items-center space-x-10px"
              >
                <UsersOnline />
                <UsersOnline name="tkskdl12" />
              </div>
            )}

            <div className="mt-60px h-29px w-full flex items-end justify-between text-24px tracking-tight text-gray-ccc2b6 font-spoqaMedium">
              <div className="flex items-center space-x-10px items-center h-29px flex ml-px">
                <img src={RecommendIcon} alt="" />
                <div>추천 회원내역</div>
              </div>

              <div
                style={{ width: "374px" }}
                className="h-48px rounded-full border-2 border-gray-635f5b bg-gray-2e2e2e flex items-center justify-center font-spoqaMedium text-20px tracking-tight"
              >
                <img className="mr-16px" src={Diamond} alt="" />
                <div className="flex items-center space-x-4px pt-2px">
                  <span className="text-white">보유금 총합계 :</span>
                  <span className="text-yellow-ffd200">75,000</span>
                </div>
              </div>
            </div>

            {/* === 추천회원내역 표 === */}
            <div
              className="flex flex-col items-center justify-center mt-21px w-full rounded-4px overflow-hidden "
              style={{ filter: "drop-shadow(rgba(0, 0, 0, 0.6) 0 0px 5px)" }}
            >
              <div className="flex flex-col items-center justify-center  w-full overflow-hidden shadow-table">
                <div className="h-67px w-full bg-gray-2e2e2e flex items-center justify-start font-spoqa text-14px text-gray-ccc2b6 tracking-tight border border-gray-252525">
                  <div className="w-90px text-center pr-5px">번호</div>
                  <button
                    className="flex text-center items-center space-x-3px justify-center hover:font-spoqaBold filter hover:brightness-125"
                    style={{ width: "136px" }}
                    onClick={() => handleOnChange(0)}
                  >
                    <p>아이디</p>
                    <img
                      src={GrayArrow}
                      className={`${
                        isArrowUp[0] === true ? "transform rotate-180" : ""
                      } w-13px`}
                      alt=""
                    />
                  </button>
                  <div className="w-96px text-center">이름</div>
                  <div
                    className="w-124px text-center pl-7px"
                    style={{ width: "130px" }}
                  >
                    별명
                  </div>
                  <button
                    className="w-108px text-center flex items-center justify-center space-x-3px filter hover:brightness-125"
                    onClick={() => handleOnChange(1)}
                  >
                    <div className="flex flex-col items-center justify-center space-y-3px ">
                      <div className="flex items-center h-16px">하부</div>
                      <div className="flex items-center h-16px">유저수</div>
                    </div>
                    <img
                      src={GrayArrow}
                      className={`${
                        isArrowUp[1] === false ? "transform rotate-180" : ""
                      } w-13px`}
                      alt=""
                    />
                  </button>
                  <button
                    className="text-center flex items-center justify-center space-x-3px filter hover:brightness-125 pr-px"
                    style={{ width: "125px" }}
                    onClick={() => handleOnChange(2)}
                  >
                    <div className="flex flex-col items-center justify-center space-y-3px">
                      <div className="flex items-center h-16px">추천일시</div>
                      <div className="flex items-center h-16px">로그인일시</div>
                      <div className="flex items-center h-16px">
                        (미접속일수)
                      </div>
                    </div>
                    <img
                      src={GrayArrow}
                      className={`${
                        isArrowUp[2] === false ? "transform rotate-180" : ""
                      } w-13px`}
                      alt=""
                    />
                  </button>
                  <div className="text-center" style={{ width: "109px" }}>
                    요율보기
                  </div>
                  <div className="text-center" style={{ width: "122px" }}>
                    입금액
                  </div>
                  <div className="text-center" style={{ width: "108px" }}>
                    보너스
                  </div>
                  <button
                    className="flex text-center items-center space-x-3px justify-center filter hover:brightness-125"
                    style={{ width: "123px" }}
                    onClick={() => handleOnChange(3)}
                  >
                    <p>출금액</p>
                    <img
                      src={GrayArrow}
                      className={`${
                        isArrowUp[3] === false ? "transform rotate-180" : ""
                      } w-13px`}
                      alt=""
                    />
                  </button>
                  <div className="w-110px text-center">입출금액</div>
                  <button
                    className="flex w-113px text-center items-center space-x-3px justify-center filter hover:brightness-125"
                    style={{ width: "120px" }}
                    onClick={() => handleOnChange(4)}
                  >
                    <p>베팅액</p>
                    <img
                      src={GrayArrow}
                      className={`${
                        isArrowUp[4] === false ? "transform rotate-180" : ""
                      } w-13px`}
                      alt=""
                    />
                  </button>
                  <button
                    className="flex w-113px text-center items-center space-x-3px justify-center filter hover:brightness-125"
                    style={{ width: "113px" }}
                    onClick={() => handleOnChange(5)}
                  >
                    <p>윈루즈</p>
                    <img
                      src={GrayArrow}
                      className={`${
                        isArrowUp[5] === false ? "transform rotate-180" : ""
                      } w-13px`}
                      alt=""
                    />
                  </button>
                  <div
                    className="w-118px text-center"
                    style={{ width: "122px" }}
                  >
                    상세내역
                  </div>
                  <button
                    className="flex text-center items-center space-x-3px justify-center filter hover:brightness-125"
                    style={{ width: "106px" }}
                    onClick={() => handleOnChange(6)}
                  >
                    <p>포인트</p>
                    <img
                      src={GrayArrow}
                      className={`${
                        isArrowUp[6] === false ? "transform rotate-180" : ""
                      } w-13px`}
                      alt=""
                    />
                  </button>
                  <button
                    className="text-end flex items-center justify-center space-x-3px filter hover:brightness-125 pl-12px"
                    style={{ width: "116px" }}
                    onClick={() => handleOnChange(7)}
                  >
                    <div className="flex flex-col items-center justify-center space-y-3px">
                      <div className="flex items-center h-16px">보유</div>
                      <div className="flex items-center h-16px">금액</div>
                    </div>
                    <img
                      src={GrayArrow}
                      className={`${
                        isArrowUp[7] === false ? "transform rotate-180" : ""
                      } w-13px`}
                      alt=""
                    />
                  </button>
                </div>
                <RecommendedUserCell items={RecommendedUserArray} />
              </div>
            </div>
          </div>

          <div className="flex mt-60px justify-center w-full mb-60px">
            <Pagination page={page} setPage={setPage} />
          </div>

          <div className="w-full">
            <Footer fullWidth={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributorPage;
