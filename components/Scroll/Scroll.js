import React from "react";
import ScrollWrapper from "./ScrollStyles";
import PageLink from "../../styles/fontsStyles/PageLink";
import ScrollParagraph from "../../styles/fontsStyles/ScrollParagraph";

const Scroll = () => {
  return (
    <ScrollWrapper>
      <div className="mobile">
        <div className="scroll box1"></div>
        <div className="scroll box2"></div>
        <div className="scroll box3"></div>
      </div>
      <ScrollParagraph className="scroll-text">Scroll down</ScrollParagraph>
      <div className="pc">
        <div className="scroll box1"></div>
        <div className="scroll box2"></div>
        <div className="scroll box3"></div>
      </div>
    </ScrollWrapper>
  )
}

export default Scroll;