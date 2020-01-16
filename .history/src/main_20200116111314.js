import  Vue  from  'vue'
import  App  from  './App.vue'
import  router  from  './router'
import  store  from  './store'
import  service  from  "./http/index"
import  api  from  './http/api'
import iView from 'iview';
import 'iview/dist/styles/iview.css'; // 使用 CSS
import '../public/css/reset.css'


Vue.use(iView);
Vue.config.productionTip  =  false
Vue.prototype.$axios  =  service
Vue.prototype.$api  =  api
new  Vue({    
    router,
        store,
        render:  h  =>  h(App)
}).$mount('#app')