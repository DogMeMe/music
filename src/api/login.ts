import http from '../util/http'

export const phoneLogin = () => {
    return http({
        url: '/login/cellphone'
    })
}