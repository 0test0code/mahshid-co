import React from "react";
import HeroContent from "../sub/HeroContent";
import { getLocale } from "next-intl/server";
import {getLangDir} from 'rtl-detect';

const Hero = () => {const locale =  getLocale();  const direction :string = getLangDir(locale).toString();
  return ( 
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent direction={direction} />
    </div>
  );
};

export default Hero;
