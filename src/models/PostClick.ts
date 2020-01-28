export class PostClick {

  public postClickId: number

  public postClickTime: string

  public clickerId: string

  public postId: number

  constructor(
    postClickId: number,
    postClickTime: string,
    clickerId: string,
    postId: number
  ) {
    this.postClickId = postClickId
    this.postClickTime = postClickTime
    this.clickerId = clickerId
    this.postId = postId
  }
}
