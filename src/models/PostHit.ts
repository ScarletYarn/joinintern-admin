export class PostHit {

  public postHitId: number

  public postHitTime: string

  public hitterId: string

  public postId: number

  constructor(
    postHitId: number,
    postHitTime: string,
    hitterId: string,
    postId: number
  ) {
    this.postHitId = postHitId
    this.postHitTime = postHitTime
    this.hitterId = hitterId
    this.postId = postId
  }
}
