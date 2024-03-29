export interface mapinfo {
    status: number
    data: Data
  }
  
  export interface Data {
    uuid: string
    displayName: string
    narrativeDescription: string
    tacticalDescription: string
    coordinates: string
    displayIcon: string
    listViewIcon: string
    splash: string
    assetPath: string
    mapUrl: string
    xMultiplier: number
    yMultiplier: number
    xScalarToAdd: number
    yScalarToAdd: number
    callouts: Callout[]
  }
  
  export interface Callout {
    regionName: string
    superRegionName: string
    location: Location
  }
  
  export interface Location {
    x: number
    y: number
  }