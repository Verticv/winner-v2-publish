import React from "react";
import WinnerSmall from "../../images/freeBoard/winner_small2.png";
import Sample from "../../images/freeBoard/sample.png";
import { useHistory } from "react-router";
import Rank1 from "../../images/freeBoard/1_v2.png";
import Rank2 from "../../images/freeBoard/2_v2.png";
import Rank3 from "../../images/freeBoard/3_v2.png";
import Rank4 from "../../images/freeBoard/4_v2.png";
import Rank5 from "../../images/freeBoard/5_v2.png";
import ReplyArrow from "../../images/freeBoard/reply_v2.png";

const FreeBoardView = () => {
  const history = useHistory();

  const ReplyCell = ({
    text = "이벤트 참여 감사합니다.",
    rank = 1,
    username = "쇼유",
    isEdit = false,
    tag = null,
  }) => (
    <div className="w-full pr-19px">
      <div className="py-10px ml-22px flex items-center justify-between">
        <div className="self-start pt-6px flex items-start pr-10px">
          <img className="object-none mt-5px" src={ReplyArrow} alt="" />
          <img
            className="pl-13px"
            src={
              rank === 1
                ? Rank1
                : rank === 2
                ? Rank2
                : rank === 3
                ? Rank3
                : rank === 4
                ? Rank4
                : Rank5
            }
            alt=""
          />
          <p className="ml-5px mt-px text-15px font-spoqaMedium tracking-tight text-gray-ccc2b6">
            {username}
          </p>
        </div>
        {isEdit === true ? (
          <div className="flex self-start items-start space-x-4px justify-end">
            <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-gradient-to-t from-red-4b0923 to-red-e88895  hover:filter hover:brightness-125 shadow-link">
              <div className="flex items-center justify-center h-34px w-88px rounded-4px  bg-gradient-to-b from-red-e06446  to-red-96341d cursor-pointer">
                <span className="font-spoqaMedium tracking-tight text-14px text-red-ffd2d2 pt-px text-shadow-5">
                  수정하기
                </span>
              </div>
            </button>
            <button
              className="flex items-center justify-center w-90px h-36px p-px rounded-4px  shadow-link hover:filter hover:brightness-125"
              style={{
                background: "linear-gradient(to top, #4b3b09, #e8b888)",
              }}
            >
              <div
                className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
                style={{
                  background: "linear-gradient(to bottom,  #a67c52, #7f5f3f)",
                }}
              >
                <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-shadow-5">
                  삭제하기
                </span>
              </div>
            </button>
          </div>
        ) : (
          <button className="self-start flex items-center justify-center h-36px w-90px rounded-4px bg-gradient-to-t from-blue-3d4a8d to-blue-88d9e8 p-px hover:filter hover:brightness-125 shadow-link">
            <div className="flex items-center justify-center h-34px w-88px rounded-4px bg-gradient-to-b from-blue-528ccd to-blue-396084  cursor-pointer">
              <span className="font-spoqaMedium tracking-tight text-14px text-blue-d6f3ff pt-2px text-shadow-5">
                답글달기
              </span>
            </div>
          </button>
        )}
      </div>
      <div className="pl-48px">
        <div className="w-full rounded-4px bg-gray-252525 flex items-start px-20px  pt-17px pb-14px justify-between text-gray-c8c8c8 mt-px">
          <div className="text-14px font-spoqa tracking-tight ">
            {tag && (
              <span className={`text-blue-2980b9 mr-10px font-spoqaMedium`}>
                @{tag.length > 8 ? tag.substring(0, 8) : tag}{" "}
                {tag.length > 8 && (
                  <span className="-mt-5px inline-block">...</span>
                )}
              </span>
            )}
            <span className=" text-gray-c8c8c8">{text}</span>
          </div>
          <p className="text-gray-c8c8c8  tracking-tight font-spoqa text-14px flex flex-shrink-0 ml-7px">
            2021.06.28 15:36
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <div
        className="w-full shadow-table overflow-hidden rounded-4px p-px"
        style={{
          background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)",
        }}
      >
        <div className="w-full bg-gray-323232 rounded-4px overflow-hidden">
          <div className="bg-gray-2e2e2e border-b border-gray-252525 flex items-start px-19px py-15px space-x-10px">
            <div
              style={{ backgroundColor: "#0469a3", maxWidth: "92px" }}
              className="rounded-full flex items-center justify-center px-12px h-24px font-spoqaMedium text-12px tracking-tight text-white pt-px flex-shrink-0 truncate"
            >
              공지
            </div>
            <div
              style={{ backgroundColor: "#c08029", maxWidth: "92px" }}
              className="rounded-full flex items-center justify-center px-12px h-24px font-spoqaMedium text-12px tracking-tight text-white pt-px flex-shrink-0 truncate"
            >
              이벤트
            </div>
            <div className="text-15px font-spoqaMedium tracking-tight text-gray-c8c8c8 mt-2px">
              메신져 고객센터 사칭주의
            </div>
          </div>

          <div className="bg-gray-2e2e2e h-56px border-b border-gray-252525 flex items-center px-19px space-x-10px">
            <img className="mb-px h-15px" src={WinnerSmall} alt="" />
            <div
              className="w-px h-10px ml-8px mt-px"
              style={{ background: "#4c4c4c" }}
            />
            <div className="font-spoqaMedium text-14px tracking-tight text-gray-929292 mt-px">
              댓글
            </div>
            <div className="w-17px h-17px bg-red-e9441d rounded-4px text-12px text-white flex items-center justify-center font-roboto flex-shrink-0 -mt-px">
              <p className="flex items-center h-12px -ml-px">2</p>
            </div>
          </div>

          <div className="py-60px pt-60px pb-53px bg-gray-323232">
            <div className="w-full flex justify-center">
              <img src={Sample} alt="" />
            </div>

            <div className="px-19px pt-18px">
              <div className="flex items-center text-14px font-spoqaMedium tracking-tight text-gray-c8c8c8">
                이벤트 중 주간 낙첨 포인트 지급은 21년 6월 7일 이후 베팅건 부터
                아래와 같이 적용됩니다.
              </div>
              <div
                style={{ color: "#dd431e" }}
                className="h-16px flex items-center text-16px font-spoqaMedium tracking-tight mt-33px"
              >
                [낙첨 금액별 쿠폰 금액]
              </div>
              <div className="flex items-center text-14px font-spoqaMedium tracking-tight text-gray-c8c8c8 mt-15px">
                10만원 ~<span className="mr-13px"></span> 5,000 쿠폰
              </div>
              <div className="flex items-center text-14px font-spoqaMedium tracking-tight text-gray-c8c8c8 mt-13px">
                20만원 이상 <span className="mr-13px"></span> 10,000{" "}
                <span className="ml-5px">쿠폰</span>
              </div>
              <div className="flex items-center text-14px font-spoqaMedium tracking-tight text-gray-c8c8c8 mt-13px">
                30만원 이상 <span className="mr-13px"></span> 15,000{" "}
                <span className="ml-5px">쿠폰</span>
              </div>
              <div className="flex items-center text-14px font-spoqaMedium tracking-tight text-gray-c8c8c8 mt-12px">
                50만원 이상 <span className="mr-13px"></span> 25,000{" "}
                <span className="ml-5px">쿠폰</span>
              </div>
              <div className="flex items-center text-14px font-spoqaMedium tracking-tight text-gray-c8c8c8 mt-13px">
                100만원 이상 <span className="mr-13px"></span> 50,000{" "}
                <span className="ml-5px">쿠폰</span>
              </div>
              <div className="flex items-center text-14px font-spoqaMedium tracking-tight text-gray-c8c8c8 mt-13px">
                300만원 이상 <span className="mr-13px"></span> 150,000{" "}
                <span className="ml-5px"> 쿠폰</span>
              </div>
              <div className="flex items-center text-14px font-spoqaMedium tracking-tight text-gray-c8c8c8 mt-13px">
                500만원 이상 <span className="mr-13px"></span> 낙첨액 5%{" "}
                <span className="ml-5px">쿠폰</span>
              </div>

              <div className="text-14px font-spoqaMedium tracking-tight text-gray-c8c8c8 mt-26px">
                <span className="relative top-3px">*</span>{" "}
                <span>
                  {" "}
                  2021년 5월 31일 ~ 6월 6일 (일요일)까지 베팅 내역을 화요일
                  낙첨금액 5% 쿠폰 발행되며,
                </span>
              </div>
              <div className="text-14px font-spoqaMedium tracking-tight text-gray-c8c8c8 mt-9px">
                <span className="relative top-3px">*</span>{" "}
                <span style={{ color: "#2980b9" }}>
                  2021년 6월 7일 (월) 이후 베팅에 대한 낙첨쿠폰은 위 기준에 따라
                  제공
                </span>
                되오니 참고 부탁 드립니다.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex space-x-4px my-20px justify-end">
        <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-gradient-to-t from-red-4b0923 to-red-e88895  hover:filter hover:brightness-125 shadow-link">
          <div className="flex items-center justify-center h-34px w-88px rounded-4px  bg-gradient-to-b from-red-e06446  to-red-96341d cursor-pointer">
            <span className="font-spoqaMedium tracking-tight text-14px text-red-ffd2d2 text-shadow-5">
              수정하기
            </span>
          </div>
        </button>
        <button
          className="flex items-center justify-center w-90px h-36px p-px rounded-4px  shadow-link hover:filter hover:brightness-125"
          style={{ background: "linear-gradient(to top, #4b3b09, #e8b888)" }}
        >
          <div
            className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
            style={{
              background: "linear-gradient(to bottom,  #a67c52, #7f5f3f)",
            }}
          >
            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-shadow-5">
              삭제하기
            </span>
          </div>
        </button>
      </div>

      <div
        className="shadow-table w-full overflow-hidden rounded-4px p-px"
        style={{
          background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)",
        }}
      >
        <div className="w-full bg-gray-323232 rounded-4px pl-18px pr-19px pb-19px">
          <div className="pt-16px pb-18px flex items-start space-x-9px">
            <p className="text-15px font-spoqaMedium tracking-tight text-gray-ccc2b6">
              댓글 작성하기
            </p>
            <div className="w-17px h-17px bg-red-e9441d rounded-4px text-12px text-white flex items-center justify-center font-roboto flex-shrink-0 mt-2px">
              <p className="flex items-center h-12px -ml-px">2</p>
            </div>
          </div>
          <div
            style={{ height: "93px" }}
            className="relative flex w-full rounded-4px bg-gray-252525"
          >
            <textarea
              style={{ width: "1095px", resize: "none" }}
              className="outline-none w-full px-19px py-17px text-14px font-spoqa tracking-tight placeholder-gray-c8c8c8 bg-gray-252525 rounded-4px text-gray-c8c8c8"
              placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다."
            />

            <button
              className="rounded-4px right-0 absolute flex items-center justify-center h-93px w-120px p-px hover:filter hover:brightness-125 shadow-link"
              style={{
                background: "linear-gradient(to top, #223348, #5f80a4)",
              }}
            >
              <div
                className="flex items-center justify-center h-91px w-118px  rounded-4px cursor-pointer"
                style={{
                  width: "118px",
                  background: "linear-gradient(to bottom, #39618e, #27405d)",
                }}
              >
                <span className="font-spoqaMedium tracking-tight text-16px text-blue-d6f3ff pt-px text-shadow-5">
                  댓글작성
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className="shadow-table w-full overflow-hidden rounded-4px p-px mt-20px"
        style={{
          background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)",
        }}
      >
        <div className="w-full bg-gray-323232 rounded-4px pb-20px">
          <div className="border-b border-gray-252525 pl-20px pr-18px">
            <div className="py-9px w-full flex items-center justify-between">
              <div className="self-start pt-6px flex items-start space-x-5px mt-px">
                <img src={Rank2} alt="" className="-mt-2px" />
                <p className="text-15px font-spoqaMedium tracking-tight text-gray-ccc2b6">
                  신풍사우나
                </p>
              </div>
              <div className="self-start flex space-x-4px items-start justify-end">
                <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-gradient-to-t from-red-4b0923 to-red-e88895  hover:filter hover:brightness-125 shadow-link">
                  <div className="flex items-center justify-center h-34px w-88px rounded-4px  bg-gradient-to-b from-red-e06446  to-red-96341d  cursor-pointer">
                    <span className="font-spoqaMedium tracking-tight text-14px text-red-ffd2d2 pt-px text-shadow-5">
                      수정하기
                    </span>
                  </div>
                </button>
                <button
                  className="flex items-center justify-center w-90px h-36px p-px rounded-4px  shadow-link hover:filter hover:brightness-125"
                  style={{
                    background: "linear-gradient(to top, #4b3b09, #e8b888)",
                  }}
                >
                  <div
                    className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(to bottom,  #a67c52, #7f5f3f)",
                    }}
                  >
                    <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-shadow-5">
                      삭제하기
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <div className="rounded-4px bg-gray-252525 w-full  flex items-start px-19px pt-17px pb-14px justify-between text-gray-c8c8c8 mb-10px mt-px">
              <p className="text-15px font-spoqa tracking-tight pr-7px">
                두개의 이벤트 모두 참여하였습니다
              </p>
              <p className="text-14px tracking-tight font-spoqa flex-shrink-0 mt-px">
                2021.06.28 15:36
              </p>
            </div>
          </div>

          <ReplyCell rank={5} />
          <ReplyCell
            rank={2}
            username="신풍사우나"
            isEdit={true}
            text="오전에 발행되나요?"
            tag="소유소유소유소유소유소유소유소유"
          />
        </div>
      </div>

      <div
        className="shadow-table w-full overflow-hidden rounded-4px p-px mt-20px"
        style={{
          background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)",
        }}
      >
        <div className=" bg-gray-323232 rounded-4px ">
          <div className="border-b border-gray-252525 px-19px">
            <div className="py-9px w-full flex items-center  justify-between">
              <div className="self-start pt-6px flex items-start space-x-5px mt-px">
                <img src={Rank2} alt="" className="-mt-2px" />
                <p className="text-15px font-spoqaMedium tracking-tight text-gray-ccc2b6">
                  신풍사우나
                </p>
              </div>
              <div className="self-start flex space-x-4px justify-end">
                <button className="flex items-center justify-center w-90px h-36px rounded-4px bg-gradient-to-t from-red-4b0923 to-red-e88895  hover:filter hover:brightness-125 shadow-link">
                  <div className="flex items-center justify-center h-34px w-88px rounded-4px  bg-gradient-to-b from-red-e06446  to-red-96341d  cursor-pointer">
                    <span className="font-spoqaMedium tracking-tight text-14px text-red-ffd2d2 text-shadow-5">
                      수정하기
                    </span>
                  </div>
                </button>
                <button
                  className="flex items-center justify-center w-90px h-36px p-px rounded-4px  shadow-link hover:filter hover:brightness-125"
                  style={{
                    background: "linear-gradient(to top, #4b3b09, #e8b888)",
                  }}
                >
                  <div
                    className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(to bottom,  #a67c52, #7f5f3f)",
                    }}
                  >
                    <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-shadow-5">
                      삭제하기
                    </span>
                  </div>
                </button>
              </div>
            </div>

            <div className="rounded-4px bg-gray-252525  w-full  flex items-start px-19px pt-17px pb-14px justify-between text-gray-c8c8c8 mb-10px mt-px">
              <p className="text-15px font-spoqa tracking-tight pr-7px">
                두개의 이벤트 모두 참여하였습니다
              </p>
              <p className="text-14px tracking-tight font-spoqa flex-shrink-0 mt-px">
                2021.06.28 15:36
              </p>
            </div>
          </div>
          <div style={{ height: "115px" }} className="px-20px py-11px">
            <div
              style={{ height: "93px" }}
              className="rounded-4px bg-gray-252525 relative flex w-full"
            >
              <textarea
                style={{ width: "1095px", resize: "none" }}
                className="outline-none w-full px-19px py-18px text-14px font-spoqa tracking-tight placeholder-gray-c8c8c8 bg-gray-252525 rounded-4px text-gray-c8c8c8"
                placeholder="두개의 이벤트 모두 참여하였습니다."
              />
              <button
                className="rounded-4px right-0 absolute flex items-center justify-center h-93px w-120px p-px hover:filter hover:brightness-125 shadow-link"
                style={{
                  background: "linear-gradient(to top, #223348, #5f80a4)",
                }}
              >
                <div
                  className="flex items-center justify-center h-91px w-118px  rounded-4px cursor-pointer"
                  style={{
                    width: "118px",
                    background: "linear-gradient(to bottom, #39618e, #27405d)",
                  }}
                >
                  <span className="font-spoqaMedium tracking-tight text-16px text-blue-d6f3ff pt-px text-shadow-5">
                    댓글수정
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shadow-table w-full overflow-hidden rounded-4px p-px mt-20px"
        style={{
          background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)",
        }}
      >
        <div className="w-full bg-gray-323232 rounded-4px">
          <div className="border-b border-gray-252525 px-19px">
            <div className="py-9px w-full flex items-center  justify-between">
              <div className="self-start pt-6px flex items-start space-x-5px mt-px">
                <img src={Rank2} alt="" className="-mt-2px" />
                <p className="text-15px font-spoqaMedium tracking-tight text-gray-ccc2b6">
                  신풍사우나
                </p>
              </div>
              <button className="self-start flex items-center justify-center h-36px w-90px rounded-4px bg-gradient-to-t from-blue-3d4a8d to-blue-88d9e8 p-px hover:filter hover:brightness-125 shadow-link">
                <div className="flex items-center justify-center h-34px w-88px rounded-4px bg-gradient-to-b from-blue-528ccd to-blue-396084  cursor-pointer">
                  <span className="font-spoqaMedium tracking-tight text-14px text-blue-d6f3ff pt-2px text-shadow-5">
                    답글달기
                  </span>
                </div>
              </button>
            </div>

            <div className="rounded-4px bg-gray-252525  w-full  flex items-start px-19px pt-17px pb-14px justify-between text-gray-c8c8c8 mb-10px mt-px">
              <p className="text-15px font-spoqa tracking-tight pr-7px">
                두개의 이벤트 모두 참여하였습니다
              </p>
              <p className="text-14px tracking-tight font-spoqa flex-shrink-0 mt-px">
                2021.06.28 15:36
              </p>
            </div>
          </div>
          <div style={{ height: "115px" }} className="px-20px py-11px">
            <div
              style={{ height: "93px" }}
              className="relative flex w-full rounded-4px bg-gray-252525"
            >
              <textarea
                style={{ width: "1095px", resize: "none" }}
                className="outline-none w-full px-19px py-18px text-14px font-spoqa tracking-tight placeholder-gray-c8c8c8 bg-gray-252525 rounded-4px text-gray-c8c8c8"
                placeholder="욕설, 상대방 비방글, 타사이트 언급, 홍보 등은 경고없이 삭제되며 사이트 이용에 제한을 받을 수 있습니다."
              />

              <button
                className="rounded-4px right-0 absolute flex items-center justify-center h-93px w-120px p-px hover:filter hover:brightness-125 shadow-link"
                style={{
                  background: "linear-gradient(to top, #223348, #5f80a4)",
                }}
              >
                <div
                  className="flex items-center justify-center h-91px w-118px  rounded-4px cursor-pointer"
                  style={{
                    width: "118px",
                    background: "linear-gradient(to bottom, #39618e, #27405d)",
                  }}
                >
                  <span className="font-spoqaMedium tracking-tight text-16px text-blue-d6f3ff pt-px text-shadow-5">
                    답글작성
                  </span>
                </div>
              </button>
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
            className="flex items-center justify-center h-34px w-88px  rounded-4px cursor-pointer"
          >
            <span className="font-spoqaMedium tracking-tight text-14px text-golden-highLight pt-px text-shadow-5">
              이전
            </span>
          </div>
        </button>

        <button
          className="flex items-center justify-center h-52px w-192px p-px rounded-4px  shadow-link hover:filter hover:brightness-125"
          style={{ background: "linear-gradient(to top, #4b3b09, #e8b888)" }}
          onClick={() => history.push("/freeboard")}
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
          onClick={() => history.push("/freeboard/view2")}
        >
          <div
            style={{
              background: "linear-gradient(to bottom,  #a67c52, #7f5f3f)",
            }}
            className="flex items-center justify-center h-34px w-88px rounded-4px cursor-pointer"
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

export default FreeBoardView;
