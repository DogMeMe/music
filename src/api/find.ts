
import { IResponse } from '@/types/http'
import Api from './index'

export const getBanner = (): Promise<IResponse> => {
    return Api('/banner?type=1')
}