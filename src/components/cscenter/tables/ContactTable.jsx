import React from "react";
import { useHistory } from "react-router";
import MailIcon from "../../../images/myPage/mail_v2.png";
import MailOpenedIcon from "../../../images/myPage/mail_opened_v2.png";

const ContactTable = ({ array }) => {
  const history = useHistory();

  function InboxList({ items }) {
    return items.map((item) => (
      <div
        key={item.id}
        className={`${
          item.isRead === false
            ? "bg-brown-r3d3934"
            : item.id % 2 === 0
            ? "bg-gray-323232"
            : "bg-gray-2e2e2e"
        } font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 h-56px w-full border-b border-gray-252525 last:border-b-0 group pt-px`}
      >
        <div className="flex items-center font-spoqaBold text-14px tracking-tight text-gray-c8c8c8 h-56px border-b border-gray-252525 px-54px">
          <div
            className="w-54px flex justify-center cursor-pointer h-full items-center"
            onClick={() => history.push(item.path)}
          >
            <img
              className="object-none"
              src={item.isRead === true ? MailOpenedIcon : MailIcon}
              alt=""
            />
          </div>

          <div
            className="w-102px flex justify-center cursor-pointer h-full items-center -mt-px"
            onClick={() => history.push(item.path)}
          >
            <div
              style={{
                maxWidth: "92px",
                backgroundColor: item.isRead === true ? "#494745" : "#7e7564",
                color: item.isRead === true ? "#c8c8c8" : "#f1e7d5",
              }}
              className={`px-8px h-29px rounded-full font-spoqaMedium text-14px tracking-tight flex items-center justify-center pt-px cursor-pointer`}
            >
              <p
                style={{
                  maxWidth: "75px",
                  textOverflow: "unset",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {item.isRead === true ? "답변완료" : "답변대기"}
              </p>
            </div>
          </div>

          <div
            className={`${
              item.isRead === true ? "text-gray-929292" : "text-gray-c8c8c8"
            } font-spoqaMedium w-120px  flex justify-center cursor-pointer h-full items-center `}
            onClick={() => history.push(item.path)}
            style={{ color: item.isRead === true ? "#a0a0a0" : "#eeeeee" }}
          >
            {item.category}
          </div>

          <div
            style={{
              width: "420px",
              color: item.isRead === true ? "#a0a0a0" : "#eeeeee",
            }}
            className={`${
              item.isRead === true
                ? "text-gray-929292"
                : "text-gray-c8c8c8 group"
            } ${
              item.text.length > 30 ? "" : "space-x-10px"
            } font-spoqaMedium flex items-center cursor-pointer h-full ml-23px`}
            onClick={() => history.push(item.path)}
          >
            <p
              style={{ maxWidth: "370px" }}
              className="group-hover:text-gray-f1e9e9 truncate"
            >
              {item.text}
            </p>
            {item.isRead === false && (
              <div className="w-17px h-17px bg-red-e9441d rounded-4px text-12px text-white flex items-center justify-center font-roboto flex-shrink-0">
                <p className="flex items-center h-12px -ml-px">N</p>
              </div>
            )}
          </div>

          <div
            className={`${
              item.isRead === true ? "text-gray-929292" : "text-gray-c8c8c8"
            } w-138px flex font-spoqa justify-center text-center cursor-pointer h-full items-center pr-5px`}
            style={{ color: item.isRead === true ? "#a0a0a0" : "#eeeeee" }}
            onClick={() => history.push(item.path)}
          >
            {item.time}
          </div>
          <div className="ml-33px w-70px flex items-center justify-center">
            <button
              className={`${
                item.isRead === true ? "bg-gray-5c5c5c" : "bg-red-c65337"
              } w-49px h-29px flex justify-center rounded-4px text-white font-spoqaMedium items-center pt-2px filter hover:brightness-125 shadow-plain10`}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div
      className="shadow-table w-full overflow-hidden rounded-4px p-px"
      style={{
        background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)",
      }}
    >
      <div className="w-full bg-gray-323232 rounded-4px overflow-hidden">
        <div className="flex items-center bg-gray-2e2e2e font-spoqaMedium text-14px tracking-tight text-gray-ccc2b6 h-55px border-b border-gray-252525 px-52px pt-px">
          <div className="w-57px flex justify-center">확인</div>
          <div className="w-92px flex justify-center">상태</div>
          <div className="w-124px flex justify-center">구분</div>
          <div style={{ width: "416px" }} className="flex justify-center">
            제목
          </div>
          <div
            style={{ width: "142px" }}
            className="flex justify-center ml-5px"
          >
            등록일시
          </div>
          <div className="ml-33px w-70px flex justify-center">삭제</div>
        </div>

        <InboxList items={array} />
      </div>
    </div>
  );
};

export default ContactTable;
