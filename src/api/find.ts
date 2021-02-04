
import { IBannerResponse, IBlockResponse } from '@/types/find'
import Api from './index'

export const getBanner = (): Promise<IBannerResponse> => {
    return Api('/banner?type=1') 
}

export const getHomepage = (): Promise<IBlockResponse> => {
    return Api('/homepage/block/page') 
}