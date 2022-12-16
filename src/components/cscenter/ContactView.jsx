import MyPageTitle from "components/myPage/MyPageTitle";
import React from "react";
import { useHistory } from "react-router";
import Rank1Icon from "../../images/cscenter/rank1.png";

const ContactView = () => {
  const BodyText1 =
    "안녕하세요. 혁신적인 완성형 베팅업체『WINNER 고객센터』입니다.";
  const BodyText2 =
    "추가적인 문의사항은 언제든지 전화 요청 또는 카카오톡, 텔레그램 고객센터로 \n 문의하시면 24시간 항상 친절하게 안내 도와드리겠습니다. \n 앞으로 많은 이용 부탁드립니다.";
  const BodyText3 = "감사합니다.";
  const BodyText4 =
    "24시 모바일 고객센터 카카오톡: WINN7777 텔레그램: WINN7777 \n 예비 도메인안내: 위너주소.com";
  const history = useHistory();

  return (
    <div>
      <MyPageTitle title="문의하기" />

      <div
        className="shadow-table w-full overflow-hidden rounded-4px p-px mt-20px"
        style={{
          background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)",
        }}
      >
        <div className="w-full bg-gray-2e2e2e rounded-4px overflow-hidden">
          <div className="w-full border-b border-gray-252525 px-19px flex items-start space-x-10px py-15px">
            <div
              style={{
                maxWidth: "92px",
                backgroundColor: "#494745",
                color: "#ccc2b6",
              }}
              className="px-12px h-24px rounded-full font-spoqaMedium text-12px tracking-tight flex items-center justify-center flex-shrink-0"
            >
              답변완료
            </div>

            <div
              style={{ backgroundColor: "#40915f", color: "#fff" }}
              className="px-12px h-24px rounded-full font-spoqaMedium text-12px tracking-tight flex items-center justify-center flex-shrink-0"
            >
              <p
                style={{
                  maxWidth: "300px",
                  textOverflow: "clip",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                스포츠
              </p>
            </div>

            <p className=" mt-2px font-spoqaMedium text-15px tracking-tight text-gray-c8c8c8">
              스포츠북 문의
            </p>
          </div>

          <div className="py-16px w-full border-b border-gray-252525 px-19px flex items-start text-14px font-spoqaMedium tracking-tight text-gray-929292">
            <img src={Rank1Icon} alt="" />
            <p className="ml-3px mt-2px">
              마이마이프로틴화이팅
              <div className="inline-block">
                <div
                  className="inline-block h-11px w-px mx-10px mt-4px"
                  style={{ background: "#4c4c4c" }}
                ></div>
                <p className="inline-block">2021.06.28 15:49</p>
              </div>
            </p>
          </div>

          <div className="w-full bg-gray-323232 py-22px px-16px">
            <div className="rounded-4px  py-15px  flex items-start px-21px font-spoqa text-14px tracking-tight text-gray-c8c8c8 bg-gray-252525">
              스포츠북 문의 입니다.
            </div>

            <div className="bg-gray-414141 rounded-4px pt-20px pb-17px  px-22px mt-21px font-spoqaMedium text-14px tracking-tight text-gray-c8c8c8 space-y-35px">
              <div className="space-y-10px">
                {BodyText1.split("\n").map((item, i) => (
                  <p key={i} className="flex items-center">
                    {item}
                  </p>
                ))}
              </div>
              <div className="space-y-10px">
                {BodyText2.split("\n").map((item, i) => (
                  <p key={i} className="flex items-center">
                    {item}
                  </p>
                ))}
              </div>
              <div className="space-y-10px">
                {BodyText3.split("\n").map((item, i) => (
                  <p key={i} className="flex items-center">
                    {item}
                  </p>
                ))}
              </div>
              <div className="space-y-10px">
                {BodyText4.split("\n").map((item, i) => (
                  <p key={i} className="flex items-center">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20px mb-60px flex items-start justify-between">
        <button
          className="flex items-center justify-center h-36px w-90px p-px rounded-4px  shadow-link hover:filter hover:brightness-125"
          style={{ background: "linear-gradient(to top, #4b3b09, #e8b888)" }}
        >
          <div
            style={{
              background: "linear-gradient(to bottom,  #a67c52, #7f5f3f)",
            }}
            className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
          >
            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-shadow-5">
              이전
            </span>
          </div>
        </button>

        <button
          style={{ background: "linear-gradient(to top, #4b3b09, #e8b888)" }}
          className="flex items-center justify-center h-52px w-192px p-px rounded-4px  shadow-link hover:filter hover:brightness-125"
          onClick={() => history.push("/cscenter/contact/all")}
        >
          <div
            style={{
              background: "linear-gradient(to bottom,  #a67c52, #7f5f3f)",
            }}
            className="flex items-center justify-center h-50px w-190px rounded-4px cursor-pointer"
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
            className="flex items-center justify-center h-34px w-88px  rounded-4px  cursor-pointer"
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

export default ContactView;
