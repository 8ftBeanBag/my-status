"use client"

import WeatherIcon from "./WeatherIcon";
import WifiIcon from "./WifiIcon";
import Status from "./Status";
import { useEffect, useState } from "react";
import TimeIcon from "./TimeIcon";
import { EAvailability, TWeather } from "./types/statusTypes";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [availability, setAvailability] = useState<EAvailability>(EAvailability.Error);
  const [weather, setWeather] = useState<TWeather>();
  const [wifi, setWifi] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const resWeather = await fetch("/api/weather");
      const weather = await resWeather.json();
      const resWifi = await fetch("/api/wifi");
      const wifi = await resWifi.json();

      setWeather(weather);
      setWifi(wifi.status);
    }

    const updateTime = () => {
      const curTime = Date.now();
      const startTime: Date = new Date();
      const endTime: Date = new Date();

      endTime.setHours(17, 0, 0, 0);
      startTime.setHours(8, 0, 0, 0);
      if (new Date(curTime).getDay() % 6 === 0)
        setAvailability(EAvailability.Weekend)
      else if ((+startTime - +curTime < 0) && (+endTime - +curTime > 0))
        setAvailability(EAvailability.Available)
      else if (+startTime - +curTime > 0)
        setAvailability(EAvailability.Early)
      else
        setAvailability(EAvailability.Late)
    }

    setLoading(true);
    updateTime();
    getData();
    setLoading(false);
  }, []);

  return (
    <main className="h-screen bg-custom-gradient max-w-screen px-8 md:px-24 py-12 flex flex-col justify-between">
      <div className='flex justify-between items-center h-8 md:h-10'>
        <TimeIcon status={availability} />
        <div className="flex gap-3 items-center bg-white px-4 rounded-full h-full">
          <WifiIcon status={wifi} />
          {weather && <WeatherIcon iconUrl={"https:" + weather.condition.icon} />}
        </div>
      </div>
      {weather && <Status availability={EAvailability.Available} wifi={wifi} />}
    </main>
  );
}
