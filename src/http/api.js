import service from './index'

export default {
    position()  {       
        return  service.req('/position')    
    },
}