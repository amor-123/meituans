import service from './index'

export default {
    position()  {       
        return  service.req('/position')    
    },
    menu()  {       
        return  service.req('/menu')    
    },
}