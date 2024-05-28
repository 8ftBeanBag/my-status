import { FaWifi } from "react-icons/fa";

type TWeatherIcon = {
    status: boolean
}

export default function WeatherIcon({ status }: TWeatherIcon) {
    return <FaWifi color={status ? "green" : "red"} />
}