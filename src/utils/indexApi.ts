export interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

export interface numSizeFunc {
  (a:number,b:number):boolean
}