export class MyUser {

  public userId: string

  public gender: string

  public level: number

  public major: number

  public cardPhotoPath: string

  public checked: string

  public userIdentity: string

  public nickname: string

  public avatar: string

  public enterpriseTypeId: number

  constructor(
    userId: string,
    gender: string,
    level: number,
    major: number,
    cardPhotoPath: string,
    checked: string,
    userIdentity: string,
    nickname: string,
    avatar: string,
    enterpriseTypeId: number
  ) {
    this.userId = userId
    this.gender = gender
    this.level = level
    this.major = major
    this.cardPhotoPath = cardPhotoPath
    this.checked = checked
    this.userIdentity = userIdentity
    this.nickname = nickname
    this.avatar = avatar
    this.enterpriseTypeId = enterpriseTypeId
  }
}
