import { Label } from '@/models/Label'
import { Major } from '@/models/Major'
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

  @Request({ method: POST, path: '/query' })
  public static query(
    @RequestParam('id') id: number
  ): Promise<Post> {
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

  @Request({ method: POST, path: '/create' })
  public static createPost(
    @RequestParam('postTitle') postTitle: string,
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

  @Request({ method: POST, path: '/majors' })
  public static getMajors(
    @RequestParam('id') id: number
  ): Promise<Array<Major>> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/labels' })
  public static getLabels(
    @RequestParam('id') id: number
  ): Promise<Array<Label>> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/label/add' })
  public static addLabel(
    @RequestParam('labelId') labelId: number,
    @RequestParam('postId') postId: number
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/major/add' })
  public static addMajor(
    @RequestParam('postId') postId: number,
    @RequestParam('majorId') majorId: number
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/update' })
  public static updatePost(
    @RequestParam('postId') postId: number,
    @RequestParam('openId') openId: string,
    @RequestParam('postTitle') postTitle: string,
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
  public static completePost(
    @RequestParam('id') id: number
  ): Promise<boolean> {
    // @ts-ignore
    return null
  }

  @Request({ method: POST, path: '/hit' })
  public static hitPost(
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
