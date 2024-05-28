import { EAvailability } from "./types/statusTypes";

type TTimeIcon = {
    status: EAvailability
}
export default function TimeIcon({ status }: TTimeIcon) {
    const availabilityEmoji = () => {
        switch (status) {
            case EAvailability.Available: return "👩‍💻";
            case EAvailability.Early: return "☕";
            case EAvailability.Late: return "😴";
            default: return "🤷‍♀️";
        }
    }
    return <div className="flex justify-center items-center gap-1 md:gap-3 bg-white rounded-full px-2 md:px-4 h-full font-mono">
        {availabilityEmoji()}
        <div className={`text-xs md:text-base ${status == EAvailability.Available ? "text-green-500" : "text-red-500"}`}>8AM:5PM EST</div>
    </div>
}