import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { EAvailability } from "./types/statusTypes";
import { Masterpiece, palettes } from "8ftbeanbag-website-components";

type TStatus = {
    availability: EAvailability
    wifi: boolean
}

export default function Status({ availability, wifi }: TStatus) {
    const getNonAvailable = () => {
        switch (availability) {
            case EAvailability.Early: return <>
                <Image width={200} height={200} src="/coffee.jpg" alt="Picture of coffee" />
                <div className="text-5xl font-fancy">Abi&apos;s Status</div>
                <div>It is too early! Abi hasn not had her coffee.</div>
            </>
            case EAvailability.Late: return <>
                <Image width={280} height={280} src="/dwight.jpg" alt="Picture of Dwight" className="rounded" />
                <div className="text-5xl font-fancy">Abi&apos;s Status</div>
                <div>It is too late. Abi is too busy watching The Office to respond.</div>
            </>
            case EAvailability.Weekend: return <>
                <Image width={280} height={280} src="/friends.gif" alt="Picture of friends" className="rounded" />
                <div className="text-5xl font-fancy">Abi&apos;s Status</div>
                <div>It is the weekend!!</div>
            </>
            default: return <>
                <Image width={200} height={200} src="/oops.png" alt="Error occured" />
                <div className="text-5xl font-fancy">Abi&apos;s Status</div>
                <div>There is an <em>error</em>, not sure what happened ☹️</div>
            </>
        }
    }

    const getAvailable = () => {
        if (!wifi)
            return <>
                <Image width={300} height={300} src="/andy.png" alt="Picture of Andy" />
                <div className="text-5xl font-fancy">Abi&apos;s Status</div>
                <div className="flex items-center gap-2 mt-2 font-mono">Abi&apos;s wifi is down! If you need to reach her, try her phone.</div>
            </>
        else return <>
            <Masterpiece background={palettes[2].secondary} shirt={palettes[2].actionSecondary} />
            <div className="text-5xl font-fancy">Abi&apos;s Status</div>
            <div className="flex items-center gap-2 mt-2 font-mono">Abi is available |
                <Link href="https://www.linkedin.com/in/abigail-hendrick/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
                <Link href="https://abigailhendrick.com" target="_blank" rel="noopener noreferrer"><FaSquareArrowUpRight /></Link></div>

        </>
    }
    return <div className='w-full h-full text-white text-center flex flex-col justify-center items-center gap-4'>
        {availability != EAvailability.Available ? getNonAvailable() : getAvailable()}
    </div>
}