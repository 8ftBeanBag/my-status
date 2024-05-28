
export enum EAvailability {
    "Available",
    "Early",
    "Late",
    "Weekend",
    "Error"
}

export type TWeather = {
    condition: {
        icon: string,
        text: string,
        code: number
    }
}