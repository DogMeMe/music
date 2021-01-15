import { IResponse } from '@/types/http'
export interface IBanner {
    pic: string,
    titleColor: string,
    url: string,
    typeTitle: string
}
export interface IBannerResponse extends IResponse {
    banners: IBanner[],
    code: number
}
