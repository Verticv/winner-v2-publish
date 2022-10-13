import React from "react";
import { useHistory } from "react-router-dom";
import Quick1 from "../images/quick1.png";
import Quick2 from "../images/quick2.png";
import Quick3 from "../images/quick3.png";
import Quick4 from "../images/quick4.png";
import Quick5 from "../images/quick5.png";
import Quick6 from "../images/quick6.png";

const QuickMenu = ({ scrollPosition }) => {
  const history = useHistory();

  return (
    <div
      style={{ height: "553px", width: "86px" }}
      className={"flex-shrink-0 z-10 -mt-120px"}
    >
      <div
        style={{ height: "553px", width: "86px" }}
        className="flex flex-col items-center"
      >
        <div
          style={{
            height: "487px",
            borderColor: "#4f4a41",
            borderWidth: "2px",
            boxShadow: "0 4px 5px #00000050",
          }}
          className="w-full bg-black rounded-full"
        >
          <div className="w-full h-full bg-black border border-black rounded-full overflow-hidden flex flex-col items-center">
            <div
              style={{
                height: "53px",
                background: "linear-gradient(to bottom, #a67c52, #7f5f3f)",
              }}
              className="w-full flex flex-col items-center text-black font-spoqaMedium tracking-tighter text-14px"
            >
              <p className="h-14px mt-11px">QUICK</p>
              <p className="h-14px mt-2px">MENU</p>
            </div>

            <button
              style={{ height: "84px" }}
              className="w-full flex flex-col items-center justify-between hover:brightness-125 filter cursor-pointer"
              onClick={() => history.push("/money/charge")}
            >
              <img src={Quick1} alt="" className="mt-12px" />
              <p
                style={{ color: "#bbbbbb" }}
                className="font-spoqa text-14px h-14px tracking-tighter mb-14px cursor-pointer"
              >
                충전하기
              </p>
            </button>
            <div
              style={{
                height: "1px",
                width: "70px",
                backgroundColor: "#362b20",
              }}
            ></div>

            <button
              style={{ height: "84px" }}
              className="w-full flex flex-col items-center justify-between hover:brightness-125 filter cursor-pointer"
              onClick={() => history.push("/money/exchange")}
            >
              <img src={Quick2} alt="" className="mt-9px" />
              <p
                style={{ color: "#bbbbbb" }}
                className="font-spoqa text-14px h-14px tracking-tighter mb-14px cursor-pointer"
              >
                환전하기
              </p>
            </button>
            <div
              style={{
                height: "1px",
                width: "70px",
                backgroundColor: "#362b20",
              }}
            ></div>

            <button
              style={{ height: "84px" }}
              className="w-full flex flex-col items-center justify-between hover:brightness-125 filter cursor-pointer"
              onClick={() => history.push("/mypage/points/points-apply")}
            >
              <img src={Quick3} alt="" className="mt-15px" />
              <p
                style={{ color: "#bbbbbb" }}
                className="font-spoqa text-14px h-14px tracking-tighter mb-14px cursor-pointer"
              >
                포인트전환
              </p>
            </button>
            {/* <button style={{ height: '84px' }} className="w-full flex flex-col items-center justify-between hover:brightness-125 filter cursor-pointer" onClick={() => history.push('/mypage/points/points-apply')}>
              <img src={Quick3} alt="" className='mt-15px' />
              <p style={{ color: '#bbbbbb' }} className="font-spoqa text-14px h-14px tracking-tighter mb-14px cursor-pointer">포인트전환</p>
            </button> */}
            <div
              style={{
                height: "1px",
                width: "70px",
                backgroundColor: "#362b20",
              }}
            ></div>

            <button
              style={{ height: "84px" }}
              className="w-full flex flex-col items-center justify-between hover:brightness-125 filter cursor-pointer"
              onClick={() => history.push("/cscenter/policy/sportsgame/soccer")}
            >
              <img src={Quick4} alt="" className="mt-13px" />
              <p
                style={{ color: "#bbbbbb" }}
                className="font-spoqa text-14px h-14px tracking-tighter mb-14px cursor-pointer"
              >
                베팅규정
              </p>
            </button>
            <div
              style={{
                height: "1px",
                width: "70px",
                backgroundColor: "#362b20",
              }}
            ></div>

            <button
              style={{ height: "84px" }}
              className="w-full flex flex-col items-center justify-between hover:brightness-125 filter cursor-pointer"
              onClick={() => history.push("/cscenter/contact/all")}
            >
              <img src={Quick5} alt="" className="mt-15px" />
              <p
                style={{ color: "#bbbbbb" }}
                className="font-spoqa text-14px h-14px tracking-tighter mb-14px cursor-pointer"
              >
                고객센터
              </p>
            </button>
          </div>
        </div>
          <div
            style={{
              height: "56px",
              width: "56px",
              borderColor: "#4f4a41",
              borderWidth: "2px",
              boxShadow: "0 4px 5px #00000050",
            }}
            className={`w-full mt-10px bg-black rounded-full flex flex-col items-center cursor-pointer hover:brightness-125 filter ${scrollPosition > 0 ? 'opacity-100' : 'opacity-0'} transition duration-200`}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <img src={Quick6} alt="" className="mt-13px" />
            <p
              style={{ color: "#ad9e8c" }}
              className="font-spoqa text-12px h-12px tracking-tighter mt-2px cursor-pointer"
            >
              TOP
            </p>
          </div>
      </div>
    </div>
  );
};

export default QuickMenu;
