export class Video {

  public videoId: number

  public videoTitle: string

  public videoDescription: string

  public videoPath: string

  public validation: string

  public posterId: string

  public validatorId: string

  public postDate: string

  public validateDate: string

  constructor(
    videoId: number,
    videoTitle: string,
    videoDescription: string,
    videoPath: string,
    validation: string,
    posterId: string,
    validatorId: string,
    postDate: string,
    validateDate: string
  ) {
    this.videoId = videoId
    this.videoTitle = videoTitle
    this.videoDescription = videoDescription
    this.videoPath = videoPath
    this.validation = validation
    this.posterId = posterId
    this.validatorId = validatorId
    this.postDate = postDate
    this.validateDate = validateDate
  }
}
