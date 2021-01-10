import { AxiosPromise } from 'axios'
import http from '../util/http'

export const getRecommend = (): AxiosPromise => {
    return http({
        url: '/personalized'
    })
}

export const getBanner = (): AxiosPromise => {
    return http({
        url: '/banner?type=1'
    })
}