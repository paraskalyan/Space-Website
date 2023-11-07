import React from "react";
import VideoBackground from "../(components)/VideoBackground";
import Features from "../(components)/Features";

const Earth = () => {
  return(<div className="flex flex-col items-center justify-center min-h-[90vh]">
          <VideoBackground source="earth.mp4" style="brightness-50"/>
          <div className="container">
            <div className="headline ">Humanity&apos;s Abode</div>
          </div>
          <div className="introduction gap-[60px] ">
            <div className="flex-1 text-justify tracking-wide"> <span className="text-[2.5rem]">Earth</span>, our pale blue dot in the vast cosmic expanse, is a unique and wondrous oasis of life. Nestled within the solar system, it offers a breathtaking tapestry of diverse ecosystems, from towering mountain ranges to sprawling oceans, teeming with life. The planet&apos;s atmosphere, a delicate balance of gases, provides the air we breathe and regulates our climate. Earth is the cradle of human civilization, hosting an extraordinary array of cultures, languages, and landscapes, all interconnected on this shared globe. It is a planet where the wonders of nature, from the majesty of forests to the grandeur of deserts, constantly remind us of the incredible beauty and resilience of our home. As the only known celestial body to harbor life, Earth is a precious jewel in the cosmos, inspiring us to cherish, protect, and care for this remarkable planet.</div>
            <div className="flex-1"><Features dia="12,742 kilometers" mass="5.972 × 10^24 kilograms" dist="Approximately 149.6 million kilometers" orb="365.25 days" rot="24 hours (1 day)" atm="Mostly nitrogen (78%) and oxygen (21%) with traces of other gases"/></div>
          </div>
  </div>);
};

export default Earth;
