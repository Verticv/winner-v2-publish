import React, { useState } from "react";
import img1 from "../../images/navbarHover/4_1.png";
import img1hl from "../../images/navbarHover/4_1_hl.png";
import img2 from "../../images/navbarHover/4_2.png";
import img2hl from "../../images/navbarHover/4_2_hl.png";
import img3 from "../../images/navbarHover/4_3.png";
import img3hl from "../../images/navbarHover/4_3_hl.png";
import img4 from "../../images/navbarHover/4_4.png";
import img5 from "../../images/navbarHover/4_5.png";
// import img5hl from "../../images/navbarHover/4_5_hl.png";
import Expand from "react-expand-animated";
import { useHistory } from "react-router-dom";

const HotelCasinoHover = ({ selection }) => {
  const [isHover, setHover] = useState(null);
  const history = useHistory();

  const gamesArray = [
    {
      id: 2,
      background: img3,
      highlight: img3hl,
      imgText: "두윈카지노",
      btnText: "게임시작",
      class: "bg-opacity-25",
    },
    {
      id: 3,
      background: img5,
      // highlight: img5hl,
      highlight: img5,
      imgText: "이용가이드",
      btnText: "준비중",
      class: "bg-opacity-25",
    },
    {
      id: 0,
      background: img1,
      highlight: img1hl,
      imgText: "보타카지노",
      btnText: "게임시작",
      class: "bg-opacity-25",
    },
    {
      id: 1,
      background: img2,
      highlight: img2hl,
      imgText: "이용가이드",
      btnText: "설명보기",
      class: "bg-opacity-25",
      path: "/hotel-casino/structure",
    },
    {
      id: 4,
      background: img4,
      highlight: img4,
      imgText: "호텔카지노",
      btnText: "준비중",
      class: "bg-opacity-25",
    },
  ];

  function GamesList({ items }) {
    return items.map((item) => (
      <div
        key={item.id}
        className={`group relative cursor-pointer flex flex-col items-center justify-end flex-shrink-0 h-262px`}
        // style={{ width: '235px' }}
        onMouseEnter={() => setHover(item.id)}
        onClick={() => history.push(item.path)}
      >
        <p
          style={{ color: "#ffdfbd", marginBottom: "70px" }}
          className={`absolute bottom-0 z-20 text-13px tracking-tighter font-spoqa h-13px items-center flex`}
        >
          {item.imgText}
        </p>
        <div style={{ marginBottom: "31px" }} className={`absolute z-20`}>
          {item.btnText === "준비중" ? (
            <button
              style={{
                width: "89px",
                height: "26px",
                borderRadius: "2px",
                background: "linear-gradient(to bottom, #ada299, #5a554f)",
              }}
              className={`p-px`}
            >
              <div
                style={{
                  borderRadius: "2px",
                  background: "linear-gradient(to bottom, #8a8179, #6b655e)",
                }}
                className="w-full h-full flex items-center justify-center cursor-default"
              >
                <p
                  style={{ color: "#cccccc", textShadow: "0 0 3px #00000090" }}
                  className="text-13px font-spoqaMedium tracking-tight"
                >
                  준비중
                </p>
              </div>
            </button>
          ) : (
            <button
              style={{
                width: "89px",
                height: "26px",
                borderRadius: "2px",
                background: "linear-gradient(to bottom, #e8b888, #4e3d0b)",
              }}
              className={`p-px filter hover:brightness-125`}
            >
              <div
                style={{
                  borderRadius: "2px",
                  background:
                    isHover === item.id
                      ? "linear-gradient(to bottom, #f38d27, #b55b01)"
                      : "linear-gradient(to bottom, #a67c52, #805f3f)",
                }}
                className="w-full h-full flex items-center justify-center"
              >
                <p
                  style={{ color: "#ffdfbd", textShadow: "0 0 3px #00000090" }}
                  className="text-13px font-spoqaMedium tracking-tight"
                >
                  {item.btnText}
                </p>
              </div>
            </button>
          )}
        </div>
        <img
          className={`${
            isHover === item.id ? "opacity-0" : "opacity-100"
          } absolute bottom-0 object-none h-full mb-13px flex-shrink-0`}
          src={item.background}
          alt="game_image"
        />
        <img
          className={`${
            isHover === item.id ? "opacity-100" : "opacity-0"
          } absolute bottom-0 object-none h-full mb-13px flex-shrink-0`}
          src={item.highlight}
          alt="game_image"
        />
      </div>
    ));
  }

  return (
    <Expand
      open={selection === 3}
      duration={200}
      className="absolute w-full h-262px border-b border-t border-brown-r796657"
    >
      <div
        onMouseLeave={() => setHover(null)}
        style={{ minHeight: "262px" }}
        className="h-full w-full flex justify-center bg-black bg-opacity-85"
      >
        <div
          style={{ width: "900px" }}
          className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 limit:grid-cols-5"
        >
          <GamesList items={gamesArray} />
        </div>
      </div>
    </Expand>
  );
};

export default HotelCasinoHover;
