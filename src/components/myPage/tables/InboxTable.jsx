import React from "react";
import { useHistory } from "react-router-dom";
import MailIcon from "../../../images/myPage/mail_v2.png";
import MailOpenedIcon from "../../../images/myPage/mail_opened_v2.png";

const InboxTable = ({ array, checkedState, setCheckedState }) => {
  const history = useHistory();

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  function InboxList({ items }) {
    return items.map((item) => (
      <div
        key={item.id}
        className={`${
          item.isRead === false
            ? "bg-gray-3d3934"
            : item.id % 2 === 0
            ? "bg-dark-323232"
            : "bg-dark-2e2e2e"
        } font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-dark-252525 hover:font-spoqaBold last:border-b-0`}
      >
        <div className="flex items-center font-spoqaBold text-14px tracking-tight text-gray-c8c8c8 h-56px border-b border-dark-252525 px-52px last:border-b-0">
          <div className="w-26px flex justify-center">
            <input
              type="checkbox"
              checked={checkedState[item.id]}
              onChange={() => handleOnChange(item.id)}
            />
          </div>

          <div
            className="w-107px flex justify-center cursor-pointer"
            onClick={() => history.push(item.path)}
          >
            <img
              src={item.isRead === true ? MailOpenedIcon : MailIcon}
              alt=""
            />
          </div>

          <div
            style={{
              width: "569px",
              color: item.isRead === true ? "#a0a0a0" : "#eeeeee",
            }}
            className={`${
              item.isRead === true
                ? "text-gray-929292 font-spoqaMedium"
                : "text-gray-c8c8c8 font-spoqaMedium"
            } group flex items-center space-x-10px cursor-pointer`}
            onClick={() => history.push(item.path)}
          >
            {item.type === "공지" ? (
              <div
                className="px-12px h-25px rounded-full bg-blue-0469a3 flex items-center justify-center text-white text-12px -mt-px  pt-px flex-shrink-0 "
                style={{ maxWidth: "92px" }}
              >
                공지
              </div>
            ) : item.type === "이벤트" ? (
              <div
                className="px-12px h-25px rounded-full bg-yellow-c08029 flex items-center justify-center text-white text-12px -mt-px pt-px flex-shrink-0"
                style={{ maxWidth: "92px" }}
              >
                이벤트
              </div>
            ) : (
              ""
            )}
            <p
              className="group-hover:text-gray-f1e9e9 truncate"
              style={{
                maxWidth:
                  item.type === "공지" || item.type === "이벤트"
                    ? "487px"
                    : "550px",
              }}
            >
              {item.text}
            </p>
            {item.isRead === false && (
              <div className="w-17px h-17px bg-red-e9441d rounded-4px text-12px text-white flex items-center justify-center font-roboto flex-shrink-0 pt-px -mt-px">
                <p className="flex items-center h-12px -ml-px">N</p>
              </div>
            )}
          </div>

          <div
            className={`${
              item.isRead === true ? "text-gray-929292" : "text-gray-c8c8c8"
            } flex font-spoqa justify-center text-center`}
            style={{
              width: "160px",
              color: item.isRead === true ? "#a0a0a0" : "#eeeeee",
            }}
          >
            {item.time}
          </div>

          <button className="w-72px flex items-center justify-center">
            <div
              style={{ boxShadow: "0px 1px 1px 0px rgba(0, 0, 0, 0.6)" }}
              className={`${
                item.isRead === true ? "bg-gray-5c5c5c" : "bg-red-c65337"
              } w-49px h-29px flex justify-center rounded-4px text-white font-spoqaMedium items-center pt-2px hover:filter hover:brightness-125 `}
            >
              삭제
            </div>
          </button>
        </div>
      </div>
    ));
  }

  return (
    <div
      style={{
        background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)",
      }}
      className="rounded-4px shadow-table overflow-hidden p-px"
    >
      <div className="rounded-3px overflow-hidden">
        <div className="flex items-center font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-56px border-b border-dark-252525 bg-dark-2e2e2e px-52px">
          <div className="w-26px flex justify-center">선택</div>
          <div className="w-107px flex justify-center">확인</div>
          <div
            className="flex justify-center pr-34px"
            style={{ width: "569px" }}
          >
            제목
          </div>
          <div className="flex justify-center" style={{ width: "160px" }}>
            보낸시간
          </div>
          <div className="w-72px flex justify-center">삭제</div>
        </div>

        <InboxList items={array} />
      </div>
    </div>
  );
};

export default InboxTable;
