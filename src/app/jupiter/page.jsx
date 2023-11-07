import React from "react";
import VideoBackground from "../(components)/VideoBackground";
import Features from "../(components)/Features";

const Jupiter = () => {
  return <div className="min-h-[90vh]">
    <VideoBackground source="jupiter.mp4" />
    <div className="container">
      <div className="headline max-sm:text-[1.5rem]">The Giant of the Solar System</div>
    </div>
    <div className="introduction gap-[60px]">
            <div className="flex-1 text-justify tracking-wide"><span className="text-[2.5rem]">Jupiter</span>, the colossal &quot;King of Planets,&quot; reigns as the largest planet in our solar system, positioned as the fifth world orbiting the Sun. Its sheer size and captivating features make it a subject of perpetual wonder among astronomers, space enthusiasts, and scientists alike. Jupiter&apos;s mesmerizing appearance is marked by its banded cloud patterns, prominent Great Red Spot, and a shimmering halo of numerous moons. Composed primarily of hydrogen and helium, Jupiter possesses a powerful magnetic field, exceeding any other planet in the solar system, and boasts a tumultuous, dynamic atmosphere filled with ferocious storms. This gas giant has been a source of fascination for space exploration missions, such as the Juno spacecraft, which aims to unveil its mysteries and deepen our understanding of the solar system&apos;s majestic behemoth.</div>
            <div className="flex-1"><Features dia="139,822 kilometers" mass="1.89813 × 10^27 kilograms" dist="Approximately 778 million kilometers" orb="11.9 years" rot="9.9 earth hours" atm="Primarily composed of hydrogen and helium, with traces of other gases"/></div>
    </div>
  </div>;
};

export default Jupiter;
