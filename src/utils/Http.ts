import { service } from '@/service/request'
import 'reflect-metadata'
import { MultipartFile } from '@/helpers/MultipartFile'

export const POST = 0

export const GET = 1

const paramMetadataKey = Symbol('param')
const basePath = Symbol('basePath')

export function Request(arg: { method: number; path: string }) {
  return function(
    target: any,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<any>
  ) {
    let method = descriptor.value
    descriptor.value = function() {
      method.apply(this, arguments)
      let base = Reflect.getOwnMetadata(basePath, target)
      let requestPath = arg.path
      if (base) requestPath = base + arg.path
      let data: any = {},
        body: any = null
      let ex = existsFile(arguments)
      if (ex) body = new FormData()
      let keys: Array<string> = Reflect.getOwnMetadata(
        paramMetadataKey,
        target,
        propertyName
      )
      if (keys) {
        for (let i = 0; i < keys.length; i++) {
          if (ex) body.append(keys[i], arguments[i])
          else data[keys[i]] = arguments[i]
        }
        if (!ex && keys.length < arguments.length)
          body = arguments[arguments.length - 1]
      }
      if (ex) return service.post(requestPath, body)
      if (arg.method === POST)
        return service.post(requestPath, body, { params: data })
      else return service.get(requestPath, { params: data })
    }
  }
}

export function RequestParam(name: string) {
  return function(
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number
  ) {
    let existingParams: Array<string> =
      Reflect.getOwnMetadata(paramMetadataKey, target, propertyKey) || []
    existingParams[parameterIndex] = name
    Reflect.defineMetadata(
      paramMetadataKey,
      existingParams,
      target,
      propertyKey
    )
  }
}

export function BasePath(url: string) {
  return function(constructor: Function) {
    Reflect.defineMetadata(basePath, url, constructor)
  }
}

function existsFile(arg: IArguments) {
  for (let item of arg) {
    if (item instanceof File) return true
  }
}
