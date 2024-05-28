import { FaQuestionCircle } from "react-icons/fa";
import Image from 'next/image'

type TWeatherIcon = {
    iconUrl: string
}

export default function WeatherIcon({ iconUrl }: TWeatherIcon) {
    if (iconUrl)
        return <Image width={32} height={32} src={iconUrl} alt="weather" />
    else {
        return <FaQuestionCircle color="red" />
    }
}