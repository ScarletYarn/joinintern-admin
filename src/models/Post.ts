export class Post {

  public postId: number

  public duration: number

  public location: string

  public distancezb: number

  public distancemh: number

  public postContent: string

  public completed: boolean

  public expiration: string

  public authorId: string

  public startTime: string

  public endTime: string

  constructor(
    postId: number,
    duration: number,
    location: string,
    distancezb: number,
    distancemh: number,
    postContent: string,
    completed: boolean,
    expiration: string,
    authorId: string,
    startTime: string,
    endTime: string
  ) {
    this.postId = postId
    this.duration = duration
    this.location = location
    this.distancezb = distancezb
    this.distancemh = distancemh
    this.postContent = postContent
    this.completed = completed
    this.expiration = expiration
    this.authorId = authorId
    this.startTime = startTime
    this.endTime = endTime
  }
}
