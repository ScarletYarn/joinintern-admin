export class UserEssential {
  public userId: string

  public nickname: string

  public avatar: string

  constructor(userId: string, nickname: string, avatar: string) {
    this.userId = userId
    this.nickname = nickname
    this.avatar = avatar
  }
}
