export class Video {

  public videoId: number

  public videoDescription: string

  public videoPath: string

  public checked: string

  public posterId: string

  public checkerId: string

  public postDate: string

  public checkDate: string

  constructor(
    videoId: number,
    videoDescription: string,
    videoPath: string,
    checked: string,
    posterId: string,
    checkerId: string,
    postDate: string,
    checkDate: string
  ) {
    this.videoId = videoId
    this.videoDescription = videoDescription
    this.videoPath = videoPath
    this.checked = checked
    this.posterId = posterId
    this.checkerId = checkerId
    this.postDate = postDate
    this.checkDate = checkDate
  }
}
