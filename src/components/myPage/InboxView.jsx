import React from "react";
import MyPageTitle from "./MyPageTitle";
import WinnerLogo from "../../images/freeBoard/winner_small2.png";
import { useHistory } from "react-router";

const InboxView = () => {
  const TitleText = "서버 점검 안내";
  const PostedTime = "2021.06.28 15:49";
  const SubtitleText = "정기 점검 안내";
  const BodyText =
    "안녕하세요. 혁신적인 완성형 베팅업체『WINNER 고객센터』입니다. \n 금일 정기 점검이예정되어 안내드리오니 참고 후 이용 부탁드립니다. \n 점검 내용 : 정기 점검 \n 시작 시간 : 2021년 05월 10일 14:00 \n 종료 시간 : 2021년 05년 10일 17:00 \n 점검은 상황에 따라 조기 종료 혹은 지연 될 수 있습니다. \n 최대한 빠른 정상화를 위해 노력하겠습니다.\n 추가적인 문의사항은 언제든지 전화 요청 또는 카카오톡, 텔레그램 고객센터로 \n 몬의하시면 24시간 항상 친절하게 안내 도움드리겠습니다/ \n 앞으로 많은 이용 부탁드립니다. \n 감사합니다.";
  const FooterText =
    "24시 모바일 고객센터 카카오톡: WINN7777 텔레그램: WINN7777 \n 예비 도메인안내: 위너주소.com";

  const history = useHistory();

  const NewLabel = (
    <div className="w-17px h-17px bg-red-e9441d rounded-4px text-12px text-white flex items-center justify-center font-roboto flex-shrink-0 mt-2px pt-px">
      <p className="flex items-center h-12px -ml-px">N</p>
    </div>
  );

  return (
    <div>
      <MyPageTitle title="쪽지관리" />

      <div
        className="shadow-table w-full overflow-hidden rounded-4px p-px mt-20px"
        style={{
          background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)",
        }}
      >
        <div className="w-full bg-gray-2e2e2e rounded-4px overflow-hidden">
          {/* TITLE */}
          <div className="py-15px w-full  flex items-start px-19px space-x-10px border-b border-gray-252525">
            {/* <div className="px-12px h-25px rounded-full bg-blue-0469a3 flex items-center justify-center text-white text-12px font-spoqaMedium flex-shrink-0 mt-px" style={{ maxWidth: '92px' }}>안내</div> */}
            <div className="font-spoqaMedium text-15px tracking-tight text-gray-c8c8c8 ">
              <h1 className="align-top mt-3px">
                {TitleText}{" "}
                <span className="inline-block align-top ml-10px">
                  {NewLabel}
                </span>
              </h1>
            </div>
          </div>
          {/* SENDER */}
          <div className="h-56px w-full  flex px-19px space-x-10px border-b border-gray-252525 text-gray-929292">
            <img
              className="h-17px w-72px object-contain mt-19px"
              src={WinnerLogo}
              alt=""
            />
            <div
              className="h-11px w-px mt-24px"
              style={{ background: "#4c4c4c" }}
            />
            <div className="font-spoqaMedium text-14px tracking-tight text-gray-929292 h-12px flex items-center mt-23px flex-shrink-0">
              {PostedTime}
            </div>
          </div>
          <div className="w-full bg-gray-323232 flex flex-col px-19px border-b border-gray-252525 py-18px ">
            <p className="font-spoqaMedium text-15px tracking-tight text-gray-c8c8c8">
              {SubtitleText}
            </p>
            <p className="font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 space-y-34px mt-39px">
              {BodyText.split("\n").map((item, i) => (
                <p key={i} className="flex items-center">
                  {item}
                </p>
              ))}
            </p>
            <p className="font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 mt-34px space-y-11px">
              {FooterText.split("\n").map((item, i) => (
                <p key={i} className="flex items-center">
                  {item}
                </p>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20px mb-60px flex items-start justify-between">
        <button
          className="flex items-center justify-center h-36px w-90px rounded-4px p-px shadow-link hover:filter hover:brightness-125"
          style={{ background: "linear-gradient(to top, #4b3b09, #e8b888)" }}
        >
          <div
            style={{
              background: "linear-gradient(to bottom,  #a67c52, #7f5f3f)",
            }}
            className="flex items-center justify-center h-34px w-88px  rounded-4px  cursor-pointer"
          >
            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-shadow-5">
              이전
            </span>
          </div>
        </button>

        <button
          style={{ background: "linear-gradient(to top, #4b3b09, #e8b888)" }}
          className="flex items-center justify-center h-52px w-192px rounded-4px p-px shadow-link hover:filter hover:brightness-125"
          onClick={() => history.push("/mypage/inbox")}
        >
          <div
            style={{
              background: "linear-gradient(to bottom,  #a67c52, #7f5f3f)",
            }}
            className="flex items-center justify-center h-50px w-190px  rounded-4px cursor-pointer"
          >
            <span className="font-spoqaMedium tracking-tight text-16px text-golden-highLight pt-px text-shadow-5">
              목록보기
            </span>
          </div>
        </button>

        <button
          className="flex items-center justify-center h-36px w-90px p-px rounded-4px  shadow-link hover:filter hover:brightness-125"
          style={{ background: "linear-gradient(to top, #4b3b09, #e8b888)" }}
        >
          <div
            style={{
              background: "linear-gradient(to bottom,  #a67c52, #7f5f3f)",
            }}
            className="flex items-center justify-center h-34px w-88px bg-black rounded-4px  cursor-pointer"
          >
            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-shadow-5">
              다음
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default InboxView;
