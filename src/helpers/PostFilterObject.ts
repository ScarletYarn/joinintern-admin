// class PostFilterObject {
//   public title: string | undefined
//
//   public minDuration: number | undefined
//
//   public maxDuration: number | undefined
//
//   public majors: Array<number> | undefined
//
//   public distancezb: number | undefined
//
//   public distancemh: number | undefined
//
//   constructor(
//     title: string | undefined,
//     minDuration: number | undefined,
//     maxDuration: number | undefined,
//     majors: Array<number> | undefined,
//     distancezb: number | undefined,
//     distancemh: number | undefined
//   ) {
//     this.title = title
//     this.minDuration = minDuration
//     this.maxDuration = maxDuration
//     this.majors = majors
//     this.distancezb = distancezb
//     this.distancemh = distancemh
//   }
// }

export interface PostFilterObject {
  title?: string

  minDuration?: number

  maxDuration?: number

  majors?: number[]

  distancezb?: number

  distancemh?: number
}
