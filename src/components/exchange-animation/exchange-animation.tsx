import React, { Component, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../animations/exchange.json";

export const ExchangeAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    renderer: "svg",
  };

  const [stopped, setStopped] = useState(true);

  return (
    <div
      onMouseEnter={() => {
        setStopped(false);
      }}
      onMouseLeave={() => {
        setStopped(true);
      }}
    >
      <Lottie
        options={defaultOptions}
        height={"2rem"}
        width={"2rem"}
        isStopped={stopped}
      />
    </div>
  );
};
