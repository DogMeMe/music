import { IResponse } from '@/types/http'
export interface IRecommend {
    id: number,
    name: string,
    picUrl: string,
    playCount: number
}
export interface IRecommendResponse extends IResponse {
    result: IRecommend[],
    code: number,
    hasTaste: boolean,
    category: number
}
