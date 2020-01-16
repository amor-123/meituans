import  Vue  from  'vue'
import  App  from  './App.vue'
import  router  from  './router'
import  store  from  './store'
import  service  from  "./http/index"
import  api  from  './http/api'


Vue.config.productionTip  =  false
FastClick.attach(document.body);
Vue.prototype.$axios  =  service
Vue.prototype.$api  =  api
new  Vue({    
    router,
        store,
        render:  h  =>  h(App)
}).$mount('#app')