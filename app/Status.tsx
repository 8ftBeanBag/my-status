type TStatus = {
    curTime: number
}

export default function Status({ curTime }: TStatus) {
    let startTime: Date = new Date();
    startTime.setHours(8, 0, 0, 0);
    const endTime: Date = new Date();
    endTime.setHours(17, 0, 0, 0);

    if ((+startTime - +curTime < 0) && (+endTime - +curTime > 0)) {
        return <div>Available</div>
    }
    else if (+startTime - +curTime > 0) {
        return <div>Too early</div>
    }
    else {
        return <div>Too late</div>
    }
}