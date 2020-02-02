export class MyUser {

  public userId: string

  public gender: string

  public level: number

  public major: number

  public cardPhotoPath: string

  public validation: string

  public userIdentity: string

  public nickname: string

  public avatar: string

  public enterpriseTypeId: number

  public studentId: string

  constructor(
    userId: string,
    gender: string,
    level: number,
    major: number,
    cardPhotoPath: string,
    validation: string,
    userIdentity: string,
    nickname: string,
    avatar: string,
    enterpriseTypeId: number,
    studentId: string
  ) {
    this.userId = userId
    this.gender = gender
    this.level = level
    this.major = major
    this.cardPhotoPath = cardPhotoPath
    this.validation = validation
    this.userIdentity = userIdentity
    this.nickname = nickname
    this.avatar = avatar
    this.enterpriseTypeId = enterpriseTypeId
    this.studentId = studentId
  }
}
