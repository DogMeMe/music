import http from '../util/http'
import { HttpResponse } from '@/types/http'
import { AxiosResponse } from 'axios'

export interface IBanner {
    banners: object[],
    code: number
}

export const getRecommend = () => {
    return http({
        url: '/personalized'
    })
}

export const getBanner = () => {
    return http.request({
        url: '/banner?type=1'
    })
}