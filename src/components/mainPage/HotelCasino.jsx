import React, { useState } from "react";
import Sports1 from "../../images/hotel_1.png";
import Sports3 from "../../images/hotel_3.png";
import Sports4 from "../../images/hotel_4.png";
import Sports1Hl from "../../images/hotel_1_hl.png";
import Sports4Hl from "../../images/hotel_4_hl.png";
const HotelCasino = () => {
  const Card1 = ({ img, imgHover, text, disabled }) => {
    const [isHover, setHover] = useState(false);
    return (
      <div
        style={{ height: "207px", width: "411px" }}
        className="flex items-end relative cursor-pointer justify-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={isHover ? imgHover : img} alt="" className="object-none" />

        {disabled ? (
          <button
            style={{
              width: "106px",
              height: "30px",
              borderRadius: "2px",
              background: "linear-gradient(to bottom, #ada299, #5a554f)",
            }}
            className="absolute bottom-19px p-px"
          >
            <div
              style={{
                borderRadius: "2px",
                background: "linear-gradient(to bottom, #8a8179, #6b655e)",
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <p
                style={{ color: "#cccccc", textShadow: "0px 0px 6px #000000" }}
                className="text-14px font-spoqaMedium tracking-tight"
              >
                준비중
              </p>
            </div>
          </button>
        ) : (
          <button
            style={{
              width: "106px",
              height: "30px",
              borderRadius: "2px",
              background: "linear-gradient(to bottom, #e8b888, #4e3d0b)",
            }}
            className="absolute bottom-19px p-px filter hover:brightness-125"
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
                style={{ color: "#ffdfbd", textShadow: "0px 0px 6px #000000" }}
                className="text-14px font-spoqaMedium tracking-tight"
              >
                게임시작
              </p>
            </div>
          </button>
        )}

        <p
          style={{ color: "#ffdfbd", marginBottom: "129px" }}
          className="z-20 absolute -bottom-55px left-32px text-16px tracking-tighter font-spoqa h-16px flex items-center"
        >
          {text}
        </p>
      </div>
    );
  };

  return (
    <div style={{ width: "1260px" }}>
      <div className="space-x-19px flex">
        <Card1 img={Sports4} text="두윈카지노" imgHover={Sports4Hl} />
        <Card1 img={Sports1} text="보타카지노" imgHover={Sports1Hl} />
        <Card1 img={Sports3} text="호텔카지노" imgHover={Sports3} disabled />
      </div>
    </div>
  );
};

export default HotelCasino;
