import { PostFilterObject } from '@/helpers/PostFilterObject'
import { Post } from '@/models/Post'
import { BasePath, GET, POST, Request, RequestParam } from '@/utils/Http'

@BasePath('/post')
export class PostService {

  @Request({ method: POST, path: '/get' })
  public static getAllPost(): Promise<Array<Post>> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/create' })
  public static createPost(
    @RequestParam('duration') duration: number,
    @RequestParam('location') location: string,
    @RequestParam('distancezb') distancezb: number,
    @RequestParam('distancemh') distancemh: number,
    @RequestParam('postContent') postContent: string,
    @RequestParam('expiration') expiration: string,
    @RequestParam('authorId') authorId: string,
    @RequestParam('startTime') startTime: string,
    @RequestParam('endTime') endTime: string
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/filter' })
  public static filter(
    PostFilterObject: PostFilterObject
  ): Promise<Array<Post>> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/update' })
  public static updatePost(
    @RequestParam('postId') postId: number,
    @RequestParam('openId') openId: string,
    @RequestParam('duration') duration: number,
    @RequestParam('location') location: string,
    @RequestParam('distancezb') distancezb: number,
    @RequestParam('distancemh') distancemh: number,
    @RequestParam('postContent') postContent: string,
    @RequestParam('expiration') expiration: string,
    @RequestParam('startTime') startTime: string,
    @RequestParam('endTime') endTime: string
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/complete' })
  public static completePost(): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/click' })
  public static clickPost(
    @RequestParam('user_id') user_id: string,
    @RequestParam('postId') postId: number
  ): Promise<void> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/hits' })
  public static getHits(
    @RequestParam('postId') postId: number
  ): Promise<number> {
    // @ts-ignore
    return null
  }

}
