"use client"

import WeatherIcon from "./WeatherIcon";
import WifiIcon from "./WifiIcon";
import Status from "./Status";
import { useEffect, useState } from "react";
import TimeIcon from "./TimeIcon";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(Date.now());
  const [weather, setWeather] = useState("");
  const [wifi, setWifi] = useState(false);

  useEffect(() => {
    const getWeatherIcon = async () => {
      const res = await fetch("/api/weather");
      const weather = await res.json();
      setWeather("https:" + weather.condition.icon.icon);
    }
    const getWifi = async () => {
      const res = await fetch("/api/wifi");
      const wifi = await res.json();
      setWifi(wifi);
    }

    setLoading(true);
    // getWeatherIcon();
    getWifi();
    setLoading(false);
  }, []);

  return (
    <main className="flex flex-col justify-between min-h-screen bg-slate-300 max-w-screen px-24 py-12">
      <div className='text-white text-center flex justify-between items-center'>
        <div className='flex justify-center items-center gap-3'>
          <TimeIcon />
        </div>
        <div className="flex gap-3 items-center">
          <WifiIcon status={wifi} />
          <WeatherIcon iconUrl={weather} />
        </div>
      </div>
      <div className='text-5xl w-full text-center'>Abi&apos;s Status</div>
      <Status curTime={time} />
    </main>
  );
}
