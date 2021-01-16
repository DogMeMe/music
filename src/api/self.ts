import { IResponse } from "@/types/http"
import Api from "./index"

export const getPersonalized = (limit:number = 6): Promise<IResponse> => {
    return Api(`/personalized?limit=${limit}`)
}