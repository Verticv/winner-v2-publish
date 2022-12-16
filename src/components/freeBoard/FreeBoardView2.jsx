import SportsBetHistoryPanel from "components/myPage/betHistory/SportsBetHistoryPanel";
import React from "react";
import { useHistory } from "react-router";
import Rank1 from "../../images/freeBoard/1_v2.png";
import Rank2 from "../../images/freeBoard/2_v2.png";
import Rank3 from "../../images/freeBoard/3_v2.png";
import Rank4 from "../../images/freeBoard/4_v2.png";
import Rank5 from "../../images/freeBoard/5_v2.png";
import ReplyArrow from "../../images/freeBoard/reply_v2.png";

const FreeBoardView2 = () => {
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
          <img
            className="object-none mt-5px flex-shrink-0"
            src={ReplyArrow}
            alt=""
          />
          <img
            className="pl-13px flex flex-shrink-0"
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
          <div className="self-start flex space-x-4px justify-end">
            <button className="flex items-center justify-center w-90px h-36px rounded-2px bg-gradient-to-t from-red-4b0923 to-red-e88895  hover:filter hover:brightness-125 shadow-link">
              <div className="flex items-center justify-center h-34px w-88px rounded-2px  bg-gradient-to-b from-red-e06446  to-red-96341d cursor-pointer">
                <span className="font-spoqaMedium tracking-tight text-14px text-red-ffd2d2 pt-px text-shadow-5">
                  수정하기
                </span>
              </div>
            </button>
            <button
              className="flex items-center justify-center w-90px h-36px p-px rounded-2px  shadow-link hover:filter hover:brightness-125"
              style={{
                background: "linear-gradient(to top, #4b3b09, #e8b888)",
              }}
            >
              <div
                className="flex items-center justify-center h-34px w-88px rounded-2px cursor-pointer"
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
          <div className="text-14px font-spoqa tracking-tight">
            {tag && (
              <span className="text-blue-2980b9 mr-10px font-spoqaMedium">
                @{tag.length > 8 ? tag.substring(0, 8) : tag}{" "}
                {tag.length > 8 && <span className="-mt-5px">...</span>}
              </span>
            )}
            <span className="text-gray-c8c8c8">{text}</span>
          </div>
          <p className="text-gray-c8c8c8 text-14px tracking-tight font-spoqa flex-shrink-0 ml-7px">
            2021.06.28 15:36
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <div
        className="shadow-table w-full overflow-hidden rounded-4px p-px"
        style={{
          background: "linear-gradient(to top, #1f1f1e 80%, #343434 100%)",
        }}
      >
        <div className="w-full bg-gray-323232 rounded-4px overflow-hidden">
          <div className="bg-gray-2e2e2e border-b border-gray-252525 flex items-start px-19px py-15px space-x-10px">
            <div className="text-15px font-spoqaMedium tracking-tight text-gray-c8c8c8">
              이벤트 신청합니다.
            </div>
          </div>

          <div className="py-16px w-full border-b border-gray-252525 px-19px flex items-start text-14px font-spoqaMedium tracking-tight text-gray-929292">
            <img src={Rank1} alt="" />
            <p className="ml-3px mt-2px">
              하이도1207
              <div className="inline-block">
                <div
                  className="inline-block h-10px w-px mx-9px"
                  style={{ background: "#4c4c4c" }}
                ></div>
                <p className="inline-block">2021.06.28 15:49</p>
                <div
                  className="inline-block h-10px w-px mx-9px"
                  style={{ background: "#4c4c4c" }}
                ></div>

                <div className="inline-block font-spoqaMedium text-14px tracking-tight text-gray-929292 mr-9px">
                  댓글
                </div>
                <div className="inline-block pl-5px pr-6px h-17px text-white text-12px font-roboto items-center justify-center rounded-4px bg-red-e9441d">
                  <p className="mb-px">2</p>
                </div>
              </div>
            </p>
          </div>

          <div className="py-23px border-b border-gray-252525 px-30px space-y-28px">
            <SportsBetHistoryPanel
              type={1}
              winAmount="+900,000,000"
              isAttached={true}
              noButtons={true}
              width={"full"}
            />
            <SportsBetHistoryPanel
              type={2}
              isAttached={true}
              noButtons={true}
              width={"full"}
            />
          </div>

          <div
            style={{ minHeight: "441px" }}
            className="p-20px bg-gray-323232 text-14px font-spoqa tracking-tight text-gray-c8c8c8"
          >
            베팅기록 올려봅니다.
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
        <div className="w-full bg-gray-323232 rounded-4px px-19px pb-19px">
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
              className="outline-none w-full px-19px py-17px text-14px font-spoqa tracking-tight placeholder-gray-c8c8c8 text-gray-c8c8c8 bg-gray-252525 rounded-4px"
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
              <div className="self-start flex items-start space-x-5px pt-6px">
                <img src={Rank2} alt="" className="-mt-2px" />
                <p className="text-15px font-spoqaMedium tracking-tight text-gray-ccc2b6 pr-10px">
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
              <p className="text-15px font-spoqa tracking-tight mr-7px">
                두개의 이벤트 모두 참여하였습니다
              </p>
              <p className="text-14px tracking-tight font-spoqa flex flex-shrink-0 mt-px">
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
              <div className="self-start pt-6px flex items-start space-x-5px  mt-px">
                <img src={Rank2} alt="" className="-mt-2px" />
                <p className="text-15px font-spoqaMedium tracking-tight text-gray-ccc2b6 pr-10px">
                  신풍사우나
                </p>
              </div>
              <div className="self-start flex space-x-4px  justify-end">
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

            <div className="rounded-4px bg-gray-252525 w-full  flex items-start px-19px pt-17px pb-14px justify-between text-gray-c8c8c8 mb-10px mt-px">
              <p className="text-15px font-spoqa tracking-tight pr-7px">
                두개의 이벤트 모두 참여하였습니다
              </p>
              <p className="text-14px tracking-tight font-spoqa flex-shrink-0">
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
                className="outline-none w-full px-19px py-18px text-14px font-spoqa tracking-tight placeholder-gray-c8c8c8 bg-gray-252525 text-gray-c8c8c8 rounded-4px"
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
                <p className="text-15px font-spoqaMedium tracking-tight text-gray-ccc2b6 pr-10px">
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
                className="outline-none w-full px-19px py-18px text-14px font-spoqa tracking-tight placeholder-gray-c8c8c8 bg-gray-252525 text-gray-c8c8c8 rounded-4px"
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
          onClick={() => history.push("/freeboard/view")}
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

export default FreeBoardView2;
