export class VideoHit {

  public videoHitId: number

  public videoHitTime: string

  public hitterId: string

  public videoId: number

  constructor(
    videoHitId: number,
    videoHitTime: string,
    hitterId: string,
    videoId: number
  ) {
    this.videoHitId = videoHitId
    this.videoHitTime = videoHitTime
    this.hitterId = hitterId
    this.videoId = videoId
  }
}
