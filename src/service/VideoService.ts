import { MultipartFile } from '@/helpers/MultipartFile'
import { Video } from '@/models/Video'
import { BasePath, GET, POST, Request, RequestParam } from '@/utils/Http'

@BasePath('/video')
export class VideoService {

  @Request({ method: POST, path: '/query' })
  public static query(
    @RequestParam('videoId') videoId: number
  ): Promise<Video> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/delete' })
  public static delete(
    @RequestParam('uid') uid: string,
    @RequestParam('id') id: number
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/get' })
  public static getAllVideos(): Promise<Array<Video>> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/test' })
  public static testFetch(): Promise<void> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/upload' })
  public static uploadVideo(
    @RequestParam('file') file: MultipartFile,
    @RequestParam('videoTitle') videoTitle: string,
    @RequestParam('videoDescription') videoDescription: string,
    @RequestParam('userId') userId: string
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/update' })
  public static updateVideo(
    @RequestParam('id') id: number,
    @RequestParam('videoTitle') videoTitle: string,
    @RequestParam('videoDescription') videoDescription: string,
    @RequestParam('user_id') user_id: string
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/validate' })
  public static validateVideo(
    @RequestParam('user_id') user_id: string,
    @RequestParam('id') id: number,
    @RequestParam('pass') pass: boolean
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/hit' })
  public static hitVideo(
    @RequestParam('user_id') user_id: string,
    @RequestParam('id') id: number
  ): Promise<void> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/hits' })
  public static getHits(
    @RequestParam('videoId') videoId: number
  ): Promise<number> {
    // @ts-ignore
    return null
  }

}
