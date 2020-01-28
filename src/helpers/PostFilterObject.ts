export class PostFilterObject {
  public minDuration: number

  public maxDuration: number

  public majors: Array<number>

  public distancezb: number

  public distancemh: number

  constructor(
    minDuration: number,
    maxDuration: number,
    majors: Array<number>,
    distancezb: number,
    distancemh: number
  ) {
    this.minDuration = minDuration
    this.maxDuration = maxDuration
    this.majors = majors
    this.distancezb = distancezb
    this.distancemh = distancemh
  }
}
