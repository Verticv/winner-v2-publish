import React, { useState } from "react";
import Meun1 from "../../images/liveCasino/menu1.png";
import Meun2 from "../../images/liveCasino/menu2.png";
import Meun3 from "../../images/liveCasino/menu3.png";
import Meun4 from "../../images/liveCasino/menu4.png";
import Meun5 from "../../images/liveCasino/menu5.png";
import Meun6 from "../../images/liveCasino/menu6.png";
import Meun7 from "../../images/liveCasino/menu7.png";
import Meun8 from "../../images/liveCasino/menu8.png";
import Meun9 from "../../images/liveCasino/menu9.png";
import Meun10 from "../../images/liveCasino/menu10.png";
import Meun11 from "../../images/liveCasino/menu11.png";
import Meun1Hl from "../../images/liveCasino/menu1_hl.png";
import Meun2Hl from "../../images/liveCasino/menu2_hl.png";
import Meun3Hl from "../../images/liveCasino/menu3_hl.png";
import Meun4Hl from "../../images/liveCasino/menu4_hl.png";
import Meun5Hl from "../../images/liveCasino/menu5_hl.png";
import Meun6Hl from "../../images/liveCasino/menu6_hl.png";
import Meun7Hl from "../../images/liveCasino/menu7_hl.png";
import Meun9Hl from "../../images/liveCasino/menu9_hl.png";
import Meun10Hl from "../../images/liveCasino/menu10_hl.png";
import Meun11Hl from "../../images/liveCasino/menu11_hl.png";

import Best from "../../images/best.png";

import { useHistory } from "react-router-dom";

const LiveCasino = () => {
  const history = useHistory();

  const Card = ({ bg, bgHover, comingSoon = false, title, best }) => {
    const [isHover, setHover] = useState(false);

    if (comingSoon)
      return (
        <div
          className="relative flex"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img src={isHover ? bgHover : bg} className="object-none" alt="" />
          <button
            style={{
              width: "106px",
              height: "30px",
              borderRadius: "2px",
              background: "linear-gradient(to bottom, #ada299, #5a554f)",
            }}
            className="absolute bottom-15px right-35px p-px"
          >
            <div
              style={{
                borderRadius: "2px",
                background: "linear-gradient(to bottom, #8a8179, #6b655e)",
              }}
              className="w-full h-full flex items-center justify-center cursor-default"
            >
              <p
                style={{ color: "#cccccc", textShadow: "0 0 6px #000000" }}
                className="text-14px font-spoqaMedium tracking-tight cursor-default"
              >
                준비중
              </p>
            </div>
          </button>
          <p
            style={{
              marginBottom: "108px",
              textShadow: "0 0 3px #00000090",
              color: "#847361",
            }}
            className="absolute bottom-0 right-48px tracking-tight text-14px font-spoqaMedium cursor-default"
          >
            Coming Soon
          </p>
        </div>
      );

    return (
      <div
        onClick={() => history.push("/live-casino")}
        className="relative flex cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {best && (
          <img
            src={Best}
            alt=""
            style={{
              width: "81px",
              height: "81px",
              position: "absolute",
              bottom: "140px",
              left: "-8px",
              zIndex: 40,
            }}
          />
        )}
        <img src={isHover ? bgHover : bg} className="object-none" alt="" />

        <button
          style={{ width: "106px", height: "30px" }}
          className="absolute bottom-63px right-35px p-px"
        >
          <div className="w-full h-full flex items-center justify-center">
            <p
              style={{ color: "#ffdfbd" }}
              className="text-14px font-spoqaMedium tracking-tight"
            >
              {title}
            </p>
          </div>
        </button>
        <button
          style={{
            width: "106px",
            height: "30px",
            borderRadius: "2px",
            background: "linear-gradient(to bottom, #e8b888, #4e3d0b)",
          }}
          className="absolute bottom-15px right-35px p-px filter hover:brightness-125"
        >
          <div
            style={{
              borderRadius: "2px",
              background: isHover
                ? "linear-gradient(to bottom, #f38d27, #b55b01)"
                : "linear-gradient(to bottom, #a67c52, #805f3f)",
            }}
            className="w-full h-full flex items-center justify-center"
          >
            <p
              style={{ color: "#ffdfbd", textShadow: "0 0 6px #000000" }}
              className="text-14px font-spoqaMedium tracking-tight"
            >
              게임시작
            </p>
          </div>
        </button>
      </div>
    );
  };

  return (
    <div
      style={{ height: "622px", width: "1260px" }}
      className="flex flex-col items-center w-full"
    >
      <div
        style={{ height: "203px" }}
        className="flex w-full space-x-8px items-end"
      >
        <Card
          bg={Meun2}
          bgHover={Meun2Hl}
          title="프레그메틱플레이"
          best={true}
        />
        <Card bg={Meun1} bgHover={Meun1Hl} title="에볼루션" best={false} />
        <Card bg={Meun3} bgHover={Meun3Hl} title="로얄지" best={false} />
        <Card bg={Meun4} bgHover={Meun4Hl} title="아시아게이밍" best={false} />
      </div>

      <div
        style={{ height: "199px" }}
        className="flex w-full space-x-8px items-end mt-11px"
      >
        <Card bg={Meun5} bgHover={Meun5Hl} title="드림게이밍" best={false} />
        <Card bg={Meun6} bgHover={Meun6Hl} title="섹시게이밍" best={false} />
        <Card bg={Meun7} bgHover={Meun7Hl} title="빅게이밍" best={false} />
        <Card bg={Meun9} bgHover={Meun9Hl} title="오리엔탈게임" best={false} />
        {/* <Card bg={Meun8} bgHover={Meun8} comingSoon={true} /> */}
      </div>
      <div
        style={{ height: "199px" }}
        className="flex w-full space-x-8px items-end mt-11px"
      >
        <Card bg={Meun10} bgHover={Meun10Hl} title="이주기" best={false} />
        <Card bg={Meun11} bgHover={Meun11Hl} title="마이크로게이밍" best={false} />
        <Card bg={Meun8} bgHover={Meun8} comingSoon={true} best={false} />
        <Card bg={Meun8} bgHover={Meun8} comingSoon={true} best={false} />
      </div>
    </div>
  );
};

export default LiveCasino;
