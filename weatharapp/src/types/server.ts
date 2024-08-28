export interface weatherData {
    coord : Coord
    weather : Weather[]
    base:string
    main : Main
    visibility : number
    wind : Wind
    cloudes : Cloudes
    dt : number
    sys : Sys
    timezone : number
    id : number
    name : string
    cod : number
}

export interface Coord{
    lon : number
    lat : number
}
export interface Weather{
    id : number
    main : string
    description : string
    icon : string
}
export interface Main{
    temp : number
    feels_like : number
    temp_min : number
    temp_max : number
    pressure : number
    humidity : number
}

export interface Wind{
    speed : number
    deg : number
}

export interface Cloudes{
    all : number

}

export interface Sys {
    type:number
    id : number
    country : string
    sunrise : number
    sunset : number
}