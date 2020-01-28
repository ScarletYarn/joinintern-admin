import { Video } from '@/models/Video'
import { BasePath, GET, POST, Request, RequestParam } from '@/utils/Http'

@BasePath('/video')
export class VideoService {

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
    @RequestParam('url') url: string,
    @RequestParam('videoDescription') videoDescription: string,
    @RequestParam('userId') userId: string
  ): Promise<void> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/update' })
  public static updateVideo(
    @RequestParam('id') id: number,
    @RequestParam('videoDescription') videoDescription: string,
    @RequestParam('user_id') user_id: string
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/check' })
  public static checkVideo(
    @RequestParam('user_id') user_id: string,
    @RequestParam('id') id: number,
    @RequestParam('pass') pass: boolean
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/click' })
  public static clickVideo(
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
