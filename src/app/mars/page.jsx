import React from "react";
import VideoBackground from "../(components)/VideoBackground";
import Features from "../(components)/Features";

const Mars = () => {
  return <div className="min-h-[90vh]">
    <VideoBackground source='/mars2.mp4' style='brightness-50'/>
    <div className="container">
      <div className="headline">Humanity&apos;s Bold Dream</div>
    </div>
    <div className="introduction gap-[60px]">
            <div className="flex-1 text-justify tracking-wide"><span className="text-[2.5rem]">Mars</span>, the enigmatic &quot;Red Planet,&quot; stands as the fourth celestial body from the Sun in our solar system, capturing the collective curiosity and fascination of astronomers, space enthusiasts, and scientists. Its distinct reddish appearance arises from iron oxide, or rust, covering its surface, giving it a unique and alluring allure. This terrestrial world boasts a thin atmosphere dominated by carbon dioxide and showcases a dramatic and desolate topography, featuring deep canyons, towering volcanoes, and expansive, parched plains. Mars has become a focal point for extensive scientific exploration, driven by the potential to uncover traces of past or present life. Robotic missions, such as the Curiosity and Perseverance rovers, have tirelessly probed its secrets, paving the way for future human expeditions to this captivating planet.</div>
            <div className="flex-1"><Features dia="6,779 kilometers" mass="6.39 × 10^23 kilograms" dist="Approximately 225 million kilometers" orb="687 days" rot="24.6 earth hours (1 day)" atm="Mostly carbon dioxide (95.3%) with traces of other gases"/></div>
    </div>
  </div>;
};

export default Mars;
