export class Post {

  public postId: number

  public postTitle: string

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

  public postDate: string

  constructor(
    postId: number,
    postTitle: string,
    duration: number,
    location: string,
    distancezb: number,
    distancemh: number,
    postContent: string,
    completed: boolean,
    expiration: string,
    authorId: string,
    startTime: string,
    endTime: string,
    postDate: string
  ) {
    this.postId = postId
    this.postTitle = postTitle
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
    this.postDate = postDate
  }
}
