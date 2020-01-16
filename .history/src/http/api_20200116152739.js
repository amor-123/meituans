import service from './index'

export default {
    getRecommend()  {         return  service.req('/recommend')     },
}