export class VideoClick {

  public videoClickId: number

  public videoClickTime: string

  public clickerId: string

  public videoId: number

  constructor(
    videoClickId: number,
    videoClickTime: string,
    clickerId: string,
    videoId: number
  ) {
    this.videoClickId = videoClickId
    this.videoClickTime = videoClickTime
    this.clickerId = clickerId
    this.videoId = videoId
  }
}
