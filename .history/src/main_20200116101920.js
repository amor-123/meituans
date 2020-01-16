import  Vue  from  'vue'
import  App  from  './App.vue'
import  router  from  './router'
import  store  from  './store'
import  Vant  from  'vant';
import  {  Toast  }  from  'vant';
import  'vant/lib/index.css';
import  service  from  "./http/index"
import  FastClick  from  'fastclick'
import  '../public/reset.css'
import  api  from  './http/api'
import  {  Dialog  }  from  'vant';

Vue.config.productionTip  =  false
Vue.use(Toast);
Vue.use(Dialog);
FastClick.attach(document.body);
Vue.prototype.$axios  =  service
Vue.prototype.$api  =  api

new  Vue({    
    router,
        store,
        render:  h  =>  h(App)
}).$mount('#app')