import React from "react";
import "../RadioButton.css";
import ClockIcon from "../../../images/myPage/betHistory/clock_v2.png";
import UpIcon from "../../../images/myPage/betHistory/UP.png";
import DownIcon from "../../../images/myPage/betHistory/DOWN.png";
import Example1 from "../../../images/myPage/betHistory/minigame/example1.png";
import Sub3 from "../../../images/myPage/betHistory/minigame/sub3.png";
import Sub4 from "../../../images/myPage/betHistory/minigame/sub4.png";

const MinigameBetHistoryPanel = ({
  id = 0,
  time = "2021-06-29 15:45:05",
  amount = "5,000원",
  ratio = "4.34",
  predictedPrice = "21,715원",
  winAmount = "0",
  ticketNumber = "1891241599",
  checkedState = null,
  setCheckedState = null,
  setPopupOpen = null,
  isPopup = false,
  isAttached = false,
  setAttachedArray = null,
  attachedArray = null,
  team1 = "홀 [200회]",
  team2 = "[200회] 짝",
  choice = "even",
  result = "lose",
  game = "파워사다리",
}) => {
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const addEntryClick = () => {
    setAttachedArray((oldArray) => [...oldArray, id]);
  };

  const handleRemoveItem = (id) => {
    setAttachedArray(attachedArray.filter((item) => item !== id));
  };

  const CardContent = ({
    bet,
    result,
    choice,
    team1,
    team2,
    stat1,
    stat2,
    stat3,
    hasUp = false,
    hasDown = false,
  }) => (
    <div
      className="flex items-center w-full h-54px"
      style={{ background: "#323231" }}
    >
      <div
        style={{
          width: isAttached ? "127px" : "120px",
          marginLeft: isAttached ? "16px" : "0px",
        }}
        className="-space-y-4px flex items-center justify-center h-54px font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 flex-shrink-0"
      >
        <span>200</span>
      </div>
      <div className="flex space-x-4px flex-shrink-0">
        <button
          style={{
            width: isAttached ? "365px" : "285px",
            textShadow: bet === "left" ? "1px 1px 1px #00000070" : "",
            background:
              bet === "left"
                ? "linear-gradient(to bottom, #4f4a41, #2f2c28)"
                : "linear-gradient(to bottom, #4f4a41, #2f2c28)",
          }}
          className="flex items-center justify-center h-36px rounded-4px shadow-btn p-px"
        >
          <div
            style={{
              width: isAttached ? "363px" : "283px",
              background:
                bet === "left"
                  ? "linear-gradient(to bottom, #987959, #634d38 )"
                  : "",
            }}
            className={`${
              bet === "left"
                ? "text-golden-highLight shadow-btn"
                : " bg-dark-252525 text-gray-c8c8c8"
            } 
                        flex items-center justify-between h-34px rounded-3px cursor-pointer px-10px pt-px`}
          >
            <span className="truncate w-231px text-left font-spoqaMedium tracking-tight text-14px text-shadow overflow-ellipsis">
              {team1}
            </span>
            <div className="flex items-center space-x-5px">
              {hasUp && <img className="object-none" src={UpIcon} alt="" />}
              <span className="font-roboto tracking-tight text-14px text-shadow">
                {stat1}
              </span>
            </div>
          </div>
        </button>

        <button
          style={{
            textShadow: bet === "middle" ? "1px 1px 1px #00000070" : "",
            background:
              bet === "middle"
                ? ""
                : "linear-gradient(to bottom, #4f4a41, #2f2c28)",
          }}
          className={`flex group items-center justify-center w-81px h-36px rounded-4px  shadow-btn p-px ${
            bet === "middle" ? "bg-red-cb4343" : ""
          }`}
        >
          <div
            className={`${
              bet === "middle"
                ? "text-white "
                : "bg-dark-252525 text-gray-c8c8c8"
            }
                    pt-px flex items-center justify-center h-34px w-79px rounded-3px  cursor-pointer`}
          >
            <span className="font-roboto tracking-tight text-14px text-shadow">
              {stat2}
            </span>
          </div>
        </button>

        <button
          style={{
            width: isAttached ? "365px" : "285px",
            background:
              bet === "right"
                ? "linear-gradient(to bottom, #4f4a41, #2f2c28)"
                : "linear-gradient(to bottom, #4f4a41, #2f2c28)",
          }}
          className={`${
            bet === "right" ? "" : ""
          } flex group items-center justify-center h-36px rounded-4px p-px shadow-btn`}
        >
          <div
            style={{
              width: isAttached ? "363px" : "283px",
              textShadow: bet === "right" ? "1px 1px 1px #00000070" : "",
              background:
                bet === "right"
                  ? "linear-gradient(to bottom, #987959, #634d38 )"
                  : "",
            }}
            className={`${
              bet === "right"
                ? "text-golden-highLight"
                : "bg-dark-252525 text-gray-c8c8c8"
            } 
                      pt-px flex items-center justify-between h-34px rounded-3px  cursor-pointer px-10px`}
          >
            <div className="flex items-center space-x-5px">
              <span className="font-roboto tracking-tight text-14px">
                {stat3}
              </span>
              {hasDown && <img className="object-none" src={DownIcon} alt="" />}
            </div>
            <span className="truncate w-231px font-spoqaMedium tracking-tight text-14px text-right text-shadow overflow-ellipsis">
              {team2}
            </span>
          </div>
        </button>
      </div>

      <div className="flex ml-10px font-spoqaMedium tracking-tight text-14px text-center">
        <div
          style={{ width: isPopup ? "120px" : "130px" }}
          className="text-gray-c8c8c8"
        >
          {choice === "even" ? "짝" : "우"}
        </div>
        <div
          style={{ width: isPopup ? "116px" : "108px" }}
          className={`${
            result === "win"
              ? "text-red-e65454"
              : result === "lose"
              ? "text-gray-c8c8c8"
              : result === "cancel"
              ? "text-blue-4c98ff"
              : "text-gray-c8c8c8"
          }`}
        >
          {result === "win"
            ? "승"
            : result === "lose"
            ? "패"
            : result === "cancel"
            ? "취소"
            : "결과없음"}
        </div>
      </div>
    </div>
  );

  const Card = ({ team1, team2, choice, result }) => (
    <div className="w-full rounded-4px overflow-hidden shadow-subNavbar border-2 border-gray-473b35">
      <div
        className="flex items-center justify-between h-54px w-full pl-17px pr-19px"
        style={{
          background:
            "linear-gradient( to right, rgb(108,85,62) 0%, rgb(71,59,53) 100%)",
        }}
      >
        <div className="flex items-center">
          {game === "파워사다리" ? (
            <img src={Example1} alt="" />
          ) : game === "스피드키노" ? (
            <img
              style={{ zoom: "0.8", marginLeft: "5px" }}
              className="object-contain"
              src={Sub3}
              alt=""
            />
          ) : (
            <img
              style={{ zoom: "0.8", marginLeft: "5px" }}
              className="object-contain"
              src={Sub4}
              alt=""
            />
          )}

          {game === "파워사다리" ? (
            <span className="ml-4px font-spoqaMedium text-20px text-golden-highLight pt-2px">
              파워사다리
            </span>
          ) : game === "스피드키노" ? (
            <span className="ml-6px font-spoqaMedium text-20px text-golden-highLight pt-2px">
              스피드키노
            </span>
          ) : (
            <span className="ml-6px font-spoqaMedium text-20px text-golden-highLight pt-2px">
              키노사다리
            </span>
          )}
        </div>
        <div className="flex items-center">
          <img src={ClockIcon} alt="" />
          <span className="ml-5px font-spoqa text-16px tracking-tight text-golden-highLight pt-px">
            2021-06-29 15:45
          </span>
        </div>
      </div>
      <div
        className="flex flex-col w-full border-gray-dddddd"
        style={{ background: "#323231" }}
      >
        <CardContent
          bet="right"
          result={result}
          choice={choice}
          team1={team1}
          team2={team2}
          stat1="1.95"
          stat2="VS"
          stat3="1.95"
        />
      </div>
    </div>
  );

  return (
    <div
      className="w-full shadow-table p-px rounded-4px"
      style={{
        background:
          "linear-gradient(to top,rgb(31,31,30) 0% ,rgb(31,31,30) 80% , rgb(52,52,52) 100%)",
      }}
    >
      <div className="w-full bg-gray-2b2b2a rounded-3px pb-10px">
        <div className="flex h-54px w-full font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6">
          <div
            style={{
              width: isAttached === true ? "162px" : "120px",
              marginLeft: isAttached === true ? "0" : "10px",
            }}
            className="h-full flex items-center justify-center ml-10px"
          >
            회차
          </div>
          <div
            style={{ width: isAttached === true ? "315px" : isPopup ? "285px" : "285px" }}
            className="h-full flex items-center justify-center"
          >
            승(홈)
          </div>
          <div
            style={{ width: isAttached === true ? "139px" : isPopup ? "90px" : "89px" }}
            className="h-full flex items-center justify-center"
          >
            VS
          </div>
          <div
            style={{ width: isAttached === true ? "317px" : isPopup ? "282px" : "285px" }}
            className="h-full flex items-center justify-center"
          >
            패(원정)
          </div>
          <div
            style={{ width: isAttached === true ? "66px" : isPopup ? "152px" : "150px" }}
            className="h-full flex items-center justify-center"
          >
            선택
          </div>
          <div
            style={{
              width: isAttached === true ? "58px" : "89px",
              marginRight: isAttached === true ? "25px" : "10px",
            }}
            className="h-full flex items-center justify-center"
          >
            결과
          </div>
        </div>

        <div className="w-full px-8px space-y-10px">
          <Card team1={team1} team2={team2} choice={choice} result={result} />
        </div>

        <div
          className={`flex w-full px-8px ${
            isPopup ? "mt-11px" : "mt-10px"
          } space-x-10px`}
        >
          <table>
            <div
              style={{ backgroundColor: "rgb(55,55,55)" }}
              className={`flex w-auto h-36px rounded-4px bg-dark-252525 font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 ${
                isPopup && "pt-px"
              }`}
            >
              {isAttached === false && (
                <div className="w-45px h-full flex items-center justify-center">
                  선택
                </div>
              )}
              {isAttached === false && isPopup === false && (
                <div className="w-116px h-full flex items-center justify-center border-l border-gray-2b2b2a">
                  베팅번호
                </div>
              )}
              <div
                style={{
                  width:
                    isAttached === true
                      ? "212px"
                      : isPopup === false
                      ? "151px"
                      : "178px",
                }}
                className="h-full flex items-center justify-center border-l border-gray-2b2b2a"
              >
                베팅시간
              </div>
              <div
                style={{
                  width:
                    isAttached === true
                      ? "212px"
                      : isPopup === false
                      ? "131px"
                      : "145px",
                }}
                className="h-full flex items-center justify-center border-l border-gray-2b2b2a"
              >
                베팅금액
              </div>
              <div
                style={{
                  width:
                    isAttached === true
                      ? "212px"
                      : isPopup === false
                      ? "78px"
                      : "178px",
                }}
                className="h-full flex items-center justify-center border-l border-gray-2b2b2a"
              >
                배당률
              </div>
              <div
                style={{
                  width:
                    isAttached === true
                      ? "212px"
                      : isPopup === false
                      ? "131px"
                      : "165px",
                }}
                className="h-full flex items-center justify-center border-l border-gray-2b2b2a"
              >
                예상적중금액
              </div>
              <div
                style={{
                  width:
                    isAttached === true
                      ? "212px"
                      : isPopup === false
                      ? "131px"
                      : "178px",
                }}
                className="h-full flex items-center justify-center border-l border-gray-2b2b2a"
              >
                당첨금
              </div>
            </div>
            <div
              className={`flex w-auto h-36px font-spoqa text-14px tracking-tight text-gray-c8c8c8 ${
                isPopup && "pt-2px"
              }`}
            >
              {isAttached === false && checkedState && (
                <div className="w-45px h-full flex items-center justify-center">
                  <input
                    className="radio"
                    type="checkbox"
                    name="radio"
                    checked={checkedState[id]}
                    onChange={() => handleOnChange(id)}
                  />
                </div>
              )}
              {isAttached === false && isPopup === false && (
                <div
                  style={{ WebkitTextStroke: "0.2px" }}
                  className="w-116px h-full flex items-center justify-center border-l border-gray-2b2b2a"
                >
                  {ticketNumber}
                </div>
              )}
              <div
                style={{
                  width:
                    isAttached === true
                      ? "212px"
                      : isPopup === false
                      ? "151px"
                      : "178px",
                }}
                className="h-full flex items-center justify-center border-l border-gray-2b2b2a"
              >
                {time}
              </div>
              <div
                style={{
                  width:
                    isAttached === true
                      ? "212px"
                      : isPopup === false
                      ? "131px"
                      : "145px",
                }}
                className="h-full flex items-center justify-end border-l border-gray-2b2b2a pr-5px"
              >
                {amount}
              </div>
              <div
                style={{
                  width:
                    isAttached === true
                      ? "212px"
                      : isPopup === false
                      ? "78px"
                      : "178px",
                }}
                className="h-full flex items-center justify-center border-l border-gray-2b2b2a"
              >
                {ratio}
              </div>
              <div
                style={{
                  width:
                    isAttached === true
                      ? "212px"
                      : isPopup === false
                      ? "131px"
                      : "165px",
                }}
                className="h-full flex items-center justify-end border-l border-gray-2b2b2a pr-5px"
              >
                {predictedPrice}
              </div>
              <div
                style={{
                  width:
                    isAttached === true
                      ? "212px"
                      : isPopup === false
                      ? "131px"
                      : "178px",
                }}
                className="h-full flex items-center justify-end border-l border-gray-2b2b2a pr-5px"
              >
                <p className={`${winAmount.includes("+") && "text-red-500"}`}>
                  {winAmount}
                </p>
                원
              </div>
            </div>
          </table>

          <div className="flex space-x-4px">
            {isAttached === false && (
              <button
                onClick={() => {
                  setPopupOpen && setPopupOpen(false);
                  setAttachedArray && addEntryClick();
                }}
                className="flex items-center justify-center w-112px h-73px rounded-4px bg-gradient-to-b from-blue-88d9e8  to-blue-3d4a8d hover:filter hover:brightness-125 shadow-link"
              >
                <div className="pt-px flex items-center justify-center h-71px w-110px rounded-3px bg-gradient-to-b from-blue-528ccd to-blue-396084 cursor-pointer">
                  <span className="font-spoqaMedium tracking-tight text-14px text-blue-d6f3ff text-shadow-5">
                    내역올리기
                  </span>
                </div>
              </button>
            )}

            {isPopup === false && (
              <button
                onClick={() => setAttachedArray && handleRemoveItem(id)}
                className="flex items-center justify-center w-112px h-73px rounded-4px bg-gradient-to-t from-red-4b0923 to-red-e88895  hover:filter hover:brightness-125 shadow-link"
              >
                <div className="pt-px flex items-center justify-center h-71px w-110px rounded-3px  bg-gradient-to-b from-red-e06446  to-red-96341d cursor-pointer">
                  <span className="font-spoqaMedium tracking-tight text-14px text-red-ffd2d2 text-shadow-5">
                    내역삭제
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinigameBetHistoryPanel;
