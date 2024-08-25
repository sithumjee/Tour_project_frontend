import React, { useEffect, useState } from "react";
import Background from "../../Components/HomePageComponents/Background/Background";
import Latest from "../../Components/Latest/Latest";
import Popular from "../../Components/Popular/Popular";
import AnimatedMap from "../../Components/AnimatedMap/AnimatedMap";
import AboutUs from "../../Components/AboutUs/AboutUs";

const Home = () => {
  const heroData = [
    { text1: "Explore", text2: "New Destinations" },
    { text1: "Discover", text2: "Hidden Gems" },
    { text1: "Plan Your", text2: "Perfect Trip" },
    { text1: "Adventure Awaits", text2: "Start Your Journey" },
    { text1: "Travel With", text2: "Confidence and Ease" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 4 ? 0 : count + 1));
    }, 10000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Latest />
      <AnimatedMap />
      <Popular />
      <AboutUs />
    </div>
  );
};

export default Home;
