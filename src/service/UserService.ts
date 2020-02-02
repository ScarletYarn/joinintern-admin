import { UserEssential } from '@/helpers/UserEssential'
import { MyUser } from '@/models/MyUser'
import { BasePath, GET, POST, Request, RequestParam } from '@/utils/Http'

@BasePath('/user')
export class UserService {

  @Request({ method: POST, path: '/get' })
  public static getAllUser(): Promise<Array<MyUser>> {
    // @ts-ignore
    return null
  }

  @Request({ method: GET, path: '/query' })
  public static query(
    @RequestParam('user_id') user_id: string
  ): Promise<UserEssential> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/find' })
  public static find(
    @RequestParam('uid') uid: string
  ): Promise<MyUser> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/super/login' })
  public static superLogin(
    @RequestParam('uid') uid: string,
    @RequestParam('password') password: string
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/admin/get' })
  public static getAdmin(): Promise<Array<MyUser>> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/login' })
  public static login(
    @RequestParam('code') code: string,
    @RequestParam('nickname') nickname: string,
    @RequestParam('avatar') avatar: string
  ): Promise<string> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/register' })
  public static register(
    @RequestParam('code') code: string,
    @RequestParam('stuId') stuId: string,
    @RequestParam('gender') gender: string,
    @RequestParam('level') level: number,
    @RequestParam('major') major: number,
    @RequestParam('cardPhotoPath') cardPhotoPath: string,
    @RequestParam('nickname') nickname: string,
    @RequestParam('avatar') avatar: string,
    @RequestParam('enterpriseTypeId') enterpriseTypeId: number
  ): Promise<string> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/validate' })
  public static validateUser(
    @RequestParam('id') id: string,
    @RequestParam('op') op: string
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/update' })
  public static updateInformation(
    @RequestParam('gender') gender: string,
    @RequestParam('level') level: number,
    @RequestParam('major') major: number,
    @RequestParam('enterpriseTypeId') enterpriseTypeId: number,
    @RequestParam('id') id: string
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

}
