export interface dati {
    count: number
    next: any
    previous: any
    results: Result[]
  }
  
  export interface Result {
    name: string
    url: string
  }