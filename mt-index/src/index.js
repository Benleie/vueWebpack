import Vue from 'vue'
import App from './APP.vue'
// import App from './test.vue'
import ElementUI from 'element-ui';
import '@scss/index/index.scss'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

const root = document.createElement('div');
document.body.appendChild(root)

new Vue({
	render: (h) => h(App)
}).$mount(root)