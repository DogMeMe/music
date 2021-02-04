import { IRecommendResponse } from "@/types/self"
import Api from "./index"

export const getPersonalized = (limit:number = 30): Promise<IRecommendResponse> => {
    return Api(`/personalized?limit=${limit}`) as Promise<IRecommendResponse>
}