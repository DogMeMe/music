import { IResponse } from '@/types/http'

export interface IBanner extends IResponse {
    banners: object[],
    code: number
}