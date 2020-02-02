import  Vue  from  'vue'
import  App  from  './App.vue'
import  router  from  './router'
import  store  from  './store'
import  service  from  "./http/index"
import  api  from  './http/api'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.use(ViewUI);
Vue.config.productionTip  =  false
Vue.prototype.$axios  =  service
Vue.prototype.$api  =  api
new  Vue({    
    router,
        store,
        render:  h  =>  h(App)
}).$mount('#app')